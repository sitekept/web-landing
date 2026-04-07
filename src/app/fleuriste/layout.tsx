import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleurs d'Émeraude - Fleuriste Artisan & Compositions Florales",
  description:
    "Fleurs d'Émeraude, votre fleuriste artisan depuis 1992. Créations florales sur mesure, bouquets, compositions et arrangements pour tous vos événements. Livraison et conseil personnalisé.",
  keywords:
    "fleuriste, bouquet, composition florale, mariage, événement, livraison fleurs, artisan fleuriste, arrangements floraux",
  authors: [{ name: "Fleurs d'Émeraude" }],
  openGraph: {
    title: "Fleurs d'Émeraude - Fleuriste Artisan & Compositions Florales",
    description:
      "Fleurs d'Émeraude, votre fleuriste artisan depuis 1992. Créations florales sur mesure, bouquets, compositions et arrangements pour tous vos événements.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleurs d'Émeraude - Fleuriste Artisan & Compositions Florales",
    description:
      "Fleurs d'Émeraude, votre fleuriste artisan depuis 1992. Créations florales sur mesure, bouquets, compositions et arrangements pour tous vos événements.",
  },
};

export default function FleuristeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
