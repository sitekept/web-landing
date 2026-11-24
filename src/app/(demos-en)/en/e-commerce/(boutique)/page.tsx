import { eCommerce } from "@/content/templates/e-commerce";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { HomeView } from "@/templates/e-commerce/home";

export const metadata = buildTemplatePageMetadata(eCommerce, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
