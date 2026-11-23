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
    tagline: "Artisan pâtissier",
  },
  nav: {
    home: "Accueil",
    collections: "Collections",
    signature: "Signatures",
    contact: "Contact",
    order: "Commander",
  },
  hero: {
    badge: "Ouvert du mardi au dimanche",
    titleStart: "Des entremets de saison,",
    titleAccent: "faits à la main",
    titleEnd: "pour vos repas de fête.",
    description:
      "Éclairs et tartelettes à l’unité, gâteaux de 6 à 10 parts : à emporter en boutique ou à réserver pour un anniversaire, un mariage ou un dîner.",
    image: {
      src: IMG.hero,
      alt: "Entremets au chocolat couronné de framboises, de myrtilles, de figues et de pétales de rose, sur un présentoir sombre posé sur une mousseline blanche.",
    },
    panel: {
      eyebrow: "Le jour du retrait",
      title: "Aussi beau sur votre table que dans notre vitrine.",
      text: "Montage le matin même, puis une boîte rigide qui se transporte sans risque jusqu’à chez vous.",
      stats: [
        { value: "1985", label: "année de création" },
        { value: "15", label: "prix de pâtisserie" },
        { value: "48 h", label: "pour un décor sur mesure" },
      ],
    },
  },
  collections: {
    eyebrow: "Collections",
    title: "Un gâteau pour toute la tablée, ou une douceur pour chacun.",
    items: [
      {
        title: "Entremets à partager",
        note: "Quatre recettes nouvelles à chaque saison.",
        description:
          "Biscuit, mousse, insert fruité et glaçage miroir, en 6, 8 ou 10 parts, de 38 € à 60 €.",
        image: {
          src: IMG.entremets,
          alt: "Entremets en tranche aux couches de biscuit, de crème et de gelée de fruits rouges, garni de groseilles et d’une mûre, sur une assiette claire.",
        },
      },
      {
        title: "Pâtisseries individuelles",
        note: "À l’unité en vitrine, ou en boîte de 6 ou 12 à offrir.",
        description:
          "Éclairs, tartelettes aux fruits de saison et choux garnis le jour même, de 4,50 € à 7 € pièce.",
        image: {
          src: IMG.eclair,
          alt: "Éclair au chocolat parsemé d’éclats, servi sur une assiette avec des baies rouges et des mûres.",
        },
      },
    ],
  },
  signature: {
    eyebrow: "Signatures",
    title: "Les trois recettes que l’on nous demande le plus.",
    text: "Disponibles toute l’année, en boutique ou sur commande 48 h à l’avance.",
    items: [
      {
        name: "Opéra",
        detail: "Café grand cru, ganache au chocolat noir, biscuit Joconde.",
        price: "45 €",
      },
      {
        name: "Saint-Honoré",
        detail: "Crème légère à la vanille, caramel blond, pâte feuilletée.",
        price: "42 €",
      },
      {
        name: "Tarte au yuzu",
        detail: "Crème de yuzu acidulée, meringue flambée, pâte sablée fine.",
        price: "7 €",
      },
    ],
  },
  occasions: {
    eyebrow: "Occasions",
    title: "Des gâteaux sur commande, de 6 à 120 parts.",
    panel: {
      eyebrow: "Conseil",
      title:
        "Nous choisissons avec vous la taille, le décor et l’heure du service.",
      text: "Livraison possible dans un rayon de 20 km : le gâteau arrive prêt à découper, avec ses conseils de conservation.",
    },
    items: [
      "Mariages et pièces montées",
      "Baptêmes et fêtes de famille",
      "Cadeaux clients et fêtes d’équipe",
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Sortis de notre atelier cette saison.",
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
        alt: "Entremets individuel aux couches de mousse au chocolat et de crème claire, couronné d’une mûre et de myrtilles, sur une petite assiette claire avec une fourchette.",
      },
    ],
  },
  reviews: {
    eyebrow: "Témoignages",
    title: "Ce qu’en disent nos clients.",
    ratingLabel: "5 étoiles sur 5",
    items: [
      {
        name: "Élise B.",
        role: "Gâteau de mariage",
        text: "« Délicieux, et encore superbe au moment de la découpe. Tous nos invités en ont repris, même ceux qui ne prennent jamais de dessert. »",
      },
      {
        name: "Vincent L.",
        role: "Dîner d’entreprise",
        text: "« Quarante parts commandées pour un dîner d’équipe : livrées à l’heure, faciles à servir, et le Saint‑Honoré a fait l’unanimité autour de la table. »",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Dites-nous la date, le nombre d’invités et vos envies.",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    hours: "Mar.⁠–⁠sam. 7 h⁠–⁠19 h 30, dim. 8 h⁠–⁠13 h",
    phone: { href: "tel:+33199000057", label: "01 99 00 00 57" },
    email: {
      href: "mailto:contact@patisserie-douceur.example",
      label: "contact@patisserie-douceur.example",
    },
    special: "Gâteaux personnalisés : 48 h à l’avance",
    panel: {
      eyebrow: "Bon à savoir",
      text: "Acompte de 30 % à la commande, solde au retrait, annulation gratuite jusqu’à 3 jours avant.",
      request: "Commander un gâteau",
      appointment: "Réserver une dégustation",
      back: "Voir les collections",
    },
  },
  footer: {
    text: "Pâtisserie artisanale depuis 1985, ouverte du mardi au dimanche.",
    navLabel: "Navigation",
    positionLabel: "En boutique",
    positionText:
      "Entremets, pâtisseries individuelles et gâteaux de fête, à emporter ou sur commande.",
  },
  meta: {
    home: {
      title: "Pâtisserie Douceur - Entremets et gâteaux sur commande",
      description:
        "Pâtisserie Douceur, artisan pâtissier depuis 1985 : entremets de saison, éclairs, tartelettes et gâteaux de fête, à emporter ou sur commande.",
    },
  },
} as const;

type FrCopy = typeof fr;

/** Type de la copie, dérivé du français (clés, longueurs de listes). */
export type PatisserieCopy = WidenLiterals<FrCopy>;

const en: PatisserieCopy = {
  brand: {
    name: "Your business",
    tagline: "Fine French pastry",
  },
  nav: {
    home: "Home",
    collections: "Collections",
    signature: "Signatures",
    contact: "Contact",
    order: "Order",
  },
  hero: {
    badge: "Open Tuesday through Sunday",
    titleStart: "Seasonal cakes,",
    titleAccent: "made by hand",
    titleEnd: "for every celebration.",
    description:
      "Éclairs and tartlets by the piece, entremets that serve 6 to 10: pick them up in the shop or order ahead for a birthday, a wedding or a dinner party.",
    image: {
      src: IMG.hero,
      alt: "Chocolate entremets topped with raspberries, blueberries, figs and rose petals, on a dark cake stand over white muslin.",
    },
    panel: {
      eyebrow: "Pickup day",
      title: "As beautiful on your table as in our window.",
      text: "Assembled that morning and packed in a sturdy box that travels safely all the way home.",
      stats: [
        { value: "1985", label: "year founded" },
        { value: "15", label: "pastry awards" },
        { value: "2 days", label: "for custom designs" },
      ],
    },
  },
  collections: {
    eyebrow: "Collections",
    title: "A cake for the whole table, or one for each guest.",
    items: [
      {
        title: "Entremets to share",
        note: "Four new recipes every season.",
        description:
          "Sponge, mousse, a fruit center and a mirror glaze, in 6-, 8- or 10-serving sizes, from €38 to €60.",
        image: {
          src: IMG.entremets,
          alt: "Slice of entremets with layers of sponge, cream and red berry jelly, topped with red currants and a blackberry, on a pale plate.",
        },
      },
      {
        title: "Individual pastries",
        note: "By the piece, or in boxes of 6 or 12 to give as gifts.",
        description:
          "Éclairs, seasonal fruit tartlets and cream puffs filled the same day, €4.50 to €7 each.",
        image: {
          src: IMG.eclair,
          alt: "Chocolate éclair sprinkled with chocolate shavings, on a plate with raspberries and blackberries.",
        },
      },
    ],
  },
  signature: {
    eyebrow: "Signatures",
    title: "The three recipes our customers ask for most.",
    text: "Available all year, in the shop or with 2 days’ notice.",
    items: [
      {
        name: "Opéra",
        detail: "Single-origin coffee, dark chocolate ganache, almond sponge.",
        price: "€45",
      },
      {
        name: "Saint-Honoré",
        detail: "Light vanilla cream, golden caramel, puff pastry.",
        price: "€42",
      },
      {
        name: "Yuzu Tart",
        detail: "Tangy yuzu curd, torched meringue, thin shortbread crust.",
        price: "€7",
      },
    ],
  },
  occasions: {
    eyebrow: "Occasions",
    title: "Custom cakes, from 6 to 120 servings.",
    panel: {
      eyebrow: "Planning",
      title:
        "Together we choose the size, the decoration and the right time to serve it.",
      text: "Delivery available within 12 miles; the cake arrives ready to slice, with storage tips.",
    },
    items: [
      "Weddings and tiered cakes",
      "Christenings and family parties",
      "Client gifts and team parties",
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Fresh from our kitchen this season.",
    images: [
      {
        src: IMG.macarons,
        alt: "Purple, pink and chocolate-hazelnut macarons stacked on a light countertop.",
      },
      {
        src: IMG.tartelettes,
        alt: "Blueberry, raspberry, kiwi and apple rose tartlets seen from above on dark slate.",
      },
      {
        src: IMG.mariage,
        alt: "Two-tier white wedding cake decorated with anemones and small flowers, on a wooden cake stand outdoors.",
      },
      {
        src: IMG.individuel,
        alt: "Individual entremets with layers of chocolate mousse and light cream, topped with a blackberry and blueberries, on a small pale plate with a fork.",
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our customers say.",
    ratingLabel: "5 out of 5 stars",
    items: [
      {
        name: "Élise B.",
        role: "Wedding cake",
        text: "“Delicious, and still gorgeous when we cut it. Every guest went back for seconds, even the ones who never eat dessert.”",
      },
      {
        name: "Vincent L.",
        role: "Company dinner",
        text: "“We ordered forty servings for a team dinner: delivered on time, easy to serve, and everyone at the table loved the Saint‑Honoré.”",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us the date, the guest count and your ideas.",
    address: "12 Example Street, 00000 Your city",
    hours: "Tue⁠–⁠Sat 7 a.m.⁠–⁠7:30 p.m., Sun 8 a.m.⁠–⁠1 p.m.",
    phone: { href: "tel:+33199000057", label: "01 99 00 00 57" },
    email: {
      href: "mailto:contact@example.com",
      label: "contact@example.com",
    },
    special: "Custom cakes: 2 days’ notice",
    panel: {
      eyebrow: "Good to know",
      text: "30% deposit when you order, balance at pickup, free cancellation up to 3 days before.",
      request: "Order a cake",
      appointment: "Book a tasting",
      back: "See the collections",
    },
  },
  footer: {
    text: "Artisan pastry shop since 1985, open Tuesday through Sunday.",
    navLabel: "Navigation",
    positionLabel: "In the shop",
    positionText:
      "Entremets, individual pastries and celebration cakes, to go or made to order.",
  },
  meta: {
    home: {
      title: "Your business - Cakes and French pastry",
      description:
        "Your business, an artisan pastry shop since 1985: seasonal entremets, éclairs, tartlets and celebration cakes, to go or made to order.",
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
