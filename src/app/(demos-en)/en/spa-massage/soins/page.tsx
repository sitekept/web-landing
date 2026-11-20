import { spaMassage } from "@/content/templates/spa-massage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { SoinsView } from "@/templates/spa-massage/soins";

export const metadata = buildTemplatePageMetadata(spaMassage, "en", "soins");

export default function Page() {
  return <SoinsView locale="en" />;
}
