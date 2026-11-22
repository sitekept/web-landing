import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « expert-comptable » (petit cabinet d'expertise comptable fictif
 * « Votre entreprise » : tenue, bilan, paie, création et conseil pour les
 * indépendants, les TPE et les associations).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/expert-comptable/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre (anglais US)
 * typée `ExpertComptableCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais ; les vues la résolvent avec la table
 * `Record<ExpertComptableIconKey, LucideIcon>` de
 * `src/templates/expert-comptable/parts.tsx`.
 *
 * Contenu : aucun taux, seuil, date réglementaire ni promesse fiscale ; aucun
 * nom d'ordre, de logiciel ou d'organisme. Honoraires fictifs, hors taxes,
 * « à partir de ». Les chiffres du tableau de bord de l'accueil sont un
 * exemple d'illustration, signalé comme tel.
 *
 * Images : Unsplash, bureaux, papiers et lumière sans texte lisible, écran
 * lisible, marque ni visage. Même URL dans les deux langues, seul le `alt`
 * se traduit.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

const IMG = {
  window: unsplash("1775513999069-318837c9b21b"),
  clock: unsplash("1616198814651-e71f960c3180"),
  calculator: unsplash("1709880945165-d2208c6ad2ec"),
  notebook: unsplash("1761322572550-967ea8c0bfd9"),
  paper: unsplash("1633000116224-4e872f873061"),
  light: unsplash("1644679268726-f605ce345a37"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Cabinet d’expertise comptable",
  },
  phone: {
    href: "tel:+33199000068",
    label: "01 99 00 00 68",
  },
  nav: {
    home: "Accueil",
    missions: "Missions",
    honoraires: "Honoraires",
    contact: "Contact",
  },
  cta: {
    call: "Appeler",
    quote: "Demander un devis",
    fees: "Voir les honoraires",
    missions: "Voir les missions",
    contact: "Nous contacter",
    allMissions: "Toutes les missions en détail",
  },
  mobile: {
    label: "Actions rapides",
  },
  common: {
    email: "contact@votre-entreprise.example",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    hoursLabel: "Horaires",
    hours: [
      { day: "Lundi au jeudi", time: "9 h-18 h" },
      { day: "Vendredi", time: "9 h-16 h" },
    ],
    registration: "Inscription professionnelle : à compléter",
    closing: {
      eyebrow: "Premier échange",
      title: "Parlons de vos comptes, sans engagement",
      text: "Décrivez-nous votre activité en quelques lignes : nous revenons vers vous avec une proposition écrite et un forfait clair.",
    },
  },
  footer: {
    text: "Cabinet d’expertise comptable pour les indépendants, les TPE et les associations : tenue, bilan, paie, création et conseil.",
    contactTitle: "Coordonnées",
    hoursTitle: "Horaires",
    legalTitle: "Mentions",
    demo: "Site de démonstration : honoraires et chiffres fictifs.",
  },
  meta: {
    home: {
      title: "Votre entreprise - Cabinet d’expertise comptable",
      description:
        "Petit cabinet d’expertise comptable pour indépendants, TPE et associations : tenue, bilan, paie, création et conseil, avec un forfait annoncé avant de commencer.",
    },
    missions: {
      title: "Missions - Votre entreprise",
      description:
        "Tenue comptable, bilan, paie, création d’entreprise et conseil : ce que le cabinet fait, ce qu’il vous demande et le rythme d’une année type.",
    },
    honoraires: {
      title: "Honoraires - Votre entreprise",
      description:
        "Forfaits mensuels et honoraires à partir de, hors taxes : ce qui est compris, comment le prix est fixé et les réponses aux questions fréquentes.",
    },
    contact: {
      title: "Contact - Votre entreprise",
      description:
        "Demandez un devis ou un premier échange : formulaire, téléphone, e-mail, horaires du cabinet et déroulé après votre message.",
    },
  },
  missions: {
    includesLabel: "Ce que cela comprend",
    items: [
      {
        icon: "book-open",
        code: "01",
        title: "Tenue comptable",
        summary:
          "Vos pièces sont enregistrées chaque mois, vos factures suivies, et vous recevez un tableau de bord lisible.",
        includes: [
          "Enregistrement de vos factures et relevés",
          "Rapprochement avec vos comptes bancaires",
          "Suivi des factures clients et fournisseurs",
          "Tableau de bord mensuel",
        ],
        from: "à partir de 89 € par mois",
      },
      {
        icon: "file-check",
        code: "02",
        title: "Bilan et comptes annuels",
        summary:
          "Révision des comptes de l’exercice, établissement des comptes annuels et rendez-vous pour les lire ensemble.",
        includes: [
          "Révision des écritures de l’exercice",
          "Établissement des comptes annuels",
          "Annexe et pièces de synthèse",
          "Rendez-vous de présentation",
        ],
        from: "à partir de 650 € par exercice",
      },
      {
        icon: "users",
        code: "03",
        title: "Paie",
        summary:
          "Bulletins de salaire et suivi de vos salariés, du premier contrat à la sortie, sans que vous ayez à y penser.",
        includes: [
          "Bulletins de salaire mensuels",
          "Entrée et sortie d’un salarié",
          "Suivi des absences et des congés",
          "Documents de fin de contrat",
        ],
        from: "à partir de 19 € par bulletin",
      },
      {
        icon: "sprout",
        code: "04",
        title: "Création d’entreprise",
        summary:
          "Un accompagnement pour poser les bases : budget de départ, prévisionnel, choix de la forme d’exercice et démarches.",
        includes: [
          "Entretien de cadrage du projet",
          "Budget de départ et plan de trésorerie",
          "Comparaison des formes d’exercice",
          "Aide aux démarches de création",
        ],
        from: "à partir de 490 €",
      },
      {
        icon: "compass",
        code: "05",
        title: "Conseil et pilotage",
        summary:
          "Des points de gestion à la demande, pour décider avec des chiffres : tableaux de bord, simulations, projets.",
        includes: [
          "Point de gestion d’une heure",
          "Tableaux de bord sur mesure",
          "Simulation d’un projet ou d’un recrutement",
          "Réponses écrites à vos questions",
        ],
        from: "à partir de 120 € l’heure",
      },
    ],
  },
  home: {
    hero: {
      eyebrow: "Cabinet d’expertise comptable",
      title: "Des comptes tenus au rythme de votre activité",
      description:
        "Un petit cabinet pour les indépendants, les TPE et les associations : tenue, bilan, paie, création et conseil, avec un forfait annoncé avant de commencer.",
      facts: [
        "Un interlocuteur unique pour votre dossier",
        "Un forfait écrit avant le premier mois",
        "Un premier échange gratuit, sans engagement",
      ],
      ledger: {
        title: "Situation du mois",
        caption: "Exemple fictif du tableau de bord remis chaque mois",
        columns: { label: "Poste", value: "Montant" },
        rows: [
          { label: "Solde de départ", value: "5 200 €" },
          { label: "Encaissements du mois", value: "+ 6 120 €" },
          { label: "Décaissements du mois", value: "− 2 860 €" },
        ],
        totalLabel: "Trésorerie en fin de mois",
        totalValue: "8 460 €",
        note: "Chiffres d’illustration, sans lien avec un dossier réel.",
      },
    },
    offer: {
      eyebrow: "Missions",
      title: "Cinq missions, un seul dossier",
      description:
        "Vous choisissez ce dont vous avez besoin : une tenue mensuelle, un bilan, la paie, ou un accompagnement ponctuel. Tout reste au même endroit.",
      codeLabel: "Mission",
    },
    proof: {
      eyebrow: "Ils nous confient leurs comptes",
      title: "Des chiffres que l’on comprend",
      description:
        "Trois clients, trois métiers. Prénoms et initiales fictifs : ce sont des avis d’exemple.",
      items: [
        {
          quote:
            "Je sais où j’en suis chaque mois, sans ouvrir un tableur. Quand j’ai une question, on me répond par écrit.",
          name: "Camille R.",
          detail: "Graphiste indépendante",
        },
        {
          quote:
            "La paie de mes deux salariés est réglée sans que j’y pense, et le point trimestriel me sert vraiment à décider.",
          name: "Hugo M.",
          detail: "Gérant d’un atelier de menuiserie",
        },
        {
          quote:
            "Les comptes de l’association sont enfin lisibles pour le bureau. L’assemblée a pu poser ses questions sereinement.",
          name: "Léa D.",
          detail: "Trésorière d’une association de quartier",
        },
      ],
    },
    handover: {
      eyebrow: "Qui fait quoi",
      title: "Vous gardez l’essentiel, nous tenons le reste",
      description:
        "Un échange simple et régulier : vous nous remettez vos pièces, nous vous remettons des comptes à jour.",
      give: {
        title: "Vous nous remettez",
        items: [
          "Vos factures et vos relevés du mois",
          "Vos contrats et pièces de paie",
          "Vos questions, par téléphone ou par écrit",
          "Vos décisions et vos projets",
        ],
      },
      receive: {
        title: "Vous recevez",
        items: [
          "Un tableau de bord chaque mois",
          "Des comptes à jour et expliqués",
          "Un rendez-vous de point régulier",
          "Un interlocuteur qui connaît votre dossier",
        ],
      },
      image: {
        src: IMG.window,
        alt: "Bureau près d’une grande fenêtre voilée, plante verte, lampe articulée et clavier, en lumière de matin",
      },
    },
  },
  missionsPage: {
    hero: {
      eyebrow: "Missions",
      title: "Ce que le cabinet fait pour vous",
      description:
        "Cinq missions, qui s’assemblent selon votre situation. Pour chacune : ce qui est fait, ce qui vous est demandé, et à partir de quel prix.",
      image: {
        src: IMG.calculator,
        alt: "Bureau avec une calculatrice posée sur des graphiques en papier, ordinateur portable et carnet en arrière-plan",
      },
    },
    list: {
      eyebrow: "Le registre des missions",
      title: "Cinq missions, du quotidien à l’exceptionnel",
      description:
        "Les prix sont des tarifs d’exemple, hors taxes. Le devis fixe le prix pour votre situation.",
    },
    calendar: {
      eyebrow: "Calendrier",
      title: "Le rythme d’une année type",
      description:
        "Un forfait mensuel suit un rythme régulier. Voici qui fait quoi, à chaque échéance.",
      columns: {
        period: "Échéance",
        we: "Nous faisons",
        you: "Vous nous transmettez",
        receive: "Vous recevez",
      },
      rows: [
        {
          period: "Chaque mois",
          we: "Enregistrement des pièces, rapprochement bancaire, suivi des factures",
          you: "Vos factures et vos relevés du mois",
          receive: "Le tableau de bord mensuel",
        },
        {
          period: "Chaque trimestre",
          we: "Point de situation, revue des écarts, mise à jour du prévisionnel",
          you: "Vos questions et vos projets du trimestre",
          receive: "Un rendez-vous d’une demi-heure",
        },
        {
          period: "À la clôture de l’exercice",
          we: "Révision des comptes et établissement du bilan",
          you: "Les derniers justificatifs demandés",
          receive: "Les comptes annuels et leur présentation",
        },
        {
          period: "Toute l’année",
          we: "Réponses à vos questions, aide aux démarches courantes",
          you: "Vos questions, par téléphone ou par e-mail",
          receive: "Une réponse écrite",
        },
      ],
      note: "Les dates précises sont fixées avec vous, selon votre activité et vos obligations.",
      image: {
        src: IMG.clock,
        alt: "Cadran d’horloge murale sans chiffres, aux aiguilles noires, sur un mur gris",
      },
    },
    profiles: {
      eyebrow: "Pour qui",
      title: "Quatre situations que nous connaissons bien",
      description:
        "La mission est la même, le dossier ne l’est pas : chaque profil a ses besoins et son rythme.",
      items: [
        {
          icon: "user",
          title: "Indépendants",
          text: "Une comptabilité simple, peu de papier et un forfait mensuel, pour garder votre temps pour vos clients.",
        },
        {
          icon: "store",
          title: "TPE",
          text: "Facturation, trésorerie et paie des premiers salariés, avec un point régulier pour décider.",
        },
        {
          icon: "handshake",
          title: "Associations",
          text: "Des comptes annuels lisibles pour le bureau et l’assemblée, et un suivi clair des financements.",
        },
        {
          icon: "lightbulb",
          title: "Porteurs de projet",
          text: "Un budget de départ, un prévisionnel et un accompagnement pour les démarches de création.",
        },
      ],
    },
    closing: {
      title: "Vous hésitez sur ce qu’il vous faut ?",
      text: "Dites-nous où vous en êtes : nous vous proposons la combinaison de missions la plus simple, par écrit.",
    },
  },
  honorairesPage: {
    hero: {
      eyebrow: "Honoraires",
      title: "Un forfait annoncé avant de commencer",
      description:
        "Des honoraires au forfait, lisibles, hors taxes. Tous les prix ci-dessous sont des exemples, « à partir de » : le devis fixe le prix de votre dossier.",
      image: {
        src: IMG.notebook,
        alt: "Cahier ouvert à lignes, stylo vert posé dessus, deux crayons et un pot à crayons sur un bureau en bois",
      },
    },
    prices: {
      eyebrow: "Tarifs d’exemple",
      title: "Les honoraires, poste par poste",
      description:
        "Tous les prix sont hors taxes et fictifs. Un prix « à partir de » est un point de départ, pas un engagement.",
      groups: [
        {
          title: "Forfaits mensuels",
          items: [
            {
              name: "Indépendant",
              detail: "Par mois, hors taxes. Jusqu’à 40 pièces par mois.",
              price: "à partir de 89 €",
            },
            {
              name: "TPE",
              detail:
                "Par mois, hors taxes. Ventes, achats, trésorerie et point trimestriel.",
              price: "à partir de 189 €",
            },
            {
              name: "Association",
              detail:
                "Par mois, hors taxes. Suivi des financements et des adhésions.",
              price: "à partir de 129 €",
            },
          ],
        },
        {
          title: "Comptes annuels",
          items: [
            {
              name: "Bilan d’un indépendant",
              detail: "Par exercice, hors taxes.",
              price: "à partir de 650 €",
            },
            {
              name: "Bilan d’une TPE",
              detail: "Par exercice, hors taxes.",
              price: "à partir de 1 190 €",
            },
            {
              name: "Comptes d’une association",
              detail:
                "Par exercice, hors taxes, avec présentation à l’assemblée.",
              price: "à partir de 790 €",
            },
          ],
        },
        {
          title: "Paie",
          items: [
            {
              name: "Bulletin de salaire",
              detail: "Par bulletin, hors taxes.",
              price: "à partir de 19 €",
            },
            {
              name: "Entrée ou sortie d’un salarié",
              detail: "Par dossier, hors taxes.",
              price: "à partir de 45 €",
            },
          ],
        },
        {
          title: "Ponctuel",
          items: [
            {
              name: "Création d’entreprise",
              detail: "Accompagnement complet, hors taxes.",
              price: "à partir de 490 €",
            },
            {
              name: "Point conseil d’une heure",
              detail: "Hors taxes, compte rendu écrit compris.",
              price: "à partir de 120 €",
            },
            {
              name: "Prévisionnel et simulation",
              detail: "Selon le projet, hors taxes.",
              price: "à partir de 350 €",
              note: "Sur devis",
            },
          ],
        },
      ],
      footnote:
        "Prix fictifs, exprimés en euros hors taxes. Un forfait ne change pas en cours d’année sans votre accord écrit.",
    },
    included: {
      eyebrow: "Ce qui est compris",
      title: "Dans le forfait, et en dehors",
      description:
        "Pour éviter les surprises : ce que couvre un forfait mensuel, et ce qui fait l’objet d’un devis à part.",
      yes: {
        title: "Compris dans le forfait mensuel",
        items: [
          "Enregistrement de vos pièces chaque mois",
          "Rapprochement bancaire",
          "Suivi des factures clients et fournisseurs",
          "Tableau de bord mensuel",
          "Point de situation chaque trimestre",
          "Réponses à vos questions courantes",
        ],
      },
      extra: {
        title: "Sur devis, à part",
        items: [
          "Rattrapage de comptes en retard",
          "Mission de conseil ponctuelle",
          "Simulation d’un gros projet",
          "Accompagnement lors d’un contrôle",
        ],
      },
    },
    method: {
      eyebrow: "Comment le prix est fixé",
      title: "Trois étapes, toutes écrites",
      steps: [
        {
          title: "Un entretien",
          text: "Trente minutes pour comprendre votre activité, vos volumes de pièces et vos besoins.",
        },
        {
          title: "Un devis écrit",
          text: "Il liste les missions, le forfait mensuel et ce qui n’est pas compris, sans ligne cachée.",
        },
        {
          title: "Une lettre de mission",
          text: "Vous la signez si elle vous convient. Le forfait y est inscrit pour l’exercice.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Vos questions sur les honoraires",
      items: [
        {
          q: "Les honoraires sont-ils fixes ?",
          a: "Le forfait est inscrit dans la lettre de mission et ne change pas en cours d’année sans votre accord écrit. Un travail en dehors du périmètre fait l’objet d’un devis préalable.",
        },
        {
          q: "Y a-t-il des frais de mise en place ?",
          a: "Une ouverture de dossier peut donner lieu à un forfait de mise en place. Il figure sur le devis, avant que vous vous engagiez.",
        },
        {
          q: "Et si j’envoie mes pièces en retard ?",
          a: "Nous vous relançons. Si le retard s’installe, la remise de vos comptes est décalée d’autant, et nous vous le disons par écrit.",
        },
        {
          q: "Puis-je changer de formule en cours d’année ?",
          a: "Oui, d’un commun accord. Nous vous proposons alors un avenant à la lettre de mission, avec le nouveau forfait.",
        },
        {
          q: "Comment vous transmettre mes pièces ?",
          a: "Par dépôt en ligne, par photo ou par courrier, selon ce qui vous convient. Nous réglons cela avec vous au démarrage.",
        },
        {
          q: "Les tarifs affichés sont-ils définitifs ?",
          a: "Non. Ce sont des tarifs d’exemple, hors taxes, « à partir de ». Le devis fixe le prix pour votre situation.",
        },
      ],
      image: {
        src: IMG.paper,
        alt: "Pile de feuilles de papier aux bords irréguliers, en noir et blanc, sur fond clair flou",
      },
    },
    closing: {
      title: "Obtenez votre forfait par écrit",
      text: "Un entretien de trente minutes suffit pour chiffrer votre dossier. Le devis est gratuit.",
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Parlons de vos comptes",
      description:
        "Écrivez-nous ou appelez : nous revenons vers vous avec des questions simples et, ensuite, une proposition écrite.",
    },
    form: {
      title: "Demander un devis",
      intro:
        "Quelques lignes suffisent. Les champs marqués d’un astérisque sont obligatoires.",
      submit: "Envoyer ma demande",
      fields: {
        name: "Nom",
        phone: "Téléphone",
        email: "E-mail",
        profile: "Votre situation",
        profilePlaceholder: "Choisir",
        profiles: [
          { value: "independant", label: "Indépendant" },
          { value: "tpe", label: "TPE" },
          { value: "association", label: "Association" },
          { value: "projet", label: "Projet de création" },
        ],
        need: "Votre besoin",
        needPlaceholder: "Choisir",
        needs: [
          { value: "tenue", label: "Tenue comptable" },
          { value: "bilan", label: "Bilan et comptes annuels" },
          { value: "paie", label: "Paie" },
          { value: "creation", label: "Création d’entreprise" },
          { value: "conseil", label: "Conseil" },
          { value: "autre", label: "Autre" },
        ],
        message: "Votre message",
      },
    },
    details: {
      title: "Coordonnées du cabinet",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Adresse",
      access: "Rendez-vous au cabinet ou par téléphone.",
    },
    next: {
      eyebrow: "Et ensuite ?",
      title: "Ce qui se passe après votre message",
      steps: [
        {
          title: "Nous vous rappelons",
          text: "Un échange court, pour comprendre votre activité et vos attentes.",
        },
        {
          title: "Nous chiffrons",
          text: "Vous recevez un devis écrit, avec le forfait et ce qui n’est pas compris.",
        },
        {
          title: "Vous décidez",
          text: "Sans engagement. Si le devis vous convient, nous préparons la lettre de mission.",
        },
      ],
    },
    image: {
      src: IMG.light,
      alt: "Pièce lumineuse avec de grandes fenêtres donnant sur des arbres, une table recouverte d’un tissu sombre au premier plan",
    },
  },
} as const;

export type ExpertComptableCopy = WidenLiterals<typeof fr>;

export type ExpertComptableIconKey = TemplateIconKey<ExpertComptableCopy>;

const en: ExpertComptableCopy = {
  brand: {
    name: "Your business",
    tagline: "Accounting firm",
  },
  phone: {
    href: "tel:+33199000068",
    label: "01 99 00 00 68",
  },
  nav: {
    home: "Home",
    missions: "Services",
    honoraires: "Fees",
    contact: "Contact",
  },
  cta: {
    call: "Call",
    quote: "Request a quote",
    fees: "See the fees",
    missions: "See the services",
    contact: "Contact us",
    allMissions: "All services in detail",
  },
  mobile: {
    label: "Quick actions",
  },
  common: {
    email: "contact@example.com",
    address: "12 Example Street, 00000 Your city",
    hoursLabel: "Hours",
    hours: [
      { day: "Monday to Thursday", time: "9 am-6 pm" },
      { day: "Friday", time: "9 am-4 pm" },
    ],
    registration: "Professional registration: to be completed",
    closing: {
      eyebrow: "First conversation",
      title: "Let’s talk about your books, no strings attached",
      text: "Tell us about your activity in a few lines: we come back with a written proposal and a clear flat fee.",
    },
  },
  footer: {
    text: "Accounting firm for freelancers, small businesses and nonprofits: bookkeeping, year-end financials, payroll, business setup and advice.",
    contactTitle: "Contact",
    hoursTitle: "Hours",
    legalTitle: "Notices",
    demo: "Demo site: fees and figures are fictitious.",
  },
  meta: {
    home: {
      title: "Your business - Accounting firm",
      description:
        "A small accounting firm for freelancers, small businesses and nonprofits: bookkeeping, year-end financials, payroll, business setup and advice, with a flat fee announced upfront.",
    },
    missions: {
      title: "Services - Your business",
      description:
        "Bookkeeping, year-end financials, payroll, business setup and advice: what the firm does, what it asks of you and the rhythm of a typical year.",
    },
    honoraires: {
      title: "Fees - Your business",
      description:
        "Monthly flat fees and starting prices, before tax: what is included, how the price is set and answers to common questions.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Request a quote or a first conversation: form, phone, email, office hours and what happens after your message.",
    },
  },
  missions: {
    includesLabel: "What it includes",
    items: [
      {
        icon: "book-open",
        code: "01",
        title: "Bookkeeping",
        summary:
          "Your documents are recorded every month, your invoices tracked, and you get a dashboard you can read.",
        includes: [
          "Recording of your invoices and statements",
          "Reconciliation with your bank accounts",
          "Tracking of customer and supplier invoices",
          "Monthly dashboard",
        ],
        from: "from €89 per month",
      },
      {
        icon: "file-check",
        code: "02",
        title: "Year-end financials",
        summary:
          "Review of the year’s books, preparation of the year-end financials and a meeting to go through them together.",
        includes: [
          "Review of the year’s entries",
          "Preparation of the year-end financials",
          "Notes and summary documents",
          "Presentation meeting",
        ],
        from: "from €650 per fiscal year",
      },
      {
        icon: "users",
        code: "03",
        title: "Payroll",
        summary:
          "Pay stubs and records for your employees, from the first contract to departure, without you having to think about it.",
        includes: [
          "Monthly pay stubs",
          "Hiring and departure of an employee",
          "Tracking of absences and time off",
          "End-of-contract documents",
        ],
        from: "from €19 per pay stub",
      },
      {
        icon: "sprout",
        code: "04",
        title: "Business setup",
        summary:
          "Support to lay the groundwork: starting budget, forecast, choice of business form and paperwork.",
        includes: [
          "Project scoping meeting",
          "Starting budget and cash plan",
          "Comparison of business forms",
          "Help with setup paperwork",
        ],
        from: "from €490",
      },
      {
        icon: "compass",
        code: "05",
        title: "Advice and steering",
        summary:
          "Management check-ins on request, to decide with figures: dashboards, simulations, projects.",
        includes: [
          "One-hour management check-in",
          "Custom dashboards",
          "Simulation of a project or a hire",
          "Written answers to your questions",
        ],
        from: "from €120 per hour",
      },
    ],
  },
  home: {
    hero: {
      eyebrow: "Accounting firm",
      title: "Books kept at the pace of your activity",
      description:
        "A small firm for freelancers, small businesses and nonprofits: bookkeeping, year-end financials, payroll, business setup and advice, with a flat fee announced upfront.",
      facts: [
        "A single contact person for your file",
        "A written flat fee before the first month",
        "A free first conversation, no obligation",
      ],
      ledger: {
        title: "Month at a glance",
        caption: "Fictitious example of the dashboard sent every month",
        columns: { label: "Item", value: "Amount" },
        rows: [
          { label: "Opening balance", value: "€5,200" },
          { label: "Receipts for the month", value: "+ €6,120" },
          { label: "Payments for the month", value: "− €2,860" },
        ],
        totalLabel: "Cash at month end",
        totalValue: "€8,460",
        note: "Illustrative figures, unrelated to any real file.",
      },
    },
    offer: {
      eyebrow: "Services",
      title: "Five services, one file",
      description:
        "You choose what you need: monthly bookkeeping, year-end financials, payroll, or one-time support. Everything stays in one place.",
      codeLabel: "Service",
    },
    proof: {
      eyebrow: "They trust us with their books",
      title: "Figures you can understand",
      description:
        "Three clients, three trades. First names and initials are fictitious: these are sample reviews.",
      items: [
        {
          quote:
            "I know where I stand every month without opening a spreadsheet. When I have a question, I get an answer in writing.",
          name: "Camille R.",
          detail: "Freelance graphic designer",
        },
        {
          quote:
            "Payroll for my two employees gets done without me thinking about it, and the quarterly check-in really helps me decide.",
          name: "Hugo M.",
          detail: "Owner of a carpentry workshop",
        },
        {
          quote:
            "The association’s accounts are finally readable for the board. The assembly could ask its questions calmly.",
          name: "Léa D.",
          detail: "Treasurer of a neighborhood association",
        },
      ],
    },
    handover: {
      eyebrow: "Who does what",
      title: "You keep what matters, we handle the rest",
      description:
        "A simple, regular exchange: you hand over your documents, we hand back up-to-date accounts.",
      give: {
        title: "You send us",
        items: [
          "Your invoices and statements for the month",
          "Your contracts and payroll documents",
          "Your questions, by phone or in writing",
          "Your decisions and projects",
        ],
      },
      receive: {
        title: "You receive",
        items: [
          "A dashboard every month",
          "Up-to-date, explained accounts",
          "A regular check-in meeting",
          "A contact person who knows your file",
        ],
      },
      image: {
        src: IMG.window,
        alt: "Desk by a large sheer-curtained window, green plant, articulated lamp and keyboard, in morning light",
      },
    },
  },
  missionsPage: {
    hero: {
      eyebrow: "Services",
      title: "What the firm does for you",
      description:
        "Five services that combine to fit your situation. For each one: what is done, what we ask of you, and the starting price.",
      image: {
        src: IMG.calculator,
        alt: "Desk with a calculator resting on printed charts, with a laptop and notebook in the background",
      },
    },
    list: {
      eyebrow: "The service register",
      title: "Five services, from everyday to occasional",
      description:
        "Prices are sample rates, before tax. The quote sets the price for your situation.",
    },
    calendar: {
      eyebrow: "Calendar",
      title: "The rhythm of a typical year",
      description:
        "A monthly flat fee follows a steady rhythm. Here is who does what, at each milestone.",
      columns: {
        period: "Milestone",
        we: "We do",
        you: "You send us",
        receive: "You receive",
      },
      rows: [
        {
          period: "Every month",
          we: "Recording of documents, bank reconciliation, invoice tracking",
          you: "Your invoices and statements for the month",
          receive: "The monthly dashboard",
        },
        {
          period: "Every quarter",
          we: "Status check-in, review of gaps, forecast update",
          you: "Your questions and projects for the quarter",
          receive: "A half-hour meeting",
        },
        {
          period: "At year end",
          we: "Review of the books and preparation of the year-end financials",
          you: "The last supporting documents we ask for",
          receive: "The year-end financials and their presentation",
        },
        {
          period: "All year long",
          we: "Answers to your questions, help with everyday paperwork",
          you: "Your questions, by phone or email",
          receive: "A written answer",
        },
      ],
      note: "Exact dates are set with you, based on your activity and your obligations.",
      image: {
        src: IMG.clock,
        alt: "Face of a wall clock with no numerals and black hands, on a gray wall",
      },
    },
    profiles: {
      eyebrow: "Who it is for",
      title: "Four situations we know well",
      description:
        "The service is the same, the file is not: each profile has its own needs and rhythm.",
      items: [
        {
          icon: "user",
          title: "Freelancers",
          text: "Simple bookkeeping, little paper and a monthly flat fee, so you can keep your time for your clients.",
        },
        {
          icon: "store",
          title: "Small businesses",
          text: "Invoicing, cash flow and payroll for your first employees, with a regular check-in to decide.",
        },
        {
          icon: "handshake",
          title: "Nonprofits",
          text: "Year-end financials the board and the assembly can read, and a clear view of your funding.",
        },
        {
          icon: "lightbulb",
          title: "Project founders",
          text: "A starting budget, a forecast and support with the setup paperwork.",
        },
      ],
    },
    closing: {
      title: "Not sure what you need?",
      text: "Tell us where you stand: we propose the simplest combination of services, in writing.",
    },
  },
  honorairesPage: {
    hero: {
      eyebrow: "Fees",
      title: "A flat fee announced before we start",
      description:
        "Clear flat-rate fees, before tax. All prices below are sample starting prices: the quote sets the price for your file.",
      image: {
        src: IMG.notebook,
        alt: "Open lined notebook with a green pen on top, two pencils and a pencil cup on a wooden desk",
      },
    },
    prices: {
      eyebrow: "Sample rates",
      title: "Fees, item by item",
      description:
        "All prices exclude tax and are fictitious. A “from” price is a starting point, not a commitment.",
      groups: [
        {
          title: "Monthly flat fees",
          items: [
            {
              name: "Freelancer",
              detail: "Per month, before tax. Up to 40 documents a month.",
              price: "from €89",
            },
            {
              name: "Small business",
              detail:
                "Per month, before tax. Sales, purchases, cash flow and a quarterly check-in.",
              price: "from €189",
            },
            {
              name: "Nonprofit",
              detail: "Per month, before tax. Funding and membership tracking.",
              price: "from €129",
            },
          ],
        },
        {
          title: "Year-end financials",
          items: [
            {
              name: "Freelancer’s accounts",
              detail: "Per fiscal year, before tax.",
              price: "from €650",
            },
            {
              name: "Small business accounts",
              detail: "Per fiscal year, before tax.",
              price: "from €1,190",
            },
            {
              name: "Nonprofit accounts",
              detail:
                "Per fiscal year, before tax, with a presentation to the assembly.",
              price: "from €790",
            },
          ],
        },
        {
          title: "Payroll",
          items: [
            {
              name: "Pay stub",
              detail: "Per pay stub, before tax.",
              price: "from €19",
            },
            {
              name: "Hiring or departure of an employee",
              detail: "Per file, before tax.",
              price: "from €45",
            },
          ],
        },
        {
          title: "One-time",
          items: [
            {
              name: "Business setup",
              detail: "Full support, before tax.",
              price: "from €490",
            },
            {
              name: "One-hour advice session",
              detail: "Before tax, written summary included.",
              price: "from €120",
            },
            {
              name: "Forecast and simulation",
              detail: "Depending on the project, before tax.",
              price: "from €350",
              note: "On quote",
            },
          ],
        },
      ],
      footnote:
        "Fictitious prices, in euros before tax. A flat fee does not change during the year without your written agreement.",
    },
    included: {
      eyebrow: "What is included",
      title: "In the flat fee, and outside it",
      description:
        "To avoid surprises: what a monthly flat fee covers, and what is quoted separately.",
      yes: {
        title: "Included in the monthly flat fee",
        items: [
          "Recording of your documents every month",
          "Bank reconciliation",
          "Tracking of customer and supplier invoices",
          "Monthly dashboard",
          "Status check-in every quarter",
          "Answers to your everyday questions",
        ],
      },
      extra: {
        title: "Quoted separately",
        items: [
          "Catching up on late books",
          "One-time advisory assignment",
          "Simulation of a major project",
          "Support during an audit",
        ],
      },
    },
    method: {
      eyebrow: "How the price is set",
      title: "Three steps, all in writing",
      steps: [
        {
          title: "A conversation",
          text: "Thirty minutes to understand your activity, your volume of documents and your needs.",
        },
        {
          title: "A written quote",
          text: "It lists the services, the monthly flat fee and what is not included, with no hidden line.",
        },
        {
          title: "An engagement letter",
          text: "You sign it if it suits you. The flat fee is written into it for the year.",
        },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Your questions about fees",
      items: [
        {
          q: "Are the fees fixed?",
          a: "The flat fee is written in the engagement letter and does not change during the year without your written agreement. Work outside the scope is quoted beforehand.",
        },
        {
          q: "Are there setup fees?",
          a: "Opening a file may involve a setup fee. It appears on the quote, before you commit.",
        },
        {
          q: "What if I send my documents late?",
          a: "We follow up with you. If the delay drags on, the delivery of your accounts is pushed back by the same amount, and we tell you in writing.",
        },
        {
          q: "Can I change plan during the year?",
          a: "Yes, by mutual agreement. We then offer an amendment to the engagement letter with the new flat fee.",
        },
        {
          q: "How do I send you my documents?",
          a: "By online upload, by photo or by mail, whichever suits you. We sort this out with you at the start.",
        },
        {
          q: "Are the listed prices final?",
          a: "No. They are sample starting rates, before tax. The quote sets the price for your situation.",
        },
      ],
      image: {
        src: IMG.paper,
        alt: "Stack of sheets of paper with uneven edges, in black and white, against a soft blurred light background",
      },
    },
    closing: {
      title: "Get your flat fee in writing",
      text: "A thirty-minute conversation is enough to price your file. The quote is free.",
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let’s talk about your books",
      description:
        "Write to us or call: we come back to you with a few simple questions and then a written proposal.",
    },
    form: {
      title: "Request a quote",
      intro:
        "A few lines are enough. Fields marked with an asterisk are required.",
      submit: "Send my request",
      fields: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        profile: "Your situation",
        profilePlaceholder: "Choose",
        profiles: [
          { value: "independant", label: "Freelancer" },
          { value: "tpe", label: "Small business" },
          { value: "association", label: "Nonprofit" },
          { value: "projet", label: "Business setup project" },
        ],
        need: "Your need",
        needPlaceholder: "Choose",
        needs: [
          { value: "tenue", label: "Bookkeeping" },
          { value: "bilan", label: "Year-end financials" },
          { value: "paie", label: "Payroll" },
          { value: "creation", label: "Business setup" },
          { value: "conseil", label: "Advice" },
          { value: "autre", label: "Other" },
        ],
        message: "Your message",
      },
    },
    details: {
      title: "Firm details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      access: "Meetings at the office or by phone.",
    },
    next: {
      eyebrow: "What happens next",
      title: "What follows your message",
      steps: [
        {
          title: "We call you back",
          text: "A short conversation to understand your activity and what you expect.",
        },
        {
          title: "We price it",
          text: "You get a written quote, with the flat fee and what is not included.",
        },
        {
          title: "You decide",
          text: "No obligation. If the quote suits you, we prepare the engagement letter.",
        },
      ],
    },
    image: {
      src: IMG.light,
      alt: "Bright room with large windows looking onto trees, a table covered with a dark cloth in the foreground",
    },
  },
};

export const expertComptable: TemplateDefinition<
  "expert-comptable",
  ExpertComptableCopy
> = {
  slug: "expert-comptable",
  /**
   * Papier froid, encre bleu-gris, accent vert menthe profond (boutons, filets
   * d'accent) et fond inverse bleu-gris nuit. Inter en affichage et en texte
   * (chiffres tabulaires dans les vues), rayons très fermes (document), ombres
   * réduites à un filet.
   */
  theme: {
    surface: "oklch(0.972 0.008 235)",
    raised: "oklch(0.992 0.004 235)",
    ink: "oklch(0.27 0.032 250)",
    inkMuted: "oklch(0.44 0.03 250)",
    line: "oklch(0.86 0.014 240)",
    accent: "oklch(0.47 0.09 168)",
    accentInk: "oklch(0.985 0.006 168)",
    inverse: "oklch(0.26 0.034 252)",
    inverseInk: "oklch(0.96 0.008 235)",
    radius: "0.25rem",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 600,
    shadowSm: "0 1px 0 color-mix(in oklch, var(--tpl-ink) 10%, transparent)",
    shadowLg:
      "0 18px 36px -26px color-mix(in oklch, var(--tpl-ink) 30%, transparent)",
  },
  paths: {
    home: "/expert-comptable",
    missions: "/expert-comptable/missions",
    honoraires: "/expert-comptable/honoraires",
    contact: "/expert-comptable/contact",
  },
  copy: { fr, en },
};
