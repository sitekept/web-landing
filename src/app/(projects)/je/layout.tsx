import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Emmannuelle & Joseph — Le carnet du mariage";
const description =
  "La collection de logos et l’univers visuel du mariage d’Emmannuelle et Joseph.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/je/logos/logo-01-couture-parisienne.jpg",
    shortcut: "/je/logos/logo-01-couture-parisienne.jpg",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      noarchive: true,
    },
  },
  openGraph: {
    title,
    description,
    images: [
      {
        url: "/je/og.png",
        width: 1672,
        height: 941,
        alt: title,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/je/og.png"],
  },
};

export default function WeddingProjectLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
