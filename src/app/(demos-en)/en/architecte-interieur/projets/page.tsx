import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ProjetsView } from "@/templates/architecte-interieur/projets";

export const metadata = buildTemplatePageMetadata(
  architecteInterieur,
  "en",
  "projets"
);

export default function Page() {
  return <ProjetsView locale="en" />;
}
