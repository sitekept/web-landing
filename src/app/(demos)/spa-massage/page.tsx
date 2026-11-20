import { spaMassage } from "@/content/templates/spa-massage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/spa-massage/home";

export const metadata = buildTemplatePageMetadata(spaMassage, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
