import { ProjectCard } from "../_components/project-card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const TEMPLATES = [
  {
    name: "Template Boulangerie",
    url: "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/boulangerie",
    description:
      "Site vitrine complet pour boulangerie avec galerie de produits, horaires, présentation de l'équipe et formulaire de contact. Design chaleureux et appétissant.",
    screenshot: "/template/boulangerie.png",
  },
  {
    name: "Template Fleuriste",
    url: "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/fleuriste",
    description:
      "Élégant site pour fleuriste avec catalogue de créations, service de livraison, événements spéciaux et système de commande en ligne.",
    screenshot: "/template/fleuriste.png",
  },
  {
    name: "Template Réparation Ordinateur",
    url: "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/ordinateur",
    description:
      "Site professionnel pour service de réparation informatique avec système de diagnostic en ligne, tarifs transparents et prise de RDV.",
    screenshot: "/template/ordinateur.png",
  },
  {
    name: "Template Pâtisserie",
    url: "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/pattiserie",
    description:
      "Site raffiné pour pâtisserie artisanale avec présentation des créations, commandes personnalisées, et système de réservation pour événements.",
    screenshot: "/template/patisserie.png",
  },
] as const;

export default function TemplatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center">
              <Lightbulb className="mr-4 h-12 w-12 text-yellow-500" />
              <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                Templates Prêts à l&apos;Emploi
              </h1>
            </div>
            <p className="mb-8 text-xl text-gray-600">
              Vous ne savez pas par où commencer ? Nos templates professionnels
              sont conçus pour vous donner l&apos;inspiration et accélérer votre
              projet en ligne.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-8 text-lg">
                <Link href="/#contact">
                  Choisir un template
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 text-lg"
              >
                <Link href="/realization">Voir nos réalisations</Link>
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
                ctaText="Obtenir ce template"
                ctaLink="/#contact"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
