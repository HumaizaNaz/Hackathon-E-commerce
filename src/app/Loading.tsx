// "use client";

// import { useEffect, useState } from "react";

// const quotes = [
//   "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//   "The secret of getting ahead is getting started.",
//   "Believe you can and you're halfway there.",
//   "Dream big and dare to fail.",
//   "Don't watch the clock; do what it does. Keep going.",
//   "You are never too old to set another goal or to dream a new dream.",
//   "The best way to predict the future is to create it.",
// ];

// export default function Loading() {
//   const [hydrated, setHydrated] = useState(false);
//   const [quote, setQuote] = useState("");

//   useEffect(() => {
//     setHydrated(true);
//     setQuote(quotes[Math.floor(Math.random() * quotes.length)]); // Select Random Quote
//   }, []);

//   if (!hydrated) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-[999] bg-gradient-to-br from-black via-blue-900 to-black animate-bg-motion">
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

//       <div className="relative flex flex-col items-center space-y-6 z-10">
//         {/* Brand Name */}
//         <h2 className="relative text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-glow drop-shadow-lg">
//           BANDAGE
//           <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 animate-scan" />
//         </h2>

//         {/* Rotating 3D Badge Logo */}
//         <div className="relative w-24 h-24">
//           <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full animate-rotate shadow-blue-500/50 shadow-lg" />
//           <div className="absolute inset-0 w-full h-full bg-black/90 rounded-full flex items-center justify-center border-2 border-blue-500/60 shadow-md animate-pulse">
//             <span className="text-xl font-extrabold text-blue-400 drop-shadow-lg">B</span>
//           </div>
//         </div>

//         {/* Motivational Quote (Changes Every Time) */}
//         <p className="text-lg text-center text-blue-300 italic max-w-md px-4 animate-fade-in">
//           {quote}
//         </p>

//         {/* Loading Bar */}
//         <div className="relative w-64 h-2 bg-blue-900/50 backdrop-blur-md rounded-full mt-6 overflow-hidden border border-blue-500/30">
//           <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-progress shadow-md" />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The secret of getting ahead is getting started.",
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "Don't watch the clock; do what it does. Keep going.",
  "You are never too old to set another goal or to dream a new dream.",
  "The best way to predict the future is to create it.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Don't stop when you're tired. Stop when you're done.",
  "Little things make big days.",
  "Your limitation—it's only your imagination.",
  "Do something today that your future self will thank you for.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Doubt kills more dreams than failure ever will.",
  "Act as if what you do makes a difference. It does.",
  "Opportunities don't happen. You create them.",
  "If you want to achieve greatness, stop asking for permission.",
];

export default function Loading() {
  const [hydrated, setHydrated] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setHydrated(true);
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]); // Select Random Quote
  }, []);

  if (!hydrated) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999] bg-gradient-to-br from-black via-blue-900 to-black animate-bg-motion">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

      <div className="relative flex flex-col items-center space-y-6 z-10">
        {/* Brand Name */}
        <h2 className="relative text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-glow drop-shadow-lg">
          BANDAGE
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 animate-scan" />
        </h2>

        {/* Rotating 3D Badge Logo */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full animate-rotate shadow-blue-500/50 shadow-lg" />
          <div className="absolute inset-0 w-full h-full bg-black/90 rounded-full flex items-center justify-center border-2 border-blue-500/60 shadow-md animate-pulse">
            <span className="text-xl font-extrabold text-blue-400 drop-shadow-lg">B</span>
          </div>
        </div>

        {/* Motivational Quote (Changes Every Time) */}
        <p className="text-lg text-center text-blue-300 italic max-w-md px-4 animate-fade-in">
          {quote}
        </p>

        {/* Dots Animation */}
        <div className="flex space-x-3 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                boxShadow: `0 0 12px rgba(0,100,255,0.8)`,
              }}
            />
          ))}
        </div>

        {/* Loading Bar */}
        <div className="relative w-64 h-2 bg-blue-900/50 backdrop-blur-md rounded-full mt-6 overflow-hidden border border-blue-500/30">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-progress shadow-md" />
        </div>
      </div>
    </div>
  );
}
