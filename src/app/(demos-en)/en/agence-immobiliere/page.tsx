import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/agence-immobiliere/home";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "en",
  "home"
);

export default function Page() {
  return <HomeView locale="en" />;
}
