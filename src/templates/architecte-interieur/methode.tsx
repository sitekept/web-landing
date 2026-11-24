import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { FeesSection } from "./fees";
import { MethodeFaq } from "./methode-faq";
import { BLOCK_TITLE, CtaBand, PORTRAIT, photoSizes } from "./parts";

/** Méthode : quatre étapes détaillées, deux photos, honoraires, questions. */
export function MethodeView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const page = copy.methode;

  return (
    <>
      <TemplateSection density="compact" tone="surface">
        <TemplateHeading
          as="h1"
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <ol className="@container mt-12 border-t border-tpl-ink">
          {page.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-x-12 gap-y-4 border-b border-tpl-line py-8 @3xl:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                  <p
                    aria-hidden="true"
                    className="font-tpl-display text-tpl-2xl leading-none font-(weight:--tpl-display-weight) text-tpl-ink-muted tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-tpl-sm">
                    <span className="font-semibold">
                      {page.stepLabels.time}
                    </span>{" "}
                    <span className="text-tpl-ink-muted">{step.time}</span>
                  </p>
                </div>
                <h2 className={`${BLOCK_TITLE} mt-4`}>{step.title}</h2>
                <p className="mt-3 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
                  {step.text}
                </p>
              </div>
              <div className="border-l-2 border-tpl-ink pl-4">
                <p className="font-tpl-display text-tpl-sm font-(weight:--tpl-display-weight)">
                  {page.stepLabels.deliverable}
                </p>
                <p className="mt-1 text-tpl-sm text-pretty text-tpl-ink-muted">
                  {step.deliverable}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </TemplateSection>

      <TemplateSection density="compact" tone="tint">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <div>
            <TemplateMedia
              src={page.imageSketch.src}
              alt={page.imageSketch.alt}
              ratio="4/5"
              rounded="none"
              sizes={photoSizes(5)}
              className={PORTRAIT}
            />
          </div>
          <div>
            <TemplateMedia
              src={page.imageSite.src}
              alt={page.imageSite.alt}
              ratio="3/2"
              rounded="none"
              sizes={photoSizes(7)}
            />
          </div>
        </div>
      </TemplateSection>

      <FeesSection
        locale={locale}
        title={copy.fees.title}
        description={copy.fees.description}
      />
      <MethodeFaq locale={locale} />
      <CtaBand
        locale={locale}
        title={copy.home.closing.title}
        text={copy.home.closing.text}
      />
    </>
  );
}
