import { osteopathe } from "@/content/templates/osteopathe";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ApprocheView } from "@/templates/osteopathe/approche";

export const metadata = buildTemplatePageMetadata(osteopathe, "fr", "approche");

export default function Page() {
  return <ApprocheView locale="fr" />;
}
