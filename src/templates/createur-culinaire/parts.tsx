import {
  Briefcase,
  CakeSlice,
  Heart,
  Truck,
  Users,
  UtensilsCrossed,
  Wheat,
  type LucideIcon,
} from "lucide-react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { createurCulinaire } from "@/content/templates/createur-culinaire";
import type { CreateurCulinaireIconKey } from "@/content/templates/createur-culinaire";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/createur-culinaire.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<CreateurCulinaireIconKey, LucideIcon> = {
  briefcase: Briefcase,
  "cake-slice": CakeSlice,
  heart: Heart,
  truck: Truck,
  users: Users,
  "utensils-crossed": UtensilsCrossed,
  wheat: Wheat,
};

/** Numéro d'ordre sur deux chiffres (« 01 »), décor des listes numérotées. */
export function ordinal(index: number): string {
  return String(index + 1).padStart(2, "0");
}

/** Filet fin, encre pleine : le trait de maquette du template. */
export const RULE = "border-t border-tpl-ink";

/**
 * Bande de fin de page, sur le fond inverse : titre, phrase, demande de devis
 * et appel. Les textes de la bande viennent de la page qui l'utilise.
 */
export function ClosingCta({
  locale,
  title,
  text,
}: {
  locale: TemplateLocale;
  title: string;
  text: string;
}) {
  const copy = getTemplateCopy(createurCulinaire, locale);

  return (
    <TemplateSection
      tone="inverse"
      density="spacious"
      title={title}
      description={text}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <TemplateLink
          href={templateHref(locale, createurCulinaire.paths.commande)}
          variant="inverse"
          shape="square"
        >
          {copy.cta.quote}
        </TemplateLink>
        <TemplateLink
          href={copy.phone.href}
          variant="outline"
          shape="square"
          icon={false}
          className="tabular-nums"
        >
          {copy.phone.label}
        </TemplateLink>
      </div>
    </TemplateSection>
  );
}
