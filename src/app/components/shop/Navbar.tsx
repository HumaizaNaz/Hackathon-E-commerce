import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
    <header className="sticky bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex text-3xl font-bold text-gray-800 items-center">
          <h1>shop</h1>
        </div>
  
        <div className="flex-grow"></div>
        <div className="hidden items-center justify-center gap-6 md:flex">
          <Link href="/" className="font-dm text-lg font-bold text-slate-700 flex items-center gap-2">
            Home
            <span>&gt;</span>
          </Link>
          <Link
            href="/shop"
            className="font-dm text-lg font-bold text-slate-300 flex items-center gap-2"
          >
            Shop
          </Link>
        </div>
  
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button" className="border-none bg-transparent text-gray-500">  
          </button>
        </div>
      </nav>
    </header>
    <section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Image 1 */}
          <Link href="#" className="shadow-2xl relative group">
            <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden">
              <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full transition-all ease-in-out duration-500">
                <div className="w-full h-full p-5 relative">
                  <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                    <h2 className="text-2xl font-bold text-white mb-0 pb-1">CLOTHS</h2>
                    <p className="text-lg font-light text-white">5 items</p>
                  </div>
                </div>
              </div>
              {/* Image component */}
              <Image src="/shop/01.jpg" alt="Image" layout="responsive" width={400} height={400} className="w-full z-0 h-full object-fill" />
            </div>
          </Link>
  
          {/* Image 2 */}
          <Link href="#" className="shadow-2xl relative group">
            <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden">
              <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full transition-all ease-in-out duration-500">
                <div className="w-full h-full p-5 relative">
                  <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                    <h2 className="text-2xl font-bold text-white mb-0 pb-1">CLOTHS </h2>
                    <p className="text-lg font-light text-white">5 items</p>
                  </div>
                </div>
              </div>
              {/* Image component */}
              <Image src="/shop/02.jpg" alt="Image" layout="responsive" width={400} height={400} className="w-full z-0 h-full object-fill" />
            </div>
          </Link>
  
          {/* Image 3 */}
          <Link href="#" className="shadow-2xl relative group">
            <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden">
              <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full  transition-all ease-in-out duration-500">
                <div className="w-full h-full p-5 relative">
                  <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                    <h2 className="text-2xl font-bold text-white mb-0 pb-1">CLOTHS</h2>
                    <p className="text-lg font-light text-white">5 items</p>
                  </div>
                </div>
              </div>
              {/* Image component */}
              <Image src="/shop/03.jpg" alt="Image" layout="responsive" width={400} height={400} className="w-full z-0 h-full object-fill" />
            </div>
          </Link>
  
          {/* Image 4 */}
          <Link href="#" className="shadow-2xl relative group">
            <div className="h-full relative shadow-2xl overflow-hidden">
              <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full transition-all ease-in-out duration-500">
                <div className="w-full h-full p-5 relative">
                  <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                    <h2 className="text-2xl font-bold text-white mb-0 pb-1">CLOTHS</h2>
                    <p className="text-lg font-light text-white">5 items</p>
                  </div>
                </div>
              </div>
              {/* Image component */}
              <Image src="/shop/04.jpg" alt="Image" layout="responsive" width={400} height={400} className="w-full z-0 h-full object-fill" />
            </div>
          </Link>
  
          {/* Image 5 */}
          <Link href="#" className="shadow-2xl relative group">
            <div className="h-full relative shadow-2xl overflow-hidden">
              <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full  transition-all ease-in-out duration-500">
                <div className="w-full h-full p-5 relative">
                  <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                    <h2 className="text-2xl font-bold text-white mb-0 pb-1">CLOTHS</h2>
                    <p className="text-lg font-light text-white">5 items</p>
                  </div>
                </div>
              </div>
              {/* Image component */}
              <Image src="/shop/05.jpg" alt="Image" layout="responsive" width={400} height={400} className="w-full z-0 h-full object-fill" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Navbar;
