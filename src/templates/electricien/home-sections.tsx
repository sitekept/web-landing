import {
  TemplateCard,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge } from "./parts";

type Props = { locale: TemplateLocale };

/** Bande jaune : trois engagements chiffrés. */
export function CommitmentsBand({ locale }: Props) {
  const page = getTemplateCopy(electricien, locale).home.commitments;

  return (
    <TemplateSection
      tone="bare"
      density="compact"
      className="border-b border-tpl-ink bg-tpl-accent text-tpl-accent-ink"
    >
      <h2 className="sr-only">{page.label}</h2>
      <ul className="grid gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-tpl-ink">
        {page.items.map((item) => (
          <li key={item.value} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
            <p className="text-tpl-2xl leading-none font-extrabold tracking-tighter tabular-nums">
              {item.value}
            </p>
            <p className="mt-2 text-tpl-sm font-semibold">{item.text}</p>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}

export function ServicesSection({ locale }: Props) {
  const copy = getTemplateCopy(electricien, locale);
  const page = copy.home.services;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {page.items.map((item) => (
          <li key={item.title}>
            <TemplateCard
              interactive
              icon={<IconBadge icon={item.icon} />}
              title={item.title}
              className="h-full bg-tpl-surface"
            >
              {item.text}
            </TemplateCard>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <TemplateLink
          href={templateHref(locale, electricien.paths.prestations)}
          variant="outline"
        >
          {copy.cta.allServices}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}

export function ReviewsSection({ locale }: Props) {
  const page = getTemplateCopy(electricien, locale).home.reviews;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <TestimonialsMarquee
        label={page.label}
        tone="surface"
        durationSeconds={55}
        starTone="ink"
        items={page.items.map((item) => ({
          quote: item.quote,
          name: item.name,
          detail: item.detail,
          rating: item.rating,
          ratingLabel: item.ratingLabel,
        }))}
      />
    </TemplateSection>
  );
}
