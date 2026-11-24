import { garageAuto } from "@/content/templates/garage-auto";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { RendezVousView } from "@/templates/garage-auto/rendez-vous";

export const metadata = buildTemplatePageMetadata(
  garageAuto,
  "en",
  "rendezVous"
);

export default function Page() {
  return <RendezVousView locale="en" />;
}
