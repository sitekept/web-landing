import { eCommerce } from "@/content/templates/e-commerce";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CrmCustomersView } from "@/templates/e-commerce/crm-customers";

export const metadata = buildTemplatePageMetadata(eCommerce, "en", "clients");

export default function Page() {
  return <CrmCustomersView locale="en" />;
}
