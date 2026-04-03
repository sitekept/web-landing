import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  blogPageCopy,
  blogPosts,
  getLocalizedText,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getSiteLocale } from "@/lib/site-messages";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

  return buildPageMetadata({
    title:
      locale === "fr"
        ? "Blog Sitekept | Rapidite, propriete du site, SEO et GEO"
        : "Sitekept Blog | Speed, ownership, SEO and GEO",
    description:
      locale === "fr"
        ? "Le hub editorial Sitekept regroupe des pages utiles pour comprendre notre offre: rapidite de lancement, propriete complete du site et visibilite SEO + GEO."
        : "The Sitekept editorial hub explains the offer through useful pages on fast launch, full website ownership and SEO + GEO visibility.",
    path: "/blog",
  });
}

export default async function BlogPage() {
  const locale = await getSiteLocale();

  return (
    <>
      <section className="border-b border-slate-200 bg-white px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            {getLocalizedText(blogPageCopy.eyebrow, locale)}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {getLocalizedText(blogPageCopy.title, locale)}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {getLocalizedText(blogPageCopy.description, locale)}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-md border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                {getLocalizedText(post.category, locale)}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {getLocalizedText(post.title, locale)}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {getLocalizedText(post.excerpt, locale)}
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              >
                <Link href={`/blog/${post.slug}`}>
                  {locale === "fr" ? "Lire la page" : "Read the page"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
