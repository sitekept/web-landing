import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { TarifsView } from "@/templates/plombier-chauffagiste/tarifs";

export const metadata = buildTemplatePageMetadata(
  plombierChauffagiste,
  "fr",
  "tarifs"
);

export default function Page() {
  return <TarifsView locale="fr" />;
}
