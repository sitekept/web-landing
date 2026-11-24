import { ordinateur } from "@/content/templates/ordinateur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { HomeView } from "@/templates/ordinateur/home";

export const metadata = buildTemplatePageMetadata(ordinateur, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
