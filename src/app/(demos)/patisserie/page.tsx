import { patisserie } from "@/content/templates/patisserie";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/patisserie/home";

export const metadata = buildTemplatePageMetadata(patisserie, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
