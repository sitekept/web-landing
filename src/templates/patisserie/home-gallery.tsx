import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * `sizes` des trois petites photos (hauteur fixe de 300 px). La première est
 * en portrait : elle remplit la largeur de sa colonne. Les deux autres sont
 * en paysage : `object-cover` les dimensionne sur la hauteur, soit 417 à 450 px
 * de large quelle que soit la colonne.
 */
const SMALL_SIZES = [
  "(min-width: 1072px) 384px, (min-width: 768px) 256px, calc(84vw - 13px)",
  "(min-width: 768px) 384px, (min-width: 704px) 640px, 512px",
  "(min-width: 768px) 384px, (min-width: 704px) 640px, 512px",
] as const;

/** Galerie : une photo pleine largeur, puis trois photos sur trois colonnes (l'ancienne grille laissait un trou). */
export function HomeGallery({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(patisserie, locale).gallery;

  return (
    <TemplateSection
      tone="surface"
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
      titleScale="title"
      align="center"
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {page.images.map((image, index) => (
          <li
            key={image.src}
            className={`overflow-hidden rounded-3xl border border-tpl-line ${
              index === 0 ? "md:col-span-3" : ""
            }`}
          >
            <TemplateMedia
              src={image.src}
              alt={image.alt}
              ratio="fill"
              rounded="none"
              sizes={
                index === 0
                  ? "(min-width: 992px) 1080px, 750px"
                  : (SMALL_SIZES[index - 1] ?? SMALL_SIZES[1])
              }
              className={index === 0 ? "h-[420px]" : "h-[300px]"}
            />
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
