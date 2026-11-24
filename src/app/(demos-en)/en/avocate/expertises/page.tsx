import { avocate } from "@/content/templates/avocate";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ExpertisesView } from "@/templates/avocate/expertises";

export const metadata = buildTemplatePageMetadata(avocate, "en", "expertises");

export default function Page() {
  return <ExpertisesView locale="en" />;
}
