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

import { LABEL_CLASS } from "./parts";

/** Accueil, ouverture `#devis` : promesse, deux liens et stepper « devis guidé ». */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(menageNettoyage, locale);
  const { paths } = menageNettoyage;
  const { hero } = copy.home;

  return (
    <TemplateSection
      id="devis"
      density="compact"
      className="bg-[radial-gradient(circle_at_top_right,var(--tpl-line),transparent_34%)]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl self-center">
          <p
            className={`inline-flex rounded-tpl bg-tpl-raised px-4 py-2 shadow-tpl-sm ${LABEL_CLASS}`}
          >
            {hero.pill}
          </p>
          <TemplateHeading
            as="h1"
            scale="title"
            title={hero.title}
            description={hero.text}
            className="mt-6"
          />
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

        <TemplatePanel tone="inverse" className="p-6 shadow-tpl-lg">
          <div className={`flex items-center justify-between ${LABEL_CLASS}`}>
            <span>{hero.cardTitle}</span>
            <span>{hero.cardTime}</span>
          </div>
          <ol className="mt-6 space-y-4">
            {hero.steps.map((step) => (
              <li
                key={step.label}
                className="rounded-tpl border border-tpl-line bg-tpl-ink/7 px-4 py-4"
              >
                <p className={LABEL_CLASS}>{step.label}</p>
                <p className="mt-2 text-tpl-sm text-tpl-ink/80">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <TemplateLink
              href={`mailto:${copy.common.email}`}
              variant="inverse"
              icon={false}
              className="w-full px-3"
            >
              {copy.common.email}
            </TemplateLink>
            <TemplateLink
              href={copy.phone.href}
              variant="outline"
              icon={false}
              className="w-full"
            >
              {copy.phone.label}
            </TemplateLink>
          </div>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
