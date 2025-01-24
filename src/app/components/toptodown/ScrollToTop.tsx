// 'use client';

// // import { useEffect } from 'react';
// // import { usePathname } from 'next/navigation';

// // const ScrollToTop = () => {
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     // Scroll to top whenever the route changes
// //     window.scrollTo(0, 0);
// //   }, [pathname]);

// //   return null; // This component doesn't render anything visible
// // };

// // export default ScrollToTop;
// import React, { useState, useEffect } from "react";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Toggle visibility based on scroll position
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     isVisible && (
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
//       >
//         ↑
//       </button>
//     )
//   );
// };

// export default ScrollToTop;
