import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { ContactView } from "@/templates/dentiste/contact";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "contact");

export default function Page() {
  return <ContactView locale="fr" />;
}
