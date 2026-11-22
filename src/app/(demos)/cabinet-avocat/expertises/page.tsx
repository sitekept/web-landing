import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ExpertisesView } from "@/templates/cabinet-avocat/expertises";

export const metadata = buildTemplatePageMetadata(
  cabinetAvocat,
  "fr",
  "expertises"
);

export default function Page() {
  return <ExpertisesView locale="fr" />;
}
