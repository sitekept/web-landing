import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import type { TemplateMediaRatio } from "@/components/template-kit/media";
import { photographe } from "@/content/templates/photographe";
import { getTemplateCopy } from "@/content/templates/types";

import { SERIES_ANCHORS } from "./home-domains";
import { IndexLabel, Plate } from "./parts";

/**
 * Mise en page des séries : pour chaque série, ses rangées, chacune étant la
 * liste des ratios de ses images (dans l'ordre de la copie). Une rangée est
 * « justifiée » : chaque image grandit en proportion de son ratio, donc toutes
 * ont la même hauteur. Trois ratios au plus : 3/2, 4/5 et 1/1.
 */
const ROWS: readonly (readonly (readonly TemplateMediaRatio[])[])[] = [
  [
    ["3/2", "4/5"],
    ["3/2", "3/2", "3/2"],
  ],
  [
    ["3/2", "4/5"],
    ["4/5", "3/2"],
  ],
  [
    ["4/5", "3/2"],
    ["3/2", "1/1"],
  ],
];

/** Part de flex-grow par ratio (classes littérales pour Tailwind). */
const GROW: Record<string, { grow: string; weight: number }> = {
  "3/2": { grow: "md:flex-[1.5_1_0%]", weight: 1.5 },
  "4/5": { grow: "md:flex-[0.8_1_0%]", weight: 0.8 },
  "1/1": { grow: "md:flex-[1_1_0%]", weight: 1 },
};

/** Marge de 12 % sous la largeur utile, comme les `sizes` des autres templates. */
const SHRINK = 0.88;
/** Écart entre deux images d'une rangée (`md:gap-6`), en px. */
const ROW_GAP = 24;

/**
 * Photo plus large que sa boîte (`object-cover` la dimensionne sur la hauteur) :
 * multiplicateur de la largeur utile, par série et rang dans la série. Une
 * photo de 0,99 dans une boîte 4/5 vaut 1,24 ; une photo de 1,5 dans une boîte
 * 1/1 vaut 1,5.
 */
const WIDE_PHOTO: Record<string, number> = { "1-2": 1.24, "2-3": 1.5 };

/**
 * `sizes` d'une image de rangée : sa part de la largeur du contenu (64 px de
 * marges au-dessus de 1024 px, 48 px dessous, plafond de 1280 px à partir de
 * 1344 px) moins les écarts de la rangée ; en colonne sous 768 px, la largeur
 * de l'écran moins les marges. `calc` partout : un `vw` isolé fait retirer à
 * Next les petites variantes.
 */
function sizesFor(
  weight: number,
  total: number,
  count: number,
  boost: number
): string {
  const share = (SHRINK * boost * weight) / total;
  const gaps = ROW_GAP * (count - 1);
  const fit = (vw: number, px: number) =>
    `calc(${+vw.toFixed(1)}vw - ${Math.round(px)}px)`;

  return [
    `(min-width: 1344px) ${Math.round(share * (1280 - gaps))}px`,
    `(min-width: 1024px) ${fit(100 * share, share * (64 + gaps))}`,
    `(min-width: 768px) ${fit(100 * share, share * (48 + gaps))}`,
    `(min-width: 640px) ${fit(100 * SHRINK * boost, 48 * SHRINK * boost)}`,
    fit(100 * SHRINK * boost, 32 * SHRINK * boost),
  ].join(", ");
}

/** Les trois séries, chacune sous son index et son texte. */
export function PortfolioSeries({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(photographe, locale).portfolio;

  return (
    <>
      {page.categories.map((category, index) => {
        let cursor = 0;

        return (
          <TemplateSection
            key={category.title}
            id={SERIES_ANCHORS[index]}
            density="compact"
            tone={index === 1 ? "raised" : "surface"}
            titleScale="subtitle"
            eyebrow={
              <IndexLabel index={index + 1}>
                {category.items.length} {page.imagesLabel}
              </IndexLabel>
            }
            title={category.title}
            description={category.text}
          >
            <div className="flex flex-col gap-10">
              {ROWS[index].map((row, rowIndex) => {
                const total = row.reduce((sum, r) => sum + GROW[r].weight, 0);

                return (
                  <div
                    key={rowIndex}
                    className="flex flex-col gap-8 md:flex-row md:gap-6"
                  >
                    {row.map((ratio) => {
                      const item = category.items[cursor];
                      const boost = WIDE_PHOTO[`${index}-${cursor}`] ?? 1;
                      cursor += 1;

                      return (
                        <Plate
                          key={item.src}
                          className={`min-w-0 ${GROW[ratio].grow}`}
                          src={item.src}
                          alt={item.alt}
                          caption={item.caption}
                          ratio={ratio}
                          sizes={sizesFor(
                            GROW[ratio].weight,
                            total,
                            row.length,
                            boost
                          )}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </TemplateSection>
        );
      })}
    </>
  );
}

/** Livraison : trois colonnes de texte sous des filets. */
export function PortfolioDelivery({ locale }: { locale: TemplateLocale }) {
  const { delivery } = getTemplateCopy(photographe, locale).portfolio;

  return (
    <TemplateSection
      eyebrow={delivery.eyebrow}
      title={delivery.title}
      titleScale="subtitle"
    >
      <ul role="list" className="grid gap-10 md:grid-cols-3 md:gap-8">
        {delivery.items.map((item) => (
          <li key={item.title} className="border-t border-tpl-ink pt-4">
            <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight)">
              {item.title}
            </h3>
            <p className="mt-3 text-tpl-sm text-tpl-ink-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
