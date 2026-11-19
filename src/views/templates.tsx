import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TemplatesShowcase } from "@/components/templates-showcase";
import {
  getLocalizedText,
  templatesPageCopy,
  type SiteLocale,
} from "@/content/site-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { linkLocalizer } from "@/lib/localized-routes";
import { getMetierPage, metierPages } from "@/content/metier-pages";

export function templatesMetadata(locale: SiteLocale): Metadata {
  return buildPageMetadata({
    title:
      locale === "fr"
        ? "Modèles de sites internet par métier | Sitekept"
        : "Website templates by trade | Sitekept",
    description:
      locale === "fr"
        ? "13 modèles de sites prêts à personnaliser : boulangerie, dentiste, plombier, restaurant, avocat, immobilier. Adaptés à votre activité en 48h."
        : "13 website templates ready to customize: bakery, dentist, plumber, restaurant, lawyer, real estate. Adapted to your business in 48 hours.",
    path: "/templates",
    locale,
  });
}

export function TemplatesView({ locale }: { locale: SiteLocale }) {
  const href = linkLocalizer(locale);

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
              <Link href={href("/#contact")}>
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
              <Link href={href("/blog/site-web-rapide-pme-independant")}>
                {locale === "fr" ? "Lire la méthode" : "Read about our method"}
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
            : "Each template is built around the real needs of a trade: booking process, service descriptions, service area or contact. We tailor it to your business and launch it in 48 hours."
        }
        ctaText={locale === "fr" ? "Demander un devis" : "Request a quote"}
      />

      {/* Liens entrants vers les pages métier. Sans eux, elles seraient
          orphelines : présentes au sitemap mais sans aucun lien du site. */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {locale === "fr"
              ? "Ce qu'il faut savoir avant de créer le site de votre métier"
              : "What to know before building a website for your trade"}
          </h2>
          <p className="mt-4 text-slate-600">
            {locale === "fr"
              ? "Chaque activité a ses attentes propres. Ces guides détaillent ce que cherchent vos clients, ce que le site doit afficher et ce qu'il faut préparer avant de démarrer."
              : "Every business has its own expectations. These guides explain what your customers are looking for, what the website needs to show and what to prepare before you start."}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {metierPages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={href(`/${page.slug}`)}
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-5 py-4 transition-colors hover:border-blue-200 hover:bg-blue-50"
                >
                  <span className="font-medium text-slate-900">
                    {getMetierPage(page.slug, locale).h1}
                  </span>
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
