import React from 'react';
import { Montserrat } from 'next/font/google';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';  
import Link from 'next/link';

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Last = () => {
  return (
    <div className={`${monterrat.className} w-full h-[582px] bg-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-6xl font-bold text-gray-700 sm:text-3xl">
          Start your 14 days free trial
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
        <button className="bg-blue-400 text-white py-2 px-4 rounded-md text-lg hover:bg-blue-500 transition">
          Try it free now
        </button>

        <div className="flex space-x-4 justify-center">
          {/* Social media icons */}
          <Link href="https://facebook.com" passHref>
            <FaFacebook className="text-2xl text-blue-800 transition" />
          </Link>
          <Link href="https://linkedin.com" passHref>
            <FaLinkedin className="text-2xl text-blue-900 transition" />
          </Link>
          <Link href="https://instagram.com" passHref>
            <FaInstagram className="text-2xl text-pink-800 transition" />
          </Link>
          <Link href="https://twitter.com" passHref>
            <FaTwitter className="text-2xl text-blue-600 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Last;
