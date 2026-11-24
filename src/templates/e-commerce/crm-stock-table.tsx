"use client";

import { useMemo, useState } from "react";

import type { TemplateLocale } from "@/content/templates/types";

import { StockActions } from "./crm-stock-actions";
import { CrmToolbar } from "./crm-toolbar";
import { KpiTile, StatusBadge, TD, TH, TableScroller } from "./crm-ui";
import { formatAmount, stockState, type StockState } from "./lib";

/**
 * Tableau des stocks (client) : synthèse recalculée à chaque changement
 * (références, unités, valeur au prix d'achat, alertes), recherche, filtre
 * (tous, stock bas, ruptures), ajustement à l'unité et réassort. Rien n'est
 * enregistré : un rechargement rend les quantités d'origine.
 */

export type StockRow = {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: string;
  cost: number;
  stock: number;
  threshold: number;
};

type Filter = "all" | "low" | "out";

type Labels = {
  title: string;
  summary: Record<"references" | "units" | "value" | "alerts", string>;
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  filters: Record<Filter, string>;
  columns: Record<
    "product" | "sku" | "price" | "stock" | "threshold" | "status" | "adjust",
    string
  >;
  decrease: string;
  increase: string;
  restock: string;
  restockNamed: string;
  noResult: string;
  stockStatus: Record<StockState, string>;
};

export function StockTable({
  rows,
  locale,
  labels,
}: {
  rows: StockRow[];
  locale: TemplateLocale;
  labels: Labels;
}) {
  const [stock, setStock] = useState<Record<string, number>>(() =>
    Object.fromEntries(rows.map((row) => [row.id, row.stock]))
  );
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const stateOf = (row: StockRow) => stockState(stock[row.id], row.threshold);
  const change = (id: string, delta: number) =>
    setStock((all) => ({ ...all, [id]: Math.max(0, all[id] + delta) }));

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return rows.filter((row) => {
      const state = stockState(stock[row.id], row.threshold);
      const matches =
        filter === "all" ||
        (filter === "out" ? state === "out" : state === "low");
      return (
        matches &&
        (!needle || `${row.name} ${row.sku}`.toLowerCase().includes(needle))
      );
    });
  }, [rows, stock, filter, query]);

  const units = rows.reduce((sum, row) => sum + stock[row.id], 0);
  const value = rows.reduce((sum, row) => sum + stock[row.id] * row.cost, 0);
  const alerts = rows.filter((row) => stateOf(row) !== "ok").length;

  return (
    <div>
      <dl className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiTile
          label={labels.summary.references}
          value={String(rows.length)}
        />
        <KpiTile label={labels.summary.units} value={String(units)} />
        <KpiTile
          label={labels.summary.value}
          value={formatAmount(value, locale)}
        />
        <KpiTile label={labels.summary.alerts} value={String(alerts)} />
      </dl>

      <div className="mt-8">
        <CrmToolbar
          filterLabel={labels.filterLabel}
          options={(["all", "low", "out"] as const).map((key) => ({
            key,
            label: labels.filters[key],
          }))}
          value={filter}
          onChange={setFilter}
          searchLabel={labels.searchLabel}
          searchPlaceholder={labels.searchPlaceholder}
          query={query}
          onQuery={setQuery}
        />
      </div>

      <div className="mt-6">
        <TableScroller label={labels.title}>
          <table className="w-full min-w-[52rem] border-collapse text-tpl-sm">
            <thead>
              <tr>
                {(
                  [
                    "product",
                    "sku",
                    "price",
                    "stock",
                    "threshold",
                    "status",
                    "adjust",
                  ] as const
                ).map((key) => (
                  <th key={key} scope="col" className={TH}>
                    {labels.columns[key]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map((row) => {
                const state = stateOf(row);
                return (
                  <tr key={row.id} className="hover:bg-tpl-tint/50">
                    <th scope="row" className={`${TD} text-left font-normal`}>
                      <span className="block font-semibold">{row.name}</span>
                      <span className="text-tpl-xs text-tpl-ink-muted">
                        {row.category}
                      </span>
                    </th>
                    <td className={`${TD} text-tpl-ink-muted tabular-nums`}>
                      {row.sku}
                    </td>
                    <td className={`${TD} whitespace-nowrap tabular-nums`}>
                      {row.price}
                    </td>
                    <td
                      className={`${TD} text-tpl-base font-semibold tabular-nums`}
                    >
                      {stock[row.id]}
                    </td>
                    <td className={`${TD} text-tpl-ink-muted tabular-nums`}>
                      {row.threshold}
                    </td>
                    <td className={TD}>
                      <StatusBadge tone={state}>
                        {labels.stockStatus[state]}
                      </StatusBadge>
                    </td>
                    <td className={TD}>
                      <StockActions
                        name={row.name}
                        stock={stock[row.id]}
                        restock={row.threshold * 2}
                        onChange={(delta) => change(row.id, delta)}
                        labels={labels}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableScroller>
        {visible.length === 0 ? (
          <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
            {labels.noResult}
          </p>
        ) : null}
      </div>
    </div>
  );
}
