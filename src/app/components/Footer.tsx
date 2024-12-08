'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import React from 'react';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-white h-auto w-full py-8">
      {/* Logo and Social Media Icons */}
      <div className='h-auto w-full'>
        <div className='h-[138px] flex justify-between py-[40px] bg-[#FAFAFA] flex-wrap sm:flex-nowrap'>
          <div className="flex items-center justify-center flex-col gap-4 sm:pl-[195px] py-[40px] mb-8">
            <Image src="/Bandage.png" alt="Logo" width={187} height={58} />
          </div>
          <div className='text-[#23A6F0] text-2xl py-[40px] flex gap-4 justify-center sm:pr-[195px]'>
            <Link href="https://www.instagram.com" passHref>
              <FaInstagram aria-label="Instagram" className="hover:text-gray-400 cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com" passHref>
              <IoLogoFacebook aria-label="Facebook" className="hover:text-gray-400 cursor-pointer" />
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Sections */}
      <div className='w-full mt-10'>
        <hr className='h-[1px] text-[#E6E6E6]' />
        <div className='flex flex-wrap justify-between sm:justify-around px-[20px] sm:px-[196px] py-8'>
          {/* Company Info */}
          <div className='w-full sm:w-[45%] lg:w-[18%] mb-6 sm:mb-0'>
            <h5 className='text-[16px] font-bold mb-4'>Company Info</h5>
            <ul>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/about">About Us</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/careers">Career</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/hiring">We are hiring</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className='w-full sm:w-[45%] lg:w-[18%] mb-6 sm:mb-0'>
            <h5 className='text-[16px] font-bold mb-4'>Legal</h5>
            <ul>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className='w-full sm:w-[45%] lg:w-[18%] mb-6 sm:mb-0'>
            <h5 className='text-[16px] font-bold mb-4'>Features</h5>
            <ul>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/business-marketing">Business Marketing</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/user-analytics">User Analytics</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/live-chat">Live Chat</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/unlimited-support">Unlimited Support</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className='w-full sm:w-[45%] lg:w-[18%] mb-6 sm:mb-0'>
            <h5 className='text-[16px] font-bold mb-4'>Resources</h5>
            <ul>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/ios-android">IOS & Android</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/watch-a-demo">Watch a Demo</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/customers">Customers</Link>
              </li>
              <li className='text-[14px] text-[#737373] mb-2'>
                <Link href="/api">API</Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className='w-full sm:w-[45%] lg:w-[18%] mb-6 sm:mb-0'>
            <h5 className='text-[16px] font-bold mb-4'>Get in Touch</h5>
            <div className='flex gap-4'>
              <input type="email" placeholder="Your Email" className='bg-[#F9F9F9] text-[#737373] p-2 w-full sm:w-[calc(100%-120px)]' />
              <button className='bg-[#23A6F0] text-white py-[10px] w-full sm:w-[120px]'>Subscribe</button>
            </div>
            <p className='text-[12px] pt-2'>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='bg-[#FAFAFA] py-4'>
        <p className='text-left sm:px-[196px] px-4 text-[14px] text-[#737373]'>
          Made with love by Finland. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
