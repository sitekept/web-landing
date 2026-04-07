import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getBlogPostBySlug,
  getLocalizedText,
  getLocalizedValue,
  seoGeoPageContent,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getSiteLocale } from "@/lib/site-messages";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

  return buildPageMetadata({
    title:
      locale === "fr"
        ? "SEO + GEO | Comprendre la visibilité naturelle d’un site"
        : "SEO + GEO | Understanding a website's organic visibility",
    description:
      locale === "fr"
        ? "Comprenez pourquoi le référencement naturel compte, ce qu’un site doit avoir pour être vraiment optimisé, et comment approfondir ces sujets sur le blog Sitekept."
        : "Understand why organic search matters, what a website needs to be truly optimized, and how to go deeper on the Sitekept blog.",
    path: "/seo-geo",
  });
}

export default async function SeoGeoPage() {
  const locale = await getSiteLocale();
  const seoArticle = getBlogPostBySlug(
    "pourquoi-optimisation-referencement-naturel-importante"
  );
  const visibilityArticle = getBlogPostBySlug("site-optimise-seo-geo");

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-14 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            {getLocalizedText(seoGeoPageContent.eyebrow, locale)}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {getLocalizedText(seoGeoPageContent.title, locale)}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {getLocalizedText(seoGeoPageContent.intro, locale)}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <section className="rounded-md border border-blue-100 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              {getLocalizedText(seoGeoPageContent.importanceTitle, locale)}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              {getLocalizedValue(seoGeoPageContent.importanceParagraphs, locale).map(
                (paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}
            </div>
            {seoArticle ? (
              <Button
                asChild
                variant="outline"
                className="mt-6 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
              >
                <Link href={`/blog/${seoArticle.slug}`}>
                  {getLocalizedText(seoGeoPageContent.primaryCta, locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </section>

          <section className="rounded-md border border-blue-100 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              {getLocalizedText(seoGeoPageContent.optimizationTitle, locale)}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              {getLocalizedValue(seoGeoPageContent.optimizationParagraphs, locale).map(
                (paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}
            </div>
            {visibilityArticle ? (
              <Button
                asChild
                variant="outline"
                className="mt-6 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
              >
                <Link href={`/blog/${visibilityArticle.slug}`}>
                  {getLocalizedText(seoGeoPageContent.secondaryCta, locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </section>
        </div>
      </section>
    </>
  );
}
