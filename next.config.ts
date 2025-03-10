import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  /* config options here */
};

export default nextConfig;
