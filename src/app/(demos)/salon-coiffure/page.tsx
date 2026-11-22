import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/salon-coiffure/home";

export const metadata = buildTemplatePageMetadata(salonCoiffure, "fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
