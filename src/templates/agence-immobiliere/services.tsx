import { Check } from "lucide-react";

import {
  TemplateCard,
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { AccentIcon, ClosingBand, FaqList } from "./parts";

/** Services : les deux parcours côte à côte, les services en plus, les questions fréquentes. */
export function ServicesView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.services;
  const href = (path: string) => templateHref(locale, path);
  const paths = [
    { data: page.paths.buyers, to: agenceImmobiliere.paths.biens, tone: false },
    {
      data: page.paths.sellers,
      to: agenceImmobiliere.paths.estimation,
      tone: true,
    },
  ];

  return (
    <>
      <TemplateSection density="compact">
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.paths.eyebrow}
        title={page.paths.title}
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {paths.map(({ data, to, tone }) => (
            <div
              key={data.title}
              data-tone={tone ? "inverse" : undefined}
              className="flex flex-col rounded-tpl border border-tpl-line bg-tpl-surface p-7 text-tpl-ink sm:p-9"
            >
              <AccentIcon
                icon={data.icon}
                className="size-8"
                tone={tone ? "ink" : "accent"}
              />
              <h3 className="mt-6 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                {data.title}
              </h3>
              <p className="mt-3 text-tpl-base text-tpl-ink-muted">
                {data.text}
              </p>
              <ol className="mt-6 space-y-3 text-tpl-sm">
                {data.steps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <Check
                      aria-hidden="true"
                      className={`mt-0.5 size-4 shrink-0 ${tone ? "text-tpl-ink" : "text-tpl-accent"}`}
                    />
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-auto pt-8">
                <TemplateLink
                  href={href(to)}
                  variant={tone ? "inverse" : "solid"}
                >
                  {data.cta}
                </TemplateLink>
              </div>
            </div>
          ))}
        </div>
      </TemplateSection>

      <TemplateSection
        eyebrow={page.extras.eyebrow}
        title={page.extras.title}
        description={page.extras.description}
      >
        <ul
          role="list"
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {page.extras.items.map((item) => (
            <li key={item.title} className="flex">
              <TemplateCard
                elevation="flat"
                className="w-full"
                icon={<AccentIcon icon={item.icon} />}
                title={item.title}
              >
                {item.text}
              </TemplateCard>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.faq.eyebrow}
        title={page.faq.title}
      >
        <FaqList items={page.faq.items} />
      </TemplateSection>
      <ClosingBand locale={locale} />
    </>
  );
}
