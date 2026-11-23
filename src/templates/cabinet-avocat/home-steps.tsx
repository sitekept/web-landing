import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { LABEL } from "./parts";

/** Méthode en trois étapes sur fond encre : numéro, délai, texte. */
export function HomeSteps({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(cabinetAvocat, locale);
  const { steps } = copy.home;

  return (
    <TemplateSection
      density="compact"
      tone="inverse"
      eyebrow={steps.eyebrow}
      title={steps.title}
      description={steps.description}
    >
      <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {copy.methode.items.map((item, index) => (
          <li key={item.title} className="border-t border-tpl-ink/40 pt-6">
            <p aria-hidden="true" className={LABEL}>
              0{index + 1}
            </p>
            <h3 className="mt-3 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {item.title}
            </h3>
            <p className="mt-1 text-tpl-sm font-semibold text-tpl-eyebrow">
              {item.delay}
            </p>
            <p className="mt-4 text-tpl-sm text-pretty text-tpl-ink-muted">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
      <TemplateLink
        href={templateHref(locale, cabinetAvocat.paths.methode)}
        variant="inverse"
        icon={false}
        className="mt-12"
      >
        {steps.more}
      </TemplateLink>
    </TemplateSection>
  );
}
