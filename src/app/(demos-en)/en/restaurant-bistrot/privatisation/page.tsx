import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { PrivatisationView } from "@/templates/restaurant-bistrot/privatisation";

export const metadata = buildTemplatePageMetadata(
  restaurantBistrot,
  "en",
  "privatisation"
);

export default function Page() {
  return <PrivatisationView locale="en" />;
}
