import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import TubesCursor from "@/components/ui/tubes-cursor";
import {
  blogPosts,
  faqItems,
  getLocalizedText,
  getLocalizedValue,
  homeContent,
  offerHighlights,
  processSteps,
  whySitekeptItems,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getSiteLocale } from "@/lib/site-messages";
import { Contact } from "../_components/contact";
import { PortfolioPreview } from "../_components/portfolio-preview";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

  return buildPageMetadata({
    title:
      locale === "fr"
        ? "Sitekept | Site pro en 48h, sans abonnement et 100% à vous"
        : "Sitekept | Professional website in 48h, no subscription, fully yours",
    description:
      locale === "fr"
        ? "Sitekept livre des sites professionnels à partir de 500€, mis en ligne en 48h, sans abonnement imposé, avec déploiement inclus, domaine offert 1 an et optimisation SEO + GEO."
        : "Sitekept delivers professional websites from €500, launched in 48 hours, with no forced subscription, deployment included, a free first-year domain and SEO + GEO optimization.",
    path: "/",
  });
}

export default async function Home() {
  const locale = await getSiteLocale();
  const hero = homeContent.hero;
  const deliveryArticle = blogPosts.find(
    (post) => post.slug === "comment-se-passe-la-livraison-d-un-site-web-chez-sitekept"
  );

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:pb-24 sm:pt-36 lg:px-8"
      >
        <TubesCursor className="z-0 opacity-90" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/45" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-sm border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-300" />
              {getLocalizedText(hero.eyebrow, locale)}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              {getLocalizedText(hero.title, locale)}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {getLocalizedText(hero.description, locale)}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-700"
              >
                <Link href="/#contact">
                  {getLocalizedText(hero.primaryCta, locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10"
              >
                <Link href="/templates">
                  {getLocalizedText(hero.secondaryCta, locale)}
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {getLocalizedValue(hero.proofPoints, locale).map((proofPoint) => (
                <span
                  key={proofPoint}
                  className="rounded-sm border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {proofPoint}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-md border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              {locale === "fr" ? "Offre de départ" : "Starter offer"}
            </p>
            <div className="mt-5 rounded-sm bg-slate-950/60 p-6">
              <p className="text-sm text-slate-300">
                {locale === "fr"
                  ? "Pour PME locales, indépendants et équipes qui veulent aller vite sans s'enfermer."
                  : "For local SMBs, solo founders and teams that want to move fast without lock-in."}
              </p>
              <div className="mt-5 flex items-end gap-3">
                <span className="text-5xl font-semibold text-white">500€</span>
                <span className="pb-1 text-sm text-slate-400">
                  {locale === "fr" ? "à partir de" : "starting from"}
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {getLocalizedValue(homeContent.trustStrip, locale).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {locale === "fr"
                ? "Le cadre est simple: vous choisissez une direction, nous livrons le site, le domaine et la mise en ligne."
                : "The frame stays simple: you choose the direction, we deliver the website, the domain and the launch."}
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-slate-50 px-6 py-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
          {getLocalizedValue(homeContent.trustStrip, locale).map((item) => (
            <span
              key={item}
              className="rounded-sm bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-slate-200"
            >
              {item}
            </span>
          ))}
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
            <Link href="/blog">
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
                <Link href={`/blog/${deliveryArticle.slug}`}>
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

      <Contact />
    </>
  );
}
