import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { MenuView } from "@/templates/restaurant-bistrot/menu";

export const metadata = buildTemplatePageMetadata(
  restaurantBistrot,
  "fr",
  "menu"
);

export default function Page() {
  return <MenuView locale="fr" />;
}
