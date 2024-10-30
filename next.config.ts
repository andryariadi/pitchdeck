import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      // {
      //   protocol: "https",
      //   hostname: "i.pinimg.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "cdn.pixabay.com",
      // },
    ],
  },
};

export default nextConfig;
