import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { StylistsView } from "@/templates/salon-coiffure/stylists";

export const metadata = buildTemplatePageMetadata(
  salonCoiffure,
  "en",
  "stylists"
);

export default function Page() {
  return <StylistsView locale="en" />;
}
