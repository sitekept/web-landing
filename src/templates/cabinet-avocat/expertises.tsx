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
 * Page « expertises » : introduction avec photo de fauteuils, puis un bloc par
 * domaine (titre à gauche sur 4 colonnes, contenu à droite sur 8), enfin
 * l'appel au rendez-vous.
 */
export function ExpertisesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(cabinetAvocat, locale).expertises;

  return (
    <>
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={cabinetAvocatImages.chairs}
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
              <div className="lg:col-span-8">
                <p className="max-w-tpl-measure text-tpl-base text-pretty">
                  {item.summary}
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className={LABEL}>{page.topicsLabel}</h3>
                    <ul className="mt-3 space-y-2 text-tpl-sm text-tpl-ink-muted">
                      {item.topics.map((topic) => (
                        <li
                          key={topic}
                          className="border-l-2 border-tpl-line pl-3"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className={LABEL}>{page.feesLabel}</h3>
                    <p className="mt-3 text-tpl-sm text-pretty">{item.fees}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </TemplateSection>
      <ClosingCta locale={locale} />
    </>
  );
}
