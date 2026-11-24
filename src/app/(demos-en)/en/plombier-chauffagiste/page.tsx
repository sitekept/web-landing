import { plombierChauffagiste } from "@/content/templates/plombier-chauffagiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/plombier-chauffagiste/home";

export const metadata = buildTemplatePageMetadata(
  plombierChauffagiste,
  "en",
  "home"
);

export default function Page() {
  return <HomeView locale="en" />;
}
