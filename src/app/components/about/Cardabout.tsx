import React from "react";
import Image from 'next/image';
import Link from "next/link";

// Import the required social media icons from react-icons
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// Import the Montserrat font
import { Montserrat } from 'next/font/google';

// Load the Montserrat font with specific weights
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const profiles = [
  { id: 1, bgColor: "bg-blue-500", name: "Username", profession: "Profession", imgSrc: "/user/1.jpg" },
  { id: 2, bgColor: "bg-gray-200", name: "Username", profession: "Profession", imgSrc: "/user/2.jpg" },
  { id: 3, bgColor: "bg-yellow-400", name: "Username", profession: "Profession", imgSrc: "/user/3.jpg" },
];

export default function CardAbout() {
  return (
    <div className={montserrat.className}>
      {/* Centered heading and paragraph */}
      <div className="text-center py-8 px-4 sm:px-8 md:px-12">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-lg text-gray-600 mt-4">
          Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-72 lg:w-80 h-full"
            >
              <div className={`h-48 ${profile.bgColor} flex items-center justify-center relative`}>
                <Image
                  src={profile.imgSrc}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold">{profile.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{profile.profession}</p>
                {/* Social media icons below profession using react-icons */}
                <div className="flex justify-center space-x-6 mt-4">
                  <Link href="#" className="text-blue-500 text-2xl sm:text-3xl">
                    <FaFacebook />
                  </Link>
                  <Link href="#" className="text-pink-500 text-2xl sm:text-3xl">
                    <FaInstagram />
                  </Link>
                  <Link href="#" className="text-blue-400 text-2xl sm:text-3xl">
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
