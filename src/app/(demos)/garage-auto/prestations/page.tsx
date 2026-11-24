import { garageAuto } from "@/content/templates/garage-auto";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { PrestationsView } from "@/templates/garage-auto/prestations";

export const metadata = buildTemplatePageMetadata(
  garageAuto,
  "fr",
  "prestations"
);

export default function Page() {
  return <PrestationsView locale="fr" />;
}
