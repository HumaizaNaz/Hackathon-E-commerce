"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"

interface Product {
  id: string
  name: string
  description: string
  oldPrice: string
  price: string
  image: string
  colors?: string[]
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false)

  // Check if the product is already in the wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await fetch("/api/wishlist", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.API_SECRET_KEY}`, // Use the secret key for authorization
        },
      })
      const wishlist = await response.json()

      // Check if this product is in the wishlist
      const isProductInWishlist = wishlist.some((item: { productId: string }) => item.productId === product.id)
      setIsInWishlist(isProductInWishlist)
    }

    fetchWishlist()
  }, [product.id])

  // Handle adding/removing product to/from wishlist
  const handleWishlistClick = async (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent the event from bubbling up to the Link component
    if (isInWishlist) {
      // Remove from wishlist
      const response = await fetch("/api/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
        },
        body: JSON.stringify({ productId: product.id }),
      })
      const updatedWishlist = await response.json()
      setIsInWishlist(updatedWishlist.some((item: { productId: string }) => item.productId === product.id))
    } else {
      // Add to wishlist
      const wishlistItem = {
        productId: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.image,
      }

      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
        },
        body: JSON.stringify(wishlistItem),
      })

      const updatedWishlist = await response.json()
      setIsInWishlist(updatedWishlist.some((item: { productId: string }) => item.productId === product.id))
    }
  }

  return (
    <div className="group cursor-pointer mt-6 mb-6 px-2 sm:px-4 md:px-6 lg:px-4 xl:px-6 w-full">
      <div className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-80 lg:h-74">
        <Image
          src={product.image || "/default-image.jpg"}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-200"
        />
        {/* Heart icon */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-50 ${isInWishlist ? "text-red-500" : "text-gray-500"} transition-colors`}
        >
          <FaHeart size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
      <Link href={`/grocery/${product.id}`}>
        <div className="mt-4 space-y-2">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-black truncate text-center">{product.name}</h3>
          <h5 className="text-xs sm:text-sm md:text-md font-medium text-gray-500 truncate text-center">
            {product.description || "No description available"}
          </h5>
          <div className="flex justify-center gap-3">
            <p className="text-xs sm:text-sm line-through text-gray-400">{product.oldPrice}</p>
            <p className="text-xs sm:text-sm font-bold text-green-600">{product.price}</p>
          </div>
          {Array.isArray(product.colors) && product.colors.length > 0 ? (
            <div className="flex justify-center space-x-2">
              <span className="font-bold text-gray-700 text-xs sm:text-sm">Colors: </span>
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="inline-block w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-400"
                  style={{ backgroundColor: color }}
                  title={color}
                ></span>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-xs sm:text-sm">No colors available</div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ProductCard

