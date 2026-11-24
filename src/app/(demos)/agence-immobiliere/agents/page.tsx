import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { AgentsView } from "@/templates/agence-immobiliere/agents";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "fr",
  "agents"
);

export default function Page() {
  return <AgentsView locale="fr" />;
}
