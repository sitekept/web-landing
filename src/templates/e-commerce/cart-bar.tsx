"use client";

import { clsx } from "clsx";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import type { TemplateLocale } from "@/content/templates/types";

import { useCart } from "./cart-context";
import { BUTTON } from "./cart-controls";
import { fill, formatPrice, getProduct } from "./lib";

/** Barre de panier mobile (slot `mobileActions` du shell) : nombre d'articles, total, lien. */
export function CartBar({
  locale,
  cartHref,
  labels,
}: {
  locale: TemplateLocale;
  cartHref: string;
  labels: {
    label: string;
    empty: string;
    itemsOne: string;
    itemsMany: string;
    view: string;
  };
}) {
  const { lines, count } = useCart();
  const total = Object.entries(lines).reduce(
    (sum, [id, qty]) => sum + (getProduct(id)?.price ?? 0) * qty,
    0
  );
  const summary =
    count === 0
      ? labels.empty
      : count === 1
        ? labels.itemsOne
        : fill(labels.itemsMany, { n: count });

  return (
    <>
      <p className="flex min-w-0 flex-1 flex-col justify-center text-tpl-xs leading-tight">
        <span className="font-semibold text-tpl-ink">{labels.label}</span>
        <span className="text-tpl-ink-muted tabular-nums">
          {summary}
          {count > 0 ? ` · ${formatPrice(total, locale)}` : null}
        </span>
      </p>
      <Link
        href={cartHref}
        className={clsx(
          BUTTON,
          "bg-tpl-ink text-tpl-surface hover:bg-tpl-accent hover:text-tpl-accent-ink"
        )}
      >
        <ShoppingBag aria-hidden="true" className="size-4" />
        {labels.view}
      </Link>
    </>
  );
}
