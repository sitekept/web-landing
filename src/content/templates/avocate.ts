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

const EXCERPT = {
  fr: [
    "Identité du vendeur, servitudes, diagnostics obligatoires : trois points à faire vérifier avant de vous engager.",
    "Acte de décès, livret de famille, testament : ce que le notaire vous demandera dès le premier rendez-vous.",
    "Quand plusieurs proches sont concernés, une seule personne qui échange avec le notaire évite doublons et malentendus.",
  ],
  frLong: [
    "Avant de signer, vérifiez l’identité du vendeur, la situation du bien, les diagnostics obligatoires et les charges de copropriété. Chaque point vérifié tôt évite un litige ensuite.",
    "Acte de décès, livret de famille, testament, relevés de comptes : rassemblez ces pièces pour que le notaire puisse ouvrir la succession sans attendre.",
    "Dans une succession ou une séparation, chacun a ses attentes. Décider dès le départ qui signe et qui doit être informé évite bien des conflits et des retards.",
  ],
  en: [
    "The seller’s identity, easements and required inspection reports: three things to have checked before you commit.",
    "Death certificate, marriage and birth certificates, will: what the notary will ask for at your first meeting.",
    "When several relatives are involved, having one person deal with the notary avoids duplicate requests and misunderstandings.",
  ],
  enLong: [
    "Before you sign, check the seller’s identity, the property’s legal status, the required inspection reports and the condo fees. Every point you clear early prevents a dispute later.",
    "Death certificate, marriage and birth certificates, will, bank statements: gather these so the notary can open the estate without delay.",
    "In an estate or a separation, every relative has their own expectations. Agreeing early on who signs and who needs to be kept informed heads off conflict and delays.",
  ],
};

const fr = {
  brand: {
    name: "Votre cabinet",
    tagline: "Avocate au barreau — conseil et contentieux",
  },
  topBar: {
    left: "Votre ville",
    right: "Du lundi au vendredi, 9 h–19 h",
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
      email: "E-mail",
      phone: "Téléphone",
      subject: "Sujet",
      subjectPlaceholder: "Sélectionner un sujet",
      subjects: [
        { value: "immobilier", label: "Immobilier" },
        { value: "successions", label: "Successions" },
        { value: "famille", label: "Droit de la famille" },
        { value: "premier-echange", label: "Autre question" },
      ],
      message: "Message",
    },
    consent: "J’accepte d’être recontacté(e) au sujet de ma demande.",
    submit: "Envoyer ma demande",
  },
  footer: {
    text: "Cabinet d’avocate en droit immobilier, successions et droit de la famille, au service des particuliers.",
    city: "Votre ville",
    email: "contact@votre-cabinet.example",
    hours: "Sur rendez-vous",
  },
  home: {
    hero: {
      eyebrow: "Immobilier, successions, famille",
      title: "Votre cabinet",
      description:
        "Acheter ou vendre un bien, régler l’héritage d’un proche, traverser une séparation : le cabinet vous conseille et vous représente, du premier échange à l’accord ou au jugement.",
      image: { src: IMG.hero, alt: "" },
      aside: {
        title: "Une seule avocate suit votre dossier du début à la fin.",
        text: "Premier rendez-vous d’une heure, honoraires annoncés par écrit avant tout engagement, réponse à vos messages sous 48 h ouvrées.",
      },
    },
    expertises: {
      eyebrow: "Expertises",
      title: "Deux domaines du droit, des dossiers souvent sensibles.",
      description:
        "Le cabinet ne traite que ces deux matières : vous obtenez des réponses rapides et des honoraires prévisibles.",
      cards: [
        {
          title: "Immobilier",
          text: "Avant de signer, relecture de vos actes ; ensuite, défense en cas de litige avec un vendeur ou un constructeur.",
          items: [
            "Achat et vente d’un bien",
            "Compromis, baux et actes",
            "Retards et malfaçons",
          ],
        },
        {
          title: "Successions et droit de la famille",
          text: "Décès d’un proche ou rupture du couple : conseil, représentation et suivi du dossier avec le notaire.",
          items: [
            "Règlement de succession et partage",
            "Testaments et donations",
            "Divorce et séparation",
          ],
        },
      ],
    },
    method: {
      eyebrow: "Méthode",
      title: "Trois étapes avant toute procédure.",
      description:
        "Dès le premier rendez-vous, vous savez où en est votre dossier, ce qu’il manque et ce que coûtera la suite.",
      steps: [
        {
          label: "Étape 1",
          text: "Lecture de vos documents et liste de ce qui manque au dossier.",
        },
        {
          label: "Étape 2",
          text: "Analyse des risques, des délais à respecter et du coût de chaque option.",
        },
        {
          label: "Étape 3",
          text: "Plan d’action écrit : négocier, signer, contester ou saisir le juge.",
        },
      ],
    },
    approach: {
      eyebrow: "Approche",
      title: "Quand un bien, une famille et des délais s’entremêlent.",
      description:
        "Une maison en indivision après un décès, une vente bloquée par un divorce : le cabinet remet les démarches dans le bon ordre.",
      image: {
        src: IMG.desk,
        alt: "Une main signe un document posé sur un bureau.",
      },
      panel: {
        title: "Ce que vous savez après le premier rendez-vous.",
        text: "Si votre affaire peut être prise en charge et par quoi commencer. Vous repartez aussi avec :",
        items: [
          "la liste des pièces à réunir ;",
          "les délais à ne pas manquer ;",
          "une estimation écrite des honoraires.",
        ],
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "Des repères juridiques pour comprendre avant d’agir.",
      description:
        "Trois articles courts pour prendre les bonnes décisions dès le départ.",
      label: "À lire",
      posts: [
        "Acheter un bien immobilier : les points à contrôler avant de signer",
        "Succession : les premiers documents à réunir",
        "Famille : choisir un seul interlocuteur pour le notaire",
      ],
      excerpts: EXCERPT.fr,
    },
    contact: {
      eyebrow: "Contact",
      title: "Décrivez votre situation, nous revenons vers vous.",
      description:
        "Quelques lignes suffisent : le cabinet vous répond sous 48 h ouvrées pour fixer un premier rendez-vous.",
      info: {
        title: "À préciser si possible",
        items: [
          "Le domaine : immobilier, succession ou famille.",
          "Les personnes concernées : vendeur, héritiers, conjoint.",
          "Les documents déjà reçus ou signés.",
          "Une date limite ou une audience à venir.",
        ],
      },
    },
  },
  expertises: {
    hero: {
      eyebrow: "Expertises",
      title: "Immobilier, successions et droit de la famille.",
      description:
        "Deux domaines seulement, pour des conseils précis et des honoraires annoncés à l’avance.",
    },
    areaLabel: "Domaine",
    areas: [
      {
        title: "Immobilier",
        intro:
          "Un projet immobilier, un bail ou un chantier : le cabinet relit vos actes et vous défend si un problème survient.",
        items: [
          "Achat ou vente : vérification du vendeur, du bien et des diagnostics.",
          "Relecture du compromis, de l’offre de prêt ou du bail avant signature.",
          "Négociation des clauses et des conditions suspensives.",
          "Retard de livraison, malfaçon ou vente bloquée : mise en demeure et procédure.",
        ],
      },
      {
        title: "Successions et droit de la famille",
        intro:
          "Un décès, une rupture ou un désaccord sur un héritage : le cabinet vous conseille et vous représente, aux côtés du notaire.",
        items: [
          "Recherche des héritiers et inventaire des biens.",
          "Échanges avec le notaire et les avocats des autres parties.",
          "Partage amiable ou judiciaire, contestation d’un testament.",
          "Divorce, séparation, résidence des enfants et pension alimentaire.",
        ],
      },
    ],
    file: {
      eyebrow: "Dossier",
      title: "Ce que votre premier message peut contenir.",
      description:
        "Quatre informations suffisent pour que le cabinet vous réponde utilement dès le premier échange.",
      items: [
        "Type d’affaire",
        "Personnes concernées",
        "Documents en main",
        "Date limite éventuelle",
      ],
    },
  },
  blog: {
    hero: {
      eyebrow: "Blog",
      title: "Des réponses claires aux questions fréquentes.",
      description:
        "Des articles courts sur l’achat d’un bien, les successions et la vie de famille, à lire avant un rendez-vous.",
    },
    articleLabel: "Article",
    placeholder: "Fiche pratique",
    posts: [
      "Immobilier : ce qu’il faut vérifier avant de signer un compromis",
      "Succession : les pièces que le notaire vous demandera",
      "Famille : qui décide, qui signe, qui informer",
    ],
    excerpts: EXCERPT.frLong,
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Écrire au cabinet.",
      description:
        "Expliquez votre situation en quelques lignes. Le cabinet vous répond sous 48 h ouvrées, par écrit ou par téléphone.",
    },
    before: {
      title: "Avant d’écrire",
      text: "Inutile d’envoyer tout le dossier : quelques précisions suffisent pour un premier avis.",
      items: [
        "Immobilier, succession ou droit de la famille.",
        "Le bien ou les personnes concernées.",
        "Les documents déjà reçus ou signés.",
        "Ce que vous attendez du rendez-vous.",
      ],
    },
  },
  meta: {
    home: {
      title: "Votre cabinet - Avocate au barreau",
      description:
        "Cabinet d’avocate : conseil et contentieux en droit immobilier, successions et droit de la famille, pour les particuliers.",
    },
    expertises: {
      title: "Expertises - Votre cabinet",
      description:
        "Immobilier, successions et droit de la famille : les deux domaines du cabinet, avec des honoraires annoncés à l’avance.",
    },
    blog: {
      title: "Blog - Votre cabinet",
      description:
        "Articles courts sur l’achat d’un bien, les successions et le droit de la famille, à lire avant un rendez-vous.",
    },
    contact: {
      title: "Contact - Votre cabinet",
      description:
        "Écrivez au cabinet en quelques lignes : réponse sous 48 h ouvrées pour fixer un premier rendez-vous.",
    },
  },
} as const;

export type AvocateCopy = WidenLiterals<typeof fr>;

const en: AvocateCopy = {
  brand: {
    name: "Your firm",
    tagline: "Attorney at law — counsel and litigation",
  },
  topBar: {
    left: "Your city",
    right: "Monday to Friday, 9 a.m.–7 p.m.",
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
        { value: "premier-echange", label: "Other question" },
      ],
      message: "Message",
    },
    consent: "I agree to be contacted about my request.",
    submit: "Send my request",
  },
  footer: {
    text: "A law firm serving individuals in real estate, inheritance and family law.",
    city: "Your city",
    email: "contact@example.com",
    hours: "By appointment",
  },
  home: {
    hero: {
      eyebrow: "Real estate, inheritance, family law",
      title: "Your firm",
      description:
        "Buying or selling a property, settling a loved one’s estate, going through a separation: the firm advises and represents you, from the first call to a settlement or a judgment.",
      image: { src: IMG.hero, alt: "" },
      aside: {
        title: "One lawyer handles your case from start to finish.",
        text: "A one-hour first meeting, fees set out in writing before you commit, and replies to your messages within 2 business days.",
      },
    },
    expertises: {
      eyebrow: "Practice areas",
      title: "Two fields of law, often sensitive matters.",
      description:
        "The firm takes on nothing else, so you get quick answers and predictable fees.",
      cards: [
        {
          title: "Real estate",
          text: "Before you sign, we review your documents; afterward, we represent you in any dispute with a seller or builder.",
          items: [
            "Buying and selling property",
            "Purchase agreements and leases",
            "Delays and construction defects",
          ],
        },
        {
          title: "Inheritance and family law",
          text: "A loss in the family or a couple splitting up: advice, representation and close work with the notary.",
          items: [
            "Estate settlement and division",
            "Wills and gifts",
            "Divorce and separation",
          ],
        },
      ],
    },
    method: {
      eyebrow: "How we work",
      title: "Three steps before any legal action.",
      description:
        "From the first meeting, you know where your case stands, what’s missing and what the next steps will cost.",
      steps: [
        {
          label: "Step 1",
          text: "We read your documents and list anything missing from the file.",
        },
        {
          label: "Step 2",
          text: "We weigh the risks, the deadlines to meet and the cost of each option.",
        },
        {
          label: "Step 3",
          text: "A written action plan: negotiate, sign, contest or go to court.",
        },
      ],
    },
    approach: {
      eyebrow: "Complex cases",
      title: "When a property, a family and deadlines all overlap.",
      description:
        "A house co-owned by heirs after a death, a sale held up by a divorce: the firm puts every step back in the right order.",
      image: {
        src: IMG.desk,
        alt: "A hand signing a document on a desk.",
      },
      panel: {
        title: "What you know after the first meeting.",
        text: "Whether we can take your case, and where to start. You also leave with:",
        items: [
          "A list of the documents to gather",
          "The deadlines you can’t afford to miss",
          "A written estimate of the fees",
        ],
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "Legal basics to read before you act.",
      description:
        "Three short articles to help you take the right first steps.",
      label: "Read",
      posts: [
        "Buying a home: what to look at before you sign",
        "Inheritance: the first documents to gather",
        "Family matters: choosing one contact for the notary",
      ],
      excerpts: EXCERPT.en,
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what’s going on, and we’ll get back to you.",
      description:
        "A few lines are enough: the firm replies within 2 business days to set up a first meeting.",
      info: {
        title: "Helpful to include",
        items: [
          "The area: real estate, an estate or family law.",
          "The people involved: seller, heirs, spouse.",
          "Documents you’ve already received or signed.",
          "Any deadline or upcoming hearing.",
        ],
      },
    },
  },
  expertises: {
    hero: {
      eyebrow: "Practice areas",
      title: "Real estate, inheritance and family law.",
      description:
        "Just two fields, so you get precise advice and fees agreed in advance.",
    },
    areaLabel: "Area",
    areas: [
      {
        title: "Real estate",
        intro:
          "A real estate project, a lease or a construction job: the firm reviews your documents and defends you if something goes wrong.",
        items: [
          "Buying or selling: checks on the seller, the property and the inspection reports.",
          "Review of the purchase agreement, loan offer or lease before you sign.",
          "Negotiating terms and contingencies.",
          "Late delivery, construction defects or a stalled sale: demand letters and lawsuits.",
        ],
      },
      {
        title: "Inheritance and family law",
        intro:
          "A death, a family rift or a disagreement over an estate: the firm advises and represents you, alongside the notary.",
        items: [
          "Locating the heirs and listing the assets.",
          "Dealing with the notary and the other parties’ lawyers.",
          "Dividing an estate by agreement or in court, contesting a will.",
          "Divorce, separation, child custody and child support.",
        ],
      },
    ],
    file: {
      eyebrow: "Your case",
      title: "What to put in your first message.",
      description:
        "Four details are enough for the firm to give you a useful answer right away.",
      items: [
        "Type of matter",
        "People involved",
        "Documents on hand",
        "Any deadline",
      ],
    },
  },
  blog: {
    hero: {
      eyebrow: "Blog",
      title: "Clear answers to common questions.",
      description:
        "Short articles on buying property, estates and family matters, worth reading before an appointment.",
    },
    articleLabel: "Article",
    placeholder: "Quick guide",
    posts: [
      "Real estate: what to check before signing a purchase agreement",
      "Inheritance: the documents the notary will ask for",
      "Family law: who decides, who signs, who to keep informed",
    ],
    excerpts: EXCERPT.enLong,
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Write to the firm.",
      description:
        "Explain your situation in a few lines. The firm replies within 2 business days, in writing or by phone.",
    },
    before: {
      title: "Before you write",
      text: "No need to send the whole file: a few details are enough for a first opinion.",
      items: [
        "Real estate, an estate or family law.",
        "The property or the people involved.",
        "Documents already received or signed.",
        "What you expect from the meeting.",
      ],
    },
  },
  meta: {
    home: {
      title: "Your firm - Attorney at law",
      description:
        "Law firm offering counsel and litigation to individuals in real estate, inheritance and family law.",
    },
    expertises: {
      title: "Practice areas - Your firm",
      description:
        "Real estate, inheritance and family law: the firm’s two fields, with fees agreed in advance.",
    },
    blog: {
      title: "Blog - Your firm",
      description:
        "Short articles on buying property, estates and family law, worth reading before an appointment.",
    },
    contact: {
      title: "Contact - Your firm",
      description:
        "Write to the firm in a few lines: a reply within 2 business days to set up a first meeting.",
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
