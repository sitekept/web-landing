import { clsx } from "clsx";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

import type { ECommerceCopy } from "@/content/templates/e-commerce";

import { FIELD } from "./cart-summary";

/**
 * Message plein cadre du panier : panier vide, ou confirmation de commande
 * (`status` : annoncée, avec une coche).
 */
export function CartNotice({
  status = false,
  title,
  text,
  href,
  cta,
}: {
  status?: boolean;
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <div
      role={status ? "status" : undefined}
      className={clsx(
        "mx-auto max-w-xl rounded-tpl border p-8 text-center",
        status
          ? "border-tpl-line bg-tpl-raised"
          : "border-dashed border-tpl-line"
      )}
    >
      {status ? (
        <CircleCheck
          aria-hidden="true"
          className="mx-auto mb-4 size-10 text-tpl-accent"
        />
      ) : null}
      <h2 className="font-tpl-display text-tpl-2xl font-(weight:--tpl-display-weight)">
        {title}
      </h2>
      <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{text}</p>
      <Link
        href={href}
        className="mt-6 inline-flex min-h-11 items-center rounded-tpl-pill bg-tpl-ink px-6 text-tpl-sm font-semibold text-tpl-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
      >
        {cta}
      </Link>
    </div>
  );
}

/** Champs de l'adresse de livraison (formulaire de démonstration). */
export function CheckoutFields({
  fields,
}: {
  fields: ECommerceCopy["cart"]["fields"];
}) {
  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-2">
      {(
        [
          ["firstName", "given-name", "text", false],
          ["lastName", "family-name", "text", false],
          ["email", "email", "email", true],
          ["address", "street-address", "text", true],
          ["postcode", "postal-code", "text", false],
          ["city", "address-level2", "text", false],
        ] as const
      ).map(([name, autoComplete, type, wide]) => (
        <label
          key={name}
          className={clsx("text-tpl-sm font-medium", wide && "sm:col-span-2")}
        >
          {fields[name]}
          <input
            name={name}
            type={type}
            autoComplete={autoComplete}
            required
            className={FIELD}
          />
        </label>
      ))}
    </div>
  );
}
