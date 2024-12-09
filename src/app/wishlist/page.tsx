'use client'; // Mark as Client Component

import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'; // Import React Icons

const Page = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle caret icons
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
      <div className="flex flex-col justify-start items-start">
        <div>
          <p className="text-sm leading-4 text-gray-600 dark:text-white">Home</p>
        </div>
        <div className="mt-3">
          <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white">Favourites</h1>
        </div>
        <div className="mt-4">
          <p className="text-2xl tracking-tight leading-6 text-gray-600 dark:text-white">03 items</p>
        </div>
        <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
          {/* Image 1 */}
          <div className="flex flex-col">
            <div className="relative">
              <Image
                src="/slider/1.jpg"
                alt="Image 1"
                width={600}
                height={400}
                layout="responsive"
                className="w-full h-full object-cover"
              />
              <button
                aria-label="close"
                className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
              >
                <AiOutlineClose className="text-xl" />
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Sofa set</p>
              <button
                aria-label="show menu"
                onClick={toggleMenu}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
              >
                {isOpen ? <AiOutlineCaretUp className="fill-stroke" /> : <AiOutlineCaretDown className="hidden fill-stroke" />}
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col">
            <div className="relative">
              <Image
                src="/slider/1.jpg"
                alt="Image 2"
                width={600}
                height={400}
                layout="responsive"
                className="w-full h-full object-cover"
              />
              <button
                aria-label="close"
                className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
              >
                <AiOutlineClose className="text-xl" />
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Sofa set</p>
              <button
                aria-label="show menu"
                onClick={toggleMenu}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
              >
                {isOpen ? <AiOutlineCaretUp className="fill-stroke" /> : <AiOutlineCaretDown className="hidden fill-stroke" />}
              </button>
            </div>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col">
            <div className="relative">
              <Image
                src="/slider/1.jpg"
                alt="Image 3"
                width={600}
                height={400}
                layout="responsive"
                className="w-full h-full object-cover"
              />
              <button
                aria-label="close"
                className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
              >
                <AiOutlineClose className="text-xl" />
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Sofa Set</p>
              <button
                aria-label="show menu"
                onClick={toggleMenu}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
              >
                {isOpen ? <AiOutlineCaretUp className="fill-stroke" /> : <AiOutlineCaretDown className="hidden fill-stroke" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
