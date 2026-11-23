import {
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";
import { createurCulinaire } from "@/content/templates/createur-culinaire";
import { getTemplateCopy } from "@/content/templates/types";

import { CreationsGrid, CreationsSeasons } from "./creations-sections";
import { ClosingCta } from "./parts";

/**
 * Créations : hero court, galerie à panneaux (six créations), collage de
 * pièces sucrées et salées, saveurs de saison, devis.
 */
export function CreationsView({ locale }: { locale: TemplateLocale }) {
  const page = getTemplateCopy(createurCulinaire, locale).creations;

  return (
    <>
      <TemplateSection
        density="compact"
        as="h1"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        className="pb-8 lg:pb-12"
      />
      <TemplateSection density="compact" className="pt-0">
        <HoverExpandGallery
          label={page.gallery.label}
          sizes="(min-width: 1024px) 1080px, 828px"
          height="40rem"
          width="fill"
          railWidth={72}
          priority
          items={page.gallery.items.map((item) => ({
            title: item.title,
            meta: item.meta,
            image: item.image,
          }))}
        />
      </TemplateSection>
      <CreationsGrid locale={locale} />
      <CreationsSeasons locale={locale} />
      <ClosingCta
        locale={locale}
        title={page.closing.title}
        text={page.closing.text}
      />
    </>
  );
}
