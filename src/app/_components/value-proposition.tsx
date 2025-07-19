import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Shield, Zap, Target, Code, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";

const featureIcons = [
  { icon: Zap, key: "express" },
  { icon: Shield, key: "quality" },
  { icon: Code, key: "technology" },
  { icon: Target, key: "conversion" },
  { icon: Rocket, key: "scalable" },
  { icon: Users, key: "experts" },
];

export async function ValueProposition() {
  const t = await getTranslations("valueProposition");

  return (
    <section className="bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureIcons.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-sm text-slate-600">
                  {t(`features.${feature.key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
