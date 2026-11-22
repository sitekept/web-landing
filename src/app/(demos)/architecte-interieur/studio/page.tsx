import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { StudioView } from "@/templates/architecte-interieur/studio";

export const metadata = buildTemplatePageMetadata(
  architecteInterieur,
  "fr",
  "studio"
);

export default function Page() {
  return <StudioView locale="fr" />;
}
