import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { getTemplateCopy } from "@/content/templates/types";

import {
  HomeManifesto,
  HomePause,
  HomeProof,
  HomeSteps,
  HomeUniverses,
} from "./home-sections";
import { ClosingCta, RULE } from "./parts";

/**
 * Accueil : hero éditorial (titre serif géant, photo décalée vers le bas,
 * bande de chiffres), manifeste, trois univers, avis, rupture, étapes, devis.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(createurCulinaire, locale);
  const page = copy.home.hero;

  return (
    <>
      <TemplateSection>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <TemplateHeading
              as="h1"
              scale="display"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
              className="max-w-none"
            />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <TemplateLink
                href={templateHref(locale, createurCulinaire.paths.commande)}
                shape="square"
              >
                {copy.cta.order}
              </TemplateLink>
              <TemplateLink
                href={templateHref(locale, createurCulinaire.paths.creations)}
                variant="outline"
                shape="square"
                icon={false}
              >
                {copy.cta.seeCreations}
              </TemplateLink>
            </div>
          </div>

          <figure className="lg:col-span-5 lg:mt-24">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="4/5"
              rounded="none"
              priority
              sizes="(min-width: 1408px) 512px, (min-width: 1024px) calc(34.5vw - 19px), calc(85vw - 16px)"
            />
            <figcaption className="mt-3 font-tpl-display text-tpl-base text-tpl-ink-muted italic">
              {page.caption}
            </figcaption>
          </figure>
        </div>

        <dl className="mt-16 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-24">
          {page.facts.map((fact) => (
            <div key={fact.value} className={`${RULE} pt-4`}>
              <dt className="font-tpl-display text-tpl-xl">{fact.value}</dt>
              <dd className="mt-1 text-tpl-sm text-tpl-ink-muted">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </TemplateSection>
      <HomeManifesto locale={locale} />
      <HomeUniverses locale={locale} />
      <HomeProof locale={locale} />
      <HomePause locale={locale} />
      <HomeSteps locale={locale} />
      <ClosingCta
        locale={locale}
        title={copy.home.closing.title}
        text={copy.home.closing.text}
      />
    </>
  );
}
