import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  /* config options here */
  // Allow dev origin access from the host LAN for WSL / device testing
  allowedDevOrigins: ['http://192.168.3.183:3000', 'http://localhost:3000'],
};

export default nextConfig;
