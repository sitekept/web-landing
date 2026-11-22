import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

import { LineIcon, Plate } from "./parts";

/** Preuve : le socle inclus dans chaque forfait, avec une image verticale. */
export function ForfaitsIncluded({ locale }: { locale: TemplateLocale }) {
  const { included } = getTemplateCopy(photographe, locale).forfaits;

  return (
    <TemplateSection tone="raised">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <Plate
          className="mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none"
          src={included.image.src}
          alt={included.image.alt}
          ratio="4/5"
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 32vw, 90vw"
        />
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {included.eyebrow}
          </p>
          <h2 className="mt-4 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
            {included.title}
          </h2>
          <p className="mt-5 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
            {included.description}
          </p>
          <ul
            role="list"
            className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2"
          >
            {included.items.map((item) => (
              <li key={item.title} className="border-t border-tpl-line pt-5">
                <LineIcon icon={item.icon} />
                <h3 className="mt-4 font-tpl-display text-tpl-base leading-tpl-display font-(weight:--tpl-display-weight)">
                  {item.title}
                </h3>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TemplateSection>
  );
}

/** Le déroulé : quatre étapes numérotées sous des filets. */
export function ForfaitsSteps({ locale }: { locale: TemplateLocale }) {
  const { steps } = getTemplateCopy(photographe, locale).forfaits;

  return (
    <TemplateSection
      eyebrow={steps.eyebrow}
      title={steps.title}
      titleScale="subtitle"
    >
      <ol
        role="list"
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
      >
        {steps.items.map((step, index) => (
          <li key={step.title} className="border-t border-tpl-ink pt-4">
            <p
              aria-hidden="true"
              className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted tabular-nums"
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {step.title}
            </h3>
            <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </TemplateSection>
  );
}
