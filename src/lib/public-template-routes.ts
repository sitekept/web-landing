import { sitekeptPublicTemplateSlugs } from "@/content/admin-template-catalog";

export const PUBLIC_TEMPLATE_SLUGS = sitekeptPublicTemplateSlugs;

/**
 * Démos hébergées sur sitekept.com mais absentes du catalogue public.
 *
 * Contient aujourd'hui `je`, projet servi par le groupe de routes `(projects)`
 * et marqué `noindex` comme les démos.
 *
 * `balinjera` en faisait partie : sa route a été retirée du domaine, car elle
 * reproduisait le site d'une cliente réelle et exposait son adresse e-mail
 * personnelle. La page réalisations pointe désormais vers son propre site.
 *
 * `avocate-tel-aviv` n'existe plus que comme redirection permanente vers
 * `/avocate` : l'ancienne URL portait l'identité d'une cliente réelle, et ses
 * redirections doivent rester `noindex` comme les démos.
 */
const UNLISTED_DEMO_SLUGS: readonly string[] = ["je", "avocate-tel-aviv"];

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

/** Préfixe des versions anglaises des démos : `/en/<slug>`. */
const ENGLISH_PREFIX = "/en";

export function isPublicTemplatePathname(pathname: string | null): boolean {
  if (!pathname) {
    return false;
  }

  return matchesSlug(pathname, PUBLIC_TEMPLATE_SLUGS);
}

/**
 * Vrai pour une page de démonstration et toutes ses sous-pages, en français
 * (`/dentiste`, `/dentiste/soins`) comme en anglais (`/en/dentiste`,
 * `/en/dentiste/soins`).
 *
 * Seul `/en/<slug>` d'un slug de démo est reconnu : `/en`, `/en/templates` et
 * les pages métier anglaises (`/en/<métier>`) restent des pages du site
 * commercial, donc indexables.
 */
export function isDemoPathname(pathname: string | null): boolean {
  if (!pathname) {
    return false;
  }

  if (matchesSlug(pathname, DEMO_SLUGS)) {
    return true;
  }

  return (
    pathname.startsWith(`${ENGLISH_PREFIX}/`) &&
    matchesSlug(pathname.slice(ENGLISH_PREFIX.length), DEMO_SLUGS)
  );
}
