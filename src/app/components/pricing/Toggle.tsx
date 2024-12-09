import React from 'react';
import { Montserrat } from 'next/font/google';

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Toggle = () => {
  return (
    <div className={`${monterrat.className}`}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        {/* Header Section */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Pricing</h1>
        <p className="text-center text-gray-600 max-w-lg">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        {/* Toggle Section */}
        <div className="flex items-center mt-8 space-x-4">
          <span className="text-gray-700 font-medium">Monthly</span>
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
            />
            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div
              className="dot absolute left-1 top-1 bg-blue-500 w-6 h-6 rounded-full transition"
            ></div>
          </div>
          <span className="text-gray-700 font-medium">Yearly</span>
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
            Save 25%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
