import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { PublicationsView } from "@/templates/cabinet-avocat/publications";

export const metadata = buildTemplatePageMetadata(
  cabinetAvocat,
  "fr",
  "publications"
);

export default function Page() {
  return <PublicationsView locale="fr" />;
}
