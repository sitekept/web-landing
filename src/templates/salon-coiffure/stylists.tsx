import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

/** Stylists : trois profils sur fond blanc, même texte sous chaque nom. */
export function StylistsView({ locale }: { locale: TemplateLocale }) {
  const { stylists } = getTemplateCopy(salonCoiffure, locale);

  return (
    <TemplateSection
      as="h1"
      tone="raised"
      density="compact"
      titleScale="subtitle"
      className="flex-1 pt-[calc(var(--tpl-header-offset)+4rem)]"
      eyebrow={stylists.eyebrow}
      title={stylists.title}
      description={stylists.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {stylists.items.map((item) => (
          <TemplateCard key={item} title={item} titleAs="h2" interactive>
            {stylists.text}
          </TemplateCard>
        ))}
      </div>
    </TemplateSection>
  );
}
