'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// Importing Montserrat font
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={monterrat.className}>
      <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-50">
        <nav className="mx-auto max-w-6xl px-6 py-8 flex flex-col items-center">
          {/* Heading Section */}
          <div className="text-center">
            <h5 className="text-lg font-bold text-gray-800">WHAT WE DO</h5>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">Innovation tailored for you</h1>
          </div>

          {/* Spacer */}
          <div className="my-6"></div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link href="/" className="text-lg font-bold text-slate-700 hover:underline">
              Home
            </Link>
            <Link href="/team" className="text-lg font-bold text-slate-300 hover:underline">
              Team
            </Link>
          </div>

          {/* Spacer */}
          <div className="my-6"></div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close Menu" : "Open Menu"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col items-center gap-4 mt-4">
              <Link href="/" className="text-lg font-bold text-slate-700 hover:underline">
                Home
              </Link>
              <Link href="/team" className="text-lg font-bold text-slate-300 hover:underline">
                Team
              </Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Home;
