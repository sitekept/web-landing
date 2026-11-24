import { EquipeView } from "@/templates/dentiste/equipe";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(dentiste, "en", "equipe");

export default function Page() {
  return <EquipeView locale="en" />;
}
