import { coffeeShop } from "@/content/templates/coffee-shop";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { AProposView } from "@/templates/coffee-shop/a-propos";

export const metadata = buildTemplatePageMetadata(coffeeShop, "en", "aPropos");

export default function Page() {
  return <AProposView locale="en" />;
}
