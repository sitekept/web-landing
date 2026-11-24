import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateMedia,
  type TemplateMediaRatio,
} from "@/components/template-kit/media";
import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { getTemplateCopy } from "@/content/templates/types";

/** Ratios de la grille, un par image : le rythme du collage vient d'eux. */
const GRID_RATIOS: readonly TemplateMediaRatio[] = [
  "4/5",
  "1/1",
  "3/2",
  "3/4",
  "4/3",
  "4/5",
];

/**
 * `sizes` de chaque image, dans l'ordre de `GRID_RATIOS`. Les photos n'ont pas
 * toutes le ratio de leur boîte : `object-cover` dimensionne le fichier sur la
 * hauteur de la boîte pour les photos paysage des boîtes 1/1 et 4/3, d'où
 * deux valeurs plus larges que les autres.
 */
const GRID_SIZES = [
  "(min-width: 1024px) calc(27.5vw - 26px), (min-width: 640px) calc(44vw - 35px), calc(88vw - 28px)",
  "(min-width: 1024px) 512px, (min-width: 640px) calc(66vw - 52px), calc(132.5vw - 43px)",
  "(min-width: 1024px) calc(27.5vw - 26px), (min-width: 640px) calc(44vw - 35px), calc(88vw - 28px)",
  "(min-width: 1024px) calc(27.5vw - 26px), (min-width: 640px) calc(44vw - 35px), calc(88vw - 28px)",
  "(min-width: 1024px) 384px, (min-width: 640px) calc(49.5vw - 39px), calc(99vw - 31px)",
  "(min-width: 1024px) calc(27.5vw - 26px), (min-width: 640px) calc(44vw - 35px), calc(88vw - 28px)",
] as const;

/** Grille d'images à ratios variés (colonnes), légende sous chaque image. */
export function CreationsGrid({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).creations.grid;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="columns-1 gap-8 sm:columns-2 lg:columns-3 lg:gap-12">
        {page.items.map((item, index) => (
          <li key={item.caption} className="mb-10 break-inside-avoid lg:mb-12">
            <figure>
              <TemplateMedia
                src={item.image.src}
                alt={item.image.alt}
                ratio={GRID_RATIOS[index] ?? "4/3"}
                rounded="none"
                sizes={GRID_SIZES[index] ?? GRID_SIZES[0]}
              />
              <figcaption className="mt-3 font-tpl-display text-tpl-lg text-tpl-ink-muted italic">
                {item.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}

/** Saveurs de saison : une ligne par saison, sous un filet. */
export function CreationsSeasons({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).creations.seasons;

  return (
    <TemplateSection
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <ul className="border-b border-tpl-ink">
        {page.items.map((item) => (
          <li
            key={item.season}
            className="grid gap-2 border-t border-tpl-ink py-6 lg:grid-cols-[1fr_1.3fr_1fr] lg:items-baseline lg:gap-10"
          >
            <h3 className="font-tpl-display text-tpl-xl font-(weight:--tpl-display-weight)">
              {item.season}
            </h3>
            <p className="text-tpl-base">{item.flavors}</p>
            <p className="text-tpl-sm text-tpl-ink-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
