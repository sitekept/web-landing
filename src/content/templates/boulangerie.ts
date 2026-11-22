import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « boulangerie » (boulangerie artisanale de quartier, page unique).
 *
 * Toute la copie visible vit ici : bandeau, navigation, sections, `alt`,
 * métadonnées. Les vues (`src/templates/boulangerie/`) n'ont aucun texte en
 * dur. La navigation se fait par ancres (`/boulangerie#vitrine`, ...), les `id`
 * sont dans `src/templates/boulangerie/parts.tsx`.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `BoulangerieCopy`
 * (dérivé de `fr` par `WidenLiterals`).
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais (table `ICONS` dans `parts.tsx`).
 *
 * Images : Unsplash, sans marque, texte lisible ni visage. `alt` dans la copie.
 */

const unsplash = (id: string, rect = "") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80${rect}`;

const IMG = {
  hero: unsplash("1509440159596-0249088772ff"),
  baguette: unsplash("1768203631935-da182455aa6d"),
  campagne: unsplash("1549931319-a545dcf3bc73"),
  croissant: unsplash("1623334044303-241021148842"),
  chausson: unsplash("1607260551049-a70ff6910e24", "&rect=0.05,0.55,0.95,0.42"),
} as const;

const fr = {
  brand: {
    name: "Le Fournil d’Or",
    tagline: "Boulangerie artisanale",
  },
  phone: {
    href: "tel:+33536490012",
    label: "05 36 49 00 12",
  },
  nav: {
    home: "Accueil",
    showcase: "Vitrine du jour",
    services: "Services",
    contact: "Contact",
  },
  topBar: {
    left: "Commande spéciale sous 48h pour événements et buffets.",
    weekdays: "Mar - Sam 6h30 - 19h30",
    sunday: "Dim 7h00 - 13h00",
  },
  common: {
    hours: "Mar - Sam 6h30 - 19h30, Dim 7h00 - 13h00",
    addressShort: "12 Place du Marché, Bordeaux",
    addressFull: "12 Place du Marché, 33000 Bordeaux",
    street: "12 Place du Marché",
    city: "33000 Bordeaux",
    quoteHref: "mailto:contact@fournil.example",
  },
  hero: {
    badge: "Votre fournil de quartier depuis 1978",
    titleStart: "Le commerce",
    titleAccent: "qui donne faim",
    titleEnd: "dès le trottoir.",
    description:
      "Une structure pensée comme un site de commerce local qui vend immédiatement la proximité, la régularité et le plaisir du produit frais. Ici, on pousse la visite en boutique et la commande rapide.",
    seeShowcase: "Voir la vitrine du jour",
    prepareOrder: "Préparer une commande",
    stats: [
      { value: "6h30", label: "Ouverture du fournil" },
      { value: "7j/7", label: "Pains et viennoiseries" },
      { value: "48h", label: "Commandes événementielles" },
    ],
    image: {
      src: IMG.hero,
      alt: "Pains de campagne aux graines et épis de blé posés sur une planche sombre farinée.",
    },
    todayLabel: "Aujourd’hui",
    infoLabel: "Infos pratiques",
  },
  showcase: {
    eyebrow: "Vitrine du jour",
    title: "Les produits qui font entrer en boutique.",
    link: "Commander un assortiment",
    products: [
      {
        name: "Baguette Tradition",
        description: "Levain naturel, croûte dorée, mie alvéolée.",
        price: "1,30 €",
        image: {
          src: IMG.baguette,
          alt: "Baguettes tradition à la croûte dorée, l’une coupée pour montrer la mie alvéolée.",
        },
      },
      {
        name: "Pain de Campagne",
        description: "Fermentation lente et croûte épaisse.",
        price: "4,50 €",
        image: {
          src: IMG.campagne,
          alt: "Pain de campagne en tranches sur une planche en bois.",
        },
      },
      {
        name: "Croissant Pur Beurre",
        description: "Feuilletage croustillant et cœur fondant.",
        price: "1,20 €",
        image: {
          src: IMG.croissant,
          alt: "Croissants dorés alignés sur une plaque tapissée de papier de cuisson.",
        },
      },
      {
        name: "Chausson aux Pommes",
        description: "Compote maison, cannelle douce, pâte brillante.",
        price: "2,50 €",
        image: {
          src: IMG.chausson,
          alt: "Chausson aux pommes doré et strié, posé sur une assiette blanche à liseré noir.",
        },
      },
    ],
  },
  why: {
    eyebrow: "Pourquoi revenir",
    title: "Une page pensée comme un vrai commerce de proximité.",
    points: [
      {
        icon: "award",
        title: "Fabrication maison",
        text: "Chaque fournée est préparée sur place, tôt le matin, avec des méthodes artisanales assumées.",
      },
      {
        icon: "users",
        title: "Vie de quartier",
        text: "Une adresse pensée pour le quotidien, les habitudes locales et les commandes familiales.",
      },
      {
        icon: "calendar",
        title: "Commandes spéciales",
        text: "Brunchs, événements, plateaux et grandes quantités préparés sur demande.",
      },
    ],
    panel: {
      eyebrow: "Savoir-faire",
      title: "Une adresse qui donne confiance avant même la première commande.",
      stats: [
        { icon: "award", value: "46", label: "années de présence locale" },
        { icon: "users", value: "5000+", label: "clients réguliers fidélisés" },
      ],
      text: "Nous utilisons exclusivement des farines françaises de qualité, du levain naturel et des fermentations lentes pour retrouver des goûts francs, une croûte juste et une vraie régularité.",
    },
  },
  services: {
    eyebrow: "Services",
    title: "Commandes faciles, usages clairs, promesse immédiate.",
    items: [
      {
        icon: "gift",
        title: "Petit-déjeuner de bureau",
        text: "Assortiments de viennoiseries et pains frais livrés pour vos équipes.",
      },
      {
        icon: "sparkles",
        title: "Buffets & événements",
        text: "Formules sur mesure pour anniversaires, baptêmes et réceptions.",
      },
      {
        icon: "phone",
        title: "Retrait express",
        text: "Réservation simple par téléphone pour éviter les ruptures du matin.",
      },
    ],
  },
  reviews: {
    eyebrow: "Avis du quartier",
    title: "Une confiance construite sur la régularité.",
    ratingLabel: "5 étoiles sur 5",
    items: [
      {
        name: "Françoise M.",
        role: "Cliente fidèle",
        text: "« La meilleure boulangerie du quartier. Tout donne envie, et on sent le vrai travail artisanal. »",
      },
      {
        name: "Philippe D.",
        role: "Habitué du samedi",
        text: "« Le pain de campagne est superbe et les viennoiseries du matin sont toujours impeccables. »",
      },
    ],
  },
  contact: {
    eyebrow: "Venir / appeler",
    title: "On simplifie la commande et la visite.",
    quick: {
      eyebrow: "Commande rapide",
      title: "Réservez vos produits avant le passage en boutique.",
      text: "Une structure de site pensée pour convertir tout de suite : commande événementielle, retrait, buffet ou simple réservation matinale.",
      order: "Passer commande",
      quote: "Demander un devis",
    },
  },
  footer: {
    text: "Boulangerie artisanale de quartier, commandes simples, retrait rapide et qualité régulière.",
    navLabel: "Navigation",
    shopLabel: "Boutique",
  },
  meta: {
    home: {
      title: "Le Fournil d’Or - Boulangerie Artisanale & Pain Traditionnel",
      description:
        "Le Fournil d’Or, maître boulanger depuis 1978. Pain traditionnel, baguettes, viennoiseries et spécialités artisanales.",
    },
  },
} as const;

type FrCopy = typeof fr;

/** Type de la copie, dérivé du français (clés, longueurs de listes, clés `icon`). */
export type BoulangerieCopy = WidenLiterals<FrCopy>;

/** Clé d'une icône utilisée dans la copie (table dans `parts.tsx`). */
export type BoulangerieIconKey = TemplateIconKey<BoulangerieCopy>;

const en: BoulangerieCopy = {
  brand: {
    name: "Your business",
    tagline: "Artisan bakery",
  },
  phone: {
    href: "tel:+33536490012",
    label: "05 36 49 00 12",
  },
  nav: {
    home: "Home",
    showcase: "Today’s showcase",
    services: "Services",
    contact: "Contact",
  },
  topBar: {
    left: "Special orders with 48 hours’ notice for events and buffets.",
    weekdays: "Tue-Sat 6:30 a.m.-7:30 p.m.",
    sunday: "Sun 7:00 a.m.-1:00 p.m.",
  },
  common: {
    hours: "Tue-Sat 6:30 a.m.-7:30 p.m., Sun 7:00 a.m.-1:00 p.m.",
    addressShort: "12 Place du Marché, Bordeaux",
    addressFull: "12 Place du Marché, 33000 Bordeaux",
    street: "12 Place du Marché",
    city: "33000 Bordeaux",
    quoteHref: "mailto:contact@example.com",
  },
  hero: {
    badge: "Your neighborhood bakery since 1978",
    titleStart: "The shop",
    titleAccent: "that makes you hungry",
    titleEnd: "from the sidewalk.",
    description:
      "A layout built like a local shop’s website, one that instantly sells closeness, consistency and the pleasure of fresh products. Here, we push store visits and quick ordering.",
    seeShowcase: "See today’s showcase",
    prepareOrder: "Plan an order",
    stats: [
      { value: "6:30 a.m.", label: "Bakery opens" },
      { value: "7 days", label: "Breads and pastries" },
      { value: "48 hrs", label: "Event orders" },
    ],
    image: {
      src: IMG.hero,
      alt: "Seeded country loaves and ears of wheat on a dark floured board.",
    },
    todayLabel: "Today",
    infoLabel: "Practical info",
  },
  showcase: {
    eyebrow: "Today’s showcase",
    title: "The products that draw people into the shop.",
    link: "Order an assortment",
    products: [
      {
        name: "Traditional Baguette",
        description: "Natural sourdough, golden crust, open crumb.",
        price: "€1.30",
        image: {
          src: IMG.baguette,
          alt: "Golden-crusted traditional baguettes, one cut open to show the airy crumb.",
        },
      },
      {
        name: "Country Loaf",
        description: "Slow fermentation and a thick crust.",
        price: "€4.50",
        image: {
          src: IMG.campagne,
          alt: "Sliced country loaf on a wooden board.",
        },
      },
      {
        name: "All-Butter Croissant",
        description: "Crisp, flaky layers and a melting center.",
        price: "€1.20",
        image: {
          src: IMG.croissant,
          alt: "Golden croissants lined up on a tray covered with baking paper.",
        },
      },
      {
        name: "Apple Turnover",
        description: "Homemade compote, gentle cinnamon, shiny pastry.",
        price: "€2.50",
        image: {
          src: IMG.chausson,
          alt: "Golden, scored apple turnover on a white plate with a black rim.",
        },
      },
    ],
  },
  why: {
    eyebrow: "Why come back",
    title: "A page designed like a true neighborhood shop.",
    points: [
      {
        icon: "award",
        title: "Homemade",
        text: "Every batch is made on site, early in the morning, with proudly artisan methods.",
      },
      {
        icon: "users",
        title: "Neighborhood life",
        text: "An address designed for everyday life, local habits and family orders.",
      },
      {
        icon: "calendar",
        title: "Special orders",
        text: "Brunches, events, platters and large quantities prepared on request.",
      },
    ],
    panel: {
      eyebrow: "Know-how",
      title: "An address you can trust before your very first order.",
      stats: [
        { icon: "award", value: "46", label: "years of local presence" },
        { icon: "users", value: "5,000+", label: "loyal regular customers" },
      ],
      text: "We use only quality French flours, natural sourdough and slow fermentation to bring back honest flavors, the right crust and real consistency.",
    },
  },
  services: {
    eyebrow: "Services",
    title: "Easy orders, clear uses, an immediate promise.",
    items: [
      {
        icon: "gift",
        title: "Office breakfast",
        text: "Assortments of pastries and fresh bread delivered for your teams.",
      },
      {
        icon: "sparkles",
        title: "Buffets & events",
        text: "Custom packages for birthdays, christenings and receptions.",
      },
      {
        icon: "phone",
        title: "Express pickup",
        text: "Simple phone reservations to avoid the morning sell-outs.",
      },
    ],
  },
  reviews: {
    eyebrow: "Neighborhood reviews",
    title: "Trust built on consistency.",
    ratingLabel: "5 out of 5 stars",
    items: [
      {
        name: "Françoise M.",
        role: "Loyal customer",
        text: "“The best bakery in the neighborhood. Everything looks tempting, and you can feel the real craftsmanship.”",
      },
      {
        name: "Philippe D.",
        role: "Saturday regular",
        text: "“The country loaf is superb and the morning pastries are always flawless.”",
      },
    ],
  },
  contact: {
    eyebrow: "Visit / call",
    title: "We make ordering and visiting simple.",
    quick: {
      eyebrow: "Quick order",
      title: "Reserve your products before you stop by the shop.",
      text: "A site structure designed to convert right away: event orders, pickup, buffets or a simple morning reservation.",
      order: "Place an order",
      quote: "Request a quote",
    },
  },
  footer: {
    text: "Neighborhood artisan bakery, simple orders, fast pickup and consistent quality.",
    navLabel: "Navigation",
    shopLabel: "Shop",
  },
  meta: {
    home: {
      title: "Your business - Artisan bakery",
      description:
        "Master baker since 1978. Traditional bread, baguettes, pastries and artisan specialties.",
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type BoulangeriePage = keyof BoulangerieCopy["meta"];

export const boulangerie: TemplateDefinition<"boulangerie", BoulangerieCopy> = {
  slug: "boulangerie",
  /**
   * Palette de boulangerie : fonds crème (surface, teinte, blanc), encre brun
   * pain grillé, accent orange brûlé (boutons, sur-titres : 4,5:1 minimum) et
   * fond inverse brun foncé. Instrument Serif en affichage, Inter en texte,
   * rayons très arrondis comme l'ancienne démo.
   */
  theme: {
    surface: "oklch(0.987 0.012 80)",
    raised: "oklch(1 0 0)",
    tint: "oklch(0.975 0.024 80)",
    ink: "oklch(0.337 0.059 53)",
    inkMuted: "oklch(0.45 0.06 52)",
    eyebrow: "oklch(0.52 0.17 38)",
    eyebrowInverse: "oklch(0.901 0.073 71)",
    line: "oklch(0.91 0.07 88)",
    accent: "oklch(0.52 0.17 38)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.337 0.059 53)",
    inverseInk: "oklch(0.987 0.012 80)",
    radius: "1.75rem",
    fontDisplay:
      "var(--font-display-serif), ui-serif, Georgia, 'Times New Roman', serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 400,
    shadowSm: "0 1px 2px color-mix(in oklch, var(--tpl-ink) 8%, transparent)",
    shadowLg:
      "0 26px 60px -28px color-mix(in oklch, var(--tpl-ink) 34%, transparent)",
  },
  paths: {
    home: "/boulangerie",
  },
  copy: { fr, en },
};
