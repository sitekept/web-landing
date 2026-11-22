import type { TemplateLocale } from "@/content/templates/types";

/**
 * Registre unique des templates de démonstration.
 *
 * Source de vérité de tout ce qui sert à les lister : statut, nom et secteur
 * côté admin, copie de la galerie, langues servies. Consommé par la galerie
 * (`TemplatesShowcase`), la page admin, `public-template-routes.ts` (donc le
 * middleware, qui pose `noindex`) et `metier-pages.ts`.
 *
 * Données pures, volontairement. Le middleware tire ce fichier dans le bundle
 * Edge : pas de React, pas de `lucide-react`, et jamais d'import de la copie
 * d'un template (`src/content/templates/<slug>.ts`). La cohérence avec les
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
 * Langues servies par un template public routé sur ce domaine
 * (`sitekept-public`). Un template `lab` routé n'a pas cette souplesse : il est
 * toujours `["fr", "en"]` (`LabRoutedTemplateEntry`).
 *
 * Le contrôle FR + EN tient dans cette union : un template routé doit être
 * `["fr", "en"]`, ou bien `["fr"]` avec le marqueur transitoire
 * `englishPending`, qui dit « version anglaise à venir (phase 5) ». Le
 * marqueur est interdit avec `["fr", "en"]` et obligatoire avec `["fr"]` :
 * déclarer un template routé en français seul sans le dire échoue au
 * `type-check`. Quand la version anglaise arrive, on passe `locales` à
 * `["fr", "en"]` et on retire le marqueur.
 */
type RoutedLocales =
  | {
      readonly locales: readonly ["fr", "en"];
      readonly englishPending?: never;
    }
  | {
      readonly locales: readonly ["fr"];
      readonly englishPending: "phase-5";
    };

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
};

/** Template servi sur ce domaine (`src/app/(demos)/<slug>`), listé en galerie. */
export type PublicTemplateEntry = TemplateIdentity &
  RoutedLocales & {
    readonly status: "sitekept-public";
    readonly routed?: never;
    readonly gallery: {
      /** Capture sous `public/`. */
      readonly screenshot: string;
      readonly featured: boolean;
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
 * - Un nouveau template naît bilingue : `locales` est `["fr", "en"]`, sans
 *   `englishPending` possible.
 * - Pas de bloc `gallery` : aucune capture ni copie de galerie tant que le
 *   template n'est pas validé et passé en `sitekept-public`.
 */
export type LabRoutedTemplateEntry = TemplateIdentity & {
  readonly status: "lab";
  readonly routed: true;
  readonly locales: readonly ["fr", "en"];
  readonly englishPending?: never;
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
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/boulangerie.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Boulangerie",
          description:
            "Une base chaleureuse et commerçante pour vendre une présence locale claire, des horaires, une vitrine de produits et une commande simple.",
        },
        en: {
          name: "Bakery template",
          description:
            "A warm, shop-friendly base for a clear local presence, opening hours, a product showcase and simple ordering.",
        },
      },
    },
  },
  {
    slug: "fleuriste",
    status: "sitekept-public",
    name: "Template Fleuriste",
    sector: "Floral",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/fleuriste.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Fleuriste",
          description:
            "Une direction plus éditoriale et premium pour mettre en avant un style, des compositions et un univers visuel fort.",
        },
        en: {
          name: "Florist template",
          description:
            "A more editorial, premium direction to showcase a style, compositions and a strong visual world.",
        },
      },
    },
  },
  {
    slug: "ordinateur",
    status: "sitekept-public",
    name: "Template Reparation Ordinateur",
    sector: "Réparation tech",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/ordinateur.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Réparation ordinateur",
          description:
            "Une vitrine directe et rassurante pour présenter vos services, vos garanties et vos prises de contact sans friction.",
        },
        en: {
          name: "Computer repair template",
          description:
            "A direct and reassuring site to present your services, your guarantees and your contact options without friction.",
        },
      },
    },
  },
  {
    slug: "pattiserie",
    status: "sitekept-public",
    name: "Template Patisserie",
    sector: "Pâtisserie",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr"],
    englishPending: "phase-5",
    gallery: {
      screenshot: "/template/patisserie.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Pâtisserie",
          description:
            "Une base plus haut de gamme pour valoriser des créations, des événements et une promesse de maison premium.",
        },
        en: {
          name: "Pastry shop template",
          description:
            "A more upscale base to showcase your creations, events and the promise of a premium pâtisserie.",
        },
      },
    },
  },
  {
    slug: "dentiste",
    status: "sitekept-public",
    name: "Template Dentiste",
    sector: "Santé",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/dentiste.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Dentiste",
          description:
            "Une base clinique premium pour structurer l'information, rassurer dès le hero et pousser la prise de rendez-vous sans friction.",
        },
        en: {
          name: "Dentist template",
          description:
            "A premium clinical base to structure information, reassure from the hero section and drive appointment booking without friction.",
        },
      },
    },
  },
  {
    slug: "plombier-chauffagiste",
    status: "sitekept-public",
    name: "Template Plombier Chauffagiste",
    sector: "Habitat",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/plombier-chauffagiste.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Plombier chauffagiste",
          description:
            "Un site de plombier chauffagiste en quatre pages : dépannages plomberie et chauffage, tarifs de départ et majorations annoncées, devis signé avant travaux et contact avec astreinte.",
        },
        en: {
          name: "Plumber & heating template",
          description:
            "A four-page plumber and heating contractor website: plumbing and heating repairs, starting rates and stated surcharges, quote signed before work, and contact with on-call hours.",
        },
      },
    },
  },
  {
    slug: "salon-coiffure",
    status: "sitekept-public",
    name: "Template Salon de coiffure",
    sector: "Beauté",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/salon-coiffure.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Salon de coiffure",
          description:
            "Une direction lifestyle et booking-first avec lookbook, prestations, équipe et réservations dans un cadre plus éditorial.",
        },
        en: {
          name: "Hair salon template",
          description:
            "A lifestyle, booking-first direction with a lookbook, services, team and reservations in a more editorial setting.",
        },
      },
    },
  },
  {
    slug: "menage-nettoyage",
    status: "sitekept-public",
    name: "Template Ménage & Nettoyage",
    sector: "Services à domicile",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/menage-nettoyage.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Ménage & nettoyage",
          description:
            "Une page claire et rassurante pour vendre des formules, des zones couvertes et une promesse de simplicité immédiate.",
        },
        en: {
          name: "Housekeeping & cleaning template",
          description:
            "A clear, reassuring page to sell service packages, areas covered and a promise of instant simplicity.",
        },
      },
    },
  },
  {
    slug: "restaurant-bistrot",
    status: "sitekept-public",
    name: "Template Restaurant Bistrot",
    sector: "Restauration",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/restaurant-bistrot.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Restaurant bistrot",
          description:
            "Un univers d'hospitalité plus immersif pour mettre en avant ambiance, carte, réservation et privatisation.",
        },
        en: {
          name: "Bistro restaurant template",
          description:
            "A more immersive hospitality universe to highlight the atmosphere, the menu, reservations and private-event bookings.",
        },
      },
    },
  },
  {
    slug: "architecte-interieur",
    status: "sitekept-public",
    name: "Template Architecte d'intérieur",
    sector: "Architecture intérieure",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/architecte-interieur.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Architecte d'intérieur",
          description:
            "Une base narrative et premium pour vendre une direction artistique, des projets et une méthode en format portfolio.",
        },
        en: {
          name: "Interior architect template",
          description:
            "A narrative, premium base to sell an artistic direction, projects and a method in a portfolio format.",
        },
      },
    },
  },
  {
    slug: "cabinet-avocat",
    status: "sitekept-public",
    name: "Template Cabinet d'avocat",
    sector: "Juridique",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/cabinet-avocat.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Cabinet d'avocat",
          description:
            "Une landing sobre et autoritaire pour convertir sur la consultation initiale avec preuve d'expertise et structure documentaire.",
        },
        en: {
          name: "Law firm template",
          description:
            "A sober, authoritative landing page to convert on the initial consultation, with proof of expertise and a document-style structure.",
        },
      },
    },
  },
  {
    slug: "avocate",
    status: "sitekept-public",
    name: "Template Avocate",
    sector: "Juridique",
    notes:
      "Route publique SiteKept disponible, maintenant contrôlée par statut.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/avocate.png",
      featured: false,
      copy: {
        fr: {
          name: "Template Avocate",
          description:
            "Un site chic et sobre pour une avocate spécialisée en droit immobilier, successions et droit de la famille, avec blog et contact front-only.",
        },
        en: {
          name: "Lawyer template",
          description:
            "A chic, understated site for a lawyer specializing in real estate, inheritance and family law, with a blog and a front-end-only contact form.",
        },
      },
    },
  },
  {
    slug: "agence-immobiliere",
    status: "sitekept-public",
    name: "Template Agence immobilière",
    sector: "Immobilier",
    notes: "Visible dans le catalogue public SiteKept.",
    locales: ["fr", "en"],
    gallery: {
      screenshot: "/template/agence-immobiliere.png",
      featured: true,
      copy: {
        fr: {
          name: "Template Agence immobilière",
          description:
            "Le site d’une agence de quartier : sélection de biens avec fiche détaillée, agents référents, quartiers, parcours acquéreurs et vendeurs, estimation offerte.",
        },
        en: {
          name: "Real estate agency template",
          description:
            "A neighborhood agency website: a property selection with a detailed listing page, lead agents, neighborhoods, buyer and seller paths, and a free home value estimate.",
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
      "Route retirée de sitekept.com : il s'agissait de la reproduction du site d'une cliente réelle, exposant son e-mail personnel. La cliente a son propre domaine, vers lequel pointe la page réalisations.",
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

export const templateEntries: readonly TemplateEntry[] = TEMPLATES;

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

/** Le template est-il servi dans cette langue (`/<slug>` ou `/en/<slug>`) ? */
export function templateServesLocale(
  entry: TemplateEntry,
  locale: TemplateLocale
): boolean {
  const locales: readonly TemplateLocale[] = entry.locales;
  return locales.includes(locale);
}

/**
 * Le template public `slug` est-il servi dans cette langue ?
 *
 * C'est ce que consultent les liens de démo du site (galerie, pages métier) :
 * un site anglais ne pointe vers `/en/<slug>` que si le registre le déclare.
 */
export function publicTemplateServesLocale(
  slug: PublicTemplateSlug,
  locale: TemplateLocale
): boolean {
  const entry = publicTemplates.find((template) => template.slug === slug);
  return entry !== undefined && templateServesLocale(entry, locale);
}

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
 *
 * `balinjera` en faisait partie : sa route a été retirée du domaine, car elle
 * reproduisait le site d'une cliente réelle et exposait son adresse e-mail
 * personnelle. La page réalisations pointe désormais vers son propre site.
 */
export const nonTemplateDemos = [
  { slug: "je", kind: "project" },
  { slug: "avocate-tel-aviv", kind: "redirect" },
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
  /** Absent pour un `lab` routé : il n'existe pas sur le déploiement Vercel. */
  vercelUrl?: string;
  /** Démo française sur sitekept.com, pour un template public ou `lab` routé. */
  sitekeptUrl?: string;
  /** Démo anglaise sur sitekept.com, quand `locales` contient `"en"` (toujours pour un `lab` routé). */
  sitekeptUrlEn?: string;
  /**
   * Mention affichée à la place du lien EN d'un template public qui n'a pas
   * encore sa version anglaise (dérivée du marqueur `englishPending`).
   */
  englishPendingLabel?: string;
  routeStatus:
    | "Live on sitekept.com"
    | "Lab on sitekept.com"
    | "Vercel only"
    | "Lab only";
  notes: string;
}

/** Entrée du registre complétée de ses champs dérivés (liens, présence). */
export function toAdminCatalogEntry(
  entry: TemplateEntry
): AdminTemplateCatalogEntry {
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
    ...(isLabRoutedTemplate(entry)
      ? {}
      : { vercelUrl: `${TEMPLATE_VERCEL_BASE_URL}/${entry.slug}` }),
    ...(isPublicTemplate(entry) || isLabRoutedTemplate(entry)
      ? {
          sitekeptUrl: `${SITEKEPT_BASE_URL}/${entry.slug}`,
          ...(templateServesLocale(entry, "en")
            ? { sitekeptUrlEn: `${SITEKEPT_BASE_URL}/en/${entry.slug}` }
            : entry.englishPending
              ? {
                  englishPendingLabel: `EN : ${entry.englishPending.replace("-", " ")}`,
                }
              : {}),
        }
      : {}),
    notes: entry.notes,
  };
}

/** Tous les templates, dans l'ordre du registre, pour la page admin. */
export const adminTemplateCatalog: readonly AdminTemplateCatalogEntry[] =
  templateEntries.map(toAdminCatalogEntry);
