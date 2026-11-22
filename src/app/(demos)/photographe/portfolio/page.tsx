import { photographe } from "@/content/templates/photographe";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { PortfolioView } from "@/templates/photographe/portfolio";

export const metadata = buildTemplatePageMetadata(photographe, "fr", "portfolio");

export default function Page() {
  return <PortfolioView locale="fr" />;
}
