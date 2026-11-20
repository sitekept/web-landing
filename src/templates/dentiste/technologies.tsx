import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconCard } from "./parts";

export function TechnologiesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).technologies;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      as="h1"
      titleScale="subtitle"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {page.items.map((item) => (
          <IconCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            className="bg-tpl-surface"
          >
            {item.text}
          </IconCard>
        ))}
      </div>
    </TemplateSection>
  );
}
