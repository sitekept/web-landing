import { Clock } from "lucide-react";

import {
  TemplateCard,
  TemplateLink,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy } from "@/content/templates/types";
import { templateHref } from "@/lib/template-href";

import { ICONS, IconChip } from "./icons";
import { HEADING_CLASS } from "./parts";

type Props = { locale: TemplateLocale };

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
              icon={
                <div className="flex items-center justify-between gap-4">
                  <IconChip icon={item.icon} />
                  <span
                    aria-hidden="true"
                    className="font-tpl-display text-tpl-3xl leading-none font-extrabold text-tpl-line"
                  >
                    {index + 1}
                  </span>
                </div>
              }
            >
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
                icon={
                  <Icon aria-hidden="true" className="size-6 text-tpl-ink" />
                }
                iconPosition="inline"
                className="flex h-full flex-col bg-tpl-surface"
              >
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
        items={page.items}
        durationSeconds={55}
        tone="surface"
      />
    </TemplateSection>
  );
}
