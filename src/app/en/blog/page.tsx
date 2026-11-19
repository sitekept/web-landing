import { BlogIndexView, blogIndexMetadata } from "@/views/blog-index";

export const metadata = blogIndexMetadata("en");

export default function Page() {
  return <BlogIndexView locale="en" />;
}
