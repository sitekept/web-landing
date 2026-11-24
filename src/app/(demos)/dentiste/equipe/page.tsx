import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { EquipeView } from "@/templates/dentiste/equipe";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "equipe");

export default function Page() {
  return <EquipeView locale="fr" />;
}
