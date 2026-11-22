import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { Stars } from "./parts";

/** Avis : trois témoignages sur fond de page. */
export function HomeReviews({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.reviews;
  const quote = locale === "fr" ? ["« ", " »"] : ["“", "”"];

  return (
    <TemplateSection
      tone="surface"
      density="compact"
      align="center"
      title={page.title}
    >
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {page.items.map((item) => (
          <li key={item.name}>
            <TemplatePanel className="h-full border-transparent p-8 shadow-tpl-lg">
              <figure>
                <Stars label={page.ratingLabel} />
                <blockquote className="mt-4 mb-6 text-tpl-ink-muted italic">
                  <p>
                    {quote[0]}
                    {item.text}
                    {quote[1]}
                  </p>
                </blockquote>
                <figcaption>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-tpl-sm text-tpl-accent">{item.event}</p>
                </figcaption>
              </figure>
            </TemplatePanel>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
