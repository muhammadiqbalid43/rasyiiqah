import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "cf.bstatic.com",
      "dynamic-media-cdn.tripadvisor.com",
      "media-cdn.tripadvisor.com",
    ],
  },
};

export default nextConfig;
