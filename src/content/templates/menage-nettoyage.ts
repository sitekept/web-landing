import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « ménage-nettoyage » (entreprise fictive « Maison Nette »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, métadonnées. Les vues (`src/templates/menage-nettoyage/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `MenageNettoyageCopy`
 * (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou une liste de
 * longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais ; la table `ICONS` de `parts.tsx` la résout.
 */

const fr = {
  brand: {
    name: "Maison Nette",
    tagline: "Devis ménage résidentiel et nettoyage professionnel",
  },
  phone: {
    href: "tel:+33199000091",
    label: "01 99 00 00 91",
  },
  nav: {
    home: "Devis",
    formules: "Formules",
    zones: "Zones",
    entreprises: "Entreprises",
    faq: "FAQ",
  },
  cta: {
    quote: "Obtenir un devis",
    seeFormules: "Voir les formules",
    business: "Nettoyage entreprises",
  },
  /** Bande d'étapes en tête du contenu de chaque page. */
  steps: ["1. Besoin", "2. Surface", "3. Fréquence", "4. Proposition"],
  common: {
    email: "bonjour@maisonnette.example",
    area: "Paris intra-muros & première couronne",
    hours: "Lun-Sam 8h00-19h00",
  },
  footer: {
    title:
      "Une template pensée comme un devis guidé, pas comme une vitrine service générique.",
    text: "Le langage privilégie les check-lists, la progression et les preuves simples pour réduire la friction dès les premières secondes.",
  },
  home: {
    hero: {
      pill: "Quote-first pragmatique",
      title:
        "Le devis démarre au-dessus de la ligne de flottaison, pas en bas d’une page décorative.",
      text: "La homepage est un configurateur visuel : besoin, surface, fréquence, zone. Tout le reste sert à rassurer ce parcours.",
      cardTitle: "Devis guidé",
      cardTime: "02 min",
      steps: [
        {
          label: "Étape 01",
          text: "Quel besoin ? Entretien, grand ménage, remise en état ou bureau.",
        },
        {
          label: "Étape 02",
          text: "Quelle surface ? Studio, appartement familial, maison ou local.",
        },
        {
          label: "Étape 03",
          text: "Quel rythme ? Ponctuel, hebdomadaire ou créneau matin/soir.",
        },
        {
          label: "Étape 04",
          text: "Quelle zone ? Paris, ouest, nord-est, sud-est.",
        },
      ],
    },
    quick: {
      eyebrow: "Choix rapides",
      title:
        "Avant même les pages de détail, le site aide à se reconnaître dans le bon scénario.",
      description:
        "La structure passe par des cas d’usage courts et très lisibles, au lieu d’un empilement de prestations.",
      items: [
        {
          icon: "sparkles",
          title: "Entretien du domicile",
          text: "Passages hebdomadaires, routines fixes, check-list cuisine, sanitaires, sols et poussières.",
        },
        {
          icon: "clipboard",
          title: "Grand ménage ponctuel",
          text: "Retour de location, état des lieux, relance saisonnière ou remise au propre complète.",
        },
        {
          icon: "ladder",
          title: "Nettoyage bureaux",
          text: "Créneaux tôt le matin ou en soirée, circuits d’accès et suivi après première mission.",
        },
        {
          icon: "check",
          title: "Demande simple",
          text: "Le site ne cherche pas à vendre 20 options. Il clarifie juste ce qu’il faut pour chiffrer vite.",
        },
      ],
    },
    progress: {
      eyebrow: "Progression",
      title:
        "Le site fait sentir la logique de devis avec un rythme d’étapes plutôt qu’une section statistiques.",
      items: [
        "1. On qualifie le lieu, pas seulement la ville.",
        "2. On fixe la bonne formule selon la fréquence réelle.",
        "3. On annonce le créneau compatible avec la zone.",
        "4. On confirme une proposition sans ouvrir un second tunnel.",
      ],
    },
    zone: {
      eyebrow: "Zone couverte",
      title:
        "Le maillage local est présenté comme une promesse opérationnelle.",
      description:
        "Pas de carte gadget : le site dit où l’équipe circule, quand elle passe et comment cela impacte le devis.",
      items: [
        "Paris 9e, 10e, 11e",
        "Boulogne, Issy, Vanves",
        "Vincennes, Montreuil, Bagnolet",
        "Neuilly, Levallois, Clichy",
      ],
    },
  },
  formules: {
    eyebrow: "Formules",
    title:
      "Les formules sont comparées comme des scénarios d’intervention, pas comme une liste plate.",
    description:
      "Chaque bloc explicite le rythme, le type de lieu et le niveau de profondeur attendu.",
    items: [
      {
        title: "Essentiel",
        text: "Appartement jusqu’à 70 m², entretien régulier, cuisine, sanitaires, sols et poussières.",
      },
      {
        title: "Confort",
        text: "Familles et maisons compactes avec rotation linge, rangements légers et passage hebdomadaire.",
      },
      {
        title: "Intensif",
        text: "Grand ménage ponctuel, vitres intérieures, reprise approfondie et remise au net complète.",
      },
      {
        title: "Professionnel",
        text: "Petits bureaux, cabinets ou showrooms avec protocoles d’ouverture ou fermeture.",
      },
    ],
  },
  zones: {
    eyebrow: "Zones",
    title:
      "Les zones sont structurées par logique de passage, pas juste par liste de villes.",
    description:
      "Le site assume un maillage concret avec créneaux associés, ce qui rend la promesse plus crédible.",
    toursTitle: "Tournées",
    tours: [
      "Lundi / Jeudi : Paris rive droite et nord-est.",
      "Mardi / Vendredi : ouest parisien et Issy-Vanves-Boulogne.",
      "Mercredi / Samedi : Vincennes, Montreuil et interventions ponctuelles.",
    ],
    areas: [
      "Paris 8e à 12e",
      "Paris 15e à 17e",
      "Boulogne, Issy, Sèvres",
      "Levallois, Neuilly, Clichy",
      "Montreuil, Vincennes, Bagnolet",
      "Clamart, Vanves, Malakoff",
    ],
  },
  entreprises: {
    eyebrow: "Entreprises",
    title:
      "La page pro parle circulation, accès et protocole, pas « prestations premium ».",
    description:
      "Cette route se distingue volontairement de l’offre résidentielle pour éviter un message hybride trop flou.",
    items: [
      "Bureaux compacts avec ouverture ou fermeture discrète.",
      "Cabinets et studios avec check-list d’hygiène et zones sensibles.",
      "Commerces à faible trafic avec remise en ordre quotidienne ou bihebdomadaire.",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title:
      "Les réponses lèvent les doutes pratiques qui bloquent un devis rapide.",
    description:
      "Le style reste très court, très fonctionnel, fidèle à la logique de la template.",
    items: [
      {
        q: "Fournissez-vous les produits ?",
        a: "Oui, ou nous adaptons les consommables déjà présents si le site préfère garder ses références.",
      },
      {
        q: "Peut-on commencer par un grand ménage puis passer en entretien ?",
        a: "Oui, c’est même un schéma courant pour repartir sur une base nette avant fréquence régulière.",
      },
      {
        q: "Quels éléments sont nécessaires pour chiffrer ?",
        a: "Type de lieu, surface approximative, fréquence visée, accessibilité et zone d’intervention.",
      },
    ],
  },
  meta: {
    home: {
      title: "Maison Nette - Services de Ménage & Nettoyage",
      description:
        "Template devis-first pour entreprise de ménage et nettoyage avec stepper visible, zones couvertes et pages dédiées aux formules et entreprises.",
    },
    formules: {
      title: "Formules - Maison Nette",
      description:
        "Les formules sont comparées comme des scénarios d’intervention : rythme, type de lieu et niveau de profondeur attendu pour chaque bloc.",
    },
    zones: {
      title: "Zones - Maison Nette",
      description:
        "Des zones structurées par logique de passage, avec des tournées et des créneaux associés qui rendent la promesse plus crédible.",
    },
    entreprises: {
      title: "Entreprises - Maison Nette",
      description:
        "Bureaux compacts, cabinets, studios et commerces à faible trafic : une page pro qui parle circulation, accès et protocole.",
    },
    faq: {
      title: "FAQ - Maison Nette",
      description:
        "Produits fournis, passage du grand ménage à l’entretien, éléments pour chiffrer : les réponses aux doutes qui bloquent un devis rapide.",
    },
  },
} as const;

export type MenageNettoyageCopy = WidenLiterals<typeof fr>;
export type MenageNettoyageIconKey = TemplateIconKey<MenageNettoyageCopy>;

const en: MenageNettoyageCopy = {
  brand: {
    name: "Your business",
    tagline: "Residential housekeeping quotes and professional cleaning",
  },
  phone: {
    href: "tel:+33199000091",
    label: "01 99 00 00 91",
  },
  nav: {
    home: "Quote",
    formules: "Packages",
    zones: "Areas",
    entreprises: "Business",
    faq: "FAQ",
  },
  cta: {
    quote: "Get a quote",
    seeFormules: "See the packages",
    business: "Business cleaning",
  },
  steps: ["1. Need", "2. Size", "3. Frequency", "4. Proposal"],
  common: {
    email: "contact@example.com",
    area: "Central Paris & inner suburbs",
    hours: "Mon-Sat 8:00 am-7:00 pm",
  },
  footer: {
    title:
      "A template designed as a guided quote, not as a generic service showcase.",
    text: "The language favors checklists, progress and simple proof to reduce friction from the very first seconds.",
  },
  home: {
    hero: {
      pill: "Practical, quote-first",
      title:
        "The quote starts above the fold, not at the bottom of a decorative page.",
      text: "The homepage is a visual configurator: need, size, frequency, area. Everything else exists to reassure that journey.",
      cardTitle: "Guided quote",
      cardTime: "2 min",
      steps: [
        {
          label: "Step 01",
          text: "What do you need? Regular upkeep, deep clean, move-out refresh or an office.",
        },
        {
          label: "Step 02",
          text: "What size? Studio, family apartment, house or commercial space.",
        },
        {
          label: "Step 03",
          text: "How often? One-off, weekly or a morning/evening slot.",
        },
        {
          label: "Step 04",
          text: "Which area? Paris, west, north-east, south-east.",
        },
      ],
    },
    quick: {
      eyebrow: "Quick picks",
      title:
        "Before any detail page, the site helps visitors recognize the right scenario.",
      description:
        "The structure relies on short, very readable use cases instead of a pile of services.",
      items: [
        {
          icon: "sparkles",
          title: "Home upkeep",
          text: "Weekly visits, fixed routines, and a checklist covering the kitchen, bathrooms, floors and dusting.",
        },
        {
          icon: "clipboard",
          title: "One-time deep clean",
          text: "Move-out clean, lease-end inspection, seasonal reset or a complete fresh start.",
        },
        {
          icon: "ladder",
          title: "Office cleaning",
          text: "Early-morning or evening slots, access routes and a follow-up after the first visit.",
        },
        {
          icon: "check",
          title: "Simple request",
          text: "The site doesn’t try to sell 20 options. It only clarifies what’s needed to quote quickly.",
        },
      ],
    },
    progress: {
      eyebrow: "Progress",
      title:
        "The site conveys the quote logic through a rhythm of steps rather than a statistics section.",
      items: [
        "1. We qualify the place, not just the city.",
        "2. We set the right package based on the real frequency.",
        "3. We announce the time slot that fits the area.",
        "4. We confirm a proposal without opening a second funnel.",
      ],
    },
    zone: {
      eyebrow: "Area covered",
      title: "The local network is presented as an operational promise.",
      description:
        "No gimmick map: the site says where the team goes, when it comes by and how that affects the quote.",
      items: [
        "Paris 9th, 10th, 11th",
        "Boulogne, Issy, Vanves",
        "Vincennes, Montreuil, Bagnolet",
        "Neuilly, Levallois, Clichy",
      ],
    },
  },
  formules: {
    eyebrow: "Packages",
    title: "Packages are compared as service scenarios, not as a flat list.",
    description:
      "Each block spells out the rhythm, the type of place and the level of depth expected.",
    items: [
      {
        title: "Essential",
        text: "Apartment up to 750 sq ft, regular upkeep, kitchen, bathrooms, floors and dusting.",
      },
      {
        title: "Comfort",
        text: "Families and compact houses with laundry rotation, light tidying and a weekly visit.",
      },
      {
        title: "Intensive",
        text: "One-time deep clean, interior windows, thorough catch-up and a complete reset.",
      },
      {
        title: "Professional",
        text: "Small offices, practices or showrooms with opening or closing protocols.",
      },
    ],
  },
  zones: {
    eyebrow: "Areas",
    title: "Areas are organized by route logic, not just by a list of towns.",
    description:
      "The site commits to a concrete network with matching time slots, which makes the promise more credible.",
    toursTitle: "Routes",
    tours: [
      "Monday / Thursday: Paris Right Bank and north-east.",
      "Tuesday / Friday: western Paris and Issy-Vanves-Boulogne.",
      "Wednesday / Saturday: Vincennes, Montreuil and one-off visits.",
    ],
    areas: [
      "Paris 8th to 12th",
      "Paris 15th to 17th",
      "Boulogne, Issy, Sèvres",
      "Levallois, Neuilly, Clichy",
      "Montreuil, Vincennes, Bagnolet",
      "Clamart, Vanves, Malakoff",
    ],
  },
  entreprises: {
    eyebrow: "Business",
    title:
      "The business page talks about circulation, access and protocol, not “premium services”.",
    description:
      "This page is deliberately separate from the residential offer to avoid a blurry hybrid message.",
    items: [
      "Compact offices with discreet opening or closing service.",
      "Practices and studios with a hygiene checklist and sensitive areas.",
      "Low-traffic shops with daily or twice-weekly tidying.",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title:
      "The answers remove the practical doubts that hold up a quick quote.",
    description:
      "The style stays very short and very functional, true to the logic of the template.",
    items: [
      {
        q: "Do you supply the products?",
        a: "Yes, or we work with the supplies already on site if you prefer to keep your own brands.",
      },
      {
        q: "Can we start with a deep clean and then move to regular upkeep?",
        a: "Yes, it’s even a common pattern to start from a clean baseline before a regular schedule.",
      },
      {
        q: "What do you need to give a quote?",
        a: "Type of place, approximate size, target frequency, accessibility and service area.",
      },
    ],
  },
  meta: {
    home: {
      title: "Your business - Housekeeping & cleaning services",
      description:
        "Quote-first template for a housekeeping and cleaning company, with a visible stepper, areas covered and dedicated pages for packages and businesses.",
    },
    formules: {
      title: "Packages - Your business",
      description:
        "Packages are compared as service scenarios: the rhythm, the type of place and the level of depth expected in each block.",
    },
    zones: {
      title: "Areas - Your business",
      description:
        "Areas organized by route logic, with routes and matching time slots that make the promise more credible.",
    },
    entreprises: {
      title: "Business - Your business",
      description:
        "Compact offices, practices, studios and low-traffic shops: a business page about circulation, access and protocol.",
    },
    faq: {
      title: "FAQ - Your business",
      description:
        "Products supplied, moving from a deep clean to regular upkeep, what is needed to quote: answers to the doubts that hold up a quick quote.",
    },
  },
};

export const menageNettoyage: TemplateDefinition<
  "menage-nettoyage",
  MenageNettoyageCopy
> = {
  slug: "menage-nettoyage",
  theme: {
    ink: "oklch(0.322 0.045 226)",
    surface: "oklch(0.97 0.011 218)",
    raised: "oklch(1 0 0)",
    accent: "oklch(0.322 0.045 226)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.322 0.045 226)",
    inverseInk: "oklch(1 0 0)",
    inkMuted: "oklch(0.543 0.031 223)",
    eyebrow: "oklch(0.529 0.075 212)",
    eyebrowInverse: "oklch(0.846 0.06 208)",
    line: "oklch(0.9 0.021 215)",
    radius: "20px",
    radiusPill: "9999px",
    shadowSm: "0 20px 60px oklch(0.322 0.045 226 / 0.06)",
    shadowLg: "0 24px 70px oklch(0.322 0.045 226 / 0.08)",
  },
  paths: {
    home: "/menage-nettoyage",
    formules: "/menage-nettoyage/formules",
    zones: "/menage-nettoyage/zones",
    entreprises: "/menage-nettoyage/entreprises",
    faq: "/menage-nettoyage/faq",
  },
  copy: { fr, en },
};
