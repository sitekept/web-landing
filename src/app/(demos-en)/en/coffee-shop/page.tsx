import { coffeeShop } from "@/content/templates/coffee-shop";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/coffee-shop/home";

export const metadata = buildTemplatePageMetadata(coffeeShop, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
