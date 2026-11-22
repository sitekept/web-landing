import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

/** Preuve : trois chiffres sobres, puis trois avis sous de simples filets. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(photographe, locale);
  const { proof } = copy.home;

  return (
    <TemplateSection
      eyebrow={proof.eyebrow}
      title={proof.title}
      titleScale="subtitle"
    >
      <dl className="grid gap-8 sm:grid-cols-3 sm:gap-6">
        {proof.figures.map((figure) => (
          <div key={figure.value} className="border-t border-tpl-ink pt-4">
            <dt className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
              {figure.value}
            </dt>
            <dd className="mt-2 text-tpl-sm text-tpl-ink-muted">
              {figure.label}
            </dd>
          </div>
        ))}
      </dl>
      <ul role="list" className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {proof.quotes.map((item) => (
          <li key={item.name}>
            <figure className="flex h-full flex-col border-t border-tpl-line pt-6">
              <blockquote className="text-tpl-base text-pretty">
                <p>{item.quote}</p>
              </blockquote>
              <figcaption className="mt-6 text-tpl-sm">
                <span className="font-medium">{item.name}</span>
                <span className="block text-tpl-ink-muted">{item.detail}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
