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
    tagline: "Artisan boulanger",
  },
  phone: {
    href: "tel:+33199000066",
    label: "01 99 00 00 66",
  },
  nav: {
    home: "Accueil",
    showcase: "Vitrine du jour",
    services: "Services",
    contact: "Contact",
  },
  topBar: {
    left: "Petits-déjeuners de bureau et buffets livrés sur commande.",
    weekdays: "Mar.⁠–⁠sam. 6 h 30⁠–⁠19 h 30",
    sunday: "Dim. 7 h⁠–⁠13 h",
  },
  common: {
    hours: "Mar.⁠–⁠sam. 6 h 30⁠–⁠19 h 30, dim. 7 h⁠–⁠13 h",
    addressShort: "12 rue de l’Exemple, Votre ville",
    addressFull: "12 rue de l’Exemple, 00000 Votre ville",
    street: "12 rue de l’Exemple",
    city: "00000 Votre ville",
    quoteHref: "mailto:contact@fournil.example",
  },
  hero: {
    badge: "Pétri et cuit sur place depuis 1978",
    titleStart: "La boulangerie",
    titleAccent: "qui donne faim",
    titleEnd: "dès le trottoir.",
    description:
      "Baguettes au levain, pains de campagne et croissants pur beurre sortent du four toute la matinée. Passez en boutique ou appelez pour qu’on vous les mette de côté.",
    seeShowcase: "Voir les produits",
    prepareOrder: "Préparer une commande",
    stats: [
      { value: "6 h 30", label: "Ouverture des portes" },
      { value: "6 j/7", label: "Du mardi au dimanche" },
      { value: "48 h", label: "Pour préparer un buffet" },
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
    title: "Les incontournables du comptoir.",
    link: "Commander un assortiment",
    products: [
      {
        name: "Baguette tradition",
        description: "Levain naturel, croûte dorée, mie alvéolée.",
        price: "1,30 €",
        image: {
          src: IMG.baguette,
          alt: "Baguettes tradition à la croûte dorée, l’une coupée pour montrer la mie alvéolée.",
        },
      },
      {
        name: "Pain de campagne",
        description: "Fermentation lente et croûte épaisse.",
        price: "4,50 €",
        image: {
          src: IMG.campagne,
          alt: "Pain de campagne en tranches sur une planche en bois.",
        },
      },
      {
        name: "Croissant pur beurre",
        description: "Feuilletage croustillant et cœur moelleux.",
        price: "1,20 €",
        image: {
          src: IMG.croissant,
          alt: "Croissants dorés alignés sur une plaque tapissée de papier de cuisson.",
        },
      },
      {
        name: "Chausson aux pommes",
        description: "Compote maison, pointe de cannelle, pâte dorée.",
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
    title: "Le même bon pain, à la même heure, six matins sur sept.",
    points: [
      {
        icon: "award",
        title: "Tout est fait ici",
        text: "Pâtes pétries la veille et cuites sur place dès 4 h, sans surgelé ni pâte industrielle.",
      },
      {
        icon: "users",
        title: "Votre pain mis de côté",
        text: "Donnez-nous une fois votre commande du samedi : nous la préparons chaque semaine à votre nom.",
      },
      {
        icon: "calendar",
        title: "Grandes quantités",
        text: "Brunchs, plateaux de mini-viennoiseries et pains spéciaux, de 10 à 100 personnes.",
      },
    ],
    panel: {
      eyebrow: "Savoir-faire",
      title: "Un pain qui se garde trois jours.",
      stats: [
        { icon: "award", value: "1978", label: "année de création" },
        { icon: "users", value: "5 000+", label: "clients réguliers" },
      ],
      text: "Farine française moulue sur meule, levain nourri deux fois par jour et 24 h de fermentation : c’est ce qui lui donne son goût et sa tenue.",
    },
  },
  services: {
    eyebrow: "Services",
    title: "Pour vos équipes, vos fêtes et vos matins pressés.",
    items: [
      {
        icon: "gift",
        title: "Petit-déjeuner de bureau",
        text: "Viennoiseries, pain frais et jus de fruits livrés avant 9 h, dès 10 personnes.",
      },
      {
        icon: "sparkles",
        title: "Buffets & réceptions",
        text: "Mini-sandwichs, plateaux salés et sucrés pour anniversaires, baptêmes et communions.",
      },
      {
        icon: "phone",
        title: "Retrait express",
        text: "Commandez par téléphone avant 11 h : votre sac vous attend en caisse, sans faire la queue.",
      },
    ],
  },
  reviews: {
    eyebrow: "Avis du quartier",
    title: "Ce qu’en disent les habitués.",
    ratingLabel: "5 étoiles sur 5",
    items: [
      {
        name: "Françoise M.",
        role: "Cliente fidèle",
        text: "« Ma baguette du matin m’attend à 7 h, toujours aussi croustillante. Et les croissants du dimanche sont devenus un rituel. »",
      },
      {
        name: "Philippe D.",
        role: "Habitué du samedi",
        text: "« Leur pain de campagne est superbe, et le buffet de notre baptême était parfait, livré à l’heure. »",
      },
    ],
  },
  contact: {
    eyebrow: "Nous trouver",
    title: "Adresse, horaires et téléphone.",
    quick: {
      eyebrow: "À l’avance",
      title: "Appelez la veille, retirez le lendemain.",
      text: "Une baguette réservée, un gâteau ou un plateau de viennoiseries : un appel ou un message suffit, nous confirmons dans la journée.",
      order: "Passer commande",
      quote: "Demander un devis",
    },
  },
  footer: {
    text: "Pain au levain, viennoiseries pur beurre et buffets sur commande, du mardi au dimanche.",
    navLabel: "Navigation",
    shopLabel: "La boutique",
  },
  meta: {
    home: {
      title: "Le Fournil d’Or - Boulangerie artisanale depuis 1978",
      description:
        "Le Fournil d’Or, boulangerie de quartier depuis 1978 : baguettes au levain, pains de campagne, viennoiseries pur beurre et buffets sur commande.",
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
    tagline: "Bread & pastries",
  },
  phone: {
    href: "tel:+33199000066",
    label: "01 99 00 00 66",
  },
  nav: {
    home: "Home",
    showcase: "Today’s bakes",
    services: "Services",
    contact: "Contact",
  },
  topBar: {
    left: "Office breakfasts and buffets delivered to order.",
    weekdays: "Tue⁠–⁠Sat 6:30 a.m.⁠–⁠7:30 p.m.",
    sunday: "Sun 7 a.m.⁠–⁠1 p.m.",
  },
  common: {
    hours: "Tue⁠–⁠Sat 6:30 a.m.⁠–⁠7:30 p.m., Sun 7 a.m.⁠–⁠1 p.m.",
    addressShort: "12 Example Street, Your city",
    addressFull: "12 Example Street, 00000 Your city",
    street: "12 Example Street",
    city: "00000 Your city",
    quoteHref: "mailto:contact@example.com",
  },
  hero: {
    badge: "Baking on site since 1978",
    titleStart: "The bakery",
    titleAccent: "you can smell",
    titleEnd: "from the sidewalk.",
    description:
      "Sourdough baguettes, country loaves and all-butter croissants come out of the oven all morning long. Stop in, or call ahead and we’ll set them aside.",
    seeShowcase: "See what’s fresh today",
    prepareOrder: "Order ahead",
    stats: [
      { value: "6:30", label: "Doors open" },
      { value: "6 days", label: "Open Tuesday to Sunday" },
      { value: "2 days", label: "To prepare a buffet" },
    ],
    image: {
      src: IMG.hero,
      alt: "Seeded country loaves and stalks of wheat on a dark, floured board.",
    },
    todayLabel: "Today",
    infoLabel: "Hours & location",
  },
  showcase: {
    eyebrow: "Today’s bakes",
    title: "Counter favorites.",
    link: "Order an assortment",
    products: [
      {
        name: "Traditional Baguette",
        description: "Natural sourdough, golden crust, airy crumb.",
        price: "€1.30",
        image: {
          src: IMG.baguette,
          alt: "Golden-crusted baguettes, one cut open to show the airy crumb.",
        },
      },
      {
        name: "Country Loaf",
        description: "Slow-fermented, with a thick crust.",
        price: "€4.50",
        image: {
          src: IMG.campagne,
          alt: "Sliced country loaf on a wooden board.",
        },
      },
      {
        name: "All-Butter Croissant",
        description: "Crisp, flaky layers and a soft center.",
        price: "€1.20",
        image: {
          src: IMG.croissant,
          alt: "Golden croissants lined up on a sheet pan lined with parchment paper.",
        },
      },
      {
        name: "Apple Turnover",
        description: "House-made apple filling, a hint of cinnamon, golden crust.",
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
    title: "The same good bread, at the same time, six mornings a week.",
    points: [
      {
        icon: "award",
        title: "Made right here",
        text: "Dough mixed the night before and baked on site from 4 a.m., nothing frozen, nothing factory-made.",
      },
      {
        icon: "users",
        title: "Your bread, set aside",
        text: "Tell us your Saturday order once, and we’ll have it ready under your name every week.",
      },
      {
        icon: "calendar",
        title: "Large orders",
        text: "Brunches, mini-pastry platters and specialty breads for 10 to 100 people.",
      },
    ],
    panel: {
      eyebrow: "Our craft",
      title: "Bread that stays fresh for three days.",
      stats: [
        { icon: "award", value: "1978", label: "year founded" },
        { icon: "users", value: "5,000+", label: "regular customers" },
      ],
      text: "Stone-ground French flour, a starter fed twice a day and a 24-hour rise: that’s where the flavor and the long shelf life come from.",
    },
  },
  services: {
    eyebrow: "Services",
    title: "For your team, your parties and your busy mornings.",
    items: [
      {
        icon: "gift",
        title: "Office breakfast",
        text: "Pastries, fresh bread and juice delivered by 9 a.m., for groups of 10 or more.",
      },
      {
        icon: "sparkles",
        title: "Buffets & receptions",
        text: "Finger sandwiches, savory platters and sweet trays for birthdays, christenings and communions.",
      },
      {
        icon: "phone",
        title: "Express pickup",
        text: "Call before 11 a.m. and your order will be waiting at the register, no line.",
      },
    ],
  },
  reviews: {
    eyebrow: "Neighborhood reviews",
    title: "What our regulars say.",
    ratingLabel: "5 out of 5 stars",
    items: [
      {
        name: "Françoise M.",
        role: "Longtime customer",
        text: "“My morning baguette is waiting for me at 7, always just as crisp. And Sunday croissants have become a ritual.”",
      },
      {
        name: "Philippe D.",
        role: "Saturday regular",
        text: "“Their country loaf is superb, and the buffet for our christening was perfect and delivered on time.”",
      },
    ],
  },
  contact: {
    eyebrow: "Find us",
    title: "Address, hours and phone.",
    quick: {
      eyebrow: "Plan ahead",
      title: "Call today, pick up tomorrow.",
      text: "A baguette on hold, a cake or a tray of pastries: one call or message is all it takes, and we confirm the same day.",
      order: "Place an order",
      quote: "Request a quote",
    },
  },
  footer: {
    text: "Sourdough bread, all-butter pastries and buffets to order, Tuesday through Sunday.",
    navLabel: "Navigation",
    shopLabel: "Visit us",
  },
  meta: {
    home: {
      title: "Your business - Artisan bakery since 1978",
      description:
        "Your business, a neighborhood bakery since 1978: sourdough baguettes, country loaves, all-butter pastries and buffets made to order.",
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
