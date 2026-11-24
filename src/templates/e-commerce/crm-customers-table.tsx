"use client";

import { clsx } from "clsx";
import { useId, useMemo, useState } from "react";

import type {
  ECommerceOrderStatus,
  ECommerceSegment,
} from "@/content/templates/e-commerce";

import {
  CustomerDetail,
  type CustomerDetailLabels,
  type CustomerRow,
} from "./crm-customer-detail";
import { CrmToolbar } from "./crm-toolbar";
import { StatusBadge } from "./crm-ui";

/**
 * Fichier clients (client) : recherche, filtre par segment, liste et fiche du
 * client choisi. Les valeurs arrivent formatées du serveur.
 */

type Labels = {
  title: string;
  searchLabel: string;
  searchPlaceholder: string;
  segmentLabel: string;
  all: string;
  columns: Record<"name" | "segment" | "orders" | "spent" | "last", string>;
  noResult: string;
  segments: Record<ECommerceSegment, string>;
  statuses: Record<ECommerceOrderStatus, string>;
  detail: CustomerDetailLabels["detail"] & { empty: string };
};

const SEGMENTS = ["vip", "loyal", "new", "dormant"] as const;

/** Ton de la pastille de segment (le libellé porte le sens). */
const SEGMENT_TONE = {
  vip: "toPrepare",
  loyal: "shipped",
  new: "delivered",
  dormant: "refunded",
} as const;

export function CustomersTable({
  rows,
  labels,
}: {
  rows: CustomerRow[];
  labels: Labels;
}) {
  const [segment, setSegment] = useState<ECommerceSegment | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string>(rows[0]?.id ?? "");
  const detailId = useId();

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return rows.filter(
      (row) =>
        (segment === "all" || row.segment === segment) &&
        (!needle || `${row.name} ${row.email}`.toLowerCase().includes(needle))
    );
  }, [rows, segment, query]);
  const current = rows.find((row) => row.id === selected);
  const grid = "sm:grid-cols-[2fr_1fr_1fr_1.2fr]";

  return (
    <div>
      <CrmToolbar
        filterLabel={labels.segmentLabel}
        options={(["all", ...SEGMENTS] as const).map((key) => ({
          key,
          label: key === "all" ? labels.all : labels.segments[key],
        }))}
        value={segment}
        onChange={setSegment}
        searchLabel={labels.searchLabel}
        searchPlaceholder={labels.searchPlaceholder}
        query={query}
        onQuery={setQuery}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[7fr_5fr] lg:items-start">
        <div className="overflow-hidden rounded-tpl border border-tpl-line bg-tpl-raised">
          <div
            aria-hidden="true"
            className={clsx(
              "hidden gap-4 border-b border-tpl-line bg-tpl-tint px-4 py-3 text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase sm:grid",
              grid
            )}
          >
            <span>{labels.columns.name}</span>
            <span>{labels.columns.orders}</span>
            <span>{labels.columns.spent}</span>
            <span>{labels.columns.last}</span>
          </div>
          <ul aria-label={labels.title}>
            {visible.map((row) => (
              <li
                key={row.id}
                className="border-b border-tpl-line last:border-b-0"
              >
                <button
                  type="button"
                  aria-pressed={row.id === selected}
                  aria-controls={detailId}
                  onClick={() => setSelected(row.id)}
                  className={clsx(
                    "grid w-full grid-cols-2 gap-x-4 gap-y-1 px-4 py-3 text-left text-tpl-sm transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink sm:items-center",
                    grid,
                    row.id === selected ? "bg-tpl-tint" : "hover:bg-tpl-tint/50"
                  )}
                >
                  <span className="col-span-2 flex flex-wrap items-center gap-2 sm:col-span-1">
                    <span className="font-semibold">{row.name}</span>
                    <StatusBadge tone={SEGMENT_TONE[row.segment]}>
                      {labels.segments[row.segment]}
                    </StatusBadge>
                  </span>
                  <span className="text-tpl-ink-muted tabular-nums">
                    {row.orders}
                    <span className="sm:sr-only">
                      {" "}
                      {labels.columns.orders.toLowerCase()}
                    </span>
                  </span>
                  <span className="font-semibold tabular-nums">
                    {row.spent}
                  </span>
                  <span className="text-tpl-ink-muted max-sm:col-span-2">
                    <span className="sr-only">{labels.columns.last} : </span>
                    {row.last}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {visible.length === 0 ? (
            <p className="p-4 text-tpl-sm text-tpl-ink-muted">
              {labels.noResult}
            </p>
          ) : null}
        </div>

        <section
          id={detailId}
          aria-live="polite"
          className="rounded-tpl border border-tpl-line bg-tpl-raised p-6 lg:sticky lg:top-24 xl:top-6"
        >
          {current ? (
            <CustomerDetail
              customer={current}
              labels={{
                ordersLabel: labels.columns.orders,
                spentLabel: labels.columns.spent,
                statuses: labels.statuses,
                detail: labels.detail,
              }}
            />
          ) : (
            <p className="text-tpl-sm text-tpl-ink-muted">
              {labels.detail.empty}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
