import {
  ECOMMERCE_CUSTOMERS,
  ECOMMERCE_ORDERS,
  ECOMMERCE_PRODUCTS,
  ECOMMERCE_PROMO,
  ECOMMERCE_RETURNING,
  ECOMMERCE_SALES,
  ECOMMERCE_SHIPPING,
  type ECommerceCustomerId,
  type ECommerceOrderStatus,
  type ECommerceProductId,
} from "@/content/templates/e-commerce";
import type { TemplateLocale } from "@/content/templates/types";

/**
 * Calculs et formats du template e-commerce, purs : utilisables côté serveur
 * et dans les composants client (panier, tableaux du CRM). Aucun total n'est
 * écrit à la main dans la définition : tout se dérive des données.
 */

const INTL_LOCALE: Record<TemplateLocale, string> = {
  fr: "fr-FR",
  en: "en-US",
};

/** Prix en euros dans la langue de la page (« 24,00 € » / « €24.00 »). */
export function formatPrice(value: number, locale: TemplateLocale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

/** Montant arrondi à l'euro (tableau de bord). */
export function formatAmount(value: number, locale: TemplateLocale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number, locale: TemplateLocale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Date ISO (`2026-11-24`) : `short` (« 24 nov. »), `medium` (« 24 nov. 2026 »)
 * ou `long` (« 24 novembre 2026 »). Fuseau UTC : le rendu
 * serveur et le rendu client donnent la même chaîne (pas d'écart d'hydratation).
 */
export function formatDate(
  iso: string,
  locale: TemplateLocale,
  style: "short" | "medium" | "long" = "short"
): string {
  return new Intl.DateTimeFormat(INTL_LOCALE[locale], {
    day: "numeric",
    month: style === "long" ? "long" : "short",
    ...(style !== "short" && { year: "numeric" }),
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** Remplace les `{clé}` d'un libellé de la copie. */
export function fill(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match
  );
}

export type ECommerceProduct = (typeof ECOMMERCE_PRODUCTS)[number];

const PRODUCTS_BY_ID = new Map<string, ECommerceProduct>(
  ECOMMERCE_PRODUCTS.map((item) => [item.id, item])
);

export function getProduct(id: string): ECommerceProduct | undefined {
  return PRODUCTS_BY_ID.get(id);
}

export function isProductId(id: string): id is ECommerceProductId {
  return PRODUCTS_BY_ID.has(id);
}

export type StockState = "ok" | "low" | "out";

export function stockState(stock: number, threshold: number): StockState {
  if (stock <= 0) return "out";
  if (stock <= threshold) return "low";
  return "ok";
}

/** Livraison d'un panier : offerte à partir du seuil, forfait sinon, 0 si vide. */
export function shippingFor(subtotal: number): number {
  if (subtotal <= 0 || subtotal >= ECOMMERCE_SHIPPING.freeFrom) return 0;
  return ECOMMERCE_SHIPPING.flat;
}

export function isPromoCode(code: string): boolean {
  return code.trim().toUpperCase() === ECOMMERCE_PROMO.code;
}

/** Arrondi au centime. */
export function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

export type ECommerceOrder = (typeof ECOMMERCE_ORDERS)[number];

/** Total TTC d'une commande : articles + livraison. */
export function orderTotal(order: Pick<ECommerceOrder, "lines">): number {
  const subtotal = order.lines.reduce(
    (sum, line) => sum + (getProduct(line.product)?.price ?? 0) * line.qty,
    0
  );
  return round2(subtotal + shippingFor(subtotal));
}

export function orderItemCount(order: Pick<ECommerceOrder, "lines">): number {
  return order.lines.reduce((sum, line) => sum + line.qty, 0);
}

export type ECommerceCustomer = (typeof ECOMMERCE_CUSTOMERS)[number];

export function getCustomer(id: ECommerceCustomerId): ECommerceCustomer {
  const customer = ECOMMERCE_CUSTOMERS.find((item) => item.id === id);
  if (!customer) throw new Error(`Client inconnu : ${id}`);
  return customer;
}

/** Commandes d'un client parmi les commandes récentes (remboursées comprises). */
export function customerOrders(id: ECommerceCustomerId): ECommerceOrder[] {
  return ECOMMERCE_ORDERS.filter((order) => order.customer === id);
}

/**
 * Totaux d'un client : commandes antérieures (`prior`) plus commandes récentes,
 * hors remboursées ; date de la dernière commande.
 */
export function customerStats(customer: ECommerceCustomer) {
  const recent = customerOrders(customer.id).filter(
    (order) => order.status !== ("refunded" satisfies ECommerceOrderStatus)
  );
  const orders = customer.prior.orders + recent.length;
  const spent = round2(
    customer.prior.spent +
      recent.reduce((sum, order) => sum + orderTotal(order), 0)
  );
  const dates = [
    ...customerOrders(customer.id).map((order) => order.date),
    ...(customer.priorLast ? [customer.priorLast] : []),
  ].sort();

  return {
    orders,
    spent,
    average: orders > 0 ? round2(spent / orders) : 0,
    last: dates.at(-1) ?? null,
  };
}

/**
 * Indicateurs du tableau de bord : quatre dernières semaines de
 * `ECOMMERCE_SALES` contre les quatre précédentes. Variation en %, arrondie.
 */
export function dashboardKpis() {
  const current = ECOMMERCE_SALES.slice(-4);
  const previous = ECOMMERCE_SALES.slice(-8, -4);
  const sum = (rows: readonly { revenue: number; orders: number }[]) => ({
    revenue: rows.reduce((total, row) => total + row.revenue, 0),
    orders: rows.reduce((total, row) => total + row.orders, 0),
  });
  const now = sum(current);
  const before = sum(previous);
  const delta = (a: number, b: number) => Math.round(((a - b) / b) * 100);
  const average = round2(now.revenue / now.orders);
  const averageBefore = round2(before.revenue / before.orders);

  return {
    revenue: { value: now.revenue, delta: delta(now.revenue, before.revenue) },
    orders: { value: now.orders, delta: delta(now.orders, before.orders) },
    average: { value: average, delta: delta(average, averageBefore) },
    returning: {
      value: ECOMMERCE_RETURNING.current,
      delta: ECOMMERCE_RETURNING.current - ECOMMERCE_RETURNING.previous,
    },
  };
}

/** Variation signée en pourcentage (« +34 % » / « +34% »). */
export function formatDelta(percent: number, locale: TemplateLocale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    style: "percent",
    signDisplay: "exceptZero",
    maximumFractionDigits: 0,
  }).format(percent / 100);
}

/** Pourcentage entier (« 38 % » / « 38% »). */
export function formatPercent(percent: number, locale: TemplateLocale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(percent / 100);
}
