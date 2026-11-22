import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { BienView } from "@/templates/agence-immobiliere/bien";

export const metadata = buildTemplatePageMetadata(
  agenceImmobiliere,
  "en",
  "bien"
);

export default function Page() {
  return <BienView locale="en" />;
}
