import { electricien } from "@/content/templates/electricien";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/electricien/contact";

export const metadata = buildTemplatePageMetadata(electricien, "fr", "contact");

export default function Page() {
  return <ContactView locale="fr" />;
}
