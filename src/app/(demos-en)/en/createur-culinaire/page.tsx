import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/createur-culinaire/home";

export const metadata = buildTemplatePageMetadata(
  createurCulinaire,
  "en",
  "home"
);

export default function Page() {
  return <HomeView locale="en" />;
}
