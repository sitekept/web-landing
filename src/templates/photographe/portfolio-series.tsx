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

function sizesFor(weight: number, total: number): string {
  const share = weight / total;
  return `(min-width: 1280px) ${Math.round(1280 * share)}px, (min-width: 768px) ${Math.round(100 * share)}vw, 100vw`;
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
                      cursor += 1;

                      return (
                        <Plate
                          key={item.src}
                          className={`min-w-0 ${GROW[ratio].grow}`}
                          src={item.src}
                          alt={item.alt}
                          caption={item.caption}
                          ratio={ratio}
                          sizes={sizesFor(GROW[ratio].weight, total)}
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
