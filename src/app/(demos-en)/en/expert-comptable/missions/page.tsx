import { expertComptable } from "@/content/templates/expert-comptable";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { MissionsView } from "@/templates/expert-comptable/missions";

export const metadata = buildTemplatePageMetadata(
  expertComptable,
  "en",
  "missions"
);

export default function Page() {
  return <MissionsView locale="en" />;
}
