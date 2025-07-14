import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiteKept - Sites Web Haute Performance en 48h",
  description:
    "Créez votre site web professionnel en 48h chrono ! Sites vitrines, e-commerce, applications sur mesure. Technologies de pointe, design moderne, résultats garantis. Votre succès digital commence maintenant.",
  keywords:
    "création site web, développement web rapide, site internet professionnel, e-commerce, Next.js, agence web, site vitrine, application web, SEO, design moderne",
  authors: [{ name: "Équipe SiteKept" }],
  creator: "SiteKept",
  publisher: "SiteKept",
  icons: {
    icon: [
      {
        url: "/ChatGPT Image 15 juil. 2025 à 01_28_34.png",
        type: "image/png",
      },
      {
        url: "/ChatGPT Image 15 juil. 2025 à 01_28_34.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/ChatGPT Image 15 juil. 2025 à 01_28_34.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/my-favicon/site.webmanifest",
  openGraph: {
    title: "SiteKept - Sites Web Haute Performance en 48h",
    description:
      "Votre site web professionnel en ligne en 48h ! Technologies de pointe, design moderne, performance maximale. Transformez vos visiteurs en clients dès maintenant.",
    url: "https://sitekept.com",
    siteName: "SiteKept",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteKept - Sites Web Haute Performance en 48h",
    description:
      "Votre site web professionnel en ligne en 48h ! Technologies de pointe, design moderne, performance maximale.",
    creator: "@sitekept",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="SiteKept" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}