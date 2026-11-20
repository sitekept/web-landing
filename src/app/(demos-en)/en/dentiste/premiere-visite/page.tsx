import { PremiereVisiteView } from "@/templates/dentiste/premiere-visite";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(
  dentiste,
  "en",
  "premiereVisite"
);

export default function Page() {
  return <PremiereVisiteView locale="en" />;
}
