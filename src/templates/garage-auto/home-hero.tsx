import { CalendarCheck, FileText } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { PageHero } from "./parts";

/**
 * Accueil, premier écran : titre, deux entrées (devis, rendez-vous) et photo
 * de l'atelier à droite. Sous le héros, la fiche atelier : quatre chiffres
 * tabulaires, séparés par des filets d'encre.
 */
export function HomeHero({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(garageAuto, locale);
  const page = copy.home.hero;
  const { paths } = garageAuto;

  return (
    <>
      <PageHero
        aside={
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="4/3"
            sizes="(min-width: 1024px) 512px, calc(96vw - 19px)"
            rounded="none"
            priority
          />
        }
      >
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TemplateLink
            href={templateHref(locale, paths.devis)}
            icon={<FileText aria-hidden="true" className="size-4" />}
          >
            {copy.cta.quote}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, paths.rendezVous)}
            variant="outline"
            icon={<CalendarCheck aria-hidden="true" className="size-4" />}
            className="border-tpl-ink"
          >
            {copy.cta.appointment}
          </TemplateLink>
        </div>
      </PageHero>

      <section
        aria-label={page.spec.label}
        className="bg-tpl-raised px-4 sm:px-6 lg:px-8"
      >
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 lg:grid-cols-4 lg:gap-x-0">
          {page.spec.items.map((item) => (
            <div
              key={item.label}
              className="border-t border-tpl-line py-6 first:border-t-0 nth-2:border-t-0 lg:border-t-0 lg:border-l lg:px-8 lg:py-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {item.label}
              </dt>
              <dd className="mt-2 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) tabular-nums">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
