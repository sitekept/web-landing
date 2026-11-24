import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand, ICONS, LABEL_CLASS, SPLIT_CLASS } from "./parts";

/**
 * Entreprises : titre (7 colonnes) et documents remis (panneau sombre, 5),
 * trois types de lieux en lignes, puis le premier mois en trois étapes.
 */
export function EntreprisesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).entreprises;

  return (
    <>
      <TemplateSection density="compact">
        <div className={`${SPLIT_CLASS} lg:items-center`}>
          <div className="lg:col-span-7">
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />
          </div>
          <TemplatePanel
            tone="inverse"
            className="p-6 shadow-tpl-lg lg:col-span-5"
          >
            <h2 className={LABEL_CLASS}>{page.deliverablesTitle}</h2>
            <ul className="mt-4 space-y-3">
              {page.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-tpl-sm">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </TemplatePanel>
        </div>
      </TemplateSection>
      <TemplateSection density="regular" tone="raised">
        <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
          {page.placesTitle}
        </h2>
        <ul className="mt-8 divide-y divide-tpl-line border-y border-tpl-line">
          {page.places.map((place) => {
            const Icon = ICONS[place.icon];

            return (
              <li key={place.title} className={`${SPLIT_CLASS} py-6`}>
                <div className="flex items-center gap-4 lg:col-span-5">
                  <Icon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-tpl-eyebrow"
                  />
                  <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {place.title}
                  </h3>
                </div>
                <p className="max-w-tpl-measure text-tpl-base text-tpl-ink-muted lg:col-span-7">
                  {place.text}
                </p>
              </li>
            );
          })}
        </ul>
      </TemplateSection>
      <TemplateSection density="regular">
        <TemplateHeading title={page.stepsTitle} scale="subtitle" />
        <ol className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {page.steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-tpl-ink pt-5">
              <span
                aria-hidden="true"
                className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight) tabular-nums"
              >
                {index + 1}
              </span>
              <h3 className="mt-3 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {step.title}
              </h3>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </TemplateSection>
      <ClosingBand locale={locale} />
    </>
  );
}
