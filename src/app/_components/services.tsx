"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ShoppingCart,
  Building,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines Performants",
    description:
      "Pages d&apos;atterrissage qui convertissent à 100%. Design moderne, optimisation SEO et vitesse de chargement éclair.",
    features: [
      "Optimisation conversions",
      "SEO intégré",
      "Mobile-first",
      "Analytics avancées",
    ],
    price: "À partir de 1 499€",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Clé en Main",
    description:
      "Boutiques en ligne complètes et rentables. Gestion produits, paiements sécurisés et tableau de bord intuitif.",
    features: [
      "Paiements sécurisés",
      "Gestion stock automatisée",
      "Dashboard vendeur",
      "Mobile commerce",
    ],
    price: "À partir de 2 999€",
  },
  {
    icon: Building,
    title: "Sites Corporate Premium",
    description:
      "Présence digitale professionnelle qui inspire confiance et génère des leads qualifiés pour votre entreprise.",
    features: [
      "CMS sur mesure",
      "Multi-langues",
      "Espace collaborateurs",
      "Charte graphique",
    ],
    price: "À partir de 2 499€",
  },
  {
    icon: Palette,
    title: "Développement Sur Mesure",
    description:
      "Applications web uniques adaptées à vos besoins spécifiques. Innovation technique et créativité au service de vos objectifs.",
    features: [
      "Fonctionnalités exclusives",
      "Intégrations API",
      "Base de données optimisée",
      "Support prioritaire",
    ],
    price: "Devis personnalisé",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nos Solutions Web
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Du site vitrine à l&apos;application complexe, nous créons exactement ce dont votre business a besoin pour dominer votre marché en ligne.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 transition-colors hover:border-blue-200"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  {service.title}
                </CardTitle>
                <p className="text-slate-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">
                    {service.price}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Démarrer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-slate-500">
            Tous nos projets incluent : Hébergement premium • SSL gratuit • Responsive design • SEO de base • Formation
          </p>
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discuter de Mon Projet
          </Button>
        </div>
      </div>
    </section>
  );
}