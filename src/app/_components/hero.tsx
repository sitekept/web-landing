"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Gift, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full bg-slate-800/50 px-4 py-2 text-sm text-slate-300 ring-1 ring-slate-700">
          <Zap className="mr-2 h-4 w-4 text-yellow-400" />
          Livraison express. Performance maximale. Résultats garantis.
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Votre Site Web{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            En Ligne en 48h
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Fini l&apos;attente ! Nous créons des sites web haute performance qui convertissent vos visiteurs en clients. Design moderne, technologie de pointe, résultats immédiats.
        </p>

        {/* Enhanced Promotional Offer */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            {/* Animated background glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 opacity-75 blur animate-pulse"></div>
            
            {/* Main promotional badge */}
            <div className="relative flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 px-6 py-4 sm:px-8 sm:py-5">
              {/* Promotional icon */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Gift className="h-5 w-5 text-white animate-bounce" />
              </div>
              
              {/* Promotional text - removed "OFFRE SPÉCIALE" */}
              <div className="text-center">
                <div className="text-xl font-black text-white sm:text-2xl lg:text-3xl tracking-tight">
                  Nom de domaine offert la 1ère année • Déploiement gratuit
                </div>
              </div>
              
              {/* Star decoration */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Star className="h-5 w-5 text-white animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            
            {/* Floating elements for extra attention */}
            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-blue-300 animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-purple-300 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-blue-600 px-8 py-3 text-lg text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Lancer Mon Projet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">48h</div>
            <div className="text-sm text-slate-400">Mise en ligne garantie</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99%</div>
            <div className="text-sm text-slate-400">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-slate-400">Sites créés</div>
          </div>
        </div>
      </div>
    </section>
  );
}