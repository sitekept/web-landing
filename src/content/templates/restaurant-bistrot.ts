import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « restaurant-bistrot » (bistrot fictif « Le Sillon »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/restaurant-bistrot/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée
 * `RestaurantBistrotCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Thème : lecture « claire » de la palette (crème en `surface`, brun presque
 * noir en `inverse`). Les sections sombres sont donc des sections `inverse`, le
 * héros sombre (`TemplateHeroMedia`) lit `inverse` pour son voile, et les
 * sections crème sont les sections par défaut.
 */

const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;

const IMG = {
  hero: unsplash("1552960226-639240203497", 2400),
  room: unsplash("1650490632010-e18cbb694dd1"),
  plate: unsplash("1621327017866-6fb07e6c96ea"),
  glasses: unsplash("1675965218658-bd6f516742ac"),
  candle: unsplash("1666600638841-4fe4a01ae260"),
} as const;

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
    seePrivatisation: "Voir la privatisation",
    contactRestaurant: "Contacter le restaurant",
  },
  footer: {
    title:
      "Une template d’hospitalité qui vend le lieu, la lumière et le rythme du service.",
    text: "La structure privilégie les séquences immersives et les décisions de réservation plutôt qu’un simple empilement d’informations.",
    address: "17 rue Keller, Paris 11e",
    email: "reservation@lesillon.example",
    hours: "Mar-Sam service midi & soir",
  },
  meta: {
    home: {
      title: "Le Sillon - Restaurant Bistrot",
      description:
        "Template immersive pour restaurant bistrot avec overlay navigation, réservation et pages éditoriales d’hospitalité.",
    },
    menu: {
      title: "Menu - Le Sillon",
      description:
        "Une carte présentée comme un rythme de service : poireaux vinaigrette fumée, truite crue, volaille rôtie, gnocchi, crème caramel.",
    },
    reservation: {
      title: "Réservation - Le Sillon",
      description:
        "Déjeuner de 12h à 14h30, dîner de 19h à 22h30, groupes et privatisation légère sur demande : la réservation reste une décision d’ambiance et de service.",
    },
    galerie: {
      title: "Galerie - Le Sillon",
      description:
        "Salle, lumière, assiette : la galerie raconte le lieu entier.",
    },
    histoire: {
      title: "Histoire - Le Sillon",
      description:
        "Un bistrot contemporain : service vivant, lumière chaude, assiettes courtes et cave active. La salle, la cave et la manière de recevoir.",
    },
    privatisation: {
      title: "Privatisation - Le Sillon",
      description:
        "Dîner d’équipe de 12 à 20 personnes, lancement discret, repas presse ou anniversaire intime : formats de groupe et privatisation légère.",
    },
    contact: {
      title: "Contact - Le Sillon",
      description:
        "17 rue Keller, Paris 11e. Ouvert du mardi au samedi, de 12h à 14h30 et de 19h à 22h30. Réservation : reservation@lesillon.example.",
    },
  },
  home: {
    hero: {
      eyebrow: "Hospitality immersive",
      title:
        "Une table qui se réserve pour son atmosphère avant même sa carte.",
      description:
        "Hero plein écran, ambiance d’abord, réservation latérale et pages qui prolongent l’attachement au lieu.",
      image: {
        src: IMG.hero,
        alt: "Salle de restaurant tamisée aux murs cuivrés, tables en bois sombre dressées avec tasses et verres, lampes murales allumées",
      },
    },
    tonight: {
      eyebrow: "Ce soir au Sillon",
      title:
        "Service du soir, assiettes à partager, cave vivante et quelques places au comptoir.",
      points: [
        "Service midi et soir du mardi au samedi",
        "Tables de 2 à 8 et privatisation légère",
        "Cuisine courte, cave lisible, ambiance chaude",
      ],
    },
    place: {
      eyebrow: "Le lieu",
      title:
        "La homepage fonctionne comme un hall d’entrée, pas comme une fiche établissement.",
      description:
        "On installe d’abord la mémoire sensorielle du lieu, puis on laisse venir la carte, la réservation et l’histoire.",
      items: [
        "Comptoir vivant",
        "Carte courte de saison",
        "Cave mobile mais lisible",
        "Privatisation de petits formats",
      ],
    },
  },
  menu: {
    eyebrow: "Carte",
    title:
      "Une carte présentée comme un rythme de service, pas comme un PDF figé.",
    items: [
      "Entrées · poireaux vinaigrette fumée, truite crue, brioche chaude",
      "Plats · volaille rôtie, gnocchi, poisson selon arrivage",
      "Desserts · crème caramel, mousse chocolat, compote rôtie",
    ],
  },
  reservation: {
    eyebrow: "Réservation",
    title: "La réservation reste une décision d’ambiance et de service.",
    description:
      "On réserve un déjeuner, un dîner ou une privatisation légère, pas un simple créneau.",
    items: [
      "Déjeuner · service continu de 12h à 14h30",
      "Dîner · 19h à 22h30, cuisine courte et cave vivante",
      "Groupes · petits formats et privatisation légère sur demande",
    ],
    aside: "Une table se réserve ici parce qu’on a déjà envie d’y être.",
  },
  galerie: {
    eyebrow: "Galerie",
    title: "Salle, lumière, assiette : la galerie raconte le lieu entier.",
    images: [
      {
        src: IMG.room,
        alt: "Coin de salle avec une table ronde et des chaises en osier sous une grande suspension tressée, sol à motifs géométriques",
      },
      {
        src: IMG.plate,
        alt: "Vol-au-vent de crevettes à la crème et aux jeunes pousses, servi dans une assiette creuse blanche sur une table en bois",
      },
      {
        src: IMG.glasses,
        alt: "Verres à vin et serviette bleu nuit sur une table en bois, étagères de la salle floues à l’arrière-plan",
      },
      {
        src: IMG.candle,
        alt: "Table ronde en bois éclairée par une bougie dans un verre rouge, chaises bistrot et salle floue au fond",
      },
    ],
  },
  histoire: {
    eyebrow: "Histoire",
    title:
      "Une page éditoriale pour raconter la salle, la cave et la manière de recevoir.",
    first:
      "Le Sillon est pensé comme un bistrot contemporain : service vivant, lumière chaude, assiettes courtes et cave active.",
    second:
      "La page histoire ajoute de l’attachement et de la mémoire au site. Elle évite l’effet “établissement standard” et soutient la réservation.",
  },
  privatisation: {
    eyebrow: "Privatisation",
    title:
      "Une page dédiée aux formats de groupe et à la privatisation légère.",
    description:
      "Le lieu n’a pas besoin d’un énorme dispositif événementiel pour vendre des formats choisis et désirables.",
    items: [
      "Dîner équipe 12 à 20 personnes",
      "Lancement discret ou repas presse",
      "Anniversaire intime avec menu court",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Une page brève pour venir, appeler ou écrire.",
    items: [
      "17 rue Keller, Paris 11e",
      "Mar-Sam, 12h-14h30 et 19h-22h30",
      "reservation@lesillon.example",
    ],
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
    seePrivatisation: "See private dining",
    contactRestaurant: "Contact the restaurant",
  },
  footer: {
    title:
      "A hospitality template that sells the place, the light and the rhythm of service.",
    text: "The structure favors immersive sequences and booking decisions over a simple stack of information.",
    address: "17 rue Keller, Paris 11e",
    email: "contact@example.com",
    hours: "Tue-Sat, lunch & dinner service",
  },
  meta: {
    home: {
      title: "Your business - Bistro restaurant",
      description:
        "Immersive template for a bistro restaurant, with an overlay header, reservations and editorial hospitality pages.",
    },
    menu: {
      title: "Menu - Your business",
      description:
        "A menu presented as the rhythm of service: smoked leek vinaigrette, raw trout, roast chicken, gnocchi and crème caramel.",
    },
    reservation: {
      title: "Reservations - Your business",
      description:
        "Lunch from 12 p.m. to 2:30 p.m., dinner from 7 p.m. to 10:30 p.m., groups and light private dining on request: booking is a choice of atmosphere and service.",
    },
    galerie: {
      title: "Gallery - Your business",
      description:
        "Room, light, plate: the gallery tells the whole story of the place.",
    },
    histoire: {
      title: "Story - Your business",
      description:
        "A contemporary bistro: lively service, warm light, short plates and an active cellar. The room, the cellar and the way we welcome guests.",
    },
    privatisation: {
      title: "Private dining - Your business",
      description:
        "Team dinners for 12 to 20 guests, a discreet launch, a press lunch or an intimate birthday: group formats and light private dining.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "17 rue Keller, Paris 11e. Open Tuesday through Saturday, 12 p.m. to 2:30 p.m. and 7 p.m. to 10:30 p.m. Reservations: contact@example.com.",
    },
  },
  home: {
    hero: {
      eyebrow: "Immersive hospitality",
      title:
        "A table you book for its atmosphere before you even see the menu.",
      description:
        "A full-screen hero, atmosphere first, a booking card on the side and pages that deepen attachment to the place.",
      image: {
        src: IMG.hero,
        alt: "Dimly lit restaurant dining room with copper-toned walls, dark wooden tables set with cups and glasses, and glowing wall lamps",
      },
    },
    tonight: {
      eyebrow: "Tonight at the bistro",
      title:
        "Evening service, plates to share, a lively wine cellar and a few seats at the counter.",
      points: [
        "Lunch and dinner service Tuesday through Saturday",
        "Tables for 2 to 8 and light private dining",
        "Short menu, readable wine list, warm atmosphere",
      ],
    },
    place: {
      eyebrow: "The place",
      title:
        "The homepage works like an entrance hall, not like a venue fact sheet.",
      description:
        "We first set up the sensory memory of the place, then let the menu, the booking and the story come.",
      items: [
        "Lively counter",
        "Short seasonal menu",
        "Flexible but readable wine cellar",
        "Small-format private dining",
      ],
    },
  },
  menu: {
    eyebrow: "Menu",
    title: "A menu presented as the rhythm of service, not as a frozen PDF.",
    items: [
      "Starters · smoked leek vinaigrette, raw trout, warm brioche",
      "Mains · roast chicken, gnocchi, fish depending on the catch",
      "Desserts · crème caramel, chocolate mousse, roasted fruit compote",
    ],
  },
  reservation: {
    eyebrow: "Reservations",
    title: "Booking remains a choice of atmosphere and service.",
    description:
      "You reserve a lunch, a dinner or light private dining, not just a time slot.",
    items: [
      "Lunch · continuous service from 12 p.m. to 2:30 p.m.",
      "Dinner · 7 p.m. to 10:30 p.m., short menu and a lively wine cellar",
      "Groups · small formats and light private dining on request",
    ],
    aside: "You reserve a table here because you already want to be there.",
  },
  galerie: {
    eyebrow: "Gallery",
    title:
      "Room, light, plate: the gallery tells the whole story of the place.",
    images: [
      {
        src: IMG.room,
        alt: "Dining room corner with a round table and wicker chairs under a large woven pendant lamp, over a geometric patterned floor",
      },
      {
        src: IMG.plate,
        alt: "Shrimp vol-au-vent with cream sauce and micro-greens, served in a white shallow bowl on a wooden table",
      },
      {
        src: IMG.glasses,
        alt: "Wine glasses and a navy napkin on a wooden table, with the room’s shelves blurred in the background",
      },
      {
        src: IMG.candle,
        alt: "Round wooden table lit by a candle in a red glass, bistro chairs and a blurred dining room behind",
      },
    ],
  },
  histoire: {
    eyebrow: "Story",
    title:
      "An editorial page to tell the story of the room, the cellar and the way we welcome guests.",
    first:
      "The restaurant is designed as a contemporary bistro: lively service, warm light, short plates and an active cellar.",
    second:
      "The story page adds attachment and memory to the site. It avoids the “standard venue” effect and supports booking.",
  },
  privatisation: {
    eyebrow: "Private dining",
    title: "A page dedicated to group formats and light private dining.",
    description:
      "The place does not need a huge events setup to sell carefully chosen, desirable formats.",
    items: [
      "Team dinner for 12 to 20 guests",
      "Discreet launch or press lunch",
      "Intimate birthday with a short menu",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "A short page to come by, call or write.",
    items: [
      "17 rue Keller, Paris 11e",
      "Tue-Sat, 12 p.m.-2:30 p.m. and 7 p.m.-10:30 p.m.",
      "contact@example.com",
    ],
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
    raised: "oklch(1 0 0)",
    accent: "oklch(0.189 0.01 29)",
    accentInk: "oklch(0.942 0.023 76)",
    inverse: "oklch(0.189 0.01 29)",
    inverseInk: "oklch(0.942 0.023 76)",
    eyebrow: "oklch(0.511 0.049 54)",
    eyebrowInverse: "oklch(0.887 0.058 66)",
    line: "oklch(0.836 0.034 70)",
    radius: "0",
    headerRadius: "0",
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
