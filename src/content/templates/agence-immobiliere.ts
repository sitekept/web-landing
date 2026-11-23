import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « agence-immobiliere » : une agence immobilière de quartier fictive
 * (« Votre entreprise »), avec plusieurs agents et un agent référent par
 * quartier. Il absorbe l'ancien template lab d'agent immobilier (design, kit,
 * palette et photos) et reprend le contenu de l'ancienne démo écrite à la main
 * (agents, quartiers, parcours acquéreurs et vendeurs, fiche « Appartement vue
 * lac »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/agence-immobiliere/`)
 * n'ont aucun texte en dur. Le ton est celui de l'agence : « nous », « notre
 * équipe », jamais la première personne du singulier (sauf la voix d'un client
 * dans un avis, ou un libellé de bouton du visiteur).
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `AgenceImmobiliereCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais, résolue par `ICONS` (`parts.tsx`).
 *
 * Contenu fictif : aucun lieu réel (quartiers génériques : Les Rives, Vieille
 * ville, Le Coteau, Les Jardins), aucun nom, aucune étiquette énergétique
 * chiffrée, aucun numéro de carte professionnelle (« à compléter »). Les
 * honoraires et les prix sont des exemples de démonstration.
 *
 * Images : sources libres de droits (Unsplash), sans visage, sans enseigne
 * lisible. Les `alt` sont dans la copie, traduits.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: unsplash("1600607687920-4e2a09cf159d"),
  villa: unsplash("1523217582562-09d0def993a6"),
  timber: unsplash("1780232581508-55b904f17ffc"),
  family: unsplash("1560185127-6ed189bf02f4"),
  loft: unsplash("1560448204-e02f11c3d0e2"),
  studio: unsplash("1513694203232-719a280e022f"),
  calm: unsplash("1522771739844-6a9f6d5f14af"),
  kitchen: unsplash("1507089947368-19c1da9775ae"),
  salon: unsplash("1585128792020-803d29415281"),
  lakeLiving: unsplash("1793986662493-d1fbf77c4863"),
  lakeKitchen: unsplash("1781249144275-c04daed37031"),
  lakeTerrace: unsplash("1760594043210-c5d4ca163df4"),
  lakeBedroom: unsplash("1617325247661-675ab4b64ae2"),
  rives: unsplash("1774031052548-54235b9037e3"),
  oldTown: unsplash("1794561802069-59c6a1740c7c"),
  coteau: unsplash("1761157994977-898f840342f0"),
  gardens: unsplash("1790796141227-6b2e06876942"),
  keys: unsplash("1733244766159-f58f4184fd38"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Agence immobilière de quartier",
  },
  phone: {
    href: "tel:+33199000052",
    label: "01 99 00 00 52",
  },
  nav: {
    home: "Accueil",
    biens: "Biens",
    services: "Services",
    agents: "Agents",
    quartiers: "Quartiers",
    estimation: "Estimation",
    contact: "Contact",
  },
  cta: {
    estimate: "Demander une estimation offerte",
    estimateShort: "Estimation",
    call: "Nous appeler",
    callShort: "Appeler",
    seeSelection: "Voir notre sélection",
    seeAllListings: "Voir toute la sélection",
    describeSearch: "Décrire ma recherche",
    askVisit: "Demander la visite",
    writeToUs: "Écrivez-nous",
    seeListing: "Voir la fiche",
    backToListings: "Retour aux biens",
    seeDistricts: "Découvrir les quartiers",
    meetTeam: "Rencontrer l’équipe",
  },
  common: {
    email: "contact@votre-entreprise.example",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    zone: {
      label: "Secteur",
      text: "Quatre quartiers de la ville et les communes voisines, dans un rayon d’environ 20 km.",
    },
    hoursLabel: "Disponibilités",
    hours: [
      { day: "Lundi au vendredi", time: "9 h-19 h" },
      { day: "Samedi", time: "9 h-13 h" },
      { day: "Visites", time: "Sur rendez-vous, y compris en soirée" },
    ],
    closing: {
      eyebrow: "Parlons-en",
      title: "Un appel suffit pour savoir où vous en êtes.",
      text: "Une personne de l’équipe vous répond, en général dans la journée, puis l’agent référent de votre quartier suit votre dossier.",
    },
  },
  footer: {
    title: "Une agence de quartier, un agent référent, une sélection courte.",
    text: "Nous accompagnons vendeurs et acquéreurs, du premier rendez-vous à la signature de l’acte, avec l’agent qui connaît votre quartier.",
    contactLabel: "Contact",
    proCard: "Carte professionnelle : à compléter",
    demoNotice: "Biens, prix et avis fictifs, pour la démonstration.",
    barLabel: "Accès rapide",
  },
  meta: {
    home: {
      title: "Votre entreprise - Agence immobilière de quartier",
      description:
        "Une agence immobilière de quartier : un agent référent par secteur, estimation offerte, biens tous visités et accompagnement jusqu’à la signature.",
    },
    biens: {
      title: "Biens - Votre entreprise",
      description:
        "Notre sélection de biens : dix au plus à la fois, tous visités par l’équipe, avec notre avis franc, les surfaces et les prix.",
    },
    bien: {
      title: "Appartement vue lac - Votre entreprise",
      description:
        "Appartement de 82 m² avec séjour traversant et terrasse, à 6 minutes à pied du lac : caractéristiques, photos, prix et demande de visite.",
    },
    services: {
      title: "Services - Votre entreprise",
      description:
        "Deux parcours, acquéreurs et vendeurs : les étapes, les services en plus et les réponses aux questions fréquentes. Un agent référent du début à la fin.",
    },
    agents: {
      title: "Agents - Votre entreprise",
      description:
        "Élise, Romain et Nora : trois agents, quatre quartiers, un agent référent pour chacun, avec leurs spécialités et leur manière de travailler ensemble.",
    },
    quartiers: {
      title: "Quartiers - Votre entreprise",
      description:
        "Les quatre quartiers que nous couvrons : Les Rives, Vieille ville, Le Coteau et Les Jardins, avec leur caractère, leurs biens et leur agent référent.",
    },
    estimation: {
      title: "Estimation - Votre entreprise",
      description:
        "Estimation offerte de votre bien : visite, comparaison argumentée et avis de valeur écrit sous 48 heures. Formulaire de démonstration.",
    },
    contact: {
      title: "Contact - Votre entreprise",
      description:
        "Contactez l’agence : formulaire de démonstration, coordonnées fictives, disponibilités et secteur couvert.",
    },
  },
  home: {
    hero: {
      eyebrow: "Agence immobilière de quartier",
      title: "Un agent référent par quartier, une équipe entière derrière lui.",
      description:
        "Chaque quartier a son agent, qui en connaît les rues, les copropriétés et les prix. Chaque semaine, l’équipe fait le point ensemble sur les biens, les acquéreurs et les visites : votre projet avance même quand votre agent est en visite ailleurs.",
      image: {
        src: IMG.hero,
        alt: "Une salle à manger claire avec une table noire, des chaises grises, un bouquet et une grande baie vitrée.",
      },
      facts: [
        {
          value: "48 h",
          label: "pour vous remettre un avis de valeur écrit après la visite",
        },
        {
          value: "10",
          label: "biens au plus à la fois, tous visités par l’équipe",
        },
        {
          value: "4",
          label: "quartiers, chacun avec son agent référent",
        },
      ],
    },
    offer: {
      eyebrow: "Notre accompagnement",
      title: "Deux projets, une même façon de travailler.",
      description:
        "Que vous vendiez ou que vous cherchiez, nous commençons par écouter, nous disons ce que nous pensons avec des chiffres, et nous ne promettons que ce que nous pouvons tenir.",
      sellers: {
        icon: "house",
        title: "Si vous vendez",
        text: "L’agent de votre quartier vient voir le bien et vous remet un avis de valeur argumenté, puis l’équipe s’occupe des photos, de l’annonce et des visites.",
        points: [
          "Estimation offerte, sans engagement",
          "Photos et annonce préparées par l’équipe",
          "Visites avec des acquéreurs que nous avons rencontrés avant",
          "Compte rendu après chaque visite",
        ],
        cta: "Estimer mon bien",
      },
      buyers: {
        icon: "key-round",
        title: "Si vous achetez",
        text: "Vous nous dites ce que vous cherchez, et nous vous proposons peu de biens : tous visités par l’équipe avant vous, avec ce qui va et ce qui coince.",
        points: [
          "Un entretien pour cerner vos critères et votre budget",
          "Une sélection courte, commentée sans enjolivures",
          "De l’aide pour comparer, négocier et monter le dossier",
          "Une recherche discrète si le bien n’est pas annoncé",
        ],
        cta: "Voir notre sélection",
      },
    },
    method: {
      eyebrow: "De bout en bout",
      title: "Cinq étapes, et la même équipe du début à la fin.",
      description:
        "Chaque projet suit le même fil. Nous vous disons à chaque étape où nous en sommes et ce qui vient ensuite.",
      steps: [
        {
          icon: "coffee",
          title: "Nous nous rencontrons",
          text: "Un café ou une visite : vous nous racontez votre projet, nous notons vos contraintes et vos délais.",
        },
        {
          icon: "ruler",
          title: "Nous estimons ou nous cherchons",
          text: "Un avis de valeur argumenté, ou une première sélection de biens, avec des chiffres que nous savons expliquer.",
        },
        {
          icon: "camera",
          title: "Nous préparons",
          text: "Photos, annonce et dossier côté vendeur ; critères affinés et visites planifiées côté acquéreur.",
        },
        {
          icon: "handshake",
          title: "Nous présentons et négocions",
          text: "Nous conduisons les visites, relayons les offres et défendons votre position sans vous mettre la pression.",
        },
        {
          icon: "file-check",
          title: "Nous accompagnons jusqu’à l’acte",
          text: "Pièces à réunir, échanges avec le notaire, dernier rendez-vous : nous restons à vos côtés jusqu’aux clés.",
        },
      ],
    },
    selection: {
      eyebrow: "En ce moment",
      title: "Quelques biens que nous présentons.",
      description:
        "Nous ne gardons que dix biens à la fois. En voici quatre : touchez ou survolez un bien pour le découvrir.",
      label: "Biens de notre sélection",
      items: [
        {
          title: "Appartement vue lac",
          meta: "3 pièces · 82 m² · 395 000 €",
          image: {
            src: IMG.lakeLiving,
            alt: "Un séjour lumineux : deux fauteuils en cuir et une baie vitrée coulissante qui donne sur un ponton en bois et sur le lac.",
          },
        },
        {
          title: "Maison blanche et son jardin",
          meta: "6 pièces · 160 m² · 585 000 €",
          image: {
            src: IMG.villa,
            alt: "Une maison contemporaine aux murs blancs, avec un jardin en pelouse et un grand arbre.",
          },
        },
        {
          title: "Trois-pièces familial",
          meta: "3 pièces · 74 m² · 312 000 €",
          image: {
            src: IMG.family,
            alt: "Un séjour ouvert sur la cuisine, avec un canapé gris-beige, un fauteuil en cuir brun, une table basse en bois et un comptoir à tabourets.",
          },
        },
        {
          title: "Quatre-pièces lumineux",
          meta: "4 pièces · 118 m² · 438 000 €",
          image: {
            src: IMG.loft,
            alt: "Un salon lumineux avec deux fauteuils, de grandes fenêtres et un séjour ouvert avec cheminée en arrière-plan.",
          },
        },
      ],
      cta: "Voir toute la sélection",
    },
    featured: {
      eyebrow: "Bien du moment",
      title: "Appartement vue lac, aux Rives.",
      text: "Séjour traversant, terrasse et rénovation sobre, à 6 minutes à pied du lac. Cave et stationnement inclus.",
      facts: ["82 m²", "3 pièces", "2 chambres", "395 000 €"],
      image: {
        src: IMG.lakeTerrace,
        alt: "Une porte-fenêtre ouverte sur une terrasse avec une petite table et une chaise pliante, face à un lac au coucher du soleil.",
      },
      cta: "Voir la fiche",
      secondaryCta: "Demander la visite",
    },
    districts: {
      eyebrow: "Quartiers",
      title: "Nous connaissons nos quatre quartiers, rue par rue.",
      description:
        "Choisir un bien, c’est aussi choisir un quartier. Chacun a son caractère et son agent référent.",
      referentLabel: "Agent référent",
      items: [
        {
          name: "Les Rives",
          text: "Calme résidentiel et promenade au bord de l’eau.",
          referent: "Romain",
        },
        {
          name: "Vieille ville",
          text: "Caractère, commerces à pied et vie urbaine.",
          referent: "Nora",
        },
        {
          name: "Le Coteau",
          text: "Hauteurs, vues ouvertes et biens très recherchés.",
          referent: "Élise",
        },
        {
          name: "Les Jardins",
          text: "Maisons, jardins et rythme familial.",
          referent: "Élise",
        },
      ],
      cta: "Découvrir les quartiers",
    },
    proof: {
      eyebrow: "Avis",
      title: "Ce que disent ceux que nous avons accompagnés.",
      description:
        "Note moyenne de 4,8 sur 5, d’après les avis laissés après la vente ou l’achat.",
      label: "Avis de vendeurs et d’acquéreurs",
      items: [
        {
          quote:
            "On a toujours su qui appeler, et la personne connaissait notre rue. Elle nous a dit franchement que notre prix de départ était trop haut, et elle avait raison.",
          name: "Claire M.",
          detail: "Vendeuse, appartement",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Trois biens proposés, trois biens visités, et le deuxième était le bon. Pas de liste interminable à trier.",
          name: "Julien P.",
          detail: "Acquéreur, première acquisition",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Les comptes rendus après chaque visite m’ont évité bien des incertitudes. On savait toujours où on en était.",
          name: "Sophie L.",
          detail: "Vendeuse, maison",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Notre agent était en congé le jour de la signature : sa collègue connaissait le dossier par cœur, et rien n’a été retardé.",
          name: "Thomas R.",
          detail: "Acquéreur, maison",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Mon bien est resté en vente un peu plus longtemps que prévu, mais personne n’a oublié de me tenir au courant.",
          name: "Nadia B.",
          detail: "Vendeuse, appartement",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "Une recherche discrète pour un bien jamais annoncé. Je n’y croyais pas, et pourtant.",
          name: "Hugo D.",
          detail: "Acquéreur, recherche discrète",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
      ],
    },
    promise: {
      quote: "Peu de dossiers, suivis de près par une équipe qui se connaît.",
      text: "C’est pourquoi nous plafonnons notre sélection à dix biens et préparons chaque visite à l’avance : un portefeuille où personne ne vous rappelle n’est pas notre façon de travailler.",
      signature: "Votre entreprise, agence immobilière de quartier",
      image: {
        src: IMG.calm,
        alt: "Une chambre calme et sobre : un lit en lin blanc, des coussins bleus, une table de chevet blanche et bois et une lampe allumée.",
      },
      cta: "Écrivez-nous",
    },
  },
  biens: {
    hero: {
      eyebrow: "Notre sélection",
      title: "Dix biens au plus, tous visités par l’équipe.",
      description:
        "Nous ne publions pas tout ce qui existe : uniquement des biens que nous avons vus, mesurés et que nous pouvons défendre. Chaque fiche dit ce qui plaît, et ce qui demande réflexion.",
      checks: {
        title: "Dans chaque fiche",
        items: [
          "Une visite faite par l’agent référent du quartier",
          "Les points forts et les réserves, sans fard",
          "Les charges et la taxe foncière, estimées",
          "Les diagnostics, communiqués avec la fiche complète",
        ],
      },
    },
    list: {
      eyebrow: "À vendre",
      title: "Six biens en ce moment.",
      description: "Les prix et les biens sont fictifs, pour la démonstration.",
      opinionLabel: "Notre avis",
      items: [
        {
          image: {
            src: IMG.lakeLiving,
            alt: "Un séjour lumineux : deux fauteuils en cuir et une baie vitrée coulissante qui donne sur un ponton en bois et sur le lac.",
          },
          kind: "Appartement",
          status: "Nouveau",
          title: "Appartement vue lac",
          place: "Les Rives",
          specs: ["82 m²", "3 pièces", "2 chambres"],
          price: "395 000 €",
          opinion:
            "Un séjour traversant et une terrasse, à 6 minutes à pied du lac. Cave et stationnement inclus : la fiche détaille le reste.",
          target: "bien",
          cta: "Voir la fiche",
        },
        {
          image: {
            src: IMG.villa,
            alt: "Une maison contemporaine aux murs blancs, avec un jardin en pelouse et un grand arbre.",
          },
          kind: "Maison",
          status: "Visites en cours",
          title: "Maison blanche et son jardin",
          place: "Les Jardins",
          specs: ["160 m²", "6 pièces", "4 chambres"],
          price: "585 000 €",
          opinion:
            "Les volumes sont rares dans ce quartier. Le chauffage est ancien : nous avons un devis pour vous.",
          target: "contact",
          cta: "Demander la visite",
        },
        {
          image: {
            src: IMG.family,
            alt: "Un séjour ouvert sur la cuisine, avec un canapé gris-beige, un fauteuil en cuir brun, une table basse en bois et un comptoir à tabourets.",
          },
          kind: "Appartement",
          status: "Sous compromis",
          title: "Trois-pièces familial",
          place: "Les Jardins, près des écoles",
          specs: ["74 m²", "3 pièces", "2 chambres"],
          price: "312 000 €",
          opinion:
            "Pensé pour une famille : cuisine ouverte, rangements, deux vraies chambres.",
          target: "contact",
          cta: "Demander la visite",
        },
        {
          image: {
            src: IMG.loft,
            alt: "Un salon lumineux avec deux fauteuils, de grandes fenêtres et un séjour ouvert avec cheminée en arrière-plan.",
          },
          kind: "Appartement",
          status: "Nouveau",
          title: "Quatre-pièces lumineux",
          place: "Les Rives",
          specs: ["118 m²", "4 pièces", "3 chambres"],
          price: "438 000 €",
          opinion:
            "De beaux volumes et beaucoup de lumière. Nous vous disons aussi ce qui reste à rafraîchir.",
          target: "contact",
          cta: "Demander la visite",
        },
        {
          image: {
            src: IMG.timber,
            alt: "Une maison contemporaine bardée de bois, au toit à deux pentes, sur une pelouse bordée de grands arbres.",
          },
          kind: "Maison",
          status: "Visites en cours",
          title: "Maison de bois sous les arbres",
          place: "Le Coteau",
          specs: ["142 m²", "5 pièces", "3 chambres"],
          price: "512 000 €",
          opinion:
            "Une construction récente et soignée. L’orientation du jardin est son meilleur atout.",
          target: "contact",
          cta: "Demander la visite",
        },
        {
          image: {
            src: IMG.studio,
            alt: "Un coin séjour minimaliste avec un petit canapé noir, une commode blanche, une plante et un lampadaire.",
          },
          kind: "Studio",
          status: "Pour investisseur",
          title: "Studio clair, bien situé",
          place: "Vieille ville, près de la gare",
          specs: ["29 m²", "1 pièce", "Coin séjour"],
          price: "139 000 €",
          opinion:
            "Facile à louer, charges raisonnables. Nous vous donnons notre calcul de rentabilité, avec ses limites.",
          target: "contact",
          cta: "Demander la visite",
        },
      ],
    },
    visit: {
      eyebrow: "Une visite avec nous",
      title: "Trente à quarante-cinq minutes, sans pression.",
      description:
        "Nous préparons chaque visite à l’avance, et nous ne vous pressons jamais pour décider.",
      steps: [
        {
          icon: "file-text",
          title: "Avant",
          text: "Nous vous envoyons la fiche complète, nos réserves et les questions à se poser.",
        },
        {
          icon: "door-open",
          title: "Pendant",
          text: "Vous regardez, vous posez vos questions ; nous ne vantons rien que nous ne puissions montrer.",
        },
        {
          icon: "phone-call",
          title: "Après",
          text: "Nous vous appelons le jour même pour parler chiffres, travaux et prochaines étapes.",
        },
      ],
    },
    search: {
      eyebrow: "Recherche discrète",
      title: "Le bien que vous cherchez n’est peut-être pas annoncé.",
      text: "Dites-nous ce que vous voulez : nous en parlons aux propriétaires que nous connaissons avant que le bien n’apparaisse en ligne.",
      criteria: [
        "Type de bien et surface souhaitée",
        "Quartier ou secteur préféré",
        "Budget et apport",
        "Calendrier de votre projet",
      ],
    },
  },
  bien: {
    hero: {
      eyebrow: "Fiche bien · Les Rives",
      title: "Appartement vue lac",
      description:
        "Un séjour traversant, une terrasse et une rénovation sobre, à 6 minutes à pied du lac.",
      status: "Nouveau",
      price: "395 000 €",
      priceNote: "Honoraires à la charge du vendeur : 4 % TTC (barème fictif).",
      specs: ["82 m²", "3 pièces", "2 chambres", "Terrasse"],
    },
    gallery: {
      label: "Photos de l’appartement",
      items: [
        {
          src: IMG.lakeLiving,
          alt: "Un séjour lumineux : deux fauteuils en cuir et une baie vitrée coulissante qui donne sur un ponton en bois et sur le lac.",
        },
        {
          src: IMG.lakeKitchen,
          alt: "Une cuisine ouverte contemporaine : un comptoir en pierre grise, des façades en noyer, trois tabourets blancs et une suspension linéaire.",
        },
        {
          src: IMG.lakeTerrace,
          alt: "Une porte-fenêtre ouverte sur une terrasse avec une petite table et une chaise pliante, face à un lac au coucher du soleil.",
        },
        {
          src: IMG.lakeBedroom,
          alt: "Une chambre sobre : un lit bas sur un socle en bois clair, des draps blancs, des coussins gris et beige.",
        },
      ],
    },
    about: {
      eyebrow: "Le bien",
      title: "Un appartement calme, à vivre dedans comme dehors.",
      paragraphs: [
        "82 m² traversants, avec un séjour ouvert sur la cuisine et une terrasse avec vue sur le lac. Rénové en 2023 dans un registre sobre et lumineux : parquet, pierre et bois, sans fioritures.",
        "À 6 minutes à pied du lac, dans une copropriété calme aux charges maîtrisées. Une cave et un stationnement sont inclus.",
      ],
    },
    features: {
      title: "Caractéristiques",
      items: [
        { label: "Surface habitable", value: "82 m²" },
        { label: "Pièces", value: "3 pièces, 2 chambres" },
        { label: "Séjour", value: "Traversant, cuisine ouverte" },
        { label: "Extérieur", value: "Terrasse" },
        { label: "Rénovation", value: "2023, sobre" },
        { label: "Annexes", value: "Cave et stationnement inclus" },
        { label: "Situation", value: "6 minutes à pied du lac" },
        { label: "Copropriété", value: "Calme, charges maîtrisées" },
        { label: "Étiquette énergétique", value: "À compléter" },
      ],
    },
    opinion: {
      eyebrow: "Notre avis",
      title: "Ce qui plaît, ce qui demande réflexion.",
      pros: {
        title: "Ce qui plaît",
        items: [
          "Un séjour traversant, lumineux toute la journée",
          "Une terrasse avec vue sur le lac",
          "Cave et stationnement inclus, rares dans le quartier",
        ],
      },
      cons: {
        title: "À regarder de près",
        items: [
          "Les menuiseries de la terrasse, à vérifier en visite",
          "Les charges annuelles, que nous détaillons avec la fiche complète",
          "L’étiquette énergétique, à compléter avec le diagnostic",
        ],
      },
    },
    referent: {
      label: "Votre contact pour ce bien",
      name: "Romain",
      role: "Agent référent des Rives",
      text: "Il connaît l’immeuble, la copropriété et les ventes récentes du quartier.",
    },
    visit: {
      eyebrow: "Visite",
      title: "Demander une visite",
      intro:
        "Indiquez un créneau, nous vous rappelons pour confirmer. Les visites ont aussi lieu en soirée.",
      submit: "Demander la visite",
      fields: {
        name: "Nom et prénom",
        phone: "Téléphone",
        email: "E-mail",
        slot: "Créneau souhaité",
        slotPlaceholder: "Choisir",
        slots: [
          { value: "semaine-jour", label: "En semaine, en journée" },
          { value: "semaine-soir", label: "En semaine, en soirée" },
          { value: "samedi", label: "Le samedi matin" },
        ],
        message: "Une question sur le bien ?",
      },
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Deux parcours, une même équipe.",
      description:
        "Acquéreurs et vendeurs n’ont pas les mêmes questions. Nous suivons deux parcours distincts, avec le même agent référent du début à la fin.",
    },
    paths: {
      eyebrow: "Les deux parcours",
      title: "Acheter ou vendre : ce que nous faisons pour vous.",
      buyers: {
        icon: "key-round",
        title: "Acquéreurs",
        text: "Recherche ciblée, visites qualifiées, arbitrage entre quartier, usage et négociation.",
        steps: [
          "Un entretien pour fixer vos critères, votre budget et vos quartiers",
          "Une sélection courte, visitée par l’équipe avant vous",
          "Des visites préparées, avec un compte rendu le jour même",
          "Une négociation argumentée, puis le suivi jusqu’à l’acte",
        ],
        cta: "Voir notre sélection",
      },
      sellers: {
        icon: "house",
        title: "Vendeurs",
        text: "Estimation, stratégie de mise en marché, sélection des profils et accompagnement jusqu’à la signature.",
        steps: [
          "Une visite et un avis de valeur écrit sous 48 heures",
          "Photos, annonce et dossier préparés par l’équipe",
          "Des visites avec des acquéreurs que nous avons rencontrés",
          "La négociation, le compromis, puis le suivi jusqu’à la signature",
        ],
        cta: "Estimer mon bien",
      },
    },
    extras: {
      eyebrow: "En plus",
      title: "Ce que nous faisons aussi.",
      description:
        "Des services qui ne sont pas dans tous les projets, mais qui servent quand on en a besoin.",
      items: [
        {
          icon: "search",
          title: "Recherche discrète",
          text: "Nous parlons aux propriétaires que nous connaissons avant que le bien ne soit annoncé.",
        },
        {
          icon: "file-text",
          title: "Avis de valeur détaillé",
          text: "Pour un partage familial ou un projet patrimonial : dès 150 €, sur devis.",
        },
        {
          icon: "moon",
          title: "Visites en soirée",
          text: "Sur rendez-vous, l’agent de votre quartier se déplace après votre journée de travail.",
        },
        {
          icon: "handshake",
          title: "Mise en relation",
          text: "Si votre projet le demande, nous vous présentons des professionnels que nous connaissons : notaire, diagnostiqueur, artisan.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Ce qu’on nous demande souvent.",
      items: [
        {
          question: "Peut-on acheter et vendre en même temps ?",
          answer:
            "Oui. L’agent de votre quartier coordonne les deux projets pour que les dates se rejoignent autant que possible, sans promesse de calendrier.",
        },
        {
          question: "Combien coûte une recherche pour un acquéreur ?",
          answer:
            "La recherche et la sélection sont offertes. L’accompagnement à l’achat suit le barème indicatif de la page Estimation.",
        },
        {
          question: "Travaillez-vous en dehors de vos quartiers ?",
          answer:
            "Nous couvrons les communes voisines dans un rayon d’environ 20 km. Au-delà, nous vous le disons franchement.",
        },
      ],
    },
  },
  agents: {
    hero: {
      eyebrow: "L’équipe",
      title: "Trois agents, quatre quartiers : chacun a son référent.",
      description:
        "Vous connaissez l’agent de votre quartier, et il connaît le reste de l’équipe : les dossiers circulent, les visites se remplacent, personne ne vous demande de tout réexpliquer.",
      image: {
        src: IMG.keys,
        alt: "Une main qui tient un trousseau de clés avec un porte-clés en forme de maison, devant une porte blanche.",
      },
    },
    list: {
      eyebrow: "Les agents",
      title: "Qui s’occupe de quoi.",
      sectorLabel: "Secteur",
      items: [
        {
          name: "Élise",
          role: "Estimation et maisons familiales",
          sector: "Le Coteau et Les Jardins",
          text: "Élise passe voir chaque bien avant de l’estimer : elle compare avec les ventes récentes de la rue et explique son chiffre sans jargon.",
          points: [
            "Estimation et avis de valeur écrit",
            "Maisons avec jardin et biens familiaux",
            "Négociation côté vendeur",
          ],
          cta: "Écrire à Élise",
        },
        {
          name: "Romain",
          role: "Appartements premium, vues et négociation",
          sector: "Les Rives",
          text: "Romain suit les appartements de caractère et les biens avec vue ; il prépare chaque négociation avec les chiffres du quartier.",
          points: [
            "Appartements avec vue ou terrasse",
            "Négociation sensible, côté acquéreur comme côté vendeur",
            "Recherche discrète",
          ],
          cta: "Écrire à Romain",
        },
        {
          name: "Nora",
          role: "Relation vendeurs, diffusion et coordination des visites",
          sector: "Vieille ville",
          text: "Nora suit les vendeurs au quotidien : diffusion des annonces, compte rendu après chaque visite, agenda de toute l’équipe.",
          points: [
            "Suivi des vendeurs après chaque visite",
            "Diffusion des annonces et photos",
            "Coordination des visites de l’équipe",
          ],
          cta: "Écrire à Nora",
        },
      ],
    },
    team: {
      eyebrow: "Comment nous travaillons ensemble",
      title: "Une équipe qui se connaît.",
      items: [
        {
          icon: "calendar-check",
          title: "Un point chaque semaine",
          text: "Le lundi matin, nous passons en revue les biens, les acquéreurs en recherche et les visites de la semaine.",
        },
        {
          icon: "users",
          title: "Des dossiers partagés",
          text: "Chaque dossier est lisible par toute l’équipe : si votre agent est absent, un collègue prend le relais sans repartir de zéro.",
        },
        {
          icon: "phone-call",
          title: "Un compte rendu après chaque visite",
          text: "Vous recevez un appel le jour même, de l’agent qui a fait la visite.",
        },
      ],
    },
  },
  quartiers: {
    hero: {
      eyebrow: "Quartiers",
      title: "Quatre quartiers, connus rue par rue.",
      description:
        "Un bien se choisit autant pour son quartier que pour ses murs. Voici ce que chacun offre au quotidien, et l’agent qui le suit.",
    },
    list: {
      eyebrow: "Les quatre quartiers",
      title: "Le caractère de chacun.",
      referentLabel: "Agent référent",
      typesLabel: "Biens habituels",
      cta: "Voir les biens",
      items: [
        {
          name: "Les Rives",
          character: "Calme résidentiel au bord de l’eau",
          text: "Des immeubles récents et des appartements rénovés, à quelques minutes à pied du lac. Le quartier est calme le soir et très demandé le week-end.",
          points: [
            "Promenade et accès au lac à pied",
            "Commerces de proximité à moins de dix minutes",
            "Appartements avec terrasse ou vue",
          ],
          referent: "Romain",
          types: "Appartements, vues, terrasses",
          image: {
            src: IMG.rives,
            alt: "Des immeubles de briques alignés au bord d’une eau calme, qui s’y reflètent.",
          },
        },
        {
          name: "Vieille ville",
          character: "Caractère, patrimoine et vie à pied",
          text: "Des ruelles de pierre, des commerces en rez-de-chaussée et de petits appartements de caractère. Le quartier se vit à pied, avec la gare à proximité.",
          points: [
            "Gare et transports à proximité",
            "Commerces et marché à pied",
            "Studios et petits appartements, souvent loués",
          ],
          referent: "Nora",
          types: "Studios, deux-pièces, immeubles anciens",
          image: {
            src: IMG.oldTown,
            alt: "Une rue ancienne bordée d’arcades en pierre, de volets clairs et d’un massif planté.",
          },
        },
        {
          name: "Le Coteau",
          character: "Hauteurs, vues ouvertes et lumière",
          text: "Des maisons récentes et des propriétés plus anciennes sur les hauteurs, avec des jardins bien orientés et des vues dégagées. Les biens y restent rarement longtemps en vente.",
          points: [
            "Vues dégagées et jardins bien orientés",
            "Promenades à pied depuis la porte",
            "Maisons de plus de quatre pièces",
          ],
          referent: "Élise",
          types: "Maisons, jardins, vues",
          image: {
            src: IMG.coteau,
            alt: "Des maisons dispersées parmi les arbres aux couleurs d’automne, sur une colline dans la brume.",
          },
        },
        {
          name: "Les Jardins",
          character: "Maisons, jardins et rythme familial",
          text: "Des rues calmes, des haies et des jardins, avec les écoles et les équipements à proximité. Le quartier des familles qui veulent de l’espace sans quitter la ville.",
          points: [
            "Écoles et équipements à pied",
            "Maisons avec jardin et grands trois-pièces",
            "Rues peu passantes",
          ],
          referent: "Élise",
          types: "Maisons familiales, trois-pièces",
          image: {
            src: IMG.gardens,
            alt: "Une maison claire à la cheminée en brique, entourée d’un jardin, de haies et d’arbres.",
          },
        },
      ],
    },
    choose: {
      eyebrow: "Bien choisir",
      title: "Trois questions avant de choisir un quartier.",
      items: [
        {
          icon: "clock",
          title: "Quel temps de trajet ?",
          text: "Comptez le trajet à l’heure où vous le faites vraiment, pas à midi.",
        },
        {
          icon: "footprints",
          title: "Qu’avez-vous à pied ?",
          text: "Écoles, commerces, transports : dressez la liste de ce qui doit être à moins de dix minutes.",
        },
        {
          icon: "sun",
          title: "Quel extérieur voulez-vous ?",
          text: "Terrasse, jardin ou simple balcon : cela change les quartiers possibles, et le budget.",
        },
      ],
    },
  },
  estimation: {
    hero: {
      eyebrow: "Estimation offerte",
      title: "Que vaut votre bien ? Une visite pour le dire.",
      description:
        "Une estimation sérieuse se fait sur place, pas depuis un formulaire. L’agent de votre quartier visite, compare avec les ventes récentes du secteur et vous remet un avis de valeur écrit.",
      points: [
        "Offerte et sans engagement de vendre",
        "Avis écrit sous 48 heures après la visite",
        "Un avis de valeur, pas une expertise : nous vous expliquons la différence",
      ],
      image: {
        src: IMG.kitchen,
        alt: "Une cuisine blanche et lumineuse avec un îlot, des tabourets noirs et des suspensions.",
      },
    },
    form: {
      title: "Demander une estimation",
      intro:
        "Quelques informations suffisent. Nous vous rappelons pour fixer la visite.",
      submit: "Demander l’estimation",
      fields: {
        name: "Nom et prénom",
        phone: "Téléphone",
        email: "E-mail",
        kind: "Type de bien",
        kindPlaceholder: "Choisir",
        kinds: [
          { value: "appartement", label: "Appartement" },
          { value: "maison", label: "Maison" },
          { value: "terrain", label: "Terrain" },
          { value: "local", label: "Local ou immeuble" },
          { value: "autre", label: "Autre" },
        ],
        surface: "Surface approximative (m²)",
        district: "Quartier",
        districtPlaceholder: "Choisir",
        districts: [
          { value: "rives", label: "Les Rives" },
          { value: "vieille-ville", label: "Vieille ville" },
          { value: "coteau", label: "Le Coteau" },
          { value: "jardins", label: "Les Jardins" },
          { value: "autre", label: "Autre commune" },
        ],
        timing: "Votre délai",
        timingPlaceholder: "Choisir",
        timings: [
          { value: "vite", label: "Dès que possible" },
          { value: "3-mois", label: "Dans les 3 mois" },
          { value: "annee", label: "Dans l’année" },
          { value: "renseigne", label: "Simple renseignement" },
        ],
        message: "Ce que nous devons savoir (travaux, occupation, calendrier…)",
      },
    },
    method: {
      eyebrow: "Comment nous procédons",
      title: "Trois temps, et vous gardez la main.",
      description:
        "Vous recevez notre avis, vous décidez. Rien ne vous engage à vendre.",
      steps: [
        {
          icon: "door-open",
          title: "La visite",
          text: "Quarante-cinq minutes chez vous : nous regardons, nous mesurons, nous posons des questions sur l’histoire du bien.",
        },
        {
          icon: "scale",
          title: "La comparaison",
          text: "Nous comparons avec des ventes récentes et des biens en vente dans le quartier, et nous retenons les plus proches.",
        },
        {
          icon: "file-text",
          title: "L’avis écrit",
          text: "Sous 48 heures : une fourchette de prix, la justification, et le prix de présentation que nous vous conseillons.",
        },
      ],
    },
    content: {
      eyebrow: "Dans notre avis de valeur",
      title: "Ce que vous trouverez dans le document.",
      description:
        "Pas une simple fourchette. Un document que vous pouvez relire, discuter et montrer à vos proches.",
      items: [
        {
          icon: "bar-chart",
          title: "Les ventes comparables",
          text: "Les biens proches vendus récemment, et pourquoi nous les retenons ou les écartons.",
        },
        {
          icon: "thumbs-up",
          title: "Atouts et réserves",
          text: "Ce qui valorise votre bien, et ce qu’un acquéreur va relever.",
        },
        {
          icon: "tag",
          title: "Un prix de présentation",
          text: "Le prix auquel nous conseillons de commencer, avec la marge que nous prévoyons.",
        },
        {
          icon: "calendar",
          title: "Un calendrier réaliste",
          text: "Les délais habituels pour un bien comparable, sans promesse de date de vente.",
        },
      ],
    },
    fees: {
      eyebrow: "Nos honoraires",
      title: "Ce que nous facturons, en clair.",
      description: "Nos honoraires, par type de mission.",
      note: "Barème fictif, donné à titre d’exemple.",
      groups: [
        {
          title: "Vendre",
          items: [
            {
              name: "Estimation et avis de valeur",
              detail: "Visite, comparaison, avis écrit",
              price: "Offerte",
            },
            {
              name: "Mise en vente complète",
              detail: "Photos, annonce, visites, négociation",
              price: "dès 4 % TTC",
              note: "À la charge du vendeur",
            },
          ],
        },
        {
          title: "Acheter",
          items: [
            {
              name: "Recherche et sélection",
              detail: "Entretien, biens visités par l’équipe",
              price: "Offerte",
            },
            {
              name: "Accompagnement à l’achat",
              detail: "Visites, négociation, suivi jusqu’à l’acte",
              price: "dès 3,5 % TTC",
              note: "Barème indicatif",
            },
          ],
        },
        {
          title: "Autres demandes",
          items: [
            {
              name: "Avis de valeur détaillé",
              detail: "Partage familial, projet patrimonial",
              price: "dès 150 €",
              note: "Sur devis",
            },
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Ce qu’on nous demande avant de se lancer.",
      items: [
        {
          question: "L’estimation engage-t-elle à vendre ?",
          answer:
            "Non. Vous recevez notre avis, vous prenez le temps de réfléchir, et vous décidez ensuite, ou pas.",
        },
        {
          question: "Pourquoi une visite plutôt qu’un simulateur ?",
          answer:
            "Un simulateur ne voit ni la lumière, ni l’état des finitions, ni le voisinage. Ce sont pourtant ces détails qui font varier le prix.",
        },
        {
          question: "Combien de temps dure la démarche ?",
          answer:
            "Comptez quarante-cinq minutes de visite, puis notre avis écrit dans les 48 heures qui suivent.",
        },
        {
          question: "Faut-il préparer des documents ?",
          answer:
            "Pas pour la visite. Si vous décidez de vendre, nous vous donnerons la liste des pièces à réunir, étape par étape.",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Parlons de votre projet, directement avec l’équipe.",
      description:
        "Vendre, acheter, estimer ou simplement poser une question : écrivez-nous, une personne de l’équipe vous répond, puis l’agent de votre quartier prend le relais.",
    },
    form: {
      title: "Écrivez-nous",
      intro:
        "Nous répondons en général dans la journée, sinon le lendemain matin.",
      submit: "Envoyer le message",
      fields: {
        name: "Nom et prénom",
        phone: "Téléphone",
        email: "E-mail",
        project: "Votre projet",
        projectPlaceholder: "Choisir",
        projects: [
          { value: "vendre", label: "Vendre un bien" },
          { value: "acheter", label: "Acheter un bien" },
          { value: "estimer", label: "Obtenir une estimation" },
          { value: "autre", label: "Autre demande" },
        ],
        district: "Votre quartier",
        districtPlaceholder: "Choisir",
        districts: [
          { value: "rives", label: "Les Rives" },
          { value: "vieille-ville", label: "Vieille ville" },
          { value: "coteau", label: "Le Coteau" },
          { value: "jardins", label: "Les Jardins" },
          { value: "indecis", label: "Pas encore décidé" },
        ],
        time: "Meilleur moment pour vous joindre",
        timePlaceholder: "Choisir",
        times: [
          { value: "matin", label: "Le matin" },
          { value: "midi", label: "Entre midi et deux" },
          { value: "soir", label: "En fin de journée" },
        ],
        message: "Votre message",
      },
    },
    details: {
      title: "Coordonnées",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Adresse",
      access: "Rendez-vous chez vous, ou à l’agence sur rendez-vous.",
      image: {
        src: IMG.salon,
        alt: "Un séjour lumineux et dépouillé : un buffet en bois, un fauteuil gris clair, des plantes et un parquet en chevrons.",
      },
    },
    next: {
      eyebrow: "Et ensuite",
      title: "Ce qui se passe après votre message.",
      steps: [
        {
          icon: "mail-check",
          title: "Nous lisons, nous notons",
          text: "Votre message est lu par l’équipe, puis confié à l’agent référent de votre quartier.",
        },
        {
          icon: "phone-call",
          title: "Nous vous rappelons",
          text: "Au créneau que vous avez indiqué, pour un premier échange de dix à quinze minutes.",
        },
        {
          icon: "calendar-check",
          title: "Nous fixons un rendez-vous",
          text: "Chez vous, à l’agence ou par téléphone, selon votre projet.",
        },
      ],
    },
  },
} as const;

export type AgenceImmobiliereCopy = WidenLiterals<typeof fr>;
export type AgenceImmobiliereIconKey = TemplateIconKey<AgenceImmobiliereCopy>;

const en: AgenceImmobiliereCopy = {
  brand: {
    name: "Your business",
    tagline: "Neighborhood real estate agency",
  },
  phone: {
    href: "tel:+33199000052",
    label: "01 99 00 00 52",
  },
  nav: {
    home: "Home",
    biens: "Properties",
    services: "Services",
    agents: "Agents",
    quartiers: "Neighborhoods",
    estimation: "Home value",
    contact: "Contact",
  },
  cta: {
    estimate: "Request a free home value estimate",
    estimateShort: "Estimate",
    call: "Call us",
    callShort: "Call",
    seeSelection: "See our selection",
    seeAllListings: "See the full selection",
    describeSearch: "Describe my search",
    askVisit: "Request a showing",
    writeToUs: "Write to us",
    seeListing: "View the listing",
    backToListings: "Back to properties",
    seeDistricts: "Explore the neighborhoods",
    meetTeam: "Meet the team",
  },
  common: {
    email: "contact@example.com",
    address: "12 Example Street, 00000 Your city",
    zone: {
      label: "Area",
      text: "Four city neighborhoods and nearby towns, within about 12 miles.",
    },
    hoursLabel: "Availability",
    hours: [
      { day: "Monday to Friday", time: "9 am-7 pm" },
      { day: "Saturday", time: "9 am-1 pm" },
      { day: "Showings", time: "By appointment, evenings included" },
    ],
    closing: {
      eyebrow: "Let’s talk",
      title: "One call is enough to know where you stand.",
      text: "Someone on the team answers, usually the same day, and then the lead agent for your neighborhood follows your file.",
    },
  },
  footer: {
    title: "A neighborhood agency, a lead agent, a short selection.",
    text: "We support sellers and buyers from the first meeting to closing, with the agent who knows your neighborhood.",
    contactLabel: "Contact",
    proCard: "Professional license: to be completed",
    demoNotice:
      "Properties, prices and reviews are fictional, for demonstration.",
    barLabel: "Quick access",
  },
  meta: {
    home: {
      title: "Your business - Neighborhood real estate agency",
      description:
        "A neighborhood real estate agency: a lead agent for every area, free home value estimate, a short list of visited homes and support through closing.",
    },
    biens: {
      title: "Properties - Your business",
      description:
        "Our selection of properties: ten at most at a time, each one visited by the team, with our frank opinion, floor areas and prices.",
    },
    bien: {
      title: "Lake view apartment - Your business",
      description:
        "An 883 sq ft apartment with a dual-exposure living room and a terrace, a 6-minute walk from the lake: features, photos, price and showing request.",
    },
    services: {
      title: "Services - Your business",
      description:
        "Two paths, buyers and sellers: the steps, the extra services and answers to common questions. One lead agent from start to finish.",
    },
    agents: {
      title: "Agents - Your business",
      description:
        "Élise, Romain and Nora: three agents, four neighborhoods, a lead agent for each, with their specialties and how they work together.",
    },
    quartiers: {
      title: "Neighborhoods - Your business",
      description:
        "The four neighborhoods we cover: The Riverside, Old Town, The Hillside and The Gardens, with their character, properties and lead agent.",
    },
    estimation: {
      title: "Home value - Your business",
      description:
        "A free home value estimate of your property: a visit, a reasoned comparison and a written market analysis within 48 hours. Demo form.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Contact the agency: demo form, fictional contact details, availability and area covered.",
    },
  },
  home: {
    hero: {
      eyebrow: "Neighborhood real estate agency",
      title: "A lead agent for each neighborhood, a whole team behind them.",
      description:
        "Every neighborhood has its own agent, who knows its streets, its buildings and its prices. Every week, the team reviews the properties, the buyers and the showings together: your project keeps moving even when your agent is at a showing elsewhere.",
      image: {
        src: IMG.hero,
        alt: "A bright dining room with a black table, gray chairs, a bouquet and a large glass wall.",
      },
      facts: [
        {
          value: "48 hr",
          label: "to give you a written market analysis after the visit",
        },
        {
          value: "10",
          label: "properties at most at a time, each one visited by the team",
        },
        {
          value: "4",
          label: "neighborhoods, each with its own lead agent",
        },
      ],
    },
    offer: {
      eyebrow: "How we help",
      title: "Two projects, one way of working.",
      description:
        "Whether you are selling or looking, we start by listening, we tell you what we think with numbers, and we only promise what we can deliver.",
      sellers: {
        icon: "house",
        title: "If you are selling",
        text: "The agent for your neighborhood visits the property and gives you a reasoned market analysis, then the team takes care of the photos, the listing and the showings.",
        points: [
          "Free estimate, no obligation",
          "Photos and listing prepared by the team",
          "Showings with buyers we have met beforehand",
          "A report after every showing",
        ],
        cta: "Estimate my home",
      },
      buyers: {
        icon: "key-round",
        title: "If you are buying",
        text: "You tell us what you are looking for, and we show you few properties: each one visited by the team before you, with what works and what doesn’t.",
        points: [
          "An interview to pin down your criteria and budget",
          "A short selection, commented without sugarcoating",
          "Help comparing, negotiating and putting the file together",
          "A discreet search if the property is not advertised",
        ],
        cta: "See our selection",
      },
    },
    method: {
      eyebrow: "Start to finish",
      title: "Five steps, and the same team from start to finish.",
      description:
        "Every project follows the same thread. At each step we tell you where we stand and what comes next.",
      steps: [
        {
          icon: "coffee",
          title: "We meet",
          text: "A coffee or a visit: you tell us about your project, we note your constraints and your timeline.",
        },
        {
          icon: "ruler",
          title: "We estimate or we search",
          text: "A reasoned market analysis, or a first selection of properties, with numbers we can explain.",
        },
        {
          icon: "camera",
          title: "We prepare",
          text: "Photos, listing and file on the seller side; refined criteria and scheduled showings on the buyer side.",
        },
        {
          icon: "handshake",
          title: "We present and negotiate",
          text: "We lead the showings, pass on the offers and stand up for your position without pressuring you.",
        },
        {
          icon: "file-check",
          title: "We support you through closing",
          text: "Documents to gather, exchanges with the notary, a last meeting: we stay by your side until you get the keys.",
        },
      ],
    },
    selection: {
      eyebrow: "Right now",
      title: "A few properties we are presenting.",
      description:
        "We keep only ten properties at a time. Here are four: tap or hover over a property to discover it.",
      label: "Properties in our selection",
      items: [
        {
          title: "Lake view apartment",
          meta: "3 rooms · 883 sq ft · €395,000",
          image: {
            src: IMG.lakeLiving,
            alt: "A sunlit living room: two leather armchairs and a sliding glass door that opens onto a wooden dock and the lake.",
          },
        },
        {
          title: "White house and its garden",
          meta: "6 rooms · 1,722 sq ft · €585,000",
          image: {
            src: IMG.villa,
            alt: "A contemporary house with white walls, a grass lawn and a large tree.",
          },
        },
        {
          title: "Family three-room apartment",
          meta: "3 rooms · 797 sq ft · €312,000",
          image: {
            src: IMG.family,
            alt: "A living room open to the kitchen, with a gray-beige sofa, a brown leather armchair, a wooden coffee table and a counter with stools.",
          },
        },
        {
          title: "Bright four-room apartment",
          meta: "4 rooms · 1,270 sq ft · €438,000",
          image: {
            src: IMG.loft,
            alt: "A bright living room with two armchairs, large windows and an open dining area with a fireplace in the background.",
          },
        },
      ],
      cta: "See the full selection",
    },
    featured: {
      eyebrow: "Featured property",
      title: "Lake view apartment, The Riverside.",
      text: "A dual-exposure living room, a terrace and a restrained renovation, a 6-minute walk from the lake. Storage room and parking included.",
      facts: ["883 sq ft", "3 rooms", "2 bedrooms", "€395,000"],
      image: {
        src: IMG.lakeTerrace,
        alt: "An open glass door onto a terrace with a small table and a folding chair, facing a lake at sunset.",
      },
      cta: "View the listing",
      secondaryCta: "Request a showing",
    },
    districts: {
      eyebrow: "Neighborhoods",
      title: "We know our four neighborhoods, street by street.",
      description:
        "Choosing a property also means choosing a neighborhood. Each one has its own character and its own lead agent.",
      referentLabel: "Lead agent",
      items: [
        {
          name: "The Riverside",
          text: "Quiet residential streets and a waterside walk.",
          referent: "Romain",
        },
        {
          name: "Old Town",
          text: "Character, shops within walking distance and city life.",
          referent: "Nora",
        },
        {
          name: "The Hillside",
          text: "High ground, open views and highly sought-after homes.",
          referent: "Élise",
        },
        {
          name: "The Gardens",
          text: "Houses, gardens and a family pace.",
          referent: "Élise",
        },
      ],
      cta: "Explore the neighborhoods",
    },
    proof: {
      eyebrow: "Reviews",
      title: "What the people we have helped say.",
      description:
        "Average rating of 4.8 out of 5, based on reviews left after the sale or purchase.",
      label: "Reviews from sellers and buyers",
      items: [
        {
          quote:
            "We always knew who to call, and they knew our street. They told us frankly that our starting price was too high, and they were right.",
          name: "Claire M.",
          detail: "Seller, apartment",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Three properties suggested, three properties visited, and the second one was the right one. No endless list to sort through.",
          name: "Julien P.",
          detail: "Buyer, first purchase",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "The reports after every showing spared me a lot of uncertainty. We always knew where we stood.",
          name: "Sophie L.",
          detail: "Seller, house",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Our agent was on vacation on closing day: a colleague knew the file inside out, and nothing was delayed.",
          name: "Thomas R.",
          detail: "Buyer, house",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "My property stayed on the market a little longer than planned, but nobody forgot to keep me posted.",
          name: "Nadia B.",
          detail: "Seller, apartment",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
        {
          quote:
            "A discreet search for a property that was never advertised. I did not think it would work, and yet it did.",
          name: "Hugo D.",
          detail: "Buyer, discreet search",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
      ],
    },
    promise: {
      quote: "A few files, closely followed by a team that knows each other.",
      text: "That is why we cap our selection at ten properties and prepare every showing in advance: a client list where nobody calls you back is not how we work.",
      signature: "Your business, neighborhood real estate agency",
      image: {
        src: IMG.calm,
        alt: "A calm, understated bedroom: a bed with white linen, blue cushions, a white and wood nightstand and a lit lamp.",
      },
      cta: "Write to us",
    },
  },
  biens: {
    hero: {
      eyebrow: "Our selection",
      title: "Ten properties at most, each one visited by the team.",
      description:
        "We do not publish everything that exists: only properties we have seen, measured and can stand behind. Each listing says what appeals, and what calls for thought.",
      checks: {
        title: "In every listing",
        items: [
          "A visit by the lead agent for the neighborhood",
          "Strengths and reservations, with no sugarcoating",
          "Monthly costs and property taxes, estimated",
          "Inspection reports, provided with the full listing",
        ],
      },
    },
    list: {
      eyebrow: "For sale",
      title: "Six properties right now.",
      description:
        "Prices and properties are fictional, for demonstration purposes.",
      opinionLabel: "Our opinion",
      items: [
        {
          image: {
            src: IMG.lakeLiving,
            alt: "A sunlit living room: two leather armchairs and a sliding glass door that opens onto a wooden dock and the lake.",
          },
          kind: "Apartment",
          status: "New",
          title: "Lake view apartment",
          place: "The Riverside",
          specs: ["883 sq ft", "3 rooms", "2 bedrooms"],
          price: "€395,000",
          opinion:
            "A dual-exposure living room and a terrace, a 6-minute walk from the lake. Storage room and parking included: the listing covers the rest.",
          target: "bien",
          cta: "View the listing",
        },
        {
          image: {
            src: IMG.villa,
            alt: "A contemporary house with white walls, a grass lawn and a large tree.",
          },
          kind: "House",
          status: "Showings underway",
          title: "White house and its garden",
          place: "The Gardens",
          specs: ["1,722 sq ft", "6 rooms", "4 bedrooms"],
          price: "€585,000",
          opinion:
            "Spaces this large are rare in this neighborhood. The heating is old: we have a quote for you.",
          target: "contact",
          cta: "Request a showing",
        },
        {
          image: {
            src: IMG.family,
            alt: "A living room open to the kitchen, with a gray-beige sofa, a brown leather armchair, a wooden coffee table and a counter with stools.",
          },
          kind: "Apartment",
          status: "Under contract",
          title: "Family three-room apartment",
          place: "The Gardens, near the schools",
          specs: ["797 sq ft", "3 rooms", "2 bedrooms"],
          price: "€312,000",
          opinion:
            "Designed for a family: open kitchen, storage, two real bedrooms.",
          target: "contact",
          cta: "Request a showing",
        },
        {
          image: {
            src: IMG.loft,
            alt: "A bright living room with two armchairs, large windows and an open dining area with a fireplace in the background.",
          },
          kind: "Apartment",
          status: "New",
          title: "Bright four-room apartment",
          place: "The Riverside",
          specs: ["1,270 sq ft", "4 rooms", "3 bedrooms"],
          price: "€438,000",
          opinion:
            "Generous spaces and plenty of light. We also tell you what still needs freshening up.",
          target: "contact",
          cta: "Request a showing",
        },
        {
          image: {
            src: IMG.timber,
            alt: "A contemporary wood-clad house with a pitched roof, on a lawn lined with tall trees.",
          },
          kind: "House",
          status: "Showings underway",
          title: "Wood house under the trees",
          place: "The Hillside",
          specs: ["1,528 sq ft", "5 rooms", "3 bedrooms"],
          price: "€512,000",
          opinion:
            "Recent, careful construction. The orientation of the garden is its best asset.",
          target: "contact",
          cta: "Request a showing",
        },
        {
          image: {
            src: IMG.studio,
            alt: "A minimalist living nook with a small black sofa, a white dresser, a plant and a floor lamp.",
          },
          kind: "Studio",
          status: "For investors",
          title: "Bright studio, well located",
          place: "Old Town, near the station",
          specs: ["312 sq ft", "1 room", "Living nook"],
          price: "€139,000",
          opinion:
            "Easy to rent, reasonable monthly costs. We share our yield calculation, with its limits.",
          target: "contact",
          cta: "Request a showing",
        },
      ],
    },
    visit: {
      eyebrow: "A showing with us",
      title: "Thirty to forty-five minutes, no pressure.",
      description:
        "We prepare every showing in advance, and we never rush you to decide.",
      steps: [
        {
          icon: "file-text",
          title: "Before",
          text: "We send you the full listing, our reservations and the questions to ask yourself.",
        },
        {
          icon: "door-open",
          title: "During",
          text: "You look, you ask questions, and we never praise anything we cannot show.",
        },
        {
          icon: "phone-call",
          title: "After",
          text: "We call you the same day to talk numbers, repairs and next steps.",
        },
      ],
    },
    search: {
      eyebrow: "Discreet search",
      title: "The property you want may not be advertised.",
      text: "Tell us what you want: we talk to the owners we know before the property appears online.",
      criteria: [
        "Type of property and desired floor area",
        "Preferred neighborhood or area",
        "Budget and down payment",
        "Timeline of your project",
      ],
    },
  },
  bien: {
    hero: {
      eyebrow: "Property listing · The Riverside",
      title: "Lake view apartment",
      description:
        "A dual-exposure living room, a terrace and a restrained renovation, a 6-minute walk from the lake.",
      status: "New",
      price: "€395,000",
      priceNote:
        "Agency fee paid by the seller: 4% tax included (fictional schedule).",
      specs: ["883 sq ft", "3 rooms", "2 bedrooms", "Terrace"],
    },
    gallery: {
      label: "Photos of the apartment",
      items: [
        {
          src: IMG.lakeLiving,
          alt: "A sunlit living room: two leather armchairs and a sliding glass door that opens onto a wooden dock and the lake.",
        },
        {
          src: IMG.lakeKitchen,
          alt: "A contemporary open kitchen: a gray stone counter, walnut cabinetry, three white stools and a linear pendant light.",
        },
        {
          src: IMG.lakeTerrace,
          alt: "An open glass door onto a terrace with a small table and a folding chair, facing a lake at sunset.",
        },
        {
          src: IMG.lakeBedroom,
          alt: "An understated bedroom: a low bed on a light wood base, white linen, gray and beige cushions.",
        },
      ],
    },
    about: {
      eyebrow: "The property",
      title: "A quiet apartment, to live in indoors and out.",
      paragraphs: [
        "883 sq ft running front to back, with a living room open to the kitchen and a terrace with a lake view. Renovated in 2023 in a restrained, bright style: wood floors, stone and wood, no frills.",
        "A 6-minute walk from the lake, in a quiet building with moderate monthly costs. A storage room and a parking space are included.",
      ],
    },
    features: {
      title: "Features",
      items: [
        { label: "Living area", value: "883 sq ft" },
        { label: "Rooms", value: "3 rooms, 2 bedrooms" },
        { label: "Living room", value: "Dual exposure, open kitchen" },
        { label: "Outdoor space", value: "Terrace" },
        { label: "Renovation", value: "2023, restrained" },
        { label: "Extras", value: "Storage room and parking included" },
        { label: "Location", value: "6-minute walk from the lake" },
        { label: "Building", value: "Quiet, moderate monthly costs" },
        { label: "Energy rating", value: "To be completed" },
      ],
    },
    opinion: {
      eyebrow: "Our opinion",
      title: "What appeals, what calls for thought.",
      pros: {
        title: "What appeals",
        items: [
          "A dual-exposure living room, bright all day",
          "A terrace with a lake view",
          "Storage room and parking included, rare in the neighborhood",
        ],
      },
      cons: {
        title: "Worth a close look",
        items: [
          "The terrace windows and doors, to check at the showing",
          "The yearly costs, which we detail with the full listing",
          "The energy rating, to be completed with the inspection",
        ],
      },
    },
    referent: {
      label: "Your contact for this property",
      name: "Romain",
      role: "Lead agent for The Riverside",
      text: "He knows the building, the owners’ association and the neighborhood’s recent sales.",
    },
    visit: {
      eyebrow: "Showing",
      title: "Request a showing",
      intro:
        "Pick a time slot and we will call you back to confirm. Showings are also available in the evening.",
      submit: "Request a showing",
      fields: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        slot: "Preferred time slot",
        slotPlaceholder: "Choose",
        slots: [
          { value: "semaine-jour", label: "Weekdays, during the day" },
          { value: "semaine-soir", label: "Weekdays, in the evening" },
          { value: "samedi", label: "Saturday morning" },
        ],
        message: "A question about the property?",
      },
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Two paths, one team.",
      description:
        "Buyers and sellers do not have the same questions. We follow two distinct paths, with the same lead agent from start to finish.",
    },
    paths: {
      eyebrow: "The two paths",
      title: "Buying or selling: what we do for you.",
      buyers: {
        icon: "key-round",
        title: "Buyers",
        text: "A targeted search, qualified showings, and weighing neighborhood, daily use and negotiation.",
        steps: [
          "An interview to set your criteria, your budget and your neighborhoods",
          "A short selection, visited by the team before you",
          "Prepared showings, with a report the same day",
          "A reasoned negotiation, then follow-up through closing",
        ],
        cta: "See our selection",
      },
      sellers: {
        icon: "house",
        title: "Sellers",
        text: "Valuation, a go-to-market strategy, buyer screening and support through to the signing.",
        steps: [
          "A visit and a written market analysis within 48 hours",
          "Photos, listing and file prepared by the team",
          "Showings with buyers we have met",
          "Negotiation, the purchase agreement, then follow-up through closing",
        ],
        cta: "Estimate my home",
      },
    },
    extras: {
      eyebrow: "On top of that",
      title: "What else we do.",
      description:
        "Services that are not part of every project, but that help when you need them.",
      items: [
        {
          icon: "search",
          title: "Discreet search",
          text: "We talk to the owners we know before a property is advertised.",
        },
        {
          icon: "file-text",
          title: "Detailed market analysis",
          text: "For a family estate split or a wealth planning project: from €150, by quote.",
        },
        {
          icon: "moon",
          title: "Evening showings",
          text: "By appointment, the agent for your neighborhood meets you after your workday.",
        },
        {
          icon: "handshake",
          title: "Introductions",
          text: "If your project calls for it, we introduce professionals we know: notary, inspector, contractor.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What we are often asked.",
      items: [
        {
          question: "Can you buy and sell at the same time?",
          answer:
            "Yes. The agent for your neighborhood coordinates both projects so that the dates line up as much as possible, with no promise on timing.",
        },
        {
          question: "How much does a search cost for a buyer?",
          answer:
            "The search and the selection are free. Purchase support follows the indicative fee schedule on the Home value page.",
        },
        {
          question: "Do you work outside your neighborhoods?",
          answer:
            "We cover the neighboring towns within about 12 miles. Beyond that, we tell you so frankly.",
        },
      ],
    },
  },
  agents: {
    hero: {
      eyebrow: "The team",
      title: "Three agents, four neighborhoods: each has a lead agent.",
      description:
        "You know the agent for your neighborhood, and they know the rest of the team: files circulate, showings are covered, nobody asks you to explain everything again.",
      image: {
        src: IMG.keys,
        alt: "A hand holding a set of keys with a house-shaped key ring, in front of a white door.",
      },
    },
    list: {
      eyebrow: "The agents",
      title: "Who takes care of what.",
      sectorLabel: "Area",
      items: [
        {
          name: "Élise",
          role: "Valuation and family homes",
          sector: "The Hillside and The Gardens",
          text: "Élise visits every property before estimating it: she compares with recent sales on the street and explains her figure without jargon.",
          points: [
            "Valuation and written market analysis",
            "Houses with a garden and family homes",
            "Negotiation on the seller side",
          ],
          cta: "Write to Élise",
        },
        {
          name: "Romain",
          role: "Premium apartments, views and negotiation",
          sector: "The Riverside",
          text: "Romain follows apartments with character and properties with a view; he prepares every negotiation with the neighborhood’s numbers.",
          points: [
            "Apartments with a view or a terrace",
            "Delicate negotiation, for buyers and sellers alike",
            "Discreet search",
          ],
          cta: "Write to Romain",
        },
        {
          name: "Nora",
          role: "Seller relations, listings and showing coordination",
          sector: "Old Town",
          text: "Nora follows sellers day to day: publishing listings, a report after every showing, and the whole team’s calendar.",
          points: [
            "Seller follow-up after every showing",
            "Listings and photos",
            "Coordinating the team’s showings",
          ],
          cta: "Write to Nora",
        },
      ],
    },
    team: {
      eyebrow: "How we work together",
      title: "A team that knows each other.",
      items: [
        {
          icon: "calendar-check",
          title: "A check-in every week",
          text: "On Monday morning, we go over the properties, the buyers who are searching and the week’s showings.",
        },
        {
          icon: "users",
          title: "Shared files",
          text: "Every file can be read by the whole team: if your agent is away, a colleague takes over without starting from scratch.",
        },
        {
          icon: "phone-call",
          title: "A report after every showing",
          text: "You get a call the same day, from the agent who did the showing.",
        },
      ],
    },
  },
  quartiers: {
    hero: {
      eyebrow: "Neighborhoods",
      title: "Four neighborhoods, known street by street.",
      description:
        "You choose a property as much for its neighborhood as for its walls. Here is what each one offers day to day, and the agent who follows it.",
    },
    list: {
      eyebrow: "The four neighborhoods",
      title: "The character of each.",
      referentLabel: "Lead agent",
      typesLabel: "Typical properties",
      cta: "See the properties",
      items: [
        {
          name: "The Riverside",
          character: "Quiet residential streets by the water",
          text: "Recent buildings and renovated apartments, a few minutes’ walk from the lake. The neighborhood is quiet in the evening and in high demand on weekends.",
          points: [
            "A waterside walk and lake access on foot",
            "Local shops within ten minutes",
            "Apartments with a terrace or a view",
          ],
          referent: "Romain",
          types: "Apartments, views, terraces",
          image: {
            src: IMG.rives,
            alt: "A row of brick buildings along calm water, reflected in it.",
          },
        },
        {
          name: "Old Town",
          character: "Character, heritage and life on foot",
          text: "Stone lanes, shops at street level and small apartments with character. The neighborhood is lived on foot, with the station nearby.",
          points: [
            "Station and public transit nearby",
            "Shops and a market within walking distance",
            "Studios and small apartments, often rented out",
          ],
          referent: "Nora",
          types: "Studios, two-room apartments, older buildings",
          image: {
            src: IMG.oldTown,
            alt: "An old street lined with stone arches, pale shutters and a planted bed.",
          },
        },
        {
          name: "The Hillside",
          character: "High ground, open views and light",
          text: "Recent houses and older properties on the heights, with well-oriented gardens and clear views. Homes here rarely stay on the market for long.",
          points: [
            "Clear views and well-oriented gardens",
            "Walks starting at your front door",
            "Houses with more than four rooms",
          ],
          referent: "Élise",
          types: "Houses, gardens, views",
          image: {
            src: IMG.coteau,
            alt: "Houses scattered among autumn-colored trees on a hillside, in a light haze.",
          },
        },
        {
          name: "The Gardens",
          character: "Houses, gardens and a family pace",
          text: "Quiet streets, hedges and gardens, with schools and amenities nearby. The neighborhood for families who want space without leaving the city.",
          points: [
            "Schools and amenities on foot",
            "Houses with a garden and large three-room apartments",
            "Streets with little traffic",
          ],
          referent: "Élise",
          types: "Family houses, three-room apartments",
          image: {
            src: IMG.gardens,
            alt: "A light-colored house with a brick chimney, surrounded by a garden, hedges and trees.",
          },
        },
      ],
    },
    choose: {
      eyebrow: "Choosing well",
      title: "Three questions before choosing a neighborhood.",
      items: [
        {
          icon: "clock",
          title: "How long is the commute?",
          text: "Count the trip at the time of day you will really make it, not at noon.",
        },
        {
          icon: "footprints",
          title: "What do you have within walking distance?",
          text: "Schools, shops, transit: list what has to be within ten minutes.",
        },
        {
          icon: "sun",
          title: "What kind of outdoor space do you want?",
          text: "A terrace, a garden or just a balcony: it changes which neighborhoods are possible, and the budget.",
        },
      ],
    },
  },
  estimation: {
    hero: {
      eyebrow: "Free home value estimate",
      title: "What is your property worth? A visit to tell you.",
      description:
        "A serious estimate is done on site, not from a form. The agent for your neighborhood visits, compares with recent sales in the area and gives you a written market analysis.",
      points: [
        "Free, with no obligation to sell",
        "Written analysis within 48 hours after the visit",
        "A market analysis, not an appraisal: we explain the difference",
      ],
      image: {
        src: IMG.kitchen,
        alt: "A bright white kitchen with an island, black stools and pendant lights.",
      },
    },
    form: {
      title: "Request an estimate",
      intro:
        "A few details are enough. We will call you back to schedule the visit.",
      submit: "Request the estimate",
      fields: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        kind: "Type of property",
        kindPlaceholder: "Choose",
        kinds: [
          { value: "appartement", label: "Apartment" },
          { value: "maison", label: "House" },
          { value: "terrain", label: "Land" },
          { value: "local", label: "Commercial space or building" },
          { value: "autre", label: "Other" },
        ],
        surface: "Approximate floor area (sq ft)",
        district: "Neighborhood",
        districtPlaceholder: "Choose",
        districts: [
          { value: "rives", label: "The Riverside" },
          { value: "vieille-ville", label: "Old Town" },
          { value: "coteau", label: "The Hillside" },
          { value: "jardins", label: "The Gardens" },
          { value: "autre", label: "Another town" },
        ],
        timing: "Your timeline",
        timingPlaceholder: "Choose",
        timings: [
          { value: "vite", label: "As soon as possible" },
          { value: "3-mois", label: "Within 3 months" },
          { value: "annee", label: "Within the year" },
          { value: "renseigne", label: "Just gathering information" },
        ],
        message: "What we should know (repairs, occupancy, timing…)",
      },
    },
    method: {
      eyebrow: "How we go about it",
      title: "Three steps, and you stay in control.",
      description:
        "You receive our analysis, then you decide. Nothing obliges you to sell.",
      steps: [
        {
          icon: "door-open",
          title: "The visit",
          text: "Forty-five minutes at your place: we look, we measure, we ask questions about the history of the property.",
        },
        {
          icon: "scale",
          title: "The comparison",
          text: "We compare with recent sales and properties on the market in the neighborhood, and keep the closest ones.",
        },
        {
          icon: "file-text",
          title: "The written analysis",
          text: "Within 48 hours: a price range, the reasoning, and the listing price we recommend.",
        },
      ],
    },
    content: {
      eyebrow: "In our market analysis",
      title: "What you will find in the document.",
      description:
        "Not just a price range. A document you can reread, discuss and show to your family.",
      items: [
        {
          icon: "bar-chart",
          title: "Comparable sales",
          text: "Nearby properties sold recently, and why we keep them or set them aside.",
        },
        {
          icon: "thumbs-up",
          title: "Strengths and reservations",
          text: "What adds value to your property, and what a buyer will notice.",
        },
        {
          icon: "tag",
          title: "A listing price",
          text: "The price we recommend starting at, with the margin we expect.",
        },
        {
          icon: "calendar",
          title: "A realistic timeline",
          text: "The usual timeframes for a comparable property, with no promise of a sale date.",
        },
      ],
    },
    fees: {
      eyebrow: "Our fees",
      title: "What we charge, plainly.",
      description: "Our fees, by type of service.",
      note: "Fictional fee schedule, given as an example.",
      groups: [
        {
          title: "Selling",
          items: [
            {
              name: "Valuation and market analysis",
              detail: "Visit, comparison, written analysis",
              price: "Free",
            },
            {
              name: "Full listing service",
              detail: "Photos, listing, showings, negotiation",
              price: "from 4% tax included",
              note: "Paid by the seller",
            },
          ],
        },
        {
          title: "Buying",
          items: [
            {
              name: "Search and selection",
              detail: "Interview, properties visited by the team",
              price: "Free",
            },
            {
              name: "Purchase support",
              detail: "Showings, negotiation, follow-up through closing",
              price: "from 3.5% tax included",
              note: "Indicative schedule",
            },
          ],
        },
        {
          title: "Other requests",
          items: [
            {
              name: "Detailed market analysis",
              detail: "Family estate split, wealth planning project",
              price: "from €150",
              note: "By quote",
            },
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What we are asked before getting started.",
      items: [
        {
          question: "Does the estimate commit you to selling?",
          answer:
            "No. You receive our analysis, you take the time to think, and you decide afterward, or not.",
        },
        {
          question: "Why a visit rather than an online estimator?",
          answer:
            "An estimator sees neither the light, nor the condition of the finishes, nor the neighbors. Yet those details are what make the price vary.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Allow forty-five minutes for the visit, then our written analysis within the following 48 hours.",
        },
        {
          question: "Do you need to prepare any documents?",
          answer:
            "Not for the visit. If you decide to sell, we will give you the list of documents to gather, step by step.",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Let’s talk about your project, directly with the team.",
      description:
        "Selling, buying, estimating or just asking a question: write to us, someone on the team answers, then the agent for your neighborhood takes over.",
    },
    form: {
      title: "Write to us",
      intro: "We usually answer the same day, otherwise the next morning.",
      submit: "Send the message",
      fields: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        project: "Your project",
        projectPlaceholder: "Choose",
        projects: [
          { value: "vendre", label: "Sell a property" },
          { value: "acheter", label: "Buy a property" },
          { value: "estimer", label: "Get an estimate" },
          { value: "autre", label: "Other request" },
        ],
        district: "Your neighborhood",
        districtPlaceholder: "Choose",
        districts: [
          { value: "rives", label: "The Riverside" },
          { value: "vieille-ville", label: "Old Town" },
          { value: "coteau", label: "The Hillside" },
          { value: "jardins", label: "The Gardens" },
          { value: "indecis", label: "Not decided yet" },
        ],
        time: "Best time to reach you",
        timePlaceholder: "Choose",
        times: [
          { value: "matin", label: "Morning" },
          { value: "midi", label: "Lunchtime" },
          { value: "soir", label: "End of the day" },
        ],
        message: "Your message",
      },
    },
    details: {
      title: "Contact details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      access: "Meetings at your home, or at the agency by appointment.",
      image: {
        src: IMG.salon,
        alt: "A bright, uncluttered living room with a wooden sideboard, a light gray armchair, plants and a herringbone floor.",
      },
    },
    next: {
      eyebrow: "What next",
      title: "What happens after your message.",
      steps: [
        {
          icon: "mail-check",
          title: "We read and take notes",
          text: "Your message is read by the team, then handed to the lead agent for your neighborhood.",
        },
        {
          icon: "phone-call",
          title: "We call you back",
          text: "At the time you indicated, for a first conversation of ten to fifteen minutes.",
        },
        {
          icon: "calendar-check",
          title: "We set up a meeting",
          text: "At your home, at the agency or by phone, depending on your project.",
        },
      ],
    },
  },
};

export const agenceImmobiliere: TemplateDefinition<
  "agence-immobiliere",
  AgenceImmobiliereCopy
> = {
  slug: "agence-immobiliere",
  theme: {
    surface: "oklch(0.972 0.014 98)",
    raised: "oklch(0.992 0.006 98)",
    ink: "oklch(0.24 0.04 178)",
    inkMuted: "oklch(0.42 0.035 178)",
    line: "oklch(0.86 0.02 98)",
    accent: "oklch(0.5 0.13 12)",
    accentInk: "oklch(0.985 0.01 98)",
    inverse: "oklch(0.27 0.055 175)",
    inverseInk: "oklch(0.96 0.02 98)",
    radius: "0.375rem",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 500,
    shadowSm: "0 1px 0 color-mix(in oklch, var(--tpl-ink) 8%, transparent)",
    shadowLg:
      "0 22px 40px -26px color-mix(in oklch, var(--tpl-ink) 34%, transparent)",
  },
  paths: {
    home: "/agence-immobiliere",
    biens: "/agence-immobiliere/biens",
    bien: "/agence-immobiliere/biens/appartement-vue-lac",
    services: "/agence-immobiliere/services",
    agents: "/agence-immobiliere/agents",
    quartiers: "/agence-immobiliere/quartiers",
    estimation: "/agence-immobiliere/estimation",
    contact: "/agence-immobiliere/contact",
  },
  copy: { fr, en },
};
