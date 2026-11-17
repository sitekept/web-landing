/**
 * Constantes partagées du tunnel de demande (plan v2 § 7) : offres, métiers,
 * canaux de rappel. Source unique pour le tunnel, le formulaire de secours,
 * le schéma de l'action serveur, le mail de lead et les CTA.
 *
 * Module neutre (ni « use client » ni « use server ») : importable des deux
 * côtés. Il ne doit rien importer de lourd, il finit dans le bundle client.
 * Aucun prix ici : les montants vivent dans src/content/pricing.ts.
 */

// ---------------------------------------------------------------------------
// Offres
// ---------------------------------------------------------------------------

/** Ordre canonique : celui des cartes et du mail de lead. */
export const OFFER_SLUGS = ["site", "suivi", "campagnes", "autre"] as const;

export type OfferSlug = (typeof OFFER_SLUGS)[number];

/** Libellés lisibles, utilisés dans le mail de lead et les récapitulatifs. */
export const OFFER_LABELS: Record<OfferSlug, string> = {
  site: "Site",
  suivi: "Suivi",
  campagnes: "Campagnes",
  autre: "Autre",
};

/** Contenu des cartes de l'étape 1 : un titre court, une ligne simple. */
export const OFFER_CARDS: Record<
  OfferSlug,
  { title: string; description: string }
> = {
  site: {
    title: "Un site internet",
    description:
      "Un site clair pour être trouvé et contacté, payé une seule fois.",
  },
  suivi: {
    title: "Le suivi de votre site",
    description:
      "Des modifications chaque mois et un œil sur votre visibilité.",
  },
  campagnes: {
    title: "Des campagnes publicitaires",
    description: "Vos publicités sur Google, Facebook, Instagram ou TikTok.",
  },
  autre: {
    title: "Autre chose",
    description: "Dites-nous en quelques mots ce dont vous avez besoin.",
  },
};

/** « Autre » coché : le message doit faire au moins cette longueur (trim). */
export const OTHER_MESSAGE_MIN_LENGTH = 10;

export const OTHER_MESSAGE_ERROR =
  "Précisez votre besoin en quelques mots (10 caractères minimum).";

export function isOfferSlug(value: string): value is OfferSlug {
  return (OFFER_SLUGS as readonly string[]).includes(value);
}

/** Dédoublonne et remet dans l'ordre canonique de `OFFER_SLUGS`. */
export function normalizeOffers(offers: readonly OfferSlug[]): OfferSlug[] {
  return OFFER_SLUGS.filter((slug) => offers.includes(slug));
}

/**
 * Lit `?offre=` : valeurs séparées par des virgules, espaces et casse ignorés.
 * Les valeurs inconnues sont ignorées sans erreur, les doublons retirés.
 * `parseOfferParam("SUIVI, site,site")` → `["site", "suivi"]`.
 */
export function parseOfferParam(value: string | null): OfferSlug[] {
  if (!value) return [];

  const offers = value
    .split(",")
    .map((part) => part.trim().toLowerCase())
    .filter(isOfferSlug);

  return normalizeOffers(offers);
}

/** Format attendu par GA4 : `"site,suivi"`, dans l'ordre canonique. */
export function formatOffersForAnalytics(offers: readonly OfferSlug[]): string {
  return normalizeOffers(offers).join(",");
}

// ---------------------------------------------------------------------------
// Métiers
// ---------------------------------------------------------------------------

/**
 * Métiers proposés : un par page métier de src/content/metier-pages.ts, plus
 * « autre ». Le slug court est celui de la page sans « site-internet- ».
 *
 * Liste recopiée volontairement : importer `metierPages` ici ferait entrer
 * tout le contenu des pages métier dans le bundle client du tunnel. Le slug
 * de `metierPages` est typé `string`, une vérification au type-check est
 * donc impossible sans modifier ce fichier. L'action serveur appelle
 * `findMetierAlignmentIssues` au chargement et signale tout écart dans les
 * logs : en ajoutant une page métier, ajoutez sa ligne ici.
 */
export const METIERS = [
  { slug: "plombier", label: "Plombier" },
  { slug: "dentiste", label: "Dentiste" },
  { slug: "restaurant", label: "Restaurant" },
  { slug: "salon-de-coiffure", label: "Salon de coiffure" },
  { slug: "boulangerie", label: "Boulangerie" },
  { slug: "patisserie", label: "Pâtisserie" },
  { slug: "fleuriste", label: "Fleuriste" },
  { slug: "reparation-informatique", label: "Réparation informatique" },
  { slug: "entreprise-nettoyage", label: "Entreprise de nettoyage" },
  { slug: "architecte-interieur", label: "Architecte d'intérieur" },
  { slug: "avocat", label: "Avocat" },
  { slug: "agence-immobiliere", label: "Agence immobilière" },
  { slug: "autre", label: "Autre métier" },
] as const;

export type MetierSlug = (typeof METIERS)[number]["slug"];

export const METIER_SLUGS = METIERS.map((metier) => metier.slug) as [
  MetierSlug,
  ...MetierSlug[],
];

const METIER_PAGE_PREFIX = "site-internet-";

export function isMetierSlug(value: string): value is MetierSlug {
  return (METIER_SLUGS as readonly string[]).includes(value);
}

export function getMetierLabel(slug: MetierSlug): string {
  return METIERS.find((metier) => metier.slug === slug)?.label ?? slug;
}

/**
 * Lit `?metier=` : un seul métier, espaces et casse ignorés. Accepte aussi le
 * slug complet d'une page métier (« site-internet-plombier »). Valeur inconnue
 * ou absente : `undefined`, sans erreur.
 */
export function parseMetierParam(value: string | null): MetierSlug | undefined {
  if (!value) return undefined;

  let slug = value.trim().toLowerCase();
  if (slug.startsWith(METIER_PAGE_PREFIX)) {
    slug = slug.slice(METIER_PAGE_PREFIX.length);
  }

  return isMetierSlug(slug) ? slug : undefined;
}

/**
 * Compare la liste ci-dessus aux pages métier (slug et nom). Prend les pages
 * en paramètre pour ne pas importer leur contenu ici. Renvoie les écarts en
 * clair, tableau vide si tout est aligné.
 */
export function findMetierAlignmentIssues(
  pages: readonly { slug: string; metier: string }[]
): string[] {
  const issues: string[] = [];
  const listed = METIERS.filter((metier) => metier.slug !== "autre");

  for (const page of pages) {
    const slug = page.slug.startsWith(METIER_PAGE_PREFIX)
      ? page.slug.slice(METIER_PAGE_PREFIX.length)
      : page.slug;
    const entry = listed.find((metier) => metier.slug === slug);

    if (!entry) {
      issues.push(`Page métier absente de METIERS : ${page.slug}`);
    } else if (entry.label.toLowerCase() !== page.metier.toLowerCase()) {
      issues.push(
        `Libellé différent pour ${slug} : « ${entry.label} » / « ${page.metier} »`
      );
    }
  }

  for (const metier of listed) {
    if (
      !pages.some((page) => page.slug === `${METIER_PAGE_PREFIX}${metier.slug}`)
    ) {
      issues.push(`Métier sans page métier : ${metier.slug}`);
    }
  }

  return issues;
}

// ---------------------------------------------------------------------------
// Canal de rappel
// ---------------------------------------------------------------------------

export const CONTACT_CHANNELS = ["email", "telephone", "whatsapp"] as const;

export type ContactChannel = (typeof CONTACT_CHANNELS)[number];

export const CONTACT_CHANNEL_LABELS: Record<ContactChannel, string> = {
  email: "E-mail",
  telephone: "Téléphone",
  whatsapp: "WhatsApp",
};
