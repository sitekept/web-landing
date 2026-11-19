import type { SiteLocale } from "@/content/site-content";

/**
 * Correspondance des chemins français → anglais.
 *
 * Fichier sans dépendance de contenu : il peut être importé par des composants
 * client (navigation) sans embarquer les articles du blog dans le bundle. La
 * table complète, articles et pages métier compris, est construite côté
 * serveur dans src/lib/localized-routes.ts et transmise en prop.
 *
 * Le français reste servi à la racine, sans préfixe : aucune URL existante ne
 * change. L'anglais vit sous /en, avec des slugs anglais.
 */

export type PathMap = Readonly<Record<string, string>>;

export const STATIC_PATH_MAP: PathMap = {
  "/": "/en",
  "/templates": "/en/templates",
  "/tarifs": "/en/pricing",
  "/realization": "/en/our-work",
  "/blog": "/en/blog",
  "/seo-geo": "/en/seo-geo",
  "/privacy": "/en/privacy",
  "/terms": "/en/terms",
  "/mentions-legales": "/en/legal-notice",
};

/**
 * Traduit un lien interne écrit avec son chemin français.
 *
 * Les chemins absents de la table — démos de templates, liens externes —
 * sont renvoyés tels quels : les démos n'existent qu'en français.
 */
export function localizeHref(
  href: string,
  locale: SiteLocale,
  map: PathMap
): string {
  if (locale === "fr" || !href.startsWith("/")) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex) || "/";
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
  const localized = map[path] ?? path;

  return `${localized}${hash}`;
}

/**
 * Retrouve le chemin équivalent dans l'autre langue, à partir du chemin
 * courant. Sert au sélecteur de langue.
 */
export function getAlternatePath(
  pathname: string,
  currentLocale: SiteLocale,
  map: PathMap
): string {
  if (currentLocale === "fr") {
    return map[pathname] ?? "/en";
  }

  const entry = Object.entries(map).find(([, en]) => en === pathname);
  return entry ? entry[0] : "/";
}
