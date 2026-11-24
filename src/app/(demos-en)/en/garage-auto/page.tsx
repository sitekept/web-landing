import { garageAuto } from "@/content/templates/garage-auto";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/garage-auto/home";

export const metadata = buildTemplatePageMetadata(garageAuto, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
