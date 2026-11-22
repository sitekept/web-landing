import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/architecte-interieur/home";

export const metadata = buildTemplatePageMetadata(
  architecteInterieur,
  "fr",
  "home"
);

export default function Page() {
  return <HomeView locale="fr" />;
}
