import { expertComptable } from "@/content/templates/expert-comptable";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/expert-comptable/home";

export const metadata = buildTemplatePageMetadata(
  expertComptable,
  "en",
  "home"
);

export default function Page() {
  return <HomeView locale="en" />;
}
