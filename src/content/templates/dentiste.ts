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
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `DentisteCopy` (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou une
 * liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`
 * (`icon: "cpu"`), identique en français et en anglais (c'est une donnée, pas un
 * texte : `WidenLiterals` la laisse littérale). Les vues la résolvent avec une
 * table `Record<DentisteIconKey, LucideIcon>` (`src/templates/dentiste/parts.tsx`).
 */

const fr = {
  brand: {
    name: "Clinique Nova Sourire",
    initials: "NS",
    tagline: "Dentisterie esthétique, familiale et implantaire",
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
    prepareFirstVisit: "Préparer ma première visite",
    seeTechnologies: "Voir les technologies",
    visit: "Venir au cabinet",
    bookFirstVisit: "Réserver ma première visite",
    callSecretary: "Appeler le secrétariat",
    prepareVisit: "Préparer ma visite",
  },
  /** Encart fixe « rail de réservation », visible sur toutes les pages (xl). */
  rail: {
    eyebrow: "Rail rendez-vous",
    title: "Consultation, douleur, contrôle ou devis esthétique.",
    text: "Une entrée de conversion visible sur toutes les pages du cabinet.",
  },
  footer: {
    title: "Un site clinique, calme et structuré autour de la réservation.",
    text: "La grammaire visuelle est volontairement stricte: rayons contenus, lignes propres, information hiérarchisée et aucune mise en scène “spa”.",
    address: "15 avenue du Parc, Levallois-Perret",
    hours: "Lun-Ven 8h30-19h00, Sam 9h00-13h00",
    email: "contact@novasourire.example",
  },
  meta: {
    home: {
      title: "Clinique Nova Sourire - Cabinet dentaire",
      description:
        "Template de cabinet dentaire avec rail de réservation, pages cliniques dédiées et hiérarchie de soins structurée.",
    },
    soins: {
      title: "Soins dentaires - Clinique Nova Sourire",
      description:
        "Prévention, soins conservateurs, esthétique du sourire et implants : les soins classés selon la logique du patient.",
    },
    technologies: {
      title: "Technologies - Clinique Nova Sourire",
      description:
        "Imagerie ciblée, protocole numérique et traçabilité clinique : la technologie comme outil de décision.",
    },
    equipe: {
      title: "Équipe - Clinique Nova Sourire",
      description:
        "Une chaîne clinique continue : chirurgiens-dentistes et coordination de parcours, rôles décrits pour le patient.",
    },
    premiereVisite: {
      title: "Première visite - Clinique Nova Sourire",
      description:
        "Quoi apporter, comment venir et comment la première consultation est conduite, avant, pendant et après.",
    },
    rendezVous: {
      title: "Rendez-vous - Clinique Nova Sourire",
      description:
        "Un pré-tri clinique pour réserver : motifs, choix du créneau et confirmation claire avant la venue.",
    },
    contact: {
      title: "Contact et accès - Clinique Nova Sourire",
      description:
        "Adresse, horaires, transports et stationnement du cabinet dentaire, dans une page courte et pratique.",
    },
  },
  home: {
    hero: {
      eyebrow: "Clinique premium structurée",
      title:
        "Une clinique qui rassure par l’information, puis convertit par la clarté du parcours.",
      description:
        "Ici, le hero ne vend pas une ambiance. Il organise la confiance: spécialités visibles, réservation immédiate, méthode médicale et absence totale de friction dans la prise de contact.",
      routesLabel: "Parcours",
      routes: [
        "Contrôle et prévention",
        "Douleur ou urgence légère",
        "Esthétique du sourire",
        "Implants et réhabilitation",
      ],
    },
    booking: {
      eyebrow: "Première disponibilité",
      slot: "Demain 10h40",
      text: "Consultation de contrôle, douleur légère, devis esthétique ou première visite.",
      points: [
        "Radiographie ciblée si nécessaire",
        "Plan de traitement expliqué avant toute intervention",
        "Compte rendu clair envoyé après la visite",
      ],
    },
    signal: {
      eyebrow: "Signal clinique",
      title:
        "Le site parle comme un cabinet précis, pas comme une landing beauté.",
      description:
        "L'information médicale est hiérarchisée, la réservation reste dominante et les preuves sont montrées avant les promesses.",
      items: [
        "6 pôles de soins lisibles dès l'accueil.",
        "48h pour un premier rendez-vous standard.",
        "4,9/5 sur la qualité des explications et du suivi.",
      ],
    },
    technologies: {
      eyebrow: "Technologies",
      title: "Une homepage construite comme une feuille de route clinique.",
      description:
        "La deuxième séquence ne duplique pas un bloc cartes générique: elle installe immédiatement la logique de diagnostic et d'accompagnement.",
      cards: [
        {
          icon: "cpu",
          title: "Imagerie ciblée",
          text: "Le diagnostic est montré et commenté au patient avant toute décision.",
        },
        {
          icon: "shield-check",
          title: "Protocoles stricts",
          text: "La structure du site met aussi l'hygiène au premier plan dans le discours.",
        },
        {
          icon: "stethoscope",
          title: "Plan de traitement lisible",
          text: "Chaque proposition clinique est séquencée, chiffrée et expliquée.",
        },
      ],
      decision: {
        eyebrow: "Décision médicale",
        title: "Le patient voit où il en est, ce qu’on propose, et pourquoi.",
        items: [
          "Imagerie si utile, jamais décorative.",
          "Options de traitement rendues comparables.",
          "Calendrier et suivi expliqués avant validation.",
        ],
      },
    },
    journey: {
      eyebrow: "Parcours patient",
      title: "Une timeline verticale remplace la grille standard de services.",
      description:
        "Le visiteur comprend comment se déroule une visite complète avant même d'ouvrir les pages secondaires.",
      intro:
        "Le rythme de page est volontairement plus séquencé que sur les autres templates: triage, diagnostic, plan, suivi.",
      steps: [
        "Préparer la visite: motif, documents, informations de santé.",
        "Consultation: bilan, radios ciblées si besoin, explications directes.",
        "Planifier la suite: devis, étapes, délais et contacts utiles.",
      ],
    },
    cabinet: {
      eyebrow: "Cabinet",
      title:
        "Une dernière séquence plus humaine, mais toujours tenue par la logique clinique.",
      description:
        "Le site finit sur l'équipe, l'hygiène et l'accès, sans retomber dans un hero bis.",
      cards: [
        {
          title: "Équipe coordonnée",
          text: "Le cabinet présente des rôles clairs, sans dilution du parcours entre plusieurs interlocuteurs.",
        },
        {
          title: "Hygiène documentée",
          text: "Les protocoles et équipements sont montrés comme une preuve de méthode, pas comme un argument marketing flou.",
        },
        {
          title: "Première visite fluide",
          text: "La page dédiée explique comment venir, quoi apporter et comment la consultation sera cadrée.",
        },
      ],
    },
  },
  soins: {
    intro: {
      eyebrow: "Soins",
      title:
        "Les soins sont classés selon la logique patient, pas selon l'organisation interne du cabinet.",
      description:
        "Cette page reste clinique et lisible: bénéfice, niveau d'engagement, mode de suivi.",
      treatments: [
        {
          title: "Prévention & contrôle",
          text: "Consultation de contrôle, détartrage, radios ciblées et logique de suivi annuel.",
        },
        {
          title: "Soins conservateurs",
          text: "Traitement de caries et restauration avec discours simple et décision visible.",
        },
        {
          title: "Esthétique du sourire",
          text: "Blanchiment, facettes et harmonisation avec mise en situation avant validation.",
        },
        {
          title: "Implants & réhabilitation",
          text: "Parcours plus long présenté comme une suite d'étapes claires et comparables.",
        },
      ],
    },
    principles: {
      eyebrow: "Principes",
      title: "Trois garde-fous maintiennent la confiance.",
      items: [
        {
          icon: "shield-check",
          title: "Diagnostic visible",
          text: "Le patient comprend ce qui est observé avant qu'une solution lui soit proposée.",
        },
        {
          icon: "syringe",
          title: "Intervention proportionnée",
          text: "Le site évite le ton spectaculaire et hiérarchise clairement l'utilité du soin.",
        },
        {
          icon: "sparkles",
          title: "Esthétique cadrée",
          text: "Les traitements premium sont montrés sans basculer dans un imaginaire cosmétique.",
        },
      ],
    },
  },
  technologies: {
    eyebrow: "Technologies",
    title:
      "La technologie est racontée comme un outil de décision, pas comme un décor premium.",
    description:
      "Cette page précise pourquoi chaque outil existe dans le parcours clinique, et ce qu'il change concrètement pour le patient.",
    items: [
      {
        icon: "cpu",
        title: "Imagerie ciblée",
        text: "Radiographie ponctuelle ou imagerie guidée selon le cas, jamais affichée comme gadget.",
      },
      {
        icon: "workflow",
        title: "Protocole numérique",
        text: "Le cabinet structure mieux ses étapes, ses devis et ses suivis grâce à des outils de coordination.",
      },
      {
        icon: "shield",
        title: "Traçabilité clinique",
        text: "Photos, comptes rendus et recommandations restent rattachés au parcours du patient.",
      },
    ],
  },
  equipe: {
    intro: {
      eyebrow: "Équipe",
      title:
        "Le cabinet se présente comme une chaîne clinique continue, pas comme des profils isolés.",
      description:
        "Les rôles sont décrits selon ce qu'ils changent pour le patient dans son parcours.",
      members: [
        {
          icon: "user-round",
          name: "Dr Inès Morvan",
          role: "Chirurgien-dentiste, esthétique et réhabilitation",
        },
        {
          icon: "user-round",
          name: "Dr Mehdi Karam",
          role: "Implantologie et chirurgie guidée",
        },
        {
          icon: "user-round",
          name: "Léna Puech",
          role: "Coordinatrice de parcours et relation patient",
        },
      ],
    },
    practice: {
      eyebrow: "Pratique",
      title:
        "Le site souligne la compétence par la méthode, pas par la posture.",
      items: [
        {
          icon: "award",
          title: "Formation continue",
          text: "Le cabinet montre des standards, pas une accumulation d'effets d'autorité.",
        },
        {
          icon: "microscope",
          title: "Équipement ciblé",
          text: "La technologie est montrée seulement lorsqu'elle change vraiment le niveau de diagnostic.",
        },
        {
          icon: "user-round",
          title: "Continuité du suivi",
          text: "Le patient sait qui prend le relais à chaque étape importante du parcours.",
        },
      ],
    },
  },
  premiereVisite: {
    eyebrow: "Première visite",
    title:
      "Une page dédiée pour réduire l'incertitude avant la première consultation.",
    description:
      "Le cabinet explique quoi apporter, comment venir et comment la consultation sera conduite.",
    steps: [
      {
        icon: "clipboard-check",
        title: "Avant la venue",
        text: "Ordonnances récentes, radio disponible, mutuelle si utile et motif de consultation déjà clarifié.",
      },
      {
        icon: "file-text",
        title: "Pendant le rendez-vous",
        text: "Échange, bilan, radios ciblées si nécessaires puis proposition de plan de traitement.",
      },
      {
        icon: "locate-fixed",
        title: "Après la consultation",
        text: "Compte rendu, consignes, prochain rendez-vous ou devis selon le parcours retenu.",
      },
    ],
  },
  rendezVous: {
    eyebrow: "Rendez-vous",
    title:
      "La page de réservation agit comme un pré-tri clinique, pas comme un simple bouton final.",
    description:
      "Elle distingue les motifs, la temporalité et le niveau de préparation attendu avant venue au cabinet.",
    reasons: {
      eyebrow: "Trois motifs principaux",
      label: "Motif",
      items: [
        "Première consultation et bilan global",
        "Douleur légère ou besoin de contrôle rapide",
        "Projet esthétique ou réhabilitation plus long",
      ],
    },
    steps: [
      {
        icon: "clipboard-list",
        title: "Premier échange",
        text: "Motif, antécédents utiles, documents éventuels et niveau d'urgence.",
      },
      {
        icon: "calendar-clock",
        title: "Choix du créneau",
        text: "Le site met en avant les temporalités réalistes selon le type de besoin.",
      },
      {
        icon: "circle-check-big",
        title: "Confirmation claire",
        text: "Adresse, accès, préparation et durée estimée sont envoyés sans ambiguïté.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title:
      "Adresse, accès et rythme du cabinet dans une page courte, presque logistique.",
    description:
      "Une page contact de cabinet doit répondre aux questions pratiques plus qu'ajouter du storytelling.",
    details: [
      "15 avenue du Parc, 92300 Levallois-Perret",
      "01 99 00 00 18",
      "contact@novasourire.example",
      "Lun-Ven 8h30-19h00, Sam 9h00-13h00",
    ],
    access: [
      {
        icon: "map-pin",
        title: "Accès immédiat",
        text: "Cabinet à 4 minutes de la gare Clichy-Levallois, accès PMR et façade lisible.",
      },
      {
        icon: "train-front",
        title: "Transport",
        text: "Métro ligne 3, bus 274 et station Vélib' à proximité directe.",
      },
      {
        icon: "parking-circle",
        title: "Stationnement",
        text: "Parking Indigo à quelques minutes et dépose minute devant la clinique.",
      },
    ],
  },
} as const;

/** Type de la copie d'une langue, dérivé de la version française. */
export type DentisteCopy = WidenLiterals<typeof fr>;

/** Clés d'icône utilisées par la copie (valeurs des propriétés `icon`). */
export type DentisteIconKey = TemplateIconKey<DentisteCopy>;

/**
 * Version anglaise : traduction neutre de la même entreprise fictive. La marque
 * devient « Your business » et l'e-mail `contact@example.com` ; le numéro, lui,
 * reste le même numéro manifestement factice. Mêmes clés et mêmes longueurs de
 * liste que `fr` : le type `DentisteCopy` l'impose.
 */
const en: DentisteCopy = {
  brand: {
    name: "Your business",
    initials: "YB",
    tagline: "Aesthetic, family and implant dentistry",
  },
  phone: {
    href: "tel:+33199000018",
    label: "01 99 00 00 18",
  },
  nav: {
    home: "Home",
    soins: "Treatments",
    technologies: "Technologies",
    equipe: "Team",
    premiereVisite: "First visit",
    rendezVous: "Appointments",
    contact: "Contact",
  },
  cta: {
    book: "Book an appointment",
    prepareFirstVisit: "Prepare my first visit",
    seeTechnologies: "See the technologies",
    visit: "Visit the practice",
    bookFirstVisit: "Book my first visit",
    callSecretary: "Call the front desk",
    prepareVisit: "Prepare my visit",
  },
  rail: {
    eyebrow: "Appointments",
    title: "Consultation, pain, check-up or cosmetic quote.",
    text: "A booking entry point visible on every page of the practice.",
  },
  footer: {
    title: "A calm, clinical site structured around booking.",
    text: "The visual language is deliberately strict: restrained radii, clean lines, ranked information and no “spa” staging.",
    address: "15 avenue du Parc, Levallois-Perret",
    hours: "Mon-Fri 8:30 am-7:00 pm, Sat 9:00 am-1:00 pm",
    email: "contact@example.com",
  },
  meta: {
    home: {
      title: "Your business - Dental practice",
      description:
        "Dental practice template with a booking rail, dedicated clinical pages and a structured hierarchy of treatments.",
    },
    soins: {
      title: "Dental treatments - Your business",
      description:
        "Prevention, restorative care, smile aesthetics and implants: treatments organized around the patient's logic.",
    },
    technologies: {
      title: "Technologies - Your business",
      description:
        "Targeted imaging, digital protocol and clinical traceability: technology as a decision tool.",
    },
    equipe: {
      title: "Team - Your business",
      description:
        "A continuous clinical chain: dental surgeons and care coordination, with roles described for the patient.",
    },
    premiereVisite: {
      title: "First visit - Your business",
      description:
        "What to bring, how to get here and how the first consultation is run: before, during and after.",
    },
    rendezVous: {
      title: "Appointments - Your business",
      description:
        "A clinical pre-screening to book: reasons, choice of slot and a clear confirmation before you come.",
    },
    contact: {
      title: "Contact and directions - Your business",
      description:
        "Address, opening hours, transport and parking for the dental practice, on a short, practical page.",
    },
  },
  home: {
    hero: {
      eyebrow: "Structured premium clinic",
      title:
        "A clinic that reassures through information, then converts through a clear journey.",
      description:
        "Here, the hero doesn't sell a mood. It builds trust: visible specialties, instant booking, a medical method and no friction at all when getting in touch.",
      routesLabel: "Pathway",
      routes: [
        "Check-ups and prevention",
        "Pain or minor emergency",
        "Smile aesthetics",
        "Implants and rehabilitation",
      ],
    },
    booking: {
      eyebrow: "First availability",
      slot: "Tomorrow 10:40 am",
      text: "Check-up consultation, mild pain, aesthetic quote or first visit.",
      points: [
        "Targeted X-ray if needed",
        "Treatment plan explained before any procedure",
        "Clear report sent after the visit",
      ],
    },
    signal: {
      eyebrow: "Clinical signal",
      title:
        "The site speaks like a precise practice, not like a beauty landing page.",
      description:
        "Medical information is ranked, booking stays dominant and proof is shown before promises.",
      items: [
        "6 care areas, clear from the home page.",
        "48 hours for a standard first appointment.",
        "4.9/5 for the quality of explanations and follow-up.",
      ],
    },
    technologies: {
      eyebrow: "Technologies",
      title: "A home page built like a clinical roadmap.",
      description:
        "The second sequence doesn't repeat a generic card block: it immediately sets up the logic of diagnosis and support.",
      cards: [
        {
          icon: "cpu",
          title: "Targeted imaging",
          text: "The diagnosis is shown and explained to the patient before any decision is made.",
        },
        {
          icon: "shield-check",
          title: "Strict protocols",
          text: "The structure of the site also puts hygiene front and center in its message.",
        },
        {
          icon: "stethoscope",
          title: "A readable treatment plan",
          text: "Every clinical proposal is sequenced, priced and explained.",
        },
      ],
      decision: {
        eyebrow: "Medical decision",
        title:
          "Patients see where they stand, what is being proposed, and why.",
        items: [
          "Imaging when it helps, never for show.",
          "Treatment options made comparable.",
          "Schedule and follow-up explained before sign-off.",
        ],
      },
    },
    journey: {
      eyebrow: "Patient journey",
      title: "A vertical timeline replaces the standard services grid.",
      description:
        "Visitors understand how a full visit unfolds before they even open the secondary pages.",
      intro:
        "The page rhythm is deliberately more sequenced than in the other templates: triage, diagnosis, plan, follow-up.",
      steps: [
        "Prepare the visit: reason, documents, health information.",
        "Consultation: assessment, targeted X-rays if needed, direct explanations.",
        "Plan what comes next: quote, stages, timelines and useful contacts.",
      ],
    },
    cabinet: {
      eyebrow: "The practice",
      title:
        "A final sequence that is more human, yet still held together by clinical logic.",
      description:
        "The site ends on the team, hygiene and directions, without falling back into a second hero.",
      cards: [
        {
          title: "A coordinated team",
          text: "The practice presents clear roles, without spreading the journey across several contacts.",
        },
        {
          title: "Documented hygiene",
          text: "Protocols and equipment are shown as proof of method, not as a vague marketing claim.",
        },
        {
          title: "A smooth first visit",
          text: "The dedicated page explains how to get here, what to bring and how the consultation will be run.",
        },
      ],
    },
  },
  soins: {
    intro: {
      eyebrow: "Treatments",
      title:
        "Treatments are organized around the patient's logic, not the practice's internal organization.",
      description:
        "This page stays clinical and readable: benefit, level of commitment, follow-up.",
      treatments: [
        {
          title: "Prevention & check-ups",
          text: "Check-up consultation, scaling, targeted X-rays and a yearly follow-up routine.",
        },
        {
          title: "Restorative care",
          text: "Cavity treatment and restoration, with plain explanations and a visible decision.",
        },
        {
          title: "Smile aesthetics",
          text: "Whitening, veneers and smile harmonization, with a preview before sign-off.",
        },
        {
          title: "Implants & rehabilitation",
          text: "A longer journey presented as a series of clear, comparable steps.",
        },
      ],
    },
    principles: {
      eyebrow: "Principles",
      title: "Three safeguards keep trust intact.",
      items: [
        {
          icon: "shield-check",
          title: "Visible diagnosis",
          text: "Patients understand what is observed before any solution is proposed.",
        },
        {
          icon: "syringe",
          title: "Proportionate intervention",
          text: "The site avoids a spectacular tone and clearly ranks how useful each treatment is.",
        },
        {
          icon: "sparkles",
          title: "Framed aesthetics",
          text: "Premium treatments are shown without tipping into cosmetic-industry imagery.",
        },
      ],
    },
  },
  technologies: {
    eyebrow: "Technologies",
    title: "Technology is presented as a decision tool, not as premium decor.",
    description:
      "This page explains why each tool exists in the clinical journey, and what it concretely changes for the patient.",
    items: [
      {
        icon: "cpu",
        title: "Targeted imaging",
        text: "A one-off X-ray or guided imaging depending on the case, never shown off as a gadget.",
      },
      {
        icon: "workflow",
        title: "Digital protocol",
        text: "The practice structures its steps, quotes and follow-ups better thanks to coordination tools.",
      },
      {
        icon: "shield",
        title: "Clinical traceability",
        text: "Photos, reports and recommendations stay attached to the patient's journey.",
      },
    ],
  },
  equipe: {
    intro: {
      eyebrow: "Team",
      title:
        "The practice presents itself as a continuous clinical chain, not as isolated profiles.",
      description:
        "Roles are described by what they change for the patient along their journey.",
      members: [
        {
          icon: "user-round",
          name: "Dr. Inès Morvan",
          role: "Dental surgeon, aesthetics and rehabilitation",
        },
        {
          icon: "user-round",
          name: "Dr. Mehdi Karam",
          role: "Implantology and guided surgery",
        },
        {
          icon: "user-round",
          name: "Léna Puech",
          role: "Care coordinator and patient relations",
        },
      ],
    },
    practice: {
      eyebrow: "Practice",
      title: "The site shows competence through method, not through posturing.",
      items: [
        {
          icon: "award",
          title: "Continuing education",
          text: "The practice shows standards, not a pile of authority signals.",
        },
        {
          icon: "microscope",
          title: "Targeted equipment",
          text: "Technology is shown only when it genuinely raises the level of diagnosis.",
        },
        {
          icon: "user-round",
          title: "Continuity of care",
          text: "Patients know who takes over at each important stage of the journey.",
        },
      ],
    },
  },
  premiereVisite: {
    eyebrow: "First visit",
    title:
      "A dedicated page to reduce uncertainty before the first consultation.",
    description:
      "The practice explains what to bring, how to get here and how the consultation will be run.",
    steps: [
      {
        icon: "clipboard-check",
        title: "Before you come",
        text: "Recent prescriptions, an X-ray if you have one, insurance details if relevant and a clear reason for the consultation.",
      },
      {
        icon: "file-text",
        title: "During the appointment",
        text: "A conversation, an assessment, targeted X-rays if needed, then a proposed treatment plan.",
      },
      {
        icon: "locate-fixed",
        title: "After the consultation",
        text: "Report, instructions, next appointment or quote depending on the chosen path.",
      },
    ],
  },
  rendezVous: {
    eyebrow: "Appointments",
    title:
      "The booking page works as a clinical pre-screening, not as a simple final button.",
    description:
      "It distinguishes reasons, timing and the level of preparation expected before coming to the practice.",
    reasons: {
      eyebrow: "Three main reasons",
      label: "Reason",
      items: [
        "First consultation and full check-up",
        "Mild pain or a need for a quick check-up",
        "Aesthetic project or longer rehabilitation",
      ],
    },
    steps: [
      {
        icon: "clipboard-list",
        title: "First conversation",
        text: "Reason, relevant history, any documents and level of urgency.",
      },
      {
        icon: "calendar-clock",
        title: "Choosing a slot",
        text: "The site highlights realistic timeframes depending on the type of need.",
      },
      {
        icon: "circle-check-big",
        title: "Clear confirmation",
        text: "Address, directions, preparation and estimated duration are sent without ambiguity.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title:
      "Address, directions and opening hours on a short, almost logistical page.",
    description:
      "A practice's contact page should answer practical questions rather than add storytelling.",
    details: [
      "15 avenue du Parc, 92300 Levallois-Perret",
      "01 99 00 00 18",
      "contact@example.com",
      "Mon-Fri 8:30 am-7:00 pm, Sat 9:00 am-1:00 pm",
    ],
    access: [
      {
        icon: "map-pin",
        title: "Easy access",
        text: "The practice is 4 minutes from Clichy-Levallois station, with step-free access and an easy-to-spot front.",
      },
      {
        icon: "train-front",
        title: "Public transport",
        text: "Metro line 3, bus 274 and a Vélib' station right nearby.",
      },
      {
        icon: "parking-circle",
        title: "Parking",
        text: "An Indigo car park a few minutes away and a drop-off spot in front of the clinic.",
      },
    ],
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type DentistePage = keyof DentisteCopy["meta"];

export const dentiste: TemplateDefinition<"dentiste", DentisteCopy> = {
  slug: "dentiste",
  /**
   * Palette reprise de la démo d'origine : fond menthe clair, encre bleu-vert
   * sombre (aussi couleur d'accent et de panneaux inversés), surfaces blanches,
   * rayons de 14 px.
   */
  theme: {
    surface: "oklch(0.971 0.011 189.8)",
    ink: "oklch(0.297 0.04 216.7)",
    inkMuted: "color-mix(in oklch, var(--tpl-ink) 72%, var(--tpl-surface))",
    line: "oklch(0.905 0.027 191)",
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
