import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { client } from "@/sanity/lib/client";

async function getData() {
  const fetchData = await client.fetch(`
   *[_type == "fluidSection"][0] {
    title,
    subtitle,
    description,
  
    "image": image.asset->url
  }
  `);

  return fetchData;
}




const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default async function Fluid() {
    const data = await getData();

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white px-4 sm:px-[20px] pt-20  lg:px-[80px]  w-full sm:min-h-[900px] lg:min-h-auto">
      
      {/* Image Section */}
      <div className="w-full  sm:w-[60%] lg:w-[50%] h-auto mb-8 lg:mb-0">
        <Image
          src={data.image}
          alt="Product Image"
          width={725} 
          height={775} 
          layout="intrinsic" 
          className="object-cover w-full h-auto"
        />
      </div>
      
      {/* Text Section */}
      <div className="w-full sm:w-[70%] lg:w-[40%] h-auto flex flex-col items-center text-center justify-center gap-[10px]">
  <h5
    className={`${monterrat.className} text-gray-500 text-[14px] sm:text-[16px] md:text-[18px] mb-3 sm:mb-4`}
  >
    {data.subtitle}
  </h5>
  <h1
    className={`${monterrat.className} text-black text-3xl sm:text-[32px] md:text-[40px] font-bold leading-[1.1] mb-3 sm:mb-4 w-full break-words`}
  >
    {data.title}
  </h1>
  <p
    className={`${monterrat.className} text-gray-500 text-[12px] sm:text-[14px] md:text-[16px] leading-[26px] mb-3 sm:mb-4 `}
  >
    {data.description}
  </p>
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center w-full">
  <button className="bg-[#2DC071] text-sm sm:text-base md:text-lg font-bold text-white w-[120px] h-[36px] sm:w-[150px] sm:h-[40px] md:w-[200px] md:h-[52px] rounded-[5px] flex items-center justify-center">
    Buy Now
  </button>
  <button className="bg-white border-neutral-500 border text-sm sm:text-base md:text-lg font-bold text-[#2DC071] w-[120px] h-[36px] sm:w-[150px] sm:h-[40px] md:w-[200px] md:h-[52px] rounded-[5px] flex items-center justify-center">
    Read More
  </button>
</div>
</div>
    </div>
  );
}


