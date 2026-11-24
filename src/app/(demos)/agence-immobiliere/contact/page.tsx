import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/agence-immobiliere/contact";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "fr",
  "contact"
);

export default function Page() {
  return <ContactView locale="fr" />;
}
