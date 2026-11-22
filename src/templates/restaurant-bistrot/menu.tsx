import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP, TextPanels } from "./parts";

/** Menu : la carte en trois temps, sur fond crème. */
export function MenuView({ locale }: { locale: TemplateLocale }) {
  const { menu } = getTemplateCopy(restaurantBistrot, locale);

  return (
    <TemplateSection
      density="compact"
      as="h1"
      eyebrow={menu.eyebrow}
      title={menu.title}
      className={FIRST_SECTION_TOP}
    >
      <TextPanels items={menu.items} />
    </TemplateSection>
  );
}
