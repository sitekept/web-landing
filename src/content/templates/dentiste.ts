import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « dentiste » (cabinet dentaire fictif « Clinique Nova Sourire »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/app/(demos)/dentiste/_views/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise (tâche 1e) :
 * 1. dans `dentiste` plus bas, retirer le troisième paramètre `"fr"` de
 *    `TemplateDefinition` ;
 * 2. ajouter `en: { … }` à `copy`, avec les mêmes clés et les mêmes longueurs de
 *    liste que `fr` (type `DentisteCopy`, dérivé de `fr` par `WidenLiterals`).
 *    Tant que `en` manque ou est incomplet, `pnpm type-check` échoue.
 *
 * Les icônes sont associées par position dans les vues : une liste d'icônes
 * suit l'ordre des éléments de la copie.
 */

const fr = {
  brand: {
    name: "Clinique Nova Sourire",
    initials: "NS",
    tagline: "Dentisterie esthétique, familiale et implantaire",
  },
  phone: {
    href: "tel:+33199000018",
    label: "01 99 00 00 18",
  },
  nav: {
    home: "Accueil",
    soins: "Soins",
    technologies: "Technologies",
    equipe: "Équipe",
    premiereVisite: "Première visite",
    rendezVous: "Rendez-vous",
    contact: "Contact",
  },
  cta: {
    book: "Prendre rendez-vous",
    prepareFirstVisit: "Préparer ma première visite",
    seeTechnologies: "Voir les technologies",
    visit: "Venir au cabinet",
    bookFirstVisit: "Réserver ma première visite",
    callSecretary: "Appeler le secrétariat",
    prepareVisit: "Préparer ma visite",
  },
  /** Encart fixe « rail de réservation », visible sur toutes les pages (xl). */
  rail: {
    eyebrow: "Rail rendez-vous",
    title: "Consultation, douleur, contrôle ou devis esthétique.",
    text: "Une entrée de conversion visible sur toutes les pages du cabinet.",
  },
  footer: {
    title: "Un site clinique, calme et structuré autour de la réservation.",
    text: "La grammaire visuelle est volontairement stricte: rayons contenus, lignes propres, information hiérarchisée et aucune mise en scène “spa”.",
    address: "15 avenue du Parc, Levallois-Perret",
    hours: "Lun-Ven 8h30-19h00, Sam 9h00-13h00",
    email: "contact@novasourire.example",
  },
  meta: {
    home: {
      title: "Clinique Nova Sourire - Cabinet dentaire",
      description:
        "Template de cabinet dentaire avec rail de réservation, pages cliniques dédiées et hiérarchie de soins structurée.",
    },
    soins: {
      title: "Soins dentaires - Clinique Nova Sourire",
      description:
        "Prévention, soins conservateurs, esthétique du sourire et implants : les soins classés selon la logique du patient.",
    },
    technologies: {
      title: "Technologies - Clinique Nova Sourire",
      description:
        "Imagerie ciblée, protocole numérique et traçabilité clinique : la technologie comme outil de décision.",
    },
    equipe: {
      title: "Équipe - Clinique Nova Sourire",
      description:
        "Une chaîne clinique continue : chirurgiens-dentistes et coordination de parcours, rôles décrits pour le patient.",
    },
    premiereVisite: {
      title: "Première visite - Clinique Nova Sourire",
      description:
        "Quoi apporter, comment venir et comment la première consultation est conduite, avant, pendant et après.",
    },
    rendezVous: {
      title: "Rendez-vous - Clinique Nova Sourire",
      description:
        "Un pré-tri clinique pour réserver : motifs, choix du créneau et confirmation claire avant la venue.",
    },
    contact: {
      title: "Contact et accès - Clinique Nova Sourire",
      description:
        "Adresse, horaires, transports et stationnement du cabinet dentaire, dans une page courte et pratique.",
    },
  },
  home: {
    hero: {
      eyebrow: "Clinique premium structurée",
      title:
        "Une clinique qui rassure par l’information, puis convertit par la clarté du parcours.",
      description:
        "Ici, le hero ne vend pas une ambiance. Il organise la confiance: spécialités visibles, réservation immédiate, méthode médicale et absence totale de friction dans la prise de contact.",
      routesLabel: "Parcours",
      routes: [
        "Contrôle et prévention",
        "Douleur ou urgence légère",
        "Esthétique du sourire",
        "Implants et réhabilitation",
      ],
    },
    booking: {
      eyebrow: "Première disponibilité",
      slot: "Demain 10h40",
      text: "Consultation de contrôle, douleur légère, devis esthétique ou première visite.",
      points: [
        "Radiographie ciblée si nécessaire",
        "Plan de traitement expliqué avant toute intervention",
        "Compte rendu clair envoyé après la visite",
      ],
    },
    signal: {
      eyebrow: "Signal clinique",
      title:
        "Le site parle comme un cabinet précis, pas comme une landing beauté.",
      description:
        "L'information médicale est hiérarchisée, la réservation reste dominante et les preuves sont montrées avant les promesses.",
      items: [
        "6 pôles de soins lisibles dès l'accueil.",
        "48h pour un premier rendez-vous standard.",
        "4,9/5 sur la qualité des explications et du suivi.",
      ],
    },
    technologies: {
      eyebrow: "Technologies",
      title: "Une homepage construite comme une feuille de route clinique.",
      description:
        "La deuxième séquence ne duplique pas un bloc cartes générique: elle installe immédiatement la logique de diagnostic et d'accompagnement.",
      cards: [
        {
          title: "Imagerie ciblée",
          text: "Le diagnostic est montré et commenté au patient avant toute décision.",
        },
        {
          title: "Protocoles stricts",
          text: "La structure du site met aussi l'hygiène au premier plan dans le discours.",
        },
        {
          title: "Plan de traitement lisible",
          text: "Chaque proposition clinique est séquencée, chiffrée et expliquée.",
        },
      ],
      decision: {
        eyebrow: "Décision médicale",
        title:
          "Le patient voit où il en est, ce qu’on propose, et pourquoi.",
        items: [
          "Imagerie si utile, jamais décorative.",
          "Options de traitement rendues comparables.",
          "Calendrier et suivi expliqués avant validation.",
        ],
      },
    },
    journey: {
      eyebrow: "Parcours patient",
      title: "Une timeline verticale remplace la grille standard de services.",
      description:
        "Le visiteur comprend comment se déroule une visite complète avant même d'ouvrir les pages secondaires.",
      intro:
        "Le rythme de page est volontairement plus séquencé que sur les autres templates: triage, diagnostic, plan, suivi.",
      steps: [
        "Préparer la visite: motif, documents, informations de santé.",
        "Consultation: bilan, radios ciblées si besoin, explications directes.",
        "Planifier la suite: devis, étapes, délais et contacts utiles.",
      ],
    },
    cabinet: {
      eyebrow: "Cabinet",
      title:
        "Une dernière séquence plus humaine, mais toujours tenue par la logique clinique.",
      description:
        "Le site finit sur l'équipe, l'hygiène et l'accès, sans retomber dans un hero bis.",
      cards: [
        {
          title: "Équipe coordonnée",
          text: "Le cabinet présente des rôles clairs, sans dilution du parcours entre plusieurs interlocuteurs.",
        },
        {
          title: "Hygiène documentée",
          text: "Les protocoles et équipements sont montrés comme une preuve de méthode, pas comme un argument marketing flou.",
        },
        {
          title: "Première visite fluide",
          text: "La page dédiée explique comment venir, quoi apporter et comment la consultation sera cadrée.",
        },
      ],
    },
  },
  soins: {
    intro: {
      eyebrow: "Soins",
      title:
        "Les soins sont classés selon la logique patient, pas selon l'organisation interne du cabinet.",
      description:
        "Cette page reste clinique et lisible: bénéfice, niveau d'engagement, mode de suivi.",
      treatments: [
        {
          title: "Prévention & contrôle",
          text: "Consultation de contrôle, détartrage, radios ciblées et logique de suivi annuel.",
        },
        {
          title: "Soins conservateurs",
          text: "Traitement de caries et restauration avec discours simple et décision visible.",
        },
        {
          title: "Esthétique du sourire",
          text: "Blanchiment, facettes et harmonisation avec mise en situation avant validation.",
        },
        {
          title: "Implants & réhabilitation",
          text: "Parcours plus long présenté comme une suite d'étapes claires et comparables.",
        },
      ],
    },
    principles: {
      eyebrow: "Principes",
      title: "Trois garde-fous maintiennent la confiance.",
      items: [
        {
          title: "Diagnostic visible",
          text: "Le patient comprend ce qui est observé avant qu'une solution lui soit proposée.",
        },
        {
          title: "Intervention proportionnée",
          text: "Le site évite le ton spectaculaire et hiérarchise clairement l'utilité du soin.",
        },
        {
          title: "Esthétique cadrée",
          text: "Les traitements premium sont montrés sans basculer dans un imaginaire cosmétique.",
        },
      ],
    },
  },
  technologies: {
    eyebrow: "Technologies",
    title:
      "La technologie est racontée comme un outil de décision, pas comme un décor premium.",
    description:
      "Cette page précise pourquoi chaque outil existe dans le parcours clinique, et ce qu'il change concrètement pour le patient.",
    items: [
      {
        title: "Imagerie ciblée",
        text: "Radiographie ponctuelle ou imagerie guidée selon le cas, jamais affichée comme gadget.",
      },
      {
        title: "Protocole numérique",
        text: "Le cabinet structure mieux ses étapes, ses devis et ses suivis grâce à des outils de coordination.",
      },
      {
        title: "Traçabilité clinique",
        text: "Photos, comptes rendus et recommandations restent rattachés au parcours du patient.",
      },
    ],
  },
  equipe: {
    intro: {
      eyebrow: "Équipe",
      title:
        "Le cabinet se présente comme une chaîne clinique continue, pas comme des profils isolés.",
      description:
        "Les rôles sont décrits selon ce qu'ils changent pour le patient dans son parcours.",
      members: [
        {
          name: "Dr Inès Morvan",
          role: "Chirurgien-dentiste, esthétique et réhabilitation",
        },
        {
          name: "Dr Mehdi Karam",
          role: "Implantologie et chirurgie guidée",
        },
        {
          name: "Léna Puech",
          role: "Coordinatrice de parcours et relation patient",
        },
      ],
    },
    practice: {
      eyebrow: "Pratique",
      title:
        "Le site souligne la compétence par la méthode, pas par la posture.",
      items: [
        {
          title: "Formation continue",
          text: "Le cabinet montre des standards, pas une accumulation d'effets d'autorité.",
        },
        {
          title: "Équipement ciblé",
          text: "La technologie est montrée seulement lorsqu'elle change vraiment le niveau de diagnostic.",
        },
        {
          title: "Continuité du suivi",
          text: "Le patient sait qui prend le relais à chaque étape importante du parcours.",
        },
      ],
    },
  },
  premiereVisite: {
    eyebrow: "Première visite",
    title:
      "Une page dédiée pour réduire l'incertitude avant la première consultation.",
    description:
      "Le cabinet explique quoi apporter, comment venir et comment la consultation sera conduite.",
    steps: [
      {
        title: "Avant la venue",
        text: "Ordonnances récentes, radio disponible, mutuelle si utile et motif de consultation déjà clarifié.",
      },
      {
        title: "Pendant le rendez-vous",
        text: "Échange, bilan, radios ciblées si nécessaires puis proposition de plan de traitement.",
      },
      {
        title: "Après la consultation",
        text: "Compte rendu, consignes, prochain rendez-vous ou devis selon le parcours retenu.",
      },
    ],
  },
  rendezVous: {
    eyebrow: "Rendez-vous",
    title:
      "La page de réservation agit comme un pré-tri clinique, pas comme un simple bouton final.",
    description:
      "Elle distingue les motifs, la temporalité et le niveau de préparation attendu avant venue au cabinet.",
    reasons: {
      eyebrow: "Trois motifs principaux",
      label: "Motif",
      items: [
        "Première consultation et bilan global",
        "Douleur légère ou besoin de contrôle rapide",
        "Projet esthétique ou réhabilitation plus long",
      ],
    },
    steps: [
      {
        title: "Premier échange",
        text: "Motif, antécédents utiles, documents éventuels et niveau d'urgence.",
      },
      {
        title: "Choix du créneau",
        text: "Le site met en avant les temporalités réalistes selon le type de besoin.",
      },
      {
        title: "Confirmation claire",
        text: "Adresse, accès, préparation et durée estimée sont envoyés sans ambiguïté.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title:
      "Adresse, accès et rythme du cabinet dans une page courte, presque logistique.",
    description:
      "Une page contact de cabinet doit répondre aux questions pratiques plus qu'ajouter du storytelling.",
    details: [
      "15 avenue du Parc, 92300 Levallois-Perret",
      "01 99 00 00 18",
      "contact@novasourire.example",
      "Lun-Ven 8h30-19h00, Sam 9h00-13h00",
    ],
    access: [
      {
        title: "Accès immédiat",
        text: "Cabinet à 4 minutes de la gare Clichy-Levallois, accès PMR et façade lisible.",
      },
      {
        title: "Transport",
        text: "Métro ligne 3, bus 274 et station Vélib' à proximité directe.",
      },
      {
        title: "Stationnement",
        text: "Parking Indigo à quelques minutes et dépose minute devant la clinique.",
      },
    ],
  },
} as const;

/** Type de la copie d'une langue, dérivé de la version française. */
export type DentisteCopy = WidenLiterals<typeof fr>;

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type DentistePage = keyof DentisteCopy["meta"];

export const dentiste: TemplateDefinition<"dentiste", DentisteCopy, "fr"> = {
  slug: "dentiste",
  /**
   * Palette reprise de la démo d'origine : fond menthe clair, encre bleu-vert
   * sombre (aussi couleur d'accent et de panneaux inversés), surfaces blanches,
   * rayons de 14 px.
   */
  theme: {
    surface: "oklch(0.971 0.011 189.8)",
    ink: "oklch(0.297 0.04 216.7)",
    inkMuted: "color-mix(in oklch, var(--tpl-ink) 72%, var(--tpl-surface))",
    line: "oklch(0.905 0.027 191)",
    raised: "oklch(1 0 0)",
    accent: "oklch(0.297 0.04 216.7)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.297 0.04 216.7)",
    inverseInk: "oklch(1 0 0)",
    radius: "0.875rem",
  },
  paths: {
    home: "/dentiste",
    soins: "/dentiste/soins",
    technologies: "/dentiste/technologies",
    equipe: "/dentiste/equipe",
    premiereVisite: "/dentiste/premiere-visite",
    rendezVous: "/dentiste/rendez-vous",
    contact: "/dentiste/contact",
  },
  copy: { fr },
};
