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
                sizes="(min-width: 1280px) 380px, (min-width: 640px) 45vw, 100vw"
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
            <h3 className="font-tpl-display text-tpl-xl">{item.season}</h3>
            <p className="text-tpl-base">{item.flavors}</p>
            <p className="text-tpl-sm text-tpl-ink-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
