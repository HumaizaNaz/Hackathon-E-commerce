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
    <div className={`${monterrat.className} bg-white`}> {/* Added monterrat.className here */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <p className="mx-auto -mt-4 max-w-2xl mb-14 text-2xl tracking-tight text-slate-700 sm:mt-6">
          PRICING
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          <span className="inline-block">Simple Pricing</span>
        </h1>

        <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
          <Link 
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 text-black f"
            href="/"
          >
            <span className="ml-3">Home</span>
          </Link>
          <IoIosArrowForward className='group inline-flex justify-center text-black text-xl' />
          <button 
            className="group inline-flex items-center justify-center py-2 px-4 focus:outline-none text-lg text-slate-800"
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
