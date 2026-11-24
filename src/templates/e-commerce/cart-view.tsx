"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useId, useState, type FormEvent } from "react";

import type { ECommerceCopy } from "@/content/templates/e-commerce";
import {
  ECOMMERCE_PROMO,
  ECOMMERCE_SHIPPING,
} from "@/content/templates/e-commerce";
import type { TemplateLocale } from "@/content/templates/types";

import { useCart } from "./cart-context";
import { CartNotice, CheckoutFields } from "./cart-parts";
import { CartSummary } from "./cart-summary";
import { QuantityStepper } from "./cart-controls";
import { fill, formatPrice, isPromoCode, round2, shippingFor } from "./lib";

/**
 * Panier (client) : lignes avec quantité et retrait, code promo, livraison,
 * total, adresse et validation. Démonstration : la validation n'envoie rien,
 * elle affiche une confirmation et vide le panier.
 */

export type CartProductInfo = {
  id: string;
  name: string;
  short: string;
  price: number;
  stock: number;
  image: string;
  href: string;
};

/** Numéro de la commande de démonstration (suit la dernière commande du CRM). */
const DEMO_ORDER_ID = "CMD-2042";

export function CartView({
  locale,
  products,
  shopHref,
  copy,
}: {
  locale: TemplateLocale;
  products: CartProductInfo[];
  shopHref: string;
  copy: ECommerceCopy["cart"];
}) {
  const { lines, ready, setQty, remove, clear } = useCart();
  const [promo, setPromo] = useState<"none" | "applied" | "invalid">("none");
  const [confirmed, setConfirmed] = useState(false);
  const formId = useId();
  const price = (value: number) => formatPrice(value, locale);

  const rows = products
    .filter((item) => (lines[item.id] ?? 0) > 0)
    .map((item) => ({ ...item, qty: lines[item.id] }));
  const subtotal = round2(
    rows.reduce((sum, row) => sum + row.price * row.qty, 0)
  );
  const discount =
    promo === "applied" ? round2(subtotal * ECOMMERCE_PROMO.rate) : 0;
  const shipping = shippingFor(subtotal - discount);
  const total = round2(subtotal - discount + shipping);
  const missing = round2(ECOMMERCE_SHIPPING.freeFrom - (subtotal - discount));

  function submit(event: FormEvent) {
    event.preventDefault();
    setConfirmed(true);
    clear();
    window.scrollTo({ top: 0 });
  }

  if (confirmed) {
    return (
      <CartNotice
        status
        title={copy.confirmation.title}
        text={fill(copy.confirmation.text, { id: DEMO_ORDER_ID })}
        href={shopHref}
        cta={copy.confirmation.cta}
      />
    );
  }

  if (!ready) {
    return <p className="text-tpl-sm text-tpl-ink-muted">{copy.loading}</p>;
  }

  if (rows.length === 0) {
    return (
      <CartNotice
        title={copy.empty.title}
        text={copy.empty.text}
        href={shopHref}
        cta={copy.empty.cta}
      />
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-start">
      <div>
        <h2 className="sr-only">{copy.itemsTitle}</h2>
        <ul className="divide-y divide-tpl-line border-y border-tpl-line">
          {rows.map((row) => (
            <li key={row.id} className="flex gap-4 py-5">
              <div className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden rounded-tpl bg-tpl-line sm:w-24">
                <Image
                  src={row.image}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <Link
                    href={row.href}
                    className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight) underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {row.name}
                  </Link>
                  <p className="text-tpl-sm text-tpl-ink-muted">{row.short}</p>
                  <p className="mt-1 text-tpl-sm tabular-nums">
                    {price(row.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <QuantityStepper
                    value={row.qty}
                    min={1}
                    max={Math.min(row.stock, 20)}
                    onChange={(value) => setQty(row.id, value)}
                    labels={{
                      group: fill(copy.quantityOf, { name: row.name }),
                      decrease: fill(copy.decreaseOf, { name: row.name }),
                      increase: fill(copy.increaseOf, { name: row.name }),
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => remove(row.id)}
                    aria-label={fill(copy.remove, { name: row.name })}
                    className="inline-flex size-11 items-center justify-center rounded-tpl-pill text-tpl-ink-muted transition-colors hover:bg-tpl-tint hover:text-tpl-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    <Trash2 aria-hidden="true" className="size-4" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <form id={formId} onSubmit={submit} className="mt-10">
          <h2 className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
            {copy.checkoutTitle}
          </h2>
          <CheckoutFields fields={copy.fields} />
          <p className="mt-4 text-tpl-xs text-tpl-ink-muted">{copy.payNote}</p>
        </form>
      </div>

      <CartSummary
        locale={locale}
        copy={copy}
        formId={formId}
        totals={{ subtotal, discount, shipping, total, missing }}
        promo={promo}
        onPromo={(code) => setPromo(isPromoCode(code) ? "applied" : "invalid")}
      />
    </div>
  );
}
