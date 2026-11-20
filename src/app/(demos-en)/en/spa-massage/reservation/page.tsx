import { spaMassage } from "@/content/templates/spa-massage";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ReservationView } from "@/templates/spa-massage/reservation";

export const metadata = buildTemplatePageMetadata(
  spaMassage,
  "en",
  "reservation"
);

export default function Page() {
  return <ReservationView locale="en" />;
}
