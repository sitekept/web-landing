import { avocate } from "@/content/templates/avocate";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/avocate/contact";

export const metadata = buildTemplatePageMetadata(avocate, "en", "contact");

export default function Page() {
  return <ContactView locale="en" />;
}
