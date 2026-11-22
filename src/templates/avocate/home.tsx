import type { TemplateLocale } from "@/components/template-kit";

import { BlogSection, ContactSection } from "./home-contact";
import { HomeHero } from "./home-hero";
import {
  ApproachSection,
  ExpertisesSection,
  MethodSection,
} from "./home-sections";

/** Accueil : héros, expertises, méthode, approche, blog, contact. */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  return (
    <>
      <HomeHero locale={locale} />
      <ExpertisesSection locale={locale} />
      <MethodSection locale={locale} />
      <ApproachSection locale={locale} />
      <BlogSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
