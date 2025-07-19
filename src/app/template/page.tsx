import { getTranslations } from "next-intl/server";
import { ProjectCard } from "../_components/project-card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function TemplatePage() {
  const t = await getTranslations("template");

  const TEMPLATES = [
    {
      name: t("templates.bakery.name"),
      url: "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/boulangerie",
      description: t("templates.bakery.description"),
      screenshot: "/template/boulangerie.png",
    },
    {
      name: t("templates.florist.name"),
      url: "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/fleuriste",
      description: t("templates.florist.description"),
      screenshot: "/template/fleuriste.png",
    },
    {
      name: t("templates.computerRepair.name"),
      url: "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/ordinateur",
      description: t("templates.computerRepair.description"),
      screenshot: "/template/ordinateur.png",
    },
    {
      name: t("templates.pastryShop.name"),
      url: "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/pattiserie",
      description: t("templates.pastryShop.description"),
      screenshot: "/template/patisserie.png",
    },
  ] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center">
              <Lightbulb className="mr-4 h-12 w-12 text-yellow-500" />
              <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                {t("title")}
              </h1>
            </div>
            <p className="mb-8 text-xl text-gray-600">{t("description")}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-8 text-lg">
                <Link href="/#contact">
                  {t("buttons.chooseTemplate")}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 text-lg"
              >
                <Link href="/realization">{t("buttons.viewRealizations")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {TEMPLATES.map((template) => (
              <ProjectCard
                key={template.name}
                name={template.name}
                url={template.url}
                description={template.description}
                screenshot={template.screenshot}
                category="template"
                ctaText={t("cta")}
                ctaLink="/#contact"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
