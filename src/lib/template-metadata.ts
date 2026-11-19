import type { Metadata } from "next";

import type {
  TemplateCopyBase,
  TemplateDefinitionLike,
  TemplateLocale,
  TemplatePageKey,
} from "@/content/templates/types";
import { getTemplateCopy } from "@/content/templates/types";

/**
 * Métadonnées d'une page de template, dans la langue demandée.
 *
 * - `title` et `description` viennent du bloc `meta` de la copie. Le layout
 *   racine des démos (`buildRootMetadata`) pose un `title` chaîne, sans
 *   `template` : le titre de la page n'est donc pas préfixé ni doublé.
 * - `robots: noindex, follow` : une démo n'a pas à être indexée, et cela aligne
 *   la balise sur l'en-tête `X-Robots-Tag` posé par le middleware (le layout
 *   racine déclarait sinon `index, follow`, contradictoire).
 *
 * Tâche 1e (version anglaise) : c'est ici qu'on ajoutera
 * `alternates.languages` (hreflang `fr` ↔ `en`, plus `x-default`), calculé
 * avec `def.paths[page]` et `templateHref(locale, path)`. Rien n'est émis tant
 * qu'un template n'a pas sa version anglaise (`def.copy.en` absent).
 */
export function buildTemplatePageMetadata<Copy extends TemplateCopyBase>(
  def: TemplateDefinitionLike<Copy>,
  locale: TemplateLocale,
  page: TemplatePageKey<Copy>
): Metadata {
  const { title, description } = getTemplateCopy(def, locale).meta[page];

  return {
    title,
    description,
    robots: { index: false, follow: true },
    // alternates: { languages: { fr: …, en: … } } — à ajouter en 1e.
  };
}
