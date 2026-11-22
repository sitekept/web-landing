import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy } from "@/content/templates/types";

import { Stars } from "./parts";

/** Témoignages : deux avis sur fond brun, filets haut et bas. */
export function HomeReviews({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(patisserie, locale).reviews;

  return (
    <TemplateSection
      tone="tint"
      density="compact"
      className="border-y border-tpl-line"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="title"
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {page.items.map((item) => (
          <li
            key={item.name}
            className="rounded-tpl border border-tpl-line bg-tpl-ink/[0.03] p-8"
          >
            <figure>
              <Stars label={page.ratingLabel} />
              <blockquote className="mt-6 font-tpl-text text-tpl-lg text-tpl-ink/85">
                <p>{item.text}</p>
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{item.name}</p>
                <p className="text-tpl-sm text-tpl-ink-muted">{item.role}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
