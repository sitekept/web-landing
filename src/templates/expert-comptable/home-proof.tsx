import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

/** Preuve : trois avis fictifs en colonnes à filet épais. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const proof = getTemplateCopy(expertComptable, locale).home.proof;

  return (
    <TemplateSection
      eyebrow={proof.eyebrow}
      title={proof.title}
      description={proof.description}
    >
      <div className="grid gap-x-10 gap-y-10 md:grid-cols-3">
        {proof.items.map((item) => (
          <figure key={item.name} className="border-t-2 border-tpl-ink pt-6">
            <blockquote className="text-tpl-base text-pretty">
              {item.quote}
            </blockquote>
            <figcaption className="mt-5 text-tpl-sm">
              <span className="font-semibold">{item.name}</span>
              <span className="block text-tpl-ink-muted">{item.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </TemplateSection>
  );
}
