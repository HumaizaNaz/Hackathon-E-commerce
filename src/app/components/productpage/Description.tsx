import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { Montserrat } from 'next/font/google';


const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Description = () => {
  return (
    <div className={monterrat.className}> 
      <nav className="bg-white py-[50] border border-b-2 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="items-center justify-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Description</Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr- font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Additional Information</Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Review (0)</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
          <div className="flex flex-col md:flex-row">
           
            <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <Image
  src="/unsplash.png"
  alt="can_help_banner"
  width={500} // Updated width
  height={500} // Updated height
  className="w-full md:w-auto mx-auto" // Adjusted classes for responsiveness
/>
            </div>
           

            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-3 -mx-2">
              {/* First Block */}
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-2 px-6">
                  <h3 className="text-2xl font-bold text-md mb-4">The quick fox jumps over</h3>
                  <p className="text-sm py-2">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                    door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-sm py-2">
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              {/* Second Block */}
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-2 px-6">
                  <h3 className="text-2xl font-bold text-md mb-6">The quick fox jumps over</h3>
                  <p className="text-sm py-1 flex">
                    <IoIosArrowForward className="mr-2" /> The quick fox jumps over the lazy dog.
                  </p>
                  <p className="text-sm py-1 flex">
                    <IoIosArrowForward className="mr-2" /> The quick fox jumps over the lazy dog.
                  </p>
                  <p className="text-sm py-1 flex">
                    <IoIosArrowForward className="mr-2" /> The quick fox jumps over the lazy dog.
                  </p>
                  <p className="text-sm py-1 flex">
                    <IoIosArrowForward className="mr-2" /> The quick fox jumps over the lazy dog.
                  </p>
                </div>
              </div>

              {/* Third Block */}
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6">
                  <p className="text-sm py-2">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                    door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-sm py-2">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                    door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              {/* Fourth Block */}
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6">
                  <h3 className="text-2xl font-bold text-md mb-6">The quick fox jumps over</h3>
                  <p className="text-sm py-1 flex">
                    <IoIosArrowForward className="mr-2" /> The quick fox jumps over the lazy dog.
                  </p>
                  <p className="text-sm py-1 flex">
                    <IoIosArrowForward className="mr-2" /> The quick fox jumps over the lazy dog.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Description;
