import Link from "next/link";

import {
  TemplateHeading,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  ECOMMERCE_PRODUCTS,
  ECOMMERCE_SALES,
  eCommerce,
  eCommerceProductPath,
} from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { StockAlertsPanel, ToPreparePanel } from "./crm-dashboard-panels";
import { KpiTile, PANEL, PANEL_TITLE } from "./crm-ui";
import {
  dashboardKpis,
  fill,
  formatAmount,
  formatDate,
  formatDelta,
  formatPercent,
  formatPrice,
} from "./lib";

/**
 * Tableau de bord du CRM : quatre indicateurs (30 jours contre les 30
 * précédents), ventes par semaine en barres, meilleures ventes, alertes de
 * stock et commandes à préparer. Tout est calculé depuis les données.
 */
export function CrmDashboardView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);
  const page = copy.crm.dashboard;
  const href = (path: string) => templateHref(locale, path);
  const kpis = dashboardKpis();
  const versus = (delta: string) => `${delta} ${page.versus}`;
  const max = Math.max(...ECOMMERCE_SALES.map((row) => row.revenue));
  const top = [...ECOMMERCE_PRODUCTS]
    .sort((a, b) => b.sold30 - a.sold30)
    .slice(0, 5);
  const first = ECOMMERCE_SALES[0];
  const last = ECOMMERCE_SALES[ECOMMERCE_SALES.length - 1];

  return (
    <TemplateSection density="compact">
      <TemplateHeading
        as="h1"
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <dl className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiTile
          label={page.kpis.revenue}
          value={formatAmount(kpis.revenue.value, locale)}
          note={versus(formatDelta(kpis.revenue.delta, locale))}
        />
        <KpiTile
          label={page.kpis.orders}
          value={String(kpis.orders.value)}
          note={versus(formatDelta(kpis.orders.delta, locale))}
        />
        <KpiTile
          label={page.kpis.average}
          value={formatPrice(kpis.average.value, locale)}
          note={versus(formatDelta(kpis.average.delta, locale))}
        />
        <KpiTile
          label={page.kpis.returning}
          value={formatPercent(kpis.returning.value, locale)}
          note={versus(`+${fill(page.points, { n: kpis.returning.delta })}`)}
        />
      </dl>

      <div className="mt-6 grid gap-6 lg:grid-cols-[8fr_4fr]">
        <figure className={PANEL}>
          <figcaption>
            <h2 className={PANEL_TITLE}>{page.chartTitle}</h2>
            <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
              {fill(page.chartSummary, {
                from: formatAmount(first.revenue, locale),
                to: formatAmount(last.revenue, locale),
              })}
            </p>
          </figcaption>
          <ol className="mt-6 flex h-56 items-end gap-2 sm:gap-4">
            {ECOMMERCE_SALES.map((row, index) => {
              const label = fill(page.chartWeek, {
                date: formatDate(row.week, locale),
              });
              return (
                <li
                  key={row.week}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <span className="text-tpl-xs text-tpl-ink-muted tabular-nums max-sm:sr-only">
                    {formatAmount(row.revenue, locale)}
                  </span>
                  <span
                    aria-hidden="true"
                    className={
                      index >= ECOMMERCE_SALES.length - 4
                        ? "w-full rounded-t-tpl bg-tpl-accent"
                        : "w-full rounded-t-tpl bg-tpl-line"
                    }
                    style={{
                      height: `${Math.round((row.revenue / max) * 100)}%`,
                    }}
                  />
                  <span className="text-tpl-xs whitespace-nowrap text-tpl-ink-muted">
                    <span className="sr-only">{label} : </span>
                    <span aria-hidden="true">
                      {formatDate(row.week, locale)}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
        </figure>

        <section className={PANEL} aria-labelledby="crm-top">
          <h2 id="crm-top" className={PANEL_TITLE}>
            {page.topTitle}
          </h2>
          <ol className="mt-4 divide-y divide-tpl-line">
            {top.map((item, index) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 py-3 text-tpl-sm"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="w-4 text-tpl-ink-muted tabular-nums"
                  >
                    {index + 1}
                  </span>
                  <Link
                    href={href(eCommerceProductPath(item.id))}
                    className="truncate underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                  >
                    {copy.products[item.id].name}
                  </Link>
                </span>
                <span className="shrink-0 text-tpl-ink-muted tabular-nums">
                  {fill(page.sold, { n: item.sold30 })}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <StockAlertsPanel locale={locale} />
        <ToPreparePanel locale={locale} />
      </div>
    </TemplateSection>
  );
}
