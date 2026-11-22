import { fleuriste } from "@/content/templates/fleuriste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/fleuriste/home";

export const metadata = buildTemplatePageMetadata(fleuriste, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
