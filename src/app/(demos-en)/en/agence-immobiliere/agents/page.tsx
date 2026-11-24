import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { AgentsView } from "@/templates/agence-immobiliere/agents";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "en",
  "agents"
);

export default function Page() {
  return <AgentsView locale="en" />;
}
