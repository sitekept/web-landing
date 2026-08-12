import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Fournil d'Or - Boulangerie Artisanale & Pain Traditionnel",
  description:
    "Le Fournil d'Or, maître boulanger depuis 1978. Pain traditionnel, baguettes, viennoiseries et spécialités artisanales. Méthodes traditionnelles et ingrédients soigneusement sélectionnés.",
  keywords:
    "boulangerie artisanale, pain traditionnel, baguette, viennoiserie, croissant, pain de campagne, boulanger, levain",
  authors: [{ name: "Le Fournil d'Or" }],
  openGraph: {
    title: "Le Fournil d'Or - Boulangerie Artisanale & Pain Traditionnel",
    description:
      "Le Fournil d'Or, maître boulanger depuis 1978. Pain traditionnel, baguettes, viennoiseries et spécialités artisanales.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Fournil d'Or - Boulangerie Artisanale & Pain Traditionnel",
    description:
      "Le Fournil d'Or, maître boulanger depuis 1978. Pain traditionnel, baguettes, viennoiseries et spécialités artisanales.",
  },
};

export default function BoulangerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
