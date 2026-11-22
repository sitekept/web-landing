import type { TemplateLocale } from "@/components/template-kit";

import { HomeAbout } from "./home-about";
import { HomeContact } from "./home-contact";
import { HomeGallery } from "./home-gallery";
import { HomeHero } from "./home-hero";
import { HomeReviews } from "./home-reviews";
import { HomeServices } from "./home-services";
import { HomeSpecials } from "./home-specials";

/**
 * Page unique : héros, services, à propos, avis, réalisations, services
 * spécialisés, contact. Alternance ardoise, clair et bleu plein.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeServices locale={locale} />
      <HomeAbout locale={locale} />
      <HomeReviews locale={locale} />
      <HomeGallery locale={locale} />
      <HomeSpecials locale={locale} />
      <HomeContact locale={locale} />
    </>
  );
}
