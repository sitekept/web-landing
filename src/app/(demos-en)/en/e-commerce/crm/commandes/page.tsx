import { eCommerce } from "@/content/templates/e-commerce";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CrmOrdersView } from "@/templates/e-commerce/crm-orders";

export const metadata = buildTemplatePageMetadata(eCommerce, "en", "commandes");

export default function Page() {
  return <CrmOrdersView locale="en" />;
}
