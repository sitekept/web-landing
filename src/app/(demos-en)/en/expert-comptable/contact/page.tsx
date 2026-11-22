import { expertComptable } from "@/content/templates/expert-comptable";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/expert-comptable/contact";

export const metadata = buildTemplatePageMetadata(
  expertComptable,
  "en",
  "contact"
);

export default function Page() {
  return <ContactView locale="en" />;
}
