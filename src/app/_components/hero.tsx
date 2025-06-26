"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full bg-slate-800/50 px-4 py-2 text-sm text-slate-300 ring-1 ring-slate-700">
          <Zap className="mr-2 h-4 w-4 text-yellow-400" />
          Livrez plus vite. Évoluez mieux. Gagnez plus.
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Nous Créons des{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            Sites Ultra-Rapides
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Du concept au lancement en un temps record. Nous sommes l&apos;agence qui transforme votre vision en sites web prêts pour la production qui performent, évoluent et convertissent.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-blue-600 px-8 py-3 text-lg text-white hover:bg-blue-700"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Démarrer Votre Projet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 px-8 py-3 text-lg text-slate-300 hover:bg-slate-800"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Voir Nos Réalisations
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">48h</div>
            <div className="text-sm text-slate-400">Livraison Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99%</div>
            <div className="text-sm text-slate-400">Satisfaction Client</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-slate-400">Projets Livrés</div>
          </div>
        </div>
      </div>
    </section>
  );
}