import { Star } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { PAGE_TOP } from "./parts";

/**
 * Premier écran : promesse, deux entrées (réserver, voir les prix), trois
 * repères chiffrés, et une photo portrait avec un avis posé sur son angle. Le
 * bloc passe sous l’en-tête flottant.
 */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(salonCoiffure, locale);
  const { hero } = copy.home;
  const { paths } = salonCoiffure;

  return (
    <TemplateSection
      tone="tint"
      density="compact"
      className={`overflow-x-clip pb-16 lg:pb-20 ${PAGE_TOP}`}
    >
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={hero.eyebrow}
            title={hero.title}
            description={hero.text}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={templateHref(locale, paths.reservation)}
              shape="pill"
            >
              {hero.book}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, paths.prestations)}
              variant="outline"
              shape="pill"
              icon={false}
              className="border-tpl-ink/30"
            >
              {hero.prices}
            </TemplateLink>
          </div>
          <div role="group" aria-label={hero.factsLabel} className="mt-10">
            <dl className="grid max-w-xl grid-cols-3 gap-4 border-t border-tpl-ink/15 pt-6">
              {hero.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative pb-8 lg:col-span-5 lg:pb-0">
          <TemplateMedia
            src={hero.image.src}
            alt={hero.image.alt}
            ratio="4/5"
            priority
            sizes="(min-width: 1280px) 495px, (min-width: 1024px) 41vw, 100vw"
            className="shadow-tpl-lg"
          />
          <TemplatePanel className="absolute right-4 bottom-0 left-4 p-5 shadow-tpl-lg lg:right-auto lg:-bottom-6 lg:-left-10 lg:w-72">
            <div
              role="img"
              aria-label={hero.review.label}
              className="flex gap-0.5 text-tpl-eyebrow"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  className="size-4 fill-current"
                />
              ))}
            </div>
            <p className="mt-3 text-tpl-sm text-tpl-ink">{hero.review.quote}</p>
            <p className="mt-2 text-tpl-xs text-tpl-ink-muted">
              {hero.review.name}
            </p>
          </TemplatePanel>
        </div>
      </div>
    </TemplateSection>
  );
}
