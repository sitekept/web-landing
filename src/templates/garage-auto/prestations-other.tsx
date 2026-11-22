import { ArrowRight } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Rupture : bande claire avec les travaux hors forfait en pastilles carrées
 * et le lien vers la demande de devis.
 */
export function OtherWorksBand({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(garageAuto, locale);
  const page = copy.prestations.rule;

  return (
    <TemplateSection tone="raised">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, garageAuto.paths.devis)}
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              {copy.cta.quote}
            </TemplateLink>
          </div>
        </div>
        <ul className="flex flex-wrap gap-3">
          {page.items.map((item) => (
            <li
              key={item}
              className="border-2 border-tpl-ink bg-tpl-surface px-4 py-2.5 text-tpl-sm font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
