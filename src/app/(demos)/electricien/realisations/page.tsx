import { electricien } from "@/content/templates/electricien";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { RealisationsView } from "@/templates/electricien/realisations";

export const metadata = buildTemplatePageMetadata(
  electricien,
  "fr",
  "realisations"
);

export default function Page() {
  return <RealisationsView locale="fr" />;
}
