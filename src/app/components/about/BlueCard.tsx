import Image from "next/image";

const HeroSection = () => {
    return (
      <div className="relative bg-white w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Content */}
            <div className="flex items-center bg-blue-600 p-12 lg:p-16">
              <div className="max-w-md">
                <p className="text-white text-sm uppercase tracking-wide">
                  WORK WITH US
                </p>
                <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Now Let&apos;s grow Yours
                </h1>
                <p className="mt-4 text-lg text-blue-100">
                  The global distribution of development charts shows that your plan actually moving for the quarter of my tips.
                </p>
                <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Browse
                </button>
              </div>
            </div>
  
            {/* Right Image */}
            <div className="relative h-64 md:h-auto">
              <Image
                className="w-full h-full object-cover"
                src="/about2.png"
                alt="Hero section image"
                width={350}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;