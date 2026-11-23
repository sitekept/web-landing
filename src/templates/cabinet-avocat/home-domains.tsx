import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import {
  cabinetAvocat,
  cabinetAvocatImages,
} from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { COL5_SIZES, LABEL, LINK_OUTLINE } from "./parts";

/**
 * Domaines d'intervention : titre, photo de classeurs et lien à gauche
 * (5 colonnes), liste numérotée des cinq domaines à droite (7 colonnes).
 */
export function HomeDomains({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(cabinetAvocat, locale);
  const { domains } = copy.home;

  return (
    <TemplateSection density="compact" tone="raised">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <TemplateHeading
            eyebrow={domains.eyebrow}
            title={domains.title}
            description={domains.description}
          />
          <TemplateMedia
            src={cabinetAvocatImages.binders}
            alt={domains.imageAlt}
            ratio="3/2"
            rounded="none"
            sizes={COL5_SIZES}
            className="mt-8"
          />
          <TemplateLink
            href={templateHref(locale, cabinetAvocat.paths.expertises)}
            variant="outline"
            icon={false}
            className={`mt-8 ${LINK_OUTLINE}`}
          >
            {domains.more}
          </TemplateLink>
        </div>
        <ol className="divide-y divide-tpl-line border-y border-tpl-line lg:col-span-7">
          {copy.expertises.items.map((item, index) => (
            <li key={item.title} className="flex gap-5 py-6">
              <span
                aria-hidden="true"
                className={`${LABEL} w-7 shrink-0 pt-1.5`}
              >
                0{index + 1}
              </span>
              <div>
                <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-tpl-measure text-tpl-sm text-pretty text-tpl-ink-muted">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </TemplateSection>
  );
}
