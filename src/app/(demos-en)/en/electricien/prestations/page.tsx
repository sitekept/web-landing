import { electricien } from "@/content/templates/electricien";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { PrestationsView } from "@/templates/electricien/prestations";

export const metadata = buildTemplatePageMetadata(
  electricien,
  "en",
  "prestations"
);

export default function Page() {
  return <PrestationsView locale="en" />;
}
