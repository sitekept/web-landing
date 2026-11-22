import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « garage-auto » (garage automobile indépendant fictif « Votre
 * entreprise », toutes marques : entretien, freinage, pneus, diagnostic).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/garage-auto/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre (anglais US)
 * typée `GarageAutoCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais ; les vues la résolvent avec la table
 * `Record<GarageAutoIconKey, LucideIcon>` de `src/templates/garage-auto/parts.tsx`.
 *
 * Images : URL Unsplash génériques, choisies sans logo de constructeur, sans
 * marque lisible et sans plaque. Même URL dans les deux langues, seul le `alt`
 * se traduit.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMAGES = {
  workshop: unsplash("1530046614490-89e6f776b83b"),
  underCar: unsplash("1599256872237-5dcc0fbe9668"),
  brakeDisc: unsplash("1613214150384-14921ff659b2"),
  tireMachine: unsplash("1730514782439-cd0e4b763483"),
  engine: unsplash("1429772011165-0c2e054367b8"),
  ratchet: unsplash("1775590766345-c117265f0c1b"),
  dipstick: unsplash("1767180906945-bb92ba750118"),
  brakeCaliper: unsplash("1760317890314-e964ffd7e6a6"),
  tireStack: unsplash("1571335746824-742511d49bce"),
  tread: unsplash("1657307913178-97cb5a4d0cd7"),
  exhaust: unsplash("1759419281419-b04552b2691a"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Garage automobile indépendant",
  },
  phone: {
    href: "tel:+33199000034",
    label: "01 99 00 00 34",
  },
  nav: {
    home: "Accueil",
    prestations: "Prestations",
    devis: "Devis",
    rendezVous: "Rendez-vous",
  },
  cta: {
    call: "Appeler",
    appointment: "Prendre rendez-vous",
    appointmentShort: "Rendez-vous",
    quote: "Demander un devis",
    services: "Voir les prestations",
  },
  a11y: {
    quickActions: "Actions rapides",
  },
  footer: {
    text: "Garage indépendant, toutes marques : entretien, freinage, pneus et diagnostic. Devis écrit avant chaque intervention.",
    contactTitle: "Atelier",
    hoursTitle: "Horaires",
    siteTitle: "Le site",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    email: "contact@votre-entreprise.example",
    hours: "Lun-Ven 8 h-12 h et 14 h-18 h, sam 8 h-12 h",
    closed: "Fermé le dimanche",
  },
  meta: {
    home: {
      title: "Votre entreprise - Garage auto indépendant, toutes marques",
      description:
        "Garage automobile indépendant : entretien, freinage, pneus et diagnostic toutes marques. Devis écrit avant intervention, rendez-vous sous 48 h environ.",
    },
    prestations: {
      title: "Prestations - Votre entreprise",
      description:
        "Entretien, freinage et pneus : ce qui est contrôlé, prix de départ des forfaits et contenu de chaque facture d’un garage indépendant.",
    },
    devis: {
      title: "Devis - Votre entreprise",
      description:
        "Demandez un devis écrit et détaillé pour l’entretien, les freins, les pneus ou un diagnostic. Aucune intervention sans votre accord.",
    },
    rendezVous: {
      title: "Rendez-vous - Votre entreprise",
      description:
        "Réservez un créneau à l’atelier : formulaire de rendez-vous, horaires, coordonnées et accès à votre garage indépendant.",
    },
  },
  home: {
    hero: {
      eyebrow: "Garage indépendant · toutes marques",
      title: "Votre voiture, chiffrée avant d’être ouverte.",
      description:
        "Entretien, freinage, pneus et diagnostic dans un atelier indépendant. Vous recevez un devis écrit et détaillé avant l’intervention : rien n’est démonté sans votre accord.",
      image: {
        src: IMAGES.workshop,
        alt: "Intérieur d’un atelier de mécanique : établis, servantes d’outils et enrouleurs d’air sous des néons.",
      },
      spec: {
        label: "Fiche atelier",
        items: [
          { label: "Délai moyen de rendez-vous", value: "48 h" },
          { label: "Devis écrit", value: "Avant intervention" },
          { label: "Marques", value: "Toutes" },
          { label: "Ponts élévateurs", value: "3" },
        ],
      },
    },
    services: {
      eyebrow: "Prestations",
      title: "Quatre métiers, un seul atelier.",
      description:
        "Pas de sous-traitance cachée : ceux qui vous accueillent sont ceux qui interviennent sur la voiture.",
      label: "Prestations de l’atelier",
      items: [
        {
          title: "Entretien",
          meta: "Vidange, filtres, courroies · dès 89 €",
          image: {
            src: IMAGES.underCar,
            alt: "Mains au travail sous un véhicule, une clé à œil serrée sur un raccord.",
          },
        },
        {
          title: "Freinage",
          meta: "Plaquettes, disques, liquide · dès 119 €",
          image: {
            src: IMAGES.brakeDisc,
            alt: "Étrier et disque de frein, roue déposée, vus de près.",
          },
        },
        {
          title: "Pneus",
          meta: "Montage, équilibrage · dès 24 €",
          image: {
            src: IMAGES.tireMachine,
            alt: "Bande de roulement d’un pneu, vue de très près.",
          },
        },
        {
          title: "Diagnostic",
          meta: "Valise multimarque · dès 59 €",
          image: {
            src: IMAGES.engine,
            alt: "Culasse d’un moteur ouvert, arbres à cames et chaîne de distribution.",
          },
        },
      ],
    },
    method: {
      eyebrow: "Méthode",
      title: "Du diagnostic à la restitution, sans zone d’ombre.",
      description: "Quatre étapes, toujours dans le même ordre.",
      items: [
        {
          icon: "scan-search",
          title: "Diagnostic",
          text: "Contrôle visuel, lecture des défauts et essai si besoin. Nous vous montrons ce que nous trouvons.",
        },
        {
          icon: "file-text",
          title: "Devis écrit",
          text: "Pièces, main-d’œuvre et durée détaillées, envoyés avant toute intervention.",
        },
        {
          icon: "wrench",
          title: "Intervention",
          text: "Le travail commence après votre accord, avec des pièces d’origine ou de qualité équivalente selon votre choix.",
        },
        {
          icon: "package-check",
          title: "Restitution",
          text: "Facture conforme au devis, pièces remplacées rendues sur demande, explications à la remise des clés.",
        },
      ],
    },
    reviews: {
      eyebrow: "Avis clients",
      title: "Des factures qui ressemblent au devis.",
      description:
        "Ce que disent nos clients après la restitution du véhicule.",
      label: "Avis de clients",
      items: [
        {
          quote:
            "Freins refaits en une matinée. Le devis détaillait chaque ligne et la facture était identique au centime près.",
          name: "Camille R.",
          detail: "Plaquettes et disques",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "On m’a montré les plaquettes usées et expliqué ce qui pouvait attendre. Aucune pression pour tout changer.",
          name: "Hugo T.",
          detail: "Révision",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Pneus hiver montés et équilibrés sans attente, sur rendez-vous. Voiture rendue propre, pression contrôlée.",
          name: "Inès B.",
          detail: "Pneus hiver",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Un voyant qui revenait sans cesse. Défaut trouvé en une heure, devis par message avant de toucher à quoi que ce soit.",
          name: "Mathieu L.",
          detail: "Diagnostic",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "Vidange et filtres faits pendant que j’attendais. Le carnet d’entretien a été rempli et les pièces notées.",
          name: "Léa D.",
          detail: "Entretien",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Rappelé avant d’ajouter une réparation non prévue, avec le prix. J’ai pu dire non et revenir la semaine suivante.",
          name: "Yanis K.",
          detail: "Climatisation",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
      ],
    },
    rule: {
      eyebrow: "Notre règle",
      title: "Pas d’intervention sans devis accepté.",
      description:
        "Si nous découvrons autre chose en cours de route, nous arrêtons, nous vous appelons, nous chiffrons et nous attendons votre réponse.",
      image: {
        src: IMAGES.ratchet,
        alt: "Une main serre une clé à cliquet sur un moteur, capot ouvert.",
      },
      points: [
        {
          icon: "file-text",
          title: "Devis avant intervention",
          text: "Détaillé ligne par ligne, daté et conservé avec votre dossier.",
        },
        {
          icon: "phone",
          title: "Appel avant tout supplément",
          text: "Une réparation imprévue ne se fait qu’avec votre accord, prix annoncé.",
        },
        {
          icon: "package-check",
          title: "Pièces remplacées rendues",
          text: "Sur demande, vous récupérez les pièces changées pour les voir de vos yeux.",
        },
      ],
    },
    closing: {
      title: "Un bruit, un voyant, un contrôle à prévoir ?",
      description:
        "Appelez l’atelier ou réservez un créneau : nous vous répondons dans la journée ouvrée.",
    },
  },
  prestations: {
    hero: {
      eyebrow: "Prestations et forfaits",
      title: "Entretien, freinage, pneus : ce qui est fait, ce que cela coûte.",
      description:
        "Pour chaque prestation, ce que nous contrôlons, les prix de départ des forfaits et ce que vous retrouvez sur la facture.",
    },
    jumpLabel: "Aller à une prestation",
    jump: [
      { href: "#entretien", label: "Entretien" },
      { href: "#freinage", label: "Freinage" },
      { href: "#pneus", label: "Pneus" },
      { href: "#forfaits", label: "Forfaits" },
    ],
    blocks: [
      {
        id: "entretien",
        eyebrow: "01 · Entretien",
        title: "Un entretien suivi, pas une simple vidange.",
        text: "Huile, filtres, courroies, niveaux : nous suivons les préconisations du carnet de votre véhicule et vous prévenons de ce qui approche, sans tout vendre d’un coup.",
        image: {
          src: IMAGES.dipstick,
          alt: "Une main tient une jauge de niveau d’huile dont l’extrémité est marquée d’huile.",
        },
        checksTitle: "Contrôlé à chaque passage",
        checks: [
          "Niveaux : huile, refroidissement, freins, lave-glace",
          "État des filtres et des courroies",
          "Éclairage et essuie-glaces",
          "Batterie et témoins du tableau de bord",
          "Pression et usure des pneus",
        ],
        whenTitle: "Quand venir",
        when: "Tous les 15 000 km ou une fois par an environ, ou selon le carnet d’entretien de votre véhicule.",
      },
      {
        id: "freinage",
        eyebrow: "02 · Freinage",
        title: "Des freins contrôlés avant qu’ils ne se plaignent.",
        text: "Plaquettes, disques, étriers, flexibles et liquide : nous mesurons l’usure et vous montrons les pièces avant de proposer un remplacement.",
        image: {
          src: IMAGES.brakeCaliper,
          alt: "Étrier de frein gris et disque percé, roue déposée.",
        },
        checksTitle: "Contrôlé à chaque passage",
        checks: [
          "Épaisseur des plaquettes et état des disques",
          "Étriers, flexibles et canalisations",
          "Niveau et âge du liquide de frein",
          "Essai de freinage avant et après",
          "Serrage des roues au couple",
        ],
        whenTitle: "Quand venir",
        when: "Dès qu’un bruit de frottement, une vibration ou une pédale molle apparaît, et à chaque révision.",
      },
      {
        id: "pneus",
        eyebrow: "03 · Pneus",
        title: "Les pneus, du montage à la géométrie.",
        text: "Pneus été, hiver ou toutes saisons : conseil sur la gamme adaptée à votre usage, montage sur machine, équilibrage, contrôle de la pression et géométrie si besoin.",
        image: {
          src: IMAGES.tireStack,
          alt: "Pile de pneus neufs, sculptures de la bande de roulement vues de près.",
        },
        checksTitle: "Inclus dans le montage",
        checks: [
          "Démontage et remontage sur machine",
          "Équilibrage de chaque roue",
          "Valves neuves et contrôle de la pression",
          "Serrage des roues au couple",
          "Recyclage des anciens pneus",
        ],
        whenTitle: "Quand venir",
        when: "Au changement de saison, ou dès que la gomme atteint la limite d’usure ou présente une hernie ou une fissure.",
      },
    ],
    pricing: {
      eyebrow: "Forfaits",
      title: "Des prix de départ, sans mauvaise surprise.",
      description:
        "Prix indicatifs TTC, pose incluse, pièces selon le véhicule. Le devis écrit fait foi.",
      groups: [
        {
          title: "Entretien",
          items: [
            {
              name: "Vidange et filtre à huile",
              detail: "Huile et filtre inclus, contrôle des niveaux",
              price: "dès 89 €",
            },
            {
              name: "Filtres air, habitacle, carburant",
              detail: "Remplacement à l’unité ou en lot",
              price: "dès 45 €",
            },
            {
              name: "Courroie d’accessoires",
              detail: "Courroie et galet tendeur selon le moteur",
              price: "dès 120 €",
            },
            {
              name: "Climatisation",
              detail: "Contrôle d’étanchéité et recharge",
              price: "dès 79 €",
            },
            {
              name: "Révision complète",
              detail: "Selon les préconisations du carnet",
              price: "dès 189 €",
            },
          ],
        },
        {
          title: "Freinage",
          items: [
            {
              name: "Plaquettes avant",
              detail: "Jeu de quatre, pose incluse",
              price: "dès 119 €",
            },
            {
              name: "Plaquettes et disques avant",
              detail: "Disques par paire, pose incluse",
              price: "dès 289 €",
            },
            {
              name: "Plaquettes arrière",
              detail: "Jeu de quatre, pose incluse",
              price: "dès 129 €",
            },
            {
              name: "Purge du liquide de frein",
              detail: "Liquide neuf et contrôle de la pédale",
              price: "dès 69 €",
            },
          ],
        },
        {
          title: "Pneus",
          items: [
            {
              name: "Montage et équilibrage",
              detail: "Par pneu, valve neuve incluse",
              price: "dès 24 €",
            },
            {
              name: "Permutation des quatre roues",
              detail: "Équilibrage et serrage au couple",
              price: "dès 39 €",
            },
            {
              name: "Géométrie (parallélisme)",
              detail: "Contrôle et réglage sur banc",
              price: "dès 79 €",
            },
            {
              name: "Réparation de crevaison",
              detail: "Selon la position et la taille",
              price: "dès 25 €",
              note: "Sur examen",
            },
          ],
        },
        {
          title: "Diagnostic",
          items: [
            {
              name: "Diagnostic multimarque",
              detail: "Lecture des défauts à la valise et contrôle visuel",
              price: "dès 59 €",
            },
          ],
        },
      ],
      note: "Un tarif n’engage qu’une fois votre devis accepté : le diagnostic vient d’abord, le prix exact ensuite.",
    },
    invoice: {
      eyebrow: "La facture",
      title: "Ce que vous retrouvez sur chaque facture.",
      description: "Pour comprendre ce que vous payez, ligne par ligne.",
      items: [
        {
          icon: "receipt",
          title: "Pièces référencées",
          text: "Chaque pièce est nommée avec sa référence ou sa qualité (origine ou équivalente).",
        },
        {
          icon: "clock",
          title: "Temps passé",
          text: "Main-d’œuvre détaillée, au temps prévu au devis.",
        },
        {
          icon: "gauge",
          title: "Kilométrage relevé",
          text: "Noté à l’entrée du véhicule, pour suivre votre entretien dans le temps.",
        },
        {
          icon: "clipboard-check",
          title: "Contrôles notés",
          text: "Points vérifiés et recommandations pour la suite, remis avec la facture.",
        },
      ],
    },
    rule: {
      eyebrow: "Et le reste ?",
      title: "Un devis sur mesure pour tout le reste.",
      description:
        "Amortisseurs, échappement, distribution, embrayage, contrôle avant contrôle technique : nous chiffrons aussi ce qui n’est pas au forfait.",
      items: [
        "Amortisseurs et trains roulants",
        "Échappement",
        "Distribution",
        "Embrayage",
        "Batterie et démarreur",
        "Contrôle avant contrôle technique",
      ],
    },
    closing: {
      title: "Dites-nous ce qu’il faut à votre voiture.",
      description:
        "Décrivez le besoin, nous chiffrons par écrit. Ou réservez directement un créneau à l’atelier.",
    },
  },
  devis: {
    hero: {
      eyebrow: "Devis gratuit",
      title: "Un devis écrit, avant toute intervention.",
      description:
        "Décrivez votre véhicule et ce que vous avez remarqué. Nous revenons vers vous avec un devis détaillé : pièces, main-d’œuvre et durée.",
      image: {
        src: IMAGES.tread,
        alt: "Sculptures d’un pneu en noir et blanc, vues de très près.",
      },
    },
    form: {
      title: "Votre demande",
      description:
        "Quelques lignes suffisent. Les champs marqués d’une étoile sont obligatoires.",
      name: { label: "Nom et prénom" },
      phone: { label: "Téléphone" },
      email: { label: "E-mail" },
      vehicle: {
        label: "Marque, modèle et année",
        placeholder: "Ex. : citadine essence, 2016",
      },
      mileage: {
        label: "Kilométrage approximatif",
        placeholder: "Ex. : 96 000 km",
      },
      type: {
        label: "Type d’intervention",
        placeholder: "Choisir",
        options: [
          { value: "entretien", label: "Entretien ou révision" },
          { value: "freinage", label: "Freinage" },
          { value: "pneus", label: "Pneus" },
          { value: "diagnostic", label: "Diagnostic (voyant, bruit)" },
          { value: "autre", label: "Autre" },
        ],
      },
      message: {
        label: "Ce que vous avez remarqué",
        placeholder: "Bruit, voyant, vibration, depuis quand…",
      },
      submit: "Envoyer ma demande de devis",
    },
    next: {
      title: "Ce qui se passe ensuite",
      items: [
        {
          icon: "file-text",
          title: "Réception",
          text: "Nous lisons votre demande et vous rappelons si une précision est utile.",
        },
        {
          icon: "receipt",
          title: "Devis écrit",
          text: "Pièces, main-d’œuvre et durée, détaillés ligne par ligne.",
        },
        {
          icon: "calendar-check",
          title: "Votre accord",
          text: "Aucune intervention sans votre accord. Le rendez-vous se prend ensuite, à votre rythme.",
        },
      ],
    },
    sample: {
      eyebrow: "Exemple",
      title: "À quoi ressemble notre devis.",
      description:
        "Un exemple de remplacement des plaquettes et des disques avant, tel que nous le présentons.",
      caption: "Devis d’exemple : freinage avant",
      columns: { item: "Désignation", qty: "Quantité", price: "Montant" },
      lines: [
        { label: "Plaquettes avant, jeu de quatre", qty: "1", price: "68 €" },
        { label: "Disques avant, la paire", qty: "1", price: "124 €" },
        { label: "Liquide de frein", qty: "1 L", price: "14 €" },
        { label: "Main-d’œuvre freinage avant", qty: "1 h 30", price: "99 €" },
      ],
      totalLabel: "Total TTC",
      total: "305 €",
      note: "Exemple fictif, donné à titre d’illustration.",
    },
    other: {
      eyebrow: "Sur mesure",
      title: "Échappement, distribution, embrayage : parlons-en.",
      description:
        "Pour les interventions qui ne sont pas au forfait, le devis est établi après examen du véhicule.",
      image: {
        src: IMAGES.exhaust,
        alt: "Pots catalytiques et lignes d’échappement accrochés à un mur grillagé de l’atelier.",
      },
      items: [
        "Échappement",
        "Distribution",
        "Embrayage",
        "Amortisseurs",
        "Batterie et démarreur",
      ],
    },
    closing: {
      title: "Préférez-vous passer à l’atelier ?",
      description:
        "Réservez un créneau : nous examinons la voiture et nous vous remettons le devis sur place.",
    },
  },
  rendezVous: {
    hero: {
      eyebrow: "Rendez-vous",
      title: "Réservez un créneau à l’atelier.",
      description:
        "Choisissez la prestation, un jour et une demi-journée. Nous confirmons par téléphone ou par e-mail.",
    },
    aside: {
      src: IMAGES.workshop,
      alt: "Intérieur d’un atelier de mécanique : établis, servantes d’outils et enrouleurs d’air sous des néons.",
    },
    form: {
      title: "Votre rendez-vous",
      description: "Les champs marqués d’une étoile sont obligatoires.",
      name: { label: "Nom et prénom" },
      phone: { label: "Téléphone" },
      email: { label: "E-mail" },
      service: {
        label: "Prestation",
        placeholder: "Choisir",
        options: [
          { value: "entretien", label: "Entretien ou révision" },
          { value: "freinage", label: "Freinage" },
          { value: "pneus", label: "Pneus" },
          { value: "diagnostic", label: "Diagnostic" },
          { value: "autre", label: "Autre demande" },
        ],
      },
      date: { label: "Jour souhaité" },
      slot: {
        label: "Créneau",
        placeholder: "Choisir",
        options: [
          { value: "matin", label: "Matin (8 h-12 h)" },
          { value: "apres-midi", label: "Après-midi (14 h-18 h)" },
        ],
      },
      vehicle: {
        label: "Marque, modèle et année",
        placeholder: "Ex. : berline diesel, 2014",
      },
      message: {
        label: "Précisions",
        placeholder:
          "Symptômes, interventions demandées, besoin d’un véhicule de remplacement…",
      },
      submit: "Demander ce créneau",
    },
    hours: {
      title: "Horaires",
      items: [
        { day: "Lundi au vendredi", time: "8 h-12 h et 14 h-18 h" },
        { day: "Samedi", time: "8 h-12 h" },
        { day: "Dimanche", time: "Fermé" },
      ],
      note: "Atelier fermé les jours fériés.",
    },
    details: {
      title: "Coordonnées",
      items: [
        { icon: "phone", label: "Téléphone", value: "01 99 00 00 34" },
        {
          icon: "mail",
          label: "E-mail",
          value: "contact@votre-entreprise.example",
        },
        {
          icon: "map-pin",
          label: "Adresse",
          value: "12 rue de l’Exemple, 00000 Votre ville",
        },
      ],
    },
    prepare: {
      eyebrow: "Avant de venir",
      title: "Trois choses qui nous font gagner du temps.",
      description:
        "Elles aident à poser le bon diagnostic, dès la première heure.",
      items: [
        {
          icon: "gauge",
          title: "Notez le kilométrage",
          text: "Il sert à situer l’entretien déjà fait et celui qui approche.",
        },
        {
          icon: "car",
          title: "Décrivez les symptômes",
          text: "Bruit, voyant, vibration : quand cela arrive, et depuis quand.",
        },
        {
          icon: "key-round",
          title: "Clé antivol de roue",
          text: "Si vos jantes ont un écrou antivol, pensez à la clé.",
        },
      ],
    },
    access: {
      eyebrow: "Accès",
      title: "Facile à trouver, facile à garer.",
      description:
        "L’atelier est au 12 rue de l’Exemple, à l’entrée de la zone d’activités de Votre ville.",
      items: [
        {
          icon: "circle-parking",
          title: "Stationnement",
          text: "Places devant l’atelier, gratuites pendant votre rendez-vous.",
        },
        {
          icon: "bus",
          title: "Transports",
          text: "Arrêt de bus à environ 200 m pour repartir à pied ou en bus.",
        },
        {
          icon: "key-round",
          title: "Hors horaires",
          text: "Boîte à clés à l’entrée pour déposer le véhicule la veille.",
        },
      ],
    },
  },
} as const;

export type GarageAutoCopy = WidenLiterals<typeof fr>;

/** Clés d'icône utilisées par la copie : une entrée par clé dans `parts.tsx`. */
export type GarageAutoIconKey = TemplateIconKey<GarageAutoCopy>;

const en: GarageAutoCopy = {
  brand: {
    name: "Your business",
    tagline: "Independent auto repair shop",
  },
  phone: {
    href: "tel:+33199000034",
    label: "01 99 00 00 34",
  },
  nav: {
    home: "Home",
    prestations: "Services",
    devis: "Quote",
    rendezVous: "Appointment",
  },
  cta: {
    call: "Call",
    appointment: "Book an appointment",
    appointmentShort: "Appointment",
    quote: "Request a quote",
    services: "See the services",
  },
  a11y: {
    quickActions: "Quick actions",
  },
  footer: {
    text: "Independent repair shop, all makes: maintenance, brakes, tires and diagnostics. Written quote before every job.",
    contactTitle: "Shop",
    hoursTitle: "Hours",
    siteTitle: "Site map",
    address: "12 Example Street, 00000 Your city",
    email: "contact@example.com",
    hours: "Mon-Fri 8 am‑12 pm and 2 pm‑6 pm, Sat 8 am‑12 pm",
    closed: "Closed on Sundays",
  },
  meta: {
    home: {
      title: "Your business - Independent auto repair, all makes",
      description:
        "Independent auto repair shop: maintenance, brakes, tires and diagnostics for all makes. Written quote before any work, appointment within about 48 hours.",
    },
    prestations: {
      title: "Auto services - Your business",
      description:
        "Maintenance, brakes and tires: what we inspect, starting prices and what every invoice from an independent shop includes.",
    },
    devis: {
      title: "Quote - Your business",
      description:
        "Request a written, itemized quote for maintenance, brakes, tires or a diagnostic. No work starts without your approval.",
    },
    rendezVous: {
      title: "Appointment - Your business",
      description:
        "Book a slot at the shop: appointment form, business hours, contact details and directions to your independent shop.",
    },
  },
  home: {
    hero: {
      eyebrow: "Independent shop · all makes",
      title: "Your car, priced before it is opened.",
      description:
        "Maintenance, brakes, tires and diagnostics in an independent shop. You get a written, itemized quote before any work: nothing is taken apart without your approval.",
      image: {
        src: IMAGES.workshop,
        alt: "Inside a mechanic’s workshop: workbenches, tool chests and air hose reels under fluorescent lights.",
      },
      spec: {
        label: "Shop at a glance",
        items: [
          { label: "Average time to appointment", value: "48 h" },
          { label: "Written quote", value: "Before work" },
          { label: "Makes", value: "All" },
          { label: "Vehicle lifts", value: "3" },
        ],
      },
    },
    services: {
      eyebrow: "Services",
      title: "Four trades, one shop.",
      description:
        "No hidden subcontracting: the people who greet you are the people who work on your car.",
      label: "Shop services",
      items: [
        {
          title: "Maintenance",
          meta: "Oil change, filters, belts · from €89",
          image: {
            src: IMAGES.underCar,
            alt: "Hands at work under a vehicle, a box wrench tightened on a fitting.",
          },
        },
        {
          title: "Brakes",
          meta: "Pads, rotors, fluid · from €119",
          image: {
            src: IMAGES.brakeDisc,
            alt: "Brake caliper and rotor with the wheel removed, seen up close.",
          },
        },
        {
          title: "Tires",
          meta: "Mounting, balancing · from €24",
          image: {
            src: IMAGES.tireMachine,
            alt: "Tire tread, seen from very close.",
          },
        },
        {
          title: "Diagnostics",
          meta: "Multi-make scan tool · from €59",
          image: {
            src: IMAGES.engine,
            alt: "Cylinder head of an open engine, camshafts and timing chain.",
          },
        },
      ],
    },
    method: {
      eyebrow: "Method",
      title: "From diagnosis to pickup, nothing hidden.",
      description: "Four steps, always in the same order.",
      items: [
        {
          icon: "scan-search",
          title: "Diagnosis",
          text: "Visual inspection, fault code reading and a test drive if needed. We show you what we find.",
        },
        {
          icon: "file-text",
          title: "Written quote",
          text: "Parts, labor and duration itemized and sent before any work.",
        },
        {
          icon: "wrench",
          title: "Repair",
          text: "Work done after your approval, with original or equivalent-quality parts, your choice.",
        },
        {
          icon: "package-check",
          title: "Pickup",
          text: "Invoice matching the quote, replaced parts returned on request, explanations when you get your keys.",
        },
      ],
    },
    reviews: {
      eyebrow: "Customer reviews",
      title: "Invoices that look like the quote.",
      description: "What our customers say once they have their car back.",
      label: "Customer reviews",
      items: [
        {
          quote:
            "Brakes redone in one morning. The quote itemized every line and the invoice matched it to the cent.",
          name: "Camille R.",
          detail: "Pads and rotors",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "They showed me the worn pads and explained what could wait. No pressure to replace everything.",
          name: "Hugo T.",
          detail: "Service",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Winter tires mounted and balanced without a wait, by appointment. Car returned clean, pressure checked.",
          name: "Inès B.",
          detail: "Winter tires",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "A warning light that kept coming back. Fault found within an hour, quote sent by message before they touched anything.",
          name: "Mathieu L.",
          detail: "Diagnostics",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
        {
          quote:
            "Oil change and filters done while I waited. The maintenance log was updated and the parts were noted.",
          name: "Léa D.",
          detail: "Maintenance",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "They called before adding an unplanned repair, with the price. I could say no and come back the following week.",
          name: "Yanis K.",
          detail: "Air conditioning",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
      ],
    },
    rule: {
      eyebrow: "Our rule",
      title: "No work without an approved quote.",
      description:
        "If we find something else along the way, we stop, call you, price it and wait for your answer.",
      image: {
        src: IMAGES.ratchet,
        alt: "A hand tightens a ratchet wrench on an engine with the hood open.",
      },
      points: [
        {
          icon: "file-text",
          title: "Quote before work",
          text: "Itemized line by line, dated and kept with your records.",
        },
        {
          icon: "phone",
          title: "A call before any extra",
          text: "An unplanned repair only happens with your approval, price stated.",
        },
        {
          icon: "package-check",
          title: "Replaced parts returned",
          text: "On request, you take back the parts we changed and see them for yourself.",
        },
      ],
    },
    closing: {
      title: "A noise, a warning light, an inspection due?",
      description:
        "Call the shop or book a slot: we reply within one business day.",
    },
  },
  prestations: {
    hero: {
      eyebrow: "Services and packages",
      title: "Maintenance, brakes, tires: what we do, what it costs.",
      description:
        "For each service, what we inspect, starting prices and what you find on the invoice.",
    },
    jumpLabel: "Jump to a service",
    jump: [
      { href: "#entretien", label: "Maintenance" },
      { href: "#freinage", label: "Brakes" },
      { href: "#pneus", label: "Tires" },
      { href: "#forfaits", label: "Packages" },
    ],
    blocks: [
      {
        id: "entretien",
        eyebrow: "01 · Maintenance",
        title: "Proper upkeep, not just an oil change.",
        text: "Oil, filters, belts, fluid levels: we follow your vehicle’s maintenance schedule and warn you about what is coming, without selling everything at once.",
        image: {
          src: IMAGES.dipstick,
          alt: "A hand holding an oil dipstick, its tip marked with oil.",
        },
        checksTitle: "Checked at every visit",
        checks: [
          "Levels: oil, coolant, brakes, washer fluid",
          "Condition of filters and belts",
          "Lights and wipers",
          "Battery and dashboard warning lights",
          "Tire pressure and wear",
        ],
        whenTitle: "When to come in",
        when: "About every 9,000 miles or once a year, or as your vehicle’s maintenance schedule says.",
      },
      {
        id: "freinage",
        eyebrow: "02 · Brakes",
        title: "Brakes checked before they complain.",
        text: "Pads, rotors, calipers, hoses and fluid: we measure the wear and show you the parts before suggesting a replacement.",
        image: {
          src: IMAGES.brakeCaliper,
          alt: "Gray brake caliper and drilled rotor, wheel removed.",
        },
        checksTitle: "Checked at every visit",
        checks: [
          "Pad thickness and rotor condition",
          "Calipers, hoses and brake lines",
          "Brake fluid level and age",
          "Brake test before and after",
          "Lug nuts torqued to spec",
        ],
        whenTitle: "When to come in",
        when: "As soon as a grinding noise, a vibration or a soft pedal appears, and at every service.",
      },
      {
        id: "pneus",
        eyebrow: "03 · Tires",
        title: "Tires, from mounting to alignment.",
        text: "Summer, winter or all-season tires: advice on the range that suits your driving, machine mounting, balancing, a pressure check and alignment if needed.",
        image: {
          src: IMAGES.tireStack,
          alt: "Stack of new tires, tread patterns seen up close.",
        },
        checksTitle: "Included with mounting",
        checks: [
          "Removal and remounting on the machine",
          "Balancing of each wheel",
          "New valves and pressure check",
          "Lug nuts torqued to spec",
          "Recycling of the old tires",
        ],
        whenTitle: "When to come in",
        when: "At the change of season, or as soon as the tread reaches the wear limit or shows a bulge or a crack.",
      },
    ],
    pricing: {
      eyebrow: "Packages",
      title: "Starting prices, no bad surprises.",
      description:
        "Sample prices, tax included, installation included, parts depend on the vehicle. The written quote is what counts.",
      groups: [
        {
          title: "Maintenance",
          items: [
            {
              name: "Oil and filter change",
              detail: "Oil and filter included, fluid level check",
              price: "from €89",
            },
            {
              name: "Air, cabin and fuel filters",
              detail: "Replaced one by one or as a set",
              price: "from €45",
            },
            {
              name: "Accessory belt",
              detail: "Belt and tensioner pulley depending on the engine",
              price: "from €120",
            },
            {
              name: "Air conditioning",
              detail: "Leak check and recharge",
              price: "from €79",
            },
            {
              name: "Full service",
              detail: "According to the maintenance schedule",
              price: "from €189",
            },
          ],
        },
        {
          title: "Brakes",
          items: [
            {
              name: "Front brake pads",
              detail: "Set of four, installation included",
              price: "from €119",
            },
            {
              name: "Front pads and rotors",
              detail: "Rotors by the pair, installation included",
              price: "from €289",
            },
            {
              name: "Rear brake pads",
              detail: "Set of four, installation included",
              price: "from €129",
            },
            {
              name: "Brake fluid flush",
              detail: "New fluid and pedal check",
              price: "from €69",
            },
          ],
        },
        {
          title: "Tires",
          items: [
            {
              name: "Mounting and balancing",
              detail: "Per tire, new valve included",
              price: "from €24",
            },
            {
              name: "Tire rotation, all four wheels",
              detail: "Balancing and lug nuts torqued to spec",
              price: "from €39",
            },
            {
              name: "Wheel alignment",
              detail: "Check and adjustment on an alignment rack",
              price: "from €79",
            },
            {
              name: "Flat repair",
              detail: "Depending on position and size",
              price: "from €25",
              note: "After inspection",
            },
          ],
        },
        {
          title: "Diagnostics",
          items: [
            {
              name: "Multi-make diagnostic",
              detail:
                "Fault code reading with a scan tool and visual inspection",
              price: "from €59",
            },
          ],
        },
      ],
      note: "A price only applies once your quote is approved: the diagnosis comes first, the exact price after.",
    },
    invoice: {
      eyebrow: "The invoice",
      title: "What you find on every invoice.",
      description: "To understand what you pay for, line by line.",
      items: [
        {
          icon: "receipt",
          title: "Parts with references",
          text: "Every part is named with its reference or quality (original or equivalent).",
        },
        {
          icon: "clock",
          title: "Time spent",
          text: "Itemized labor, at the time estimated in the quote.",
        },
        {
          icon: "gauge",
          title: "Mileage recorded",
          text: "Noted when the vehicle comes in, to follow your maintenance over time.",
        },
        {
          icon: "clipboard-check",
          title: "Checks noted",
          text: "Points inspected and recommendations for later, handed over with the invoice.",
        },
      ],
    },
    rule: {
      eyebrow: "And the rest?",
      title: "A custom quote for everything else.",
      description:
        "Shock absorbers, exhaust, timing belt, clutch, pre-inspection check: we also price what is not in a package.",
      items: [
        "Shock absorbers and suspension",
        "Exhaust",
        "Timing belt",
        "Clutch",
        "Battery and starter",
        "Pre-inspection check",
      ],
    },
    closing: {
      title: "Tell us what your car needs.",
      description:
        "Describe the need and we price it in writing. Or book a slot at the shop directly.",
    },
  },
  devis: {
    hero: {
      eyebrow: "Free quote",
      title: "A written quote, before any work.",
      description:
        "Describe your vehicle and what you have noticed. We come back with an itemized quote: parts, labor and duration.",
      image: {
        src: IMAGES.tread,
        alt: "Black and white tire tread, seen from very close.",
      },
    },
    form: {
      title: "Your request",
      description:
        "A few lines are enough. Fields marked with an asterisk are required.",
      name: { label: "Full name" },
      phone: { label: "Phone" },
      email: { label: "Email" },
      vehicle: {
        label: "Make, model and year",
        placeholder: "E.g. gasoline compact car, 2016",
      },
      mileage: {
        label: "Approximate mileage",
        placeholder: "E.g. 60,000 miles",
      },
      type: {
        label: "Type of work",
        placeholder: "Choose",
        options: [
          { value: "entretien", label: "Maintenance or service" },
          { value: "freinage", label: "Brakes" },
          { value: "pneus", label: "Tires" },
          { value: "diagnostic", label: "Diagnostics (warning light, noise)" },
          { value: "autre", label: "Other" },
        ],
      },
      message: {
        label: "What you have noticed",
        placeholder: "Noise, warning light, vibration, since when…",
      },
      submit: "Send my quote request",
    },
    next: {
      title: "What happens next",
      items: [
        {
          icon: "file-text",
          title: "Received",
          text: "We read your request and call you back if a detail would help.",
        },
        {
          icon: "receipt",
          title: "Written quote",
          text: "Parts, labor and duration, itemized line by line.",
        },
        {
          icon: "calendar-check",
          title: "Your approval",
          text: "No work without your approval. The appointment comes afterward, at your pace.",
        },
      ],
    },
    sample: {
      eyebrow: "Example",
      title: "What our quote looks like.",
      description:
        "An example of a front brake pad and rotor replacement, as we present it.",
      caption: "Sample quote: front brakes",
      columns: { item: "Description", qty: "Quantity", price: "Amount" },
      lines: [
        { label: "Front brake pads, set of four", qty: "1", price: "€68" },
        { label: "Front rotors, pair", qty: "1", price: "€124" },
        { label: "Brake fluid", qty: "1 L", price: "€14" },
        { label: "Front brake labor", qty: "1.5 hr", price: "€99" },
      ],
      totalLabel: "Total incl. tax",
      total: "€305",
      note: "Fictional example, given as an illustration.",
    },
    other: {
      eyebrow: "Custom",
      title: "Exhaust, timing belt, clutch: let’s talk.",
      description:
        "For work that is not in a package, the quote is drawn up after examining the vehicle.",
      image: {
        src: IMAGES.exhaust,
        alt: "Catalytic converters and exhaust lines hanging on a wire-mesh wall of the shop.",
      },
      items: [
        "Exhaust",
        "Timing belt",
        "Clutch",
        "Shock absorbers",
        "Battery and starter",
      ],
    },
    closing: {
      title: "Would you rather stop by the shop?",
      description:
        "Book a slot: we examine the car and hand you the quote on the spot.",
    },
  },
  rendezVous: {
    hero: {
      eyebrow: "Appointment",
      title: "Book a slot at the shop.",
      description:
        "Choose the service, a day and half a day. We confirm by phone or email.",
    },
    aside: {
      src: IMAGES.workshop,
      alt: "Inside a mechanic’s workshop: workbenches, tool chests and air hose reels under fluorescent lights.",
    },
    form: {
      title: "Your appointment",
      description: "Fields marked with an asterisk are required.",
      name: { label: "Full name" },
      phone: { label: "Phone" },
      email: { label: "Email" },
      service: {
        label: "Service",
        placeholder: "Choose",
        options: [
          { value: "entretien", label: "Maintenance or service" },
          { value: "freinage", label: "Brakes" },
          { value: "pneus", label: "Tires" },
          { value: "diagnostic", label: "Diagnostics" },
          { value: "autre", label: "Other request" },
        ],
      },
      date: { label: "Preferred day" },
      slot: {
        label: "Time slot",
        placeholder: "Choose",
        options: [
          { value: "matin", label: "Morning (8 am‑12 pm)" },
          { value: "apres-midi", label: "Afternoon (2 pm‑6 pm)" },
        ],
      },
      vehicle: {
        label: "Make, model and year",
        placeholder: "E.g. diesel sedan, 2014",
      },
      message: {
        label: "Details",
        placeholder: "Symptoms, requested work, need for a loaner vehicle…",
      },
      submit: "Request this slot",
    },
    hours: {
      title: "Business hours",
      items: [
        { day: "Monday to Friday", time: "8 am‑12 pm and 2 pm‑6 pm" },
        { day: "Saturday", time: "8 am‑12 pm" },
        { day: "Sunday", time: "Closed" },
      ],
      note: "Shop closed on holidays.",
    },
    details: {
      title: "Contact details",
      items: [
        { icon: "phone", label: "Phone", value: "01 99 00 00 34" },
        { icon: "mail", label: "Email", value: "contact@example.com" },
        {
          icon: "map-pin",
          label: "Address",
          value: "12 Example Street, 00000 Your city",
        },
      ],
    },
    prepare: {
      eyebrow: "Before you come",
      title: "Three things that save us time.",
      description: "They help us make the right diagnosis from the first hour.",
      items: [
        {
          icon: "gauge",
          title: "Note the mileage",
          text: "It tells us what maintenance is done and what is coming.",
        },
        {
          icon: "car",
          title: "Describe the symptoms",
          text: "Noise, warning light, vibration: when it happens, and since when.",
        },
        {
          icon: "key-round",
          title: "Wheel lock key",
          text: "If your wheels have lock nuts, remember the key.",
        },
      ],
    },
    access: {
      eyebrow: "Directions",
      title: "Easy to find, easy to park.",
      description:
        "The shop is at 12 Example Street, at the entrance of the industrial park of Your city.",
      items: [
        {
          icon: "circle-parking",
          title: "Parking",
          text: "Spaces in front of the shop, free during your appointment.",
        },
        {
          icon: "bus",
          title: "Transit",
          text: "A bus stop about 650 ft away, if you leave on foot or by bus.",
        },
        {
          icon: "key-round",
          title: "After hours",
          text: "Key drop box at the entrance to leave the vehicle the evening before.",
        },
      ],
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type GarageAutoPage = keyof GarageAutoCopy["meta"];

export const garageAuto: TemplateDefinition<"garage-auto", GarageAutoCopy> = {
  slug: "garage-auto",
  /**
   * Identité industrielle et propre : gris béton clair (fond), encre presque
   * noire, accent rouge signal avec une encre claire. Rayons quasi nuls, ombres
   * à filet rouge sous la carte (un trait de 3 px, jamais un flou), titres
   * Inter extra-gras. Chiffres tabulaires et libellés techniques en capitales.
   */
  theme: {
    surface: "oklch(0.925 0.004 250)",
    raised: "oklch(0.975 0.003 250)",
    ink: "oklch(0.17 0.008 260)",
    inkMuted: "oklch(0.38 0.01 260)",
    line: "oklch(0.78 0.006 255)",
    accent: "oklch(0.54 0.215 27)",
    accentInk: "oklch(0.99 0.002 250)",
    inverse: "oklch(0.2 0.008 260)",
    inverseInk: "oklch(0.95 0.004 250)",
    radius: "0.125rem",
    fontDisplayWeight: 800,
    shadowSm: "0 3px 0 0 var(--tpl-accent)",
    shadowLg:
      "0 3px 0 0 var(--tpl-accent), 0 18px 32px -20px color-mix(in oklch, var(--tpl-ink) 45%, transparent)",
  },
  paths: {
    home: "/garage-auto",
    prestations: "/garage-auto/prestations",
    devis: "/garage-auto/devis",
    rendezVous: "/garage-auto/rendez-vous",
  },
  copy: { fr, en },
};
