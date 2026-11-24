import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ReservationView } from "@/templates/salon-coiffure/reservation";

export const metadata = buildTemplatePageMetadata(
  salonCoiffure,
  "en",
  "reservation"
);

export default function Page() {
  return <ReservationView locale="en" />;
}
