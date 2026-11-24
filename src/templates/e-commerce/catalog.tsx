"use client";

import { clsx } from "clsx";
import { useEffect, useId, useMemo, useState, type ReactNode } from "react";

/**
 * Catalogue filtrable (client) : filtre par catégorie, tri, compteur. Les
 * cartes sont rendues par le serveur et passées toutes faites (`card`) : le
 * client ne fait que choisir et ordonner, donc pas d'image ni de copie de
 * produit dans le JS de la page.
 *
 * L'URL suit le choix (`?categorie=linge&tri=prix-croissant`), pour que les
 * liens de l'accueil et du pied de page ouvrent la bonne sélection. Lue au
 * montage (pas de `useSearchParams`, qui forcerait un rendu dynamique ou une
 * frontière `Suspense`).
 */

export type CatalogItem = {
  id: string;
  category: string;
  price: number;
  sold: number;
  isNew: boolean;
  card: ReactNode;
};

const SORTS = ["popular", "priceAsc", "priceDesc", "new"] as const;
type SortKey = (typeof SORTS)[number];

/** Valeur d'URL de chaque tri (français, comme les chemins des démos). */
const SORT_PARAM: Record<SortKey, string> = {
  popular: "ventes",
  priceAsc: "prix-croissant",
  priceDesc: "prix-decroissant",
  new: "nouveautes",
};

const COMPARE: Record<SortKey, (a: CatalogItem, b: CatalogItem) => number> = {
  popular: (a, b) => b.sold - a.sold,
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  new: (a, b) => Number(b.isNew) - Number(a.isNew) || b.sold - a.sold,
};

export function Catalog({
  items,
  categories,
  labels,
}: {
  items: CatalogItem[];
  categories: { key: string; label: string }[];
  labels: {
    filterLabel: string;
    all: string;
    sortLabel: string;
    sort: Record<SortKey, string>;
    countOne: string;
    countMany: string;
  };
}) {
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("popular");
  const sortId = useId();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("categorie");
    if (fromUrl && categories.some((entry) => entry.key === fromUrl)) {
      setCategory(fromUrl);
    }
    const sortFromUrl = SORTS.find(
      (key) => SORT_PARAM[key] === params.get("tri")
    );
    if (sortFromUrl) setSort(sortFromUrl);
  }, [categories]);

  function update(next: { category?: string; sort?: SortKey }) {
    const nextCategory = next.category ?? category;
    const nextSort = next.sort ?? sort;
    setCategory(nextCategory);
    setSort(nextSort);
    const params = new URLSearchParams();
    if (nextCategory !== "all") params.set("categorie", nextCategory);
    if (nextSort !== "popular") params.set("tri", SORT_PARAM[nextSort]);
    const query = params.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}`
    );
  }

  const visible = useMemo(
    () =>
      items
        .filter((item) => category === "all" || item.category === category)
        .sort(COMPARE[sort]),
    [items, category, sort]
  );
  const count =
    visible.length === 1
      ? labels.countOne
      : labels.countMany.replace("{n}", String(visible.length));
  const chip =
    "inline-flex min-h-11 items-center rounded-tpl-pill border px-4 text-tpl-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-tpl-line py-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label={labels.filterLabel}
          className="flex flex-wrap gap-2"
        >
          {[{ key: "all", label: labels.all }, ...categories].map((entry) => (
            <button
              key={entry.key}
              type="button"
              aria-pressed={category === entry.key}
              onClick={() => update({ category: entry.key })}
              className={clsx(
                chip,
                category === entry.key
                  ? "border-tpl-ink bg-tpl-ink text-tpl-surface"
                  : "border-tpl-line bg-tpl-raised text-tpl-ink hover:border-tpl-ink"
              )}
            >
              {entry.label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4">
          <p
            aria-live="polite"
            className="text-tpl-sm text-tpl-ink-muted tabular-nums"
          >
            {count}
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor={sortId} className="text-tpl-sm text-tpl-ink-muted">
              {labels.sortLabel}
            </label>
            <select
              id={sortId}
              value={sort}
              onChange={(event) =>
                update({ sort: event.target.value as SortKey })
              }
              className="min-h-11 rounded-tpl border border-tpl-ink/60 bg-tpl-raised px-3 text-tpl-sm text-tpl-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink"
            >
              {SORTS.map((key) => (
                <option key={key} value={key}>
                  {labels.sort[key]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.id}>{item.card}</li>
        ))}
      </ul>
    </div>
  );
}
