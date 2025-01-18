// 'use client';


// import Icons from "../../components/Icons";

// import Product from "../../components/productpage/Product";
// import { productItems } from '../../data/pageproduct'; // Adjust the path to your products data
// import { notFound } from 'next/navigation'; // For handling non-existent products
// import Image from 'next/image';
// import Description from '@/app/components/productpage/Description';
// import React, { useState } from 'react';

// interface ProductPageProps {
//   params: { id: string };
// }

// const ProductPage = ({ params }: ProductPageProps) => {
//   const productId = parseInt(params.id, 10); // Get the product ID from params
//   const product = productItems.find((prod) => prod.id === productId); // Find the product by ID

//   if (!product) {
//     notFound(); // Show the 404 page if product is not found
//   }

//   // Set the first image of the product as the current image by default (main image)
//   const [currentImage, setCurrentImage] = useState(product?.image || ''); // product.image is the main image

//   // Function to change the image
//   const changeImage = (src: string) => {
//     setCurrentImage(src);
//   };

//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row -mx-4">
//           {/* Product Image (Main Image) */}
//           <div className="w-full md:w-1/2 px-4 mb-8">
//             <Image
//               src={currentImage} // Use the current image state for the main image
//               alt={product?.name || 'Product'}
//               className="w-full h-auto rounded-lg shadow-md mb-4"
//               width={720} // Adjusted width
//               height={180} // Adjusted height
//             />
//             <div className="flex gap-4 py-4 justify-center overflow-x-auto">
//               {/* Dynamically map over the rest of the images (thumbnails) */}
//               {product?.images.map((src, index) => (
//                 <Image
//                   key={index}
//                   src={src}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="w-12 h-12 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
//                   width={150} // Adjusted width for thumbnails
//                   height={150} // Adjusted height for thumbnails
//                   onClick={() => changeImage(src)} // Change the main image on click
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="md:flex-1 px-4">
//             <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
//             <p className="text-gray-600 my-4">{product?.description}</p>

//             <div className="text-sm font-semibold text-gray-700 mb-2">
//               Old Price: <span className="text-gray-500">${product?.oldPrice}</span>
//             </div>
//             <div className="text-lg font-semibold text-gray-700 mb-2">
//               Price: <span className="text-blue-500">${product?.price}</span>
//             </div>

//             <div className="mb-4">
//               <span className="font-bold text-gray-700">Availability: </span>
//               <span className="text-blue-600 font-bold">{product?.availability}</span>
//             </div>

//             {/* Product Rating */}
//             <div className="mt-6">
//               <span className="font-bold text-gray-700">Ratings:</span>
//               <div className="flex items-center">
//                 <span className="text-yellow-500">⭐⭐⭐⭐⭐</span> {/* You can replace it with dynamic ratings */}
//                 <span className="ml-2 text-gray-500">(200 reviews)</span>
//               </div>
//             </div>

//             {/* Select Color */}
//             <div className="mb-4">
//               <span className="font-bold text-gray-700">Select Color:</span>
//               <div className="flex items-center mt-2">
//                 <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
//                 <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
//                 <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
//                 <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-full font-bold">
//               Add to Cart
//             </button>

//             {/* Product Description */}
//             <div className="mt-6">
//               <span className="font-bold text-gray-700">Product Description:</span>
//               <p className="text-gray-600 text-sm mt-2">
//               Discover our exquisite range of glassware and tableware, thoughtfully designed to elevate your dining experience. From elegant glass cups to versatile plates, sturdy chairs, and finely crafted spoons and forks, our collection combines style, functionality, and durability. Perfect for everyday use or special occasions, each piece is meticulously crafted to add a touch of sophistication to your table setting. With timeless designs and premium materials, our products are built to last and cater to all your dining needs. Explore now to create a dining experience that is both practical and elegant
//               </p>
//             </div>

//             {/* Add to Wishlist Button */}
//             <button className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-full font-bold mt-4">
//               Add to Wishlist
//             </button>

//             {/* Product Specifications */}
//             <div className="mt-6">
//               <span className="font-bold text-gray-700">Product Specifications:</span>
//               <ul className="list-disc pl-5">
//                 <li>{product.material}</li>
//                 <li>{product.sizeAvailability.join(" , ")}</li>
//                 <li>{product.rating}</li>
//                 <li>{product.category}</li>
               
//               </ul>
//             </div>

//             {/* Availability Alert (if out of stock) */}
//             {product?.availability === 'Out of Stock' && (
//               <div className="bg-red-100 text-red-700 p-4 rounded-lg mt-4">
//                 This product is currently out of stock. Sign up to get notified when it&apos;s back!
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       {/* <div className="mt-8">
//         <h3 className="text-xl font-semibold text-gray-700">Related Products</h3>
//         <div className="flex gap-4 mt-4"> */}
//           {/* Example of a related product */}
//           {/* <div className="w-1/4">
//             <Image src="/products/product-cover-1.png" alt="Related Product" width={300} height={300} />
//             <p className="text-gray-600">Product Name</p>
//           </div> */}
//           {/* Add more related products */}
//         {/* </div>
//       </div> */}
// <Description />
//       <Product />
//       <Icons />
//     </div>
//   );
// };

// export default ProductPage;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Icons from '../../components/Icons';
import Product from '../../components/productpage/Product';
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
      <Product />
      <Icons />
    </div>
  );
};

export default ProductPage;
