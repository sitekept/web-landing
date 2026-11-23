import type { TemplateLocale } from "@/components/template-kit";

import { ClosingBand } from "./closing";
import { HomeHero } from "./home-hero";
import { HomeReviews } from "./home-reviews";
import { HomeSoins } from "./home-soins";
import { HomeTech } from "./home-tech";
import { HomeVisit } from "./home-visit";

/**
 * Accueil : promesse et repères, soins et tarifs, technologies, première
 * visite, avis de patients, puis rendez-vous et coordonnées.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeSoins locale={locale} />
      <HomeTech locale={locale} />
      <HomeVisit locale={locale} />
      <HomeReviews locale={locale} />
      <ClosingBand locale={locale} />
    </>
  );
}
