import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/** Rupture sapin : le déroulé d'une visite en trois temps (avant, pendant, après). */
export function BiensVisit({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.biens.visit;

  return (
    <TemplateSection
      tone="inverse"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ol className="mt-12 grid gap-px overflow-hidden rounded-tpl border border-tpl-line bg-tpl-line md:grid-cols-3">
        {page.steps.map((step) => {
          const Icon = ICONS[step.icon];

          return (
            <li key={step.title} className="bg-tpl-surface p-7">
              <Icon aria-hidden="true" className="size-6 text-tpl-ink" />
              <h3 className="mt-5 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {step.title}
              </h3>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{step.text}</p>
            </li>
          );
        })}
      </ol>
    </TemplateSection>
  );
}
