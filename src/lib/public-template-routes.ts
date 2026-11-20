import {
  nonTemplateDemos,
  publicTemplates,
  routedTemplates,
} from "@/content/templates/registry";

/**
 * Slugs des templates publics (statut `sitekept-public`), dans l'ordre du
 * registre. Les templates `lab` routés n'y figurent pas : ils sont `noindex`
 * (`DEMO_SLUGS`) mais hors galerie et hors pages métier.
 */
export const PUBLIC_TEMPLATE_SLUGS: readonly string[] = publicTemplates.map(
  (template) => template.slug
);

/**
 * Tous les slugs de démonstration servis par ce domaine : les templates
 * servis ici (publics et `lab` routés, `routedTemplates` du registre), plus les
 * slugs qui n'en sont pas (`nonTemplateDemos` : `je`, `avocate-tel-aviv`).
 * Utilisé par le middleware pour poser `X-Robots-Tag: noindex, follow`.
 */
export const DEMO_SLUGS: readonly string[] = [
  ...routedTemplates.map((template) => template.slug),
  ...nonTemplateDemos.map((demo) => demo.slug),
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
