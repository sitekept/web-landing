import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand } from "./closing";
import { CheckList, IconBadge, PageIntro } from "./parts";

/**
 * Technologies : ouverture, quatre équipements (titre à gauche, description
 * et bénéfice patient à droite, 4 / 8 colonnes), puis le protocole d'hygiène
 * (titre et coches, 1 / 1) sur fond teinté.
 */
export function TechnologiesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).technologies;

  return (
    <>
      <PageIntro {...page.intro} />

      <TemplateSection>
        <ul className="divide-y divide-tpl-line border-y border-tpl-line">
          {page.items.map((item) => (
            <li
              key={item.title}
              className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-14"
            >
              <div className="lg:col-span-4">
                <IconBadge icon={item.icon} />
                <h2 className="mt-5 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
                  {item.text}
                </p>
                <p className="mt-5 max-w-tpl-measure text-tpl-sm">
                  <span className="font-semibold">{page.benefitLabel}</span>
                  <span className="text-tpl-ink-muted"> · {item.benefit}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </TemplateSection>

      <TemplateSection tone="tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <TemplateHeading
            scale="subtitle"
            eyebrow={page.hygiene.eyebrow}
            title={page.hygiene.title}
          />
          <CheckList items={page.hygiene.items} />
        </div>
      </TemplateSection>

      <ClosingBand locale={locale} />
    </>
  );
}
