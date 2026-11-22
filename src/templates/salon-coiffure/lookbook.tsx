import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { LIFT } from "./parts";

/**
 * Lookbook : quatre photos en grille de deux colonnes, rangées à hauteur égale
 * (la plus haute des deux photos de la rangée donne la hauteur).
 */
export function LookbookView({ locale }: { locale: TemplateLocale }) {
  const { lookbook } = getTemplateCopy(salonCoiffure, locale);

  return (
    <TemplateSection
      as="h1"
      density="compact"
      titleScale="subtitle"
      className="flex-1 pt-[calc(var(--tpl-header-offset)+4rem)]"
      eyebrow={lookbook.eyebrow}
      title={lookbook.title}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {lookbook.images.map((image, index) => (
          <TemplateMedia
            key={image.src}
            src={image.src}
            alt={image.alt}
            ratio="fill"
            priority={index === 0}
            sizes="640px"
            className={`${index % 2 === 0 ? "min-h-[320px]" : "min-h-[420px]"} ${LIFT}`}
          />
        ))}
      </div>
    </TemplateSection>
  );
}
