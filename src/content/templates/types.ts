import type { TemplateThemeTokens } from "@/lib/template-theme";

/**
 * Langues des templates de démonstration.
 *
 * Volontairement distinct de `SiteLocale` (site marketing) : les démos suivent
 * leurs propres URL (`/<slug>` en français, `/en/<slug>` en anglais).
 */
export type TemplateLocale = "fr" | "en";

export const TEMPLATE_LOCALES = ["fr", "en"] as const;

/**
 * Élargit les littéraux d'une copie écrite `as const` : chaque chaîne devient
 * `string`, chaque nombre `number`, chaque booléen `boolean`.
 *
 * La structure est conservée : clés des objets, longueur des tuples et ordre
 * des éléments restent identiques. Le type d'une copie se dérive ainsi de la
 * version française, qui sert de référence :
 *
 * ```ts
 * const fr = { nav: { home: "Accueil" }, items: ["a", "b"] } as const;
 * type Copy = WidenLiterals<typeof fr>;
 * // { readonly nav: { readonly home: string }; readonly items: readonly [string, string] }
 * ```
 *
 * Toute traduction typée `Copy` doit donc avoir les mêmes clés et le même
 * nombre d'éléments par liste : une clé manquante échoue au `type-check`.
 */
export type WidenLiterals<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends object
        ? { [K in keyof T]: WidenLiterals<T[K]> }
        : T;

/** Titre et description d'une page (balises `<title>` et meta description). */
export type TemplatePageMeta = {
  title: string;
  description: string;
};

/**
 * Contrat minimal de la copie d'un template : un bloc `meta`, indexé par clé
 * de page (`home`, `soins`…), que lit `buildTemplatePageMetadata`.
 */
export type TemplateCopyBase = {
  meta: Record<string, TemplatePageMeta>;
};

/** Clés de page d'une copie : celles de son bloc `meta`. */
export type TemplatePageKey<Copy extends TemplateCopyBase> = keyof Copy["meta"] &
  string;

/**
 * Définition d'un template : identité, thème (tokens `--tpl-*`), chemins
 * français des pages et copie par langue.
 *
 * `Locales` liste les langues dont la copie existe. Par défaut, toutes celles
 * de `TemplateLocale` : `copy` devient alors `Record<TemplateLocale, Copy>`,
 * donc ajouter `en` est obligatoire et complet (`Copy` est dérivé de la copie
 * française avec `WidenLiterals`).
 *
 * Un template qui n'a pas encore sa version anglaise se déclare avec
 * `TemplateDefinition<"slug", Copy, "fr">`. Quand `en` arrive, on retire ce
 * troisième paramètre et on ajoute le bloc `en` : c'est tout.
 */
export type TemplateDefinition<
  Slug extends string,
  Copy extends TemplateCopyBase,
  Locales extends TemplateLocale = TemplateLocale,
> = {
  slug: Slug;
  theme: TemplateThemeTokens;
  /**
   * Chemin français de chaque page (`/dentiste/soins`). Les liens anglais s'en
   * déduisent avec `templateHref`.
   */
  paths: Record<TemplatePageKey<Copy>, string>;
  copy: Record<Locales, Copy>;
};

/**
 * Forme que lisent `getTemplateCopy` et `buildTemplatePageMetadata` : le
 * français est obligatoire, les autres langues optionnelles. Une définition à
 * `Locales` partiel ou complet y est assignable telle quelle.
 */
export type TemplateDefinitionLike<Copy extends TemplateCopyBase> = {
  slug: string;
  paths: Record<TemplatePageKey<Copy>, string>;
  copy: { fr: Copy } & Partial<Record<TemplateLocale, Copy>>;
};

/**
 * Copie d'un template dans la langue demandée. Tant qu'une langue n'a pas sa
 * copie (aucun template migré n'a encore `en`), renvoie le français.
 */
export function getTemplateCopy<Copy extends TemplateCopyBase>(
  def: TemplateDefinitionLike<Copy>,
  locale: TemplateLocale
): Copy {
  return def.copy[locale] ?? def.copy.fr;
}
