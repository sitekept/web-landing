import {
  TemplateCard,
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { reparationMobile } from "@/content/templates/reparation-mobile";
import { getTemplateCopy } from "@/content/templates/types";
import { templateHref } from "@/lib/template-href";

import {
  CallBand,
  HEADING_CLASS,
  ICONS,
  IconChip,
  PageHero,
  PillEyebrow,
  QuoteCallActions,
} from "./parts";

export function ReparationsView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(reparationMobile, locale);
  const page = copy.reparations;

  return (
    <>
      <PageHero
        heading={
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={<PillEyebrow>{page.hero.eyebrow}</PillEyebrow>}
            title={page.hero.title}
            description={page.hero.description}
          />
        }
        actions={<QuoteCallActions locale={locale} />}
        media={
          <TemplateMedia
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            ratio="4/3"
            sizes="(min-width: 1024px) 512px, calc(96vw - 19px)"
            priority
            className="shadow-tpl-lg"
          />
        }
      />

      <TemplateSection
        density="compact"
        className={HEADING_CLASS}
        eyebrow={page.pricing.eyebrow}
        title={page.pricing.title}
        titleScale="subtitle"
        description={page.pricing.description}
      >
        <ul className="grid gap-4">
          {page.pricing.items.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <li
                key={item.title}
                className="rounded-tpl border border-tpl-line bg-tpl-raised p-5 shadow-tpl-sm sm:p-6 md:grid md:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] md:items-center md:gap-6"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-tpl-pill bg-tpl-surface text-tpl-ink"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-tpl-display text-tpl-lg font-extrabold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-tpl-line pt-4 md:mt-0 md:contents md:border-0 md:pt-0">
                  <div>
                    <dt className="text-tpl-xs text-tpl-ink-muted">
                      {page.pricing.columns.smartphone}
                    </dt>
                    <dd className="text-tpl-base font-extrabold">
                      {item.smartphone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-tpl-xs text-tpl-ink-muted">
                      {page.pricing.columns.tablet}
                    </dt>
                    <dd className="text-tpl-base font-extrabold">
                      {item.tablet}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-tpl-xs text-tpl-ink-muted">
                      {page.pricing.columns.time}
                    </dt>
                    <dd className="text-tpl-base font-semibold">{item.time}</dd>
                  </div>
                </dl>
              </li>
            );
          })}
        </ul>
      </TemplateSection>

      <TemplateSection
        density="compact"
        tone="raised"
        className={HEADING_CLASS}
        eyebrow={page.warranty.eyebrow}
        title={page.warranty.title}
        titleScale="subtitle"
        description={page.warranty.description}
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {page.warranty.items.map((item) => (
            <li key={item.title}>
              <TemplateCard
                title={item.title}
                titleAs="h3"
                icon={<IconChip icon={item.icon} />}
                className="h-full bg-tpl-surface"
              >
                {item.text}
              </TemplateCard>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <TemplateSection
        density="compact"
        className={HEADING_CLASS}
        eyebrow={page.process.eyebrow}
        title={page.process.title}
        titleScale="subtitle"
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {page.process.steps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-4 rounded-tpl border border-tpl-line bg-tpl-raised p-5"
            >
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-tpl-pill bg-tpl-inverse text-tpl-base font-extrabold text-tpl-inverse-ink"
              >
                {index + 1}
              </span>
              <p className="text-tpl-sm">{step}</p>
            </li>
          ))}
        </ol>
      </TemplateSection>

      <CallBand
        locale={locale}
        title={page.closing.title}
        description={page.closing.description}
        secondary={{
          href: templateHref(locale, reparationMobile.paths.contact),
          label: copy.cta.quote,
        }}
      />
    </>
  );
}
