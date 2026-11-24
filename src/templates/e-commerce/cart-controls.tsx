"use client";

import { clsx } from "clsx";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";

import { useCart } from "./cart-context";

/**
 * Commandes client du panier : bouton d'ajout des cartes produit, bloc
 * quantité + ajout de la fiche produit, barre de panier mobile. Les libellés
 * viennent de la copie (props), `clsx` et non `cn()` (JS client léger).
 */

export const BUTTON =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-tpl-pill px-5 text-tpl-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink disabled:cursor-not-allowed";

/** Bouton d'ajout d'une carte produit (une unité). */
export function AddToCartButton({
  id,
  label,
  namedLabel,
  soldOutLabel,
  soldOut,
  className,
}: {
  id: string;
  label: string;
  /** Nom accessible complet (« Ajouter Bougie Ambre au panier »). */
  namedLabel: string;
  soldOutLabel: string;
  soldOut: boolean;
  className?: string;
}) {
  const { add } = useCart();

  return (
    <button
      type="button"
      disabled={soldOut}
      aria-label={soldOut ? undefined : namedLabel}
      onClick={() => add(id)}
      className={clsx(
        BUTTON,
        soldOut
          ? "border border-tpl-line bg-transparent text-tpl-ink-muted"
          : "bg-tpl-ink text-tpl-surface hover:bg-tpl-accent hover:text-tpl-accent-ink",
        className
      )}
    >
      {soldOut ? null : <ShoppingBag aria-hidden="true" className="size-4" />}
      {soldOut ? soldOutLabel : label}
    </button>
  );
}

/** Champ de quantité à boutons −/+, borné à `[min, max]`. */
export function QuantityStepper({
  value,
  min,
  max,
  onChange,
  labels,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  labels: { group: string; decrease: string; increase: string };
}) {
  const step =
    "inline-flex size-11 items-center justify-center text-tpl-ink transition-colors hover:bg-tpl-tint focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink disabled:opacity-40 disabled:hover:bg-transparent";

  return (
    <div
      role="group"
      aria-label={labels.group}
      className="inline-flex items-center rounded-tpl-pill border border-tpl-ink/60 bg-tpl-raised"
    >
      <button
        type="button"
        className={clsx(step, "rounded-l-tpl-pill")}
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={labels.decrease}
      >
        <Minus aria-hidden="true" className="size-4" />
      </button>
      <output
        aria-live="polite"
        className="w-8 text-center text-tpl-sm font-semibold tabular-nums"
      >
        {value}
      </output>
      <button
        type="button"
        className={clsx(step, "rounded-r-tpl-pill")}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={labels.increase}
      >
        <Plus aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}

/** Fiche produit : quantité puis ajout au panier. */
export function ProductPurchase({
  id,
  stock,
  labels,
}: {
  id: string;
  stock: number;
  labels: {
    quantity: string;
    decrease: string;
    increase: string;
    add: string;
    soldOut: string;
  };
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const soldOut = stock <= 0;

  if (soldOut) {
    return (
      <p className="inline-flex min-h-11 items-center rounded-tpl-pill border border-tpl-line px-5 text-tpl-sm font-semibold text-tpl-ink-muted">
        {labels.soldOut}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <QuantityStepper
        value={qty}
        min={1}
        max={Math.min(stock, 20)}
        onChange={setQty}
        labels={{
          group: labels.quantity,
          decrease: labels.decrease,
          increase: labels.increase,
        }}
      />
      <button
        type="button"
        onClick={() => add(id, qty)}
        className={clsx(
          BUTTON,
          "flex-1 bg-tpl-accent px-8 text-tpl-accent-ink hover:bg-tpl-ink hover:text-tpl-surface sm:flex-none"
        )}
      >
        <ShoppingBag aria-hidden="true" className="size-4" />
        {labels.add}
      </button>
    </div>
  );
}
