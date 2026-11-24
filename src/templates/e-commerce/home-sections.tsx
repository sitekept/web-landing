import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";
import { ECOMMERCE_IMAGES, eCommerce } from "@/content/templates/e-commerce";
import { getTemplateCopy } from "@/content/templates/types";

import {
  dashboardKpis,
  fill,
  formatAmount,
  formatDelta,
  formatPrice,
} from "./lib";
import { ICONS } from "./parts";

type Props = { locale: TemplateLocale };

/** Ateliers : photo à gauche, texte et engagements à droite, fond sable. */
export function StorySection({ locale }: Props) {
  const { story } = getTemplateCopy(eCommerce, locale).home;

  return (
    <TemplateSection tone="tint">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <TemplateMedia
          src={ECOMMERCE_IMAGES.atelier}
          alt={story.alt}
          ratio="4/5"
          className="mx-auto max-w-md lg:max-w-none"
          sizes="(min-width: 1344px) 590px, (min-width: 1024px) calc(50vw - 64px), (min-width: 480px) 448px, calc(100vw - 32px)"
        />
        <div>
          <TemplateHeading
            eyebrow={story.eyebrow}
            title={story.title}
            description={story.text}
          />
          <ul className="mt-8 space-y-3 border-t border-tpl-line pt-6">
            {story.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-tpl-sm">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TemplateSection>
  );
}

/** Avis clients défilants. */
export function ReviewsSection({ locale }: Props) {
  const { reviews } = getTemplateCopy(eCommerce, locale).home;

  return (
    <TemplateSection title={reviews.title} description={reviews.description}>
      <TestimonialsMarquee
        label={reviews.label}
        tone="raised"
        durationSeconds={60}
        items={reviews.items.map((item) => ({
          quote: item.quote,
          name: item.name,
          detail: item.detail,
          rating: item.rating,
          ratingLabel: fill(reviews.ratingLabel, { rating: item.rating }),
        }))}
      />
    </TemplateSection>
  );
}

/**
 * Aperçu de l'espace gestion : fond inverse, texte et points à gauche, trois
 * indicateurs du tableau de bord à droite (calculés depuis les données).
 */
export function BackofficeSection({ locale }: Props) {
  const copy = getTemplateCopy(eCommerce, locale);
  const { backoffice } = copy.home;
  const labels = copy.crm.dashboard;
  const kpis = dashboardKpis();
  const tiles = [
    {
      label: labels.kpis.revenue,
      value: formatAmount(kpis.revenue.value, locale),
      delta: kpis.revenue.delta,
    },
    {
      label: labels.kpis.orders,
      value: String(kpis.orders.value),
      delta: kpis.orders.delta,
    },
    {
      label: labels.kpis.average,
      value: formatPrice(kpis.average.value, locale),
      delta: kpis.average.delta,
    },
  ];

  return (
    <TemplateSection tone="inverse">
      <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:items-center">
        <div>
          <TemplateHeading
            eyebrow={backoffice.eyebrow}
            title={backoffice.title}
            description={backoffice.text}
          />
          <ul className="mt-8 space-y-3">
            {backoffice.points.map((point) => {
              const Icon = ICONS[point.icon];
              return (
                <li
                  key={point.text}
                  className="flex items-start gap-3 text-tpl-sm"
                >
                  <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                  {point.text}
                </li>
              );
            })}
          </ul>
          <TemplateLink
            href={templateHref(locale, eCommerce.paths.crm)}
            variant="inverse"
            shape="pill"
            className="mt-9"
          >
            {backoffice.cta}
          </TemplateLink>
        </div>
        <div className="rounded-tpl border border-tpl-line bg-tpl-raised p-6">
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {labels.eyebrow}
          </p>
          <dl className="mt-4 divide-y divide-tpl-line">
            {tiles.map((tile) => (
              <div
                key={tile.label}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <dt className="text-tpl-sm text-tpl-ink-muted">{tile.label}</dt>
                <dd className="text-right">
                  <span className="font-tpl-display text-tpl-2xl tabular-nums">
                    {tile.value}
                  </span>
                  <span className="ml-2 text-tpl-xs font-semibold tabular-nums">
                    {formatDelta(tile.delta, locale)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </TemplateSection>
  );
}
