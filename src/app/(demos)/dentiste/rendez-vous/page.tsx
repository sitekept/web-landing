import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { RendezVousView } from "@/templates/dentiste/rendez-vous";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "rendezVous");

export default function Page() {
  return <RendezVousView locale="fr" />;
}
