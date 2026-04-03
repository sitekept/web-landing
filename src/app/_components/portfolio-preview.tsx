import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type SiteLocale } from "@/content/site-content";
import { getMessage } from "@/lib/site-messages";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PortfolioPreviewProps {
  locale: SiteLocale;
  sectionId?: string;
}

export function PortfolioPreview({
  locale,
  sectionId = "selected-templates",
}: PortfolioPreviewProps) {
  const cards = [
    {
      id: "templates",
      eyebrow: locale === "fr" ? "Templates" : "Templates",
      title: getMessage(locale, "portfolio.templates.title"),
      description: getMessage(locale, "portfolio.templates.description"),
      cta: getMessage(locale, "portfolio.templates.cta"),
      href: "/templates",
      screenshot: "/template/ordinateur.png",
    },
    {
      id: "realizations",
      eyebrow: locale === "fr" ? "Realisations" : "Our work",
      title: getMessage(locale, "portfolio.realizations.title"),
      description: getMessage(locale, "portfolio.realizations.description"),
      cta: getMessage(locale, "portfolio.realizations.cta"),
      href: "/realization",
      screenshot: "/realization/iaformaplus.png",
    },
  ] as const;

  return (
    <section id={sectionId} className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            {locale === "fr" ? "Templates et realisations" : "Templates and work"}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {getMessage(locale, "portfolio.title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {getMessage(locale, "portfolio.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              className="overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={card.screenshot}
                    alt={card.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                  <div className="absolute left-6 top-6">
                    <span className="rounded-sm border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                      {card.eyebrow}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="h-0.5 w-12 bg-blue-600" />
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                  <div className="mt-6">
                    <Button
                      asChild
                      variant={index === 0 ? "default" : "outline"}
                      className={
                        index === 0
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
                      }
                    >
                      <Link href={card.href}>
                        {card.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
