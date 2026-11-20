import type { Metadata } from "next";

import type {
  TemplateCopyBase,
  TemplateDefinitionLike,
  TemplateLocale,
  TemplatePageKey,
} from "@/content/templates/types";
import { getTemplateCopy } from "@/content/templates/types";
import { absoluteUrl } from "@/lib/localized-routes";
import { templateHref } from "@/components/template-kit/href";

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
 * - `alternates.languages` : hreflang `fr` ↔ `en` plus `x-default` (le
 *   français), en URL absolues comme `getLanguageAlternates` du site. Émis
 *   seulement si le template a sa version anglaise (`def.copy.en`). Pas de
 *   `canonical` : une page ne pointe jamais vers l'autre langue, et les démos
 *   restent hors du sitemap.
 */
export function buildTemplatePageMetadata<Copy extends TemplateCopyBase>(
  def: TemplateDefinitionLike<Copy>,
  locale: TemplateLocale,
  page: TemplatePageKey<Copy>
): Metadata {
  const { title, description } = getTemplateCopy(def, locale).meta[page];
  const metadata: Metadata = {
    title,
    description,
    robots: { index: false, follow: true },
  };

  if (def.copy.en) {
    const frPath = def.paths[page];
    const fr = absoluteUrl(templateHref("fr", frPath));

    metadata.alternates = {
      languages: {
        fr,
        en: absoluteUrl(templateHref("en", frPath)),
        "x-default": fr,
      },
    };
  }

  return metadata;
}
