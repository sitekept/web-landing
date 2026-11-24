import { eCommerce } from "@/content/templates/e-commerce";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { ShopView } from "@/templates/e-commerce/shop";

export const metadata = buildTemplatePageMetadata(eCommerce, "en", "boutique");

export default function Page() {
  return <ShopView locale="en" />;
}
