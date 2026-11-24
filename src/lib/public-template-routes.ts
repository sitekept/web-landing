// Import relatif et non `@/` : `next.config.ts` charge ce fichier, et Next n'y
// résout pas l'alias `@/` (voir `demoNoindexHeaders`).
import {
  nonTemplateDemos,
  routedTemplates,
} from "../content/templates/registry";

/**
 * Tous les slugs de démonstration servis par ce domaine : les templates
 * servis ici (publics et `lab` routés, `routedTemplates` du registre), plus les
 * slugs qui n'en sont pas (`nonTemplateDemos` : `je`, `avocate-tel-aviv`).
 * Utilisé par `demoNoindexHeaders` pour poser `X-Robots-Tag: noindex, follow`.
 */
export const DEMO_SLUGS: readonly string[] = [
  ...routedTemplates.map((template) => template.slug),
  ...nonTemplateDemos.map((demo) => demo.slug),
];

/** Préfixe des versions anglaises des démos : `/en/<slug>`. */
const ENGLISH_PREFIX = "/en";

/** Valeur de l'en-tête posé sur les démos. */
const NOINDEX_FOLLOW = "noindex, follow";

/**
 * Un slug n'entre dans un motif de route que s'il ne contient aucun caractère
 * spécial de regex (`-` est littéral hors d'une classe) : on refuse le reste
 * plutôt que de l'échapper.
 */
const SAFE_SLUG = /^[a-z0-9-]+$/;

/**
 * Règles `headers()` de `next.config.ts` : `X-Robots-Tag: noindex, follow` sur
 * les pages de démonstration (`/dentiste`, `/dentiste/soins`) et leurs versions
 * anglaises (`/en/dentiste`, `/en/dentiste/soins`), et nulle part ailleurs.
 *
 * Ces pages représentent l'essentiel du volume d'URLs du site pour un contenu
 * quasi-dupliqué d'une démo à l'autre : les laisser indexées diluait
 * l'autorité du domaine. `follow` et non `nofollow`, pour que le lien de
 * retour du bandeau continue de transmettre sa valeur.
 *
 * Le motif `/:slug(a|b|c)/:path*` couvre la page et toutes ses sous-pages
 * (`:path*` accepte zéro segment). `/en`, `/en/templates` et les pages métier
 * anglaises (`/en/<métier>`) restent des pages du site commercial, donc
 * indexables : seul `/en/<slug>` d'un slug de démo est ciblé. Le calcul se fait
 * au build, depuis le registre : un nouveau template routé est `noindex` sans
 * autre étape, et `pnpm check:routes` signale un dossier de route sans entrée.
 */
export function demoNoindexHeaders(): {
  source: string;
  headers: { key: string; value: string }[];
}[] {
  for (const slug of DEMO_SLUGS) {
    if (!SAFE_SLUG.test(slug)) {
      throw new Error(`Slug de démo invalide dans le registre : « ${slug} »`);
    }
  }
  const alternation = DEMO_SLUGS.join("|");

  return ["", ENGLISH_PREFIX].map((prefix) => ({
    source: `${prefix}/:slug(${alternation})/:path*`,
    headers: [{ key: "X-Robots-Tag", value: NOINDEX_FOLLOW }],
  }));
}
