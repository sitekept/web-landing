import { CircleAlert, Phone } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
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

/** Rupture : fond graphite, téléphone en grand, consigne de sécurité. */
export function EmergencySection({ locale }: Props) {
  const copy = getTemplateCopy(electricien, locale);
  const page = copy.home.emergency;

  return (
    <TemplateSection tone="inverse" density="spacious">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <div className="mt-8">
            <TemplateLink
              href={copy.phone.href}
              icon={<Phone aria-hidden="true" className="size-5" />}
              className="min-h-14 px-8 text-tpl-lg font-extrabold tabular-nums"
            >
              {copy.phone.label}
            </TemplateLink>
          </div>
        </div>

        <div>
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {page.stepsTitle}
          </p>
          <ol className="mt-4 space-y-3">
            {page.steps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-tpl border border-tpl-line bg-tpl-raised p-4"
              >
                <span
                  aria-hidden="true"
                  className="text-tpl-lg leading-none font-extrabold text-tpl-accent tabular-nums"
                >
                  0{index + 1}
                </span>
                <span className="text-tpl-sm">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3 rounded-tpl border-l-4 border-tpl-accent bg-tpl-raised p-4">
            <CircleAlert
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-tpl-accent"
            />
            <div>
              <p className="text-tpl-sm font-bold">{page.safetyTitle}</p>
              <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                {page.safety}
              </p>
            </div>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}

/** Aperçu de trois réalisations (cuisine, garage, extérieur). */
export function WorksPreview({ locale }: Props) {
  const copy = getTemplateCopy(electricien, locale);
  const page = copy.home.works;
  const items = copy.realisations.gallery.items;
  const preview = [items[1], items[2], items[4]];

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {preview.map((item) => (
          <li key={item.title}>
            <TemplateMedia
              src={item.image.src}
              alt={item.image.alt}
              ratio="4/3"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            <h3 className="mt-4 text-tpl-lg">{item.title}</h3>
            <p className="mt-1 text-tpl-sm text-tpl-ink-muted">{item.meta}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <TemplateLink
          href={templateHref(locale, electricien.paths.realisations)}
          variant="outline"
        >
          {copy.cta.allWorks}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
