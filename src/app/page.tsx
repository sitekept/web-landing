import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Clock3,
  Globe,
  MessagesSquare,
  Rocket,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TemplatesShowcase } from "@/components/templates-showcase";
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
import { Contact } from "./_components/contact";

const offerIconMap = {
  badgeEuro: BadgeEuro,
  clock3: Clock3,
  shieldCheck: ShieldCheck,
  rocket: Rocket,
  globe: Globe,
  wrench: Wrench,
} as const;

const whyIconMap = {
  sparkles: Sparkles,
  shield: Shield,
  search: Search,
  messagesSquare: MessagesSquare,
} as const;

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
  const seoArticle = blogPosts.find((post) => post.slug === "site-optimise-seo-geo");

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_28%),linear-gradient(135deg,#0f172a_0%,#111827_48%,#1f2937_100%)] px-6 pb-20 pt-28 text-white sm:pb-24 sm:pt-36 lg:px-8"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
              <span className="mr-2 h-2 w-2 rounded-full bg-amber-400" />
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
                className="bg-amber-400 px-8 text-base font-semibold text-slate-950 hover:bg-amber-300"
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
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {proofPoint}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              {locale === "fr" ? "Offre de départ" : "Starter offer"}
            </p>
            <div className="mt-5 rounded-3xl bg-slate-950/60 p-6">
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

      <section className="border-y border-stone-200 bg-stone-50 px-6 py-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
          {getLocalizedValue(homeContent.trustStrip, locale).map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-stone-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
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
              const Icon = offerIconMap[highlight.icon];
              const copy = getLocalizedValue(highlight.copy, locale);

              return (
                <article
                  key={highlight.id}
                  className="rounded-[28px] border border-stone-200 bg-stone-50 p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <Icon className="h-6 w-6" />
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
        </div>
      </section>

      <section className="bg-stone-100 px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
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
              const Icon = whyIconMap[item.icon];
              const copy = getLocalizedValue(item.copy, locale);

              return (
                <article
                  key={item.id}
                  className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-stone-200"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">
                        {copy.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {copy.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="seo-geo" className="bg-slate-950 px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              {getLocalizedText(homeContent.visibilitySection.eyebrow, locale)}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {getLocalizedText(homeContent.visibilitySection.title, locale)}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {getLocalizedText(homeContent.visibilitySection.description, locale)}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {getLocalizedValue(homeContent.visibilitySection.bullets, locale).map(
                (bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                  >
                    {bullet}
                  </div>
                )
              )}
            </div>

            {seoArticle ? (
              <Button
                asChild
                variant="outline"
                className="mt-8 border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href={`/blog/${seoArticle.slug}`}>
                  {getLocalizedText(homeContent.visibilitySection.linkLabel, locale)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>

          <div className="space-y-4">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                  {getLocalizedText(post.category, locale)}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {getLocalizedText(post.title, locale)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {getLocalizedText(post.excerpt, locale)}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-medium text-white hover:text-amber-300"
                >
                  {locale === "fr" ? "Lire la page" : "Read the page"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
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
                  className="rounded-[28px] border border-stone-200 bg-stone-50 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
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
        </div>
      </section>

      <TemplatesShowcase
        locale={locale}
        sectionId="selected-templates"
        eyebrow={getLocalizedText(homeContent.templatesSection.eyebrow, locale)}
        title={getLocalizedText(homeContent.templatesSection.title, locale)}
        description={getLocalizedText(homeContent.templatesSection.description, locale)}
        ctaText={locale === "fr" ? "Demander un devis" : "Request a quote"}
        showViewAll
        viewAllLabel={getLocalizedText(homeContent.templatesSection.cta, locale)}
      />

      <section id="faq" className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
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
                className="rounded-[28px] border border-stone-200 bg-stone-50 p-6 shadow-sm"
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
