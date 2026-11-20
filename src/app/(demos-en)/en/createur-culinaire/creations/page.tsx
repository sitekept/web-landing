import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CreationsView } from "@/templates/createur-culinaire/creations";

export const metadata = buildTemplatePageMetadata(
  createurCulinaire,
  "en",
  "creations"
);

export default function Page() {
  return <CreationsView locale="en" />;
}
