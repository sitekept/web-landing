"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Gift, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full bg-slate-800/50 px-4 py-2 text-sm text-slate-300 ring-1 ring-slate-700">
          <Zap className="mr-2 h-4 w-4 text-yellow-400" />
          {t("tagline")}
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {t("title")}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            {t("titleHighlight")}
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          {t("description")}
        </p>

        {/* Enhanced Promotional Offer */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            {/* Animated background glow */}
            <div className="absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 opacity-75 blur"></div>

            {/* Main promotional badge */}
            <div className="relative flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 px-6 py-4 sm:px-8 sm:py-5">
              {/* Promotional icon */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Gift className="h-5 w-5 animate-bounce text-white" />
              </div>

              {/* Promotional text */}
              <div className="text-center">
                <div className="text-xl font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
                  {t("offer")}
                </div>
              </div>

              {/* Star decoration */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Star
                  className="h-5 w-5 animate-spin text-white"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>

            {/* Floating elements for extra attention */}
            <div className="absolute -top-2 -right-2 h-4 w-4 animate-ping rounded-full bg-blue-300"></div>
            <div
              className="absolute -bottom-2 -left-2 h-3 w-3 animate-ping rounded-full bg-purple-300"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="transform bg-blue-600 px-8 py-3 text-lg text-white transition-all duration-200 hover:scale-105 hover:bg-blue-700"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("cta")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              {t("stats.time")}
            </div>
            <div className="text-sm text-slate-400">
              {t("stats.guaranteed")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              {t("stats.satisfaction")}
            </div>
            <div className="text-sm text-slate-400">{t("stats.clients")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              {t("stats.sitesCount")}
            </div>
            <div className="text-sm text-slate-400">{t("stats.sites")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
