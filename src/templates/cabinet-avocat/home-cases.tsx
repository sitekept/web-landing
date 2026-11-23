import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { cabinetAvocat } from "@/content/templates/cabinet-avocat";
import { getTemplateCopy } from "@/content/templates/types";

import { LABEL, LINK_OUTLINE } from "./parts";

/** Trois situations types (les trois premières de la page « cas types »), sur fond blanc. */
export function HomeCases({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(cabinetAvocat, locale);
  const { cases } = copy.home;

  return (
    <TemplateSection
      density="compact"
      tone="raised"
      eyebrow={cases.eyebrow}
      title={cases.title}
      description={cases.description}
    >
      <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
        {copy.casTypes.items.slice(0, 3).map((item) => (
          <li key={item.title} className="border-t-2 border-tpl-ink pt-5">
            <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {item.title}
            </h3>
            <p className="mt-3 text-tpl-sm text-pretty text-tpl-ink-muted">
              {item.situation}
            </p>
            <p className={`${LABEL} mt-5`}>{copy.casTypes.outcomeLabel}</p>
            <p className="mt-1 text-tpl-sm font-semibold">{item.outcome}</p>
          </li>
        ))}
      </ul>
      <TemplateLink
        href={templateHref(locale, cabinetAvocat.paths.casTypes)}
        variant="outline"
        icon={false}
        className={`mt-12 ${LINK_OUTLINE}`}
      >
        {cases.more}
      </TemplateLink>
    </TemplateSection>
  );
}
