'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';


const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Editor = () => {
 
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="w-full h-auto px-6 py-12 mt-20 md:px-12 md:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className={`${monterrat.className} text-3xl md:text-4xl text-[#252B42] font-bold`}>
            EDITORS PICK
          </h2>
          <p className={`${monterrat.className} text-sm md:text-base text-[#737373]`}>
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Image 1 */}
          <div
            className="w-full md:w-[510px] h-[500px] relative group"
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={hoveredImage === 1 ? '/card-cover-20.jpg' : '/filter.png'}
              alt="Image 1"
              width={510}
              height={500}
              className="w-full h-full object-cover transition-all duration-300"
            />
           <button
                  aria-label="Shop Image 3"
                  className={`${monterrat.className} absolute bottom-5 left-5 bg-[#ffff] text-black font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300`}
                >
                  Shop Now
                </button>
          </div>

          {/* Image 2 */}
          <div
            className="w-full md:w-[240px] h-[500px] relative group"
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={hoveredImage === 2 ? '/card-cover-21.jpg' : '/filter (1).png'}
              alt="Image 2"
              width={240}
              height={500}
              className="w-full h-full object-cover transition-all duration-300"
            />
           <button
                  aria-label="Shop Image 3"
                  className={`${monterrat.className} absolute bottom-5 left-5 bg-[#ffff] text-black font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300`}
                >
                  Shop Now
                </button>
          </div>

          {/* Image 3 & 4 */}
          <div className="flex flex-wrap justify-between gap-4 w-full md:w-[240px]">
            {/* Image 3 */}
            <div
              className="w-full h-[242px] relative group"
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={hoveredImage === 3 ? '/card-cover-22.jpg' : '/filter (2).png'}
                alt="Image 3"
                width={240}
                height={242}
                className="w-full h-full object-cover transition-all duration-300"
              />
            <button
                  aria-label="Shop Image 3"
                  className={`${monterrat.className} absolute bottom-5 left-5 bg-[#ffff] text-black font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300`}
                >
                  Shop Now
                </button>
            </div>

            {/* Image 4 */}
            <div
              className="w-full h-[242px] relative group"
              onMouseEnter={() => setHoveredImage(4)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={hoveredImage === 4 ? '/card-cover-23.jpg' : '/filter (3).png'}
                alt="Image 4"
                width={240}
                height={242}
                className="w-full h-full object-cover transition-all duration-300"
              />
            <button
                  aria-label="Shop Image 3"
                  className={`${monterrat.className} absolute bottom-5 left-5 bg-[#ffff] text-black font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300`}
                >
                  Shop Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
