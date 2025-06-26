import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiteKept - Agence de Développement Web Ultra-Rapide",
  description:
    "Nous créons des sites web prêts pour la production en 48-72 heures. Des pages d'atterrissage aux sites e-commerce, nous livrons des sites rapides, évolutifs et axés sur la conversion qui font croître votre entreprise.",
  keywords:
    "développement web, conception de site web, Next.js, React, pages d'atterrissage, e-commerce, livraison rapide, agence",
  authors: [{ name: "Équipe SiteKept" }],
  creator: "SiteKept",
  publisher: "SiteKept",
  openGraph: {
    title: "SiteKept - Développement Web Ultra-Rapide",
    description:
      "Sites web professionnels livrés en 48-72 heures. Stack technologique moderne, architecture évolutive, design axé sur la conversion.",
    url: "https://sitekept.com",
    siteName: "SiteKept",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteKept - Développement Web Ultra-Rapide",
    description:
      "Sites web professionnels livrés en 48-72 heures. Stack technologique moderne, architecture évolutive, design axé sur la conversion.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}