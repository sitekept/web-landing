import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HistoireView } from "@/templates/restaurant-bistrot/histoire";

export const metadata = buildTemplatePageMetadata(
  restaurantBistrot,
  "en",
  "histoire"
);

export default function Page() {
  return <HistoireView locale="en" />;
}
