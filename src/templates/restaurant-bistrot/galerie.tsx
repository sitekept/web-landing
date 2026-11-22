import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP } from "./parts";

/** Galerie : quatre photos en deux colonnes, hauteurs alternées. */
export function GalerieView({ locale }: { locale: TemplateLocale }) {
  const { galerie } = getTemplateCopy(restaurantBistrot, locale);

  return (
    <TemplateSection
      density="compact"
      as="h1"
      eyebrow={galerie.eyebrow}
      title={galerie.title}
      className={FIRST_SECTION_TOP}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {galerie.images.map((image, index) => (
          <TemplateMedia
            key={image.src}
            src={image.src}
            alt={image.alt}
            ratio="fill"
            sizes="640px"
            priority={index < 2}
            className={`motion-safe:transition motion-safe:duration-500 motion-safe:hover:scale-[1.01] ${
              index % 2 === 0 ? "min-h-[320px]" : "min-h-[420px]"
            }`}
          />
        ))}
      </div>
    </TemplateSection>
  );
}
