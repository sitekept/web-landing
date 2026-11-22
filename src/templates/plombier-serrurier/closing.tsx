import { Phone } from "lucide-react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { plombierSerrurier } from "@/content/templates/plombier-serrurier";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Bloc de contact de fin de page : panneau ambre arrondi (pas une bande pleine
 * largeur), titre, appel, devis et rappel des horaires. Le texte vient de la
 * copie de la page (`closing`).
 */
export function ClosingPanel({
  locale,
  eyebrow,
  title,
  description,
}: {
  locale: TemplateLocale;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const copy = getTemplateCopy(plombierSerrurier, locale);

  return (
    <TemplateSection tone="surface" density="compact">
      <div className="rounded-tpl bg-tpl-accent p-6 text-tpl-accent-ink shadow-tpl-lg sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow uppercase">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-tpl-display text-tpl-2xl font-(weight:--tpl-display-weight) text-balance">
              {title}
            </h2>
            <p className="mt-4 max-w-tpl-measure text-tpl-base">
              {description}
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <TemplateLink
                href={copy.phone.href}
                icon={<Phone aria-hidden="true" className="size-4" />}
                className="min-h-12 bg-tpl-inverse text-tpl-inverse-ink tabular-nums hover:bg-tpl-inverse/90"
              >
                {copy.cta.call} {copy.phone.label}
              </TemplateLink>
              <TemplateLink
                href={templateHref(locale, plombierSerrurier.paths.contact)}
                variant="outline"
                className="min-h-12 border-tpl-ink text-tpl-accent-ink"
              >
                {copy.cta.quote}
              </TemplateLink>
            </div>
            <p className="mt-4 text-tpl-sm tabular-nums">
              {copy.footer.hours}. {copy.footer.onCall}.
            </p>
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}
