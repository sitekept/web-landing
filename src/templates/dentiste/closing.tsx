import { CalendarDays, Phone } from "lucide-react";

import {
  TemplateHeading,
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { dentiste } from "@/content/templates/dentiste";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Fin de page : le rendez-vous, le téléphone, puis l'adresse et les horaires
 * (8 colonnes de texte, 4 de coordonnées). `skip` retire le bouton de la page
 * courante (la page de rendez-vous n'a pas besoin de se renvoyer à elle-même).
 */
export function ClosingBand({
  locale,
  skip,
}: {
  locale: TemplateLocale;
  skip?: "rendezVous";
}) {
  const copy = getTemplateCopy(dentiste, locale);
  const { info, closing } = copy;

  return (
    <TemplateSection tone="inverse" density="compact">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <TemplateHeading
            scale="title"
            title={closing.title}
            description={closing.description}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {skip === "rendezVous" ? null : (
              <TemplateLink
                href={templateHref(locale, dentiste.paths.rendezVous)}
                variant="inverse"
                icon={<CalendarDays aria-hidden="true" className="size-4" />}
              >
                {copy.cta.book}
              </TemplateLink>
            )}
            <TemplateLink
              href={copy.phone.href}
              variant="outline"
              icon={<Phone aria-hidden="true" className="size-4" />}
              className="border-tpl-inverse-ink/40 text-tpl-inverse-ink tabular-nums hover:border-tpl-inverse-ink hover:bg-tpl-inverse-ink/10"
            >
              {copy.phone.label}
            </TemplateLink>
          </div>
        </div>

        <dl className="space-y-5 text-tpl-sm lg:col-span-4">
          <div>
            <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
              {info.addressLabel}
            </dt>
            <dd className="mt-1">{info.address}</dd>
          </div>
          <div>
            <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
              {info.hoursLabel}
            </dt>
            <dd className="mt-1 space-y-1 tabular-nums">
              {info.hours.map((row) => (
                <p key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </p>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </TemplateSection>
  );
}
