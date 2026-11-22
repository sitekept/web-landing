import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { boulangerie } from "@/content/templates/boulangerie";
import { getTemplateCopy } from "@/content/templates/types";

import { Stars } from "./parts";

/** Avis du quartier : deux témoignages sur fond sombre. */
export function HomeReviews({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(boulangerie, locale);
  const page = copy.reviews;

  return (
    <TemplateSection
      tone="inverse"
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="title"
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {page.items.map((item) => (
          <li key={item.name}>
            <TemplatePanel className="h-full p-7">
              <figure>
                <Stars label={page.ratingLabel} />
                <blockquote className="mt-5 text-tpl-base">
                  <p>{item.text}</p>
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-tpl-sm text-tpl-eyebrow">{item.role}</p>
                </figcaption>
              </figure>
            </TemplatePanel>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
