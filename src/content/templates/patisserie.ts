import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « patisserie » (maison de pâtisserie haut de gamme, page unique).
 *
 * Anciennement `pattiserie` (faute de frappe dans l'adresse) : l'ancienne URL
 * redirige vers `/patisserie`.
 *
 * Toute la copie visible vit ici : navigation, sections, `alt`, métadonnées.
 * Les vues (`src/templates/patisserie/`) n'ont aucun texte en dur. La
 * navigation se fait par ancres (`/patisserie#collections`, ...), les `id` sont
 * dans `src/templates/patisserie/parts.tsx`.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `PatisserieCopy`
 * (dérivé de `fr` par `WidenLiterals`).
 *
 * Images : Unsplash, sans marque, texte lisible ni visage. `alt` dans la copie.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: unsplash("1694067609280-5837ebf9e64f"),
  entremets: unsplash("1761637604927-e3656dc81383"),
  eclair: unsplash("1784841399281-40c323e95339"),
  macarons: unsplash("1702745571735-937e55652374"),
  tartelettes: unsplash("1670819916757-e8d5935a6c65"),
  mariage: unsplash("1604702433171-33756f3f3825"),
  individuel: unsplash("1759146233677-292a2f1a2236"),
} as const;

const fr = {
  brand: {
    name: "Pâtisserie Douceur",
    tagline: "Maison de création",
  },
  nav: {
    home: "Maison",
    collections: "Collections",
    signature: "Signature",
    contact: "Conciergerie",
    order: "Commander",
  },
  hero: {
    badge: "Artisan pâtissier depuis 1985",
    titleStart: "Une template pensée comme",
    titleAccent: "une maison premium",
    titleEnd: "et non comme un studio ni un commerce local.",
    description:
      "Ici, la structure vend la rareté, la signature et la précision. On avance par collections, pièces emblématiques, occasions d’exception et service de commande sur mesure.",
    image: {
      src: IMG.hero,
      alt: "Entremets au chocolat couronné de framboises, de myrtilles, de figues et de pétales de rose, sur un présentoir sombre posé sur une mousseline blanche.",
    },
    panel: {
      eyebrow: "Maison d’exception",
      title: "Des créations qui tiennent leur place sur une table d’exception.",
      text: "Cette page assume le langage du luxe : moins de blocs, plus de verticalité, plus d’espace, plus de statut.",
      stats: [
        { value: "1985", label: "naissance de la maison" },
        { value: "15+", label: "distinctions reçues" },
        { value: "48h", label: "pour commande sur mesure" },
      ],
    },
  },
  collections: {
    eyebrow: "Collections",
    title:
      "Une lecture par univers de création, pas par simple liste de produits.",
    items: [
      {
        title: "Entremets signature",
        note: "Des pièces pensées comme des collections saisonnières.",
        description:
          "Montages précis, textures nettes, glaçages lumineux et équilibre des saveurs pour une lecture plus couture que simplement gourmande.",
        image: {
          src: IMG.entremets,
          alt: "Entremets en tranche aux couches de biscuit, de crème et de gelée de fruits rouges, garni de groseilles et d’une mûre, sur une assiette claire.",
        },
      },
      {
        title: "Pâtisseries individuelles",
        note: "Des formats raffinés pour boutique, réception ou gifting.",
        description:
          "Éclairs, tartelettes, choux et créations courtes avec finitions propres, silhouettes lisibles et goût de maison.",
        image: {
          src: IMG.eclair,
          alt: "Éclair au chocolat parsemé d’éclats, servi sur une assiette avec des baies rouges et des mûres.",
        },
      },
    ],
  },
  signature: {
    eyebrow: "Signature",
    title: "Les pièces emblématiques sont montrées comme des icônes de maison.",
    text: "Là où `fleuriste` raconte un portfolio éditorial et `boulangerie` un commerce de proximité, `patisserie` doit exprimer une autorité plus statutaire, presque cérémonielle.",
    items: [
      {
        name: "Opéra Royal",
        detail: "Café grand cru, ganache noire, biscuit Joconde.",
        price: "45 €",
      },
      {
        name: "Saint-Honoré Atelier",
        detail: "Vanille, caramel blond, pâte feuilletée croustillante.",
        price: "42 €",
      },
      {
        name: "Tarte Yuzu",
        detail: "Agrumes tendus, meringue satinée, pâte fine.",
        price: "7 €",
      },
    ],
  },
  occasions: {
    eyebrow: "Occasions",
    title:
      "Une pâtisserie pensée pour les moments qui demandent plus qu’un simple dessert.",
    panel: {
      eyebrow: "Maison",
      title:
        "Nous travaillons la table, le rythme du repas et la place de la pièce.",
      text: "Le site n’est pas structuré comme un menu de boutique. Il met d’abord en avant la portée symbolique de la création et le service qui l’accompagne.",
    },
    items: [
      "Mariages et pièces de réception",
      "Anniversaires et commandes sur mesure",
      "Maisons de luxe, gifting et événements privés",
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Une galerie plus précieuse que démonstrative.",
    images: [
      {
        src: IMG.macarons,
        alt: "Macarons violet, rose et chocolat-noisette empilés sur un plan de travail clair.",
      },
      {
        src: IMG.tartelettes,
        alt: "Tartelettes aux myrtilles, framboises, kiwi et pomme en rose, vues du dessus sur une ardoise sombre.",
      },
      {
        src: IMG.mariage,
        alt: "Gâteau de mariage blanc à deux étages, décoré d’anémones et de petites fleurs, sur un présentoir en bois, en plein air.",
      },
      {
        src: IMG.individuel,
        alt: "Entremets individuel aux couches de mousse au chocolat et de crème claire, couronné de mûres, sur une petite assiette claire avec une fourchette.",
      },
    ],
  },
  reviews: {
    eyebrow: "Témoignages",
    title: "Une preuve sociale traitée comme validation de maison.",
    ratingLabel: "5 étoiles sur 5",
    items: [
      {
        name: "Élise B.",
        role: "Commande mariage",
        text: "« Le gâteau n’était pas seulement excellent, il donnait la tonalité entière de la réception. Une présence presque statutaire. »",
      },
      {
        name: "Maison V.",
        role: "Événement privé",
        text: "« Une pâtisserie qui comprend le langage du premium : précision, retenue, élégance et impact immédiat sur table. »",
      },
    ],
  },
  contact: {
    eyebrow: "Conciergerie",
    title: "Commander une création pour une date, un lieu, une table.",
    address: "123 Rue de la Gourmandise, 75001 Paris",
    hours: "Mardi - Samedi 7h00 - 19h30, Dimanche 8h00 - 13h00",
    phone: { href: "tel:+33199000055", label: "01 99 00 00 55" },
    email: {
      href: "mailto:contact@patisserie-douceur.example",
      label: "contact@patisserie-douceur.example",
    },
    special: "Commandes spéciales à partir de 48h",
    panel: {
      eyebrow: "Ce que vend cette structure",
      text: "Une maison premium qui assume la distinction, la précision et la valeur perçue. Ce n’est ni un site commerce rapide comme `boulangerie`, ni un portfolio studio comme `fleuriste`.",
      request: "Demander une création",
      appointment: "Prendre rendez-vous",
      back: "Revoir les collections",
    },
  },
  footer: {
    text: "Maison de création pâtissière pour tables d’exception, gifting premium et commandes sur mesure.",
    navLabel: "Navigation",
    positionLabel: "Positionnement",
    positionText:
      "Une architecture plus statutaire, plus sombre et plus cérémonielle que les deux autres templates.",
  },
  meta: {
    home: {
      title:
        "Pâtisserie Douceur - Pâtisserie Artisanale & Créations Gourmandes",
      description:
        "Pâtisserie Douceur, artisan pâtissier depuis 1985. Spécialités françaises, entremets, gâteaux personnalisés et pâtisseries individuelles.",
    },
  },
} as const;

type FrCopy = typeof fr;

/** Type de la copie, dérivé du français (clés, longueurs de listes). */
export type PatisserieCopy = WidenLiterals<FrCopy>;

const en: PatisserieCopy = {
  brand: {
    name: "Your business",
    tagline: "House of creation",
  },
  nav: {
    home: "House",
    collections: "Collections",
    signature: "Signature",
    contact: "Concierge",
    order: "Order",
  },
  hero: {
    badge: "Artisan pastry chef since 1985",
    titleStart: "A template designed as",
    titleAccent: "a premium house",
    titleEnd: "and not as a studio or a local shop.",
    description:
      "Here, the structure sells rarity, signature and precision. We move through collections, emblematic pieces, exceptional occasions and a made-to-order service.",
    image: {
      src: IMG.hero,
      alt: "Chocolate entremets crowned with raspberries, blueberries, figs and rose petals, on a dark serving stand set on white muslin.",
    },
    panel: {
      eyebrow: "House of distinction",
      title: "Creations that hold their own on an exceptional table.",
      text: "This page speaks the language of luxury: fewer blocks, more verticality, more space, more status.",
      stats: [
        { value: "1985", label: "the house was born" },
        { value: "15+", label: "awards received" },
        { value: "48 hrs", label: "for a custom order" },
      ],
    },
  },
  collections: {
    eyebrow: "Collections",
    title: "Read by universe of creation, not as a simple product list.",
    items: [
      {
        title: "Signature entremets",
        note: "Pieces designed like seasonal collections.",
        description:
          "Precise assembly, clean textures, luminous glazes and balanced flavors, for a look that is more couture than merely gourmet.",
        image: {
          src: IMG.entremets,
          alt: "Slice of entremets with layers of sponge, cream and red fruit jelly, topped with red currants and a blackberry, on a pale plate.",
        },
      },
      {
        title: "Individual pastries",
        note: "Refined formats for the shop, receptions or gifting.",
        description:
          "Éclairs, tartlets, choux and small creations with clean finishes, legible silhouettes and the taste of the house.",
        image: {
          src: IMG.eclair,
          alt: "Chocolate éclair sprinkled with chocolate shards, served on a plate with red berries and blackberries.",
        },
      },
    ],
  },
  signature: {
    eyebrow: "Signature",
    title: "Emblematic pieces are shown as icons of the house.",
    text: "Where the florist template tells an editorial portfolio story and the bakery template a neighborhood shop, the pastry shop template has to express a more statuesque, almost ceremonial authority.",
    items: [
      {
        name: "Royal Opéra",
        detail: "Grand cru coffee, dark ganache, Joconde sponge.",
        price: "€45",
      },
      {
        name: "Atelier Saint-Honoré",
        detail: "Vanilla, blond caramel, crisp puff pastry.",
        price: "€42",
      },
      {
        name: "Yuzu Tart",
        detail: "Tangy citrus, satiny meringue, thin pastry.",
        price: "€7",
      },
    ],
  },
  occasions: {
    eyebrow: "Occasions",
    title:
      "A pastry shop made for moments that call for more than a simple dessert.",
    panel: {
      eyebrow: "House",
      title:
        "We work on the table, the rhythm of the meal and the place of the piece.",
      text: "The site is not structured like a shop menu. It puts the symbolic weight of the creation first, along with the service that comes with it.",
    },
    items: [
      "Weddings and reception centerpieces",
      "Birthdays and custom orders",
      "Luxury houses, gifting and private events",
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A gallery that is more precious than showy.",
    images: [
      {
        src: IMG.macarons,
        alt: "Purple, pink and chocolate-hazelnut macarons stacked on a light countertop.",
      },
      {
        src: IMG.tartelettes,
        alt: "Blueberry, raspberry, kiwi and apple-rose tartlets seen from above on a dark slate surface.",
      },
      {
        src: IMG.mariage,
        alt: "Two-tier white wedding cake decorated with anemones and small flowers, on a wooden cake stand outdoors.",
      },
      {
        src: IMG.individuel,
        alt: "Individual entremets with layers of chocolate mousse and light cream, topped with blackberries, on a small pale plate with a fork.",
      },
    ],
  },
  reviews: {
    eyebrow: "Testimonials",
    title: "Social proof treated as the house’s seal of approval.",
    ratingLabel: "5 out of 5 stars",
    items: [
      {
        name: "Elise B.",
        role: "Wedding order",
        text: "“The cake wasn’t just excellent, it set the tone for the entire reception. An almost statuesque presence.”",
      },
      {
        name: "V. Events",
        role: "Private event",
        text: "“A pastry shop that understands the language of premium: precision, restraint, elegance and immediate impact on the table.”",
      },
    ],
  },
  contact: {
    eyebrow: "Concierge",
    title: "Order a creation for a date, a venue, a table.",
    address: "123 Rue de la Gourmandise, 75001 Paris",
    hours: "Tuesday - Saturday 7:00 AM - 7:30 PM, Sunday 8:00 AM - 1:00 PM",
    phone: { href: "tel:+33199000055", label: "01 99 00 00 55" },
    email: {
      href: "mailto:contact@example.com",
      label: "contact@example.com",
    },
    special: "Special orders with 48 hours’ notice",
    panel: {
      eyebrow: "What this structure sells",
      text: "A premium house that embraces distinction, precision and perceived value. It is neither a quick-commerce site like the bakery template, nor a studio portfolio like the florist template.",
      request: "Request a creation",
      appointment: "Book an appointment",
      back: "Back to the collections",
    },
  },
  footer: {
    text: "A pastry house of creation for exceptional tables, premium gifting and made-to-order cakes.",
    navLabel: "Navigation",
    positionLabel: "Positioning",
    positionText:
      "A more statuesque, darker and more ceremonial architecture than the other two templates.",
  },
  meta: {
    home: {
      title: "Your business - Artisan pastry shop",
      description:
        "Artisan pastry chef since 1985. French specialties, entremets, custom cakes and individual pastries.",
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type PatisseriePage = keyof PatisserieCopy["meta"];

export const patisserie: TemplateDefinition<"patisserie", PatisserieCopy> = {
  slug: "patisserie",
  /**
   * Palette « maison de nuit » : fond brun très sombre, texte crème, accent or
   * rosé (boutons, filets, prix) et section inverse crème en contrepoint.
   * Instrument Serif en affichage (graisse 400 seule), Inter en texte, rayons
   * très arrondis comme l'ancienne démo. Sur les sections crème (`inverse`),
   * le sur-titre passe en bronze foncé (4,5:1 minimum).
   */
  theme: {
    surface: "oklch(0.164 0.011 53)",
    raised: "oklch(0.185 0.014 51)",
    tint: "oklch(0.191 0.017 53)",
    ink: "oklch(0.953 0.014 68)",
    inkMuted: "oklch(0.78 0.02 68)",
    eyebrow: "oklch(0.69 0.073 71)",
    eyebrowInverse: "oklch(0.5 0.075 66)",
    line: "color-mix(in oklch, oklch(0.953 0.014 68) 12%, transparent)",
    accent: "oklch(0.784 0.082 73)",
    accentInk: "oklch(0.191 0.017 53)",
    inverse: "oklch(0.949 0.013 71)",
    inverseInk: "oklch(0.225 0.021 50)",
    radius: "2rem",
    fontDisplay:
      "var(--font-display-serif), ui-serif, Georgia, 'Times New Roman', serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 400,
    shadowSm: "0 18px 50px -28px oklch(0.2 0.02 50 / 0.3)",
    shadowLg: "0 22px 60px -30px oklch(0.2 0.02 50 / 0.45)",
  },
  paths: {
    home: "/patisserie",
  },
  copy: { fr, en },
};
