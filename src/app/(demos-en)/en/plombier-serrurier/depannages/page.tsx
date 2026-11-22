import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { DepannagesView } from "@/templates/plombier-serrurier/depannages";

export const metadata = buildTemplatePageMetadata(
  plombierSerrurier,
  "en",
  "depannages"
);

export default function Page() {
  return <DepannagesView locale="en" />;
}
