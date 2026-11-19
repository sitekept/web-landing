import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Instrument_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import type { SiteLocale } from "@/content/site-content";
import { ENV } from "@/lib/env";
import { getMessage } from "@/lib/site-messages";
import { SITE_URL } from "@/lib/site-url";
import { absoluteUrl, localizePath } from "@/lib/localized-routes";

/**
 * Document HTML commun à toutes les racines du site.
 *
 * Le site a plusieurs layouts racines — un par groupe de routes, plus
 * `src/app/en/` — pour que `<html lang>` soit fixé statiquement selon la
 * langue servie. Lire la langue depuis l'URL dans un layout racine unique
 * imposerait `headers()`, donc un rendu dynamique de tout le site.
 */

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Police display des templates : exposée en variable, appliquée nulle part ici.
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-display-serif",
});

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function buildRootMetadata(locale: SiteLocale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: getMessage(locale, "metadata.title"),
    description: getMessage(locale, "metadata.description"),
    keywords: getMessage(locale, "metadata.keywords"),
    authors: [{ name: getMessage(locale, "metadata.authors") }],
    creator: getMessage(locale, "metadata.creator"),
    publisher: getMessage(locale, "metadata.publisher"),
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          sizes: "any",
        },
      ],
      apple: [
        {
          url: "/apple-icon.png",
          type: "image/png",
          sizes: "180x180",
        },
      ],
    },
    manifest: "/my-favicon/site.webmanifest",
    appleWebApp: {
      title: getMessage(locale, "metadata.appleMobileWebAppTitle"),
    },
    openGraph: {
      title: getMessage(locale, "metadata.openGraph.title"),
      description: getMessage(locale, "metadata.openGraph.description"),
      url: absoluteUrl(localizePath("/", locale)),
      siteName: getMessage(locale, "metadata.openGraph.siteName"),
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: getMessage(locale, "metadata.twitter.title"),
      description: getMessage(locale, "metadata.twitter.description"),
      creator: getMessage(locale, "metadata.twitter.creator"),
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

interface RootDocumentProps {
  locale: SiteLocale;
  children: ReactNode;
}

export function RootDocument({ locale, children }: RootDocumentProps) {
  return (
    <html
      lang={locale}
      className={`scroll-smooth ${inter.variable} ${instrumentSerif.variable}`}
    >
      <body suppressHydrationWarning className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
      {ENV.NEXT_PUBLIC_GA_ID ? (
        <GoogleAnalytics gaId={ENV.NEXT_PUBLIC_GA_ID} />
      ) : null}
    </html>
  );
}
