import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  blogPosts,
  getBlogPostBySlug,
  getLocalizedText,
  getLocalizedValue,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getSiteLocale } from "@/lib/site-messages";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const locale = await getSiteLocale();
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildPageMetadata({
    title: getLocalizedText(post.seoTitle, locale),
    description: getLocalizedText(post.seoDescription, locale),
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const locale = await getSiteLocale();
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-slate-200 bg-white px-6 pb-14 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            {getLocalizedText(post.category, locale)}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {getLocalizedText(post.title, locale)}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {getLocalizedText(post.intro, locale)}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-10">
            {post.sections.map((section) => {
              const paragraphs = getLocalizedValue(section.paragraphs, locale);
              const bullets = section.bullets
                ? getLocalizedValue(section.bullets, locale)
                : undefined;

              return (
                <section key={section.id} className="rounded-md border border-slate-200 bg-white p-8">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {getLocalizedText(section.title, locale)}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {bullets?.length ? (
                    <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              );
            })}
          </article>

          <aside className="space-y-6">
            <div className="rounded-md border border-slate-800 bg-slate-950 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
                Sitekept
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                {getLocalizedText(post.ctaTitle, locale)}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {getLocalizedText(post.ctaDescription, locale)}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild className="bg-blue-700 text-white hover:bg-blue-800">
                  <Link href="/#contact">
                    {locale === "fr" ? "Demander un devis" : "Request a quote"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-600 bg-transparent text-white hover:bg-white/5"
                >
                  <Link href="/templates">
                    {locale === "fr" ? "Voir les templates" : "Browse templates"}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">
                {locale === "fr" ? "Autres pages utiles" : "Other useful pages"}
              </h3>
              <div className="mt-4 space-y-4">
                {blogPosts
                  .filter((candidate) => candidate.slug !== post.slug)
                  .map((candidate) => (
                    <Link
                      key={candidate.slug}
                      href={`/blog/${candidate.slug}`}
                      className="block rounded-sm bg-slate-50 p-4 transition hover:bg-slate-100"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                        {getLocalizedText(candidate.category, locale)}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-900">
                        {getLocalizedText(candidate.title, locale)}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
