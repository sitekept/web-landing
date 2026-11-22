import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/salon-coiffure/contact";

export const metadata = buildTemplatePageMetadata(
  salonCoiffure,
  "fr",
  "contact"
);

export default function Page() {
  return <ContactView locale="fr" />;
}
