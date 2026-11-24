import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand, LABEL_CLASS, SPLIT_CLASS } from "./parts";

/**
 * Zones : tournées de la semaine (panneau sombre, 5 colonnes) et six secteurs
 * (7 colonnes), puis premier passage et hors secteur.
 */
export function ZonesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).zones;

  return (
    <>
      <TemplateSection density="compact">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <div className={`${SPLIT_CLASS} mt-12`}>
          <TemplatePanel
            tone="inverse"
            className="p-6 shadow-tpl-sm lg:col-span-5 lg:self-start"
          >
            <h2 className={LABEL_CLASS}>{page.toursTitle}</h2>
            <dl className="mt-2 divide-y divide-tpl-line">
              {page.tours.map((tour) => (
                <div key={tour.days} className="py-4">
                  <dt className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {tour.days}
                  </dt>
                  <dd className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {tour.areas}
                  </dd>
                </div>
              ))}
            </dl>
          </TemplatePanel>
          <div className="lg:col-span-7">
            <h2 className={LABEL_CLASS}>{page.areasTitle}</h2>
            <ul className="mt-2 divide-y divide-tpl-line border-b border-tpl-line">
              {page.areas.map((area) => (
                <li
                  key={area.name}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {area.name}
                  </span>
                  <span className="text-tpl-sm text-tpl-ink-muted">
                    {area.days}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TemplateSection>
      <TemplateSection density="compact" tone="raised">
        <div className={SPLIT_CLASS}>
          {[page.firstVisit, page.outside].map((block) => (
            <div key={block.title} className="lg:col-span-6">
              <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {block.title}
              </h2>
              <p className="mt-3 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </TemplateSection>
      <ClosingBand locale={locale} />
    </>
  );
}
