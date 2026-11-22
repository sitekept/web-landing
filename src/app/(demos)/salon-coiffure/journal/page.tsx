import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { JournalView } from "@/templates/salon-coiffure/journal";

export const metadata = buildTemplatePageMetadata(
  salonCoiffure,
  "fr",
  "journal"
);

export default function Page() {
  return <JournalView locale="fr" />;
}
