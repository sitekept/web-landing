import { sitekeptPublicTemplateSlugs } from "@/content/admin-template-catalog";

export const PUBLIC_TEMPLATE_SLUGS = sitekeptPublicTemplateSlugs;

/**
 * Démos hébergées sur sitekept.com mais absentes du catalogue public.
 *
 * Vide aujourd'hui : `balinjera` en faisait partie, sa route a été retirée du
 * domaine. Il s'agissait de la reproduction du site d'une cliente réelle, qui
 * exposait publiquement son adresse e-mail personnelle. La cliente disposant
 * de son propre domaine, la copie était sans objet — la page réalisations
 * pointe désormais directement vers son site.
 *
 * À réutiliser si une démo est de nouveau servie hors catalogue public.
 */
const UNLISTED_DEMO_SLUGS: readonly string[] = ["je"];

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
