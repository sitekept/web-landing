import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TemplatesShowcase } from "@/components/templates-showcase";
import {
  getLocalizedText,
  templatesPageCopy,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getSiteLocale } from "@/lib/site-messages";
import { metierPages } from "@/content/metier-pages";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

  return buildPageMetadata({
    title:
      locale === "fr"
        ? "Modèles de sites internet par métier | Sitekept"
        : "Sitekept Templates | Fast website bases to customize",
    description:
      locale === "fr"
        ? "13 modèles de sites prêts à personnaliser : boulangerie, dentiste, plombier, restaurant, avocat, immobilier. Adaptés à votre activité en 48h."
        : "Explore Sitekept public templates for bakeries, florists, dentists, plumbers, hair salons, cleaning services, restaurants, architects, law firms, real estate and more, with customization and launch included.",
    path: "/templates",
  });
}

export default async function TemplatesPage() {
  const locale = await getSiteLocale();

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            {getLocalizedText(templatesPageCopy.eyebrow, locale)}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {getLocalizedText(templatesPageCopy.title, locale)}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {getLocalizedText(templatesPageCopy.description, locale)}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/#contact">
                {locale === "fr" ? "Demander un devis" : "Request a quote"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
            >
              <Link href="/blog/site-web-rapide-pme-independant">
                {locale === "fr" ? "Lire la méthode" : "Read the approach"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Le titre porte le <h2> de section : sans lui, la page enchaînait
          directement du <h1> aux <h3> des cartes, sans niveau intermédiaire. */}
      <TemplatesShowcase
        locale={locale}
        title={
          locale === "fr"
            ? "Nos modèles de sites internet par métier"
            : "Our website templates by trade"
        }
        description={
          locale === "fr"
            ? "Chaque modèle est adapté aux besoins réels d’un métier : parcours de réservation, présentation des prestations, zone d’intervention ou prise de contact. Nous le personnalisons à votre activité et le mettons en ligne en 48h."
            : "Each template matches the real needs of a trade: booking flow, service presentation, coverage area or contact capture. We tailor it to your business and put it online in 48 hours."
        }
        ctaText={locale === "fr" ? "Demander un devis" : "Request a quote"}
      />

      {/* Liens entrants vers les pages métier. Sans eux, elles seraient
          orphelines : présentes au sitemap mais sans aucun lien du site. */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Ce qu&apos;il faut savoir avant de créer le site de votre métier
          </h2>
          <p className="mt-4 text-slate-600">
            Chaque activité a ses attentes propres. Ces guides détaillent ce que
            cherchent vos clients, ce que le site doit afficher et ce
            qu&apos;il faut préparer avant de démarrer.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {metierPages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-5 py-4 transition-colors hover:border-blue-200 hover:bg-blue-50"
                >
                  <span className="font-medium text-slate-900">{page.h1}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
