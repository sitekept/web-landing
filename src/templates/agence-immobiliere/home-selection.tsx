import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { agenceImmobiliere } from "@/content/templates/agence-immobiliere";
import { getTemplateCopy } from "@/content/templates/types";
import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";

/** Sélection du moment : panneaux qui s'ouvrent au survol (élément vendor). */
export function HomeSelection({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(agenceImmobiliere, locale);
  const page = copy.home.selection;

  return (
    <TemplateSection
      tone="raised"
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="mt-12">
        <HoverExpandGallery
          label={page.label}
          sizes="(min-width: 992px) 828px, 750px"
          width="fill"
          height="30rem"
          items={page.items}
        />
      </div>
      <div className="mt-8">
        <TemplateLink
          href={templateHref(locale, agenceImmobiliere.paths.biens)}
          variant="outline"
        >
          {page.cta}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
