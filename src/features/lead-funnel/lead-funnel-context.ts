"use client";

import { createContext } from "react";
import type { MetierSlug, OfferSlug } from "./lead-options";

export interface LeadFunnelOpenOptions {
  offers?: readonly OfferSlug[];
  metier?: MetierSlug;
  /** Lien de secours, suivi si le code de la modale ne se charge pas. */
  href: string;
}

export interface LeadFunnelActions {
  /** Ouvre la modale ; le focus reviendra sur `trigger` à la fermeture. */
  open: (options: LeadFunnelOpenOptions, trigger: HTMLElement | null) => void;
  /** Charge le code de la modale en avance (survol, focus, appui). */
  preload: () => void;
}

/**
 * Actions du tunnel, fournies par `LeadFunnelProvider`. Valeur stable : les
 * déclencheurs ne se re-rendent pas pendant la saisie. `null` hors du
 * fournisseur ou avant l'hydratation : le lien garde alors son comportement.
 */
export const LeadFunnelContext = createContext<LeadFunnelActions | null>(null);
