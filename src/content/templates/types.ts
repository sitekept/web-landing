/**
 * Langues des templates de démonstration.
 *
 * Volontairement distinct de `SiteLocale` (site marketing) : les démos suivent
 * leurs propres URL (`/<slug>` en français, `/en/<slug>` en anglais).
 */
export type TemplateLocale = "fr" | "en";

export const TEMPLATE_LOCALES = ["fr", "en"] as const;
