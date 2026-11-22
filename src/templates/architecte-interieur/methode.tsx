import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { PanelText } from "./parts";

/** Méthode : quatre arbitrages, le troisième sur fond sombre. */
export function MethodeView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(architecteInterieur, locale).methode;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      as="h1"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-4 xl:grid-cols-4">
        {page.steps.map((step, index) =>
          index === 2 ? (
            <TemplatePanel key={step} tone="inverse">
              <PanelText>{step}</PanelText>
            </TemplatePanel>
          ) : (
            <TemplatePanel key={step} tone="tint">
              <PanelText>{step}</PanelText>
            </TemplatePanel>
          )
        )}
      </div>
    </TemplateSection>
  );
}
