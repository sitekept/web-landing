import { coffeeShop } from "@/content/templates/coffee-shop";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CarteView } from "@/templates/coffee-shop/carte";

export const metadata = buildTemplatePageMetadata(coffeeShop, "fr", "carte");

export default function Page() {
  return <CarteView locale="fr" />;
}
