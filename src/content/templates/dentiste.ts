import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « dentiste » (cabinet dentaire fictif « Clinique Nova Sourire »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/dentiste/`) n'ont
 * aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `DentisteCopy`
 * (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou une liste de
 * longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`
 * (`icon: "cpu"`), identique en français et en anglais (c'est une donnée, pas un
 * texte : `WidenLiterals` la laisse littérale). Les vues la résolvent avec une
 * table `Record<DentisteIconKey, LucideIcon>` (`src/templates/dentiste/parts.tsx`).
 *
 * Images : Unsplash, sans marque ni texte lisible, sans visage reconnaissable.
 * Deux ratios dans tout le template (`4/5` et `3/2`). Adresse et accès
 * manifestement fictifs, sans lieu réel.
 */

const unsplash = (id: string, rect = "") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80${rect}`;

const IMG = {
  // Recadrée en 4 / 5 sur le fauteuil et le scialytique (sans le plafond).
  cabinet: unsplash("1728342057953-94bfad8f0e7e", "&rect=0.05,0.22,0.85,0.71"),
  implant: unsplash("1771442873035-474765b40ac6"),
  // Film de radiographie panoramique (scan réel), recadré en 3 / 2 au-dessus du bord de film.
  xray: unsplash("1522849696084-818b29dfe210", "&rect=0,0.02,1,0.889"),
  // Recadrée en 3 / 2 sous le panneau écrit : l'olivier et les premières chaises.
  waiting: unsplash("1762625570087-6d98fca29531", "&rect=0,0.64,0.63,0.36"),
  instruments: unsplash("1643660527072-47bd5735f721"),
  // Recadrée en 3 / 2 sur le miroir et le scialytique flou.
  mirrorTool: unsplash("1698749778813-ad5f2814e50f", "&rect=0,0.22,1,0.45"),
  mirror: unsplash("1771442873038-dda05b6ca447"),
  chair: unsplash("1643660527064-8d43259f014a"),
} as const;

const fr = {
  brand: {
    name: "Clinique Nova Sourire",
    initials: "NS",
    tagline: "Dentisterie familiale, esthétique et implantaire",
  },
  phone: {
    href: "tel:+33199000018",
    label: "01 99 00 00 18",
  },
  nav: {
    home: "Accueil",
    soins: "Soins",
    technologies: "Technologies",
    equipe: "Équipe",
    premiereVisite: "Première visite",
    rendezVous: "Rendez-vous",
    contact: "Contact",
  },
  cta: {
    book: "Prendre rendez-vous",
    bookShort: "Rendez-vous",
    call: "Appeler",
    callSecretary: "Appeler le secrétariat",
    seeSoins: "Voir les soins et les tarifs",
    seeTechnologies: "Voir les technologies",
    meetTeam: "Rencontrer l’équipe",
    prepareFirstVisit: "Préparer ma première visite",
  },
  a11y: { quickActions: "Actions rapides", facts: "Le cabinet en bref" },
  topBar: {
    hours: "Lun⁠–⁠Ven 8 h 30⁠–⁠19 h 00 · Sam 9 h 00⁠–⁠13 h 00",
    promise: "Premier rendez-vous sous 48 h",
  },
  info: {
    addressLabel: "Adresse",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    hoursLabel: "Horaires",
    hours: [
      { day: "Lundi⁠–⁠vendredi", time: "8 h 30⁠–⁠19 h 00" },
      { day: "Samedi", time: "9 h 00⁠–⁠13 h 00" },
      { day: "Dimanche", time: "Fermé" },
    ],
    emailLabel: "E‑mail",
    email: "contact@novasourire.example",
    phoneLabel: "Téléphone",
  },
  closing: {
    title: "Un contrôle, une douleur, un projet : prenez rendez-vous.",
    description:
      "Réservez en ligne en deux minutes ou appelez le secrétariat. En cas de douleur, un créneau d’urgence est gardé chaque jour d’ouverture.",
  },
  footer: {
    text: "Cabinet dentaire de famille : soins généraux, esthétique du sourire et implants. Sur rendez-vous, du lundi au samedi.",
    contactTitle: "Contact",
    hoursTitle: "Horaires",
    siteTitle: "Le cabinet",
  },
  meta: {
    home: {
      title: "Clinique Nova Sourire - Cabinet dentaire",
      description:
        "Cabinet dentaire : soins expliqués, devis écrit avant tout traitement, radios numériques et premier rendez-vous sous 48 h. Réservez en ligne.",
    },
    soins: {
      title: "Soins dentaires - Clinique Nova Sourire",
      description:
        "Prévention, soins conservateurs, esthétique du sourire et implants : ce que nous faisons, les tarifs indicatifs et la part remboursée.",
    },
    technologies: {
      title: "Technologies - Clinique Nova Sourire",
      description:
        "Radiographie numérique, imagerie 3D sur indication, empreintes optiques et stérilisation tracée : le matériel du cabinet et ce qu’il change pour vous.",
    },
    equipe: {
      title: "Équipe - Clinique Nova Sourire",
      description:
        "Deux chirurgiens-dentistes et une coordinatrice de parcours : qui vous soigne, qui suit votre dossier et comment l’équipe travaille.",
    },
    premiereVisite: {
      title: "Première visite - Clinique Nova Sourire",
      description:
        "Ce qu’il faut apporter, le déroulé de la première consultation et ce que vous recevez en repartant : compte rendu, devis et calendrier.",
    },
    rendezVous: {
      title: "Rendez-vous - Clinique Nova Sourire",
      description:
        "Choisissez votre motif, une date et un créneau pour prendre rendez-vous au cabinet. Confirmation dans la journée.",
    },
    contact: {
      title: "Contact et accès - Clinique Nova Sourire",
      description:
        "Adresse, horaires, téléphone et accès du cabinet dentaire, avec un formulaire pour écrire au secrétariat.",
    },
  },
  home: {
    hero: {
      eyebrow: "Cabinet dentaire",
      title: "Des soins dentaires expliqués avant d’être réalisés.",
      description:
        "Bilan, radios ciblées, plan de traitement chiffré par écrit : vous savez ce qui est observé, ce que nous proposons et ce que cela coûte avant le premier geste. Dentisterie générale, esthétique du sourire et implants, pour toute la famille.",
      image: {
        src: IMG.cabinet,
        alt: "Salle de soins très claire : fauteuil dentaire blanc et gris vu de dos, avec un scialytique et le bras des instruments",
      },
      slot: {
        eyebrow: "Prochaine disponibilité",
        value: "Demain, 10 h 40",
        text: "Contrôle, douleur ou première visite. Confirmation par e‑mail ou par téléphone.",
      },
    },
    facts: [
      { value: "48 h", label: "pour obtenir un premier rendez-vous" },
      { value: "Devis écrit", label: "remis avant tout traitement" },
      {
        value: "Tiers payant",
        label: "avec l’Assurance maladie et la plupart des mutuelles",
      },
      {
        value: "6 jours sur 7",
        label: "dont un créneau d’urgence chaque jour d’ouverture",
      },
    ],
    soins: {
      eyebrow: "Nos soins",
      title: "Quatre familles de soins, un seul parcours.",
      description:
        "Chaque soin est expliqué avant d’être réalisé, avec son tarif et la part prise en charge.",
      image: {
        src: IMG.implant,
        alt: "Main gantée tenant un implant dentaire surmonté d’une couronne en céramique",
      },
      items: [
        {
          title: "Prévention et contrôle",
          text: "Bilan annuel, détartrage, radios ciblées : le moyen le plus simple d’éviter les gros soins.",
          price: "Consultation : 30 €",
        },
        {
          title: "Soins conservateurs",
          text: "Caries, dents sensibles, restaurations : nous conservons un maximum de dent saine.",
          price: "Dès 40 €",
        },
        {
          title: "Esthétique du sourire",
          text: "Blanchiment, facettes, harmonisation, avec une simulation avant de vous décider.",
          price: "Dès 350 €",
        },
        {
          title: "Implants et prothèses",
          text: "Du bilan à la couronne définitive, étape par étape, avec un devis détaillé.",
          price: "Dès 1 800 €",
        },
      ],
    },
    technologies: {
      eyebrow: "Technologies",
      title: "Du matériel utile, expliqué à l’écran.",
      description:
        "Un équipement n’entre au cabinet que s’il améliore le diagnostic ou votre confort. Vous voyez vos images en direct, avec le praticien.",
      image: {
        src: IMG.xray,
        alt: "Film de radiographie panoramique en noir et blanc : les dents et les deux mâchoires",
      },
      items: [
        {
          icon: "cpu",
          title: "Radiographie numérique",
          text: "Image immédiate et dose d’exposition réduite, à comparer avec vos clichés précédents.",
        },
        {
          icon: "microscope",
          title: "Empreintes optiques",
          text: "Une caméra remplace la pâte à empreinte : plus confortable, plus précis.",
        },
        {
          icon: "shield-check",
          title: "Stérilisation tracée",
          text: "Chaque instrument passe en autoclave, avec un suivi enregistré pour chaque lot.",
        },
      ],
    },
    visit: {
      eyebrow: "Première visite",
      title: "Ce qui se passe quand vous venez la première fois.",
      image: {
        src: IMG.waiting,
        alt: "Salle d’attente claire : un olivier en pot et des chaises noires alignées contre un mur blanc",
      },
      steps: [
        {
          title: "Avant : un court questionnaire",
          text: "Motif, traitements en cours, allergies. Apportez votre carte Vitale et votre attestation de mutuelle.",
        },
        {
          title: "Pendant : un bilan complet",
          text: "Examen, radios ciblées si besoin, explications sur écran. Comptez 45 minutes.",
        },
        {
          title: "Après : un plan écrit",
          text: "Compte rendu, devis détaillé et calendrier des soins vous sont remis avant de partir.",
        },
      ],
    },
    reviews: {
      eyebrow: "Avis de patients",
      title: "Ce que nos patients retiennent de leur visite.",
      items: [
        {
          quote:
            "Je repoussais ce rendez-vous depuis trois ans. On m’a montré mes radios, expliqué chaque option et remis un devis clair. Aucune mauvaise surprise.",
          name: "Claire M.",
          context: "Première visite et bilan complet",
        },
        {
          quote:
            "Mon fils avait peur. Le Dr Morvan a pris le temps de tout lui montrer avant de commencer : il demande déjà quand on y retourne.",
          name: "Julien P.",
          context: "Soins d’enfant",
        },
        {
          quote:
            "Mon implant a été posé en deux rendez-vous, avec le planning remis dès le départ. Le suivi par la coordinatrice est vraiment rassurant.",
          name: "Sophie L.",
          context: "Implant et couronne",
        },
      ],
    },
  },
  soins: {
    intro: {
      eyebrow: "Soins",
      title: "Tous nos soins, avec le tarif et le remboursement.",
      description:
        "Prévention, soins conservateurs, esthétique et implants : ce que nous faisons, pour qui, et ce qu’il reste à votre charge.",
      image: {
        src: IMG.instruments,
        alt: "Instruments dentaires en acier alignés sur un plan de travail blanc",
      },
    },
    treatmentsLabel: "Les quatre familles de soins",
    treatments: [
      {
        icon: "stethoscope",
        title: "Prévention et contrôle",
        text: "Un contrôle par an suffit à la plupart des patients. Nous repérons tôt ce qui doit l’être et nous vous montrons comment l’éviter.",
        price: "Consultation : 30 €",
        points: [
          "Examen complet et radios ciblées",
          "Détartrage et polissage",
          "Conseils d’hygiène adaptés à votre bouche",
        ],
      },
      {
        icon: "syringe",
        title: "Soins conservateurs",
        text: "Caries, dents sensibles, anciennes restaurations à refaire : nous traitons en conservant au maximum la dent, avec une anesthésie soignée.",
        price: "Dès 40 € par dent",
        points: [
          "Restaurations couleur dent",
          "Traitement de racine (dévitalisation)",
          "Urgences : douleur, dent cassée, abcès",
        ],
      },
      {
        icon: "sparkles",
        title: "Esthétique du sourire",
        text: "Blanchiment, facettes, correction de la forme ou de la teinte. Vous voyez une simulation avant de décider quoi que ce soit.",
        price: "Dès 350 €",
        points: [
          "Blanchiment encadré en cabinet",
          "Facettes en céramique",
          "Simulation avant traitement",
        ],
      },
      {
        icon: "workflow",
        title: "Implants et prothèses",
        text: "Remplacer une ou plusieurs dents : couronnes, bridges, implants. Le parcours est long, nous le découpons en étapes datées et chiffrées.",
        price: "Dès 1 800 €",
        points: [
          "Bilan 3D et plan de traitement écrit",
          "Pose guidée, en général en deux rendez-vous",
          "Couronne définitive et contrôles suivis",
        ],
      },
    ],
    prices: {
      eyebrow: "Tarifs et remboursement",
      title: "Ce que vous payez, ce qui est remboursé.",
      description:
        "Tarifs indicatifs, hors cas particuliers. Un devis écrit vous est remis avant tout traitement, et nous ne dépassons jamais le montant sans votre accord.",
      columns: {
        care: "Soin",
        price: "Tarif indicatif",
        coverage: "Prise en charge",
      },
      rows: [
        {
          care: "Consultation et bilan",
          price: "30 €",
          coverage:
            "Remboursée à 70 % du tarif de base par l’Assurance maladie, le solde par votre mutuelle.",
        },
        {
          care: "Détartrage",
          price: "30 à 45 €",
          coverage:
            "Remboursé à 70 % sur le tarif de base, le solde selon votre mutuelle.",
        },
        {
          care: "Soin d’une carie",
          price: "40 à 120 €",
          coverage: "Remboursé à 70 % sur le tarif de base.",
        },
        {
          care: "Couronne en céramique",
          price: "500 à 600 €",
          coverage:
            "Offre « 100 % Santé » à 500 € : sans reste à charge avec une mutuelle éligible. Tarif libre au‑delà.",
        },
        {
          care: "Blanchiment",
          price: "350 €",
          coverage: "Non remboursé.",
        },
        {
          care: "Implant et couronne",
          price: "1 800 à 2 400 €",
          coverage:
            "Non remboursé par l’Assurance maladie, participation possible de certaines mutuelles.",
        },
      ],
      note: "Paiement en plusieurs fois sans frais possible pour les plans de traitement longs.",
    },
  },
  technologies: {
    intro: {
      eyebrow: "Technologies",
      title: "Des outils choisis pour mieux diagnostiquer, pas pour décorer.",
      description:
        "Chaque équipement du cabinet répond à une question précise : voir plus tôt, soigner plus finement, vous gêner moins.",
      image: {
        src: IMG.mirrorTool,
        alt: "Miroir dentaire au premier plan, devant un fauteuil et un scialytique flous",
      },
    },
    benefitLabel: "Pour vous",
    items: [
      {
        icon: "cpu",
        title: "Radiographie numérique",
        text: "L’image s’affiche en quelques secondes sur l’écran du fauteuil, avec une dose d’exposition très inférieure à celle d’un cliché argentique.",
        benefit:
          "Vous voyez ce que nous voyons, et nous le commentons ensemble.",
      },
      {
        icon: "locate-fixed",
        title: "Imagerie 3D sur indication",
        text: "Un scanner à faisceau conique n’est utilisé que pour les implants et les cas complexes, jamais en routine.",
        benefit:
          "Une pose d’implant planifiée au millimètre, donc plus courte.",
      },
      {
        icon: "microscope",
        title: "Empreintes optiques",
        text: "Une caméra intra-orale remplace la pâte à empreinte pour les couronnes et les prothèses.",
        benefit: "Plus de haut-le-cœur, et une couronne mieux ajustée.",
      },
      {
        icon: "shield-check",
        title: "Stérilisation tracée",
        text: "Chaque instrument est lavé puis passé en autoclave. Le cycle est enregistré et rattaché à la date de votre soin.",
        benefit: "Instruments sous pochette stérile, ouverte devant vous.",
      },
    ],
    hygiene: {
      eyebrow: "Hygiène",
      title: "Le protocole appliqué à chaque patient.",
      items: [
        "Surfaces et fauteuil désinfectés entre chaque patient.",
        "Autoclave de classe B, cycles contrôlés et archivés.",
        "Eau des unités de soins contrôlée chaque trimestre.",
        "Matériel à usage unique jeté devant vous.",
      ],
    },
  },
  equipe: {
    intro: {
      eyebrow: "Équipe",
      title: "Deux dentistes, une coordinatrice, un seul dossier pour vous.",
      description:
        "Chaque patient a un chirurgien-dentiste référent et une coordinatrice qui suit son dossier de la première visite au dernier contrôle.",
      image: {
        src: IMG.mirror,
        alt: "Main gantée tenant un miroir dentaire et des instruments d’examen",
      },
    },
    membersLabel: "L’équipe du cabinet",
    members: [
      {
        initials: "IM",
        name: "Dr Inès Morvan",
        role: "Chirurgien-dentiste, soins et esthétique",
        text: "Soins conservateurs, prothèses et esthétique du sourire. Reçoit les adultes et les enfants dès six ans.",
      },
      {
        initials: "MK",
        name: "Dr Mehdi Karam",
        role: "Chirurgien-dentiste, implants et chirurgie",
        text: "Pose d’implants, extractions complexes et greffes osseuses, avec une chirurgie guidée par imagerie 3D.",
      },
      {
        initials: "LP",
        name: "Léna Puech",
        role: "Coordinatrice de parcours",
        text: "Organise les rendez-vous, prépare les devis et les demandes de prise en charge, et reste votre contact pendant tout le traitement.",
      },
    ],
    practice: {
      eyebrow: "Façon de travailler",
      title: "Ce que vous pouvez attendre de l’équipe.",
      items: [
        {
          icon: "user-round",
          title: "Un même interlocuteur",
          text: "Votre dossier est suivi par la même personne, d’un rendez-vous à l’autre.",
        },
        {
          icon: "clock",
          title: "Du temps pour expliquer",
          text: "Une consultation dure au moins 30 minutes : nous répondons à vos questions avant de commencer.",
        },
        {
          icon: "award",
          title: "Une formation qui continue",
          text: "Les praticiens suivent chaque année des formations en implantologie et en soins conservateurs.",
        },
      ],
    },
  },
  premiereVisite: {
    intro: {
      eyebrow: "Première visite",
      title:
        "Votre première visite, de la porte d’entrée au plan de traitement.",
      description:
        "Ce qu’il faut apporter, ce qui se passe pendant la consultation, et ce que vous emportez en repartant.",
      image: {
        src: IMG.chair,
        alt: "Salle de soins avec un fauteuil dentaire violet, un tabouret assorti et un meuble à tiroirs devant des stores beiges",
      },
    },
    stepsLabel: "Les trois temps de la première visite",
    steps: [
      {
        icon: "clipboard-check",
        title: "Avant la visite",
        text: "Quelques minutes suffisent pour préparer le rendez-vous.",
        points: [
          "Votre carte Vitale et votre attestation de mutuelle",
          "Vos radios récentes, si vous en avez",
          "La liste de vos médicaments et de vos allergies",
        ],
      },
      {
        icon: "file-text",
        title: "Pendant la consultation",
        text: "Environ 45 minutes, sans précipitation.",
        points: [
          "Vos questions et votre motif de venue",
          "Examen complet, radios si elles sont utiles",
          "Explications sur écran, avant toute proposition",
        ],
      },
      {
        icon: "locate-fixed",
        title: "En repartant",
        text: "Vous quittez le cabinet avec tout ce qu’il faut pour décider.",
        points: [
          "Un compte rendu écrit",
          "Un devis détaillé, avec la part remboursée",
          "Le prochain rendez-vous, s’il est nécessaire",
        ],
      },
    ],
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Avant de venir",
      items: [
        {
          question: "J’ai peur du dentiste, est-ce un problème ?",
          answer:
            "Non, c’est très courant. Dites-le à l’accueil : nous prévoyons un rendez-vous plus long et vous décidez à tout moment de faire une pause.",
        },
        {
          question: "Dois-je venir à jeun ?",
          answer:
            "Non. Brossez simplement vos dents avant de venir. Pour un acte sous anesthésie, nous vous donnons les consignes à l’avance.",
        },
        {
          question: "Puis-je venir avec mon enfant ?",
          answer:
            "Oui, dès six ans. Pour les plus jeunes, appelez-nous : nous adaptons la durée de la séance.",
        },
        {
          question: "Que faire si j’ai très mal ?",
          answer:
            "Appelez le secrétariat : un créneau d’urgence est gardé chaque jour d’ouverture, et vous serez vu le jour même.",
        },
      ],
    },
  },
  rendezVous: {
    intro: {
      eyebrow: "Rendez-vous",
      title: "Prenez rendez-vous en deux minutes.",
      description:
        "Choisissez le motif, une date et un créneau. Nous confirmons par e‑mail ou par téléphone dans la journée.",
    },
    form: {
      title: "Votre demande",
      description: "Tous les champs marqués d’une étoile sont nécessaires.",
      submit: "Demander ce rendez-vous",
      name: { label: "Nom et prénom" },
      phone: { label: "Téléphone" },
      email: { label: "E‑mail" },
      patient: {
        label: "Vous êtes",
        placeholder: "Choisir",
        options: [
          { value: "new", label: "Nouveau patient" },
          { value: "existing", label: "Déjà patient du cabinet" },
        ],
      },
      reason: {
        label: "Motif",
        placeholder: "Choisir un motif",
        options: [
          { value: "check", label: "Contrôle et détartrage" },
          { value: "pain", label: "Douleur ou urgence" },
          { value: "aesthetic", label: "Esthétique du sourire" },
          { value: "implant", label: "Implant ou prothèse" },
          { value: "other", label: "Autre demande" },
        ],
      },
      date: { label: "Date souhaitée" },
      slot: {
        label: "Créneau",
        placeholder: "Choisir un créneau",
        options: [
          { value: "morning", label: "Matin, 8 h 30⁠–⁠12 h 00" },
          { value: "noon", label: "Début d’après-midi, 12 h 00⁠–⁠15 h 00" },
          { value: "evening", label: "Fin d’après-midi, 15 h 00⁠–⁠19 h 00" },
        ],
      },
      message: {
        label: "Précisions utiles",
        placeholder: "Dent concernée, douleur, contraintes d’horaires…",
      },
    },
    aside: {
      hoursTitle: "Horaires d’ouverture",
      urgent: {
        title: "Une douleur aujourd’hui ?",
        text: "Ne remplissez pas le formulaire : appelez-nous. Un créneau d’urgence est gardé chaque jour d’ouverture.",
      },
      bring: {
        title: "À apporter",
        items: [
          "Carte Vitale et attestation de mutuelle",
          "Radios et ordonnances récentes",
        ],
      },
    },
  },
  contact: {
    intro: {
      eyebrow: "Contact",
      title: "Nous joindre et venir au cabinet.",
      description:
        "Le secrétariat répond du lundi au samedi. En cas de douleur, appelez plutôt que d’écrire : nous vous répondons de vive voix.",
    },
    access: {
      title: "Venir au cabinet",
      items: [
        {
          icon: "map-pin",
          title: "Accès",
          text: "Entrée de plain-pied, ascenseur et salles de soins accessibles aux fauteuils roulants.",
        },
        {
          icon: "train-front",
          title: "Transports",
          text: "Arrêt de transport en commun à moins de cinq minutes à pied.",
        },
        {
          icon: "parking-circle",
          title: "Stationnement",
          text: "Places de stationnement à proximité et dépose minute devant l’entrée.",
        },
      ],
    },
    form: {
      title: "Écrire au secrétariat",
      description:
        "Pour une question administrative ou un devis. Pour un rendez-vous, appelez-nous ou réservez en ligne.",
      submit: "Envoyer le message",
      name: { label: "Nom et prénom" },
      email: { label: "E‑mail" },
      phone: { label: "Téléphone" },
      message: {
        label: "Votre message",
        placeholder: "Votre question, en quelques lignes",
      },
    },
  },
} as const;

/** Type de la copie d'une langue, dérivé de la version française. */
export type DentisteCopy = WidenLiterals<typeof fr>;

/** Clés d'icône utilisées par la copie (valeurs des propriétés `icon`). */
export type DentisteIconKey = TemplateIconKey<DentisteCopy>;

/**
 * Version anglaise : traduction de la même entreprise fictive, en anglais des
 * États-Unis. La marque devient « Your business » et l'e-mail
 * `contact@example.com` ; le numéro, lui, reste le même numéro manifestement
 * factice. Mêmes clés et mêmes longueurs de liste que `fr` : le type
 * `DentisteCopy` l'impose.
 */
const en: DentisteCopy = {
  brand: {
    name: "Your business",
    initials: "YB",
    tagline: "Family, cosmetic and implant dentistry",
  },
  phone: {
    href: "tel:+33199000018",
    label: "01 99 00 00 18",
  },
  nav: {
    home: "Home",
    soins: "Treatments",
    technologies: "Technology",
    equipe: "Team",
    premiereVisite: "First visit",
    rendezVous: "Appointments",
    contact: "Contact",
  },
  cta: {
    book: "Book an appointment",
    bookShort: "Book",
    call: "Call",
    callSecretary: "Call the front desk",
    seeSoins: "See treatments and prices",
    seeTechnologies: "See our technology",
    meetTeam: "Meet the team",
    prepareFirstVisit: "Prepare my first visit",
  },
  a11y: { quickActions: "Quick actions", facts: "The practice at a glance" },
  topBar: {
    hours: "Mon⁠–⁠Fri 8:30 am⁠–⁠7:00 pm · Sat 9:00 am⁠–⁠1:00 pm",
    promise: "First appointment within 48 hours",
  },
  info: {
    addressLabel: "Address",
    address: "12 Example Street, 00000 Your city",
    hoursLabel: "Hours",
    hours: [
      { day: "Monday⁠–⁠Friday", time: "8:30 am⁠–⁠7:00 pm" },
      { day: "Saturday", time: "9:00 am⁠–⁠1:00 pm" },
      { day: "Sunday", time: "Closed" },
    ],
    emailLabel: "Email",
    email: "contact@example.com",
    phoneLabel: "Phone",
  },
  closing: {
    title: "A checkup, a toothache, a project: book your visit.",
    description:
      "Book online in two minutes or call the front desk. If you are in pain, we keep an emergency slot open every business day.",
  },
  footer: {
    text: "Family dental practice: general care, cosmetic dentistry and implants. By appointment, Monday to Saturday.",
    contactTitle: "Contact",
    hoursTitle: "Hours",
    siteTitle: "The practice",
  },
  meta: {
    home: {
      title: "Your business - Dental practice",
      description:
        "Dental practice: treatments explained first, written estimate before any care, digital X-rays and a first appointment within 48 hours. Book online.",
    },
    soins: {
      title: "Dental treatments - Your business",
      description:
        "Preventive care, fillings, cosmetic dentistry and implants: what we do, our indicative prices and what insurance covers.",
    },
    technologies: {
      title: "Technology - Your business",
      description:
        "Digital X-rays, 3D imaging when needed, optical impressions and traced sterilization: our equipment and what it changes for you.",
    },
    equipe: {
      title: "Team - Your business",
      description:
        "Two dentists and a care coordinator: who treats you, who follows your file and how the team works.",
    },
    premiereVisite: {
      title: "First visit - Your business",
      description:
        "What to bring, how the first consultation goes and what you take home: a written summary, an estimate and a schedule.",
    },
    rendezVous: {
      title: "Appointments - Your business",
      description:
        "Pick a reason, a date and a time slot to book at the practice. Confirmation within the day.",
    },
    contact: {
      title: "Contact and directions - Your business",
      description:
        "Address, hours, phone and directions to the dental practice, with a form to write to the front desk.",
    },
  },
  home: {
    hero: {
      eyebrow: "Dental practice",
      title: "Dental care explained before it is done.",
      description:
        "Exam, targeted X-rays and a written, priced treatment plan: you know what we see, what we recommend and what it costs before we begin. General dentistry, cosmetic work and implants for the whole family.",
      image: {
        src: IMG.cabinet,
        alt: "Very bright treatment room: white and gray dental chair seen from behind, with an overhead light and the instrument arm",
      },
      slot: {
        eyebrow: "Next availability",
        value: "Tomorrow, 10:40 am",
        text: "Checkup, toothache or first visit. Confirmation by email or phone.",
      },
    },
    facts: [
      { value: "48 hours", label: "to get a first appointment" },
      { value: "Written estimate", label: "before any treatment" },
      {
        value: "Direct billing",
        label: "with national insurance and most supplemental plans",
      },
      {
        value: "6 days a week",
        label: "with an emergency slot every business day",
      },
    ],
    soins: {
      eyebrow: "Our treatments",
      title: "Four types of care, one clear path.",
      description:
        "Every treatment is explained before it is done, with its price and the part that insurance covers.",
      image: {
        src: IMG.implant,
        alt: "Gloved hand holding a dental implant topped with a ceramic crown",
      },
      items: [
        {
          title: "Prevention and checkups",
          text: "Yearly exam, cleaning and targeted X-rays: the simplest way to avoid major treatment.",
          price: "Consultation: €30",
        },
        {
          title: "Restorative care",
          text: "Cavities, sensitive teeth, restorations: we save as much healthy tooth as possible.",
          price: "From €40",
        },
        {
          title: "Cosmetic dentistry",
          text: "Whitening, veneers and reshaping, with a preview before you decide.",
          price: "From €350",
        },
        {
          title: "Implants and prosthetics",
          text: "From the first exam to the final crown, step by step, with an itemized estimate.",
          price: "From €1,800",
        },
      ],
    },
    technologies: {
      eyebrow: "Technology",
      title: "Useful equipment, explained on screen.",
      description:
        "A device only comes into the practice if it improves diagnosis or your comfort. You see your images live, together with the dentist.",
      image: {
        src: IMG.xray,
        alt: "Black-and-white panoramic X-ray film showing the teeth and both jaws",
      },
      items: [
        {
          icon: "cpu",
          title: "Digital X-rays",
          text: "Instant images and a lower radiation dose, to compare with your earlier films.",
        },
        {
          icon: "microscope",
          title: "Optical impressions",
          text: "A camera replaces the impression paste: more comfortable and more precise.",
        },
        {
          icon: "shield-check",
          title: "Traced sterilization",
          text: "Every instrument goes through the autoclave, with a recorded log for each load.",
        },
      ],
    },
    visit: {
      eyebrow: "First visit",
      title: "What happens when you come for the first time.",
      image: {
        src: IMG.waiting,
        alt: "Bright waiting room: a potted olive tree and black chairs lined up against a white wall",
      },
      steps: [
        {
          title: "Before: a short questionnaire",
          text: "Reason for your visit, current treatments, allergies. Bring your insurance card and your supplemental plan certificate.",
        },
        {
          title: "During: a full exam",
          text: "Exam, targeted X-rays if needed, explanations on screen. Plan on 45 minutes.",
        },
        {
          title: "After: a written plan",
          text: "A summary, an itemized estimate and a care schedule are handed to you before you leave.",
        },
      ],
    },
    reviews: {
      eyebrow: "Patient reviews",
      title: "What patients remember about their visit.",
      items: [
        {
          quote:
            "I had put this appointment off for three years. They showed me my X-rays, explained every option and gave me a clear estimate. No bad surprises.",
          name: "Claire M.",
          context: "First visit and full exam",
        },
        {
          quote:
            "My son was scared. Dr. Morvan took the time to show him everything before starting, and now he asks when we are going back.",
          name: "Julien P.",
          context: "Children’s care",
        },
        {
          quote:
            "My implant was placed in two appointments, with the schedule given to me up front. The follow-up from the coordinator is really reassuring.",
          name: "Sophie L.",
          context: "Implant and crown",
        },
      ],
    },
  },
  soins: {
    intro: {
      eyebrow: "Treatments",
      title: "All our treatments, with prices and coverage.",
      description:
        "Prevention, restorative care, cosmetic work and implants: what we do, for whom, and what is left for you to pay.",
      image: {
        src: IMG.instruments,
        alt: "Stainless steel dental instruments lined up on a white counter",
      },
    },
    treatmentsLabel: "The four types of care",
    treatments: [
      {
        icon: "stethoscope",
        title: "Prevention and checkups",
        text: "One checkup a year is enough for most patients. We catch early what needs catching and show you how to avoid it.",
        price: "Consultation: €30",
        points: [
          "Full exam and targeted X-rays",
          "Cleaning and polishing",
          "Hygiene advice tailored to your mouth",
        ],
      },
      {
        icon: "syringe",
        title: "Restorative care",
        text: "Cavities, sensitive teeth, old fillings to replace: we treat while keeping as much of the tooth as possible, with careful anesthesia.",
        price: "From €40 per tooth",
        points: [
          "Tooth-colored fillings",
          "Root canal treatment",
          "Emergencies: pain, broken tooth, abscess",
        ],
      },
      {
        icon: "sparkles",
        title: "Cosmetic dentistry",
        text: "Whitening, veneers, correcting shape or shade. You see a preview before deciding anything.",
        price: "From €350",
        points: [
          "Supervised in-office whitening",
          "Ceramic veneers",
          "Preview before treatment",
        ],
      },
      {
        icon: "workflow",
        title: "Implants and prosthetics",
        text: "Replacing one or several teeth: crowns, bridges, implants. The process is long, so we break it into dated, priced steps.",
        price: "From €1,800",
        points: [
          "3D scan and written treatment plan",
          "Guided placement, usually in two appointments",
          "Final crown and regular follow-up",
        ],
      },
    ],
    prices: {
      eyebrow: "Prices and coverage",
      title: "What you pay, and what is reimbursed.",
      description:
        "Indicative prices, excluding special cases. You get a written estimate before any treatment, and we never go over it without your approval.",
      columns: {
        care: "Treatment",
        price: "Indicative price",
        coverage: "Coverage",
      },
      rows: [
        {
          care: "Consultation and exam",
          price: "€30",
          coverage:
            "70% of the base rate reimbursed by national health insurance, the balance by your supplemental plan.",
        },
        {
          care: "Teeth cleaning",
          price: "€30 to €45",
          coverage:
            "70% of the base rate reimbursed, the balance depending on your supplemental plan.",
        },
        {
          care: "Cavity filling",
          price: "€40 to €120",
          coverage: "70% of the base rate reimbursed.",
        },
        {
          care: "Ceramic crown",
          price: "€500 to €600",
          coverage:
            "“100% Health” option at €500: no out-of-pocket cost on a qualifying supplemental plan. Open pricing above that.",
        },
        {
          care: "Whitening",
          price: "€350",
          coverage: "Not reimbursed.",
        },
        {
          care: "Implant and crown",
          price: "€1,800 to €2,400",
          coverage:
            "Not reimbursed by national health insurance; some supplemental plans contribute.",
        },
      ],
      note: "Interest-free installments available for long treatment plans.",
    },
  },
  technologies: {
    intro: {
      eyebrow: "Technology",
      title: "Tools chosen to diagnose better, not to decorate.",
      description:
        "Every piece of equipment answers a precise question: see sooner, treat more finely, bother you less.",
      image: {
        src: IMG.mirrorTool,
        alt: "Dental mirror in the foreground, with a blurred chair and overhead light behind",
      },
    },
    benefitLabel: "For you",
    items: [
      {
        icon: "cpu",
        title: "Digital X-rays",
        text: "The image appears in seconds on the chairside screen, with a radiation dose far below that of a film X-ray.",
        benefit: "You see what we see, and we go over it together.",
      },
      {
        icon: "locate-fixed",
        title: "3D imaging when needed",
        text: "A cone-beam scanner is only used for implants and complex cases, never as routine.",
        benefit:
          "Implant placement planned to the millimeter, so it is shorter.",
      },
      {
        icon: "microscope",
        title: "Optical impressions",
        text: "An intraoral camera replaces impression paste for crowns and prosthetics.",
        benefit: "No more gagging, and a better-fitting crown.",
      },
      {
        icon: "shield-check",
        title: "Traced sterilization",
        text: "Every instrument is washed, then run through the autoclave. The cycle is recorded and tied to the date of your treatment.",
        benefit: "Instruments in a sterile pouch, opened in front of you.",
      },
    ],
    hygiene: {
      eyebrow: "Hygiene",
      title: "The protocol applied to every patient.",
      items: [
        "Surfaces and chair disinfected between each patient.",
        "Class B autoclave, cycles checked and archived.",
        "Treatment unit water tested every quarter.",
        "Single-use items thrown away in front of you.",
      ],
    },
  },
  equipe: {
    intro: {
      eyebrow: "Team",
      title: "Two dentists, one coordinator, one file for you.",
      description:
        "Each patient has a lead dentist and a coordinator who follows their file from the first visit to the last checkup.",
      image: {
        src: IMG.mirror,
        alt: "Gloved hand holding a dental mirror and examination instruments",
      },
    },
    membersLabel: "The practice team",
    members: [
      {
        initials: "IM",
        name: "Dr. Inès Morvan",
        role: "Dentist, restorative and cosmetic care",
        text: "Fillings, prosthetics and cosmetic dentistry. Sees adults and children from age six.",
      },
      {
        initials: "MK",
        name: "Dr. Mehdi Karam",
        role: "Dentist, implants and surgery",
        text: "Implant placement, complex extractions and bone grafts, with surgery guided by 3D imaging.",
      },
      {
        initials: "LP",
        name: "Léna Puech",
        role: "Care coordinator",
        text: "Schedules appointments, prepares estimates and insurance requests, and stays your contact throughout treatment.",
      },
    ],
    practice: {
      eyebrow: "How we work",
      title: "What you can expect from the team.",
      items: [
        {
          icon: "user-round",
          title: "One point of contact",
          text: "Your file is followed by the same person from one appointment to the next.",
        },
        {
          icon: "clock",
          title: "Time to explain",
          text: "A consultation lasts at least 30 minutes: we answer your questions before we start.",
        },
        {
          icon: "award",
          title: "Ongoing training",
          text: "Our dentists take courses every year in implantology and restorative care.",
        },
      ],
    },
  },
  premiereVisite: {
    intro: {
      eyebrow: "First visit",
      title: "Your first visit, from the front door to the treatment plan.",
      description:
        "What to bring, what happens during the consultation, and what you take home when you leave.",
      image: {
        src: IMG.chair,
        alt: "Treatment room with a purple dental chair, a matching stool and a chest of drawers in front of beige blinds",
      },
    },
    stepsLabel: "The three stages of the first visit",
    steps: [
      {
        icon: "clipboard-check",
        title: "Before the visit",
        text: "A few minutes is all it takes to prepare.",
        points: [
          "Your insurance card and supplemental plan certificate",
          "Your recent X-rays, if you have any",
          "A list of your medications and allergies",
        ],
      },
      {
        icon: "file-text",
        title: "During the consultation",
        text: "About 45 minutes, with no rush.",
        points: [
          "Your questions and the reason for your visit",
          "Full exam, X-rays if they are useful",
          "Explanations on screen, before any recommendation",
        ],
      },
      {
        icon: "locate-fixed",
        title: "When you leave",
        text: "You leave with everything you need to decide.",
        points: [
          "A written summary",
          "An itemized estimate, with the reimbursed part",
          "Your next appointment, if one is needed",
        ],
      },
    ],
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Before you come",
      items: [
        {
          question: "I am afraid of the dentist. Is that a problem?",
          answer:
            "Not at all, it is very common. Tell the front desk: we book a longer appointment, and you can ask for a break at any time.",
        },
        {
          question: "Do I need to fast?",
          answer:
            "No. Just brush your teeth before you come. For a procedure under anesthesia, we give you instructions ahead of time.",
        },
        {
          question: "Can I bring my child?",
          answer:
            "Yes, from age six. For younger children, call us and we will adapt the length of the session.",
        },
        {
          question: "What if I am in a lot of pain?",
          answer:
            "Call the front desk: an emergency slot is kept open every business day, and you will be seen the same day.",
        },
      ],
    },
  },
  rendezVous: {
    intro: {
      eyebrow: "Appointments",
      title: "Book an appointment in two minutes.",
      description:
        "Choose the reason, a date and a time slot. We confirm by email or phone within the day.",
    },
    form: {
      title: "Your request",
      description: "All fields marked with a star are required.",
      submit: "Request this appointment",
      name: { label: "Full name" },
      phone: { label: "Phone" },
      email: { label: "Email" },
      patient: {
        label: "You are",
        placeholder: "Choose",
        options: [
          { value: "new", label: "A new patient" },
          { value: "existing", label: "Already a patient here" },
        ],
      },
      reason: {
        label: "Reason",
        placeholder: "Choose a reason",
        options: [
          { value: "check", label: "Checkup and cleaning" },
          { value: "pain", label: "Pain or emergency" },
          { value: "aesthetic", label: "Cosmetic dentistry" },
          { value: "implant", label: "Implant or prosthetic" },
          { value: "other", label: "Something else" },
        ],
      },
      date: { label: "Preferred date" },
      slot: {
        label: "Time slot",
        placeholder: "Choose a time slot",
        options: [
          { value: "morning", label: "Morning, 8:30 am⁠–⁠12:00 pm" },
          { value: "noon", label: "Early afternoon, 12:00⁠–⁠3:00 pm" },
          { value: "evening", label: "Late afternoon, 3:00⁠–⁠7:00 pm" },
        ],
      },
      message: {
        label: "Anything we should know",
        placeholder: "Which tooth, pain, scheduling constraints…",
      },
    },
    aside: {
      hoursTitle: "Opening hours",
      urgent: {
        title: "In pain today?",
        text: "Skip the form and call us. An emergency slot is kept open every business day.",
      },
      bring: {
        title: "What to bring",
        items: [
          "Insurance card and supplemental plan certificate",
          "Recent X-rays and prescriptions",
        ],
      },
    },
  },
  contact: {
    intro: {
      eyebrow: "Contact",
      title: "Reach us and find the practice.",
      description:
        "The front desk answers Monday to Saturday. If you are in pain, call rather than write: you will reach a person.",
    },
    access: {
      title: "Getting here",
      items: [
        {
          icon: "map-pin",
          title: "Access",
          text: "Step-free entrance, elevator and treatment rooms accessible to wheelchair users.",
        },
        {
          icon: "train-front",
          title: "Public transit",
          text: "A public transit stop within a five-minute walk.",
        },
        {
          icon: "parking-circle",
          title: "Parking",
          text: "Parking spots nearby and a drop-off space in front of the entrance.",
        },
      ],
    },
    form: {
      title: "Write to the front desk",
      description:
        "For an administrative question or an estimate. To book a visit, call us or book online.",
      submit: "Send message",
      name: { label: "Full name" },
      email: { label: "Email" },
      phone: { label: "Phone" },
      message: {
        label: "Your message",
        placeholder: "Your question, in a few lines",
      },
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type DentistePage = keyof DentisteCopy["meta"];

export const dentiste: TemplateDefinition<"dentiste", DentisteCopy> = {
  slug: "dentiste",
  /**
   * Palette d'origine : fond menthe clair, encre bleu-vert sombre (aussi
   * couleur d'accent et de panneaux inversés), surfaces blanches, rayon de
   * 14 px. `tint` ajoute un vert d'eau plus soutenu pour les fonds de section.
   */
  theme: {
    surface: "oklch(0.971 0.011 189.8)",
    tint: "oklch(0.936 0.035 190)",
    ink: "oklch(0.297 0.04 216.7)",
    inkMuted: "color-mix(in oklch, var(--tpl-ink) 78%, var(--tpl-surface))",
    line: "oklch(0.88 0.03 191)",
    raised: "oklch(1 0 0)",
    accent: "oklch(0.297 0.04 216.7)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.297 0.04 216.7)",
    inverseInk: "oklch(1 0 0)",
    radius: "0.875rem",
  },
  paths: {
    home: "/dentiste",
    soins: "/dentiste/soins",
    technologies: "/dentiste/technologies",
    equipe: "/dentiste/equipe",
    premiereVisite: "/dentiste/premiere-visite",
    rendezVous: "/dentiste/rendez-vous",
    contact: "/dentiste/contact",
  },
  copy: { fr, en },
};
