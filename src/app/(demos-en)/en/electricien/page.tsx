import { electricien } from "@/content/templates/electricien";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/electricien/home";

export const metadata = buildTemplatePageMetadata(electricien, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
