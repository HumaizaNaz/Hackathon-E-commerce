import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Montserrat } from 'next/font/google';

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Heading = () => {
  return (
    <div className={`${monterrat.className} bg-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <p className="mx-auto -mt-4 max-w-2xl mb-14 text-2xl tracking-tight  sm:mt-6 text-[#737373] font-bold text-[16px] ">
          PRICING
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-5xl tracking-tight sm:text-7xl text-[40px] md:text-[58px] font-bold mt-3 text-[#252B42]">
          <span className="inline-block">Simple Pricing</span>
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:gap-x-4 gap-y-4 sm:gap-y-0 sm:mt-10">
          <Link 
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 text-black hover:bg-gray-200 transition duration-200 ease-in-out"
            href="/"
          >
            <span className="ml-3">Home</span>
          </Link>
          
          <IoIosArrowForward className='text-black text-xl' />

          <button 
            className="group inline-flex items-center justify-center py-2 px-4 focus:outline-none text-lg rounded-full text-slate-800 hover:bg-gray-200 transition duration-200 ease-in-out"
            type="button"
          >
            <span className="ml-3">Pricing</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
