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
  { id: 1, bgColor: "bg-blue-500", name: "Username 1", profession: "Profession 1", imgSrc: "/user/1.jpg" },
  { id: 2, bgColor: "bg-gray-200", name: "Username 2", profession: "Profession 2", imgSrc: "/user/2.jpg" },
  { id: 3, bgColor: "bg-yellow-400", name: "Username 3", profession: "Profession 3", imgSrc: "/user/3.jpg" },
  { id: 4, bgColor: "bg-green-400", name: "Username 4", profession: "Profession 4", imgSrc: "/user/4.jpg" },
  { id: 5, bgColor: "bg-red-500", name: "Username 5", profession: "Profession 5", imgSrc: "/user/5.jpg" },
  { id: 6, bgColor: "bg-purple-500", name: "Username 6", profession: "Profession 6", imgSrc: "/user/6.jpg" },
  { id: 7, bgColor: "bg-pink-400", name: "Username 7", profession: "Profession 7", imgSrc: "/user/7.jpg" },
  { id: 8, bgColor: "bg-indigo-500", name: "Username 8", profession: "Profession 8", imgSrc: "/user/8.jpg" },
  { id: 9, bgColor: "bg-orange-400", name: "Username 9", profession: "Profession 9", imgSrc: "/user/1.jpg" },
];

export default function CardTeam() {
  return (
    <div className={montserrat.className}>
      {/* Centered heading and paragraph */}
      <div className="text-center py-8 px-4 sm:px-8 md:px-12">
        <h1 className="text-4xl mb-[80] font-bold">Meet Our Team</h1>
        
      </div>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-72 lg:w-80 h-full"
            >
              <div className={`h-48 ${profile.bgColor} flex items-center justify-center relative`}>
                <Image
                  src={profile.imgSrc}
                  alt="Profile"
                  
                  width={316}
              height={231}
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
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import { Montserrat } from "next/font/google";

// // Load the Montserrat font with specific weights
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });

// // Define the Team interface
// interface Team {
//   _id: string;
//   name: string;
//   profession: string;
//   bgColor: string;
//   description: string;
//   imgSrc: string;
//   facebook?: string;
//   instagram?: string;
//   twitter?: string;
// }

// // Define the CardTeam component
// interface CardTeamProps {
//   profiles: Team[];
// }

// const CardTeam = ({ profiles }: CardTeamProps) => {
//   if (!profiles || profiles.length === 0) {
//     return (
//       <div className={montserrat.className}>
//         <div className="text-center py-8 px-4 sm:px-8 md:px-12">
//           <h1 className="text-4xl font-bold">Meet Our Team</h1>
//           <p>No team members found.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={montserrat.className}>
//       <div className="text-center py-8 px-4 sm:px-8 md:px-12">
//         <h1 className="text-4xl font-bold">Meet Our Team</h1>
//       </div>

//       {/* Grid of profiles */}
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
//           {profiles.map((profile: Team) => (
//             <div
//               key={profile._id}
//               className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-72 lg:w-80 h-full"
//             >
//               <div className={`h-48 ${profile.bgColor} flex items-center justify-center relative`}>
//                 <Image
//                   src={profile.imgSrc || "/default-profile.jpg"}
//                   alt={`${profile.name}'s Profile`}
//                   layout="intrinsic"
//                   width={250}
//                   height={250}
//                   className="rounded-lg"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h2 className="text-xl font-bold">{profile.name}</h2>
//                 <p className="text-sm text-gray-600 mb-4">{profile.profession}</p>
//                 <p className="text-sm text-gray-500">{profile.description}</p>

//                 {/* Social media icons */}
//                 <div className="flex justify-center space-x-6 mt-4">
//                   {profile.facebook && (
//                     <Link href={profile.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl sm:text-3xl">
//                       <FaFacebook />
//                     </Link>
//                   )}
//                   {profile.instagram && (
//                     <Link href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl sm:text-3xl">
//                       <FaInstagram />
//                     </Link>
//                   )}
//                   {profile.twitter && (
//                     <Link href={profile.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl sm:text-3xl">
//                       <FaTwitter />
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTeam;
