'use client'
import React, { useState } from 'react';
import Image from 'next/image';  // Import Image component from Next.js

const PagesProduts = () => {
  // State to store the current main image
  const [currentImage, setCurrentImage] = useState('/slider/1.jpg');

  // Function to change the image
  const changeImage = (src: string) => {
    setCurrentImage(src);
  };

  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Left Container (Product Image and Buttons) */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <Image 
                src={currentImage} 
                alt="Product" 
                className="w-full h-auto rounded-lg shadow-md mb-4" 
                width={1080} 
                height={720} 
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                <Image 
                  src="/slider/4.png" 
                  alt="Thumbnail 3" 
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300" 
                  width={100} 
                  height={100} 
                  onClick={() => changeImage('/slider/4.png')} 
                />
                <Image 
                  src="/slider/5.png" 
                  alt="Thumbnail 4" 
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300" 
                  width={100} 
                  height={100} 
                  onClick={() => changeImage('/slider/5.png')} 
                />
                <Image 
                  src="/slider/1.jpg" 
                  alt="Thumbnail 4" 
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300" 
                  width={100} 
                  height={100} 
                  onClick={() => changeImage('/slider/1.jpg')} 
                />
              </div>
            </div>

            {/* Right Container (Product Details and Options) */}
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Floating Phone </h2>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Price:</span>
                  <span className="text-gray-600 font-bold">$29.99</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Availability:</span>
                  <span className="text-blue-600 font-bold">In Stock</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700">Select Color:</span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                </div>
              </div>
             
              <div>
                <span className="font-bold text-gray-700">Product Description:</span>
                <p className="text-gray-600 text-sm mt-2">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <button className="w-full bg-[#23A6F0] mt-20 text-white py-2 px-4 rounded-full font-bold">Add to Cart</button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesProduts;
