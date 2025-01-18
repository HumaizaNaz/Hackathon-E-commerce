
import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { client } from "@/sanity/lib/client";

// Define the type for fetched data
type VitaSection = {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
};

async function getData(): Promise<VitaSection[]> {
  try {
    const fetchData = await client.fetch(`
      *[_type == "vitaSection"] {
        title,
        subtitle,
        description,
        price,
        "image": image.asset->url
      }
    `);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default async function Vita() {
  const data: VitaSection[] = await getData();

  if (!data || data.length === 0) {
    return <p className="text-white text-center">No products available.</p>;
  }

  return (
    <div className="relative w-full pt-20 h-auto sm:h-[400px] md:h-[600px] lg:h-[800px]  bg-[#23856D] px-4 sm:px-1 md:px-6 lg:px-[209px]  sm:py-12 lg:py-[112px]">
      {data.map((item: VitaSection, index: number) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20"
        >
{/* Text Section */}
<div className="flex-1 flex flex-col items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
  <h5
    className={`${monterrat.className} text-white text-sm sm:text-base lg:text-lg`}
  >
    {item.subtitle}
  </h5>
  <h1
    className={`${monterrat.className} text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight`}
  >
    {item.title}
  </h1>
  <p
    className={`${monterrat.className} text-white text-sm sm:text-base lg:text-lg`}
  >
    {item.description}
  </p>
  <div className="flex flex-col items-center gap-4">
    <p
      className={`${monterrat.className} text-white text-lg sm:text-xl lg:text-2xl font-bold`}
    >
      ${item.price.toFixed(2)}
    </p>
    <button className="bg-[#2DC071] text-sm sm:text-base lg:text-lg font-bold text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-lg">
      Shop Now
    </button>
  </div>

          </div>

          {/* Image Section */}
          <div className="relative w-full max-w-md lg:max-w-lg h-auto">
            <Image
              src={item.image}
              alt={item.title}
              width={510}
              height={685}
              layout="responsive"
              className="object-cover sm:absolute xm:absolute xm::bottom-0 sm:bottom-0 sm:right-0 lg:static"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
