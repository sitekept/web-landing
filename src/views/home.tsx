import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  blogPosts,
  faqItems,
  getLocalizedText,
  getLocalizedValue,
  homeContent,
  offerHighlights,
  processSteps,
  whySitekeptItems,
  type SiteLocale,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { linkLocalizer } from "@/lib/localized-routes";
import { Contact } from "@/app/_components/contact";
import { PortfolioPreview } from "@/app/_components/portfolio-preview";
import { HeroGallery } from "@/app/_components/hero-gallery";

export function homeMetadata(locale: SiteLocale): Metadata {
  return buildPageMetadata({
    title:
      locale === "fr"
        ? "Création de site internet dès 500\u00a0€ | Sitekept"
        : "Website design from €500 | Sitekept",
    description:
      locale === "fr"
        ? "Agence web spécialisée PME et artisans : votre site professionnel livré en 48h, sans abonnement, 100 % à vous. Devis gratuit en 24h."
        : "Web agency for small businesses and tradespeople: your professional website delivered in 48 hours, with no subscription and 100% yours. Free quote within 24 hours.",
    path: "/",
    locale,
  });
}

export function HomeView({ locale }: { locale: SiteLocale }) {
  const href = linkLocalizer(locale);
  const hero = homeContent.hero;
  const heroTitle = getLocalizedValue(hero.title, locale);
  const deliveryArticle = blogPosts.find(
    (post) => post.slug === "comment-se-passe-la-livraison-d-un-site-web-chez-sitekept"
  );

  return (
    <>
      <section
        id="hero"
        className="bg-white px-6 pb-16 pt-28 text-slate-950 sm:pb-20 sm:pt-32 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-sm bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
              {getLocalizedText(hero.eyebrow, locale)}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              {heroTitle.before}
              <span className="text-blue-600">{heroTitle.highlight}</span>
              {heroTitle.after}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {getLocalizedText(hero.description, locale)}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-700"
              >
                <Link href={href("/#contact")}>
                  {getLocalizedText(hero.primaryCta, locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-300 bg-white px-8 text-base text-slate-950 hover:bg-slate-50"
              >
                <Link href={href("/templates")}>
                  {getLocalizedText(hero.secondaryCta, locale)}
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {getLocalizedValue(hero.proofPoints, locale).map((proofPoint) => (
                <span
                  key={proofPoint}
                  className="rounded-sm border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {proofPoint}
                </span>
              ))}
            </div>
          </div>

          <HeroGallery locale={locale} />
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              {getLocalizedText(homeContent.offerSection.eyebrow, locale)}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {getLocalizedText(homeContent.offerSection.title, locale)}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {getLocalizedText(homeContent.offerSection.description, locale)}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offerHighlights.map((highlight) => {
              const copy = getLocalizedValue(highlight.copy, locale);

              return (
                <article
                  key={highlight.id}
                  className="rounded-md border border-blue-100 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="h-0.5 w-12 bg-blue-600" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {copy.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {copy.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              {getLocalizedText(homeContent.whySection.eyebrow, locale)}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {getLocalizedText(homeContent.whySection.title, locale)}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {getLocalizedText(homeContent.whySection.description, locale)}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {whySitekeptItems.map((item) => {
              const copy = getLocalizedValue(item.copy, locale);

              return (
                <article
                  key={item.id}
                  className="rounded-md bg-white p-8 shadow-sm ring-1 ring-blue-100"
                >
                  <div className="h-0.5 w-12 bg-blue-600" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {copy.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {copy.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="seo-geo"
        className="bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_70%,#1d4ed8_100%)] px-6 py-20 text-white sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            {getLocalizedText(homeContent.visibilitySection.eyebrow, locale)}
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {getLocalizedText(homeContent.visibilitySection.title, locale)}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            {getLocalizedText(homeContent.visibilitySection.description, locale)}
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            {getLocalizedText(homeContent.visibilitySection.explanation, locale)}
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-8 border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            <Link href={href("/blog")}>
              {getLocalizedText(homeContent.visibilitySection.linkLabel, locale)}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              {getLocalizedText(homeContent.processSection.eyebrow, locale)}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {getLocalizedText(homeContent.processSection.title, locale)}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {getLocalizedText(homeContent.processSection.description, locale)}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const copy = getLocalizedValue(step.copy, locale);

              return (
                <article
                  key={step.id}
                  className="rounded-md border border-blue-100 bg-slate-50 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {copy.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {copy.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-md border border-blue-100 bg-slate-50 p-6 sm:p-8">
            <p className="text-base leading-8 text-slate-700">
              {getLocalizedText(homeContent.processSection.ownershipParagraph, locale)}
            </p>
            {deliveryArticle ? (
              <Button
                asChild
                variant="outline"
                className="mt-6 border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
              >
                <Link href={href(`/blog/${deliveryArticle.slug}`)}>
                  {getLocalizedText(homeContent.processSection.linkLabel, locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <PortfolioPreview locale={locale} />

      <section id="faq" className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              {getLocalizedText(homeContent.faqSection.eyebrow, locale)}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {getLocalizedText(homeContent.faqSection.title, locale)}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {getLocalizedText(homeContent.faqSection.description, locale)}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.id}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {getLocalizedText(item.question, locale)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {getLocalizedText(item.answer, locale)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact locale={locale} />
    </>
  );
}
