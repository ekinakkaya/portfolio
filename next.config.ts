import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: "placehold.co",
      // },
      // {
      //   protocol: "https",
      //   hostname: "github.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "img.shields.io"
      // },
      // {
      //   protocol: "https",
      //   hostname: "dummyimage.com"
      // },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
