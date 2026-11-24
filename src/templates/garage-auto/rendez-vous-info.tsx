import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge } from "./parts";

/** Preuve : trois gestes qui font gagner du temps au diagnostic. */
export function PrepareSection({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).rendezVous.prepare;

  return (
    <TemplateSection>
      <TemplateHeading
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <ul className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-3 lg:mt-12">
        {page.items.map((item) => (
          <li key={item.title} className="border-t-4 border-tpl-ink pt-5">
            <IconBadge icon={item.icon} />
            <h3 className="mt-4 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
              {item.title}
            </h3>
            <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}

/** Rupture et accès : bande sombre, adresse et trois infos pratiques. */
export function AccessBand({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).rendezVous.access;

  return (
    <TemplateSection tone="inverse">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <TemplateHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
          {page.items.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <IconBadge icon={item.icon} />
              <div>
                <h3 className="font-tpl-display text-tpl-base font-(weight:--tpl-display-weight)">
                  {item.title}
                </h3>
                <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
