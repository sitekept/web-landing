import type { NextConfig } from "next";
// Import relatif : Next ne résout pas l'alias `@/` dans `next.config.ts`.
import { demoNoindexHeaders } from "./src/lib/public-template-routes";

const nextConfig: NextConfig = {
  images: {
    // AVIF puis WebP : sans cette ligne, next/image ne sert que du WebP.
    // L'AVIF pèse environ 20 à 30 % de moins à qualité équivalente, ce qui
    // compte sur /templates et /realization, qui affichent 9 à 13 captures.
    formats: ["image/avif", "image/webp"],
    // Valeurs par défaut de Next (16 à 384) plus 192, 320, 448 et 512. 512 : entre 384 et
    // le premier `deviceSizes` (640) next/image n'avait aucune variante, et une
    // image affichée à 400 à 600 px était servie trop petite (agrandie de 1,3 à
    // 1,8). 192 : entre 128 et 256, une vignette de 140 à 200 px était servie
    // à 256 (agrandie de 1,5). 320 et 448 : les sauts 256 → 384 et 384 → 512
    // servaient 384 ou 512 pour une largeur utile de 260 à 295 px ou de 385 à
    // 395 px (une bande de 417 à 426 px d'écran, facteur 0,76). `deviceSizes`
    // reste celui par défaut.
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 320, 384, 448, 512],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // `X-Robots-Tag: noindex, follow` sur les démos (`/<slug>`, `/en/<slug>` et
  // sous-pages), calculé au build depuis le registre. Remplace l'ancien
  // middleware, qui coûtait un bundle Edge sur chaque requête du site.
  async headers() {
    return demoNoindexHeaders();
  },
};

export default nextConfig;
