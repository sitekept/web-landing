import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { HomeView } from "@/templates/dentiste/home";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
