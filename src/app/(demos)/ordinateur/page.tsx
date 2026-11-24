import { ordinateur } from "@/content/templates/ordinateur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { HomeView } from "@/templates/ordinateur/home";

export const metadata = buildTemplatePageMetadata(ordinateur, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
