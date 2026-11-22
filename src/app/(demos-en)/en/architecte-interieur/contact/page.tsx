import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/architecte-interieur/contact";

export const metadata = buildTemplatePageMetadata(
  architecteInterieur,
  "en",
  "contact"
);

export default function Page() {
  return <ContactView locale="en" />;
}
