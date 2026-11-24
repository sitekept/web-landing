import {
  Building2,
  ClipboardList,
  DoorOpen,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import { menageNettoyage } from "@/content/templates/menage-nettoyage";
import type { MenageNettoyageIconKey } from "@/content/templates/menage-nettoyage";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/menage-nettoyage.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<MenageNettoyageIconKey, LucideIcon> = {
  sparkles: Sparkles,
  clipboard: ClipboardList,
  key: KeyRound,
  building: Building2,
  shield: ShieldCheck,
  users: Users,
  store: Store,
  door: DoorOpen,
};

/** Étiquette en petites capitales espacées (légende, sur-titre de carte). */
export const LABEL_CLASS =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";

/** Grille 12 colonnes des découpes 7/5 et 5/7 (écart constant, mesuré pour `sizes`). */
export const SPLIT_CLASS =
  "grid grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-10 lg:grid-cols-12";

/**
 * Photo d'une découpe 7/5 : 4/3 sous `lg`, hauteur de la colonne voisine
 * ensuite. `sizes` suit la largeur réelle de la colonne de 5 sur 12 (gouttière
 * 16, 24 puis 32 px, écart de 48 px, contenu plafonné à 1280 px).
 */
export const SPLIT_SIZES =
  "(min-width: 1344px) 506px, (min-width: 1024px) calc((100vw - 64px - 528px) * 5 / 12 + 192px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)";

/** Bande de fin de page : prix ferme, appel et devis. */
export function ClosingBand({ locale }: { locale: TemplateLocale }) {
  const copy = getTemplateCopy(menageNettoyage, locale);
  const { paths } = menageNettoyage;

  return (
    <TemplateSection density="compact" tone="inverse">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) text-balance">
            {copy.closing.title}
          </h2>
          <p className="mt-3 text-tpl-base text-pretty text-tpl-ink-muted">
            {copy.closing.text}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TemplateLink
            href={`${templateHref(locale, paths.home)}#devis`}
            variant="inverse"
            icon={false}
          >
            {copy.cta.quote}
          </TemplateLink>
          <TemplateLink
            href={copy.phone.href}
            variant="outline"
            icon={false}
            className="tabular-nums"
          >
            {copy.phone.label}
          </TemplateLink>
        </div>
      </div>
    </TemplateSection>
  );
}
