import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { LABEL_CLASS } from "./parts";

/** Zones : tournées de la semaine (carte sombre) et six secteurs. */
export function ZonesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).zones;

  return (
    <TemplateSection
      density="compact"
      as="h1"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <TemplatePanel tone="inverse" className="shadow-tpl-sm">
          <h2 className={LABEL_CLASS}>{page.toursTitle}</h2>
          <ul className="mt-5 space-y-4 text-tpl-sm text-tpl-ink/80">
            {page.tours.map((tour) => (
              <li key={tour}>{tour}</li>
            ))}
          </ul>
        </TemplatePanel>
        <ul className="grid gap-4 sm:grid-cols-2">
          {page.areas.map((area) => (
            <li key={area}>
              <TemplatePanel className="h-full shadow-tpl-sm">
                <p className="text-tpl-sm font-semibold">{area}</p>
              </TemplatePanel>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
