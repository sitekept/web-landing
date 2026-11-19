import {
  CalendarClock,
  CircleCheckBig,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconCard } from "./parts";

const STEP_ICONS: readonly LucideIcon[] = [
  ClipboardList,
  CalendarClock,
  CircleCheckBig,
];

export function RendezVousView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const page = copy.rendezVous;

  return (
    <TemplateSection
      density="compact"
      as="h1"
      titleScale="subtitle"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          data-tone="inverse"
          className="rounded-tpl bg-tpl-inverse p-6 text-tpl-ink"
        >
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {page.reasons.eyebrow}
          </p>
          <ul className="mt-5 space-y-3">
            {page.reasons.items.map((item, index) => (
              <li
                key={item}
                className="rounded-tpl border border-tpl-line bg-tpl-raised px-4 py-4"
              >
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                  {page.reasons.label} 0{index + 1}
                </p>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          {page.steps.map((step, index) => (
            <IconCard key={step.title} icon={STEP_ICONS[index]} title={step.title}>
              {step.text}
            </IconCard>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <TemplateLink href={copy.phone.href} icon={false}>
          {copy.cta.callSecretary}
        </TemplateLink>
        <TemplateLink
          href={templateHref(locale, dentiste.paths.premiereVisite)}
          variant="outline"
          className="bg-tpl-raised"
        >
          {copy.cta.prepareVisit}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
