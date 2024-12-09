import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="max-w-sm mb-4 text-sm font-normal tracking-tight leading-none md:text-xl xl:text-xl dark:text-black">
          About Company
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold text-black">About Us</h1>
        <p className="text-lg text-gray-600">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
          Get Quote Now
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {/* Back Image */}
          <Image
            src="/Elli.png"
            alt="Background Shape"
            layout="fill"
            objectFit="cover"
            className="absolute z-0 opacity-50"
          />
          {/* Foreground Image */}
          <Image
            src="/about.png"
            alt="Main Image"
            layout="fill"
            objectFit="contain"
            className="absolute z-10"
          />
          {/* Decorative Shapes */}
          <div className="absolute top-0 left-0 w-10 h-10 bg-pink-200 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
