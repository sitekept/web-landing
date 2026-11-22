import Link from "next/link";

import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

import { IndexLabel, ClosingBand } from "./parts";
import { PortfolioDelivery, PortfolioSeries } from "./portfolio-series";
import { SERIES_ANCHORS } from "./home-domains";

/**
 * Portfolio : hero court avec l'index des séries, trois séries en rangées
 * justifiées (mariage, portrait, entreprise), livraison, contact.
 */
export function PortfolioView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(photographe, locale).portfolio;

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        titleScale="title"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        className="pb-6 lg:pb-8"
      >
        <nav aria-label={page.indexLabel}>
          <ul
            role="list"
            className="grid border-t border-tpl-line sm:grid-cols-3 [&>li]:border-b [&>li]:border-tpl-line"
          >
            {page.categories.map((category, index) => (
              <li key={category.title}>
                <Link
                  href={`#${SERIES_ANCHORS[index]}`}
                  className="flex items-baseline justify-between gap-4 py-4 text-tpl-sm font-medium focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink sm:pr-6"
                >
                  <IndexLabel index={index + 1}>{category.title}</IndexLabel>
                  <span className="font-normal text-tpl-ink-muted tabular-nums">
                    {category.items.length} {page.imagesLabel}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </TemplateSection>
      <PortfolioSeries locale={locale} />
      <PortfolioDelivery locale={locale} />
      <ClosingBand locale={locale} />
    </>
  );
}
