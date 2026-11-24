import { Check } from "lucide-react";

import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  TemplateMedia,
  type TemplateMediaRatio,
} from "@/components/template-kit/media";
import { salonCoiffure } from "@/content/templates/salon-coiffure";
import { getTemplateCopy } from "@/content/templates/types";

import { CtaBand, PageIntro, SIZES } from "./parts";

/**
 * Ratio de chaque photo, par rang dans la copie. Trois colonnes (rang modulo
 * 3) dont les photos s’additionnent à la même hauteur : un portrait, un carré
 * et un paysage par colonne.
 */
const RATIOS: readonly TemplateMediaRatio[] = [
  "4/5",
  "4/3",
  "1/1",
  "1/1",
  "4/5",
  "4/3",
  "4/3",
  "1/1",
  "4/5",
];

/**
 * Réalisations : neuf photos en trois colonnes de hauteur égale, puis le salon
 * (photo et trois points), puis la bande de réservation.
 */
export function LookbookView({ locale }: { locale: TemplateLocale }) {
  const { lookbook } = getTemplateCopy(salonCoiffure, locale);
  const { salon } = lookbook;
  const columns = [0, 1, 2].map((column) =>
    lookbook.images
      .map((image, index) => ({ image, index }))
      .filter(({ index }) => index % 3 === column)
  );

  return (
    <>
      <PageIntro title={lookbook.title} description={lookbook.description} />
      <TemplateSection tone="surface" density="compact">
        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((items, column) => (
            <ul key={column} className="grid content-start gap-6">
              {items.map(({ image, index }) => (
                <li key={image.src}>
                  <figure>
                    <TemplateMedia
                      src={image.src}
                      alt={image.alt}
                      ratio={RATIOS[index]}
                      priority={index === 0}
                      sizes={SIZES.THIRDS}
                    />
                    <figcaption className="mt-3">
                      <span className="block font-semibold">
                        {image.caption}
                      </span>
                      <span className="block text-tpl-sm text-tpl-ink-muted">
                        {image.meta}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </TemplateSection>
      <TemplateSection tone="raised">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <TemplateHeading title={salon.title} description={salon.text} />
            <ul className="mt-8 space-y-3">
              {salon.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-tpl-eyebrow"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <TemplateMedia
              src={salon.image.src}
              alt={salon.image.alt}
              ratio="4/3"
              sizes={SIZES.COL7_G64}
            />
          </div>
        </div>
      </TemplateSection>
      <CtaBand
        locale={locale}
        title={lookbook.cta.title}
        text={lookbook.cta.text}
      />
    </>
  );
}
