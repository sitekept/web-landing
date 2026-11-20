import { TechnologiesView } from "@/app/(demos)/dentiste/_views/technologies";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(dentiste, "en", "technologies");

export default function Page() {
  return <TechnologiesView locale="en" />;
}
