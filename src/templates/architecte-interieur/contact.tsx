import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { PanelText } from "./parts";

/** Contact : le brief en trois questions. */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(architecteInterieur, locale).contact;

  return (
    <TemplateSection
      density="compact"
      tone="tint"
      as="h1"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-4 xl:grid-cols-3">
        {page.items.map((item) => (
          <TemplatePanel key={item} tone="tint">
            <PanelText>{item}</PanelText>
          </TemplatePanel>
        ))}
      </div>
    </TemplateSection>
  );
}
