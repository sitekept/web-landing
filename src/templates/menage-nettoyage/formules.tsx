import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { LABEL_CLASS } from "./parts";

/** Formules : quatre scénarios d'intervention, le deuxième sur fond sombre. */
export function FormulesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).formules;

  return (
    <TemplateSection
      density="compact"
      as="h1"
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="grid gap-4 xl:grid-cols-4">
        {page.items.map((item, index) => (
          <li key={item.title}>
            <TemplatePanel
              tone={index === 1 ? "inverse" : "raised"}
              className="h-full shadow-tpl-sm"
            >
              <h2 className={LABEL_CLASS}>{item.title}</h2>
              <p className="mt-4 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </TemplatePanel>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
