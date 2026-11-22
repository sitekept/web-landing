import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

/** FAQ : trois questions pratiques, une carte chacune. */
export function FaqView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).faq;

  return (
    <TemplateSection
      density="compact"
      as="h1"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="space-y-4">
        {page.items.map((item) => (
          <TemplateCard
            key={item.q}
            title={item.q}
            titleAs="h2"
            elevation="raised"
          >
            {item.a}
          </TemplateCard>
        ))}
      </div>
    </TemplateSection>
  );
}
