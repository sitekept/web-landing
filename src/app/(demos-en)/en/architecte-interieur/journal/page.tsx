import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { JournalView } from "@/templates/architecte-interieur/journal";

export const metadata = buildTemplatePageMetadata(
  architecteInterieur,
  "en",
  "journal"
);

export default function Page() {
  return <JournalView locale="en" />;
}
