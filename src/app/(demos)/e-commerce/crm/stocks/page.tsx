import { eCommerce } from "@/content/templates/e-commerce";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CrmStockView } from "@/templates/e-commerce/crm-stock";

export const metadata = buildTemplatePageMetadata(eCommerce, "fr", "stocks");

export default function Page() {
  return <CrmStockView locale="fr" />;
}
