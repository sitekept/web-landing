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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSiteLocale();

  return buildPageMetadata({
    title:
      locale === "fr"
        ? "Templates Sitekept | Bases de sites rapides a personnaliser"
        : "Sitekept Templates | Fast website bases to customize",
    description:
      locale === "fr"
        ? "Decouvrez les templates publiques Sitekept: des bases rapides a adapter pour boulangerie, fleuriste, reparation informatique ou patisserie, avec mise en ligne et personnalisation incluses."
        : "Explore Sitekept public templates: fast bases to adapt for bakeries, florists, computer repair services or pastry brands, with launch and customization included.",
    path: "/templates",
  });
}

export default async function TemplatesPage() {
  const locale = await getSiteLocale();

  return (
    <>
      <section className="border-b border-slate-200 bg-white px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
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
            <Button asChild size="lg" className="bg-blue-700 text-white hover:bg-blue-800">
              <Link href="/#contact">
                {locale === "fr" ? "Demander un devis" : "Request a quote"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
            >
              <Link href="/blog/site-web-rapide-pme-independant">
                {locale === "fr" ? "Lire la methode" : "Read the approach"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TemplatesShowcase
        locale={locale}
        ctaText={locale === "fr" ? "Demander un devis" : "Request a quote"}
      />
    </>
  );
}
