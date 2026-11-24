import { eCommerce } from "@/content/templates/e-commerce";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CrmDashboardView } from "@/templates/e-commerce/crm-dashboard";

export const metadata = buildTemplatePageMetadata(eCommerce, "en", "crm");

export default function Page() {
  return <CrmDashboardView locale="en" />;
}
