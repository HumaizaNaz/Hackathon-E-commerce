import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { Montserrat } from 'next/font/google';
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Card = () => {
  return (
    <div className={`${monterrat.className} bg-white pt-5`} id="pricing">
      {/* Header Section */}
      <header className="text-center py-10">
        <h4 className="text-lg mb-[60] font-bold">VISIT OUR OFFICE</h4>
        <h1 className="text-4xl font-bold">We help small businesses with big ideas</h1>
      </header>

      <div className="mx-auto pb-20 bg-white mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* First Product */}
          <div className="ring-1 ring-gray-300 rounded-3xl p-8 xl:p-10 min-h-[400px]">
            <div className="flex items-center justify-center gap-x-4">
              <IoCallOutline className="text-blue-500 text-8xl font-bold" />
            </div>
            <p className="mt-4 text-base font-bold leading-6 text-black">georgia.young@example.com</p>
            <p className="mt-4 text-sm font-bold leading-6 text-black">georgia.young@example.com</p>
            <p className="mt-4 text-base font-bold leading-6 text-black">Get support</p>
            <a
              href="/order"
              aria-describedby="product1"
              className="border-2 border-blue-500 text-blue-500 hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Submit Request
            </a>
          </div>

          {/* Second Product - Changed to #252B42 theme */}
          <div className="ring-1 ring-gray-300 bg-[#252B42] rounded-3xl p-8 xl:p-10 min-h-[400px]">
            <div className="flex items-center justify-center gap-x-4">
              <FaLocationDot className="text-blue-500 text-8xl font-bold" />
            </div>
            <p className="mt-4 text-base font-bold leading-6 text-white">georgia.young@example.com</p>
            <p className="mt-4 text-sm font-bold leading-6 text-white">georgia.young@example.com</p>
            <p className="mt-4 text-base font-bold leading-6 text-white">Get support</p>
            <a
              href="/order"
              aria-describedby="product1"
              className="border-2 border-blue-500 text-blue-500 hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Submit Request
            </a>
          </div>

          {/* Third Product */}
          <div className="ring-1 ring-gray-300 rounded-3xl p-8 xl:p-10 min-h-[400px]">
            <div className="flex items-center justify-center gap-x-4">
              <FaEnvelope className="text-blue-500 text-8xl font-bold" />
            </div>
            <p className="mt-4 text-base font-bold leading-6 text-black">georgia.young@example.com</p>
            <p className="mt-4 text-sm font-bold leading-6 text-black">georgia.young@example.com</p>
            <p className="mt-4 text-base font-bold leading-6 text-black">Get support</p>
            <a
              href="/order"
              aria-describedby="product1"
              className="border-2 border-blue-500 text-blue-500 hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Submit Request
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-10">
        <p className="text-lg">We can&apos;t wait to meet you</p>
        <h2 className="text-2xl font-bold mt-2">Let&apos;s Talk</h2>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mt-4">
          Try it now
        </button>
      </footer>
    </div>
  );
}

export default Card;
