import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

import { IconBadge } from "./parts";

/** Preuve : bande d'avis défilante (élément 21st.dev `testimonials-marquee`). */
export function ReviewsSection({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).home.reviews;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <TestimonialsMarquee
        label={page.label}
        tone="raised"
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

/** Rupture : bande sombre avec la règle de la maison, photo à gauche. */
export function RuleBand({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(garageAuto, locale).home.rule;

  return (
    <TemplateSection tone="inverse">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/3"
          sizes="(min-width: 1024px) 560px, 100vw"
          rounded="none"
        />
        <div>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <ul className="mt-8 space-y-6">
            {page.points.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <IconBadge icon={point.icon} />
                <div>
                  <h3 className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight)">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-tpl-sm text-tpl-ink-muted">
                    {point.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TemplateSection>
  );
}
