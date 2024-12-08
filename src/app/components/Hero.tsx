import React from 'react';
import Image from 'next/image';
import { Montserrat } from "next/font/google";

// Importing Montserrat font
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // You can adjust the weights as needed
});


const Hero = () => {
  return (
    <div className="w-full h-[716px] bg-gray-50 flex items-center">
      <section className="w-full h-full bg-cover bg-center relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/shop-hero-1-product-slide-1.jpg"  // Ensure the image is in the public folder or use an external URL
            alt="hero image"
            layout="fill"  // Makes the image cover the entire section
            objectFit="cover"  // Ensures the image covers the entire section while maintaining aspect ratio
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex justify-center md:justify-start items-center px-6 sm:px-12 md:px-[198px] mt-12 gap-12 md:gap-24">
          <div className="w-full max-w-[1044px] h-[427px] py-6 md:py-12">
            {/* Section for text and button */}
            <div className="w-full h-[331px]">
              <h5 className={`${monterrat.className} text-white text-[18px] sm:text-[20px] md:text-[22px] mb-4 sm:mb-6`}>SUMMER 2020</h5>
              <h1 className={`${monterrat.className} text-white text-[36px] sm:text-[48px] md:text-[62px] leading-[1.1] mb-4 sm:mb-6`}>NEW COLLECTION</h1>
              <p className={`${monterrat.className} text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] mb-4 sm:mb-6`}>
                We know how large objects will act,
              </p>
              <p className={`${monterrat.className} text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] mb-6 sm:mb-8`}>
                but things on a small scale.
              </p>

              <button className="bg-[#2DC071] text-base sm:text-lg md:text-2xl font-bold text-white w-[200px] sm:w-[220px] md:w-[221px] h-[56px] sm:h-[60px] md:h-[62px] rounded-[5px] py-[12px] sm:py-[15px] md:py-[15px] px-[30px] sm:px-[40px] md:px-[40px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
