import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";
import { osteopathe } from "@/content/templates/osteopathe";
import { getTemplateCopy } from "@/content/templates/types";

/** Déroulé d'une séance : liste numérotée, titre collant à gauche. */
export function HomeSession({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(osteopathe, locale).home.session;

  return (
    <TemplateSection>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <TemplateHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
          className="self-start lg:sticky lg:top-28"
        />
        <ol className="divide-y divide-tpl-line border-y border-tpl-line">
          {page.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[auto_1fr] gap-6 py-8"
            >
              <span
                aria-hidden="true"
                className="w-12 font-tpl-display text-tpl-2xl leading-none text-tpl-accent"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
                  {step.time}
                </p>
                <h3 className="mt-2 font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </TemplateSection>
  );
}

/** Preuve : bande d'avis défilante. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(osteopathe, locale).home.proof;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <TestimonialsMarquee
        tone="raised"
        label={page.label}
        durationSeconds={60}
        items={page.items.map((item) => ({
          quote: item.quote,
          name: item.name,
          detail: item.detail,
          rating: item.rating,
          ratingLabel: item.ratingLabel,
        }))}
      />
    </TemplateSection>
  );
}
