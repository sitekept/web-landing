import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconCard } from "./parts";

export function ContactView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).contact;

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
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <ul className="grid gap-4">
          {page.details.map((detail) => (
            <li key={detail}>
              <TemplatePanel
                tone="surface"
                className="px-5 py-4 text-tpl-sm text-tpl-ink-muted"
              >
                {detail}
              </TemplatePanel>
            </li>
          ))}
        </ul>

        <div className="grid gap-4">
          {page.access.map((item) => (
            <IconCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              inverse
            >
              {item.text}
            </IconCard>
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}
