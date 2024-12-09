import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image'

const Video = () => {
  return (
    <div className='w-full h-[764px]'>
      <div className='h-[764px] w-full px-[10px] md:px-[195px]'>
        <div className='relative w-full h-[540px] rounded-[20px] overflow-hidden'>
          {/* Image */}
          <Image src={"/about/video.png"} alt='video' width={989} height={540} className="w-full h-full object-cover" />

          {/* Blue Circle Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <IoIosArrowForward className='text-white text-3xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
