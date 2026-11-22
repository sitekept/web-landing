import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { EstimationView } from "@/templates/agent-immobilier/estimation";

export const metadata = buildTemplatePageMetadata(
  agentImmobilier,
  "en",
  "estimation"
);

export default function Page() {
  return <EstimationView locale="en" />;
}
