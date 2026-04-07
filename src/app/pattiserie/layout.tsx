import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pâtisserie Douceur - Pâtisserie Artisanale & Créations Gourmandes",
  description:
    "Pâtisserie Douceur, artisan pâtissier depuis 1985. Spécialités françaises, entremets, gâteaux personnalisés et pâtisseries individuelles. Savoir-faire traditionnel et ingrédients de qualité.",
  keywords:
    "pâtisserie artisanale, gâteau personnalisé, entremets, éclair, saint-honoré, pâtissier traditionnel, commande gâteau",
  authors: [{ name: "Pâtisserie Douceur" }],
  openGraph: {
    title: "Pâtisserie Douceur - Pâtisserie Artisanale & Créations Gourmandes",
    description:
      "Pâtisserie Douceur, artisan pâtissier depuis 1985. Spécialités françaises, entremets, gâteaux personnalisés et pâtisseries individuelles.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pâtisserie Douceur - Pâtisserie Artisanale & Créations Gourmandes",
    description:
      "Pâtisserie Douceur, artisan pâtissier depuis 1985. Spécialités françaises, entremets, gâteaux personnalisés et pâtisseries individuelles.",
  },
};

export default function PattiserieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
