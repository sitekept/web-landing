import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF puis WebP : sans cette ligne, next/image ne sert que du WebP.
    // L'AVIF pèse environ 20 à 30 % de moins à qualité équivalente, ce qui
    // compte sur /templates et /realization, qui affichent 9 à 13 captures.
    formats: ["image/avif", "image/webp"],
    // Valeurs par défaut de Next (16 à 384) plus 512 : entre 384 et le premier
    // `deviceSizes` (640) next/image n'avait aucune variante, et une image
    // affichée à 400 à 600 px était servie trop petite (agrandie de 1,3 à 1,8).
    // `deviceSizes` reste celui par défaut.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
