import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

/** Prestations : trois cartes (coupe, balayage, soin) sur le fond crème. */
export function PrestationsView({ locale }: { locale: TemplateLocale }) {
  const { prestations } = getTemplateCopy(salonCoiffure, locale);

  return (
    <TemplateSection
      as="h1"
      density="compact"
      titleScale="subtitle"
      className="flex-1 pt-[calc(var(--tpl-header-offset)+4rem)]"
      eyebrow={prestations.eyebrow}
      title={prestations.title}
      description={prestations.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {prestations.items.map((item) => (
          <TemplateCard
            key={item.title}
            title={item.title}
            titleAs="h2"
            interactive
          >
            {item.text}
          </TemplateCard>
        ))}
      </div>
    </TemplateSection>
  );
}
