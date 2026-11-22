import type { TemplateLocale } from "@/components/template-kit";

import { HomeHero } from "./home-hero";
import { HomeProgress } from "./home-progress";
import { HomeQuick } from "./home-quick";
import { HomeZone } from "./home-zone";

/** Accueil : devis guidé, scénarios, étapes, zone. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeQuick locale={locale} />
      <HomeProgress locale={locale} />
      <HomeZone locale={locale} />
    </>
  );
}
