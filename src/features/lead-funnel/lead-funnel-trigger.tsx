"use client";

import { useContext, type ComponentPropsWithRef, type MouseEvent } from "react";
import { LeadFunnelContext } from "./lead-funnel-context";
import {
  buildLeadFunnelHref,
  type MetierSlug,
  type OfferSlug,
} from "./lead-options";

export interface LeadFunnelTriggerProps
  extends Omit<ComponentPropsWithRef<"a">, "href"> {
  /** Offres cochées à l'ouverture. Aucune : la sélection en cours est gardée. */
  offers?: readonly OfferSlug[];
  /** Métier présélectionné à l'étape 2. */
  metier?: MetierSlug;
}

/**
 * Déclencheur du tunnel, utilisable depuis un Server Component, seul ou dans
 * `<Button asChild>` (il reçoit alors les classes du bouton).
 *
 * C'est un vrai lien vers le formulaire de secours (`/?offre=…#contact`) :
 * sans JavaScript, ou avant l'hydratation, il y mène. Une fois le fournisseur
 * hydraté, un clic gauche simple ouvre la modale. Ctrl, Cmd, Maj, Alt ou le
 * clic du milieu gardent le comportement normal d'un lien (nouvel onglet…).
 */
export function LeadFunnelTrigger({
  offers,
  metier,
  onClick,
  onFocus,
  onPointerEnter,
  onPointerDown,
  ...props
}: LeadFunnelTriggerProps) {
  const funnel = useContext(LeadFunnelContext);
  const href = buildLeadFunnelHref(offers, metier);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      !funnel ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    funnel.open({ offers, metier, href }, event.currentTarget);
  };

  return (
    <a
      {...props}
      href={href}
      onClick={handleClick}
      onFocus={(event) => {
        onFocus?.(event);
        funnel?.preload();
      }}
      onPointerEnter={(event) => {
        onPointerEnter?.(event);
        funnel?.preload();
      }}
      onPointerDown={(event) => {
        onPointerDown?.(event);
        funnel?.preload();
      }}
    />
  );
}
