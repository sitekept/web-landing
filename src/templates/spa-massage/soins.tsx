import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

import { SoinsAdvice } from "./soins-advice";
import { ClosingCta, PageHero } from "./parts";
import { TreatmentRow } from "./treatment-row";

/**
 * Soins : la carte complète par catégorie (massages, visage, rituels), puis la
 * bande cartes cadeaux, les conseils et les précautions.
 */
export function SoinsView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const page = copy.soins;

  return (
    <>
      <PageHero>
        <TemplateHeading
          as="h1"
          scale="title"
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          description={page.hero.description}
        />
        <nav aria-label={page.hero.jumpLabel} className="mt-8">
          <ul className="flex flex-wrap gap-3">
            {page.hero.jumps.map((jump) => (
              <li key={jump.id}>
                <TemplateLink
                  href={`#${jump.id}`}
                  variant="outline"
                  shape="pill"
                  size="sm"
                  icon={false}
                  className="min-h-11"
                >
                  {jump.label}
                </TemplateLink>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {page.categories.map((category, index) => (
        <TemplateSection
          key={category.id}
          id={category.id}
          tone={index % 2 === 0 ? "surface" : "raised"}
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p
                aria-hidden="true"
                className="font-tpl-display text-tpl-xl leading-tpl-display text-tpl-accent"
              >
                {category.number}
              </p>
              <TemplateHeading
                as="h2"
                scale="title"
                title={category.title}
                description={category.intro}
                className="mt-3"
              />
            </div>
            <ul className="divide-y divide-tpl-line border-y border-tpl-line">
              {category.items.map((item) => (
                <TreatmentRow key={item.name} item={item} />
              ))}
            </ul>
          </div>
        </TemplateSection>
      ))}

      <TemplateSection id={page.giftBand.id} tone="inverse" density="compact">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <TemplateHeading
            as="h2"
            scale="subtitle"
            title={page.giftBand.title}
            description={page.giftBand.text}
          />
          <TemplateLink
            href={templateHref(locale, spaMassage.paths.reservation)}
            variant="inverse"
            shape="pill"
            className="self-start lg:self-auto"
          >
            {copy.cta.giftCard}
          </TemplateLink>
        </div>
      </TemplateSection>

      <SoinsAdvice locale={locale} />
      <ClosingCta
        locale={locale}
        title={page.closing.title}
        text={page.closing.text}
      />
    </>
  );
}
