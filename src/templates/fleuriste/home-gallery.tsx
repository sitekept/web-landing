import { ScrollReveal } from "@/components/scroll-reveal";
import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { fleuriste } from "@/content/templates/fleuriste";
import { getTemplateCopy } from "@/content/templates/types";

import { FillPhoto } from "./parts";

/**
 * Place de chaque photo dans la mosaïque à 12 colonnes (à partir de `lg`) :
 * une grande et deux étroites sur la première bande, trois verticales sur la
 * seconde, sans trou. En dessous : une ou deux colonnes de photos égales.
 */
const SPANS = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-4 lg:row-span-2",
] as const;

const SIZES = [
  "(min-width: 1280px) 700px, (min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw",
  "(min-width: 1280px) 500px, (min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw",
  "(min-width: 1280px) 500px, (min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw",
  "(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  "(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  "(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
] as const;

/** Galerie : six photos en mosaïque libre, fond blanc. */
export function HomeGallery({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(fleuriste, locale);
  const page = copy.gallery;

  return (
    <TemplateSection
      tone="raised"
      density="compact"
      eyebrow={page.eyebrow}
      title={page.title}
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-12">
        {page.images.map((image, index) => (
          <li key={image.src} className={SPANS[index]}>
            <ScrollReveal
              delay={(index % 3) * 70}
              distance={18}
              className="h-full"
            >
              <FillPhoto
                src={image.src}
                alt={image.alt}
                sizes={SIZES[index] ?? SIZES[0]}
                className="h-[280px] rounded-[1.75rem] lg:h-full"
                zoom
              />
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
