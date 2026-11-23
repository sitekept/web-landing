import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { BLOCK_TITLE, CtaBand, PORTRAIT, ROW_TITLE, photoSizes } from "./parts";

/** Studio : présentation et photo, trois domaines, trois principes. */
export function StudioView({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const page = copy.studio;

  return (
    <>
      <TemplateSection density="compact" tone="surface">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
          <div>
            <TemplateHeading
              as="h1"
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />
            <div className="mt-8 max-w-tpl-measure space-y-4 text-tpl-base text-pretty text-tpl-ink-muted">
              {page.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <TemplateMedia
              src={page.image.src}
              alt={page.image.alt}
              ratio="4/5"
              rounded="none"
              priority
              sizes={photoSizes(5)}
              className={PORTRAIT}
            />
          </div>
        </div>
      </TemplateSection>

      <TemplateSection density="compact" tone="tint">
        <h2 className={BLOCK_TITLE}>{page.areasTitle}</h2>
        <dl className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,13rem),1fr))] gap-x-12 gap-y-8">
          {page.areas.map((area) => (
            <div key={area.title} className="border-t-2 border-tpl-ink pt-4">
              <dt className={ROW_TITLE}>{area.title}</dt>
              <dd className="mt-2 text-tpl-sm text-pretty text-tpl-ink-muted">
                {area.text}
              </dd>
            </div>
          ))}
        </dl>
      </TemplateSection>

      <TemplateSection density="compact" tone="raised">
        <h2 className={BLOCK_TITLE}>{page.valuesTitle}</h2>
        <ol className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,13rem),1fr))] gap-x-12 gap-y-8">
          {page.values.map((value, index) => (
            <li key={value.title} className="border-t border-tpl-line pt-4">
              <p
                aria-hidden="true"
                className="text-tpl-sm font-semibold text-tpl-ink-muted tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className={`${ROW_TITLE} mt-2`}>{value.title}</h3>
              <p className="mt-2 text-tpl-sm text-pretty text-tpl-ink-muted">
                {value.text}
              </p>
            </li>
          ))}
        </ol>
      </TemplateSection>

      <CtaBand
        locale={locale}
        title={copy.home.closing.title}
        text={copy.home.closing.text}
      />
    </>
  );
}
