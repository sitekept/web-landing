import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « plombier-chauffagiste » (artisan plombier et chauffagiste fictif
 * « Votre entreprise »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/plombier-chauffagiste/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `PlombierChauffagisteCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais ; les vues la résolvent avec la table
 * `Record<PlombierChauffagisteIconKey, LucideIcon>` de
 * `src/templates/plombier-chauffagiste/parts.tsx`.
 *
 * Les images (URL Unsplash génériques) sont des données : même URL dans les
 * deux langues, seul le `alt` se traduit.
 *
 * Sécurité : une odeur de gaz relève du numéro d'urgence du distributeur,
 * inscrit sur le compteur. Aucun numéro réel, aucune promesse d'intervention
 * gaz, aucune qualification revendiquée.
 */

const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  leak: photo("1596394723269-b2cbca4e6313"),
  panelRadiator: photo("1518276779712-dfdcb9daa7a1"),
  thermostat: photo("1774876549246-dfa8eae5d9f5"),
  roughIn: photo("1707409464203-df2f21c32b9c"),
  pipes: photo("1760571327612-8ab776dcd462"),
  castIron: photo("1599028274511-e02a767949a3"),
  finnedRadiator: photo("1669725341213-7379ff6c90d5"),
  faucet: photo("1521207418485-99c705420785"),
  sink: photo("1661045327753-3f2a047d00a4"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Plombier et chauffagiste",
  },
  phone: {
    href: "tel:+33199000014",
    label: "01 99 00 00 14",
  },
  nav: {
    home: "Accueil",
    depannages: "Dépannages",
    tarifs: "Tarifs",
    contact: "Contact",
  },
  cta: {
    call: "Appeler",
    quote: "Demander un devis",
    depannages: "Voir les dépannages",
    tarifs: "Voir les tarifs",
    contact: "Nous contacter",
  },
  mobile: {
    label: "Contacter l’entreprise",
  },
  footer: {
    text: "Artisan plombier et chauffagiste pour les particuliers : fuites, débouchage, chauffe-eau, chaudière, brûleur et radiateurs. Le prix est annoncé avant l’intervention, le devis est signé avant les travaux.",
    contactTitle: "Coordonnées",
    hoursTitle: "Horaires",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    email: "contact@votre-entreprise.example",
    qualification: "Qualification chauffage : à compléter",
    hours: "Lun-Ven 8 h‑19 h, sam 8 h‑13 h",
    onCall:
      "Astreinte tous les jours jusqu’à 22 h, tarif annoncé avant le départ",
    zone: "Intervention dans un rayon de 20 km autour de votre ville",
    note: "Site de démonstration : entreprise, prix et coordonnées fictifs.",
  },
  meta: {
    home: {
      title: "Votre entreprise - Plombier chauffagiste à prix annoncés",
      description:
        "Plombier chauffagiste local : fuites, chaudière, radiateurs. Prix annoncé au téléphone, devis signé avant travaux, horaires d’astreinte clairs.",
    },
    depannages: {
      title: "Dépannages - Votre entreprise",
      description:
        "Les dépannages de plomberie et de chauffage : fuite, débouchage, chauffe-eau, chaudière, brûleur, radiateurs. Ce qui est fait et à partir de quel prix.",
    },
    tarifs: {
      title: "Tarifs - Votre entreprise",
      description:
        "Tarifs de plomberie et de chauffage : prix de départ, ce qui est inclus, majorations du soir, du samedi après-midi et du dimanche annoncées avant le départ.",
    },
    contact: {
      title: "Contact - Votre entreprise",
      description:
        "Appelez ou écrivez-nous : coordonnées, horaires, astreinte jusqu’à 22 h et zone d’intervention dans un rayon de 20 km autour de votre ville.",
    },
  },
  home: {
    hero: {
      eyebrow: "Plombier et chauffagiste · particuliers",
      title:
        "Une fuite ou une chaudière en panne : le prix, avant que l’on vienne.",
      description:
        "Un artisan qui fait la plomberie et le chauffage. Vous décrivez le problème, nous annonçons le prix au téléphone, le devis est signé sur place avant le premier geste.",
      callNote:
        "Lun-Ven 8 h‑19 h, sam 8 h‑13 h, astreinte tous les jours jusqu’à 22 h",
      volets: [
        {
          icon: "droplets",
          label: "Eau",
          title: "Plomberie",
          text: "Fuite, débouchage, WC, robinet, chauffe-eau.",
          from: "Dès 89 €",
          link: "Voir la plomberie",
          anchor: "plomberie",
          image: {
            src: IMG.leak,
            alt: "Eau qui jaillit d’un raccord en laiton",
          },
        },
        {
          icon: "flame",
          label: "Chaleur",
          title: "Chauffage",
          text: "Chaudière, brûleur, radiateurs, purge.",
          from: "Dès 89 €",
          link: "Voir le chauffage",
          anchor: "chauffage",
          image: {
            src: IMG.panelRadiator,
            alt: "Radiateur blanc à panneau sur un mur de béton, avec sa vanne thermostatique",
          },
        },
      ],
    },
    promises: {
      label: "Nos engagements",
      items: [
        {
          icon: "receipt",
          title: "Prix annoncé au téléphone",
          text: "Vous connaissez le tarif de départ, la majoration éventuelle et le déplacement avant que nous partions.",
        },
        {
          icon: "file-signature",
          title: "Devis signé avant les travaux",
          text: "Rien n’est commencé sans un devis écrit, daté et signé par vous. Si le montant change, nous vous le disons d’abord.",
        },
        {
          icon: "clock",
          title: "Horaires et astreinte affichés",
          text: "Semaine, samedi matin et astreinte tous les jours jusqu’à 22 h : tout est écrit sur le site, avec la majoration qui s’applique.",
        },
      ],
    },
    offer: {
      eyebrow: "Deux métiers, un interlocuteur",
      title: "Les dépannages les plus demandés, avec leur prix de départ.",
      description:
        "Un seul artisan pour l’eau et pour le chauffage : pas de sous-traitance, pas de standard qui vous renvoie vers quelqu’un d’autre.",
      groups: [
        {
          icon: "droplets",
          title: "Plomberie",
          rows: [
            { name: "Recherche et réparation de fuite", price: "dès 119 €" },
            { name: "Débouchage évier, lavabo, douche", price: "dès 99 €" },
            { name: "Débouchage de WC", price: "dès 109 €" },
            { name: "Remplacement d’un chauffe-eau", price: "dès 290 €" },
          ],
        },
        {
          icon: "flame",
          title: "Chauffage",
          rows: [
            { name: "Diagnostic de panne de chaudière", price: "dès 99 €" },
            { name: "Remise en route de chaudière", price: "dès 129 €" },
            { name: "Purge des radiateurs", price: "dès 89 €" },
            { name: "Équilibrage du circuit de chauffage", price: "dès 159 €" },
          ],
        },
      ],
      note: "Prix TTC, main-d’œuvre comprise, pièces en sus. Déplacement dans la zone : 39 €.",
    },
    steps: {
      eyebrow: "Comment ça se passe",
      title: "Un dépannage, en quatre étapes.",
      description:
        "Le même déroulé pour une fuite et pour une panne de chauffage : vous savez toujours où vous en êtes et ce que vous allez payer.",
      items: [
        {
          title: "Vous appelez",
          text: "Quelques questions : le problème, l’adresse, l’étage, un code erreur à la chaudière. Une photo par message aide, sans être obligatoire.",
        },
        {
          title: "Nous annonçons le prix",
          text: "Tarif de départ, déplacement, majoration éventuelle selon l’heure : le total estimé vous est donné avant le départ.",
        },
        {
          title: "Le devis est signé sur place",
          text: "Après diagnostic, nous chiffrons précisément. Vous signez, ou vous refusez : seul le déplacement est dû (plus le diagnostic, pour une chaudière).",
        },
        {
          title: "Nous intervenons, vous réglez",
          text: "Intervention, nettoyage, facture conforme au devis. Paiement à la fin, par carte, chèque ou espèces.",
        },
      ],
      image: {
        src: IMG.thermostat,
        alt: "Doigt posé sur le bouton d’un thermostat mural noir",
      },
    },
    reviews: {
      eyebrow: "Avis clients",
      title: "Des factures conformes au prix annoncé.",
      description:
        "Ce que disent les clients que nous avons dépannés, un soir de semaine comme un samedi matin.",
      label: "Avis de clients",
      items: [
        {
          quote:
            "Fuite sous l’évier un jeudi soir. Prix donné au téléphone, facture identique en fin d’intervention.",
          name: "Claire M.",
          detail: "Recherche de fuite",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Chaudière arrêtée un soir de janvier. Cause expliquée au téléphone, remise en route pour le tarif annoncé.",
          name: "Thomas B.",
          detail: "Chaudière",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Le devis a été signé avant de toucher au brûleur, avec le prix de la pièce détaillé. Rassurant.",
          name: "Sofia R.",
          detail: "Brûleur",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Chauffe-eau remplacé dans la matinée, ancien ballon évacué. Aucune ligne surprise sur la facture.",
          name: "Nadia K.",
          detail: "Chauffe-eau",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Appelé un dimanche : la majoration m’a été annoncée dès l’appel. Dépannage propre et rapide.",
          name: "Julien P.",
          detail: "Débouchage",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
      ],
    },
    refuse: {
      eyebrow: "Dépannage sans mauvaise surprise",
      title:
        "Ce que nous refusons de faire, et ce que nous faisons à la place.",
      description:
        "Un dépannage doit rester lisible du premier appel à la facture. Voici nos règles, écrites noir sur blanc.",
      refuseLabel: "Ce que nous refusons",
      insteadLabel: "Ce que nous faisons",
      items: [
        {
          refuse: "Un prix d’appel très bas qui explose une fois sur place.",
          instead: "Un tarif de départ réaliste, annoncé avec le déplacement.",
        },
        {
          refuse: "Un devis rédigé après avoir commencé les travaux.",
          instead: "Un devis signé avant le premier geste, ou pas de travaux.",
        },
        {
          refuse: "Un « 7 j sur 7, à toute heure » sans dire ce que ça coûte.",
          instead:
            "Des horaires précis et la majoration du soir écrite à l’avance.",
        },
        {
          refuse:
            "Une chaudière relancée sans chercher pourquoi elle s’est arrêtée.",
          instead:
            "Un diagnostic d’abord, la cause expliquée, puis la remise en route.",
        },
      ],
    },
    closing: {
      eyebrow: "Contact",
      title: "Décrivez-nous le problème, nous annonçons le prix.",
      description:
        "Appelez aux heures d’ouverture ou laissez votre demande : nous vous rappelons avec le tarif de départ.",
    },
  },
  depannages: {
    hero: {
      eyebrow: "Dépannages · plomberie et chauffage",
      title: "Ce que nous réparons, pour combien, et dans quel ordre.",
      description:
        "Deux volets, une même méthode : diagnostic, prix annoncé, devis signé, puis intervention. Les prix sont des tarifs de départ, main-d’œuvre comprise.",
      jumps: [
        { label: "Plomberie", anchor: "plomberie" },
        { label: "Chauffage", anchor: "chauffage" },
      ],
    },
    plumbing: {
      id: "plomberie",
      eyebrow: "Volet 1 · Plomberie",
      title: "L’eau qui fuit, qui bouche ou qui ne chauffe plus.",
      description:
        "Fuites, canalisations, sanitaires et chauffe-eau. La chaudière et les radiateurs sont dans le volet suivant.",
      image: {
        src: IMG.roughIn,
        alt: "Vannes et raccords en laiton alignés sur un plan de travail blanc",
      },
      secondImage: {
        src: IMG.pipes,
        alt: "Main tenant un raccord en laiton monté sur un tube blanc",
      },
      items: [
        {
          icon: "droplets",
          title: "Recherche et réparation de fuite",
          text: "Localisation de la fuite, réparation du tronçon ou du raccord, remise en eau et contrôle.",
          from: "dès 119 €",
        },
        {
          icon: "waves",
          title: "Débouchage évier, lavabo, douche",
          text: "Dépose du siphon, débouchage mécanique, essai d’écoulement.",
          from: "dès 99 €",
        },
        {
          icon: "toilet",
          title: "Débouchage de WC",
          text: "Débouchage à la pompe ou au furet, contrôle de la chasse et du joint.",
          from: "dès 109 €",
        },
        {
          icon: "wrench",
          title: "Robinet, mitigeur, siphon",
          text: "Remplacement à l’identique ou par le modèle de votre choix, fourniture en sus.",
          from: "dès 89 €",
        },
        {
          icon: "bath",
          title: "Chauffe-eau électrique",
          text: "Dépose de l’ancien ballon, pose du nouveau, groupe de sécurité et mise en service.",
          from: "dès 290 €",
        },
      ],
    },
    heating: {
      id: "chauffage",
      eyebrow: "Volet 2 · Chauffage",
      title: "Le chauffage qui s’arrête, qui chauffe mal ou qui fait du bruit.",
      description:
        "Chaudière, brûleur, radiateurs et circuit de chauffage. Nous cherchons la cause avant de relancer, et nous le disons avant de changer une pièce.",
      image: {
        src: IMG.castIron,
        alt: "Radiateur en fonte blanc vu de près, devant un carrelage et une fenêtre en bois",
      },
      secondImage: {
        src: IMG.finnedRadiator,
        alt: "Radiateur blanc à lamelles sous une fenêtre, entre deux rideaux sombres",
      },
      items: [
        {
          icon: "flame",
          title: "Diagnostic de panne de chaudière",
          text: "Lecture du code erreur, contrôle de la pression, de l’allumage et des sécurités.",
          from: "dès 99 €",
        },
        {
          icon: "gauge",
          title: "Remise en route de chaudière",
          text: "Relance après un arrêt, remise en pression du circuit, essais et contrôle du fonctionnement.",
          from: "dès 129 €",
        },
        {
          icon: "cog",
          title: "Entretien correctif du brûleur",
          text: "Nettoyage, réglage et remplacement d’une pièce d’usure du brûleur, pièce en sus.",
          from: "dès 149 €",
        },
        {
          icon: "heater",
          title: "Purge des radiateurs",
          text: "Purge, remise en pression du circuit et contrôle de chaque radiateur.",
          from: "dès 89 €",
        },
        {
          icon: "thermometer",
          title: "Équilibrage du circuit de chauffage",
          text: "Réglage des radiateurs pour que toutes les pièces chauffent de façon homogène.",
          from: "dès 159 €",
        },
      ],
    },
    fromLabel: "Tarif de départ",
    reflexes: {
      eyebrow: "Avant que nous arrivions",
      title: "Les bons réflexes en attendant.",
      description:
        "Quelques gestes simples limitent les dégâts et évitent de payer plus que nécessaire.",
      groups: [
        {
          icon: "droplets",
          title: "Fuite d’eau",
          items: [
            "Fermez l’arrivée d’eau au compteur ou à la vanne de l’appartement.",
            "Coupez le courant si l’eau touche une prise ou le tableau.",
            "Épongez, protégez le sol et prenez une photo pour la déclaration d’assurance.",
          ],
        },
        {
          icon: "flame",
          title: "Chaudière en panne",
          items: [
            "Notez le code erreur affiché et prenez l’écran en photo.",
            "Lisez la pression sur le manomètre et donnez-la-nous : ne remplissez pas le circuit au hasard.",
            "Si la chaudière siffle, chauffe trop ou sent le brûlé, coupez-la et ne la relancez pas.",
          ],
        },
      ],
      gas: {
        icon: "triangle-alert",
        title: "Odeur de gaz : appelez d’abord le distributeur",
        text: "Nous ne dépannons pas le réseau de gaz. En cas d’odeur de gaz, l’urgence relève du distributeur.",
        steps: [
          "Ne touchez à aucun interrupteur et n’allumez aucune flamme.",
          "Ouvrez les fenêtres, fermez le robinet de gaz si vous le pouvez sans risque.",
          "Sortez du logement et prévenez vos voisins.",
          "Depuis l’extérieur, appelez le numéro d’urgence gaz du distributeur, inscrit sur votre compteur.",
        ],
      },
    },
    urgency: {
      eyebrow: "Le soir et le week-end",
      title: "Urgence ce soir, ou demain matin ?",
      description:
        "Le soir, nous intervenons avec une majoration. Voici comment savoir si elle s’impose.",
      nowLabel: "Ça ne peut pas attendre",
      laterLabel: "Ça peut attendre le matin",
      now: [
        "Une fuite qui continue après la fermeture de l’arrivée d’eau.",
        "De l’eau au contact d’une prise ou du tableau électrique.",
        "Une chaudière qui siffle, chauffe trop ou sent le brûlé : coupez-la d’abord.",
      ],
      later: [
        "Un radiateur froid dans une seule pièce.",
        "Un robinet qui goutte ou un siphon qui suinte, avec une bassine pour attendre.",
        "Une chaudière arrêtée dans un logement encore tempéré : nous venons le lendemain matin, sans majoration.",
      ],
    },
    limits: {
      eyebrow: "Ce que nous ne faisons pas",
      title: "Nous disons non plutôt que de bricoler.",
      description:
        "Hors de notre métier, mieux vaut vous orienter vers un confrère que mal faire.",
      items: [
        {
          icon: "ban",
          title: "Réseau et compteur de gaz",
          text: "Canalisation et compteur de gaz relèvent du distributeur : nous n’y touchons pas.",
        },
        {
          icon: "ban",
          title: "Pompes à chaleur et chaudières neuves",
          text: "Ces projets demandent une étude préalable que nous ne faisons pas en dépannage.",
        },
        {
          icon: "ban",
          title: "Travaux sans devis signé",
          text: "Même pour une urgence : sans signature, nous ne commençons pas.",
        },
      ],
    },
    closing: {
      eyebrow: "Contact",
      title: "Un doute sur le prix ? Posez-nous la question avant.",
      description:
        "Appelez ou écrivez avec une photo : nous vous répondons avec un tarif de départ.",
    },
  },
  tarifs: {
    hero: {
      eyebrow: "Tarifs · prix de départ",
      title: "Ce que vous payez, écrit avant que nous venions.",
      description:
        "Des tarifs de départ clairs, le détail de ce qui est inclus et les majorations du soir, du samedi après-midi et du dimanche. Le total exact est fixé par un devis signé.",
      ticket: {
        eyebrow: "Avant toute intervention",
        rows: [
          { label: "Déplacement", value: "39 €" },
          { label: "Devis", value: "Gratuit" },
          { label: "Paiement", value: "À la fin" },
        ],
        note: "Déplacement dans un rayon de 20 km. Si vous refusez le devis, seul le déplacement est dû (plus le diagnostic, pour une chaudière).",
      },
    },
    list: {
      eyebrow: "Tarifs de départ",
      title: "Plomberie et chauffage : le prix de chaque dépannage.",
      description:
        "Prix TTC, main-d’œuvre comprise, fournitures et pièces en sus sauf mention contraire.",
      groups: [
        {
          title: "Plomberie",
          items: [
            {
              name: "Recherche et réparation de fuite",
              detail: "Localisation, réparation et remise en eau",
              price: "dès 119 €",
            },
            {
              name: "Débouchage évier, lavabo, douche",
              detail: "Dépose du siphon et débouchage mécanique",
              price: "dès 99 €",
            },
            {
              name: "Débouchage de WC",
              detail: "Pompe ou furet, contrôle de la chasse",
              price: "dès 109 €",
            },
            {
              name: "Robinet, mitigeur ou siphon",
              detail: "Pose seule, fourniture en sus",
              price: "dès 89 €",
            },
            {
              name: "Chauffe-eau électrique",
              detail: "Dépose, pose et mise en service, ballon en sus",
              price: "dès 290 €",
              note: "Devis",
            },
          ],
        },
        {
          title: "Chauffage",
          items: [
            {
              name: "Diagnostic de panne de chaudière",
              detail: "Code erreur, pression, allumage et sécurités",
              price: "dès 99 €",
            },
            {
              name: "Remise en route de chaudière",
              detail: "Relance, remise en pression et essais",
              price: "dès 129 €",
            },
            {
              name: "Entretien correctif du brûleur",
              detail: "Nettoyage et réglage, pièce en sus",
              price: "dès 149 €",
              note: "Devis",
            },
            {
              name: "Purge des radiateurs",
              detail: "Purge et contrôle de chaque radiateur",
              price: "dès 89 €",
            },
            {
              name: "Équilibrage du circuit de chauffage",
              detail: "Visite préalable et réglage des radiateurs",
              price: "dès 159 €",
              note: "Visite",
            },
          ],
        },
      ],
      footnote:
        "Les prix de départ valent pour une intervention simple, aux horaires d’ouverture. Un cas particulier est chiffré dans le devis, avant tout travail.",
    },
    included: {
      eyebrow: "Ce qui est inclus",
      title: "Dans chaque intervention, sans supplément caché.",
      description:
        "Ce que couvre le prix annoncé, et ce qui reste à part, nommé noir sur blanc.",
      items: [
        {
          icon: "scan-search",
          title: "Le diagnostic sur place",
          text: "Nous cherchons la cause avant de proposer une réparation. Seul le diagnostic de chaudière a son tarif, déduit si vous nous confiez la réparation.",
        },
        {
          icon: "hand-coins",
          title: "La main-d’œuvre",
          text: "Le temps d’intervention est compris dans le tarif de départ.",
        },
        {
          icon: "list-checks",
          title: "Les essais et la remise en service",
          text: "Mise en eau, essais d’écoulement, relance de la chaudière, contrôle des radiateurs.",
        },
        {
          icon: "receipt",
          title: "Une facture conforme au devis",
          text: "Chaque ligne du devis se retrouve sur la facture, avec le détail des pièces.",
        },
      ],
      image: {
        src: IMG.faucet,
        alt: "Jet d’eau qui coule d’un robinet de cuisine à col de cygne, devant un fond sombre et flou",
      },
      aside:
        "Restent à part : les pièces et appareils (robinet, ballon, pièce de brûleur, vanne de radiateur), indiqués avec leur prix sur le devis.",
    },
    surcharges: {
      eyebrow: "Majorations",
      title:
        "Le soir, le samedi après‑midi et le dimanche : annoncé avant le départ.",
      description:
        "Nous intervenons tous les jours jusqu’à 22 h. La majoration vous est donnée au téléphone, avec le total estimé.",
      rows: [
        { label: "Soirée en semaine", hours: "19 h‑22 h", value: "+ 30 %" },
        { label: "Samedi", hours: "13 h‑22 h", value: "+ 30 %" },
        {
          label: "Dimanche et jours fériés",
          hours: "8 h‑22 h",
          value: "+ 50 %",
        },
      ],
      note: "Après 22 h, nous n’intervenons pas : nous vous proposons le lendemain matin. En attendant, fermez l’arrivée d’eau si une fuite coule. Odeur de gaz : appelez tout de suite le numéro d’urgence du distributeur, inscrit sur votre compteur.",
    },
    quote: {
      eyebrow: "Le devis",
      title: "Signé avant les travaux, sinon nous ne commençons pas.",
      description:
        "Un devis écrit, daté et chiffré ligne par ligne : c’est lui qui fait foi, pas le tarif de départ.",
      steps: [
        {
          title: "Diagnostic",
          text: "Nous cherchons la cause et vous expliquons ce qu’il faut faire.",
        },
        {
          title: "Devis écrit",
          text: "Main-d’œuvre, pièces, déplacement et majoration éventuelle, ligne par ligne.",
        },
        {
          title: "Votre décision",
          text: "Vous signez et nous commençons, ou vous refusez : seul le déplacement est dû (plus le diagnostic, pour une chaudière).",
        },
      ],
      image: {
        src: IMG.sink,
        alt: "Évier de cuisine en inox avec un mitigeur chromé",
      },
    },
    closing: {
      eyebrow: "Contact",
      title: "Besoin d’un prix pour votre cas précis ?",
      description:
        "Décrivez le problème par téléphone ou par message : nous vous donnons un tarif de départ.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact · zone et horaires",
      title: "Appelez-nous, ou écrivez : nous répondons avec un prix.",
      description:
        "Aux heures d’ouverture, nous décrochons. Le soir, le samedi après-midi et le dimanche, l’astreinte répond jusqu’à 22 h, avec la majoration annoncée.",
    },
    form: {
      title: "Votre demande",
      description:
        "Décrivez le problème, nous vous rappelons avec le tarif de départ.",
      notice:
        "Odeur de gaz : ne passez pas par ce formulaire. Sortez, puis appelez depuis l’extérieur le numéro d’urgence gaz du distributeur, inscrit sur votre compteur.",
      submit: "Envoyer ma demande",
      name: { label: "Nom" },
      phone: { label: "Téléphone" },
      email: { label: "E-mail (facultatif)" },
      city: { label: "Ville ou code postal" },
      type: {
        label: "Nature du problème",
        placeholder: "Choisir",
        options: [
          { value: "fuite", label: "Fuite d’eau" },
          { value: "debouchage", label: "Débouchage" },
          { value: "chauffe-eau", label: "Chauffe-eau" },
          { value: "chaudiere", label: "Chaudière en panne" },
          { value: "bruleur", label: "Brûleur ou entretien correctif" },
          { value: "radiateurs", label: "Radiateurs froids ou à purger" },
          { value: "autre", label: "Autre" },
        ],
      },
      urgency: {
        label: "Quand ?",
        placeholder: "Choisir",
        options: [
          { value: "now", label: "Le plus vite possible" },
          { value: "today", label: "Aujourd’hui" },
          { value: "week", label: "Cette semaine" },
        ],
      },
      message: {
        label: "Message",
        placeholder: "Dites-nous ce qui se passe, l’étage, le code erreur…",
      },
    },
    details: {
      title: "Coordonnées",
      items: [
        { icon: "phone", label: "Téléphone", value: "01 99 00 00 14" },
        {
          icon: "mail",
          label: "E-mail",
          value: "contact@votre-entreprise.example",
        },
        {
          icon: "map-pin",
          label: "Adresse",
          value: "12 rue de l’Exemple, 00000 Votre ville",
        },
      ],
    },
    hours: {
      title: "Horaires",
      items: [
        { day: "Lundi au vendredi", time: "8 h‑19 h" },
        { day: "Samedi", time: "8 h‑13 h" },
        { day: "Dimanche et jours fériés", time: "Astreinte, 8 h‑22 h" },
      ],
      note: "Astreinte tous les jours jusqu’à 22 h, hors horaires d’ouverture : majoration annoncée avant le départ. Après 22 h, nous proposons le lendemain matin.",
    },
    zone: {
      title: "Zone d’intervention",
      text: "Dans un rayon de 20 km autour de votre ville. Au-delà, nous vous le disons au téléphone et nous vous orientons si besoin.",
    },
    prep: {
      title: "Pour aller plus vite",
      items: [
        "Ce qui se passe, depuis quand, et à quel étage.",
        "Une photo du problème, si vous pouvez.",
        "Pour une chaudière : le code erreur affiché et la pression du manomètre.",
      ],
    },
  },
} as const;

export type PlombierChauffagisteCopy = WidenLiterals<typeof fr>;

export type PlombierChauffagisteIconKey =
  TemplateIconKey<PlombierChauffagisteCopy>;

const en: PlombierChauffagisteCopy = {
  brand: {
    name: "Your business",
    tagline: "Plumber and heating contractor",
  },
  phone: {
    href: "tel:+33199000014",
    label: "01 99 00 00 14",
  },
  nav: {
    home: "Home",
    depannages: "Repairs",
    tarifs: "Pricing",
    contact: "Contact",
  },
  cta: {
    call: "Call",
    quote: "Request a quote",
    depannages: "See the repairs",
    tarifs: "See the pricing",
    contact: "Contact us",
  },
  mobile: {
    label: "Contact the business",
  },
  footer: {
    text: "Plumber and heating contractor for homeowners and tenants: leaks, drain clearing, water heaters, boilers, burners and radiators. The price is stated before we come, and the quote is signed before any work.",
    contactTitle: "Contact",
    hoursTitle: "Hours",
    address: "12 Example Street, 00000 Your city",
    email: "contact@example.com",
    qualification: "Heating qualification: to be completed",
    hours: "Mon-Fri 8 am-7 pm, Sat 8 am-1 pm",
    onCall: "On call every day until 10 pm, rate stated before we leave",
    zone: "Service within 20 km (12 miles) of your city",
    note: "Demo website: fictional business, prices and contact details.",
  },
  meta: {
    home: {
      title:
        "Your business - Plumber and heating contractor, prices stated up front",
      description:
        "Local plumber and heating contractor: leaks, boilers, radiators. Price stated by phone, quote signed before any work, clear on-call hours.",
    },
    depannages: {
      title: "Repairs - Your business",
      description:
        "Plumbing and heating repairs: leaks, drain clearing, water heaters, boilers, burners, radiators. What we do and the starting price.",
    },
    tarifs: {
      title: "Pricing - Your business",
      description:
        "Plumbing and heating pricing: starting prices, what is included, and evening, Saturday afternoon and Sunday surcharges stated before we leave.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Call or write to us: contact details, hours, on-call service until 10 pm and service area within 20 km (12 miles) of your city.",
    },
  },
  home: {
    hero: {
      eyebrow: "Plumber and heating contractor · homes",
      title: "A leak or a broken boiler: the price, before we come.",
      description:
        "One tradesperson for plumbing and heating. You describe the problem, we state the price by phone, and the quote is signed on site before we start.",
      callNote:
        "Mon-Fri 8 am-7 pm, Sat 8 am-1 pm, on call every day until 10 pm",
      volets: [
        {
          icon: "droplets",
          label: "Water",
          title: "Plumbing",
          text: "Leaks, drain clearing, toilets, faucets, water heaters.",
          from: "From €89",
          link: "See plumbing",
          anchor: "plomberie",
          image: {
            src: IMG.leak,
            alt: "Water spraying from a brass fitting",
          },
        },
        {
          icon: "flame",
          label: "Heat",
          title: "Heating",
          text: "Boilers, burners, radiators, bleeding.",
          from: "From €89",
          link: "See heating",
          anchor: "chauffage",
          image: {
            src: IMG.panelRadiator,
            alt: "White panel radiator on a concrete wall, with its thermostatic valve",
          },
        },
      ],
    },
    promises: {
      label: "Our commitments",
      items: [
        {
          icon: "receipt",
          title: "Price stated by phone",
          text: "You know the starting rate, any surcharge and the service call fee before we leave.",
        },
        {
          icon: "file-signature",
          title: "Quote signed before work",
          text: "Nothing starts without a written, dated quote signed by you. If the amount changes, we tell you first.",
        },
        {
          icon: "clock",
          title: "Hours and on-call posted",
          text: "Weekdays, Saturday morning and on-call every day until 10 pm: it is all on the site, with the surcharge that applies.",
        },
      ],
    },
    offer: {
      eyebrow: "Two trades, one contact",
      title: "The most requested repairs, with their starting price.",
      description:
        "One tradesperson for the water and the heating: no subcontracting, no call center sending you to someone else.",
      groups: [
        {
          icon: "droplets",
          title: "Plumbing",
          rows: [
            { name: "Leak detection and repair", price: "from €119" },
            {
              name: "Kitchen sink, bathroom sink and shower drain clearing",
              price: "from €99",
            },
            { name: "Toilet unclogging", price: "from €109" },
            { name: "Water heater replacement", price: "from €290" },
          ],
        },
        {
          icon: "flame",
          title: "Heating",
          rows: [
            { name: "Boiler fault diagnosis", price: "from €99" },
            { name: "Boiler restart", price: "from €129" },
            { name: "Radiator bleeding", price: "from €89" },
            { name: "Heating system balancing", price: "from €159" },
          ],
        },
      ],
      note: "Prices include tax and labor, parts extra. Service call fee within the area: €39.",
    },
    steps: {
      eyebrow: "How it works",
      title: "A repair, in four steps.",
      description:
        "The same sequence for a leak and for a heating failure: you always know where you stand and what you will pay.",
      items: [
        {
          title: "You call",
          text: "A few questions: the problem, the address, the floor, any error code on the boiler. A photo by message helps, but is not required.",
        },
        {
          title: "We state the price",
          text: "Starting rate, service call fee, any surcharge for the time of day: the estimated total is given before we leave.",
        },
        {
          title: "The quote is signed on site",
          text: "After diagnosis, we give an exact price. You sign, or you decline and owe only the service call fee (plus the diagnosis, for a boiler).",
        },
        {
          title: "We repair, you pay",
          text: "Work, cleanup, and an invoice that matches the quote. Payment at the end, by card, check or cash.",
        },
      ],
      image: {
        src: IMG.thermostat,
        alt: "Finger pressing the dial of a black wall thermostat",
      },
    },
    reviews: {
      eyebrow: "Customer reviews",
      title: "Invoices that match the stated price.",
      description:
        "What customers say after a repair, on a weekday evening or a Saturday morning.",
      label: "Customer reviews",
      items: [
        {
          quote:
            "Leak under the sink on a Thursday evening. Price given by phone, same amount on the invoice.",
          name: "Claire M.",
          detail: "Leak repair",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Boiler shut down on a January evening. Cause explained over the phone, restarted for the rate I was quoted.",
          name: "Thomas B.",
          detail: "Boiler",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "The quote was signed before touching the burner, with the part price itemized. Reassuring.",
          name: "Sofia R.",
          detail: "Burner",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Water heater replaced in the morning, old tank taken away. No surprise line on the invoice.",
          name: "Nadia K.",
          detail: "Water heater",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Called on a Sunday: the surcharge was stated as soon as I called. Clean, quick repair.",
          name: "Julien P.",
          detail: "Drain clearing",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
      ],
    },
    refuse: {
      eyebrow: "Repairs without surprises",
      title: "What we refuse to do, and what we do instead.",
      description:
        "An emergency repair should stay clear from the first call to the invoice. Here are our rules, in black and white.",
      refuseLabel: "What we refuse",
      insteadLabel: "What we do",
      items: [
        {
          refuse: "A very low come-on price that explodes once on site.",
          instead:
            "A realistic starting rate, stated with the service call fee.",
        },
        {
          refuse: "A quote written after the work has started.",
          instead: "A quote signed before the first step, or no work.",
        },
        {
          refuse: "A “7 days a week, any hour” with no word on the cost.",
          instead:
            "Precise hours and the evening surcharge written in advance.",
        },
        {
          refuse: "A boiler restarted without finding out why it stopped.",
          instead: "A diagnosis first, the cause explained, then the restart.",
        },
      ],
    },
    closing: {
      eyebrow: "Contact",
      title: "Describe the problem, we state the price.",
      description:
        "Call during business hours or leave your request: we call back with the starting rate.",
    },
  },
  depannages: {
    hero: {
      eyebrow: "Repairs · plumbing and heating",
      title: "What we repair, for how much, and in what order.",
      description:
        "Two areas, one method: diagnosis, stated price, signed quote, then the work. Prices are starting rates, labor included.",
      jumps: [
        { label: "Plumbing", anchor: "plomberie" },
        { label: "Heating", anchor: "chauffage" },
      ],
    },
    plumbing: {
      id: "plomberie",
      eyebrow: "Part 1 · Plumbing",
      title: "Water that leaks, clogs or no longer heats.",
      description:
        "Leaks, drains, fixtures and water heaters. The boiler and radiators are in the next part.",
      image: {
        src: IMG.roughIn,
        alt: "Brass valves and fittings lined up on a white work surface",
      },
      secondImage: {
        src: IMG.pipes,
        alt: "Hand holding a brass fitting mounted on a white tube",
      },
      items: [
        {
          icon: "droplets",
          title: "Leak detection and repair",
          text: "Locating the leak, repairing the section or fitting, turning the water back on and checking.",
          from: "from €119",
        },
        {
          icon: "waves",
          title: "Kitchen sink, bathroom sink and shower drain clearing",
          text: "Trap removal, mechanical clearing, drainage test.",
          from: "from €99",
        },
        {
          icon: "toilet",
          title: "Toilet unclogging",
          text: "Plunger or snake clearing, check of the flush and the seal.",
          from: "from €109",
        },
        {
          icon: "wrench",
          title: "Faucet or trap",
          text: "Replaced like for like or with the model you choose, fixture extra.",
          from: "from €89",
        },
        {
          icon: "bath",
          title: "Electric water heater",
          text: "Old tank removed, new one installed, safety valve and startup.",
          from: "from €290",
        },
      ],
    },
    heating: {
      id: "chauffage",
      eyebrow: "Part 2 · Heating",
      title: "Heating that stops, runs cold or makes noise.",
      description:
        "Boiler, burner, radiators and heating loop. We look for the cause before restarting, and we tell you before replacing a part.",
      image: {
        src: IMG.castIron,
        alt: "Close-up of a white cast-iron radiator in front of tiles and a wooden window",
      },
      secondImage: {
        src: IMG.finnedRadiator,
        alt: "White finned radiator under a window, between dark curtains",
      },
      items: [
        {
          icon: "flame",
          title: "Boiler fault diagnosis",
          text: "Reading the error code, checking the pressure, the ignition and the safety devices.",
          from: "from €99",
        },
        {
          icon: "gauge",
          title: "Boiler restart",
          text: "Restart after a shutdown, system repressurized, tests and operating check.",
          from: "from €129",
        },
        {
          icon: "cog",
          title: "Burner corrective maintenance",
          text: "Cleaning, adjustment and replacement of a worn burner part, part extra.",
          from: "from €149",
        },
        {
          icon: "heater",
          title: "Radiator bleeding",
          text: "Bleeding, system repressurized and a check of every radiator.",
          from: "from €89",
        },
        {
          icon: "thermometer",
          title: "Heating system balancing",
          text: "Radiators adjusted so that every room heats evenly.",
          from: "from €159",
        },
      ],
    },
    fromLabel: "Starting rate",
    reflexes: {
      eyebrow: "Before we arrive",
      title: "What to do in the meantime.",
      description:
        "A few simple steps limit the damage and keep you from paying more than necessary.",
      groups: [
        {
          icon: "droplets",
          title: "Water leak",
          items: [
            "Shut off the water at the meter or at the apartment valve.",
            "Cut the power if water reaches an outlet or the panel.",
            "Mop up, protect the floor and take a photo for your insurance claim.",
          ],
        },
        {
          icon: "flame",
          title: "Boiler down",
          items: [
            "Write down the error code and take a photo of the display.",
            "Read the pressure on the gauge and tell us: do not refill the system at random.",
            "If the boiler whistles, overheats or smells burnt, shut it off and do not restart it.",
          ],
        },
      ],
      gas: {
        icon: "triangle-alert",
        title: "Gas smell: call the gas utility first",
        text: "We do not repair gas lines. If you smell gas, the emergency belongs to the gas utility.",
        steps: [
          "Do not touch any switch and do not light any flame.",
          "Open the windows, and shut the gas valve if you can do so safely.",
          "Leave the home and warn your neighbors.",
          "From outside, call the gas utility’s emergency number, printed on your meter.",
        ],
      },
    },
    urgency: {
      eyebrow: "Evenings and weekends",
      title: "An emergency tonight, or tomorrow morning?",
      description:
        "In the evening we work with a surcharge. Here is how to tell whether it is worth it.",
      nowLabel: "It cannot wait",
      laterLabel: "It can wait until morning",
      now: [
        "A leak that keeps running after the water supply is shut off.",
        "Water reaching an outlet or the electrical panel.",
        "A boiler that whistles, overheats or smells burnt: shut it off first.",
      ],
      later: [
        "A radiator that stays cold in a single room.",
        "A dripping faucet or a seeping trap, with a bucket to hold on.",
        "A boiler that has shut down in a home that is still mild: we come the next morning, with no surcharge.",
      ],
    },
    limits: {
      eyebrow: "What we do not do",
      title: "We say no rather than improvise.",
      description:
        "Outside our trade, it is better to refer you to a colleague than to do it badly.",
      items: [
        {
          icon: "ban",
          title: "Gas lines and meters",
          text: "Gas pipes and meters belong to the gas utility: we do not touch them.",
        },
        {
          icon: "ban",
          title: "Heat pumps and new boilers",
          text: "These projects need a prior study that we do not do as part of a repair.",
        },
        {
          icon: "ban",
          title: "Work without a signed quote",
          text: "Even in an emergency: without a signature, we do not start.",
        },
      ],
    },
    closing: {
      eyebrow: "Contact",
      title: "Unsure about the price? Ask us first.",
      description: "Call or write with a photo: we reply with a starting rate.",
    },
  },
  tarifs: {
    hero: {
      eyebrow: "Pricing · starting rates",
      title: "What you pay, written down before we come.",
      description:
        "Clear starting rates, the detail of what is included, and the evening, Saturday afternoon and Sunday surcharges. The exact total is set by a signed quote.",
      ticket: {
        eyebrow: "Before any work",
        rows: [
          { label: "Service call", value: "€39" },
          { label: "Quote", value: "Free" },
          { label: "Payment", value: "At the end" },
        ],
        note: "Service calls within 20 km (12 miles). If you decline the quote, you owe only the service call fee (plus the diagnosis, for a boiler).",
      },
    },
    list: {
      eyebrow: "Starting rates",
      title: "Plumbing and heating: the price of each repair.",
      description:
        "Prices include tax and labor, supplies and parts extra unless stated otherwise.",
      groups: [
        {
          title: "Plumbing",
          items: [
            {
              name: "Leak detection and repair",
              detail: "Locating, repairing and restoring water",
              price: "from €119",
            },
            {
              name: "Kitchen sink, bathroom sink and shower drain clearing",
              detail: "Trap removal and mechanical clearing",
              price: "from €99",
            },
            {
              name: "Toilet unclogging",
              detail: "Plunger or snake, flush check",
              price: "from €109",
            },
            {
              name: "Faucet or trap",
              detail: "Installation only, fixture extra",
              price: "from €89",
            },
            {
              name: "Electric water heater",
              detail: "Removal, installation and startup, tank extra",
              price: "from €290",
              note: "Quote",
            },
          ],
        },
        {
          title: "Heating",
          items: [
            {
              name: "Boiler fault diagnosis",
              detail: "Error code, pressure, ignition and safety devices",
              price: "from €99",
            },
            {
              name: "Boiler restart",
              detail: "Restart, repressurizing and tests",
              price: "from €129",
            },
            {
              name: "Burner corrective maintenance",
              detail: "Cleaning and adjustment, part extra",
              price: "from €149",
              note: "Quote",
            },
            {
              name: "Radiator bleeding",
              detail: "Bleeding and a check of each radiator",
              price: "from €89",
            },
            {
              name: "Heating system balancing",
              detail: "Prior visit and radiator adjustment",
              price: "from €159",
              note: "Visit",
            },
          ],
        },
      ],
      footnote:
        "Starting rates apply to a simple job during business hours. A special case is priced in the quote, before any work.",
    },
    included: {
      eyebrow: "What is included",
      title: "In every repair, with no hidden extras.",
      description:
        "What the stated price covers, and what stays separate, named in black and white.",
      items: [
        {
          icon: "scan-search",
          title: "On-site diagnosis",
          text: "We look for the cause before suggesting a repair. Only the boiler diagnosis has its own rate, deducted if you have us do the repair.",
        },
        {
          icon: "hand-coins",
          title: "Labor",
          text: "Working time is included in the starting rate.",
        },
        {
          icon: "list-checks",
          title: "Tests and startup",
          text: "Water back on, drainage tests, boiler restart, radiator check.",
        },
        {
          icon: "receipt",
          title: "An invoice that matches the quote",
          text: "Every line of the quote appears on the invoice, with the parts itemized.",
        },
      ],
      image: {
        src: IMG.faucet,
        alt: "Water running from a gooseneck kitchen faucet, against a dark, blurred background",
      },
      aside:
        "Kept separate: parts and appliances (faucet, tank, burner part, radiator valve), shown with their price on the quote.",
    },
    surcharges: {
      eyebrow: "Surcharges",
      title:
        "Evenings, Saturday afternoons and Sundays: stated before we leave.",
      description:
        "We work every day until 10 pm. The surcharge is given by phone, with the estimated total.",
      rows: [
        { label: "Weekday evening", hours: "7 pm-10 pm", value: "+ 30%" },
        { label: "Saturday", hours: "1 pm-10 pm", value: "+ 30%" },
        {
          label: "Sundays and holidays",
          hours: "8 am-10 pm",
          value: "+ 50%",
        },
      ],
      note: "After 10 pm we do not go out: we offer the next morning. Meanwhile, shut off the water supply if a leak is running. Gas smell: call the gas utility’s emergency number, printed on your meter, right away.",
    },
    quote: {
      eyebrow: "The quote",
      title: "Signed before the work, or we do not start.",
      description:
        "A written, dated quote priced line by line: it is what counts, not the starting rate.",
      steps: [
        {
          title: "Diagnosis",
          text: "We look for the cause and explain what needs to be done.",
        },
        {
          title: "Written quote",
          text: "Labor, parts, service call fee and any surcharge, line by line.",
        },
        {
          title: "Your decision",
          text: "You sign and we start, or you decline and owe only the service call fee (plus the diagnosis, for a boiler).",
        },
      ],
      image: {
        src: IMG.sink,
        alt: "Stainless steel kitchen sink with a chrome faucet",
      },
    },
    closing: {
      eyebrow: "Contact",
      title: "Need a price for your exact case?",
      description:
        "Describe the problem by phone or message: we give you a starting rate.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact · area and hours",
      title: "Call us, or write: we reply with a price.",
      description:
        "During business hours, we pick up. In the evening, on Saturday afternoons and on Sundays, the on-call service answers until 10 pm, with the surcharge stated.",
    },
    form: {
      title: "Your request",
      description:
        "Describe the problem, we call you back with the starting rate.",
      notice:
        "Gas smell: do not use this form. Get out, then call the gas utility’s emergency number from outside, printed on your meter.",
      submit: "Send my request",
      name: { label: "Name" },
      phone: { label: "Phone" },
      email: { label: "Email (optional)" },
      city: { label: "City or postal code" },
      type: {
        label: "Type of problem",
        placeholder: "Choose",
        options: [
          { value: "fuite", label: "Water leak" },
          { value: "debouchage", label: "Drain clearing" },
          { value: "chauffe-eau", label: "Water heater" },
          { value: "chaudiere", label: "Boiler down" },
          { value: "bruleur", label: "Burner or corrective maintenance" },
          { value: "radiateurs", label: "Cold radiators or bleeding" },
          { value: "autre", label: "Other" },
        ],
      },
      urgency: {
        label: "When?",
        placeholder: "Choose",
        options: [
          { value: "now", label: "As soon as possible" },
          { value: "today", label: "Today" },
          { value: "week", label: "This week" },
        ],
      },
      message: {
        label: "Message",
        placeholder: "Tell us what is happening, the floor, the error code…",
      },
    },
    details: {
      title: "Contact details",
      items: [
        { icon: "phone", label: "Phone", value: "01 99 00 00 14" },
        { icon: "mail", label: "Email", value: "contact@example.com" },
        {
          icon: "map-pin",
          label: "Address",
          value: "12 Example Street, 00000 Your city",
        },
      ],
    },
    hours: {
      title: "Hours",
      items: [
        { day: "Monday to Friday", time: "8 am-7 pm" },
        { day: "Saturday", time: "8 am-1 pm" },
        { day: "Sundays and holidays", time: "On call, 8 am-10 pm" },
      ],
      note: "On-call service every day until 10 pm, outside business hours: surcharge stated before we leave. After 10 pm, we offer the next morning.",
    },
    zone: {
      title: "Service area",
      text: "Within 20 km (12 miles) of your city. Beyond that, we tell you by phone and refer you if needed.",
    },
    prep: {
      title: "To go faster",
      items: [
        "What is happening, since when, and on which floor.",
        "A photo of the problem, if you can.",
        "For a boiler: the error code on the display and the pressure on the gauge.",
      ],
    },
  },
};

export type PlombierChauffagistePage = keyof PlombierChauffagisteCopy["meta"];

export const plombierChauffagiste: TemplateDefinition<
  "plombier-chauffagiste",
  PlombierChauffagisteCopy
> = {
  slug: "plombier-chauffagiste",
  /**
   * Identité claire et rassurante : fond blanc légèrement teinté d'eau, encre
   * bleu pétrole profond, fond inverse teal pétrole, accent ambre (la chaleur)
   * avec une encre sombre. L'eau est portée par le teal, le chauffage par
   * l'ambre. Rayons généreux, ombres douces teintées. Typo : Inter, titres
   * à 700.
   */
  theme: {
    surface: "oklch(0.975 0.008 200)",
    raised: "oklch(0.997 0.003 200)",
    ink: "oklch(0.27 0.05 220)",
    inkMuted: "oklch(0.42 0.04 220)",
    line: "oklch(0.87 0.02 205)",
    accent: "oklch(0.8 0.15 75)",
    accentInk: "oklch(0.25 0.05 220)",
    inverse: "oklch(0.35 0.075 205)",
    inverseInk: "oklch(0.97 0.012 200)",
    radius: "0.875rem",
    radiusPill: "999px",
    fontDisplayWeight: 700,
    shadowSm:
      "0 1px 2px color-mix(in oklch, var(--tpl-ink) 8%, transparent), 0 6px 14px -8px color-mix(in oklch, var(--tpl-ink) 18%, transparent)",
    shadowLg:
      "0 22px 44px -24px color-mix(in oklch, var(--tpl-ink) 38%, transparent)",
  },
  paths: {
    home: "/plombier-chauffagiste",
    depannages: "/plombier-chauffagiste/depannages",
    tarifs: "/plombier-chauffagiste/tarifs",
    contact: "/plombier-chauffagiste/contact",
  },
  copy: { fr, en },
};
