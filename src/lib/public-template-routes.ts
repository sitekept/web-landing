import { sitekeptPublicTemplateSlugs } from "@/content/admin-template-catalog";

/**
 * En-tête de requête posé par le middleware sur les pages de démonstration,
 * lu par le layout racine pour afficher le bandeau.
 */
export const DEMO_HEADER = "x-sitekept-demo";

export const PUBLIC_TEMPLATE_SLUGS = sitekeptPublicTemplateSlugs;

/**
 * Démos hébergées sur sitekept.com mais absentes du catalogue public : elles
 * ont une route locale et répondent 200, donc elles sont indexables si on ne
 * les traite pas comme les autres démos.
 */
const UNLISTED_DEMO_SLUGS = ["balinjera"] as const;

/**
 * Tous les slugs de démonstration servis par ce domaine, publics ou non.
 * Utilisé par le middleware pour poser `X-Robots-Tag: noindex, follow`.
 */
export const DEMO_SLUGS: readonly string[] = [
  ...PUBLIC_TEMPLATE_SLUGS,
  ...UNLISTED_DEMO_SLUGS,
];

function matchesSlug(pathname: string, slugs: readonly string[]): boolean {
  return slugs.some((slug) => {
    const prefix = `/${slug}`;
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  });
}

export function isPublicTemplatePathname(pathname: string | null): boolean {
  if (!pathname) {
    return false;
  }

  return matchesSlug(pathname, PUBLIC_TEMPLATE_SLUGS);
}

/**
 * Vrai pour une page de démonstration et toutes ses sous-pages.
 */
export function isDemoPathname(pathname: string | null): boolean {
  if (!pathname) {
    return false;
  }

  return matchesSlug(pathname, DEMO_SLUGS);
}
