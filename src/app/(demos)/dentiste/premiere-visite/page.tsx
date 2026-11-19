import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { PremiereVisiteView } from "../_views/premiere-visite";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "premiereVisite");

export default function Page() {
  return <PremiereVisiteView locale="fr" />;
}
