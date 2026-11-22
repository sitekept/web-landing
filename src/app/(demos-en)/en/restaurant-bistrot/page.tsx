import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/restaurant-bistrot/home";

export const metadata = buildTemplatePageMetadata(
  restaurantBistrot,
  "en",
  "home"
);

export default function Page() {
  return <HomeView locale="en" />;
}
