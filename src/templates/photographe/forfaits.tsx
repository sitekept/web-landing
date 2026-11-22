import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

import { ForfaitsIncluded, ForfaitsSteps } from "./forfaits-sections";
import { ClosingBand } from "./parts";

/**
 * Forfaits : hero court, carte des prix (liste à points de conduite), ce qui
 * est inclus, déroulé en quatre temps, bande de devis sur mesure.
 */
export function ForfaitsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(photographe, locale).forfaits;

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        titleScale="title"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        className="pb-6 lg:pb-8"
      />
      <TemplateSection
        density="compact"
        title={page.offer.title}
        titleScale="subtitle"
        description={page.offer.description}
      >
        <PriceList groups={page.offer.groups} columns={2} titleAs="h3" />
        <p className="mt-10 border-t border-tpl-line pt-4 text-tpl-xs text-tpl-ink-muted">
          {page.offer.footnote}
        </p>
      </TemplateSection>
      <ForfaitsIncluded locale={locale} />
      <ForfaitsSteps locale={locale} />
      <ClosingBand
        locale={locale}
        title={page.custom.title}
        text={page.custom.text}
      />
    </>
  );
}
