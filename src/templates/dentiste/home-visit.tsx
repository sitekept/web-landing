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
 * Première visite : salle d'attente à gauche (5 colonnes), trois temps
 * numérotés à droite (7 colonnes), reliés par un filet vertical.
 */
export function HomeVisit({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const page = copy.home.visit;

  return (
    <TemplateSection tone="tint">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="3/2"
            sizes={SIZES.COL5_LG}
          />
        </div>
        <div className="lg:col-span-7">
          <TemplateHeading
            scale="subtitle"
            eyebrow={page.eyebrow}
            title={page.title}
          />
          <ol className="mt-8 space-y-8 border-l border-tpl-ink/30 pl-8">
            {page.steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-0 -left-[calc(2rem+0.875rem)] flex size-7 items-center justify-center rounded-tpl bg-tpl-ink text-tpl-xs font-semibold text-tpl-surface tabular-nums"
                >
                  {index + 1}
                </span>
                <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, dentiste.paths.premiereVisite)}
              variant="outline"
              className="border-tpl-ink/40 bg-tpl-raised"
            >
              {copy.cta.prepareFirstVisit}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
