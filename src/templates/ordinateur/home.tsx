import type { TemplateLocale } from "@/components/template-kit";

import { HomeBusiness } from "./home-business";
import { HomeContact } from "./home-contact";
import { HomeHero } from "./home-hero";
import { HomeProcess } from "./home-process";
import { HomeRepairs } from "./home-repairs";
import { HomeReviews } from "./home-reviews";
import { HomeWorkshop } from "./home-workshop";

/**
 * Page unique : accueil graphite (promesse, preuves, photo), réparations avec
 * prix et délais, déroulé en quatre étapes, entreprises (fond graphite), avis,
 * atelier, contact avec formulaire de prise en charge.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeRepairs locale={locale} />
      <HomeProcess locale={locale} />
      <HomeBusiness locale={locale} />
      <HomeReviews locale={locale} />
      <HomeWorkshop locale={locale} />
      <HomeContact locale={locale} />
    </>
  );
}
