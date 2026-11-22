import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « agent-immobilier » (agent immobilier indépendant fictif « Votre
 * entreprise » : une seule personne, pas une agence).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/agent-immobilier/`)
 * n'ont aucun texte en dur. Le ton est celui de la première personne du
 * singulier : « je », jamais « notre équipe ».
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `AgentImmobilierCopy` (dérivé de `fr` par `WidenLiterals`). Une clé manquante
 * ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais, résolue par `ICONS` (`parts.tsx`).
 *
 * Contenu fictif : aucune ville réelle, aucun nom, aucune étiquette
 * énergétique, aucun numéro de carte professionnelle (« à compléter »). Les
 * honoraires et les prix sont des exemples de démonstration.
 *
 * Images : sources libres de droits (Unsplash), sans visage, sans enseigne
 * lisible. Les `alt` sont dans la copie, traduits.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: unsplash("1600607687920-4e2a09cf159d"),
  flat: unsplash("1560448204-603b3fc33ddc"),
  loft: unsplash("1560448204-e02f11c3d0e2"),
  villa: unsplash("1523217582562-09d0def993a6"),
  timber: unsplash("1706808849777-96e0d7be3bb7"),
  family: unsplash("1560185127-6ed189bf02f4"),
  studio: unsplash("1513694203232-719a280e022f"),
  calm: unsplash("1522771739844-6a9f6d5f14af"),
  kitchen: unsplash("1507089947368-19c1da9775ae"),
  salon: unsplash("1585128792020-803d29415281"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Agent immobilier indépendant",
  },
  phone: {
    href: "tel:+33199000052",
    label: "01 99 00 00 52",
  },
  nav: {
    home: "Accueil",
    biens: "Biens",
    estimation: "Estimation",
    contact: "Contact",
  },
  cta: {
    estimate: "Demander une estimation offerte",
    estimateShort: "Estimation",
    call: "M’appeler",
    callShort: "Appeler",
    seeSelection: "Voir ma sélection",
    seeAllListings: "Voir toute la sélection",
    describeSearch: "Décrire ma recherche",
    askVisit: "Demander la visite",
    writeToMe: "Écrivez-moi",
  },
  common: {
    email: "contact@votre-entreprise.example",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    zone: {
      label: "Secteur",
      text: "Votre ville et les communes voisines, dans un rayon d’environ 20 km.",
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
      text: "Je réponds moi-même, en général dans la journée. Vous ne parlerez à personne d’autre.",
    },
  },
  footer: {
    title: "Un agent, un interlocuteur, une sélection courte.",
    text: "J’accompagne vendeurs et acquéreurs, seul, du premier rendez-vous à la signature de l’acte.",
    contactLabel: "Contact",
    proCard: "Carte professionnelle : à compléter",
    demoNotice: "Biens, prix et avis fictifs, pour la démonstration.",
    barLabel: "Accès rapide",
  },
  meta: {
    home: {
      title: "Votre entreprise - Agent immobilier indépendant",
      description:
        "Un agent immobilier indépendant, un seul interlocuteur : estimation offerte, sélection courte de biens et accompagnement jusqu’à la signature, pour vendeurs et acquéreurs.",
    },
    biens: {
      title: "Biens - Votre entreprise",
      description:
        "Ma sélection de biens : dix au plus à la fois, tous visités par moi, avec mon avis franc, les surfaces et les prix.",
    },
    estimation: {
      title: "Estimation - Votre entreprise",
      description:
        "Estimation offerte de votre bien : visite, comparaison argumentée et avis de valeur écrit sous 48 heures. Formulaire de démonstration.",
    },
    contact: {
      title: "Contact - Votre entreprise",
      description:
        "Contactez votre agent immobilier indépendant : formulaire de démonstration, coordonnées fictives, disponibilités et secteur.",
    },
  },
  home: {
    hero: {
      eyebrow: "Agent immobilier indépendant",
      title: "Un seul contact, de la visite à la signature.",
      description:
        "Je travaille seul, et c’est voulu : c’est moi qui estime, moi qui présente, moi qui négocie, et moi que vous appelez le jour de la signature. Pas d’équipe qui se relaie, pas de dossier qui change de mains.",
      image: {
        src: IMG.hero,
        alt: "Une salle à manger claire avec une table noire, des chaises grises, un bouquet et une grande baie vitrée.",
      },
      facts: [
        {
          value: "48 h",
          label: "pour vous remettre un avis de valeur écrit après ma visite",
        },
        {
          value: "10",
          label: "biens au plus à la fois, pour ne pas disperser mon attention",
        },
        {
          value: "1",
          label:
            "interlocuteur, du premier appel jusqu’au rendez-vous chez le notaire",
        },
      ],
    },
    offer: {
      eyebrow: "Mon accompagnement",
      title: "Deux projets, une même façon de travailler.",
      description:
        "Que vous vendiez ou que vous cherchiez, je commence par écouter, je dis ce que je pense avec des chiffres, et je ne promets que ce que je peux tenir.",
      sellers: {
        icon: "house",
        title: "Si vous vendez",
        text: "Je viens voir le bien, je vous donne un avis de valeur argumenté, puis je m’occupe des photos, de l’annonce et des visites.",
        points: [
          "Estimation offerte, sans engagement",
          "Photos et annonce préparées par mes soins",
          "Visites avec des acquéreurs que j’ai rencontrés avant",
          "Compte rendu après chaque visite",
        ],
        cta: "Estimer mon bien",
      },
      buyers: {
        icon: "key-round",
        title: "Si vous achetez",
        text: "Vous me dites ce que vous cherchez, et je vous propose peu de biens : tous visités par moi avant vous, avec ce qui va et ce qui coince.",
        points: [
          "Un entretien pour cerner vos critères et votre budget",
          "Une sélection courte, commentée sans enjolivures",
          "De l’aide pour comparer, négocier et monter le dossier",
          "Une recherche discrète si le bien n’est pas annoncé",
        ],
        cta: "Voir ma sélection",
      },
    },
    method: {
      eyebrow: "De bout en bout",
      title: "Cinq étapes, et le même visage du début à la fin.",
      description:
        "Chaque projet suit le même fil. Je vous dis à chaque étape où nous en sommes et ce qui vient ensuite.",
      steps: [
        {
          icon: "coffee",
          title: "Nous nous rencontrons",
          text: "Un café ou une visite : vous me racontez votre projet, je note vos contraintes et vos délais.",
        },
        {
          icon: "ruler",
          title: "J’estime ou je cherche",
          text: "Un avis de valeur argumenté, ou une première sélection de biens, avec des chiffres que je sais expliquer.",
        },
        {
          icon: "camera",
          title: "Je prépare",
          text: "Photos, annonce et dossier côté vendeur ; critères affinés et visites planifiées côté acquéreur.",
        },
        {
          icon: "handshake",
          title: "Je présente et je négocie",
          text: "Je conduis les visites, je relaie les offres et je défends votre position sans vous mettre la pression.",
        },
        {
          icon: "file-check",
          title: "J’accompagne jusqu’à l’acte",
          text: "Pièces à réunir, échanges avec le notaire, dernier rendez-vous : je reste à vos côtés jusqu’aux clés.",
        },
      ],
    },
    selection: {
      eyebrow: "En ce moment",
      title: "Quelques biens que je présente.",
      description:
        "Je ne garde que dix biens à la fois. En voici quatre : touchez ou survolez un bien pour le découvrir.",
      label: "Biens de ma sélection",
      items: [
        {
          title: "Trois-pièces lumineux",
          meta: "3 pièces · 68 m² · 289 000 €",
          image: {
            src: IMG.flat,
            alt: "Un séjour clair avec un canapé beige, deux lampadaires à trépied, deux tabourets à housse blanche, une table basse en bois sur un tapis blanc et un grand tableau abstrait bleu.",
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
    proof: {
      eyebrow: "Avis",
      title: "Ce que disent ceux que j’ai accompagnés.",
      description:
        "Note moyenne de 4,8 sur 5, d’après les avis laissés après la vente ou l’achat.",
      label: "Avis de vendeurs et d’acquéreurs",
      items: [
        {
          quote:
            "Un seul numéro à appeler du début à la fin. Il m’a dit franchement que mon prix de départ était trop haut, et il avait raison.",
          name: "Claire M.",
          detail: "Vendeuse, appartement",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Trois biens proposés, trois biens visités, et le deuxième était le bon. Pas de liste interminable à trier.",
          name: "Julien P.",
          detail: "Acquéreur, première acquisition",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Les comptes rendus après chaque visite m’ont évité bien des incertitudes. On savait toujours où on en était.",
          name: "Sophie L.",
          detail: "Vendeuse, maison",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Il a négocié sans jamais nous presser. Le jour de la signature, c’était la même voix qu’au premier appel.",
          name: "Thomas R.",
          detail: "Acquéreur, maison",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Mon bien est resté en vente un peu plus longtemps que prévu, mais je n’ai jamais eu à relancer personne.",
          name: "Nadia B.",
          detail: "Vendeuse, appartement",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "Une recherche discrète pour un bien jamais annoncé. Je n’y croyais pas, et pourtant.",
          name: "Hugo D.",
          detail: "Acquéreur, recherche discrète",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
      ],
    },
    promise: {
      quote:
        "Je préfère peu de dossiers, suivis de près, à un portefeuille où personne ne vous rappelle.",
      text: "C’est la raison pour laquelle je plafonne ma sélection à dix biens, et pourquoi chaque visite est préparée à l’avance.",
      signature: "Votre entreprise, agent immobilier indépendant",
      image: {
        src: IMG.calm,
        alt: "Une chambre calme et sobre : un lit en lin blanc, des coussins bleus, une table de chevet blanche et bois et une lampe allumée.",
      },
      cta: "Écrivez-moi",
    },
  },
  biens: {
    hero: {
      eyebrow: "Ma sélection",
      title: "Dix biens au plus, tous visités par moi.",
      description:
        "Je ne publie pas tout ce qui existe : seulement des biens que j’ai vus, mesurés et que je peux défendre. Chaque fiche dit ce qui plaît, et ce qui demande réflexion.",
      checks: {
        title: "Dans chaque fiche",
        items: [
          "La visite a été faite par moi",
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
      opinionLabel: "Mon avis",
      items: [
        {
          image: {
            src: IMG.flat,
            alt: "Un séjour clair avec un canapé beige, deux lampadaires à trépied, deux tabourets à housse blanche, une table basse en bois sur un tapis blanc et un grand tableau abstrait bleu.",
          },
          kind: "Appartement",
          status: "Nouveau",
          title: "Trois-pièces lumineux",
          place: "Centre de Votre ville",
          specs: ["68 m²", "3 pièces", "2 chambres"],
          price: "289 000 €",
          opinion:
            "Un séjour sobre et très clair, facile à meubler. La moquette est à remplacer, comptez-le dans votre budget.",
        },
        {
          image: {
            src: IMG.villa,
            alt: "Une maison contemporaine aux murs blancs, avec un jardin en pelouse et un grand arbre.",
          },
          kind: "Maison",
          status: "Visites en cours",
          title: "Maison blanche et son jardin",
          place: "Quartier résidentiel",
          specs: ["160 m²", "6 pièces", "4 chambres"],
          price: "585 000 €",
          opinion:
            "Les volumes sont rares dans ce secteur. Le chauffage est ancien : j’ai un devis pour vous.",
        },
        {
          image: {
            src: IMG.family,
            alt: "Un séjour ouvert sur la cuisine, avec un canapé gris-beige, un fauteuil en cuir brun, une table basse en bois et un comptoir à tabourets.",
          },
          kind: "Appartement",
          status: "Sous compromis",
          title: "Trois-pièces familial",
          place: "Près des écoles",
          specs: ["74 m²", "3 pièces", "2 chambres"],
          price: "312 000 €",
          opinion:
            "Pensé pour une famille : cuisine ouverte, rangements, deux vraies chambres.",
        },
        {
          image: {
            src: IMG.loft,
            alt: "Un salon lumineux avec deux fauteuils, de grandes fenêtres et un séjour ouvert avec cheminée en arrière-plan.",
          },
          kind: "Appartement",
          status: "Nouveau",
          title: "Quatre-pièces lumineux",
          place: "Quartier résidentiel",
          specs: ["118 m²", "4 pièces", "3 chambres"],
          price: "438 000 €",
          opinion:
            "De beaux volumes et beaucoup de lumière. Je vous dis aussi ce qui reste à rafraîchir.",
        },
        {
          image: {
            src: IMG.timber,
            alt: "Une maison contemporaine à façade de lattes de bois et de pierre, avec une entrée vitrée et une pelouse.",
          },
          kind: "Maison",
          status: "Visites en cours",
          title: "Maison de bois et de verre",
          place: "En lisière de Votre ville",
          specs: ["142 m²", "5 pièces", "3 chambres"],
          price: "512 000 €",
          opinion:
            "Une construction récente et soignée. L’orientation du jardin est son meilleur atout.",
        },
        {
          image: {
            src: IMG.studio,
            alt: "Un coin séjour minimaliste avec un petit canapé noir, une commode blanche, une plante et un lampadaire.",
          },
          kind: "Studio",
          status: "Pour investisseur",
          title: "Studio clair, bien situé",
          place: "Près de la gare",
          specs: ["29 m²", "1 pièce", "Coin séjour"],
          price: "139 000 €",
          opinion:
            "Facile à louer, charges raisonnables. Je vous donne mon calcul de rentabilité, avec ses limites.",
        },
      ],
    },
    visit: {
      eyebrow: "Une visite avec moi",
      title: "Trente à quarante-cinq minutes, sans pression.",
      description:
        "Je prépare chaque visite à l’avance, et je ne vous presse jamais pour décider.",
      steps: [
        {
          icon: "file-text",
          title: "Avant",
          text: "Je vous envoie la fiche complète, mes réserves et les questions à se poser.",
        },
        {
          icon: "door-open",
          title: "Pendant",
          text: "Vous regardez, vous posez vos questions, je ne vous vante rien que je ne puisse montrer.",
        },
        {
          icon: "phone-call",
          title: "Après",
          text: "Je vous appelle le jour même pour parler chiffres, travaux et prochaines étapes.",
        },
      ],
    },
    search: {
      eyebrow: "Recherche discrète",
      title: "Le bien que vous cherchez n’est peut-être pas annoncé.",
      text: "Dites-moi ce que vous voulez : je parle aux propriétaires que je connais avant que le bien n’apparaisse en ligne.",
      criteria: [
        "Type de bien et surface souhaitée",
        "Quartier ou secteur préféré",
        "Budget et apport",
        "Calendrier de votre projet",
      ],
    },
  },
  estimation: {
    hero: {
      eyebrow: "Estimation offerte",
      title: "Que vaut votre bien ? Une visite pour le dire.",
      description:
        "Une estimation sérieuse se fait sur place, pas depuis un formulaire. Je visite, je compare avec les ventes récentes du secteur et je vous remets un avis de valeur écrit.",
      points: [
        "Offerte et sans engagement de vendre",
        "Avis écrit sous 48 heures après la visite",
        "Un avis de valeur, pas une expertise : je vous explique la différence",
      ],
      image: {
        src: IMG.kitchen,
        alt: "Une cuisine blanche et lumineuse avec un îlot, des tabourets noirs et des suspensions.",
      },
    },
    form: {
      title: "Demander mon estimation",
      intro:
        "Quelques informations suffisent. Je vous rappelle pour fixer la visite.",
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
        commune: "Commune",
        timing: "Votre délai",
        timingPlaceholder: "Choisir",
        timings: [
          { value: "vite", label: "Dès que possible" },
          { value: "3-mois", label: "Dans les 3 mois" },
          { value: "annee", label: "Dans l’année" },
          { value: "renseigne", label: "Je me renseigne" },
        ],
        message: "Ce que je dois savoir (travaux, occupation, calendrier…)",
      },
    },
    method: {
      eyebrow: "Comment je procède",
      title: "Trois temps, et vous gardez la main.",
      description:
        "Vous recevez mon avis, vous décidez. Rien ne vous engage à vendre.",
      steps: [
        {
          icon: "door-open",
          title: "La visite",
          text: "Quarante-cinq minutes chez vous : je regarde, je mesure, je pose des questions sur l’histoire du bien.",
        },
        {
          icon: "scale",
          title: "La comparaison",
          text: "Je compare avec des ventes récentes et des biens en vente dans le secteur, et je retiens les plus proches.",
        },
        {
          icon: "file-text",
          title: "L’avis écrit",
          text: "Sous 48 heures : une fourchette de prix, la justification, et le prix de présentation que je vous conseille.",
        },
      ],
    },
    content: {
      eyebrow: "Dans mon avis de valeur",
      title: "Ce que vous trouverez dans le document.",
      description:
        "Pas une simple fourchette. Un document que vous pouvez relire, discuter et montrer à vos proches.",
      items: [
        {
          icon: "bar-chart",
          title: "Les ventes comparables",
          text: "Les biens proches vendus récemment, et pourquoi je les retiens ou les écarte.",
        },
        {
          icon: "thumbs-up",
          title: "Atouts et réserves",
          text: "Ce qui valorise votre bien, et ce qu’un acquéreur va relever.",
        },
        {
          icon: "tag",
          title: "Un prix de présentation",
          text: "Le prix auquel je conseille de commencer, avec la marge que je prévois.",
        },
        {
          icon: "calendar",
          title: "Un calendrier réaliste",
          text: "Les délais habituels pour un bien comparable, sans promesse de date de vente.",
        },
      ],
    },
    fees: {
      eyebrow: "Mes honoraires",
      title: "Ce que je facture, en clair.",
      description: "Mes honoraires, par type de mission.",
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
              detail: "Entretien, biens visités par moi",
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
      title: "Ce qu’on me demande avant de se lancer.",
      items: [
        {
          question: "L’estimation m’engage-t-elle à vendre ?",
          answer:
            "Non. Vous recevez mon avis, vous prenez le temps de réfléchir, et vous décidez ensuite, ou pas.",
        },
        {
          question: "Pourquoi une visite plutôt qu’un simulateur ?",
          answer:
            "Un simulateur ne voit ni la lumière, ni l’état des finitions, ni le voisinage. Ce sont pourtant ces détails qui font varier le prix.",
        },
        {
          question: "Combien de temps dure la démarche ?",
          answer:
            "Compter quarante-cinq minutes de visite, puis mon avis écrit dans les 48 heures qui suivent.",
        },
        {
          question: "Dois-je préparer des documents ?",
          answer:
            "Pas pour la visite. Si vous décidez de vendre, je vous donnerai la liste des pièces à réunir, étape par étape.",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Parlons de votre projet, sans intermédiaire.",
      description:
        "Vendre, acheter, estimer ou simplement poser une question : écrivez-moi, je réponds moi-même.",
    },
    form: {
      title: "Écrivez-moi",
      intro: "Je réponds en général dans la journée, sinon le lendemain matin.",
      submit: "Envoyer mon message",
      fields: {
        name: "Nom et prénom",
        phone: "Téléphone",
        email: "E-mail",
        project: "Votre projet",
        projectPlaceholder: "Choisir",
        projects: [
          { value: "vendre", label: "Je vends" },
          { value: "acheter", label: "J’achète" },
          { value: "estimer", label: "Je souhaite une estimation" },
          { value: "autre", label: "Autre demande" },
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
      access: "Rendez-vous chez vous, ou à mon bureau sur rendez-vous.",
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
          title: "Je lis, je note",
          text: "Votre message ne passe par aucun intermédiaire : je le lis moi-même.",
        },
        {
          icon: "phone-call",
          title: "Je vous rappelle",
          text: "Au créneau que vous avez indiqué, pour un premier échange de dix à quinze minutes.",
        },
        {
          icon: "calendar-check",
          title: "Nous fixons un rendez-vous",
          text: "Chez vous, à mon bureau ou par téléphone, selon votre projet.",
        },
      ],
    },
  },
} as const;

export type AgentImmobilierCopy = WidenLiterals<typeof fr>;
export type AgentImmobilierIconKey = TemplateIconKey<AgentImmobilierCopy>;

const en: AgentImmobilierCopy = {
  brand: {
    name: "Your business",
    tagline: "Independent real estate agent",
  },
  phone: {
    href: "tel:+33199000052",
    label: "01 99 00 00 52",
  },
  nav: {
    home: "Home",
    biens: "Properties",
    estimation: "Home value",
    contact: "Contact",
  },
  cta: {
    estimate: "Request a free home value estimate",
    estimateShort: "Estimate",
    call: "Call me",
    callShort: "Call",
    seeSelection: "See my selection",
    seeAllListings: "See the full selection",
    describeSearch: "Describe my search",
    askVisit: "Request a showing",
    writeToMe: "Write to me",
  },
  common: {
    email: "contact@example.com",
    address: "12 Example Street, 00000 Your city",
    zone: {
      label: "Area",
      text: "Your city and the neighboring towns, within about 12 miles.",
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
      text: "I answer myself, usually the same day. You will not be passed to anyone else.",
    },
  },
  footer: {
    title: "One agent, one contact, a short selection.",
    text: "I support sellers and buyers on my own, from the first meeting to closing.",
    contactLabel: "Contact",
    proCard: "Professional license: to be completed",
    demoNotice:
      "Properties, prices and reviews are fictional, for demonstration.",
    barLabel: "Quick access",
  },
  meta: {
    home: {
      title: "Your business - Independent real estate agent",
      description:
        "An independent real estate agent and a single point of contact: free home value estimate, a short selection of properties and support through to closing, for sellers and buyers.",
    },
    biens: {
      title: "Properties - Your business",
      description:
        "My selection of properties: ten at most at a time, each one visited by me, with my frank opinion, floor areas and prices.",
    },
    estimation: {
      title: "Home value - Your business",
      description:
        "A free home value estimate of your property: a visit, a reasoned comparison and a written market analysis within 48 hours. Demo form.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Contact your independent real estate agent: demo form, fictional contact details, availability and area covered.",
    },
  },
  home: {
    hero: {
      eyebrow: "Independent real estate agent",
      title: "One contact, from the first showing to closing.",
      description:
        "I work alone, and that is deliberate: I price, I present, I negotiate, and you call me on closing day. No team taking turns, no client passed from one person to the next.",
      image: {
        src: IMG.hero,
        alt: "A bright dining room with a black table, gray chairs, a bouquet and a large glass wall.",
      },
      facts: [
        {
          value: "48 h",
          label: "to hand you a written market analysis after my visit",
        },
        {
          value: "10",
          label:
            "properties at most at a time, so my attention is not scattered",
        },
        {
          value: "1",
          label: "point of contact, from the first call to closing day",
        },
      ],
    },
    offer: {
      eyebrow: "How I help",
      title: "Two projects, one way of working.",
      description:
        "Whether you are selling or searching, I start by listening, I tell you what I think with numbers, and I only promise what I can deliver.",
      sellers: {
        icon: "house",
        title: "If you are selling",
        text: "I come to see the property, give you a reasoned market analysis, then handle the photos, the listing and the showings.",
        points: [
          "Free home value estimate, no commitment",
          "Photos and listing prepared by me",
          "Showings with buyers I have met beforehand",
          "A report after every showing",
        ],
        cta: "Get my home’s value",
      },
      buyers: {
        icon: "key-round",
        title: "If you are buying",
        text: "You tell me what you are looking for, and I suggest only a few properties: each visited by me before you, with what works and what does not.",
        points: [
          "An interview to pin down your criteria and budget",
          "A short selection, commented without embellishment",
          "Help comparing, negotiating and putting together your loan application",
          "A discreet search if the property is not advertised",
        ],
        cta: "See my selection",
      },
    },
    method: {
      eyebrow: "End to end",
      title: "Five steps, and the same face from start to finish.",
      description:
        "Every project follows the same thread. At each step I tell you where we stand and what comes next.",
      steps: [
        {
          icon: "coffee",
          title: "We meet",
          text: "A coffee or a showing: you tell me about your project, and I note your constraints and deadlines.",
        },
        {
          icon: "ruler",
          title: "I price or I search",
          text: "A reasoned market analysis, or a first selection of properties, with numbers I can explain.",
        },
        {
          icon: "camera",
          title: "I prepare",
          text: "Photos, listing and paperwork for sellers; refined criteria and scheduled showings for buyers.",
        },
        {
          icon: "handshake",
          title: "I present and negotiate",
          text: "I run the showings, relay the offers and defend your position without pressuring you.",
        },
        {
          icon: "file-check",
          title: "I see it through to closing",
          text: "Documents to gather, exchanges with the closing attorney, the last appointment: I stay by your side until the keys.",
        },
      ],
    },
    selection: {
      eyebrow: "Right now",
      title: "A few properties I am presenting.",
      description:
        "I keep only ten properties at a time. Here are four: tap or hover over one to see it.",
      label: "Properties in my selection",
      items: [
        {
          title: "Bright three-room apartment",
          meta: "3 rooms · 735 sq ft · €289,000",
          image: {
            src: IMG.flat,
            alt: "A bright living room with a beige sofa, two tripod floor lamps, two white fleece-covered stools, a wood coffee table on a white rug and a large blue abstract painting.",
          },
        },
        {
          title: "White house and its yard",
          meta: "6 rooms · 1,720 sq ft · €585,000",
          image: {
            src: IMG.villa,
            alt: "A contemporary house with white walls, a grassy yard and a large tree.",
          },
        },
        {
          title: "Family three-room apartment",
          meta: "3 rooms · 800 sq ft · €312,000",
          image: {
            src: IMG.family,
            alt: "A living room open to the kitchen, with a gray-beige sofa, a brown leather armchair, a wood coffee table and a breakfast bar with stools.",
          },
        },
        {
          title: "Bright four-room apartment",
          meta: "4 rooms · 1,270 sq ft · €438,000",
          image: {
            src: IMG.loft,
            alt: "A bright living room with two armchairs, large windows and an open living area with a fireplace in the background.",
          },
        },
      ],
      cta: "See the full selection",
    },
    proof: {
      eyebrow: "Reviews",
      title: "What the people I have worked with say.",
      description:
        "Average rating of 4.8 out of 5, based on reviews left after the sale or the purchase.",
      label: "Reviews from sellers and buyers",
      items: [
        {
          quote:
            "One number to call from start to finish. He told me frankly that my starting price was too high, and he was right.",
          name: "Claire M.",
          detail: "Seller, apartment",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Three properties suggested, three visited, and the second was the right one. No endless list to sort through.",
          name: "Julien P.",
          detail: "Buyer, first purchase",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "The reports after each showing spared me a lot of uncertainty. We always knew where we stood.",
          name: "Sophie L.",
          detail: "Seller, house",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "He negotiated without ever rushing us. On closing day, it was the same voice as on the first call.",
          name: "Thomas R.",
          detail: "Buyer, house",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "My property stayed on the market a little longer than planned, but I never had to chase anyone.",
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
      quote:
        "I prefer a few clients, closely followed, to a long client list where nobody calls you back.",
      text: "That is why I cap my selection at ten properties, and why every showing is prepared in advance.",
      signature: "Your business, independent real estate agent",
      image: {
        src: IMG.calm,
        alt: "A calm, plain bedroom: a bed with white linen, blue cushions, a white and wood nightstand and a lit lamp.",
      },
      cta: "Write to me",
    },
  },
  biens: {
    hero: {
      eyebrow: "My selection",
      title: "Ten properties at most, each one visited by me.",
      description:
        "I do not publish everything that exists: only properties I have seen, measured and can stand behind. Each listing says what appeals, and what calls for thought.",
      checks: {
        title: "In every listing",
        items: [
          "I toured the property myself",
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
      opinionLabel: "My opinion",
      items: [
        {
          image: {
            src: IMG.flat,
            alt: "A bright living room with a beige sofa, two tripod floor lamps, two white fleece-covered stools, a wood coffee table on a white rug and a large blue abstract painting.",
          },
          kind: "Apartment",
          status: "New",
          title: "Bright three-room apartment",
          place: "Downtown Your city",
          specs: ["735 sq ft", "3 rooms", "2 bedrooms"],
          price: "€289,000",
          opinion:
            "A plain, very bright living room, easy to furnish. The carpet needs replacing, so factor it into your budget.",
        },
        {
          image: {
            src: IMG.villa,
            alt: "A contemporary house with white walls, a grassy yard and a large tree.",
          },
          kind: "House",
          status: "Showings under way",
          title: "White house and its yard",
          place: "Residential area",
          specs: ["1,720 sq ft", "6 rooms", "4 bedrooms"],
          price: "€585,000",
          opinion:
            "Rooms this big are rare in this area. The heating system is old: I have an estimate for you.",
        },
        {
          image: {
            src: IMG.family,
            alt: "A living room open to the kitchen, with a gray-beige sofa, a brown leather armchair, a wood coffee table and a breakfast bar with stools.",
          },
          kind: "Apartment",
          status: "Pending",
          title: "Family three-room apartment",
          place: "Near the schools",
          specs: ["800 sq ft", "3 rooms", "2 bedrooms"],
          price: "€312,000",
          opinion:
            "Designed for a family: open kitchen, storage, two real bedrooms.",
        },
        {
          image: {
            src: IMG.loft,
            alt: "A bright living room with two armchairs, large windows and an open living area with a fireplace in the background.",
          },
          kind: "Apartment",
          status: "New",
          title: "Bright four-room apartment",
          place: "Residential area",
          specs: ["1,270 sq ft", "4 rooms", "3 bedrooms"],
          price: "€438,000",
          opinion:
            "Generous rooms and plenty of light. I will also tell you what still needs freshening up.",
        },
        {
          image: {
            src: IMG.timber,
            alt: "A contemporary house with a slatted wood and stone facade, a glazed entrance and a lawn.",
          },
          kind: "House",
          status: "Showings under way",
          title: "Wood and glass house",
          place: "Edge of Your city",
          specs: ["1,530 sq ft", "5 rooms", "3 bedrooms"],
          price: "€512,000",
          opinion:
            "A recent, careful build. The orientation of the yard is its best asset.",
        },
        {
          image: {
            src: IMG.studio,
            alt: "A minimalist living corner with a small black sofa, a white chest of drawers, a plant and a floor lamp.",
          },
          kind: "Studio",
          status: "For investors",
          title: "Bright studio, well located",
          place: "Near the station",
          specs: ["313 sq ft", "1 room", "Living nook"],
          price: "€139,000",
          opinion:
            "Easy to rent, reasonable monthly costs. I will share my yield calculation, with its limits.",
        },
      ],
    },
    visit: {
      eyebrow: "A showing with me",
      title: "Thirty to forty-five minutes, no pressure.",
      description:
        "I prepare every showing in advance, and I never rush you to decide.",
      steps: [
        {
          icon: "file-text",
          title: "Before",
          text: "I send you the full listing, my reservations and the questions to ask yourself.",
        },
        {
          icon: "door-open",
          title: "During",
          text: "You look, you ask questions, and I never praise anything I cannot show.",
        },
        {
          icon: "phone-call",
          title: "After",
          text: "I call you the same day to talk numbers, repairs and next steps.",
        },
      ],
    },
    search: {
      eyebrow: "Discreet search",
      title: "The property you want may not be advertised.",
      text: "Tell me what you want: I talk to the owners I know before the property appears online.",
      criteria: [
        "Type of property and desired floor area",
        "Preferred neighborhood or area",
        "Budget and down payment",
        "Timeline of your project",
      ],
    },
  },
  estimation: {
    hero: {
      eyebrow: "Free home value estimate",
      title: "What is your property worth? One visit will tell.",
      description:
        "A serious home value estimate is done on site, not from a form. I visit, compare with recent sales in the area and hand you a written market analysis.",
      points: [
        "Free, with no commitment to sell",
        "Written report within 48 hours of the visit",
        "A market analysis, not a formal appraisal: I explain the difference",
      ],
      image: {
        src: IMG.kitchen,
        alt: "A bright white kitchen with an island, black stools and pendant lights.",
      },
    },
    form: {
      title: "Request my estimate",
      intro: "A few details are enough. I will call you back to set the visit.",
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
        commune: "Town",
        timing: "Your timeframe",
        timingPlaceholder: "Choose",
        timings: [
          { value: "vite", label: "As soon as possible" },
          { value: "3-mois", label: "Within 3 months" },
          { value: "annee", label: "Within the year" },
          { value: "renseigne", label: "I am just looking into it" },
        ],
        message: "What I should know (repairs, occupancy, timing…)",
      },
    },
    method: {
      eyebrow: "How I work",
      title: "Three steps, and you stay in control.",
      description:
        "You receive my report, you decide. Nothing commits you to selling.",
      steps: [
        {
          icon: "door-open",
          title: "The visit",
          text: "Forty-five minutes at your home: I look, I measure, I ask about the property’s history.",
        },
        {
          icon: "scale",
          title: "The comparison",
          text: "I compare with recent sales and properties on the market in the area, and keep the closest ones.",
        },
        {
          icon: "file-text",
          title: "The written report",
          text: "Within 48 hours: a price range, the reasoning, and the asking price I recommend.",
        },
      ],
    },
    content: {
      eyebrow: "In my report",
      title: "What you will find in the document.",
      description:
        "Not just a range. A document you can reread, discuss and show to your family.",
      items: [
        {
          icon: "bar-chart",
          title: "Comparable sales",
          text: "Nearby properties sold recently, and why I keep or set them aside.",
        },
        {
          icon: "thumbs-up",
          title: "Strengths and reservations",
          text: "What adds value to your property, and what a buyer will notice.",
        },
        {
          icon: "tag",
          title: "An asking price",
          text: "The price I advise starting at, with the margin I expect.",
        },
        {
          icon: "calendar",
          title: "A realistic timeline",
          text: "Usual timeframes for a comparable property, with no promised sale date.",
        },
      ],
    },
    fees: {
      eyebrow: "My fees",
      title: "What I charge, in plain terms.",
      description: "My fees, by type of service.",
      note: "Sample rates, for illustration only.",
      groups: [
        {
          title: "Selling",
          items: [
            {
              name: "Home value estimate and market analysis",
              detail: "Visit, comparison, written report",
              price: "Free",
            },
            {
              name: "Full sales service",
              detail: "Photos, listing, showings, negotiation",
              price: "from 4%, tax included",
              note: "Paid by the seller",
            },
          ],
        },
        {
          title: "Buying",
          items: [
            {
              name: "Search and selection",
              detail: "Interview, properties visited by me",
              price: "Free",
            },
            {
              name: "Purchase support",
              detail: "Showings, negotiation, follow-up through closing",
              price: "from 3.5%, tax included",
              note: "Sample fees",
            },
          ],
        },
        {
          title: "Other requests",
          items: [
            {
              name: "Detailed market analysis",
              detail: "Estate division, wealth planning",
              price: "from €150",
              note: "By quote",
            },
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "What people ask before getting started.",
      items: [
        {
          question: "Does the estimate commit me to selling?",
          answer:
            "No. You receive my report, take your time to think, and decide afterward, or not.",
        },
        {
          question: "Why a visit rather than a simulator?",
          answer:
            "A simulator sees neither the light, nor the finish, nor the neighborhood. Yet these details are what make the price vary.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Allow forty-five minutes for the visit, then my written report within the following 48 hours.",
        },
        {
          question: "Do I need to prepare documents?",
          answer:
            "Not for the visit. If you decide to sell, I will give you the list of documents to gather, step by step.",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Let’s talk about your project, with no middleman.",
      description:
        "Selling, buying, pricing or simply asking a question: write to me, I answer myself.",
    },
    form: {
      title: "Write to me",
      intro: "I usually answer the same day, otherwise the next morning.",
      submit: "Send my message",
      fields: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        project: "Your project",
        projectPlaceholder: "Choose",
        projects: [
          { value: "vendre", label: "I am selling" },
          { value: "acheter", label: "I am buying" },
          { value: "estimer", label: "I would like a home value estimate" },
          { value: "autre", label: "Other request" },
        ],
        time: "Best time to reach you",
        timePlaceholder: "Choose",
        times: [
          { value: "matin", label: "In the morning" },
          { value: "midi", label: "Around lunchtime" },
          { value: "soir", label: "In the evening" },
        ],
        message: "Your message",
      },
    },
    details: {
      title: "Contact details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      access: "Meetings at your home, or at my office by appointment.",
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
          title: "I read and take notes",
          text: "Your message goes through no intermediary: I read it myself.",
        },
        {
          icon: "phone-call",
          title: "I call you back",
          text: "At the time you indicated, for a first conversation of ten to fifteen minutes.",
        },
        {
          icon: "calendar-check",
          title: "We set up a meeting",
          text: "At your home, at my office or by phone, depending on your project.",
        },
      ],
    },
  },
};

export const agentImmobilier: TemplateDefinition<
  "agent-immobilier",
  AgentImmobilierCopy
> = {
  slug: "agent-immobilier",
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
    home: "/agent-immobilier",
    biens: "/agent-immobilier/biens",
    estimation: "/agent-immobilier/estimation",
    contact: "/agent-immobilier/contact",
  },
  copy: { fr, en },
};
