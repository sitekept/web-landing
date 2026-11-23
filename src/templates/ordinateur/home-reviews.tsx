import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Avis : une citation en grand (7 colonnes) et deux plus courtes (5), sans
 * cartes : filet d’accent à gauche, filets fins entre les deux autres.
 */
export function HomeReviews({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.reviews;
  const [lead, ...others] = page.items;

  return (
    <TemplateSection density="compact">
      <TemplateHeading title={page.title} />
      <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-12 lg:gap-12">
        <figure className="border-l-4 border-tpl-accent pl-6 lg:col-span-7">
          <blockquote className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
            <p>{lead.text}</p>
          </blockquote>
          <figcaption className="mt-6 text-tpl-sm">
            <span className="font-semibold">{lead.name}</span>
            <span className="text-tpl-ink-muted"> · {lead.context}</span>
          </figcaption>
        </figure>
        <div className="border-b border-tpl-line lg:col-span-5">
          {others.map((item) => (
            <figure key={item.name} className="border-t border-tpl-line py-6">
              <blockquote className="text-tpl-base text-pretty">
                <p>{item.text}</p>
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
