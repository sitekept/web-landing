import { eCommerce } from "@/content/templates/e-commerce";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { CartPageView } from "@/templates/e-commerce/cart";

export const metadata = buildTemplatePageMetadata(eCommerce, "en", "panier");

export default function Page() {
  return <CartPageView locale="en" />;
}
