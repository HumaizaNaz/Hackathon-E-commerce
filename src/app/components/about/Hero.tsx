import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-sm mb-4 text-sm font-normal tracking-tight leading-none md:text-xl xl:text-xl dark:text-white">
              About Company
            </h1>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              About Us
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We know how large objects will act, but things on a small scale
            </p>
           
            <div className="inline-flex space-x-5 mt-4">
            <Link className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
    href="/download">
    Get Quote Now
  </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src="/technology 1.png" alt="mockup" width={300} height={300} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
