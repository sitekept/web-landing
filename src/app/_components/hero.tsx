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
          Ship faster. Scale better. Win more.
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          We Build{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            Lightning-Fast
          </span>{" "}
          Websites
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          From concept to launch in record time. We&apos;re the agency that
          turns your vision into production-ready websites that perform, scale,
          and convert.
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
            Start Your Project
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
            View Our Work
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">48h</div>
            <div className="text-sm text-slate-400">Average Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99%</div>
            <div className="text-sm text-slate-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-slate-400">Projects Shipped</div>
          </div>
        </div>
      </div>
    </section>
  );
}
