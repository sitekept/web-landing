import {
  BlogPostView,
  blogPostMetadata,
  getBlogStaticParams,
} from "@/views/blog-post";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogStaticParams("fr");
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return blogPostMetadata("fr", slug);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostView locale="fr" slug={slug} />;
}
