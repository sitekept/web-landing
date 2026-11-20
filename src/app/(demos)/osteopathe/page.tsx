import { osteopathe } from "@/content/templates/osteopathe";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/osteopathe/home";

export const metadata = buildTemplatePageMetadata(osteopathe, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
