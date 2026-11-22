import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { EntreprisesView } from "@/templates/menage-nettoyage/entreprises";

export const metadata = buildTemplatePageMetadata(
  menageNettoyage,
  "fr",
  "entreprises"
);

export default function Page() {
  return <EntreprisesView locale="fr" />;
}
