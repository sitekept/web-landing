import { Clock } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import {
  TestimonialsMarquee,
  type TestimonialMarqueeItem,
} from "@/components/template-kit/vendor/testimonials-marquee";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy } from "@/content/templates/types";
import { templateHref } from "@/lib/template-href";

import { HEADING_CLASS, ICONS, IconChip, PillEyebrow } from "./parts";

type Props = { locale: TemplateLocale };

const RATINGS = [1, 2, 3, 4, 5] as const;

/** La copie élargit `rating` à `number` : on le ramène à la plage 1 à 5. */
function toReview(item: {
  quote: string;
  name: string;
  detail: string;
  rating: number;
  ratingLabel: string;
}): TestimonialMarqueeItem {
  const rating = RATINGS.find((value) => value === item.rating);
  const base = { quote: item.quote, name: item.name, detail: item.detail };

  return rating ? { ...base, rating, ratingLabel: item.ratingLabel } : base;
}

export function Steps({ locale }: Props) {
  const page = getTemplateCopy(reparationMobile, locale).home.steps;

  return (
    <TemplateSection
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="subtitle"
      description={page.description}
      className={HEADING_CLASS}
    >
      <ol className="grid gap-5 lg:grid-cols-3">
        {page.items.map((item, index) => (
          <li key={item.title}>
            <TemplateCard
              title={item.title}
              titleAs="h3"
              elevation="raised"
              className="h-full"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <IconChip icon={item.icon} />
                <span
                  aria-hidden="true"
                  className="font-tpl-display text-tpl-3xl leading-none font-extrabold text-tpl-line"
                >
                  {index + 1}
                </span>
              </div>
              {item.text}
            </TemplateCard>
          </li>
        ))}
      </ol>
    </TemplateSection>
  );
}

export function Popular({ locale }: Props) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const page = copy.home.popular;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="subtitle"
      description={page.description}
      className={HEADING_CLASS}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {page.items.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <li key={item.title}>
              <TemplateCard
                title={item.title}
                titleAs="h3"
                interactive
                className="flex h-full flex-col bg-tpl-surface"
              >
                <Icon aria-hidden="true" className="mb-4 size-6 text-tpl-ink" />
                <p>{item.text}</p>
                <p className="mt-6 text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
                  {page.fromLabel}
                </p>
                <p className="font-tpl-display text-tpl-xl font-extrabold text-tpl-ink">
                  {item.price}
                </p>
                <p className="mt-1 flex items-center gap-2 text-tpl-xs">
                  <Clock aria-hidden="true" className="size-4" />
                  <span>
                    {page.timeLabel} {item.time}
                  </span>
                </p>
              </TemplateCard>
            </li>
          );
        })}
      </ul>
      <div className="mt-10">
        <TemplateLink
          href={templateHref(locale, reparationMobile.paths.reparations)}
          shape="pill"
        >
          {copy.cta.allPrices}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}

export function Proof({ locale }: Props) {
  const page = getTemplateCopy(reparationMobile, locale).home.proof;

  return (
    <TemplateSection
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="subtitle"
      description={page.description}
      className={HEADING_CLASS}
    >
      <TestimonialsMarquee
        label={page.label}
        items={page.items.map(toReview)}
        durationSeconds={55}
        tone="surface"
      />
    </TemplateSection>
  );
}

export function HomeService({ locale }: Props) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const page = copy.home.homeService;

  return (
    <TemplateSection tone="inverse" className={HEADING_CLASS}>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <TemplateHeading
            eyebrow={<PillEyebrow>{page.eyebrow}</PillEyebrow>}
            title={page.title}
            description={page.description}
            scale="title"
          />
          <ul className="mt-8 grid gap-5">
            {page.points.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <IconChip icon={point.icon} />
                <div>
                  <p className="text-tpl-base font-semibold">{point.title}</p>
                  <p className="text-tpl-sm text-tpl-ink-muted">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={templateHref(locale, reparationMobile.paths.contact)}
              shape="pill"
              variant="inverse"
            >
              {copy.cta.bookHome}
            </TemplateLink>
            <TemplateLink
              href={templateHref(locale, reparationMobile.paths.faq)}
              shape="pill"
              variant="outline"
              icon={false}
              className="border-tpl-ink/60"
            >
              {copy.cta.readFaq}
            </TemplateLink>
          </div>
        </div>
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/3"
          sizes="(min-width: 1024px) 560px, 100vw"
          className="shadow-tpl-lg"
        />
      </div>
    </TemplateSection>
  );
}

export function Brands({ locale }: Props) {
  const page = getTemplateCopy(reparationMobile, locale).home.brands;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="subtitle"
      description={page.description}
      className={HEADING_CLASS}
    >
      <ul aria-label={page.label} className="flex flex-wrap gap-3">
        {page.items.map((brand) => (
          <li
            key={brand}
            className="rounded-tpl-pill border border-tpl-line bg-tpl-surface px-5 py-2.5 text-tpl-sm font-semibold"
          >
            {brand}
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
