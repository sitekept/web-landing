import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/agent-immobilier/contact";

export const metadata = buildTemplatePageMetadata(
  agentImmobilier,
  "fr",
  "contact"
);

export default function Page() {
  return <ContactView locale="fr" />;
}
