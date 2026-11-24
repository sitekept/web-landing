import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { DepannagesView } from "@/templates/plombier-chauffagiste/depannages";

export const metadata = buildTemplatePageMetadata(
  plombierChauffagiste,
  "en",
  "depannages"
);

export default function Page() {
  return <DepannagesView locale="en" />;
}
