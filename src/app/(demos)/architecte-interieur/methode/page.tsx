import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { MethodeView } from "@/templates/architecte-interieur/methode";

export const metadata = buildTemplatePageMetadata(
  architecteInterieur,
  "fr",
  "methode"
);

export default function Page() {
  return <MethodeView locale="fr" />;
}
