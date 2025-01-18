import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { client } from "@/sanity/lib/client";

async function getData() {
  const fetchData = await client.fetch(`
    *[_type == "heroSection"][0] {
      title,
      subtitle,
      description,
      "image": image.asset->url
    }
  `);

  return fetchData;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default async function Hero() {
  const data = await getData();

  return (
    <div className="w-full h-[716px] bg-gray-50 flex items-center">
      <section className="w-full h-full bg-cover bg-center relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.image}
            alt="hero image"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex justify-center md:justify-start items-center px-6 sm:px-12 md:px-[198px] mt-12 gap-12 md:gap-24">
          <div className="w-full max-w-[1044px] h-[427px] py-6 md:py-12">
            {/* Section for text and button */}
            <div className="w-full h-[331px]">
              <h5
                className={`${montserrat.className} text-white text-[18px] sm:text-[20px] md:text-[22px] mb-4 sm:mb-6`}
              >
                {data.subtitle}
              </h5>
              <h1
                className={`${montserrat.className} text-white text-[36px] sm:text-[48px] md:text-[62px] leading-[1.1] mb-4 sm:mb-6`}
              >
                {data.title}
              </h1>
              <p
                className={`${montserrat.className} text-white  text-sm sm:text-base lg:text-lg text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] mb-4 sm:mb-6`}
              >
                {data.description}
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
}
