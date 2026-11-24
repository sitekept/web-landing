import {
  TemplateLink,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  ECOMMERCE_ORDERS,
  ECOMMERCE_PRODUCTS,
  eCommerce,
} from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { PANEL, PANEL_TITLE, StatusBadge } from "./crm-ui";
import { fill, formatDate, formatPrice, getCustomer, orderTotal } from "./lib";

/** Alertes de stock du tableau de bord : produits à leur seuil ou en dessous. */
export function StockAlertsPanel({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);
  const page = copy.crm.dashboard;
  const href = (path: string) => templateHref(locale, path);
  const alerts = ECOMMERCE_PRODUCTS.filter(
    (item) => item.stock <= item.threshold
  );

  return (
    <section className={PANEL} aria-labelledby="crm-alerts">
      <div className="flex items-center justify-between gap-4">
        <h2 id="crm-alerts" className={PANEL_TITLE}>
          {page.alertsTitle}
        </h2>
        <TemplateLink
          href={href(eCommerce.paths.stocks)}
          variant="ghost"
          size="sm"
        >
          {page.seeStock}
        </TemplateLink>
      </div>
      {alerts.length === 0 ? (
        <p className="mt-4 text-tpl-sm text-tpl-ink-muted">
          {page.alertsEmpty}
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-tpl-line">
          {alerts.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 py-3 text-tpl-sm"
            >
              <span>
                <span className="block font-medium">
                  {copy.products[item.id].name}
                </span>
                <span className="text-tpl-xs text-tpl-ink-muted">
                  {fill(page.alertsText, {
                    n: item.stock,
                    threshold: item.threshold,
                  })}
                </span>
              </span>
              <StatusBadge tone={item.stock <= 0 ? "out" : "low"}>
                {item.stock <= 0
                  ? copy.crm.stockStatus.out
                  : copy.crm.stockStatus.low}
              </StatusBadge>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/** Commandes à préparer du tableau de bord. */
export function ToPreparePanel({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);
  const page = copy.crm.dashboard;
  const href = (path: string) => templateHref(locale, path);
  const toPrepare = ECOMMERCE_ORDERS.filter(
    (order) => order.status === "toPrepare"
  );

  return (
    <section className={PANEL} aria-labelledby="crm-prepare">
      <div className="flex items-center justify-between gap-4">
        <h2 id="crm-prepare" className={PANEL_TITLE}>
          {page.recentTitle}
        </h2>
        <TemplateLink
          href={href(eCommerce.paths.commandes)}
          variant="ghost"
          size="sm"
        >
          {page.seeOrders}
        </TemplateLink>
      </div>
      <ul className="mt-4 divide-y divide-tpl-line">
        {toPrepare.map((order) => (
          <li
            key={order.id}
            className="flex items-center justify-between gap-3 py-3 text-tpl-sm"
          >
            <span>
              <span className="block font-medium tabular-nums">{order.id}</span>
              <span className="text-tpl-xs text-tpl-ink-muted">
                {getCustomer(order.customer).name} ·{" "}
                {formatDate(order.date, locale)}
              </span>
            </span>
            <span className="font-semibold tabular-nums">
              {formatPrice(orderTotal(order), locale)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
