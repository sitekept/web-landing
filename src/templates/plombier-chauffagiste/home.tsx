import type { TemplateLocale } from "@/components/template-kit";
import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingPanel } from "./closing";
import { HomeHero, PromisesBand } from "./home-hero";
import { OfferSection, StepsSection } from "./home-offer";
import { RefuseSection, ReviewsSection } from "./home-proof";

/** Accueil : hero en deux entrées, offre, preuve, rupture, contact. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const closing = getTemplateCopy(plombierChauffagiste, locale).home.closing;

  return (
    <>
      <HomeHero locale={locale} />
      <PromisesBand locale={locale} />
      <OfferSection locale={locale} />
      <StepsSection locale={locale} />
      <ReviewsSection locale={locale} />
      <RefuseSection locale={locale} />
      <ClosingPanel
        locale={locale}
        eyebrow={closing.eyebrow}
        title={closing.title}
        description={closing.description}
      />
    </>
  );
}
