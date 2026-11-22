import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

/** Bien du moment : rupture sombre, photo et caractéristiques, lien vers la fiche. */
export function HomeFeatured({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.home.featured;
  const href = (path: string) => templateHref(locale, path);

  return (
    <TemplateSection tone="inverse">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
            {page.eyebrow}
          </p>
          <h2 className="mt-3 font-tpl-display text-tpl-2xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
            {page.title}
          </h2>
          <p className="mt-4 max-w-tpl-measure text-tpl-base text-tpl-ink-muted">
            {page.text}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 text-tpl-sm">
            {page.facts.map((fact) => (
              <li
                key={fact}
                className="rounded-tpl-pill border border-tpl-ink/40 px-3 py-1"
              >
                {fact}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TemplateLink
              href={href(agenceImmobiliere.paths.bien)}
              variant="inverse"
            >
              {page.cta}
            </TemplateLink>
            <TemplateLink
              href={href(agenceImmobiliere.paths.contact)}
              variant="outline"
              icon={false}
            >
              {page.secondaryCta}
            </TemplateLink>
          </div>
        </div>
        <TemplateMedia
          src={page.image.src}
          alt={page.image.alt}
          ratio="4/3"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </TemplateSection>
  );
}
