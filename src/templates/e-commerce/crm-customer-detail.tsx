import { Mail } from "lucide-react";

import type {
  ECommerceOrderStatus,
  ECommerceSegment,
} from "@/content/templates/e-commerce";

import { StatusBadge } from "./crm-ui";

/** Ligne du fichier clients, valeurs déjà formatées par le serveur. */
export type CustomerRow = {
  id: string;
  name: string;
  email: string;
  segment: ECommerceSegment;
  orders: number;
  spent: string;
  average: string;
  last: string;
  since: string;
  newsletter: boolean;
  note: string;
  history: {
    id: string;
    date: string;
    total: string;
    status: ECommerceOrderStatus;
  }[];
};

export type CustomerDetailLabels = {
  ordersLabel: string;
  spentLabel: string;
  statuses: Record<ECommerceOrderStatus, string>;
  detail: Record<
    | "since"
    | "newsletter"
    | "newsletterYes"
    | "newsletterNo"
    | "average"
    | "notes"
    | "history"
    | "noHistory",
    string
  >;
};

/** Fiche d'un client : coordonnées, totaux, notes, commandes récentes. */
export function CustomerDetail({
  customer,
  labels,
}: {
  customer: CustomerRow;
  labels: CustomerDetailLabels;
}) {
  const facts = [
    [labels.ordersLabel, String(customer.orders)],
    [labels.spentLabel, customer.spent],
    [labels.detail.average, customer.average],
    [
      labels.detail.newsletter,
      customer.newsletter
        ? labels.detail.newsletterYes
        : labels.detail.newsletterNo,
    ],
  ] as const;

  return (
    <>
      <h2 className="font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight)">
        {customer.name}
      </h2>
      <p className="mt-2 flex items-center gap-2 text-tpl-sm text-tpl-ink-muted">
        <Mail aria-hidden="true" className="size-4" />
        {customer.email}
      </p>
      <p className="mt-1 text-tpl-xs text-tpl-ink-muted">
        {labels.detail.since.replace("{date}", customer.since)}
      </p>
      <dl className="mt-5 grid grid-cols-2 gap-4 border-y border-tpl-line py-4 text-tpl-sm">
        {facts.map(([label, value]) => (
          <div key={label}>
            <dt className="text-tpl-ink-muted">{label}</dt>
            <dd className="font-semibold tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
      <h3 className="mt-5 text-tpl-sm font-semibold">{labels.detail.notes}</h3>
      <p className="mt-1 text-tpl-sm text-pretty text-tpl-ink-muted">
        {customer.note}
      </p>
      <h3 className="mt-5 text-tpl-sm font-semibold">
        {labels.detail.history}
      </h3>
      {customer.history.length === 0 ? (
        <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
          {labels.detail.noHistory}
        </p>
      ) : (
        <ul className="mt-2 divide-y divide-tpl-line text-tpl-sm">
          {customer.history.map((order) => (
            <li
              key={order.id}
              className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-2"
            >
              <span>
                <span className="font-medium tabular-nums">{order.id}</span>
                <span className="text-tpl-ink-muted"> · {order.date}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="tabular-nums">{order.total}</span>
                <StatusBadge tone={order.status}>
                  {labels.statuses[order.status]}
                </StatusBadge>
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
