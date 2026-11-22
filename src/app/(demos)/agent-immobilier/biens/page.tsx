import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { BiensView } from "@/templates/agent-immobilier/biens";

export const metadata = buildTemplatePageMetadata(
  agentImmobilier,
  "fr",
  "biens"
);

export default function Page() {
  return <BiensView locale="fr" />;
}
