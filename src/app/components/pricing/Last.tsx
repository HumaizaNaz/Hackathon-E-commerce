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
    <div className={`${monterrat.className} w-full h-[600px] text-center wrapper bg-white`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center space-y-8">
    <h2 className="text-[40px] font-bold text-[#252B42]">
        Start your 14 days free trial
      </h2>
      <p className="text-[#737373] text-[14px] mt-4 mx-auto">
      Start your journey with us and <br />
      explore the endless possibilities!
      </p>
      <button className="mt-6 bg-[#23A6F0] rounded-md text-[14px] font-bold text-[#FFFFFF] px-8 py-4 hover:bg-blue-400">
        Try it free now
      </button>

        <div className="flex space-x-4 justify-center mt-10">
          {/* Social media icons */}
          <Link href="https://facebook.com" passHref>
            <FaFacebook className="text-2xl text-blue-800 transition"size={30} />
          </Link>
          <Link href="https://linkedin.com" passHref>
            <FaLinkedin className="text-2xl text-blue-900 transition"size={30} />
          </Link>
          <Link href="https://instagram.com" passHref>
            <FaInstagram className="text-2xl text-pink-800 transition" size={30}/>
          </Link>
          <Link href="https://twitter.com" passHref>
            <FaTwitter className="text-2xl text-blue-600 transition"size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Last;
