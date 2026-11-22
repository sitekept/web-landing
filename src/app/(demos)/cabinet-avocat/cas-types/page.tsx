import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CasTypesView } from "@/templates/cabinet-avocat/cas-types";

export const metadata = buildTemplatePageMetadata(
  cabinetAvocat,
  "fr",
  "casTypes"
);

export default function Page() {
  return <CasTypesView locale="fr" />;
}
