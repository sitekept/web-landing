import { photographe } from "@/content/templates/photographe";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/photographe/contact";

export const metadata = buildTemplatePageMetadata(photographe, "en", "contact");

export default function Page() {
  return <ContactView locale="en" />;
}
