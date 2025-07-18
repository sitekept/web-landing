import { ProjectCard } from "../_components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const REALIZATIONS = [
  {
    name: "IAFormaPlus",
    url: "https://iaformaplus.fr",
    description:
      "Plateforme de formation en intelligence artificielle avec système de gestion d'utilisateurs, cours interactifs et certification. Interface moderne et responsive.",
    screenshot: "/realization/iaformaplus.png",
  },
  {
    name: "Orhakerem",
    url: "https://orhakerem.com",
    description:
      "Site vitrine pour cabinet dentaire avec système de prise de rendez-vous en ligne, galerie avant/après et présentation des services.",
    screenshot: "/realization/orhakerem.png",
  },
  {
    name: "PinckIt",
    url: "https://pinckit.com",
    description:
      "Application web de gestion de contenu visuel avec fonctionnalités de collaboration, partage et organisation d'images et vidéos.",
    screenshot: "/realization/pinckit.png",
  },
] as const;

export default function RealizationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Nos Réalisations
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Découvrez nos projets récents qui ont transformé des idées en
              succès numériques. Chaque réalisation reflète notre expertise et
              notre engagement envers l&apos;excellence.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-8 text-lg">
                <Link href="/#contact">
                  Démarrer votre projet
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 text-lg"
              >
                <Link href="/template">Voir nos templates</Link>
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
                ctaText="Discuter d'un projet similaire"
                ctaLink="/#contact"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
