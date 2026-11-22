import { CalendarCheck, FileText, Phone } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { garageAuto } from "@/content/templates/garage-auto";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Appel à l'action de fin de page : bande rouge signal, titre, puis les trois
 * portes d'entrée (devis, rendez-vous, téléphone). `skip` retire celle de la
 * page courante. Le texte vient de la copie de la page (`closing`).
 */
export function ClosingBand({
  locale,
  title,
  description,
  skip,
}: {
  locale: TemplateLocale;
  title: string;
  description: string;
  skip?: "devis" | "rendezVous";
}) {
  const copy = getTemplateCopy(garageAuto, locale);
  const { paths } = garageAuto;
  const ghost =
    "whitespace-nowrap border-tpl-accent-ink text-tpl-accent-ink hover:border-tpl-accent-ink hover:bg-tpl-accent-ink/10";

  return (
    <TemplateSection
      tone="bare"
      density="compact"
      className="bg-tpl-accent text-tpl-accent-ink"
    >
      <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
        <TemplateHeading
          scale="title"
          title={title}
          description={description}
          className="text-tpl-accent-ink [&_p]:text-tpl-accent-ink"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {skip === "rendezVous" ? null : (
            <TemplateLink
              href={templateHref(locale, paths.rendezVous)}
              variant="inverse"
              icon={<CalendarCheck aria-hidden="true" className="size-4" />}
              className="whitespace-nowrap"
            >
              {copy.cta.appointment}
            </TemplateLink>
          )}
          {skip === "devis" ? null : (
            <TemplateLink
              href={templateHref(locale, paths.devis)}
              variant="outline"
              icon={<FileText aria-hidden="true" className="size-4" />}
              className={ghost}
            >
              {copy.cta.quote}
            </TemplateLink>
          )}
          <TemplateLink
            href={copy.phone.href}
            variant="outline"
            icon={<Phone aria-hidden="true" className="size-4" />}
            className={`${ghost} tabular-nums`}
          >
            {copy.phone.label}
          </TemplateLink>
        </div>
      </div>
    </TemplateSection>
  );
}
