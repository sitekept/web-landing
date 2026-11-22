import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { PanelText } from "./parts";

/** Journal : trois notes courtes. */
export function JournalView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(architecteInterieur, locale).journal;

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
          <TemplatePanel key={item} tone="tint">
            <PanelText>{item}</PanelText>
          </TemplatePanel>
        ))}
      </div>
    </TemplateSection>
  );
}
