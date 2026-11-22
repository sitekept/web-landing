import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { BiensView } from "@/templates/agence-immobiliere/biens";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "en",
  "biens"
);

export default function Page() {
  return <BiensView locale="en" />;
}
