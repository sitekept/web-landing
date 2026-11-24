import { avocate } from "@/content/templates/avocate";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { BlogView } from "@/templates/avocate/blog";

export const metadata = buildTemplatePageMetadata(avocate, "fr", "blog");

export default function Page() {
  return <BlogView locale="fr" />;
}
