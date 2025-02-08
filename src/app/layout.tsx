"use client";

import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { StartTop } from "@/app/components/starttotop/StartTop";
import Loading from "@/app/Loading";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsLoading(true);
      localStorage.setItem("hasVisited", "true"); // Set flag in localStorage
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      setIsLoading(false);
    }
  }, []);

  const isStudio = pathname.startsWith("/studio");
  const isHome = pathname.startsWith("/sign-in");
  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");

  const studioAndHome = !isStudio && !isHome && !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews;

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <StartTop />
          {(studioAndHome && !isLoading) && <Navbar />}
          {isLoading ? <Loading /> : children}
          {(studioAndHome && !isLoading) && <Footer />}
        </body>
      </html>
    </ClerkProvider>
  );
}
