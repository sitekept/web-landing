import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/menage-nettoyage/home";

export const metadata = buildTemplatePageMetadata(
  menageNettoyage,
  "en",
  "home"
);

export default function Page() {
  return <HomeView locale="en" />;
}
