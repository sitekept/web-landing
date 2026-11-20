import { osteopathe } from "@/content/templates/osteopathe";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ConsultationsView } from "@/templates/osteopathe/consultations";

export const metadata = buildTemplatePageMetadata(
  osteopathe,
  "en",
  "consultations"
);

export default function Page() {
  return <ConsultationsView locale="en" />;
}
