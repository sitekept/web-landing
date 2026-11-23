import {
  TemplateHeading,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { PORTRAIT, ROW_TITLE, TextLink, photoSizes } from "./parts";

/** Méthode en quatre temps : photo de plan à gauche, étapes numérotées à droite. */
export function HomeMethod({ locale }: { locale: TemplateLocale }) {
  const { method } = getTemplateCopy(architecteInterieur, locale).home;
  const { paths } = architecteInterieur;

  return (
    <TemplateSection density="compact" tone="raised">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div>
          <TemplateMedia
            src={method.image.src}
            alt={method.image.alt}
            ratio="4/5"
            rounded="none"
            sizes={photoSizes(5)}
            className={PORTRAIT}
          />
        </div>
        <div>
          <TemplateHeading
            title={method.title}
            description={method.description}
          />
          <ol className="mt-10 border-t border-tpl-ink">
            {method.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-tpl-line py-5"
              >
                <span
                  aria-hidden="true"
                  className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) text-tpl-ink-muted tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={ROW_TITLE}>{step.title}</h3>
                  <p className="mt-1 max-w-tpl-measure text-tpl-sm text-pretty text-tpl-ink-muted">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-4">
            <TextLink href={templateHref(locale, paths.methode)}>
              {method.more}
            </TextLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
