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
    title: "Pages d'Atterrissage",
    description:
      "Pages d'atterrissage à haute conversion qui transforment les visiteurs en clients. Optimisées pour la vitesse et les conversions.",
    features: [
      "Prêt pour les Tests A/B",
      "Optimisé SEO",
      "Mobile First",
      "Analytics Intégrées",
    ],
    price: "À partir de 1 499€",
  },
  {
    icon: ShoppingCart,
    title: "Sites E-commerce",
    description:
      "Boutiques en ligne complètes conçues pour l'évolutivité. Des catalogues produits à l'optimisation du checkout.",
    features: [
      "Intégration Paiement",
      "Gestion Inventaire",
      "Tableau de Bord Admin",
      "Commerce Mobile",
    ],
    price: "À partir de 2 999€",
  },
  {
    icon: Building,
    title: "Sites Corporate",
    description:
      "Présence corporate professionnelle qui inspire confiance et stimule la croissance des affaires.",
    features: [
      "Intégration CMS",
      "Multi-langues",
      "Portails Équipe",
      "Guidelines de Marque",
    ],
    price: "À partir de 2 499€",
  },
  {
    icon: Palette,
    title: "Solutions Sur Mesure",
    description:
      "Applications web uniques adaptées aux besoins spécifiques de votre entreprise et à vos flux de travail.",
    features: [
      "Fonctionnalités Personnalisées",
      "Intégration API",
      "Conception Base de Données",
      "Support Continu",
    ],
    price: "Devis Personnalisé",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Des simples pages d&apos;atterrissage aux applications web complexes, nous livrons exactement ce dont votre entreprise a besoin pour réussir en ligne.
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
                    Commencer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-slate-500">
            Tous les projets incluent : Configuration hébergement gratuite • Certificat SSL • Optimisation mobile • SEO de base
          </p>
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discuter de Votre Projet
          </Button>
        </div>
      </div>
    </section>
  );
}