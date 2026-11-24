import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Offre : une bande par prestation (entretien, freinage, pneus), photo et
 * texte alternés, liste de ce qui est contrôlé et moment où venir. `id` sert
 * d'ancre à la barre de navigation de la page.
 */
export function ServiceBlocks({ locale }: { locale: TemplateLocale }) {
  const blocks = getTemplateCopy(garageAuto, locale).prestations.blocks;

  return (
    <>
      {blocks.map((block, index) => (
        <TemplateSection
          key={block.id}
          id={block.id}
          tone={index % 2 === 0 ? "surface" : "raised"}
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <TemplateMedia
              src={block.image.src}
              alt={block.image.alt}
              ratio="4/3"
              sizes="(min-width: 1392px) 640px, (min-width: 1024px) calc(45vw - 41px), calc(93.5vw - 46px)"
              rounded="none"
              className={index % 2 === 0 ? undefined : "lg:order-2"}
            />
            <div>
              <TemplateHeading
                eyebrow={block.eyebrow}
                title={block.title}
                description={block.text}
              />
              <h3 className="mt-8 text-tpl-sm font-semibold tracking-tpl-eyebrow uppercase">
                {block.checksTitle}
              </h3>
              <ul className="mt-3 divide-y divide-tpl-line border-y border-tpl-line">
                {block.checks.map((check) => (
                  <li key={check} className="flex items-start gap-3 py-2.5">
                    <Check
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-tpl-accent"
                    />
                    <span className="text-tpl-sm">{check}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-4 border-tpl-accent pl-4 text-tpl-sm">
                <span className="font-semibold">{block.whenTitle}. </span>
                <span className="text-tpl-ink-muted">{block.when}</span>
              </p>
            </div>
          </div>
        </TemplateSection>
      ))}
    </>
  );
}
