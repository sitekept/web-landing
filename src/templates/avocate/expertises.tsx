import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { avocate } from "@/content/templates/avocate";
import { getTemplateCopy } from "@/content/templates/types";

import { CARD_TITLE, DetailList } from "./parts";

/** Expertises : les deux domaines en détail, puis ce qu'un premier message doit dire. */
export function ExpertisesView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(avocate, locale);
  const page = copy.expertises;

  return (
    <>
      <TemplateSection
        as="h1"
        density="compact"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {page.areas.map((area) => (
            <TemplatePanel key={area.title}>
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {page.areaLabel}
              </p>
              <h2 className={`${CARD_TITLE} mt-4 text-tpl-2xl`}>
                {area.title}
              </h2>
              <p className="mt-5 text-tpl-sm leading-7 text-tpl-ink-muted">
                {area.intro}
              </p>
              <div className="mt-7">
                <DetailList items={area.items} />
              </div>
            </TemplatePanel>
          ))}
        </div>
      </TemplateSection>

      <TemplateSection
        tone="tint"
        density="compact"
        className="border-t border-tpl-line"
        eyebrow={page.file.eyebrow}
        title={page.file.title}
        description={page.file.description}
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {page.file.items.map((item) => (
            <TemplatePanel key={item}>
              <p className={`${CARD_TITLE} text-tpl-lg`}>{item}</p>
            </TemplatePanel>
          ))}
        </div>
      </TemplateSection>
    </>
  );
}
