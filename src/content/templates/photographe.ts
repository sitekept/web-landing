import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « photographe » (photographe indépendant fictif « Votre
 * entreprise » : mariage, portrait, entreprise).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, légendes, métadonnées. Les vues
 * (`src/templates/photographe/`) n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `PhotographeCopy` (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou
 * une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais, résolue par `ICONS` (`src/templates/photographe/parts.tsx`).
 *
 * Images : sources libres de droits (Unsplash), choisies pour leur lumière
 * commune (noir et blanc, contre-jour, détails) : aucun visage reconnaissable,
 * aucune marque ni texte lisible. Les `alt` sont dans la copie, traduits.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  lakeCouple: unsplash("1632093762626-5607fac0ac76"),
  ringHands: unsplash("1595662000432-f8cdba893fa4"),
  dressButtons: unsplash("1524563970700-a302b6888e17"),
  bouquetHands: unsplash("1519741497674-611481863552"),
  longTable: unsplash("1562050344-f7ad946cee35"),
  blinds: unsplash("1586211082529-b7c6b640abff"),
  curtain: unsplash("1763677594196-ddfdd9e74ed6"),
  embrace: unsplash("1792151255367-e4b1ec727537"),
  fromBehind: unsplash("1534330207526-8e81f10ec6fc"),
  corridor: unsplash("1711873316332-acb6930211e1"),
  workingHands: unsplash("1643127021401-d5ef61f06b14"),
  pencilHands: unsplash("1695142258267-5cab18348d06"),
  partHands: unsplash("1565841746841-c8d8a85c3d2b"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Photographe indépendant",
  },
  phone: {
    href: "tel:+33199000076",
    label: "01 99 00 00 76",
  },
  nav: {
    home: "Accueil",
    portfolio: "Portfolio",
    forfaits: "Forfaits",
    contact: "Contact",
  },
  cta: {
    request: "Demander une date",
    requestShort: "Réserver",
    callShort: "Appeler",
    seePortfolio: "Voir le portfolio",
    seePackages: "Voir les forfaits",
    seeSeries: "Voir la série",
    seeSeriesSeparator: " : ",
  },
  common: {
    email: "contact@votre-entreprise.example",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    closing: {
      title: "Une date en tête ? Écrivez-moi.",
      text: "Quelques lignes suffisent pour savoir si je suis libre et comment préparer la séance.",
    },
  },
  footer: {
    title: "Des images qui gardent la lumière du jour.",
    text: "Photographe indépendant : mariages, portraits et images d’entreprise, sur rendez-vous.",
    contactLabel: "Contact",
    navLabel: "Pages",
    note: "Photographies d’illustration, libres de droits.",
    barLabel: "Accès rapide",
  },
  meta: {
    home: {
      title: "Votre entreprise - Photographe indépendant",
      description:
        "Photographe indépendant : mariages, portraits et images d’entreprise. Peu de mise en scène, lumière naturelle et galerie privée livrée en trois semaines.",
    },
    portfolio: {
      title: "Portfolio - Votre entreprise",
      description:
        "Trois séries de photographies : mariage, portrait et entreprise. Détails, silhouettes, mains et lieux, sans mise en scène.",
    },
    forfaits: {
      title: "Forfaits - Votre entreprise",
      description:
        "Forfaits de photographie en euros : mariage, portrait et entreprise. Ce qui est inclus, les options et le déroulé d’une collaboration.",
    },
    contact: {
      title: "Contact - Votre entreprise",
      description:
        "Parlez-moi de votre projet : type de séance, date et lieu. Coordonnées, disponibilités et délai de réponse.",
    },
  },
  home: {
    hero: {
      eyebrow: "Photographe indépendant",
      title: "La lumière d’abord, puis l’instant.",
      description:
        "Mariages, portraits et images d’entreprise. Peu de mise en scène, un regard attentif et des photographies qui ressemblent à ce que vous avez vécu.",
      facts: [
        "Mariage, portrait, entreprise",
        "Déplacements inclus jusqu’à 40 km",
        "Galerie privée sous trois semaines",
      ],
      image: {
        src: IMG.lakeCouple,
        alt: "Silhouettes d’un couple en veste face à un lac au coucher du soleil, en noir et blanc.",
      },
      caption: "Séance en couple, bord de lac, fin de journée",
    },
    domains: {
      eyebrow: "Trois domaines",
      title: "Trois séries, une même attention.",
      description:
        "Ouvrez une série pour la découvrir. Chacune a son rythme, sa lumière et sa façon de préparer la séance.",
      label: "Les trois séries du portfolio",
      items: [
        {
          title: "Mariage",
          meta: "Cérémonie, détails, soirée",
          text: "Des préparatifs au bal : les mains, les gestes, les silhouettes et la table dressée plutôt que des poses.",
          from: "À partir de 690 €",
          image: {
            src: IMG.ringHands,
            alt: "Les mains de deux mariés, l’une passant l’alliance à l’autre, en noir et blanc.",
          },
        },
        {
          title: "Portrait",
          meta: "Lumière naturelle",
          text: "Une séance lente, à la lumière d’une fenêtre ou du soir, pour un portrait qui vous ressemble sans vous exposer.",
          from: "À partir de 120 €",
          image: {
            src: IMG.curtain,
            alt: "Silhouette d’une personne de dos, les bras levés devant un rideau de lumière.",
          },
        },
        {
          title: "Entreprise",
          meta: "Équipes, métiers, lieux",
          text: "Les gestes d’un métier, un atelier, un bureau : des images sobres pour un site, une brochure ou un dossier.",
          from: "À partir de 450 €",
          image: {
            src: IMG.workingHands,
            alt: "Deux mains d’artisan au travail de part et d’autre d’un jet clair et flou, en noir et blanc.",
          },
        },
      ],
    },
    proof: {
      eyebrow: "Ils en parlent",
      title: "Des images qui tiennent dans le temps.",
      figures: [
        { value: "12 ans", label: "de reportage et de portrait" },
        { value: "3 semaines", label: "pour recevoir la galerie" },
        { value: "2 langues", label: "pour les séances : français et anglais" },
      ],
      quotes: [
        {
          quote:
            "On a oublié l’appareil au bout de dix minutes. Les photos du mariage ont exactement le rythme de la journée.",
          name: "Camille et Hugo B.",
          detail: "Mariage, juin",
        },
        {
          quote:
            "Je déteste être photographiée, et j’ai gardé presque toute la sélection. Calme, précis, jamais envahissant.",
          name: "Inès M.",
          detail: "Portrait, séance de 90 minutes",
        },
        {
          quote:
            "Les images de l’atelier montrent enfin ce que nous faisons, sans mise en scène. Livrées à la date promise.",
          name: "Marc D.",
          detail: "Entreprise, reportage d’activité",
        },
      ],
    },
    approach: {
      eyebrow: "La méthode",
      title: "Je ne dirige pas, j’observe.",
      description:
        "Quelques repères au début de la séance, puis je me fais discret. Les images gardent le rythme de la journée, pas celui d’une mise en scène.",
      points: [
        "Lumière naturelle d’abord, flash en dernier recours",
        "Retouche sobre : ni filtre, ni effet",
        "Une sélection resserrée plutôt qu’un vrac de fichiers",
      ],
      image: {
        src: IMG.embrace,
        alt: "Deux personnes enlacées, vues de dos, dans la pénombre, en noir et blanc.",
      },
    },
  },
  portfolio: {
    hero: {
      eyebrow: "Portfolio",
      title: "Trois séries, un même regard.",
      description:
        "Des mains, des silhouettes, des lieux. Je photographie ce que la lumière et le geste racontent, sans chercher le sourire de face.",
    },
    indexLabel: "Séries",
    imagesLabel: "images",
    categories: [
      {
        title: "Mariage",
        text: "Alliances, robe, table dressée, couple en silhouette : l’essentiel d’une journée, vu de près.",
        items: [
          {
            src: IMG.lakeCouple,
            alt: "Silhouettes d’un couple en veste face à un lac au coucher du soleil, en noir et blanc.",
            caption: "Séance en couple, bord de lac",
          },
          {
            src: IMG.dressButtons,
            alt: "Gros plan sur le dos d’une robe de mariée, des mains fermant les boutons un à un, en noir et blanc.",
            caption: "Les boutons de la robe",
          },
          {
            src: IMG.ringHands,
            alt: "Les mains de deux mariés, l’une passant l’alliance à l’autre, en noir et blanc.",
            caption: "L’échange des alliances",
          },
          {
            src: IMG.bouquetHands,
            alt: "Un couple de mariés cadré sous le visage, un bouquet de fleurs blanches et pêche dans une lumière basse.",
            caption: "Le bouquet, fin de journée",
          },
          {
            src: IMG.longTable,
            alt: "Une longue table dressée, assiettes, verres et bougies allumées en perspective.",
            caption: "La table, avant les invités",
          },
        ],
      },
      {
        title: "Portrait",
        text: "Contre-jour, silhouettes et personnes de dos : des portraits qui racontent sans en dire trop.",
        items: [
          {
            src: IMG.blinds,
            alt: "Silhouette d’une femme de profil devant des stores éclairés par le soleil.",
            caption: "Stores, fin d’après-midi",
          },
          {
            src: IMG.curtain,
            alt: "Silhouette d’une personne de dos, les bras levés devant un rideau de lumière.",
            caption: "Le rideau",
          },
          {
            src: IMG.embrace,
            alt: "Deux personnes enlacées, vues de dos, dans la pénombre, en noir et blanc.",
            caption: "Étreinte",
          },
          {
            src: IMG.fromBehind,
            alt: "Silhouette d’un homme de dos devant une grande fenêtre claire, en noir et blanc.",
            caption: "Devant la fenêtre",
          },
        ],
      },
      {
        title: "Entreprise",
        text: "Les gestes d’un métier et la lumière d’un lieu : des images calmes, utilisables partout.",
        items: [
          {
            src: IMG.corridor,
            alt: "Un long couloir blanc rythmé de lames verticales, avec des maquettes sur des étagères.",
            caption: "Atelier d’architecture",
          },
          {
            src: IMG.workingHands,
            alt: "Deux mains d’artisan au travail de part et d’autre d’un jet clair et flou, en noir et blanc.",
            caption: "Le geste du métier",
          },
          {
            src: IMG.pencilHands,
            alt: "Une main d’atelier serrant un bouquet de pinceaux, un pot de pinceaux au premier plan, en noir et blanc.",
            caption: "Les pinceaux",
          },
          {
            src: IMG.partHands,
            alt: "Gros plan sur des mains assemblant une pièce mécanique, en noir et blanc.",
            caption: "Assemblage",
          },
        ],
      },
    ],
    delivery: {
      eyebrow: "Livraison",
      title: "Ce que vous recevez, à chaque série.",
      items: [
        {
          title: "Une sélection resserrée",
          text: "Entre 15 et 450 images selon le forfait, toutes retouchées. Pas de vrac.",
        },
        {
          title: "Une galerie privée",
          text: "En ligne sous trois semaines, protégée par un lien, à partager avec vos proches.",
        },
        {
          title: "Des fichiers prêts à l’emploi",
          text: "Haute définition pour l’impression, version allégée pour l’écran.",
        },
      ],
    },
  },
  forfaits: {
    hero: {
      eyebrow: "Forfaits",
      title: "Des tarifs lisibles, des options à la carte.",
      description:
        "Les prix ci-dessous sont des points de départ. Un devis détaillé suit votre premier message, avec le temps de séance et le nombre d’images.",
    },
    offer: {
      title: "Les forfaits",
      description: "Trois domaines, des durées claires, des tarifs en euros.",
      groups: [
        {
          title: "Mariage",
          items: [
            {
              name: "Cérémonie",
              detail: "2 h de présence, environ 80 images retouchées",
              price: "à partir de 690 €",
            },
            {
              name: "Demi-journée",
              detail: "5 h, des préparatifs au cocktail, environ 200 images",
              price: "à partir de 1 290 €",
              note: "Le plus demandé",
            },
            {
              name: "Journée complète",
              detail: "10 h, jusqu’à l’ouverture du bal, environ 450 images",
              price: "à partir de 1 890 €",
            },
          ],
        },
        {
          title: "Portrait",
          items: [
            {
              name: "Séance express",
              detail: "30 min, un lieu, 15 images retouchées",
              price: "à partir de 120 €",
            },
            {
              name: "Séance portrait",
              detail: "1 h 30, deux lieux, 30 images retouchées",
              price: "à partir de 260 €",
            },
            {
              name: "Couple ou famille",
              detail: "1 h 30, jusqu’à cinq personnes, 35 images",
              price: "à partir de 320 €",
            },
          ],
        },
        {
          title: "Entreprise",
          items: [
            {
              name: "Portraits d’équipe",
              detail: "Demi-journée, une image par personne",
              price: "à partir de 450 €",
            },
            {
              name: "Reportage d’activité",
              detail: "Demi-journée, environ 40 images",
              price: "à partir de 590 €",
            },
            {
              name: "Lieux et ateliers",
              detail: "Une journée, environ 30 images",
              price: "à partir de 790 €",
              note: "Sur devis",
            },
          ],
        },
        {
          title: "Options",
          items: [
            {
              name: "Album relié",
              detail: "30 × 30 cm, 20 pages",
              price: "à partir de 220 €",
            },
            {
              name: "Tirage d’art",
              detail: "30 × 45 cm, papier mat",
              price: "à partir de 60 €",
            },
            {
              name: "Second photographe",
              detail: "Mariage, à partir de la demi-journée",
              price: "à partir de 350 €",
            },
            {
              name: "Déplacement",
              detail: "Au-delà de 40 km autour de votre ville",
              price: "0,60 € / km",
            },
          ],
        },
      ],
      footnote:
        "Prix indicatifs, hors options. Les tarifs d’entreprise s’entendent hors taxes.",
    },
    included: {
      eyebrow: "Inclus partout",
      title: "Ce que comprend chaque forfait.",
      description:
        "Pas de supplément caché : le socle est le même, quel que soit le domaine.",
      items: [
        {
          icon: "images",
          title: "Une galerie privée en ligne",
          text: "Toutes les images retouchées, accessibles par lien et partageables avec vos proches.",
        },
        {
          icon: "sliders-horizontal",
          title: "Une retouche sobre",
          text: "Lumière et contraste ajustés, sans filtre ni effet de mode.",
        },
        {
          icon: "download",
          title: "Un téléchargement en haute définition",
          text: "Des fichiers prêts pour l’écran comme pour l’impression.",
        },
        {
          icon: "message-circle",
          title: "Un échange avant la séance",
          text: "Un appel pour préparer le déroulé et répondre à vos questions.",
        },
      ],
      image: {
        src: IMG.dressButtons,
        alt: "Gros plan sur le dos d’une robe de mariée, des mains fermant les boutons un à un, en noir et blanc.",
      },
    },
    steps: {
      eyebrow: "Le déroulé",
      title: "De votre message à la galerie, en quatre temps.",
      items: [
        {
          title: "Premier échange",
          text: "Un appel ou un message : date, lieu, envies. Une vingtaine de minutes suffisent.",
        },
        {
          title: "Devis et réservation",
          text: "Vous recevez un devis détaillé. La date est bloquée dès que vous le validez.",
        },
        {
          title: "La séance",
          text: "Quelques repères au début, puis je me fais discret. Vous restez vous-même.",
        },
        {
          title: "La livraison",
          text: "Une galerie privée sous trois semaines, avec les fichiers prêts à télécharger.",
        },
      ],
    },
    custom: {
      title: "Un projet hors cadre ?",
      text: "Événement, lancement, série éditoriale : décrivez-le, je vous réponds avec un devis sur mesure.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Parlons de votre date.",
      description:
        "Indiquez le type de séance, la date et le lieu. Je réponds sous deux jours ouvrés, avec un premier avis sur la faisabilité.",
    },
    form: {
      title: "Votre demande",
      intro: "Les champs marqués d’un astérisque sont nécessaires.",
      submit: "Envoyer ma demande",
      fields: {
        name: "Nom",
        email: "E-mail",
        type: "Type de séance",
        typePlaceholder: "Choisir un type",
        types: [
          { value: "mariage", label: "Mariage" },
          { value: "portrait", label: "Portrait" },
          { value: "entreprise", label: "Entreprise" },
          { value: "autre", label: "Autre projet" },
        ],
        date: "Date envisagée",
        place: "Lieu de la séance",
        message: "Votre projet (facultatif)",
      },
    },
    details: {
      title: "Coordonnées",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Adresse",
      areaLabel: "Zone",
      labelSeparator: " : ",
      area: "Déplacements inclus jusqu’à 40 km autour de votre ville, 0,60 € / km au-delà.",
      replyLabel: "Délai de réponse",
      reply: "Sous deux jours ouvrés.",
      image: {
        src: IMG.longTable,
        alt: "Une longue table dressée, assiettes, verres et bougies allumées en perspective.",
      },
    },
    next: {
      title: "Et ensuite ?",
      items: [
        {
          title: "Un premier avis",
          text: "Je vérifie ma disponibilité et je vous réponds sous deux jours ouvrés.",
        },
        {
          title: "Un appel de vingt minutes",
          text: "Pour comprendre le projet, le lieu et ce que vous attendez des images.",
        },
        {
          title: "Un devis détaillé",
          text: "Durée, nombre d’images, options : tout est écrit avant de réserver.",
        },
      ],
    },
  },
} as const;

export type PhotographeCopy = WidenLiterals<typeof fr>;

/** Clés d'icône utilisées par la copie (table `ICONS` des vues). */
export type PhotographeIconKey = TemplateIconKey<PhotographeCopy>;

const en: PhotographeCopy = {
  brand: {
    name: "Your business",
    tagline: "Independent photographer",
  },
  phone: {
    href: "tel:+33199000076",
    label: "01 99 00 00 76",
  },
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    forfaits: "Packages",
    contact: "Contact",
  },
  cta: {
    request: "Request a date",
    requestShort: "Book",
    callShort: "Call",
    seePortfolio: "View the portfolio",
    seePackages: "View the packages",
    seeSeries: "View the series",
    seeSeriesSeparator: ": ",
  },
  common: {
    email: "contact@example.com",
    address: "12 Example Street, 00000 Your city",
    closing: {
      title: "Have a date in mind? Write to me.",
      text: "A few lines are enough to know whether I am free and how to prepare the session.",
    },
  },
  footer: {
    title: "Images that keep the light of the day.",
    text: "Independent photographer: weddings, portraits and business imagery, by appointment.",
    contactLabel: "Contact",
    navLabel: "Pages",
    note: "Stock photos, royalty-free.",
    barLabel: "Quick access",
  },
  meta: {
    home: {
      title: "Your business - Independent photographer",
      description:
        "Independent photographer: weddings, portraits and business imagery. Little staging, natural light and a private gallery delivered within three weeks.",
    },
    portfolio: {
      title: "Portfolio - Your business",
      description:
        "Three photo series: wedding, portrait and business. Details, silhouettes, hands and places, without staging.",
    },
    forfaits: {
      title: "Packages - Your business",
      description:
        "Photography packages in euros: wedding, portrait and business. What is included, the options and how a project unfolds.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Tell me about your project: type of session, date and place. Contact details, availability and response time.",
    },
  },
  home: {
    hero: {
      eyebrow: "Independent photographer",
      title: "Light first, then the moment.",
      description:
        "Weddings, portraits and business imagery. Little staging, an attentive eye and photographs that look like what you lived.",
      facts: [
        "Wedding, portrait, business",
        "Travel included within 25 miles",
        "Private gallery within three weeks",
      ],
      image: {
        src: IMG.lakeCouple,
        alt: "Silhouettes of a couple in jackets facing a lake at sunset, in black and white.",
      },
      caption: "Couple session, lakeside, end of the day",
    },
    domains: {
      eyebrow: "Three fields",
      title: "Three series, the same attention.",
      description:
        "Open a series to explore it. Each has its own pace, its own light and its own way of preparing the session.",
      label: "The three portfolio series",
      items: [
        {
          title: "Wedding",
          meta: "Ceremony, details, evening",
          text: "From getting ready to the dance floor: hands, gestures, silhouettes and the set table rather than poses.",
          from: "From €690",
          image: {
            src: IMG.ringHands,
            alt: "The hands of a bride and groom, one slipping a ring on the other, in black and white.",
          },
        },
        {
          title: "Portrait",
          meta: "Natural light",
          text: "A slow session by a window or in evening light, for a portrait that looks like you without exposing you.",
          from: "From €120",
          image: {
            src: IMG.curtain,
            alt: "Silhouette of a person seen from behind, arms raised in front of a curtain of light.",
          },
        },
        {
          title: "Business",
          meta: "Teams, trades, places",
          text: "The gestures of a trade, a workshop, an office: calm images for a website, a brochure or a proposal.",
          from: "From €450",
          image: {
            src: IMG.workingHands,
            alt: "Two craftsman’s hands at work on either side of a bright, blurred stream, in black and white.",
          },
        },
      ],
    },
    proof: {
      eyebrow: "In their words",
      title: "Images that hold up over time.",
      figures: [
        { value: "12 years", label: "of documentary and portrait work" },
        { value: "3 weeks", label: "to receive the gallery" },
        { value: "2 languages", label: "for sessions: French and English" },
      ],
      quotes: [
        {
          quote:
            "We forgot about the camera after ten minutes. The wedding photos have exactly the pace of the day.",
          name: "Camille and Hugo B.",
          detail: "Wedding, June",
        },
        {
          quote:
            "I hate being photographed, and I kept almost the whole selection. Calm, precise, never intrusive.",
          name: "Inès M.",
          detail: "Portrait, 90-minute session",
        },
        {
          quote:
            "The workshop images finally show what we do, with no staging. Delivered on the promised date.",
          name: "Marc D.",
          detail: "Business, workplace coverage",
        },
      ],
    },
    approach: {
      eyebrow: "The method",
      title: "I don’t direct, I observe.",
      description:
        "A few cues at the start of the session, then I step back. The images keep the pace of the day, not that of a staged scene.",
      points: [
        "Natural light first, flash as a last resort",
        "Restrained editing: no filters, no effects",
        "A tight selection rather than a pile of files",
      ],
      image: {
        src: IMG.embrace,
        alt: "Two people embracing, seen from behind, in the half-light, in black and white.",
      },
    },
  },
  portfolio: {
    hero: {
      eyebrow: "Portfolio",
      title: "Three series, one way of seeing.",
      description:
        "Hands, silhouettes, places. I photograph what light and gesture tell, without chasing the head-on smile.",
    },
    indexLabel: "Series",
    imagesLabel: "images",
    categories: [
      {
        title: "Wedding",
        text: "Rings, dress, a set table, a couple in silhouette: the essence of a day, seen up close.",
        items: [
          {
            src: IMG.lakeCouple,
            alt: "Silhouettes of a couple in jackets facing a lake at sunset, in black and white.",
            caption: "Couple session, lakeside",
          },
          {
            src: IMG.dressButtons,
            alt: "Close-up of the back of a wedding dress, hands fastening the buttons one by one, in black and white.",
            caption: "The buttons of the dress",
          },
          {
            src: IMG.ringHands,
            alt: "The hands of a bride and groom, one slipping a ring on the other, in black and white.",
            caption: "The exchange of rings",
          },
          {
            src: IMG.bouquetHands,
            alt: "A wedding couple framed below the face, a bouquet of white and peach flowers in low light.",
            caption: "The bouquet, end of day",
          },
          {
            src: IMG.longTable,
            alt: "A long set table, plates, glasses and lit candles in perspective.",
            caption: "The table, before the guests",
          },
        ],
      },
      {
        title: "Portrait",
        text: "Backlight, silhouettes and people seen from behind: portraits that tell a story without saying too much.",
        items: [
          {
            src: IMG.blinds,
            alt: "Silhouette of a woman in profile in front of blinds lit by the sun.",
            caption: "Blinds, late afternoon",
          },
          {
            src: IMG.curtain,
            alt: "Silhouette of a person seen from behind, arms raised in front of a curtain of light.",
            caption: "The curtain",
          },
          {
            src: IMG.embrace,
            alt: "Two people embracing, seen from behind, in the half-light, in black and white.",
            caption: "Embrace",
          },
          {
            src: IMG.fromBehind,
            alt: "Silhouette of a man seen from behind in front of a large bright window, in black and white.",
            caption: "In front of the window",
          },
        ],
      },
      {
        title: "Business",
        text: "The gestures of a trade and the light of a place: calm images you can use anywhere.",
        items: [
          {
            src: IMG.corridor,
            alt: "A long white corridor lined with vertical slats, with models on shelves.",
            caption: "Architecture studio",
          },
          {
            src: IMG.workingHands,
            alt: "Two craftsman’s hands at work on either side of a bright, blurred stream, in black and white.",
            caption: "The gesture of the trade",
          },
          {
            src: IMG.pencilHands,
            alt: "A studio hand gripping a bunch of paintbrushes, a jar of brushes in the foreground, in black and white.",
            caption: "The brushes",
          },
          {
            src: IMG.partHands,
            alt: "Close-up of hands assembling a mechanical part, in black and white.",
            caption: "Assembly",
          },
        ],
      },
    ],
    delivery: {
      eyebrow: "Delivery",
      title: "What you receive, with every series.",
      items: [
        {
          title: "A tight selection",
          text: "Between 15 and 450 images depending on the package, all edited. No pile of files.",
        },
        {
          title: "A private gallery",
          text: "Online within three weeks, protected by a link, to share with your loved ones.",
        },
        {
          title: "Files ready to use",
          text: "High resolution for printing, a lighter version for screens.",
        },
      ],
    },
  },
  forfaits: {
    hero: {
      eyebrow: "Packages",
      title: "Clear prices, optional extras.",
      description:
        "The prices below are starting points. A detailed quote follows your first message, with the session length and the number of images.",
    },
    offer: {
      title: "The packages",
      description: "Three fields, clear durations, prices in euros.",
      groups: [
        {
          title: "Wedding",
          items: [
            {
              name: "Ceremony",
              detail: "2 hours on site, about 80 edited images",
              price: "from €690",
            },
            {
              name: "Half day",
              detail:
                "5 hours, from getting ready to the cocktail hour, about 200 images",
              price: "from €1,290",
              note: "Most requested",
            },
            {
              name: "Full day",
              detail: "10 hours, through the first dance, about 450 images",
              price: "from €1,890",
            },
          ],
        },
        {
          title: "Portrait",
          items: [
            {
              name: "Express session",
              detail: "30 min, one location, 15 edited images",
              price: "from €120",
            },
            {
              name: "Portrait session",
              detail: "1.5 hours, two locations, 30 edited images",
              price: "from €260",
            },
            {
              name: "Couple or family",
              detail: "1.5 hours, up to five people, 35 images",
              price: "from €320",
            },
          ],
        },
        {
          title: "Business",
          items: [
            {
              name: "Team portraits",
              detail: "Half day, one image per person",
              price: "from €450",
            },
            {
              name: "Workplace coverage",
              detail: "Half day, about 40 images",
              price: "from €590",
            },
            {
              name: "Places and workshops",
              detail: "One day, about 30 images",
              price: "from €790",
              note: "Custom quote",
            },
          ],
        },
        {
          title: "Options",
          items: [
            {
              name: "Bound album",
              detail: "12 × 12 in, 20 pages",
              price: "from €220",
            },
            {
              name: "Fine art print",
              detail: "12 × 18 in, matte paper",
              price: "from €60",
            },
            {
              name: "Second photographer",
              detail: "Wedding, from the half day",
              price: "from €350",
            },
            {
              name: "Travel",
              detail: "Beyond 25 miles from your city",
              price: "About €1 / mile",
            },
          ],
        },
      ],
      footnote:
        "Sample prices, options not included. Business rates exclude tax.",
    },
    included: {
      eyebrow: "Always included",
      title: "What every package includes.",
      description:
        "No hidden extras: the base is the same, whatever the field.",
      items: [
        {
          icon: "images",
          title: "A private online gallery",
          text: "All the edited images, available through a link and shareable with your loved ones.",
        },
        {
          icon: "sliders-horizontal",
          title: "Restrained editing",
          text: "Light and contrast adjusted, with no filter or passing trend.",
        },
        {
          icon: "download",
          title: "High-resolution downloads",
          text: "Files ready for screens as well as for printing.",
        },
        {
          icon: "message-circle",
          title: "A conversation before the session",
          text: "A call to prepare the schedule and answer your questions.",
        },
      ],
      image: {
        src: IMG.dressButtons,
        alt: "Close-up of the back of a wedding dress, hands fastening the buttons one by one, in black and white.",
      },
    },
    steps: {
      eyebrow: "How it unfolds",
      title: "From your message to the gallery, in four steps.",
      items: [
        {
          title: "First conversation",
          text: "A call or a message: date, location, ideas. Twenty minutes or so is enough.",
        },
        {
          title: "Quote and booking",
          text: "You receive a detailed quote. The date is held as soon as you approve it.",
        },
        {
          title: "The session",
          text: "A few cues at the start, then I step back. You stay yourself.",
        },
        {
          title: "Delivery",
          text: "A private gallery within three weeks, with files ready to download.",
        },
      ],
    },
    custom: {
      title: "A project outside the frame?",
      text: "Event, launch, editorial series: describe it and I will reply with a tailored quote.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Let’s talk about your date.",
      description:
        "Tell me the type of session, the date and the place. I reply within two business days, with a first answer on whether it is feasible.",
    },
    form: {
      title: "Your request",
      intro: "Fields marked with an asterisk are required.",
      submit: "Send my request",
      fields: {
        name: "Name",
        email: "Email",
        type: "Type of session",
        typePlaceholder: "Choose a type",
        types: [
          { value: "mariage", label: "Wedding" },
          { value: "portrait", label: "Portrait" },
          { value: "entreprise", label: "Business" },
          { value: "autre", label: "Other project" },
        ],
        date: "Preferred date",
        place: "Session location",
        message: "Your project (optional)",
      },
    },
    details: {
      title: "Contact details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      areaLabel: "Area",
      labelSeparator: ": ",
      area: "Travel included within 25 miles of your city, about €1 per mile beyond.",
      replyLabel: "Response time",
      reply: "Within two business days.",
      image: {
        src: IMG.longTable,
        alt: "A long set table, plates, glasses and lit candles in perspective.",
      },
    },
    next: {
      title: "What happens next?",
      items: [
        {
          title: "A first answer",
          text: "I check my availability and reply within two business days.",
        },
        {
          title: "A twenty-minute call",
          text: "To understand the project, the place and what you expect from the images.",
        },
        {
          title: "A detailed quote",
          text: "Length, number of images, options: everything is written down before you book.",
        },
      ],
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type PhotographePage = keyof PhotographeCopy["meta"];

export const photographe: TemplateDefinition<"photographe", PhotographeCopy> = {
  slug: "photographe",
  /**
   * Mur de galerie : blanc à peine chaud, encre presque noire, quasi
   * monochrome. L'accent est l'encre elle-même (boutons noirs), la couleur
   * vient des seules photographies. Inter partout (graisse 500 en titre),
   * rayons nuls, aucune ombre : des filets fins et du vide.
   */
  theme: {
    surface: "oklch(0.99 0.002 95)",
    raised: "oklch(0.965 0.002 95)",
    ink: "oklch(0.16 0.003 95)",
    inkMuted: "oklch(0.44 0.003 95)",
    line: "oklch(0.86 0.003 95)",
    accent: "oklch(0.16 0.003 95)",
    accentInk: "oklch(0.99 0.002 95)",
    inverse: "oklch(0.15 0.003 95)",
    inverseInk: "oklch(0.97 0.002 95)",
    radius: "0px",
    radiusPill: "0px",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 500,
    shadowSm: "none",
    shadowLg: "none",
  },
  paths: {
    home: "/photographe",
    portfolio: "/photographe/portfolio",
    forfaits: "/photographe/forfaits",
    contact: "/photographe/contact",
  },
  copy: { fr, en },
};
