"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-20" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-sm">
          <Sparkles className="mr-2 h-4 w-4" />
          Prêt à dominer votre marché en ligne ?
        </div>

        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Votre Succès Digital{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Commence Maintenant
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
          Stop aux excuses ! Pendant que vos concurrents hésitent, prenez l&apos;avantage avec un site web qui performe dès le premier jour. Votre croissance ne peut plus attendre.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-white px-8 py-4 text-lg font-semibold text-blue-700 hover:bg-blue-50"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Je Lance Mon Projet Maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 px-8 py-4 text-lg font-bold text-yellow-300 backdrop-blur-sm hover:bg-white/10"
            onClick={() => window.open("mailto:sitekept@gmail.com", "_blank")}
          >
            Appel Stratégique Gratuit
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-white">Gratuit</div>
            <div className="text-sm text-blue-200">Consultation & Stratégie</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-white">48h</div>
            <div className="text-sm text-blue-200">Mise en ligne garantie</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-blue-200">Satisfaction ou remboursé</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-blue-200">
            Sans engagement • Sans frais cachés • Sans délais interminables
          </p>
        </div>
      </div>
    </section>
  );
}