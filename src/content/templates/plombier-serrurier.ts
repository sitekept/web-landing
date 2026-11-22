import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « plombier-serrurier » (artisan plombier et serrurier fictif
 * « Votre entreprise »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/plombier-serrurier/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `PlombierSerrurierCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais ; les vues la résolvent avec la table
 * `Record<PlombierSerrurierIconKey, LucideIcon>` de
 * `src/templates/plombier-serrurier/parts.tsx`.
 *
 * Les images (URL Unsplash génériques) sont des données : même URL dans les
 * deux langues, seul le `alt` se traduit.
 */

const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  leak: photo("1596394723269-b2cbca4e6313"),
  cylinder: photo("1759452003649-552896c8ed63"),
  keysHand: photo("1737442886747-9fb768b96ed2"),
  roughIn: photo("1707409464203-df2f21c32b9c"),
  pipes: photo("1760571327612-8ab776dcd462"),
  lever: photo("1607710533910-d7cdffd9e593"),
  tealDoor: photo("1538766017398-415434a31a5b"),
  faucet: photo("1784790601912-b30717b805b8"),
  sink: photo("1661045327753-3f2a047d00a4"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Plombier et serrurier",
  },
  phone: {
    href: "tel:+33199000024",
    label: "01 99 00 00 24",
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
    text: "Artisan plombier et serrurier pour les particuliers : fuites, débouchage, chauffe-eau, ouverture de porte, serrures et blindage. Le prix est annoncé avant l’intervention, le devis est signé avant les travaux.",
    contactTitle: "Coordonnées",
    hoursTitle: "Horaires",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    email: "contact@votre-entreprise.example",
    hours: "Lun-Ven 8 h-19 h, sam 8 h-13 h",
    onCall:
      "Astreinte tous les jours jusqu’à 22 h, tarif annoncé avant le départ",
    zone: "Intervention dans un rayon de 20 km autour de votre ville",
    note: "Site de démonstration : entreprise, prix et coordonnées fictifs.",
  },
  meta: {
    home: {
      title: "Votre entreprise - Plombier et serrurier à prix annoncés",
      description:
        "Plombier et serrurier local : fuite, débouchage, chauffe-eau, ouverture de porte, serrure. Prix annoncé au téléphone, devis signé avant les travaux, horaires d’astreinte clairs.",
    },
    depannages: {
      title: "Dépannages - Votre entreprise",
      description:
        "Les dépannages de plomberie et de serrurerie : fuite, débouchage, chauffe-eau, porte claquée, changement de serrure, blindage. Ce qui est fait et à partir de quel prix.",
    },
    tarifs: {
      title: "Tarifs - Votre entreprise",
      description:
        "Tarifs de plomberie et de serrurerie : prix de départ, ce qui est inclus, majorations du soir, du samedi après-midi et du dimanche annoncées avant le départ, devis signé avant travaux.",
    },
    contact: {
      title: "Contact - Votre entreprise",
      description:
        "Appelez ou écrivez-nous : coordonnées, horaires, astreinte jusqu’à 22 h et zone d’intervention dans un rayon de 20 km autour de votre ville.",
    },
  },
  home: {
    hero: {
      eyebrow: "Plombier et serrurier · particuliers",
      title: "Une fuite ou une porte bloquée : le prix, avant que l’on vienne.",
      description:
        "Un artisan qui fait la plomberie et la serrurerie. Vous décrivez le problème, nous annonçons le prix au téléphone, le devis est signé sur place avant le premier geste.",
      callNote:
        "Lun-Ven 8 h-19 h, sam 8 h-13 h, astreinte tous les jours jusqu’à 22 h",
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
          icon: "key-round",
          label: "Serrure",
          title: "Serrurerie",
          text: "Porte claquée, serrure, cylindre, blindage.",
          from: "Dès 89 €",
          link: "Voir la serrurerie",
          anchor: "serrurerie",
          image: {
            src: IMG.cylinder,
            alt: "Clé engagée dans un barillet, vue rapprochée",
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
        "Un seul artisan pour l’eau et pour la porte : pas de sous-traitance, pas de standard qui vous renvoie vers quelqu’un d’autre.",
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
          icon: "key-round",
          title: "Serrurerie",
          rows: [
            { name: "Ouverture de porte claquée", price: "dès 89 €" },
            { name: "Ouverture de porte fermée à clé", price: "dès 149 €" },
            { name: "Changement de cylindre", price: "dès 119 €" },
            { name: "Blindage de porte", price: "sur devis" },
          ],
        },
      ],
      note: "Prix TTC, main-d’œuvre comprise, pièces en sus. Déplacement dans la zone : 39 €.",
    },
    steps: {
      eyebrow: "Comment ça se passe",
      title: "Un dépannage, en quatre étapes.",
      description:
        "Le même déroulé pour une fuite et pour une porte : vous savez toujours où vous en êtes et ce que vous allez payer.",
      items: [
        {
          title: "Vous appelez",
          text: "Quelques questions : le problème, l’adresse, l’étage, un accès possible. Une photo par message aide, sans être obligatoire.",
        },
        {
          title: "Nous annonçons le prix",
          text: "Tarif de départ, déplacement, majoration éventuelle selon l’heure : le total estimé vous est donné avant le départ.",
        },
        {
          title: "Le devis est signé sur place",
          text: "Après diagnostic, nous chiffrons précisément. Vous signez, ou vous refusez et ne payez que le déplacement.",
        },
        {
          title: "Nous intervenons, vous réglez",
          text: "Intervention, nettoyage, facture conforme au devis. Paiement à la fin, par carte, chèque ou espèces.",
        },
      ],
      image: {
        src: IMG.keysHand,
        alt: "Main qui tient un trousseau de clés devant une porte d’entrée",
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
            "Porte claquée avec les clés à l’intérieur. Ouverte sans rien casser, pour le tarif qu’on m’avait annoncé.",
          name: "Thomas B.",
          detail: "Ouverture de porte",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Le devis a été signé avant de toucher à la serrure, avec le prix du cylindre détaillé. Rassurant.",
          name: "Sofia R.",
          detail: "Changement de cylindre",
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
          refuse: "Une serrure percée ou remplacée alors qu’elle s’ouvrait.",
          instead: "Une ouverture sans casse d’abord, un remplacement ensuite.",
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
      eyebrow: "Dépannages · plomberie et serrurerie",
      title: "Ce que nous réparons, pour combien, et dans quel ordre.",
      description:
        "Deux volets, une même méthode : diagnostic, prix annoncé, devis signé, puis intervention. Les prix sont des tarifs de départ, main-d’œuvre comprise.",
      jumps: [
        { label: "Plomberie", anchor: "plomberie" },
        { label: "Serrurerie", anchor: "serrurerie" },
      ],
    },
    plumbing: {
      id: "plomberie",
      eyebrow: "Volet 1 · Plomberie",
      title: "L’eau qui fuit, qui bouche ou qui ne chauffe plus.",
      description:
        "Fuites, canalisations, sanitaires et chauffe-eau. Nous ne faisons pas le chauffage central : voir plus bas.",
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
    locks: {
      id: "serrurerie",
      eyebrow: "Volet 2 · Serrurerie",
      title: "La porte qui ne s’ouvre plus, ou qui ne protège plus assez.",
      description:
        "Ouverture, serrures, cylindres et blindage. Nous ouvrons sans casse tant que c’est possible, et nous le disons avant de percer.",
      image: {
        src: IMG.lever,
        alt: "Poignée de porte en laiton sur une porte en bois sombre",
      },
      secondImage: {
        src: IMG.tealDoor,
        alt: "Porte bleu-vert entrouverte avec une ancienne poignée",
      },
      items: [
        {
          icon: "door-open",
          title: "Ouverture de porte claquée",
          text: "Porte tirée sans que la clé ait tourné : ouverture sans casse, sans remplacement de serrure.",
          from: "dès 89 €",
        },
        {
          icon: "unlock",
          title: "Ouverture de porte fermée à clé",
          text: "Clé perdue ou cassée dans la serrure : ouverture, puis proposition de remplacement si besoin.",
          from: "dès 149 €",
        },
        {
          icon: "key-round",
          title: "Changement de cylindre",
          text: "Cylindre remplacé, trois clés remises, essais de la porte. Cylindre en sus.",
          from: "dès 119 €",
        },
        {
          icon: "lock",
          title: "Serrure multipoints",
          text: "Dépose de l’ancienne serrure et pose d’une serrure à plusieurs points de fermeture.",
          from: "dès 290 €",
        },
        {
          icon: "shield-check",
          title: "Blindage de porte",
          text: "Renfort de la porte existante : visite, devis détaillé, pose en atelier ou sur place.",
          from: "sur devis",
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
          icon: "key-round",
          title: "Porte bloquée",
          items: [
            "Ne forcez pas la serrure : une porte forcée coûte plus cher à ouvrir.",
            "Dites-nous si la porte est claquée ou fermée à clé : le prix n’est pas le même.",
            "Préparez une pièce d’identité ou un justificatif de domicile à montrer sur place.",
          ],
        },
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
          title: "Chauffage central et chaudières",
          text: "Radiateurs, chaudière, plancher chauffant : nous ne les installons ni ne les dépannons.",
        },
        {
          icon: "ban",
          title: "Coffres-forts et serrures de voiture",
          text: "Ces ouvertures demandent un outillage et une formation que nous n’avons pas.",
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
        note: "Déplacement dans un rayon de 20 km. Si vous refusez le devis, vous ne payez que le déplacement.",
      },
    },
    list: {
      eyebrow: "Tarifs de départ",
      title: "Plomberie et serrurerie : le prix de chaque dépannage.",
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
          title: "Serrurerie",
          items: [
            {
              name: "Ouverture de porte claquée",
              detail: "Sans casse, sans changement de serrure",
              price: "dès 89 €",
            },
            {
              name: "Ouverture de porte fermée à clé",
              detail: "Clé perdue ou cassée dans la serrure",
              price: "dès 149 €",
            },
            {
              name: "Changement de cylindre",
              detail: "Trois clés remises, cylindre en sus",
              price: "dès 119 €",
            },
            {
              name: "Serrure multipoints",
              detail: "Dépose et pose, serrure en sus",
              price: "dès 290 €",
              note: "Devis",
            },
            {
              name: "Blindage de porte",
              detail: "Visite préalable et devis détaillé",
              price: "sur devis",
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
          text: "Nous cherchons la cause avant de proposer une réparation.",
        },
        {
          icon: "hand-coins",
          title: "La main-d’œuvre",
          text: "Le temps d’intervention est compris dans le tarif de départ.",
        },
        {
          icon: "list-checks",
          title: "Les essais et la remise en service",
          text: "Mise en eau, essais d’écoulement, essais de la porte.",
        },
        {
          icon: "receipt",
          title: "Une facture conforme au devis",
          text: "Chaque ligne du devis se retrouve sur la facture, avec le détail des pièces.",
        },
      ],
      image: {
        src: IMG.faucet,
        alt: "Robinet de cuisine dont coule un filet d’eau au-dessus d’un évier",
      },
      aside:
        "Restent à part : les pièces et appareils (cylindre, serrure, robinet, ballon), indiqués avec leur prix sur le devis.",
    },
    surcharges: {
      eyebrow: "Majorations",
      title:
        "Le soir, le samedi après-midi et le dimanche : annoncé avant le départ.",
      description:
        "Nous intervenons tous les jours jusqu’à 22 h. La majoration vous est donnée au téléphone, avec le total estimé.",
      rows: [
        { label: "Soirée en semaine", hours: "19 h-22 h", value: "+ 30 %" },
        { label: "Samedi", hours: "13 h-22 h", value: "+ 30 %" },
        {
          label: "Dimanche et jours fériés",
          hours: "8 h-22 h",
          value: "+ 50 %",
        },
      ],
      note: "Après 22 h, nous n’intervenons pas : nous vous proposons le lendemain matin. En attendant, fermez l’arrivée d’eau si une fuite coule.",
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
          text: "Vous signez et nous commençons, ou vous refusez et ne payez que le déplacement.",
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
          { value: "porte-claquee", label: "Porte claquée ou bloquée" },
          { value: "serrure", label: "Changement de serrure" },
          { value: "blindage", label: "Blindage de porte" },
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
        placeholder: "Dites-nous ce qui se passe, l’étage, l’accès…",
      },
    },
    details: {
      title: "Coordonnées",
      items: [
        { icon: "phone", label: "Téléphone", value: "01 99 00 00 24" },
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
        { day: "Lundi au vendredi", time: "8 h-19 h" },
        { day: "Samedi", time: "8 h-13 h" },
        { day: "Dimanche et jours fériés", time: "Astreinte, 8 h-22 h" },
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
        "Pour une porte : claquée ou fermée à clé ?",
      ],
    },
  },
} as const;

export type PlombierSerrurierCopy = WidenLiterals<typeof fr>;

export type PlombierSerrurierIconKey = TemplateIconKey<PlombierSerrurierCopy>;

const en: PlombierSerrurierCopy = {
  brand: {
    name: "Your business",
    tagline: "Plumber and locksmith",
  },
  phone: {
    href: "tel:+33199000024",
    label: "01 99 00 00 24",
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
    text: "Plumber and locksmith for homeowners and tenants: leaks, drain clearing, water heaters, door opening, locks and door reinforcement. The price is stated before we come, and the quote is signed before any work.",
    contactTitle: "Contact",
    hoursTitle: "Hours",
    address: "12 Example Street, 00000 Your city",
    email: "contact@example.com",
    hours: "Mon-Fri 8 am-7 pm, Sat 8 am-1 pm",
    onCall: "On call every day until 10 pm, rate stated before we leave",
    zone: "Service within 20 km (12 miles) of your city",
    note: "Demo website: fictional business, prices and contact details.",
  },
  meta: {
    home: {
      title: "Your business - Plumber and locksmith with stated prices",
      description:
        "Local plumber and locksmith: leaks, drain clearing, water heaters, door opening, locks. Price stated by phone, quote signed before any work, clear on-call hours.",
    },
    depannages: {
      title: "Repairs - Your business",
      description:
        "Plumbing and locksmith repairs: leaks, drain clearing, water heaters, locked-out doors, lock changes, door reinforcement. What we do and the starting price.",
    },
    tarifs: {
      title: "Pricing - Your business",
      description:
        "Plumbing and locksmith pricing: starting prices, what is included, evening, Saturday afternoon and Sunday surcharges stated before we leave, quote signed before work.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Call or write to us: contact details, hours, on-call service until 10 pm and service area within 20 km of your city.",
    },
  },
  home: {
    hero: {
      eyebrow: "Plumber and locksmith · homes",
      title: "A leak or a stuck door: the price, before we come.",
      description:
        "One tradesperson for plumbing and locksmith work. You describe the problem, we state the price by phone, and the quote is signed on site before we start.",
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
          icon: "key-round",
          label: "Lock",
          title: "Locksmith",
          text: "Locked-out doors, locks, cylinders, reinforcement.",
          from: "From €89",
          link: "See locksmith work",
          anchor: "serrurerie",
          image: {
            src: IMG.cylinder,
            alt: "Key inserted in a lock cylinder, close up",
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
        "One tradesperson for the water and the door: no subcontracting, no call center sending you to someone else.",
      groups: [
        {
          icon: "droplets",
          title: "Plumbing",
          rows: [
            { name: "Leak detection and repair", price: "from €119" },
            {
              name: "Sink, bathroom sink and shower drain clearing",
              price: "from €99",
            },
            { name: "Toilet unclogging", price: "from €109" },
            { name: "Water heater replacement", price: "from €290" },
          ],
        },
        {
          icon: "key-round",
          title: "Locksmith",
          rows: [
            { name: "Opening a slammed door", price: "from €89" },
            { name: "Opening a locked door", price: "from €149" },
            { name: "Cylinder change", price: "from €119" },
            { name: "Door reinforcement", price: "by quote" },
          ],
        },
      ],
      note: "Prices include tax and labor, parts extra. Service call fee within the area: €39.",
    },
    steps: {
      eyebrow: "How it works",
      title: "A repair, in four steps.",
      description:
        "The same sequence for a leak and for a door: you always know where you stand and what you will pay.",
      items: [
        {
          title: "You call",
          text: "A few questions: the problem, the address, the floor, how we can get in. A photo by message helps, but is not required.",
        },
        {
          title: "We state the price",
          text: "Starting rate, service call fee, any surcharge for the time of day: the estimated total is given before we leave.",
        },
        {
          title: "The quote is signed on site",
          text: "After diagnosis, we give an exact price. You sign, or you decline and pay only the service call fee.",
        },
        {
          title: "We repair, you pay",
          text: "Work, cleanup, and an invoice that matches the quote. Payment at the end, by card, check or cash.",
        },
      ],
      image: {
        src: IMG.keysHand,
        alt: "Hand holding a set of keys in front of a front door",
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
            "Door slammed shut with the keys inside. Opened without damage, for the rate I was quoted.",
          name: "Thomas B.",
          detail: "Door opening",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "The quote was signed before touching the lock, with the cylinder price itemized. Reassuring.",
          name: "Sofia R.",
          detail: "Cylinder change",
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
          refuse: "A lock drilled or replaced when it could have been opened.",
          instead: "Damage-free opening first, replacement second.",
        },
      ],
    },
    closing: {
      eyebrow: "Contact",
      title: "Describe the problem, we state the price.",
      description:
        "Call during opening hours or leave your request: we call back with the starting rate.",
    },
  },
  depannages: {
    hero: {
      eyebrow: "Repairs · plumbing and locksmith",
      title: "What we repair, for how much, and in what order.",
      description:
        "Two areas, one method: diagnosis, stated price, signed quote, then the work. Prices are starting rates, labor included.",
      jumps: [
        { label: "Plumbing", anchor: "plomberie" },
        { label: "Locksmith", anchor: "serrurerie" },
      ],
    },
    plumbing: {
      id: "plomberie",
      eyebrow: "Part 1 · Plumbing",
      title: "Water that leaks, clogs or no longer heats.",
      description:
        "Leaks, drains, fixtures and water heaters. We do not do central heating: see below.",
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
          title: "Sink, bathroom sink and shower drain clearing",
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
          text: "Old tank removed, new one installed, safety unit and startup.",
          from: "from €290",
        },
      ],
    },
    locks: {
      id: "serrurerie",
      eyebrow: "Part 2 · Locksmith",
      title: "The door that will not open, or no longer protects enough.",
      description:
        "Opening, locks, cylinders and reinforcement. We open without damage whenever possible, and we say so before drilling.",
      image: {
        src: IMG.lever,
        alt: "Brass door handle on a dark wooden door",
      },
      secondImage: {
        src: IMG.tealDoor,
        alt: "Teal door slightly open with an old handle",
      },
      items: [
        {
          icon: "door-open",
          title: "Opening a slammed door",
          text: "Door pulled shut without the key turning: opened without damage, no lock replacement.",
          from: "from €89",
        },
        {
          icon: "unlock",
          title: "Opening a locked door",
          text: "Key lost or broken in the lock: opening, then a replacement offer if needed.",
          from: "from €149",
        },
        {
          icon: "key-round",
          title: "Cylinder change",
          text: "Cylinder replaced, three keys handed over, door tested. Cylinder extra.",
          from: "from €119",
        },
        {
          icon: "lock",
          title: "Multi-point lock",
          text: "Old lock removed and a multi-point locking mechanism installed.",
          from: "from €290",
        },
        {
          icon: "shield-check",
          title: "Door reinforcement",
          text: "Reinforcing the existing door: visit, itemized quote, installation in the workshop or on site.",
          from: "by quote",
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
          icon: "key-round",
          title: "Stuck door",
          items: [
            "Do not force the lock: a forced door costs more to open.",
            "Tell us if the door is slammed or locked: the price is not the same.",
            "Have an ID or proof of address ready to show on site.",
          ],
        },
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
          title: "Central heating and boilers",
          text: "Radiators, boilers, radiant floor heating: we neither install nor repair them.",
        },
        {
          icon: "ban",
          title: "Safes and car locks",
          text: "These openings need tools and training we do not have.",
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
        note: "Service calls within 20 km. If you decline the quote, you pay only the service call fee.",
      },
    },
    list: {
      eyebrow: "Starting rates",
      title: "Plumbing and locksmith: the price of each repair.",
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
              name: "Sink, bathroom sink and shower drain clearing",
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
              detail: "Installation only, supply extra",
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
          title: "Locksmith",
          items: [
            {
              name: "Opening a slammed door",
              detail: "No damage, no lock change",
              price: "from €89",
            },
            {
              name: "Opening a locked door",
              detail: "Key lost or broken in the lock",
              price: "from €149",
            },
            {
              name: "Cylinder change",
              detail: "Three keys handed over, cylinder extra",
              price: "from €119",
            },
            {
              name: "Multi-point lock",
              detail: "Removal and installation, lock extra",
              price: "from €290",
              note: "Quote",
            },
            {
              name: "Door reinforcement",
              detail: "Prior visit and itemized quote",
              price: "by quote",
              note: "Visit",
            },
          ],
        },
      ],
      footnote:
        "Starting rates apply to a simple job during opening hours. A special case is priced in the quote, before any work.",
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
          text: "We look for the cause before suggesting a repair.",
        },
        {
          icon: "hand-coins",
          title: "Labor",
          text: "Working time is included in the starting rate.",
        },
        {
          icon: "list-checks",
          title: "Tests and startup",
          text: "Water back on, drainage tests, door tests.",
        },
        {
          icon: "receipt",
          title: "An invoice that matches the quote",
          text: "Every line of the quote appears on the invoice, with the parts itemized.",
        },
      ],
      image: {
        src: IMG.faucet,
        alt: "Kitchen faucet with a thin stream of water above a sink",
      },
      aside:
        "Kept separate: parts and appliances (cylinder, lock, faucet, tank), shown with their price on the quote.",
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
      note: "After 10 pm we do not go out: we offer the next morning. Meanwhile, shut off the water supply if a leak is running.",
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
          text: "You sign and we start, or you decline and pay only the service call fee.",
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
        "During opening hours, we pick up. In the evening, on Saturday afternoons and on Sundays, the on-call service answers until 10 pm, with the surcharge stated.",
    },
    form: {
      title: "Your request",
      description:
        "Describe the problem, we call you back with the starting rate.",
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
          { value: "porte-claquee", label: "Slammed or stuck door" },
          { value: "serrure", label: "Lock change" },
          { value: "blindage", label: "Door reinforcement" },
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
        placeholder: "Tell us what is happening, the floor, access…",
      },
    },
    details: {
      title: "Contact details",
      items: [
        { icon: "phone", label: "Phone", value: "01 99 00 00 24" },
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
      note: "On-call service every day until 10 pm, outside opening hours: surcharge stated before we leave. After 10 pm, we offer the next morning.",
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
        "For a door: slammed shut or locked with a key?",
      ],
    },
  },
};

export type PlombierSerrurierPage = keyof PlombierSerrurierCopy["meta"];

export const plombierSerrurier: TemplateDefinition<
  "plombier-serrurier",
  PlombierSerrurierCopy
> = {
  slug: "plombier-serrurier",
  /**
   * Identité claire et rassurante : fond blanc légèrement teinté d'eau, encre
   * bleu pétrole profond, fond inverse teal pétrole, accent ambre (le métal
   * d'une clé) avec une encre sombre. L'eau est portée par le teal, la serrure
   * par l'ambre. Rayons généreux, ombres douces teintées. Typo : Inter, titres
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
    home: "/plombier-serrurier",
    depannages: "/plombier-serrurier/depannages",
    tarifs: "/plombier-serrurier/tarifs",
    contact: "/plombier-serrurier/contact",
  },
  copy: { fr, en },
};
