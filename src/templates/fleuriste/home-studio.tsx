import { ScrollReveal } from "@/components/scroll-reveal";
import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { fleuriste } from "@/content/templates/fleuriste";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/** Atelier : note de studio à gauche, trois repères numérotés à droite, fond beige. */
export function HomeStudio({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(fleuriste, locale);
  const page = copy.studio;

  return (
    <TemplateSection
      id={ANCHORS.studio}
      tone="tint"
      density="compact"
      className="border-y border-tpl-line"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal distance={18}>
          <TemplateHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.text}
            className="max-w-xl"
          />
        </ScrollReveal>

        <ol className="grid gap-4">
          {page.notes.map((note, index) => (
            <li key={note}>
              <ScrollReveal
                delay={index * 90}
                distance={18}
                className="rounded-tpl border border-tpl-raised/60 bg-tpl-raised/80 p-7 shadow-tpl-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-tpl-pill bg-tpl-inverse text-tpl-sm font-semibold text-tpl-inverse-ink"
                  >
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-tpl-base leading-8 text-tpl-ink-muted">
                    {note}
                  </p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </TemplateSection>
  );
}
