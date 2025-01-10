import React from "react";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { Montserrat } from "next/font/google";

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Topbar = () => {
  return (
    <div
      className={`${monterrat.className} top-0 z-50 w-full hidden sm:block`}
    >
      <header className="bg-[#252B42] flex flex-wrap justify-between items-center text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2">
        {/* Contact Section */}
        <div className="flex flex-wrap gap-4 w-full sm:w-auto items-center justify-center sm:justify-start">
          <div className="flex items-center gap-2">
            <IoCallOutline aria-label="Call" />
            <p className="font-medium text-sm sm:text-base">(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2">
            <BsEnvelope aria-label="Email" />
            <p className="font-medium text-sm sm:text-base">michelle.rivera@example.com</p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="w-full sm:w-auto text-center text-sm sm:text-base mt-2 sm:mt-0">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
          <span className="font-medium text-sm sm:text-base">Follow us:</span>
          <div className="flex gap-3">
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
              <FaTwitter aria-label="Twitter" className="hover:text-gray-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Topbar;
