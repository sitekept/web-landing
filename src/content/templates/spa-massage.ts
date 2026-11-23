import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « spa-massage » (institut de massage et de bien-être fictif
 * « Votre entreprise »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/spa-massage/`) n'ont
 * aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `SpaMassageCopy` (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou
 * une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais. Les vues la résolvent avec une table
 * `Record<SpaMassageIconKey, LucideIcon>` (`src/templates/spa-massage/parts.tsx`).
 *
 * Images : sources libres de droits (Unsplash). Le hero est une bougie allumée dans une coupelle
 * de verre sur fond noir (aucun texte ni marque). Deux photos montrent un visage, yeux fermés :
 * la photo de soin du visage (visage presque de face) et celle de la salle duo
 * (`photo-1544161515…`, visage d'une cliente) ; on les garde. Aucune enseigne ni marque lisible. Les `alt` sont dans la copie, traduits.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: unsplash("1700650709284-6e438b9ae98b"),
  relax: unsplash("1519824145371-296894a0daa9"),
  stones: unsplash("1600334089648-b0d9d3028eb2"),
  facial: unsplash("1570172619644-dfd03ed5d881"),
  bath: unsplash("1507652313519-d4e9174996dd"),
  gift: unsplash("1540555700478-4be289fbecef"),
  duoRoom: unsplash("1544161515-4ab6ce6db874"),
  lounge: unsplash("1560750588-73207b1ef5b8"),
  tea: unsplash("1564890369478-c89ca6d9cde9"),
  waterRoom: unsplash("1507652313519-d4e9174996dd"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Institut de massage et de bien-être",
  },
  phone: {
    href: "tel:+33199000026",
    label: "01 99 00 00 26",
  },
  nav: {
    home: "Accueil",
    soins: "Soins",
    espace: "L’espace",
    reservation: "Réserver",
  },
  cta: {
    book: "Réserver un soin",
    call: "Appeler l’institut",
    callShort: "Appeler",
    bookShort: "Réserver",
    seeMenu: "Voir tous les soins",
    seeSpace: "Découvrir l’espace",
    bookRitual: "Réserver ce rituel",
    giftCard: "Offrir une carte cadeau",
  },
  common: {
    wellnessNotice:
      "Massages de bien-être, non thérapeutiques et non médicaux.",
    hoursLabel: "Horaires",
    hours: [
      { day: "Lundi", time: "Fermé" },
      { day: "Mardi au vendredi", time: "10 h – 20 h" },
      { day: "Samedi", time: "9 h 30 – 19 h" },
      { day: "Dimanche", time: "Fermé" },
    ],
    email: "contact@votre-entreprise.example",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    access:
      "Centre-ville, entrée de plain-pied, stationnement public à quelques minutes à pied.",
    ratingLabel: "Note : {rating} sur 5",
  },
  meta: {
    home: {
      title: "Votre entreprise - Institut de massage et de bien-être",
      description:
        "Massages de bien-être, soins du visage et rituels de 90 à 120 minutes dans un institut feutré. Tarifs, cartes cadeaux et réservation.",
    },
    soins: {
      title: "Soins et tarifs - Votre entreprise",
      description:
        "La carte complète : cinq massages de bien-être, trois soins du visage et trois rituels, avec durées, tarifs en euros, conseils avant et après le soin.",
    },
    espace: {
      title: "L’espace - Votre entreprise",
      description:
        "Découvrez l’institut : salle de massage, salle duo, espace détente, tisanerie et vestiaire. Hygiène, accueil et horaires d’ouverture.",
    },
    reservation: {
      title: "Réservation - Votre entreprise",
      description:
        "Demandez un soin : choisissez un créneau, retrouvez les horaires, les coordonnées et les conditions d’annulation de l’institut.",
    },
  },
  home: {
    hero: {
      eyebrow: "Institut de massage et de bien-être",
      title: "Laissez le monde au vestiaire.",
      description:
        "Lumière tamisée, huiles tièdes, gestes lents : massages de bien-être, soins du visage et rituels de 90 à 120 minutes, dans un institut pensé pour le silence.",
      facts: [
        "Soins de 45 à 120 minutes",
        "Sur rendez-vous, du mardi au samedi",
        "Tisane offerte après chaque soin",
      ],
      image: {
        src: IMG.hero,
        alt: "Une bougie allumée dans une coupelle de verre, dont la flamme éclaire doucement la pénombre.",
      },
    },
    signature: {
      eyebrow: "La signature de l’institut",
      title: "Chaque soin commence par dix minutes de silence.",
      text: "Vous arrivez, vous déposez votre manteau, on vous sert une tisane. Puis la lumière baisse, l’huile est tiédie entre les mains et le soin commence, à votre rythme. Rien n’est pressé, rien n’est imposé.",
      stats: [
        { value: "45⁠–⁠120", label: "minutes de soin, selon la formule" },
        { value: "5", label: "massages de bien-être" },
        { value: "3", label: "rituels de 90 à 120 minutes" },
        { value: "1", label: "tisane offerte après chaque soin" },
      ],
    },
    featured: {
      eyebrow: "Nos soins phares",
      title: "Trois façons de ralentir.",
      description:
        "La carte complète compte cinq massages, trois soins du visage et trois rituels. Voici ceux que l’on nous demande le plus. Tarifs pour la durée indiquée.",
      items: [
        {
          name: "Massage relaxant",
          duration: "60 min",
          price: "80 €",
          text: "Mouvements longs et enveloppants à l’huile tiède, pour relâcher les épaules, le dos et la nuque.",
          image: {
            src: IMG.relax,
            alt: "Les mains d’une praticienne pétrissent doucement l’épaule d’une personne allongée.",
          },
        },
        {
          name: "Massage aux pierres chaudes",
          duration: "75 min",
          price: "100 €",
          text: "Des galets de basalte chauffés, posés puis glissés le long du dos, pour une chaleur profonde.",
          image: {
            src: IMG.stones,
            alt: "Une rangée de galets noirs posés le long du dos d’une personne allongée, avec des fleurs blanches.",
          },
        },
        {
          name: "Soin du visage éclat",
          duration: "45 min",
          price: "70 €",
          text: "Nettoyage doux, gommage léger, massage du visage et masque, pour une peau plus lumineuse.",
          image: {
            src: IMG.facial,
            alt: "Une esthéticienne applique un masque au pinceau sur le visage d’une personne allongée, un bandeau blanc dans les cheveux.",
          },
        },
      ],
    },
    ritual: {
      eyebrow: "Le rituel à l’honneur",
      title: "Rituel Nuit d’ambre",
      text: "Deux heures hors du temps : un bain tiède aux huiles, un gommage doux, un massage aux pierres chaudes et un soin du visage, puis une tisane au calme.",
      duration: "120 min",
      price: "189 €",
      stepsLabel: "Le déroulé",
      steps: [
        {
          time: "20 min",
          title: "Bain tiède",
          text: "Aux huiles essentielles, pour laisser la journée derrière vous.",
        },
        {
          time: "25 min",
          title: "Gommage doux",
          text: "Un gommage au sucre et à l’huile, du dos aux pieds.",
        },
        {
          time: "55 min",
          title: "Massage aux pierres chaudes",
          text: "Un long massage enveloppant, à la chaleur des galets.",
        },
        {
          time: "20 min",
          title: "Soin du visage",
          text: "Masque nourrissant et massage du visage pour finir en douceur.",
        },
      ],
      image: {
        src: IMG.bath,
        alt: "Une salle d’eau en pierre claire avec une grande baignoire ovale, une plante verte et des galets au sol.",
      },
    },
    proof: {
      eyebrow: "Avis clients",
      title: "Ils repartent plus légers.",
      description:
        "Quelques retours de personnes venues se faire masser. Les avis de cette démonstration sont fictifs.",
      label: "Avis clients de l’institut",
      items: [
        {
          quote:
            "Une ambiance vraiment apaisante. Je me suis endormie pendant le massage relaxant et j’ai marché plus légère pendant deux jours.",
          name: "Claire M.",
          detail: "Massage relaxant",
          rating: 5,
        },
        {
          quote:
            "Pression bien dosée, la praticienne a ajusté dès que je l’ai demandé. Mon dos m’a remercié.",
          name: "Julien D.",
          detail: "Massage tissus profonds",
          rating: 5,
        },
        {
          quote:
            "Le rituel Nuit d’ambre est un vrai cadeau à soi-même. Le bain, la lumière, la tisane : tout est pensé.",
          name: "Sophie L.",
          detail: "Rituel Nuit d’ambre",
          rating: 5,
        },
        {
          quote:
            "Massage prénatal très doux, installation confortable avec les coussins. Je me suis sentie écoutée.",
          name: "Amandine P.",
          detail: "Massage prénatal",
          rating: 4,
        },
        {
          quote:
            "Nous avons offert un massage duo à nos parents. Ils en parlent encore, et la carte cadeau était très bien présentée.",
          name: "Thomas R.",
          detail: "Massage duo",
          rating: 5,
        },
        {
          quote:
            "Accueil chaleureux, lieu impeccable. J’aurais aimé un créneau plus tard le samedi, mais le soin était parfait.",
          name: "Marc B.",
          detail: "Soin du visage",
          rating: 4,
        },
      ],
    },
    practical: {
      eyebrow: "Infos pratiques",
      title: "Venir à l’institut",
      description:
        "Un petit mot pour préparer votre venue et profiter pleinement de votre temps sur place.",
      hoursTitle: "Horaires",
      visitTitle: "Avant votre venue",
      visit: [
        "Arrivez dix minutes avant l’heure du soin pour vous installer sans hâte.",
        "Un vestiaire avec casier, serviettes et chaussons est à votre disposition.",
        "Réservez au moins 48 heures à l’avance pour un rituel.",
      ],
      contactTitle: "Nous trouver",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Adresse",
      accessLabel: "Accès",
    },
    closing: {
      title: "Votre prochain soin vous attend.",
      text: "Réservez en ligne ou appelez-nous : nous vous conseillons volontiers le soin qui vous convient.",
    },
  },
  gift: {
    eyebrow: "Carte cadeau",
    title: "Offrez une heure de silence.",
    text: "Une carte cadeau valable douze mois, utilisable sur tous les soins et rituels. Remise en main propre dans un écrin, ou envoyée par e-mail avec un mot personnalisé.",
    amountsLabel: "Montants",
    amounts: ["50 €", "90 €", "150 €", "Montant libre"],
    note: "Valable douze mois à partir de la date d’achat.",
    badge: "Carte cadeau",
    badgeFrom: "à partir de 50 €",
    image: {
      src: IMG.gift,
      alt: "Une serviette roulée, un flacon de soin, un petit bouquet de tulipes roses et une bougie sur une tablette claire.",
    },
  },
  soins: {
    hero: {
      eyebrow: "La carte des soins",
      title: "Soins et rituels",
      description:
        "Massages, soins du visage et rituels de 90 à 120 minutes. Tous les soins de l’institut sont des soins de bien-être, non thérapeutiques et non médicaux.",
      jumpLabel: "Aller à une catégorie",
      jumps: [
        { id: "massages", label: "Massages" },
        { id: "visage", label: "Visage" },
        { id: "rituels", label: "Rituels" },
        { id: "cartes-cadeaux", label: "Cartes cadeaux" },
      ],
    },
    categories: [
      {
        id: "massages",
        number: "01",
        title: "Massages",
        intro:
          "Cinq massages de bien-être, à l’huile tiède, sur table chauffée. L’intensité se règle avec vous, du début à la fin.",
        items: [
          {
            name: "Massage relaxant",
            text: "Mouvements lents et enveloppants, du dos aux jambes, pour relâcher les tensions du quotidien et laisser l’esprit se poser.",
            note: "",
            options: [
              { duration: "60 min", price: "80 €" },
              { duration: "90 min", price: "115 €" },
            ],
          },
          {
            name: "Massage tissus profonds",
            text: "Pressions plus appuyées et ciblées sur les zones chargées : nuque, épaules, bas du dos. L’intensité s’ajuste à votre ressenti.",
            note: "",
            options: [
              { duration: "60 min", price: "90 €" },
              { duration: "90 min", price: "125 €" },
            ],
          },
          {
            name: "Massage aux pierres chaudes",
            text: "Des galets de basalte chauffés, posés puis glissés le long du dos, pour une chaleur profonde et enveloppante.",
            note: "",
            options: [
              { duration: "75 min", price: "100 €" },
              { duration: "90 min", price: "120 €" },
            ],
          },
          {
            name: "Massage prénatal",
            text: "Un massage très doux, en position adaptée et avec des coussins de maintien, à partir du deuxième trimestre de grossesse. Il demande l’accord de votre médecin ou de votre sage-femme.",
            note: "Le seul massage proposé pendant la grossesse.",
            options: [{ duration: "60 min", price: "85 €" }],
          },
          {
            name: "Massage duo",
            text: "Deux tables côte à côte, deux praticiennes, le même rythme : un moment à partager en couple ou entre proches.",
            note: "Tarifs pour deux personnes.",
            options: [
              { duration: "60 min", price: "160 €" },
              { duration: "90 min", price: "230 €" },
            ],
          },
        ],
      },
      {
        id: "visage",
        number: "02",
        title: "Soins du visage",
        intro:
          "Des soins doux, adaptés à votre peau du jour. Chacun comprend un nettoyage, un massage du visage et un masque.",
        items: [
          {
            name: "Soin éclat",
            text: "Nettoyage doux, gommage léger, massage du visage et masque, pour une peau plus lumineuse.",
            note: "",
            options: [{ duration: "45 min", price: "70 €" }],
          },
          {
            name: "Soin hydratation intense",
            text: "Un soin profond pour les peaux qui tiraillent : sérum, masque nourrissant, massage du visage et du cou.",
            note: "",
            options: [{ duration: "60 min", price: "90 €" }],
          },
          {
            name: "Soin visage et nuque",
            text: "Le soin hydratation prolongé d’un massage de la nuque et des épaules, pour relâcher le haut du corps.",
            note: "",
            options: [{ duration: "75 min", price: "110 €" }],
          },
        ],
      },
      {
        id: "rituels",
        number: "03",
        title: "Rituels",
        intro:
          "Des parcours complets de 90 à 120 minutes, qui enchaînent plusieurs soins sans que vous ayez à y penser.",
        items: [
          {
            name: "Rituel Détente profonde",
            text: "Gommage doux, massage relaxant de 60 minutes et soin du visage express, suivis d’une tisane au calme.",
            note: "",
            options: [{ duration: "90 min", price: "139 €" }],
          },
          {
            name: "Rituel Nuit d’ambre",
            text: "Bain tiède aux huiles, gommage doux, massage aux pierres chaudes et soin du visage. Notre rituel signature.",
            note: "",
            options: [{ duration: "120 min", price: "189 €" }],
          },
          {
            name: "Rituel Duo",
            text: "Bain tiède, gommage et massage aux pierres chaudes pour deux, puis une tisane partagée dans la salle duo.",
            note: "Tarif pour deux personnes.",
            options: [{ duration: "120 min", price: "360 €" }],
          },
        ],
      },
    ],
    giftBand: {
      id: "cartes-cadeaux",
      title: "Cartes cadeaux",
      text: "Montants de 50 € à 150 €, ou montant libre. Valables douze mois sur tous les soins et rituels.",
    },
    advice: {
      eyebrow: "Conseils",
      title: "Avant et après votre soin",
      before: {
        title: "Avant",
        items: [
          "Arrivez dix minutes à l’avance pour vous installer sans hâte.",
          "Évitez un repas copieux dans l’heure qui précède.",
          "Signalez toute zone sensible, blessure récente ou allergie aux huiles.",
          "Laissez bijoux et montre au vestiaire : peignoir et chaussons sont fournis.",
        ],
      },
      after: {
        title: "Après",
        items: [
          "Buvez un grand verre d’eau et gardez, si possible, une soirée calme.",
          "Évitez le sport intense et l’alcool le soir même.",
          "Une légère somnolence est normale : laissez-vous un peu de temps avant de reprendre la route.",
          "Hydratez la peau avec une crème neutre si elle vous paraît tendue.",
        ],
      },
    },
    caution: {
      title: "À savoir avant de réserver",
      text: "Nos massages sont des soins de bien-être. Ils n’ont aucune visée thérapeutique et ne remplacent pas un suivi médical.",
      items: [
        "Grossesse : seul le massage prénatal est proposé, avec l’accord de votre médecin ou de votre sage-femme.",
        "Fièvre, infection, maladie de peau ou blessure récente : mieux vaut reporter le soin.",
        "Problème cardiaque ou circulatoire, traitement en cours ou antécédent important : demandez l’avis de votre médecin avant de réserver.",
        "En cas de doute, appelez-nous : nous vous conseillerons ou adapterons le soin.",
      ],
    },
    closing: {
      title: "Un soin vous tente ?",
      text: "Dites-nous ce qui vous ferait du bien : nous trouverons la durée et le soin qui conviennent.",
    },
  },
  espace: {
    hero: {
      eyebrow: "L’espace",
      title: "Un lieu pensé pour le silence.",
      description:
        "Cinq pièces, une lumière chaude et des matières naturelles : l’institut a été aménagé pour que l’on ralentisse dès la porte.",
    },
    gallery: {
      label: "Les espaces de l’institut",
      items: [
        {
          title: "Salle de massage",
          meta: "Soins individuels",
          image: {
            src: IMG.relax,
            alt: "Les mains d’une praticienne pétrissent doucement l’épaule d’une personne allongée sur une table de massage.",
          },
        },
        {
          title: "Salle duo",
          meta: "Deux tables côte à côte",
          image: {
            src: IMG.duoRoom,
            alt: "Deux tables de massage côte à côte : les mains d’une praticienne versent de l’huile sur le dos d’une personne, une seconde personne est allongée derrière.",
          },
        },
        {
          title: "Espace détente",
          meta: "Avant et après le soin",
          image: {
            src: IMG.lounge,
            alt: "Un coin repos avec un fauteuil en rotin, une lampe, des plantes et un petit bassin dans la lumière douce.",
          },
        },
        {
          title: "Tisanerie",
          meta: "Tisane offerte",
          image: {
            src: IMG.tea,
            alt: "Une théière blanche et un bol en grès sur un plateau en bois, près d’une plante.",
          },
        },
        {
          title: "Salle d’eau",
          meta: "Bain, galets et serviettes",
          image: {
            src: IMG.waterRoom,
            alt: "Une salle d’eau en pierre claire avec une grande baignoire ovale, une plante verte et des galets au sol.",
          },
        },
      ],
    },
    care: {
      eyebrow: "Hygiène et accueil",
      title: "Un accueil attentif, un lieu irréprochable.",
      description:
        "Ce qui se voit à peine compte autant que ce qui se voit : voici comment nous préparons chaque soin.",
      items: [
        {
          icon: "sparkles",
          title: "Linge propre à chaque soin",
          text: "Draps, serviettes et peignoirs sont changés après chaque personne et lavés à haute température.",
        },
        {
          icon: "droplets",
          title: "Surfaces nettoyées entre deux soins",
          text: "Tables, poignées et casiers sont nettoyés et désinfectés avant chaque nouvelle arrivée.",
        },
        {
          icon: "coffee",
          title: "Une tisane à l’arrivée",
          text: "Servie dans la tisanerie, pour prendre le temps de vous poser avant le soin.",
        },
        {
          icon: "accessibility",
          title: "Un lieu accessible",
          text: "Entrée de plain-pied, vestiaire adapté et tables réglables en hauteur.",
        },
      ],
    },
    hours: {
      eyebrow: "Horaires",
      title: "Quand nous rendre visite",
      text: "Le dernier soin est calé pour se terminer avant la fermeture. En dehors de ces horaires, appelez-nous : nous étudions volontiers une demande particulière.",
    },
    closing: {
      title: "Venez voir par vous-même.",
      text: "Réservez un soin et prenez le temps de découvrir chaque pièce, tisane en main.",
    },
  },
  reservation: {
    hero: {
      eyebrow: "Réservation",
      title: "Réservez votre moment.",
      description:
        "Choisissez un soin et un créneau : nous confirmons votre rendez-vous par téléphone ou par e-mail sous 24 heures.",
    },
    form: {
      title: "Votre demande",
      intro:
        "Indiquez le soin souhaité et vos disponibilités : nous confirmons sous 24 heures.",
      submit: "Envoyer ma demande",
      fields: {
        name: "Nom et prénom",
        phone: "Téléphone",
        email: "E-mail",
        treatment: "Soin souhaité",
        treatmentPlaceholder: "Choisir un soin",
        treatments: [
          { value: "relaxant", label: "Massage relaxant" },
          { value: "profonds", label: "Massage tissus profonds" },
          { value: "pierres", label: "Massage aux pierres chaudes" },
          { value: "prenatal", label: "Massage prénatal" },
          { value: "duo", label: "Massage duo" },
          { value: "eclat", label: "Soin du visage éclat" },
          { value: "hydratation", label: "Soin hydratation intense" },
          { value: "visage-nuque", label: "Soin visage et nuque" },
          { value: "nuit-ambre", label: "Rituel Nuit d’ambre" },
          { value: "detente", label: "Rituel Détente profonde" },
          { value: "rituel-duo", label: "Rituel Duo" },
          { value: "carte-cadeau", label: "Carte cadeau" },
        ],
        duration: "Durée",
        durationPlaceholder: "Choisir une durée",
        durations: [
          { value: "45", label: "45 minutes" },
          { value: "60", label: "60 minutes" },
          { value: "75", label: "75 minutes" },
          { value: "90", label: "90 minutes" },
          { value: "120", label: "120 minutes" },
          { value: "conseil", label: "Je ne sais pas encore" },
        ],
        date: "Date souhaitée",
        datePlaceholder: "Par exemple : samedi après-midi",
        message: "Message (facultatif)",
        messagePlaceholder: "Allergies, grossesse, attentes particulières…",
      },
    },
    details: {
      title: "Coordonnées",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Adresse",
      accessLabel: "Accès",
    },
    cancellation: {
      title: "Conditions d’annulation",
      items: [
        "Annulation ou report gratuit jusqu’à 24 heures avant le soin.",
        "Moins de 24 heures avant : la moitié du soin est facturée.",
        "En cas de retard, la durée du soin peut être raccourcie pour ne pas décaler les suivants.",
        "Les cartes cadeaux ne sont ni remboursables ni échangeables contre de l’argent.",
      ],
    },
  },
  footer: {
    title: "Institut de massage et de bien-être",
    text: "Un lieu calme pour ralentir : massages, soins du visage et rituels, sur rendez-vous.",
    contactLabel: "Contact",
    barLabel: "Accès rapide",
  },
} as const;

type FrCopy = typeof fr;

/** Type de la copie, dérivé du français (clés, longueurs de listes, clés `icon`). */
export type SpaMassageCopy = WidenLiterals<FrCopy>;

/** Clé d'une icône utilisée dans la copie (table dans `parts.tsx`). */
export type SpaMassageIconKey = TemplateIconKey<SpaMassageCopy>;

const en: SpaMassageCopy = {
  brand: {
    name: "Your business",
    tagline: "Massage and wellness studio",
  },
  phone: {
    href: "tel:+33199000026",
    label: "01 99 00 00 26",
  },
  nav: {
    home: "Home",
    soins: "Treatments",
    espace: "The space",
    reservation: "Book",
  },
  cta: {
    book: "Book a treatment",
    call: "Call the studio",
    callShort: "Call",
    bookShort: "Book",
    seeMenu: "See all treatments",
    seeSpace: "Discover the space",
    bookRitual: "Book this ritual",
    giftCard: "Give a gift card",
  },
  common: {
    wellnessNotice: "Wellness massages, non-therapeutic and non-medical.",
    hoursLabel: "Opening hours",
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday to Friday", time: "10 AM – 8 PM" },
      { day: "Saturday", time: "9:30 AM – 7 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    email: "contact@example.com",
    address: "12 Example Street, 00000 Your city",
    access:
      "City center, step-free entrance, public parking a few minutes’ walk away.",
    ratingLabel: "Rating: {rating} out of 5",
  },
  meta: {
    home: {
      title: "Your business - Massage and wellness studio",
      description:
        "Wellness massages, facials and 90 to 120 minute rituals in a hushed studio. Prices, gift cards and booking.",
    },
    soins: {
      title: "Treatments and prices - Your business",
      description:
        "The full menu: five wellness massages, three facials and three rituals, with durations, prices in euros, and tips for before and after your treatment.",
    },
    espace: {
      title: "The space - Your business",
      description:
        "Discover the studio: massage room, duo room, relaxation area, tea room and cloakroom. Hygiene, welcome and opening hours.",
    },
    reservation: {
      title: "Booking - Your business",
      description:
        "Request a treatment: choose a time slot and find the studio’s hours, contact details and cancellation policy.",
    },
  },
  home: {
    hero: {
      eyebrow: "Massage and wellness studio",
      title: "Leave the world at the door.",
      description:
        "Dimmed lights, warm oils, slow hands: wellness massages, facials and 90 to 120 minute rituals, in a studio designed for silence.",
      facts: [
        "Treatments from 45 to 120 minutes",
        "By appointment, Tuesday to Saturday",
        "Herbal tea included after every treatment",
      ],
      image: {
        src: IMG.hero,
        alt: "A lit candle in a glass dish, its flame softly lighting the darkness.",
      },
    },
    signature: {
      eyebrow: "The studio’s signature",
      title: "Every treatment begins with ten minutes of silence.",
      text: "You arrive, hang up your coat, and are served a herbal tea. Then the lights lower, the oil is warmed between hands and the treatment begins, at your pace. Nothing is rushed, nothing is imposed.",
      stats: [
        {
          value: "45⁠–⁠120",
          label: "minutes per treatment, depending on the option",
        },
        { value: "5", label: "wellness massages" },
        { value: "3", label: "rituals of 90 to 120 minutes" },
        { value: "1", label: "herbal tea after every treatment" },
      ],
    },
    featured: {
      eyebrow: "Signature treatments",
      title: "Three ways to slow down.",
      description:
        "The full menu has five massages, three facials and three rituals. These are the ones guests ask for most. Prices are for the duration shown.",
      items: [
        {
          name: "Relaxing massage",
          duration: "60 min",
          price: "€80",
          text: "Long, enveloping strokes with warm oil, to release the shoulders, back and neck.",
          image: {
            src: IMG.relax,
            alt: "A therapist’s hands gently knead the shoulder of a person lying down.",
          },
        },
        {
          name: "Hot stone massage",
          duration: "75 min",
          price: "€100",
          text: "Heated basalt stones, placed and then glided along the back, for a deep, enveloping warmth.",
          image: {
            src: IMG.stones,
            alt: "A row of black stones resting along the back of a person lying down, with white flowers.",
          },
        },
        {
          name: "Radiance facial",
          duration: "45 min",
          price: "€70",
          text: "Gentle cleansing, light exfoliation, a facial massage and a mask, for brighter skin.",
          image: {
            src: IMG.facial,
            alt: "A beautician brushes a mask onto the face of a person lying down, a white band in their hair.",
          },
        },
      ],
    },
    ritual: {
      eyebrow: "Ritual in the spotlight",
      title: "Amber Night ritual",
      text: "Two hours out of time: a warm oil bath, a gentle scrub, a hot stone massage and a facial, then a quiet cup of herbal tea.",
      duration: "120 min",
      price: "€189",
      stepsLabel: "The journey",
      steps: [
        {
          time: "20 min",
          title: "Warm bath",
          text: "With essential oils, to leave the day behind you.",
        },
        {
          time: "25 min",
          title: "Gentle scrub",
          text: "A sugar and oil scrub, from the back to the feet.",
        },
        {
          time: "55 min",
          title: "Hot stone massage",
          text: "A long, enveloping massage, warmed by the stones.",
        },
        {
          time: "20 min",
          title: "Facial",
          text: "A nourishing mask and facial massage to finish gently.",
        },
      ],
      image: {
        src: IMG.bath,
        alt: "A bathroom in pale stone with a large oval tub, a green plant and pebbles on the floor.",
      },
    },
    proof: {
      eyebrow: "Guest reviews",
      title: "They leave feeling lighter.",
      description:
        "A few words from people who came for a massage. The reviews on this demo are fictional.",
      label: "Studio guest reviews",
      items: [
        {
          quote:
            "A truly soothing atmosphere. I fell asleep during the relaxing massage and walked lighter for two days.",
          name: "Claire M.",
          detail: "Relaxing massage",
          rating: 5,
        },
        {
          quote:
            "Well-judged pressure, and the therapist adjusted as soon as I asked. My back thanked me.",
          name: "Julien D.",
          detail: "Deep tissue massage",
          rating: 5,
        },
        {
          quote:
            "The Amber Night ritual is a real gift to yourself. The bath, the light, the tea: everything is thought through.",
          name: "Sophie L.",
          detail: "Amber Night ritual",
          rating: 5,
        },
        {
          quote:
            "A very gentle prenatal massage, comfortably set up with cushions. I felt listened to.",
          name: "Amandine P.",
          detail: "Prenatal massage",
          rating: 4,
        },
        {
          quote:
            "We gave our parents a duo massage. They still talk about it, and the gift card was beautifully presented.",
          name: "Thomas R.",
          detail: "Duo massage",
          rating: 5,
        },
        {
          quote:
            "Warm welcome, spotless place. I would have liked a later slot on Saturday, but the treatment was perfect.",
          name: "Marc B.",
          detail: "Facial",
          rating: 4,
        },
      ],
    },
    practical: {
      eyebrow: "Practical information",
      title: "Visiting the studio",
      description:
        "A few notes to prepare your visit and make the most of your time with us.",
      hoursTitle: "Opening hours",
      visitTitle: "Before you come",
      visit: [
        "Arrive ten minutes before your treatment to settle in without rushing.",
        "A cloakroom with a locker, towels and slippers is at your disposal.",
        "Book at least 48 hours ahead for a ritual.",
      ],
      contactTitle: "Find us",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      accessLabel: "Getting here",
    },
    closing: {
      title: "Your next treatment is waiting.",
      text: "Book online or call us: we are happy to recommend the treatment that suits you.",
    },
  },
  gift: {
    eyebrow: "Gift card",
    title: "Give an hour of silence.",
    text: "A gift card valid for twelve months, usable on every treatment and ritual. Handed over in a case, or sent by email with a personal note.",
    amountsLabel: "Amounts",
    amounts: ["€50", "€90", "€150", "Custom amount"],
    note: "Valid for twelve months from the date of purchase.",
    badge: "Gift card",
    badgeFrom: "from €50",
    image: {
      src: IMG.gift,
      alt: "A rolled towel, a care bottle, a small bunch of pink tulips and a candle on a pale shelf.",
    },
  },
  soins: {
    hero: {
      eyebrow: "The treatment menu",
      title: "Treatments and rituals",
      description:
        "Massages, facials and rituals of 90 to 120 minutes. Every treatment at the studio is a wellness treatment, non-therapeutic and non-medical.",
      jumpLabel: "Jump to a category",
      jumps: [
        { id: "massages", label: "Massages" },
        { id: "visage", label: "Facials" },
        { id: "rituels", label: "Rituals" },
        { id: "cartes-cadeaux", label: "Gift cards" },
      ],
    },
    categories: [
      {
        id: "massages",
        number: "01",
        title: "Massages",
        intro:
          "Five wellness massages, with warm oil, on a heated table. The pressure is set with you, from start to finish.",
        items: [
          {
            name: "Relaxing massage",
            text: "Slow, enveloping strokes from the back to the legs, to release everyday tension and let the mind settle.",
            note: "",
            options: [
              { duration: "60 min", price: "€80" },
              { duration: "90 min", price: "€115" },
            ],
          },
          {
            name: "Deep tissue massage",
            text: "Firmer, targeted pressure on the areas that carry the most: neck, shoulders, lower back. The intensity adjusts to how you feel.",
            note: "",
            options: [
              { duration: "60 min", price: "€90" },
              { duration: "90 min", price: "€125" },
            ],
          },
          {
            name: "Hot stone massage",
            text: "Heated basalt stones, placed and then glided along the back, for a deep, enveloping warmth.",
            note: "",
            options: [
              { duration: "75 min", price: "€100" },
              { duration: "90 min", price: "€120" },
            ],
          },
          {
            name: "Prenatal massage",
            text: "A very gentle massage, in an adapted position with support cushions, from the second trimester of pregnancy. It requires the approval of your doctor or midwife.",
            note: "The only massage offered during pregnancy.",
            options: [{ duration: "60 min", price: "€85" }],
          },
          {
            name: "Duo massage",
            text: "Two tables side by side, two therapists, the same rhythm: a moment to share as a couple or with someone close.",
            note: "Prices are for two people.",
            options: [
              { duration: "60 min", price: "€160" },
              { duration: "90 min", price: "€230" },
            ],
          },
        ],
      },
      {
        id: "visage",
        number: "02",
        title: "Facials",
        intro:
          "Gentle treatments, adapted to your skin of the day. Each one includes a cleanse, a facial massage and a mask.",
        items: [
          {
            name: "Radiance facial",
            text: "Gentle cleansing, light exfoliation, a facial massage and a mask, for brighter skin.",
            note: "",
            options: [{ duration: "45 min", price: "€70" }],
          },
          {
            name: "Intense hydration facial",
            text: "A deep treatment for tight, dry skin: serum, a nourishing mask, face and neck massage.",
            note: "",
            options: [{ duration: "60 min", price: "€90" }],
          },
          {
            name: "Face and neck facial",
            text: "The hydration facial extended with a neck and shoulder massage, to release the upper body.",
            note: "",
            options: [{ duration: "75 min", price: "€110" }],
          },
        ],
      },
      {
        id: "rituels",
        number: "03",
        title: "Rituals",
        intro:
          "Complete journeys of 90 to 120 minutes, linking several treatments so you have nothing to think about.",
        items: [
          {
            name: "Deep Calm ritual",
            text: "A gentle scrub, a 60-minute relaxing massage and an express facial, followed by a quiet cup of herbal tea.",
            note: "",
            options: [{ duration: "90 min", price: "€139" }],
          },
          {
            name: "Amber Night ritual",
            text: "A warm oil bath, a gentle scrub, a hot stone massage and a facial. Our signature ritual.",
            note: "",
            options: [{ duration: "120 min", price: "€189" }],
          },
          {
            name: "Duo ritual",
            text: "A warm bath, a scrub and a hot stone massage for two, then a shared herbal tea in the duo room.",
            note: "Price is for two people.",
            options: [{ duration: "120 min", price: "€360" }],
          },
        ],
      },
    ],
    giftBand: {
      id: "cartes-cadeaux",
      title: "Gift cards",
      text: "Amounts from €50 to €150, or a custom amount. Valid for twelve months on every treatment and ritual.",
    },
    advice: {
      eyebrow: "Tips",
      title: "Before and after your treatment",
      before: {
        title: "Before",
        items: [
          "Arrive ten minutes early to settle in without rushing.",
          "Avoid a heavy meal in the hour before.",
          "Mention any sensitive area, recent injury or allergy to oils.",
          "Leave jewelry and your watch in the cloakroom: a robe and slippers are provided.",
        ],
      },
      after: {
        title: "After",
        items: [
          "Drink a large glass of water and, if you can, keep the evening calm.",
          "Avoid intense exercise and alcohol the same evening.",
          "A little drowsiness is normal: give yourself some time before getting back on the road.",
          "Moisturize with a neutral cream if your skin feels tight.",
        ],
      },
    },
    caution: {
      title: "Good to know before booking",
      text: "Our massages are wellness treatments. They have no therapeutic purpose and do not replace medical care.",
      items: [
        "Pregnancy: only the prenatal massage is offered, with the approval of your doctor or midwife.",
        "Fever, infection, skin condition or recent injury: it is best to postpone the treatment.",
        "Heart or circulation problems, ongoing treatment or a significant medical history: ask your doctor before booking.",
        "If in doubt, call us: we will advise you or adapt the treatment.",
      ],
    },
    closing: {
      title: "Which treatment tempts you?",
      text: "Tell us what would do you good: we will find the duration and treatment that suit you.",
    },
  },
  espace: {
    hero: {
      eyebrow: "The space",
      title: "A place designed for silence.",
      description:
        "Five rooms, warm light and natural materials: the studio was designed so that you slow down from the moment you step in.",
    },
    gallery: {
      label: "The studio’s spaces",
      items: [
        {
          title: "Massage room",
          meta: "Individual treatments",
          image: {
            src: IMG.relax,
            alt: "A therapist’s hands gently knead the shoulder of a person lying on a massage table.",
          },
        },
        {
          title: "Duo room",
          meta: "Two tables side by side",
          image: {
            src: IMG.duoRoom,
            alt: "Two massage tables side by side: a therapist’s hands pour oil onto a person’s back, and a second person lies behind.",
          },
        },
        {
          title: "Relaxation area",
          meta: "Before and after your treatment",
          image: {
            src: IMG.lounge,
            alt: "A resting corner with a rattan armchair, a lamp, plants and a small pool in soft light.",
          },
        },
        {
          title: "Tea room",
          meta: "Herbal tea included",
          image: {
            src: IMG.tea,
            alt: "A white teapot and a stoneware bowl on a wooden tray, next to a plant.",
          },
        },
        {
          title: "Water room",
          meta: "Bath, pebbles and towels",
          image: {
            src: IMG.waterRoom,
            alt: "A bathroom in pale stone with a large oval tub, a green plant and pebbles on the floor.",
          },
        },
      ],
    },
    care: {
      eyebrow: "Hygiene and welcome",
      title: "An attentive welcome, a spotless place.",
      description:
        "What you barely see matters as much as what you do see: here is how we prepare every treatment.",
      items: [
        {
          icon: "sparkles",
          title: "Fresh linen for every treatment",
          text: "Sheets, towels and robes are changed after every guest and washed at high temperature.",
        },
        {
          icon: "droplets",
          title: "Surfaces cleaned between treatments",
          text: "Tables, handles and lockers are cleaned and disinfected before each new arrival.",
        },
        {
          icon: "coffee",
          title: "Herbal tea on arrival",
          text: "Served in the tea room, so you can take your time settling in before the treatment.",
        },
        {
          icon: "accessibility",
          title: "An accessible place",
          text: "Step-free entrance, an adapted cloakroom and height-adjustable tables.",
        },
      ],
    },
    hours: {
      eyebrow: "Opening hours",
      title: "When to visit",
      text: "The last treatment is scheduled to finish before closing time. Outside these hours, call us: we are happy to consider a special request.",
    },
    closing: {
      title: "Come and see for yourself.",
      text: "Book a treatment and take the time to discover every room, herbal tea in hand.",
    },
  },
  reservation: {
    hero: {
      eyebrow: "Booking",
      title: "Book your moment.",
      description:
        "Choose a treatment and a time: we confirm your appointment by phone or email within 24 hours.",
    },
    form: {
      title: "Your request",
      intro:
        "Tell us which treatment you would like and when you are available: we confirm within 24 hours.",
      submit: "Send my request",
      fields: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        treatment: "Treatment",
        treatmentPlaceholder: "Choose a treatment",
        treatments: [
          { value: "relaxant", label: "Relaxing massage" },
          { value: "profonds", label: "Deep tissue massage" },
          { value: "pierres", label: "Hot stone massage" },
          { value: "prenatal", label: "Prenatal massage" },
          { value: "duo", label: "Duo massage" },
          { value: "eclat", label: "Radiance facial" },
          { value: "hydratation", label: "Intense hydration facial" },
          { value: "visage-nuque", label: "Face and neck facial" },
          { value: "nuit-ambre", label: "Amber Night ritual" },
          { value: "detente", label: "Deep Calm ritual" },
          { value: "rituel-duo", label: "Duo ritual" },
          { value: "carte-cadeau", label: "Gift card" },
        ],
        duration: "Duration",
        durationPlaceholder: "Choose a duration",
        durations: [
          { value: "45", label: "45 minutes" },
          { value: "60", label: "60 minutes" },
          { value: "75", label: "75 minutes" },
          { value: "90", label: "90 minutes" },
          { value: "120", label: "120 minutes" },
          { value: "conseil", label: "I’m not sure yet" },
        ],
        date: "Preferred date",
        datePlaceholder: "For example: Saturday afternoon",
        message: "Message (optional)",
        messagePlaceholder: "Allergies, pregnancy, special requests…",
      },
    },
    details: {
      title: "Contact details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      accessLabel: "Getting here",
    },
    cancellation: {
      title: "Cancellation policy",
      items: [
        "Free cancellation or rescheduling up to 24 hours before your treatment.",
        "Less than 24 hours before: half of the treatment is charged.",
        "If you arrive late, the treatment may be shortened so as not to delay the next guests.",
        "Gift cards are neither refundable nor exchangeable for cash.",
      ],
    },
  },
  footer: {
    title: "Massage and wellness studio",
    text: "A calm place to slow down: massages, facials and rituals, by appointment.",
    contactLabel: "Contact",
    barLabel: "Quick access",
  },
};

export const spaMassage: TemplateDefinition<"spa-massage", SpaMassageCopy> = {
  slug: "spa-massage",
  /**
   * Identité « institut nocturne » : fond brun-prune très sombre, texte crème,
   * accent laiton doux (boutons, étoiles, filets) et section inverse crème en
   * contrepoint. Instrument Serif en affichage (graisse 400 seule : les titres
   * sont remis à `font-normal` par le shell), Inter en texte. Rayons doux,
   * peu d'ombres : de la lumière (halo laiton) plutôt que du relief.
   */
  theme: {
    surface: "oklch(0.19 0.022 12)",
    raised: "oklch(0.235 0.026 12)",
    ink: "oklch(0.95 0.02 85)",
    inkMuted: "oklch(0.8 0.03 75)",
    line: "oklch(0.36 0.035 20)",
    accent: "oklch(0.78 0.115 78)",
    accentInk: "oklch(0.2 0.03 30)",
    inverse: "oklch(0.945 0.028 85)",
    inverseInk: "oklch(0.25 0.035 25)",
    radius: "1.5rem",
    fontDisplay:
      "var(--font-display-serif), ui-serif, Georgia, 'Times New Roman', serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 400,
    shadowSm: "0 1px 0 color-mix(in oklch, var(--tpl-ink) 6%, transparent)",
    shadowLg:
      "0 0 56px -18px color-mix(in oklch, var(--tpl-accent) 38%, transparent)",
  },
  paths: {
    home: "/spa-massage",
    soins: "/spa-massage/soins",
    espace: "/spa-massage/espace",
    reservation: "/spa-massage/reservation",
  },
  copy: { fr, en },
};
