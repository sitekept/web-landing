import type { Metadata } from "next";
import type { SiteLocale } from "@/content/site-content";
import {
  absoluteUrl,
  getLanguageAlternates,
  localizePath,
} from "@/lib/localized-routes";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Chemin français de la page : l'équivalent anglais en est déduit. */
  path: string;
  locale: SiteLocale;
}

export function buildPageMetadata({
  title,
  description,
  path,
  locale,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(localizePath(path, locale));

  return {
    title,
    description,
    alternates: {
      canonical: url,
      // hreflang : chaque version déclare l'autre, et le français sert de
      // version par défaut.
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sitekept",
      locale: locale === "fr" ? "fr_FR" : "en_US",
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
