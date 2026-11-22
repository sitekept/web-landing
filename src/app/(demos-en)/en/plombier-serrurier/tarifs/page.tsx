import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { TarifsView } from "@/templates/plombier-serrurier/tarifs";

export const metadata = buildTemplatePageMetadata(
  plombierSerrurier,
  "en",
  "tarifs"
);

export default function Page() {
  return <TarifsView locale="en" />;
}
