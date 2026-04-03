import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/app/_components/project-card";
import {
  featuredTemplates,
  getLocalizedValue,
  type SiteLocale,
} from "@/content/site-content";

interface TemplatesShowcaseProps {
  locale: SiteLocale;
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaText: string;
  sectionId?: string;
  limit?: number;
  showViewAll?: boolean;
  viewAllLabel?: string;
}

export function TemplatesShowcase({
  locale,
  eyebrow,
  title,
  description,
  ctaText,
  sectionId,
  limit,
  showViewAll = false,
  viewAllLabel,
}: TemplatesShowcaseProps) {
  const templates = featuredTemplates
    .filter((template) => template.featured)
    .slice(0, limit ?? featuredTemplates.length);

  return (
    <section
      id={sectionId}
      className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {title ? (
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {templates.map((template) => {
            const copy = getLocalizedValue(template.copy, locale);

            return (
              <ProjectCard
                key={template.id}
                name={copy.name}
                url={template.externalUrl}
                description={copy.description}
                screenshot={template.screenshot}
                category="template"
                ctaText={ctaText}
                ctaLink="/#contact"
              />
            );
          })}
        </div>

        {showViewAll && viewAllLabel ? (
          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-blue-200 bg-white text-slate-900 hover:bg-blue-50"
            >
              <Link href="/templates">
                {viewAllLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
