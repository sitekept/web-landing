import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/agent-immobilier/home";

export const metadata = buildTemplatePageMetadata(
  agentImmobilier,
  "en",
  "home"
);

export default function Page() {
  return <HomeView locale="en" />;
}
