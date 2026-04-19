import { ProjectCard } from "../../_components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getMessage, getSiteLocale } from "@/lib/site-messages";

export default async function RealizationPage() {
  const locale = await getSiteLocale();

  const REALIZATIONS = [
    {
      name: "IAFormaPlus",
      url: "https://iaformaplus.fr",
      description: getMessage(locale, "realization.projects.iaformaplus.description"),
      screenshot: "/realization/iaformaplus.png",
    },
    {
      name: "Orhakerem",
      url: "https://orhakerem.com",
      description: getMessage(locale, "realization.projects.orhakerem.description"),
      screenshot: "/realization/orhakerem.png",
    },
    {
      name: "PinckIt",
      url: "https://pinckit.com",
      description: getMessage(locale, "realization.projects.pinckit.description"),
      screenshot: "/realization/pinckit.png",
    },
    {
      name: "LegitBrainrot",
      url: "https://www.legitbrainrot.com/",
      description: getMessage(locale, "realization.projects.iaformaplus.description"),
      screenshot: "/realization/legitbrainrot.png",
    },
    {
      name: "ComizGlobal",
      url: "https://www.comizglobal.com/",
      description: getMessage(locale, "realization.projects.orhakerem.description"),
      screenshot: "/realization/comizglobal.png",
    },
    {
      name: "BismuthCPA",
      url: "https://www.bismuthcpa.com/",
      description: getMessage(locale, "realization.projects.pinckit.description"),
      screenshot: "/realization/bismuthcpa.png",
    },
    {
      name: "Les assureurs experts",
      url: "https://lesassureursexperts.fr/",
      description: getMessage(locale, "realization.projects.iaformaplus.description"),
      screenshot: "/realization/lesassureursexperts.png",
    },
    {
      name: "ETS RUNI",
      url: "https://www.etsruni.com/",
      description: getMessage(locale, "realization.projects.etsruni.description"),
      screenshot: "/realization/etsruni.png",
    },
  ] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              {getMessage(locale, "realization.title")}
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              {getMessage(locale, "realization.description")}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-8 text-lg">
                <Link href="/#contact">
                  {getMessage(locale, "realization.buttons.startProject")}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 text-lg"
              >
                <Link href="/templates">
                  {getMessage(locale, "realization.buttons.viewTemplates")}
                </Link>
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
                ctaText={getMessage(locale, "realization.cta")}
                ctaLink="/#contact"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
