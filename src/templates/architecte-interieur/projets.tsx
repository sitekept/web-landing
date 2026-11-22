import {
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { EntryRow } from "./parts";

/** Projets : sommaire long de cas d'étude. */
export function ProjetsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(architecteInterieur, locale).projets;

  return (
    <TemplateSection
      density="compact"
      tone="surface"
      as="h1"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="space-y-4">
        {page.items.map((item) => (
          <EntryRow
            key={item.title}
            tinted
            href={templateHref(locale, item.href)}
            label={item.label}
            title={item.title}
            text={item.summary}
          />
        ))}
      </div>
    </TemplateSection>
  );
}
