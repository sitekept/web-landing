import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/cabinet-avocat/home";

export const metadata = buildTemplatePageMetadata(cabinetAvocat, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
