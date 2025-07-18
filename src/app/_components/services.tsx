"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const FEATURES = [
  {
    title: "Design sur mesure",
    description: "Interface unique qui reflète votre identité de marque",
  },
  {
    title: "Optimisation SEO avancée",
    description: "Meilleur classement Google pour plus de visibilité",
  },
  {
    title: "Vitesse de chargement éclair",
    description: "Site ultra-rapide qui retient vos visiteurs",
  },
  {
    title: "Taux de conversion optimisé",
    description: "Plus de visiteurs transformés en clients",
  },
  {
    title: "Responsive parfait",
    description: "Affichage parfait sur tous les appareils",
  },
  {
    title: "Fonctionnalités exclusives",
    description: "Outils avancés pour vous démarquer",
  },
  {
    title: "Support prioritaire",
    description: "Assistance rapide quand vous en avez besoin",
  },
  {
    title: "Analyse des performances",
    description: "Suivi détaillé de vos résultats",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-24 sm:py-32 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        {/* Enhanced Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
            <Sparkles className="mr-2 h-4 w-4" />
            Notre Spécialité Premium
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Sites Vitrines{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Haute Performance
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Nous créons des sites vitrines qui transforment vos visiteurs en
            clients. Chaque projet est conçu pour maximiser votre impact digital
            et votre croissance.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Main Offer Card */}
            <Card className="relative flex h-full transform flex-col overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50/30 to-white shadow-2xl ring-1 ring-blue-100 transition-all duration-300 hover:scale-105">
              <CardHeader className="relative pt-6 pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardTitle className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
                  Site Vitrine Essentiel
                </CardTitle>

                <p className="mt-2 text-center text-sm text-slate-600">
                  Parfait pour démarrer votre présence digitale
                </p>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col px-6 pb-6">
                {/* Key Features */}
                <div className="mb-6 flex-1 space-y-3">
                  {FEATURES.slice(0, 4).map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start text-slate-700"
                    >
                      <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="text-sm font-medium">
                          {feature.title}
                        </span>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-6 text-center">
                  <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                    <div className="mb-1 text-sm font-medium opacity-90">
                      Tarif de lancement
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-lg font-medium line-through opacity-70">600€</div>
                      <div className="text-3xl font-bold">450€</div>
                    </div>
                    <div className="mt-1 text-xs opacity-90">
                      Tout inclus • Domaine offert 1 an
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Démarrer Maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Features Card */}
            <Card className="relative flex h-full transform flex-col overflow-hidden border-2 border-purple-300 bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-50 shadow-2xl ring-1 ring-purple-200 transition-all duration-300 hover:scale-105">
              <CardHeader className="relative pt-6 pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-700 to-indigo-600 shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardTitle className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
                  Fonctionnalités Avancées
                </CardTitle>

                <p className="mt-2 text-center text-sm text-slate-600">
                  Pour des besoins spécifiques et complexes
                </p>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col px-6 pb-6">
                {/* Advanced Features List */}
                <div className="mb-6 flex-1 space-y-3">
                  <div className="flex items-start text-slate-700">
                    <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <div>
                      <span className="text-sm font-medium">
                        Intégration Email
                      </span>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Formulaires et notifications automatisées
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-slate-700">
                    <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <div>
                      <span className="text-sm font-medium">
                        Base de Données
                      </span>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Gestion de contenu dynamique et stockage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-slate-700">
                    <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <div>
                      <span className="text-sm font-medium">
                        Automatisation
                      </span>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Processus métier automatisés sur mesure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-slate-700">
                    <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <div>
                      <span className="text-sm font-medium">
                        Intégrations Externes
                      </span>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Connexion avec vos outils existants
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Info */}
                <div className="mb-6 text-center">
                  <div className="rounded-xl bg-gradient-to-r from-purple-700 to-indigo-600 p-4 text-white">
                    <div className="mb-1 text-sm font-medium opacity-90">
                      Sur Devis Personnalisé
                    </div>
                    <div className="text-3xl font-bold">Sur Mesure</div>
                    <div className="mt-1 text-xs opacity-90">
                      Tarif selon complexité technique
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full transform bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-purple-800 hover:to-indigo-700"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Devis Gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Trust Signal */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              ✅ Consultation gratuite • ✅ Devis sous 24h • ✅ Satisfaction
              garantie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

