import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Palette } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function PortfolioPreview() {
  const t = await getTranslations("portfolio");

  return (
    <section id="our-work" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Réalisations Card */}
          <Card className="transform overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {t("realizations.title")}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {t("realizations.description")}
                </p>
                <div className="flex items-center justify-between">
                  <Button asChild className="flex items-center gap-2">
                    <Link href="/realization">
                      {t("realizations.cta")}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Templates Card */}
          <Card className="transform overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-teal-600">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {t("templates.title")}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {t("templates.description")}
                </p>
                <div className="flex items-center justify-between">
                  <Button
                    asChild
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Link href="/template">
                      {t("templates.cta")}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">{t("finalCta")}</p>
          <Button asChild size="lg" className="px-8 text-lg">
            <Link href="/#contact">
              {t("startNow")}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
