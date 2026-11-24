import { patisserie } from "@/content/templates/patisserie";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/patisserie/home";

export const metadata = buildTemplatePageMetadata(patisserie, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
