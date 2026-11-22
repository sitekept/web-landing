import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Voile rosé du héros d’accueil : halo en haut à gauche (teinte rosée mêlée au
 * rose des sur-titres), puis dégradé de la crème vers le blanc. Que des tokens.
 */
export const HERO_VEIL =
  "bg-[radial-gradient(circle_at_top_left,color-mix(in_oklch,var(--tpl-tint)_62%,var(--tpl-eyebrow-inverse)),transparent_35%),linear-gradient(180deg,var(--tpl-surface)_0%,color-mix(in_oklch,var(--tpl-surface)_40%,var(--tpl-raised))_100%)]";

/** Sur-titre en majuscules espacées (dans une carte ou sur un fond sombre). */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Survol des cartes et capsules : léger soulèvement, coupé en mouvement réduit. */
export const LIFT =
  "transition duration-500 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-none";
