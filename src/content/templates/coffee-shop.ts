import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « coffee-shop » (café de quartier fictif « Votre entreprise »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/coffee-shop/`) n'ont
 * aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `CoffeeShopCopy` (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou
 * une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais. Les vues la résolvent avec une table
 * `Record<CoffeeShopIconKey, LucideIcon>` (`src/templates/coffee-shop/parts.tsx`).
 *
 * Prix : chaîne déjà formatée (`4,20 €` en français, `€4.20` en anglais), en
 * euros dans les deux langues. Les vues les alignent en chiffres tabulaires.
 *
 * Images : sources libres de droits (Unsplash), sans visage, sans enseigne ni
 * texte lisible ; seules des mains apparaissent (latte art au comptoir). Les
 * `alt` sont dans la copie, traduits.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: unsplash("1495474472287-4d71bcdd2085"),
  latte: unsplash("1541167760496-1628856ab772"),
  roll: unsplash("1509365465985-25d11c17e812"),
  toast: unsplash("1525351484163-7529414344d8"),
  room: unsplash("1771830916703-9f1fc36550a7"),
  dose: unsplash("1497935586351-b67a49e012bf"),
  crema: unsplash("1514432324607-a09d9b4aefdd"),
  window: unsplash("1445116572660-236099ec97a0"),
  counter: unsplash("1547240089-0b75465f8e80"),
  art: unsplash("1507133750040-4a8f57021571"),
  beans: unsplash("1447933601403-0c6688de566e"),
  pastries: unsplash("1555507036-ab1f4038808a"),
  hall: unsplash("1579341560277-4dfaddaf6e98"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Café de quartier",
  },
  phone: {
    href: "tel:+33199000055",
    label: "01 99 00 00 55",
  },
  nav: {
    home: "Accueil",
    carte: "La carte",
    aPropos: "À propos",
    infos: "Infos et groupes",
  },
  cta: {
    carte: "Voir la carte",
    fullCarte: "Toute la carte",
    visit: "Venir nous voir",
    call: "Appeler",
    group: "Groupes et privatisation",
    about: "Notre histoire",
    infos: "Infos pratiques",
  },
  common: {
    email: "contact@votre-entreprise.example",
    address: ["12 rue de l’Exemple", "00000 Votre ville"],
    hoursLabel: "Horaires",
    hoursShort: [
      { day: "Lundi – vendredi", time: "7h30 – 18h" },
      { day: "Samedi", time: "8h30 – 18h30" },
      { day: "Dimanche", time: "9h – 17h" },
    ],
    kitchenNote: "Cuisine ouverte de 11h30 à 15h.",
    closing: {
      title: "Une table, un café, un moment pour vous.",
      text: "Passez au comptoir, appelez-nous ou écrivez-nous : on se réjouit de vous servir.",
    },
  },
  footer: {
    title: "Café de quartier, ouvert tous les jours.",
    text: "Espresso, filtre, boissons froides, pâtisseries maison et salé du midi. Sur place, en terrasse ou à emporter.",
    contactLabel: "Contact",
    barLabel: "Accès rapide au café",
  },
  meta: {
    home: {
      title: "Votre entreprise - Café de quartier",
      description:
        "Un café de quartier : espresso et filtre, boissons froides, viennoiseries maison et tartines du midi. Sur place, en terrasse ou à emporter.",
    },
    carte: {
      title: "La carte - Votre entreprise",
      description:
        "Cafés chauds, filtres, boissons froides, thés, douceurs maison et salé du midi, avec les prix en euros et les mentions végétarien, végan et sans gluten.",
    },
    aPropos: {
      title: "À propos - Votre entreprise",
      description:
        "L’histoire du café, la méthode derrière chaque espresso et nos engagements : produits de saison et moins de déchets.",
    },
    infos: {
      title: "Infos et groupes - Votre entreprise",
      description:
        "Horaires, adresse et accès du café, plus une demande de privatisation ou de commande pour un groupe.",
    },
  },
  home: {
    hero: {
      eyebrow: "Café de quartier",
      title: "Bon café. Bonne pause.",
      description:
        "Espresso et filtre, boissons froides, viennoiseries faites maison et tartines du midi. Sur place, en terrasse ou à emporter.",
      facts: [
        { icon: "wifi", text: "Wifi gratuit" },
        { icon: "sun", text: "Terrasse" },
        { icon: "coffee", text: "À emporter" },
      ],
      image: {
        src: IMG.hero,
        alt: "Deux cafés crème avec un joli dessin de lait trinquent au-dessus d’une table en bois.",
      },
    },
    picks: {
      eyebrow: "Les incontournables",
      title: "Trois habitudes à prendre.",
      description:
        "Une boisson, un sucré, un salé : ce que nos habitués commandent le plus.",
      items: [
        {
          kind: "Boisson",
          title: "Flat white",
          text: "Deux shots d’espresso, lait micro-moussé, tasse bien chaude. La boisson la plus commandée du comptoir.",
          price: "4,20 €",
          image: {
            src: IMG.latte,
            alt: "Du lait est versé dans une tasse de café pour former un dessin à la surface.",
          },
        },
        {
          kind: "Sucré",
          title: "Cinnamon roll du matin",
          text: "Pétri la veille, cuit à l’ouverture, nappé d’un glaçage sucré à la cannelle.",
          price: "3,80 €",
          image: {
            src: IMG.roll,
            alt: "Des brioches roulées à la cannelle saupoudrées de sucre sur une plaque sombre.",
          },
        },
        {
          kind: "Salé",
          title: "Tartine avocat-œuf",
          text: "Pain au levain grillé, avocat écrasé, œuf au plat, piment doux et herbes fraîches.",
          price: "9,50 €",
          image: {
            src: IMG.toast,
            alt: "Une tartine garnie d’avocat et d’un œuf au plat jaune vif.",
          },
        },
      ],
    },
    beans: {
      eyebrow: "Grains du moment",
      title: "Ce que l’on moud cette semaine.",
      description:
        "Torréfiés par un torréfacteur artisanal de la région, nos grains changent au fil des récoltes.",
      notesLabel: "Notes en tasse",
      useLabel: "À boire en",
      items: [
        {
          origin: "Éthiopie",
          notes: ["Bergamote", "Pêche", "Thé noir"],
          use: "Filtre",
        },
        {
          origin: "Colombie",
          notes: ["Caramel", "Pomme rouge", "Cacao"],
          use: "Espresso et boissons au lait",
        },
        {
          origin: "Brésil",
          notes: ["Noisette", "Chocolat au lait", "Amande grillée"],
          use: "Espresso",
        },
      ],
    },
    reviews: {
      eyebrow: "Les habitués en parlent",
      title: "On revient pour le café, on reste pour l’ambiance.",
      description:
        "Quelques mots laissés par celles et ceux qui passent chez nous.",
      label: "Avis de clients",
      items: [
        {
          quote:
            "Le meilleur flat white que j’aie bu en dehors de chez moi, et l’équipe retient mon prénom. Je ne prends plus mon café ailleurs.",
          name: "Claire M.",
          detail: "Habituée du matin",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Un vrai endroit pour travailler : wifi stable, prise à côté de la table et personne ne vous presse. Le cinnamon roll vaut le détour.",
          name: "Thomas B.",
          detail: "Télétravailleur",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Tartine avocat-œuf impeccable, et la formule du midi est vraiment correcte pour le prix. Service rapide.",
          name: "Inès R.",
          detail: "Déjeuner entre collègues",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "Un café filtre d’une grande clarté, et le barista m’a expliqué l’origine sans me prendre de haut. J’y retourne chaque samedi.",
          name: "Hugo L.",
          detail: "Client du week-end",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "La terrasse est parfaite dès qu’il fait beau. Mon chien a eu droit à sa gamelle d’eau avant moi.",
          name: "Sophie D.",
          detail: "En terrasse",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "On a commandé viennoiseries et boissons chaudes pour une réunion d’équipe : tout était prêt à l’heure et bien emballé.",
          name: "Karim T.",
          detail: "Commande pour l’équipe",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
      ],
    },
    terrace: {
      eyebrow: "La salle",
      title: "Un coin calme au coin de la rue.",
      description:
        "Quelques tables dehors dès les premiers beaux jours, une grande salle claire quand il pleut. Les chiens sont les bienvenus, les ordinateurs aussi.",
      points: [
        {
          icon: "wifi",
          title: "Wifi gratuit",
          text: "Une connexion stable, le code est sur le ticket.",
        },
        {
          icon: "plug",
          title: "Prises à portée",
          text: "Plusieurs places équipées, côté salle.",
        },
        {
          icon: "dog",
          title: "Chiens bienvenus",
          text: "Une gamelle d’eau les attend en terrasse.",
        },
      ],
      image: {
        src: IMG.room,
        alt: "Une table en bois près d’une grande fenêtre ouverte, avec deux fauteuils et un arbre dehors.",
      },
    },
    menu: {
      eyebrow: "La carte",
      title: "De quoi bien commencer.",
      description:
        "Un aperçu de ce qu’on sert au comptoir, prix en euros. Lait végétal : +0,50 €.",
      listLabel: "Aperçu de la carte",
      items: [
        { name: "Espresso", price: "2,60 €" },
        { name: "Flat white", price: "4,20 €" },
        { name: "Filtre du jour", price: "3,50 €" },
        { name: "Cold brew", price: "4,50 €" },
        { name: "Croissant au beurre", price: "1,90 €" },
        { name: "Cookie noisette", price: "2,80 €" },
        { name: "Tartine avocat-œuf", price: "9,50 €" },
        { name: "Formule midi", price: "13,50 €" },
      ],
    },
    visit: {
      eyebrow: "Venir nous voir",
      title: "On vous attend tous les jours.",
      description:
        "Au comptoir, en salle ou en terrasse : on a toujours une place pour un café.",
      addressLabel: "Adresse",
      groupTitle: "Un groupe, une fête ?",
      groupText:
        "Privatisez le café en soirée ou commandez pour votre équipe : on vous répond sous 48 heures.",
    },
  },
  carte: {
    hero: {
      eyebrow: "Prix en euros, service compris",
      title: "La carte, sans surprise.",
      description:
        "Café de torréfaction artisanale, douceurs du jour et salé du midi : tout est affiché, tout est ici.",
      image: {
        src: IMG.crema,
        alt: "Vue de dessus d’un espresso crémeux dans une tasse blanche.",
      },
    },
    navLabel: "Catégories de la carte",
    categories: [
      {
        id: "cafes",
        name: "Cafés chauds",
        short: "Cafés chauds",
        note: "Notre espresso change avec les récoltes : demandez le grain du moment.",
        items: [
          { name: "Espresso", text: "", price: "2,60 €", tags: [] },
          { name: "Allongé", text: "", price: "2,80 €", tags: [] },
          {
            name: "Noisette",
            text: "Espresso et une touche de lait mousseux.",
            price: "2,90 €",
            tags: [],
          },
          {
            name: "Cortado",
            text: "Espresso et lait chaud à parts égales.",
            price: "3,40 €",
            tags: [],
          },
          {
            name: "Flat white",
            text: "Deux shots d’espresso, lait micro-moussé.",
            price: "4,20 €",
            tags: [],
          },
          { name: "Cappuccino", text: "", price: "4,20 €", tags: [] },
          { name: "Latte", text: "", price: "4,60 €", tags: [] },
          {
            name: "Chocolat chaud maison",
            text: "Chocolat noir fondu, lait entier ou végétal.",
            price: "4,50 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
        ],
      },
      {
        id: "filtres",
        name: "Filtres",
        short: "Filtres",
        note: "Préparés à la commande, avec un grain différent chaque semaine.",
        items: [
          {
            name: "Filtre du jour",
            text: "Café filtre servi en grande tasse.",
            price: "3,50 €",
            tags: [],
          },
          {
            name: "Filtre manuel",
            text: "Origine du moment, versé à la main, en tasse.",
            price: "5,00 €",
            tags: [],
          },
          {
            name: "Carafe pour deux",
            text: "Un filtre manuel à partager, servi en carafe.",
            price: "9,50 €",
            tags: [],
          },
        ],
      },
      {
        id: "froides",
        name: "Boissons froides",
        short: "Boissons froides",
        note: "Servies avec beaucoup de glace, sur demande avec moins.",
        items: [
          {
            name: "Cold brew",
            text: "Infusé à froid pendant 16 heures.",
            price: "4,50 €",
            tags: [{ icon: "sprout", label: "Végan" }],
          },
          {
            name: "Latte glacé",
            text: "Espresso, lait froid et glaçons.",
            price: "5,00 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
          {
            name: "Espresso tonic",
            text: "Tonic, glaçons et un shot d’espresso.",
            price: "5,20 €",
            tags: [{ icon: "sprout", label: "Végan" }],
          },
          {
            name: "Limonade maison",
            text: "Citron pressé, sucre de canne, eau pétillante.",
            price: "4,20 €",
            tags: [{ icon: "sprout", label: "Végan" }],
          },
          {
            name: "Jus pressé",
            text: "Fruits de saison pressés à la demande.",
            price: "5,00 €",
            tags: [{ icon: "sprout", label: "Végan" }],
          },
        ],
      },
      {
        id: "thes",
        name: "Thés et autres",
        short: "Thés et autres",
        note: "Pour celles et ceux qui préfèrent autre chose que le café.",
        items: [
          {
            name: "Thé ou infusion",
            text: "Thé noir, thé vert ou infusion du moment, en théière.",
            price: "3,80 €",
            tags: [{ icon: "sprout", label: "Végan" }],
          },
          {
            name: "Matcha latte",
            text: "Thé vert en poudre fouetté, lait chaud ou froid.",
            price: "5,20 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
          {
            name: "Chai latte",
            text: "Thé noir aux épices douces, lait chaud.",
            price: "4,80 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
        ],
      },
      {
        id: "sucre",
        name: "Sucré",
        short: "Sucré",
        note: "Préparé chaque jour dans notre laboratoire, jusqu’à épuisement.",
        items: [
          {
            name: "Croissant au beurre",
            text: "",
            price: "1,90 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
          {
            name: "Pain au chocolat",
            text: "",
            price: "2,10 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
          {
            name: "Cinnamon roll",
            text: "Cuit à l’ouverture, glaçage cannelle.",
            price: "3,80 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
          {
            name: "Cookie noisette",
            text: "Pépites de chocolat, noisettes torréfiées.",
            price: "2,80 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
          {
            name: "Cookie avoine-raisin",
            text: "Sans œuf ni produit laitier.",
            price: "2,80 €",
            tags: [{ icon: "sprout", label: "Végan" }],
          },
          {
            name: "Brownie chocolat noir",
            text: "Sans farine de blé.",
            price: "3,90 €",
            tags: [
              { icon: "leaf", label: "Végétarien" },
              { icon: "wheat-off", label: "Sans gluten" },
            ],
          },
          {
            name: "Gâteau du jour",
            text: "Demandez la recette de la semaine au comptoir.",
            price: "4,50 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
        ],
      },
      {
        id: "sale",
        name: "Salé du midi",
        short: "Salé du midi",
        note: "Servi de 11h30 à 15h, sur place ou à emporter.",
        items: [
          {
            name: "Tartine avocat-œuf",
            text: "Pain au levain, avocat, œuf au plat, piment doux.",
            price: "9,50 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
          {
            name: "Tartine chèvre-miel",
            text: "Fromage de chèvre frais, miel, noix, roquette.",
            price: "9,00 €",
            tags: [{ icon: "leaf", label: "Végétarien" }],
          },
          {
            name: "Tartine jambon-comté",
            text: "Jambon blanc, fromage affiné, moutarde douce.",
            price: "9,50 €",
            tags: [],
          },
          {
            name: "Salade de grains",
            text: "Quinoa, pois chiches, légumes rôtis, vinaigrette citronnée.",
            price: "10,50 €",
            tags: [
              { icon: "sprout", label: "Végan" },
              { icon: "wheat-off", label: "Sans gluten" },
            ],
          },
          {
            name: "Soupe du jour",
            text: "Selon le marché, servie avec une tranche de pain.",
            price: "6,50 €",
            tags: [{ icon: "sprout", label: "Végan" }],
          },
          {
            name: "Formule midi",
            text: "Une tartine ou une salade, un café filtre ou une boisson chaude, un petit sucré.",
            price: "13,50 €",
            tags: [],
          },
        ],
      },
    ],
    notes: {
      title: "À savoir",
      items: [
        {
          icon: "milk",
          title: "Lait végétal",
          text: "Avoine, soja ou amande : +0,50 € sur toutes les boissons au lait.",
        },
        {
          icon: "wheat-off",
          title: "Allergènes",
          text: "La liste complète est disponible au comptoir. Les préparations sans gluten sont faites dans une cuisine qui utilise du gluten : des traces sont possibles.",
        },
      ],
    },
    closing: {
      title: "Une question sur la carte ?",
      text: "L’équipe vous conseille au comptoir, ou par téléphone avant de passer.",
    },
  },
  aPropos: {
    hero: {
      eyebrow: "À propos",
      title: "Un comptoir, une machine, l’envie de bien faire.",
      description:
        "Le café est né d’une idée simple : un lieu de quartier où le café est vraiment bon, sans manières.",
      image: {
        src: IMG.dose,
        alt: "Du café moulu dans un porte-filtre, posé sur une planche en bois à côté d’une tasse.",
      },
    },
    story: {
      eyebrow: "L’histoire",
      title: "Parti d’une idée simple : le café du coin, en mieux.",
      paragraphs: [
        "On voulait un endroit où l’on entre pour dix minutes et où l’on reste parfois deux heures. Un lieu où le café est précis, la pâtisserie faite maison et l’accueil sans chichi.",
        "Depuis l’ouverture, la recette n’a pas changé : un bon grain, une machine bien réglée, des gestes réguliers. Le reste vient des habitués, qui nous disent ce qu’ils aiment et ce qu’il faut changer.",
        "Aujourd’hui, l’équipe prépare chaque matin viennoiseries et cookies, et choisit avec soin le torréfacteur artisanal de la région qui nous fournit.",
      ],
    },
    method: {
      eyebrow: "La méthode",
      title: "Un bon espresso tient en quatre gestes.",
      description:
        "Pas de magie : de la régularité. Voici ce qui se passe derrière le comptoir.",
      steps: [
        {
          value: "18 g",
          label: "Le dosage",
          text: "Chaque dose de café est pesée, à chaque tasse. La régularité commence là.",
        },
        {
          value: "Fine",
          label: "La mouture",
          text: "Moulu juste avant l’extraction et réglé chaque matin, selon le grain et l’humidité de l’air.",
        },
        {
          value: "28 s",
          label: "L’extraction",
          text: "Environ une demi-minute pour faire passer l’eau chaude à travers le café sous pression.",
        },
        {
          value: "1 : 2",
          label: "Le ratio",
          text: "Pour 18 g de café, environ 36 g d’espresso dans la tasse. Ni trop court, ni trop dilué.",
        },
      ],
    },
    gallery: {
      eyebrow: "Au quotidien",
      title: "Le café, en cinq images.",
      label: "Photos du café",
      items: [
        {
          title: "Le comptoir",
          meta: "7h30",
          image: {
            src: IMG.counter,
            alt: "Du lait vapeur versé dans une tasse blanche, un motif de latte art se dessine ; la tasse est tenue à la main sur le comptoir.",
          },
        },
        {
          title: "Le latte art",
          meta: "Chaque tasse",
          image: {
            src: IMG.art,
            alt: "Deux tasses de café avec un motif de lait en forme de feuille, posées sur un plateau en bois.",
          },
        },
        {
          title: "Les grains",
          meta: "Torréfiés dans la région",
          image: {
            src: IMG.beans,
            alt: "Un amas de grains de café torréfiés vu de près.",
          },
        },
        {
          title: "Les pâtisseries",
          meta: "Faites chaque jour",
          image: {
            src: IMG.pastries,
            alt: "Deux croissants dorés saupoudrés de sucre glace sur une table sombre.",
          },
        },
        {
          title: "La salle",
          meta: "Tables et tabourets",
          image: {
            src: IMG.hall,
            alt: "Une salle de café vide sous un plafond en lattes de bois, avec des tables rondes, des tabourets, des plantes et un arbre sans feuilles décoré de boules.",
          },
        },
      ],
    },
    commitments: {
      eyebrow: "Nos engagements",
      title: "Bien faire, sans en faire trop.",
      items: [
        {
          icon: "leaf",
          title: "Produits de saison",
          text: "Fruits, légumes et herbes suivent le marché : la carte du midi change avec les saisons.",
        },
        {
          icon: "recycle",
          title: "Moins de déchets",
          text: "Vaisselle plutôt que jetable sur place, réduction pour votre tasse, marc de café récupéré pour le compost.",
        },
        {
          icon: "coffee",
          title: "Un torréfacteur de la région",
          text: "Nos grains viennent d’un torréfacteur artisanal proche, avec des origines choisies à chaque récolte.",
        },
        {
          icon: "accessibility",
          title: "Un lieu pour tous",
          text: "Accès de plain-pied, chaise haute, chiens bienvenus et prix affichés sans surprise.",
        },
      ],
    },
    closing: {
      title: "Venez goûter la différence.",
      text: "Un espresso au comptoir suffit pour se faire une idée.",
    },
  },
  infos: {
    hero: {
      eyebrow: "Infos pratiques",
      title: "Passez nous voir, ou invitez-nous.",
      description:
        "Horaires, accès, et une demande en deux minutes pour privatiser le café ou commander pour un groupe.",
      image: {
        src: IMG.window,
        alt: "Une table ronde près d’une grande fenêtre, avec une cafetière à piston et deux tasses.",
      },
    },
    hours: {
      title: "Horaires",
      rows: [
        { day: "Lundi", time: "7h30 – 18h" },
        { day: "Mardi", time: "7h30 – 18h" },
        { day: "Mercredi", time: "7h30 – 18h" },
        { day: "Jeudi", time: "7h30 – 18h" },
        { day: "Vendredi", time: "7h30 – 18h" },
        { day: "Samedi", time: "8h30 – 18h30" },
        { day: "Dimanche", time: "9h – 17h" },
      ],
      note: "Cuisine ouverte de 11h30 à 15h. Dernière commande 15 minutes avant la fermeture.",
    },
    address: {
      title: "Adresse et contact",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
    },
    access: {
      title: "Accès",
      items: [
        {
          icon: "bus-front",
          title: "En transports",
          text: "Un arrêt de bus et une station de vélos en libre-service se trouvent à moins de 3 minutes à pied.",
        },
        {
          icon: "bike",
          title: "À vélo",
          text: "Des arceaux sont installés devant la porte.",
        },
        {
          icon: "circle-parking",
          title: "En voiture",
          text: "Un parking public payant se trouve à environ 200 mètres.",
        },
        {
          icon: "accessibility",
          title: "Accessibilité",
          text: "Entrée de plain-pied, toilettes accessibles et espace pour poussettes.",
        },
      ],
    },
    groups: {
      eyebrow: "Groupes et privatisation",
      title: "Une fête, une réunion, une commande pour l’équipe ?",
      description:
        "Le café se privatise le soir, pour jusqu’à 40 personnes. Pour un groupe, on prépare viennoiseries, boissons chaudes et tartines.",
      points: [
        "Privatisation du café de 18h à 22h",
        "Commande pour 8 personnes ou plus, à prévenir 3 jours avant",
        "Réponse sous 48 heures",
      ],
      form: {
        title: "Votre demande",
        description:
          "Quelques lignes suffisent. Démonstration : aucun message n’est envoyé.",
        submit: "Envoyer la demande",
        name: "Nom",
        email: "E-mail",
        phone: "Téléphone",
        type: {
          label: "Type de demande",
          placeholder: "Choisissez",
          options: [
            { value: "privatisation", label: "Privatisation du café" },
            { value: "groupe", label: "Commande pour un groupe" },
            { value: "autre", label: "Autre demande" },
          ],
        },
        guests: { label: "Nombre de personnes", placeholder: "Par exemple 25" },
        date: "Date souhaitée",
        message: {
          label: "Message",
          placeholder: "Dites-nous ce que vous imaginez.",
        },
      },
    },
  },
} as const;

export type CoffeeShopCopy = WidenLiterals<typeof fr>;

/** Clé d'icône de la copie : sert à typer la table d'icônes des vues. */
export type CoffeeShopIconKey = TemplateIconKey<CoffeeShopCopy>;

const en: CoffeeShopCopy = {
  brand: {
    name: "Your business",
    tagline: "Neighborhood café",
  },
  phone: {
    href: "tel:+33199000055",
    label: "01 99 00 00 55",
  },
  nav: {
    home: "Home",
    carte: "Menu",
    aPropos: "About",
    infos: "Info & groups",
  },
  cta: {
    carte: "See the menu",
    fullCarte: "Full menu",
    visit: "Come say hi",
    call: "Call",
    group: "Groups & private hire",
    about: "Our story",
    infos: "Visitor info",
  },
  common: {
    email: "contact@example.com",
    address: ["12 Example Street", "00000 Your city"],
    hoursLabel: "Opening hours",
    hoursShort: [
      { day: "Monday – Friday", time: "7:30 am – 6 pm" },
      { day: "Saturday", time: "8:30 am – 6:30 pm" },
      { day: "Sunday", time: "9 am – 5 pm" },
    ],
    kitchenNote: "Kitchen open from 11:30 am to 3 pm.",
    closing: {
      title: "A table, a coffee, a moment for yourself.",
      text: "Stop by the counter, call us or write to us: we would love to serve you.",
    },
  },
  footer: {
    title: "Neighborhood café, open every day.",
    text: "Espresso, filter coffee, cold drinks, house-made pastries and a lunch menu. Eat in, sit on the terrace or take away.",
    contactLabel: "Contact",
    barLabel: "Quick access to the café",
  },
  meta: {
    home: {
      title: "Your business - Neighborhood café",
      description:
        "A neighborhood café: espresso and filter coffee, cold drinks, house-made pastries and lunchtime toasts. Eat in, sit on the terrace or take away.",
    },
    carte: {
      title: "Menu - Your business",
      description:
        "Hot coffees, filter coffee, cold drinks, teas, house-made sweets and lunch dishes, with prices in euros and vegetarian, vegan and gluten-free labels.",
    },
    aPropos: {
      title: "About - Your business",
      description:
        "The story of the café, the method behind every espresso and our commitments: seasonal produce and less waste.",
    },
    infos: {
      title: "Info & groups - Your business",
      description:
        "Opening hours, address and directions for the café, plus a request form for private hire or group orders.",
    },
  },
  home: {
    hero: {
      eyebrow: "Neighborhood café",
      title: "Good coffee. Good break.",
      description:
        "Espresso and filter coffee, cold drinks, house-made pastries and lunchtime toasts. Eat in, sit on the terrace or take away.",
      facts: [
        { icon: "wifi", text: "Free wifi" },
        { icon: "sun", text: "Terrace" },
        { icon: "coffee", text: "Takeaway" },
      ],
      image: {
        src: IMG.hero,
        alt: "Two lattes with milk art clink together above a wooden table.",
      },
    },
    picks: {
      eyebrow: "The must-tries",
      title: "Three habits worth picking up.",
      description:
        "One drink, one sweet, one savory: what our regulars order the most.",
      items: [
        {
          kind: "Drink",
          title: "Flat white",
          text: "Two espresso shots, micro-foamed milk, a properly hot cup. The most ordered drink at the counter.",
          price: "€4.20",
          image: {
            src: IMG.latte,
            alt: "Milk is poured into a cup of coffee to form a pattern on the surface.",
          },
        },
        {
          kind: "Sweet",
          title: "Morning cinnamon roll",
          text: "Kneaded the day before, baked at opening, topped with a sweet cinnamon glaze.",
          price: "€3.80",
          image: {
            src: IMG.roll,
            alt: "Cinnamon rolls dusted with sugar on a dark baking tray.",
          },
        },
        {
          kind: "Savory",
          title: "Avocado and egg toast",
          text: "Toasted sourdough, smashed avocado, fried egg, mild chili and fresh herbs.",
          price: "€9.50",
          image: {
            src: IMG.toast,
            alt: "A slice of toast topped with avocado and a bright yellow fried egg.",
          },
        },
      ],
    },
    beans: {
      eyebrow: "Beans of the moment",
      title: "What we are grinding this week.",
      description:
        "Roasted by an artisan roaster from the region, our beans change with the harvests.",
      notesLabel: "Tasting notes",
      useLabel: "Best as",
      items: [
        {
          origin: "Ethiopia",
          notes: ["Bergamot", "Peach", "Black tea"],
          use: "Filter",
        },
        {
          origin: "Colombia",
          notes: ["Caramel", "Red apple", "Cocoa"],
          use: "Espresso and milk drinks",
        },
        {
          origin: "Brazil",
          notes: ["Hazelnut", "Milk chocolate", "Toasted almond"],
          use: "Espresso",
        },
      ],
    },
    reviews: {
      eyebrow: "Regulars talk",
      title: "They come back for the coffee and stay for the mood.",
      description: "A few words from the people who drop in.",
      label: "Customer reviews",
      items: [
        {
          quote:
            "The best flat white I have had outside my own kitchen, and the team remembers my name. I do not get my coffee anywhere else anymore.",
          name: "Claire M.",
          detail: "Morning regular",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "A real place to work: steady wifi, an outlet next to the table and nobody rushing you. The cinnamon roll is worth the trip.",
          name: "Thomas B.",
          detail: "Remote worker",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Spot-on avocado and egg toast, and the lunch set is honestly good value. Quick service.",
          name: "Inès R.",
          detail: "Lunch with colleagues",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
        {
          quote:
            "A very clean filter coffee, and the barista explained the origin without talking down to me. I go back every Saturday.",
          name: "Hugo L.",
          detail: "Weekend regular",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "The terrace is perfect as soon as the sun is out. My dog got his bowl of water before I got my coffee.",
          name: "Sophie D.",
          detail: "On the terrace",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "We ordered pastries and hot drinks for a team meeting: everything was ready on time and nicely packed.",
          name: "Karim T.",
          detail: "Team order",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
      ],
    },
    terrace: {
      eyebrow: "The room",
      title: "A quiet spot around the corner.",
      description:
        "A few tables outside as soon as the weather turns nice, and a big bright room when it rains. Dogs are welcome, and so are laptops.",
      points: [
        {
          icon: "wifi",
          title: "Free wifi",
          text: "A steady connection, the code is printed on your receipt.",
        },
        {
          icon: "plug",
          title: "Outlets nearby",
          text: "Several seats with power, on the room side.",
        },
        {
          icon: "dog",
          title: "Dogs welcome",
          text: "A bowl of water is waiting for them on the terrace.",
        },
      ],
      image: {
        src: IMG.room,
        alt: "A wooden table by a large open window, with two armchairs and a tree outside.",
      },
    },
    menu: {
      eyebrow: "The menu",
      title: "Plenty to get started with.",
      description:
        "A preview of what we serve at the counter, prices in euros. Plant-based milk: +€0.50.",
      listLabel: "Menu preview",
      items: [
        { name: "Espresso", price: "€2.60" },
        { name: "Flat white", price: "€4.20" },
        { name: "Filter coffee of the day", price: "€3.50" },
        { name: "Cold brew", price: "€4.50" },
        { name: "Butter croissant", price: "€1.90" },
        { name: "Hazelnut cookie", price: "€2.80" },
        { name: "Avocado and egg toast", price: "€9.50" },
        { name: "Lunch set", price: "€13.50" },
      ],
    },
    visit: {
      eyebrow: "Come say hi",
      title: "We are here every day.",
      description:
        "At the counter, in the room or on the terrace: there is always a seat for a coffee.",
      addressLabel: "Address",
      groupTitle: "A group, a party?",
      groupText:
        "Book the café for an evening or order for your team: we reply within 48 hours.",
    },
  },
  carte: {
    hero: {
      eyebrow: "Prices in euros, service included",
      title: "The menu, no surprises.",
      description:
        "Artisan-roasted coffee, daily sweets and a lunch menu: everything is posted, everything is here.",
      image: {
        src: IMG.crema,
        alt: "Top view of a creamy espresso in a white cup.",
      },
    },
    navLabel: "Menu categories",
    categories: [
      {
        id: "cafes",
        name: "Hot coffees",
        short: "Hot coffees",
        note: "Our espresso changes with the harvests: ask for the bean of the moment.",
        items: [
          { name: "Espresso", text: "", price: "€2.60", tags: [] },
          { name: "Long black", text: "", price: "€2.80", tags: [] },
          {
            name: "Macchiato",
            text: "Espresso with a dash of foamed milk.",
            price: "€2.90",
            tags: [],
          },
          {
            name: "Cortado",
            text: "Espresso and warm milk in equal parts.",
            price: "€3.40",
            tags: [],
          },
          {
            name: "Flat white",
            text: "Two espresso shots, micro-foamed milk.",
            price: "€4.20",
            tags: [],
          },
          { name: "Cappuccino", text: "", price: "€4.20", tags: [] },
          { name: "Latte", text: "", price: "€4.60", tags: [] },
          {
            name: "House hot chocolate",
            text: "Melted dark chocolate, whole or plant-based milk.",
            price: "€4.50",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
        ],
      },
      {
        id: "filtres",
        name: "Filter coffee",
        short: "Filter coffee",
        note: "Brewed to order, with a different bean every week.",
        items: [
          {
            name: "Filter coffee of the day",
            text: "Filter coffee served in a large cup.",
            price: "€3.50",
            tags: [],
          },
          {
            name: "Pour-over",
            text: "Bean of the moment, poured by hand, in a cup.",
            price: "€5.00",
            tags: [],
          },
          {
            name: "Carafe for two",
            text: "A pour-over to share, served in a carafe.",
            price: "€9.50",
            tags: [],
          },
        ],
      },
      {
        id: "froides",
        name: "Cold drinks",
        short: "Cold drinks",
        note: "Served with plenty of ice, or less on request.",
        items: [
          {
            name: "Cold brew",
            text: "Steeped cold for 16 hours.",
            price: "€4.50",
            tags: [{ icon: "sprout", label: "Vegan" }],
          },
          {
            name: "Iced latte",
            text: "Espresso, cold milk and ice.",
            price: "€5.00",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
          {
            name: "Espresso tonic",
            text: "Tonic water, ice and a shot of espresso.",
            price: "€5.20",
            tags: [{ icon: "sprout", label: "Vegan" }],
          },
          {
            name: "House lemonade",
            text: "Pressed lemon, cane sugar, sparkling water.",
            price: "€4.20",
            tags: [{ icon: "sprout", label: "Vegan" }],
          },
          {
            name: "Fresh-pressed juice",
            text: "Seasonal fruit pressed to order.",
            price: "€5.00",
            tags: [{ icon: "sprout", label: "Vegan" }],
          },
        ],
      },
      {
        id: "thes",
        name: "Teas & more",
        short: "Teas & more",
        note: "For those who would rather have something other than coffee.",
        items: [
          {
            name: "Tea or herbal infusion",
            text: "Black tea, green tea or the infusion of the moment, in a pot.",
            price: "€3.80",
            tags: [{ icon: "sprout", label: "Vegan" }],
          },
          {
            name: "Matcha latte",
            text: "Whisked green tea powder, hot or cold milk.",
            price: "€5.20",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
          {
            name: "Chai latte",
            text: "Black tea with mild spices, hot milk.",
            price: "€4.80",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
        ],
      },
      {
        id: "sucre",
        name: "Sweets",
        short: "Sweets",
        note: "Baked every day in our kitchen, while stocks last.",
        items: [
          {
            name: "Butter croissant",
            text: "",
            price: "€1.90",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
          {
            name: "Chocolate croissant",
            text: "",
            price: "€2.10",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
          {
            name: "Cinnamon roll",
            text: "Baked at opening, cinnamon glaze.",
            price: "€3.80",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
          {
            name: "Hazelnut cookie",
            text: "Chocolate chips, roasted hazelnuts.",
            price: "€2.80",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
          {
            name: "Oat and raisin cookie",
            text: "No egg, no dairy.",
            price: "€2.80",
            tags: [{ icon: "sprout", label: "Vegan" }],
          },
          {
            name: "Dark chocolate brownie",
            text: "Made without wheat flour.",
            price: "€3.90",
            tags: [
              { icon: "leaf", label: "Vegetarian" },
              { icon: "wheat-off", label: "Gluten-free" },
            ],
          },
          {
            name: "Cake of the day",
            text: "Ask at the counter for this week’s recipe.",
            price: "€4.50",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
        ],
      },
      {
        id: "sale",
        name: "Lunch",
        short: "Lunch",
        note: "Served from 11:30 am to 3 pm, to eat in or take away.",
        items: [
          {
            name: "Avocado and egg toast",
            text: "Sourdough, avocado, fried egg, mild chili.",
            price: "€9.50",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
          {
            name: "Goat cheese and honey toast",
            text: "Fresh goat cheese, honey, walnuts, arugula.",
            price: "€9.00",
            tags: [{ icon: "leaf", label: "Vegetarian" }],
          },
          {
            name: "Ham and aged cheese toast",
            text: "Sliced ham, aged cheese, mild mustard.",
            price: "€9.50",
            tags: [],
          },
          {
            name: "Grain salad",
            text: "Quinoa, chickpeas, roasted vegetables, lemon dressing.",
            price: "€10.50",
            tags: [
              { icon: "sprout", label: "Vegan" },
              { icon: "wheat-off", label: "Gluten-free" },
            ],
          },
          {
            name: "Soup of the day",
            text: "Based on the market, served with a slice of bread.",
            price: "€6.50",
            tags: [{ icon: "sprout", label: "Vegan" }],
          },
          {
            name: "Lunch set",
            text: "A toast or a salad, a filter coffee or hot drink, and a small sweet.",
            price: "€13.50",
            tags: [],
          },
        ],
      },
    ],
    notes: {
      title: "Good to know",
      items: [
        {
          icon: "milk",
          title: "Plant-based milk",
          text: "Oat, soy or almond: +€0.50 on all milk-based drinks.",
        },
        {
          icon: "wheat-off",
          title: "Allergens",
          text: "The full list is available at the counter. Gluten-free items are prepared in a kitchen that uses gluten: traces are possible.",
        },
      ],
    },
    closing: {
      title: "A question about the menu?",
      text: "The team will advise you at the counter, or by phone before you drop in.",
    },
  },
  aPropos: {
    hero: {
      eyebrow: "About",
      title: "A counter, a machine, a will to do it right.",
      description:
        "The café started from a simple idea: a neighborhood spot where the coffee is genuinely good, without the fuss.",
      image: {
        src: IMG.dose,
        alt: "Ground coffee in a portafilter, resting on a wooden board next to a cup.",
      },
    },
    story: {
      eyebrow: "The story",
      title: "It started with a simple idea: the corner café, only better.",
      paragraphs: [
        "We wanted a place you can walk into for ten minutes and sometimes stay for two hours. A place where the coffee is precise, the pastry is homemade and the welcome is unfussy.",
        "Since opening, the recipe has not changed: a good bean, a well-tuned machine, steady habits. The rest comes from our regulars, who tell us what they like and what to change.",
        "Today the team bakes pastries and cookies every morning, and carefully picks the artisan roaster from the region that supplies our beans.",
      ],
    },
    method: {
      eyebrow: "The method",
      title: "A good espresso comes down to four moves.",
      description:
        "No magic, just consistency. Here is what happens behind the counter.",
      steps: [
        {
          value: "18 g",
          label: "The dose",
          text: "Every dose of coffee is weighed, for every cup. Consistency starts there.",
        },
        {
          value: "Fine",
          label: "The grind",
          text: "Ground just before brewing and adjusted every morning, depending on the bean and the humidity.",
        },
        {
          value: "28 s",
          label: "The extraction",
          text: "About half a minute for hot water to pass through the coffee under pressure.",
        },
        {
          value: "1 : 2",
          label: "The ratio",
          text: "For 18 g of coffee, about 36 g of espresso in the cup. Not too short, not too diluted.",
        },
      ],
    },
    gallery: {
      eyebrow: "Day to day",
      title: "The café, in five pictures.",
      label: "Photos of the café",
      items: [
        {
          title: "The counter",
          meta: "7:30 am",
          image: {
            src: IMG.counter,
            alt: "Steamed milk poured into a white cup as a latte art pattern takes shape, the cup held in one hand at the counter.",
          },
        },
        {
          title: "Latte art",
          meta: "Every cup",
          image: {
            src: IMG.art,
            alt: "Two cups of coffee with a leaf pattern in the milk, on a wooden tray.",
          },
        },
        {
          title: "The beans",
          meta: "Roasted in the region",
          image: {
            src: IMG.beans,
            alt: "A close-up pile of roasted coffee beans.",
          },
        },
        {
          title: "The pastries",
          meta: "Baked daily",
          image: {
            src: IMG.pastries,
            alt: "Two golden croissants dusted with powdered sugar on a dark table.",
          },
        },
        {
          title: "The room",
          meta: "Tables and stools",
          image: {
            src: IMG.hall,
            alt: "An empty café room under a wooden slat ceiling, with round tables, stools, potted plants and a bare tree hung with baubles.",
          },
        },
      ],
    },
    commitments: {
      eyebrow: "Our commitments",
      title: "Do it well, without overdoing it.",
      items: [
        {
          icon: "leaf",
          title: "Seasonal produce",
          text: "Fruit, vegetables and herbs follow the market: the lunch menu changes with the seasons.",
        },
        {
          icon: "recycle",
          title: "Less waste",
          text: "Real dishes rather than disposables when you stay, a discount for your own cup, and used coffee grounds collected for compost.",
        },
        {
          icon: "coffee",
          title: "A roaster from the region",
          text: "Our beans come from a nearby artisan roaster, with origins picked at each harvest.",
        },
        {
          icon: "accessibility",
          title: "A place for everyone",
          text: "Step-free entrance, high chair, dogs welcome and prices posted without surprises.",
        },
      ],
    },
    closing: {
      title: "Come taste the difference.",
      text: "One espresso at the counter is enough to get an idea.",
    },
  },
  infos: {
    hero: {
      eyebrow: "Visitor info",
      title: "Drop by, or invite us over.",
      description:
        "Opening hours, directions, and a two-minute request to book the café or order for a group.",
      image: {
        src: IMG.window,
        alt: "A round table by a large window, with a French press and two cups.",
      },
    },
    hours: {
      title: "Opening hours",
      rows: [
        { day: "Monday", time: "7:30 am – 6 pm" },
        { day: "Tuesday", time: "7:30 am – 6 pm" },
        { day: "Wednesday", time: "7:30 am – 6 pm" },
        { day: "Thursday", time: "7:30 am – 6 pm" },
        { day: "Friday", time: "7:30 am – 6 pm" },
        { day: "Saturday", time: "8:30 am – 6:30 pm" },
        { day: "Sunday", time: "9 am – 5 pm" },
      ],
      note: "Kitchen open from 11:30 am to 3 pm. Last order 15 minutes before closing.",
    },
    address: {
      title: "Address and contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
    access: {
      title: "Getting here",
      items: [
        {
          icon: "bus-front",
          title: "By public transport",
          text: "A bus stop and a bike-share station are less than a 3-minute walk away.",
        },
        {
          icon: "bike",
          title: "By bike",
          text: "Bike racks are set up in front of the door.",
        },
        {
          icon: "circle-parking",
          title: "By car",
          text: "A paid public car park is about 200 meters away.",
        },
        {
          icon: "accessibility",
          title: "Accessibility",
          text: "Step-free entrance, accessible restroom and room for strollers.",
        },
      ],
    },
    groups: {
      eyebrow: "Groups and private hire",
      title: "A party, a meeting, an order for the team?",
      description:
        "The café can be booked in the evening for up to 40 people. For a group, we prepare pastries, hot drinks and toasts.",
      points: [
        "Private hire of the café from 6 pm to 10 pm",
        "Orders for 8 people or more, with 3 days’ notice",
        "Reply within 48 hours",
      ],
      form: {
        title: "Your request",
        description:
          "A few lines are enough. Demo: no message is actually sent.",
        submit: "Send the request",
        name: "Name",
        email: "Email",
        phone: "Phone",
        type: {
          label: "Type of request",
          placeholder: "Choose one",
          options: [
            { value: "privatisation", label: "Private hire of the café" },
            { value: "groupe", label: "Group order" },
            { value: "autre", label: "Other request" },
          ],
        },
        guests: { label: "Number of people", placeholder: "For example 25" },
        date: "Preferred date",
        message: {
          label: "Message",
          placeholder: "Tell us what you have in mind.",
        },
      },
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type CoffeeShopPage = keyof CoffeeShopCopy["meta"];

export const coffeeShop: TemplateDefinition<"coffee-shop", CoffeeShopCopy> = {
  slug: "coffee-shop",
  /**
   * Palette : fond crème chaud, encre brun espresso très foncé, bleu cobalt
   * franc en accent (il tranche avec le brun et le crème, et sort du cliché
   * terracotta des cafés), inverse brun espresso. Affichage Inter en graisses
   * 800 à 900 (posées par le shell), ombres franches et rayons larges.
   */
  theme: {
    surface: "oklch(0.962 0.022 85)",
    raised: "oklch(0.988 0.01 85)",
    ink: "oklch(0.2 0.035 50)",
    inkMuted: "color-mix(in oklch, var(--tpl-ink) 74%, var(--tpl-surface))",
    line: "color-mix(in oklch, var(--tpl-ink) 18%, transparent)",
    accent: "oklch(0.47 0.19 264)",
    accentInk: "oklch(0.988 0.01 85)",
    inverse: "oklch(0.19 0.035 50)",
    inverseInk: "oklch(0.95 0.025 85)",
    radius: "1rem",
    radiusPill: "9999px",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    shadowSm: "0 2px 0 0 color-mix(in oklch, var(--tpl-ink) 22%, transparent)",
    shadowLg: "6px 6px 0 0 var(--tpl-ink)",
  },
  paths: {
    home: "/coffee-shop",
    carte: "/coffee-shop/carte",
    aPropos: "/coffee-shop/a-propos",
    infos: "/coffee-shop/infos",
  },
  copy: { fr, en },
};
