import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/agent-immobilier/contact";

export const metadata = buildTemplatePageMetadata(
  agentImmobilier,
  "en",
  "contact"
);

export default function Page() {
  return <ContactView locale="en" />;
}
