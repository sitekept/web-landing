import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  findMetierPageBySlug,
  getMetierSlug,
  metierPages,
} from "@/content/metier-pages";
import type { SiteLocale } from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { linkLocalizer } from "@/lib/localized-routes";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/structured-data";

type LinkFn = (frenchPath: string) => string;

const linkClassName = "font-medium text-blue-700 underline underline-offset-4";
const NBSP = " ";

const COPY = {
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbTemplates: "Modèles de sites",
    eyebrow: "Site internet par métier",
    quote: "Demander un devis",
    seeDemo: "Voir la démo",
    intentTitle: "Ce que cherchent vos clients, et dans quel état d'esprit",
    intentIntro: (label: string) =>
      `Toutes les visites ne se valent pas. Un site efficace pour ${label} répond aux trois situations qui amènent réellement quelqu'un à vous chercher.`,
    mustDoTitle: "Ce que votre site doit faire",
    prepareTitle: "Ce qu'il faut préparer pour tenir les 48h",
    prepareIntro:
      "Le délai court à partir de la réception de l'acompte et de vos contenus. C'est presque toujours la préparation des éléments ci-dessous, et non le développement, qui détermine la date de mise en ligne.",
    prepareNote: (href: LinkFn): ReactNode => (
      <>
        La rédaction complète des textes et les photographies ne sont pas
        comprises dans le tarif de base&nbsp;; le détail de ce qui est inclus
        figure sur la{" "}
        <Link href={href("/tarifs")} className={linkClassName}>
          page tarifs
        </Link>
        .
      </>
    ),
    templateTitle: (label: string) => `Un modèle déjà pensé pour ${label}`,
    templateIntro:
      `Plutôt que de repartir d'une page blanche, nous adaptons une base construite autour des besoins réels du métier. C'est ce qui rend le tarif et le délai possibles. Vous pouvez la parcourir avant de décider${NBSP}: c'est une démonstration publique, avec des coordonnées fictives.`,
    seeAlso: (href: LinkFn): ReactNode => (
      <>
        Voir aussi{" "}
        <Link href={href("/templates")} className={linkClassName}>
          tous les modèles par métier
        </Link>{" "}
        et{" "}
        <Link href={href("/realization")} className={linkClassName}>
          nos réalisations
        </Link>
        .
      </>
    ),
    priceTitle: (label: string) =>
      `Combien coûte un site pour ${label}${NBSP}?`,
    priceParagraphs: [
      `Le site vitrine essentiel est à 500${NBSP}€ en tarif de lancement, au lieu de 600${NBSP}€. C'est un paiement unique${NBSP}: il n'y a pas d'abonnement à régler pour que le site reste en ligne, et le nom de domaine est offert la première année.`,
      "Ce tarif couvre la conception, le développement, la mise en ligne et une structure optimisée pour le référencement. Il ne couvre pas la rédaction complète de vos textes, les photographies, ni les fonctionnalités sur mesure — boutique, réservation propre, espace client — qui font l'objet d'un devis séparé.",
    ],
    priceLink: (href: LinkFn): ReactNode => (
      <>
        Le détail de ce qui est inclus, les modalités de paiement et la
        comparaison entre paiement unique et abonnement figurent sur la{" "}
        <Link href={href("/tarifs")} className={linkClassName}>
          page tarifs
        </Link>
        .
      </>
    ),
    faqTitle: "Questions fréquentes",
    ctaTitle: "Un devis clair, sous 24h",
    ctaDescription: `Décrivez votre activité et ce que vous attendez du site. Nous revenons vers vous avec un cadre précis${NBSP}: ce qui est inclus, le délai, et le prix.`,
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbTemplates: "Website templates",
    eyebrow: "Websites by trade",
    quote: "Request a quote",
    seeDemo: "View the demo",
    intentTitle: "What your customers are looking for, and the mindset they are in",
    intentIntro: (label: string) =>
      `Not all visits are equal. An effective website for ${label} covers the three situations that actually lead someone to look for you.`,
    mustDoTitle: "What your website needs to do",
    prepareTitle: "What to prepare to meet the 48-hour deadline",
    prepareIntro:
      "The clock starts once we have received the deposit and your content. It is almost always the preparation of the items below, not the development work, that determines the launch date.",
    prepareNote: (href: LinkFn): ReactNode => (
      <>
        Full copywriting and photography are not included in the base price;
        the details of what is included are on our{" "}
        <Link href={href("/tarifs")} className={linkClassName}>
          pricing page
        </Link>
        .
      </>
    ),
    templateTitle: (label: string) =>
      `A template already designed for ${label}`,
    templateIntro:
      "Rather than starting from a blank page, we adapt a template built around the real needs of the trade. That is what makes the price and the turnaround possible. You can browse it before deciding: it is a public demo, with fictitious contact details.",
    seeAlso: (href: LinkFn): ReactNode => (
      <>
        See also{" "}
        <Link href={href("/templates")} className={linkClassName}>
          all our templates by trade
        </Link>{" "}
        and{" "}
        <Link href={href("/realization")} className={linkClassName}>
          our work
        </Link>
        .
      </>
    ),
    priceTitle: (label: string) =>
      `How much does a website for ${label} cost?`,
    priceParagraphs: [
      "The essential business website costs €500 at our launch price, instead of €600. It is a one-time payment: there is no subscription to pay to keep the website online, and the domain name is free for the first year.",
      "This price covers design, development, launch and an SEO-friendly structure. It does not cover full copywriting, photography or custom features — an online store, your own booking system, a client portal — which are quoted separately.",
    ],
    priceLink: (href: LinkFn): ReactNode => (
      <>
        The details of what is included, the payment terms and a comparison
        between a one-time payment and a subscription are on our{" "}
        <Link href={href("/tarifs")} className={linkClassName}>
          pricing page
        </Link>
        .
      </>
    ),
    faqTitle: "Frequently asked questions",
    ctaTitle: "A clear quote within 24 hours",
    ctaDescription:
      "Tell us about your business and what you expect from your website. We will get back to you with a precise outline: what is included, the timeline and the price.",
  },
};

/** Slugs à prérendre pour une langue : chaque page a un slug par langue. */
export function getMetierStaticParams(locale: SiteLocale) {
  return metierPages.map((page) => ({
    metier: getMetierSlug(page.slug, locale),
  }));
}

export function metierMetadata(locale: SiteLocale, urlSlug: string): Metadata {
  const page = findMetierPageBySlug(urlSlug, locale);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/${page.slug}`,
    locale,
  });
}

export function MetierView({
  locale,
  slug,
}: {
  locale: SiteLocale;
  slug: string;
}) {
  const page = findMetierPageBySlug(slug, locale);

  if (!page) {
    notFound();
  }

  const copy = COPY[locale];
  const href = linkLocalizer(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: copy.breadcrumbHome, path: href("/") },
          { name: copy.breadcrumbTemplates, path: href("/templates") },
          { name: page.h1, path: href(`/${page.slug}`) },
        ]}
      />
      <FaqJsonLd items={page.faq} />

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{page.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href={href("/#contact")}>
                {copy.quote}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={href(`/${page.demoSlug}`)}>
                {copy.seeDemo}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.intentTitle}
          </h2>
          <p className="mt-4 text-slate-600">{copy.intentIntro(page.label)}</p>
          <ul className="mt-8 space-y-5">
            {page.searchIntent.map((item) => (
              <li
                key={item}
                className="border-l-2 border-blue-100 pl-5 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.mustDoTitle}
          </h2>
          <dl className="mt-10 space-y-8">
            {page.siteMustDo.map((item) => (
              <div key={item.title}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.title}
                </dt>
                <dd className="mt-2 text-slate-600">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.prepareTitle}
          </h2>
          <p className="mt-4 text-slate-600">{copy.prepareIntro}</p>
          <ul className="mt-8 space-y-3">
            {page.toPrepare.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-blue-600"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-slate-600">{copy.prepareNote(href)}</p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.templateTitle(page.label)}
          </h2>
          <p className="mt-4 text-slate-600">
            {copy.templateIntro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href={href(`/${page.demoSlug}`)}>
                {page.demoName}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {page.secondaryDemo ? (
              <Button asChild variant="outline">
                <Link href={href(`/${page.secondaryDemo.slug}`)}>
                  {page.secondaryDemo.name}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            ) : null}
          </div>
          {page.secondaryDemo ? (
            <p className="mt-4 text-sm text-slate-600">
              {page.secondaryDemo.note}
            </p>
          ) : null}
          <p className="mt-6 text-sm text-slate-500">{copy.seeAlso(href)}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.priceTitle(page.label)}
          </h2>
          {copy.priceParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-600">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-slate-600">{copy.priceLink(href)}</p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.faqTitle}
          </h2>
          <dl className="mt-10 space-y-8">
            {page.faq.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.question}
                </dt>
                <dd className="mt-2 text-slate-600">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            {copy.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-300">{copy.ctaDescription}</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href={href("/#contact")}>
                {copy.quote}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
