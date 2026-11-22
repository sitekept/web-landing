import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/**
 * Méthode : cinq étapes sur un fil. Sur grand écran, une rangée reliée par une
 * règle ; en dessous, une frise verticale.
 */
export function HomeMethod({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const page = copy.home.method;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ol className="mt-14 grid gap-10 xl:grid-cols-5 xl:grid-rows-[repeat(3,auto)] xl:gap-x-8 xl:gap-y-0">
        {page.steps.map((step, index) => {
          const Icon = ICONS[step.icon];
          const isLast = index === page.steps.length - 1;

          return (
            <li
              key={step.title}
              className="relative pl-16 xl:row-span-3 xl:grid xl:grid-rows-subgrid xl:gap-y-0 xl:pt-16 xl:pl-0"
            >
              {isLast ? null : (
                <span
                  aria-hidden="true"
                  className="absolute top-12 -bottom-10 left-5 w-px bg-tpl-line xl:top-5 xl:right-[-2rem] xl:bottom-auto xl:left-12 xl:h-px xl:w-auto"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-tpl-pill border border-tpl-accent bg-tpl-surface text-tpl-accent"
              >
                <Icon className="size-5" />
              </span>
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {step.title}
              </h3>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{step.text}</p>
            </li>
          );
        })}
      </ol>
    </TemplateSection>
  );
}
