import { avocate } from "@/content/templates/avocate";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ExpertisesView } from "@/templates/avocate/expertises";

export const metadata = buildTemplatePageMetadata(avocate, "fr", "expertises");

export default function Page() {
  return <ExpertisesView locale="fr" />;
}
