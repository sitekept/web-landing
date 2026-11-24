import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { SoinsView } from "@/templates/dentiste/soins";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "soins");

export default function Page() {
  return <SoinsView locale="fr" />;
}
