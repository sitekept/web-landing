import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { SIZES } from "./parts";

/**
 * Offre : photo portrait à gauche (5 colonnes), les quatre familles de soins
 * à droite (7 colonnes), en lignes séparées par des filets, avec leur tarif.
 */
export function HomeSoins({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const page = copy.home.soins;

  return (
    <TemplateSection>
      <div className="grid gap-10 md:grid-cols-12 md:items-center lg:gap-14">
        <div className="md:col-span-5">
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="4/5"
            sizes={SIZES.COL5_MD}
          />
        </div>
        <div className="md:col-span-7">
          <TemplateHeading
            scale="subtitle"
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <ul className="mt-8 divide-y divide-tpl-line border-y border-tpl-line">
            {page.items.map((item) => (
              <li key={item.title} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {item.title}
                  </h3>
                  <p className="text-tpl-sm font-semibold tabular-nums">
                    {item.price}
                  </p>
                </div>
                <p className="mt-2 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, dentiste.paths.soins)}
              variant="outline"
              className="border-tpl-ink/40"
            >
              {copy.cta.seeSoins}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
