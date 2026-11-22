import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { EstimationView } from "@/templates/agence-immobiliere/estimation";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "fr",
  "estimation"
);

export default function Page() {
  return <EstimationView locale="fr" />;
}
