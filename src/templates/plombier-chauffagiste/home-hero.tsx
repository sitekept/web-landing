import { ArrowRight, Clock, Phone } from "lucide-react";
import Link from "next/link";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge, type Trade } from "./parts";

type Props = { locale: TemplateLocale };

const TRADES: readonly Trade[] = ["water", "heat"];

const TILE_BODY: Record<Trade, string> = {
  water: "bg-tpl-inverse text-tpl-inverse-ink",
  heat: "bg-tpl-accent text-tpl-accent-ink",
};

/**
 * Hero en deux entrées : l'eau (teal) et le chauffage (ambre). Les deux tuiles
 * sont des liens vers le volet correspondant de la page dépannages, la
 * seconde est décalée vers le bas sur grand écran.
 */
export function HomeHero({ locale }: Props) {
  const copy = getTemplateCopy(plombierChauffagiste, locale);
  const { paths } = plombierChauffagiste;
  const hero = copy.home.hero;

  return (
    <TemplateSection density="compact" className="overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={hero.eyebrow}
            title={hero.title}
            description={hero.description}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={copy.phone.href}
              icon={<Phone aria-hidden="true" className="size-5" />}
              className="min-h-12 text-tpl-base tabular-nums"
            >
              {copy.cta.call} {copy.phone.label}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, paths.contact)}
              variant="outline"
              className="min-h-12 bg-tpl-raised"
            >
              {copy.cta.quote}
            </TemplateLink>
          </div>
          <p className="mt-5 flex items-center gap-2 text-tpl-sm text-tpl-ink-muted">
            <Clock aria-hidden="true" className="size-4 shrink-0" />
            {hero.callNote}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-5">
          {hero.volets.map((volet, index) => {
            const trade = TRADES[index];

            return (
              <li key={volet.anchor} className={index === 1 ? "lg:mt-12" : ""}>
                <Link
                  href={templateHref(
                    locale,
                    `${paths.depannages}#${volet.anchor}`
                  )}
                  className="group block overflow-hidden rounded-tpl border border-tpl-line shadow-tpl-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  <TemplateMedia
                    src={volet.image.src}
                    alt={volet.image.alt}
                    ratio="4/5"
                    rounded="none"
                    priority={index === 0}
                    sizes="(min-width: 1024px) 320px, 45vw"
                  />
                  <div className={`p-4 sm:p-5 ${TILE_BODY[trade]}`}>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <IconBadge
                        icon={volet.icon}
                        trade={trade === "water" ? "heat" : "water"}
                        className="size-9 sm:size-11"
                      />
                      <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase max-[359px]:tracking-normal">
                        {volet.label}
                      </p>
                    </div>
                    <h2 className="mt-3 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                      {volet.title}
                    </h2>
                    <p className="mt-1 text-tpl-sm">{volet.text}</p>
                    <p className="mt-3 flex items-center justify-between gap-2 text-tpl-sm font-semibold">
                      <span className="tabular-nums">{volet.from}</span>
                      <span className="inline-flex items-center gap-1 underline-offset-4 group-hover:underline">
                        <span className="sr-only">{volet.link}</span>
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </TemplateSection>
  );
}

/** Trois engagements sous le hero, sur fond relevé. */
export function PromisesBand({ locale }: Props) {
  const promises = getTemplateCopy(plombierChauffagiste, locale).home.promises;

  return (
    <TemplateSection
      tone="raised"
      density="compact"
      className="border-y border-tpl-line"
    >
      <h2 className="sr-only">{promises.label}</h2>
      <ul className="grid gap-8 md:grid-cols-3">
        {promises.items.map((item) => (
          <li key={item.title} className="flex gap-4">
            <IconBadge icon={item.icon} trade="water" />
            <div>
              <h3 className="font-tpl-display text-tpl-base font-(weight:--tpl-display-weight)">
                {item.title}
              </h3>
              <p className="mt-1 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
