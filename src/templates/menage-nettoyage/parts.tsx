import {
  Check,
  ClipboardList,
  Sparkles,
  WavesLadder,
  type LucideIcon,
} from "lucide-react";

import type { MenageNettoyageIconKey } from "@/content/templates/menage-nettoyage";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/menage-nettoyage.ts`). Une clé inconnue échoue au
 * `type-check`.
 */
export const ICONS: Record<MenageNettoyageIconKey, LucideIcon> = {
  sparkles: Sparkles,
  clipboard: ClipboardList,
  ladder: WavesLadder,
  check: Check,
};

/** Étiquette en petites capitales espacées (titre de carte, légende). */
export const LABEL_CLASS =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";
