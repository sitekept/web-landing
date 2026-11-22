import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP, TextPanels } from "./parts";

/** Contact : adresse, horaires et e-mail en trois panneaux. */
export function ContactView({ locale }: { locale: TemplateLocale }) {
  const { contact } = getTemplateCopy(restaurantBistrot, locale);

  return (
    <TemplateSection
      density="compact"
      as="h1"
      tone="inverse"
      eyebrow={contact.eyebrow}
      title={contact.title}
      // Page courte : la section sombre descend jusqu'au pied de page.
      className={`${FIRST_SECTION_TOP} min-h-[85svh]`}
    >
      <TextPanels items={contact.items} />
    </TemplateSection>
  );
}
