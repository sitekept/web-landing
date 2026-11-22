import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/** Accueil : quatre scénarios courts, pastille d'icône à gauche à partir de `lg`. */
export function HomeQuick({ locale }: { locale: TemplateLocale }) {
  const quick = getTemplateCopy(menageNettoyage, locale).home.quick;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      eyebrow={quick.eyebrow}
      title={quick.title}
      description={quick.description}
      titleScale="subtitle"
    >
      <ul className="grid gap-4 lg:grid-cols-2">
        {quick.items.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <li key={item.title}>
              <TemplatePanel className="grid h-full gap-4 shadow-tpl-sm lg:grid-cols-[auto_1fr]">
                <div
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-tpl bg-tpl-surface text-tpl-ink"
                >
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                    {item.text}
                  </p>
                </div>
              </TemplatePanel>
            </li>
          );
        })}
      </ul>
    </TemplateSection>
  );
}
