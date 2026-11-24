import {
  TemplateHeading,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { PriceList } from "@/components/template-kit/vendor/price-list";
import { architecteInterieur } from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

import { TextLink } from "./parts";

/**
 * Honoraires : titre à gauche, liste des formules et prix à droite. Sert à
 * l'accueil (titre propre, lien vers la méthode) et à la page méthode.
 */
export function FeesSection({
  locale,
  title,
  description,
  more,
  titleAs = "h2",
}: {
  locale: TemplateLocale;
  title: string;
  description: string;
  more?: { href: string; label: string };
  titleAs?: "h2" | "h3";
}) {
  const { fees } = getTemplateCopy(architecteInterieur, locale);

  return (
    <TemplateSection density="compact" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div>
          <TemplateHeading
            as={titleAs}
            scale="subtitle"
            title={title}
            description={description}
          />
          {more ? (
            <div className="mt-4">
              <TextLink href={templateHref(locale, more.href)}>
                {more.label}
              </TextLink>
            </div>
          ) : null}
        </div>
        <div>
          <PriceList
            titleAs="h3"
            groups={[{ title: fees.groupTitle, items: fees.items }]}
          />
          <p className="mt-6 text-tpl-sm text-tpl-ink-muted">{fees.note}</p>
        </div>
      </div>
    </TemplateSection>
  );
}
