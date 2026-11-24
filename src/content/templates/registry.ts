import type { TemplateLocale } from "@/content/templates/types";

/**
 * Registre unique des templates de démonstration.
 *
 * Source de vérité de tout ce qui sert à les lister : statut, nom et secteur
 * côté admin, copie de la galerie, langues servies. Consommé par la galerie
 * (`TemplatesShowcase`), la page admin, `public-template-routes.ts` (donc
 * `headers()` de next.config.ts, qui pose `noindex`) et `metier-pages.ts`.
 *
 * Données pures, volontairement. `next.config.ts` charge ce fichier (par
 * `public-template-routes.ts`) : pas de React, pas de `lucide-react`, et
 * jamais d'import de la copie d'un template
 * (`src/content/templates/<slug>.ts`). La cohérence avec les
 * définitions se vérifie à part, au `type-check`, dans `registry-checks.ts`
 * (`import type` seulement, aucun code exécuté).
 *
 * Trois formes d'entrée, selon où le template est servi :
 * - `sitekept-public` : servi sur ce domaine, listé en galerie et dans les
 *   pages métier, `noindex` ;
 * - `lab` avec `routed: true` : servi sur ce domaine (`/<slug>` et
 *   `/en/<slug>`), `noindex` comme une démo, visible dans l'admin, mais absent
 *   de la galerie, des pages métier et de `PATH_MAP`. C'est l'état de naissance
 *   d'un nouveau template, avant validation ;
 * - tout autre statut (ou `lab` sans `routed`) : hébergé ailleurs (Vercel), non
 *   routé ici.
 *
 * Pour ajouter un template : une entrée dans `TEMPLATES`, et rien d'autre côté
 * liste (voir `docs/templates.md`, section 4).
 */

/** Statut admin : décide où un template est servi. */
export type TemplateAdminStatus =
  | "sitekept-public"
  | "admin-only"
  | "lab"
  | "archived";

/**
 * Langues d'un template servi sur ce domaine (public ou `lab` routé) : toujours
 * le français et l'anglais. Déclarer un template routé en français seul échoue
 * au `type-check` (`satisfies` plus bas), et `registry-checks.ts` exige sa
 * définition, donc sa copie anglaise.
 */
type RoutedLocales = readonly ["fr", "en"];

/** Nom et description d'un template dans la galerie, par langue du site. */
type GalleryCopy = Record<
  "fr" | "en",
  { readonly name: string; readonly description: string }
>;

type TemplateIdentity = {
  readonly slug: string;
  /** Nom affiché dans la page admin. */
  readonly name: string;
  readonly sector: string;
  /** Note affichée dans la page admin. */
  readonly notes: string;
  /**
   * Slug sur le déploiement Vercel quand il diffère de `slug` (template renommé
   * ici) ; `null` : pas de page Vercel à ce nom, donc pas de lien dans l'admin.
   */
  readonly vercelSlug?: string | null;
};

/** Template servi sur ce domaine (`src/app/(demos)/<slug>`), listé en galerie. */
export type PublicTemplateEntry = TemplateIdentity & {
  readonly status: "sitekept-public";
  readonly routed?: never;
  readonly locales: RoutedLocales;
  readonly gallery: {
    /** Capture sous `public/`. */
    readonly screenshot: string;
    readonly copy: GalleryCopy;
  };
};

/**
 * Template `lab` servi sur ce domaine (`/<slug>` et `/en/<slug>`) : visible
 * dans l'admin, `noindex` (il entre dans `DEMO_SLUGS`), mais hors galerie, hors
 * pages métier et hors `PATH_MAP`.
 *
 * - `routed: true` est le discriminant explicite : sans lui, une entrée `lab`
 *   reste un template Vercel (`UnroutedTemplateEntry`, qui interdit `routed`).
 * - Un nouveau template naît bilingue : `locales` est `["fr", "en"]`.
 * - Pas de bloc `gallery` : aucune capture ni copie de galerie tant que le
 *   template n'est pas validé et passé en `sitekept-public`.
 */
export type LabRoutedTemplateEntry = TemplateIdentity & {
  readonly status: "lab";
  readonly routed: true;
  readonly locales: RoutedLocales;
  readonly gallery?: never;
};

/**
 * Template hébergé ailleurs (Vercel) : non routé ici, donc pas soumis au
 * contrôle de langues. `routed` est interdit : une entrée `lab` sans
 * `routed: true` reste « Vercel ».
 */
export type UnroutedTemplateEntry = TemplateIdentity & {
  readonly status: Exclude<TemplateAdminStatus, "sitekept-public">;
  readonly routed?: never;
  readonly locales: readonly TemplateLocale[];
};

export type TemplateEntry =
  | PublicTemplateEntry
  | LabRoutedTemplateEntry
  | UnroutedTemplateEntry;

/** Template servi sur ce domaine : public, ou `lab` routé. */
export type RoutedTemplateEntry = PublicTemplateEntry | LabRoutedTemplateEntry;

/**
 * Ordre significatif : c'est celui de la galerie (entrées publiques) et de la
 * page admin.
 */
const TEMPLATES = [
  {
    slug: "boulangerie",
    status: "sitekept-public",
    name: "Template Boulangerie",
    sector: "Boulangerie",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/boulangerie.webp",
      copy: {
        fr: {
          name: "Template Boulangerie",
          description:
            "Une boulangerie de quartier : la vitrine du jour avec ses prix, le pain mis de côté chaque semaine, les buffets et petits-déjeuners sur commande, les horaires et l’adresse.",
        },
        en: {
          name: "Bakery template",
          description:
            "A neighborhood bakery: today’s display with prices, bread set aside every week, buffets and office breakfasts to order, plus opening hours and address.",
        },
      },
    },
  },
  {
    slug: "fleuriste",
    status: "sitekept-public",
    name: "Template Fleuriste",
    sector: "Floral",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/fleuriste.webp",
      copy: {
        fr: {
          name: "Template Fleuriste",
          description:
            "Un atelier de fleuriste pour mariages, réceptions et entreprises : réalisations par type d’événement, déroulé de la préparation, devis détaillé et prise de rendez-vous.",
        },
        en: {
          name: "Florist template",
          description:
            "A florist studio for weddings, private parties and businesses: projects by type of event, how the preparation works, an itemized quote and appointment booking.",
        },
      },
    },
  },
  {
    slug: "ordinateur",
    status: "sitekept-public",
    name: "Template Reparation Ordinateur",
    sector: "Réparation tech",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/ordinateur.webp",
      copy: {
        fr: {
          name: "Template Réparation ordinateur",
          description:
            "Un atelier de réparation d’ordinateurs, Mac et PC : diagnostic gratuit sous 24 h ouvrées, devis ferme avant toute réparation, garantie de 6 mois, dépôt ou enlèvement.",
        },
        en: {
          name: "Computer repair template",
          description:
            "A computer repair shop for Mac and PC: free diagnosis within one business day, a firm quote before any repair, a 6-month warranty, shop drop-off or pickup.",
        },
      },
    },
  },
  {
    slug: "patisserie",
    vercelSlug: "pattiserie",
    status: "sitekept-public",
    name: "Template Patisserie",
    sector: "Pâtisserie",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/patisserie.webp",
      copy: {
        fr: {
          name: "Template Pâtisserie",
          description:
            "Une pâtisserie haut de gamme : entremets de 6 à 10 parts, pâtisseries à l’unité, recettes signature, gâteaux sur commande jusqu’à 120 parts et livraison locale.",
        },
        en: {
          name: "Pastry shop template",
          description:
            "An upscale pastry shop: cakes for 6 to 10, individual pastries, signature recipes, made-to-order cakes up to 120 servings and local delivery.",
        },
      },
    },
  },
  {
    slug: "dentiste",
    status: "sitekept-public",
    name: "Template Dentiste",
    sector: "Santé",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/dentiste.webp",
      copy: {
        fr: {
          name: "Template Dentiste",
          description:
            "Un cabinet dentaire qui explique chaque soin, remet un devis écrit avant tout traitement et propose un premier rendez-vous sous 48 h, avec réservation en ligne.",
        },
        en: {
          name: "Dentist template",
          description:
            "A dental practice that explains every treatment, gives a written estimate before any care and offers a first appointment within 48 hours, with online booking.",
        },
      },
    },
  },
  {
    slug: "plombier-chauffagiste",
    status: "sitekept-public",
    name: "Template Plombier Chauffagiste",
    sector: "Habitat",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/plombier-chauffagiste.webp",
      copy: {
        fr: {
          name: "Template Plombier chauffagiste",
          description:
            "Un plombier chauffagiste qui affiche ses prix : dépannages en plomberie et en chauffage, tarifs de départ, majorations annoncées, devis signé avant travaux et astreinte jusqu’à 22 h.",
        },
        en: {
          name: "Plumber & heating template",
          description:
            "A plumber and heating contractor who posts prices up front: plumbing and heating repairs, starting rates, surcharges disclosed in advance, a quote signed before work and on-call service until 10 p.m.",
        },
      },
    },
  },
  {
    slug: "salon-coiffure",
    status: "sitekept-public",
    name: "Template Salon de coiffure",
    sector: "Beauté",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/salon-coiffure.webp",
      copy: {
        fr: {
          name: "Template Salon de coiffure",
          description:
            "Un salon qui affiche ses prestations avec les prix, présente ses trois stylistes, montre des coiffures récentes en photo et prend les réservations en ligne.",
        },
        en: {
          name: "Hair salon template",
          description:
            "A salon that lists its services with prices, introduces its three stylists, shows recent hairstyles in photos and takes bookings online.",
        },
      },
    },
  },
  {
    slug: "menage-nettoyage",
    status: "sitekept-public",
    name: "Template Ménage & Nettoyage",
    sector: "Services à domicile",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/menage-nettoyage.webp",
      copy: {
        fr: {
          name: "Template Ménage & nettoyage",
          description:
            "Une entreprise de ménage à domicile et de nettoyage de bureaux : devis en quatre questions, formules, secteurs desservis, prix ferme sous 24 h et questions fréquentes.",
        },
        en: {
          name: "Housekeeping & cleaning template",
          description:
            "A home and office cleaning company: a quote in four questions, service packages, areas served, a firm price within 24 hours and frequently asked questions.",
        },
      },
    },
  },
  {
    slug: "restaurant-bistrot",
    status: "sitekept-public",
    name: "Template Restaurant Bistrot",
    sector: "Restauration",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/restaurant-bistrot.webp",
      copy: {
        fr: {
          name: "Template Restaurant bistrot",
          description:
            "La carte courte qui suit le marché, une cave au verre, un comptoir sans réservation, la réservation de table et la privatisation pour 9 à 20 convives.",
        },
        en: {
          name: "Bistro restaurant template",
          description:
            "A short menu that follows the market, wines by the glass, a walk-in counter, table reservations and private dining for 9 to 20 guests.",
        },
      },
    },
  },
  {
    slug: "architecte-interieur",
    status: "sitekept-public",
    name: "Template Architecte d’intérieur",
    sector: "Architecture intérieure",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/architecte-interieur.webp",
      copy: {
        fr: {
          name: "Template Architecte d’intérieur",
          description:
            "Un studio d’architecture d’intérieur : réalisations en photo, honoraires annoncés d’avance, méthode en quatre temps et premier rendez-vous d’une heure offert.",
        },
        en: {
          name: "Interior architect template",
          description:
            "An interior architecture studio: photos of its projects, fees stated up front, a four-step method and a free one-hour first meeting.",
        },
      },
    },
  },
  {
    slug: "cabinet-avocat",
    status: "sitekept-public",
    name: "Template Cabinet d’avocat",
    sector: "Juridique",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/cabinet-avocat.webp",
      copy: {
        fr: {
          name: "Template Cabinet d’avocat",
          description:
            "Un cabinet d’avocats d’affaires pour dirigeants et PME : domaines d’intervention, honoraires annoncés, première consultation de 45 minutes, réponse sous 48 h ouvrées.",
        },
        en: {
          name: "Law firm template",
          description:
            "A business law firm for owners and small companies: practice areas, fees quoted up front, a 45-minute first consultation and a reply within 2 business days.",
        },
      },
    },
  },
  {
    slug: "avocate",
    vercelSlug: null,
    status: "sitekept-public",
    name: "Template Avocate",
    sector: "Juridique",
    notes:
      "Route publique Sitekept disponible, maintenant contrôlée par statut.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/avocate.webp",
      copy: {
        fr: {
          name: "Template Avocate",
          description:
            "Le cabinet d’une avocate en droit immobilier, successions et droit de la famille : expertises, méthode en trois étapes, blog et prise de contact.",
        },
        en: {
          name: "Lawyer template",
          description:
            "The practice of a lawyer in real estate, inheritance and family law: areas of expertise, a three-step method, a blog and a contact page.",
        },
      },
    },
  },
  {
    slug: "agence-immobiliere",
    status: "sitekept-public",
    name: "Template Agence immobilière",
    sector: "Immobilier",
    notes: "Visible dans le catalogue public Sitekept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/agence-immobiliere.webp",
      copy: {
        fr: {
          name: "Template Agence immobilière",
          description:
            "Une agence immobilière de quartier : sélection de biens avec fiche détaillée, un agent référent par quartier, accompagnement des acquéreurs et des vendeurs, estimation offerte.",
        },
        en: {
          name: "Real estate agency template",
          description:
            "A neighborhood real estate agency: a selection of properties with a detailed listing page, a lead agent for each neighborhood, guidance for buyers and sellers, and a free home value estimate.",
        },
      },
    },
  },
  {
    slug: "double-espresso",
    status: "admin-only",
    name: "Double Espresso",
    sector: "Coffee shop",
    notes: "Accessible hors local via Vercel, non affichée sur sitekept.com.",
    locales: ["fr"],
  },
  {
    slug: "balinjera",
    status: "admin-only",
    name: "Balinjera",
    sector: "Restauration",
    notes:
      "Route retirée de sitekept.com : il s’agissait de la reproduction du site d’une cliente réelle, exposant son e-mail personnel. La cliente a son propre domaine, vers lequel pointe la page réalisations.",
    locales: ["fr"],
  },
  {
    slug: "alex-spa-massage",
    status: "admin-only",
    name: "Alex Spa Massage",
    sector: "Bien-être",
    notes:
      "URL Vercel publique pour Alex Spa Massage, conservée hors catalogue public sitekept.com.",
    locales: ["fr"],
  },
  {
    slug: "annecyelec",
    status: "lab",
    name: "Annecy Elec",
    sector: "Électricité",
    notes: "Variation lab accessible via Vercel uniquement.",
    locales: ["fr"],
  },
  {
    slug: "osteopathe-kor-pantin",
    status: "lab",
    name: "Ostéopathe KOR Pantin",
    sector: "Santé",
    notes: "Variation lab accessible via Vercel uniquement.",
    locales: ["fr"],
  },
  {
    slug: "ruben",
    status: "lab",
    name: "Ruben",
    sector: "Créateur culinaire",
    notes: "Variation lab accessible via Vercel uniquement.",
    locales: ["fr"],
  },
  {
    slug: "nathreparation",
    status: "lab",
    name: "Nath Reparation",
    sector: "Réparation mobile",
    notes: "Variation lab accessible via Vercel uniquement.",
    locales: ["fr"],
  },
  {
    slug: "electricien",
    status: "lab",
    routed: true,
    name: "Template Électricien",
    sector: "Électricité",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
  {
    slug: "osteopathe",
    status: "lab",
    routed: true,
    name: "Template Ostéopathe",
    sector: "Santé",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
  {
    slug: "reparation-mobile",
    status: "lab",
    routed: true,
    name: "Template Réparation mobile",
    sector: "Réparation mobile",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
  {
    slug: "createur-culinaire",
    status: "lab",
    routed: true,
    name: "Template Créateur culinaire",
    sector: "Créateur culinaire",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
  {
    slug: "coffee-shop",
    status: "lab",
    routed: true,
    name: "Template Coffee shop",
    sector: "Coffee shop",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
  {
    slug: "spa-massage",
    status: "lab",
    routed: true,
    name: "Template Spa & massage",
    sector: "Bien-être",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
  {
    slug: "photographe",
    status: "lab",
    routed: true,
    name: "Template Photographe",
    sector: "Photographie",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
  {
    slug: "expert-comptable",
    status: "lab",
    routed: true,
    name: "Template Expert-comptable",
    sector: "Comptabilité",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
  {
    slug: "garage-auto",
    status: "lab",
    routed: true,
    name: "Template Garage auto",
    sector: "Automobile",
    notes:
      "Template lab servi sur sitekept.com (noindex), en attente de validation.",
    locales: ["fr", "en"],
  },
] as const satisfies readonly TemplateEntry[];

/** Entrée du registre, avec le littéral de chaque champ (contrôles de types). */
export type RegisteredTemplate = (typeof TEMPLATES)[number];

export type TemplateSlug = RegisteredTemplate["slug"];

/**
 * Slug d'un template servi sur ce domaine et listé dans la galerie. Exclut les
 * templates `lab` routés : le `demoSlug` d'une page métier ne peut pas les
 * viser.
 */
export type PublicTemplateSlug = Extract<
  RegisteredTemplate,
  { status: "sitekept-public" }
>["slug"];

const templateEntries: readonly TemplateEntry[] = TEMPLATES;

function isPublicTemplate(entry: TemplateEntry): entry is PublicTemplateEntry {
  return entry.status === "sitekept-public";
}

function isLabRoutedTemplate(
  entry: TemplateEntry
): entry is LabRoutedTemplateEntry {
  return entry.status === "lab" && entry.routed === true;
}

/** Templates publics, dans l'ordre de la galerie. */
export const publicTemplates: readonly PublicTemplateEntry[] =
  templateEntries.filter(isPublicTemplate);

/**
 * Tous les templates servis sur ce domaine : publics, puis `lab` routés, dans
 * l'ordre du registre. Sert à `DEMO_SLUGS` (`noindex`). Ne pas l'utiliser pour
 * la galerie, les pages métier ni `PATH_MAP` : les `lab` n'y figurent pas
 * (`publicTemplates`).
 */
export const routedTemplates: readonly RoutedTemplateEntry[] =
  templateEntries.filter(
    (entry): entry is RoutedTemplateEntry =>
      isPublicTemplate(entry) || isLabRoutedTemplate(entry)
  );

/**
 * Slugs servis sur ce domaine qui ne sont pas des templates : ils restent
 * `noindex` comme les démos (`DEMO_SLUGS`), mais n'ont ni capture, ni entrée en
 * galerie, ni version anglaise à fournir. Ils ne sont donc pas soumis au
 * contrôle de langues.
 *
 * - `je` : projet servi par le groupe de routes `(projects)`.
 * - `avocate-tel-aviv` : simple redirection permanente vers `/avocate`.
 *   L'ancienne URL portait l'identité d'une cliente réelle, et ses redirections
 *   doivent rester `noindex` comme les démos.
 * - `pattiserie` : ancienne adresse (faute de frappe) de `patisserie`, simple
 *   redirection permanente ; elle reste `noindex` comme les démos.
 *
 * `balinjera` en faisait partie : sa route a été retirée du domaine, car elle
 * reproduisait le site d'une cliente réelle et exposait son adresse e-mail
 * personnelle. La page réalisations pointe désormais vers son propre site.
 */
export const nonTemplateDemos = [
  { slug: "je", kind: "project" },
  { slug: "avocate-tel-aviv", kind: "redirect" },
  { slug: "pattiserie", kind: "redirect" },
] as const satisfies readonly {
  readonly slug: string;
  readonly kind: "project" | "redirect";
}[];

// --- Vue admin -------------------------------------------------------------

const TEMPLATE_VERCEL_BASE_URL = "https://sitekept-templates.vercel.app";
const SITEKEPT_BASE_URL = "https://www.sitekept.com";

export interface AdminTemplateCatalogEntry {
  slug: string;
  name: string;
  sector: string;
  adminStatus: TemplateAdminStatus;
  /** Absent pour un `lab` routé ou `vercelSlug: null` : pas de page Vercel. */
  vercelUrl?: string;
  /** Démo française sur sitekept.com, pour un template public ou `lab` routé. */
  sitekeptUrl?: string;
  /** Démo anglaise sur sitekept.com, pour un template public ou `lab` routé. */
  sitekeptUrlEn?: string;
  routeStatus:
    | "Live on sitekept.com"
    | "Lab on sitekept.com"
    | "Vercel only"
    | "Lab only";
  notes: string;
}

/** Entrée du registre complétée de ses champs dérivés (liens, présence). */
function toAdminCatalogEntry(
  entry: TemplateEntry
): AdminTemplateCatalogEntry {
  const vercelSlug =
    entry.vercelSlug === undefined ? entry.slug : entry.vercelSlug;
  return {
    slug: entry.slug,
    name: entry.name,
    sector: entry.sector,
    adminStatus: entry.status,
    routeStatus:
      entry.status === "sitekept-public"
        ? "Live on sitekept.com"
        : isLabRoutedTemplate(entry)
          ? "Lab on sitekept.com"
          : entry.status === "lab"
            ? "Lab only"
            : "Vercel only",
    ...(isLabRoutedTemplate(entry) || vercelSlug === null
      ? {}
      : { vercelUrl: `${TEMPLATE_VERCEL_BASE_URL}/${vercelSlug}` }),
    ...(isPublicTemplate(entry) || isLabRoutedTemplate(entry)
      ? {
          sitekeptUrl: `${SITEKEPT_BASE_URL}/${entry.slug}`,
          sitekeptUrlEn: `${SITEKEPT_BASE_URL}/en/${entry.slug}`,
        }
      : {}),
    notes: entry.notes,
  };
}

/** Tous les templates, dans l'ordre du registre, pour la page admin. */
export const adminTemplateCatalog: readonly AdminTemplateCatalogEntry[] =
  templateEntries.map(toAdminCatalogEntry);
