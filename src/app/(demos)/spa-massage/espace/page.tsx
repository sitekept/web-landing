import { spaMassage } from "@/content/templates/spa-massage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { EspaceView } from "@/templates/spa-massage/espace";

export const metadata = buildTemplatePageMetadata(spaMassage, "fr", "espace");

export default function Page() {
  return <EspaceView locale="fr" />;
}
