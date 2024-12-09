'use client';
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import { CiSearch, CiHeart } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <div>
      <header className="sticky top-0 w-full bg-white z-50 shadow-md">
        <div className="relative flex items-center justify-between w-full h-[58px] px-6 md:px-10 lg:px-20 py-3">
          {/* Logo */}
          <div className={`${monterrat.className} flex-shrink-0`}>
            <Image
              src="/Bandage.png"
              alt="Logo"
              width={100}
              height={30}
              className="w-[90px] md:w-[108px] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 items-center">
            <ul className={`${monterrat.className} flex gap-6 text-gray-700`}>
              <li className="font-bold"><Link href="/">Home</Link></li>
              <li className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 font-bold"
                >
                  Shop
                  <svg
                    className="w-4 h-4"
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
                {isDropdownOpen && (
                  <div className="absolute top-10 left-0 bg-white shadow-md rounded-lg p-4 w-48">
                    <ul className="text-sm text-gray-700">
                      <li><Link href="/shop">Dashboard</Link></li>
                      <li><Link href="/team">Team</Link></li>
                      <li><Link href="/pricing">Pricing</Link></li>
                      <li><Link href="/logout">Sign out</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="font-bold"><Link href="/about">About</Link></li>
              <li className="font-bold"><Link href="/pricing">Pricing</Link></li>
              <li className="font-bold"><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center text-blue-500 font-bold">
              <AiOutlineUser className="mr-1" />
              Login
            </Link>
            <Link href="#" className="text-blue-500">
              <CiSearch size={20} />
            </Link>
            <Link href="#" className="text-blue-500">
              <BsCart2 size={20} />
            </Link>
            <Link href="#" className="text-blue-500">
              <CiHeart size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg p-4">
            <ul className="flex flex-col items-center gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
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
