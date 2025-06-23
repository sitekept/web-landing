"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ShoppingCart,
  Building,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "High-converting landing pages that turn visitors into customers. Optimized for speed and conversions.",
    features: [
      "A/B Test Ready",
      "SEO Optimized",
      "Mobile First",
      "Analytics Integrated",
    ],
    price: "From $1,499",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sites",
    description:
      "Full-featured online stores built for scale. From product catalogs to checkout optimization.",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Admin Dashboard",
      "Mobile Commerce",
    ],
    price: "From $2,999",
  },
  {
    icon: Building,
    title: "Corporate Websites",
    description:
      "Professional corporate presence that builds trust and drives business growth.",
    features: [
      "CMS Integration",
      "Multi-language",
      "Team Portals",
      "Brand Guidelines",
    ],
    price: "From $2,499",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description:
      "Unique web applications tailored to your specific business needs and workflows.",
    features: [
      "Custom Features",
      "API Integration",
      "Database Design",
      "Ongoing Support",
    ],
    price: "Custom Quote",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From simple landing pages to complex web applications, we deliver
            exactly what your business needs to succeed online.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 transition-colors hover:border-blue-200"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  {service.title}
                </CardTitle>
                <p className="text-slate-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">
                    {service.price}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-slate-500">
            All projects include: Free hosting setup • SSL certificate • Mobile
            optimization • Basic SEO
          </p>
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
