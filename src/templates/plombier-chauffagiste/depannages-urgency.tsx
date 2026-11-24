import { Check, Moon, Sunrise } from "lucide-react";

import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Urgence ce soir ou demain matin : deux colonnes, ce qui ne peut pas attendre
 * (encre sur fond ambre) et ce qui peut attendre sans majoration.
 */
export function UrgencySection({ locale }: { locale: TemplateLocale }) {
  const urgency = getTemplateCopy(plombierChauffagiste, locale).depannages
    .urgency;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={urgency.eyebrow}
      title={urgency.title}
      description={urgency.description}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-tpl bg-tpl-accent p-6 text-tpl-accent-ink sm:p-8">
          <p className="flex items-center gap-3 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
            <Moon aria-hidden="true" className="size-5 shrink-0" />
            {urgency.nowLabel}
          </p>
          <ul className="mt-5 space-y-3">
            {urgency.now.map((item) => (
              <li key={item} className="flex gap-3 text-tpl-base">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-tpl border border-tpl-line bg-tpl-surface p-6 sm:p-8">
          <p className="flex items-center gap-3 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
            <Sunrise aria-hidden="true" className="size-5 shrink-0" />
            {urgency.laterLabel}
          </p>
          <ul className="mt-5 space-y-3">
            {urgency.later.map((item) => (
              <li key={item} className="flex gap-3 text-tpl-base">
                <Check
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-tpl-ink"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TemplateSection>
  );
}
