import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

// Importing Montserrat font
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Fluid = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white px-4 sm:px-[20px] lg:px-[80px] max-w-screen-xl w-full sm:min-h-[900px] lg:min-h-auto">
      
      {/* Image Section */}
      <div className="w-full sm:w-[60%] lg:w-[50%] h-auto mb-8 lg:mb-0">
        <Image
          src="/asian-woman.png"
          alt="Product Image"
          width={725} // Set width for better control
          height={775} // Set height for better control
          layout="intrinsic" // Maintain aspect ratio for responsive scaling
          className="object-cover w-full h-auto"
        />
      </div>
      
      {/* Text Section */}
      <div className="w-full sm:w-[70%] lg:w-[40%] h-auto flex flex-col justify-center gap-[10px]">
        <h5 className={`${monterrat.className} text-gray-500 text-[14px] sm:text-[16px] md:text-[18px] mb-3 sm:mb-4`}>SUMMER 2020</h5>
        <h1 className={`${monterrat.className} text-black text-2xl sm:text-[32px] md:text-[40px] font-bold leading-[1.1] mb-3 sm:mb-4 w-full break-words`}>
          Part of the Neural Universe
        </h1>
        <p className={`${monterrat.className} text-gray-500 text-[12px] sm:text-[14px] md:text-[16px] leading-[26px] mb-3 sm:mb-4`}>
          We know how large objects will act,
        </p>
        <p className={`${monterrat.className} text-gray-500 text-[12px] sm:text-[14px] md:text-[16px] leading-[24px] mb-4 sm:mb-6`}>
          but things on a small scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
          <button className="bg-[#2DC071] text-base sm:text-sm md:text-lg font-bold text-white w-full sm:w-[150px] md:w-[200px] h-[40px] sm:h-[40px] md:h-[52px] rounded-[5px] py-[10px] sm:py-[10px] md:py-[12px] px-[25px] sm:px-[20px] md:px-[30px] mb-3 sm:mb-0">
            Buy Now
          </button>
          <button className="bg-white border-neutral-500 border-2 text-base sm:text-sm md:text-lg font-bold text-[#2DC071] w-full sm:w-[150px] md:w-[200px] h-[40px] sm:h-[40px] md:h-[52px] rounded-[5px] py-[10px] sm:py-[10px] md:py-[12px] px-[25px] sm:px-[20px] md:px-[30px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fluid;
