"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("services");

  const FEATURES = [
    {
      title: t("features.customDesign"),
      description: t("features.customDesignDesc"),
    },
    {
      title: t("features.seoOptimization"),
      description: t("features.seoOptimizationDesc"),
    },
    {
      title: t("features.loadingSpeed"),
      description: t("features.loadingSpeedDesc"),
    },
    {
      title: t("features.conversionRate"),
      description: t("features.conversionRateDesc"),
    },
    {
      title: t("features.responsive"),
      description: t("features.responsiveDesc"),
    },
    {
      title: t("features.exclusiveFeatures"),
      description: t("features.exclusiveFeaturesDesc"),
    },
    {
      title: t("features.prioritySupport"),
      description: t("features.prioritySupportDesc"),
    },
    {
      title: t("features.performanceAnalysis"),
      description: t("features.performanceAnalysisDesc"),
    },
  ] as const;

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
            {t("title")}
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t("subtitle")}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t("subtitleHighlight")}
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {t("description")}
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
                  {t("pricing.essential.title")}
                </CardTitle>

                <p className="mt-2 text-center text-sm text-slate-600">
                  {t("pricing.essential.subtitle")}
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
                      {t("pricing.essential.launch")}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-lg font-medium line-through opacity-70">
                        {t("pricing.essential.originalPrice")}
                      </div>
                      <div className="text-3xl font-bold">
                        {t("pricing.essential.price")}
                      </div>
                    </div>
                    <div className="mt-1 text-xs opacity-90">
                      {t("pricing.essential.included")}
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
                  {t("pricing.essential.cta")}
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
                  {t("pricing.advanced.title")}
                </CardTitle>

                <p className="mt-2 text-center text-sm text-slate-600">
                  {t("pricing.advanced.subtitle")}
                </p>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col px-6 pb-6">
                {/* Advanced Features List */}
                <div className="mb-6 flex-1 space-y-3">
                  <div className="flex items-start text-slate-700">
                    <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <div>
                      <span className="text-sm font-medium">
                        {t("advancedFeatures.emailIntegration")}
                      </span>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {t("advancedFeatures.emailIntegrationDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-slate-700">
                    <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <div>
                      <span className="text-sm font-medium">
                        {t("advancedFeatures.database")}
                      </span>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {t("advancedFeatures.databaseDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-slate-700">
                    <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <div>
                      <span className="text-sm font-medium">
                        {t("advancedFeatures.automation")}
                      </span>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {t("advancedFeatures.automationDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-slate-700">
                    <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    <div>
                      <span className="text-sm font-medium">
                        {t("advancedFeatures.externalIntegrations")}
                      </span>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {t("advancedFeatures.externalIntegrationsDesc")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Info */}
                <div className="mb-6 text-center">
                  <div className="rounded-xl bg-gradient-to-r from-purple-700 to-indigo-600 p-4 text-white">
                    <div className="mb-1 text-sm font-medium opacity-90">
                      {t("pricing.advanced.custom")}
                    </div>
                    <div className="text-3xl font-bold">
                      {t("pricing.advanced.bespoke")}
                    </div>
                    <div className="mt-1 text-xs opacity-90">
                      {t("pricing.advanced.pricing")}
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
                  {t("pricing.advanced.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Trust Signal */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">{t("trustSignals")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
