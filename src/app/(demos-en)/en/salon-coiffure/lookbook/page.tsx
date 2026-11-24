import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { LookbookView } from "@/templates/salon-coiffure/lookbook";

export const metadata = buildTemplatePageMetadata(
  salonCoiffure,
  "en",
  "lookbook"
);

export default function Page() {
  return <LookbookView locale="en" />;
}
