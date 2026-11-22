import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ReservationView } from "@/templates/restaurant-bistrot/reservation";

export const metadata = buildTemplatePageMetadata(
  restaurantBistrot,
  "fr",
  "reservation"
);

export default function Page() {
  return <ReservationView locale="fr" />;
}
