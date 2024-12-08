import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-white pt-5" id="pricing">
      <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Whether it's just you, or your entire team - we've got you covered.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the product that works best
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* First Product */}
          <div className="ring-1 ring-gray-300 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-lg font-semibold leading-8 text-gray-800">Product Type 1</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">Product details for Product Type 1</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-800">€ 10 / unit</span>
            </p>
            <a
              href="/order"
              aria-describedby="product1"
              className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
              <li className="flex gap-x-3">40 units</li>
              <li className="flex gap-x-3">1 feature</li>
              <li className="flex gap-x-3">Fast delivery</li>
            </ul>
          </div>

          {/* Second Product */}
          <div className="bg-indigo-50 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
            <div className="flex items-baseline justify-between gap-x-4">
              <h2 id="product2" className="text-lg font-semibold leading-8 text-gray-800">Product Type 2</h2>
              <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              The most popular choice. Product details for Product Type 2
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-800">€ 20 / unit</span>
            </p>
            <a
              href="/order"
              aria-describedby="product2"
              className="bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
              <li className="flex gap-x-3">120 units</li>
              <li className="flex gap-x-3">3 different features</li>
              <li className="flex gap-x-3">Fast delivery</li>
            </ul>
          </div>

          {/* Third Product */}
          <div className="ring-1 ring-gray-300 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product3" className="text-lg font-semibold leading-8 text-gray-800">Product Type 3</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">Product details for Product Type 3</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-800">€ 50 / unit</span>
            </p>
            <a
              href="/order"
              aria-describedby="product3"
              className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
              <li className="flex gap-x-3">240 units</li>
              <li className="flex gap-x-3">6 different features</li>
              <li className="flex gap-x-3">Fast delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
