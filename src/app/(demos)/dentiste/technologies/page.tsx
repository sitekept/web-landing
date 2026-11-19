import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { TechnologiesView } from "../_views/technologies";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "technologies");

export default function Page() {
  return <TechnologiesView locale="fr" />;
}
