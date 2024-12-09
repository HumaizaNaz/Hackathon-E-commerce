import React from 'react';
import Image from 'next/image';

const Icons = () => {
  return (
    <div className='w-full h-[175px] bg-slate-50'>
      <div className='flex justify-around items-center px-4 md:px-[20px] lg:px-[180px] h-full flex-wrap'>
        {/* Repeat for each icon */}
        <div className='mb-4'>
          <Image
            src="/icons/01.png"
            alt="Icon 1"
            width={80} 
            height={22}
            className="text-[#737373]"
          />
        </div>
        <div className='mb-4'>
          <Image
            src="/icons/02.png"
            alt="Icon 2"
            width={75} 
            height={40}
          />
        </div>
        <div className='mb-4'>
          <Image
            src="/icons/03.png"
            alt="Icon 3"
            width={80} 
            height={50}
          />
        </div>
        <div className='mb-4'>
          <Image
            src="/icons/04.png"
            alt="Icon 4"
            width={80} 
            height={35}
          />
        </div>
        <div className='mb-4'>
          <Image
            src="/icons/05.png"
            alt="Icon 5"
            width={80} 
            height={42}
          />
        </div>
        <div className='mb-4'>
          <Image
            src="/icons/06.png"
            alt="Icon 6"
            width={80} 
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Icons;
