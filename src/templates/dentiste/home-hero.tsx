import { CalendarDays } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { SIZES } from "./parts";

/**
 * Accueil, premier écran : promesse du cabinet et deux entrées (rendez-vous,
 * première visite) à gauche, photo de la salle de soins à droite avec le
 * prochain créneau posé sur son bas. Dessous, quatre repères en filets.
 */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const page = copy.home.hero;
  const { paths } = dentiste;

  return (
    <>
      <section className="bg-tpl-tint px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-12 md:items-center lg:gap-14 lg:py-20">
          <div className="md:col-span-7">
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <TemplateLink
                href={templateHref(locale, paths.rendezVous)}
                icon={<CalendarDays aria-hidden="true" className="size-4" />}
              >
                {copy.cta.book}
              </TemplateLink>
              <TemplateLink
                href={templateHref(locale, paths.premiereVisite)}
                variant="outline"
                className="border-tpl-ink/40 bg-tpl-raised"
              >
                {copy.cta.prepareFirstVisit}
              </TemplateLink>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="4/5"
              sizes={SIZES.COL5_MD}
              priority
            />
            <TemplatePanel
              tone="inverse"
              className="absolute inset-x-4 bottom-4 p-5 shadow-tpl-lg md:static md:mt-4 lg:absolute lg:inset-x-6 lg:-bottom-6 lg:mt-0"
            >
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                {page.slot.eyebrow}
              </p>
              <p className="mt-2 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {page.slot.value}
              </p>
              <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                {page.slot.text}
              </p>
            </TemplatePanel>
          </div>
        </div>
      </section>

      <section
        aria-label={copy.a11y.facts}
        className="bg-tpl-raised px-4 sm:px-6 lg:px-8"
      >
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 lg:grid-cols-4 lg:gap-x-0">
          {copy.home.facts.map((item) => (
            <div
              key={item.value}
              className="border-t border-tpl-line py-6 first:border-t-0 nth-2:border-t-0 lg:border-t-0 lg:border-l lg:px-8 lg:py-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {item.value}
              </dt>
              <dd className="mt-1 text-tpl-sm text-tpl-ink-muted">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
