import { boulangerie } from "@/content/templates/boulangerie";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/boulangerie/home";

export const metadata = buildTemplatePageMetadata(boulangerie, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
