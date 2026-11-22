import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { patisserie } from "@/content/templates/patisserie";
import { getTemplateCopy } from "@/content/templates/types";

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
                  ? "(min-width: 1280px) 1216px, (min-width: 640px) 100vw, 162vw"
                  : "(min-width: 768px) 452px, (min-width: 640px) 93vw, 452px"
              }
              className={index === 0 ? "h-[420px]" : "h-[300px]"}
            />
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
