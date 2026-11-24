import { avocate } from "@/content/templates/avocate";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/avocate/home";

export const metadata = buildTemplatePageMetadata(avocate, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
