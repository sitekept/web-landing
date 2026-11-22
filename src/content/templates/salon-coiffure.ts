import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « salon-coiffure » (salon de coiffure fictif « Studio Lune » : marque
 * lifestyle, collage éditorial, réservation très visible, stylists, lookbook et
 * journal, en-tête flottant en pilule).
 *
 * Toute la copie visible vit ici : navigation, appels à l’action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/salon-coiffure/`)
 * n’ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre (anglais US)
 * typée `SalonCoiffureCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 * Pas d’icône pilotée par la copie dans cette démo : aucune clé `icon`.
 *
 * Images : Unsplash, gros plans de cheveux (de dos), outils et intérieur de
 * salon, sans visage, marque ni texte lisible. Même URL dans les deux langues,
 * seul le `alt` se traduit.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

const IMG = {
  scissors: unsplash("1589876518759-5b460cabcc4c"),
  hairBack: unsplash("1710527988568-3040fd125358"),
  mirror: unsplash("1626379501846-0df4067b8bb9"),
  waves: unsplash("1715067877702-9a3b0faf4ba3"),
  curls: unsplash("1582095133179-bfd08e2fc6b3"),
  longHair: unsplash("1765490372652-13e7ce0f5dbc"),
} as const;

const fr = {
  brand: {
    name: "Studio Lune",
    tagline: "Couleur, coupe et styling signature",
  },
  nav: {
    home: "Accueil",
    prestations: "Prestations",
    stylists: "Stylists",
    lookbook: "Lookbook",
    reservation: "Réservation",
    journal: "Journal",
    contact: "Contact",
  },
  cta: {
    book: "Réserver",
  },
  footer: {
    title:
      "Un salon pensé comme une marque éditoriale avec booking très visible.",
    text: "Le style du site repose sur des courbes très larges, une navigation flottante et des moments visuels plus émotionnels que descriptifs.",
    address: "28 rue des Martyrs, Paris 9e",
    email: "bonjour@studio-lune.example",
    hours: "Mar-Sam 10h00-20h00",
  },
  meta: {
    home: {
      title: "Studio Lune - Salon de coiffure",
      description:
        "Template lifestyle pour salon de coiffure avec collage éditorial, pages stylists, lookbook, journal et réservation.",
    },
    prestations: {
      title: "Prestations - Studio Lune",
      description:
        "Les prestations sont racontées par résultat désiré et durée de rendez-vous : coupe et mouvement, balayage lumière, soin signature.",
    },
    stylists: {
      title: "Stylists - Studio Lune",
      description:
        "Chaque coiffeur est présenté comme une signature de style : Lina, Maëlys et Noah, chacun relié à un rendu attendu et à un type de réservation.",
    },
    lookbook: {
      title: "Lookbook - Studio Lune",
      description:
        "Une galerie souple et généreuse, plus proche d’un moodboard que d’un portfolio rigide : intérieur du salon, cheveux et outils.",
    },
    reservation: {
      title: "Réservation - Studio Lune",
      description:
        "La réservation est présentée comme une expérience choisie : coupe signature 45 min, balayage lumière 3h, gloss et soin profond 1h15.",
    },
    journal: {
      title: "Journal - Studio Lune",
      description:
        "Une page éditoriale pour donner du goût au site : le blond d’hiver, le choix d’une coupe qui bouge, trois routines brillance.",
    },
    contact: {
      title: "Contact - Studio Lune",
      description:
        "Adresse, horaires, téléphone et quartier : 28 rue des Martyrs, Paris 9e, du mardi au samedi de 10h00 à 20h00.",
    },
  },
  home: {
    hero: {
      eyebrow: "Marque lifestyle / booking visuel",
      title:
        "Un salon qui se réserve comme une adresse, pas comme un agenda gris.",
      text: "Hero collage, nav flottante, carte de réservation suspendue et pages éditoriales. Ici, le site vend une vibe autant qu’un service.",
      book: "Réserver un créneau",
      lookbook: "Voir le lookbook",
      signature: {
        eyebrow: "Signature",
        text: "Lumière douce, coupes mobiles, couleur lisible et expérience très habitée.",
      },
      review:
        "Réservation couleur, coupe ou gloss avec choix du bon créneau avant même de voir l’équipe.",
      imageSide: {
        src: IMG.curls,
        alt: "Mains qui fixent des boucles roulées sur des cheveux bruns vus de dos, dans un salon lumineux",
      },
      imageMain: {
        src: IMG.hairBack,
        alt: "Longs cheveux bruns ondulés vus de dos, sur un haut beige rosé",
      },
    },
    narration: {
      eyebrow: "Narration",
      title:
        "Le site est rythmé comme un magazine court, pas comme une brochure service.",
      description:
        "La homepage ne déroule pas un bloc services standard : elle alterne desirability, preuve sociale et entrée vers les pages lookbook ou stylists.",
      items: [
        {
          title: "Couleurs lumineuses",
          text: "Balayages et gloss mis en scène à travers des intentions visuelles, pas une simple grille de tarifs.",
        },
        {
          title: "Stylists identifiées",
          text: "Le site renvoie vers des profils, des gestes et des résultats attendus, pour qualifier la réservation.",
        },
        {
          title: "Journal de salon",
          text: "Une page éditoriale sert de preuve de goût et casse l’effet booking trop utilitaire.",
        },
      ],
    },
    capsules: {
      eyebrow: "Lookbook",
      title:
        "Des capsules de style remplacent la liste traditionnelle de prestations.",
      items: [
        "Brushing souple et léger",
        "Blond beige naturel",
        "Bob texturé très net",
        "Soin gloss miroir",
      ],
    },
  },
  prestations: {
    eyebrow: "Prestations",
    title:
      "Les prestations sont racontées par résultat désiré et durée de rendez-vous.",
    description:
      "Le salon garde une écriture lifestyle tout en qualifiant le bon créneau.",
    items: [
      {
        title: "Coupe & mouvement",
        text: "45 à 60 min, consultation rapide, coupe nette et finition souple.",
      },
      {
        title: "Balayage lumière",
        text: "2h30 à 3h30, diagnostic couleur, contouring et gloss d’équilibre.",
      },
      {
        title: "Soin signature",
        text: "30 à 45 min, cuir chevelu, matière et finition très brillante.",
      },
    ],
  },
  stylists: {
    eyebrow: "Stylists",
    title: "Chaque coiffeur est présenté comme une signature de style.",
    description:
      "La page aide le client à choisir une personne, pas seulement une case dans un planning.",
    text: "Chaque profil est relié à un rendu attendu et à un type de réservation, ce qui renforce le booking.",
    items: [
      "Lina · coupe et mouvement",
      "Maëlys · blond, glow et finitions lumière",
      "Noah · texture, styling et événements",
    ],
  },
  lookbook: {
    title:
      "Une galerie souple et généreuse, plus proche d’un moodboard que d’un portfolio rigide.",
    eyebrow: "Lookbook",
    images: [
      {
        src: IMG.mirror,
        alt: "Miroir rond doré reflétant des fauteuils de salon, au-dessus d’un comptoir de flacons flous",
      },
      {
        src: IMG.waves,
        alt: "Mèches ondulées châtain doré étalées sur un tissu crème",
      },
      {
        src: IMG.longHair,
        alt: "Gros plan de longs cheveux décoiffés aux reflets blonds",
      },
      {
        src: IMG.scissors,
        alt: "Ciseaux à effiler dorés posés sur un fond rose",
      },
    ],
  },
  reservation: {
    eyebrow: "Réservation",
    title:
      "La réservation est présentée comme une expérience choisie, pas comme un tableau horaire brut.",
    description:
      "Chaque entrée décrit le type de rendez-vous, le temps et l’intention beauté.",
    items: [
      "Coupe signature · 45 min",
      "Balayage lumière · 3h",
      "Gloss + soin profond · 1h15",
    ],
    panel: {
      eyebrow: "Booking",
      text: "Le bon styliste, le bon créneau, la bonne promesse de résultat.",
      link: "Choisir un styliste",
    },
  },
  journal: {
    eyebrow: "Journal",
    title:
      "Une page éditoriale pour donner du goût au site et sortir du simple tunnel de réservation.",
    description:
      "Le journal renforce la marque, inspire les clientes et rend le salon plus mémorable.",
    text: "Des sujets courts, inspirants et utiles qui prolongent le ton du salon au-delà du booking.",
    items: [
      "Le blond d’hiver sans effet plat",
      "Comment choisir une coupe qui bouge vraiment",
      "Trois routines brillance qui tiennent entre deux rendez-vous",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Une page courte qui finalise la venue au salon.",
    description:
      "Adresse, horaires, téléphone et quartier suffisent ici à fermer le parcours.",
    address: "28 rue des Martyrs, Paris 9e",
    hours: "Mardi au samedi, 10h00-20h00",
    phone: { href: "tel:+33199000071", label: "01 99 00 00 71" },
  },
} as const;

export type SalonCoiffureCopy = WidenLiterals<typeof fr>;

const en: SalonCoiffureCopy = {
  brand: {
    name: "Your business",
    tagline: "Color, cut and signature styling",
  },
  nav: {
    home: "Home",
    prestations: "Services",
    stylists: "Stylists",
    lookbook: "Lookbook",
    reservation: "Booking",
    journal: "Journal",
    contact: "Contact",
  },
  cta: {
    book: "Book",
  },
  footer: {
    title:
      "A salon designed as an editorial brand with highly visible booking.",
    text: "The site’s style rests on very wide curves, a floating navigation and visual moments that are more emotional than descriptive.",
    address: "28 rue des Martyrs, 9th arr., Paris",
    email: "contact@example.com",
    hours: "Tue-Sat 10 a.m.-8 p.m.",
  },
  meta: {
    home: {
      title: "Your business - Hair salon",
      description:
        "Lifestyle template for a hair salon with an editorial collage, stylist pages, a lookbook, a journal and booking.",
    },
    prestations: {
      title: "Services - Your business",
      description:
        "Services are described by the result you want and the length of the appointment: cut and movement, luminous balayage, signature treatment.",
    },
    stylists: {
      title: "Stylists - Your business",
      description:
        "Each stylist is presented as a style signature: Lina, Maëlys and Noah, each tied to an expected result and a type of booking.",
    },
    lookbook: {
      title: "Lookbook - Your business",
      description:
        "A soft, generous gallery, closer to a moodboard than a rigid portfolio: the salon interior, hair and tools.",
    },
    reservation: {
      title: "Booking - Your business",
      description:
        "Booking is presented as a chosen experience: signature cut 45 min, luminous balayage 3 hr, gloss and deep treatment 1 hr 15 min.",
    },
    journal: {
      title: "Journal - Your business",
      description:
        "An editorial page that gives the site some taste: winter blonde, choosing a cut that moves, three shine routines.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Address, opening hours, phone and neighborhood: 28 rue des Martyrs, 9th arr., Paris, Tuesday to Saturday, 10 a.m.-8 p.m.",
    },
  },
  home: {
    hero: {
      eyebrow: "Lifestyle brand / visual booking",
      title: "A salon you book like an address, not like a gray calendar.",
      text: "A collage hero, a floating nav, a suspended booking card and editorial pages. Here, the site sells a vibe as much as a service.",
      book: "Book a slot",
      lookbook: "See the lookbook",
      signature: {
        eyebrow: "Signature",
        text: "Soft light, flowing cuts, readable color and a deeply lived-in experience.",
      },
      review:
        "Book color, a cut or a gloss and pick the right slot before you even meet the team.",
      imageSide: {
        src: IMG.curls,
        alt: "Hands pinning rolled curls on brown hair seen from behind, in a bright salon",
      },
      imageMain: {
        src: IMG.hairBack,
        alt: "Long wavy brown hair seen from behind, over a rosy beige top",
      },
    },
    narration: {
      eyebrow: "Narrative",
      title:
        "The site is paced like a short magazine, not like a service brochure.",
      description:
        "The homepage doesn’t roll out a standard services block: it alternates desirability, social proof and entry points to the lookbook and stylists pages.",
      items: [
        {
          title: "Luminous color",
          text: "Balayage and gloss staged through visual intentions, not a plain price grid.",
        },
        {
          title: "Identified stylists",
          text: "The site points to profiles, gestures and expected results, to qualify the booking.",
        },
        {
          title: "Salon journal",
          text: "An editorial page serves as proof of taste and breaks up the overly utilitarian booking feel.",
        },
      ],
    },
    capsules: {
      eyebrow: "Lookbook",
      title: "Style capsules replace the traditional list of services.",
      items: [
        "Soft, light blow-dry",
        "Natural beige blonde",
        "Sharp textured bob",
        "Mirror-gloss treatment",
      ],
    },
  },
  prestations: {
    eyebrow: "Services",
    title:
      "Services are described by the result you want and the length of the appointment.",
    description:
      "The salon keeps a lifestyle voice while still qualifying the right slot.",
    items: [
      {
        title: "Cut & movement",
        text: "45 to 60 min, quick consultation, clean cut and soft finish.",
      },
      {
        title: "Luminous balayage",
        text: "2 hr 30 min to 3 hr 30 min, color diagnosis, contouring and a balancing gloss.",
      },
      {
        title: "Signature treatment",
        text: "30 to 45 min, scalp, texture and a very shiny finish.",
      },
    ],
  },
  stylists: {
    eyebrow: "Stylists",
    title: "Each stylist is presented as a style signature.",
    description:
      "The page helps clients choose a person, not just a slot in a schedule.",
    text: "Each profile is tied to an expected result and a type of booking, which strengthens the booking.",
    items: [
      "Lina · cut and movement",
      "Maëlys · blonde, glow and light finishes",
      "Noah · texture, styling and events",
    ],
  },
  lookbook: {
    title:
      "A soft, generous gallery, closer to a moodboard than a rigid portfolio.",
    eyebrow: "Lookbook",
    images: [
      {
        src: IMG.mirror,
        alt: "Round gold mirror reflecting salon chairs, above a counter of blurred bottles",
      },
      {
        src: IMG.waves,
        alt: "Wavy golden-brown locks spread over cream fabric",
      },
      {
        src: IMG.longHair,
        alt: "Close-up of long tousled hair with blond highlights",
      },
      {
        src: IMG.scissors,
        alt: "Golden thinning shears on a pink background",
      },
    ],
  },
  reservation: {
    eyebrow: "Booking",
    title:
      "Booking is presented as a chosen experience, not as a raw hourly table.",
    description:
      "Each entry describes the type of appointment, the time and the beauty intention.",
    items: [
      "Signature cut · 45 min",
      "Luminous balayage · 3 hr",
      "Gloss + deep treatment · 1 hr 15 min",
    ],
    panel: {
      eyebrow: "Booking",
      text: "The right stylist, the right slot, the right promise of results.",
      link: "Choose a stylist",
    },
  },
  journal: {
    eyebrow: "Journal",
    title:
      "An editorial page to give the site some taste and move beyond a plain booking funnel.",
    description:
      "The journal strengthens the brand, inspires clients and makes the salon more memorable.",
    text: "Short, inspiring and useful topics that carry the salon’s tone beyond booking.",
    items: [
      "Winter blonde without the flat look",
      "How to choose a cut that really moves",
      "Three shine routines that last between appointments",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "A short page that completes the trip to the salon.",
    description:
      "Address, opening hours, phone and neighborhood are enough here to close the journey.",
    address: "28 rue des Martyrs, 9th arr., Paris",
    hours: "Tuesday to Saturday, 10 a.m.-8 p.m.",
    phone: { href: "tel:+33199000071", label: "01 99 00 00 71" },
  },
};

export const salonCoiffure: TemplateDefinition<
  "salon-coiffure",
  SalonCoiffureCopy
> = {
  slug: "salon-coiffure",
  theme: {
    // Crème du fond de page (ancien #f8eee7).
    surface: "oklch(0.955 0.014 58)",
    raised: "oklch(1 0 0)",
    // Rose pâle de la section « Lookbook » (ancien #f7e7de).
    tint: "oklch(0.938 0.021 52)",
    ink: "oklch(0.235 0.021 352)",
    // Vieux rose des sur-titres (ancien #8a5d65), foncé pour tenir 4,5:1 sur le rose pâle.
    eyebrow: "oklch(0.48 0.06 8)",
    eyebrowInverse: "oklch(0.867 0.051 4)",
    line: "oklch(0.897 0.021 44)",
    accent: "oklch(0.235 0.021 352)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.235 0.021 352)",
    inverseInk: "oklch(1 0 0)",
    // Une seule grande courbe (cartes, photos, capsules) et la pilule (en-tête, boutons).
    radius: "2.6rem",
    radiusPill: "9999px",
    headerRadius: "9999px",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 600,
    shadowSm: "0 24px 80px oklch(0.277 0.053 2 / 0.08)",
    shadowLg: "0 28px 90px oklch(0.277 0.053 2 / 0.16)",
  },
  paths: {
    home: "/salon-coiffure",
    prestations: "/salon-coiffure/prestations",
    stylists: "/salon-coiffure/stylists",
    lookbook: "/salon-coiffure/lookbook",
    reservation: "/salon-coiffure/reservation",
    journal: "/salon-coiffure/journal",
    contact: "/salon-coiffure/contact",
  },
  copy: { fr, en },
};
