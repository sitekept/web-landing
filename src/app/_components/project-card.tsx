"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  url?: string;
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
    if (!url) {
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const isTemplateCard = category === "template";
  const actionWrapperClassName = isTemplateCard
    ? "flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4"
    : "flex gap-2";
  const visitButtonClassName = isTemplateCard
    ? "h-8 gap-1.5 rounded-sm border-slate-200 px-2.5 text-xs font-medium text-slate-700 shadow-none hover:border-blue-200 hover:bg-blue-50 hover:text-slate-900"
    : "flex items-center gap-2 border-blue-200 hover:bg-blue-50";
  const primaryButtonClassName = isTemplateCard
    ? "h-8 gap-1.5 rounded-sm bg-blue-600 px-3 text-xs font-medium shadow-none hover:bg-blue-700"
    : "flex items-center gap-2 bg-blue-600 hover:bg-blue-700";

  return (
    <Card className="transform overflow-hidden !rounded-md border border-blue-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden bg-slate-100">
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
              className={`rounded-sm px-2 py-1 text-xs font-medium ${
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

          <div className={actionWrapperClassName}>
            {url ? (
              <Button
                onClick={handleVisit}
                variant="outline"
                size="sm"
                className={cn(visitButtonClassName)}
              >
                <ExternalLink size={isTemplateCard ? 14 : 16} />
                Visiter
              </Button>
            ) : null}

            {ctaLink ? (
              <Button
                asChild
                size="sm"
                className={cn(primaryButtonClassName)}
              >
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight size={isTemplateCard ? 14 : 16} />
                </Link>
              </Button>
            ) : (
              <Button
                onClick={ctaAction}
                size="sm"
                className={cn(primaryButtonClassName)}
              >
                {ctaText}
                <ArrowRight size={isTemplateCard ? 14 : 16} />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
