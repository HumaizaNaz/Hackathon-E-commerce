"use client";
import React, { useState, useRef, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { CompulsoryData } from "../data/main/compulsory";
// import { Tracks } from "@/data/main/tracks";

const monterrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [isClient, setIsClient] = useState(false); // To check if it's the client side

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Set the state to true after mounting on the client
    setIsClient(typeof window !== "undefined");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  if (!isClient) return null; // Prevent server-side rendering issues

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
              <li className="font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="relative">
                <div
                  className="flex items-center gap-1 font-bold cursor-pointer"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  Shop{" "}
                  <IoIosArrowDown
                    className={`transition-transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute mt-2 w-48 rounded-lg bg-zinc-50 text-black shadow-xl p-4"
                    ref={dropdownRef}
                  >
                    {CompulsoryData.map((val) => (
                      <Link key={val.id} href={val.route}>
                        <div
                          className="py-1 px-2 text-gray-600 hover:text-main cursor-pointer"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setShowShopMenu(false);
                          }}
                        >
                          {val.text}
                        </div>
                      </Link>
                    ))}
                    {/* <h1 className="mt-4 text-xl font-bold border-t border-zinc-300 pt-4">
                      Advanced Courses
                    </h1>
                    {Tracks.map((val) => (
                      <Link key={val.id} href={`/track/${val.id}`}>
                        <div
                          className="py-1 px-2 text-gray-600 hover:text-main cursor-pointer"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setShowShopMenu(false);
                          }}
                        >
                          {val.name}
                        </div>
                      </Link>
                    ))} */}
                  </div>
                )}
              </li>
              <li className="font-bold">
                <Link href="/about">About</Link>
              </li>
              <li className="font-bold">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="font-bold">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Icons (Desktop View) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="flex items-center text-blue-500">
              <AiOutlineUser className="mr-1" />
              Login/Signup
            </Link>
            <Link href="/category" className="text-blue-500">
              <CiSearch size={20} />
            </Link>
            <Link href="/cart" className="text-blue-500">
              <BsCart2 size={20} />
            </Link>
            <Link href="/wishlist" className="text-blue-500">
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
          <div ref={mobileMenuRef} className="lg:hidden bg-white shadow-lg p-4">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li
                className="cursor-pointer flex items-center" // Added flex to make text and arrow aligned
                onClick={() => setShowShopMenu((prev) => !prev)}
              >
                Shop{" "}
                <IoIosArrowDown
                  className={`transition-transform ml-1 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`} // Added ml-1 for a small margin to the left of the arrow
                />
                {showShopMenu && (
                  <div className="bg-zinc-50 text-gray-900 px-4 py-2 mt-2">
                    {CompulsoryData.map((item) => (
                      <Link key={item.id} href={item.route}>
                        <div
                          className="py-2 cursor-pointer"
                          onClick={() => setShowShopMenu(false)}
                        >
                          {item.text}
                        </div>
                      </Link>
                    ))}
                    {/* <h1 className="text-xl font-bold mt-4">Advanced Courses</h1>
                    {Tracks.map((item) => (
                      <Link key={item.id} href={`/track/${item.id}`}>
                        <div
                          className="py-2 cursor-pointer"
                          onClick={() => setShowShopMenu(false)}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))} */}
                  </div>
                )}
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="flex justify-center gap-4 mt-4">
             
              <Link href="/login" className="flex items-center text-blue-500">
              <AiOutlineUser className="mr-1" />
              Login/Signup
            </Link>
            <Link href="/category" className="text-blue-500">
              <CiSearch size={20} />
            </Link>
            <Link href="/cart" className="text-blue-500">
              <BsCart2 size={20} />
            </Link>
            <Link href="/wishlist" className="text-blue-500">
              <CiHeart size={20} />
            </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
