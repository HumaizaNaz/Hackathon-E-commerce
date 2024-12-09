import { Montserrat } from 'next/font/google';
import React from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Big = () => {
  return (
    <div className="w-full bg-slate-50 h-[200px] flex items-center justify-center">
      <div className="text-center max-w-xl px-4">
        <h1 className={`${montserrat.className} text-black text-4xl font-extrabold mb-4`}>
          Big Companies are here
        </h1>
        <p className={`${montserrat.className} text-sm text-gray-400`}>
          Problems trying to resolve the conflict between the two major realms of Classical physics:
          Newtonian mechanics
        </p>
      </div>
    </div>
  );
};

export default Big;
