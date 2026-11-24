import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ZonesView } from "@/templates/menage-nettoyage/zones";

export const metadata = buildTemplatePageMetadata(
  menageNettoyage,
  "en",
  "zones"
);

export default function Page() {
  return <ZonesView locale="en" />;
}
