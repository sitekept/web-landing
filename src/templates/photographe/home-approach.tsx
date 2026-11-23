import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

import { Plate } from "./parts";

/** Rupture : bande inverse, image verticale et trois principes de travail. */
export function HomeApproach({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(photographe, locale);
  const { approach } = copy.home;

  return (
    <TemplateSection tone="inverse" density="regular">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Plate
          className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
          src={approach.image.src}
          alt={approach.image.alt}
          ratio="4/5"
          sizes="(min-width: 1072px) 512px, 384px"
        />
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {approach.eyebrow}
          </p>
          <h2 className="mt-4 font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
            {approach.title}
          </h2>
          <p className="mt-6 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
            {approach.description}
          </p>
          <ul
            role="list"
            className="mt-8 border-t border-tpl-line text-tpl-sm [&>li]:border-b [&>li]:border-tpl-line [&>li]:py-4"
          >
            {approach.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, photographe.paths.forfaits)}
              variant="inverse"
              shape="square"
            >
              {copy.cta.seePackages}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
