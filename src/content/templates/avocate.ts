import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « avocate » (cabinet d'avocate fictif « Votre cabinet » : immobilier,
 * successions et droit de la famille).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, formulaire, `alt`, métadonnées. Les vues (`src/templates/avocate/`)
 * n'ont aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `AvocateCopy`
 * (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou une liste de
 * longueur différente fait échouer `pnpm type-check`.
 *
 * Images : sources libres de droits (Unsplash), sans visage, sans marque ni
 * texte lisible. Les `alt` sont dans la copie, traduits.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=80`;

const IMG = {
  hero: unsplash("1758413149985-acd44fa6eae6"),
  desk: unsplash("1450101499163-c8848c66ca85"),
} as const;

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sem sed lorem tempor posuere.";
const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor, lacus in finibus aliquam, augue justo dictum elit, vitae gravida erat lorem sed arcu. Integer luctus neque a mauris tempor, sed dignissim lacus cursus.";

const fr = {
  brand: {
    name: "Votre cabinet",
    tagline: "Avocate au barreau — conseil et contentieux",
  },
  topBar: {
    left: "Votre ville",
    right: "Immobilier, successions et droit de la famille",
  },
  nav: {
    home: "Accueil",
    expertises: "Expertises",
    blog: "Blog",
    contact: "Contact",
  },
  cta: {
    contact: "Prendre contact",
    seeExpertises: "Voir les expertises",
  },
  phone: {
    href: "tel:+33199000085",
    label: "01 99 00 00 85",
  },
  form: {
    fields: {
      name: "Nom",
      email: "Email",
      phone: "Téléphone",
      subject: "Sujet",
      subjectPlaceholder: "Sélectionner un sujet",
      subjects: [
        { value: "immobilier", label: "Immobilier" },
        { value: "successions", label: "Successions" },
        { value: "famille", label: "Droit de la famille" },
        { value: "premier-echange", label: "Premier échange" },
      ],
      message: "Message",
    },
    consent:
      "J’accepte d’être recontacté concernant ma demande. Ce formulaire est une interface de démonstration, sans envoi API pour le moment.",
    submit: "Envoyer la demande",
  },
  footer: {
    text: "Modèle de site professionnel pour présenter les expertises en droit immobilier, successions et droit de la famille, avec une prise de contact front-only.",
    city: "Votre ville",
    email: "contact@votre-cabinet.example",
    hours: "Sur rendez-vous",
  },
  home: {
    hero: {
      eyebrow: "Avocate au barreau",
      title: "Votre cabinet",
      description:
        "Conseil et contentieux en droit immobilier, successions et droit de la famille, avec une lecture claire des documents, des risques et des interlocuteurs.",
      image: { src: IMG.hero, alt: "" },
      aside: {
        title: "Dossiers traités avec sobriété, précision et coordination.",
        text: "Un parcours simple : comprendre le champ d’intervention, lire quelques contenus de blog, puis envoyer une demande structurée depuis le module de contact.",
      },
    },
    expertises: {
      eyebrow: "Expertises",
      title: "Deux champs d’intervention pour des dossiers souvent sensibles.",
      description:
        "Le site évite la dispersion et met en avant les situations où la coordination entre droit, documents et interlocuteurs devient déterminante.",
      cards: [
        {
          title: "Immobilier",
          text: "Sécurisation des acquisitions, ventes, documents contractuels, vérifications préalables et situations litigieuses.",
          items: [
            "Acquisition et vente",
            "Contrats et documents",
            "Litiges immobiliers",
          ],
        },
        {
          title: "Successions et droit de la famille",
          text: "Accompagnement des dossiers familiaux : règlement de succession, partage, héritiers, documents et démarches auprès des notaires.",
          items: [
            "Règlement de succession et partage",
            "Coordination notariale",
            "Documents et héritiers",
          ],
        },
      ],
    },
    method: {
      eyebrow: "Méthode",
      title: "Une première lecture structurée avant d’engager une démarche.",
      description:
        "Chaque échange doit permettre de situer le dossier, d’identifier les pièces utiles et de prioriser les prochaines actions.",
      steps: [
        {
          label: "Étape 1",
          text: "Qualification du dossier, des juridictions concernées et des documents disponibles.",
        },
        {
          label: "Étape 2",
          text: "Lecture des risques, des interlocuteurs et des délais utiles avant toute démarche.",
        },
        {
          label: "Étape 3",
          text: "Plan d’action clair : sécuriser, négocier, transmettre, contester ou coordonner.",
        },
      ],
    },
    approach: {
      eyebrow: "Approche",
      title: "Un positionnement clair, pensé pour les dossiers complexes.",
      description:
        "Immobilier, héritiers, actes, coordination notariale et délais administratifs doivent être mis dans le bon ordre.",
      image: {
        src: IMG.desk,
        alt: "Une main signe un document posé sur un bureau",
      },
      panel: {
        title: "Clarifier les responsabilités et les pièces dès le départ.",
        text: "L’objectif est de rendre lisible la spécialité du cabinet sans multiplier les promesses : un visiteur doit comprendre rapidement si son sujet relève de l’immobilier, d’une succession ou du droit de la famille.",
        items: [
          "Dossier lié à un bien immobilier, à une succession ou à un litige familial.",
          "Documents déjà disponibles à vérifier et organiser.",
          "Prochaine action à définir avant tout échange prolongé.",
        ],
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "Une page blog prévue pour installer l’expertise.",
      description:
        "Les contenus restent en placeholder lorem ipsum, avec trois entrées visibles et une structure prête à enrichir.",
      label: "Note de blog",
      posts: [
        "Acheter un bien immobilier : les vérifications à faire avant de signer",
        "Succession : les premiers documents à réunir",
        "Pourquoi cadrer le dossier avant de contacter plusieurs interlocuteurs",
      ],
      excerpt: LOREM,
    },
    contact: {
      eyebrow: "Contact",
      title: "Un module de contact prêt pour l’intégration API.",
      description:
        "Le formulaire fonctionne en front-only dans cette démonstration : il bloque l’envoi réseau et confirme localement la demande.",
      info: {
        title: "Informations utiles",
        items: [
          "Sujet immobilier ou successoral.",
          "Parties concernées et interlocuteurs déjà identifiés.",
          "Documents déjà reçus, signés ou demandés.",
          "Délais connus ou urgence particulière.",
        ],
      },
    },
  },
  expertises: {
    hero: {
      eyebrow: "Expertises",
      title: "Immobilier, successions et droit de la famille.",
      description:
        "La page détaille les deux champs d’intervention présentés sur l’accueil, sans élargir artificiellement le périmètre.",
    },
    areaLabel: "Domaine",
    areas: [
      {
        title: "Immobilier",
        intro:
          "Accompagner les opérations et difficultés immobilières avec une attention particulière aux documents, aux engagements et aux interlocuteurs.",
        items: [
          "Acquisition ou vente d’un bien, avec vérification des parties et des pièces.",
          "Vérification des documents transmis avant engagement.",
          "Lecture contractuelle, négociation et sécurisation des étapes.",
          "Litige, retard, inexécution ou blocage dans une opération.",
        ],
      },
      {
        title: "Successions et droit de la famille",
        intro:
          "Cadrer les dossiers successoraux et familiaux où les héritiers, les biens, les documents ou les interlocuteurs sont multiples.",
        items: [
          "Identification des héritiers, biens et documents disponibles.",
          "Coordination avec notaires, conseils et interlocuteurs familiaux.",
          "Organisation des pièces utiles au dossier de succession ou de partage.",
          "Lecture des délais, demandes complémentaires et points de blocage.",
        ],
      },
    ],
    file: {
      eyebrow: "Dossier",
      title: "Ce qu’un premier message doit permettre de comprendre.",
      description:
        "La prise de contact doit situer le sujet, les parties concernées, les documents disponibles et l’objectif immédiat.",
      items: [
        "Nature du dossier",
        "Parties concernées",
        "Documents reçus",
        "Délai ou urgence",
      ],
    },
  },
  blog: {
    hero: {
      eyebrow: "Blog",
      title: "Notes juridiques et repères pratiques.",
      description:
        "Page de démonstration. Les contenus définitifs pourront être rédigés et branchés plus tard.",
    },
    articleLabel: "Article",
    placeholder: "Placeholder",
    posts: [
      "Immobilier : préparer une acquisition et sécuriser les documents",
      "Succession : organiser les premières pièces du dossier",
      "Droit de la famille : pourquoi clarifier les interlocuteurs avant d’agir",
    ],
    excerpt: LOREM_LONG,
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Envoyer une demande au cabinet.",
      description:
        "Le formulaire est prêt côté interface. Dans cette démonstration, il ne déclenche aucune API et affiche uniquement une confirmation locale.",
    },
    before: {
      title: "Avant d’écrire",
      text: "Un premier message utile mentionne le sujet, les parties concernées, les documents disponibles et le délai éventuel.",
      items: [
        "Immobilier, succession ou droit de la famille.",
        "Bien, héritiers ou interlocuteurs concernés.",
        "Documents déjà reçus ou signés.",
        "Objectif immédiat du premier échange.",
      ],
    },
  },
  meta: {
    home: {
      title: "Votre cabinet - Avocate au barreau",
      description:
        "Modèle de site pour une avocate : conseil et contentieux en droit immobilier, successions et droit de la famille.",
    },
    expertises: {
      title: "Expertises - Votre cabinet",
      description:
        "Immobilier, successions et droit de la famille : les deux champs d’intervention du cabinet, sans élargir artificiellement le périmètre.",
    },
    blog: {
      title: "Blog - Votre cabinet",
      description:
        "Notes juridiques et repères pratiques : page de démonstration dont les contenus définitifs pourront être rédigés et branchés plus tard.",
    },
    contact: {
      title: "Contact - Votre cabinet",
      description:
        "Envoyer une demande au cabinet : formulaire de démonstration, sans API, qui affiche uniquement une confirmation locale.",
    },
  },
} as const;

export type AvocateCopy = WidenLiterals<typeof fr>;

const en: AvocateCopy = {
  brand: {
    name: "Your firm",
    tagline: "Attorney at law — advice and litigation",
  },
  topBar: {
    left: "Your city",
    right: "Real estate, inheritance and family law",
  },
  nav: {
    home: "Home",
    expertises: "Practice areas",
    blog: "Blog",
    contact: "Contact",
  },
  cta: {
    contact: "Get in touch",
    seeExpertises: "View practice areas",
  },
  phone: {
    href: "tel:+33199000085",
    label: "01 99 00 00 85",
  },
  form: {
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      subjectPlaceholder: "Select a subject",
      subjects: [
        { value: "immobilier", label: "Real estate" },
        { value: "successions", label: "Inheritance" },
        { value: "famille", label: "Family law" },
        { value: "premier-echange", label: "First conversation" },
      ],
      message: "Message",
    },
    consent:
      "I agree to be contacted about my request. This form is a demonstration interface, with no API submission for now.",
    submit: "Send the request",
  },
  footer: {
    text: "Professional website template presenting expertise in real estate, inheritance and family law, with a front-end-only contact form.",
    city: "Your city",
    email: "contact@example.com",
    hours: "By appointment",
  },
  home: {
    hero: {
      eyebrow: "Attorney at law",
      title: "Your firm",
      description:
        "Advice and litigation in real estate, inheritance and family law, with a clear reading of the documents, the risks and the people involved.",
      image: { src: IMG.hero, alt: "" },
      aside: {
        title: "Cases handled with restraint, precision and coordination.",
        text: "A simple path: understand the scope of work, read a few blog posts, then send a structured request through the contact module.",
      },
    },
    expertises: {
      eyebrow: "Practice areas",
      title: "Two areas of practice for often sensitive cases.",
      description:
        "The site avoids spreading thin and highlights the situations where coordination between the law, documents and the people involved becomes decisive.",
      cards: [
        {
          title: "Real estate",
          text: "Securing purchases, sales, contractual documents, preliminary checks and disputed situations.",
          items: [
            "Purchase and sale",
            "Contracts and documents",
            "Real estate disputes",
          ],
        },
        {
          title: "Inheritance and family law",
          text: "Support for family matters: settling an estate, dividing assets, heirs, documents and dealings with notaries.",
          items: [
            "Estate settlement and division of assets",
            "Coordination with notaries",
            "Documents and heirs",
          ],
        },
      ],
    },
    method: {
      eyebrow: "Method",
      title: "A structured first review before taking any step.",
      description:
        "Each conversation should place the case, identify the useful documents and prioritize the next actions.",
      steps: [
        {
          label: "Step 1",
          text: "Qualifying the case, the courts involved and the documents available.",
        },
        {
          label: "Step 2",
          text: "Assessing the risks, the people involved and the deadlines that matter before any step.",
        },
        {
          label: "Step 3",
          text: "A clear action plan: secure, negotiate, pass on, contest or coordinate.",
        },
      ],
    },
    approach: {
      eyebrow: "Approach",
      title: "A clear positioning, designed for complex cases.",
      description:
        "Real estate, heirs, deeds, coordination with notaries and administrative deadlines have to be put in the right order.",
      image: {
        src: IMG.desk,
        alt: "A hand signing a document on a desk",
      },
      panel: {
        title: "Clarify responsibilities and documents from the start.",
        text: "The goal is to make the firm’s specialty clear without piling up promises: a visitor should quickly understand whether their issue falls under real estate, an estate or family law.",
        items: [
          "A matter tied to a property, an estate or a family dispute.",
          "Documents already available, to check and organize.",
          "Next action to define before any extended discussion.",
        ],
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "A blog page meant to build expertise.",
      description:
        "The content remains lorem ipsum placeholder text, with three visible entries and a structure ready to build on.",
      label: "Blog post",
      posts: [
        "Buying a property: the checks to make before signing",
        "Inheritance: the first documents to gather",
        "Why frame the case before contacting several parties",
      ],
      excerpt: LOREM,
    },
    contact: {
      eyebrow: "Contact",
      title: "A contact module ready for API integration.",
      description:
        "The form works front-end only in this demo: it blocks the network request and confirms the request locally.",
      info: {
        title: "Useful information",
        items: [
          "Real estate or inheritance matter.",
          "Parties involved and contacts already identified.",
          "Documents already received, signed or requested.",
          "Known deadlines or particular urgency.",
        ],
      },
    },
  },
  expertises: {
    hero: {
      eyebrow: "Practice areas",
      title: "Real estate, inheritance and family law.",
      description:
        "This page details the two areas of practice presented on the home page, without artificially widening the scope.",
    },
    areaLabel: "Area",
    areas: [
      {
        title: "Real estate",
        intro:
          "Supporting real estate transactions and difficulties, with particular attention to documents, commitments and the people involved.",
        items: [
          "Purchase or sale of a property, with verification of the parties and documents.",
          "Review of the documents provided before any commitment.",
          "Contract review, negotiation and securing each step.",
          "Dispute, delay, non-performance or deadlock in a transaction.",
        ],
      },
      {
        title: "Inheritance and family law",
        intro:
          "Framing estate and family matters where the heirs, assets, documents or other parties are numerous.",
        items: [
          "Identifying the heirs, assets and documents available.",
          "Coordination with notaries, advisors and family members involved.",
          "Organizing the documents needed for the estate or division file.",
          "Reviewing deadlines, additional requests and sticking points.",
        ],
      },
    ],
    file: {
      eyebrow: "Case file",
      title: "What a first message should make clear.",
      description:
        "The first contact should place the subject, the parties involved, the documents available and the immediate goal.",
      items: [
        "Nature of the case",
        "Parties involved",
        "Documents received",
        "Deadline or urgency",
      ],
    },
  },
  blog: {
    hero: {
      eyebrow: "Blog",
      title: "Legal notes and practical pointers.",
      description:
        "Demo page. The final content can be written and connected later.",
    },
    articleLabel: "Post",
    placeholder: "Placeholder",
    posts: [
      "Real estate: preparing a purchase and securing the documents",
      "Inheritance: organizing the first documents in the file",
      "Family law: why clarify who is involved before acting",
    ],
    excerpt: LOREM_LONG,
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Send a request to the firm.",
      description:
        "The form is ready on the interface side. In this demo it triggers no API and only displays a local confirmation.",
    },
    before: {
      title: "Before you write",
      text: "A useful first message mentions the subject, the parties involved, the documents available and any deadline.",
      items: [
        "Real estate, inheritance or family law.",
        "Property, heirs or people involved.",
        "Documents already received or signed.",
        "Immediate goal of the first conversation.",
      ],
    },
  },
  meta: {
    home: {
      title: "Your firm - Attorney at law",
      description:
        "Website template for a lawyer: advice and litigation in real estate, inheritance and family law.",
    },
    expertises: {
      title: "Practice areas - Your firm",
      description:
        "Real estate, inheritance and family law: the firm’s two areas of practice, without artificially widening the scope.",
    },
    blog: {
      title: "Blog - Your firm",
      description:
        "Legal notes and practical pointers: a demo page whose final content can be written and connected later.",
    },
    contact: {
      title: "Contact - Your firm",
      description:
        "Send a request to the firm: a demo form with no API that only displays a local confirmation.",
    },
  },
};

export type AvocatePage = keyof AvocateCopy["meta"];

export const avocate: TemplateDefinition<"avocate", AvocateCopy> = {
  slug: "avocate",
  /**
   * Palette chaude de cabinet : fond sable clair, encre brun profond, accent
   * brun-chocolat des boutons, fond inverse brun très sombre (bandeau, héros).
   * Instrument Serif en affichage, Inter en texte, rayons de 8 px.
   */
  theme: {
    surface: "oklch(0.956 0.016 74)",
    raised: "oklch(0.995 0.004 75)",
    tint: "oklch(0.917 0.026 71)",
    ink: "oklch(0.246 0.025 44)",
    inkMuted: "color-mix(in oklch, var(--tpl-ink) 74%, var(--tpl-surface))",
    line: "oklch(0.844 0.027 67)",
    eyebrow: "oklch(0.501 0.051 54)",
    accent: "oklch(0.296 0.031 45)",
    accentInk: "oklch(0.995 0.004 75)",
    inverse: "oklch(0.246 0.025 44)",
    inverseInk: "oklch(0.96 0.015 75)",
    radius: "0.5rem",
    fontDisplay:
      "var(--font-display-serif), ui-serif, Georgia, 'Times New Roman', serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 400,
    shadowSm: "0 1px 2px color-mix(in oklch, var(--tpl-ink) 6%, transparent)",
    shadowLg: "0 18px 50px color-mix(in oklch, var(--tpl-ink) 9%, transparent)",
  },
  paths: {
    home: "/avocate",
    expertises: "/avocate/expertises",
    blog: "/avocate/blog",
    contact: "/avocate/contact",
  },
  copy: { fr, en },
};
