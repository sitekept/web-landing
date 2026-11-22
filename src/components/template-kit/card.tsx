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
/**
 * `raised` : fond `--tpl-raised`. `surface` : fond de page. `inverse` : carte
 * sombre (ou claire dans un thème sombre) posée sur une section claire, ou
 * ressortant d'une section `inverse`. Pose `data-tone="inverse"` : la règle de
 * `globals.css` rebinde `--tpl-ink`, `--tpl-ink-muted`, `--tpl-line` et
 * `--tpl-raised` sur la paire inverse, donc le texte, la bordure et le texte
 * secondaire restent lisibles, et le fond (`--tpl-raised` rebindé : l'inverse
 * éclairci de 7 %) se détache d'une section inverse. Un lien plein
 * (`TemplateLink` `solid`) pose l'accent, que cette règle ne rebinde pas : sur
 * une carte inverse, utiliser `variant="inverse"`.
 */
export type TemplateCardTone = "raised" | "surface" | "inverse";
export type TemplatePanelTone = TemplateCardTone;
/** Place de l'icône : au-dessus du titre, ou à sa gauche sur la même ligne. */
export type TemplateCardIconPosition = "top" | "inline";

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

/** `inverse` garde `bg-tpl-raised` : c'est `data-tone` qui rebinde la variable. */
const TONE: Record<TemplateCardTone, string> = {
  raised: "bg-tpl-raised",
  surface: "bg-tpl-surface",
  inverse: "bg-tpl-raised",
};

export type TemplateCardProps = {
  title?: ReactNode;
  titleAs?: TemplateCardTitleLevel;
  /**
   * Icône ou pastille d'icône de la carte, décorative (`aria-hidden` à la
   * charge de l'appelant). Rendue hors du titre : le nom du titre reste le
   * seul texte. Peut être un bloc plein largeur (pastille et numéro côte à
   * côte, par exemple) en position `top`.
   */
  icon?: ReactNode;
  /** `top` (défaut) : au-dessus du titre. `inline` : à gauche du titre, centrée sur lui. */
  iconPosition?: TemplateCardIconPosition;
  /** Fond de la carte (`raised` par défaut). */
  tone?: TemplateCardTone;
  elevation?: TemplateCardElevation;
  /** Survol : léger soulèvement et ombre `lg` (déplacement coupé en reduced motion). */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

export function TemplateCard({
  title,
  titleAs: Title = "h3",
  icon,
  iconPosition = "top",
  tone = "raised",
  elevation = "raised",
  interactive = false,
  className,
  children,
}: TemplateCardProps) {
  const hasTitle = title !== undefined && title !== null && title !== "";
  const hasIcon = icon !== undefined && icon !== null && icon !== false;
  // Sans titre, il n'y a rien à côté de quoi se placer : l'icône passe au-dessus.
  const inline = hasIcon && hasTitle && iconPosition === "inline";

  const heading = hasTitle ? (
    <Title
      className={cn(
        "font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) text-balance",
        inline ? "min-w-0" : null
      )}
    >
      {title}
    </Title>
  ) : null;

  return (
    <article
      data-tone={tone === "inverse" ? "inverse" : undefined}
      className={cn(
        "rounded-tpl border border-tpl-line p-6 text-tpl-ink",
        TONE[tone],
        ELEVATION[elevation],
        interactive ? INTERACTIVE : null,
        className
      )}
    >
      {inline ? (
        <div className="flex items-center gap-3">
          <div className="shrink-0">{icon}</div>
          {heading}
        </div>
      ) : (
        <>
          {hasIcon ? (
            <div className={hasTitle ? "mb-5" : "mb-4"}>{icon}</div>
          ) : null}
          {heading}
        </>
      )}
      <div
        className={cn(
          "text-tpl-sm text-tpl-ink-muted",
          hasTitle ? "mt-3" : null
        )}
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
      data-tone={tone === "inverse" ? "inverse" : undefined}
      className={cn(
        "rounded-tpl border border-tpl-line p-6 text-tpl-ink",
        TONE[tone],
        className
      )}
    >
      {children}
    </div>
  );
}
