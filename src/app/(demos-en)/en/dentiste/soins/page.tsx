import { SoinsView } from "@/app/(demos)/dentiste/_views/soins";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(dentiste, "en", "soins");

export default function Page() {
  return <SoinsView locale="en" />;
}
