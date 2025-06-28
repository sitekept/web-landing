"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ShoppingCart,
  Building,
  Palette,
  ArrowRight,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines Performants",
    description:
      "Notre spécialité ! Sites vitrines modernes qui transforment vos visiteurs en clients. Design sur mesure, optimisation SEO et performance garantie.",
    features: [
      "Design sur mesure",
      "Optimisation SEO avancée",
      "Vitesse de chargement éclair",
      "Taux de conversion optimisé",
      "Responsive parfait",
    ],
    price: "À partir de 1 299€",
    popular: true,
    badge: "⭐ Notre Spécialité",
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
    popular: false,
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
    popular: false,
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
    popular: false,
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
            Spécialistes des sites vitrines haute performance, nous créons exactement ce dont votre business a besoin pour dominer votre marché en ligne.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
                service.popular 
                  ? "border-blue-500 bg-gradient-to-br from-blue-50 to-white ring-2 ring-blue-200 transform scale-105" 
                  : "border-slate-200 hover:border-blue-200"
              }`}
            >
              {service.badge && (
                <div className="absolute -top-2 left-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    {service.badge}
                  </span>
                </div>
              )}
              
              <CardHeader className="relative">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                  service.popular ? "bg-blue-600" : "bg-blue-100"
                }`}>
                  <service.icon className={`h-6 w-6 ${
                    service.popular ? "text-white" : "text-blue-600"
                  }`} />
                </div>
                <CardTitle className={`text-xl ${
                  service.popular ? "text-blue-900" : "text-slate-900"
                }`}>
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
                      <div className={`mr-2 h-1.5 w-1.5 rounded-full ${
                        service.popular ? "bg-blue-600" : "bg-blue-600"
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold ${
                    service.popular ? "text-blue-700" : "text-slate-900"
                  }`}>
                    {service.price}
                  </span>
                  <Button
                    variant={service.popular ? "default" : "outline"}
                    className={service.popular ? "bg-blue-600 hover:bg-blue-700" : ""}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {service.popular ? "Je Commence" : "Démarrer"} 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section spéciale pour les sites vitrines */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-4 text-2xl font-bold">
              🏆 Pourquoi nos Sites Vitrines sont-ils si Efficaces ?
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">3.2x</div>
                <div className="text-sm text-blue-100">Plus de conversions que la moyenne</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">0.8s</div>
                <div className="text-sm text-blue-100">Temps de chargement moyen</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">95+</div>
                <div className="text-sm text-blue-100">Score Google PageSpeed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-slate-500">
            Tous nos projets incluent : Hébergement premium • SSL gratuit • Responsive design • SEO de base • Formation
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
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