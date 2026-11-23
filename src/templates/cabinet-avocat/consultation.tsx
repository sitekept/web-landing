import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { ConsultationAside } from "./consultation-aside";
import { ConsultationForm } from "./consultation-form";
import { LABEL } from "./parts";

/**
 * Page « consultation » (rendez-vous) : titre `h1`, formulaire à gauche (7
 * colonnes) et première consultation à droite (5), puis les pièces utiles et
 * la suite des événements.
 */
export function ConsultationView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(cabinetAvocat, locale).consultation;

  return (
    <>
      <TemplateSection density="compact" className="border-b border-tpl-line">
        <TemplateHeading
          as="h1"
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ConsultationForm locale={locale} />
          </div>
          <div className="lg:col-span-5">
            <ConsultationAside locale={locale} />
          </div>
        </div>
      </TemplateSection>

      <TemplateSection density="compact" tone="raised">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {page.documents.title}
            </h2>
            <p className="mt-3 text-tpl-sm text-tpl-ink-muted">
              {page.documents.intro}
            </p>
            <ul className="mt-6 divide-y divide-tpl-line border-y border-tpl-line text-tpl-sm">
              {page.documents.items.map((item) => (
                <li key={item} className="py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {page.next.title}
            </h2>
            <ol className="mt-6 divide-y divide-tpl-line border-y border-tpl-line">
              {page.next.steps.map((step, index) => (
                <li key={step.title} className="flex gap-5 py-5">
                  <span
                    aria-hidden="true"
                    className={`${LABEL} w-7 shrink-0 pt-1`}
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-tpl-sm text-pretty text-tpl-ink-muted">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </TemplateSection>
    </>
  );
}
