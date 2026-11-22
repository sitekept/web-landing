import type { TemplateLocale } from "@/components/template-kit";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { HomeHero } from "./home-hero";
import { ReviewsSection, RuleBand } from "./home-proof";
import { MethodSteps, ServicesGallery } from "./home-services";

/**
 * Accueil : héros et fiche atelier, offre (galerie des métiers), preuve
 * (méthode, avis), rupture (règle de la maison), contact.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const closing = getTemplateCopy(garageAuto, locale).home.closing;

  return (
    <>
      <HomeHero locale={locale} />
      <ServicesGallery locale={locale} />
      <MethodSteps locale={locale} />
      <ReviewsSection locale={locale} />
      <RuleBand locale={locale} />
      <ClosingBand
        locale={locale}
        title={closing.title}
        description={closing.description}
      />
    </>
  );
}
