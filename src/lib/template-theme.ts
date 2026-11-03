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
  inkMuted?: string;
  line?: string;
  radius?: string;
  radiusPill?: string;
  fontDisplay?: string;
  fontText?: string;
  shadowSm?: string;
  shadowLg?: string;
};

const TOKEN_VARIABLES: Record<keyof TemplateThemeTokens, `--tpl-${string}`> = {
  ink: "--tpl-ink",
  surface: "--tpl-surface",
  raised: "--tpl-raised",
  accent: "--tpl-accent",
  accentInk: "--tpl-accent-ink",
  inverse: "--tpl-inverse",
  inverseInk: "--tpl-inverse-ink",
  inkMuted: "--tpl-ink-muted",
  line: "--tpl-line",
  radius: "--tpl-radius",
  radiusPill: "--tpl-radius-pill",
  fontDisplay: "--tpl-font-display",
  fontText: "--tpl-font-text",
  shadowSm: "--tpl-shadow-sm",
  shadowLg: "--tpl-shadow-lg",
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
      style[TOKEN_VARIABLES[key]] = value;
    }
  }

  return style as CSSProperties;
}
