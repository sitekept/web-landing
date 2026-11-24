import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  cabinetAvocat,
  cabinetAvocatImages,
} from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingCta, LABEL, PageIntro } from "./parts";

/**
 * Page « cas types » : introduction avec photo de couloir vitré, puis quatre
 * dossiers (situation, ce qui a été fait, délai et coût), enfin l'appel au
 * rendez-vous.
 */
export function CasTypesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(cabinetAvocat, locale).casTypes;

  return (
    <>
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={cabinetAvocatImages.corridor}
        imageAlt={page.imageAlt}
      />
      <TemplateSection density="compact" tone="raised">
        <ol className="divide-y divide-tpl-line border-y border-tpl-line">
          {page.items.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-4">
                <p aria-hidden="true" className={LABEL}>
                  0{index + 1}
                </p>
                <h2 className="mt-3 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
                  {item.title}
                </h2>
              </div>
              <dl className="grid gap-6 text-tpl-sm md:grid-cols-3 lg:col-span-8">
                <div>
                  <dt className={LABEL}>{page.situationLabel}</dt>
                  <dd className="mt-2 text-pretty text-tpl-ink-muted">
                    {item.situation}
                  </dd>
                </div>
                <div>
                  <dt className={LABEL}>{page.actionLabel}</dt>
                  <dd className="mt-2 text-pretty text-tpl-ink-muted">
                    {item.action}
                  </dd>
                </div>
                <div>
                  <dt className={LABEL}>{page.outcomeLabel}</dt>
                  <dd className="mt-2 font-semibold">{item.outcome}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-tpl-sm text-tpl-ink-muted">{page.note}</p>
      </TemplateSection>
      <ClosingCta locale={locale} />
    </>
  );
}
