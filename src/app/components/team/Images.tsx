import Image from "next/image";
import React from 'react';

const Images = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large feature image */}
          <div className="md:col-span-2 h-[500px] relative bg-red-500">
            <Image 
              src="/team/1.png" 
              alt="Fashion model in white dress"
              className="w-full h-full object-cover"
              width={1000} // Adjust as per your needs
              height={500} // Adjust as per your needs
            />
          </div>
          
          {/* Smaller image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[240px] bg-gray-100">
              <Image 
                src="/team/2.png" 
                alt="Fashion item 1"
                className="w-full h-full object-cover"
                width={480} // Adjust as per your needs
                height={240} // Adjust as per your needs
              />
            </div>
            <div className="h-[240px] bg-gray-100">
              <Image 
                src="/team/4.png" 
                alt="Fashion item 2"
                className="w-full h-full object-cover"
                width={480} // Adjust as per your needs
                height={240} // Adjust as per your needs
              />
            </div>
            <div className="h-[240px] bg-gray-100">
              <Image
                src="/team/3.png" 
                alt="Fashion item 3"
                className="w-full h-full object-cover"
                width={480} // Adjust as per your needs
                height={240} // Adjust as per your needs
              />
            </div>
            <div className="h-[240px] bg-gray-100">
              <Image
                src="/team/5.png" 
                alt="Fashion item 4"
                className="w-full h-full object-cover"
                width={480} // Adjust as per your needs
                height={240} // Adjust as per your needs
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
