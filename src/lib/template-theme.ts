import type { CSSProperties } from "react";

/**
 * Thème d'un template, sous forme de tokens.
 *
 * Chaque champ correspond à une variable runtime `--tpl-*` déclarée dans
 * `src/app/globals.css` (bloc `[data-template]`). Les champs absents gardent
 * la valeur de repli de ce bloc : `inkMuted` et `line` sont alors dérivés de
 * `ink`, et les ombres aussi. Les couleurs s'écrivent de préférence en oklch.
 */
export type TemplateThemeTokens = {
  ink: string;
  surface: string;
  raised: string;
  accent: string;
  accentInk: string;
  inverse: string;
  inverseInk: string;
  /**
   * Troisième fond clair (bandeau, section teintée, carte pâle), classe
   * `bg-tpl-tint` et ton `tint` de `TemplateSection`, `TemplateCard`,
   * `TemplatePanel` et `topBarTone`. Repli : `surface` foncée de 6 % d'encre.
   * `inkMuted` et `eyebrow` doivent y garder 4,5:1.
   */
  tint?: string;
  inkMuted?: string;
  /**
   * Teinte des sur-titres (`eyebrow` de `TemplateHeading`, classe
   * `text-tpl-eyebrow`). Repli : `inkMuted`. Contraste ≥ 4,5:1 sur `surface` et
   * `raised`.
   */
  eyebrow?: string;
  /** Même rôle sur fond inverse. Repli : l'encre secondaire inverse. */
  eyebrowInverse?: string;
  line?: string;
  radius?: string;
  radiusPill?: string;
  fontDisplay?: string;
  fontText?: string;
  /**
   * Graisse des titres en police d'affichage (nombre CSS, ex. `400`). Repli :
   * 600. Une police sans graisse grasse (serif d'affichage en `400`
   * seulement) la met à `400` pour éviter un gras synthétique. S'applique aux
   * titres du kit (`TemplateHeading`, titre de `TemplateCard`, marque du
   * shell) ; un titre écrit dans une vue prend la classe
   * `font-(weight:--tpl-display-weight)`.
   */
  fontDisplayWeight?: number;
  shadowSm?: string;
  shadowLg?: string;
  /**
   * Rayon de la carte d'en-tête `header="floating"` du shell : `9999px` pour
   * une pilule, `0` pour un cadre droit. Repli : `--tpl-radius`. Sans effet
   * sur les autres en-têtes.
   */
  headerRadius?: string;
  /** Largeur de la colonne `header="rail"` du shell (repli : `18.125rem`, 290 px). */
  railWidth?: string;
};

const TOKEN_VARIABLES: Record<keyof TemplateThemeTokens, `--tpl-${string}`> = {
  ink: "--tpl-ink",
  surface: "--tpl-surface",
  raised: "--tpl-raised",
  accent: "--tpl-accent",
  accentInk: "--tpl-accent-ink",
  inverse: "--tpl-inverse",
  inverseInk: "--tpl-inverse-ink",
  tint: "--tpl-tint",
  inkMuted: "--tpl-ink-muted",
  eyebrow: "--tpl-eyebrow",
  eyebrowInverse: "--tpl-eyebrow-inverse",
  line: "--tpl-line",
  radius: "--tpl-radius",
  radiusPill: "--tpl-radius-pill",
  fontDisplay: "--tpl-font-display",
  fontText: "--tpl-font-text",
  fontDisplayWeight: "--tpl-display-weight",
  shadowSm: "--tpl-shadow-sm",
  shadowLg: "--tpl-shadow-lg",
  headerRadius: "--tpl-header-radius",
  railWidth: "--tpl-rail-width",
};

/**
 * Style inline à poser sur l'élément `[data-template]` d'un template.
 * Ne renvoie que les variables des champs fournis.
 */
export function themeStyle(tokens: TemplateThemeTokens): CSSProperties {
  const style: Record<string, string> = {};

  for (const key of Object.keys(TOKEN_VARIABLES) as Array<
    keyof TemplateThemeTokens
  >) {
    const value = tokens[key];

    if (value !== undefined) {
      style[TOKEN_VARIABLES[key]] = String(value);
    }
  }

  return style as CSSProperties;
}
