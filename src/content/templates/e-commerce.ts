import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « e-commerce » : boutique en ligne fictive « Votre entreprise »
 * (objets pour la table et la maison : céramique, linge, décoration), avec un
 * panier qui fonctionne dans le navigateur et un espace de gestion (CRM :
 * tableau de bord, commandes, stocks, clients).
 *
 * Deux parties dans ce fichier :
 *  - les **données** (`ECOMMERCE_PRODUCTS`, `ECOMMERCE_CUSTOMERS`,
 *    `ECOMMERCE_ORDERS`, `ECOMMERCE_SALES`) : prix, stocks, dates, quantités.
 *    Elles ne se traduisent pas, donc elles vivent hors de la copie : un prix ou
 *    un stock ne peut pas diverger entre le français et l'anglais. Les totaux
 *    (commande, client, tableau de bord) se calculent à partir d'elles
 *    (`src/templates/e-commerce/lib.ts`), jamais à la main ;
 *  - la **copie** (`fr`, puis `en` typée `ECommerceCopy`) : tout le texte
 *    visible, y compris le nom et la description de chaque produit, indexés par
 *    l'identifiant du produit.
 *
 * Contenu : entreprise, clients et commandes fictifs (prénom et initiale,
 * e-mails en `example.com`), aucun lieu réel. Prix en euros TTC. Rien n'est
 * envoyé : le panier vit dans le navigateur, la commande est une démonstration,
 * les changements du CRM ne sont pas enregistrés.
 *
 * Images : Unsplash, objets seuls, sans marque, texte lisible ni visage,
 * regardées en grand. Recadrées au ratio du cadre (`w` et `h` de l'URL), même
 * URL dans les deux langues, seul le `alt` se traduit.
 */

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;

/** Photo produit au ratio 4/5 des cartes et de la fiche produit. */
const product = (id: string) => unsplash(id, 1200, 1500);

export const ECOMMERCE_IMAGES = {
  hero: unsplash("1597696929736-6d13bed8e6a8", 1800, 1200),
  atelier: unsplash("1771523350533-a831d1f703a7", 1200, 1500),
  table: unsplash("1753703986127-6e5535115fb0", 1200, 1500),
  linge: unsplash("1591625591034-75d303d2e1a4", 1200, 1500),
  deco: unsplash("1455669175216-9017c9b02fc6", 1200, 1500),
} as const;

export type ECommerceCategory = "table" | "linge" | "deco";

export const ECOMMERCE_CATEGORIES = ["table", "linge", "deco"] as const;

/**
 * Catalogue. `price` : prix de vente TTC ; `cost` : prix d'achat (valeur du
 * stock dans le CRM) ; `threshold` : seuil d'alerte de stock ; `sold30` : unités
 * vendues sur 30 jours (meilleures ventes du tableau de bord).
 */
export const ECOMMERCE_PRODUCTS = [
  {
    id: "bougie-ambre",
    sku: "DEC-104",
    category: "deco",
    price: 24,
    cost: 8.5,
    stock: 47,
    threshold: 12,
    sold30: 64,
    rating: 4.9,
    reviews: 128,
    isNew: false,
    image: product("1554057009-6798cb3d4a04"),
  },
  {
    id: "vase-dune",
    sku: "DEC-101",
    category: "deco",
    price: 58,
    cost: 22,
    stock: 14,
    threshold: 5,
    sold30: 22,
    rating: 4.8,
    reviews: 36,
    isNew: false,
    image: product("1631125915902-d8abe9225ff2"),
  },
  {
    id: "mug-sable",
    sku: "TAB-202",
    category: "table",
    price: 32,
    cost: 12,
    stock: 3,
    threshold: 8,
    sold30: 41,
    rating: 4.7,
    reviews: 84,
    isNew: false,
    image: product("1766848482243-4379ac576b1d"),
  },
  {
    id: "bol-galet",
    sku: "TAB-203",
    category: "table",
    price: 28,
    cost: 10,
    stock: 26,
    threshold: 8,
    sold30: 38,
    rating: 4.8,
    reviews: 57,
    isNew: false,
    image: product("1530006498959-b7884e829a04"),
  },
  {
    id: "assiettes-craie",
    sku: "TAB-201",
    category: "table",
    price: 64,
    cost: 25,
    stock: 0,
    threshold: 6,
    sold30: 18,
    rating: 4.6,
    reviews: 29,
    isNew: false,
    image: product("1737681707230-04eebda96529"),
  },
  {
    id: "theiere-nuage",
    sku: "TAB-207",
    category: "table",
    price: 45,
    cost: 17,
    stock: 9,
    threshold: 4,
    sold30: 15,
    rating: 4.9,
    reviews: 12,
    isNew: true,
    image: product("1683558654439-8b9986cbf1dd"),
  },
  {
    id: "carafe-facette",
    sku: "TAB-208",
    category: "table",
    price: 36,
    cost: 13,
    stock: 18,
    threshold: 6,
    sold30: 19,
    rating: 4.7,
    reviews: 21,
    isNew: true,
    image: product("1743187360373-513ac4a7266f"),
  },
  {
    id: "planche-chene",
    sku: "TAB-210",
    category: "table",
    price: 39,
    cost: 15,
    stock: 11,
    threshold: 5,
    sold30: 14,
    rating: 4.8,
    reviews: 33,
    isNew: false,
    image: product("1587302108992-20648821725d"),
  },
  {
    id: "serviettes-lin",
    sku: "LIN-301",
    category: "linge",
    price: 34,
    cost: 12.5,
    stock: 22,
    threshold: 8,
    sold30: 33,
    rating: 4.8,
    reviews: 66,
    isNew: false,
    image: product("1591625591034-75d303d2e1a4"),
  },
  {
    id: "plaid-laine",
    sku: "LIN-305",
    category: "linge",
    price: 89,
    cost: 36,
    stock: 4,
    threshold: 5,
    sold30: 12,
    rating: 4.9,
    reviews: 41,
    isNew: false,
    image: product("1734553529922-bc020a21643b"),
  },
  {
    id: "coussin-lin",
    sku: "LIN-302",
    category: "linge",
    price: 29,
    cost: 10,
    stock: 31,
    threshold: 10,
    sold30: 29,
    rating: 4.6,
    reviews: 48,
    isNew: false,
    image: product("1611489704434-2612dc89c992"),
  },
  {
    id: "panier-osier",
    sku: "DEC-108",
    category: "deco",
    price: 42,
    cost: 16,
    stock: 7,
    threshold: 4,
    sold30: 11,
    rating: 4.7,
    reviews: 9,
    isNew: true,
    image: product("1455669175216-9017c9b02fc6"),
  },
] as const satisfies readonly {
  id: string;
  sku: string;
  category: ECommerceCategory;
  price: number;
  cost: number;
  stock: number;
  threshold: number;
  sold30: number;
  rating: number;
  reviews: number;
  isNew: boolean;
  image: string;
}[];

export type ECommerceProductId = (typeof ECOMMERCE_PRODUCTS)[number]["id"];

export type ECommerceSegment = "vip" | "loyal" | "new" | "dormant";

/**
 * Clients. `prior` : commandes passées avant celles de `ECOMMERCE_ORDERS`
 * (le total d'un client additionne les deux) ; `priorLast` : date de la
 * dernière d'entre elles.
 */
export const ECOMMERCE_CUSTOMERS = [
  {
    id: "c01",
    name: "Camille R.",
    email: "camille.r@example.com",
    segment: "vip",
    since: "2023-03-12",
    newsletter: true,
    prior: { orders: 11, spent: 742 },
    priorLast: "2026-10-18",
  },
  {
    id: "c02",
    name: "Julien M.",
    email: "julien.m@example.com",
    segment: "loyal",
    since: "2024-06-02",
    newsletter: true,
    prior: { orders: 5, spent: 286 },
    priorLast: "2026-09-27",
  },
  {
    id: "c03",
    name: "Sarah B.",
    email: "sarah.b@example.com",
    segment: "new",
    since: "2026-11-03",
    newsletter: true,
    prior: { orders: 0, spent: 0 },
    priorLast: null,
  },
  {
    id: "c04",
    name: "Thomas L.",
    email: "thomas.l@example.com",
    segment: "loyal",
    since: "2024-01-20",
    newsletter: false,
    prior: { orders: 4, spent: 233 },
    priorLast: "2026-08-30",
  },
  {
    id: "c05",
    name: "Inès D.",
    email: "ines.d@example.com",
    segment: "vip",
    since: "2022-10-08",
    newsletter: true,
    prior: { orders: 14, spent: 1068 },
    priorLast: "2026-10-29",
  },
  {
    id: "c06",
    name: "Hugo P.",
    email: "hugo.p@example.com",
    segment: "dormant",
    since: "2023-09-14",
    newsletter: false,
    prior: { orders: 2, spent: 96 },
    priorLast: "2025-12-04",
  },
  {
    id: "c07",
    name: "Léa G.",
    email: "lea.g@example.com",
    segment: "new",
    since: "2026-10-28",
    newsletter: true,
    prior: { orders: 0, spent: 0 },
    priorLast: null,
  },
  {
    id: "c08",
    name: "Nathan F.",
    email: "nathan.f@example.com",
    segment: "loyal",
    since: "2025-02-11",
    newsletter: true,
    prior: { orders: 3, spent: 171 },
    priorLast: "2026-07-19",
  },
  {
    id: "c09",
    name: "Chloé V.",
    email: "chloe.v@example.com",
    segment: "dormant",
    since: "2024-04-30",
    newsletter: false,
    prior: { orders: 1, spent: 64 },
    priorLast: "2025-11-22",
  },
  {
    id: "c10",
    name: "Marc A.",
    email: "marc.a@example.com",
    segment: "new",
    since: "2026-11-15",
    newsletter: false,
    prior: { orders: 0, spent: 0 },
    priorLast: null,
  },
] as const satisfies readonly {
  id: string;
  name: string;
  email: string;
  segment: ECommerceSegment;
  since: string;
  newsletter: boolean;
  prior: { orders: number; spent: number };
  priorLast: string | null;
}[];

export type ECommerceCustomerId = (typeof ECOMMERCE_CUSTOMERS)[number]["id"];

export type ECommerceOrderStatus =
  | "toPrepare"
  | "shipped"
  | "delivered"
  | "refunded";

export const ECOMMERCE_ORDER_STATUSES = [
  "toPrepare",
  "shipped",
  "delivered",
  "refunded",
] as const;

/** Commandes récentes, de la plus récente à la plus ancienne. */
export const ECOMMERCE_ORDERS = [
  {
    id: "CMD-2041",
    customer: "c05",
    date: "2026-11-24",
    status: "toPrepare",
    lines: [
      { product: "plaid-laine", qty: 1 },
      { product: "bougie-ambre", qty: 2 },
    ],
  },
  {
    id: "CMD-2040",
    customer: "c03",
    date: "2026-11-24",
    status: "toPrepare",
    lines: [
      { product: "mug-sable", qty: 1 },
      { product: "bol-galet", qty: 1 },
    ],
  },
  {
    id: "CMD-2039",
    customer: "c01",
    date: "2026-11-23",
    status: "toPrepare",
    lines: [
      { product: "vase-dune", qty: 1 },
      { product: "coussin-lin", qty: 2 },
    ],
  },
  {
    id: "CMD-2038",
    customer: "c10",
    date: "2026-11-22",
    status: "shipped",
    lines: [{ product: "bougie-ambre", qty: 1 }],
  },
  {
    id: "CMD-2037",
    customer: "c02",
    date: "2026-11-21",
    status: "shipped",
    lines: [
      { product: "theiere-nuage", qty: 1 },
      { product: "mug-sable", qty: 1 },
    ],
  },
  {
    id: "CMD-2036",
    customer: "c07",
    date: "2026-11-20",
    status: "shipped",
    lines: [
      { product: "serviettes-lin", qty: 1 },
      { product: "carafe-facette", qty: 1 },
    ],
  },
  {
    id: "CMD-2035",
    customer: "c04",
    date: "2026-11-18",
    status: "delivered",
    lines: [
      { product: "planche-chene", qty: 1 },
      { product: "bol-galet", qty: 2 },
    ],
  },
  {
    id: "CMD-2034",
    customer: "c05",
    date: "2026-11-16",
    status: "delivered",
    lines: [{ product: "assiettes-craie", qty: 2 }],
  },
  {
    id: "CMD-2033",
    customer: "c08",
    date: "2026-11-14",
    status: "delivered",
    lines: [
      { product: "panier-osier", qty: 1 },
      { product: "coussin-lin", qty: 1 },
    ],
  },
  {
    id: "CMD-2032",
    customer: "c01",
    date: "2026-11-12",
    status: "delivered",
    lines: [
      { product: "carafe-facette", qty: 1 },
      { product: "serviettes-lin", qty: 1 },
    ],
  },
  {
    id: "CMD-2031",
    customer: "c02",
    date: "2026-11-09",
    status: "refunded",
    lines: [{ product: "plaid-laine", qty: 1 }],
  },
  {
    id: "CMD-2030",
    customer: "c04",
    date: "2026-11-06",
    status: "delivered",
    lines: [{ product: "vase-dune", qty: 1 }],
  },
] as const satisfies readonly {
  id: string;
  customer: ECommerceCustomerId;
  date: string;
  status: ECommerceOrderStatus;
  lines: readonly { product: ECommerceProductId; qty: number }[];
}[];

/**
 * Ventes des huit dernières semaines (lundi de chaque semaine). Le tableau de
 * bord compare les quatre dernières aux quatre précédentes.
 */
export const ECOMMERCE_SALES = [
  { week: "2026-09-28", revenue: 1840, orders: 31 },
  { week: "2026-10-05", revenue: 2110, orders: 36 },
  { week: "2026-10-12", revenue: 1960, orders: 33 },
  { week: "2026-10-19", revenue: 2380, orders: 40 },
  { week: "2026-10-26", revenue: 2250, orders: 37 },
  { week: "2026-11-02", revenue: 2690, orders: 44 },
  { week: "2026-11-09", revenue: 2930, orders: 47 },
  { week: "2026-11-16", revenue: 3240, orders: 52 },
] as const;

/** Part de clients qui ont déjà commandé (30 derniers jours, puis les 30 d'avant). */
export const ECOMMERCE_RETURNING = { current: 38, previous: 33 } as const;

/** Livraison : offerte à partir de ce montant, sinon forfait. */
export const ECOMMERCE_SHIPPING = { freeFrom: 60, flat: 4.9 } as const;

/** Code promo de démonstration (10 % sur les articles). */
export const ECOMMERCE_PROMO = { code: "BIENVENUE10", rate: 0.1 } as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Objets pour la table et la maison",
  },
  nav: {
    home: "Accueil",
    shop: "Boutique",
    crm: "Espace gestion",
    cart: "Panier",
  },
  topBar: {
    shipping: "Livraison offerte dès 60 €",
    returns: "Retours gratuits sous 30 jours",
  },
  footer: {
    text: "Céramique, linge et objets du quotidien, choisis auprès de petits ateliers et expédiés sous 48 h.",
    shopTitle: "Boutique",
    helpTitle: "Aide",
    help: [
      "Livraison en 2 à 4 jours ouvrés",
      "Retours gratuits sous 30 jours",
      "Paiement sécurisé",
    ],
    contactTitle: "Contact",
    email: "contact@votre-entreprise.example",
    phone: "01 99 00 00 74",
    demo: "Site de démonstration : produits, prix et commandes fictifs. Aucun paiement.",
  },
  categories: {
    table: {
      label: "Art de la table",
      text: "Grès, porcelaine et verre pour tous les jours.",
      alt: "Bols et coupelles en terre cuite posés sur une étagère, au soleil",
    },
    linge: {
      label: "Linge de maison",
      text: "Lin lavé et laine tissée, doux dès le premier usage.",
      alt: "Pile de serviettes en lin écru sur une table en bois",
    },
    deco: {
      label: "Décoration",
      text: "Vases, bougies et paniers pour habiller une pièce.",
      alt: "Paniers en osier de formes variées posés sur un plancher clair",
    },
  },
  products: {
    "bougie-ambre": {
      name: "Bougie Ambre",
      short: "Cire végétale, 200 g",
      description:
        "Une bougie coulée à la main dans un pot en verre ambré, aux notes de bois chaud et de vanille. Environ 45 heures de combustion.",
      details: [
        "Cire de colza et de soja",
        "Mèche en coton",
        "Pot réutilisable",
      ],
      alt: "Bougie allumée dans un pot en verre, sur fond sombre",
    },
    "vase-dune": {
      name: "Vase Dune",
      short: "Grès brut, 24 cm",
      description:
        "Un vase en grès laissé brut à l’extérieur et émaillé à l’intérieur, pour les fleurs fraîches comme pour les branches séchées.",
      details: [
        "Grès façonné à la main",
        "Intérieur émaillé, étanche",
        "Chaque pièce est unique",
      ],
      alt: "Trois vases en grès beige posés sur un socle en béton",
    },
    "mug-sable": {
      name: "Mugs Sable",
      short: "Grès mat, lot de 2",
      description:
        "Deux mugs de 30 cl en grès mat, à l’anse généreuse. Ils passent au lave-vaisselle et au micro-ondes.",
      details: [
        "Contenance 30 cl",
        "Lave-vaisselle et micro-ondes",
        "Lot de 2",
      ],
      alt: "Deux mugs en grès couleur sable posés sur un plan gris",
    },
    "bol-galet": {
      name: "Bols Galet",
      short: "Grès moucheté, lot de 2",
      description:
        "Des bols de 14 cm au grès moucheté, pour le petit-déjeuner, une soupe ou une salade. Émail satiné, toucher doux.",
      details: ["Diamètre 14 cm", "Lave-vaisselle", "Lot de 2"],
      alt: "Deux bols en grès blanc moucheté empilés, sur fond gris",
    },
    "assiettes-craie": {
      name: "Assiettes Craie",
      short: "Porcelaine, lot de 4",
      description:
        "Quatre assiettes plates de 27 cm en porcelaine blanche, fines et résistantes, qui s’empilent sans prendre de place.",
      details: [
        "Diamètre 27 cm",
        "Porcelaine résistante aux chocs",
        "Lot de 4",
      ],
      alt: "Pile d’assiettes blanches dans un placard clair",
    },
    "theiere-nuage": {
      name: "Théière Nuage",
      short: "Porcelaine, 1 L",
      description:
        "Une théière ronde d’un litre en porcelaine blanche, avec un filtre intégré au bec pour le thé en vrac.",
      details: ["Contenance 1 L", "Filtre intégré", "Couvercle à ergot"],
      alt: "Théière ronde en porcelaine blanche posée sur un chemin de table rayé",
    },
    "carafe-facette": {
      name: "Carafe Facette",
      short: "Verre pressé, 1,2 L",
      description:
        "Une carafe en verre pressé à motif de facettes, qui joue avec la lumière sur la table. Pour l’eau, les jus et la citronnade.",
      details: [
        "Contenance 1,2 L",
        "Verre pressé",
        "Lavage à la main conseillé",
      ],
      alt: "Carafe en verre à facettes sur une table claire",
    },
    "planche-chene": {
      name: "Planche à servir",
      short: "Chêne massif, 38 cm",
      description:
        "Une planche en chêne massif huilé, pour couper le pain ou servir fromages et charcuterie à table.",
      details: [
        "Longueur 38 cm",
        "Chêne massif huilé",
        "Huiler de temps en temps",
      ],
      alt: "Planche à servir en chêne avec une poignée, sur fond blanc",
    },
    "serviettes-lin": {
      name: "Serviettes en lin",
      short: "Lin lavé, lot de 4",
      description:
        "Quatre serviettes de table en lin lavé, souples et légèrement froissées, qui s’adoucissent encore à chaque lavage.",
      details: ["45 × 45 cm", "100 % lin lavé", "Lot de 4"],
      alt: "Serviettes en lin écru pliées et empilées sur un banc en bois",
    },
    "plaid-laine": {
      name: "Plaid en laine",
      short: "Laine tissée, 130 × 170 cm",
      description:
        "Un plaid tissé en laine épaisse, à poser sur un canapé ou au pied du lit. Chaud sans être lourd.",
      details: ["130 × 170 cm", "Laine tissée", "Nettoyage à sec"],
      alt: "Plaids en laine orange et ocre pliés et empilés",
    },
    "coussin-lin": {
      name: "Housse de coussin",
      short: "Lin, 45 × 45 cm",
      description:
        "Une housse de coussin en lin épais, fermeture cachée, pour changer l’ambiance d’un canapé en quelques secondes.",
      details: ["45 × 45 cm", "100 % lin", "Garnissage non compris"],
      alt: "Deux coussins en lin, blanc et rouille, posés sur un tapis rayé",
    },
    "panier-osier": {
      name: "Panier en osier",
      short: "Osier tressé, 40 cm",
      description:
        "Un panier rond en osier tressé à la main, pour ranger plaids et magazines ou accueillir une plante.",
      details: ["Diamètre 40 cm", "Osier tressé main", "Deux anses"],
      alt: "Paniers en osier tressé posés sur un plancher clair",
    },
  },
  product: {
    add: "Ajouter au panier",
    addShort: "Ajouter",
    addNamed: "Ajouter {name} au panier",
    added: "Ajouté",
    soldOut: "Épuisé",
    inStock: "En stock",
    lowStock: "Plus que {n} en stock",
    isNew: "Nouveau",
    rating: "{rating} sur 5, {n} avis",
    back: "Retour à la boutique",
    quantity: "Quantité",
    decrease: "Retirer un",
    increase: "Ajouter un",
    detailsTitle: "Détails",
    deliveryTitle: "Livraison et retours",
    delivery:
      "Expédié sous 48 h, livré en 2 à 4 jours ouvrés. Livraison offerte dès 60 €, sinon 4,90 €. Retours gratuits sous 30 jours.",
    relatedTitle: "Dans la même catégorie",
  },
  toast: {
    added: "Ajouté au panier : {name}",
    view: "Voir le panier",
  },
  cartBar: {
    label: "Votre panier",
    empty: "Panier vide",
    itemsOne: "1 article",
    itemsMany: "{n} articles",
    view: "Voir le panier",
  },
  meta: {
    home: {
      title: "Votre entreprise - Objets pour la table et la maison",
      description:
        "Boutique en ligne de céramique, de linge et d’objets du quotidien : livraison offerte dès 60 €, retours gratuits sous 30 jours.",
    },
    boutique: {
      title: "Boutique - Votre entreprise",
      description:
        "Tous les produits : art de la table, linge de maison et décoration. Prix, disponibilité et ajout au panier en un clic.",
    },
    panier: {
      title: "Panier - Votre entreprise",
      description:
        "Votre panier : quantités, code promo, frais de livraison et validation de la commande.",
    },
    crm: {
      title: "Tableau de bord - Espace gestion",
      description:
        "Chiffre d’affaires, commandes, panier moyen, meilleures ventes et alertes de stock de la boutique.",
    },
    commandes: {
      title: "Commandes - Espace gestion",
      description:
        "Suivi des commandes de la boutique : recherche, filtre par statut et passage en expédition.",
    },
    stocks: {
      title: "Stocks - Espace gestion",
      description:
        "Niveaux de stock par produit, seuils d’alerte, ruptures et valeur du stock.",
    },
    clients: {
      title: "Clients - Espace gestion",
      description:
        "Fichier clients de la boutique : segments, historique de commandes, dépenses et notes.",
    },
  },
  home: {
    hero: {
      eyebrow: "Nouvelle collection d’automne",
      title: "Des objets simples, faits pour durer",
      description:
        "Céramique, lin et laine choisis auprès de petits ateliers. Expédition sous 48 h, livraison offerte dès 60 €.",
      primary: "Découvrir la boutique",
      secondary: "Voir les nouveautés",
      alt: "Collection de vases en céramique aux tons naturels alignés sur une table",
    },
    categories: {
      title: "Par où commencer",
      cta: "Voir la sélection",
    },
    bestsellers: {
      eyebrow: "Les plus aimés",
      title: "Nos meilleures ventes",
      description: "Les pièces que nos clients recommandent le plus souvent.",
      cta: "Tout le catalogue",
    },
    promises: [
      {
        icon: "truck",
        title: "Expédié sous 48 h",
        text: "Livraison en 2 à 4 jours ouvrés, offerte dès 60 €.",
      },
      {
        icon: "rotate",
        title: "Retours gratuits",
        text: "30 jours pour changer d’avis, sans justification.",
      },
      {
        icon: "package",
        title: "Emballage sans plastique",
        text: "Carton recyclé et papier de soie, rien d’autre.",
      },
      {
        icon: "lock",
        title: "Paiement sécurisé",
        text: "Carte bancaire et virement, données chiffrées.",
      },
    ],
    story: {
      eyebrow: "Nos ateliers",
      title: "Chaque pièce vient d’un atelier que nous connaissons",
      text: "Nous travaillons avec une dizaine de petits ateliers : potiers, tisserands, vanniers. Des séries courtes, des matières naturelles et des objets pensés pour servir tous les jours.",
      points: [
        "Séries courtes, réassorts réguliers",
        "Matières naturelles et durables",
        "Prix juste pour l’atelier et pour vous",
      ],
      alt: "Mains d’un potier qui façonnent une assiette en argile sur le tour",
    },
    reviews: {
      title: "Ce qu’en disent nos clients",
      description: "Note moyenne de 4,8 sur 5, sur plus de 500 avis vérifiés.",
      label: "Avis clients",
      ratingLabel: "{rating} étoiles sur 5",
      items: [
        {
          quote:
            "Les bols sont encore plus beaux en vrai. Colis soigné, reçu en trois jours.",
          name: "Camille R.",
          detail: "Bols Galet",
          rating: 5,
        },
        {
          quote:
            "Le plaid est épais et très doux. On se bat pour l’avoir le soir.",
          name: "Inès D.",
          detail: "Plaid en laine",
          rating: 5,
        },
        {
          quote: "Bougie au parfum discret, qui tient vraiment ses 45 heures.",
          name: "Nathan F.",
          detail: "Bougie Ambre",
          rating: 5,
        },
        {
          quote:
            "J’ai échangé une taille de housse sans aucune difficulté. Service rapide.",
          name: "Thomas L.",
          detail: "Housse de coussin",
          rating: 4,
        },
        {
          quote:
            "Une théière qui verse sans goutter, enfin. Et le filtre est pratique.",
          name: "Julien M.",
          detail: "Théière Nuage",
          rating: 5,
        },
      ],
    },
    backoffice: {
      eyebrow: "Côté coulisses",
      title: "La boutique se gère depuis un seul écran",
      text: "Commandes à préparer, niveaux de stock, fiches clients : l’espace gestion réunit tout ce qu’il faut pour faire tourner la boutique au quotidien.",
      points: [
        { icon: "chart", text: "Ventes et panier moyen, semaine par semaine" },
        { icon: "boxes", text: "Alertes avant la rupture de stock" },
        { icon: "users", text: "Historique et notes de chaque client" },
      ],
      cta: "Ouvrir l’espace gestion",
    },
  },
  shop: {
    eyebrow: "Boutique",
    title: "Tout le catalogue",
    description:
      "Art de la table, linge de maison et décoration : douze pièces, choisies une à une.",
    filterLabel: "Catégorie",
    all: "Tout",
    sortLabel: "Trier par",
    sort: {
      popular: "Meilleures ventes",
      priceAsc: "Prix croissant",
      priceDesc: "Prix décroissant",
      new: "Nouveautés d’abord",
    },
    countOne: "1 produit",
    countMany: "{n} produits",
  },
  cart: {
    eyebrow: "Panier",
    title: "Votre panier",
    loading: "Chargement du panier…",
    empty: {
      title: "Votre panier est vide",
      text: "Parcourez la boutique et ajoutez les pièces qui vous plaisent.",
      cta: "Découvrir la boutique",
    },
    itemsTitle: "Articles",
    remove: "Retirer {name} du panier",
    removeShort: "Retirer",
    quantityOf: "Quantité de {name}",
    decreaseOf: "Retirer un {name}",
    increaseOf: "Ajouter un {name}",
    summaryTitle: "Récapitulatif",
    subtotal: "Sous-total",
    shipping: "Livraison",
    shippingFree: "Offerte",
    freeHint: "Plus que {amount} pour la livraison offerte",
    freeReached: "Livraison offerte",
    discount: "Code {code}",
    total: "Total TTC",
    promoLabel: "Code promo",
    promoApply: "Appliquer",
    promoHint: "Essayez BIENVENUE10",
    promoInvalid: "Ce code n’est pas valable.",
    promoApplied: "Code appliqué : 10 % sur vos articles.",
    checkoutTitle: "Adresse de livraison",
    fields: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "E-mail",
      address: "Adresse",
      postcode: "Code postal",
      city: "Ville",
    },
    payNote:
      "Démonstration : aucun paiement n’est demandé, aucune donnée n’est envoyée.",
    submit: "Valider la commande",
    confirmation: {
      title: "Merci, votre commande est enregistrée",
      text: "Commande {id} : vous recevriez un e-mail de confirmation, puis un lien de suivi à l’expédition.",
      cta: "Continuer mes achats",
    },
  },
  crm: {
    tagline: "Espace gestion",
    nav: {
      dashboard: "Tableau de bord",
      orders: "Commandes",
      stock: "Stocks",
      customers: "Clients",
    },
    shopLink: "Voir la boutique",
    account: "Compte de démonstration",
    demo: "Données fictives : vos modifications ne sont pas enregistrées.",
    statuses: {
      toPrepare: "À préparer",
      shipped: "Expédiée",
      delivered: "Livrée",
      refunded: "Remboursée",
    },
    segments: {
      vip: "VIP",
      loyal: "Fidèle",
      new: "Nouveau",
      dormant: "Inactif",
    },
    stockStatus: {
      ok: "En stock",
      low: "Stock bas",
      out: "Rupture",
    },
    itemsOne: "1 article",
    itemsMany: "{n} articles",
    searchLabel: "Rechercher",
    noResult: "Aucun résultat pour ces critères.",
    dashboard: {
      eyebrow: "30 derniers jours",
      title: "Tableau de bord",
      description:
        "L’activité de la boutique sur les quatre dernières semaines, comparée aux quatre précédentes.",
      kpis: {
        revenue: "Chiffre d’affaires",
        orders: "Commandes",
        average: "Panier moyen",
        returning: "Clients qui reviennent",
      },
      versus: "par rapport aux 30 jours précédents",
      points: "{n} pts",
      chartTitle: "Chiffre d’affaires par semaine",
      chartWeek: "Semaine du {date}",
      chartSummary: "De {from} à {to} sur huit semaines.",
      topTitle: "Meilleures ventes",
      sold: "{n} vendus",
      alertsTitle: "Alertes de stock",
      alertsText: "{n} en stock, seuil à {threshold}",
      alertsEmpty: "Aucun produit sous son seuil.",
      recentTitle: "À préparer",
      seeOrders: "Toutes les commandes",
      seeStock: "Gérer les stocks",
    },
    orders: {
      eyebrow: "Ventes",
      title: "Commandes",
      description:
        "Recherchez une commande, filtrez par statut et passez les colis préparés en expédition.",
      searchPlaceholder: "Numéro ou client",
      statusLabel: "Statut",
      all: "Toutes",
      columns: {
        id: "Commande",
        date: "Date",
        customer: "Client",
        items: "Articles",
        total: "Total",
        status: "Statut",
        action: "Action",
      },
      ship: "Marquer expédiée",
      shipNamed: "Marquer la commande {id} comme expédiée",
      deliver: "Marquer livrée",
      deliverNamed: "Marquer la commande {id} comme livrée",
      count: "{n} commandes affichées",
      toPrepareCount: "{n} à préparer",
    },
    stock: {
      eyebrow: "Catalogue",
      title: "Stocks",
      description:
        "Suivez les quantités, repérez les produits sous leur seuil et notez un réassort.",
      summary: {
        references: "Références",
        units: "Unités en stock",
        value: "Valeur du stock (prix d’achat)",
        alerts: "Sous le seuil",
      },
      searchPlaceholder: "Produit ou référence",
      filterLabel: "Afficher",
      filters: {
        all: "Tous",
        low: "Stock bas",
        out: "Ruptures",
      },
      columns: {
        product: "Produit",
        sku: "Référence",
        price: "Prix",
        stock: "Stock",
        threshold: "Seuil",
        status: "État",
        adjust: "Ajuster",
      },
      decrease: "Retirer une unité de {name}",
      increase: "Ajouter une unité de {name}",
      restock: "Réassort +{n}",
      restockNamed: "Réassort de {n} unités pour {name}",
    },
    customers: {
      eyebrow: "Relation client",
      title: "Clients",
      description:
        "Retrouvez un client, son segment, ce qu’il a commandé et les notes de l’équipe.",
      searchPlaceholder: "Nom ou e-mail",
      segmentLabel: "Segment",
      all: "Tous",
      columns: {
        name: "Client",
        segment: "Segment",
        orders: "Commandes",
        spent: "Dépenses",
        last: "Dernière commande",
      },
      open: "Ouvrir la fiche de {name}",
      detail: {
        empty: "Sélectionnez un client pour afficher sa fiche.",
        since: "Client depuis le {date}",
        newsletter: "Newsletter",
        newsletterYes: "Abonné",
        newsletterNo: "Non abonné",
        average: "Panier moyen",
        notes: "Notes",
        history: "Commandes récentes",
        noHistory: "Aucune commande sur la période.",
        never: "Aucune",
      },
      notes: {
        c01: "Achète surtout de la céramique. Prévenir au prochain réassort des Mugs Sable.",
        c02: "Plaid retourné (couleur différente de la photo à l’écran). Remboursé le 12 novembre.",
        c03: "Première commande le jour de l’inscription, venue par la newsletter.",
        c04: "Commande souvent pour offrir : proposer l’emballage cadeau.",
        c05: "Cliente la plus ancienne. Envoie des photos de ses tables, à mettre en avant.",
        c06: "Plus de commande depuis un an : à relancer avec la nouvelle collection.",
        c07: "A demandé si les serviettes existent en vert sauge.",
        c08: "Aime l’osier et le lin. Intéressé par les nouveautés déco.",
        c09: "Inactive depuis un an. Avait laissé un avis très positif sur les assiettes.",
        c10: "Nouveau client, première commande avec le code de bienvenue.",
      },
    },
  },
} as const;

export type ECommerceCopy = WidenLiterals<typeof fr>;
export type ECommerceIconKey = TemplateIconKey<ECommerceCopy>;

const en: ECommerceCopy = {
  brand: {
    name: "Your business",
    tagline: "Objects for the table and the home",
  },
  nav: {
    home: "Home",
    shop: "Shop",
    crm: "Back office",
    cart: "Cart",
  },
  topBar: {
    shipping: "Free shipping on orders over €60",
    returns: "Free returns within 30 days",
  },
  footer: {
    text: "Ceramics, linen and everyday objects, sourced from small workshops and shipped within 48 hours.",
    shopTitle: "Shop",
    helpTitle: "Help",
    help: [
      "Delivery in 2 to 4 business days",
      "Free returns within 30 days",
      "Secure payment",
    ],
    contactTitle: "Contact",
    email: "contact@example.com",
    phone: "01 99 00 00 74",
    demo: "Demo website: products, prices and orders are fictitious. No payment is taken.",
  },
  categories: {
    table: {
      label: "Tableware",
      text: "Stoneware, porcelain and glass for every day.",
      alt: "Terracotta bowls and dishes on a sunlit shelf",
    },
    linge: {
      label: "Home linen",
      text: "Washed linen and woven wool, soft from the first use.",
      alt: "Stack of off-white linen napkins on a wooden table",
    },
    deco: {
      label: "Decor",
      text: "Vases, candles and baskets to dress up a room.",
      alt: "Wicker baskets of different shapes on a light wooden floor",
    },
  },
  products: {
    "bougie-ambre": {
      name: "Amber candle",
      short: "Plant wax, 200 g",
      description:
        "A candle hand-poured into an amber glass jar, with notes of warm wood and vanilla. About 45 hours of burn time.",
      details: ["Rapeseed and soy wax", "Cotton wick", "Reusable jar"],
      alt: "Lit candle in a glass jar against a dark background",
    },
    "vase-dune": {
      name: "Dune vase",
      short: "Raw stoneware, 24 cm",
      description:
        "A stoneware vase left raw on the outside and glazed on the inside, for fresh flowers and dried branches alike.",
      details: [
        "Handmade stoneware",
        "Glazed, watertight interior",
        "Every piece is unique",
      ],
      alt: "Three beige stoneware vases on a concrete plinth",
    },
    "mug-sable": {
      name: "Sand mugs",
      short: "Matte stoneware, set of 2",
      description:
        "Two 30 cl matte stoneware mugs with a generous handle. Dishwasher and microwave safe.",
      details: ["30 cl capacity", "Dishwasher and microwave safe", "Set of 2"],
      alt: "Two sand-colored stoneware mugs on a gray surface",
    },
    "bol-galet": {
      name: "Pebble bowls",
      short: "Speckled stoneware, set of 2",
      description:
        "14 cm bowls in speckled stoneware, for breakfast, soup or salad. Satin glaze, soft to the touch.",
      details: ["14 cm diameter", "Dishwasher safe", "Set of 2"],
      alt: "Two speckled white stoneware bowls stacked against a gray background",
    },
    "assiettes-craie": {
      name: "Chalk plates",
      short: "Porcelain, set of 4",
      description:
        "Four 27 cm dinner plates in white porcelain, thin yet sturdy, that stack without taking up space.",
      details: ["27 cm diameter", "Chip-resistant porcelain", "Set of 4"],
      alt: "Stack of white plates in a light cupboard",
    },
    "theiere-nuage": {
      name: "Cloud teapot",
      short: "Porcelain, 1 L",
      description:
        "A round one-liter teapot in white porcelain, with a strainer built into the spout for loose-leaf tea.",
      details: ["1 L capacity", "Built-in strainer", "Locking lid"],
      alt: "Round white porcelain teapot on a striped table runner",
    },
    "carafe-facette": {
      name: "Facet carafe",
      short: "Pressed glass, 1.2 L",
      description:
        "A pressed-glass carafe with a faceted pattern that catches the light on the table. For water, juice and lemonade.",
      details: ["1.2 L capacity", "Pressed glass", "Hand washing recommended"],
      alt: "Faceted glass carafe on a light table",
    },
    "planche-chene": {
      name: "Serving board",
      short: "Solid oak, 38 cm",
      description:
        "An oiled solid oak board, for slicing bread or serving cheese and charcuterie at the table.",
      details: ["38 cm long", "Oiled solid oak", "Oil it from time to time"],
      alt: "Oak serving board with a handle, on a white background",
    },
    "serviettes-lin": {
      name: "Linen napkins",
      short: "Washed linen, set of 4",
      description:
        "Four washed-linen table napkins, supple and lightly creased, that get softer with every wash.",
      details: ["45 × 45 cm", "100% washed linen", "Set of 4"],
      alt: "Off-white linen napkins folded and stacked on a wooden bench",
    },
    "plaid-laine": {
      name: "Wool throw",
      short: "Woven wool, 130 × 170 cm",
      description:
        "A throw woven in thick wool, for the sofa or the foot of the bed. Warm without being heavy.",
      details: ["130 × 170 cm", "Woven wool", "Dry clean only"],
      alt: "Orange and ochre wool throws folded and stacked",
    },
    "coussin-lin": {
      name: "Cushion cover",
      short: "Linen, 45 × 45 cm",
      description:
        "A heavy linen cushion cover with a hidden zip, to change the look of a sofa in seconds.",
      details: ["45 × 45 cm", "100% linen", "Insert not included"],
      alt: "Two linen cushions, white and rust, on a striped rug",
    },
    "panier-osier": {
      name: "Wicker basket",
      short: "Woven wicker, 40 cm",
      description:
        "A round basket hand-woven in wicker, to store throws and magazines or hold a plant.",
      details: ["40 cm diameter", "Hand-woven wicker", "Two handles"],
      alt: "Woven wicker baskets on a light wooden floor",
    },
  },
  product: {
    add: "Add to cart",
    addShort: "Add",
    addNamed: "Add {name} to cart",
    added: "Added",
    soldOut: "Sold out",
    inStock: "In stock",
    lowStock: "Only {n} left",
    isNew: "New",
    rating: "{rating} out of 5, {n} reviews",
    back: "Back to the shop",
    quantity: "Quantity",
    decrease: "Remove one",
    increase: "Add one",
    detailsTitle: "Details",
    deliveryTitle: "Shipping and returns",
    delivery:
      "Ships within 48 hours, delivered in 2 to 4 business days. Free shipping on orders over €60, otherwise €4.90. Free returns within 30 days.",
    relatedTitle: "In the same category",
  },
  toast: {
    added: "{name} added to your cart",
    view: "View cart",
  },
  cartBar: {
    label: "Your cart",
    empty: "Cart is empty",
    itemsOne: "1 item",
    itemsMany: "{n} items",
    view: "View cart",
  },
  meta: {
    home: {
      title: "Your business - Objects for the table and the home",
      description:
        "Online shop for ceramics, linen and everyday objects: free shipping on orders over €60, free returns within 30 days.",
    },
    boutique: {
      title: "Shop - Your business",
      description:
        "Every product: tableware, home linen and decor. Prices, availability and one-click add to cart.",
    },
    panier: {
      title: "Cart - Your business",
      description:
        "Your cart: quantities, promo code, shipping costs and order confirmation.",
    },
    crm: {
      title: "Dashboard - Back office",
      description:
        "Revenue, orders, average order value, best sellers and stock alerts for the shop.",
    },
    commandes: {
      title: "Orders - Back office",
      description:
        "Track the shop's orders: search, filter by status and mark parcels as shipped.",
    },
    stocks: {
      title: "Inventory - Back office",
      description:
        "Stock levels by product, alert thresholds, stockouts and inventory value.",
    },
    clients: {
      title: "Customers - Back office",
      description:
        "The shop's customer file: segments, order history, spending and notes.",
    },
  },
  home: {
    hero: {
      eyebrow: "New fall collection",
      title: "Simple objects, made to last",
      description:
        "Ceramics, linen and wool sourced from small workshops. Ships within 48 hours, free shipping on orders over €60.",
      primary: "Visit the shop",
      secondary: "See what's new",
      alt: "Collection of natural-toned ceramic vases lined up on a table",
    },
    categories: {
      title: "Where to start",
      cta: "See the selection",
    },
    bestsellers: {
      eyebrow: "Customer favorites",
      title: "Our best sellers",
      description: "The pieces our customers recommend most often.",
      cta: "The full catalog",
    },
    promises: [
      {
        icon: "truck",
        title: "Ships within 48 hours",
        text: "Delivered in 2 to 4 business days, free over €60.",
      },
      {
        icon: "rotate",
        title: "Free returns",
        text: "30 days to change your mind, no questions asked.",
      },
      {
        icon: "package",
        title: "Plastic-free packaging",
        text: "Recycled cardboard and tissue paper, nothing else.",
      },
      {
        icon: "lock",
        title: "Secure payment",
        text: "Card and bank transfer, encrypted data.",
      },
    ],
    story: {
      eyebrow: "Our workshops",
      title: "Every piece comes from a workshop we know",
      text: "We work with about ten small workshops: potters, weavers, basket makers. Short runs, natural materials and objects designed to be used every day.",
      points: [
        "Short runs, regular restocks",
        "Natural, durable materials",
        "A fair price for the maker and for you",
      ],
      alt: "A potter's hands shaping a clay plate on the wheel",
    },
    reviews: {
      title: "What our customers say",
      description:
        "Average rating of 4.8 out of 5, from more than 500 verified reviews.",
      label: "Customer reviews",
      ratingLabel: "{rating} out of 5 stars",
      items: [
        {
          quote:
            "The bowls are even nicer in person. Carefully packed, arrived in three days.",
          name: "Camille R.",
          detail: "Pebble bowls",
          rating: 5,
        },
        {
          quote:
            "The throw is thick and very soft. We fight over it every evening.",
          name: "Inès D.",
          detail: "Wool throw",
          rating: 5,
        },
        {
          quote: "A subtle scent, and it really lasts its 45 hours.",
          name: "Nathan F.",
          detail: "Amber candle",
          rating: 5,
        },
        {
          quote:
            "I exchanged a cover for another size with no hassle at all. Quick service.",
          name: "Thomas L.",
          detail: "Cushion cover",
          rating: 4,
        },
        {
          quote:
            "A teapot that pours without dripping, finally. And the strainer is handy.",
          name: "Julien M.",
          detail: "Cloud teapot",
          rating: 5,
        },
      ],
    },
    backoffice: {
      eyebrow: "Behind the scenes",
      title: "The whole shop is run from one screen",
      text: "Orders to pack, stock levels, customer records: the back office brings together everything you need to run the shop day to day.",
      points: [
        { icon: "chart", text: "Sales and average order value, week by week" },
        { icon: "boxes", text: "Alerts before a product runs out" },
        { icon: "users", text: "History and notes for every customer" },
      ],
      cta: "Open the back office",
    },
  },
  shop: {
    eyebrow: "Shop",
    title: "The full catalog",
    description:
      "Tableware, home linen and decor: twelve pieces, chosen one by one.",
    filterLabel: "Category",
    all: "All",
    sortLabel: "Sort by",
    sort: {
      popular: "Best sellers",
      priceAsc: "Price, low to high",
      priceDesc: "Price, high to low",
      new: "New arrivals first",
    },
    countOne: "1 product",
    countMany: "{n} products",
  },
  cart: {
    eyebrow: "Cart",
    title: "Your cart",
    loading: "Loading your cart…",
    empty: {
      title: "Your cart is empty",
      text: "Browse the shop and add the pieces you like.",
      cta: "Visit the shop",
    },
    itemsTitle: "Items",
    remove: "Remove {name} from cart",
    removeShort: "Remove",
    quantityOf: "Quantity of {name}",
    decreaseOf: "Remove one {name}",
    increaseOf: "Add one {name}",
    summaryTitle: "Summary",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shippingFree: "Free",
    freeHint: "{amount} away from free shipping",
    freeReached: "Free shipping",
    discount: "Code {code}",
    total: "Total incl. VAT",
    promoLabel: "Promo code",
    promoApply: "Apply",
    promoHint: "Try BIENVENUE10",
    promoInvalid: "This code is not valid.",
    promoApplied: "Code applied: 10% off your items.",
    checkoutTitle: "Shipping address",
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      address: "Address",
      postcode: "Postal code",
      city: "City",
    },
    payNote: "Demo: no payment is requested and no data is sent.",
    submit: "Place order",
    confirmation: {
      title: "Thank you, your order is confirmed",
      text: "Order {id}: you would receive a confirmation email, then a tracking link once it ships.",
      cta: "Keep shopping",
    },
  },
  crm: {
    tagline: "Back office",
    nav: {
      dashboard: "Dashboard",
      orders: "Orders",
      stock: "Inventory",
      customers: "Customers",
    },
    shopLink: "View the shop",
    account: "Demo account",
    demo: "Fictitious data: your changes are not saved.",
    statuses: {
      toPrepare: "To pack",
      shipped: "Shipped",
      delivered: "Delivered",
      refunded: "Refunded",
    },
    segments: {
      vip: "VIP",
      loyal: "Loyal",
      new: "New",
      dormant: "Inactive",
    },
    stockStatus: {
      ok: "In stock",
      low: "Low stock",
      out: "Out of stock",
    },
    itemsOne: "1 item",
    itemsMany: "{n} items",
    searchLabel: "Search",
    noResult: "No results match these filters.",
    dashboard: {
      eyebrow: "Last 30 days",
      title: "Dashboard",
      description:
        "Shop activity over the last four weeks, compared with the four weeks before.",
      kpis: {
        revenue: "Revenue",
        orders: "Orders",
        average: "Average order value",
        returning: "Returning customers",
      },
      versus: "compared with the previous 30 days",
      points: "{n} pts",
      chartTitle: "Revenue by week",
      chartWeek: "Week of {date}",
      chartSummary: "From {from} to {to} over eight weeks.",
      topTitle: "Best sellers",
      sold: "{n} sold",
      alertsTitle: "Stock alerts",
      alertsText: "{n} in stock, threshold {threshold}",
      alertsEmpty: "No product is below its threshold.",
      recentTitle: "To pack",
      seeOrders: "All orders",
      seeStock: "Manage inventory",
    },
    orders: {
      eyebrow: "Sales",
      title: "Orders",
      description:
        "Find an order, filter by status and mark packed parcels as shipped.",
      searchPlaceholder: "Order number or customer",
      statusLabel: "Status",
      all: "All",
      columns: {
        id: "Order",
        date: "Date",
        customer: "Customer",
        items: "Items",
        total: "Total",
        status: "Status",
        action: "Action",
      },
      ship: "Mark shipped",
      shipNamed: "Mark order {id} as shipped",
      deliver: "Mark delivered",
      deliverNamed: "Mark order {id} as delivered",
      count: "{n} orders shown",
      toPrepareCount: "{n} to pack",
    },
    stock: {
      eyebrow: "Catalog",
      title: "Inventory",
      description:
        "Track quantities, spot products below their threshold and log a restock.",
      summary: {
        references: "Products",
        units: "Units in stock",
        value: "Inventory value (cost)",
        alerts: "Below threshold",
      },
      searchPlaceholder: "Product or SKU",
      filterLabel: "Show",
      filters: {
        all: "All",
        low: "Low stock",
        out: "Out of stock",
      },
      columns: {
        product: "Product",
        sku: "SKU",
        price: "Price",
        stock: "Stock",
        threshold: "Threshold",
        status: "Status",
        adjust: "Adjust",
      },
      decrease: "Remove one unit of {name}",
      increase: "Add one unit of {name}",
      restock: "Restock +{n}",
      restockNamed: "Restock {n} units of {name}",
    },
    customers: {
      eyebrow: "Customer relations",
      title: "Customers",
      description:
        "Find a customer, their segment, what they ordered and the team's notes.",
      searchPlaceholder: "Name or email",
      segmentLabel: "Segment",
      all: "All",
      columns: {
        name: "Customer",
        segment: "Segment",
        orders: "Orders",
        spent: "Spent",
        last: "Last order",
      },
      open: "Open {name}'s record",
      detail: {
        empty: "Select a customer to see their record.",
        since: "Customer since {date}",
        newsletter: "Newsletter",
        newsletterYes: "Subscribed",
        newsletterNo: "Not subscribed",
        average: "Average order value",
        notes: "Notes",
        history: "Recent orders",
        noHistory: "No orders in this period.",
        never: "None",
      },
      notes: {
        c01: "Mostly buys ceramics. Let her know when the Sand mugs are back in stock.",
        c02: "Returned the throw (color differed from the photo on screen). Refunded on November 12.",
        c03: "First order on the day she signed up, came through the newsletter.",
        c04: "Often orders gifts: offer gift wrapping.",
        c05: "Our longest-standing customer. Sends photos of her table settings, worth featuring.",
        c06: "No order in a year: reach out with the new collection.",
        c07: "Asked whether the napkins come in sage green.",
        c08: "Likes wicker and linen. Interested in new decor pieces.",
        c09: "Inactive for a year. Left a very positive review of the plates.",
        c10: "New customer, first order with the welcome code.",
      },
    },
  },
};

export const eCommerce: TemplateDefinition<"e-commerce", ECommerceCopy> = {
  slug: "e-commerce",
  /**
   * Papier chaud, encre brun espresso, accent terre cuite (boutons, prix
   * soldés, alertes), fond sable (`tint`) et fond inverse brun nuit. Instrument
   * Serif en affichage (graisse 400), Inter en texte, chiffres tabulaires dans
   * les tableaux du CRM. Rayons doux, ombres dérivées de l'encre.
   */
  theme: {
    surface: "oklch(0.975 0.008 75)",
    raised: "oklch(0.995 0.004 75)",
    tint: "oklch(0.94 0.02 72)",
    ink: "oklch(0.25 0.02 50)",
    inkMuted: "oklch(0.45 0.022 50)",
    eyebrow: "oklch(0.47 0.11 42)",
    line: "oklch(0.87 0.016 70)",
    accent: "oklch(0.5 0.12 42)",
    accentInk: "oklch(0.985 0.008 70)",
    inverse: "oklch(0.27 0.022 52)",
    inverseInk: "oklch(0.96 0.012 75)",
    radius: "0.5rem",
    radiusPill: "9999px",
    fontDisplay:
      "var(--font-display-serif), ui-serif, Georgia, 'Times New Roman', serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 400,
    shadowSm: "0 1px 2px color-mix(in oklch, var(--tpl-ink) 8%, transparent)",
    shadowLg:
      "0 20px 40px -28px color-mix(in oklch, var(--tpl-ink) 35%, transparent)",
  },
  paths: {
    home: "/e-commerce",
    boutique: "/e-commerce/boutique",
    panier: "/e-commerce/panier",
    crm: "/e-commerce/crm",
    commandes: "/e-commerce/crm/commandes",
    stocks: "/e-commerce/crm/stocks",
    clients: "/e-commerce/crm/clients",
  },
  copy: { fr, en },
};

/** Chemin français de la fiche d'un produit (`/e-commerce/produit/<id>`). */
export function eCommerceProductPath(id: ECommerceProductId): string {
  return `/e-commerce/produit/${id}`;
}
