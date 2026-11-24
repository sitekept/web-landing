import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/** Signature : titre à gauche, liste de trois pièces avec prix à droite. */
export function HomeSignature({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(patisserie, locale).signature;

  return (
    <TemplateSection
      id={ANCHORS.signature}
      tone="bare"
      density="compact"
      className="border-y border-tpl-line bg-linear-to-b from-tpl-raised to-tpl-surface"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <TemplateHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.text}
          scale="title"
        />
        <ul className="overflow-hidden rounded-tpl border border-tpl-line bg-tpl-ink/[0.03]">
          {page.items.map((piece) => (
            <li
              key={piece.name}
              className="grid gap-4 border-b border-tpl-line p-6 last:border-b-0 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight)">
                  {piece.name}
                </h3>
                <p className="mt-2 text-tpl-sm text-tpl-ink-muted">
                  {piece.detail}
                </p>
              </div>
              <p className="self-center text-tpl-lg font-semibold whitespace-nowrap text-tpl-accent">
                {piece.price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </TemplateSection>
  );
}
