import { getTranslations } from "next-intl/server";
import { ProjectCard } from "../_components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function RealizationPage() {
  const t = await getTranslations("realization");

  const REALIZATIONS = [
    {
      name: "IAFormaPlus",
      url: "https://iaformaplus.fr",
      description: t("projects.iaformaplus.description"),
      screenshot: "/realization/iaformaplus.png",
    },
    {
      name: "Orhakerem",
      url: "https://orhakerem.com",
      description: t("projects.orhakerem.description"),
      screenshot: "/realization/orhakerem.png",
    },
    {
      name: "PinckIt",
      url: "https://pinckit.com",
      description: t("projects.pinckit.description"),
      screenshot: "/realization/pinckit.png",
    },
    {
      name: "FlowCycleAccounting",
      url: "https://flowcycleaccounting.com",
      description: t("projects.flowcycleaccounting.description"),
      screenshot: "/realization/flowcycleaccounting.png",
    },
    {
      name: "MathIntegral",
      url: "https://mathintegral.com",
      description: t("projects.mathintegral.description"),
      screenshot: "/realization/mathintegral.png",
    },
  ] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              {t("title")}
            </h1>
            <p className="mb-8 text-xl text-gray-600">{t("description")}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-8 text-lg">
                <Link href="/#contact">
                  {t("buttons.startProject")}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 text-lg"
              >
                <Link href="/template">{t("buttons.viewTemplates")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {REALIZATIONS.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                url={project.url}
                description={project.description}
                screenshot={project.screenshot}
                category="realisation"
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
