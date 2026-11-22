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
import { coffeeShop } from "@/content/templates/coffee-shop";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

type Props = { locale: TemplateLocale };

export function ReviewsSection({ locale }: Props) {
  const page = getTemplateCopy(coffeeShop, locale).home.reviews;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <TestimonialsMarquee
        label={page.label}
        tone="surface"
        durationSeconds={60}
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

/** Rupture : fond inverse, grande image de la salle et de la terrasse. */
export function TerraceSection({ locale }: Props) {
  const page = getTemplateCopy(coffeeShop, locale).home.terrace;

  return (
    <TemplateSection tone="inverse" density="spacious">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <ul className="mt-10 space-y-5">
            {page.points.map((point) => {
              const Icon = ICONS[point.icon];

              return (
                <li key={point.title} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-tpl bg-tpl-ink text-tpl-surface"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold">{point.title}</p>
                    <p className="text-tpl-sm text-tpl-ink-muted">
                      {point.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/3"
          sizes="(min-width: 1280px) 720px, (min-width: 1024px) 55vw, 100vw"
          className="lg:aspect-[5/4]"
        />
      </div>
    </TemplateSection>
  );
}

/** Dernière section : horaires, adresse et carte « groupes et privatisation ». */
export function VisitSection({ locale }: Props) {
  const copy = getTemplateCopy(coffeeShop, locale);
  const page = copy.home.visit;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <TemplateCard
          title={copy.common.hoursLabel}
          titleAs="h3"
          elevation="flat"
        >
          <dl className="mt-1 divide-y divide-tpl-line">
            {copy.common.hoursShort.map((row) => (
              <div key={row.day} className="flex justify-between gap-4 py-2.5">
                <dt>{row.day}</dt>
                <dd className="font-bold whitespace-nowrap text-tpl-ink tabular-nums">
                  {row.time}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-tpl-xs">{copy.common.kitchenNote}</p>
        </TemplateCard>

        <TemplateCard title={page.addressLabel} titleAs="h3" elevation="flat">
          <p className="mt-1 text-tpl-base text-tpl-ink">
            {copy.common.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-5">
            <a
              href={copy.phone.href}
              className="inline-flex min-h-11 items-center font-extrabold text-tpl-ink tabular-nums underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
            >
              {copy.phone.label}
            </a>
          </p>
          <p className="text-tpl-ink">{copy.common.email}</p>
        </TemplateCard>

        <div data-tone="inverse" className="flex">
          <TemplateCard
            title={page.groupTitle}
            titleAs="h3"
            elevation="flat"
            className="flex w-full flex-col border-tpl-ink bg-tpl-inverse"
          >
            <p>{page.groupText}</p>
            <div className="mt-6">
              <TemplateLink
                href={templateHref(locale, coffeeShop.paths.infos)}
                variant="inverse"
                shape="pill"
              >
                {copy.cta.group}
              </TemplateLink>
            </div>
          </TemplateCard>
        </div>
      </div>
    </TemplateSection>
  );
}
