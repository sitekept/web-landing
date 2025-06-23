import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Shield, Zap, Target, Code, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "From brief to live website in 48-72 hours. No lengthy processes, just results.",
  },
  {
    icon: Shield,
    title: "Production-Ready Quality",
    description:
      "Every site is built with scalability, security, and performance in mind from day one.",
  },
  {
    icon: Code,
    title: "Modern Tech Stack",
    description:
      "Next.js, TypeScript, Tailwind CSS - we use the best tools for optimal performance.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    description:
      "Beautiful designs that don&apos;t just look good - they convert visitors into customers.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business. From startup to enterprise, we&apos;ve got you covered.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Senior developers and designers who&apos;ve shipped hundreds of successful projects.",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We&apos;re not just another web agency. We&apos;re your rapid
            deployment partner, built for speed without compromising on quality.
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
