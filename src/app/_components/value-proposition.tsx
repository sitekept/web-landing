import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Shield, Zap, Target, Code, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Livraison Express 48h",
    description:
      "Votre site en ligne en 48h chrono ! Pas de délais interminables, que des résultats concrets et rapides.",
  },
  {
    icon: Shield,
    title: "Qualité Professionnelle",
    description:
      "Sites robustes et évolutifs dès le premier jour. Sécurité, performance et fiabilité garanties.",
  },
  {
    icon: Code,
    title: "Technologies de Pointe",
    description:
      "Next.js, TypeScript, Tailwind CSS - nous utilisons les meilleures technologies pour des performances optimales.",
  },
  {
    icon: Target,
    title: "Conçu pour Convertir",
    description:
      "Chaque élément est pensé pour transformer vos visiteurs en clients. Design persuasif et expérience utilisateur optimisée.",
  },
  {
    icon: Rocket,
    title: "Évolutif et Puissant",
    description:
      "Votre site grandit avec votre business. De la startup à l&apos;entreprise, nous anticipons votre croissance.",
  },
  {
    icon: Users,
    title: "Équipe d&apos;Experts",
    description:
      "Développeurs et designers seniors avec des centaines de projets réussis. Votre succès est notre priorité.",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pourquoi Choisir SiteKept ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nous ne sommes pas une agence comme les autres. Nous sommes vos partenaires pour un succès digital immédiat, sans compromis sur la qualité.
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