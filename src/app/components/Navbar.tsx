"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { CompulsoryData } from "../data/main/compulsory";
import SearchBar from "./SearchBar";
import Language from "./Language";
import { AiOutlineUser } from "react-icons/ai"
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);  // Wishlist count state
  const [cartCount, setCartCount] = useState(0)
  // const { isSignedIn } = useUser();
  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
// Fetch cart count when the component mounts
useEffect(() => {
  const fetchCartCount = async () => {
    try {
      const response = await fetch("/api/cart", {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch cart count");
      }
      const data = await response.json();
      setCartCount(data.length); // Assuming the response contains the array of cart items
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  fetchCartCount();
}, []);
  useEffect(() => {
    // Fetch wishlist count when the component mounts
    const fetchWishlistCount = async () => {
      try {
        const response = await fetch("/api/wishlist", {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch wishlist count");
        }
        const data = await response.json();
        setWishlistCount(data.length); // Assuming the response contains the array of wishlist items
      } catch (error) {
        console.error("Error fetching wishlist count:", error);
      }
    };

    fetchWishlistCount();
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full bg-white z-50 shadow-md ${montserrat.className}`}
      >
        <div className="relative flex items-center justify-between w-full h-[58px] px-6 md:px-10 lg:px-20 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Bandage.png"
                alt="Logo"
                width={100}
                height={30}
                className="w-[90px] md:w-[108px] h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 items-center">
            <ul className="flex gap-6 text-gray-700">
              <li className="font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="relative">
                <button
                  className="flex items-center gap-1 font-bold cursor-pointer"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  Shop{" "}
                  <IoIosArrowDown
                    className={`transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute mt-2 w-48 rounded-lg bg-white text-black shadow-xl p-4"
                    ref={dropdownRef}
                  >
                    {CompulsoryData.map((val) => (
                      <Link key={val.id} href={val.route}>
                        <div
                          className="py-1 px-2 text-gray-600 hover:text-blue-500 cursor-pointer"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {val.text}
                        </div>
                      </Link>
                    ))}
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
              <li>
                <Language />
              </li>
            </ul>
          </nav>

          {/* Icons (Desktop View) */}
          <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="flex items-center text-blue-500">
<AiOutlineUser className="mr-1" />
Login/Signup
</Link>
            <button onClick={toggleSearch} className="text-blue-500">
              <CiSearch size={20} />
            </button>
            {/* <Link href="/cart" className="text-blue-500">
              <BsCart2 size={20} />
            </Link> */}
            <Link href="/cart" className="text-blue-500 relative">
              <BsCart2 size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm z-10">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/wishlist" className="text-blue-500 relative">
              <CiHeart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-3 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm z-10">
                  {wishlistCount}
                </span>
              )}
            </Link>
            {/* <Link href="/wishlist" className="relative w-8 h-8 flex items-center justify-center">
  <CiHeart className="h-5 w-5" />
  {wishlistCount > 0 && (
    <span className="absolute -top-3 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm z-10">
      {wishlistCount}
    </span>
  )}
</Link> */}
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
                <button onClick={() => handleNavigation("/")}>Home</button>
              </li>
              <li
                className="cursor-pointer flex flex-col items-center"
                onClick={() => setShowShopMenu((prev) => !prev)}
              >
                <div className="flex items-center">
                  Shop{" "}
                  <IoIosArrowDown
                    className={`transition-transform ml-1 ${showShopMenu ? "rotate-180" : "rotate-0"}`}
                  />
                </div>
                {showShopMenu && (
                  <div className="bg-white text-gray-900 px-4 py-2 mt-2">
                    {CompulsoryData.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavigation(item.route)}
                        className="block py-2 w-full text-left"
                      >
                        {item.text}
                      </button>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <button onClick={() => handleNavigation("/about")}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/pricing")}>
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/contact")}>
                  Contact
                </button>
              </li>
              <li>
                <Language />
              </li>
            </ul>
            <div className="flex justify-center gap-4 mt-4">
             
  <Link href="/login" className="flex items-center text-blue-500">
  <AiOutlineUser className="mr-1" />
  Login/Signup
</Link>
              <button onClick={toggleSearch} className="text-blue-500">
                <CiSearch size={20} />
              </button>
              <button
                onClick={() => handleNavigation("/cart")}
                className="text-blue-500"
              >
                <BsCart2 size={20} />
              </button>
              <button
                onClick={() => handleNavigation("/wishlist")}
                className="text-blue-500 relative"
              >
                <CiHeart size={20} />
                {wishlistCount > 0 && (
                 <span className="absolute -top-3 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm z-10">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Fullscreen Search */}
      {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}
    </>
  );
};

export default Navbar;



