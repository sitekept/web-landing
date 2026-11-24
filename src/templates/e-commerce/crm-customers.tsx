import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { ECOMMERCE_CUSTOMERS, eCommerce } from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { CustomersTable } from "./crm-customers-table";
import {
  customerOrders,
  customerStats,
  formatDate,
  formatPrice,
  orderTotal,
} from "./lib";

/** Clients du CRM : titre, puis liste filtrable et fiche du client (client). */
export function CrmCustomersView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);
  const page = copy.crm.customers;

  const rows = ECOMMERCE_CUSTOMERS.map((customer) => ({
    customer,
    stats: customerStats(customer),
  }))
    .sort((a, b) => b.stats.spent - a.stats.spent)
    .map(({ customer, stats }) => ({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      segment: customer.segment,
      orders: stats.orders,
      spent: formatPrice(stats.spent, locale),
      average: formatPrice(stats.average, locale),
      last: stats.last
        ? formatDate(stats.last, locale, "medium")
        : page.detail.never,
      since: formatDate(customer.since, locale, "long"),
      newsletter: customer.newsletter,
      note: page.notes[customer.id],
      history: customerOrders(customer.id).map((order) => ({
        id: order.id,
        date: formatDate(order.date, locale),
        total: formatPrice(orderTotal(order), locale),
        status: order.status,
      })),
    }));

  return (
    <TemplateSection density="compact">
      <TemplateHeading
        as="h1"
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <div className="mt-10">
        <CustomersTable
          labels={{
            ...page,
            searchLabel: copy.crm.searchLabel,
            noResult: copy.crm.noResult,
            segments: copy.crm.segments,
            statuses: copy.crm.statuses,
          }}
          rows={rows}
        />
      </div>
    </TemplateSection>
  );
}
