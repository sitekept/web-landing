import {
  TemplateHeading,
  TemplateLink,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { CarteSection } from "./home-carte";
import { BistrotHero } from "./home-hero";
import { AvisSection, SalleSection } from "./home-salle";
import { VenirSection } from "./home-venir";

/**
 * Accueil : héros plein écran (promesse, deux appels, horaires), puis la carte
 * en photos et en prix, la salle, deux avis et les infos pour venir.
 */
export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const href = (path: string) => templateHref(locale, path);
  const { paths } = restaurantBistrot;
  const { hero } = copy.home;

  return (
    <>
      <BistrotHero src={hero.image.src} alt={hero.image.alt}>
        <div className="flex flex-1 flex-col justify-end px-4 pt-[calc(var(--tpl-header-offset)+1rem)] pb-24 sm:px-6 sm:pt-[calc(var(--tpl-header-offset)+4rem)] lg:px-8 xl:pb-14">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <TemplateHeading
                as="h1"
                scale="title"
                eyebrow={hero.eyebrow}
                title={hero.title}
                description={hero.description}
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TemplateLink href={href(paths.reservation)} variant="inverse">
                  {copy.cta.bookTable}
                </TemplateLink>
                <TemplateLink
                  href={href(paths.menu)}
                  variant="outline"
                  className="hidden bg-tpl-ink/8 hover:bg-tpl-ink/14 sm:inline-flex"
                >
                  {copy.cta.seeMenu}
                </TemplateLink>
              </div>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-tpl-ink/30 pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
              {hero.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="last:col-span-2 sm:last:col-span-1"
                >
                  <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-tpl-base font-semibold tabular-nums sm:text-tpl-lg">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </BistrotHero>

      <CarteSection locale={locale} />
      <SalleSection locale={locale} />
      <AvisSection locale={locale} />
      <VenirSection locale={locale} />
    </>
  );
}
