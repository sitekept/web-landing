import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";

/** Preuve : bande d'avis défilante (élément vendor), sur le fond de page. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.home.proof;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="mt-12">
        <TestimonialsMarquee
          label={page.label}
          items={page.items}
          tone="raised"
          durationSeconds={70}
        />
      </div>
    </TemplateSection>
  );
}
