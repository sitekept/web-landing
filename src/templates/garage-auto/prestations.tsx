import {
  TemplateHeading,
  type TemplateLocale,
} from "@/components/template-kit";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { PageHero } from "./parts";
import { ServiceBlocks } from "./prestations-blocks";
import { OtherWorksBand } from "./prestations-other";
import { InvoiceSection, PricingSection } from "./prestations-pricing";

export function PrestationsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).prestations;

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
        <nav aria-label={page.jumpLabel} className="mt-8">
          <ul className="flex flex-wrap gap-3">
            {page.jump.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center border-2 border-tpl-ink bg-tpl-raised px-4 text-tpl-sm font-semibold transition-colors hover:bg-tpl-ink hover:text-tpl-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>
      <ServiceBlocks locale={locale} />
      <PricingSection locale={locale} />
      <InvoiceSection locale={locale} />
      <OtherWorksBand locale={locale} />
      <ClosingBand
        locale={locale}
        title={page.closing.title}
        description={page.closing.description}
      />
    </>
  );
}
