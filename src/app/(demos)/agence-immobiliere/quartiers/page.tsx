import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { QuartiersView } from "@/templates/agence-immobiliere/quartiers";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "fr",
  "quartiers"
);

export default function Page() {
  return <QuartiersView locale="fr" />;
}
