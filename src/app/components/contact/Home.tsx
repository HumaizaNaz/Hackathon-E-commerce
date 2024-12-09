import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function Home() {
  return (
    <div className={`${monterrat.className} flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white`}>
      {/* Left Section */}
      <div className={`${monterrat.className} md:w-1/2 space-y-4 text-center md:text-left`}>
        <h1 className="max-w-sm mb-4 text-sm font-normal tracking-tight leading-none md:text-xl xl:text-xl dark:text-black">
          CONTACT US
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold text-black">Get in touch today!</h1>
        <p className="text-lg text-gray-600">
          We know how large objects will act, but things on a small scale
        </p>
        <h2 className="font-bold text-black text-xl">Phone: +451 215 215</h2>
        <h2 className="font-bold text-black text-xl">Fax: +451 215 215</h2>

        {/* Icons Section */}
        <div className="inline-flex space-x-5 mt-4 justify-center md:justify-start">
          <Link href="https://twitter.com" target="_blank" className="text-black hover:text-blue-500">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="text-black hover:text-blue-700">
            <FaFacebookF size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-black hover:text-blue-600">
            <FaLinkedinIn size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="text-black hover:text-pink-500">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className={`${monterrat.className} md:w-1/2 flex justify-center relative mt-10 md:mt-0`}>
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
            src="/technology 1.png"
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
