import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CommandeView } from "@/templates/createur-culinaire/commande";

export const metadata = buildTemplatePageMetadata(
  createurCulinaire,
  "en",
  "commande"
);

export default function Page() {
  return <CommandeView locale="en" />;
}
