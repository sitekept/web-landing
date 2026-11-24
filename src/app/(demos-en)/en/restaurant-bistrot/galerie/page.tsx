import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { GalerieView } from "@/templates/restaurant-bistrot/galerie";

export const metadata = buildTemplatePageMetadata(
  restaurantBistrot,
  "en",
  "galerie"
);

export default function Page() {
  return <GalerieView locale="en" />;
}
