"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${montserrat.className} min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white`}>
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 space-y-4 text-center md:text-left"
      ><h2 className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
      We&apos;re Here to Help
  </h2>
  <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
      Get in Touch with <span className="text-blue-600">Bandage!</span>
  </h1>
  <p className="text-lg text-gray-600 max-w-md">
  Need help with your order or style advice? Our support team is here for you!
</p>
  
  <h2 className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
      Customer Support
  </h2>
  <p className="text-lg text-gray-600">Mon-Fri: 9 AM - 6 PM (PST)</p>
  
  <h2 className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
      Phone
  </h2>
  <p className="text-lg text-gray-600">+451 215 215</p>
  
  <h2 className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
      Email
  </h2>
  <p className="text-lg text-gray-600">support@bandage.com</p>
  
  <h2 className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
      Follow Us
  </h2>
  
  {/* Social Media Icons */}
<br />
<div className="inline-flex  space-x-5 mt-4 justify-center md:justify-start">
      <Link href="https://twitter.com" target="_blank" className="text-black hover:text-blue-500">
        <FaTwitter size={24} />
      </Link>
      <Link href="https://facebook.com" target="_blank" className="text-black hover:text-blue-700">
        <FaFacebookF size={24} />
      </Link>
      <Link href="https://linkedin.com" target="_blank" className="text-black hover:text-blue-600">
        <FaLinkedinIn size={24} />
      </Link>
      <Link href="https://instagram.com" target="_blank" className="text-black hover:text-pink-500">
        <FaInstagram size={24} />
      </Link>
  </div>
    
        
      </motion.div>
{/* Right Section */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="md:w-1/2 flex justify-center relative mt-10 md:mt-0"
>
  <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
    {/* Back Image */}
    <Image
      src="/Elli.png"
      alt="Background Shape"
      layout="fill"
      objectFit="cover"
      className="absolute z-0 animate-pulse opacity-50"
    />
    {/* Foreground Image */}
    <Image
      src="/technology 1.png"
      alt="Main Image"
      layout="fill"
      objectFit="contain"
      className="absolute z-10"
    />
    
    {/* Decorative Shapes */}
    <motion.div className="absolute top-5 left-5 w-12 h-12 bg-pink-200 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }}></motion.div>
    <motion.div className="absolute bottom-5 right-5 w-6 h-6 bg-blue-200 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }}></motion.div>
    <motion.div className="absolute top-10 right-10 w-8 h-8 bg-yellow-200 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.2 }}></motion.div>
    <motion.div className="absolute bottom-10 left-10 w-7 h-7 bg-green-200 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.5 }}></motion.div>
    <motion.div className="absolute top-1/2 left-1/3 w-9 h-9 bg-purple-200 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.7 }}></motion.div>
    
    {/* More Circles */}
    <motion.div className="absolute bottom-14 right-16 w-14 h-14 bg-red-200 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2 }}></motion.div>
    <motion.div className="absolute top-20 left-20 w-4 h-4 bg-orange-300 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.2 }}></motion.div>
    <motion.div className="absolute bottom-20 left-1/2 w-16 h-16 bg-cyan-200 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.4 }}></motion.div>
    <motion.div className="absolute top-1/3 right-1/4 w-5 h-5 bg-violet-300 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.6 }}></motion.div>
    <motion.div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-400 rounded-full opacity-75" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.8 }}></motion.div>
  </div>
</motion.div>



    </div>
  );
}
