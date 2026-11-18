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
      "Un site sur mesure pour présenter votre activité, payé une seule fois.",
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

export const NO_OFFER_ERROR = "Choisissez au moins une offre.";

/**
 * Ligne « Ajouter le suivi : premier mois offert à la livraison (formule
 * mensuelle) » sous les cartes du tunnel quand Site est coché. Validée par
 * Joseph le 18 nov. 2026.
 */
export const FOLLOW_UP_SUGGESTION_ENABLED = true;

/**
 * Textes du sélecteur d'offres (`offer-picker.tsx`), communs au tunnel et au
 * formulaire de secours. Aucun prix ici.
 */
export const OFFER_PICKER_TEXT = {
  legend: "Que souhaitez-vous ?",
  otherLabel: "Précisez votre besoin",
  /** Affichée seulement si le parent l'active (tunnel : FOLLOW_UP_SUGGESTION_ENABLED). */
  followUpSuggestion:
    "Ajouter le suivi : premier mois offert à la livraison (formule mensuelle)",
};

/**
 * Erreurs de la sélection, avec les mêmes règles que le schéma serveur :
 * au moins une offre côté interface, et « autre » impose un texte de
 * `OTHER_MESSAGE_MIN_LENGTH` caractères (après trim). Champ valide : `undefined`.
 */
export function getOfferSelectionErrors(
  offers: readonly OfferSlug[],
  otherText: string
): { offers?: string; other?: string } {
  return {
    offers: offers.length === 0 ? NO_OFFER_ERROR : undefined,
    other:
      offers.includes("autre") &&
      otherText.trim().length < OTHER_MESSAGE_MIN_LENGTH
        ? OTHER_MESSAGE_ERROR
        : undefined,
  };
}

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

/** Section du formulaire de secours, en bas de la home. */
const CONTACT_SECTION_HASH = "#contact";

/**
 * Lien d'un déclencheur du tunnel. Sans JavaScript, il mène au formulaire de
 * secours avec les mêmes offres et le même métier : `/?offre=site,suivi#contact`,
 * ou `/#contact` sans pré-sélection. Les slugs ne contiennent que des lettres
 * et des tirets : aucun encodage n'est nécessaire.
 */
export function buildLeadFunnelHref(
  offers: readonly OfferSlug[] = [],
  metier?: MetierSlug
): string {
  const params: string[] = [];
  const normalized = normalizeOffers(offers);
  if (normalized.length > 0) params.push(`offre=${normalized.join(",")}`);
  if (metier) params.push(`metier=${metier}`);

  return params.length > 0
    ? `/?${params.join("&")}${CONTACT_SECTION_HASH}`
    : `/${CONTACT_SECTION_HASH}`;
}

/**
 * Origine d'une demande, paramètre `form_origin` de `generate_lead` :
 * formulaire du bas de la home (« secours ») ou tunnel en modale.
 */
export const LEAD_FORM_ORIGINS = ["secours", "tunnel"] as const;

export type LeadFormOrigin = (typeof LEAD_FORM_ORIGINS)[number];

/** Format attendu par GA4 : `"site,suivi"`, dans l'ordre canonique. */
export function formatOffersForAnalytics(offers: readonly OfferSlug[]): string {
  return normalizeOffers(offers).join(",");
}

// ---------------------------------------------------------------------------
// Limites des champs
// ---------------------------------------------------------------------------

/**
 * Longueurs maximales, communes au schéma serveur (`contact-schema.ts`), au
 * formulaire de secours, au sélecteur d'offres et au tunnel. Ici plutôt que
 * dans le schéma : ce module ne charge pas zod dans le navigateur.
 */
export const NAME_MAX_LENGTH = 100;
export const EMAIL_MAX_LENGTH = 254;
export const MESSAGE_MAX_LENGTH = 5000;
export const CURRENT_URL_MAX_LENGTH = 300;

export const CURRENT_URL_ERROR =
  "L'adresse de votre site semble incorrecte. Exemple : monsite.fr";

/**
 * Adresse du site actuel. Une saisie sans protocole (« monsite.fr ») est
 * complétée en « https://monsite.fr ». Tout autre schéma (javascript:, data:…)
 * est refusé : précédé de « https:// », il ne forme pas une adresse valide.
 * Renvoie l'adresse normalisée, ou `null` si elle est refusée. Utilisée par
 * le schéma serveur et, avant l'envoi, par le tunnel.
 */
export function normalizeCurrentUrl(input: string): string | null {
  const trimmed = input.trim();
  if (trimmed.length === 0 || trimmed.length > CURRENT_URL_MAX_LENGTH) {
    return null;
  }

  const candidate = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  let url: URL;
  try {
    url = new URL(candidate);
  } catch {
    return null;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (url.username || url.password) return null;
  // Un vrai nom de domaine : au moins un point et une extension en lettres.
  if (!/^[^.]+(\.[^.]+)*\.[a-z\u00a1-\uffff-]{2,}$/i.test(url.hostname)) {
    return null;
  }
  if (url.href.length > CURRENT_URL_MAX_LENGTH) return null;

  return url.href;
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
