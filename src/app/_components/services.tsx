"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ArrowRight,
  Star,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export function Services() {
  const features = [
    "Design sur mesure",
    "Optimisation SEO avancée", 
    "Vitesse de chargement éclair",
    "Taux de conversion optimisé",
    "Responsive parfait",
    "Fonctionnalités exclusives",
    "Support prioritaire",
    "Analyse des performances",
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-24 sm:py-32 lg:px-8">
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
            Nous créons des sites vitrines qui transforment vos visiteurs en clients. 
            Chaque projet est conçu pour maximiser votre impact digital et votre croissance.
          </p>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-white/60 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-600">3.2x</div>
              <div className="text-sm text-slate-600">Plus de conversions</div>
            </div>
            <div className="rounded-lg bg-white/60 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-600">0.8s</div>
              <div className="text-sm text-slate-600">Temps de chargement</div>
            </div>
            <div className="rounded-lg bg-white/60 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-600">95+</div>
              <div className="text-sm text-slate-600">Score PageSpeed</div>
            </div>
          </div>
        </div>

        {/* Single Service Card */}
        <div className="mx-auto mt-20 max-w-2xl">
          <Card className="relative overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50/30 to-white shadow-2xl ring-1 ring-blue-100 transform hover:scale-105 transition-all duration-300">
            {/* Premium Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                <Star className="mr-2 h-4 w-4" />
                ⭐ Notre Expertise Premium
              </span>
            </div>
            
            <CardHeader className="relative pt-8 pb-6">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <CardTitle className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                Site Vitrine Sur Mesure
              </CardTitle>
              
              <p className="text-center text-slate-600 mt-4">
                La solution complète pour une présence digitale qui performe et convertit
              </p>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              {/* Features Grid */}
              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-slate-700"
                  >
                    <CheckCircle className="mr-3 h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Price and CTA */}
              <div className="space-y-6 text-center">
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="mb-2 text-sm font-medium opacity-90">
                    Tarif de lancement
                  </div>
                  <div className="text-4xl font-bold">
                    À partir de 400€
                  </div>
                  <div className="mt-2 text-sm opacity-90">
                    Tout inclus • Sans frais cachés
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Démarrer Mon Site Vitrine
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-xs text-slate-500">
                  Consultation gratuite • Devis personnalisé sous 24h
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">
              🚀 Pourquoi Choisir Notre Expertise ?
            </h3>
            <p className="mb-6 text-blue-100">
              Plus de 500 sites créés, 98% de clients satisfaits, et une expertise reconnue 
              dans la création de sites vitrines haute performance.
            </p>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-blue-50 font-semibold"
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
      </div>
    </section>
  );
}