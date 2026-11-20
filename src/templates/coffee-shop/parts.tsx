import {
  Accessibility,
  Bike,
  BusFront,
  CircleParking,
  Coffee,
  Dog,
  Leaf,
  Milk,
  Plug,
  Recycle,
  Sprout,
  Sun,
  WheatOff,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  coffeeShop,
  type CoffeeShopIconKey,
} from "@/content/templates/coffee-shop";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/coffee-shop.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<CoffeeShopIconKey, LucideIcon> = {
  accessibility: Accessibility,
  bike: Bike,
  "bus-front": BusFront,
  "circle-parking": CircleParking,
  coffee: Coffee,
  dog: Dog,
  leaf: Leaf,
  milk: Milk,
  plug: Plug,
  recycle: Recycle,
  sprout: Sprout,
  sun: Sun,
  "wheat-off": WheatOff,
  wifi: Wifi,
};

/** Une note de 1 à 5 : la copie stocke un nombre, le composant d'avis attend l'union. */
export function toRating(value: number): 1 | 2 | 3 | 4 | 5 {
  if (value >= 5) return 5;
  if (value >= 4) return 4;
  if (value >= 3) return 3;
  if (value >= 2) return 2;
  return 1;
}

/** Pastille de texte (catégorie, note de dégustation, repère). */
export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-tpl-pill border px-3 py-1 text-tpl-xs leading-tight font-semibold ${className ?? "border-tpl-ink/60"}`}
    >
      {children}
    </span>
  );
}

/** Pastille de régime : icône et texte, jamais la couleur seule. */
export function DietTag({
  icon,
  label,
}: {
  icon: CoffeeShopIconKey;
  label: string;
}) {
  const Icon = ICONS[icon];

  return (
    <Pill>
      <Icon aria-hidden="true" className="size-3.5" />
      {label}
    </Pill>
  );
}

/**
 * Ligne de carte : nom, points de conduite, prix en chiffres tabulaires alignés
 * à droite, description et pastilles de régime sous le nom.
 */
export function PriceRow({
  name,
  price,
  text,
  tags,
}: {
  name: string;
  price: string;
  text?: string;
  tags?: readonly { icon: CoffeeShopIconKey; label: string }[];
}) {
  return (
    <li className="border-b border-tpl-line py-4 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex items-end gap-3">
        <p className="min-w-0 text-tpl-base leading-snug font-bold">{name}</p>
        <span
          aria-hidden="true"
          className="mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-tpl-ink/35"
        />
        <p className="min-w-[4.5rem] text-right text-tpl-base leading-snug font-extrabold tabular-nums">
          {price}
        </p>
      </div>
      {text ? (
        <p className="mt-1 max-w-tpl-measure pr-20 text-tpl-sm text-tpl-ink-muted">
          {text}
        </p>
      ) : null}
      {tags && tags.length > 0 ? (
        <ul className="mt-2.5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag.label}>
              <DietTag icon={tag.icon} label={tag.label} />
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/** Pastille d'icône : carré arrondi cobalt, icône claire. */
export function IconBadge({ icon }: { icon: CoffeeShopIconKey }) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className="flex size-12 shrink-0 items-center justify-center rounded-tpl bg-tpl-accent text-tpl-accent-ink"
    >
      <Icon className="size-6" />
    </span>
  );
}

/** Bande de fin de page (sous-pages) : fond inverse, appel et carte. */
export function ClosingBand({
  locale,
  title,
  text,
}: {
  locale: TemplateLocale;
  title: string;
  text: string;
}) {
  const copy = getTemplateCopy(coffeeShop, locale);

  return (
    <TemplateSection tone="inverse" density="regular">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-tpl-2xl leading-tpl-display text-balance">
            {title}
          </h2>
          <p className="mt-4 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
            {text}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TemplateLink
            href={copy.phone.href}
            variant="inverse"
            shape="pill"
            className="tabular-nums"
          >
            {copy.cta.call} {copy.phone.label}
          </TemplateLink>
          <TemplateLink
            href={templateHref(locale, coffeeShop.paths.infos)}
            variant="outline"
            shape="pill"
            icon={false}
          >
            {copy.cta.group}
          </TemplateLink>
        </div>
      </div>
    </TemplateSection>
  );
}
