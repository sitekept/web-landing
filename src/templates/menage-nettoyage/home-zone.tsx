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
 * Accueil : jours de tournée par secteur (8 colonnes) et coordonnées pratiques
 * dans un panneau (4 colonnes).
 */
export function HomeZone({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(menageNettoyage, locale);
  const zone = copy.home.zone;
  const { paths } = menageNettoyage;

  return (
    <TemplateSection tone="raised" density="regular">
      <div className={SPLIT_CLASS}>
        <div className="lg:col-span-8">
          <TemplateHeading
            eyebrow={zone.eyebrow}
            title={zone.title}
            description={zone.description}
          />
          <dl className="mt-10 divide-y divide-tpl-line border-y border-tpl-line">
            {zone.tours.map((tour) => (
              <div
                key={tour.days}
                className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6"
              >
                <dt className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {tour.days}
                </dt>
                <dd className="text-tpl-base text-tpl-ink-muted">
                  {tour.areas}
                </dd>
              </div>
            ))}
          </dl>
          <TemplateLink
            href={templateHref(locale, paths.zones)}
            variant="outline"
            icon={false}
            className="mt-8"
          >
            {copy.cta.zones}
          </TemplateLink>
        </div>
        <TemplatePanel
          tone="surface"
          className="p-6 lg:col-span-4 lg:self-start"
        >
          <p className={LABEL_CLASS}>{zone.contactTitle}</p>
          <ul className="mt-4 space-y-2 text-tpl-sm">
            <li>
              <a
                href={copy.phone.href}
                className="inline-flex min-h-11 items-center font-semibold tabular-nums underline-offset-4 hover:underline"
              >
                {copy.phone.label}
              </a>
            </li>
            <li className="break-words">{copy.common.email}</li>
            <li>{copy.common.hours}</li>
            <li>{copy.common.address}</li>
          </ul>
          <p className="mt-4 text-tpl-sm text-tpl-ink-muted">{zone.note}</p>
          <TemplateLink href="#devis" icon={false} className="mt-6 w-full">
            {copy.cta.quote}
          </TemplateLink>
        </TemplatePanel>
      </div>
    </TemplateSection>
  );
}
