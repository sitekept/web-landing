import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Palette } from "lucide-react";
import Link from "next/link";

export function PortfolioPreview() {
  return (
    <section id="our-work" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Découvrez Notre Travail
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explorez nos réalisations récentes et nos templates prêts à
            l&apos;emploi
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
                  Nos Réalisations
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Découvrez nos projets récents : sites web, applications et
                  solutions sur mesure qui ont transformé la présence digitale
                  de nos clients.
                </p>
                <div className="flex items-center justify-between">
                  <Button asChild className="flex items-center gap-2">
                    <Link href="/realization">
                      Voir nos réalisations
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
                  Templates Prêts
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Vous ne savez pas par où commencer ? Explorez nos templates
                  professionnels conçus pour différents secteurs
                  d&apos;activité.
                </p>
                <div className="flex items-center justify-between">
                  <Button
                    asChild
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Link href="/template">
                      Parcourir les templates
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
          <p className="mb-6 text-gray-600">
            Prêt à concrétiser votre projet ? Parlons-en !
          </p>
          <Button asChild size="lg" className="px-8 text-lg">
            <Link href="/#contact">
              Commencer maintenant
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
