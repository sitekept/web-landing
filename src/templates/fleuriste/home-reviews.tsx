import { ScrollReveal } from "@/components/scroll-reveal";
import {
  TemplateCard,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { fleuriste } from "@/content/templates/fleuriste";
import { getTemplateCopy } from "@/content/templates/types";

import { Stars } from "./parts";

/** Témoignages : deux cartes sur fond vert sombre, titre centré. */
export function HomeReviews({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(fleuriste, locale);
  const page = copy.reviews;

  return (
    <TemplateSection
      tone="inverse"
      density="compact"
      align="center"
      eyebrow={page.eyebrow}
      title={page.title}
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {page.items.map((item, index) => (
          <li key={item.name}>
            <ScrollReveal delay={index * 80} distance={18} className="h-full">
              <TemplateCard
                tone="inverse"
                elevation="flat"
                className="h-full p-8"
              >
                <Stars label={page.ratingLabel} />
                <p className="mt-6 text-tpl-lg leading-9 text-tpl-ink">
                  {item.text}
                </p>
                <p className="mt-6 font-semibold text-tpl-ink">{item.name}</p>
                <p className="text-tpl-sm text-tpl-ink-muted">{item.role}</p>
              </TemplateCard>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
