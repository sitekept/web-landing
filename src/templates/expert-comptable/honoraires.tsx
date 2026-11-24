import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { HonorairesFaq } from "./honoraires-faq";
import { HonorairesIncluded, HonorairesMethod } from "./honoraires-sections";
import { ClosingCta, PageHero } from "./parts";

/** Honoraires : tarifs à points de conduite, compris / hors forfait, méthode, FAQ. */
export function HonorairesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(expertComptable, locale).honorairesPage;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        image={page.hero.image}
      />
      <TemplateSection
        tone="raised"
        eyebrow={page.prices.eyebrow}
        title={page.prices.title}
        description={page.prices.description}
      >
        <PriceList groups={page.prices.groups} columns={2} titleAs="h3" />
        <p className="mt-10 border-t border-tpl-line pt-4 text-tpl-sm text-tpl-ink-muted">
          {page.prices.footnote}
        </p>
      </TemplateSection>
      <HonorairesIncluded locale={locale} />
      <HonorairesMethod locale={locale} />
      <HonorairesFaq locale={locale} />
      <ClosingCta
        locale={locale}
        title={page.closing.title}
        text={page.closing.text}
      />
    </>
  );
}
