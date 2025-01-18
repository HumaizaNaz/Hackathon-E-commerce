// 'use client';


// import Icons from "../../components/Icons";

// import Product from "../../components/productpage/Product";
// import { products } from '../../data/products'; // Adjust the path to your products data
// import { notFound } from 'next/navigation'; // For handling non-existent products
// import Image from 'next/image';
// import Description from '@/app/components/productpage/Description';
// import React, { useState } from 'react';

// interface ProductPageProps {
//   params: { id: string };
// }

// const ProductPage = ({ params }: ProductPageProps) => {
//   const productId = parseInt(params.id, 10); // Get the product ID from params
//   const product = products.find((prod) => prod.id === productId); // Find the product by ID

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
//               Discover our collection of stylish and versatile dresses designed to suit every occasion. Crafted from high-quality cotton, these dresses offer a perfect blend of comfort and elegance. Whether you&apos;re looking for something casual, sophisticated, or eye-catching, we have a wide range of colors and sizes to meet your needs. With a focus on durability and timeless design, our dresses are perfect for any season and can be dressed up or down. Shop now to find the ideal piece that complements your unique style.
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
