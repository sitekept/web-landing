import { reparationMobile } from "@/content/templates/reparation-mobile";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ReparationsView } from "@/templates/reparation-mobile/reparations";
export const metadata = buildTemplatePageMetadata(
  reparationMobile,
  "en",
  "reparations"
);

export default function Page() {
  return <ReparationsView locale="en" />;
}
