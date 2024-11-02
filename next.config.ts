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
  experimental: {
    ppr: "incremental",
    after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
