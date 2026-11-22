import { avocate } from "@/content/templates/avocate";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { BlogView } from "@/templates/avocate/blog";

export const metadata = buildTemplatePageMetadata(avocate, "en", "blog");

export default function Page() {
  return <BlogView locale="en" />;
}
