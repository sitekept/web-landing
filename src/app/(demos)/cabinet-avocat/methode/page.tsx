import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { MethodeView } from "@/templates/cabinet-avocat/methode";

export const metadata = buildTemplatePageMetadata(
  cabinetAvocat,
  "fr",
  "methode"
);

export default function Page() {
  return <MethodeView locale="fr" />;
}
