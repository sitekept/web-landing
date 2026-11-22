import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge } from "./parts";

/**
 * Forfaits : carte à points de conduite (élément 21st.dev `price-list`), trois
 * groupes (entretien, freinage, pneus). Titres de groupe en `h3`, sous le `h2`
 * de la section.
 */
export function PricingSection({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).prestations.pricing;

  return (
    <TemplateSection
      id="forfaits"
      tone="inverse"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      className="scroll-mt-20"
    >
      <PriceList groups={page.groups} titleAs="h3" columns={2} />
      <p className="mt-10 max-w-tpl-measure border-l-4 border-tpl-accent pl-4 text-tpl-sm text-tpl-ink-muted">
        {page.note}
      </p>
    </TemplateSection>
  );
}

/** Preuve : ce que contient chaque facture, quatre pictogrammes. */
export function InvoiceSection({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).prestations.invoice;

  return (
    <TemplateSection>
      <TemplateHeading
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {page.items.map((item) => (
          <li key={item.title} className="border-t-4 border-tpl-ink pt-5">
            <IconBadge icon={item.icon} />
            <h3 className="mt-4 font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
              {item.title}
            </h3>
            <p className="mt-2 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
