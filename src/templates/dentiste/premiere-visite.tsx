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
 * Première visite : ouverture avec photo, trois temps (avant, pendant, après)
 * en lignes 4 / 8 colonnes, puis les questions fréquentes en deux colonnes
 * (1 / 1) sur fond teinté.
 */
export function PremiereVisiteView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).premiereVisite;

  return (
    <>
      <PageIntro {...page.intro} />

      <TemplateSection>
        <ol
          aria-label={page.stepsLabel}
          className="divide-y divide-tpl-line border-y border-tpl-line"
        >
          {page.steps.map((step) => (
            <li
              key={step.title}
              className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-14"
            >
              <div className="lg:col-span-4">
                <IconBadge icon={step.icon} />
                <h2 className="mt-5 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {step.title}
                </h2>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                  {step.text}
                </p>
              </div>
              <CheckList items={step.points} className="lg:col-span-8" />
            </li>
          ))}
        </ol>
      </TemplateSection>

      <TemplateSection tone="tint">
        <TemplateHeading
          scale="subtitle"
          eyebrow={page.faq.eyebrow}
          title={page.faq.title}
        />
        <dl className="mt-10 grid gap-x-14 gap-y-8 lg:grid-cols-2">
          {page.faq.items.map((item) => (
            <div key={item.question}>
              <dt className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {item.question}
              </dt>
              <dd className="mt-2 text-tpl-sm text-tpl-ink-muted">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </TemplateSection>

      <ClosingBand locale={locale} />
    </>
  );
}
