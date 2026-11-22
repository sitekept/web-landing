import type { TemplateLocale } from "@/components/template-kit";

import { HomeContact } from "./home-contact";
import { HomeGallery } from "./home-gallery";
import { HomeHero } from "./home-hero";
import { HomeProjects } from "./home-projects";
import { HomeReviews } from "./home-reviews";
import { HomeStudio } from "./home-studio";

/** Page unique : héros, projets, atelier, galerie, témoignages, contact. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeProjects locale={locale} />
      <HomeStudio locale={locale} />
      <HomeGallery locale={locale} />
      <HomeReviews locale={locale} />
      <HomeContact locale={locale} />
    </>
  );
}
