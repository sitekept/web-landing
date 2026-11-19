import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Carte et encart du kit de templates.
 *
 * Remplacent les `*Card` / `*Panel` / `*Block` redéclarés par chaque démo.
 * Fond, bordure, rayon et ombres viennent uniquement des tokens `--tpl-*`
 * (voir `src/lib/template-theme.ts`) ; le survol est en CSS pur et son
 * déplacement est coupé sous `prefers-reduced-motion`.
 *
 * Règle du kit : un nouveau besoin visuel devient d'abord un token. Il ne
 * devient un enum (prop) que s'il change le DOM ou la structure, et jamais un
 * nom de template.
 */

export type TemplateCardTitleLevel = "h2" | "h3" | "h4";
export type TemplateCardElevation = "flat" | "raised" | "floating";
export type TemplatePanelTone = "raised" | "surface";

const ELEVATION: Record<TemplateCardElevation, string> = {
  flat: "shadow-none",
  raised: "shadow-tpl-sm",
  floating: "shadow-tpl-lg",
};

/**
 * Tailwind v4 déplace via la propriété `translate`, pas `transform` :
 * `motion-reduce:transform-none` serait sans effet. `motion-reduce:hover:`
 * garde la spécificité de `hover:` et sort après lui dans le CSS compilé.
 */
const INTERACTIVE =
  "transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-tpl-lg focus-within:shadow-tpl-lg motion-reduce:hover:translate-none";

const PANEL_TONE: Record<TemplatePanelTone, string> = {
  raised: "bg-tpl-raised",
  surface: "bg-tpl-surface",
};

export type TemplateCardProps = {
  title?: ReactNode;
  titleAs?: TemplateCardTitleLevel;
  elevation?: TemplateCardElevation;
  /** Survol : léger soulèvement et ombre `lg` (déplacement coupé en reduced motion). */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

export function TemplateCard({
  title,
  titleAs: Title = "h3",
  elevation = "raised",
  interactive = false,
  className,
  children,
}: TemplateCardProps) {
  const hasTitle = title !== undefined && title !== null && title !== "";

  return (
    <article
      className={cn(
        "rounded-tpl border border-tpl-line bg-tpl-raised p-6 text-tpl-ink",
        ELEVATION[elevation],
        interactive ? INTERACTIVE : null,
        className
      )}
    >
      {hasTitle ? (
        <Title className="font-tpl-display text-tpl-lg leading-tpl-display font-semibold text-balance">
          {title}
        </Title>
      ) : null}
      {/* Pas de `cn()` ici : tailwind-merge confondrait `text-tpl-sm` et
          `text-tpl-ink-muted` (même préfixe, échelle inconnue de lui). */}
      <div
        className={
          hasTitle
            ? "mt-3 text-tpl-sm text-tpl-ink-muted"
            : "text-tpl-sm text-tpl-ink-muted"
        }
      >
        {children}
      </div>
    </article>
  );
}

export type TemplatePanelProps = {
  tone?: TemplatePanelTone;
  className?: string;
  children: ReactNode;
};

/** Encart non titré (liste d'arguments, horaires, coordonnées…). */
export function TemplatePanel({
  tone = "raised",
  className,
  children,
}: TemplatePanelProps) {
  return (
    <div
      className={cn(
        "rounded-tpl border border-tpl-line p-6 text-tpl-ink",
        PANEL_TONE[tone],
        className
      )}
    >
      {children}
    </div>
  );
}
