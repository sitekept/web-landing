import { osteopathe } from "@/content/templates/osteopathe";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { RendezVousView } from "@/templates/osteopathe/rendez-vous";

export const metadata = buildTemplatePageMetadata(
  osteopathe,
  "en",
  "rendezVous"
);

export default function Page() {
  return <RendezVousView locale="en" />;
}
