import {
  TemplateHeading,
  type TemplateLocale,
} from "@/components/template-kit";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { PageHero } from "./parts";
import { AppointmentSection } from "./rendez-vous-form";
import { AccessBand, PrepareSection } from "./rendez-vous-info";

export function RendezVousView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).rendezVous;

  return (
    <>
      <PageHero>
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </PageHero>
      <AppointmentSection locale={locale} />
      <PrepareSection locale={locale} />
      <AccessBand locale={locale} />
    </>
  );
}
