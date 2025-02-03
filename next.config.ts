import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {

    // IMAGE_URL: "https://api.strixproduction.in/",
    API_URL: "http://localhost:8000/",
    IMAGE_URL: "https://ap.in/",
  },
  images: {
    domains: ["localhost", "placehold.jp", "api.in"],
  },
};

export default nextConfig;
