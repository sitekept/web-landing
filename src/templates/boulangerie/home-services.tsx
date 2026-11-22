import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { boulangerie } from "@/content/templates/boulangerie";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS, ICONS } from "./parts";

/** Services : trois cartes teintées sur fond blanc. */
export function HomeServices({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(boulangerie, locale);
  const page = copy.services;

  return (
    <TemplateSection
      id={ANCHORS.services}
      tone="raised"
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="title"
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {page.items.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <li key={item.title}>
              <TemplateCard
                tone="tint"
                elevation="flat"
                title={item.title}
                icon={<Icon aria-hidden="true" className="size-10 text-tpl-accent" />}
                className="h-full p-7"
              >
                {item.text}
              </TemplateCard>
            </li>
          );
        })}
      </ul>
    </TemplateSection>
  );
}
