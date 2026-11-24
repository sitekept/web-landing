import type { Metadata } from "next";

import type {
  TemplateCopyBase,
  TemplateDefinitionLike,
  TemplateLocale,
  TemplatePageKey,
} from "@/content/templates/types";
import { getTemplateCopy, hasTemplateLocale } from "@/content/templates/types";
import { absoluteUrl } from "@/lib/localized-routes";
import { openGraphImagePath } from "@/lib/page-metadata";
import { getMessage } from "@/lib/site-messages";
import { templateHref } from "@/lib/template-href";

const OPEN_GRAPH_LOCALE = { fr: "fr_FR", en: "en_US" } as const;

/**
 * Métadonnées d'une page de template, dans la langue demandée.
 *
 * - `title` et `description` viennent du bloc `meta` de la copie. Le layout
 *   racine des démos (`buildRootMetadata`) pose un `title` chaîne, sans
 *   `template` : le titre de la page n'est donc pas préfixé ni doublé.
 * - `robots: noindex, follow` : une démo n'a pas à être indexée, et cela aligne
 *   la balise sur l'en-tête `X-Robots-Tag` posé par `headers()` de next.config.ts (le layout
 *   racine déclarait sinon `index, follow`, contradictoire).
 *
 * - `openGraph` et `twitter` : titre et description de la page, `url` absolue
 *   dans sa langue, `locale` (`fr_FR` / `en_US`) et `alternateLocale` quand la
 *   définition a l'autre langue, `siteName` repris de la racine. Une page qui
 *   définit `openGraph` ou `twitter` remplace celui du layout racine (sinon le
 *   partage reprendrait le titre et la description du site) : l'image
 *   (`/opengraph-image` en français, `/en/opengraph-image` en anglais, voir
 *   `openGraphImagePath`) et le `creator` Twitter sont donc redéclarés, comme
 *   dans `page-metadata.ts`.
 * - `alternates.languages` : hreflang `fr` ↔ `en` plus `x-default` (le
 *   français), en URL absolues comme `getLanguageAlternates` du site. Émis
 *   seulement si le template a sa version anglaise (`en` dans `def.copy`). Pas de
 *   `canonical` : une page ne pointe jamais vers l'autre langue, et les démos
 *   restent hors du sitemap.
 *
 * `locale` est typée par les langues que la définition déclare : une route
 * anglaise sur une définition `"fr"` seule ne compile pas (pas de repli
 * silencieux sur le français).
 */
export function buildTemplatePageMetadata<
  Copy extends TemplateCopyBase,
  Locales extends TemplateLocale,
>(
  def: TemplateDefinitionLike<Copy, Locales>,
  locale: NoInfer<Locales>,
  page: TemplatePageKey<Copy>
): Metadata {
  const { title, description } = getTemplateCopy(def, locale).meta[page];
  const frPath = def.paths[page];
  const hasEnglish = hasTemplateLocale(def, "en");
  const metadata: Metadata = {
    title,
    description,
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: absoluteUrl(templateHref(locale, frPath)),
      siteName: getMessage(locale, "metadata.openGraph.siteName"),
      locale: OPEN_GRAPH_LOCALE[locale],
      ...(hasEnglish && {
        alternateLocale: OPEN_GRAPH_LOCALE[locale === "fr" ? "en" : "fr"],
      }),
      type: "website",
      // Déclarée explicitement : sans elle, la carte `summary_large_image`
      // perd l'image du layout racine (voir `page-metadata.ts`).
      images: [
        { url: openGraphImagePath(locale), width: 1200, height: 630 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: getMessage(locale, "metadata.twitter.creator"),
      images: [openGraphImagePath(locale)],
    },
  };

  if (hasEnglish) {
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
