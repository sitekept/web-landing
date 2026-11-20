import { PremiereVisiteView } from "@/app/(demos)/dentiste/_views/premiere-visite";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(dentiste, "en", "premiereVisite");

export default function Page() {
  return <PremiereVisiteView locale="en" />;
}
