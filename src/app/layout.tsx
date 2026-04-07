import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ENV } from "@/lib/env";
import { getMessage, getSiteLocale } from "@/lib/site-messages";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

  return {
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
        {
          url: "/icon.svg",
          type: "image/png",
          sizes: "32x32",
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
      url: "https://sitekept.com",
      siteName: getMessage(locale, "metadata.openGraph.siteName"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: getMessage(locale, "metadata.twitter.title"),
      description: getMessage(locale, "metadata.twitter.description"),
      creator: getMessage(locale, "metadata.twitter.creator"),
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

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content={getMessage(locale, "metadata.appleMobileWebAppTitle")}
        />
      </head>
      <body suppressHydrationWarning className={inter.className}>{children}</body>
      {ENV.NEXT_PUBLIC_GA_ID ? (
        <GoogleAnalytics gaId={ENV.NEXT_PUBLIC_GA_ID} />
      ) : null}
    </html>
  );
}
