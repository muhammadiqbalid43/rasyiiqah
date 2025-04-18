import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "cf.bstatic.com",
      "dynamic-media-cdn.tripadvisor.com",
      "media-cdn.tripadvisor.com",
      "placehold.co",
      "fakeimg.pl",
      "via.placeholder.com",
      "103.127.139.176",
      "www.dwinstravel.com",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
