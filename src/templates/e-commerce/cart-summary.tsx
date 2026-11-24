"use client";

import { clsx } from "clsx";
import { useId, useState, type FormEvent } from "react";

import {
  ECOMMERCE_PROMO,
  type ECommerceCopy,
} from "@/content/templates/e-commerce";
import type { TemplateLocale } from "@/content/templates/types";

import { fill, formatPrice } from "./lib";

/**
 * Récapitulatif du panier (client) : sous-total, remise, livraison, total,
 * seuil de livraison offerte, code promo et bouton de validation (il soumet le
 * formulaire d'adresse par son attribut `form`).
 */

export const FIELD =
  "mt-1 block min-h-11 w-full rounded-tpl border border-tpl-ink/60 bg-tpl-raised px-3 text-tpl-sm text-tpl-ink focus-visible:border-tpl-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink";

export function CartSummary({
  locale,
  copy,
  formId,
  totals,
  promo,
  onPromo,
}: {
  locale: TemplateLocale;
  copy: ECommerceCopy["cart"];
  /** Formulaire d'adresse que soumet le bouton de validation. */
  formId: string;
  totals: {
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    missing: number;
  };
  promo: "none" | "applied" | "invalid";
  onPromo: (code: string) => void;
}) {
  const [input, setInput] = useState("");
  const promoId = useId();
  const price = (value: number) => formatPrice(value, locale);

  return (
    <aside
      aria-labelledby={`${formId}-summary`}
      className="rounded-tpl border border-tpl-line bg-tpl-raised p-6 lg:sticky lg:top-24"
    >
      <h2
        id={`${formId}-summary`}
        className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)"
      >
        {copy.summaryTitle}
      </h2>
      <dl className="mt-5 space-y-3 text-tpl-sm tabular-nums">
        <div className="flex justify-between gap-4">
          <dt>{copy.subtotal}</dt>
          <dd>{price(totals.subtotal)}</dd>
        </div>
        {totals.discount > 0 ? (
          <div className="flex justify-between gap-4 text-tpl-accent">
            <dt>{fill(copy.discount, { code: ECOMMERCE_PROMO.code })}</dt>
            <dd>−{price(totals.discount)}</dd>
          </div>
        ) : null}
        <div className="flex justify-between gap-4">
          <dt>{copy.shipping}</dt>
          <dd>
            {totals.shipping === 0 ? copy.shippingFree : price(totals.shipping)}
          </dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-tpl-line pt-3 text-tpl-base font-semibold">
          <dt>{copy.total}</dt>
          <dd>{price(totals.total)}</dd>
        </div>
      </dl>
      <p className="mt-3 text-tpl-xs text-tpl-ink-muted">
        {totals.missing > 0
          ? fill(copy.freeHint, { amount: price(totals.missing) })
          : copy.freeReached}
      </p>

      <form
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          onPromo(input);
        }}
        className="mt-6 border-t border-tpl-line pt-5"
      >
        <label htmlFor={promoId} className="text-tpl-sm font-medium">
          {copy.promoLabel}
        </label>
        <div className="mt-1 flex gap-2">
          <input
            id={promoId}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            aria-describedby={`${promoId}-hint`}
            autoComplete="off"
            className={clsx(FIELD, "mt-0 uppercase")}
          />
          <button
            type="submit"
            className="min-h-11 shrink-0 rounded-tpl border border-tpl-ink px-4 text-tpl-sm font-semibold hover:bg-tpl-ink hover:text-tpl-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
          >
            {copy.promoApply}
          </button>
        </div>
        <p
          id={`${promoId}-hint`}
          role="status"
          className="mt-2 text-tpl-xs text-tpl-ink-muted"
        >
          {promo === "applied"
            ? copy.promoApplied
            : promo === "invalid"
              ? copy.promoInvalid
              : copy.promoHint}
        </p>
      </form>

      <button
        type="submit"
        form={formId}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-tpl-pill bg-tpl-accent px-6 text-tpl-base font-semibold text-tpl-accent-ink transition-colors hover:bg-tpl-ink hover:text-tpl-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
      >
        {copy.submit} · {price(totals.total)}
      </button>
    </aside>
  );
}
