import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/plombier-chauffagiste/contact";

export const metadata = buildTemplatePageMetadata(
  plombierChauffagiste,
  "fr",
  "contact"
);

export default function Page() {
  return <ContactView locale="fr" />;
}
