import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ConsultationView } from "@/templates/cabinet-avocat/consultation";

export const metadata = buildTemplatePageMetadata(
  cabinetAvocat,
  "fr",
  "consultation"
);

export default function Page() {
  return <ConsultationView locale="fr" />;
}
