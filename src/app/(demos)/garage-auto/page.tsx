import { garageAuto } from "@/content/templates/garage-auto";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/garage-auto/home";

export const metadata = buildTemplatePageMetadata(garageAuto, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
