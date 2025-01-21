"use client"

import { useEffect, useState } from "react"
import { useParams, notFound, useRouter } from "next/navigation"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import Icons from "../../components/Icons"
import Product from "../../components/productpage/Product"
import Description from "@/app/components/productpage/Description"
import { FaEye } from "react-icons/fa6"
import { CiHeart } from "react-icons/ci"
import Tabs from "@/app/components/productpage/Tabs"

interface Product {
  id: string
  name: string
  description: string
  oldPrice: string
  price: string
  image: string
  images: string[]
  colors?: string[]
  sizeAvailability?: string[]
  rating?: number
  material?: string
  category?: string
  availability?: string
}

async function getData(): Promise<Product[]> {
  try {
    const fetchData = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        category,
        price,
        oldPrice,
        availability,
        "image": image.asset->url,
        "images": images[].asset->url,
        colors,
        sizeAvailability,
        rating,
        material
      }
    `)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return fetchData.map((prod: any) => ({
      id: prod._id,
      name: prod.name,
      description: prod.description,
      oldPrice: prod.oldPrice,
      price: prod.price,
      image: prod.image,
      images: prod.images || [],
      colors: prod.colors || [],
      sizeAvailability: prod.sizeAvailability || [],
      rating: prod.rating || 0,
      material: prod.material || "",
      category: prod.category || "",
      availability: prod.availability || "Out of Stock",
    }))
  } catch (err) {
    console.error("Error fetching data:", err)
    return []
  }
}

const ProductPage = () => {
  const params = useParams()
  const productId = params?.id as string
  const router = useRouter()

  const [productItems, setProductItems] = useState<Product[]>([])
  const [product, setProduct] = useState<Product | null>(null)
  const [currentImage, setCurrentImage] = useState("")

  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)
  const [message, setMessage] = useState<string>("")
  const [progress, setProgress] = useState<number>(100)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData()
      setProductItems(products)
      const foundProduct = products.find((prod) => prod.id === productId)
      if (foundProduct) {
        setProduct(foundProduct)
        setCurrentImage(foundProduct.image)
      } else {
        notFound()
      }
    }
    fetchData()
  }, [productId])

  useEffect(() => {
    if (product) {
      const sortedRelatedProducts = productItems
        .filter((relatedProduct) => relatedProduct.category === product.category && relatedProduct.id !== product.id)
        .slice(0, 4)

      setRelatedProducts(sortedRelatedProducts)
    }
  }, [product, productItems])

  const handleAddToCart = async (item: Product, isBuyNow: boolean) => {
    if (item.sizeAvailability?.length && !selectedSize) {
      setError("Please select a size!")
      return
    }
    if (quantity > 10) {
      setError("Not enough stock available.")
      return
    }
    setError("")

    const cartItem = {
      productId: item.id,
      quantity,
      size: item.sizeAvailability?.length ? selectedSize : undefined,
      name: item.name,
      price: item.price,
      imageUrl: item.image,
    }

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
        body: JSON.stringify(cartItem),
      })

      if (!response.ok) {
        throw new Error("Failed to add item to cart")
      }

      setMessage("Successfully added to cart!")
      setProgress(100)
      setLoading(true)

      setTimeout(() => {
        const progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev <= 0) {
              clearInterval(progressInterval)
              setMessage("")
              setLoading(false)
              if (isBuyNow) {
                router.push("/cart")
              }
              return 0
            }
            return prev - 5
          })
        }, 50)
      }, 300)
    } catch (error) {
      console.error("Error adding to cart:", error)
      setError("Failed to add item to cart. Please try again.")
    }
  }

  const handleAddToWishlist = async () => {
    if (!product) return

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.image,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to add item to wishlist")
      }

      setMessage("Successfully added to wishlist!")
      setProgress(100)
      setLoading(true)

      setTimeout(() => {
        const progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev <= 0) {
              clearInterval(progressInterval)
              setMessage("")
              setLoading(false)
              return 0
            }
            return prev - 5
          })
        }, 50)
      }, 300)
    } catch (error) {
      console.error("Error adding to wishlist:", error)
      setError("Failed to add item to wishlist. Please try again.")
    }
  }

  if (!product) return <div>Loading...</div>

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
              src={currentImage || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="rounded-lg shadow-md mb-4 object-cover w-full h-auto"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {product.images.map((src, index) => (
                <Image
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="cursor-pointer rounded-md border border-gray-300 shadow-sm opacity-70 hover:opacity-100 object-cover"
                  onClick={() => setCurrentImage(src)}
                />
              ))}
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            {product.rating !== undefined && (
              <div className="mb-2">
                {Array.from({ length: product.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-3xl">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - product.rating }, (_, i) => (
                  <span key={i} className="text-gray-300">
                    ★
                  </span>
                ))}
                <span className="font-bold text-xl text-gray-500">10 Reviews </span>
              </div>
            )}
            <p className="text-gray-600 my-4">{product.description}</p>
            <div className="text-base font-semibold text-gray-700 mb-2">
              Old Price: <span className="text-gray-400">${product.oldPrice}</span>
            </div>
            <div className="text-lg font-bold text-gray-700 mb-2">
              Price: <span className="text-blue-500">${product.price}</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Availability: </span>
              <span className={`font-bold ${product.availability === "In Stock" ? "text-green-500" : "text-red-500"}`}>
                {product.availability}
              </span>
            </div>

            {/* Additional Product Details */}
            <div className="mb-6">
              {product.colors && product.colors.length > 0 && (
                <div className="mb-2">
                  <span className="font-bold text-gray-700">Colors: </span>
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="inline-block w-6 h-6 rounded-full border border-gray-400 mr-2"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></span>
                  ))}
                </div>
              )}

              {product.sizeAvailability && product.sizeAvailability.length > 0 && (
                <div className="mb-2">
                  <span className="font-bold text-gray-700">Sizes: </span>
                  {product.sizeAvailability.map((size, index) => (
                    <button
                      key={index}
                      className={`mr-2 px-2 py-1 border rounded ${
                        selectedSize === size ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}

              {product.material && (
                <div className="mb-2">
                  <span className="font-bold text-gray-700">Material: </span>
                  {product.material}
                </div>
              )}

              {product.category && (
                <div className="mb-2">
                  <span className="font-bold text-gray-700">Category: </span>
                  {product.category}
                </div>
              )}
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-2">Quantity:</span>
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 px-2 py-1 border rounded"
              />
            </div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button
              onClick={() => handleAddToCart(product, false)}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleAddToCart(product, true)}
              className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ml-4"
              aria-label={`Buy ${product.name} now`}
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToWishlist}
              className="py-2 px-3 text-xl font-bold"
              aria-label={`Add ${product.name} to wishlist`}
            >
              <CiHeart />
            </button>
            <button className="py-2 px-3 text-xl font-bold">
              <FaEye />
            </button>
          </div>
        </div>
        <Tabs />
        <Description />
        <Icons />
        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="border rounded-lg shadow-lg p-4">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={250}
                    height={350}
                    className="object-cover w-full h-72 rounded-lg mb-4"
                  />
                  <h3 className="text-sm font-semibold text-gray-800">{relatedProduct.name}</h3>
                  <div className="text-lg font-bold text-blue-500">${relatedProduct.price}</div>
                  <button
                    onClick={() => handleAddToCart(relatedProduct, false)}
                    className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                    aria-label={`Add ${relatedProduct.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Message and Progress Bar */}
        {message && (
          <div className="fixed top-16 right-4 bg-green-600 text-white p-4 rounded-lg shadow-md max-w-xs w-full z-50">
            <p>{message}</p>
            <div
              className="w-full h-1 bg-green-400 mt-2"
              style={{ width: `${progress}%`, transition: "width 0.5s ease-out" }}
            />
          </div>
        )}

        {/* Loader Spinner */}
        {loading && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage

