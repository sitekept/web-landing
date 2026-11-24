import type { TemplateLocale } from "@/components/template-kit";

import { HomeHero } from "./home-hero";
import { HomePromise } from "./home-promise";
import { HomeServices } from "./home-services";
import { HomeVisit } from "./home-visit";
import { HomeZone } from "./home-zone";

/** Accueil : devis guidé, services et photo, passage type, engagements, secteurs. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeServices locale={locale} />
      <HomeVisit locale={locale} />
      <HomePromise locale={locale} />
      <HomeZone locale={locale} />
    </>
  );
}
