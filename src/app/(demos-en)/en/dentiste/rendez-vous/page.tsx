import { RendezVousView } from "@/templates/dentiste/rendez-vous";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(dentiste, "en", "rendezVous");

export default function Page() {
  return <RendezVousView locale="en" />;
}
