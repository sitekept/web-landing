import { photographe } from "@/content/templates/photographe";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/photographe/home";

export const metadata = buildTemplatePageMetadata(photographe, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
