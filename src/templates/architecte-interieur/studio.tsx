import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { PanelText } from "./parts";

/** Studio : manifeste et trois domaines d'intervention. */
export function StudioView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(architecteInterieur, locale).studio;

  return (
    <TemplateSection
      density="compact"
      tone="tint"
      as="h1"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <TemplatePanel tone="tint">
          <p className="text-tpl-sm leading-8 text-tpl-ink-muted">
            {page.text}
          </p>
        </TemplatePanel>
        <div className="grid gap-4">
          {page.areas.map((area) => (
            <TemplatePanel key={area} tone="tint">
              <PanelText>{area}</PanelText>
            </TemplatePanel>
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}
