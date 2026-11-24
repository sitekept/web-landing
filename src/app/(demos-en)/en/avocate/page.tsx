import { avocate } from "@/content/templates/avocate";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/avocate/home";

export const metadata = buildTemplatePageMetadata(avocate, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
