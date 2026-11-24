import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { restaurantBistrot } from "@/content/templates/restaurant-bistrot";
import { getTemplateCopy } from "@/content/templates/types";

import { FIRST_SECTION_TOP } from "./parts";

/**
 * `sizes` mesurés : cellule de 6 colonnes, de 4 colonnes en 3/2, de 4 colonnes
 * en 4/5. Les valeurs en `calc()` échappent au filtre « vw » de next/image
 * (qui retirerait 192 à 512 px) et sont réduites de 5 à 10 % pour tomber sur
 * la variante la plus proche ; `256px` / `384px` en 4 colonnes parce que la
 * variante suivante (384 / 512 px) agrandirait de 1,3 à 1,5 les largeurs
 * intermédiaires.
 */
const SIZES_6 =
  "(min-width: 1280px) 600px, (min-width: 768px) calc(47.5vw - 30px), calc(90vw - 24px)";
const SIZES_4 =
  "(min-width: 1024px) 384px, (min-width: 768px) 256px, calc(90vw - 24px)";
/**
 * Photo paysage dans une boîte 4/5 : en `cover` elle est dimensionnée sur la
 * hauteur, le fichier utile fait 1,875 fois la largeur de la boîte. Plafonné
 * à 1200 px de 640 à 767 px (la variante suivante, 1920 px, agrandirait de 1,5).
 */
const SIZES_4_WIDE =
  "(min-width: 1280px) 741px, (min-width: 768px) 58vw, (min-width: 640px) 1200px, 173vw";

/**
 * Mosaïque de huit photos en trois rangées de cellules de même largeur, donc
 * de même hauteur : 2 × 3/2 (6 colonnes), 3 × 4/5 (4 colonnes), 3 × 3/2
 * (4 colonnes). Sous 768 px tout s'empile.
 */
const LAYOUT = [
  { span: "md:col-span-6", ratio: "3/2", sizes: SIZES_6 },
  { span: "md:col-span-6", ratio: "3/2", sizes: SIZES_6 },
  { span: "md:col-span-4", ratio: "4/5", sizes: SIZES_4 },
  { span: "md:col-span-4", ratio: "4/5", sizes: SIZES_4_WIDE },
  { span: "md:col-span-4", ratio: "4/5", sizes: SIZES_4_WIDE },
  { span: "md:col-span-4", ratio: "3/2", sizes: SIZES_4 },
  { span: "md:col-span-4", ratio: "3/2", sizes: SIZES_4 },
  { span: "md:col-span-4", ratio: "3/2", sizes: SIZES_4 },
] as const;

/** Galerie : salle, plats et cave en mosaïque. */
export function GalerieView({ locale }: { locale: TemplateLocale }) {
  const { galerie } = getTemplateCopy(restaurantBistrot, locale);

  return (
    <TemplateSection
      as="h1"
      eyebrow={galerie.eyebrow}
      title={galerie.title}
      description={galerie.description}
      className={FIRST_SECTION_TOP}
    >
      <div className="grid gap-4 md:grid-cols-12">
        {galerie.images.map((image, index) => {
          const cell = LAYOUT[index];

          return (
            <TemplateMedia
              key={image.src}
              src={image.src}
              alt={image.alt}
              ratio={cell.ratio}
              sizes={cell.sizes}
              priority={index === 0}
              className={cell.span}
            />
          );
        })}
      </div>
    </TemplateSection>
  );
}
