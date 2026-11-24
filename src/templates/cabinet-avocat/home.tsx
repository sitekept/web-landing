import type { TemplateLocale } from "@/components/template-kit";

import { HomeCases } from "./home-cases";
import { HomeDomains } from "./home-domains";
import { HomeFees } from "./home-fees";
import { HomeHero } from "./home-hero";
import { HomeSteps } from "./home-steps";
import { ClosingCta } from "./parts";

/**
 * Accueil : promesse et salle de réunion, cinq domaines, méthode en trois
 * étapes (fond encre), honoraires, trois situations types, puis appel au
 * rendez-vous.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeDomains locale={locale} />
      <HomeSteps locale={locale} />
      <HomeFees locale={locale} />
      <HomeCases locale={locale} />
      <ClosingCta locale={locale} />
    </>
  );
}
