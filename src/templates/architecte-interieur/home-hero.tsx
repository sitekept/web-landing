import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { PORTRAIT, photoSizes } from "./parts";

/**
 * Accueil, premier écran : promesse, deux entrées (réalisations, étude) et
 * photo de cuisine à droite. Dessous, quatre repères séparés par des filets.
 */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const { hero } = copy.home;
  const { paths } = architecteInterieur;

  return (
    <TemplateSection density="compact" tone="surface">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
        <div>
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={hero.eyebrow}
            title={hero.title}
            description={hero.text}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TemplateLink
              href={templateHref(locale, paths.contact)}
              shape="square"
            >
              {copy.cta.brief}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, paths.projets)}
              variant="outline"
              shape="square"
              icon={false}
              className="border-tpl-ink"
            >
              {copy.cta.projects}
            </TemplateLink>
          </div>
        </div>
        <div>
          <TemplateMedia
            src={hero.image.src}
            alt={hero.image.alt}
            ratio="4/5"
            rounded="none"
            priority
            sizes={photoSizes(5)}
            className={PORTRAIT}
          />
        </div>
      </div>
      <dl
        aria-label={hero.factsLabel}
        className="mt-12 grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,9.5rem),1fr))] gap-x-6 gap-y-6 border-t border-tpl-ink pt-6"
      >
        {hero.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
              {fact.label}
            </dt>
            <dd className="mt-1 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </TemplateSection>
  );
}
