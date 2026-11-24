import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « ménage-nettoyage » (entreprise fictive « Maison Nette »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, métadonnées. Les vues (`src/templates/menage-nettoyage/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `MenageNettoyageCopy`
 * (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou une liste de
 * longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais ; la table `ICONS` de `parts.tsx` la résout.
 *
 * Images : Unsplash, sans marque, texte lisible ni visage. `alt` dans la copie.
 * Secteurs : noms génériques et fictifs (Centre, Nord, Est…), les mêmes sur
 * l'accueil, la page zones et la version anglaise.
 */

const unsplash = (id: string, rect = "") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80${rect}`;

const IMG = {
  // Recadrée sur la main et le flacon (portrait, côté droit de la photo).
  spray: unsplash("1628177142898-93e36e4e3a50", "&rect=0.38,0,0.58,1"),
  duster: unsplash("1713110824336-f78c320dcf8e", "&rect=0,0.03,1,0.8"),
} as const;

const fr = {
  brand: {
    name: "Maison Nette",
    tagline: "Ménage à domicile et nettoyage de bureaux",
  },
  phone: {
    href: "tel:+33199000091",
    label: "01 99 00 00 91",
  },
  nav: {
    home: "Accueil",
    formules: "Formules",
    zones: "Zones",
    entreprises: "Entreprises",
    faq: "FAQ",
  },
  cta: {
    quote: "Obtenir un devis",
    seeFormules: "Voir les formules",
    business: "Nettoyage de bureaux",
    call: "Appeler",
    zones: "Voir les secteurs",
  },
  a11y: { quickActions: "Actions rapides" },
  common: {
    email: "bonjour@maisonnette.example",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    area: "Votre ville et communes voisines",
    hours: "Du lundi au samedi, 8 h à 19 h",
  },
  footer: {
    title:
      "Un devis gratuit en deux minutes, un prix ferme avant le premier passage.",
    text: "Ménage à domicile et nettoyage de bureaux. Produits et matériel fournis, assurance responsabilité civile professionnelle.",
    contactTitle: "Nous joindre",
    siteTitle: "Navigation",
  },
  closing: {
    title: "Recevez votre prix ferme sous 24 h",
    text: "Envoyez-nous ces quatre informations pour votre devis ou appelez-nous : nous répondons du lundi au samedi.",
  },
  home: {
    hero: {
      eyebrow: "Ménage à domicile et nettoyage de bureaux",
      title: "Un logement net toute la semaine, un devis en deux minutes.",
      text: "Quatre informations suffisent pour un devis juste : envoyez-les-nous par e-mail ou par téléphone, nous vous envoyons un prix ferme sous 24 h. Une équipe fixe passe chez vous avec ses produits et son matériel.",
      points: [
        "Prix ferme avant le premier passage",
        "Produits et matériel fournis",
        "Toujours la même équipe",
      ],
      cardTitle: "Votre devis en 4 infos",
      cardTime: "2 min",
      cardNote:
        "Envoyez-nous ces informations par e-mail ou par téléphone. Gratuit, sans engagement, réponse sous 24 h.",
      steps: [
        {
          label: "Votre besoin",
          text: "Entretien régulier, grand ménage, remise en état ou bureaux.",
        },
        {
          label: "La surface",
          text: "Studio, appartement, maison ou local professionnel.",
        },
        {
          label: "Le rythme",
          text: "Une seule fois, chaque semaine ou tous les quinze jours, le matin ou le soir.",
        },
        {
          label: "Votre secteur",
          text: "Centre, Nord, Est, Sud-Est, Ouest ou Sud-Ouest.",
        },
      ],
    },
    services: {
      title: "Ce que nous nettoyons, chez vous et au bureau",
      description:
        "Quatre services, un seul interlocuteur. Le prix est fixé dans le devis, avant le premier passage.",
      items: [
        {
          icon: "sparkles",
          title: "Entretien régulier",
          text: "Un passage chaque semaine ou tous les quinze jours : cuisine, sanitaires, sols, poussières et poubelles sorties.",
          meta: "2 à 4 h par passage",
        },
        {
          icon: "clipboard",
          title: "Grand ménage",
          text: "Une remise à zéro complète : intérieur des placards et de l’électroménager, vitres, plinthes et recoins.",
          meta: "Une demi-journée à une journée",
        },
        {
          icon: "key",
          title: "Fin de bail et remise en état",
          text: "Avant un déménagement ou après de petits travaux : le logement est rendu propre, prêt à être visité ou habité.",
          meta: "Calé sur votre remise des clés",
        },
        {
          icon: "building",
          title: "Bureaux et commerces",
          text: "Ouverture ou fermeture hors des heures de travail : sanitaires, sols, surfaces de contact et poubelles.",
          meta: "Tôt le matin ou en soirée",
        },
      ],
      image: {
        src: IMG.spray,
        alt: "Une main gantée de bleu tient un flacon pulvérisateur bleu au-dessus d’un plancher en bois clair.",
      },
      link: "Voir les formules",
    },
    visit: {
      eyebrow: "Passage type",
      title: "Ce que contient un passage d’entretien",
      description:
        "La liste est remise avant le premier passage et suivie à chaque visite. Vous pouvez y ajouter des options.",
      groups: [
        {
          title: "Cuisine",
          items: [
            "Plan de travail et évier",
            "Plaques et extérieur du four",
            "Façades des meubles",
            "Sol lavé",
          ],
        },
        {
          title: "Salle de bains",
          items: [
            "Lavabo, douche et baignoire",
            "Miroirs et robinetterie",
            "WC désinfectés",
            "Sol lavé",
          ],
        },
        {
          title: "Pièces de vie",
          items: [
            "Poussière sur toutes les surfaces",
            "Aspirateur et sol",
            "Lit refait sur demande",
            "Poubelles sorties",
          ],
        },
        {
          title: "En option",
          items: [
            "Vitres intérieures",
            "Intérieur du réfrigérateur",
            "Un panier de repassage",
            "Une machine de linge lancée",
          ],
        },
      ],
    },
    promise: {
      eyebrow: "Nos engagements",
      title: "Ce que nous vous garantissons",
      quote: {
        text: "« Je rentre le soir dans un appartement net, sans avoir rien géré. L’équipe est ponctuelle et prévient toujours quand elle a du retard. »",
        author: "Camille D., appartement 3 pièces, passage hebdomadaire",
      },
      items: [
        {
          icon: "shield",
          title: "Un prix ferme",
          text: "Le prix du devis est celui que vous payez, sans supplément le jour du passage.",
        },
        {
          icon: "users",
          title: "Une équipe fixe",
          text: "Les mêmes deux personnes à chaque visite : elles connaissent vos clés, vos pièces et vos habitudes.",
        },
        {
          icon: "sparkles",
          title: "Reprise offerte",
          text: "Un point vous déçoit ? Dites-le sous 48 h, nous revenons le reprendre sans frais.",
        },
      ],
    },
    zone: {
      eyebrow: "Secteurs",
      title: "Chaque secteur a ses jours de passage",
      description:
        "Le créneau de votre devis suit la tournée : il ne bouge pas d’une semaine à l’autre.",
      tours: [
        { days: "Lundi et jeudi", areas: "Centre et Nord" },
        { days: "Mardi et vendredi", areas: "Ouest et Sud-Ouest" },
        { days: "Mercredi et samedi", areas: "Est et Sud-Est" },
      ],
      contactTitle: "Nous joindre",
      note: "Hors secteur ? Écrivez-nous, nous regardons chaque adresse.",
    },
  },
  formules: {
    eyebrow: "Formules",
    title: "Quatre formules selon la taille et l’usage de votre lieu",
    description:
      "Le prix dépend de la surface et du rythme. Vous pouvez changer de formule à tout moment, sans frais.",
    image: {
      src: IMG.duster,
      alt: "Une main gantée de blanc tient un plumeau en plumes au-dessus d’un tabouret en rotin, devant un îlot de cuisine en marbre.",
    },
    rhythmLabel: "Rythme et durée",
    items: [
      {
        title: "Essentiel",
        audience: "Studio ou appartement jusqu’à 70 m²",
        rhythm: "Un passage par semaine, 2 à 3 h",
        text: "Cuisine, sanitaires, sols et poussières : l’entretien courant, fait de la même façon à chaque visite.",
      },
      {
        title: "Confort",
        audience: "Famille ou maison jusqu’à 120 m²",
        rhythm: "Un à deux passages par semaine, 3 à 4 h",
        text: "L’Essentiel, plus les rangements légers, le lit refait et une machine de linge lancée.",
      },
      {
        title: "Intensif",
        audience: "Logement à remettre à neuf",
        rhythm: "Un passage unique, une demi-journée à une journée",
        text: "Vitres intérieures, intérieur des placards et de l’électroménager, plinthes et recoins.",
      },
      {
        title: "Professionnel",
        audience: "Bureau, cabinet ou showroom jusqu’à 150 m²",
        rhythm: "De un à cinq passages par semaine, avant ou après l’ouverture",
        text: "Sanitaires, sols, surfaces de contact et poubelles, avec un plan de passage remis par écrit.",
      },
    ],
  },
  zones: {
    eyebrow: "Zones",
    title: "Six secteurs, chacun avec ses jours de passage",
    description:
      "Repérez le vôtre : le jour de tournée détermine le créneau proposé dans votre devis.",
    toursTitle: "Tournées de la semaine",
    tours: [
      { days: "Lundi et jeudi", areas: "Centre et Nord" },
      { days: "Mardi et vendredi", areas: "Ouest et Sud-Ouest" },
      { days: "Mercredi et samedi", areas: "Est et Sud-Est" },
    ],
    areasTitle: "Les six secteurs",
    areas: [
      { name: "Centre", days: "Lundi et jeudi" },
      { name: "Nord", days: "Lundi et jeudi" },
      { name: "Ouest", days: "Mardi et vendredi" },
      { name: "Sud-Ouest", days: "Mardi et vendredi" },
      { name: "Est", days: "Mercredi et samedi" },
      { name: "Sud-Est", days: "Mercredi et samedi" },
    ],
    firstVisit: {
      title: "Premier passage",
      text: "Sous cinq jours ouvrés après l’acceptation du devis, sur le créneau de votre secteur.",
    },
    outside: {
      title: "Hors secteur ?",
      text: "Vous êtes à la limite d’un secteur ? Écrivez-nous : nous étudions chaque adresse et répondons sous 24 h.",
    },
  },
  entreprises: {
    eyebrow: "Entreprises",
    title: "Le ménage de vos locaux, sans gêner votre activité",
    description:
      "Nous passons avant l’ouverture ou après la fermeture, avec un plan de passage écrit et un seul interlocuteur.",
    deliverablesTitle: "Remis avant le premier passage",
    deliverables: [
      "Un plan de passage par zone : bureaux, sanitaires, accueil",
      "Les jours et les horaires convenus avec vous",
      "La liste des produits utilisés",
      "Un interlocuteur unique et son numéro direct",
    ],
    placesTitle: "Les lieux que nous entretenons",
    places: [
      {
        icon: "building",
        title: "Bureaux et plateaux",
        text: "Postes de travail, salles de réunion, sanitaires et cuisines partagées, jusqu’à 150 m². Ouverture ou fermeture discrète.",
      },
      {
        icon: "door",
        title: "Cabinets et studios",
        text: "Salles d’attente, cabines, surfaces de contact et sanitaires, avec une liste d’hygiène adaptée à votre activité.",
      },
      {
        icon: "store",
        title: "Commerces",
        text: "Sol de vente, vitrines intérieures et arrière-boutique, un passage chaque jour ou deux fois par semaine.",
      },
    ],
    stepsTitle: "Le premier mois",
    steps: [
      {
        title: "Visite des locaux",
        text: "Nous relevons les surfaces, les accès et les horaires, gratuitement.",
      },
      {
        title: "Plan de passage",
        text: "Vous recevez le plan, le prix ferme et la date du premier passage.",
      },
      {
        title: "Point à quinze jours",
        text: "Nous faisons le tour ensemble et ajustons les zones ou la fréquence.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Les réponses aux questions que l’on nous pose le plus",
    description:
      "Produits, présence, devis, annulation : l’essentiel avant de réserver.",
    items: [
      {
        q: "Fournissez-vous les produits et le matériel ?",
        a: "Oui, tout est compris dans le prix : produits, aspirateur, chiffons. Si vous préférez vos propres produits (peau sensible, parquet fragile), nous les utilisons.",
      },
      {
        q: "Dois-je être présent pendant le passage ?",
        a: "Non. Beaucoup de clients nous confient un double de leurs clés ou un code d’accès, rangé dans un coffre à clés fermé. Vous pouvez aussi rester chez vous.",
      },
      {
        q: "Quelles informations faut-il pour un devis ?",
        a: "Le type de logement ou de local, la surface approximative, le rythme souhaité, l’accès (étage, ascenseur, animaux) et votre secteur. Deux minutes suffisent.",
      },
      {
        q: "Peut-on commencer par un grand ménage, puis passer à l’entretien ?",
        a: "Oui, c’est même le plus courant : un grand ménage pour repartir à zéro, puis un passage régulier, plus court.",
      },
      {
        q: "Comment reporter ou annuler un passage ?",
        a: "Prévenez-nous avant 18 h la veille, sans frais. Il n’y a pas d’engagement de durée : vous arrêtez quand vous voulez, avec sept jours de préavis.",
      },
      {
        q: "Êtes-vous assurés ?",
        a: "Oui, une assurance responsabilité civile professionnelle couvre les dommages éventuels, et l’attestation est jointe au devis. Si un point est mal fait, signalez-le sous 48 h : nous revenons sans frais.",
      },
    ],
    contact: {
      title: "Une autre question ?",
      text: "Appelez-nous du lundi au samedi : nous répondons en direct.",
    },
  },
  meta: {
    home: {
      title: "Maison Nette - Ménage à domicile et nettoyage de bureaux",
      description:
        "Ménage régulier, grand ménage, fin de bail et bureaux. Devis en deux minutes, prix ferme sous 24 h, équipe fixe et produits fournis.",
    },
    formules: {
      title: "Formules - Maison Nette",
      description:
        "Essentiel, Confort, Intensif ou Professionnel : logement concerné, rythme et durée de chaque formule de ménage. Changement possible sans frais.",
    },
    zones: {
      title: "Zones - Maison Nette",
      description:
        "Six secteurs desservis, chacun avec ses jours de tournée. Premier passage sous cinq jours ouvrés après l’acceptation du devis.",
    },
    entreprises: {
      title: "Entreprises - Maison Nette",
      description:
        "Nettoyage de bureaux, cabinets et commerces avant l’ouverture ou après la fermeture, avec un plan de passage écrit et un seul interlocuteur.",
    },
    faq: {
      title: "FAQ - Maison Nette",
      description:
        "Produits fournis, présence pendant le passage, informations pour le devis, annulation, assurance : les réponses aux questions les plus courantes.",
    },
  },
} as const;

export type MenageNettoyageCopy = WidenLiterals<typeof fr>;
export type MenageNettoyageIconKey = TemplateIconKey<MenageNettoyageCopy>;

const en: MenageNettoyageCopy = {
  brand: {
    name: "Your business",
    tagline: "Home and office cleaning",
  },
  phone: {
    href: "tel:+33199000091",
    label: "01 99 00 00 91",
  },
  nav: {
    home: "Home",
    formules: "Packages",
    zones: "Areas",
    entreprises: "Commercial",
    faq: "FAQ",
  },
  cta: {
    quote: "Get a quote",
    seeFormules: "See the packages",
    business: "Office cleaning",
    call: "Call",
    zones: "See the areas",
  },
  a11y: { quickActions: "Quick actions" },
  common: {
    email: "contact@example.com",
    address: "12 Example Street, 00000 Your city",
    area: "Your city and neighboring towns",
    hours: "Monday to Saturday, 8 am to 7 pm",
  },
  footer: {
    title: "A free quote in two minutes, a firm price before the first visit.",
    text: "Home and office cleaning. Products and equipment included, professional liability insurance.",
    contactTitle: "Contact us",
    siteTitle: "Navigation",
  },
  closing: {
    title: "Get your firm price within 24 hours",
    text: "Send us these four details for your quote or give us a call: we pick up Monday to Saturday.",
  },
  home: {
    hero: {
      eyebrow: "Home and office cleaning",
      title: "A spotless home all week, and a quote in two minutes.",
      text: "Four details are enough for an accurate quote: send them to us by email or phone, and we reply with a firm price within 24 hours. The same team comes to your home with its own products and equipment.",
      points: [
        "Firm price before the first visit",
        "Products and equipment included",
        "The same team every time",
      ],
      cardTitle: "Your quote in 4 details",
      cardTime: "2 min",
      cardNote:
        "Send us these details by email or phone. Free, no obligation, reply within 24 hours.",
      steps: [
        {
          label: "Your need",
          text: "Regular upkeep, deep clean, move-out clean or offices.",
        },
        {
          label: "The size",
          text: "Studio, apartment, house or commercial space.",
        },
        {
          label: "The schedule",
          text: "One time, weekly or every other week, mornings or evenings.",
        },
        {
          label: "Your area",
          text: "Central, North, East, Southeast, West or Southwest.",
        },
      ],
    },
    services: {
      title: "What we clean, at home and at the office",
      description:
        "Four services, one point of contact. The price is set in the quote, before the first visit.",
      items: [
        {
          icon: "sparkles",
          title: "Regular upkeep",
          text: "A visit every week or every other week: kitchen, bathrooms, floors, dusting and the trash taken out.",
          meta: "2 to 4 hours per visit",
        },
        {
          icon: "clipboard",
          title: "Deep clean",
          text: "A complete reset: inside cabinets and appliances, windows, baseboards and corners.",
          meta: "Half a day to a full day",
        },
        {
          icon: "key",
          title: "Move-out clean",
          text: "Before a move or after minor repairs: the place is left clean, ready to be shown or lived in.",
          meta: "Timed to your key handover",
        },
        {
          icon: "building",
          title: "Offices and shops",
          text: "Opening or closing service outside working hours: restrooms, floors, high-touch surfaces and trash.",
          meta: "Early morning or evening",
        },
      ],
      image: {
        src: IMG.spray,
        alt: "A hand in a blue glove holds a blue spray bottle above a light wooden floor.",
      },
      link: "See the packages",
    },
    visit: {
      eyebrow: "A typical visit",
      title: "What a regular cleaning visit includes",
      description:
        "You get the checklist before the first visit and we follow it every time. You can add options.",
      groups: [
        {
          title: "Kitchen",
          items: [
            "Countertop and sink",
            "Cooktop and oven exterior",
            "Cabinet fronts",
            "Floor mopped",
          ],
        },
        {
          title: "Bathroom",
          items: [
            "Sink, shower and bathtub",
            "Mirrors and faucets",
            "Toilet disinfected",
            "Floor mopped",
          ],
        },
        {
          title: "Living areas",
          items: [
            "Dusting on every surface",
            "Vacuuming and floors",
            "Bed made on request",
            "Trash taken out",
          ],
        },
        {
          title: "Optional",
          items: [
            "Interior windows",
            "Inside the refrigerator",
            "A basket of ironing",
            "A load of laundry started",
          ],
        },
      ],
    },
    promise: {
      eyebrow: "Our commitments",
      title: "What we guarantee",
      quote: {
        text: "“I come home in the evening to a spotless apartment without having to arrange anything. The team is on time and always lets me know when they’re running late.”",
        author: "Camille D., 2-bedroom apartment, weekly visit",
      },
      items: [
        {
          icon: "shield",
          title: "A firm price",
          text: "The price in the quote is the price you pay, with no extra charge on the day.",
        },
        {
          icon: "users",
          title: "A fixed team",
          text: "The same two people every visit: they know your keys, your rooms and your habits.",
        },
        {
          icon: "sparkles",
          title: "Free redo",
          text: "Something not right? Tell us within 48 hours and we come back and fix it at no charge.",
        },
      ],
    },
    zone: {
      eyebrow: "Areas",
      title: "Each area has its own visit days",
      description:
        "The time slot in your quote follows the route, so it doesn’t change from one week to the next.",
      tours: [
        { days: "Monday and Thursday", areas: "Central and North" },
        { days: "Tuesday and Friday", areas: "West and Southwest" },
        { days: "Wednesday and Saturday", areas: "East and Southeast" },
      ],
      contactTitle: "Contact us",
      note: "Outside our areas? Write to us, we look at every address.",
    },
  },
  formules: {
    eyebrow: "Packages",
    title: "Four packages, depending on the size and use of your place",
    description:
      "The price depends on the size and the schedule. You can switch packages at any time, at no charge.",
    image: {
      src: IMG.duster,
      alt: "A hand in a white glove holds a feather duster above a rattan stool, in front of a marble kitchen island.",
    },
    rhythmLabel: "Schedule and duration",
    items: [
      {
        title: "Essential",
        audience: "Studio or apartment up to 750 sq ft",
        rhythm: "One visit a week, 2 to 3 hours",
        text: "Kitchen, bathrooms, floors and dusting: the everyday upkeep, done the same way every visit.",
      },
      {
        title: "Comfort",
        audience: "Family or house up to 1,300 sq ft",
        rhythm: "One or two visits a week, 3 to 4 hours",
        text: "The Essential package, plus light tidying, the bed made and a load of laundry started.",
      },
      {
        title: "Intensive",
        audience: "Home that needs a fresh start",
        rhythm: "A single visit, half a day to a full day",
        text: "Interior windows, inside cabinets and appliances, baseboards and corners.",
      },
      {
        title: "Professional",
        audience: "Office, practice or showroom up to 1,600 sq ft",
        rhythm: "One to five visits a week, before or after opening",
        text: "Restrooms, floors, high-touch surfaces and trash, with a written service plan.",
      },
    ],
  },
  zones: {
    eyebrow: "Areas",
    title: "Six areas, each with its own visit days",
    description:
      "Find yours: the route day sets the time slot offered in your quote.",
    toursTitle: "This week’s routes",
    tours: [
      { days: "Monday and Thursday", areas: "Central and North" },
      { days: "Tuesday and Friday", areas: "West and Southwest" },
      { days: "Wednesday and Saturday", areas: "East and Southeast" },
    ],
    areasTitle: "The six areas",
    areas: [
      { name: "Central", days: "Monday and Thursday" },
      { name: "North", days: "Monday and Thursday" },
      { name: "West", days: "Tuesday and Friday" },
      { name: "Southwest", days: "Tuesday and Friday" },
      { name: "East", days: "Wednesday and Saturday" },
      { name: "Southeast", days: "Wednesday and Saturday" },
    ],
    firstVisit: {
      title: "First visit",
      text: "Within five business days of accepting the quote, on your area’s time slot.",
    },
    outside: {
      title: "Outside our areas?",
      text: "On the edge of an area? Write to us: we look at every address and reply within 24 hours.",
    },
  },
  entreprises: {
    eyebrow: "Commercial cleaning",
    title: "Cleaning for your premises, without disrupting your work",
    description:
      "We come before opening or after closing, with a written service plan and a single point of contact.",
    deliverablesTitle: "Handed over before the first visit",
    deliverables: [
      "A service plan by zone: offices, restrooms, reception",
      "The days and hours agreed with you",
      "The list of products we use",
      "A single contact and their direct number",
    ],
    placesTitle: "The places we look after",
    places: [
      {
        icon: "building",
        title: "Offices and open floors",
        text: "Workstations, meeting rooms, restrooms and shared kitchens, up to 1,600 sq ft. Discreet opening or closing service.",
      },
      {
        icon: "door",
        title: "Practices and studios",
        text: "Waiting rooms, treatment rooms, high-touch surfaces and restrooms, with a hygiene checklist suited to your work.",
      },
      {
        icon: "store",
        title: "Shops",
        text: "Sales floor, inside of the windows and stockroom, one visit every day or twice a week.",
      },
    ],
    stepsTitle: "The first month",
    steps: [
      {
        title: "Site visit",
        text: "We measure the space and note the access and the hours, free of charge.",
      },
      {
        title: "Service plan",
        text: "You receive the plan, the firm price and the date of the first visit.",
      },
      {
        title: "Check-in at two weeks",
        text: "We walk through together and adjust the zones or the frequency.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Answers to the questions we hear most",
    description:
      "Products, presence, quotes, cancellations: the essentials before you book.",
    items: [
      {
        q: "Do you supply the products and equipment?",
        a: "Yes, everything is included in the price: products, vacuum, cloths. If you prefer your own products (sensitive skin, delicate wood floors), we use those.",
      },
      {
        q: "Do I need to be home during the visit?",
        a: "No. Many clients give us a spare key or an access code, kept in a locked key box. You are also welcome to stay home.",
      },
      {
        q: "What information do you need for a quote?",
        a: "The type of home or space, the approximate size, the schedule you want, access (floor, elevator, pets) and your area. Two minutes is enough.",
      },
      {
        q: "Can we start with a deep clean and then move to regular upkeep?",
        a: "Yes, it’s actually the most common route: a deep clean to start fresh, then a shorter regular visit.",
      },
      {
        q: "How do I reschedule or cancel a visit?",
        a: "Let us know before 6 pm the day before, at no charge. There is no minimum commitment: you can stop whenever you like, with seven days’ notice.",
      },
      {
        q: "Are you insured?",
        a: "Yes, professional liability insurance covers any damage, and the certificate comes with the quote. If something isn’t right, tell us within 48 hours and we come back at no charge.",
      },
    ],
    contact: {
      title: "Another question?",
      text: "Call us Monday to Saturday: you’ll reach a person.",
    },
  },
  meta: {
    home: {
      title: "Your business - Home and office cleaning",
      description:
        "Regular cleaning, deep cleaning, move-out cleaning and offices. Quote in two minutes, firm price within 24 hours, a fixed team and products included.",
    },
    formules: {
      title: "Packages - Your business",
      description:
        "Essential, Comfort, Intensive or Professional: who each cleaning package suits, with its schedule and duration. Switch at any time at no charge.",
    },
    zones: {
      title: "Areas - Your business",
      description:
        "Six areas served, each with its own route days. First visit within five business days of accepting the quote.",
    },
    entreprises: {
      title: "Commercial cleaning - Your business",
      description:
        "Cleaning for offices, practices and shops before opening or after closing, with a written service plan and a single point of contact.",
    },
    faq: {
      title: "FAQ - Your business",
      description:
        "Products supplied, being home during the visit, what a quote needs, cancellations, insurance: answers to the most common questions.",
    },
  },
};

export const menageNettoyage: TemplateDefinition<
  "menage-nettoyage",
  MenageNettoyageCopy
> = {
  slug: "menage-nettoyage",
  theme: {
    ink: "oklch(0.322 0.045 226)",
    surface: "oklch(0.97 0.011 218)",
    raised: "oklch(1 0 0)",
    accent: "oklch(0.322 0.045 226)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.322 0.045 226)",
    inverseInk: "oklch(1 0 0)",
    inkMuted: "oklch(0.52 0.031 223)",
    eyebrow: "oklch(0.529 0.075 212)",
    eyebrowInverse: "oklch(0.846 0.06 208)",
    line: "oklch(0.9 0.021 215)",
    radius: "20px",
    radiusPill: "9999px",
    shadowSm: "0 20px 60px oklch(0.322 0.045 226 / 0.06)",
    shadowLg: "0 24px 70px oklch(0.322 0.045 226 / 0.08)",
  },
  paths: {
    home: "/menage-nettoyage",
    formules: "/menage-nettoyage/formules",
    zones: "/menage-nettoyage/zones",
    entreprises: "/menage-nettoyage/entreprises",
    faq: "/menage-nettoyage/faq",
  },
  copy: { fr, en },
};
