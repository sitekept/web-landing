import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { boulangerie } from "@/content/templates/boulangerie";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS, IconBadge } from "./parts";

/** « Pourquoi revenir » : trois arguments à gauche, panneau sombre à droite. */
export function HomeWhy({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(boulangerie, locale);
  const page = copy.why;

  return (
    <TemplateSection
      tone="tint"
      density="compact"
      className="border-y border-tpl-line"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            scale="title"
          />
          <ul className="mt-8 space-y-4">
            {page.points.map((point) => (
              <li key={point.title}>
                <TemplatePanel className="flex items-start gap-4 shadow-tpl-sm">
                  <IconBadge icon={point.icon} />
                  <div>
                    <h3 className="text-tpl-base font-semibold">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                      {point.text}
                    </p>
                  </div>
                </TemplatePanel>
              </li>
            ))}
          </ul>
        </div>

        <TemplatePanel
          tone="inverse"
          className="flex flex-col justify-center p-8 shadow-tpl-lg"
        >
          <p className="text-tpl-sm tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
            {page.panel.eyebrow}
          </p>
          <h3 className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
            {page.panel.title}
          </h3>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {page.panel.stats.map((stat) => {
              const Icon = ICONS[stat.icon];

              return (
                <li key={stat.label} className="rounded-tpl bg-tpl-ink/10 p-5">
                  <Icon aria-hidden="true" className="size-8 text-tpl-eyebrow" />
                  <p className="mt-4 text-tpl-xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-tpl-sm text-tpl-ink/90">
                    {stat.label}
                  </p>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-tpl-sm text-tpl-ink-muted">
            {page.panel.text}
          </p>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
