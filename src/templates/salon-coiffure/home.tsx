import type { TemplateLocale } from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { HomeHero } from "./home-hero";
import { HomeCapsules, HomeNarration } from "./home-sections";

/** Accueil : héros en collage, narration en trois cartes, capsules de style. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const { home } = getTemplateCopy(salonCoiffure, locale);

  return (
    <>
      <HomeHero locale={locale} hero={home.hero} />
      <HomeNarration narration={home.narration} />
      <HomeCapsules locale={locale} capsules={home.capsules} />
    </>
  );
}
