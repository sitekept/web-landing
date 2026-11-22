import type {
  TemplateDefinition,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « cabinet-avocat » (cabinet d'avocat fictif « Cabinet Valmont » :
 * droit des affaires, contentieux commercial et stratégie, allure documentaire
 * sans image).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, métadonnées. Les vues (`src/templates/cabinet-avocat/`) n'ont
 * aucun texte en dur. Pas d'image dans cette démo, donc pas d'`alt`.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre (anglais US)
 * typée `CabinetAvocatCopy` (dérivé de `fr` par `WidenLiterals`). Une clé
 * manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
 * Pas d'icône dans cette démo : aucune clé `icon`.
 */

const fr = {
  brand: {
    name: "Cabinet Valmont",
    tagline: "Droit des affaires, contentieux commercial et stratégie",
  },
  topBar: {
    left: "Dossier 24-041",
    right: "Conseil & contentieux",
  },
  nav: {
    home: "Accueil",
    expertises: "Expertises",
    casTypes: "Cas types",
    methode: "Méthode",
    publications: "Publications",
    consultation: "Consultation",
  },
  cta: {
    consultation: "Demander une consultation",
  },
  footer: {
    title:
      "Une template juridique qui assume une forme de lecture sobre et documentaire.",
    text: "Les preuves passent par les dossiers, les cas-types et les publications, pas par une rhétorique institutionnelle vide.",
    address: "Paris 8e",
    email: "contact@cabinetvalmont.example",
    phone: { href: "tel:+33199000043", label: "01 99 00 00 43" },
  },
  meta: {
    home: {
      title: "Cabinet Valmont - Avocat en droit des affaires",
      description:
        "Template documentaire pour cabinet d’avocat avec pages d’expertises, cas types, publications et consultation.",
    },
    expertises: {
      title: "Expertises - Cabinet Valmont",
      description:
        "Des expertises limitées, nommées clairement et assumées sans dispersion : contentieux commercial, contrats et rupture, pré-contentieux dirigeant.",
    },
    casTypes: {
      title: "Cas types - Cabinet Valmont",
      description:
        "Conflit entre associés, rupture brutale de relation commerciale, recouvrement stratégique : des cas-types qui servent de grille de projection rapide.",
    },
    methode: {
      title: "Méthode - Cabinet Valmont",
      description:
        "Comprendre, cadrer, agir : trois mouvements pour rendre le cabinet concret, du dossier et des pièces décisives jusqu’au courrier ou au contentieux.",
    },
    publications: {
      title: "Publications - Cabinet Valmont",
      description:
        "Des notes de dossier, pas un blog marketing : négocier avant de menacer, conflit entre associés, contentieux commercial.",
    },
    consultation: {
      title: "Consultation - Cabinet Valmont",
      description:
        "Une consultation initiale cadrée : sujet et parties en présence, pièces disponibles, objectif recherché (négocier, sécuriser, interrompre ou agir vite).",
    },
  },
  home: {
    hero: {
      eyebrow: "Autorité documentaire",
      title:
        "Le site ouvre un dossier, il ne joue pas à la plaquette institutionnelle.",
      description:
        "Message de positionnement, preuves de spécialité, cas-types et consultation cadrée : la structure est construite pour la lecture utile avant prise de contact.",
      primary: "Ouvrir une consultation",
      secondary: "Lire les publications",
    },
    summary: {
      label: "Sommaire",
      version: "Version 1.0",
      items: [
        {
          code: "Pièce 01",
          text: "Expertises limitées et clairement assumées",
        },
        {
          code: "Pièce 02",
          text: "Interlocuteur senior et posture de lecture rapide",
        },
        {
          code: "Pièce 03",
          text: "Méthode en trois temps pour cadrer le risque",
        },
        {
          code: "Pièce 04",
          text: "Un seul objectif de conversion : la consultation",
        },
      ],
    },
    signals: {
      eyebrow: "Signaux",
      title:
        "Le visiteur doit reconnaître son niveau d’urgence ou de risque en quelques lignes.",
      description:
        "Cette séquence remplace les habituels chiffres-clés ou badges décoratifs par une vraie qualification des situations.",
      items: [
        "Conflit entre associés qui se cristallise vite",
        "Rupture contractuelle avec pression de délai",
        "Contentieux commercial qui doit être recadré avant emballement",
        "Négociation sensible à sécuriser avant prise de position publique",
      ],
    },
    cases: {
      eyebrow: "Cas-types",
      title:
        "Plutôt qu’une section « services », la homepage présente des situations de lecture immédiate.",
      description:
        "Le style reste sec et précis pour préserver l’autorité du cabinet.",
      items: [
        "Associés qui ne partagent plus la même stratégie de sortie.",
        "Partenaire commercial qui suspend ou viole brutalement ses engagements.",
        "Entreprise qui doit arbitrer entre pression amiable, protocole ou contentieux.",
      ],
    },
    reading: {
      eyebrow: "Lecture",
      title:
        "Une dernière zone oriente vers la documentation ou la consultation.",
      description:
        "Aucun tunnel secondaire ne vient brouiller la conversion principale.",
      text: "Publications, expertises et méthode servent à rendre le cabinet tangible avant tout échange. La template évite la séduction visuelle et mise sur la lecture, la netteté et la confiance rationnelle.",
      expertises: "Voir les expertises",
      consultation: "Demander une consultation",
    },
  },
  expertises: {
    eyebrow: "Expertises",
    title:
      "Les expertises sont limitées, nommées clairement et assumées sans dispersion.",
    description:
      "La page ne cherche pas à tout couvrir. Elle pose simplement le champ réel du cabinet.",
    items: [
      "Contentieux commercial et stratégie de pression utile.",
      "Contrats, rupture et négociation avant cristallisation du litige.",
      "Pré-contentieux dirigeant, associés et situations de blocage.",
    ],
  },
  casTypes: {
    eyebrow: "Cas-types",
    title:
      "Les cas-types servent de grille de projection rapide pour le prospect.",
    description:
      "Le langage reste factuel pour garder la cohérence documentaire de la template.",
    items: [
      "Conflit entre associés avec urgence de gouvernance ou sortie à négocier.",
      "Rupture brutale de relation commerciale ou inexécution contractuelle documentée.",
      "Recouvrement à forte dimension stratégique où l’enjeu dépasse la seule facture.",
    ],
  },
  methode: {
    eyebrow: "Méthode",
    title:
      "Comprendre, cadrer, agir : trois mouvements suffisent à rendre le cabinet concret.",
    description:
      "La page est volontairement resserrée pour rester au service de la consultation.",
    items: [
      "Comprendre le dossier, les pièces décisives et le véritable levier du rapport de force.",
      "Cadrer les risques, les options et la séquence la plus cohérente à court terme.",
      "Agir par courrier, négociation, protocole ou contentieux si c’est la bonne voie.",
    ],
  },
  publications: {
    eyebrow: "Publications",
    title:
      "Les publications renforcent la perception de lecture et de maîtrise.",
    description:
      "Ici, elles sont traitées comme des notes de dossier, pas comme un blog marketing.",
    items: [
      "Négocier avant de menacer : quand la lettre doit ouvrir une trajectoire plutôt que fermer la discussion.",
      "Conflit entre associés : ce qu’il faut cadrer avant toute prise de position émotionnelle.",
      "Contentieux commercial : comment distinguer l’affichage de fermeté de la stratégie réellement utile.",
    ],
  },
  consultation: {
    eyebrow: "Consultation",
    title: "La conversion principale est une consultation initiale cadrée.",
    description:
      "La page liste les informations attendues pour rendre le premier échange plus utile et plus rapide.",
    items: [
      "Sujet, parties en présence et niveau d’urgence réel.",
      "Pièces déjà disponibles et étapes déjà engagées.",
      "Objectif recherché : négocier, sécuriser, interrompre ou agir vite.",
    ],
  },
} as const;

export type CabinetAvocatCopy = WidenLiterals<typeof fr>;

const en: CabinetAvocatCopy = {
  brand: {
    name: "Your business",
    tagline: "Business law, commercial litigation and strategy",
  },
  topBar: {
    left: "File 24-041",
    right: "Advisory & litigation",
  },
  nav: {
    home: "Home",
    expertises: "Practice areas",
    casTypes: "Case types",
    methode: "Method",
    publications: "Publications",
    consultation: "Consultation",
  },
  cta: {
    consultation: "Request a consultation",
  },
  footer: {
    title:
      "A legal template that embraces a sober, document-style way of reading.",
    text: "Proof comes through files, case types and publications, not through empty institutional rhetoric.",
    address: "Paris, 8th district",
    email: "contact@example.com",
    phone: { href: "tel:+33199000043", label: "01 99 00 00 43" },
  },
  meta: {
    home: {
      title: "Your business - Business law firm",
      description:
        "Document-style template for a law firm, with practice area, case type, publication and consultation pages.",
    },
    expertises: {
      title: "Practice areas - Your business",
      description:
        "Limited practice areas, clearly named and owned without spreading thin: commercial litigation, contracts and termination, pre-litigation for executives.",
    },
    casTypes: {
      title: "Case types - Your business",
      description:
        "Partner disputes, abrupt end of a commercial relationship, strategic debt recovery: case types that serve as a quick projection grid.",
    },
    methode: {
      title: "Method - Your business",
      description:
        "Understand, frame, act: three moves that make the firm concrete, from the case and the decisive documents to a letter or litigation.",
    },
    publications: {
      title: "Publications - Your business",
      description:
        "Case-file notes, not a marketing blog: negotiate before threatening, disputes between partners, commercial litigation.",
    },
    consultation: {
      title: "Consultation - Your business",
      description:
        "A structured initial consultation: subject and parties, available documents, and the goal (negotiate, secure, stop or act fast).",
    },
  },
  home: {
    hero: {
      eyebrow: "Documentary authority",
      title:
        "The site opens a file; it doesn’t play at being an institutional brochure.",
      description:
        "Positioning statement, proof of specialization, case types and a structured consultation: the site is built for useful reading before anyone makes contact.",
      primary: "Open a consultation",
      secondary: "Read the publications",
    },
    summary: {
      label: "Contents",
      version: "Version 1.0",
      items: [
        {
          code: "Exhibit 01",
          text: "Limited, clearly stated practice areas",
        },
        {
          code: "Exhibit 02",
          text: "A senior contact and a quick-read approach",
        },
        {
          code: "Exhibit 03",
          text: "A three-step method to frame the risk",
        },
        {
          code: "Exhibit 04",
          text: "A single conversion goal: the consultation",
        },
      ],
    },
    signals: {
      eyebrow: "Signals",
      title:
        "Visitors should recognize their level of urgency or risk in a few lines.",
      description:
        "This sequence replaces the usual key figures or decorative badges with a real qualification of situations.",
      items: [
        "Partner dispute that hardens fast",
        "Contract termination under deadline pressure",
        "Commercial dispute that must be reframed before it escalates",
        "Sensitive negotiation to secure before taking a public position",
      ],
    },
    cases: {
      eyebrow: "Case types",
      title:
        "Instead of a “services” section, the homepage presents situations that can be read at a glance.",
      description:
        "The style stays dry and precise to preserve the firm’s authority.",
      items: [
        "Partners who no longer share the same exit strategy.",
        "Commercial partner who suddenly suspends or breaches its commitments.",
        "Company that must choose between amicable pressure, a settlement agreement or litigation.",
      ],
    },
    reading: {
      eyebrow: "Reading",
      title: "A final area points to the documentation or the consultation.",
      description:
        "No secondary funnel gets in the way of the main conversion.",
      text: "Publications, practice areas and method make the firm tangible before any exchange. The template avoids visual seduction and relies on reading, clarity and rational trust.",
      expertises: "See the practice areas",
      consultation: "Request a consultation",
    },
  },
  expertises: {
    eyebrow: "Practice areas",
    title:
      "Practice areas are limited, clearly named and owned without spreading thin.",
    description:
      "The page does not try to cover everything. It simply states the firm’s real field.",
    items: [
      "Commercial litigation and useful pressure strategy.",
      "Contracts, termination and negotiation before the dispute hardens.",
      "Pre-litigation for executives, partners and deadlock situations.",
    ],
  },
  casTypes: {
    eyebrow: "Case types",
    title: "Case types serve as a quick projection grid for the prospect.",
    description:
      "The language stays factual to keep the template’s document-style consistency.",
    items: [
      "Dispute between partners with governance urgency or an exit to negotiate.",
      "Abrupt end of a commercial relationship or documented breach of contract.",
      "Strategically significant debt recovery where the stakes go beyond the invoice itself.",
    ],
  },
  methode: {
    eyebrow: "Method",
    title:
      "Understand, frame, act: three moves are enough to make the firm concrete.",
    description:
      "The page is deliberately tight so it stays in service of the consultation.",
    items: [
      "Understand the case, the decisive documents and the real lever in the balance of power.",
      "Frame the risks, the options and the most coherent short-term sequence.",
      "Act through a letter, negotiation, a settlement agreement or litigation if that is the right path.",
    ],
  },
  publications: {
    eyebrow: "Publications",
    title: "Publications strengthen the perception of expertise and mastery.",
    description:
      "Here they are treated as case-file notes, not as a marketing blog.",
    items: [
      "Negotiate before threatening: when the letter should open a path rather than close the discussion.",
      "Dispute between partners: what to frame before taking any emotional stance.",
      "Commercial litigation: how to tell a show of firmness from a genuinely useful strategy.",
    ],
  },
  consultation: {
    eyebrow: "Consultation",
    title: "The main conversion is a structured initial consultation.",
    description:
      "The page lists the information expected to make the first exchange more useful and faster.",
    items: [
      "Subject, parties involved and real level of urgency.",
      "Documents already available and steps already taken.",
      "Goal: negotiate, secure, stop or act fast.",
    ],
  },
};

export const cabinetAvocat: TemplateDefinition<
  "cabinet-avocat",
  CabinetAvocatCopy
> = {
  slug: "cabinet-avocat",
  /**
   * Allure documentaire : papier beige, encre presque noire, bordures fines
   * beige-gris, angles droits (rayon 0), aucune ombre. L'accent est l'encre
   * (boutons noirs) ; le fond inverse est la même encre. Sur-titres brun
   * sépia (clair) et sable (sur fond sombre). Inter en affichage et en texte.
   */
  theme: {
    surface: "oklch(0.959 0.010 82)",
    raised: "oklch(1 0 0)",
    // Beige du bandeau et de la section « Lecture » (ancien #ece4d7).
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
