import { Phone } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { electricien } from "@/content/templates/electricien";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Appel à l'action de fin de page : bande jaune, titre, deux liens (devis puis
 * appel). Le texte vient de la copie de la page (`closing`).
 */
export function ClosingBand({
  locale,
  title,
  description,
}: {
  locale: TemplateLocale;
  title: string;
  description: string;
}) {
  const copy = getTemplateCopy(electricien, locale);

  return (
    <TemplateSection
      tone="bare"
      density="compact"
      className="border-t border-tpl-ink bg-tpl-accent text-tpl-accent-ink"
    >
      <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
        <TemplateHeading
          scale="title"
          title={title}
          description={description}
          className="[&_p]:text-tpl-accent-ink"
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <TemplateLink
            href={templateHref(locale, electricien.paths.contact)}
            className="whitespace-nowrap bg-tpl-inverse text-tpl-inverse-ink hover:bg-tpl-inverse/90"
          >
            {copy.cta.quote}
          </TemplateLink>
          <TemplateLink
            href={copy.phone.href}
            variant="outline"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className="whitespace-nowrap border-tpl-ink text-tpl-accent-ink tabular-nums"
          >
            {copy.phone.label}
          </TemplateLink>
        </div>
      </div>
    </TemplateSection>
  );
}
