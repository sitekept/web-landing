import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

import { ClosingBand, LABEL_CLASS, SPLIT_CLASS, SPLIT_SIZES } from "./parts";

/**
 * Formules : titre à gauche (7 colonnes) et photo à droite (5), puis quatre
 * formules en lignes : nom et contenu (7), rythme et durée (5).
 */
export function FormulesView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(menageNettoyage, locale).formules;

  return (
    <>
      <TemplateSection density="compact">
        <div className={`${SPLIT_CLASS} lg:items-center`}>
          <div className="lg:col-span-7">
            <TemplateHeading
              as="h1"
              scale="title"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />
          </div>
          <div className="lg:col-span-5">
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="4/3"
              sizes={SPLIT_SIZES}
              priority
              className="lg:aspect-[4/5]"
            />
          </div>
        </div>
      </TemplateSection>
      <TemplateSection density="regular" tone="raised">
        <ul className="divide-y divide-tpl-line border-y border-tpl-line">
          {page.items.map((item) => (
            <li key={item.title} className={`${SPLIT_CLASS} py-8`}>
              <div className="lg:col-span-7">
                <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h2>
                <p className="mt-1 text-tpl-sm font-semibold">
                  {item.audience}
                </p>
                <p className="mt-3 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
                  {item.text}
                </p>
              </div>
              <dl className="lg:col-span-5">
                <dt className={LABEL_CLASS}>{page.rhythmLabel}</dt>
                <dd className="mt-2 text-tpl-base font-semibold">
                  {item.rhythm}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </TemplateSection>
      <ClosingBand locale={locale} />
    </>
  );
}
