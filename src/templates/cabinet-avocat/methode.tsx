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
 * Page « méthode » : introduction avec photo de poste de travail, trois étapes
 * détaillées (délai, ce que nous demandons, ce que vous recevez), quatre
 * engagements, puis l'appel au rendez-vous.
 */
export function MethodeView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(cabinetAvocat, locale).methode;

  return (
    <>
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={cabinetAvocatImages.desk}
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
                <p className={LABEL}>
                  <span aria-hidden="true">0{index + 1} · </span>
                  {item.delay}
                </p>
                <h2 className="mt-3 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-tpl-measure text-tpl-base text-pretty">
                  {item.text}
                </p>
                <dl className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="bg-tpl-surface p-5">
                    <dt className={LABEL}>{page.askLabel}</dt>
                    <dd className="mt-2 text-tpl-sm text-pretty text-tpl-ink-muted">
                      {item.ask}
                    </dd>
                  </div>
                  <div className="bg-tpl-surface p-5">
                    <dt className={LABEL}>{page.getLabel}</dt>
                    <dd className="mt-2 text-tpl-sm text-pretty text-tpl-ink-muted">
                      {item.get}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </TemplateSection>
      <TemplateSection density="compact" title={page.pledgesTitle}>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {page.pledges.map((pledge) => (
            <li key={pledge.title} className="border-t-2 border-tpl-ink pt-5">
              <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
                {pledge.title}
              </h3>
              <p className="mt-3 text-tpl-sm text-pretty text-tpl-ink-muted">
                {pledge.text}
              </p>
            </li>
          ))}
        </ul>
      </TemplateSection>
      <ClosingCta locale={locale} />
    </>
  );
}
