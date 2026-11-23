import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « cabinet-avocat » (cabinet d'avocats fictif « Cabinet Valmont » :
 * droit des affaires pour dirigeants et PME).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt` des photos, métadonnées. Les vues
 * (`src/templates/cabinet-avocat/`) n'ont aucun texte en dur.
 *
 * Cohérence des chiffres (FR et EN) : réponse sous 48 h ouvrées ; première
 * consultation de 45 minutes à 150 € HT (180 € TTC) ; note écrite sous 5 jours
 * ouvrés ; taux horaires 190 € HT (collaborateur) et 280 € HT (associé) ; deux
 * associés et quatre collaborateurs ; horaires du lundi au vendredi, 9 h – 18 h.
 *
 * Photos Unsplash (une photo ne sert qu'à un template) : salle de réunion
 * (accueil), classeurs (accueil), fauteuils (expertises), couloir vitré (cas
 * types), poste de travail près d'une baie (méthode).
 *
 * Version anglaise : `en`, plus bas, est une adaptation en anglais des
 * États-Unis typée `CabinetAvocatCopy` (dérivé de `fr` par `WidenLiterals`).
 * Une clé manquante ou une liste de longueur différente fait échouer
 * `pnpm type-check`. Pas d'icône dans cette démo : aucune clé `icon`.
 */

const unsplash = (id: string, width = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;

export const cabinetAvocatImages = {
  // Coordonnées `rect` en pixels de l'original (5184 × 3456 ici). Portrait 3:4 (moitié droite de la photo) : le fichier a le ratio de la boîte.
  room: `${unsplash("1431540015161-0bf868a2d407", 1200)}&rect=2592,0,2592,3456`,
  // Cadrage 3:2 sur la pile de classeurs (moitié gauche blanche écartée).
  binders: `${unsplash("1468779036391-52341f60b55d", 1300)}&rect=2258,411,2670,1780`,
  chairs: `${unsplash("1628062699790-7c45262b82b4", 1800)}&rect=731,0,6581,4387`,
  corridor: unsplash("1497366754035-f200968a6e72"),
  // Cadrage 3:2 sur l'ordinateur et le plan de travail ; écarte le feuillage
  // flou et les mots tracés sur la vitre, au bord gauche.
  desk: `${unsplash("1497215728101-856f4ea42174", 1700)}&rect=1596,684,3876,2584`,
} as const;

const fr = {
  brand: {
    name: "Cabinet Valmont",
    tagline: "Avocats en droit des affaires",
  },
  topBar: {
    left: "Réponse sous 48 h ouvrées",
    right: "Du lundi au vendredi, 9 h – 18 h",
  },
  nav: {
    home: "Accueil",
    expertises: "Expertises",
    casTypes: "Cas types",
    methode: "Méthode",
    publications: "Publications",
    consultation: "Rendez-vous",
  },
  cta: {
    consultation: "Prendre rendez-vous",
    call: "Appeler",
    appointmentShort: "Rendez-vous",
  },
  a11y: {
    quickActions: "Actions rapides",
  },
  contact: {
    address: "12 rue de l’Exemple, 00000 Votre ville",
    email: "contact@cabinetvalmont.example",
    phone: { href: "tel:+33199000043", label: "01 99 00 00 43" },
    hours: "Du lundi au vendredi, 9 h – 18 h",
    labels: {
      phone: "Téléphone",
      email: "E-mail",
      address: "Adresse",
      hours: "Horaires",
    },
  },
  footer: {
    title: "Cabinet Valmont, avocats en droit des affaires",
    text: "Pour les dirigeants et les PME. Première consultation au cabinet ou en visioconférence, honoraires annoncés par écrit avant toute intervention.",
  },
  closing: {
    title: "Un sujet à nous soumettre ?",
    text: "Décrivez la situation en quelques lignes. Un avocat vous répond sous 48 heures ouvrées, avec un premier avis et le coût d’une éventuelle mission.",
    primary: "Prendre rendez-vous",
    callLabel: "Ou appelez-nous au",
  },
  meta: {
    home: {
      title: "Cabinet Valmont - Avocats en droit des affaires",
      description:
        "Avocats pour dirigeants et PME : contrats, associés, litiges, impayés. Réponse sous 48 h, honoraires annoncés, première consultation à 150 € HT.",
    },
    expertises: {
      title: "Expertises - Cabinet Valmont",
      description:
        "Contrats, associés, litiges, rupture de relation commerciale, recouvrement : ce que nous faisons, quand on nous appelle et ce que cela coûte.",
    },
    casTypes: {
      title: "Cas types - Cabinet Valmont",
      description:
        "Associés en désaccord, rupture sans préavis, facture impayée, contrat à sécuriser : ce que nous avons fait, en combien de temps et pour quel coût.",
    },
    methode: {
      title: "Méthode - Cabinet Valmont",
      description:
        "Comprendre, cadrer, agir : trois étapes avec des délais, ce que nous vous demandons et ce que vous recevez à chaque étape, sans rien lancer sans votre accord.",
    },
    publications: {
      title: "Publications - Cabinet Valmont",
      description:
        "Notes courtes des avocats du cabinet : négocier avant de menacer, conflit entre associés, facture impayée, rupture de relation, exclusivité.",
    },
    consultation: {
      title: "Rendez-vous - Cabinet Valmont",
      description:
        "Décrivez votre situation, nous vous répondons sous 48 h ouvrées. Première consultation de 45 minutes à 150 € HT, au cabinet ou en visioconférence.",
    },
  },
  home: {
    hero: {
      eyebrow: "Avocats en droit des affaires",
      title:
        "Un avocat d’affaires pour les décisions qui engagent votre entreprise.",
      description:
        "Contrats, désaccords entre associés, litiges commerciaux, factures impayées : nous faisons le point sous 48 heures, nous vous disons ce que cela peut coûter et nous n’agissons que si c’est utile.",
      primary: "Prendre rendez-vous",
      secondary: "Voir les honoraires",
      imageAlt:
        "Salle de réunion : fauteuils en bois autour d’une longue table, écran posé dessus, grandes baies vitrées.",
      facts: [
        { label: "Première consultation", value: "45 min, 150 € HT" },
        { label: "Réponse", value: "Sous 48 h ouvrées" },
        { label: "Honoraires", value: "Convention écrite d’avance" },
      ],
    },
    domains: {
      eyebrow: "Domaines d’intervention",
      title: "Cinq sujets, traités par des avocats qui ne font que cela.",
      description:
        "Nous ne couvrons pas tout le droit. Nous couvrons bien ce qui touche la vie d’une entreprise au quotidien.",
      more: "Voir toutes les expertises",
      imageAlt: "Gros plan sur une pile de classeurs blancs.",
    },
    steps: {
      eyebrow: "Comment nous travaillons",
      title: "Trois étapes, un seul interlocuteur.",
      description:
        "Vous décidez à chaque étape. Nous ne lançons rien sans votre accord.",
      more: "Voir la méthode en détail",
    },
    fees: {
      eyebrow: "Honoraires",
      title: "Ce que coûte un avocat : annoncé avant de commencer.",
      description:
        "Chaque mission fait l’objet d’une convention d’honoraires écrite. Voici nos tarifs de départ, hors taxes.",
      rows: [
        {
          label: "Première consultation",
          detail:
            "45 minutes, au cabinet ou en visioconférence. Déduite des honoraires si vous nous confiez le dossier.",
          price: "150 € HT",
        },
        {
          label: "Contrat commercial",
          detail: "Rédaction ou relecture. Forfait annoncé après lecture.",
          price: "À partir de 900 € HT",
        },
        {
          label: "Mise en demeure",
          detail: "Courrier ferme ou proposition de négociation, au forfait.",
          price: "À partir de 450 € HT",
        },
        {
          label: "Dossier suivi dans la durée",
          detail:
            "Temps passé, avec un plafond que nous fixons ensemble. Collaborateur 190 € HT l’heure, associé 280 € HT l’heure.",
          price: "Plafond convenu",
        },
        {
          label: "Procédure devant le tribunal",
          detail: "Forfait par étape, fixé dans la convention d’honoraires.",
          price: "À partir de 3 500 € HT",
        },
      ],
      note: "TVA de 20 % en sus. Les frais de procédure et d’huissier sont refacturés au réel, justificatifs à l’appui. Ces tarifs sont des points de départ : le devis dépend du dossier.",
      cta: "Demander un devis",
    },
    cases: {
      eyebrow: "Cas types",
      title: "Des situations que nous connaissons bien.",
      description:
        "Un associé veut partir, un client disparaît, une facture reste impayée : vous reconnaîtrez peut-être la vôtre.",
      more: "Voir les cas types",
    },
  },
  expertises: {
    eyebrow: "Expertises",
    title: "Cinq domaines, un seul métier : le droit des affaires.",
    description:
      "Nous accompagnons les dirigeants et les PME. Pour chaque domaine : ce que nous faisons, dans quels cas on nous appelle et ce que cela coûte en général.",
    imageAlt:
      "Fauteuils noirs alignés le long d’une grande table de réunion claire.",
    topicsLabel: "Nous intervenons pour",
    feesLabel: "Honoraires",
    items: [
      {
        title: "Contrats commerciaux",
        summary:
          "Un contrat mal rédigé coûte cher le jour où la relation se tend. Nous le rédigeons ou le relisons avant que vous signiez.",
        topics: [
          "Conditions générales de vente et d’achat",
          "Contrats de distribution, d’agence et de sous-traitance",
          "Exclusivité, clauses de sortie et pénalités",
        ],
        fees: "Forfait à partir de 900 € HT, annoncé après lecture du contrat.",
      },
      {
        title: "Associés et gouvernance",
        summary:
          "Un désaccord entre associés paralyse l’entreprise plus vite qu’un concurrent. Nous posons un cadre avant que le conflit ne s’installe.",
        topics: [
          "Pacte d’associés et statuts",
          "Blocage de décision, révocation d’un dirigeant",
          "Sortie d’un associé et cession de parts",
        ],
        fees: "Temps passé avec un plafond convenu, ou forfait pour une cession.",
      },
      {
        title: "Litiges commerciaux",
        summary:
          "Une procédure coûte du temps et de l’argent. Nous évaluons vos chances et le coût réel avant d’engager quoi que ce soit.",
        topics: [
          "Inexécution ou mauvaise exécution d’un contrat",
          "Contestation de facture, garantie, responsabilité",
          "Représentation devant le tribunal de commerce",
        ],
        fees: "Forfait par étape, à partir de 3 500 € HT, fixé dans la convention.",
      },
      {
        title: "Rupture de relation commerciale",
        summary:
          "Un client ou un fournisseur historique vous quitte du jour au lendemain. La loi prévoit un préavis : nous vérifions s’il a été respecté.",
        topics: [
          "Calcul du préavis et de l’indemnité due",
          "Négociation d’une sortie progressive",
          "Action devant le tribunal si la négociation échoue",
        ],
        fees: "Mise en demeure au forfait, à partir de 450 € HT, puis temps passé.",
      },
      {
        title: "Recouvrement de créances",
        summary:
          "Une facture impayée n’est pas qu’une question de trésorerie. Nous recouvrons sans abîmer la relation quand c’est possible.",
        topics: [
          "Relance et mise en demeure",
          "Injonction de payer, référé-provision",
          "Exécution forcée et suivi du paiement",
        ],
        fees: "Mise en demeure à partir de 450 € HT ; honoraire de résultat possible, fixé d’avance.",
      },
    ],
  },
  casTypes: {
    eyebrow: "Cas types",
    title: "Quatre situations que nous rencontrons souvent.",
    description:
      "Ce qui s’est passé, ce que nous avons fait, en combien de temps et pour quel coût. Chaque dossier est différent et un résultat n’est jamais garanti.",
    imageAlt:
      "Couloir de bureaux : cloisons vitrées à montants noirs, sol lisse et suspensions sombres.",
    situationLabel: "La situation",
    actionLabel: "Ce que nous avons fait",
    outcomeLabel: "Délai et coût",
    note: "Situations anonymisées et reconstituées à partir de dossiers types.",
    items: [
      {
        title: "Deux associés, deux visions de l’avenir",
        situation:
          "Dans une PME de 25 salariés, l’un des associés veut vendre, l’autre veut continuer. Les décisions sont bloquées depuis six mois.",
        action:
          "Lecture du pacte d’associés, négociation d’une sortie, protocole de cession des parts signé sans procédure.",
        outcome: "7 semaines · 6 500 € HT convenus d’avance",
      },
      {
        title: "Un client historique rompt du jour au lendemain",
        situation:
          "Un fabricant perd, sans préavis, un distributeur qui représentait 30 % de son chiffre d’affaires.",
        action:
          "Mise en demeure, puis négociation d’un préavis et d’une indemnité de rupture. Aucune procédure engagée.",
        outcome: "5 semaines · 4 200 € HT au temps passé",
      },
      {
        title: "Une facture de 80 000 € qui reste impayée",
        situation:
          "Un sous-traitant attend le paiement d’une prestation livrée depuis huit mois. Le client en conteste la qualité.",
        action:
          "Relance ferme, expertise amiable, puis protocole d’échelonnement signé par le client.",
        outcome: "10 semaines · forfait de 1 800 € HT",
      },
      {
        title: "Un contrat d’exclusivité à sécuriser avant de signer",
        situation:
          "Une PME s’apprête à signer un contrat d’exclusivité de cinq ans proposé par un grand distributeur.",
        action:
          "Relecture complète, renégociation de la clause de sortie et des pénalités de retard.",
        outcome: "2 semaines · forfait de 1 200 € HT",
      },
    ],
  },
  methode: {
    eyebrow: "Méthode",
    title: "Trois étapes, et à chacune c’est vous qui décidez.",
    description:
      "Voici ce qui se passe, et dans quels délais, entre votre premier message et la fin du dossier.",
    imageAlt:
      "Poste de travail près d’une grande baie vitrée : ordinateur portable ouvert sur un long plan de travail.",
    askLabel: "Ce que nous vous demandons",
    getLabel: "Ce que vous recevez",
    items: [
      {
        title: "Comprendre",
        delay: "Sous 48 h ouvrées",
        text: "Nous écoutons la situation, nous lisons les pièces essentielles et nous identifions ce qui compte : l’enjeu financier, le délai, le rapport de force.",
        ask: "Le contrat ou les échanges en cause, et trois lignes sur ce que vous voulez obtenir.",
        get: "Un premier avis oral à l’issue de l’entretien de 45 minutes.",
      },
      {
        title: "Cadrer",
        delay: "Sous 5 jours ouvrés",
        text: "Nous chiffrons les risques et les options : négocier, sécuriser ou engager une procédure. Pour chaque option, un coût et un délai.",
        ask: "Les pièces complémentaires que nous avons listées ensemble.",
        get: "Une note écrite de quelques pages et une convention d’honoraires, à signer si vous poursuivez.",
      },
      {
        title: "Agir",
        delay: "Selon l’option retenue",
        text: "Courrier, négociation, protocole ou procédure : nous menons l’option que vous avez choisie et nous revenons vers vous à chaque jalon.",
        ask: "Une décision à chaque jalon : poursuivre, ajuster ou arrêter.",
        get: "Un point d’étape écrit à chaque jalon, avec le coût engagé.",
      },
    ],
    pledgesTitle: "Nos engagements",
    pledges: [
      {
        title: "Un interlocuteur unique",
        text: "Un associé suit votre dossier de bout en bout. Le cabinet compte deux associés et quatre collaborateurs.",
      },
      {
        title: "Des honoraires écrits",
        text: "Une convention signée avant toute intervention. Aucun dépassement sans votre accord.",
      },
      {
        title: "Une réponse sous 48 h",
        text: "Chaque message reçoit une réponse sous 48 heures ouvrées, même pour dire que le point demande plus de temps.",
      },
      {
        title: "La confidentialité",
        text: "Vos échanges sont couverts par le secret professionnel dès le premier message.",
      },
    ],
  },
  publications: {
    eyebrow: "Publications",
    title:
      "Des notes courtes sur les questions que nous posent les dirigeants.",
    description:
      "Ni actualité juridique ni blog : des notes écrites par les avocats du cabinet, chacune pour répondre à une question précise.",
    readingLabel: "de lecture",
    items: [
      {
        tag: "Litiges",
        title:
          "Négocier avant de menacer : ce que doit contenir une première lettre",
        text: "Une lettre trop dure ferme la discussion, une lettre trop molle ne vaut rien. Les quatre éléments qui ouvrent une négociation.",
        time: "6 min",
      },
      {
        tag: "Associés",
        title:
          "Conflit entre associés : cinq questions à poser avant toute décision",
        text: "Avant de vendre, de bloquer ou d’assigner, ce qu’il faut vérifier dans le pacte, les statuts et les comptes.",
        time: "8 min",
      },
      {
        tag: "Recouvrement",
        title:
          "Facture impayée : relancer, mettre en demeure, assigner, dans quel ordre ?",
        text: "Les délais à respecter et le moment où la procédure devient plus coûteuse que la créance.",
        time: "5 min",
      },
      {
        tag: "Contrats",
        title:
          "Rupture d’une relation commerciale : le préavis qui protège vraiment",
        text: "Comment se calcule la durée d’un préavis raisonnable, et quelles preuves rassembler dès le premier jour.",
        time: "7 min",
      },
      {
        tag: "Contrats",
        title:
          "Avant de signer un contrat d’exclusivité : trois clauses à relire",
        text: "Durée, clause de sortie et pénalités : là où se cachent les engagements les plus lourds.",
        time: "6 min",
      },
    ],
  },
  consultation: {
    eyebrow: "Rendez-vous",
    title: "Décrivez votre situation, nous vous répondons sous 48 heures.",
    description:
      "Un avocat lit votre message, vous propose un créneau et vous indique, avant le rendez-vous, les pièces utiles à apporter.",
    form: {
      title: "Votre demande",
      intro:
        "Quelques lignes suffisent : nous vous demanderons les pièces ensuite.",
      submit: "Envoyer ma demande",
      fields: {
        name: "Nom et prénom",
        company: "Entreprise",
        email: "E-mail",
        phone: "Téléphone",
        topic: "Sujet",
        topicPlaceholder: "Choisissez un sujet",
        topics: [
          "Contrat commercial",
          "Associés et gouvernance",
          "Litige commercial",
          "Rupture de relation commerciale",
          "Facture impayée",
          "Autre sujet",
        ],
        urgency: "Urgence",
        urgencyPlaceholder: "Choisissez un délai",
        urgencies: [
          "Pas de délai particulier",
          "Dans le mois",
          "Dans la semaine",
          "Urgent : un délai court a commencé",
        ],
        mode: "Rendez-vous souhaité",
        modePlaceholder: "Choisissez un mode",
        modes: ["Au cabinet", "En visioconférence"],
        message: "Votre situation en quelques lignes",
        consent:
          "J’accepte d’être recontacté par le cabinet à propos de ma demande.",
      },
    },
    info: {
      title: "La première consultation",
      rows: [
        { label: "Durée", value: "45 minutes" },
        { label: "Lieu", value: "Au cabinet ou en visioconférence" },
        {
          label: "Tarif",
          value:
            "150 € HT (180 € TTC), déduits des honoraires si vous nous confiez le dossier",
        },
      ],
      contactTitle: "Nous joindre",
    },
    documents: {
      title: "Les pièces utiles à votre dossier",
      intro:
        "Rien d’obligatoire avant le rendez-vous, mais cela fait gagner du temps.",
      items: [
        "Le contrat ou les statuts concernés, avec leurs avenants",
        "Les courriers et e-mails échangés avec l’autre partie",
        "Les factures ou relevés qui chiffrent l’enjeu",
        "Les dates à retenir : échéances, délais en cours, convocations",
      ],
    },
    next: {
      title: "Ce qui se passe ensuite",
      steps: [
        {
          title: "Votre rendez-vous",
          text: "Nous vous répondons sous 48 heures ouvrées avec un créneau, au cabinet ou en visioconférence.",
        },
        {
          title: "Le premier avis",
          text: "Pendant 45 minutes, vous exposez la situation. Vous repartez avec un premier avis oral.",
        },
        {
          title: "La note écrite",
          text: "Sous 5 jours ouvrés : risques, options et coûts. Une convention d’honoraires vous est proposée si vous poursuivez.",
        },
      ],
    },
  },
} as const;

export type CabinetAvocatCopy = WidenLiterals<typeof fr>;

const en: CabinetAvocatCopy = {
  brand: {
    name: "Your business",
    tagline: "Business law attorneys",
  },
  topBar: {
    left: "Reply within 2 business days",
    right: "Monday to Friday, 9 a.m.–6 p.m.",
  },
  nav: {
    home: "Home",
    expertises: "Practice areas",
    casTypes: "Case types",
    methode: "Method",
    publications: "Publications",
    consultation: "Appointment",
  },
  cta: {
    consultation: "Book an appointment",
    call: "Call",
    appointmentShort: "Appointment",
  },
  a11y: {
    quickActions: "Quick actions",
  },
  contact: {
    address: "12 Example Street, 00000 Your city",
    email: "contact@example.com",
    phone: { href: "tel:+33199000043", label: "01 99 00 00 43" },
    hours: "Monday to Friday, 9 a.m.–6 p.m.",
    labels: {
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Hours",
    },
  },
  footer: {
    title: "Your business, business law attorneys",
    text: "For business owners and small and mid-sized companies. First consultation at the office or by video call, with fees quoted in writing before any work begins.",
  },
  closing: {
    title: "Have a matter to bring us?",
    text: "Describe the situation in a few lines. An attorney replies within 2 business days with a first opinion and the cost of any engagement.",
    primary: "Book an appointment",
    callLabel: "Or call us at",
  },
  meta: {
    home: {
      title: "Your business - Business law attorneys",
      description:
        "Law firm for business owners and small companies: contracts, partners, disputes, unpaid invoices. Reply in 2 days, fees quoted up front.",
    },
    expertises: {
      title: "Practice areas - Your business",
      description:
        "Commercial contracts, partners, disputes, ended business relationships, debt recovery: what we do, when people call us, and what it usually costs.",
    },
    casTypes: {
      title: "Case types - Your business",
      description:
        "Partners at odds, a relationship ended without notice, an unpaid invoice, a contract to secure: what we did, how long it took, what it cost.",
    },
    methode: {
      title: "Method - Your business",
      description:
        "Understand, frame, act: three steps with timelines, what we ask of you and what you receive at each one, and nothing starts without your approval.",
    },
    publications: {
      title: "Publications - Your business",
      description:
        "Short notes by the firm’s attorneys: negotiate before threatening, partner disputes, unpaid invoices, ended relationships, exclusivity contracts.",
    },
    consultation: {
      title: "Appointment - Your business",
      description:
        "Describe your situation and we reply within 2 business days. First consultation of 45 minutes for €150 plus VAT, at the office or by video call.",
    },
  },
  home: {
    hero: {
      eyebrow: "Business law attorneys",
      title:
        "A business attorney for the decisions that put your company at stake.",
      description:
        "Contracts, disputes between partners, commercial litigation, unpaid invoices: we take stock within 2 business days, tell you what it could cost, and act only when it’s worth it.",
      primary: "Book an appointment",
      secondary: "See our fees",
      imageAlt:
        "Meeting room with wooden chairs around a long table, a screen on it, and floor-to-ceiling windows.",
      facts: [
        { label: "First consultation", value: "45 min, €150 plus VAT" },
        { label: "Reply", value: "Within 2 business days" },
        { label: "Fees", value: "Written agreement up front" },
      ],
    },
    domains: {
      eyebrow: "Practice areas",
      title: "Five subjects, handled by attorneys who do nothing else.",
      description:
        "We don’t cover all of the law. We cover well what touches a company’s everyday life.",
      more: "See all practice areas",
      imageAlt: "Close-up of a stack of white binders.",
    },
    steps: {
      eyebrow: "How we work",
      title: "Three steps, one point of contact.",
      description:
        "You decide at every step. We don’t start anything without your approval.",
      more: "See the method in detail",
    },
    fees: {
      eyebrow: "Fees",
      title: "What an attorney costs: quoted before we start.",
      description:
        "Every engagement comes with a written fee agreement. Here are our starting rates, before VAT.",
      rows: [
        {
          label: "First consultation",
          detail:
            "45 minutes, at the office or by video call. Credited toward fees if you hire us for the matter.",
          price: "€150 plus VAT",
        },
        {
          label: "Commercial contract",
          detail: "Drafting or review. Flat fee quoted after we read it.",
          price: "From €900 plus VAT",
        },
        {
          label: "Formal demand letter",
          detail: "A firm letter or a negotiation proposal, at a flat fee.",
          price: "From €450 plus VAT",
        },
        {
          label: "Ongoing matter",
          detail:
            "Time spent, with a cap we set together. Associate attorney €190 an hour, partner €280 an hour, plus VAT.",
          price: "Agreed cap",
        },
        {
          label: "Court proceedings",
          detail: "Flat fee per stage, set in the fee agreement.",
          price: "From €3,500 plus VAT",
        },
      ],
      note: "20% VAT is added. Court and bailiff costs are billed at cost, with receipts. These rates are starting points: the quote depends on the matter.",
      cta: "Request a quote",
    },
    cases: {
      eyebrow: "Case types",
      title: "Situations we know well.",
      description:
        "A partner wants out, a client disappears, an invoice goes unpaid: you may recognize your own.",
      more: "See the case types",
    },
  },
  expertises: {
    eyebrow: "Practice areas",
    title: "Five areas, one field: business law.",
    description:
      "We work with business owners and small and mid-sized companies. For each area: what we do, when people call us, and what it usually costs.",
    imageAlt:
      "Black chairs lined up along a large, light-colored meeting table.",
    topicsLabel: "We step in for",
    feesLabel: "Fees",
    items: [
      {
        title: "Commercial contracts",
        summary:
          "A poorly drafted contract gets expensive the day the relationship turns tense. We draft it or review it before you sign.",
        topics: [
          "General terms of sale and purchase",
          "Distribution, agency and subcontracting agreements",
          "Exclusivity, exit clauses and penalties",
        ],
        fees: "Flat fee from €900 plus VAT, quoted after we read the contract.",
      },
      {
        title: "Partners and governance",
        summary:
          "A disagreement between partners can stall a company faster than a competitor can. We set the ground rules before the conflict takes hold.",
        topics: [
          "Shareholder agreements and bylaws",
          "Deadlocked decisions, removing an officer",
          "A partner’s exit and the sale of shares",
        ],
        fees: "Time spent with an agreed cap, or a flat fee for a sale.",
      },
      {
        title: "Commercial disputes",
        summary:
          "Litigation costs time and money. We assess your chances and the real cost before filing anything.",
        topics: [
          "Breach or poor performance of a contract",
          "Invoice disputes, warranties, liability",
          "Representation before the commercial court",
        ],
        fees: "Flat fee per stage, from €3,500 plus VAT, set in the agreement.",
      },
      {
        title: "Ended business relationships",
        summary:
          "A longtime client or supplier leaves overnight. The law requires reasonable notice, and we check whether it was given.",
        topics: [
          "Calculating the notice period and the compensation owed",
          "Negotiating a gradual exit",
          "Going to court if negotiation fails",
        ],
        fees: "Formal demand letter at a flat fee from €450 plus VAT, then time spent.",
      },
      {
        title: "Debt recovery",
        summary:
          "An unpaid invoice isn’t only a cash-flow problem. We recover the money without damaging the relationship when that’s possible.",
        topics: [
          "Reminders and formal demand letters",
          "Payment orders and interim payment orders",
          "Enforcement and payment follow-up",
        ],
        fees: "Formal demand letter from €450 plus VAT; a success fee is possible, set in advance.",
      },
    ],
  },
  casTypes: {
    eyebrow: "Case types",
    title: "Four situations we run into often.",
    description:
      "What happened, what we did, how long it took and what it cost. Every matter is different, and no outcome is ever guaranteed.",
    imageAlt:
      "Office corridor with glass partitions in black frames, a smooth floor and dark pendant lights.",
    situationLabel: "The situation",
    actionLabel: "What we did",
    outcomeLabel: "Timeline and cost",
    note: "Anonymized situations, reconstructed from typical matters.",
    items: [
      {
        title: "Two partners, two visions of the future",
        situation:
          "In a company of 25 employees, one partner wants to sell and the other wants to keep going. Decisions have been deadlocked for six months.",
        action:
          "Review of the shareholder agreement, negotiation of an exit, and a signed share purchase agreement with no litigation.",
        outcome: "7 weeks · €6,500 plus VAT agreed up front",
      },
      {
        title: "A longtime client walks away overnight",
        situation:
          "A manufacturer loses, without notice, a distributor that accounted for 30% of its revenue.",
        action:
          "Formal demand letter, then negotiation of a notice period and a termination payment. No proceedings were filed.",
        outcome: "5 weeks · €4,200 plus VAT, time spent",
      },
      {
        title: "An €80,000 invoice that stays unpaid",
        situation:
          "A subcontractor has waited eight months for payment on completed work. The client disputes its quality.",
        action:
          "Firm reminder, friendly expert review, then an installment agreement signed by the client.",
        outcome: "10 weeks · flat fee of €1,800 plus VAT",
      },
      {
        title: "An exclusivity contract to secure before signing",
        situation:
          "A mid-sized company is about to sign a five-year exclusivity contract offered by a large distributor.",
        action:
          "Full review, and renegotiation of the exit clause and the late-delivery penalties.",
        outcome: "2 weeks · flat fee of €1,200 plus VAT",
      },
    ],
  },
  methode: {
    eyebrow: "Method",
    title: "Three steps, and you decide at each one.",
    description:
      "Here is what happens, and how fast, between your first message and the end of the matter.",
    imageAlt:
      "Workstation next to a large window, with an open laptop on a long counter.",
    askLabel: "What we ask of you",
    getLabel: "What you receive",
    items: [
      {
        title: "Understand",
        delay: "Within 2 business days",
        text: "We listen to the situation, read the key documents and identify what matters: the financial stakes, the deadline, the balance of power.",
        ask: "The contract or correspondence at issue, and three lines on what you want to achieve.",
        get: "A first oral opinion at the end of the 45-minute meeting.",
      },
      {
        title: "Frame",
        delay: "Within 5 business days",
        text: "We put numbers on the risks and the options: negotiate, secure, or go to court. For each option, a cost and a timeline.",
        ask: "The additional documents we listed together.",
        get: "A written memo of a few pages and a fee agreement, to sign if you move forward.",
      },
      {
        title: "Act",
        delay: "Depending on the option chosen",
        text: "A letter, a negotiation, a settlement or proceedings: we carry out the option you chose and come back to you at every milestone.",
        ask: "A decision at each milestone: continue, adjust or stop.",
        get: "A written progress update at each milestone, with the cost incurred.",
      },
    ],
    pledgesTitle: "Our commitments",
    pledges: [
      {
        title: "One point of contact",
        text: "One partner follows your matter from start to finish. The firm has two partners and four associates.",
      },
      {
        title: "Fees in writing",
        text: "An agreement signed before any work begins. No overruns without your approval.",
      },
      {
        title: "A reply within 2 days",
        text: "Every message gets a reply within 2 business days, even if it’s only to say a point needs more time.",
      },
      {
        title: "Confidentiality",
        text: "Your communications are protected by attorney-client privilege from the very first message.",
      },
    ],
  },
  publications: {
    eyebrow: "Publications",
    title: "Short notes on the questions business owners ask us.",
    description:
      "Not legal news and not a blog: notes written by the firm’s attorneys, each answering one specific question.",
    readingLabel: "read",
    items: [
      {
        tag: "Disputes",
        title:
          "Negotiate before threatening: what a first letter should contain",
        text: "A letter that is too harsh shuts the discussion down, and one that is too soft is worth nothing. The four elements that open a negotiation.",
        time: "6 min",
      },
      {
        tag: "Partners",
        title:
          "Disputes between partners: five questions to ask before any decision",
        text: "Before selling, blocking or suing, what to check in the shareholder agreement, the bylaws and the accounts.",
        time: "8 min",
      },
      {
        tag: "Debt recovery",
        title:
          "Unpaid invoice: remind, send a formal demand, or sue, and in what order?",
        text: "The deadlines to respect, and the point where proceedings cost more than the debt is worth.",
        time: "5 min",
      },
      {
        tag: "Contracts",
        title:
          "Ending a business relationship: the notice period that really protects you",
        text: "How a reasonable notice period is calculated, and what evidence to gather from day one.",
        time: "7 min",
      },
      {
        tag: "Contracts",
        title:
          "Before signing an exclusivity contract: three clauses to reread",
        text: "Term, exit clause and penalties: where the heaviest commitments hide.",
        time: "6 min",
      },
    ],
  },
  consultation: {
    eyebrow: "Appointment",
    title: "Describe your situation and we’ll reply within 2 business days.",
    description:
      "An attorney reads your message, offers you a time slot and tells you, before the meeting, which documents are worth bringing.",
    form: {
      title: "Your request",
      intro: "A few lines are enough: we’ll ask for the documents afterward.",
      submit: "Send my request",
      fields: {
        name: "Full name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        topic: "Subject",
        topicPlaceholder: "Choose a subject",
        topics: [
          "Commercial contract",
          "Partners and governance",
          "Commercial dispute",
          "Ended business relationship",
          "Unpaid invoice",
          "Other subject",
        ],
        urgency: "Urgency",
        urgencyPlaceholder: "Choose a timeframe",
        urgencies: [
          "No particular deadline",
          "Within the month",
          "Within the week",
          "Urgent: a short deadline is already running",
        ],
        mode: "Preferred meeting",
        modePlaceholder: "Choose a format",
        modes: ["At the office", "By video call"],
        message: "Your situation in a few lines",
        consent: "I agree to be contacted by the firm about my request.",
      },
    },
    info: {
      title: "The first consultation",
      rows: [
        { label: "Length", value: "45 minutes" },
        { label: "Where", value: "At the office or by video call" },
        {
          label: "Rate",
          value:
            "€150 plus VAT (€180 with VAT), credited toward fees if you hire us for the matter",
        },
      ],
      contactTitle: "Contact us",
    },
    documents: {
      title: "Documents that help with your matter",
      intro: "None are required before the meeting, but they save time.",
      items: [
        "The contract or bylaws involved, with any amendments",
        "Letters and emails exchanged with the other party",
        "Invoices or statements that show what is at stake",
        "Dates to keep in mind: due dates, running deadlines, summonses",
      ],
    },
    next: {
      title: "What happens next",
      steps: [
        {
          title: "Your appointment",
          text: "We reply within 2 business days with a time slot, at the office or by video call.",
        },
        {
          title: "The first opinion",
          text: "For 45 minutes, you explain the situation. You leave with a first oral opinion.",
        },
        {
          title: "The written memo",
          text: "Within 5 business days: risks, options and costs. A fee agreement is offered if you move forward.",
        },
      ],
    },
  },
};

export const cabinetAvocat: TemplateDefinition<
  "cabinet-avocat",
  CabinetAvocatCopy
> = {
  slug: "cabinet-avocat",
  /**
   * Gris chaud et encre : papier beige clair, encre presque noire, bordures
   * fines beige-gris, angles droits (un seul rayon : 0), aucune ombre. L'accent
   * est l'encre (boutons noirs) ; le fond inverse est la même encre. Sur-titres
   * brun sépia (clair) et sable (sur fond sombre). Inter en affichage et en texte.
   */
  theme: {
    surface: "oklch(0.959 0.010 82)",
    raised: "oklch(1 0 0)",
    tint: "oklch(0.922 0.019 79)",
    ink: "oklch(0.209 0.010 268)",
    inkMuted: "oklch(0.44 0.009 268)",
    eyebrow: "oklch(0.487 0.033 74)",
    eyebrowInverse: "oklch(0.752 0.028 80)",
    line: "oklch(0.864 0.019 78)",
    accent: "oklch(0.209 0.010 268)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.209 0.010 268)",
    inverseInk: "oklch(1 0 0)",
    radius: "0",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 600,
    shadowSm: "none",
    shadowLg: "none",
  },
  paths: {
    home: "/cabinet-avocat",
    expertises: "/cabinet-avocat/expertises",
    casTypes: "/cabinet-avocat/cas-types",
    methode: "/cabinet-avocat/methode",
    publications: "/cabinet-avocat/publications",
    consultation: "/cabinet-avocat/consultation",
  },
  copy: { fr, en },
};
