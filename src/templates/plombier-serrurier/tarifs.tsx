import {
  TemplateHeading,
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingPanel } from "./closing";
import {
  IncludedSection,
  PriceListSection,
  QuoteSection,
  SurchargesSection,
} from "./tarifs-sections";

/** Tarifs : hero et bon d'intervention, carte des prix, inclus, majorations, devis, contact. */
export function TarifsView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(plombierSerrurier, locale);
  const page = copy.tarifs;
  const ticket = page.hero.ticket;

  return (
    <>
      <TemplateSection density="compact" className="border-b border-tpl-line">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={page.hero.eyebrow}
            title={page.hero.title}
            description={page.hero.description}
          />
          <TemplatePanel className="border-2 border-dashed border-tpl-ink p-0 shadow-tpl-lg">
            <p className="border-b border-dashed border-tpl-ink px-6 py-4 text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
              {ticket.eyebrow}
            </p>
            <dl className="divide-y divide-dashed divide-tpl-ink/40 px-6">
              {ticket.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <dt className="text-tpl-sm text-tpl-ink-muted">
                    {row.label}
                  </dt>
                  <dd className="text-tpl-xl leading-none font-semibold tabular-nums">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-dashed border-tpl-ink px-6 py-4 text-tpl-xs text-tpl-ink-muted">
              {ticket.note}
            </p>
          </TemplatePanel>
        </div>
      </TemplateSection>
      <PriceListSection locale={locale} />
      <IncludedSection locale={locale} />
      <SurchargesSection locale={locale} />
      <QuoteSection locale={locale} />
      <ClosingPanel
        locale={locale}
        eyebrow={page.closing.eyebrow}
        title={page.closing.title}
        description={page.closing.description}
      />
    </>
  );
}
