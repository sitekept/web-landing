import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";

/** Aperçu des quatre quartiers, avec leur agent référent. */
export function HomeDistricts({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.home.districts;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul
        role="list"
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {page.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col rounded-tpl border border-tpl-line bg-tpl-raised p-6"
          >
            <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {item.name}
            </h3>
            <p className="mt-3 flex-1 text-tpl-sm text-tpl-ink-muted">
              {item.text}
            </p>
            <p className="mt-5 border-t border-tpl-line pt-4 text-tpl-xs text-tpl-ink-muted">
              <span className="font-semibold tracking-tpl-eyebrow uppercase">
                {page.referentLabel}
              </span>
              <span className="block text-tpl-sm text-tpl-ink">
                {item.referent}
              </span>
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <TemplateLink
          href={templateHref(locale, agenceImmobiliere.paths.quartiers)}
          variant="outline"
        >
          {page.cta}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
