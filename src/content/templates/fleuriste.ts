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
    home: "Édito",
    projects: "Projets",
    studio: "Atelier",
    contact: "Contact",
    cta: "Demander un devis",
  },
  hero: {
    badge: "Studio floral mariages, réceptions et marques",
    titleStart: "Une template qui se lit comme un",
    titleAccent: "portfolio éditorial",
    titleEnd: "et non comme une boutique locale.",
    description:
      "L’objectif ici est de vendre une direction artistique, une sensibilité et une capacité à sublimer un événement. La structure assume la narration, l’image et la respiration.",
    seeProjects: "Explorer les projets",
    bookMeeting: "Réserver un rendez-vous",
    visionLabel: "Vision",
    visionText:
      "Des fleurs pensées pour le regard, le lieu et la mémoire visuelle.",
    positioningLabel: "Positionnement",
    positioningText:
      "Cette page vend du sur-mesure haut de gamme. Aucun ton “commerce de quartier”, aucun bloc utilitaire en vitrine : tout est pensé pour évoquer un atelier créatif et premium.",
    vision: {
      src: IMG.vision,
      alt: "Pivoines roses dans un vase en grès devant un mur gris patiné.",
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
    eyebrow: "Projets & univers",
    title:
      "Des bandes éditoriales qui racontent une approche plus qu’un catalogue.",
    link: "Échanger sur ce type de projet",
    items: [
      {
        eyebrow: "Mariages",
        title: "Des fleurs pensées comme une mise en scène sensible.",
        description:
          "Bouquet, cérémonie, dîner, détails de table et silhouettes florales : chaque ensemble est composé comme un récit visuel cohérent plutôt que comme une simple sélection de produits.",
        image: {
          src: IMG.weddings,
          alt: "Bouquet de mariée rond de roses roses et de lisianthus blancs posé sur une planche de bois au coucher du soleil.",
        },
      },
      {
        eyebrow: "Réceptions privées",
        title: "Une esthétique plus intime, plus texturée, plus vivante.",
        description:
          "Nous jouons les couleurs, les volumes et les respirations pour créer des tables, des entrées et des décors qui élèvent tout de suite la perception d’un lieu.",
        image: {
          src: IMG.receptions,
          alt: "Table ronde dressée avec des verres en cristal et un centre de table de fleurs bleues, jaunes et blanches.",
        },
      },
      {
        eyebrow: "Marques & lieux",
        title: "Un fleurissement de marque qui soutient vraiment l’image.",
        description:
          "Studios, hôtels, boutiques et lancements de collection : les compositions servent l’univers visuel, la photo et l’expérience sur place avec un vrai sens du rythme.",
        image: {
          src: IMG.brands,
          alt: "Fleurs coupées suspendues dans de petits tubes de verre devant un mur blanc.",
        },
      },
    ],
  },
  studio: {
    eyebrow: "Atelier",
    title:
      "Une section pensée comme une note de studio, pas comme une liste de services.",
    text: "Là où `boulangerie` pousse l’efficacité, `fleuriste` assume la direction artistique : plus d’espace, plus de récit, plus de mise en scène, moins de blocs “utilitaires”.",
    notes: [
      "Palette pensée autour de votre lieu et de votre lumière.",
      "Sélection saisonnière pour un rendu plus juste et plus vivant.",
      "Installation sur site avec regard direction artistique.",
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Un rythme visuel plus libre, plus proche d’un moodboard de studio.",
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
    title:
      "Une preuve sociale qui prolonge l’univers, pas un simple bloc d’avis.",
    ratingLabel: "5 étoiles sur 5",
    items: [
      {
        name: "Claire & Hugo",
        role: "Mariage au château",
        text: "« Tout semblait naturel, élégant, parfaitement à sa place. On avait l’impression que le lieu avait toujours dû ressembler à ça. »",
      },
      {
        name: "Maison de mode",
        role: "Lancement de marque",
        text: "« Le studio a créé une ambiance immédiatement premium. Les compositions tenaient autant du décor que du langage visuel. »",
      },
    ],
  },
  contact: {
    eyebrow: "Contact studio",
    title: "Réserver une conversation créative.",
    phoneHref: "tel:+33465710034",
    emailHref: "mailto:contact@fleurs-emeraude.example",
    details: [
      { icon: "mapPin", text: "45 Avenue des Jardins, 69003 Lyon" },
      { icon: "phone", text: "04 65 71 00 34" },
      { icon: "mail", text: "contact@fleurs-emeraude.example" },
      { icon: "calendar", text: "Rendez-vous conseil sous 24h ouvrées" },
    ],
    panelLabel: "Ce que vend ce template",
    panelText:
      "Un atelier floral haut de gamme, des projets sur mesure, une lecture éditoriale, des images mises en scène et un rapport plus sensible au client. C’est volontairement à l’opposé du rythme commerçant de `boulangerie`.",
    quote: "Demander un devis",
    call: "Planifier un appel",
  },
  footer: {
    text: "Atelier floral éditorial pour mariages, réceptions privées et projets de marque.",
    navLabel: "Navigation",
    narrationLabel: "Narration",
    narration:
      "Une structure magazine et portfolio, plus contemplative et plus haut de gamme que les templates centrées utilité.",
  },
  meta: {
    home: {
      title: "Fleurs d’Émeraude - Fleuriste Artisan & Compositions Florales",
      description:
        "Fleurs d’Émeraude, votre fleuriste artisan depuis 1992. Créations florales sur mesure, bouquets et compositions pour tous vos événements.",
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
    home: "Editorial",
    projects: "Projects",
    studio: "Studio",
    contact: "Contact",
    cta: "Request a quote",
  },
  hero: {
    badge: "Floral studio for weddings, receptions and brands",
    titleStart: "A template that reads like an",
    titleAccent: "editorial portfolio",
    titleEnd: "and not like a local shop.",
    description:
      "The goal here is to sell an art direction, a sensibility and the ability to make an event shine. The structure embraces storytelling, imagery and breathing room.",
    seeProjects: "Explore the projects",
    bookMeeting: "Book an appointment",
    visionLabel: "Vision",
    visionText: "Flowers designed for the eye, the venue and visual memory.",
    positioningLabel: "Positioning",
    positioningText:
      "This page sells high-end, made-to-measure work. No “neighborhood shop” tone, no utilitarian block in the window: everything is designed to evoke a creative, premium studio.",
    vision: {
      src: IMG.vision,
      alt: "Pink peonies in a stoneware vase in front of a weathered gray wall.",
    },
    main: {
      src: IMG.main,
      alt: "Large bouquet of orange and pink roses, white hydrangeas and fern foliage.",
    },
    side: {
      src: IMG.side,
      alt: "Two white poppies with yellow centers against a cream background.",
    },
  },
  projects: {
    eyebrow: "Projects & worlds",
    title:
      "Editorial bands that tell the story of an approach rather than a catalog.",
    link: "Talk about this type of project",
    items: [
      {
        eyebrow: "Weddings",
        title: "Flowers designed as a sensitive staging.",
        description:
          "Bouquet, ceremony, dinner, table details and floral silhouettes: each ensemble is composed as a coherent visual story rather than a simple selection of products.",
        image: {
          src: IMG.weddings,
          alt: "Round bridal bouquet of pink roses and white lisianthus resting on a wooden plank at sunset.",
        },
      },
      {
        eyebrow: "Private receptions",
        title: "A more intimate, more textured, more alive aesthetic.",
        description:
          "We play with colors, volumes and breathing space to create tables, entrances and settings that instantly elevate how a venue is perceived.",
        image: {
          src: IMG.receptions,
          alt: "Round table set with crystal glasses and a centerpiece of blue, yellow and white flowers.",
        },
      },
      {
        eyebrow: "Brands & venues",
        title: "Brand florals that truly support the image.",
        description:
          "Studios, hotels, shops and collection launches: the arrangements serve the visual world, the photography and the on-site experience with a real sense of rhythm.",
        image: {
          src: IMG.brands,
          alt: "Cut flowers hanging in small glass tubes in front of a white wall.",
        },
      },
    ],
  },
  studio: {
    eyebrow: "Studio",
    title: "A section designed as a studio note, not a list of services.",
    text: "Where a bakery template pushes efficiency, this florist template embraces art direction: more space, more storytelling, more staging, fewer “utilitarian” blocks.",
    notes: [
      "A palette designed around your venue and your light.",
      "A seasonal selection for a more accurate, livelier result.",
      "On-site installation with an art-direction eye.",
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A looser visual rhythm, closer to a studio moodboard.",
    images: [
      {
        src: IMG.composition,
        alt: "Arrangement of dahlias, succulents and cotton bolls in a wooden box on a pale background.",
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
        alt: "Pink tulips in a glass jar tied with a raffia ribbon, on a light background.",
      },
    ],
  },
  reviews: {
    eyebrow: "Testimonials",
    title: "Social proof that extends the world, not just a block of reviews.",
    ratingLabel: "5 out of 5 stars",
    items: [
      {
        name: "Claire & Hugo",
        role: "Castle wedding",
        text: "“Everything felt natural, elegant, perfectly in place. It felt like the venue had always been meant to look like this.”",
      },
      {
        name: "Fashion house",
        role: "Brand launch",
        text: "“The studio created an instantly premium atmosphere. The arrangements were as much décor as visual language.”",
      },
    ],
  },
  contact: {
    eyebrow: "Contact the studio",
    title: "Book a creative conversation.",
    phoneHref: "tel:+33465710034",
    emailHref: "mailto:contact@example.com",
    details: [
      { icon: "mapPin", text: "45 Avenue des Jardins, 69003 Lyon" },
      { icon: "phone", text: "04 65 71 00 34" },
      { icon: "mail", text: "contact@example.com" },
      { icon: "calendar", text: "Consultation within 24 business hours" },
    ],
    panelLabel: "What this template sells",
    panelText:
      "A high-end floral studio, made-to-measure projects, an editorial reading, staged images and a more sensitive relationship with the client. It is deliberately the opposite of the shopkeeper rhythm of a bakery template.",
    quote: "Request a quote",
    call: "Schedule a call",
  },
  footer: {
    text: "Editorial floral studio for weddings, private receptions and brand projects.",
    navLabel: "Navigation",
    narrationLabel: "Storytelling",
    narration:
      "A magazine and portfolio structure, more contemplative and more upscale than utility-focused templates.",
  },
  meta: {
    home: {
      title: "Your business - Artisan florist",
      description:
        "Your business, an artisan florist since 1992. Custom floral designs, bouquets and arrangements for every event.",
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
