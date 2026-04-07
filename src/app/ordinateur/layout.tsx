import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechRepair Pro - Réparation Ordinateurs & Smartphones",
  description:
    "TechRepair Pro, experts en réparation d'ordinateurs et smartphones depuis 2010. Diagnostic gratuit, intervention rapide, garantie sur toutes nos réparations. Service professionnel et pièces de qualité.",
  keywords:
    "réparation ordinateur, réparation smartphone, diagnostic gratuit, réparation PC, réparation téléphone, service informatique, dépannage",
  authors: [{ name: "TechRepair Pro" }],
  openGraph: {
    title: "TechRepair Pro - Réparation Ordinateurs & Smartphones",
    description:
      "TechRepair Pro, experts en réparation d'ordinateurs et smartphones depuis 2010. Diagnostic gratuit, intervention rapide, garantie sur toutes nos réparations.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechRepair Pro - Réparation Ordinateurs & Smartphones",
    description:
      "TechRepair Pro, experts en réparation d'ordinateurs et smartphones depuis 2010. Diagnostic gratuit, intervention rapide, garantie sur toutes nos réparations.",
  },
};

export default function OrdinateurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
