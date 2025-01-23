/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google';
import { client, urlFor } from '@/sanity/lib/client'; // Ensure this is properly configured
import Image from 'next/image';
import Link from 'next/link';

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Editor = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await client.fetch(
          
`*[_type == "editorSection"]{
  images[] {
    "defaultImage": defaultImage.asset->url,
    "hoveredImage": hoveredImage.asset->url
  }
}`
        );
        console.log('Fetched image data:', data); // Logging the fetched data
        setImages(data[0]?.images || []);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const getImageUrl = (image: any, hovered: boolean) => {
    if (!image) return '/fallback-image.jpg'; // Provide fallback if image is undefined
    return hovered ? urlFor(image?.hoveredImage)?.url() : urlFor(image?.defaultImage)?.url();
  };

  return (
    <div className="w-full h-auto px-6 py-12 mt-20 md:px-12 md:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className={`${monterrat.className} text-3xl md:text-4xl text-[#252B42] font-bold`}>
            EDITORS PICK
          </h2>
          <p className={`${monterrat.className} text-sm md:text-base text-[#737373]`}>
          Step into a world where style meets selection—our Editor’s Picks redefine your favorites with a touch of elegance.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
        {/* Image 1 with Hover Effect */}
        <div
          className="w-full md:w-[510px] h-[500px] relative group"
          onMouseEnter={() => setHoveredImage(1)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <Image
            src={getImageUrl(images[0], hoveredImage === 1)}
            alt="Image 1"
            width={510}
            height={500}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <Link href="/category">
          <button
            aria-label="Shop Image 1"
            className={`${monterrat.className} absolute bottom-5 left-5 bg-[#ffff] text-black font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300`}
          >
            Shop Now
          </button>
          </Link>
        </div>

        {/* Image 2 with Hover Effect */}
        <div
          className="w-full md:w-[240px] h-[500px] relative group"
          onMouseEnter={() => setHoveredImage(2)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <Image
            src={getImageUrl(images[1], hoveredImage === 2)}
            alt="Image 2"
            width={240}
            height={500}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <Link href="/category">
          <button
            aria-label="Shop Image 2"
            className={`${monterrat.className} absolute bottom-5 left-5 bg-[#ffff] text-black font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300`}
          >
            Shop Now
          </button>
          </Link>
        </div>

        {/* Other Images */}
        <div className="flex flex-wrap justify-between gap-4 w-full md:w-[240px]">
          {images.slice(2).map((imageSet, index) => (
            <div
              key={index}
              className="w-full h-[242px] relative group"
              onMouseEnter={() => setHoveredImage(index + 3)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={getImageUrl(imageSet, hoveredImage === (index + 3))}
                alt={`Image ${index + 3}`}
                width={240}
                height={242}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <Link href="/category">
              <button
                aria-label={`Shop Image ${index + 3}`}
                className={`${monterrat.className} absolute bottom-5 left-5 bg-[#ffff] text-black font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300`}
              >
                Shop Now
              </button>
              </Link>
            </div>
          ))}
        </div> </div>
      </div>
    </div>
  );
};

export default Editor;
