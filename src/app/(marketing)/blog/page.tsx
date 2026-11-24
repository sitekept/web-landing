import { BlogIndexView, blogIndexMetadata } from "@/views/blog-index";

export const metadata = blogIndexMetadata("fr");

export default function Page() {
  return <BlogIndexView locale="fr" />;
}
