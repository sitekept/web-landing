import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { CheckList, IconBadge, PageIntro } from "./parts";
import { PricesTable } from "./soins-prices";

/**
 * Soins : ouverture, quatre familles de soins (titre et tarif à gauche,
 * description et gestes à droite, 4 / 8 colonnes), puis tarifs et prise en
 * charge.
 */
export function SoinsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).soins;

  return (
    <>
      <PageIntro {...page.intro} />

      <TemplateSection>
        <ul
          aria-label={page.treatmentsLabel}
          className="divide-y divide-tpl-line border-y border-tpl-line"
        >
          {page.treatments.map((item) => (
            <li
              key={item.title}
              className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-14"
            >
              <div className="lg:col-span-4">
                <IconBadge icon={item.icon} />
                <h2 className="mt-5 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h2>
                <p className="mt-2 text-tpl-sm font-semibold tabular-nums">
                  {item.price}
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
                  {item.text}
                </p>
                <CheckList items={item.points} className="mt-6" />
              </div>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <PricesTable locale={locale} />
      <ClosingBand locale={locale} />
    </>
  );
}
