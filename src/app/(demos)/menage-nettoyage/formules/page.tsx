import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { FormulesView } from "@/templates/menage-nettoyage/formules";

export const metadata = buildTemplatePageMetadata(
  menageNettoyage,
  "fr",
  "formules"
);

export default function Page() {
  return <FormulesView locale="fr" />;
}
