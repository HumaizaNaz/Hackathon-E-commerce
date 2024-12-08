import React from "react";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { Montserrat } from "next/font/google";

// Importing Montserrat font
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // You can adjust the weights as needed
});

const Topbar = () => {
  return (
    <div className={`${monterrat.className}  top-0 z-50 w-full max-w-[1570px] h-auto min-h-[48px]   `}>
      <header className="bg-[#252B42] flex flex-wrap justify-between items-center text-white h-[46px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Contact Section */}
        <div className="flex gap-[8px] rounded-[5px] h-[44px] w-full sm:w-[165px] md:w-[200px] items-center p-[10px]">
          <IoCallOutline aria-label="Call" />
          <p className="font-medium">(225) 555-0118 </p>
        </div>
        <div className="flex gap-[8px] items-center w-full sm:w-[260px] md:w-[300px] rounded-[5px] h-[44px] p-[10px]">
          <BsEnvelope aria-label="Email" />
          <p className="font-medium">michelle.rivera@example.com</p>
        </div>

        {/* Follow Us Section */}
       <div className="h-auto w-full sm:w-[332px] p-[10px] text-center font-[14px] leading-[14px] whitespace-nowrap overflow-hidden sm:overflow-visible md:overflow-visible">
  Follow Us and get a chance to win 80% off
</div>

        {/* Social Media Icons with Gaps */}
        <div className="flex items-center justify-center w-full sm:w-auto gap-[10px]">
          <span className="w-full sm:w-auto text-center sm:text-left font-medium ">Follow us:</span>
          <div className="flex w-full sm:w-[120px] gap-[10px] justify-center sm:justify-start">
            <Link href="https://www.instagram.com" passHref>
              <FaInstagram aria-label="Instagram" className="hover:text-gray-400 cursor-pointer" />
            </Link>
            <Link href="https://www.youtube.com" passHref>
              <FaYoutube aria-label="YouTube" className="hover:text-gray-400 cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com" passHref>
              <IoLogoFacebook aria-label="Facebook" className="hover:text-gray-400 cursor-pointer" />
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Topbar;
