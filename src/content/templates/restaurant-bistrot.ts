import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « restaurant-bistrot » (bistrot fictif « Le Sillon »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/restaurant-bistrot/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée
 * `RestaurantBistrotCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Thème : lecture « claire » de la palette (crème en `surface`, brun presque
 * noir en `inverse`). Les sections sombres sont donc des sections `inverse`, le
 * héros sombre (`TemplateHeroMedia`) lit `inverse` pour son voile, et les
 * sections crème sont les sections par défaut.
 *
 * Cohérence des données (FR et EN) : service du mardi au samedi, midi de
 * 12 h à 14 h 30 et soir de 19 h à 22 h 30 (fermé dimanche et lundi) ; formule
 * du midi 24 €, menu du soir 38 € ; tables de 2 à 8 ; groupes de 9 à 20.
 */

const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;

const IMG = {
  hero: unsplash("1552960226-639240203497", 2400),
  room: unsplash("1650490632010-e18cbb694dd1"),
  plate: unsplash("1621327017866-6fb07e6c96ea"),
  glasses: unsplash("1675965218658-bd6f516742ac"),
  candle: unsplash("1666600638841-4fe4a01ae260"),
  chicken: unsplash("1606728035253-49e8a23146de"),
  table: unsplash("1633195000232-ca6e3cbcfd41"),
  dessert: unsplash("1681284579912-3de811be66e8"),
  bread: unsplash("1480869457432-3b1bc0910091"),
  privateRoom: unsplash("1777915392856-e1e5c46de326"),
} as const;

/** Horaires, une seule fois par langue (espaces insécables). */
const FR_NOON = "12 h – 14 h 30";
const FR_EVENING = "19 h – 22 h 30";
const EN_NOON = "12 p.m.–2:30 p.m.";
const EN_EVENING = "7 p.m.–10:30 p.m.";

const fr = {
  brand: {
    name: "Le Sillon",
    tagline: "Bistrot de quartier, cave vivante et cuisine de saison",
  },
  nav: {
    home: "Accueil",
    menu: "Menu",
    reservation: "Réservation",
    galerie: "Galerie",
    histoire: "Histoire",
    privatisation: "Privatisation",
    contact: "Contact",
  },
  cta: {
    book: "Réserver",
    bookTable: "Réserver une table",
    seeMenu: "Découvrir la carte",
    seeFullMenu: "Voir toute la carte",
    seeStory: "Notre histoire",
    seePrivatisation: "Voir la privatisation",
    contactRestaurant: "Écrire au restaurant",
    call: "Appeler",
  },
  phone: { label: "01 99 00 00 21", href: "tel:+33199000021" },
  common: {
    address: "12 rue de l’Exemple, 00000 Votre ville",
    email: "reservation@lesillon.example",
    hoursLabel: "Horaires",
    hours: [
      { day: "Mardi – samedi, midi", time: FR_NOON },
      { day: "Mardi – samedi, soir", time: FR_EVENING },
      { day: "Dimanche et lundi", time: "Fermé" },
    ],
    quickActions: "Réserver ou appeler",
  },
  footer: {
    text: "Cuisine du marché, vins vivants, comptoir ouvert. Du mardi au samedi, midi et soir.",
    contactLabel: "Coordonnées",
  },
  meta: {
    home: {
      title: "Le Sillon - Restaurant Bistrot",
      description:
        "Bistrot de quartier : cuisine du marché, cave vivante et comptoir ouvert. Service midi et soir du mardi au samedi, tables de 2 à 8, réservation en ligne.",
    },
    menu: {
      title: "Menu - Le Sillon",
      description:
        "La carte du Sillon : poireaux vinaigrette fumée, truite crue, volaille rôtie, gnocchi, crème caramel. Formule du midi 24 €, menu du soir 38 €.",
    },
    reservation: {
      title: "Réservation - Le Sillon",
      description:
        "Réservez une table pour le déjeuner (12 h à 14 h 30) ou le dîner (19 h à 22 h 30). Du mardi au samedi, tables de 2 à 8, groupes sur demande.",
    },
    galerie: {
      title: "Galerie - Le Sillon",
      description:
        "La salle à la bougie, la cave et les assiettes du Sillon en images : volaille rôtie, huîtres gratinées, desserts maison.",
    },
    histoire: {
      title: "Histoire - Le Sillon",
      description:
        "Le Sillon est un bistrot de quartier : une salle chaude, une carte courte qui suit le marché et une cave que l’on goûte au verre.",
    },
    privatisation: {
      title: "Privatisation - Le Sillon",
      description:
        "Dîner d’équipe, repas de presse ou anniversaire : privatisez le Sillon pour 9 à 20 convives, menu en trois temps dès 36 € par personne.",
    },
    contact: {
      title: "Contact - Le Sillon",
      description:
        "12 rue de l’Exemple, 00000 Votre ville. Ouvert du mardi au samedi, de 12 h à 14 h 30 et de 19 h à 22 h 30. Téléphone : 01 99 00 00 21.",
    },
  },
  home: {
    hero: {
      eyebrow: "Bistrot de quartier",
      title: "La cuisine du marché, servie à la bougie.",
      description:
        "Une carte courte qui change avec les arrivages, une cave que l’on goûte au verre. Midi et soir, du mardi au samedi.",
      image: {
        src: IMG.hero,
        alt: "Salle de restaurant tamisée aux murs cuivrés, tables en bois sombre dressées avec tasses et verres, lampes murales allumées",
      },
      facts: [
        { label: "Midi", value: FR_NOON },
        { label: "Soir", value: FR_EVENING },
        { label: "Menu du soir", value: "38 €" },
      ],
    },
    carte: {
      eyebrow: "La carte",
      title: "Une carte courte, qui suit le marché",
      description:
        "Quatre entrées, trois plats, trois desserts, réécrits chaque semaine selon les arrivages. On partage les entrées et on se dispute la crème caramel.",
      group: {
        title: "En ce moment",
        items: [
          {
            name: "Truite crue, raifort et pomme verte",
            detail: "Huile de noisette, pain grillé",
            price: "12 €",
          },
          {
            name: "Volaille rôtie au thym",
            detail: "Jus court, purée maison",
            price: "24 €",
          },
          {
            name: "Gnocchi, champignons et crème",
            detail: "Persil, parmesan",
            price: "19 €",
          },
          {
            name: "Dôme caramel, crème vanille",
            detail: "Sablé breton",
            price: "10 €",
          },
        ],
      },
      formulas: "Formule du midi à 24 €, menu du soir en trois temps à 38 €.",
      images: [
        {
          src: IMG.chicken,
          alt: "Volaille rôtie entière à la peau dorée, parsemée de thym, posée sur un plat blanc",
        },
        {
          src: IMG.dessert,
          alt: "Dessert dressé sur une assiette grise : dôme de caramel sur crème vanille et sablé, éclats de noix de coco",
        },
        {
          src: IMG.plate,
          alt: "Vol-au-vent de crevettes à la crème et aux jeunes pousses, servi dans une assiette creuse blanche sur une table en bois",
        },
      ],
    },
    salle: {
      title: "Une salle faite pour les soirs qui s’étirent",
      description:
        "Bois sombre, une bougie sur chaque table, un comptoir où l’on s’installe sans réserver. On y vient à deux, à huit, ou seul avec un verre et le journal.",
      facts: [
        { label: "En salle", value: "Tables de 2 à 8" },
        { label: "Au comptoir", value: "Douze places, sans réservation" },
        {
          label: "À la cave",
          value: "Une quarantaine de vins, la moitié au verre",
        },
      ],
      image: {
        src: IMG.room,
        alt: "Table ronde dressée pour quatre, chaises en corde tressée et grande suspension en rotin allumée, sol à motifs géométriques",
      },
    },
    avis: {
      title: "Ceux qui reviennent en parlent mieux que nous",
      items: [
        {
          quote:
            "On est venus pour la volaille rôtie, on est restés pour la crème caramel. Un service rapide, jamais pressé.",
          name: "Camille R.",
          detail: "Dîner du vendredi, à quatre",
        },
        {
          quote:
            "Le comptoir à 19 h, un verre de blanc, les huîtres gratinées : c’est devenu ma cantine du jeudi.",
          name: "Julien M.",
          detail: "Client du comptoir",
        },
      ],
    },
    venir: {
      title: "Venir au Sillon",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      accessLabel: "Accès",
      access:
        "Salle de plain-pied, chaises hautes sur demande. Les chiens sages sont bienvenus au comptoir.",
      panel: {
        title: "Réservez votre table",
        text: "Par téléphone ou en ligne, jusqu’à 17 h pour le soir même. Au-delà de huit personnes, nous préférons que vous nous appeliez.",
      },
    },
  },
  menu: {
    eyebrow: "La carte",
    title: "Cuisine du marché, écrite chaque semaine",
    description:
      "Prix nets, service compris. Les plats changent avec les arrivages : l’ardoise du jour est à demander en salle.",
    groups: [
      {
        title: "Entrées",
        items: [
          {
            name: "Poireaux vinaigrette fumée",
            detail: "Noisettes grillées, jaune d’œuf confit",
            price: "9 €",
            note: "Végétarien",
          },
          {
            name: "Truite crue, raifort et pomme verte",
            detail: "Huile de noisette, pain grillé",
            price: "12 €",
          },
          {
            name: "Huîtres gratinées au beurre d’herbes",
            detail: "Les six, chapelure dorée",
            price: "14 €",
          },
          {
            name: "Vol-au-vent aux crevettes",
            detail: "Crème, jeunes pousses",
            price: "13 €",
          },
        ],
      },
      {
        title: "Plats",
        items: [
          {
            name: "Volaille rôtie au thym",
            detail: "Jus court, purée maison",
            price: "24 €",
          },
          {
            name: "Gnocchi, champignons et crème",
            detail: "Persil, parmesan",
            price: "19 €",
            note: "Végétarien",
          },
          {
            name: "Poisson du jour",
            detail: "Selon l’arrivage, légumes de saison",
            price: "26 €",
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Crème caramel",
            detail: "Cuite au four, caramel brun",
            price: "8 €",
          },
          { name: "Mousse au chocolat", detail: "Fleur de sel", price: "8 €" },
          {
            name: "Dôme caramel, crème vanille",
            detail: "Sablé breton",
            price: "10 €",
          },
        ],
      },
    ],
    notes:
      "Allergènes\u00a0: la liste complète est donnée en salle, sur demande. Supplément de 4 € pour le poisson du jour dans le menu du soir.",
    formulas: {
      title: "Les formules",
      items: [
        {
          name: "Formule du midi",
          detail: "Plat et dessert, ou entrée et plat, au choix sur la carte",
          price: "24 €",
        },
        {
          name: "Menu du soir",
          detail: "Une entrée, un plat et un dessert à choisir sur la carte",
          price: "38 €",
        },
      ],
    },
    cave: {
      title: "La cave",
      description:
        "Une quarantaine de vins de domaines indépendants, du vin nature aux classiques de table, dont la moitié au verre.",
      groups: [
        {
          title: "Au verre",
          items: [
            { name: "Blanc ou rouge du comptoir", price: "6 €" },
            { name: "Orange ou pétillant", price: "9 €" },
            { name: "Cidre brut, bière locale", price: "5 €" },
          ],
        },
        {
          title: "En bouteille",
          items: [
            { name: "Vins du comptoir", price: "dès 28 €" },
            { name: "Vins de la cave", price: "dès 42 €" },
            { name: "Magnum à partager", price: "dès 70 €" },
          ],
        },
      ],
      image: {
        src: IMG.glasses,
        alt: "Verres à vin et serviette bleu nuit sur une table en bois, étagères de la salle floues à l’arrière-plan",
      },
    },
    image: {
      src: IMG.table,
      alt: "Table en bois vue du dessus, garnie de plats : huîtres gratinées sur glace pilée, pâtes aux fruits de mer, risotto, gratin et pain grillé",
    },
  },
  reservation: {
    eyebrow: "Réservation",
    title: "Réservez votre table",
    description:
      "Dites-nous quand vous venez et à combien : nous confirmons chaque demande dans la journée. Pour le soir même, le plus simple est de nous appeler.",
    form: {
      title: "Votre demande",
      submit: "Envoyer la demande",
      date: "Date",
      service: "Service",
      services: [
        { value: "midi", label: "Midi, de 12\u00a0h à 14\u00a0h\u00a030" },
        { value: "soir", label: "Soir, de 19\u00a0h à 22\u00a0h\u00a030" },
      ],
      guests: "Nombre de couverts",
      guestOptions: [
        { value: "2", label: "2 personnes" },
        { value: "3", label: "3 personnes" },
        { value: "4", label: "4 personnes" },
        { value: "5", label: "5 personnes" },
        { value: "6", label: "6 personnes" },
        { value: "7", label: "7 personnes" },
        { value: "8", label: "8 personnes" },
      ],
      choose: "Choisir",
      name: "Nom",
      phone: "Téléphone",
      email: "E-mail",
      note: "Allergies, occasion, demande particulière",
    },
    aside: {
      title: "Bon à savoir",
      items: [
        "Votre table est gardée quinze minutes après l’heure prévue.",
        "Au-delà de huit personnes, appelez-nous : nous composons un menu pour la table.",
        "Allergies et régimes : dites-le-nous à la réservation, la cuisine s’adapte.",
        "Le comptoir est ouvert sans réservation, dans la limite des douze places.",
      ],
      groupLink: "Un groupe, un anniversaire\u00a0?",
      image: {
        src: IMG.candle,
        alt: "Table ronde en bois éclairée par une bougie dans un verre rouge, chaises bistrot et salle floue au fond",
      },
    },
  },
  galerie: {
    eyebrow: "Galerie",
    title: "La salle, la lumière, les assiettes",
    description:
      "Quelques images d’un service ordinaire, de la première table à la dernière.",
    images: [
      {
        src: IMG.hero,
        alt: "Salle de restaurant tamisée aux murs cuivrés, tables en bois sombre dressées avec tasses et verres, lampes murales allumées",
      },
      {
        src: IMG.table,
        alt: "Table en bois vue du dessus, garnie de plats : huîtres gratinées sur glace pilée, pâtes aux fruits de mer, risotto, gratin et pain grillé",
      },
      {
        src: IMG.room,
        alt: "Table ronde dressée pour quatre, chaises en corde tressée et grande suspension en rotin allumée, sol à motifs géométriques",
      },
      {
        src: IMG.dessert,
        alt: "Dessert dressé sur une assiette grise : dôme de caramel sur crème vanille et sablé, éclats de noix de coco",
      },
      {
        src: IMG.candle,
        alt: "Table ronde en bois éclairée par une bougie dans un verre rouge, chaises bistrot et salle floue au fond",
      },
      {
        src: IMG.plate,
        alt: "Vol-au-vent de crevettes à la crème et aux jeunes pousses, servi dans une assiette creuse blanche sur une table en bois",
      },
      {
        src: IMG.chicken,
        alt: "Volaille rôtie entière à la peau dorée, parsemée de thym, posée sur un plat blanc",
      },
      {
        src: IMG.glasses,
        alt: "Verres à vin et serviette bleu nuit sur une table en bois, étagères de la salle floues à l’arrière-plan",
      },
    ],
  },
  histoire: {
    eyebrow: "Notre histoire",
    title: "Un bistrot de quartier, à la bougie et au marché",
    paragraphs: [
      "Le Sillon est né d’une idée simple : un endroit où l’on mange bien sans y penser, à deux pas de chez soi. Une salle chaude, une carte courte, une cave que l’on goûte au verre.",
      "En cuisine, tout part du marché : ce qui est beau le matin finit sur l’ardoise à midi. Les sauces sont longues, les assiettes simples, les portions faites pour se resservir.",
      "En salle, on prend le temps de conseiller un vin, de rapporter du pain et de laisser la table s’éterniser.",
    ],
    image: {
      src: IMG.bread,
      alt: "Pain de campagne coupé en deux, mie alvéolée et croûte dorée, posé sur une planche en bois sur une table, étagères floues au fond",
    },
    values: {
      title: "Ce qui compte chez nous",
      items: [
        {
          title: "Le marché",
          text: "Une carte réécrite chaque semaine, des producteurs que l’on connaît par leur prénom et pas de plat qui n’ait sa saison.",
        },
        {
          title: "La cave",
          text: "Des vins d’indépendants, choisis pour leur franchise. La moitié se boit au verre, pour goûter sans s’engager.",
        },
        {
          title: "L’accueil",
          text: "Une table gardée, un enfant qui a sa chaise haute, un client seul qui trouve sa place au comptoir.",
        },
      ],
    },
    closing: {
      title: "Venez voir si la table vous plaît",
      text: "Du mardi au samedi, midi et soir.",
    },
  },
  privatisation: {
    eyebrow: "Privatisation",
    title: "Privatiser le Sillon",
    description:
      "Pour un dîner d’équipe, un anniversaire ou un repas de presse : la salle, la cuisine et une équipe rien que pour vous.",
    formats: {
      capacityLabel: "Convives",
      priceLabel: "Menu en trois temps",
      items: [
        {
          title: "Dîner d’équipe",
          capacity: "12 à 20",
          price: "dès 42 € par personne",
          text: "Menu en trois temps, accord mets et vins en option, salle à vous toute la soirée.",
        },
        {
          title: "Repas de presse ou lancement",
          capacity: "12 à 20",
          price: "dès 36 € par personne",
          text: "Déjeuner ou cocktail dînatoire, service continu et espace pour présenter.",
        },
        {
          title: "Anniversaire intime",
          capacity: "9 à 14",
          price: "dès 40 € par personne",
          text: "Un menu court, une table dressée pour vous et un gâteau sur demande.",
        },
      ],
    },
    notes: {
      title: "Comment ça se passe",
      items: [
        "Le midi du mardi au samedi, le soir sur demande.",
        "Boissons en supplément, devis sous quarante-huit heures.",
        "Menu et placement arrêtés ensemble, une semaine avant.",
      ],
    },
    image: {
      src: IMG.privateRoom,
      alt: "Longue table en bois dressée pour un dîner de groupe, chaises en cuir ocre, tasses à café sur soucoupes, statuette de cerf dorée au centre de la table, grand luminaire en papier allumé et murs bleu nuit",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Venir, appeler, écrire",
    description:
      "Pour une table, une question ou un groupe : nous répondons dans la journée, et au téléphone pendant le service.",
    addressLabel: "Adresse",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    accessLabel: "Accès",
    access:
      "Salle de plain-pied, chaises hautes sur demande. Les chiens sages sont bienvenus au comptoir.",
    form: {
      title: "Écrire au restaurant",
      submit: "Envoyer le message",
      name: "Nom",
      email: "E-mail",
      subject: "Objet",
      choose: "Choisir",
      subjects: [
        { value: "table", label: "Une réservation" },
        { value: "groupe", label: "Un groupe ou une privatisation" },
        { value: "autre", label: "Autre question" },
      ],
      message: "Message",
    },
  },
} as const;

export type RestaurantBistrotCopy = WidenLiterals<typeof fr>;
export type RestaurantBistrotIconKey = TemplateIconKey<RestaurantBistrotCopy>;

const en: RestaurantBistrotCopy = {
  brand: {
    name: "Your business",
    tagline: "Neighborhood bistro, lively wine cellar and seasonal cooking",
  },
  nav: {
    home: "Home",
    menu: "Menu",
    reservation: "Reservations",
    galerie: "Gallery",
    histoire: "Story",
    privatisation: "Private dining",
    contact: "Contact",
  },
  cta: {
    book: "Reserve",
    bookTable: "Reserve a table",
    seeMenu: "Discover the menu",
    seeFullMenu: "See the full menu",
    seeStory: "Our story",
    seePrivatisation: "See private dining",
    contactRestaurant: "Write to the restaurant",
    call: "Call",
  },
  phone: { label: "01 99 00 00 21", href: "tel:+33199000021" },
  common: {
    address: "12 Example Street, 00000 Your city",
    email: "contact@example.com",
    hoursLabel: "Hours",
    hours: [
      { day: "Tuesday–Saturday, lunch", time: EN_NOON },
      { day: "Tuesday–Saturday, dinner", time: EN_EVENING },
      { day: "Sunday and Monday", time: "Closed" },
    ],
    quickActions: "Reserve or call",
  },
  footer: {
    text: "Market cooking, lively wines, an open counter. Tuesday through Saturday, lunch and dinner.",
    contactLabel: "Contact details",
  },
  meta: {
    home: {
      title: "Your business - Bistro restaurant",
      description:
        "Neighborhood bistro: market cooking, a lively wine cellar and an open counter. Lunch and dinner Tuesday to Saturday, tables for 2 to 8, online reservations.",
    },
    menu: {
      title: "Menu - Your business",
      description:
        "Our menu: smoked leek vinaigrette, raw trout, roast chicken, gnocchi, crème caramel. Lunch set menu €24, dinner menu €38.",
    },
    reservation: {
      title: "Reservations - Your business",
      description:
        "Reserve a table for lunch (12 p.m. to 2:30 p.m.) or dinner (7 p.m. to 10:30 p.m.). Tuesday to Saturday, tables for 2 to 8, groups on request.",
    },
    galerie: {
      title: "Gallery - Your business",
      description:
        "The candlelit dining room, the cellar and our plates in pictures: roast chicken, baked oysters, homemade desserts.",
    },
    histoire: {
      title: "Story - Your business",
      description:
        "A neighborhood bistro: a warm dining room, a short menu that follows the market and a cellar you can taste by the glass.",
    },
    privatisation: {
      title: "Private dining - Your business",
      description:
        "Team dinners, press lunches or birthdays: book the whole restaurant for 9 to 20 guests, three-course menu from €36 per person.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "12 Example Street, 00000 Your city. Open Tuesday to Saturday, 12 p.m. to 2:30 p.m. and 7 p.m. to 10:30 p.m. Phone: 01 99 00 00 21.",
    },
  },
  home: {
    hero: {
      eyebrow: "Neighborhood bistro",
      title: "Market cooking, served by candlelight.",
      description:
        "A short menu that follows the catch and the harvest, a cellar you taste by the glass. Lunch and dinner, Tuesday through Saturday.",
      image: {
        src: IMG.hero,
        alt: "Dimly lit restaurant dining room with copper-toned walls, dark wooden tables set with cups and glasses, and glowing wall lamps",
      },
      facts: [
        { label: "Lunch", value: EN_NOON },
        { label: "Dinner", value: EN_EVENING },
        { label: "Dinner menu", value: "€38" },
      ],
    },
    carte: {
      eyebrow: "The menu",
      title: "A short menu that follows the market",
      description:
        "Four starters, three mains, three desserts, rewritten every week with what is in season. We share the starters and fight over the crème caramel.",
      group: {
        title: "Right now",
        items: [
          {
            name: "Raw trout, horseradish and green apple",
            detail: "Hazelnut oil, toasted bread",
            price: "€12",
          },
          {
            name: "Thyme roast chicken",
            detail: "Short jus, homemade mash",
            price: "€24",
          },
          {
            name: "Gnocchi, mushrooms and cream",
            detail: "Parsley, parmesan",
            price: "€19",
          },
          {
            name: "Caramel dome, vanilla cream",
            detail: "Breton shortbread",
            price: "€10",
          },
        ],
      },
      formulas: "Lunch set menu at €24, three-course dinner menu at €38.",
      images: [
        {
          src: IMG.chicken,
          alt: "Whole roast chicken with golden skin, sprinkled with thyme, on a white platter",
        },
        {
          src: IMG.dessert,
          alt: "Dessert plated on a gray plate: a caramel dome on vanilla cream and shortbread, with coconut flakes",
        },
        {
          src: IMG.plate,
          alt: "Shrimp vol-au-vent with cream sauce and micro-greens, served in a white shallow bowl on a wooden table",
        },
      ],
    },
    salle: {
      title: "A dining room made for evenings that stretch out",
      description:
        "Dark wood, a candle on every table, a counter where you can sit down without a reservation. Come as a couple, as a party of eight, or alone with a glass and the paper.",
      facts: [
        { label: "In the dining room", value: "Tables for 2 to 8" },
        { label: "At the counter", value: "Twelve seats, no reservation" },
        {
          label: "In the cellar",
          value: "About forty wines, half by the glass",
        },
      ],
      image: {
        src: IMG.room,
        alt: "Round table set for four with woven-rope chairs under a large lit rattan pendant lamp, over a geometric patterned floor",
      },
    },
    avis: {
      title: "The people who come back say it better than we do",
      items: [
        {
          quote:
            "We came for the roast chicken and stayed for the crème caramel. Quick service, never rushed.",
          name: "Camille R.",
          detail: "Friday dinner for four",
        },
        {
          quote:
            "The counter at 7 p.m., a glass of white, the baked oysters: it has become my Thursday canteen.",
          name: "Julien M.",
          detail: "Counter regular",
        },
      ],
    },
    venir: {
      title: "Visit us",
      addressLabel: "Address",
      phoneLabel: "Phone",
      accessLabel: "Getting in",
      access:
        "Step-free dining room, high chairs on request. Well-behaved dogs are welcome at the counter.",
      panel: {
        title: "Reserve your table",
        text: "By phone or online, until 5 p.m. for the same evening. For more than eight guests, we would rather you call us.",
      },
    },
  },
  menu: {
    eyebrow: "The menu",
    title: "Market cooking, rewritten every week",
    description:
      "Prices are final, service included. Dishes change with what arrives: ask for today’s chalkboard in the dining room.",
    groups: [
      {
        title: "Starters",
        items: [
          {
            name: "Smoked leek vinaigrette",
            detail: "Toasted hazelnuts, confit egg yolk",
            price: "€9",
            note: "Vegetarian",
          },
          {
            name: "Raw trout, horseradish and green apple",
            detail: "Hazelnut oil, toasted bread",
            price: "€12",
          },
          {
            name: "Baked oysters with herb butter",
            detail: "Six, golden breadcrumbs",
            price: "€14",
          },
          {
            name: "Shrimp vol-au-vent",
            detail: "Cream, micro-greens",
            price: "€13",
          },
        ],
      },
      {
        title: "Mains",
        items: [
          {
            name: "Thyme roast chicken",
            detail: "Short jus, homemade mash",
            price: "€24",
          },
          {
            name: "Gnocchi, mushrooms and cream",
            detail: "Parsley, parmesan",
            price: "€19",
            note: "Vegetarian",
          },
          {
            name: "Fish of the day",
            detail: "Depending on the catch, seasonal vegetables",
            price: "€26",
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Crème caramel", detail: "Baked, dark caramel", price: "€8" },
          { name: "Chocolate mousse", detail: "Sea salt", price: "€8" },
          {
            name: "Caramel dome, vanilla cream",
            detail: "Breton shortbread",
            price: "€10",
          },
        ],
      },
    ],
    notes:
      "Allergens: the full list is available in the dining room on request. The fish of the day carries a €4 supplement on the dinner menu.",
    formulas: {
      title: "Set menus",
      items: [
        {
          name: "Lunch set menu",
          detail: "Main and dessert, or starter and main, from the menu",
          price: "€24",
        },
        {
          name: "Dinner menu",
          detail: "A starter, a main and a dessert from the menu",
          price: "€38",
        },
      ],
    },
    cave: {
      title: "The cellar",
      description:
        "About forty wines from independent growers, from natural wines to table classics, half of them by the glass.",
      groups: [
        {
          title: "By the glass",
          items: [
            { name: "Counter white or red", price: "€6" },
            { name: "Orange or sparkling", price: "€9" },
            { name: "Dry cider, local beer", price: "€5" },
          ],
        },
        {
          title: "By the bottle",
          items: [
            { name: "Counter wines", price: "from €28" },
            { name: "Cellar wines", price: "from €42" },
            { name: "Magnum to share", price: "from €70" },
          ],
        },
      ],
      image: {
        src: IMG.glasses,
        alt: "Wine glasses and a navy napkin on a wooden table, with the room’s shelves blurred in the background",
      },
    },
    image: {
      src: IMG.table,
      alt: "Wooden table seen from above, covered with dishes: baked oysters on crushed ice, seafood pasta, risotto, a gratin and toasted bread",
    },
  },
  reservation: {
    eyebrow: "Reservations",
    title: "Reserve your table",
    description:
      "Tell us when you are coming and how many you are: we confirm every request within the day. For the same evening, calling is the simplest way.",
    form: {
      title: "Your request",
      submit: "Send the request",
      date: "Date",
      service: "Service",
      services: [
        { value: "midi", label: "Lunch, 12 p.m. to 2:30 p.m." },
        { value: "soir", label: "Dinner, 7 p.m. to 10:30 p.m." },
      ],
      guests: "Number of guests",
      guestOptions: [
        { value: "2", label: "2 guests" },
        { value: "3", label: "3 guests" },
        { value: "4", label: "4 guests" },
        { value: "5", label: "5 guests" },
        { value: "6", label: "6 guests" },
        { value: "7", label: "7 guests" },
        { value: "8", label: "8 guests" },
      ],
      choose: "Choose",
      name: "Name",
      phone: "Phone",
      email: "Email",
      note: "Allergies, occasion, special request",
    },
    aside: {
      title: "Good to know",
      items: [
        "We hold your table for fifteen minutes after the time you booked.",
        "For more than eight guests, call us: we put together a menu for the table.",
        "Allergies and diets: tell us when you book and the kitchen adapts.",
        "The counter is open without a reservation, up to its twelve seats.",
      ],
      groupLink: "A group, a birthday?",
      image: {
        src: IMG.candle,
        alt: "Round wooden table lit by a candle in a red glass, bistro chairs and a blurred dining room behind",
      },
    },
  },
  galerie: {
    eyebrow: "Gallery",
    title: "The room, the light, the plates",
    description:
      "A few pictures of an ordinary service, from the first table to the last.",
    images: [
      {
        src: IMG.hero,
        alt: "Dimly lit restaurant dining room with copper-toned walls, dark wooden tables set with cups and glasses, and glowing wall lamps",
      },
      {
        src: IMG.table,
        alt: "Wooden table seen from above, covered with dishes: baked oysters on crushed ice, seafood pasta, risotto, a gratin and toasted bread",
      },
      {
        src: IMG.room,
        alt: "Round table set for four with woven-rope chairs under a large lit rattan pendant lamp, over a geometric patterned floor",
      },
      {
        src: IMG.dessert,
        alt: "Dessert plated on a gray plate: a caramel dome on vanilla cream and shortbread, with coconut flakes",
      },
      {
        src: IMG.candle,
        alt: "Round wooden table lit by a candle in a red glass, bistro chairs and a blurred dining room behind",
      },
      {
        src: IMG.plate,
        alt: "Shrimp vol-au-vent with cream sauce and micro-greens, served in a white shallow bowl on a wooden table",
      },
      {
        src: IMG.chicken,
        alt: "Whole roast chicken with golden skin, sprinkled with thyme, on a white platter",
      },
      {
        src: IMG.glasses,
        alt: "Wine glasses and a navy napkin on a wooden table, with the room’s shelves blurred in the background",
      },
    ],
  },
  histoire: {
    eyebrow: "Our story",
    title: "A neighborhood bistro, by candlelight and by the market",
    paragraphs: [
      "The restaurant started from a simple idea: a place where you eat well without thinking about it, a few steps from home. A warm dining room, a short menu, a cellar you taste by the glass.",
      "In the kitchen, everything starts at the market: what looks beautiful in the morning ends up on the chalkboard at lunch. The sauces are slow, the plates simple, the portions made for seconds.",
      "In the dining room, we take the time to recommend a wine, bring more bread and let the table linger.",
    ],
    image: {
      src: IMG.bread,
      alt: "Country loaf cut in half, open crumb and golden crust, on a wooden board on a table, with blurred shelves behind",
    },
    values: {
      title: "What matters to us",
      items: [
        {
          title: "The market",
          text: "A menu rewritten every week, producers we know by their first names and no dish out of season.",
        },
        {
          title: "The cellar",
          text: "Wines from independent growers, chosen for their honesty. Half are poured by the glass, so you can taste without committing.",
        },
        {
          title: "The welcome",
          text: "A table held for you, a high chair for the little one, a place at the counter for the diner on their own.",
        },
      ],
    },
    closing: {
      title: "Come and see if the table suits you",
      text: "Tuesday through Saturday, lunch and dinner.",
    },
  },
  privatisation: {
    eyebrow: "Private dining",
    title: "Book the whole restaurant",
    description:
      "For a team dinner, a birthday or a press lunch: the dining room, the kitchen and a team just for you.",
    formats: {
      capacityLabel: "Guests",
      priceLabel: "Three-course menu",
      items: [
        {
          title: "Team dinner",
          capacity: "12 to 20",
          price: "from €42 per person",
          text: "Three-course menu, optional wine pairing, the dining room yours all evening.",
        },
        {
          title: "Press lunch or launch",
          capacity: "12 to 20",
          price: "from €36 per person",
          text: "A lunch or a standing dinner, continuous service and room to present.",
        },
        {
          title: "Intimate birthday",
          capacity: "9 to 14",
          price: "from €40 per person",
          text: "A short menu, a table set for you and a cake on request.",
        },
      ],
    },
    notes: {
      title: "How it works",
      items: [
        "At lunch Tuesday through Saturday, in the evening on request.",
        "Drinks are extra, and we send a quote within forty-eight hours.",
        "We settle the menu and seating together, a week ahead.",
      ],
    },
    image: {
      src: IMG.privateRoom,
      alt: "Long wooden table set for a group dinner, tan leather chairs, coffee cups on saucers, a golden stag statuette in the middle of the table, a large lit paper chandelier and midnight-blue walls",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Come by, call or write",
    description:
      "For a table, a question or a group: we answer within the day, and by phone during service.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    accessLabel: "Getting in",
    access:
      "Step-free dining room, high chairs on request. Well-behaved dogs are welcome at the counter.",
    form: {
      title: "Write to the restaurant",
      submit: "Send the message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      choose: "Choose",
      subjects: [
        { value: "table", label: "A reservation" },
        { value: "groupe", label: "A group or private dining" },
        { value: "autre", label: "Another question" },
      ],
      message: "Message",
    },
  },
};

export const restaurantBistrot: TemplateDefinition<
  "restaurant-bistrot",
  RestaurantBistrotCopy
> = {
  slug: "restaurant-bistrot",
  theme: {
    ink: "oklch(0.206 0.013 18)",
    surface: "oklch(0.942 0.023 76)",
    raised: "oklch(0.974 0.016 78)",
    tint: "oklch(0.905 0.03 72)",
    accent: "oklch(0.189 0.01 29)",
    accentInk: "oklch(0.942 0.023 76)",
    inverse: "oklch(0.189 0.01 29)",
    inverseInk: "oklch(0.942 0.023 76)",
    eyebrow: "oklch(0.511 0.049 54)",
    eyebrowInverse: "oklch(0.887 0.058 66)",
    line: "oklch(0.836 0.034 70)",
    radius: "0",
    headerRadius: "0",
    shadowSm: "none",
    shadowLg: "none",
  },
  paths: {
    home: "/restaurant-bistrot",
    menu: "/restaurant-bistrot/menu",
    reservation: "/restaurant-bistrot/reservation",
    galerie: "/restaurant-bistrot/galerie",
    histoire: "/restaurant-bistrot/histoire",
    privatisation: "/restaurant-bistrot/privatisation",
    contact: "/restaurant-bistrot/contact",
  },
  copy: { fr, en },
};
