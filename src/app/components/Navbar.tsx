'use client';
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

// Importing Montserrat font
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <header className="sticky  top-[40px] w-full bg-white z-10 shadow-lg">
        <div className="relative flex items-center justify-between w-full h-[58px] px-6 md:px-10 lg:px-20 py-3">
          {/* Logo */}
          <div className={`${monterrat.className} w-[90px] md:w-[108px] h-[32px] pt-[13px] font-[24px] leading-[32px]`}>
            <Image src="/Bandage.png" alt="Logo" width={100} height={100} />
          </div>

          {/* Navigation links */}
          <nav className="hidden lg:flex gap-4 items-center ml-4">
            <ul className={`${monterrat.className} flex gap-4 text-[#252B42]`}>
              <li className="pt-1.5 font-dm text-lg font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="pt-1.5 font-dm text-lg font-bold relative">
                {/* Dropdown Button */}
                <Link href={'/shop'}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="font-bold rounded-lg text-lg px-5 text-center inline-flex items-center"
                >
                  Shop
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                </Link>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700">
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</Link></li>
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</Link></li>
                      <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="pt-1.5 font-dm text-lg font-bold"><Link href="/about">About</Link></li>
              <li className="pt-1.5 font-dm text-lg font-bold"><Link href="/pricing">Pricing</Link></li>
              <li className="pt-1.5 text-lg font-bold"><Link href="/contact">Contact</Link></li>
              <li className="pt-1.5 text-lg font-bold"><Link href="/products">Pages</Link></li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex gap-6 items-center">
            <ul className="flex">
              <li className="w-[166px] h-[54px] flex items-center justify-center">
                <Link href="#" className={`${monterrat.className} flex items-center font-bold text-[#23A6F0]`}>
                  <AiOutlineUser className="text-[#23A6F0] mr-2 text-sm" />
                  Login / Register
                </Link>
              </li>
              <li className="w-[56px] h-[46px] items-center flex justify-center text-[#23A6F0]">
                <Link href="#" className="w-[56px] h-[46px] p-[15px] gap-[5px] font-bold items-center rounded-[37px]">
                  <CiSearch className="text-[#23A6F0] text-2xl" />
                </Link>
              </li>
              <li className="w-[56px] h-[46px] items-center flex justify-center">
                <Link href="#" className="w-[56px] h-[46px] p-[15px] font-bold items-center gap-[5px] rounded-[37px]">
                  <BsCart2 className="text-[#23A6F0] text-xl" />
                </Link>
              </li>
              <li className="w-[56px] h-[46px] items-center flex justify-center">
                <Link href="#" className="w-[56px] h-[46px] p-[15px] font-bold items-center gap-[5px] rounded-[37px]">
                  <CiHeart className="text-[#23A6F0] text-2xl" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 pr-10"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white shadow-md transition-all ease-in-out duration-300">
            <ul className="flex flex-col items-center gap-4 p-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/products">Contact</Link></li>
              <li>
                <Link href="#" className="text-blue-500 flex items-center gap-1">
                  <AiOutlineUser />
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
