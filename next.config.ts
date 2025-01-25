import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    
    domains: ['cdn.sanity.io'], // Add cdn.sanity.io to the allowed domains
  },
  reactStrictMode: true,

  
};

export default nextConfig;
