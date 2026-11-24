import { clsx } from "clsx";
import type { ReactNode } from "react";

import type { ECommerceOrderStatus } from "@/content/templates/e-commerce";

import type { StockState } from "./lib";

/**
 * Éléments communs aux pages de l'espace gestion, utilisables par les
 * composants serveur et client (aucun état) : pastilles de statut, puces de
 * filtre, conteneur de tableau défilant, tuile d'indicateur. `clsx` et non
 * `cn()` : ils entrent dans le JS client des tableaux.
 */

/** Ton de chaque statut : le libellé porte le sens, la couleur le souligne. */
const STATUS_TONE: Record<ECommerceOrderStatus | StockState, string> = {
  toPrepare: "border-tpl-accent bg-tpl-accent text-tpl-accent-ink",
  shipped: "border-tpl-ink/60 bg-tpl-raised text-tpl-ink",
  delivered: "border-tpl-line bg-tpl-tint text-tpl-ink",
  refunded: "border-dashed border-tpl-ink/60 bg-transparent text-tpl-ink-muted",
  ok: "border-tpl-line bg-tpl-tint text-tpl-ink",
  low: "border-tpl-accent bg-tpl-raised text-tpl-eyebrow",
  out: "border-tpl-ink bg-tpl-ink text-tpl-surface",
};

export function StatusBadge({
  tone,
  children,
}: {
  tone: ECommerceOrderStatus | StockState;
  children: ReactNode;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-tpl-pill border px-2.5 py-0.5 text-tpl-xs font-semibold whitespace-nowrap",
        STATUS_TONE[tone]
      )}
    >
      {children}
    </span>
  );
}

/** Puce de filtre (bouton à `aria-pressed`). */
export function chipClass(active: boolean): string {
  return clsx(
    "inline-flex min-h-11 items-center gap-2 rounded-tpl-pill border px-4 text-tpl-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink",
    active
      ? "border-tpl-ink bg-tpl-ink text-tpl-surface"
      : "border-tpl-line bg-tpl-raised text-tpl-ink hover:border-tpl-ink"
  );
}

export const SEARCH_INPUT =
  "block min-h-11 w-full rounded-tpl border border-tpl-ink/60 bg-tpl-raised pr-3 pl-10 text-tpl-sm text-tpl-ink placeholder:text-tpl-ink-muted focus-visible:border-tpl-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink";

export const SMALL_BUTTON =
  "inline-flex min-h-9 items-center justify-center rounded-tpl-pill border border-tpl-ink/60 px-3 text-tpl-xs font-semibold whitespace-nowrap transition-colors hover:bg-tpl-ink hover:text-tpl-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-tpl-ink";

/**
 * Tableau défilant horizontalement sur petit écran. La région est
 * focalisable (défilement au clavier) et nommée par la légende du tableau.
 */
export function TableScroller({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="overflow-x-auto rounded-tpl border border-tpl-line bg-tpl-raised focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink"
    >
      {children}
    </div>
  );
}

export const TH =
  "border-b border-tpl-line bg-tpl-tint px-4 py-3 text-left text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase whitespace-nowrap";
export const TD = "border-b border-tpl-line px-4 py-3 align-middle";

/** Tuile d'indicateur : libellé, valeur, mention secondaire. */
export function KpiTile({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: ReactNode;
}) {
  return (
    <div className="rounded-tpl border border-tpl-line bg-tpl-raised p-5">
      <dt className="text-tpl-sm text-tpl-ink-muted">{label}</dt>
      <dd className="mt-2 font-tpl-display text-tpl-2xl leading-tpl-display tabular-nums">
        {value}
      </dd>
      {note ? (
        <dd className="mt-2 text-tpl-xs text-tpl-ink-muted">{note}</dd>
      ) : null}
    </div>
  );
}

/** Panneau du tableau de bord et son titre. */
export const PANEL = "rounded-tpl border border-tpl-line bg-tpl-raised p-6";
export const PANEL_TITLE =
  "font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)";
