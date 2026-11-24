import {
  Boxes,
  ChartColumn,
  Lock,
  Package,
  RotateCcw,
  Star,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { templateHref, type TemplateLocale } from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import {
  eCommerce,
  eCommerceProductPath,
  type ECommerceIconKey,
} from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { AddToCartButton } from "./cart-controls";
import { fill, formatNumber, formatPrice, type ECommerceProduct } from "./lib";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/e-commerce.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<ECommerceIconKey, LucideIcon> = {
  boxes: Boxes,
  chart: ChartColumn,
  lock: Lock,
  package: Package,
  rotate: RotateCcw,
  truck: Truck,
  users: Users,
};

/**
 * `sizes` des photos produit (ratio 4/5, source au même ratio). Grille de
 * deux colonnes sous `lg` (gouttières de 16 à 32 px, écart de 16 à 24 px),
 * quatre au-dessus, plafonnée par le conteneur de 1216 px.
 */
export const SIZES = {
  card: "(min-width: 1344px) 290px, (min-width: 1024px) calc(25vw - 40px), calc(50vw - 28px)",
  /** Grille de trois colonnes (catalogue à partir de `lg`). */
  card3:
    "(min-width: 1344px) 390px, (min-width: 1024px) calc(33vw - 40px), calc(50vw - 28px)",
  /** Fiche produit : demi-largeur à partir de `lg`. */
  detail:
    "(min-width: 1344px) 600px, (min-width: 1024px) calc(50vw - 56px), calc(100vw - 32px)",
} as const;

/** Note en étoiles (décoratives) suivie de la note en chiffres. */
export function Rating({
  locale,
  rating,
  reviews,
}: {
  locale: TemplateLocale;
  rating: number;
  reviews: number;
}) {
  const copy = getTemplateCopy(eCommerce, locale);
  const label = fill(copy.product.rating, {
    rating: formatNumber(rating, locale),
    n: reviews,
  });

  return (
    <p className="flex items-center gap-1.5 text-tpl-xs text-tpl-ink-muted">
      <Star
        aria-hidden="true"
        className="size-3.5 fill-tpl-accent text-tpl-accent"
      />
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="tabular-nums">
        {formatNumber(rating, locale)} ({reviews})
      </span>
    </p>
  );
}

/** Disponibilité : en stock, plus que n, épuisé. */
export function StockNote({
  locale,
  stock,
  threshold,
}: {
  locale: TemplateLocale;
  stock: number;
  threshold: number;
}) {
  const copy = getTemplateCopy(eCommerce, locale);
  const text =
    stock <= 0
      ? copy.product.soldOut
      : stock <= threshold
        ? fill(copy.product.lowStock, { n: stock })
        : copy.product.inStock;

  return (
    <p className="flex items-center gap-2 text-tpl-xs font-medium">
      <span
        aria-hidden="true"
        className={
          stock <= 0
            ? "size-2 rounded-full bg-tpl-ink-muted"
            : stock <= threshold
              ? "size-2 rounded-full bg-tpl-accent"
              : "size-2 rounded-full bg-tpl-ink"
        }
      />
      {text}
    </p>
  );
}

/**
 * Carte produit : photo (lien vers la fiche), pastille « Nouveau », nom, note,
 * prix et bouton d'ajout (îlot client). Le nom est le seul lien vers la fiche
 * pour les lecteurs d'écran (la photo est sortie de l'ordre de tabulation).
 */
export function ProductCard({
  locale,
  item,
  sizes = SIZES.card,
  headingLevel = "h3",
}: {
  locale: TemplateLocale;
  item: ECommerceProduct;
  sizes?: string;
  headingLevel?: "h2" | "h3";
}) {
  const copy = getTemplateCopy(eCommerce, locale);
  const text = copy.products[item.id];
  const href = templateHref(locale, eCommerceProductPath(item.id));
  const Heading = headingLevel;

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block"
      >
        <TemplateMedia
          src={item.image}
          alt=""
          ratio="4/5"
          sizes={sizes}
          className="transition-[filter] duration-200 group-hover:brightness-95"
        />
        {item.isNew ? (
          <span className="absolute top-3 left-3 rounded-tpl-pill bg-tpl-raised px-3 py-1 text-tpl-xs font-semibold text-tpl-ink shadow-tpl-sm">
            {copy.product.isNew}
          </span>
        ) : null}
      </Link>
      <div className="mt-4 flex flex-1 flex-col gap-1">
        <Heading className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
          <Link
            href={href}
            className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
          >
            {text.name}
          </Link>
        </Heading>
        <p className="text-tpl-sm text-tpl-ink-muted">{text.short}</p>
        <Rating locale={locale} rating={item.rating} reviews={item.reviews} />
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
          <p className="text-tpl-base font-semibold tabular-nums">
            {formatPrice(item.price, locale)}
          </p>
          <AddToCartButton
            id={item.id}
            label={copy.product.addShort}
            namedLabel={fill(copy.product.addNamed, { name: text.name })}
            soldOutLabel={copy.product.soldOut}
            soldOut={item.stock <= 0}
            className="w-full px-4 sm:w-auto"
          />
        </div>
      </div>
    </article>
  );
}
