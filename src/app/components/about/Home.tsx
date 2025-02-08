"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-white to-blue-50">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0"
      >
          <h2 className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
          About Bandage
        </h2>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Discover the <span className="text-blue-600">Best Deals</span> for Your Style
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Explore a world of trendy fashion, top-quality accessories, and must-have essentials—all at unbeatable prices. Shop smart, shop with Bandage!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Shop Now
          </button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-105">
            View Collections
          </button>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:w-1/2 flex justify-center relative"
      >
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
          {/* Back Image */}
          <Image
            src="/Elli.png"
            alt="Background Shape"
            layout="fill"
            objectFit="cover"
            className="absolute z-0 animate-pulse"
          />
          {/* Foreground Image */}
          <Image
            src="/about.png"
            alt="Main Image"
            layout="fill"
            objectFit="contain"
            className="absolute z-10"
          />
          {/* Decorative Shapes */}
          
      
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
  className="absolute -top-4 -left-4 w-12 h-12 bg-pink-200 rounded-full"
/>
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-200 rounded-full"
/>
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5, delay: 1.2 }}
  className="absolute top-1/2 -right-6 w-6 h-6 bg-yellow-200 rounded-full"
/>
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5, delay: 1.4 }}
  className="absolute bottom-8 left-8 w-10 h-10 bg-purple-200 rounded-full"
/>
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5, delay: 1.6 }}
  className="absolute top-10 right-10 w-7 h-7 bg-green-200 rounded-full"
/><motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -top-4 -left-4 w-12 h-12 bg-pink-200 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-200 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute top-1/2 -right-6 w-6 h-6 bg-yellow-200 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  )
}
