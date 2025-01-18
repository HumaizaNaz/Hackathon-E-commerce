/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Icons from '../../components/Icons';
import Product2 from '../../components/productpage/Product';
import Description from '@/app/components/productpage/Description';
import { FaEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Tabs from '@/app/components/productpage/Tabs';
interface Product {
  id: string;
  name: string;
  description: string;
  oldPrice: string;
  price: string;
  image: string;
  images: string[];
  colors?: string[];
  sizeAvailability?: string[];
  rating?: number;
  material?: string;
  category?: string;
  availability?: string;
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
    `);
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
      material: prod.material || '',
      category: prod.category || '',
      availability: prod.availability || 'Out of Stock',
    }));
  } catch (err) {
    console.error('Error fetching data:', err);
    return [];
  }
}

const ProductPage = () => {
  const params = useParams();
  const productId = params?.id;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productItems, setProductItems] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      setProductItems(products);
      const foundProduct = products.find((prod) => prod.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setCurrentImage(foundProduct.image);
      } else notFound();
    };

    fetchData();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
  <Image
    src={currentImage}
    alt={product.name}
    width={600}
    height={600}
    className="rounded-lg shadow-md mb-4 object-cover w-full h-auto"
  />
  <div className="flex gap-4 py-4 justify-center overflow-x-auto">
    {product.images.map((src, index) => (
      <Image
        key={index}
        src={src}
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
                    <span key={i} className="text-yellow-500 text-3xl">★</span>
                  ))}
                  {Array.from({ length: 5 - product.rating }, (_, i) => (
                    <span key={i} className="text-gray-300">★</span>
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
              <span className={`font-bold ${product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
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
    {product.sizeAvailability.join(', ')}
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

            <div className="flex items-center space-x-4">
  <button className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-full font-bold">
    Add to Cart
  </button>
  <button className="py-2 px-3 text-xl font-bold">
    <CiHeart />
  </button>
  <button className="py-2 px-3 text-xl font-bold">
    <FaEye />
  </button>
</div>
          </div>
        </div>
      </div>
      <Tabs/>
      <Description />
      <Product2 />
      <Icons />
    </div>
  );
};

export default ProductPage;
