import { coffeeShop } from "@/content/templates/coffee-shop";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { InfosView } from "@/templates/coffee-shop/infos";

export const metadata = buildTemplatePageMetadata(coffeeShop, "en", "infos");

export default function Page() {
  return <InfosView locale="en" />;
}
