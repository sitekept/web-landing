import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « createur-culinaire » (créateur culinaire indépendant fictif
 * « Votre entreprise » : gâteaux de création, pièces sucrées et buffet salé
 * sur commande).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/createur-culinaire/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `CreateurCulinaireCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais. Les vues la résolvent avec une table
 * `Record<CreateurCulinaireIconKey, LucideIcon>`
 * (`src/templates/createur-culinaire/parts.tsx`).
 *
 * Images : sources libres de droits (Unsplash), sans visage ni enseigne
 * lisible. Les `alt` sont dans la copie, traduits.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: unsplash("1535141192574-5d4897c12636"),
  glaze: unsplash("1542826438-bd32f43d626f"),
  tartlets: unsplash("1495147466023-ac5c588e2e94"),
  buffet: unsplash("1555244162-803834f70033"),
  table: unsplash("1511795409834-ef04bbd61622"),
  drip: unsplash("1578985545062-69928b1d9587"),
  layer: unsplash("1464349095431-e9a21285b5f3"),
  pink: unsplash("1621303837174-89787a7d4729"),
  mousse: unsplash("1602351447937-745cb720612f"),
  macarons: unsplash("1470124182917-cc6e71b22ecc"),
  petitFours: unsplash("1579372786545-d24232daf58c"),
  skewers: unsplash("1555939594-58d7cb561ad1"),
  spread: unsplash("1530062845289-9109b2c9c868"),
  verrines: unsplash("1488477181946-6428a0291777"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Créateur culinaire",
  },
  phone: {
    href: "tel:+33199000063",
    label: "01 99 00 00 63",
  },
  nav: {
    home: "Accueil",
    creations: "Créations",
    evenements: "Événements",
    commande: "Commander",
  },
  cta: {
    order: "Commander",
    quote: "Demander un devis",
    call: "Appeler",
    seeCreations: "Voir les créations",
    seeFormulas: "Voir les formules",
  },
  common: {
    email: "contact@votre-entreprise.example",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    hoursLabel: "Atelier",
    hours: [
      { day: "Du mardi au vendredi", time: "9h – 18h, sur rendez-vous" },
      { day: "Samedi", time: "9h – 13h, retraits et dégustations" },
    ],
  },
  footer: {
    title: "Fait main, sur commande.",
    text: "Gâteaux de création, pièces sucrées et buffet salé pour vos anniversaires, vos mariages et vos grandes occasions.",
    contactLabel: "Contact",
    barLabel: "Actions rapides",
    allergens:
      "Allergènes : informations sur demande pour chaque pièce, à préciser à la commande.",
  },
  meta: {
    home: {
      title: "Créateur culinaire : gâteaux de création et buffet sur commande",
      description:
        "Gâteaux de création, pièces sucrées et buffet salé réalisés sur commande pour vos anniversaires, mariages et fêtes de famille. Devis détaillé sous 48 heures ouvrées.",
    },
    creations: {
      title: "Créations : gâteaux, pièces sucrées et buffet salé",
      description:
        "Six créations récentes, une galerie de pièces sucrées et salées et les saveurs de la saison. Chaque gâteau est dessiné sur mesure pour l’occasion.",
    },
    evenements: {
      title: "Événements : formules, ateliers, livraison et installation",
      description:
        "Formules par type d’événement, à partir de 180 €, ateliers de pâtisserie, livraison et installation dans un rayon de 20 km. Allergènes : informations sur demande.",
    },
    commande: {
      title: "Commander : devis, délais et coordonnées",
      description:
        "Demandez votre devis : 10 jours de délai minimum, 4 semaines pour un mariage. Réponse sous 48 heures ouvrées.",
    },
  },
  home: {
    hero: {
      eyebrow: "Créateur culinaire, sur commande",
      title: "La table des grandes occasions.",
      description:
        "Gâteaux de création, pièces sucrées et buffet salé, pensés avec vous et réalisés à la main pour vos anniversaires, vos mariages et vos fêtes de famille.",
      image: {
        src: IMG.hero,
        alt: "Pièce montée blanche à trois étages, ornée de fraises, de framboises et de myrtilles",
      },
      caption: "Pièce montée aux fruits rouges, pour un mariage.",
      facts: [
        { value: "10 jours", label: "de délai minimum" },
        { value: "4 semaines", label: "pour un mariage" },
        { value: "20 km", label: "de livraison autour de l’atelier" },
      ],
    },
    manifesto: {
      eyebrow: "Le manifeste",
      title:
        "Nous cuisinons pour la table, pas pour la vitrine : peu d’ingrédients, de la précision, des gestes qui se voient.",
      description:
        "Chaque commande est dessinée avec vous, du premier croquis à la dégustation, puis réalisée à la main dans notre atelier. Des saveurs nettes, des finitions soignées, des desserts qu’on mange jusqu’à la dernière part.",
    },
    universes: {
      eyebrow: "Trois univers",
      title: "De la pièce maîtresse à la dernière bouchée.",
      items: [
        {
          title: "Gâteaux de création",
          text: "Entremets, layer cakes et pièces montées dessinés sur mesure : saveurs, hauteur, décor et message.",
          link: "Voir les créations",
          image: {
            src: IMG.glaze,
            alt: "Entremets au glaçage orange, décoré de fraises et de chocolat",
          },
        },
        {
          title: "Pièces sucrées",
          text: "Tartelettes, macarons, verrines et petits gâteaux individuels, pour un buffet de desserts ou en accompagnement.",
          link: "Voir les pièces sucrées",
          image: {
            src: IMG.tartlets,
            alt: "Tartelettes aux fruits et aux fleurs comestibles, vues du dessus",
          },
        },
        {
          title: "Buffet salé",
          text: "Plateaux, bouchées et grandes pièces à partager, installés sur place pour vos invités.",
          link: "Voir les formules",
          image: {
            src: IMG.buffet,
            alt: "Buffet de plats chauds dans des bacs dorés, entouré de fleurs blanches",
          },
        },
      ],
    },
    proof: {
      eyebrow: "Avis",
      title: "Ce qu’en disent celles et ceux qui ont commandé.",
      description:
        "Anniversaires, mariages, repas de famille et événements d’entreprise.",
      label: "Avis de clients",
      items: [
        {
          quote:
            "Le gâteau était aussi beau que bon. Nos invités ont photographié la table avant d’y toucher.",
          name: "Claire M.",
          detail: "Anniversaire, 40 ans",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Une pièce montée légère, loin des classiques trop sucrés. Les retours de la famille ont été unanimes.",
          name: "Hugo T.",
          detail: "Mariage",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Buffet impeccable, installé en vingt minutes. Seul regret : j’aurais dû commander plus de pièces salées.",
          name: "Marc D.",
          detail: "Événement d’entreprise",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "La recette a été adaptée à l’allergie de ma fille sans rien perdre au visuel. Un vrai soulagement.",
          name: "Inès B.",
          detail: "Fête de famille",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Échanges rapides, devis clair, dégustation avant le grand jour : tout était limpide.",
          name: "Laure P.",
          detail: "Mariage",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "L’atelier gâteau décoré était parfait pour l’anniversaire de ma sœur. Chacun est reparti avec sa création.",
          name: "Yanis K.",
          detail: "Atelier",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
      ],
    },
    pause: {
      image: {
        src: IMG.table,
        alt: "Longue table dressée, verres à pied et bouquets de fleurs colorées à la lumière du soir",
      },
      quote: "Un bon dessert, c’est celui dont on parle encore le lendemain.",
      author: "Votre entreprise, créateur culinaire",
    },
    steps: {
      eyebrow: "Comment commander",
      title: "Quatre étapes, sans mauvaise surprise.",
      items: [
        {
          title: "Vous nous écrivez",
          text: "Date, nombre de personnes, envies et allergies : quelques lignes suffisent.",
        },
        {
          title: "Nous dessinons ensemble",
          text: "Vous recevez un devis détaillé, avec une proposition de saveurs et de décor, sous 48 heures ouvrées.",
        },
        {
          title: "Nous réalisons",
          text: "La commande est confirmée par un acompte, puis préparée à la main. Une dégustation est possible pour les mariages.",
        },
        {
          title: "Retrait ou livraison",
          text: "Vous retirez à l’atelier, ou nous livrons et installons dans un rayon de 20 km.",
        },
      ],
    },
    closing: {
      title: "Votre prochaine fête mérite sa pièce maîtresse.",
      text: "Dites-nous la date, le nombre d’invités et vos envies. Nous revenons vers vous avec un devis détaillé.",
    },
  },
  creations: {
    hero: {
      eyebrow: "Créations",
      title: "Des pièces faites pour être regardées, puis partagées.",
      description:
        "Chaque gâteau est unique, dessiné pour l’occasion. Voici six créations récentes, du plus sobre au plus festif.",
    },
    gallery: {
      label: "Créations récentes",
      items: [
        {
          title: "Entremets aux agrumes",
          meta: "Anniversaire",
          image: {
            src: IMG.glaze,
            alt: "Entremets au glaçage orange brillant, décoré de fraises et de croustillants au chocolat",
          },
        },
        {
          title: "Pièce montée aux fruits rouges",
          meta: "Mariage",
          image: {
            src: IMG.hero,
            alt: "Gâteau blanc à trois étages, orné de fruits rouges",
          },
        },
        {
          title: "Drip chocolat et noisette",
          meta: "Fête de famille",
          image: {
            src: IMG.drip,
            alt: "Gâteau au chocolat nappé de ganache coulante et couronné de rosaces",
          },
        },
        {
          title: "Layer cake multicolore",
          meta: "Anniversaire",
          image: {
            src: IMG.layer,
            alt: "Gâteau à étages colorés, parsemé de confettis sucrés, posé sur un plat bleu",
          },
        },
        {
          title: "Gâteau rose et cornet",
          meta: "Fête d’enfant",
          image: {
            src: IMG.pink,
            alt: "Gâteau rose à coulures, surmonté d’un cornet glacé",
          },
        },
        {
          title: "Mousse au chocolat",
          meta: "Événement d’entreprise",
          image: {
            src: IMG.mousse,
            alt: "Gâteau mousse au chocolat décoré de billes croquantes",
          },
        },
      ],
    },
    grid: {
      eyebrow: "Pièces sucrées et salées",
      title: "À la bouchée, à la part, à la table.",
      description:
        "Les petites pièces accompagnent les grands gâteaux ou composent un buffet complet.",
      items: [
        {
          caption: "Tartelettes aux fruits de saison",
          image: {
            src: IMG.tartlets,
            alt: "Tartelettes garnies de fruits frais et de fleurs comestibles",
          },
        },
        {
          caption: "Macarons, parfums du moment",
          image: {
            src: IMG.macarons,
            alt: "Coupe de macarons de plusieurs parfums",
          },
        },
        {
          caption: "Plateau de pièces individuelles",
          image: {
            src: IMG.petitFours,
            alt: "Présentoir à étages garni de petits gâteaux individuels",
          },
        },
        {
          caption: "Brochettes et grillades du buffet",
          image: {
            src: IMG.skewers,
            alt: "Plateau de brochettes grillées et de légumes rôtis, avec des sauces",
          },
        },
        {
          caption: "Table de buffet salé",
          image: {
            src: IMG.spread,
            alt: "Grande table en bois couverte de plats à partager",
          },
        },
        {
          caption: "Verrines fraise et vanille",
          image: {
            src: IMG.verrines,
            alt: "Verrines de crème vanille et de fraises fraîches",
          },
        },
      ],
    },
    seasons: {
      eyebrow: "Saveurs de saison",
      title: "Ce que nous cuisinons en ce moment.",
      description:
        "La carte suit les produits du moment. Dites-nous vos préférences, nous composons autour.",
      items: [
        {
          season: "Printemps",
          flavors: "Fraise, rhubarbe, vanille, citron vert",
          text: "Des desserts frais et acidulés pour les premières tables dehors.",
        },
        {
          season: "Été",
          flavors: "Abricot, pêche, framboise, basilic",
          text: "Des fruits mûrs, peu de sucre, des textures légères.",
        },
        {
          season: "Automne",
          flavors: "Poire, noisette, châtaigne, cacao",
          text: "Des saveurs rondes et boisées pour les repas de famille.",
        },
        {
          season: "Hiver",
          flavors: "Agrumes, pistache, chocolat noir, épices douces",
          text: "Des gâteaux intenses et lumineux pour les fêtes de fin d’année.",
        },
      ],
    },
    closing: {
      title: "Une idée en tête ? Envoyez-la-nous.",
      text: "Une photo, une couleur, un souvenir : nous partons de ce que vous avez en tête pour dessiner votre gâteau.",
    },
  },
  evenements: {
    hero: {
      eyebrow: "Événements",
      title: "Une formule pour chaque grande occasion.",
      description:
        "Des formules claires pour vous repérer, toujours ajustées à votre lieu, à votre budget et à vos invités.",
    },
    formulas: {
      eyebrow: "Formules",
      title: "Quatre points de départ.",
      description:
        "Tarifs indicatifs, selon le nombre de personnes, le décor et la saison. Chaque commande reçoit un devis détaillé.",
      guestsLabel: "Invités",
      includesLabel: "Ce qui est inclus",
      fromLabel: "À partir de",
      items: [
        {
          icon: "cake-slice",
          name: "Anniversaire",
          guests: "10 à 30 personnes",
          includes: [
            "Un gâteau de création sur mesure",
            "Deux pièces sucrées assorties",
            "Bougies et décor de table",
            "Retrait à l’atelier",
          ],
          from: "180 €",
        },
        {
          icon: "heart",
          name: "Mariage",
          guests: "50 à 150 personnes",
          includes: [
            "Pièce montée ou gâteaux de création",
            "Buffet sucré de trois pièces",
            "Dégustation avant la commande",
            "Livraison et installation sur place",
          ],
          from: "650 €",
        },
        {
          icon: "users",
          name: "Fête de famille",
          guests: "15 à 60 personnes",
          includes: [
            "Buffet salé de six pièces",
            "Plateau de pièces sucrées",
            "Un gâteau central",
            "Livraison dans un rayon de 20 km",
          ],
          from: "320 €",
        },
        {
          icon: "briefcase",
          name: "Événement d’entreprise",
          guests: "20 à 200 personnes",
          includes: [
            "Buffet salé et sucré",
            "Présentation sur plateaux",
            "Livraison sur le lieu de l’événement",
            "Facture au nom de l’entreprise",
          ],
          from: "420 €",
        },
      ],
    },
    workshops: {
      eyebrow: "Ateliers",
      title: "Mettre la main à la pâte, ensemble.",
      description:
        "Nos ateliers se tiennent à l’atelier ou chez vous, pour un anniversaire, une équipe ou un moment entre amis. Le matériel est fourni et chacun repart avec sa création.",
      image: {
        src: IMG.macarons,
        alt: "Macarons de plusieurs couleurs, prêts à être garnis pendant un atelier",
      },
      items: [
        {
          title: "Atelier gâteau décoré",
          text: "2 h 30, jusqu’à 8 personnes. Montage, glaçage et décor d’un gâteau à emporter.",
          price: "À partir de 65 € par personne",
        },
        {
          title: "Atelier pièces sucrées",
          text: "2 heures, jusqu’à 10 personnes. Tartelettes, macarons ou verrines, au choix.",
          price: "À partir de 55 € par personne",
        },
        {
          title: "Atelier d’équipe",
          text: "Sur mesure, de 10 à 30 personnes, dans vos locaux ou à l’atelier.",
          price: "Sur devis",
        },
      ],
    },
    logistics: {
      eyebrow: "Sur place",
      title: "Livraison, installation, allergènes.",
      items: [
        {
          icon: "truck",
          title: "Livraison",
          text: "Dans un rayon de 20 km autour de l’atelier, avec des frais selon la distance. Au-delà, sur devis.",
        },
        {
          icon: "utensils-crossed",
          title: "Installation",
          text: "Pour les buffets et les pièces montées, nous mettons tout en place avant l’arrivée de vos invités.",
        },
        {
          icon: "wheat",
          title: "Allergènes",
          text: "Informations sur demande pour chaque pièce. Précisez vos allergies à la commande : l’atelier travaille avec du gluten, des fruits à coque, du lait et des œufs.",
        },
      ],
    },
    closing: {
      title: "Racontez-nous votre événement.",
      text: "Lieu, date, nombre d’invités : nous composons la formule qui vous ressemble.",
    },
  },
  commande: {
    hero: {
      eyebrow: "Commander",
      title: "Parlons de votre prochaine fête.",
      description:
        "Remplissez la demande ci-dessous. Nous répondons avec un devis détaillé sous 48 heures ouvrées.",
    },
    delays: {
      eyebrow: "Délais",
      title: "Prévoyez un peu d’avance.",
      note: "Une date plus proche ? Appelez-nous : selon le planning de l’atelier, c’est parfois possible.",
      items: [
        {
          value: "10 jours",
          label: "Gâteaux et pièces sucrées",
          text: "Délai minimum pour un anniversaire ou une fête de famille.",
        },
        {
          value: "4 semaines",
          label: "Mariages",
          text: "Pour réserver la date, préparer la dégustation et le décor.",
        },
        {
          value: "48 h",
          label: "Réponse à votre demande",
          text: "Jours ouvrés, par e-mail ou par téléphone.",
        },
      ],
    },
    form: {
      title: "Votre demande",
      intro:
        "Quelques lignes suffisent. Les champs marqués d’un astérisque sont obligatoires.",
      submit: "Envoyer la demande",
      fields: {
        name: "Nom",
        email: "E-mail",
        phone: "Téléphone",
        eventType: "Type d’événement",
        eventTypePlaceholder: "Choisir un type",
        eventTypes: [
          { value: "anniversaire", label: "Anniversaire" },
          { value: "mariage", label: "Mariage" },
          { value: "fete-de-famille", label: "Fête de famille" },
          { value: "entreprise", label: "Événement d’entreprise" },
          { value: "atelier", label: "Atelier" },
          { value: "autre", label: "Autre" },
        ],
        date: "Date de l’événement",
        guests: "Nombre de personnes",
        guestsPlaceholder: "Par exemple 40",
        wishes: "Vos envies et les allergies à connaître",
      },
    },
    details: {
      title: "Coordonnées",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Atelier",
      hoursLabel: "Horaires",
      pickup:
        "Retrait à l’atelier sur rendez-vous, livraison dans un rayon de 20 km.",
    },
  },
} as const;

export type CreateurCulinaireCopy = WidenLiterals<typeof fr>;

/** Clés d'icône utilisées par la copie (table des icônes dans `parts.tsx`). */
export type CreateurCulinaireIconKey = TemplateIconKey<CreateurCulinaireCopy>;

const en: CreateurCulinaireCopy = {
  brand: {
    name: "Your business",
    tagline: "Culinary creator",
  },
  phone: {
    href: "tel:+33199000063",
    label: "01 99 00 00 63",
  },
  nav: {
    home: "Home",
    creations: "Creations",
    evenements: "Events",
    commande: "Order",
  },
  cta: {
    order: "Order",
    quote: "Request a quote",
    call: "Call",
    seeCreations: "See the creations",
    seeFormulas: "See the packages",
  },
  common: {
    email: "contact@example.com",
    address: "12 Example Street, 00000 Your city",
    hoursLabel: "Workshop",
    hours: [
      { day: "Tuesday to Friday", time: "9 a.m. – 6 p.m., by appointment" },
      { day: "Saturday", time: "9 a.m. – 1 p.m., pickups and tastings" },
    ],
  },
  footer: {
    title: "Handmade, to order.",
    text: "Designer cakes, sweet pieces and savory buffets for your birthdays, weddings and big occasions.",
    contactLabel: "Contact",
    barLabel: "Quick actions",
    allergens:
      "Allergens: information available on request for every piece, to be mentioned when you order.",
  },
  meta: {
    home: {
      title: "Culinary creator: designer cakes and buffets made to order",
      description:
        "Designer cakes, sweet pieces and savory buffets made to order for your birthdays, weddings and family celebrations. Detailed quote within 48 business hours.",
    },
    creations: {
      title: "Creations: cakes, sweet pieces and savory buffet",
      description:
        "Six recent creations, a gallery of sweet and savory pieces and the flavors of the season. Every cake is designed to order for the occasion.",
    },
    evenements: {
      title: "Events: packages, workshops, delivery and setup",
      description:
        "Packages by event type, from €180, pastry workshops, delivery and setup within 20 km. Allergens: information on request.",
    },
    commande: {
      title: "Order: quote, lead times and contact details",
      description:
        "Request your quote: 10 days minimum lead time, 4 weeks for a wedding. Reply within 48 business hours.",
    },
  },
  home: {
    hero: {
      eyebrow: "Culinary creator, made to order",
      title: "The table for big occasions.",
      description:
        "Designer cakes, sweet pieces and savory buffets, planned with you and made by hand for your birthdays, weddings and family celebrations.",
      image: {
        src: IMG.hero,
        alt: "Three-tier white cake decorated with strawberries, raspberries and blueberries",
      },
      caption: "Red berry tiered cake, for a wedding.",
      facts: [
        { value: "10 days", label: "minimum lead time" },
        { value: "4 weeks", label: "for a wedding" },
        { value: "20 km", label: "delivery radius around the workshop" },
      ],
    },
    manifesto: {
      eyebrow: "The manifesto",
      title:
        "We cook for the table, not for the display case: few ingredients, precision, and gestures you can see.",
      description:
        "Every order is designed with you, from the first sketch to the tasting, then made by hand in our workshop. Clean flavors, careful finishes, desserts you eat down to the last slice.",
    },
    universes: {
      eyebrow: "Three worlds",
      title: "From the centerpiece to the last bite.",
      items: [
        {
          title: "Designer cakes",
          text: "Entremets, layer cakes and tiered cakes designed to order: flavors, height, decoration and message.",
          link: "See the creations",
          image: {
            src: IMG.glaze,
            alt: "Entremets with an orange glaze, decorated with strawberries and chocolate",
          },
        },
        {
          title: "Sweet pieces",
          text: "Tartlets, macarons, verrines and individual cakes, for a dessert buffet or to go with a cake.",
          link: "See the sweet pieces",
          image: {
            src: IMG.tartlets,
            alt: "Fruit tartlets with edible flowers, seen from above",
          },
        },
        {
          title: "Savory buffet",
          text: "Platters, bites and large sharing pieces, set up on site for your guests.",
          link: "See the packages",
          image: {
            src: IMG.buffet,
            alt: "Buffet of hot dishes in gold trays, surrounded by white flowers",
          },
        },
      ],
    },
    proof: {
      eyebrow: "Reviews",
      title: "What people who ordered have to say.",
      description: "Birthdays, weddings, family meals and corporate events.",
      label: "Customer reviews",
      items: [
        {
          quote:
            "The cake looked as good as it tasted. Our guests photographed the table before touching it.",
          name: "Claire M.",
          detail: "40th birthday",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
        {
          quote:
            "A light tiered cake, nothing like the overly sweet classics. The whole family loved it.",
          name: "Hugo T.",
          detail: "Wedding",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
        {
          quote:
            "Flawless buffet, set up in twenty minutes. My only regret: I should have ordered more savory pieces.",
          name: "Marc D.",
          detail: "Corporate event",
          rating: 4,
          ratingLabel: "Rated 4 out of 5",
        },
        {
          quote:
            "The recipe was adapted to my daughter’s allergy without losing any of the look. A real relief.",
          name: "Ines B.",
          detail: "Family celebration",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
        {
          quote:
            "Quick replies, a clear quote, a tasting before the big day: everything was straightforward.",
          name: "Laure P.",
          detail: "Wedding",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
        {
          quote:
            "The cake decorating workshop was perfect for my sister’s birthday. Everyone left with their own creation.",
          name: "Yanis K.",
          detail: "Workshop",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
      ],
    },
    pause: {
      image: {
        src: IMG.table,
        alt: "Long set table with stemmed glasses and colorful bouquets in the evening light",
      },
      quote: "A good dessert is the one people still talk about the next day.",
      author: "Your business, culinary creator",
    },
    steps: {
      eyebrow: "How to order",
      title: "Four steps, no surprises.",
      items: [
        {
          title: "You write to us",
          text: "Date, number of guests, wishes and allergies: a few lines are enough.",
        },
        {
          title: "We design it together",
          text: "You receive a detailed quote with a proposal for flavors and decoration within 48 business hours.",
        },
        {
          title: "We make it",
          text: "The order is confirmed with a deposit, then prepared by hand. A tasting is available for weddings.",
        },
        {
          title: "Pickup or delivery",
          text: "Pick up at the workshop, or we deliver and set up within 20 km.",
        },
      ],
    },
    closing: {
      title: "Your next celebration deserves its centerpiece.",
      text: "Tell us the date, the number of guests and what you have in mind. We will come back to you with a detailed quote.",
    },
  },
  creations: {
    hero: {
      eyebrow: "Creations",
      title: "Pieces made to be looked at, then shared.",
      description:
        "Every cake is unique, designed for the occasion. Here are six recent creations, from the most understated to the most festive.",
    },
    gallery: {
      label: "Recent creations",
      items: [
        {
          title: "Citrus entremets",
          meta: "Birthday",
          image: {
            src: IMG.glaze,
            alt: "Entremets with a shiny orange glaze, decorated with strawberries and chocolate crisps",
          },
        },
        {
          title: "Red berry tiered cake",
          meta: "Wedding",
          image: {
            src: IMG.hero,
            alt: "Three-tier white cake decorated with red berries",
          },
        },
        {
          title: "Hazelnut chocolate drip",
          meta: "Family celebration",
          image: {
            src: IMG.drip,
            alt: "Chocolate cake covered in dripping ganache and topped with rosettes",
          },
        },
        {
          title: "Multicolor layer cake",
          meta: "Birthday",
          image: {
            src: IMG.layer,
            alt: "Colorful layered cake scattered with sugar confetti, on a blue stand",
          },
        },
        {
          title: "Pink cake and cone",
          meta: "Kids’ party",
          image: {
            src: IMG.pink,
            alt: "Pink drip cake topped with an ice cream cone",
          },
        },
        {
          title: "Chocolate mousse cake",
          meta: "Corporate event",
          image: {
            src: IMG.mousse,
            alt: "Chocolate mousse cake decorated with crunchy pearls",
          },
        },
      ],
    },
    grid: {
      eyebrow: "Sweet and savory pieces",
      title: "By the bite, by the slice, by the table.",
      description:
        "Small pieces go with the big cakes or make up a full buffet.",
      items: [
        {
          caption: "Seasonal fruit tartlets",
          image: {
            src: IMG.tartlets,
            alt: "Tartlets filled with fresh fruit and edible flowers",
          },
        },
        {
          caption: "Macarons, flavors of the moment",
          image: {
            src: IMG.macarons,
            alt: "Bowl of macarons in several flavors",
          },
        },
        {
          caption: "Platter of individual pieces",
          image: {
            src: IMG.petitFours,
            alt: "Tiered stand filled with small individual cakes",
          },
        },
        {
          caption: "Skewers and grilled dishes from the buffet",
          image: {
            src: IMG.skewers,
            alt: "Platter of grilled skewers and roasted vegetables, with sauces",
          },
        },
        {
          caption: "Savory buffet table",
          image: {
            src: IMG.spread,
            alt: "Large wooden table covered with sharing dishes",
          },
        },
        {
          caption: "Strawberry and vanilla verrines",
          image: {
            src: IMG.verrines,
            alt: "Glasses of vanilla cream with fresh strawberries",
          },
        },
      ],
    },
    seasons: {
      eyebrow: "Seasonal flavors",
      title: "What we are cooking right now.",
      description:
        "The menu follows the best produce of the moment. Tell us what you like and we will build around it.",
      items: [
        {
          season: "Spring",
          flavors: "Strawberry, rhubarb, vanilla, lime",
          text: "Fresh, tangy desserts for the first meals outdoors.",
        },
        {
          season: "Summer",
          flavors: "Apricot, peach, raspberry, basil",
          text: "Ripe fruit, little sugar, light textures.",
        },
        {
          season: "Autumn",
          flavors: "Pear, hazelnut, chestnut, cocoa",
          text: "Round, woody flavors for family meals.",
        },
        {
          season: "Winter",
          flavors: "Citrus, pistachio, dark chocolate, soft spices",
          text: "Intense, luminous cakes for the end-of-year celebrations.",
        },
      ],
    },
    closing: {
      title: "Got an idea? Send it our way.",
      text: "A photo, a color, a memory: we start from what you have in mind to design your cake.",
    },
  },
  evenements: {
    hero: {
      eyebrow: "Events",
      title: "A package for every big occasion.",
      description:
        "Clear packages to get you started, always adjusted to your venue, your budget and your guests.",
    },
    formulas: {
      eyebrow: "Packages",
      title: "Four starting points.",
      description:
        "Indicative prices, depending on the number of guests, the decoration and the season. Every order receives a detailed quote.",
      guestsLabel: "Guests",
      includesLabel: "What is included",
      fromLabel: "From",
      items: [
        {
          icon: "cake-slice",
          name: "Birthday",
          guests: "10 to 30 guests",
          includes: [
            "One custom designer cake",
            "Two assorted sweet pieces",
            "Candles and table decoration",
            "Pickup at the workshop",
          ],
          from: "€180",
        },
        {
          icon: "heart",
          name: "Wedding",
          guests: "50 to 150 guests",
          includes: [
            "Tiered cake or designer cakes",
            "Sweet buffet of three pieces",
            "Tasting before you order",
            "Delivery and setup on site",
          ],
          from: "€650",
        },
        {
          icon: "users",
          name: "Family celebration",
          guests: "15 to 60 guests",
          includes: [
            "Savory buffet of six pieces",
            "Platter of sweet pieces",
            "One centerpiece cake",
            "Delivery within 20 km",
          ],
          from: "€320",
        },
        {
          icon: "briefcase",
          name: "Corporate event",
          guests: "20 to 200 guests",
          includes: [
            "Savory and sweet buffet",
            "Presentation on platters",
            "Delivery to the event venue",
            "Invoice in the company’s name",
          ],
          from: "€420",
        },
      ],
    },
    workshops: {
      eyebrow: "Workshops",
      title: "Roll up your sleeves, together.",
      description:
        "Our workshops take place at the workshop or at your place, for a birthday, a team or a time with friends. Equipment is provided and everyone leaves with their own creation.",
      image: {
        src: IMG.macarons,
        alt: "Macarons in several colors, ready to be filled during a workshop",
      },
      items: [
        {
          title: "Cake decorating workshop",
          text: "2.5 hours, up to 8 people. Assembling, icing and decorating a cake to take home.",
          price: "From €65 per person",
        },
        {
          title: "Sweet pieces workshop",
          text: "2 hours, up to 10 people. Tartlets, macarons or verrines, your choice.",
          price: "From €55 per person",
        },
        {
          title: "Team workshop",
          text: "Tailor-made, from 10 to 30 people, at your offices or at the workshop.",
          price: "On quote",
        },
      ],
    },
    logistics: {
      eyebrow: "On site",
      title: "Delivery, setup, allergens.",
      items: [
        {
          icon: "truck",
          title: "Delivery",
          text: "Within 20 km of the workshop, with a fee depending on the distance. Beyond that, on quote.",
        },
        {
          icon: "utensils-crossed",
          title: "Setup",
          text: "For buffets and tiered cakes, we set everything up before your guests arrive.",
        },
        {
          icon: "wheat",
          title: "Allergens",
          text: "Information on request for every piece. Mention your allergies when you order: the workshop handles gluten, tree nuts, milk and eggs.",
        },
      ],
    },
    closing: {
      title: "Tell us about your event.",
      text: "Venue, date, number of guests: we build the package that suits you.",
    },
  },
  commande: {
    hero: {
      eyebrow: "Order",
      title: "Let’s talk about your next celebration.",
      description:
        "Fill in the request below. We reply with a detailed quote within 48 business hours.",
    },
    delays: {
      eyebrow: "Lead times",
      title: "Plan a little ahead.",
      note: "A closer date? Give us a call: depending on the workshop schedule, it is sometimes possible.",
      items: [
        {
          value: "10 days",
          label: "Cakes and sweet pieces",
          text: "Minimum lead time for a birthday or a family celebration.",
        },
        {
          value: "4 weeks",
          label: "Weddings",
          text: "To reserve the date and prepare the tasting and the decoration.",
        },
        {
          value: "48 h",
          label: "Reply to your request",
          text: "Business days, by email or by phone.",
        },
      ],
    },
    form: {
      title: "Your request",
      intro:
        "A few lines are enough. Fields marked with an asterisk are required.",
      submit: "Send the request",
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        eventType: "Event type",
        eventTypePlaceholder: "Choose a type",
        eventTypes: [
          { value: "anniversaire", label: "Birthday" },
          { value: "mariage", label: "Wedding" },
          { value: "fete-de-famille", label: "Family celebration" },
          { value: "entreprise", label: "Corporate event" },
          { value: "atelier", label: "Workshop" },
          { value: "autre", label: "Other" },
        ],
        date: "Event date",
        guests: "Number of guests",
        guestsPlaceholder: "For example 40",
        wishes: "Your wishes and any allergies we should know about",
      },
    },
    details: {
      title: "Contact details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Workshop",
      hoursLabel: "Hours",
      pickup: "Pickup at the workshop by appointment, delivery within 20 km.",
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type CreateurCulinairePage = keyof CreateurCulinaireCopy["meta"];

export const createurCulinaire: TemplateDefinition<
  "createur-culinaire",
  CreateurCulinaireCopy
> = {
  slug: "createur-culinaire",
  /**
   * Éditorial haut de gamme, façon magazine culinaire : fond blanc cassé
   * chaud, encre quasi noire chaude, accent rouge profond (boutons, filets,
   * numéros) et fond inverse quasi noir. Instrument Serif en affichage, Inter
   * en texte, rayons nuls, ombres quasi absentes.
   */
  theme: {
    surface: "oklch(0.972 0.012 85)",
    raised: "oklch(0.99 0.006 85)",
    ink: "oklch(0.2 0.012 55)",
    inkMuted: "color-mix(in oklch, var(--tpl-ink) 72%, var(--tpl-surface))",
    line: "oklch(0.86 0.015 80)",
    accent: "oklch(0.45 0.15 28)",
    accentInk: "oklch(0.98 0.01 85)",
    inverse: "oklch(0.17 0.012 55)",
    inverseInk: "oklch(0.95 0.015 85)",
    radius: "0px",
    fontDisplay:
      "var(--font-display-serif), ui-serif, Georgia, 'Times New Roman', serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    shadowSm: "none",
    shadowLg:
      "0 32px 64px -40px color-mix(in oklch, var(--tpl-ink) 32%, transparent)",
  },
  paths: {
    home: "/createur-culinaire",
    creations: "/createur-culinaire/creations",
    evenements: "/createur-culinaire/evenements",
    commande: "/createur-culinaire/commande",
  },
  copy: { fr, en },
};
