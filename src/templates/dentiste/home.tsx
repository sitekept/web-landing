import { CalendarDays } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { ICONS } from "./parts";

export function HomeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(dentiste, locale);
  const { paths } = dentiste;
  const page = copy.home;
  const href = (path: string) => templateHref(locale, path);

  return (
    <>
      <section className="border-b border-tpl-line bg-[linear-gradient(135deg,color-mix(in_oklch,var(--tpl-accent)_8%,var(--tpl-surface))_0%,var(--tpl-surface)_38%,var(--tpl-raised)_38%,var(--tpl-raised)_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={
                <span className="inline-flex rounded-tpl border border-tpl-line bg-tpl-raised px-4 py-2">
                  {page.hero.eyebrow}
                </span>
              }
              title={page.hero.title}
              description={page.hero.description}
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TemplateLink href={href(paths.rendezVous)}>
                {copy.cta.book}
              </TemplateLink>
              <TemplateLink
                href={href(paths.premiereVisite)}
                variant="outline"
                className="bg-tpl-raised"
              >
                {copy.cta.prepareFirstVisit}
              </TemplateLink>
            </div>

            <ul className="mt-10 grid gap-3 md:grid-cols-2">
              {page.hero.routes.map((route, index) => (
                <li key={route}>
                  <TemplatePanel className="h-full px-4 py-4">
                    <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                      {page.hero.routesLabel} 0{index + 1}
                    </p>
                    <p className="mt-2 text-tpl-sm font-medium">{route}</p>
                  </TemplatePanel>
                </li>
              ))}
            </ul>
          </div>

          <TemplatePanel className="self-start p-5 shadow-tpl-lg">
            <div
              data-tone="inverse"
              className="rounded-tpl bg-tpl-inverse p-5 text-tpl-ink"
            >
              <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                {page.booking.eyebrow}
              </p>
              <p className="mt-4 text-tpl-xl leading-tpl-display font-semibold">
                {page.booking.slot}
              </p>
              <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
                {page.booking.text}
              </p>
            </div>

            <ul className="mt-4 grid gap-3">
              {page.booking.points.map((point) => (
                <li
                  key={point}
                  className="rounded-tpl border border-tpl-line bg-tpl-surface px-4 py-3 text-tpl-sm text-tpl-ink-muted"
                >
                  {point}
                </li>
              ))}
            </ul>

            <TemplateLink
              href={href(paths.rendezVous)}
              icon={<CalendarDays aria-hidden="true" className="size-4" />}
              className="mt-4 w-full"
            >
              {copy.cta.book}
            </TemplateLink>
          </TemplatePanel>
        </div>
      </section>

      <TemplateSection
        density="compact"
        eyebrow={page.signal.eyebrow}
        title={page.signal.title}
        titleScale="subtitle"
        description={page.signal.description}
      >
        <ul className="grid gap-4 lg:grid-cols-3">
          {page.signal.items.map((item) => (
            <li key={item}>
              <TemplatePanel className="h-full px-5 py-5 text-tpl-sm text-tpl-ink-muted shadow-tpl-sm">
                {item}
              </TemplatePanel>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <TemplateSection
        density="compact"
        tone="raised"
        eyebrow={page.technologies.eyebrow}
        title={page.technologies.title}
        titleScale="subtitle"
        description={page.technologies.description}
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {page.technologies.cards.map((card) => {
              const Icon = ICONS[card.icon];

              return (
                <TemplateCard key={card.title} title={card.title} titleAs="h3">
                  <div
                    data-tone="inverse"
                    className="mb-4 flex size-11 items-center justify-center rounded-tpl bg-tpl-inverse text-tpl-ink"
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  {card.text}
                </TemplateCard>
              );
            })}
          </div>

          <div
            data-tone="inverse"
            className="rounded-tpl border border-tpl-line bg-tpl-inverse p-6 text-tpl-ink"
          >
            <TemplateHeading
              as="h2"
              scale="subtitle"
              eyebrow={page.technologies.decision.eyebrow}
              title={page.technologies.decision.title}
            />
            <ul className="mt-8 space-y-3">
              {page.technologies.decision.items.map((item) => (
                <li
                  key={item}
                  className="rounded-tpl border border-tpl-line bg-tpl-raised px-4 py-4 text-tpl-sm text-tpl-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TemplateSection>

      <TemplateSection
        density="compact"
        eyebrow={page.journey.eyebrow}
        title={page.journey.title}
        titleScale="subtitle"
        description={page.journey.description}
      >
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <div
            data-tone="inverse"
            className="rounded-tpl bg-tpl-inverse p-6 text-tpl-ink"
          >
            <p className="text-tpl-sm text-tpl-ink-muted">
              {page.journey.intro}
            </p>
          </div>
          <ol className="space-y-4 border-l border-tpl-line pl-6">
            {page.journey.steps.map((step, index) => (
              <li key={step}>
                <TemplatePanel className="relative border-transparent p-5">
                  <span
                    aria-hidden="true"
                    className="absolute top-6 left-[-36px] flex size-5 items-center justify-center rounded-full border border-tpl-line bg-tpl-surface text-[10px] font-semibold"
                  >
                    {index + 1}
                  </span>
                  <p className="text-tpl-sm text-tpl-ink-muted">{step}</p>
                </TemplatePanel>
              </li>
            ))}
          </ol>
        </div>
      </TemplateSection>

      <TemplateSection
        density="compact"
        tone="raised"
        eyebrow={page.cabinet.eyebrow}
        title={page.cabinet.title}
        titleScale="subtitle"
        description={page.cabinet.description}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {page.cabinet.cards.map((card) => (
            <TemplateCard key={card.title} title={card.title}>
              {card.text}
            </TemplateCard>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TemplateLink href={href(paths.technologies)}>
            {copy.cta.seeTechnologies}
          </TemplateLink>
          <TemplateLink
            href={href(paths.contact)}
            variant="outline"
            className="bg-tpl-raised"
          >
            {copy.cta.visit}
          </TemplateLink>
        </div>
      </TemplateSection>
    </>
  );
}
