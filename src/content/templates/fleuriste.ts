import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « fleuriste » (atelier floral éditorial, page unique).
 *
 * Toute la copie visible vit ici : navigation, sections, `alt`, métadonnées.
 * Les vues (`src/templates/fleuriste/`) n'ont aucun texte en dur. La navigation
 * se fait par ancres (`/fleuriste#projets`, ...), les `id` sont dans
 * `src/templates/fleuriste/parts.tsx`.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `FleuristeCopy`
 * (dérivé de `fr` par `WidenLiterals`).
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais (table `ICONS` dans `parts.tsx`).
 *
 * Images : Unsplash, sans marque, texte lisible ni visage. `alt` dans la copie.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  vision: unsplash("1435783459217-ee7fe5414abe"),
  main: unsplash("1778330453223-e4d30934e0ab"),
  side: unsplash("1587317996312-6314ec7b5a06"),
  weddings: unsplash("1667555150959-3e881131b9e4"),
  receptions: unsplash("1563292749-0e070ca58b29"),
  brands: unsplash("1536316754104-90daa92e4eb0"),
  composition: unsplash("1610841803453-1b30e19d2354"),
  tulips: unsplash("1491994336086-44f5d76dd8f2"),
  bridal: unsplash("1521520368710-3ab197656d60"),
  peonyVase: unsplash("1560256608-43f0b6f7588e"),
  driedVase: unsplash("1713191352960-911f277876a7"),
  jar: unsplash("1561181286-d3fee7d55364"),
} as const;

const fr = {
  brand: {
    name: "Fleurs d’Émeraude",
    tagline: "Atelier floral",
  },
  nav: {
    home: "Accueil",
    projects: "Réalisations",
    studio: "Atelier",
    contact: "Contact",
    cta: "Demander un devis",
  },
  hero: {
    badge: "Fleuriste depuis 1992",
    titleStart: "Les fleurs de",
    titleAccent: "votre événement,",
    titleEnd: "du bouquet au décor de salle.",
    description:
      "Mariages, réceptions privées et lancements de marque : nous choisissons les fleurs avec vous, les composons à l’atelier, les installons sur place et revenons les retirer après la fête.",
    seeProjects: "Parcourir nos projets",
    bookMeeting: "Prendre rendez-vous",
    visionLabel: "De saison",
    visionText:
      "Pivoines, renoncules, roses de jardin : chaque tige est choisie pour votre date et votre lieu.",
    positioningLabel: "Sur mesure",
    positioningText:
      "Une première rencontre sans engagement, puis un devis détaillé poste par poste : vous validez chaque fleur avant que nous la commandions.",
    vision: {
      src: IMG.vision,
      alt: "Roses de jardin rose tendre dans un vase en grès, devant un mur gris patiné.",
    },
    main: {
      src: IMG.main,
      alt: "Grand bouquet de roses orangées et roses, d’hortensias blancs et de feuillage de fougère.",
    },
    side: {
      src: IMG.side,
      alt: "Deux pavots blancs au cœur jaune sur un fond crème.",
    },
  },
  projects: {
    eyebrow: "Réalisations",
    title: "Ce que nous fleurissons le plus souvent.",
    link: "Préparer un projet similaire",
    items: [
      {
        eyebrow: "Mariages",
        title: "Une seule palette, de la cérémonie au dîner.",
        description:
          "Bouquet de la mariée, boutonnières, arche et centres de table, composés ensemble et livrés le matin même.",
        image: {
          src: IMG.weddings,
          alt: "Bouquet de mariée rond de roses roses et de lisianthus blancs posé sur une planche de bois au coucher du soleil.",
        },
      },
      {
        eyebrow: "Réceptions privées",
        title: "Anniversaires, dîners et fêtes de famille.",
        description:
          "Centres de table, compositions d’entrée et fleurs du buffet, adaptés au nombre d’invités et à la taille de vos tables.",
        image: {
          src: IMG.receptions,
          alt: "Table ronde dressée avec des verres en cristal et un centre de table de fleurs bleues, jaunes et blanches.",
        },
      },
      {
        eyebrow: "Marques & lieux",
        title: "Des fleurs à vos couleurs, pour un soir ou chaque semaine.",
        description:
          "Hôtels, boutiques, lancements et séances photo : compositions pour un événement ou bouquets renouvelés à date fixe, livrés et entretenus par l’atelier.",
        image: {
          src: IMG.brands,
          alt: "Fleurs coupées suspendues dans de petits tubes de verre devant un mur blanc.",
        },
      },
    ],
  },
  studio: {
    eyebrow: "Atelier",
    title: "Comment nous préparons votre événement.",
    text: "Un rendez-vous pour vos envies, une visite du lieu à l’heure de la fête pour voir sa lumière, puis un devis clair avant tout engagement.",
    notes: [
      "Une palette accordée à votre lieu et à votre décor.",
      "Des fleurs de saison, achetées la semaine de l’événement.",
      "Installation la veille ou le jour même, démontage compris.",
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Quelques-unes de nos compositions récentes.",
    images: [
      {
        src: IMG.composition,
        alt: "Composition de dahlias, de succulentes et de fleurs de coton dans une caissette en bois, sur fond clair.",
      },
      {
        src: IMG.tulips,
        alt: "Tulipes roses, jaunes et prune en bouquets enveloppés de papier gris.",
      },
      {
        src: IMG.bridal,
        alt: "Bouquet de mariée blanc et rose pâle posé sur un voile.",
      },
      {
        src: IMG.peonyVase,
        alt: "Pivoines roses dans un vase en verre posé sur une table en bois.",
      },
      {
        src: IMG.driedVase,
        alt: "Bouquet de fleurs séchées et d’eucalyptus dans un vase vert pâle.",
      },
      {
        src: IMG.jar,
        alt: "Tulipes roses dans un bocal en verre noué d’un ruban de raphia, sur un fond clair.",
      },
    ],
  },
  reviews: {
    eyebrow: "Témoignages",
    title: "Ce que disent nos clients.",
    ratingLabel: "5 étoiles sur 5",
    items: [
      {
        name: "Claire & Hugo",
        role: "Mariage au château",
        text: "« Tout semblait naturel, élégant, exactement à sa place. On aurait dit que le lieu avait toujours été décoré ainsi. »",
      },
      {
        name: "Maison de mode",
        role: "Lancement de collection",
        text: "« L’atelier a fleuri notre boutique pour le lancement, de la vitrine aux tables. Nos invités ont demandé le nom du fleuriste toute la soirée. »",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre événement.",
    phoneHref: "tel:+33199000067",
    emailHref: "mailto:contact@fleurs-emeraude.example",
    details: [
      { icon: "mapPin", text: "12 rue de l’Exemple, 00000 Votre ville" },
      { icon: "phone", text: "01 99 00 00 67" },
      { icon: "mail", text: "contact@fleurs-emeraude.example" },
      { icon: "calendar", text: "Rendez-vous conseil sous 24 h ouvrées" },
    ],
    panelLabel: "Bon à savoir",
    panelText:
      "Pour un mariage, prenez contact de préférence six mois avant la date ; pour une réception ou un lancement, trois semaines suffisent souvent.",
    quote: "Demander un devis",
    call: "Planifier un appel",
  },
  footer: {
    text: "Mariages, réceptions privées et marques, sur devis et sur rendez-vous.",
    navLabel: "Navigation",
    narrationLabel: "Notre savoir-faire",
    narration: "Fleurs de saison, composées à la main et installées sur place.",
  },
  meta: {
    home: {
      title: "Fleurs d’Émeraude - Fleuriste pour mariages et événements",
      description:
        "Fleurs d’Émeraude, fleuriste événementiel depuis 1992 : fleurs de mariage, de réception et de marque, composées à l’atelier et installées sur place.",
    },
  },
} as const;

export type FleuristeCopy = WidenLiterals<typeof fr>;
export type FleuristeIconKey = TemplateIconKey<FleuristeCopy>;

const en: FleuristeCopy = {
  brand: {
    name: "Your business",
    tagline: "Floral studio",
  },
  nav: {
    home: "Home",
    projects: "Our work",
    studio: "Studio",
    contact: "Contact",
    cta: "Request a quote",
  },
  hero: {
    badge: "Florists since 1992",
    titleStart: "Flowers for",
    titleAccent: "your whole event,",
    titleEnd: "from bouquets to centerpieces.",
    description:
      "Weddings, private parties and brand launches: we choose the flowers with you, arrange them in our studio, set them up on site and come back to take them down afterward.",
    seeProjects: "Browse past projects",
    bookMeeting: "Book a consultation",
    visionLabel: "In season",
    visionText:
      "Peonies, ranunculus, garden roses: we pick every stem for your date and your venue.",
    positioningLabel: "Made to order",
    positioningText:
      "A free first meeting, then a quote itemized line by line: you approve every flower before we buy anything.",
    vision: {
      src: IMG.vision,
      alt: "Soft pink garden roses in a stoneware vase in front of a weathered gray wall.",
    },
    main: {
      src: IMG.main,
      alt: "Large bouquet of orange and pink roses, white hydrangeas and fern leaves.",
    },
    side: {
      src: IMG.side,
      alt: "Two white poppies with yellow centers against a cream background.",
    },
  },
  projects: {
    eyebrow: "Our work",
    title: "The events we decorate most often.",
    link: "Plan something similar",
    items: [
      {
        eyebrow: "Weddings",
        title: "One color palette, from the ceremony to dinner.",
        description:
          "Bridal bouquet, boutonnieres, arch and centerpieces, designed together and delivered that morning.",
        image: {
          src: IMG.weddings,
          alt: "Round bridal bouquet of pink roses and white lisianthus on a wooden board at sunset.",
        },
      },
      {
        eyebrow: "Private parties",
        title: "Birthdays, dinners and family celebrations.",
        description:
          "Centerpieces, entryway arrangements and buffet flowers, sized to your guest count and your tables.",
        image: {
          src: IMG.receptions,
          alt: "Round table set with crystal glasses and a centerpiece of blue, yellow and white flowers.",
        },
      },
      {
        eyebrow: "Brands & venues",
        title: "Flowers in your colors, for one night or every week.",
        description:
          "Hotels, boutiques, launches and photo shoots: arrangements for a single event or on a regular schedule, delivered and cared for by our team.",
        image: {
          src: IMG.brands,
          alt: "Cut flowers hanging in small glass tubes in front of a white wall.",
        },
      },
    ],
  },
  studio: {
    eyebrow: "Studio",
    title: "How we get ready for your event.",
    text: "A meeting to hear your ideas, a venue visit at the same time of day as your event to see the light, then a clear quote before you commit.",
    notes: [
      "A palette that suits your venue and your decor.",
      "Seasonal flowers, bought the week of your event.",
      "Setup the day before or the same day, teardown included.",
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A few of our recent arrangements.",
    images: [
      {
        src: IMG.composition,
        alt: "Arrangement of dahlias, succulents and cotton bolls in a wooden crate on a pale background.",
      },
      {
        src: IMG.tulips,
        alt: "Pink, yellow and plum tulips in bunches wrapped in gray paper.",
      },
      {
        src: IMG.bridal,
        alt: "White and pale pink bridal bouquet resting on a veil.",
      },
      {
        src: IMG.peonyVase,
        alt: "Pink peonies in a glass vase on a wooden table.",
      },
      {
        src: IMG.driedVase,
        alt: "Bouquet of dried flowers and eucalyptus in a pale green vase.",
      },
      {
        src: IMG.jar,
        alt: "Pink tulips in a glass jar tied with raffia, on a light background.",
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our clients say.",
    ratingLabel: "5 out of 5 stars",
    items: [
      {
        name: "Claire & Hugo",
        role: "Château wedding",
        text: "“Everything looked natural and elegant, exactly where it belonged. It was as if the venue had always been decorated that way.”",
      },
      {
        name: "Fashion label",
        role: "Collection launch",
        text: "“They filled our store with flowers for the launch, from the window display to the tables. Guests kept asking for the florist’s name all night.”",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about your event.",
    phoneHref: "tel:+33199000067",
    emailHref: "mailto:contact@example.com",
    details: [
      { icon: "mapPin", text: "12 Example Street, 00000 Your city" },
      { icon: "phone", text: "01 99 00 00 67" },
      { icon: "mail", text: "contact@example.com" },
      { icon: "calendar", text: "Consultation within one business day" },
    ],
    panelLabel: "Good to know",
    panelText:
      "For a wedding, reach out about six months before the date; for a party or a launch, three weeks is usually enough.",
    quote: "Request a quote",
    call: "Schedule a call",
  },
  footer: {
    text: "Weddings, private parties and brands, by quote and by appointment.",
    navLabel: "Navigation",
    narrationLabel: "Our craft",
    narration: "Seasonal flowers, arranged by hand and set up on site.",
  },
  meta: {
    home: {
      title: "Your business - Wedding and event florist",
      description:
        "Your business, an event florist since 1992: flowers for weddings, private parties and brands, arranged in our studio and set up on site.",
    },
  },
};

export const fleuriste: TemplateDefinition<"fleuriste", FleuristeCopy> = {
  slug: "fleuriste",
  /**
   * Fond sable clair, encre vert forêt (boutons, fond inverse), troisième fond
   * beige pour l'atelier, sur-titres et accent de titre en rose poudré foncé
   * (contraste 4,5:1 sur les trois fonds clairs). Instrument Serif en
   * affichage, Inter en texte, rayons très doux, ombres larges et diffuses.
   */
  theme: {
    surface: "oklch(0.954 0.011 77)",
    raised: "oklch(1 0 0)",
    tint: "oklch(0.929 0.017 71)",
    ink: "oklch(0.355 0.024 162)",
    inkMuted: "oklch(0.495 0.023 159)",
    eyebrow: "oklch(0.48 0.075 12)",
    eyebrowInverse: "oklch(0.88 0.045 20)",
    line: "oklch(0.872 0.02 73)",
    accent: "oklch(0.355 0.024 162)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.355 0.024 162)",
    inverseInk: "oklch(1 0 0)",
    radius: "1.875rem",
    fontDisplay:
      "var(--font-display-serif), ui-serif, Georgia, 'Times New Roman', serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 400,
    shadowSm: "0 18px 50px color-mix(in oklch, var(--tpl-ink) 6%, transparent)",
    shadowLg:
      "0 30px 90px color-mix(in oklch, var(--tpl-ink) 14%, transparent)",
  },
  paths: {
    home: "/fleuriste",
  },
  copy: { fr, en },
};
