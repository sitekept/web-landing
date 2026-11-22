import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP } from "./parts";

/** Histoire : deux encarts, l'un blanc et l'autre sombre, sur fond crème. */
export function HistoireView({ locale }: { locale: TemplateLocale }) {
  const { histoire } = getTemplateCopy(restaurantBistrot, locale);

  return (
    <TemplateSection
      density="compact"
      as="h1"
      eyebrow={histoire.eyebrow}
      title={histoire.title}
      className={FIRST_SECTION_TOP}
    >
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <TemplatePanel className="text-tpl-sm leading-7">
          {histoire.first}
        </TemplatePanel>
        <TemplatePanel
          tone="inverse"
          className="text-tpl-sm leading-7 text-tpl-ink-muted"
        >
          {histoire.second}
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
