import type { TemplateLocale } from "@/components/template-kit";

import { HomeContact } from "./home-contact";
import { HomeHero } from "./home-hero";
import { HomeReviews } from "./home-reviews";
import { HomeServices } from "./home-services";
import { HomeShowcase } from "./home-showcase";
import { HomeWhy } from "./home-why";

/** Page unique : héros, vitrine, arguments, services, avis, contact. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeShowcase locale={locale} />
      <HomeWhy locale={locale} />
      <HomeServices locale={locale} />
      <HomeReviews locale={locale} />
      <HomeContact locale={locale} />
    </>
  );
}
