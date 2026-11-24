"use client";

import { useMemo, useState } from "react";

import type { ECommerceOrderStatus } from "@/content/templates/e-commerce";

import { CrmToolbar } from "./crm-toolbar";
import { SMALL_BUTTON, StatusBadge, TD, TH, TableScroller } from "./crm-ui";

/**
 * Tableau des commandes (client) : recherche, filtre par statut avec
 * compteurs, passage « à préparer » → « expédiée » → « livrée ». Les lignes
 * arrivent déjà formatées du serveur ; seul le statut change ici, en mémoire.
 */

export type OrderRow = {
  id: string;
  date: string;
  customer: string;
  items: string;
  total: string;
  status: ECommerceOrderStatus;
};

type Labels = {
  title: string;
  searchLabel: string;
  searchPlaceholder: string;
  statusLabel: string;
  all: string;
  columns: Record<
    "id" | "date" | "customer" | "items" | "total" | "status" | "action",
    string
  >;
  ship: string;
  shipNamed: string;
  deliver: string;
  deliverNamed: string;
  count: string;
  noResult: string;
  statuses: Record<ECommerceOrderStatus, string>;
};

const NEXT: Partial<Record<ECommerceOrderStatus, ECommerceOrderStatus>> = {
  toPrepare: "shipped",
  shipped: "delivered",
};

export function OrdersTable({
  rows,
  statuses,
  labels,
}: {
  rows: OrderRow[];
  statuses: readonly ECommerceOrderStatus[];
  labels: Labels;
}) {
  const [status, setStatus] = useState<Record<string, ECommerceOrderStatus>>(
    () => Object.fromEntries(rows.map((row) => [row.id, row.status]))
  );
  const [filter, setFilter] = useState<ECommerceOrderStatus | "all">("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return rows.filter(
      (row) =>
        (filter === "all" || status[row.id] === filter) &&
        (!needle || `${row.id} ${row.customer}`.toLowerCase().includes(needle))
    );
  }, [rows, status, filter, query]);

  const countFor = (key: ECommerceOrderStatus | "all") =>
    key === "all"
      ? rows.length
      : rows.filter((row) => status[row.id] === key).length;

  return (
    <div>
      <CrmToolbar
        filterLabel={labels.statusLabel}
        options={(["all", ...statuses] as const).map((key) => ({
          key,
          label: key === "all" ? labels.all : labels.statuses[key],
          count: countFor(key),
        }))}
        value={filter}
        onChange={setFilter}
        searchLabel={labels.searchLabel}
        searchPlaceholder={labels.searchPlaceholder}
        query={query}
        onQuery={setQuery}
      />

      <p aria-live="polite" className="mt-4 text-tpl-sm text-tpl-ink-muted">
        {labels.count.replace("{n}", String(visible.length))}
      </p>

      <div className="mt-3">
        <TableScroller label={labels.title}>
          <table className="w-full min-w-[46rem] border-collapse text-tpl-sm">
            <thead>
              <tr>
                {(
                  [
                    "id",
                    "date",
                    "customer",
                    "items",
                    "total",
                    "status",
                    "action",
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
                const current = status[row.id];
                const next = NEXT[current];
                return (
                  <tr key={row.id} className="hover:bg-tpl-tint/50">
                    <th
                      scope="row"
                      className={`${TD} text-left font-semibold tabular-nums`}
                    >
                      {row.id}
                    </th>
                    <td
                      className={`${TD} whitespace-nowrap text-tpl-ink-muted`}
                    >
                      {row.date}
                    </td>
                    <td className={TD}>{row.customer}</td>
                    <td
                      className={`${TD} whitespace-nowrap text-tpl-ink-muted`}
                    >
                      {row.items}
                    </td>
                    <td
                      className={`${TD} font-semibold whitespace-nowrap tabular-nums`}
                    >
                      {row.total}
                    </td>
                    <td className={TD}>
                      <StatusBadge tone={current}>
                        {labels.statuses[current]}
                      </StatusBadge>
                    </td>
                    <td className={TD}>
                      {next ? (
                        <button
                          type="button"
                          className={SMALL_BUTTON}
                          aria-label={(next === "shipped"
                            ? labels.shipNamed
                            : labels.deliverNamed
                          ).replace("{id}", row.id)}
                          onClick={() =>
                            setStatus((all) => ({ ...all, [row.id]: next }))
                          }
                        >
                          {next === "shipped" ? labels.ship : labels.deliver}
                        </button>
                      ) : null}
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
