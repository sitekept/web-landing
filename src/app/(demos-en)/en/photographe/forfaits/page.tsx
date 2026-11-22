import { photographe } from "@/content/templates/photographe";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ForfaitsView } from "@/templates/photographe/forfaits";

export const metadata = buildTemplatePageMetadata(photographe, "en", "forfaits");

export default function Page() {
  return <ForfaitsView locale="en" />;
}
