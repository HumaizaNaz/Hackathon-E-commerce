import React from 'react';
import { Montserrat } from 'next/font/google';

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Pricing = () => {
  return (
    <div className={`${monterrat.className} bg-white pt-5`} id="pricing">
      <div className="mx-auto pb-20 bg-white mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the product that works best
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* First Product */}
          <div className="ring-1 ring-gray-300 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-lg font-semibold text-center leading-8 text-gray-800">FREE</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">Organize across all apps by hand</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-blue-500">€ 0 per/ month</span>
            </p>
            <a
              href="/order"
              aria-describedby="product1"
              className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
              <li className="flex gap-x-3 font-bold">Unlimited product updates</li>
              <li className="flex gap-x-3 font-bold">Fast delivery</li>
            </ul>
          </div>

          {/* Second Product - Changed to #252B42 theme */}
          <div className="bg-[#252B42] ring-2 ring-[#1E2332] rounded-3xl p-8 xl:p-10">
            <div className="flex items-baseline justify-between gap-x-4">
              <h2 id="product2" className="text-lg font-semibold text-center leading-8 text-white">STANDARD</h2>
              <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-200">
              Organize across all apps by hand
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-blue-500">€ 99 per/month</span>
            </p>
            <a
              href="/order"
              aria-describedby="product2"
              className="bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-200 xl:mt-10">
              <li className="flex gap-x-3 font-bold">Unlimited product updates</li>
              <li className="flex gap-x-3">Fast delivery</li>
            </ul>
          </div>

          {/* Third Product */}
          <div className="ring-1 ring-gray-300 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product3" className="text-lg font-semibold text-center leading-8 text-gray-800">PREMIUM</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">Organize across all apps by hand</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-blue-500">€ 99.0 per/ month</span>
            </p>
            <a
              href="/order"
              aria-describedby="product3"
              className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
              <li className="flex gap-x-3 font-bold">Unlimited product updates</li>
              <li className="flex gap-x-3 font-bold">Fast delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
