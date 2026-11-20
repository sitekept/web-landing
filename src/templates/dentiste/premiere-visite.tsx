import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconCard } from "./parts";

export function PremiereVisiteView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const page = copy.premiereVisite;

  return (
    <TemplateSection
      density="compact"
      as="h1"
      titleScale="subtitle"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {page.steps.map((step) => (
          <IconCard key={step.title} icon={step.icon} title={step.title}>
            {step.text}
          </IconCard>
        ))}
      </div>

      <div className="mt-8">
        <TemplateLink href={templateHref(locale, dentiste.paths.rendezVous)}>
          {copy.cta.bookFirstVisit}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
