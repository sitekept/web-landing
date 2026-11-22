import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/plombier-serrurier/home";

export const metadata = buildTemplatePageMetadata(
  plombierSerrurier,
  "fr",
  "home"
);

export default function Page() {
  return <HomeView locale="fr" />;
}
