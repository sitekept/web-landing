import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « osteopathe » (cabinet d'ostéopathie fictif « Votre entreprise »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/osteopathe/`) n'ont
 * aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `OsteopatheCopy` (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou
 * une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais. Les vues la résolvent avec une table
 * `Record<OsteopatheIconKey, LucideIcon>` (`src/templates/osteopathe/parts.tsx`).
 *
 * Images : sources libres de droits (Unsplash), sans visage de face ni
 * enseigne lisible. Les `alt` sont dans la copie, traduits.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: unsplash("1519823551278-64ac92734fb1"),
  hands: unsplash("1519824145371-296894a0daa9"),
  room: unsplash("1618221195710-dd6b41faaea6"),
  still: unsplash("1540555700478-4be289fbecef"),
  forest: unsplash("1441974231531-c6227db76b6e"),
} as const;

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Cabinet d’ostéopathie",
  },
  phone: {
    href: "tel:+33199000042",
    label: "01 99 00 00 42",
  },
  nav: {
    home: "Accueil",
    consultations: "Consultations",
    approche: "L’approche",
    rendezVous: "Rendez-vous",
  },
  cta: {
    book: "Prendre rendez-vous",
    call: "Appeler le cabinet",
    callShort: "Appeler",
    bookShort: "Rendez-vous",
    seeConsultations: "Voir les consultations",
    discoverApproach: "Découvrir l’approche",
    requestAppointment: "Demander un rendez-vous",
  },
  common: {
    medicalNotice:
      "L’ostéopathie ne remplace pas un avis médical. En cas de symptôme inhabituel, consultez un médecin.",
    hoursLabel: "Horaires",
    hours: [
      { day: "Lundi, mardi, jeudi", time: "9h – 19h" },
      { day: "Mercredi", time: "9h – 13h" },
      { day: "Vendredi", time: "9h – 18h" },
      { day: "Samedi", time: "Matin, sur rendez-vous" },
    ],
    email: "contact@votre-entreprise.example",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    closing: {
      title: "Posez votre question, ou réservez directement.",
      text: "Un appel ou un message suffit pour trouver un créneau qui vous convient.",
    },
  },
  footer: {
    title: "Un cabinet calme, sur rendez-vous.",
    text: "Séances de 45 à 60 minutes pour les adultes, les sportifs, les femmes enceintes et les seniors.",
    contactLabel: "Contact",
    barLabel: "Accès rapide au cabinet",
  },
  meta: {
    home: {
      title: "Votre entreprise - Cabinet d’ostéopathie",
      description:
        "Un cabinet d’ostéopathie calme et lumineux : séances de 45 à 60 minutes pour les adultes, les sportifs, les femmes enceintes et les seniors, sur rendez-vous.",
    },
    consultations: {
      title: "Consultations - Votre entreprise",
      description:
        "Motifs de consultation, publics accueillis, durée, tarifs en euros et ce qu’il faut apporter à votre séance d’ostéopathie.",
    },
    approche: {
      title: "L’approche - Votre entreprise",
      description:
        "Une ostéopathie à votre rythme : écoute, observation, gestes doux et orientation vers un médecin quand il le faut.",
    },
    rendezVous: {
      title: "Rendez-vous - Votre entreprise",
      description:
        "Demandez un rendez-vous d’ostéopathie : choisissez un créneau, retrouvez les horaires, l’adresse et le téléphone du cabinet.",
    },
  },
  home: {
    hero: {
      eyebrow: "Cabinet d’ostéopathie",
      title: "Retrouvez de l’aisance dans votre corps.",
      description:
        "Un cabinet calme, des séances de 45 à 60 minutes et un praticien qui prend le temps d’écouter avant de toucher. Pour les tensions du quotidien, le sport, la grossesse et les années qui passent.",
      facts: [
        "Séance de 45 à 60 minutes",
        "Sur rendez-vous, du lundi au samedi",
        "Remboursement possible selon votre mutuelle",
      ],
      image: {
        src: IMG.hero,
        alt: "Les mains d’un praticien posées sur le dos d’une personne allongée, dans une pièce lumineuse.",
      },
      card: {
        label: "Une séance",
        value: "60 €",
        text: "45 à 60 minutes, échange et conseils compris.",
      },
    },
    forWho: {
      eyebrow: "Pour qui",
      title: "Un cabinet ouvert à chaque moment de la vie adulte.",
      description:
        "Chaque séance s’adapte à votre âge, à votre activité et à ce que vous ressentez ce jour-là.",
      items: [
        {
          icon: "user-round",
          title: "Adultes",
          text: "Tensions du dos ou de la nuque, journées assises, fatigue liée à la posture.",
        },
        {
          icon: "activity",
          title: "Sportifs",
          text: "Gêne après un effort, reprise progressive, préparation et récupération.",
        },
        {
          icon: "heart",
          title: "Femmes enceintes",
          text: "Bas du dos chargé, bassin, inconfort de la grossesse, séances en douceur.",
        },
        {
          icon: "sun",
          title: "Seniors",
          text: "Raideurs, aisance dans les gestes du quotidien, rythme lent et installation confortable.",
        },
      ],
    },
    session: {
      eyebrow: "Déroulé d’une séance",
      title: "Quarante-cinq à soixante minutes, sans précipitation.",
      description:
        "Une séance suit toujours le même fil, pour que vous sachiez à quoi vous attendre.",
      steps: [
        {
          time: "0 – 10 min",
          title: "On commence par parler",
          text: "Votre motif, votre histoire, ce que vous ressentez au quotidien et ce que vous attendez de la séance.",
        },
        {
          time: "10 – 20 min",
          title: "On observe",
          text: "Posture, mobilité, appuis : un examen simple, en tenue souple, pour repérer où le mouvement se raidit.",
        },
        {
          time: "20 – 50 min",
          title: "On travaille en douceur",
          text: "Des gestes manuels lents et adaptés, que vous pouvez interrompre à tout moment.",
        },
        {
          time: "50 – 60 min",
          title: "On conclut ensemble",
          text: "Ce que vous avez senti, des conseils simples pour les jours suivants et la suite à prévoir, ou non.",
        },
      ],
    },
    proof: {
      eyebrow: "Avis",
      title: "Ce que disent les patients",
      description:
        "Note moyenne de 4,8 sur 5, d’après les avis laissés au cabinet.",
      label: "Avis de patients",
      items: [
        {
          quote:
            "Après des semaines devant un écran, ma nuque était très raide. Séance calme, explications claires et des conseils faciles à appliquer. Je bouge avec plus d’aisance.",
          name: "Claire M.",
          detail: "Tensions de nuque",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Reprise de la course après une longue pause. J’ai apprécié qu’on prenne le temps de regarder ma pratique, sans rien promettre de magique.",
          name: "Thomas R.",
          detail: "Sportif",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Enceinte de sept mois, j’avais le bas du dos très chargé. L’installation était confortable et le praticien vraiment à l’écoute.",
          name: "Inès B.",
          detail: "Grossesse",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Cabinet simple et apaisant, horaires respectés. On m’a aussi dit clairement quand il valait mieux voir mon médecin.",
          name: "Marc D.",
          detail: "Première visite",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "À mon âge, je craignais d’être brusquée. Pas du tout : tout s’est fait doucement, à mon rythme.",
          name: "Odile P.",
          detail: "Senior",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Un tarif annoncé à l’avance, une séance claire et une facture détaillée pour ma mutuelle. Rien à redire.",
          name: "Julien S.",
          detail: "Dos et épaules",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
      ],
    },
    pause: {
      quote:
        "Je ne cherche pas à tout faire en une seule séance. J’écoute, je teste, puis je vous laisse le temps de sentir ce qui change.",
      author: "Votre ostéopathe",
      image: {
        src: IMG.forest,
        alt: "Un chemin de terre dans une forêt, traversé par la lumière du matin.",
      },
    },
    practical: {
      eyebrow: "Infos pratiques",
      title: "Venir au cabinet",
      access: {
        label: "Accès",
        text: "Le cabinet est en centre-ville, au rez-de-chaussée, avec un accès de plain-pied. Stationnement et transports en commun à quelques minutes à pied.",
      },
      price: {
        label: "Tarif",
        value: "60 €",
        text: "Séance de 45 à 60 minutes. Remboursement possible selon votre mutuelle : une facture détaillée vous est remise.",
      },
    },
  },
  consultations: {
    hero: {
      eyebrow: "Consultations",
      title: "Des séances pensées pour votre quotidien.",
      description:
        "Un premier échange pour comprendre ce qui vous gêne, puis des gestes adaptés à votre situation. Voici les motifs les plus fréquents et ce qu’il faut savoir avant de venir.",
      image: {
        src: IMG.hands,
        alt: "Les mains d’un praticien posées sur l’épaule d’une personne allongée.",
      },
    },
    reasons: {
      eyebrow: "Motifs fréquents",
      title: "Ce qui vous amène au cabinet",
      description:
        "Une liste indicative : si votre situation n’y figure pas, posez la question avant de réserver.",
      items: [
        {
          icon: "armchair",
          title: "Tensions du dos ou de la nuque",
          text: "Raideurs en fin de journée, gêne après une longue période assis.",
        },
        {
          icon: "dumbbell",
          title: "Gêne après un effort",
          text: "Courbatures qui s’installent, geste mal fait, reprise du sport.",
        },
        {
          icon: "sunrise",
          title: "Raideur au réveil",
          text: "Difficulté à se mettre en mouvement le matin.",
        },
        {
          icon: "wind",
          title: "Tensions aux épaules et à la mâchoire",
          text: "Souvent liées au stress, aux écrans ou à une mauvaise nuit.",
        },
        {
          icon: "heart",
          title: "Inconfort pendant la grossesse",
          text: "Bas du dos chargé, bassin, sommeil moins confortable.",
        },
        {
          icon: "footprints",
          title: "Gêne dans les gestes du quotidien",
          text: "Monter un escalier, se pencher, porter des courses.",
        },
      ],
    },
    audiences: {
      eyebrow: "Selon votre situation",
      title: "Chaque public, une séance adaptée.",
      items: [
        {
          title: "Adultes",
          text: "Séance classique de 45 à 60 minutes : échange, examen, gestes manuels, conseils. Adaptée à une gêne récente ou à des tensions qui reviennent.",
        },
        {
          title: "Sportifs",
          text: "Un bilan de votre pratique, de vos charges d’entraînement et de vos gênes. Possible avant une reprise ou après une compétition.",
        },
        {
          title: "Femmes enceintes",
          text: "Séances douces, positions adaptées à chaque trimestre. L’accord de votre médecin ou de votre sage-femme est bienvenu si la grossesse est suivie de près.",
        },
        {
          title: "Seniors",
          text: "Rythme lent, installation confortable et gestes très progressifs. Vous pouvez venir accompagné.",
        },
      ],
    },
    pricing: {
      eyebrow: "Durée et tarifs",
      title: "Des tarifs clairs, annoncés à l’avance.",
      description: "Tous les prix sont en euros, toutes taxes comprises.",
      caption: "Tarifs des séances par public",
      columns: {
        service: "Séance",
        duration: "Durée",
        price: "Tarif",
      },
      rows: [
        { service: "Adulte", duration: "45 à 60 min", price: "60 €" },
        {
          service: "Sportif, avec bilan de pratique",
          duration: "60 min",
          price: "65 €",
        },
        { service: "Femme enceinte", duration: "45 min", price: "60 €" },
        {
          service: "Senior, 65 ans et plus",
          duration: "45 min",
          price: "55 €",
        },
      ],
      note: "Remboursement possible selon votre mutuelle et les conditions de votre contrat : demandez-nous une facture détaillée.",
    },
    bring: {
      eyebrow: "Avant de venir",
      title: "Ce qu’il vous faut apporter",
      items: [
        {
          icon: "file-text",
          text: "Vos comptes rendus, radios ou examens récents, s’il y en a.",
        },
        {
          icon: "shirt",
          text: "Une tenue souple, dans laquelle vous êtes à l’aise.",
        },
        {
          icon: "pill",
          text: "La liste de vos traitements en cours.",
        },
        {
          icon: "credit-card",
          text: "Votre moyen de paiement, et votre attestation de mutuelle si vous souhaitez un remboursement.",
        },
      ],
    },
    limits: {
      eyebrow: "Limites",
      title: "Quand consulter un médecin d’abord",
      text: "L’ostéopathie ne remplace pas un avis médical. Consultez un médecin avant de prendre rendez-vous, ou à la place, si vous avez :",
      items: [
        "de la fièvre ou un état général qui vous inquiète ;",
        "une douleur brutale, très intense ou qui ne cède pas au repos ;",
        "une perte de force, un engourdissement ou des fourmillements qui s’étendent ;",
        "un traumatisme récent, comme une chute ou un accident ;",
        "une douleur dans la poitrine ou une gêne pour respirer.",
      ],
      closing:
        "En cas de symptôme inhabituel, consultez un médecin. En cas d’urgence, appelez les secours. Le cabinet ne reçoit pas les nourrissons.",
    },
  },
  approche: {
    hero: {
      eyebrow: "L’approche",
      title: "Une ostéopathie à votre rythme.",
      description:
        "Pas de promesse spectaculaire : une écoute attentive, des gestes proportionnés et des conseils que vous pouvez appliquer chez vous.",
    },
    steps: {
      eyebrow: "La méthode",
      title: "Quatre temps, toujours dans le même ordre.",
      items: [
        {
          title: "Écouter",
          text: "Votre histoire passe avant tout geste : ce que vous ressentez, depuis quand, et ce qui vous gêne vraiment au quotidien.",
        },
        {
          title: "Observer",
          text: "Un examen simple de la posture et du mouvement, sans rien précipiter, pour comprendre la situation dans son ensemble.",
        },
        {
          title: "Accompagner",
          text: "Des gestes manuels doux, adaptés à votre âge et à votre confort. Vous guidez le rythme et pouvez tout arrêter à tout moment.",
        },
        {
          title: "Orienter",
          text: "Quand la situation sort du cadre de l’ostéopathie, je vous le dis et je vous invite à voir votre médecin.",
        },
      ],
    },
    cabinet: {
      eyebrow: "Le cabinet",
      title: "Une pièce simple, lumineuse et silencieuse.",
      description:
        "Lumière du jour, matières naturelles, peu d’objets : tout est fait pour que vous puissiez vous détendre dès l’entrée.",
      label: "Photos du cabinet",
      items: [
        {
          title: "La salle de soin",
          meta: "Lumière du jour",
          image: {
            src: IMG.room,
            alt: "Une pièce lumineuse aux murs clairs, avec du bois, des plantes et un grand canapé.",
          },
        },
        {
          title: "Les mains",
          meta: "Gestes lents",
          image: {
            src: IMG.hands,
            alt: "Les mains d’un praticien posées sur l’épaule d’une personne allongée.",
          },
        },
        {
          title: "Le temps de pause",
          meta: "Avant et après",
          image: {
            src: IMG.still,
            alt: "Une serviette roulée, une bougie allumée et un bouquet de tulipes sur une table blanche.",
          },
        },
      ],
    },
    training: {
      eyebrow: "Formation",
      title: "Un praticien formé et suivi.",
      description:
        "Votre ostéopathe est diplômé d’un établissement agréé et met régulièrement ses pratiques à jour.",
      items: [
        {
          icon: "graduation-cap",
          title: "Un diplôme reconnu",
          text: "Formation complète d’ostéopathe dans un établissement agréé.",
        },
        {
          icon: "book-open",
          title: "Formation continue",
          text: "Mise à jour régulière des connaissances et des pratiques.",
        },
        {
          icon: "users",
          title: "Travail en réseau",
          text: "Échanges avec votre médecin et d’autres professionnels de santé lorsque votre situation le demande.",
        },
      ],
    },
  },
  rendezVous: {
    hero: {
      eyebrow: "Rendez-vous",
      title: "Choisissez le créneau qui vous convient.",
      description:
        "Remplissez le formulaire ou appelez le cabinet. Nous vous répondons pour confirmer l’horaire.",
      image: {
        src: IMG.room,
        alt: "Une pièce lumineuse aux murs clairs, avec du bois, des plantes et un grand canapé.",
      },
    },
    form: {
      title: "Votre demande",
      intro:
        "Quelques lignes suffisent : indiquez le motif de votre venue et vos disponibilités.",
      submit: "Envoyer ma demande",
      fields: {
        name: "Nom et prénom",
        phone: "Téléphone",
        email: "E-mail",
        reason: "Motif de la consultation",
        reasonPlaceholder: "Choisir un motif",
        reasons: [
          { value: "dos-nuque", label: "Tensions du dos ou de la nuque" },
          { value: "effort", label: "Gêne après un effort" },
          { value: "grossesse", label: "Inconfort pendant la grossesse" },
          { value: "raideur", label: "Raideur ou gêne au quotidien" },
          { value: "autre", label: "Autre motif" },
        ],
        slot: "Créneau préféré",
        slotPlaceholder: "Choisir un créneau",
        slots: [
          { value: "matin", label: "Matin" },
          { value: "midi", label: "Pause déjeuner" },
          { value: "apres-midi", label: "Après-midi" },
          { value: "fin-journee", label: "Fin de journée" },
          { value: "samedi", label: "Samedi matin" },
        ],
        message: "Message (facultatif)",
      },
    },
    details: {
      title: "Le cabinet",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Adresse",
      accessLabel: "Accès",
      access: "Centre-ville, rez-de-chaussée, accès de plain-pied.",
    },
  },
};

type FrCopy = typeof fr;

/** Type de la copie, dérivé du français (clés, longueurs de listes, clés `icon`). */
export type OsteopatheCopy = WidenLiterals<FrCopy>;

/** Clé d'une icône utilisée dans la copie (table dans `parts.tsx`). */
export type OsteopatheIconKey = TemplateIconKey<OsteopatheCopy>;

const en: OsteopatheCopy = {
  brand: {
    name: "Your business",
    tagline: "Osteopathy practice",
  },
  phone: {
    href: "tel:+33199000042",
    label: "01 99 00 00 42",
  },
  nav: {
    home: "Home",
    consultations: "Consultations",
    approche: "Our approach",
    rendezVous: "Appointments",
  },
  cta: {
    book: "Book an appointment",
    call: "Call the practice",
    callShort: "Call",
    bookShort: "Book",
    seeConsultations: "See the consultations",
    discoverApproach: "Discover our approach",
    requestAppointment: "Request an appointment",
  },
  common: {
    medicalNotice:
      "Osteopathy does not replace medical advice. If you have an unusual symptom, see a doctor.",
    hoursLabel: "Opening hours",
    hours: [
      { day: "Monday, Tuesday, Thursday", time: "9 am – 7 pm" },
      { day: "Wednesday", time: "9 am – 1 pm" },
      { day: "Friday", time: "9 am – 6 pm" },
      { day: "Saturday", time: "Morning, by appointment" },
    ],
    email: "contact@example.com",
    address: "12 Example Street, 00000 Your city",
    closing: {
      title: "Ask your question, or book directly.",
      text: "A call or a message is all it takes to find a time that suits you.",
    },
  },
  footer: {
    title: "A calm practice, by appointment.",
    text: "45 to 60 minute sessions for adults, athletes, pregnant women and seniors.",
    contactLabel: "Contact",
    barLabel: "Quick access to the practice",
  },
  meta: {
    home: {
      title: "Your business - Osteopathy practice",
      description:
        "A calm, bright osteopathy practice: 45 to 60 minute sessions for adults, athletes, pregnant women and seniors, by appointment.",
    },
    consultations: {
      title: "Consultations - Your business",
      description:
        "Reasons to consult, who we see, session length, prices in euros and what to bring to your osteopathy session.",
    },
    approche: {
      title: "Our approach - Your business",
      description:
        "Osteopathy at your own pace: listening, observation, gentle techniques and a referral to a doctor when needed.",
    },
    rendezVous: {
      title: "Appointments - Your business",
      description:
        "Request an osteopathy appointment: choose a time slot and find the practice’s hours, address and phone number.",
    },
  },
  home: {
    hero: {
      eyebrow: "Osteopathy practice",
      title: "Find ease in your body again.",
      description:
        "A calm practice, 45 to 60 minute sessions and a practitioner who takes the time to listen before touching. For everyday tension, sport, pregnancy and the years that go by.",
      facts: [
        "45 to 60 minute sessions",
        "By appointment, Monday to Saturday",
        "Possible reimbursement depending on your health insurance",
      ],
      image: {
        src: IMG.hero,
        alt: "A practitioner’s hands resting on the back of a person lying down, in a bright room.",
      },
      card: {
        label: "One session",
        value: "€60",
        text: "45 to 60 minutes, conversation and advice included.",
      },
    },
    forWho: {
      eyebrow: "Who it is for",
      title: "A practice open at every stage of adult life.",
      description:
        "Each session adapts to your age, your activity and how you feel that day.",
      items: [
        {
          icon: "user-round",
          title: "Adults",
          text: "Back or neck tension, long days seated, posture-related fatigue.",
        },
        {
          icon: "activity",
          title: "Athletes",
          text: "Discomfort after exertion, gradual return to training, preparation and recovery.",
        },
        {
          icon: "heart",
          title: "Pregnant women",
          text: "A heavy lower back, pelvis, pregnancy discomfort, gentle sessions.",
        },
        {
          icon: "sun",
          title: "Seniors",
          text: "Stiffness, ease in everyday movements, a slow pace and a comfortable setup.",
        },
      ],
    },
    session: {
      eyebrow: "How a session goes",
      title: "Forty-five to sixty minutes, never rushed.",
      description:
        "Every session follows the same thread, so you know what to expect.",
      steps: [
        {
          time: "0 – 10 min",
          title: "We start by talking",
          text: "Your reason for coming, your history, how you feel day to day and what you hope for from the session.",
        },
        {
          time: "10 – 20 min",
          title: "We observe",
          text: "Posture, mobility, support points: a simple check, in loose clothing, to see where movement gets stiff.",
        },
        {
          time: "20 – 50 min",
          title: "We work gently",
          text: "Slow, adapted manual techniques that you can stop at any moment.",
        },
        {
          time: "50 – 60 min",
          title: "We wrap up together",
          text: "What you felt, simple advice for the following days and what comes next, if anything.",
        },
      ],
    },
    proof: {
      eyebrow: "Reviews",
      title: "What patients say",
      description:
        "Average rating of 4.8 out of 5, based on reviews left at the practice.",
      label: "Patient reviews",
      items: [
        {
          quote:
            "After weeks in front of a screen, my neck was very stiff. A calm session, clear explanations and advice that was easy to apply. I move with more ease.",
          name: "Claire M.",
          detail: "Neck tension",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Getting back to running after a long break. I liked that we took the time to look at my training, without any magic promises.",
          name: "Thomas R.",
          detail: "Athlete",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Seven months pregnant, my lower back felt very heavy. The setup was comfortable and the practitioner really listened.",
          name: "Inès B.",
          detail: "Pregnancy",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "A simple, soothing practice and appointments on time. I was also told clearly when it was better to see my doctor.",
          name: "Marc D.",
          detail: "First visit",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
        {
          quote:
            "At my age, I was afraid of being handled roughly. Not at all: everything went slowly, at my pace.",
          name: "Odile P.",
          detail: "Senior",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "A price given in advance, a clear session and an itemized invoice for my insurer. Nothing to complain about.",
          name: "Julien S.",
          detail: "Back and shoulders",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
      ],
    },
    pause: {
      quote:
        "I do not try to do everything in a single session. I listen, I test, and then I give you time to feel what changes.",
      author: "Your osteopath",
      image: {
        src: IMG.forest,
        alt: "A dirt path through a forest, crossed by the morning light.",
      },
    },
    practical: {
      eyebrow: "Practical information",
      title: "Visiting the practice",
      access: {
        label: "Getting here",
        text: "The practice is downtown, on the ground floor, with step-free access. Parking and public transport are a few minutes’ walk away.",
      },
      price: {
        label: "Price",
        value: "€60",
        text: "A 45 to 60 minute session. Possible reimbursement depending on your health insurance: you receive an itemized invoice.",
      },
    },
  },
  consultations: {
    hero: {
      eyebrow: "Consultations",
      title: "Sessions designed around your daily life.",
      description:
        "A first conversation to understand what bothers you, then techniques adapted to your situation. Here are the most common reasons to come and what to know before your visit.",
      image: {
        src: IMG.hands,
        alt: "A practitioner’s hands resting on the shoulder of a person lying down.",
      },
    },
    reasons: {
      eyebrow: "Common reasons",
      title: "What brings you to the practice",
      description:
        "An indicative list: if your situation is not on it, ask before you book.",
      items: [
        {
          icon: "armchair",
          title: "Back or neck tension",
          text: "Stiffness at the end of the day, discomfort after sitting for a long time.",
        },
        {
          icon: "dumbbell",
          title: "Discomfort after exertion",
          text: "Lingering soreness, an awkward movement, returning to sport.",
        },
        {
          icon: "sunrise",
          title: "Morning stiffness",
          text: "Difficulty getting moving in the morning.",
        },
        {
          icon: "wind",
          title: "Shoulder and jaw tension",
          text: "Often linked to stress, screens or a bad night’s sleep.",
        },
        {
          icon: "heart",
          title: "Discomfort during pregnancy",
          text: "A heavy lower back, pelvis, less comfortable sleep.",
        },
        {
          icon: "footprints",
          title: "Difficulty with everyday movements",
          text: "Climbing stairs, bending over, carrying groceries.",
        },
      ],
    },
    audiences: {
      eyebrow: "Depending on your situation",
      title: "Every patient, an adapted session.",
      items: [
        {
          title: "Adults",
          text: "A standard 45 to 60 minute session: conversation, check, manual techniques, advice. Suited to recent discomfort or tension that keeps coming back.",
        },
        {
          title: "Athletes",
          text: "A review of your sport, your training load and your aches. Possible before returning to training or after a competition.",
        },
        {
          title: "Pregnant women",
          text: "Gentle sessions, with positions adapted to each trimester. Approval from your doctor or midwife is welcome if your pregnancy is closely monitored.",
        },
        {
          title: "Seniors",
          text: "A slow pace, a comfortable setup and very gradual techniques. You are welcome to bring someone with you.",
        },
      ],
    },
    pricing: {
      eyebrow: "Length and prices",
      title: "Clear prices, given in advance.",
      description: "All prices are in euros, taxes included.",
      caption: "Session prices by type of patient",
      columns: {
        service: "Session",
        duration: "Length",
        price: "Price",
      },
      rows: [
        { service: "Adult", duration: "45 to 60 min", price: "€60" },
        {
          service: "Athlete, with a review of your training",
          duration: "60 min",
          price: "€65",
        },
        { service: "Pregnant woman", duration: "45 min", price: "€60" },
        {
          service: "Senior, 65 and over",
          duration: "45 min",
          price: "€55",
        },
      ],
      note: "Possible reimbursement depending on your health insurance and the terms of your policy: ask us for an itemized invoice.",
    },
    bring: {
      eyebrow: "Before you come",
      title: "What to bring",
      items: [
        {
          icon: "file-text",
          text: "Any recent reports, X-rays or test results you have.",
        },
        {
          icon: "shirt",
          text: "Loose clothing you feel comfortable in.",
        },
        {
          icon: "pill",
          text: "A list of the treatments you are currently taking.",
        },
        {
          icon: "credit-card",
          text: "Your payment method, and your insurance certificate if you want to be reimbursed.",
        },
      ],
    },
    limits: {
      eyebrow: "Limits",
      title: "When to see a doctor first",
      text: "Osteopathy does not replace medical advice. See a doctor before booking, or instead of booking, if you have:",
      items: [
        "a fever, or a general condition that worries you;",
        "sudden, very intense pain, or pain that does not ease with rest;",
        "a loss of strength, numbness or tingling that is spreading;",
        "a recent injury, such as a fall or an accident;",
        "chest pain or difficulty breathing.",
      ],
      closing:
        "If you have an unusual symptom, see a doctor. In an emergency, call the emergency services. The practice does not see infants.",
    },
  },
  approche: {
    hero: {
      eyebrow: "Our approach",
      title: "Osteopathy at your own pace.",
      description:
        "No spectacular promises: attentive listening, proportionate techniques and advice you can apply at home.",
    },
    steps: {
      eyebrow: "The method",
      title: "Four steps, always in the same order.",
      items: [
        {
          title: "Listen",
          text: "Your story comes before any technique: what you feel, since when, and what really bothers you day to day.",
        },
        {
          title: "Observe",
          text: "A simple check of posture and movement, without rushing, to understand the situation as a whole.",
        },
        {
          title: "Support",
          text: "Gentle manual techniques, adapted to your age and comfort. You set the pace and can stop at any time.",
        },
        {
          title: "Refer",
          text: "When a situation falls outside osteopathy, I tell you so and encourage you to see your doctor.",
        },
      ],
    },
    cabinet: {
      eyebrow: "The practice",
      title: "A simple, bright and quiet room.",
      description:
        "Daylight, natural materials, few objects: everything is designed so you can relax as soon as you walk in.",
      label: "Photos of the practice",
      items: [
        {
          title: "The treatment room",
          meta: "Daylight",
          image: {
            src: IMG.room,
            alt: "A bright room with light walls, wood, plants and a large sofa.",
          },
        },
        {
          title: "The hands",
          meta: "Slow techniques",
          image: {
            src: IMG.hands,
            alt: "A practitioner’s hands resting on the shoulder of a person lying down.",
          },
        },
        {
          title: "A moment to pause",
          meta: "Before and after",
          image: {
            src: IMG.still,
            alt: "A rolled towel, a lit candle and a bunch of tulips on a white table.",
          },
        },
      ],
    },
    training: {
      eyebrow: "Training",
      title: "A trained, regularly updated practitioner.",
      description:
        "Your osteopath graduated from an accredited school and regularly updates their practice.",
      items: [
        {
          icon: "graduation-cap",
          title: "A recognized degree",
          text: "Full osteopathy training at an accredited school.",
        },
        {
          icon: "book-open",
          title: "Ongoing training",
          text: "Regular updates to knowledge and practice.",
        },
        {
          icon: "users",
          title: "Working in a network",
          text: "Exchanges with your doctor and other health professionals when your situation calls for it.",
        },
      ],
    },
  },
  rendezVous: {
    hero: {
      eyebrow: "Appointments",
      title: "Choose the time that suits you.",
      description:
        "Fill in the form or call the practice. We will get back to you to confirm the time.",
      image: {
        src: IMG.room,
        alt: "A bright room with light walls, wood, plants and a large sofa.",
      },
    },
    form: {
      title: "Your request",
      intro:
        "A few lines are enough: tell us why you are coming in and when you are available.",
      submit: "Send my request",
      fields: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        reason: "Reason for the consultation",
        reasonPlaceholder: "Choose a reason",
        reasons: [
          { value: "dos-nuque", label: "Back or neck tension" },
          { value: "effort", label: "Discomfort after exertion" },
          { value: "grossesse", label: "Discomfort during pregnancy" },
          { value: "raideur", label: "Stiffness or everyday discomfort" },
          { value: "autre", label: "Another reason" },
        ],
        slot: "Preferred time",
        slotPlaceholder: "Choose a time",
        slots: [
          { value: "matin", label: "Morning" },
          { value: "midi", label: "Lunch break" },
          { value: "apres-midi", label: "Afternoon" },
          { value: "fin-journee", label: "End of the day" },
          { value: "samedi", label: "Saturday morning" },
        ],
        message: "Message (optional)",
      },
    },
    details: {
      title: "The practice",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      accessLabel: "Getting here",
      access: "Downtown, ground floor, step-free access.",
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type OsteopathePage = keyof OsteopatheCopy["meta"];

export const osteopathe: TemplateDefinition<"osteopathe", OsteopatheCopy> = {
  slug: "osteopathe",
  /**
   * Palette calme et chaleureuse : surface sable clair, encre brun-vert
   * profond, accent argile désaturé (boutons, étoiles) et fond inverse vert
   * forêt. Instrument Serif en affichage, Inter en texte, rayons doux, ombres
   * très légères.
   */
  theme: {
    surface: "oklch(0.955 0.02 85)",
    raised: "oklch(0.982 0.012 85)",
    ink: "oklch(0.27 0.035 140)",
    inkMuted: "color-mix(in oklch, var(--tpl-ink) 74%, var(--tpl-surface))",
    line: "oklch(0.86 0.03 85)",
    accent: "oklch(0.5 0.095 45)",
    accentInk: "oklch(0.98 0.01 85)",
    inverse: "oklch(0.3 0.05 155)",
    inverseInk: "oklch(0.96 0.02 85)",
    radius: "1.25rem",
    fontDisplay:
      "var(--font-display-serif), ui-serif, Georgia, 'Times New Roman', serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 400,
    shadowSm: "0 1px 2px color-mix(in oklch, var(--tpl-ink) 6%, transparent)",
    shadowLg:
      "0 24px 48px -28px color-mix(in oklch, var(--tpl-ink) 22%, transparent)",
  },
  paths: {
    home: "/osteopathe",
    consultations: "/osteopathe/consultations",
    approche: "/osteopathe/approche",
    rendezVous: "/osteopathe/rendez-vous",
  },
  copy: { fr, en },
};
