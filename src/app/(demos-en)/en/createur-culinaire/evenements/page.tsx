import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { EvenementsView } from "@/templates/createur-culinaire/evenements";

export const metadata = buildTemplatePageMetadata(
  createurCulinaire,
  "en",
  "evenements"
);

export default function Page() {
  return <EvenementsView locale="en" />;
}
