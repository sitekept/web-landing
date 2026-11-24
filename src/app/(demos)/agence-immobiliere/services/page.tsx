import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ServicesView } from "@/templates/agence-immobiliere/services";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "fr",
  "services"
);

export default function Page() {
  return <ServicesView locale="fr" />;
}
