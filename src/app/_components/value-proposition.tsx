import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Shield, Zap, Target, Code, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Livraison Ultra-Rapide",
    description:
      "Du brief au site web en ligne en 48-72 heures. Pas de processus longs, que des résultats.",
  },
  {
    icon: Shield,
    title: "Qualité Prête pour la Production",
    description:
      "Chaque site est conçu avec l'évolutivité, la sécurité et la performance en tête dès le premier jour.",
  },
  {
    icon: Code,
    title: "Stack Technologique Moderne",
    description:
      "Next.js, TypeScript, Tailwind CSS - nous utilisons les meilleurs outils pour une performance optimale.",
  },
  {
    icon: Target,
    title: "Axé sur la Conversion",
    description:
      "Des designs magnifiques qui ne font pas que bien paraître - ils convertissent les visiteurs en clients.",
  },
  {
    icon: Rocket,
    title: "Architecture Évolutive",
    description:
      "Conçu pour grandir avec votre entreprise. De la startup à l'entreprise, nous vous couvrons.",
  },
  {
    icon: Users,
    title: "Équipe d'Experts",
    description:
      "Développeurs et designers seniors qui ont livré des centaines de projets réussis.",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nous ne sommes pas juste une autre agence web. Nous sommes votre partenaire de déploiement rapide, conçu pour la vitesse sans compromettre la qualité.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}