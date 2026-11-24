import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { LABEL_CLASS, SPLIT_CLASS } from "./parts";

/**
 * Accueil, ouverture `#devis` : promesse, trois garanties, deux liens et le
 * devis guidé en quatre questions (panneau sombre à droite, 5 colonnes sur 12).
 */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(menageNettoyage, locale);
  const { paths } = menageNettoyage;
  const { hero } = copy.home;

  return (
    <TemplateSection id="devis" density="compact">
      <div className={`${SPLIT_CLASS} lg:items-center`}>
        <div className="lg:col-span-7">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={hero.eyebrow}
            title={hero.title}
            description={hero.text}
          />
          <ul className="mt-8 space-y-3">
            {hero.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-tpl-base">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-tpl-eyebrow"
                />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={templateHref(locale, paths.formules)}
              icon={false}
            >
              {copy.cta.seeFormules}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, paths.entreprises)}
              variant="outline"
              icon={false}
              className="bg-tpl-raised"
            >
              {copy.cta.business}
            </TemplateLink>
          </div>
        </div>

        <TemplatePanel
          tone="inverse"
          className="p-6 shadow-tpl-lg lg:col-span-5"
        >
          <div className={`flex items-center justify-between ${LABEL_CLASS}`}>
            <span>{hero.cardTitle}</span>
            <span>{hero.cardTime}</span>
          </div>
          <ol className="mt-4 divide-y divide-tpl-line">
            {hero.steps.map((step, index) => (
              <li key={step.label} className="flex gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="font-tpl-display text-tpl-xl leading-none font-(weight:--tpl-display-weight) tabular-nums"
                >
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold">{step.label}</p>
                  <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="border-t border-tpl-line pt-4 text-tpl-sm text-tpl-ink-muted">
            {hero.cardNote}
          </p>
          <div className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-3">
            <TemplateLink
              href={`mailto:${copy.common.email}`}
              variant="inverse"
              icon={false}
              className="w-full px-3 text-center [overflow-wrap:anywhere]"
            >
              {copy.common.email}
            </TemplateLink>
            <TemplateLink
              href={copy.phone.href}
              variant="outline"
              icon={false}
              className="w-full text-center tabular-nums"
            >
              {copy.phone.label}
            </TemplateLink>
          </div>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
