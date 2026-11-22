import { garageAuto } from "@/content/templates/garage-auto";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { DevisView } from "@/templates/garage-auto/devis";

export const metadata = buildTemplatePageMetadata(garageAuto, "fr", "devis");

export default function Page() {
  return <DevisView locale="fr" />;
}
