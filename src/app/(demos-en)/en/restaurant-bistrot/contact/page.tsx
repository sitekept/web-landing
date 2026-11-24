import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ContactView } from "@/templates/restaurant-bistrot/contact";

export const metadata = buildTemplatePageMetadata(
  restaurantBistrot,
  "en",
  "contact"
);

export default function Page() {
  return <ContactView locale="en" />;
}
