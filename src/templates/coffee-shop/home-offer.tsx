import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { coffeeShop } from "@/content/templates/coffee-shop";
import { getTemplateCopy } from "@/content/templates/types";

import { Pill, PriceRow } from "./parts";

type Props = { locale: TemplateLocale };

/**
 * `sizes` de chaque carte : la boîte est en 4/3, la première photo est plus
 * large (paysage 16/9) et `object-cover` la dimensionne sur la hauteur.
 */
const PICK_SIZES = [
  "(min-width: 1024px) 512px, calc(114vw - 25px)",
  "(min-width: 1024px) 384px, calc(85vw - 18px)",
  "(min-width: 1024px) 384px, calc(85vw - 18px)",
] as const;

/** Trois incontournables : une boisson, un sucré, un salé. */
export function PicksSection({ locale }: Props) {
  const page = getTemplateCopy(coffeeShop, locale).home.picks;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {page.items.map((item, index) => (
          <li key={item.title} className="flex lg:[&:nth-child(2)]:mt-10">
            <article className="flex w-full flex-col overflow-hidden rounded-tpl border border-tpl-ink bg-tpl-surface shadow-tpl-lg">
              <TemplateMedia
                src={item.image.src}
                alt={item.image.alt}
                ratio="4/3"
                rounded="none"
                sizes={PICK_SIZES[index] ?? PICK_SIZES[1]}
              />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <Pill>{item.kind}</Pill>
                  <p className="text-tpl-lg font-extrabold tabular-nums">
                    {item.price}
                  </p>
                </div>
                <h3 className="text-tpl-lg leading-tpl-display">
                  {item.title}
                </h3>
                <p className="text-tpl-sm text-tpl-ink-muted">{item.text}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}

/**
 * Bande « grains du moment » : aplat cobalt, trois origines en grand, notes de
 * dégustation en pastilles. Le texte passe en `accent-ink` (l'encre brune ne
 * se lit pas sur le cobalt).
 */
export function BeansSection({ locale }: Props) {
  const page = getTemplateCopy(coffeeShop, locale).home.beans;

  return (
    <TemplateSection tone="bare" className="bg-tpl-accent text-tpl-accent-ink">
      <div className="max-w-3xl">
        <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
          {page.eyebrow}
        </p>
        <h2 className="mt-4 text-tpl-2xl leading-tpl-display text-balance">
          {page.title}
        </h2>
        <p className="mt-5 max-w-tpl-measure text-tpl-lg text-pretty">
          {page.description}
        </p>
      </div>
      <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {page.items.map((item) => (
          <li
            key={item.origin}
            className="border-t-2 border-tpl-accent-ink pt-5"
          >
            <h3 className="text-tpl-2xl leading-none">{item.origin}</h3>
            <p className="mt-6 text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
              {page.notesLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.notes.map((note) => (
                <li key={note}>
                  <Pill className="border-tpl-accent-ink/70">{note}</Pill>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-tpl-sm">
              <span className="font-semibold">{page.useLabel}</span> {item.use}
            </p>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}

/** Aperçu de la carte : liste de prix alignés et appel vers la carte complète. */
export function MenuSection({ locale }: Props) {
  const copy = getTemplateCopy(coffeeShop, locale);
  const page = copy.home.menu;

  return (
    <TemplateSection tone="raised">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <div className="mt-8">
            <TemplateLink
              href={templateHref(locale, coffeeShop.paths.carte)}
              shape="pill"
            >
              {copy.cta.fullCarte}
            </TemplateLink>
          </div>
        </div>
        <div
          role="group"
          aria-label={page.listLabel}
          className="rounded-tpl border border-tpl-ink bg-tpl-surface p-6 shadow-tpl-lg sm:p-8"
        >
          <ul>
            {page.items.map((item) => (
              <PriceRow key={item.name} name={item.name} price={item.price} />
            ))}
          </ul>
        </div>
      </div>
    </TemplateSection>
  );
}
