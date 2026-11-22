import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

/** Journal : trois sujets d’article sur le fond crème. */
export function JournalView({ locale }: { locale: TemplateLocale }) {
  const { journal } = getTemplateCopy(salonCoiffure, locale);

  return (
    <TemplateSection
      as="h1"
      density="compact"
      titleScale="subtitle"
      className="flex-1 pt-[calc(var(--tpl-header-offset)+4rem)]"
      eyebrow={journal.eyebrow}
      title={journal.title}
      description={journal.description}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {journal.items.map((item) => (
          <TemplateCard key={item} title={item} titleAs="h2" interactive>
            {journal.text}
          </TemplateCard>
        ))}
      </div>
    </TemplateSection>
  );
}
