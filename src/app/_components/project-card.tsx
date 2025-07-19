"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  url: string;
  description: string;
  screenshot: string;
  category: "realisation" | "template";
  ctaText?: string;
  ctaAction?: () => void;
  ctaLink?: string;
}

export function ProjectCard({
  name,
  url,
  description,
  screenshot,
  category,
  ctaText = "Voir le projet",
  ctaAction,
  ctaLink,
}: ProjectCardProps) {
  const handleVisit = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="transform overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={screenshot}
            alt={`Aperçu de ${name}`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center gap-2">
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                category === "realisation"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {category === "realisation" ? "Réalisation" : "Template"}
            </span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-gray-900">{name}</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          <div className="flex gap-2">
            <Button
              onClick={handleVisit}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Visiter
            </Button>

            {ctaLink ? (
              <Button asChild size="sm" className="flex items-center gap-2">
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            ) : (
              <Button
                onClick={ctaAction}
                size="sm"
                className="flex items-center gap-2"
              >
                {ctaText}
                <ArrowRight size={16} />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
