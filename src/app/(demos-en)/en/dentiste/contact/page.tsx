import { ContactView } from "@/app/(demos)/dentiste/_views/contact";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(dentiste, "en", "contact");

export default function Page() {
  return <ContactView locale="en" />;
}
