import { type TemplateLocale } from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { FeesSection } from "./fees";
import { HomeHero } from "./home-hero";
import { HomeJournal, HomeProof } from "./home-closing";
import { HomeMethod } from "./home-method";
import { HomeWorks } from "./home-works";
import { CtaBand } from "./parts";

/**
 * Accueil : promesse et photo, trois réalisations, honoraires, méthode en
 * quatre temps, avis, journal, puis prise de rendez-vous.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const { paths } = architecteInterieur;
  const { offer, closing } = copy.home;

  return (
    <>
      <HomeHero locale={locale} />
      <HomeWorks locale={locale} />
      <FeesSection
        locale={locale}
        title={offer.title}
        description={offer.description}
        more={{ href: paths.methode, label: offer.more }}
      />
      <HomeMethod locale={locale} />
      <HomeProof locale={locale} />
      <HomeJournal locale={locale} />
      <CtaBand locale={locale} title={closing.title} text={closing.text} />
    </>
  );
}
