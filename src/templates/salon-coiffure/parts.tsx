import { Phone } from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

/** Padding haut de la première section : elle passe sous l’en-tête flottant. */
export const PAGE_TOP =
  "pt-[calc(var(--tpl-header-offset)+3rem)] lg:pt-[calc(var(--tpl-header-offset)+4rem)]";

/**
 * `sizes` des photos, calculés sur la largeur réellement rendue (gouttières
 * `px-4` / `sm:px-6` / `lg:px-8`, contenu plafonné à 1280 px, grille de 12
 * colonnes) puis réduits de 10 % (13 % pour `THIRDS` entre 768 et 1023 px,
 * où la valeur réduite de 10 % tombait juste au-dessus de la variante de
 * 256 px) : le navigateur prend la plus petite variante au moins égale à la
 * valeur déclarée, donc au plus 1,3 fois la largeur rendue. Pas de `vw` isolé
 * précédé d’un espace : Next y lirait une largeur de départ et retirerait les
 * petites variantes.
 *
 * `COL5_*` et `COL7_*` : 5 ou 7 colonnes dès `lg`, pleine largeur en dessous ;
 * le suffixe est l’écart entre colonnes en pixels (40, 48 ou 64 selon la page).
 * `THIRDS` : trois colonnes dès `md` (écart de 24 px). `HALVES` : deux colonnes
 * dès `md` (écart de 48 px).
 */
export const SIZES = {
  COL5_G48:
    "(min-width: 1344px) 455px, (min-width: 1024px) calc(37.5vw - 49px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
  COL5_G64:
    "(min-width: 1344px) 446px, (min-width: 1024px) calc(37.5vw - 58px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
  COL5_G40:
    "(min-width: 1344px) 459px, (min-width: 1024px) calc(37.5vw - 45px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
  COL7_G40:
    "(min-width: 1344px) 657px, (min-width: 1024px) calc(52.5vw - 49px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
  COL7_G64:
    "(min-width: 1344px) 648px, (min-width: 1024px) calc(52.5vw - 58px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
  THIRDS:
    "(min-width: 1344px) 370px, (min-width: 1024px) calc(30vw - 34px), (min-width: 768px) calc(29vw - 28px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
  HALVES:
    "(min-width: 1344px) 554px, (min-width: 1024px) calc(45vw - 50px), (min-width: 768px) calc(45vw - 43px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
} as const;

/** Ouverture d’une sous-page : fond rose poudré, titre, une phrase. */
export function PageIntro({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <TemplateSection
      as="h1"
      tone="tint"
      density="compact"
      className={PAGE_TOP}
      title={title}
      description={description}
    />
  );
}

/** Horaires : une ligne par plage, jour à gauche, heures à droite. */
export function HoursList({ locale }: { locale: TemplateLocale }) {
  const { common } = getTemplateCopy(salonCoiffure, locale);

  return (
    <dl className="divide-y divide-tpl-line">
      {common.hours.map((row) => (
        <div
          key={row.day}
          className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3"
        >
          <dt className="text-tpl-ink-muted">{row.day}</dt>
          <dd className="font-semibold tabular-nums">{row.time}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Adresse, téléphone et e-mail, empilés. */
export function ContactLines({ locale }: { locale: TemplateLocale }) {
  const { common } = getTemplateCopy(salonCoiffure, locale);

  return (
    <div className="space-y-4">
      <p>
        {common.address.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <p>
        <a
          href={common.phone.href}
          className="inline-flex min-h-11 items-center font-semibold tabular-nums underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
        >
          {common.phone.label}
        </a>
      </p>
      <p className="break-words text-tpl-ink-muted">{common.email}</p>
    </div>
  );
}

/** Bande de clôture : inviter à réserver ou à appeler. */
export function CtaBand({
  locale,
  title,
  text,
}: {
  locale: TemplateLocale;
  title: ReactNode;
  text: ReactNode;
}) {
  const copy = getTemplateCopy(salonCoiffure, locale);

  return (
    <TemplateSection tone="inverse" density="compact">
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
            {title}
          </h2>
          <p className="mt-4 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
            {text}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <TemplateLink
            href={templateHref(locale, salonCoiffure.paths.reservation)}
            variant="inverse"
            shape="pill"
          >
            {copy.cta.bookSlot}
          </TemplateLink>
          <TemplateLink
            href={copy.common.phone.href}
            variant="outline"
            shape="pill"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="tabular-nums"
          >
            {copy.common.phone.label}
          </TemplateLink>
        </div>
      </div>
    </TemplateSection>
  );
}
