import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ENV } from "@/lib/env";
import { getMessage, getSiteLocale } from "@/lib/site-messages";
import { SITE_URL } from "@/lib/site-url";
import { DemoBanner } from "@/components/demo-banner";
import { DEMO_HEADER } from "@/lib/public-template-routes";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

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
    openGraph: {
      title: getMessage(locale, "metadata.openGraph.title"),
      description: getMessage(locale, "metadata.openGraph.description"),
      url: SITE_URL,
      siteName: getMessage(locale, "metadata.openGraph.siteName"),
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getSiteLocale();
  const isDemo = (await headers()).get(DEMO_HEADER) === "1";

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content={getMessage(locale, "metadata.appleMobileWebAppTitle")}
        />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        {isDemo ? <DemoBanner /> : null}
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
