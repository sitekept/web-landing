import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

const baseUrl = SITE_URL;

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? baseUrl : `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sitekept",
      type: "website",
      // Déclarée explicitement : une page qui définit `openGraph` remplace
      // celui du layout, et l'image du fichier src/app/opengraph-image.tsx
      // n'est alors plus rattachée. Sans elle, `summary_large_image` ci-dessous
      // produit une carte de partage vide.
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@sitekept",
      images: ["/opengraph-image"],
    },
  };
}
