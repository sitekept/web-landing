import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { ECOMMERCE_PRODUCTS, eCommerce } from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import { StockTable } from "./crm-stock-table";
import { formatPrice } from "./lib";

/** Stocks du CRM : titre, puis synthèse et tableau ajustable (client). */
export function CrmStockView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(eCommerce, locale);
  const page = copy.crm.stock;

  return (
    <TemplateSection density="compact">
      <TemplateHeading
        as="h1"
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <div className="mt-10">
        <StockTable
          locale={locale}
          labels={{
            ...page,
            searchLabel: copy.crm.searchLabel,
            noResult: copy.crm.noResult,
            stockStatus: copy.crm.stockStatus,
          }}
          rows={[...ECOMMERCE_PRODUCTS]
            .sort((a, b) => a.sku.localeCompare(b.sku))
            .map((item) => ({
              id: item.id,
              name: copy.products[item.id].name,
              sku: item.sku,
              category: copy.categories[item.category].label,
              price: formatPrice(item.price, locale),
              cost: item.cost,
              stock: item.stock,
              threshold: item.threshold,
            }))}
        />
      </div>
    </TemplateSection>
  );
}
