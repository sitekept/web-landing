import { reparationMobile } from "@/content/templates/reparation-mobile";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/reparation-mobile/contact";
export const metadata = buildTemplatePageMetadata(
  reparationMobile,
  "en",
  "contact"
);

export default function Page() {
  return <ContactView locale="en" />;
}
