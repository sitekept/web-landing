import {
  TemplateHeading,
  type TemplateLocale,
} from "@/components/template-kit";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { GridBackdrop, HazardStripe } from "./parts";
import { ServiceList, StepsSection } from "./prestations-sections";

export function PrestationsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(electricien, locale).prestations;

  return (
    <>
      <GridBackdrop className="py-12 lg:py-16">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </GridBackdrop>
      <HazardStripe />
      <ServiceList locale={locale} />
      <StepsSection locale={locale} />
      <ClosingBand
        locale={locale}
        title={page.closing.title}
        description={page.closing.description}
      />
    </>
  );
}
