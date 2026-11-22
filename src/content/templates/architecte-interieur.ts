import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « architecte-interieur » (studio d’architecture intérieure fictif,
 * « Atelier Minéral » en français, « Your business » en anglais : projets
 * racontés en chapitres, méthode, studio, journal).
 *
 * Toute la copie visible vit ici : navigation, textes de chaque page, `alt`,
 * métadonnées. Les vues (`src/templates/architecte-interieur/`) n'ont aucun
 * texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre (anglais US)
 * typée `ArchitecteInterieurCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Images : Unsplash, intérieur et façade sans texte lisible, marque ni
 * visage. Même URL dans les deux langues, seul le `alt` se traduit.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

const IMG = {
  house: unsplash("1600047509807-ba8f99d2cdde"),
  bedroom: unsplash("1505693416388-ac5ce068fe85"),
} as const;

const P = {
  home: "/architecte-interieur",
  projets: "/architecte-interieur/projets",
  atelierMarais: "/architecte-interieur/projets/atelier-marais",
  methode: "/architecte-interieur/methode",
  studio: "/architecte-interieur/studio",
  journal: "/architecte-interieur/journal",
  contact: "/architecte-interieur/contact",
} as const;

const fr = {
  brand: {
    name: "Atelier Minéral",
    tagline:
      "Studio résidentiel et hospitality raconté comme une suite de chapitres, pas comme une galerie générique.",
  },
  nav: {
    home: "Accueil",
    projets: "Projets",
    methode: "Méthode",
    studio: "Studio",
    journal: "Journal",
    contact: "Contact",
  },
  common: {
    location: "Paris, Lyon, Genève",
    email: "contact@atelier-mineral.example",
    appointment: "Études sur rendez-vous",
  },
  meta: {
    home: {
      title: "Atelier Minéral - Architecte d’intérieur",
      description:
        "Template éditoriale pour studio d’architecture intérieure avec rail de navigation, projets en chapitres et journal de studio.",
    },
    projets: {
      title: "Projets - Atelier Minéral",
      description:
        "La page projets fonctionne comme un sommaire long de cas d’étude. Chaque entrée pose d’abord une intention, puis ouvre la suite du récit.",
    },
    atelierMarais: {
      title: "Appartement atelier, Le Marais - Atelier Minéral",
      description:
        "Une fiche projet pensée comme un chapitre de dossier : contexte, parti pris, matières et résultat d’usage.",
    },
    methode: {
      title: "Méthode - Atelier Minéral",
      description:
        "Le studio montre comment naît une direction spatiale, de l’écoute au suivi d’exécution.",
    },
    studio: {
      title: "Studio - Atelier Minéral",
      description:
        "Le studio se présente comme une discipline de regard et de retenue. Atelier Minéral travaille des lieux qui gagnent en calme, en lisibilité et en ancrage.",
    },
    journal: {
      title: "Journal - Atelier Minéral",
      description:
        "Chaque note reste courte et réflexive, en cohérence avec la structure très éditoriale de la template.",
    },
    contact: {
      title: "Contact - Atelier Minéral",
      description:
        "Le site invite à formuler le lieu, le budget et le calendrier avec précision, fidèle à la posture du studio.",
    },
  },
  home: {
    hero: {
      eyebrow: "Portfolio chapitre / case-study",
      title:
        "Ici, la page d’accueil lit comme un manifeste de studio, pas comme une vente en deux boutons.",
      text: "La structure privilégie le texte long, les images décalées, le rythme éditorial et des points d’entrée vers les projets plutôt qu’une mécanique classique de landing.",
      projects: "Lire les projets",
      brief: "Ouvrir un brief",
      position: {
        eyebrow: "Position",
        text: "Moins de séduction instantanée, plus de densité, de matière et de justesse d’usage.",
      },
      imageSide: {
        src: IMG.house,
        alt: "Façade de maison contemporaine : enduit clair, bardage de bois et entrée vitrée, au soleil",
      },
      imageMain: {
        src: IMG.bedroom,
        alt: "Chambre avec un grand lit à tête capitonnée, des coussins gris-violet et un banc ivoire au pied du lit",
      },
    },
    chapters: {
      eyebrow: "Chapitres",
      title:
        "La homepage ouvre d’abord trois axes de lecture, comme un sommaire.",
      description:
        "Chaque entrée fonctionne comme un début de récit. On ne scrolle pas une suite de “services”, on choisit une intention.",
      read: "Lire",
      items: [
        {
          label: "Chapitre 01",
          title: "Appartement atelier, Le Marais",
          note: "Décloisonner sans effacer la mémoire du lieu.",
          href: P.atelierMarais,
        },
        {
          label: "Chapitre 02",
          title: "Maison patio, Rueil",
          note: "Réarticuler la vie familiale autour de la lumière.",
          href: P.projets,
        },
        {
          label: "Chapitre 03",
          title: "Suite d’hôtel confidentielle",
          note: "Produire de la retenue, pas de l’effet décoratif.",
          href: P.journal,
        },
      ],
    },
    stories: {
      eyebrow: "Récits de projet",
      title:
        "Les études de cas apparaissent comme des pages de chapitre, pas comme des cartes produit.",
      flagship: {
        eyebrow: "Cas phare",
        text: "Atelier Marais : ouverture des lignes de vue, cuisine minérale, lumière traversante et présence maîtrisée du mobilier.",
        note: "Cette zone remplace volontairement les témoignages ou statistiques classiques. La preuve, ici, passe par la qualité du récit.",
      },
      points: [
        "Les textes parlent de circulation, densité visuelle et matières, pas de slogans lifestyle.",
        "Le studio se vend à travers ses arbitrages, pas à travers un grand nombre de visuels identiques.",
        "Le journal sert d’extension éditoriale pour maintenir l’impression d’un studio qui pense vraiment ses lieux.",
      ],
    },
    journal: {
      eyebrow: "Journal",
      title:
        "Une dernière séquence éditoriale prolonge la voix du studio au lieu d’empiler un footer call-to-action.",
      items: [
        "Comment une cuisine peut structurer un appartement sans devenir un showroom.",
        "Rendre une chambre d’hôtel plus calme en retirant, pas en ajoutant.",
        "Pourquoi les transitions entre pièces comptent autant que les pièces elles-mêmes.",
      ],
    },
  },
  projets: {
    eyebrow: "Projets",
    title: "La page projets fonctionne comme un sommaire long de cas d’étude.",
    description:
      "Chaque entrée pose d’abord une intention, puis ouvre la suite du récit.",
    items: [
      {
        label: "Projet 01",
        title: "Appartement atelier, Le Marais",
        summary:
          "Décloisonnement, cuisine minérale et vues traversantes comme fil directeur.",
        href: P.atelierMarais,
      },
      {
        label: "Projet 02",
        title: "Maison patio, Rueil",
        summary:
          "Séquence de pièces recentrée sur le jardin et le calme du cœur d’îlot.",
        href: P.contact,
      },
      {
        label: "Projet 03",
        title: "Suite confidentielle",
        summary:
          "Hospitality dense, détails réduits et lumière rasante travaillée comme matière.",
        href: P.journal,
      },
    ],
  },
  atelierMarais: {
    eyebrow: "Étude de cas",
    title: "Appartement atelier, Le Marais",
    description:
      "Une fiche projet pensée comme un chapitre de dossier : contexte, parti pris, matières et résultat d’usage.",
    points: [
      "Conserver l’épaisseur ancienne du lieu tout en allégeant sa lecture.",
      "Faire exister la cuisine comme pièce d’architecture, pas comme bloc ajouté.",
      "Installer une palette pierre, noyer fumé et textile ivoire sans sur-signer le projet.",
    ],
    result: {
      eyebrow: "Résultat",
      text: "Un appartement plus calme, plus traversant et plus cohérent, sans perdre sa gravité parisienne.",
      imageBedroom: {
        src: IMG.bedroom,
        alt: "Chambre avec un grand lit à tête capitonnée, des coussins gris-violet et un banc ivoire au pied du lit",
      },
      imageHouse: {
        src: IMG.house,
        alt: "Façade de maison contemporaine : enduit clair, bardage de bois et entrée vitrée, au soleil",
      },
    },
  },
  methode: {
    eyebrow: "Méthode",
    title:
      "Le process se lit comme un enchaînement d’arbitrages, pas comme une liste de livrables.",
    description:
      "Le studio montre comment naît une direction spatiale, de l’écoute au suivi d’exécution.",
    steps: [
      "01. Écoute des usages, des routines et des tensions du lieu.",
      "02. Mise en ordre des volumes, des circulations et des lignes de vue.",
      "03. Calibration des matières, de la lumière et des niveaux de présence.",
      "04. Suivi des choix pour que le chantier ne dilue pas le projet.",
    ],
  },
  studio: {
    eyebrow: "Studio",
    title:
      "Le studio se présente comme une discipline de regard et de retenue.",
    description:
      "Cette page remplace volontairement le banal “à propos” par une formulation plus proche d’un manifeste.",
    text: "Atelier Minéral travaille des lieux qui gagnent en calme, en lisibilité et en ancrage. Le studio cherche moins à “styliser” un intérieur qu’à clarifier ses masses, ses circulations et sa présence sensible.",
    areas: [
      "Résidentiel principal et secondaire",
      "Hospitality intimiste",
      "Accompagnement à distance avec cadrage très écrit",
    ],
  },
  journal: {
    eyebrow: "Journal",
    title:
      "Le journal prolonge la voix du studio et nourrit la perception d’expertise.",
    description:
      "Chaque note reste courte et réflexive, en cohérence avec la structure très éditoriale de la template.",
    items: [
      "Pourquoi la densité visuelle d’une cuisine doit souvent être réduite plutôt qu’accentuée.",
      "Comment choisir un textile qui calme une pièce au lieu de simplement l’habiller.",
      "Ce que l’on apprend d’un projet quand on observe les seuils entre les pièces.",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "La prise de contact est cadrée comme un brief de projet.",
    description:
      "Le site invite à formuler le lieu, le budget et le calendrier avec précision, fidèle à la posture du studio.",
    items: [
      "Quel lieu ? Appartement, maison, hospitality ou autre programme.",
      "Quelle enveloppe ? Budget global, travaux seuls ou mobilier inclus.",
      "Quel tempo ? Démarrage souhaité, contraintes d’usage et marge de calendrier.",
    ],
  },
} as const;

export type ArchitecteInterieurCopy = WidenLiterals<typeof fr>;

const en: ArchitecteInterieurCopy = {
  brand: {
    name: "Your business",
    tagline:
      "A residential and hospitality studio told as a series of chapters, not a generic gallery.",
  },
  nav: {
    home: "Home",
    projets: "Projects",
    methode: "Method",
    studio: "Studio",
    journal: "Journal",
    contact: "Contact",
  },
  common: {
    location: "Paris, Lyon, Geneva",
    email: "contact@example.com",
    appointment: "Consultations by appointment",
  },
  meta: {
    home: {
      title: "Your business - Interior architect",
      description:
        "Editorial template for an interior architecture studio, with a navigation rail, project chapters and a studio journal.",
    },
    projets: {
      title: "Projects - Your business",
      description:
        "The projects page works as a long table of contents of case studies. Each entry sets out an intention first, then opens the rest of the story.",
    },
    atelierMarais: {
      title: "Studio apartment, Le Marais - Your business",
      description:
        "A project sheet designed as a chapter of a case file: context, approach, materials and results in use.",
    },
    methode: {
      title: "Method - Your business",
      description:
        "The studio shows how a spatial direction is born, from listening to construction follow-up.",
    },
    studio: {
      title: "Studio - Your business",
      description:
        "The studio presents itself as a discipline of looking and restraint. Your business works on spaces that gain in calm, legibility and grounding.",
    },
    journal: {
      title: "Journal - Your business",
      description:
        "Each note stays short and reflective, consistent with the very editorial structure of the template.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "The site invites you to spell out the place, the budget and the schedule precisely, true to the studio’s stance.",
    },
  },
  home: {
    hero: {
      eyebrow: "Portfolio chapter / case study",
      title:
        "Here, the home page reads like a studio manifesto, not a two-button sales pitch.",
      text: "The structure favors long-form text, offset images, an editorial rhythm and entry points into the projects rather than a conventional landing-page mechanic.",
      projects: "Read the projects",
      brief: "Open a brief",
      position: {
        eyebrow: "Position",
        text: "Less instant appeal, more density, material and rightness of use.",
      },
      imageSide: {
        src: IMG.house,
        alt: "Contemporary house facade in pale render and wood cladding, with a glazed entrance, in sunlight",
      },
      imageMain: {
        src: IMG.bedroom,
        alt: "Bedroom with a large bed, a tufted headboard, mauve-gray cushions and an ivory bench at the foot of the bed",
      },
    },
    chapters: {
      eyebrow: "Chapters",
      title:
        "The home page first opens three ways of reading, like a table of contents.",
      description:
        "Each entry works as the start of a story. You don’t scroll through a list of “services”, you choose an intention.",
      read: "Read",
      items: [
        {
          label: "Chapter 01",
          title: "Studio apartment, Le Marais",
          note: "Opening up the space without erasing the memory of the place.",
          href: P.atelierMarais,
        },
        {
          label: "Chapter 02",
          title: "Patio house, Rueil",
          note: "Rethinking family life around the light.",
          href: P.projets,
        },
        {
          label: "Chapter 03",
          title: "Confidential hotel suite",
          note: "Creating restraint, not decorative effect.",
          href: P.journal,
        },
      ],
    },
    stories: {
      eyebrow: "Project stories",
      title: "Case studies appear as chapter pages, not as product cards.",
      flagship: {
        eyebrow: "Flagship case",
        text: "Studio apartment, Le Marais: opening up the sightlines, a mineral kitchen, light running through and a controlled furniture presence.",
        note: "This area deliberately replaces the usual testimonials or statistics. Here, the proof lies in the quality of the story.",
      },
      points: [
        "The texts talk about circulation, visual density and materials, not lifestyle slogans.",
        "The studio sells itself through its trade-offs, not through a large number of identical visuals.",
        "The journal serves as an editorial extension, keeping up the impression of a studio that truly thinks through its spaces.",
      ],
    },
    journal: {
      eyebrow: "Journal",
      title:
        "A final editorial sequence extends the studio’s voice instead of stacking up a call-to-action footer.",
      items: [
        "How a kitchen can structure an apartment without becoming a showroom.",
        "Making a hotel room calmer by removing, not adding.",
        "Why the transitions between rooms matter as much as the rooms themselves.",
      ],
    },
  },
  projets: {
    eyebrow: "Projects",
    title:
      "The projects page works as a long table of contents of case studies.",
    description:
      "Each entry first sets out an intention, then opens the rest of the story.",
    items: [
      {
        label: "Project 01",
        title: "Studio apartment, Le Marais",
        summary:
          "Opening up the plan, a mineral kitchen and through views as the guiding thread.",
        href: P.atelierMarais,
      },
      {
        label: "Project 02",
        title: "Patio house, Rueil",
        summary:
          "A sequence of rooms refocused on the garden and the calm of the block’s interior.",
        href: P.contact,
      },
      {
        label: "Project 03",
        title: "Confidential suite",
        summary:
          "Dense hospitality, reduced details and raking light worked as a material.",
        href: P.journal,
      },
    ],
  },
  atelierMarais: {
    eyebrow: "Case study",
    title: "Studio apartment, Le Marais",
    description:
      "A project sheet designed as a chapter of a case file: context, approach, materials and results in use.",
    points: [
      "Keeping the old depth of the place while lightening how it reads.",
      "Making the kitchen exist as a piece of architecture, not as an added block.",
      "Setting up a palette of stone, smoked walnut and ivory textile without over-signing the project.",
    ],
    result: {
      eyebrow: "Result",
      text: "An apartment that is calmer, more open from side to side and more coherent, without losing its Parisian gravity.",
      imageBedroom: {
        src: IMG.bedroom,
        alt: "Bedroom with a large bed, a tufted headboard, mauve-gray cushions and an ivory bench at the foot of the bed",
      },
      imageHouse: {
        src: IMG.house,
        alt: "Contemporary house facade in pale render and wood cladding, with a glazed entrance, in sunlight",
      },
    },
  },
  methode: {
    eyebrow: "Method",
    title:
      "The process reads as a chain of trade-offs, not a list of deliverables.",
    description:
      "The studio shows how a spatial direction is born, from listening to construction follow-up.",
    steps: [
      "01. Listening to the uses, routines and tensions of the place.",
      "02. Putting volumes, circulation and sightlines in order.",
      "03. Calibrating materials, light and levels of presence.",
      "04. Following the choices so the construction site doesn’t dilute the project.",
    ],
  },
  studio: {
    eyebrow: "Studio",
    title:
      "The studio presents itself as a discipline of looking and restraint.",
    description:
      "This page deliberately replaces the banal “about” with wording closer to a manifesto.",
    text: "Your business works on spaces that gain in calm, legibility and grounding. The studio is less about “styling” an interior than clarifying its masses, its circulation and its sensory presence.",
    areas: [
      "Primary and secondary residences",
      "Intimate hospitality",
      "Remote support with a tightly written brief",
    ],
  },
  journal: {
    eyebrow: "Journal",
    title:
      "The journal extends the studio’s voice and builds the perception of expertise.",
    description:
      "Each note stays short and reflective, consistent with the very editorial structure of the template.",
    items: [
      "Why the visual density of a kitchen should often be reduced rather than emphasized.",
      "How to choose a textile that calms a room instead of simply dressing it.",
      "What you learn from a project when you look at the thresholds between rooms.",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Getting in touch is framed like a project brief.",
    description:
      "The site invites you to spell out the place, the budget and the schedule precisely, true to the studio’s stance.",
    items: [
      "Which place? Apartment, house, hospitality or another program.",
      "What budget? Overall budget, construction only or furniture included.",
      "What timing? Desired start, usage constraints and schedule margin.",
    ],
  },
};

export const architecteInterieur: TemplateDefinition<
  "architecte-interieur",
  ArchitecteInterieurCopy
> = {
  slug: "architecte-interieur",
  /**
   * Papier sable chaud (fond de page, colonne latérale, sections sombres en
   * encre brun-noir), filets taupe, aucune couleur d'accent : les boutons sont
   * des cadres à l'encre. Inter en affichage comme en texte, angles droits,
   * sans ombre. `tint` est le « papier blanc » (fond des panneaux et des
   * sections claires).
   */
  theme: {
    surface: "oklch(0.953 0.011 85)",
    raised: "oklch(0.922 0.018 78)",
    ink: "oklch(0.214 0.009 43)",
    inkMuted: "oklch(0.42 0.012 55)",
    tint: "oklch(1 0 0)",
    eyebrow: "oklch(0.5 0.026 63)",
    eyebrowInverse: "oklch(0.82 0.02 75)",
    line: "oklch(0.85 0.021 75)",
    accent: "oklch(0.214 0.009 43)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.214 0.009 43)",
    inverseInk: "oklch(1 0 0)",
    radius: "0",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 600,
    shadowSm: "none",
    shadowLg: "none",
  },
  paths: P,
  copy: { fr, en },
};
