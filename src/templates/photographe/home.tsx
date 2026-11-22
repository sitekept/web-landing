import type { TemplateLocale } from "@/components/template-kit";

import { HomeApproach } from "./home-approach";
import { HomeDomains } from "./home-domains";
import { HomeHero } from "./home-hero";
import { HomeProof } from "./home-proof";
import { ClosingBand } from "./parts";

/**
 * Accueil : hero (titre fort + grande image), trois séries (galerie à
 * panneaux), preuve (chiffres, avis), rupture inverse (méthode), contact.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeDomains locale={locale} />
      <HomeProof locale={locale} />
      <HomeApproach locale={locale} />
      <ClosingBand locale={locale} tone="surface" />
    </>
  );
}
