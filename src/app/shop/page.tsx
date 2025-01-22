import React from "react";
import Navbar from "../components/shop/Navbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { MdWindow } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";



import Icons from "../components/Icons";
import ProductList from "../components/shop/Product";
const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <header className="mx-auto w-full max-w-screen-md mb-20 py-3 md:top-6 lg:max-w-screen-lg">
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div className="flex shrink-0">
                <Link
                  className="flex text-lg font-medium items-center"
                  href="/"
                >
                  <p>Showing all 12 results</p>
                </Link>
              </div>
              <div className="hidden md:flex text-lg font-medium md:items-center md:justify-center md:gap-5">
                <p>View</p>
                <Link
                  aria-current="page"
                  className="inline-block rounded-lg px-2 py-1 font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 text-lg hover:text-gray-900"
                  href="#"
                >
                  <MdWindow />
                </Link>
                <Link
                  className="inline-block rounded-lg px-2 py-1 text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  href="#"
                >
                  <RxHamburgerMenu />
                </Link>
              </div>
              <div className="flex items-center justify-end gap-3">
                <Link
                  className="hidden items-center justify-center text-lg bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                  href="/login"
                >
                  Popularity <RiArrowDropDownLine />
                </Link>
                <Link
                  className="inline-flex items-center justify-center text-sm font-medium bg-blue-600 px-3 py-2 text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline-offset-2 sm:text-lg"
                  href="/login"
                >
                  Filter
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Icons />

     <ProductList/>
      
    
      
    </div>
  );
};

export default page;
