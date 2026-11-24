import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { FaqView } from "@/templates/menage-nettoyage/faq";

export const metadata = buildTemplatePageMetadata(menageNettoyage, "fr", "faq");

export default function Page() {
  return <FaqView locale="fr" />;
}
