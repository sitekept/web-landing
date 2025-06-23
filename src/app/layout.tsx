import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiteKept - Lightning-Fast Website Development Agency",
  description:
    "We build production-ready websites in 48-72 hours. From landing pages to e-commerce sites, we deliver fast, scalable, and conversion-focused websites that grow your business.",
  keywords:
    "web development, website design, Next.js, React, landing pages, e-commerce, fast delivery, agency",
  authors: [{ name: "SiteKept Team" }],
  creator: "SiteKept",
  publisher: "SiteKept",
  openGraph: {
    title: "SiteKept - Lightning-Fast Website Development",
    description:
      "Professional websites delivered in 48-72 hours. Modern tech stack, scalable architecture, conversion-focused design.",
    url: "https://sitekept.com",
    siteName: "SiteKept",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteKept - Lightning-Fast Website Development",
    description:
      "Professional websites delivered in 48-72 hours. Modern tech stack, scalable architecture, conversion-focused design.",
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
