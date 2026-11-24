import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { AtelierMaraisView } from "@/templates/architecte-interieur/atelier-marais";

export const metadata = buildTemplatePageMetadata(
  architecteInterieur,
  "fr",
  "atelierMarais"
);

export default function Page() {
  return <AtelierMaraisView locale="fr" />;
}
