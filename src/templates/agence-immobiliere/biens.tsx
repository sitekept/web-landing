import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplatePanel,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

import { ListingCard } from "./biens-card";
import { BiensVisit } from "./biens-visit";
import { TINT } from "./parts";

export function BiensView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.biens;
  const href = (path: string) => templateHref(locale, path);

  return (
    <>
      <TemplateSection density="compact">
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={page.hero.eyebrow}
            title={page.hero.title}
            description={page.hero.description}
          />
          <TemplatePanel className={TINT}>
            <h2 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {page.hero.checks.title}
            </h2>
            <ul className="mt-4 space-y-3 text-tpl-sm">
              {page.hero.checks.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-tpl-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </TemplatePanel>
        </div>
      </TemplateSection>

      <TemplateSection
        tone="raised"
        eyebrow={page.list.eyebrow}
        title={page.list.title}
        description={page.list.description}
      >
        <ul
          role="list"
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {page.list.items.map((item) => (
            <li key={item.title} className="flex">
              <ListingCard
                item={item}
                opinionLabel={page.list.opinionLabel}
                href={href(
                  item.target === "bien"
                    ? agenceImmobiliere.paths.bien
                    : agenceImmobiliere.paths.contact
                )}
              />
            </li>
          ))}
        </ul>
      </TemplateSection>

      <BiensVisit locale={locale} />

      <TemplateSection
        eyebrow={page.search.eyebrow}
        title={page.search.title}
        description={page.search.text}
      >
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <ul className="space-y-3 text-tpl-base">
            {page.search.criteria.map((criterion) => (
              <li
                key={criterion}
                className="flex items-start gap-3 border-b border-tpl-line pb-3"
              >
                <Check
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-tpl-accent"
                />
                {criterion}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <TemplateLink href={href(agenceImmobiliere.paths.contact)}>
              {copy.cta.describeSearch}
            </TemplateLink>
            <TemplateLink href={copy.phone.href} variant="outline" icon={false}>
              {copy.phone.label}
            </TemplateLink>
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
