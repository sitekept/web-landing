import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { ordinateur } from "@/content/templates/ordinateur";
import { getTemplateCopy } from "@/content/templates/types";

import { ANCHORS } from "./parts";

/** Réalisations : huit vignettes carrées, deux colonnes sur mobile, quatre dès `md`. */
export function HomeGallery({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(ordinateur, locale);
  const page = copy.gallery;

  return (
    <TemplateSection
      id={ANCHORS.gallery}
      tone="raised"
      density="compact"
      align="center"
      title={page.title}
      description={page.description}
    >
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {page.images.map((image, index) => (
          <li key={`${image.src}-${index}`}>
            <TemplateMedia
              src={image.src}
              alt={image.alt}
              ratio="1/1"
              sizes="(min-width: 1280px) 296px, (min-width: 768px) 25vw, 50vw"
              className="shadow-tpl-lg"
            />
          </li>
        ))}
      </ul>
    </TemplateSection>
  );
}
