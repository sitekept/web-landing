import {
  TemplatePanel,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { ImageCompare } from "@/components/template-kit/vendor/image-compare";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

/** Accueil : curseur avant / après (vendor `image-compare`) et trois principes. */
export function HomeProof({ locale }: { locale: TemplateLocale }) {
  const proof = getTemplateCopy(menageNettoyage, locale).home.proof;

  return (
    <TemplateSection
      density="compact"
      eyebrow={proof.eyebrow}
      title={proof.title}
      description={proof.description}
      titleScale="subtitle"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <TemplatePanel className="shadow-tpl-lg">
          <ImageCompare
            before={{ src: proof.before.src, alt: proof.before.alt }}
            after={{ src: proof.after.src, alt: proof.after.alt }}
            beforeLabel={proof.before.label}
            afterLabel={proof.after.label}
            handleLabel={proof.handle}
            valueText={proof.handleValue}
            ratio="16/9"
            sizes="(min-width: 1024px) 560px, calc(100vw - 80px)"
            defaultPosition={58}
          />
          <p className="mt-6 text-tpl-sm text-tpl-ink-muted">{proof.note}</p>
        </TemplatePanel>
        <ul className="grid gap-4 self-start">
          {proof.points.map((point) => (
            <li key={point}>
              <TemplatePanel tone="inverse" className="shadow-tpl-sm">
                <p className="text-tpl-sm text-tpl-ink/80">{point}</p>
              </TemplatePanel>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
