import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « salon-coiffure » (salon de coiffure fictif « Studio Lune » : rose
 * poudré et prune, en-tête flottant en pilule, accueil qui montre les
 * prestations et les prix, l’équipe, des réalisations en photo, des avis et les
 * horaires).
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
 * Images : Unsplash, cheveux vus de dos, mains, outils et intérieur de salon,
 * sans visage, marque ni texte lisible. Même URL dans les deux langues, seul
 * le `alt` se traduit. Chaque photo a été regardée à 2400 px.
 *
 * Adresse et coordonnées manifestement fictives (aucun lieu réel). Les prix
 * « dès » sont des prix de démonstration.
 */

const unsplash = (id: string, extra = "") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600${extra}&q=75`;

const IMG = {
  // Recadrage serveur par le bas : le haut de la photo est un flou gris sans sujet.
  bob: unsplash("1779350676620-fde279b1d023", "&h=2200&crop=bottom"),
  cutting: unsplash("1700760934268-8aa0ef52ce0a"),
  roundBrush: unsplash("1734111719430-fe4a3973f8af"),
  knot: unsplash("1614020863825-28a0bb7e3c3c"),
  updo: unsplash("1769869174682-19e960909bdb"),
  curls: unsplash("1582095133179-bfd08e2fc6b3"),
  longBack: unsplash("1710527988568-3040fd125358"),
  waves: unsplash("1715067877702-9a3b0faf4ba3"),
  longHair: unsplash("1765490372652-13e7ce0f5dbc"),
  comb: unsplash("1747398690600-ffe8ecda9df1"),
  duo: unsplash("1785456283212-338f5bc44d50"),
  platinum: unsplash("1785456439444-5132a64f0dd7"),
  pearlClip: unsplash("1782787229897-2208730e6f01"),
  salon: unsplash("1701556046862-8ad887e4c1a9"),
} as const;

const fr = {
  brand: {
    name: "Studio Lune",
    tagline: "Coupe, couleur et coiffage",
  },
  nav: {
    home: "Accueil",
    prestations: "Prestations",
    stylists: "L’équipe",
    lookbook: "Réalisations",
    reservation: "Réservation",
    journal: "Journal",
    contact: "Contact",
  },
  cta: {
    book: "Réserver",
    bookSlot: "Réserver un créneau",
    call: "Appeler",
  },
  a11y: {
    quickActions: "Actions rapides",
  },
  common: {
    hoursLabel: "Horaires",
    hours: [
      { day: "Mardi au samedi", time: "10 h à 20 h" },
      { day: "Dimanche et lundi", time: "Fermé" },
    ],
    addressLabel: "Adresse",
    address: ["12 rue de l’Exemple", "00000 Votre ville"],
    phoneLabel: "Téléphone",
    phone: { href: "tel:+33199000071", label: "01 99 00 00 71" },
    email: "bonjour@studio-lune.example",
  },
  footer: {
    text: "Salon de coiffure indépendant : coupe, couleur et coiffage, sur rendez-vous du mardi au samedi.",
    siteTitle: "Le salon",
    contactTitle: "Nous joindre",
    note: "Studio Lune est un salon fictif présenté à titre de démonstration.",
  },
  meta: {
    home: {
      title: "Studio Lune - Salon de coiffure",
      description:
        "Salon de coiffure Studio Lune : coupe, couleur, balayage et coiffage de fête avec trois stylistes. Ouvert du mardi au samedi, réservation en ligne.",
    },
    prestations: {
      title: "Prestations - Studio Lune",
      description:
        "Coupes, couleurs, coiffages et soins avec leurs prix et leurs durées : coupe dès 25 €, balayage lumière dès 160 €. Diagnostic offert avant toute couleur.",
    },
    stylists: {
      title: "L’équipe - Studio Lune",
      description:
        "Lina, Maëlys et Noah : coupe, blond et couleur, coiffage de fête. Leurs spécialités, leurs jours de présence et la réservation en ligne.",
    },
    lookbook: {
      title: "Réalisations - Studio Lune",
      description:
        "Carrés, blonds, chignons et boucles : des coiffures réalisées au salon, et un aperçu des lieux avant votre premier rendez-vous.",
    },
    reservation: {
      title: "Réservation - Studio Lune",
      description:
        "Choisissez votre prestation, votre styliste et un créneau du mardi au samedi. Annulation gratuite jusqu’à 24 h avant le rendez-vous.",
    },
    journal: {
      title: "Journal - Studio Lune",
      description:
        "Le blond d’hiver, la coupe qui bouge vraiment, la brillance entre deux rendez-vous : trois conseils de l’équipe du salon.",
    },
    contact: {
      title: "Contact - Studio Lune",
      description:
        "Adresse, horaires et téléphone de Studio Lune, ouvert du mardi au samedi de 10 h à 20 h. Écrivez-nous pour une question avant votre rendez-vous.",
    },
  },
  home: {
    hero: {
      eyebrow: "Salon de coiffure indépendant",
      title: "Une coupe qui vous ressemble, une couleur qui tient.",
      text: "Six fauteuils, trois stylistes et un vrai temps d’échange avant chaque rendez-vous : vos envies, vos cheveux, votre quotidien.",
      book: "Réserver un créneau",
      prices: "Voir les prestations et les prix",
      image: {
        src: IMG.bob,
        alt: "Carré lisse brun cuivré vu de dos, dans un salon aux miroirs ronds",
      },
      review: {
        label: "Note : 5 sur 5",
        quote:
          "Exactement la coupe que je voulais, et elle se coiffe toute seule.",
        name: "Camille R.",
      },
      factsLabel: "En bref",
      facts: [
        { label: "Coupe", value: "dès 25 €" },
        { label: "Balayage", value: "dès 160 €" },
        { label: "Ouvert", value: "mar. au sam." },
      ],
    },
    prices: {
      title: "Prestations et tarifs",
      description:
        "Les prix sont affichés avant de réserver. Pour une couleur, le prix exact est confirmé au diagnostic, avant de commencer.",
      link: "Toutes les prestations",
      image: {
        src: IMG.cutting,
        alt: "Mains qui coupent des longueurs mouillées aux ciseaux, cliente de dos sous une cape noire",
      },
    },
    method: {
      title: "Un rendez‑vous qui prend le temps",
      description:
        "Pas de chaîne de fauteuils : la même personne s’occupe de vous du début à la fin.",
      steps: [
        {
          title: "On parle avant de couper",
          text: "Dix minutes pour comprendre ce que vous voulez, ce que vos cheveux acceptent et le temps que vous avez le matin.",
        },
        {
          title: "Un seul geste, une seule personne",
          text: "Coupe, couleur ou coiffage sont réalisés par la même styliste, sans passage de relais entre deux fauteuils.",
        },
        {
          title: "Des conseils pour la maison",
          text: "On vous montre comment recoiffer le résultat, quels produits sont utiles (ou pas) et quand revenir.",
        },
      ],
    },
    team: {
      title: "Trois stylistes, trois signatures",
      description:
        "Vous choisissez une personne, pas seulement un créneau. Chacune a ses spécialités et ses jours de présence.",
      link: "Rencontrer l’équipe",
      image: {
        src: IMG.duo,
        alt: "Deux clientes de dos, l’une aux longues ondulations blondes, l’autre aux ondulations caramel",
      },
    },
    work: {
      title: "Quelques coiffures récentes",
      description: "Réalisées au salon, sans retouche.",
      link: "Voir toutes les réalisations",
      items: [
        {
          src: IMG.knot,
          alt: "Demi-queue nouée dans de longs cheveux cuivrés, finie en boucle",
          caption: "Demi-queue nouée, cuivre doré",
          meta: "Maëlys · couleur et coiffage",
        },
        {
          src: IMG.updo,
          alt: "Chignon bas ondulé orné de petites fleurs blanches, vu de dos",
          caption: "Chignon bas fleuri",
          meta: "Noah · coiffage de fête, dès 55 €",
        },
        {
          src: IMG.longHair,
          alt: "Gros plan de longs cheveux décoiffés aux reflets blonds",
          caption: "Blond naturel, reflets beige",
          meta: "Maëlys · balayage lumière, dès 160 €",
        },
      ],
    },
    reviews: {
      title: "Ce que disent nos clientes",
      description: "Des avis laissés après un rendez-vous au salon.",
      label: "Avis de clientes",
      items: [
        {
          quote:
            "Je suis arrivée avec une photo floue et Lina a tout de suite compris. Un carré net, qui bouge, et que je coiffe en cinq minutes.",
          name: "Camille R.",
          detail: "Coupe et brushing",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Le balayage de Maëlys est lumineux, sans effet de bandes. Trois mois après, la repousse est encore douce.",
          name: "Inès B.",
          detail: "Balayage lumière",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Chignon pour un mariage, avec un essai deux semaines avant. Il a tenu toute la journée et jusqu’à minuit.",
          name: "Sophie L.",
          detail: "Chignon de fête",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Un salon calme, où l’on ne se sent jamais pressé. Mon fils de huit ans y va sans rechigner.",
          name: "Thomas D.",
          detail: "Coupe homme et enfant",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Très bon résultat. Seul bémol : un peu d’attente à l’arrivée un samedi, mais on m’a prévenue par message.",
          name: "Léa M.",
          detail: "Soin signature",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "Réservation simple, rappel la veille, et un résultat conforme à ce qui était convenu au diagnostic.",
          name: "Nora K.",
          detail: "Couleur racines",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
      ],
    },
    visit: {
      title: "Venir au salon",
      description:
        "Ouvert du mardi au samedi. Pour une couleur ou un coiffage de fête, réservez de préférence quelques jours à l’avance.",
      image: {
        src: IMG.salon,
        alt: "Coin du salon : grand miroir rond éclairé, plante verte et meuble en bois clair",
      },
    },
  },
  prestations: {
    title: "Prestations et tarifs",
    description:
      "Chaque prestation affiche sa durée et son prix. Les prix « dès » dépendent de la longueur et de la densité des cheveux, et sont confirmés avant de commencer.",
    note: "Prix en euros, toutes taxes comprises.",
    groups: [
      {
        title: "Coupes",
        items: [
          {
            name: "Coupe femme",
            detail: "Shampooing, coupe et brushing · 1 h",
            price: "58 €",
          },
          {
            name: "Coupe courte ou carré",
            detail: "Coupe de précision et finition · 45 min",
            price: "52 €",
          },
          {
            name: "Coupe homme",
            detail: "Shampooing et coupe · 30 min",
            price: "38 €",
          },
          {
            name: "Enfant, moins de 12 ans",
            detail: "Coupe · 25 min",
            price: "25 €",
          },
        ],
      },
      {
        title: "Couleur",
        items: [
          {
            name: "Couleur racines",
            detail: "1 h 30",
            price: "dès 68 €",
          },
          {
            name: "Couleur complète",
            detail: "2 h",
            price: "dès 88 €",
          },
          {
            name: "Balayage lumière",
            detail: "Environ 3 h, gloss inclus",
            price: "dès 160 €",
          },
          {
            name: "Gloss brillance",
            detail: "45 min",
            price: "42 €",
          },
        ],
      },
      {
        title: "Coiffage",
        items: [
          {
            name: "Brushing",
            detail: "30 min",
            price: "32 €",
          },
          {
            name: "Boucles ou ondulations",
            detail: "45 min",
            price: "45 €",
          },
          {
            name: "Chignon de fête",
            detail: "45 min, essai possible",
            price: "dès 55 €",
          },
        ],
      },
      {
        title: "Soins",
        items: [
          {
            name: "Soin signature cuir chevelu",
            detail: "40 min, massage inclus",
            price: "36 €",
          },
          {
            name: "Soin profond reconstructeur",
            detail: "30 min, en complément d’une prestation",
            price: "24 €",
          },
          {
            name: "Masque brillance express",
            detail: "15 min, après le shampooing",
            price: "14 €",
          },
        ],
      },
    ],
    advice: {
      title: "Avant votre rendez-vous",
      items: [
        {
          title: "Diagnostic offert",
          text: "Avant toute couleur, nous regardons vos cheveux et fixons ensemble le résultat et le prix.",
        },
        {
          title: "Test cutané",
          text: "Pour une première couleur, nous proposons un test 48 h avant, sur place et sans frais.",
        },
        {
          title: "Annulation gratuite",
          text: "Jusqu’à 24 h avant le rendez-vous. Un simple message suffit.",
        },
      ],
      image: {
        src: IMG.comb,
        alt: "Main qui passe un peigne en bois dans de longs cheveux lisses auburn",
      },
    },
    cta: {
      title: "Prêt à choisir un créneau ?",
      text: "Réservez en ligne en moins d’une minute, ou appelez-nous du mardi au samedi.",
    },
  },
  stylists: {
    title: "Trois stylistes, trois signatures",
    description:
      "Vous pouvez réserver avec la personne de votre choix. Chacune a ses spécialités et ses jours de présence.",
    specialtiesLabel: "Spécialités",
    cta: {
      title: "Pas sûr de votre choix ?",
      text: "Appelez-nous du mardi au samedi : on vous oriente vers la styliste qui correspond à ce que vous cherchez.",
    },
    items: [
      {
        name: "Lina",
        role: "Coupe et mouvement",
        text: "Lina travaille la coupe à sec comme à l’œil : carrés, dégradés, franges. Elle regarde comment vos cheveux tombent avant de prendre les ciseaux.",
        specialties: [
          "Carrés et coupes courtes",
          "Dégradés et franges",
          "Coupes homme",
        ],
        days: "Du mardi au samedi",
        book: "Réserver avec Lina",
        image: {
          src: IMG.cutting,
          alt: "Mains qui coupent des longueurs mouillées aux ciseaux, cliente de dos sous une cape noire",
        },
      },
      {
        name: "Maëlys",
        role: "Blond, couleur et lumière",
        text: "Maëlys signe les balayages et les blonds du salon. Elle prépare chaque couleur au diagnostic et termine par un gloss qui unifie le reflet.",
        specialties: [
          "Balayage lumière",
          "Blond naturel et patine",
          "Couleur racines",
        ],
        days: "Du mardi au vendredi",
        book: "Réserver avec Maëlys",
        image: {
          src: IMG.roundBrush,
          alt: "Brosse ronde dans une longue mèche blonde, sur fond clair",
        },
      },
      {
        name: "Noah",
        role: "Texture, coiffage et événements",
        text: "Noah s’occupe des boucles, des ondulations et des chignons de mariage ou de soirée. Un essai est possible avant le jour J.",
        specialties: [
          "Chignons et coiffures de fête",
          "Boucles et ondulations",
          "Cheveux frisés et texturés",
        ],
        days: "Du mercredi au samedi",
        book: "Réserver avec Noah",
        image: {
          src: IMG.updo,
          alt: "Chignon bas ondulé orné de petites fleurs blanches, vu de dos",
        },
      },
    ],
  },
  lookbook: {
    title: "Des coiffures réalisées au salon",
    description:
      "Carrés, blonds, chignons et boucles : un aperçu du travail de l’équipe.",
    images: [
      {
        src: IMG.bob,
        alt: "Carré lisse brun cuivré vu de dos, dans un salon aux miroirs ronds",
        caption: "Carré lisse, brun cuivré",
        meta: "Lina · coupe",
      },
      {
        src: IMG.waves,
        alt: "Mèches ondulées châtain doré étalées sur un tissu crème",
        caption: "Ondulations châtain doré",
        meta: "Maëlys · couleur et brushing",
      },
      {
        src: IMG.pearlClip,
        alt: "Demi-chignon de longues ondulations blondes retenu par une pince ornée de perles, vu de dos",
        caption: "Demi-chignon, pince perlée",
        meta: "Noah · coiffage de fête",
      },
      {
        src: IMG.longHair,
        alt: "Gros plan de longs cheveux décoiffés aux reflets blonds",
        caption: "Blond naturel, reflets beige",
        meta: "Maëlys · balayage",
      },
      {
        src: IMG.knot,
        alt: "Demi-queue nouée dans de longs cheveux cuivrés, finie en boucle",
        caption: "Demi-queue nouée, cuivre doré",
        meta: "Maëlys · couleur et coiffage",
      },
      {
        src: IMG.duo,
        alt: "Deux clientes de dos, l’une aux longues ondulations blondes, l’autre aux ondulations caramel",
        caption: "Du blond au caramel",
        meta: "Maëlys · couleur",
      },
      {
        src: IMG.curls,
        alt: "Mains qui fixent des boucles roulées sur des cheveux bruns vus de dos, dans un salon lumineux",
        caption: "Boucles roulées avant le coiffage",
        meta: "Noah · coiffage",
      },
      {
        src: IMG.platinum,
        alt: "Mains qui préparent la pose de rallonges sur de longs cheveux blond platine, cliente de dos devant un grand miroir",
        caption: "Blond platine, pose de rallonges",
        meta: "Maëlys · couleur",
      },
      {
        src: IMG.updo,
        alt: "Chignon bas ondulé orné de petites fleurs blanches, vu de dos",
        caption: "Chignon bas fleuri",
        meta: "Noah · coiffage de fête",
      },
    ],
    salon: {
      title: "Le salon",
      text: "Six fauteuils, de la lumière naturelle, des miroirs ronds et un coin d’attente au calme. On limite le nombre de rendez-vous en parallèle pour que chacun soit servi sans attendre.",
      points: [
        "Six postes de coiffage et deux bacs de lavage",
        "Entrée de plain-pied, accessible en fauteuil roulant",
        "Thé, café et eau à disposition",
      ],
      image: {
        src: IMG.salon,
        alt: "Coin du salon : grand miroir rond éclairé, plante verte et meuble en bois clair",
      },
    },
    cta: {
      title: "Une idée en tête ?",
      text: "Apportez vos photos de référence : on vous dit ce qui est réalisable avec vos cheveux.",
    },
  },
  reservation: {
    title: "Réserver un rendez-vous",
    description:
      "Indiquez la prestation, la styliste et le moment qui vous arrange. Nous confirmons le créneau par message.",
    form: {
      title: "Votre demande",
      submit: "Demander ce créneau",
      service: {
        label: "Prestation",
        placeholder: "Choisir une prestation",
        options: [
          { value: "coupe-femme", label: "Coupe femme · 58 €" },
          { value: "coupe-courte", label: "Coupe courte ou carré · 52 €" },
          { value: "coupe-homme", label: "Coupe homme · 38 €" },
          { value: "enfant", label: "Enfant · 25 €" },
          { value: "racines", label: "Couleur racines · dès 68 €" },
          { value: "balayage", label: "Balayage lumière · dès 160 €" },
          { value: "gloss-soin", label: "Gloss et soin profond · 66 €" },
          { value: "chignon", label: "Chignon de fête · dès 55 €" },
        ],
      },
      stylist: {
        label: "Styliste",
        placeholder: "Peu importe",
        options: [
          { value: "lina", label: "Lina" },
          { value: "maelys", label: "Maëlys" },
          { value: "noah", label: "Noah" },
        ],
      },
      date: { label: "Date souhaitée" },
      slot: {
        label: "Moment de la journée",
        placeholder: "Choisir un moment",
        options: [
          { value: "morning", label: "Matin, de 10 h à 13 h" },
          { value: "afternoon", label: "Après-midi, de 13 h à 17 h" },
          { value: "evening", label: "Fin de journée, de 17 h à 20 h" },
        ],
      },
      name: { label: "Nom" },
      phone: { label: "Téléphone" },
      email: { label: "E-mail" },
    },
    formulas: {
      title: "Nos formules les plus réservées",
      items: [
        { name: "Coupe et brushing", detail: "1 h", price: "58 €" },
        { name: "Balayage lumière", detail: "environ 3 h", price: "dès 160 €" },
        {
          name: "Gloss et soin profond",
          detail: "1 h 15",
          price: "66 €",
        },
      ],
    },
    policy: {
      title: "Bon à savoir",
      items: [
        "Annulation ou changement gratuits jusqu’à 24 h avant le rendez-vous.",
        "Pour une couleur, prévoyez la durée indiquée : le diagnostic en fait partie.",
        "Besoin d’un créneau le jour même ? Appelez-nous.",
      ],
      image: {
        src: IMG.platinum,
        alt: "Mains qui préparent la pose de rallonges sur de longs cheveux blond platine, cliente de dos devant un grand miroir",
      },
    },
  },
  journal: {
    title: "Conseils de l’équipe",
    description:
      "Des conseils courts, écrits par les stylistes, pour prendre soin de vos cheveux entre deux rendez-vous.",
    items: [
      {
        title: "Blond d’hiver : garder de la lumière sans abîmer",
        text: "Moins de contraste, plus de reflets : comment éclaircir en douceur quand les cheveux sont secs, et pourquoi le gloss change tout.",
        tag: "Couleur",
        read: "4 min de lecture",
        link: "Réserver un balayage",
        image: {
          src: IMG.longHair,
          alt: "Gros plan de longs cheveux décoiffés aux reflets blonds",
        },
      },
      {
        title: "Choisir une coupe qui bouge vraiment",
        text: "Longueurs, dégradés, frange : ce qui donne du mouvement, selon la nature de vos cheveux.",
        tag: "Coupe",
        read: "3 min de lecture",
        link: "Réserver une coupe",
        image: {
          src: IMG.longBack,
          alt: "Longs cheveux bruns ondulés vus de dos, sur un haut beige rosé",
        },
      },
      {
        title: "Trois gestes pour une brillance qui tient",
        text: "Eau tiède, peigne à grosses dents, masque express : la routine simple de l’équipe entre deux rendez-vous.",
        tag: "Soins",
        read: "3 min de lecture",
        link: "Réserver un soin",
        image: {
          src: IMG.comb,
          alt: "Main qui passe un peigne en bois dans de longs cheveux lisses auburn",
        },
      },
    ],
  },
  contact: {
    title: "Nous contacter",
    description:
      "Une question avant votre rendez-vous, une demande de coiffage de fête ? Écrivez-nous ou passez au salon.",
    infoTitle: "Au salon",
    access: "Entrée de plain-pied, accessible en fauteuil roulant.",
    form: {
      title: "Écrivez-nous",
      submit: "Envoyer le message",
      name: { label: "Nom" },
      email: { label: "E-mail" },
      subject: {
        label: "Sujet",
        placeholder: "Choisir un sujet",
        options: [
          { value: "booking", label: "Un rendez-vous" },
          { value: "event", label: "Un coiffage de fête" },
          { value: "other", label: "Autre question" },
        ],
      },
      message: { label: "Message" },
    },
    image: {
      src: IMG.salon,
      alt: "Coin du salon : grand miroir rond éclairé, plante verte et meuble en bois clair",
    },
  },
} as const;

export type SalonCoiffureCopy = WidenLiterals<typeof fr>;

const en: SalonCoiffureCopy = {
  brand: {
    name: "Your business",
    tagline: "Cuts, color and styling",
  },
  nav: {
    home: "Home",
    prestations: "Services",
    stylists: "Team",
    lookbook: "Our work",
    reservation: "Appointments",
    journal: "Journal",
    contact: "Contact",
  },
  cta: {
    book: "Book",
    bookSlot: "Book an appointment",
    call: "Call",
  },
  a11y: {
    quickActions: "Quick actions",
  },
  common: {
    hoursLabel: "Opening hours",
    hours: [
      { day: "Tuesday to Saturday", time: "10 a.m.–8 p.m." },
      { day: "Sunday and Monday", time: "Closed" },
    ],
    addressLabel: "Address",
    address: ["12 Example Street", "00000 Your city"],
    phoneLabel: "Phone",
    phone: { href: "tel:+33199000071", label: "01 99 00 00 71" },
    email: "contact@example.com",
  },
  footer: {
    text: "An independent hair salon: cuts, color and styling, by appointment Tuesday to Saturday.",
    siteTitle: "The salon",
    contactTitle: "Get in touch",
    note: "This salon is fictional and shown for demonstration purposes.",
  },
  meta: {
    home: {
      title: "Your business - Hair salon",
      description:
        "Hair salon offering cuts, color, balayage and special-occasion styling with three stylists. Open Tuesday to Saturday, with online booking.",
    },
    prestations: {
      title: "Services - Your business",
      description:
        "Cuts, color, styling and treatments with prices and timings: cuts from €25, luminous balayage from €160. Free consultation before any color.",
    },
    stylists: {
      title: "Team - Your business",
      description:
        "Lina, Maëlys and Noah: cuts, blonde and color, special-occasion styling. Their specialties, the days they work and online booking.",
    },
    lookbook: {
      title: "Our work - Your business",
      description:
        "Bobs, blondes, updos and curls: hairstyles created at the salon, plus a look around the space before your first appointment.",
    },
    reservation: {
      title: "Appointments - Your business",
      description:
        "Choose your service, your stylist and a time, Tuesday to Saturday. Free cancellation up to 24 hours before your appointment.",
    },
    journal: {
      title: "Journal - Your business",
      description:
        "Winter blonde, a cut that really moves, shine between appointments: three tips from the salon team.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Address, opening hours and phone number, open Tuesday to Saturday from 10 a.m. to 8 p.m. Write to us with any question before your appointment.",
    },
  },
  home: {
    hero: {
      eyebrow: "Independent hair salon",
      title: "A cut that looks like you, color that lasts.",
      text: "Six chairs, three stylists and real time to talk before every appointment: what you want, your hair, your daily routine.",
      book: "Book an appointment",
      prices: "See services and prices",
      image: {
        src: IMG.bob,
        alt: "Sleek copper-brown bob seen from behind, in a salon with round mirrors",
      },
      review: {
        label: "Rated 5 out of 5",
        quote: "Exactly the cut I wanted, and it styles itself.",
        name: "Camille R.",
      },
      factsLabel: "At a glance",
      facts: [
        { label: "Cut", value: "from €25" },
        { label: "Balayage", value: "from €160" },
        { label: "Open", value: "Tue–Sat" },
      ],
    },
    prices: {
      title: "Services and prices",
      description:
        "Prices are shown before you book. For color, the exact price is confirmed at the consultation, before we start.",
      link: "All services",
      image: {
        src: IMG.cutting,
        alt: "Hands trimming wet hair with scissors, client seen from behind under a black cape",
      },
    },
    method: {
      title: "An appointment that takes its time",
      description:
        "No assembly line: the same person looks after you from start to finish.",
      steps: [
        {
          title: "We talk before we cut",
          text: "Ten minutes to understand what you want, what your hair will allow and how much time you have in the morning.",
        },
        {
          title: "One stylist, start to finish",
          text: "Your cut, color or styling is done by the same stylist, with no hand-off between chairs.",
        },
        {
          title: "Tips for home",
          text: "We show you how to restyle the result, which products are worth using (or not) and when to come back.",
        },
      ],
    },
    team: {
      title: "Three stylists, three signatures",
      description:
        "You choose a person, not just a time slot. Each has their own specialties and days at the salon.",
      link: "Meet the team",
      image: {
        src: IMG.duo,
        alt: "Two clients seen from behind, one with long blonde waves, the other with caramel waves",
      },
    },
    work: {
      title: "A few recent hairstyles",
      description: "Done at the salon, with no retouching.",
      link: "See all our work",
      items: [
        {
          src: IMG.knot,
          alt: "Knotted half-up style in long copper hair, ending in a loose curl",
          caption: "Knotted half-up, golden copper",
          meta: "Maëlys · color and styling",
        },
        {
          src: IMG.updo,
          alt: "Low wavy bun trimmed with small white flowers, seen from behind",
          caption: "Low bun with flowers",
          meta: "Noah · special-occasion styling, from €55",
        },
        {
          src: IMG.longHair,
          alt: "Close-up of long tousled hair with blond highlights",
          caption: "Natural blonde, beige highlights",
          meta: "Maëlys · luminous balayage, from €160",
        },
      ],
    },
    reviews: {
      title: "What our clients say",
      description: "Reviews left after an appointment at the salon.",
      label: "Client reviews",
      items: [
        {
          quote:
            "I came in with a blurry photo and Lina got it right away. A sharp bob that moves, and I style it in five minutes.",
          name: "Camille R.",
          detail: "Cut and blow-dry",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
        {
          quote:
            "Maëlys’s balayage is luminous, with no banding. Three months later, the regrowth is still soft.",
          name: "Inès B.",
          detail: "Luminous balayage",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
        {
          quote:
            "An updo for a wedding, with a trial two weeks before. It lasted all day and well past midnight.",
          name: "Sophie L.",
          detail: "Special-occasion updo",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
        {
          quote:
            "A calm salon where you never feel rushed. My eight-year-old goes without a fuss.",
          name: "Thomas D.",
          detail: "Men’s and kids’ cuts",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
        {
          quote:
            "Very good result. Only downside: a short wait on arrival one Saturday, but they let me know by text.",
          name: "Léa M.",
          detail: "Signature treatment",
          rating: 4,
          ratingLabel: "Rated 4 out of 5",
        },
        {
          quote:
            "Easy booking, a reminder the day before, and a result that matched what we agreed at the consultation.",
          name: "Nora K.",
          detail: "Root color",
          rating: 5,
          ratingLabel: "Rated 5 out of 5",
        },
      ],
    },
    visit: {
      title: "Visit the salon",
      description:
        "Open Tuesday to Saturday. For color or special-occasion styling, we suggest booking a few days ahead.",
      image: {
        src: IMG.salon,
        alt: "Corner of the salon: large lit round mirror, a green plant and a light wooden cabinet",
      },
    },
  },
  prestations: {
    title: "Services and prices",
    description:
      "Every service shows its duration and price. “From” prices depend on hair length and density, and are confirmed before we start.",
    note: "Prices in euros, tax included.",
    groups: [
      {
        title: "Cuts",
        items: [
          {
            name: "Women’s cut",
            detail: "Shampoo, cut and blow-dry · 1 hr",
            price: "€58",
          },
          {
            name: "Short cut or bob",
            detail: "Precision cut and finish · 45 min",
            price: "€52",
          },
          {
            name: "Men’s cut",
            detail: "Shampoo and cut · 30 min",
            price: "€38",
          },
          {
            name: "Kids, under 12",
            detail: "Cut · 25 min",
            price: "€25",
          },
        ],
      },
      {
        title: "Color",
        items: [
          {
            name: "Root color",
            detail: "1 hr 30 min",
            price: "from €68",
          },
          {
            name: "Full color",
            detail: "2 hr",
            price: "from €88",
          },
          {
            name: "Luminous balayage",
            detail: "About 3 hr, gloss included",
            price: "from €160",
          },
          {
            name: "Shine gloss",
            detail: "45 min",
            price: "€42",
          },
        ],
      },
      {
        title: "Styling",
        items: [
          {
            name: "Blow-dry",
            detail: "30 min",
            price: "€32",
          },
          {
            name: "Curls or waves",
            detail: "45 min",
            price: "€45",
          },
          {
            name: "Special-occasion updo",
            detail: "45 min, trial available",
            price: "from €55",
          },
        ],
      },
      {
        title: "Treatments",
        items: [
          {
            name: "Signature scalp treatment",
            detail: "40 min, massage included",
            price: "€36",
          },
          {
            name: "Deep repair treatment",
            detail: "30 min, added to another service",
            price: "€24",
          },
          {
            name: "Express shine mask",
            detail: "15 min, after the shampoo",
            price: "€14",
          },
        ],
      },
    ],
    advice: {
      title: "Before your appointment",
      items: [
        {
          title: "Free consultation",
          text: "Before any color, we look at your hair and agree on the result and the price together.",
        },
        {
          title: "Skin test",
          text: "For a first color, we offer a test 48 hours before, at the salon and free of charge.",
        },
        {
          title: "Free cancellation",
          text: "Up to 24 hours before your appointment. A quick message is enough.",
        },
      ],
      image: {
        src: IMG.comb,
        alt: "Hand running a wooden comb through long, smooth auburn hair",
      },
    },
    cta: {
      title: "Ready to pick a time?",
      text: "Book online in under a minute, or call us Tuesday to Saturday.",
    },
  },
  stylists: {
    title: "Three stylists, three signatures",
    description:
      "You can book with the person you prefer. Each has their own specialties and days at the salon.",
    specialtiesLabel: "Specialties",
    cta: {
      title: "Not sure who to choose?",
      text: "Call us Tuesday to Saturday and we’ll point you to the stylist who fits what you’re after.",
    },
    items: [
      {
        name: "Lina",
        role: "Cuts and movement",
        text: "Lina cuts dry as well as by eye: bobs, layers, bangs. She looks at how your hair falls before she picks up the scissors.",
        specialties: ["Bobs and short cuts", "Layers and bangs", "Men’s cuts"],
        days: "Tuesday to Saturday",
        book: "Book with Lina",
        image: {
          src: IMG.cutting,
          alt: "Hands trimming wet hair with scissors, client seen from behind under a black cape",
        },
      },
      {
        name: "Maëlys",
        role: "Blonde, color and light",
        text: "Maëlys creates the salon’s balayage and blondes. She plans every color at the consultation and finishes with a gloss that evens out the tone.",
        specialties: [
          "Luminous balayage",
          "Natural blonde and toning",
          "Root color",
        ],
        days: "Tuesday to Friday",
        book: "Book with Maëlys",
        image: {
          src: IMG.roundBrush,
          alt: "Round brush lifting a long blonde lock against a pale background",
        },
      },
      {
        name: "Noah",
        role: "Texture, styling and events",
        text: "Noah handles curls, waves and wedding or evening updos. A trial is possible before the big day.",
        specialties: [
          "Updos and special-occasion styling",
          "Curls and waves",
          "Curly and textured hair",
        ],
        days: "Wednesday to Saturday",
        book: "Book with Noah",
        image: {
          src: IMG.updo,
          alt: "Low wavy bun trimmed with small white flowers, seen from behind",
        },
      },
    ],
  },
  lookbook: {
    title: "Hairstyles created at the salon",
    description: "Bobs, blondes, updos and curls: a look at the team’s work.",
    images: [
      {
        src: IMG.bob,
        alt: "Sleek copper-brown bob seen from behind, in a salon with round mirrors",
        caption: "Sleek bob, copper brown",
        meta: "Lina · cut",
      },
      {
        src: IMG.waves,
        alt: "Wavy golden-brown locks spread over cream fabric",
        caption: "Golden-brown waves",
        meta: "Maëlys · color and blow-dry",
      },
      {
        src: IMG.pearlClip,
        alt: "Half-up bun of long blonde waves held by a pearl-studded clip, seen from behind",
        caption: "Half-up bun, pearl clip",
        meta: "Noah · special-occasion styling",
      },
      {
        src: IMG.longHair,
        alt: "Close-up of long tousled hair with blond highlights",
        caption: "Natural blonde, beige highlights",
        meta: "Maëlys · balayage",
      },
      {
        src: IMG.knot,
        alt: "Knotted half-up style in long copper hair, ending in a loose curl",
        caption: "Knotted half-up, golden copper",
        meta: "Maëlys · color and styling",
      },
      {
        src: IMG.duo,
        alt: "Two clients seen from behind, one with long blonde waves, the other with caramel waves",
        caption: "From blonde to caramel",
        meta: "Maëlys · color",
      },
      {
        src: IMG.curls,
        alt: "Hands pinning rolled curls on brown hair seen from behind, in a bright salon",
        caption: "Rolled curls before styling",
        meta: "Noah · styling",
      },
      {
        src: IMG.platinum,
        alt: "Hands preparing hair extensions on long platinum-blonde hair, client seen from behind in front of a large mirror",
        caption: "Platinum blonde, extension fitting",
        meta: "Maëlys · color",
      },
      {
        src: IMG.updo,
        alt: "Low wavy bun trimmed with small white flowers, seen from behind",
        caption: "Low bun with flowers",
        meta: "Noah · special-occasion styling",
      },
    ],
    salon: {
      title: "The salon",
      text: "Six chairs, natural light, round mirrors and a quiet waiting corner. We limit the number of simultaneous appointments so everyone is looked after without waiting.",
      points: [
        "Six styling stations and two wash basins",
        "Step-free entrance, wheelchair accessible",
        "Tea, coffee and water available",
      ],
      image: {
        src: IMG.salon,
        alt: "Corner of the salon: large lit round mirror, a green plant and a light wooden cabinet",
      },
    },
    cta: {
      title: "Have an idea in mind?",
      text: "Bring your reference photos: we’ll tell you what’s achievable with your hair.",
    },
  },
  reservation: {
    title: "Book an appointment",
    description:
      "Tell us the service, the stylist and the time that suits you. We’ll confirm the slot by text.",
    form: {
      title: "Your request",
      submit: "Request this slot",
      service: {
        label: "Service",
        placeholder: "Choose a service",
        options: [
          { value: "coupe-femme", label: "Women’s cut · €58" },
          { value: "coupe-courte", label: "Short cut or bob · €52" },
          { value: "coupe-homme", label: "Men’s cut · €38" },
          { value: "enfant", label: "Kids · €25" },
          { value: "racines", label: "Root color · from €68" },
          { value: "balayage", label: "Luminous balayage · from €160" },
          { value: "gloss-soin", label: "Gloss and deep treatment · €66" },
          { value: "chignon", label: "Special-occasion updo · from €55" },
        ],
      },
      stylist: {
        label: "Stylist",
        placeholder: "No preference",
        options: [
          { value: "lina", label: "Lina" },
          { value: "maelys", label: "Maëlys" },
          { value: "noah", label: "Noah" },
        ],
      },
      date: { label: "Preferred date" },
      slot: {
        label: "Time of day",
        placeholder: "Choose a time",
        options: [
          { value: "morning", label: "Morning, 10 a.m. to 1 p.m." },
          { value: "afternoon", label: "Afternoon, 1 p.m. to 5 p.m." },
          { value: "evening", label: "Late afternoon, 5 p.m. to 8 p.m." },
        ],
      },
      name: { label: "Name" },
      phone: { label: "Phone" },
      email: { label: "Email" },
    },
    formulas: {
      title: "Our most booked packages",
      items: [
        { name: "Cut and blow-dry", detail: "1 hr", price: "€58" },
        { name: "Luminous balayage", detail: "about 3 hr", price: "from €160" },
        {
          name: "Gloss and deep treatment",
          detail: "1 hr 15 min",
          price: "€66",
        },
      ],
    },
    policy: {
      title: "Good to know",
      items: [
        "Free cancellation or changes up to 24 hours before your appointment.",
        "For color, allow the time shown: the consultation is part of it.",
        "Need a same-day slot? Give us a call.",
      ],
      image: {
        src: IMG.platinum,
        alt: "Hands preparing hair extensions on long platinum-blonde hair, client seen from behind in front of a large mirror",
      },
    },
  },
  journal: {
    title: "Tips from the team",
    description:
      "Short tips written by the stylists, to look after your hair between appointments.",
    items: [
      {
        title: "Winter blonde: keep the light without the damage",
        text: "Less contrast, more shine: how to lighten gently when hair is dry, and why a gloss changes everything.",
        tag: "Color",
        read: "4 min read",
        link: "Book a balayage",
        image: {
          src: IMG.longHair,
          alt: "Close-up of long tousled hair with blond highlights",
        },
      },
      {
        title: "How to choose a cut that really moves",
        text: "Lengths, layers, bangs: what adds movement, depending on the nature of your hair.",
        tag: "Cuts",
        read: "3 min read",
        link: "Book a cut",
        image: {
          src: IMG.longBack,
          alt: "Long wavy brown hair seen from behind, over a rosy beige top",
        },
      },
      {
        title: "Three habits for shine that lasts",
        text: "Lukewarm water, a wide-tooth comb, an express mask: the team’s simple routine between appointments.",
        tag: "Treatments",
        read: "3 min read",
        link: "Book a treatment",
        image: {
          src: IMG.comb,
          alt: "Hand running a wooden comb through long, smooth auburn hair",
        },
      },
    ],
  },
  contact: {
    title: "Get in touch",
    description:
      "A question before your appointment, a request for special-occasion styling? Write to us or drop by the salon.",
    infoTitle: "At the salon",
    access: "Step-free entrance, wheelchair accessible.",
    form: {
      title: "Write to us",
      submit: "Send message",
      name: { label: "Name" },
      email: { label: "Email" },
      subject: {
        label: "Subject",
        placeholder: "Choose a subject",
        options: [
          { value: "booking", label: "An appointment" },
          { value: "event", label: "Special-occasion styling" },
          { value: "other", label: "Another question" },
        ],
      },
      message: { label: "Message" },
    },
    image: {
      src: IMG.salon,
      alt: "Corner of the salon: large lit round mirror, a green plant and a light wooden cabinet",
    },
  },
};

export const salonCoiffure: TemplateDefinition<
  "salon-coiffure",
  SalonCoiffureCopy
> = {
  slug: "salon-coiffure",
  theme: {
    // Rose poudré du fond de page.
    surface: "oklch(0.966 0.011 22)",
    raised: "oklch(1 0 0)",
    // Rose poudré plus soutenu : bandeaux et section d’ouverture des pages.
    tint: "oklch(0.925 0.03 14)",
    ink: "oklch(0.235 0.021 352)",
    inkMuted: "oklch(0.42 0.03 352)",
    // Vieux rose des sur-titres, foncé pour tenir 4,5:1 sur le rose poudré.
    eyebrow: "oklch(0.46 0.075 6)",
    eyebrowInverse: "oklch(0.88 0.05 6)",
    line: "oklch(0.88 0.022 20)",
    // Prune : boutons pleins et sections sombres.
    accent: "oklch(0.33 0.075 348)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.285 0.06 350)",
    inverseInk: "oklch(0.985 0.008 20)",
    // Un seul grand rayon (cartes, photos) et la pilule (en-tête, boutons).
    radius: "1.75rem",
    radiusPill: "9999px",
    headerRadius: "9999px",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 600,
    shadowSm: "0 10px 32px oklch(0.235 0.021 352 / 0.07)",
    shadowLg: "0 24px 64px oklch(0.235 0.021 352 / 0.15)",
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
