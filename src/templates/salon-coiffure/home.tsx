import type { TemplateLocale } from "@/components/template-kit";

import { HomeHero } from "./home-hero";
import { MethodSection, PricesSection } from "./home-offer";
import { ReviewsSection, VisitSection } from "./home-proof";
import { TeamSection, WorkSection } from "./home-team";

/**
 * Accueil : promesse et prix en un coup d’œil, prestations, déroulé d’un
 * rendez-vous, équipe, réalisations en photo, avis, puis horaires et adresse.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <PricesSection locale={locale} />
      <MethodSection locale={locale} />
      <TeamSection locale={locale} />
      <WorkSection locale={locale} />
      <ReviewsSection locale={locale} />
      <VisitSection locale={locale} />
    </>
  );
}
