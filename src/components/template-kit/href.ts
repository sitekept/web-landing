import type { TemplateLocale } from "@/content/templates/types";

/**
 * Liens internes des templates, selon la langue.
 *
 * Les chemins passés ici sont ceux du site de démonstration en français
 * (`/dentiste/soins`). En anglais, le même chemin est servi sous `/en`
 * (`/en/dentiste/soins`). Fonctions pures, sans dépendance à React : elles
 * s'utilisent aussi bien côté serveur que côté client.
 */

/** Schéma (`https:`, `mailto:`, `tel:`…), URL relative au protocole ou ancre. */
const NON_PATH = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i;

/** Sépare le chemin de son suffixe (`?query` et/ou `#ancre`), conservé tel quel. */
function splitSuffix(path: string): [pathname: string, suffix: string] {
  const index = path.search(/[?#]/);

  return index === -1 ? [path, ""] : [path.slice(0, index), path.slice(index)];
}

function isEnglishPathname(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

/** `/` devient `/en`, `/x` devient `/en/x` ; un chemin déjà en `/en` reste tel quel. */
function toEnglishPathname(pathname: string): string {
  if (isEnglishPathname(pathname)) {
    return pathname;
  }

  return pathname === "/" ? "/en" : `/en${pathname}`;
}

/** Langue d'une page de démonstration, déduite de son chemin. */
export function templateLocaleFromPathname(pathname: string): TemplateLocale {
  return isEnglishPathname(splitSuffix(pathname)[0]) ? "en" : "fr";
}

/**
 * Lien interne d'un template dans la langue demandée.
 *
 * - `fr` : le chemin tel quel.
 * - `en` : le chemin préfixé par `/en`, sans double slash, avec la query et
 *   l'ancre conservées (`/dentiste#tarifs` → `/en/dentiste#tarifs`).
 * - URL absolues (`https:`, `mailto:`, `tel:`…), ancres seules (`#contenu`) et
 *   chemins relatifs (sans `/` initial) : renvoyés tels quels.
 */
export function templateHref(locale: TemplateLocale, path: string): string {
  if (locale === "fr" || NON_PATH.test(path) || !path.startsWith("/")) {
    return path;
  }

  const [pathname, suffix] = splitSuffix(path);

  return `${toEnglishPathname(pathname)}${suffix}`;
}

/**
 * Équivalent d'une page dans l'autre langue : chemin FR vers EN et inversement.
 * Un chemin déjà dans la langue cible est renvoyé tel quel (idempotent).
 */
export function switchTemplateLocale(
  pathname: string,
  target: TemplateLocale
): string {
  const [path, suffix] = splitSuffix(pathname);
  const current = path === "" ? "/" : path;

  if (target === "en") {
    return `${toEnglishPathname(current)}${suffix}`;
  }

  if (isEnglishPathname(current)) {
    return `${current.slice("/en".length) || "/"}${suffix}`;
  }

  return `${current}${suffix}`;
}
