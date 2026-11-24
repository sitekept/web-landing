import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { PrestationsView } from "@/templates/salon-coiffure/prestations";

export const metadata = buildTemplatePageMetadata(
  salonCoiffure,
  "fr",
  "prestations"
);

export default function Page() {
  return <PrestationsView locale="fr" />;
}
