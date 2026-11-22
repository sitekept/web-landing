import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

/** Après le message : trois temps, en rangée sur fond relevé. */
export function ContactNext({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.contact.next;

  return (
    <TemplateSection tone="raised" eyebrow={page.eyebrow} title={page.title}>
      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {page.steps.map((step, index) => {
          const Icon = ICONS[step.icon];

          return (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-tpl-pill border border-tpl-accent text-tpl-accent"
              >
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {step.title}
                </h3>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                  {step.text}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </TemplateSection>
  );
}
