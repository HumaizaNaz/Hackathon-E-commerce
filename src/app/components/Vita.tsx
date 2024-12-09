import React from 'react';

import Image from 'next/image';
import { Montserrat } from 'next/font/google';
// Importing Montserrat font
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Vita = () => {
  return (
    <div className="w-full h-auto bg-[#23856D]">
      <div className="h-auto flex flex-col lg:flex-row px-[20px] lg:px-[209px] py-[40px] lg:py-[112px] gap-[40px] lg:gap-[80px]">
        <div className="flex-1 w-full lg:w-[509px] gap-[30px]">
          <div className="h-auto pt-[40px] lg:pt-[60px] gap-[20px] lg:gap-[30px]">
            <h5 className={`${monterrat.className} text-white text-[16px] sm:text-[18px] lg:text-[20px] mb-4 sm:mb-6`}>SUMMER 2020</h5>
            <h1 className={`${monterrat.className} text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] mb-4 sm:mb-6`}>Vita Classic Product</h1>
            <p className={`${monterrat.className} text-white text-[14px] sm:text-[16px] lg:text-[18px] leading-[28px] mb-4 sm:mb-6`}>
              We know how large objects will act, We know
            </p>
            <p className={`${monterrat.className} text-white text-[14px] sm:text-[16px] lg:text-[18px] leading-[26px] mb-6 sm:mb-8`}>
              how objects will act, We know
            </p>
            <div className="flex gap-4 items-center">
              <p className={`${monterrat.className} text-white text-[28px] sm:text-[32px] lg:text-[32px] font-bold`}>$16.48</p>
              <button className="bg-[#2DC071] text-base sm:text-lg lg:text-2xl font-bold text-white w-[180px] sm:w-[200px] lg:w-[220px] h-[50px] sm:h-[56px] lg:h-[60px] rounded-[5px] py-[12px] sm:py-[15px] lg:py-[15px] px-[30px] sm:px-[40px] lg:px-[40px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-[510px]">
          <Image
            src="/shop-hero-2-png-picture-1.png"
            alt="Product Image"
            width={510} // Set width for better control
            height={685} // Set height for better control
            layout="intrinsic" // Maintain aspect ratio for responsive scaling
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Vita;
