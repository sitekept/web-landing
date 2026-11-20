import { reparationMobile } from "@/content/templates/reparation-mobile";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { FaqView } from "@/templates/reparation-mobile/faq";
export const metadata = buildTemplatePageMetadata(
  reparationMobile,
  "fr",
  "faq"
);

export default function Page() {
  return <FaqView locale="fr" />;
}
