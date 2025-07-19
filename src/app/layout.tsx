import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("authors") }],
    creator: t("creator"),
    publisher: t("publisher"),
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
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      url: "https://sitekept.com",
      siteName: t("openGraph.siteName"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
      creator: t("twitter.creator"),
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
  const locale = await getLocale();
  const t = await getTranslations("metadata");

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content={t("appleMobileWebAppTitle")}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <main className="min-h-screen">
            <Navigation />
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
