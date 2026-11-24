import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Avis : un témoignage en grand (7 colonnes), deux plus courts à côté
 * (5 colonnes), séparés par des filets : pas de grille de cartes.
 */
export function HomeReviews({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(dentiste, locale).home.reviews;
  const [lead, ...others] = page.items;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="subtitle"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <figure className="lg:col-span-7">
          <blockquote className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) text-pretty lg:text-tpl-xl">
            {lead.quote}
          </blockquote>
          <figcaption className="mt-6 text-tpl-sm">
            <span className="font-semibold">{lead.name}</span>
            <span className="text-tpl-ink-muted"> · {lead.context}</span>
          </figcaption>
        </figure>
        <div className="divide-y divide-tpl-line border-t border-tpl-line lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-14">
          {others.map((item) => (
            <figure key={item.name} className="py-6 first:pt-0 lg:first:pt-0">
              <blockquote className="max-w-tpl-measure text-tpl-base text-pretty">
                {item.quote}
              </blockquote>
              <figcaption className="mt-3 text-tpl-sm">
                <span className="font-semibold">{item.name}</span>
                <span className="text-tpl-ink-muted"> · {item.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}
