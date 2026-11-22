import { expertComptable } from "@/content/templates/expert-comptable";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HonorairesView } from "@/templates/expert-comptable/honoraires";

export const metadata = buildTemplatePageMetadata(
  expertComptable,
  "fr",
  "honoraires"
);

export default function Page() {
  return <HonorairesView locale="fr" />;
}
