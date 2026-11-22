import { CalendarDays } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { HomeDistricts } from "./home-districts";
import { HomeFeatured } from "./home-featured";
import { HomeMethod } from "./home-method";
import { HomeOffer } from "./home-offer";
import { HomePromise } from "./home-promise";
import { HomeProof } from "./home-proof";
import { HomeSelection } from "./home-selection";

/**
 * Accueil : titre pleine largeur, large photo en dessous, puis une carte
 * ivoire qui chevauche le bas de la photo et porte les trois repères chiffrés.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.home.hero;
  const href = (path: string) => templateHref(locale, path);

  return (
    <>
      <TemplateSection density="compact">
        <div className="grid gap-8">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={href(agenceImmobiliere.paths.estimation)}
              icon={<CalendarDays aria-hidden="true" className="size-4" />}
            >
              {copy.cta.estimate}
            </TemplateLink>
            <TemplateLink
              href={href(agenceImmobiliere.paths.biens)}
              variant="outline"
            >
              {copy.cta.seeSelection}
            </TemplateLink>
          </div>
        </div>

        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/5"
          sizes="(min-width: 1280px) 1216px, 100vw"
          priority
          className="mt-12 md:aspect-video"
        />
        <dl className="relative z-10 mx-3 -mt-10 grid gap-6 rounded-tpl border border-tpl-line bg-tpl-raised p-6 shadow-tpl-lg sm:mx-8 sm:grid-cols-3 sm:gap-10 sm:p-8 lg:mx-14">
          {page.facts.map((fact) => (
            <div key={fact.value} className="border-t border-tpl-ink pt-4">
              <dt className="font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight) text-tpl-accent">
                {fact.value}
              </dt>
              <dd className="mt-2 max-w-xs text-tpl-sm text-tpl-ink-muted">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </TemplateSection>
      <HomeOffer locale={locale} />
      <HomeMethod locale={locale} />
      <HomeSelection locale={locale} />
      <HomeFeatured locale={locale} />
      <HomeDistricts locale={locale} />
      <HomeProof locale={locale} />
      <HomePromise locale={locale} />
    </>
  );
}
