import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/plombier-serrurier/contact";

export const metadata = buildTemplatePageMetadata(
  plombierSerrurier,
  "en",
  "contact"
);

export default function Page() {
  return <ContactView locale="en" />;
}
