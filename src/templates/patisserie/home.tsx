import type { TemplateLocale } from "@/components/template-kit";

import { HomeCollections } from "./home-collections";
import { HomeContact } from "./home-contact";
import { HomeGallery } from "./home-gallery";
import { HomeHero } from "./home-hero";
import { HomeOccasions } from "./home-occasions";
import { HomeReviews } from "./home-reviews";
import { HomeSignature } from "./home-signature";

/** Page unique : héros, collections, signature, occasions, galerie, avis, contact. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeCollections locale={locale} />
      <HomeSignature locale={locale} />
      <HomeOccasions locale={locale} />
      <HomeGallery locale={locale} />
      <HomeReviews locale={locale} />
      <HomeContact locale={locale} />
    </>
  );
}
