import { reparationMobile } from "@/content/templates/reparation-mobile";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/reparation-mobile/home";
export const metadata = buildTemplatePageMetadata(
  reparationMobile,
  "fr",
  "home"
);

export default function Page() {
  return <HomeView locale="fr" />;
}
