import { type Locale, defaultLocale } from "@/i18n/config";

/**
 * Locale du site.
 *
 * Le site ne sert plus que le français. La locale était auparavant résolue à
 * partir d'un cookie puis de l'en-tête `Accept-Language`, ce qui appelait
 * `cookies()` et `headers()` depuis le layout racine — et basculait de ce fait
 * **l'intégralité des routes en rendu dynamique**, sans aucune mise en cache
 * CDN possible (`cache-control: no-store` sur toutes les pages).
 *
 * Servir une locale constante restaure le prerendering statique. La version
 * anglaise n'était de toute façon pas indexable : elle partageait l'URL de la
 * version française, le contenu variant selon un cookie.
 *
 * La signature reste asynchrone pour ne pas modifier les quinze appelants ;
 * elle n'effectue plus aucune lecture dynamique.
 */
export async function getUserLocale(): Promise<Locale> {
  return defaultLocale;
}
