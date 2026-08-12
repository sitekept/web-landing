import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF puis WebP : sans cette ligne, next/image ne sert que du WebP.
    // L'AVIF pèse environ 20 à 30 % de moins à qualité équivalente, ce qui
    // compte sur /templates et /realization, qui affichent 9 à 13 captures.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
