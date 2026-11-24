import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

/** La salle : photo portrait à gauche (5/12), texte et trois repères à droite (7/12), fond sombre. */
export function SalleSection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(restaurantBistrot, locale);
  const page = copy.home.salle;
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection tone="inverse">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <TemplateMedia
            src={page.image.src}
            alt={page.image.alt}
            ratio="4/5"
            sizes="(min-width: 1280px) 469px, (min-width: 1024px) 36vw, (min-width: 520px) 448px, 92vw"
          />
        </div>
        <div className="lg:col-span-7">
          <TemplateHeading title={page.title} description={page.description} />
          <dl className="mt-10 grid gap-6 border-t border-tpl-line pt-8 sm:grid-cols-3">
            {page.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-tpl-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={href(restaurantBistrot.paths.histoire)}
              variant="inverse"
            >
              {copy.cta.seeStory}
            </TemplateLink>
            <TemplateLink
              href={href(restaurantBistrot.paths.privatisation)}
              variant="outline"
              icon={false}
            >
              {copy.cta.seePrivatisation}
            </TemplateLink>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}

/** Deux avis en grandes citations, la première plus large (7/12 et 5/12). */
export function AvisSection({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(restaurantBistrot, locale).home.avis;

  return (
    <TemplateSection tone="tint" title={page.title}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        {page.items.map((item, index) => (
          <figure
            key={item.name}
            className={
              index === 0
                ? "lg:col-span-7"
                : "border-t border-tpl-ink/30 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
            }
          >
            <blockquote>
              <p className="font-tpl-display text-tpl-lg font-(weight:--tpl-display-weight) text-balance">
                {item.quote}
              </p>
            </blockquote>
            <figcaption className="mt-6 text-tpl-sm text-tpl-ink-muted">
              <span className="font-semibold text-tpl-ink">{item.name}</span>
              {" · "}
              {item.detail}
            </figcaption>
          </figure>
        ))}
      </div>
    </TemplateSection>
  );
}
