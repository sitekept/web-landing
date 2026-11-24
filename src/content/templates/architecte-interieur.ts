import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « architecte-interieur » (studio d’architecture intérieure fictif,
 * « Atelier Minéral » en français, « Your business » en anglais : réalisations
 * en photo, honoraires, méthode en quatre temps, studio, notes, contact).
 *
 * Toute la copie visible vit ici : navigation, textes de chaque page, `alt`,
 * métadonnées. Les vues (`src/templates/architecte-interieur/`) n'ont aucun
 * texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre (anglais US)
 * typée `ArchitecteInterieurCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Images : Unsplash, intérieurs réels (aucun rendu), sans marque, texte
 * lisible, œuvre signée ni visage ; un recadrage `rect` (proportions) écarte
 * les détails gênants. Même URL dans les deux langues, seul le `alt` se
 * traduit. Lieux : « centre-ville », « périphérie », jamais un nom réel ; le
 * segment `atelier-marais` de l'URL de l'étude de cas est conservé (les
 * routes ne changent pas), le texte visible ne nomme aucun quartier.
 */

const unsplash = (id: string, rect = "") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75${rect}`;

const IMG = {
  // Cuisine longue ouverte sur un jardin.
  kitchen: unsplash("1502005097973-6a7082348e28"),
  // Salle à manger d'un appartement ancien (parquet en chevrons).
  dining: unsplash("1505409628601-edc9af17fda6"),
  // Banquette de fenêtre en bois.
  seat: unsplash("1685113348801-4c0f06a11030"),
  // Patio dallé : recadré à gauche, sans le panneau d'extincteur à droite.
  patio: unsplash("1636026093316-ae12fc4ebe64", "&rect=0,0,0.8,1"),
  // Escalier en frêne derrière une cloison vitrée.
  stairs: unsplash("1662624915212-28c69aff68f3"),
  // Chambre d'hôtel à tête de lit grise.
  suite: unsplash("1631049307264-da0ec9d70304"),
  // Salle de bains : vasque ronde, meuble suspendu en bois.
  bath: unsplash("1718894070114-6de0e98449a2"),
  // Couloir vitré d'un loft, béton ciré et contreplaqué : recadré en portrait.
  loft: unsplash("1497366412874-3415097a27e7", "&rect=0.15,0,0.6,1"),
  // Cuisine en chantier : recadrée sans le carton de marque à gauche ni la feuille collée à droite.
  site: unsplash("1618832515490-e181c4794a45", "&rect=0.14,0,0.52,1"),
  // Main qui dessine un plan : recadrée sur la feuille, sans les feutres.
  sketch: unsplash("1649688066810-59a394fc0fef", "&rect=0.25,0.28,0.75,0.6"),
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
    tagline: "Architecture d’intérieur",
  },
  nav: {
    home: "Accueil",
    projets: "Projets",
    methode: "Méthode",
    studio: "Studio",
    journal: "Journal",
    contact: "Contact",
  },
  cta: {
    brief: "Demander une étude",
    projects: "Voir les réalisations",
    call: "Appeler le studio",
  },
  a11y: { quickActions: "Actions rapides" },
  common: {
    location: "Votre ville",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    email: "contact@atelier-mineral.example",
    phone: { label: "01 99 00 00 52", href: "tel:+33199000052" },
    appointment: "Études sur rendez-vous",
    hoursLabel: "Horaires",
    hours: "Du mardi au vendredi, 9 h à 18 h",
  },
  meta: {
    home: {
      title: "Atelier Minéral - Architecte d’intérieur",
      description:
        "Architecte d’intérieur : appartements, maisons et hôtels. Réalisations en photo, honoraires annoncés d’avance, premier rendez-vous d’une heure offert.",
    },
    projets: {
      title: "Projets - Atelier Minéral",
      description:
        "Un appartement ancien, une maison autour d’un patio, une suite d’hôtel : surfaces, durées de chantier, budgets et mission pour chaque réalisation.",
    },
    atelierMarais: {
      title: "Appartement ancien, centre-ville - Atelier Minéral",
      description:
        "Un appartement ancien de 92 m² rendu plus clair : le point de départ, ce qui a été fait, les matières choisies, la durée et le budget des travaux.",
    },
    methode: {
      title: "Méthode et honoraires - Atelier Minéral",
      description:
        "Quatre temps, de l’écoute à la remise des clés, et des honoraires écrits avant de commencer : forfait ou pourcentage des travaux. Questions fréquentes.",
    },
    studio: {
      title: "Studio - Atelier Minéral",
      description:
        "Un studio de six personnes pour des appartements, des maisons et des hôtels indépendants : notre parti pris de retenue et ce qui guide nos choix.",
    },
    journal: {
      title: "Journal - Atelier Minéral",
      description:
        "Notes du studio : cuisine plus discrète, choix d’un textile, seuils entre les pièces. Ce que les chantiers nous apprennent, en quelques lignes.",
    },
    contact: {
      title: "Contact - Atelier Minéral",
      description:
        "Décrivez votre lieu, votre budget et votre calendrier. Réponse sous 48 h et premier rendez-vous d’une heure offert, au studio ou chez vous.",
    },
  },
  projects: {
    factLabels: {
      surface: "Surface",
      duration: "Chantier",
      works: "Travaux",
      mission: "Mission",
    },
    items: [
      {
        id: "appartement",
        kind: "Rénovation d’un appartement",
        title: "Appartement ancien, centre-ville",
        summary:
          "Les pièces s’ouvrent l’une sur l’autre, le parquet en chevrons et les moulures sont gardés : un appartement ancien devenu un grand lieu de vie, clair du matin au soir.",
        surface: "92 m²",
        duration: "7 mois",
        works: "150 000 € HT",
        mission: "Conception et suivi de chantier",
        href: P.atelierMarais,
        cta: "Lire l’étude de cas",
        imageMain: {
          src: IMG.dining,
          alt: "Salle à manger d’un appartement ancien : grande table sombre, chaises noires, parquet en chevrons, hautes portes blanches à moulures et lustre à ampoules",
        },
        imageSide: {
          src: IMG.seat,
          alt: "Banquette en bois dans l’embrasure d’une grande fenêtre, coussins à carreaux, petit tabouret rond et arbres derrière la vitre",
        },
      },
      {
        id: "maison-patio",
        kind: "Rénovation d’une maison",
        title: "Maison patio, en périphérie",
        summary:
          "Les pièces de vie s’organisent autour d’un patio dallé de pierre, avec sa fontaine et ses plantes en pot. Un escalier en frêne clair relie les deux niveaux.",
        surface: "140 m²",
        duration: "9 mois",
        works: "260 000 € HT",
        mission: "Mission complète, mobilier compris",
        href: `${P.projets}#maison-patio`,
        cta: "Voir le projet",
        imageMain: {
          src: IMG.patio,
          alt: "Patio intérieur dallé de pierre : table ronde en verre, chaises en fer forgé à coussins blancs, fontaine en pierre, plantes vertes, murs blancs et porte en bois",
        },
        imageSide: {
          src: IMG.stairs,
          alt: "Escalier aux marches en frêne clair et contremarches noires, derrière une cloison vitrée",
        },
      },
      {
        id: "suite-hotel",
        kind: "Aménagement d’une suite d’hôtel",
        title: "Suite d’hôtel indépendant",
        summary:
          "Une chambre pensée pour le repos : tête de lit rembourrée, lumières chaudes, salle de bains en pierre claire et bois. Livrée en quatre mois, hôtel ouvert.",
        surface: "38 m²",
        duration: "4 mois",
        works: "95 000 € HT",
        mission: "Conception, mobilier sur mesure, suivi",
        href: `${P.projets}#suite-hotel`,
        cta: "Voir le projet",
        imageMain: {
          src: IMG.suite,
          alt: "Chambre d’hôtel : grand lit à tête rembourrée grise, plaid à carreaux, lampes de chevet et grande fenêtre sur la ville",
        },
        imageSide: {
          src: IMG.bath,
          alt: "Salle de bains : vasque ronde blanche sur un plan en pierre claire, meuble suspendu en bois, douche vitrée et carreaux blancs",
        },
      },
    ],
  },
  fees: {
    title: "Des honoraires annoncés avant de commencer",
    description:
      "Le forfait ou le pourcentage figure au contrat : vous savez ce que coûte la mission, et ce qu’elle comprend, avant de signer.",
    groupTitle: "Nos formules",
    items: [
      {
        name: "Conseil à la carte",
        detail:
          "Une demi-journée sur place, un plan d’aménagement et une liste de matières.",
        price: "dès 650 €",
      },
      {
        name: "Étude d’aménagement",
        detail:
          "Relevé, plans, trois ambiances de matières et estimation des travaux.",
        price: "dès 2 400 €",
      },
      {
        name: "Mission complète",
        detail:
          "Pourcentage du montant des travaux, de l’esquisse à la remise des clés : plans, consultation des entreprises, suivi de chantier.",
        price: "8 à 12 %",
      },
      {
        name: "Mobilier sur mesure",
        detail: "Dessin et suivi de fabrication chez un menuisier partenaire.",
        price: "sur devis",
      },
    ],
    note: "Prix hors taxes. Les déplacements dans la zone du studio sont inclus.",
  },
  home: {
    hero: {
      eyebrow: "Architecte d’intérieur",
      title: "Des intérieurs calmes, dessinés pour la vie qu’on y mène.",
      text: "Atelier Minéral transforme des appartements, des maisons et des hôtels : un plan clair, des matières choisies, un chantier suivi jusqu’à la remise des clés.",
      image: {
        src: IMG.kitchen,
        alt: "Longue cuisine ouverte sur un jardin : façades en bois clair, plan de travail blanc, sol en dalles beiges, soleil rasant",
      },
      factsLabel: "En bref",
      facts: [
        { label: "Première visite", value: "1 h, offerte" },
        { label: "Réponse", value: "sous 48 h" },
        { label: "Honoraires", value: "écrits au contrat" },
        { label: "Chantier", value: "visité chaque semaine" },
      ],
    },
    works: {
      title: "Trois réalisations récentes",
      description:
        "Un appartement ancien, une maison autour d’un patio, une suite d’hôtel : chaque projet commence par le même travail d’écoute.",
      all: "Toutes les réalisations",
    },
    offer: {
      title: "Ce que coûte une mission",
      description:
        "Du simple conseil au projet complet, vous choisissez la part que nous prenons en charge.",
      more: "Détail de la méthode et des honoraires",
    },
    method: {
      title: "Quatre temps, un seul interlocuteur",
      description:
        "Chaque étape s’achève par un document que vous validez avant de passer à la suivante.",
      image: {
        src: IMG.sketch,
        alt: "Main qui dessine un plan au feutre sur une feuille posée sur un bureau, ordinateur portable, rouleau de ruban adhésif et verre de vin flou au second plan",
      },
      steps: [
        {
          title: "Écoute et relevé",
          text: "Nous visitons le lieu, mesurons, et vous demandons comment vous vivez chez vous.",
        },
        {
          title: "Esquisse et plans",
          text: "Organisation des pièces, circulations, lumière, puis trois ambiances de matières.",
        },
        {
          title: "Chantier",
          text: "Consultation des entreprises, passage sur place chaque semaine, compte rendu écrit.",
        },
        {
          title: "Remise des clés",
          text: "Réception, réserves levées, mobilier installé, éclairage réglé.",
        },
      ],
      more: "Voir la méthode",
    },
    proof: {
      title: "Ce que disent nos clients",
      items: [
        {
          quote:
            "Nous avions peur de perdre le charme de l’ancien. Le plan nous a rassurés dès la première réunion, et le chantier a tenu le budget.",
          name: "Claire M.",
          detail: "Appartement, 7 mois de chantier",
        },
        {
          quote:
            "La suite était prête à la date promise, sans fermer l’hôtel. Nos clients nous en parlent encore.",
          name: "Julien P.",
          detail: "Gérant d’un hôtel indépendant",
        },
      ],
    },
    journal: {
      title: "Dans le journal du studio",
      more: "Lire le journal",
    },
    closing: {
      title: "Parlons de votre projet",
      text: "Décrivez le lieu, le budget et le calendrier : nous vous répondons sous 48 h et fixons un premier rendez-vous d’une heure, offert.",
    },
  },
  projets: {
    eyebrow: "Réalisations",
    title: "Trois projets, de l’appartement à l’hôtel",
    description:
      "Surface, durée, budget des travaux et mission : les chiffres de chaque réalisation, sans détour.",
    similar: "Parler d’un projet proche",
    contact: {
      title: "Un projet proche du vôtre ?",
      text: "Dites-nous où vous en êtes. Nous vous répondons sous 48 h.",
    },
  },
  atelierMarais: {
    eyebrow: "Étude de cas",
    title: "Appartement ancien, centre-ville",
    description:
      "Un appartement ancien de 92 m², rendu plus clair et plus fluide sans effacer ses moulures ni son parquet.",
    banner: {
      src: IMG.dining,
      alt: "Salle à manger d’un appartement ancien : grande table sombre, chaises noires, parquet en chevrons, hautes portes blanches à moulures et lustre à ampoules",
    },
    brief: {
      title: "Le point de départ",
      text: "Un couple et deux enfants, un appartement cloisonné en petites pièces sombres, une cuisine fermée. Leur demande : voir la lumière traverser le logement, et recevoir à table sans tourner le dos à la cuisine.",
    },
    approach: {
      title: "Ce que nous avons fait",
      points: [
        "Ouvrir la cloison entre la cuisine et la salle à manger, en gardant les hautes portes blanches et les moulures.",
        "Faire de la cuisine une pièce à part entière : façades blanches mates, plan de travail en pierre sombre, fenêtre dégagée.",
        "Limiter la palette à trois matières, pour que l’œil se pose d’abord sur la lumière.",
      ],
      imageSite: {
        src: IMG.site,
        alt: "Cuisine en chantier : meubles blancs protégés par un film plastique, hotte emballée, fenêtre sur la verdure et escabeau",
      },
    },
    materials: {
      title: "Les matières",
      items: [
        {
          name: "Parquet en chevrons",
          text: "Poncé et huilé, conservé dans toutes les pièces de vie.",
        },
        {
          name: "Pierre sombre",
          text: "Plan de travail de la cuisine, posé sur des façades blanches.",
        },
        {
          name: "Chêne huilé",
          text: "Banquette de fenêtre et menuiseries dessinées sur mesure.",
        },
      ],
      image: {
        src: IMG.seat,
        alt: "Banquette en bois dans l’embrasure d’une grande fenêtre, coussins à carreaux, petit tabouret rond et arbres derrière la vitre",
      },
    },
    result: {
      title: "Le résultat",
      text: "Un appartement plus calme et plus clair, où l’on voit d’un bout à l’autre sans perdre le caractère de l’ancien. La famille y a retrouvé ses repas du dimanche.",
    },
    next: {
      title: "Un lieu ancien à transformer ?",
      text: "Nous commençons toujours par une visite : une heure sur place, sans engagement.",
      back: "Toutes les réalisations",
    },
  },
  methode: {
    eyebrow: "Méthode",
    title: "Quatre temps, du premier rendez-vous à la remise des clés",
    description:
      "Chaque étape se termine par un document que vous validez avant de passer à la suivante. Rien n’est lancé sans votre accord écrit.",
    stepLabels: { time: "Durée", deliverable: "Vous recevez" },
    steps: [
      {
        title: "Écoute et relevé",
        time: "1 à 2 semaines",
        text: "Nous visitons le lieu, mesurons chaque pièce et vous demandons comment vous vivez chez vous : qui cuisine, où l’on travaille, ce qui vous gêne aujourd’hui.",
        deliverable: "Un relevé coté et un cahier des besoins.",
      },
      {
        title: "Esquisse et plans",
        time: "3 à 4 semaines",
        text: "Nous dessinons l’organisation des pièces, les circulations et la lumière, puis trois ambiances de matières, avec des échantillons à toucher.",
        deliverable:
          "Plans, coupes, planches de matières et estimation des travaux.",
      },
      {
        title: "Chantier",
        time: "3 à 9 mois selon le projet",
        text: "Nous consultons les entreprises, comparons les devis et passons sur le chantier chaque semaine. Un compte rendu écrit vous est envoyé après chaque visite.",
        deliverable: "Devis comparés et compte rendu hebdomadaire.",
      },
      {
        title: "Remise des clés",
        time: "2 à 4 semaines",
        text: "Réception des travaux, levée des réserves, installation du mobilier et réglage de l’éclairage, pièce par pièce.",
        deliverable:
          "Le dossier des ouvrages et un carnet d’entretien des matières.",
      },
    ],
    imageSketch: {
      src: IMG.sketch,
      alt: "Main qui dessine un plan au feutre sur une feuille posée sur un bureau, ordinateur portable, rouleau de ruban adhésif et verre de vin flou au second plan",
    },
    imageSite: {
      src: IMG.site,
      alt: "Cuisine en chantier : meubles blancs protégés par un film plastique, hotte emballée, fenêtre sur la verdure et escabeau",
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Quel budget prévoir pour les travaux ?",
          a: "Comptez 1 200 à 2 500 € HT le mètre carré pour une rénovation complète, selon l’état du lieu et le niveau de finition. Nous le confirmons après le relevé.",
        },
        {
          q: "Pouvez-vous travailler à distance ?",
          a: "Oui pour le conseil et l’étude d’aménagement : visite en visioconférence, relevé fait avec vous, plans et planches de matières envoyés par courriel. Le suivi de chantier, lui, se fait sur place.",
        },
        {
          q: "Qui choisit les entreprises ?",
          a: "Nous proposons trois entreprises par lot, vous décidez. Vous signez directement les devis, nous les contrôlons.",
        },
        {
          q: "Et si le chantier dérape ?",
          a: "Un budget suivi ligne à ligne et un compte rendu chaque semaine : tout écart vous est signalé avant d’être engagé.",
        },
      ],
    },
  },
  studio: {
    eyebrow: "Studio",
    title: "Un petit studio, un parti pris : la retenue",
    description:
      "Six personnes, une même exigence : un intérieur qui se lit d’un coup d’œil et qui vieillit bien.",
    text: [
      "Atelier Minéral travaille des lieux qui gagnent en calme, en clarté et en ancrage. Nous cherchons moins à décorer un intérieur qu’à clarifier ses volumes, ses circulations et la façon dont on s’y déplace.",
      "L’équipe réunit trois architectes d’intérieur, une conductrice de travaux, un dessinateur et une assistante de direction. Vous gardez le même interlocuteur de la première visite à la remise des clés.",
    ],
    image: {
      src: IMG.loft,
      alt: "Couloir vitré d’un loft : cloisons à fins cadres noirs, sol en béton ciré, grande suspension noire et mur en contreplaqué avec un écran éteint, salon visible au fond",
    },
    areasTitle: "Nos domaines",
    areas: [
      {
        title: "Résidentiel",
        text: "Appartements et maisons, résidences principales ou secondaires.",
      },
      {
        title: "Hôtellerie indépendante",
        text: "Chambres, suites et parties communes, avec chantier phasé pour rester ouvert.",
      },
      {
        title: "Accompagnement à distance",
        text: "Conseil et étude d’aménagement par visioconférence, sur un cahier des charges écrit.",
      },
    ],
    valuesTitle: "Ce qui guide nos choix",
    values: [
      {
        title: "Clarifier avant de décorer",
        text: "Nous commençons par les volumes et la lumière. Le mobilier vient ensuite.",
      },
      {
        title: "Peu de matières, bien choisies",
        text: "Trois matières par pièce au plus, choisies à la main sur échantillons.",
      },
      {
        title: "Un chantier qui tient le projet",
        text: "Nous sommes sur place chaque semaine pour que les détails dessinés soient ceux qui sont posés.",
      },
    ],
  },
  journal: {
    eyebrow: "Journal",
    title: "Notes du studio",
    description: "Ce que les chantiers nous apprennent, en quelques lignes.",
    items: [
      {
        title: "Pourquoi une cuisine doit parfois être plus discrète",
        minutes: "3 min de lecture",
        text: "Une cuisine ouverte occupe vite la moitié de la pièce. En réduisant les façades à deux matières et en cachant les appareils, elle cesse de dominer le salon et se laisse regarder comme un meuble.",
      },
      {
        title: "Choisir un textile qui apaise une pièce",
        minutes: "2 min de lecture",
        text: "Le lin lavé, la laine bouclée et le coton épais absorbent le bruit autant que la lumière. Avant de choisir une couleur, touchez l’échantillon, pliez-le et regardez-le à plusieurs heures de la journée.",
      },
      {
        title: "Le seuil entre deux pièces, un détail qui change tout",
        minutes: "3 min de lecture",
        text: "Une porte plus large, un changement de sol, une marche : le passage d’une pièce à l’autre prépare le regard. Nous le dessinons avant de choisir les meubles.",
      },
    ],
    contact: {
      title: "Une question sur votre projet ?",
      text: "Écrivez-nous, nous répondons sous 48 h.",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre projet",
    description:
      "Décrivez le lieu, le budget et le calendrier. Nous vous répondons sous 48 h pour fixer un premier rendez-vous d’une heure, offert.",
    form: {
      title: "Votre demande",
      intro:
        "Quelques lignes suffisent, nous reviendrons vers vous pour les détails.",
      submit: "Envoyer ma demande",
      fields: {
        name: "Nom",
        phone: "Téléphone",
        email: "Adresse e-mail",
        place: "Type de lieu",
        placePlaceholder: "Choisir",
        places: [
          { value: "appartement", label: "Appartement" },
          { value: "maison", label: "Maison" },
          { value: "hotel", label: "Hôtel ou hébergement" },
          { value: "commerce", label: "Commerce ou bureau" },
          { value: "autre", label: "Autre" },
        ],
        budget: "Budget des travaux",
        budgetPlaceholder: "Choisir",
        budgets: [
          { value: "50", label: "Moins de 50 000 €" },
          { value: "150", label: "50 000 à 150 000 €" },
          { value: "300", label: "150 000 à 300 000 €" },
          { value: "plus", label: "Plus de 300 000 €" },
          { value: "nsp", label: "Je ne sais pas encore" },
        ],
        message: "Votre projet, votre calendrier",
      },
    },
    details: {
      title: "Le studio",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Adresse",
      access: "Sur rendez-vous uniquement.",
    },
    next: {
      title: "Après votre message",
      steps: [
        {
          title: "Réponse sous 48 h",
          text: "Nous lisons votre demande et vous proposons des créneaux.",
        },
        {
          title: "Premier rendez-vous",
          text: "Une heure au studio ou chez vous, offerte et sans engagement.",
        },
        {
          title: "Proposition écrite",
          text: "Mission et honoraires détaillés, que vous gardez le temps de la réflexion.",
        },
      ],
    },
  },
} as const;

export type ArchitecteInterieurCopy = WidenLiterals<typeof fr>;

const en: ArchitecteInterieurCopy = {
  brand: {
    name: "Your business",
    tagline: "Interior architecture",
  },
  nav: {
    home: "Home",
    projets: "Projects",
    methode: "Method",
    studio: "Studio",
    journal: "Journal",
    contact: "Contact",
  },
  cta: {
    brief: "Request a consultation",
    projects: "See our projects",
    call: "Call the studio",
  },
  a11y: { quickActions: "Quick actions" },
  common: {
    location: "Your city",
    address: "12 Example Street, 00000 Your city",
    email: "contact@example.com",
    phone: { label: "01 99 00 00 52", href: "tel:+33199000052" },
    appointment: "Consultations by appointment",
    hoursLabel: "Hours",
    hours: "Tuesday to Friday, 9 a.m. to 6 p.m.",
  },
  meta: {
    home: {
      title: "Your business - Interior architect",
      description:
        "Interior architect for apartments, houses and hotels. Photos of our projects, fees stated up front, and a free one-hour first meeting.",
    },
    projets: {
      title: "Projects - Your business",
      description:
        "An older apartment, a house built around a patio, a hotel suite: floor area, construction time, budget and scope for each project.",
    },
    atelierMarais: {
      title: "Period apartment, downtown - Your business",
      description:
        "A 990 sq ft older apartment made brighter: the starting point, what we did, the materials we chose, plus the construction time and budget.",
    },
    methode: {
      title: "Method and fees - Your business",
      description:
        "Four stages, from listening to handing over the keys, and fees written down before we start: a flat fee or a share of the construction cost. Common questions.",
    },
    studio: {
      title: "Studio - Your business",
      description:
        "A studio of six for apartments, houses and independent hotels: our preference for restraint and what guides our choices.",
    },
    journal: {
      title: "Journal - Your business",
      description:
        "Studio notes: a quieter kitchen, choosing a fabric, the thresholds between rooms. What our job sites teach us, in a few lines.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Describe your space, your budget and your schedule. We reply within 48 hours and offer a free one-hour first meeting, at the studio or at your home.",
    },
  },
  projects: {
    factLabels: {
      surface: "Floor area",
      duration: "Construction",
      works: "Budget",
      mission: "Scope",
    },
    items: [
      {
        id: "appartement",
        kind: "Apartment renovation",
        title: "Period apartment, downtown",
        summary:
          "The rooms open onto one another and the herringbone floor and moldings stay: an older apartment turned into one big living space, bright from morning to evening.",
        surface: "990 sq ft",
        duration: "7 months",
        works: "€150,000 before VAT",
        mission: "Design and construction supervision",
        href: P.atelierMarais,
        cta: "Read the case study",
        imageMain: {
          src: IMG.dining,
          alt: "Dining room of an older apartment: a large dark table, black chairs, herringbone parquet, tall white paneled doors and a bulb chandelier",
        },
        imageSide: {
          src: IMG.seat,
          alt: "Wooden window seat in the bay of a large window, plaid cushions, a small round stool and trees outside the glass",
        },
      },
      {
        id: "maison-patio",
        kind: "House renovation",
        title: "Patio house, on the outskirts",
        summary:
          "The living spaces are arranged around a stone-paved patio with its fountain and potted plants. A pale ash staircase connects the two levels.",
        surface: "1,500 sq ft",
        duration: "9 months",
        works: "€260,000 before VAT",
        mission: "Full scope, furniture included",
        href: `${P.projets}#maison-patio`,
        cta: "See the project",
        imageMain: {
          src: IMG.patio,
          alt: "Indoor patio paved in stone: a round glass table, wrought-iron chairs with white cushions, a stone fountain, green plants, white walls and a wooden door",
        },
        imageSide: {
          src: IMG.stairs,
          alt: "Staircase with pale ash treads and black risers, behind a glass partition",
        },
      },
      {
        id: "suite-hotel",
        kind: "Hotel suite renovation",
        title: "Independent hotel suite",
        summary:
          "A room designed for rest: upholstered headboard, warm lighting, and a bathroom in pale stone and wood. Delivered in four months, with the hotel open.",
        surface: "410 sq ft",
        duration: "4 months",
        works: "€95,000 before VAT",
        mission: "Design, custom furniture, supervision",
        href: `${P.projets}#suite-hotel`,
        cta: "See the project",
        imageMain: {
          src: IMG.suite,
          alt: "Hotel room: a large bed with a gray upholstered headboard, a plaid blanket, bedside lamps and a big window onto the city",
        },
        imageSide: {
          src: IMG.bath,
          alt: "Bathroom: a round white sink on a pale stone counter, a floating wooden vanity, a glass shower and white tiles",
        },
      },
    ],
  },
  fees: {
    title: "Fees stated before we start",
    description:
      "The flat fee or percentage is in the contract: you know what the work costs, and what it includes, before you sign.",
    groupTitle: "Our options",
    items: [
      {
        name: "Advice on demand",
        detail: "A half day on site, a layout plan and a list of materials.",
        price: "from €650",
      },
      {
        name: "Layout study",
        detail:
          "Survey, plans, three material palettes and a construction cost estimate.",
        price: "from €2,400",
      },
      {
        name: "Full scope",
        detail:
          "A percentage of the construction budget, from first sketch to handing over the keys: plans, contractor selection, construction supervision.",
        price: "8 to 12%",
      },
      {
        name: "Custom furniture",
        detail: "Design and follow-up of the build at a partner cabinetmaker.",
        price: "by quote",
      },
    ],
    note: "Prices are before VAT. Travel within the studio’s area is included.",
  },
  home: {
    hero: {
      eyebrow: "Interior architect",
      title: "Calm interiors, designed around the life you lead in them.",
      text: "Your business transforms apartments, houses and hotels: a clear plan, carefully chosen materials, and a job site we follow until the day we hand over the keys.",
      image: {
        src: IMG.kitchen,
        alt: "A long open kitchen facing a garden: pale wood cabinets, a white countertop and beige floor tiles in low sunlight",
      },
      factsLabel: "At a glance",
      facts: [
        { label: "First visit", value: "1 hour, free" },
        { label: "Reply", value: "within 48 hours" },
        { label: "Fees", value: "written in the contract" },
        { label: "Job site", value: "visited every week" },
      ],
    },
    works: {
      title: "Three recent projects",
      description:
        "An older apartment, a house around a patio, a hotel suite: each project starts with the same careful listening.",
      all: "All projects",
    },
    offer: {
      title: "What a project costs",
      description:
        "From simple advice to a full project, you choose how much of the work we take on.",
      more: "Method and fees in detail",
    },
    method: {
      title: "Four stages, one point of contact",
      description:
        "Each stage ends with a document you approve before moving on to the next.",
      image: {
        src: IMG.sketch,
        alt: "A hand drawing a floor plan with a marker on a sheet of paper on a desk, with a laptop, a roll of tape and a blurred wine glass in the background",
      },
      steps: [
        {
          title: "Listening and survey",
          text: "We visit the space, take measurements, and ask how you live at home.",
        },
        {
          title: "Sketch and plans",
          text: "Room layout, circulation, light, then three material palettes.",
        },
        {
          title: "Construction",
          text: "Contractor selection, a visit every week, and a written report.",
        },
        {
          title: "Handover",
          text: "Final inspection, punch list cleared, furniture installed, lighting set.",
        },
      ],
      more: "See the method",
    },
    proof: {
      title: "What our clients say",
      items: [
        {
          quote:
            "We were afraid of losing the charm of the old place. The plan reassured us at the very first meeting, and the job stayed on budget.",
          name: "Claire M.",
          detail: "Apartment, 7 months of construction",
        },
        {
          quote:
            "The suite was ready on the promised date, without closing the hotel. Our guests still talk about it.",
          name: "Julien P.",
          detail: "Manager of an independent hotel",
        },
      ],
    },
    journal: {
      title: "From the studio journal",
      more: "Read the journal",
    },
    closing: {
      title: "Let’s talk about your project",
      text: "Describe the space, the budget and the schedule: we reply within 48 hours and set up a free one-hour first meeting.",
    },
  },
  projets: {
    eyebrow: "Projects",
    title: "Three projects, from apartment to hotel",
    description:
      "Floor area, construction time, budget and scope: the numbers for each project, plainly stated.",
    similar: "Talk about a similar project",
    contact: {
      title: "A project like yours?",
      text: "Tell us where you stand. We reply within 48 hours.",
    },
  },
  atelierMarais: {
    eyebrow: "Case study",
    title: "Period apartment, downtown",
    description:
      "A 990 sq ft older apartment made brighter and more fluid without erasing its moldings or its floor.",
    banner: {
      src: IMG.dining,
      alt: "Dining room of an older apartment: a large dark table, black chairs, herringbone parquet, tall white paneled doors and a bulb chandelier",
    },
    brief: {
      title: "The starting point",
      text: "A couple and two children, an apartment cut up into small dark rooms, a closed-off kitchen. Their request: to see light run through the home, and to host dinner without turning their backs to the kitchen.",
    },
    approach: {
      title: "What we did",
      points: [
        "Open the wall between the kitchen and the dining room, keeping the tall white doors and the moldings.",
        "Make the kitchen a room in its own right: matte white cabinets, a dark stone countertop, a clear window.",
        "Limit the palette to three materials, so the eye rests on the light first.",
      ],
      imageSite: {
        src: IMG.site,
        alt: "Kitchen under construction: white cabinets covered in plastic sheeting, a wrapped range hood, a window onto greenery and a stepladder",
      },
    },
    materials: {
      title: "The materials",
      items: [
        {
          name: "Herringbone parquet",
          text: "Sanded and oiled, kept in all the living areas.",
        },
        {
          name: "Dark stone",
          text: "The kitchen countertop, set on white cabinets.",
        },
        {
          name: "Oiled oak",
          text: "The window seat and custom-designed millwork.",
        },
      ],
      image: {
        src: IMG.seat,
        alt: "Wooden window seat in the bay of a large window, plaid cushions, a small round stool and trees outside the glass",
      },
    },
    result: {
      title: "The result",
      text: "A calmer, brighter apartment where you can see from one end to the other without losing the character of the old place. The family has its Sunday lunches back.",
    },
    next: {
      title: "An older space to transform?",
      text: "We always start with a visit: one hour on site, no commitment.",
      back: "All projects",
    },
  },
  methode: {
    eyebrow: "Method",
    title: "Four stages, from the first meeting to handing over the keys",
    description:
      "Each stage ends with a document you approve before moving on to the next. Nothing starts without your written approval.",
    stepLabels: { time: "Duration", deliverable: "You receive" },
    steps: [
      {
        title: "Listening and survey",
        time: "1 to 2 weeks",
        text: "We visit the space, measure every room and ask how you live at home: who cooks, where you work, what bothers you today.",
        deliverable: "A dimensioned survey and a brief of your needs.",
      },
      {
        title: "Sketch and plans",
        time: "3 to 4 weeks",
        text: "We draw the room layout, circulation and light, then three material palettes, with samples to touch.",
        deliverable:
          "Plans, cross-sections, material boards and a construction cost estimate.",
      },
      {
        title: "Construction",
        time: "3 to 9 months depending on the project",
        text: "We select the contractors, compare the quotes and visit the site every week. A written report is sent to you after each visit.",
        deliverable: "Compared quotes and a weekly report.",
      },
      {
        title: "Handover",
        time: "2 to 4 weeks",
        text: "Final inspection, clearing the punch list, installing the furniture and setting the lighting, room by room.",
        deliverable: "The as-built file and a care guide for the materials.",
      },
    ],
    imageSketch: {
      src: IMG.sketch,
      alt: "A hand drawing a floor plan with a marker on a sheet of paper on a desk, with a laptop, a roll of tape and a blurred wine glass in the background",
    },
    imageSite: {
      src: IMG.site,
      alt: "Kitchen under construction: white cabinets covered in plastic sheeting, a wrapped range hood, a window onto greenery and a stepladder",
    },
    faq: {
      title: "Common questions",
      items: [
        {
          q: "What construction budget should I plan for?",
          a: "Plan on about €110 to €230 per sq ft before VAT for a full renovation, depending on the condition of the space and the level of finish. We confirm it after the survey.",
        },
        {
          q: "Can you work remotely?",
          a: "Yes, for advice and layout studies: a video-call visit, a survey done with you, and plans and material boards sent by email. Construction supervision, however, happens in person.",
        },
        {
          q: "Who chooses the contractors?",
          a: "We suggest three contractors per trade and you decide. You sign the quotes directly, and we check them.",
        },
        {
          q: "What if the job goes off track?",
          a: "A budget tracked line by line and a report every week: any variance is flagged to you before it is committed.",
        },
      ],
    },
  },
  studio: {
    eyebrow: "Studio",
    title: "A small studio with one preference: restraint",
    description:
      "Six people, one standard: an interior you read at a glance and that ages well.",
    text: [
      "Your business works on spaces that gain in calm, clarity and grounding. We are less interested in decorating an interior than in clarifying its volumes, its circulation and the way you move through it.",
      "The team includes three interior architects, a site manager, a draftsman and an executive assistant. You keep the same point of contact from the first visit to handing over the keys.",
    ],
    image: {
      src: IMG.loft,
      alt: "Hallway of a loft: thin black-framed glass partitions, a polished concrete floor, a large black pendant lamp and a plywood wall with a switched-off screen, a living room visible beyond the glass",
    },
    areasTitle: "Our fields",
    areas: [
      {
        title: "Residential",
        text: "Apartments and houses, primary or second homes.",
      },
      {
        title: "Independent hotels",
        text: "Rooms, suites and common areas, with phased construction so the hotel can stay open.",
      },
      {
        title: "Remote support",
        text: "Advice and layout studies by video call, based on a written brief.",
      },
    ],
    valuesTitle: "What guides our choices",
    values: [
      {
        title: "Clarify before decorating",
        text: "We start with volumes and light. Furniture comes after.",
      },
      {
        title: "Few materials, well chosen",
        text: "Three materials per room at most, picked by hand from samples.",
      },
      {
        title: "A job site that keeps the project on track",
        text: "We are on site every week so the details we drew are the ones that get built.",
      },
    ],
  },
  journal: {
    eyebrow: "Journal",
    title: "Studio notes",
    description: "What our job sites teach us, in a few lines.",
    items: [
      {
        title: "Why a kitchen should sometimes be quieter",
        minutes: "3 min read",
        text: "An open kitchen quickly takes up half the room. By reducing the cabinet fronts to two materials and hiding the appliances, it stops dominating the living room and can be looked at like a piece of furniture.",
      },
      {
        title: "Choosing a fabric that calms a room",
        minutes: "2 min read",
        text: "Washed linen, bouclé wool and thick cotton absorb sound as much as light. Before choosing a color, touch the sample, fold it, and look at it at several times of day.",
      },
      {
        title:
          "The threshold between two rooms, a detail that changes everything",
        minutes: "3 min read",
        text: "A wider door, a change of flooring, a step: the passage from one room to the next prepares the eye. We draw it before choosing the furniture.",
      },
    ],
    contact: {
      title: "A question about your project?",
      text: "Write to us, we reply within 48 hours.",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about your project",
    description:
      "Describe the space, the budget and the schedule. We reply within 48 hours to set up a free one-hour first meeting.",
    form: {
      title: "Your request",
      intro:
        "A few lines are enough, we will come back to you for the details.",
      submit: "Send my request",
      fields: {
        name: "Name",
        phone: "Phone",
        email: "Email address",
        place: "Type of space",
        placePlaceholder: "Choose",
        places: [
          { value: "appartement", label: "Apartment" },
          { value: "maison", label: "House" },
          { value: "hotel", label: "Hotel or lodging" },
          { value: "commerce", label: "Shop or office" },
          { value: "autre", label: "Other" },
        ],
        budget: "Construction budget",
        budgetPlaceholder: "Choose",
        budgets: [
          { value: "50", label: "Under €50,000" },
          { value: "150", label: "€50,000 to €150,000" },
          { value: "300", label: "€150,000 to €300,000" },
          { value: "plus", label: "Over €300,000" },
          { value: "nsp", label: "I don’t know yet" },
        ],
        message: "Your project, your schedule",
      },
    },
    details: {
      title: "The studio",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      access: "By appointment only.",
    },
    next: {
      title: "After your message",
      steps: [
        {
          title: "Reply within 48 hours",
          text: "We read your request and suggest time slots.",
        },
        {
          title: "First meeting",
          text: "One hour at the studio or at your home, free and with no commitment.",
        },
        {
          title: "Written proposal",
          text: "Detailed scope and fees, which you keep for as long as you need to think it over.",
        },
      ],
    },
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
