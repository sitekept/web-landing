import { HomeView } from "@/app/(demos)/dentiste/_views/home";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(dentiste, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
