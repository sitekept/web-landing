import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  clampTestimonialRating,
  TestimonialsMarquee,
} from "@/components/template-kit/vendor/testimonials-marquee";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

import { WellnessNotice } from "./parts";

/** Preuve : bande d'avis défilante, posée sur le fond sombre du site. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const page = copy.home.proof;
  const items = page.items.map((item) => ({
    quote: item.quote,
    name: item.name,
    detail: item.detail,
    rating: item.rating,
    ratingLabel: copy.common.ratingLabel.replace(
      "{rating}",
      String(clampTestimonialRating(item.rating))
    ),
  }));

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <TestimonialsMarquee
        label={page.label}
        items={items}
        tone="surface"
        durationSeconds={70}
      />
    </TemplateSection>
  );
}

/** Infos pratiques : horaires, avant la venue, coordonnées. */
export function HomePractical({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const page = copy.home.practical;
  const rows = [
    {
      Icon: Phone,
      label: page.phoneLabel,
      value: copy.phone.label,
      href: copy.phone.href,
    },
    { Icon: Mail, label: page.emailLabel, value: copy.common.email },
    { Icon: MapPin, label: page.addressLabel, value: copy.common.address },
    { Icon: MapPin, label: page.accessLabel, value: copy.common.access },
  ];

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <TemplateCard title={page.hoursTitle} elevation="flat">
          <dl className="space-y-3">
            {copy.common.hours.map((row) => (
              <div
                key={row.day}
                className="flex items-center justify-between gap-4 border-b border-tpl-line pb-3 last:border-b-0 last:pb-0"
              >
                <dt className="flex items-center gap-2">
                  <Clock
                    aria-hidden="true"
                    className="size-4 shrink-0 text-tpl-accent"
                  />
                  {row.day}
                </dt>
                <dd className="text-tpl-ink tabular-nums">{row.time}</dd>
              </div>
            ))}
          </dl>
        </TemplateCard>

        <TemplateCard title={page.visitTitle} elevation="flat">
          <ul className="space-y-3">
            {page.visit.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-tpl-accent"
                />
                {line}
              </li>
            ))}
          </ul>
        </TemplateCard>

        <TemplateCard title={page.contactTitle} elevation="flat">
          <dl className="space-y-4">
            {rows.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-tpl-accent"
                />
                <div>
                  <dt className="text-tpl-xs text-tpl-ink-muted">{label}</dt>
                  <dd className="text-tpl-ink">
                    {href ? (
                      <a
                        href={href}
                        className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </TemplateCard>
      </div>
      <div className="mt-10">
        <WellnessNotice>{copy.common.wellnessNotice}</WellnessNotice>
      </div>
    </TemplateSection>
  );
}
