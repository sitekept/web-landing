import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP, TextPanels } from "./parts";

/** Privatisation : trois formats de groupe et le lien vers le contact. */
export function PrivatisationView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const { privatisation } = copy;

  return (
    <TemplateSection
      density="compact"
      as="h1"
      tone="inverse"
      eyebrow={privatisation.eyebrow}
      title={privatisation.title}
      description={privatisation.description}
      className={FIRST_SECTION_TOP}
    >
      <TextPanels items={privatisation.items} />
      <div className="mt-8">
        <TemplateLink
          href={templateHref(locale, restaurantBistrot.paths.contact)}
          variant="inverse"
        >
          {copy.cta.contactRestaurant}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
