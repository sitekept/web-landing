import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { spaMassage } from "@/content/templates/spa-massage";
import { getTemplateCopy } from "@/content/templates/types";

/** Rituel mis en avant : grande image cadrée d'un filet laiton, déroulé numéroté. */
export function HomeRitual({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(spaMassage, locale);
  const page = copy.home.ritual;

  return (
    <TemplateSection tone="raised">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div className="relative pr-3 pb-3 sm:pr-4 sm:pb-4">
          <div
            aria-hidden="true"
            className="absolute top-4 right-0 bottom-0 left-4 rounded-tpl border border-tpl-accent/50"
          />
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="4/5"
            sizes="(min-width: 1024px) 750px, calc(155.5vw - 30px)"
            className="relative"
          />
        </div>

        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.text}
            scale="title"
          />
          <p className="mt-8 flex items-baseline gap-4 tabular-nums">
            <span className="font-tpl-display text-tpl-2xl leading-tpl-display text-tpl-accent">
              {page.price}
            </span>
            <span className="text-tpl-sm text-tpl-ink-muted">
              {page.duration}
            </span>
          </p>

          <h3 className="mt-10 text-tpl-xs font-normal tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {page.stepsLabel}
          </h3>
          <ol className="mt-4 divide-y divide-tpl-line border-y border-tpl-line">
            {page.steps.map((step) => (
              <li
                key={step.title}
                className="grid grid-cols-[4.5rem_1fr] gap-x-4 py-4 sm:grid-cols-[5.5rem_1fr]"
              >
                <span className="pt-0.5 text-tpl-sm text-tpl-accent tabular-nums">
                  {step.time}
                </span>
                <div>
                  <p className="font-tpl-display text-tpl-lg">{step.title}</p>
                  <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-9">
            <TemplateLink
              href={templateHref(locale, spaMassage.paths.reservation)}
              shape="pill"
            >
              {copy.cta.bookRitual}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
