import { Check, X } from "lucide-react";

import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";
import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { getTemplateCopy } from "@/content/templates/types";

type Props = { locale: TemplateLocale };

/** Preuve : avis clients défilants (élément 21st.dev `testimonials-marquee`). */
export function ReviewsSection({ locale }: Props) {
  const reviews = getTemplateCopy(plombierSerrurier, locale).home.reviews;

  return (
    <TemplateSection
      eyebrow={reviews.eyebrow}
      title={reviews.title}
      description={reviews.description}
    >
      <TestimonialsMarquee
        label={reviews.label}
        items={reviews.items}
        tone="raised"
        starTone="ink"
        durationSeconds={60}
      />
    </TemplateSection>
  );
}

/**
 * Rupture : les pratiques de dépannage que l'entreprise refuse, en regard de
 * ce qu'elle fait. Fond teal, deux colonnes dès `md`.
 */
export function RefuseSection({ locale }: Props) {
  const refuse = getTemplateCopy(plombierSerrurier, locale).home.refuse;

  return (
    <TemplateSection
      tone="inverse"
      eyebrow={refuse.eyebrow}
      title={refuse.title}
      description={refuse.description}
    >
      <ul className="grid gap-4">
        {refuse.items.map((item) => (
          <li
            key={item.refuse}
            className="grid overflow-hidden rounded-tpl border border-tpl-line bg-tpl-raised md:grid-cols-2"
          >
            <div className="flex gap-4 p-5 sm:p-6">
              <X
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 opacity-80"
              />
              <div>
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase opacity-80">
                  {refuse.refuseLabel}
                </p>
                <p className="mt-1 text-tpl-base">{item.refuse}</p>
              </div>
            </div>
            <div className="flex gap-4 border-t border-tpl-line bg-tpl-accent p-5 text-tpl-accent-ink sm:p-6 md:border-t-0 md:border-l">
              <Check aria-hidden="true" className="mt-1 size-5 shrink-0" />
              <div>
                <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
                  {refuse.insteadLabel}
                </p>
                <p className="mt-1 text-tpl-base font-semibold">
                  {item.instead}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
