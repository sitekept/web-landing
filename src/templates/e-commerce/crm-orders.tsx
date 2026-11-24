import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  ECOMMERCE_ORDER_STATUSES,
  ECOMMERCE_ORDERS,
  eCommerce,
} from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { OrdersTable } from "./crm-orders-table";
import {
  fill,
  formatDate,
  formatPrice,
  getCustomer,
  orderItemCount,
  orderTotal,
} from "./lib";

/** Commandes du CRM : titre, puis tableau filtrable (client). */
export function CrmOrdersView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);
  const page = copy.crm.orders;
  const items = (n: number) =>
    n === 1 ? copy.crm.itemsOne : fill(copy.crm.itemsMany, { n });

  return (
    <TemplateSection density="compact">
      <TemplateHeading
        as="h1"
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <div className="mt-10">
        <OrdersTable
          statuses={ECOMMERCE_ORDER_STATUSES}
          labels={{
            ...page,
            searchLabel: copy.crm.searchLabel,
            noResult: copy.crm.noResult,
            statuses: copy.crm.statuses,
          }}
          rows={ECOMMERCE_ORDERS.map((order) => ({
            id: order.id,
            date: formatDate(order.date, locale),
            customer: getCustomer(order.customer).name,
            items: items(orderItemCount(order)),
            total: formatPrice(orderTotal(order), locale),
            status: order.status,
          }))}
        />
      </div>
    </TemplateSection>
  );
}
