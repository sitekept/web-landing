import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { MethodeView } from "@/templates/cabinet-avocat/methode";

export const metadata = buildTemplatePageMetadata(
  cabinetAvocat,
  "en",
  "methode"
);

export default function Page() {
  return <MethodeView locale="en" />;
}
