import React from 'react';

const Status = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Text Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8">
          {/* Left Section */}
          <div className="md:w-1/2 text-left space-y-4">
            <p className="text-red-600">Problems trying</p>
            <h2 className="text-gray-800 text-2xl font-light">
              Mei minim mollie non desert Aliqua est sit elliquiy dolor do non sint
            </h2>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 text-right space-y-4 mt-6 md:mt-0">
            <p className="font-light text-gray-400">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="stats-item">
            <h3 className="text-5xl font-bold text-gray-600 mb-2">15K</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="stats-item">
            <h3 className="text-5xl font-bold text-gray-600 mb-2">150K</h3>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>

          <div className="stats-item">
            <h3 className="text-5xl font-bold text-gray-600 mb-2">15</h3>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>

          <div className="stats-item">
            <h3 className="text-5xl font-bold text-gray-600 mb-2">100+</h3>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;
