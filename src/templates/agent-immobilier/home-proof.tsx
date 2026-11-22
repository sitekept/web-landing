import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { agentImmobilier } from "@/content/templates/agent-immobilier";
import { getTemplateCopy } from "@/content/templates/types";
import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";

/** Preuve : bande d'avis défilante (élément vendor), sur le fond de page. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agentImmobilier, locale);
  const page = copy.home.proof;

  return (
    <TemplateSection
      tone="surface"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="mt-12">
        <TestimonialsMarquee
          label={page.label}
          items={page.items}
          tone="surface"
          durationSeconds={70}
        />
      </div>
    </TemplateSection>
  );
}
