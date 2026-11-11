import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { metierPages, getMetierPageBySlug } from "@/content/metier-pages";
import { PRICING, formatPriceWithTax } from "@/content/pricing";
import { buildPageMetadata } from "@/lib/page-metadata";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/structured-data";

/** Prix : tout vient de la constante unique (src/content/pricing.ts). */
const SITE_PRICE = formatPriceWithTax(PRICING.site.amount);
const FOLLOW_UP_MONTHLY = formatPriceWithTax(PRICING.followUp.monthly, {
  period: "month",
});
const FOLLOW_UP_ANNUAL = formatPriceWithTax(PRICING.followUp.annual, {
  period: "year",
});

interface MetierPageProps {
  params: Promise<{ metier: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return metierPages.map((page) => ({ metier: page.slug }));
}

export async function generateMetadata({
  params,
}: MetierPageProps): Promise<Metadata> {
  const { metier } = await params;
  const page = getMetierPageBySlug(metier);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/${page.slug}`,
  });
}

export default async function MetierLandingPage({ params }: MetierPageProps) {
  const { metier } = await params;
  const page = getMetierPageBySlug(metier);

  if (!page) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Templates", path: "/templates" },
          { name: page.h1, path: `/${page.slug}` },
        ]}
      />
      <ServiceJsonLd
        path={`/${page.slug}`}
        name={page.h1}
        description={page.intro}
        serviceType="Création de site internet"
        audienceType={page.audienceType}
      />
      <FaqJsonLd items={page.faq} />

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            Site internet par métier
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{page.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${page.demoSlug}`}>Voir la démo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Ce que cherchent vos clients, et dans quel état d&apos;esprit
          </h2>
          <p className="mt-4 text-slate-600">
            Toutes les visites ne se valent pas. Un site efficace pour{" "}
            {page.label} répond aux trois situations qui amènent réellement
            quelqu&apos;un à vous chercher.
          </p>
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
            Ce que votre site doit faire
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
            À préparer&nbsp;: en ligne 48 h après réception de vos éléments
          </h2>
          <p className="mt-4 text-slate-600">
            Votre site est en ligne 48 h après réception de vos éléments
            complets. Sans textes sous la main, un questionnaire de 10 minutes
            suffit&nbsp;: nous rédigeons pour vous. C&apos;est presque toujours
            la préparation des éléments ci-dessous qui fixe la date.
          </p>
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
          <p className="mt-8 text-slate-600">
            La rédaction de vos textes est incluse, dans la limite des pages
            prévues au devis et de deux séries de retours. Les séances photo ne
            sont pas comprises&nbsp;; le détail figure sur la{" "}
            <Link
              href="/tarifs"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              page tarifs
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Une démo pensée pour {page.label}
          </h2>
          <p className="mt-4 text-slate-600">
            Pour vous projeter, parcourez notre démonstration publique&nbsp;:
            ses coordonnées sont fictives. Votre site est créé sur mesure pour
            vous. Cette démo n&apos;est qu&apos;un exemple, pas le résultat
            final.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href={`/${page.demoSlug}`}>
                {page.demoName}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {page.secondaryDemo ? (
              <Button asChild variant="outline">
                <Link href={`/${page.secondaryDemo.slug}`}>
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
          {page.relatedMetier ? (
            <p className="mt-4 text-sm text-slate-600">
              {page.relatedMetier.intro} Voir le{" "}
              <Link
                href={`/${page.relatedMetier.slug}`}
                className="font-medium text-blue-700 underline underline-offset-4"
              >
                {page.relatedMetier.label}
              </Link>
              .
            </p>
          ) : null}
          <p className="mt-6 text-sm text-slate-500">
            Voir aussi{" "}
            <Link
              href="/templates"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              tous les modèles par métier
            </Link>
            ,{" "}
            <Link
              href="/realization"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              nos réalisations
            </Link>
            {page.linksToSeoGeo ? (
              <>
                ,{" "}
                <Link
                  href="/seo-geo"
                  className="font-medium text-blue-700 underline underline-offset-4"
                >
                  le référencement SEO et GEO
                </Link>
              </>
            ) : null}{" "}
            et{" "}
            <Link
              href="/"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              l&apos;offre de création de site Sitekept
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Combien coûte un site pour {page.label}&nbsp;?
          </h2>
          <p className="mt-4 text-slate-600">
            Votre site coûte {SITE_PRICE}, payé une seule fois. Il est créé sur
            mesure pour vous et reste le vôtre. Le nom de domaine est offert la
            première année, et la rédaction de vos textes est incluse, dans la
            limite des pages prévues au devis.
          </p>
          <p className="mt-4 text-slate-600">
            Ce prix couvre la conception, la mise en ligne, ainsi que la
            rédaction des mentions légales et de la politique de
            confidentialité. Une page de plus, une fonctionnalité avancée
            (boutique, réservation, espace client) ou une refonte se chiffrent
            sur devis.
          </p>
          <p className="mt-4 text-slate-600">
            Un site s&apos;achète une fois&nbsp;: aucun abonnement n&apos;est
            nécessaire pour qu&apos;il reste en ligne. Louer sa présence,
            c&apos;est payer chaque mois pour qu&apos;il existe.
          </p>
          <p className="mt-4 text-slate-600">
            En option, un accompagnement facultatif (modifications et suivi)
            coûte {FOLLOW_UP_MONTHLY} sans engagement, ou {FOLLOW_UP_ANNUAL}. Si
            vous l&apos;arrêtez, votre site reste en ligne et à vous.
          </p>
          <p className="mt-4 text-slate-600">
            Le détail, les modalités de paiement et la comparaison entre acheter
            son site et louer sa présence figurent sur la{" "}
            <Link
              href="/tarifs"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              page tarifs
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Questions fréquentes
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
            Un devis clair, sous 24h
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Décrivez votre activité et ce que vous attendez du site. Nous
            revenons vers vous avec un cadre précis&nbsp;: ce qui est inclus, le
            délai, et le prix.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
