import { PRICING, formatPrice } from "@/content/pricing";

export type SiteLocale = "fr" | "en";

export type LocalizedText = Record<SiteLocale, string>;

/** Prix du site, formaté une fois par langue à partir de la constante unique. */
const SITE_PRICE: LocalizedText = {
  fr: formatPrice(PRICING.site.amount),
  en: formatPrice(PRICING.site.amount, { locale: "en" }),
};

/** Prix mensuel et annuel du suivi, formatés à partir de la constante unique. */
const FOLLOW_UP_MONTHLY: LocalizedText = {
  fr: formatPrice(PRICING.followUp.monthly, { period: "month" }),
  en: formatPrice(PRICING.followUp.monthly, { locale: "en", period: "month" }),
};
const FOLLOW_UP_ANNUAL: LocalizedText = {
  fr: formatPrice(PRICING.followUp.annual, { period: "year" }),
  en: formatPrice(PRICING.followUp.annual, { locale: "en", period: "year" }),
};

export interface FeaturedTemplate {
  id: string;
  slug: string;
  externalUrl?: string;
  screenshot: string;
  featured: boolean;
  copy: {
    fr: {
      name: string;
      description: string;
    };
    en: {
      name: string;
      description: string;
    };
  };
}

export interface OfferHighlight {
  id: string;
  icon: "badgeEuro" | "clock3" | "shieldCheck" | "rocket" | "globe" | "wrench";
  copy: {
    fr: {
      title: string;
      description: string;
    };
    en: {
      title: string;
      description: string;
    };
  };
}

export interface WhySitekeptItem {
  id: string;
  icon: "rocket" | "shield" | "search" | "messagesSquare";
  copy: {
    fr: {
      title: string;
      description: string;
    };
    en: {
      title: string;
      description: string;
    };
  };
}

export interface ProcessStep {
  id: string;
  copy: {
    fr: {
      title: string;
      description: string;
    };
    en: {
      title: string;
      description: string;
    };
  };
}

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface BlogSection {
  id: string;
  title: LocalizedText;
  paragraphs: Record<SiteLocale, string[]>;
  bullets?: Record<SiteLocale, string[]>;
}

export interface BlogPost {
  slug: string;
  /** Date de première publication, au format ISO (AAAA-MM-JJ). */
  publishedAt: string;
  /** Date de dernière modification de fond. Alimente <lastmod> et dateModified. */
  updatedAt: string;
  author: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  intro: LocalizedText;
  sections: BlogSection[];
  ctaTitle: LocalizedText;
  ctaDescription: LocalizedText;
  /** Sources citées, affichées en fin d'article. Liens externes. */
  sources?: { title: string; url: string }[];
}

export interface HomeContent {
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
    proofPoints: Record<SiteLocale, string[]>;
  };
  trustStrip: Record<SiteLocale, string[]>;
  offerSection: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
  };
  whySection: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
  };
  visibilitySection: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    explanation: LocalizedText;
    linkLabel: LocalizedText;
  };
  processSection: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    ownershipParagraph: LocalizedText;
    linkLabel: LocalizedText;
  };
  templatesSection: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    cta: LocalizedText;
  };
  faqSection: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
  };
}

export interface ListingPageCopy {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  /** Mention courte, visible sous l'introduction (facultative). */
  notice?: LocalizedText;
}

export interface SeoGeoPageContent {
  eyebrow: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  importanceTitle: LocalizedText;
  importanceParagraphs: Record<SiteLocale, string[]>;
  primaryCta: LocalizedText;
  optimizationTitle: LocalizedText;
  optimizationParagraphs: Record<SiteLocale, string[]>;
  /** Éléments d'un site optimisé, affichés en liste après le premier paragraphe. */
  optimizationBullets: Record<SiteLocale, string[]>;
  secondaryCta: LocalizedText;
}

export function toSiteLocale(locale: string): SiteLocale {
  return locale === "en" ? "en" : "fr";
}

export function getLocalizedText(
  copy: LocalizedText,
  locale: string | SiteLocale
): string {
  return copy[toSiteLocale(locale)];
}

export function getLocalizedValue<T>(
  copy: Record<SiteLocale, T>,
  locale: string | SiteLocale
): T {
  return copy[toSiteLocale(locale)];
}

export const homeContent: HomeContent = {
  hero: {
    eyebrow: {
      fr: "Pour artisans et indépendants",
      en: "For tradespeople and freelancers",
    },
    title: {
      fr: "Le site internet que vous gardez.",
      en: "The website you keep.",
    },
    description: {
      fr: "Création de site internet professionnel, sur mesure pour votre activité. Votre site est en ligne 48 h après réception de vos éléments, nom de domaine offert la première année.",
      en: "Professional website design, tailored to your business. Your site is live 48 hours after we receive your materials, with the domain name free for the first year.",
    },
    primaryCta: {
      fr: "Demander un devis",
      en: "Request a quote",
    },
    secondaryCta: {
      fr: "Voir les templates",
      en: "Browse templates",
    },
    proofPoints: {
      fr: [
        `${SITE_PRICE.fr}, payé une seule fois`,
        "Aucun abonnement imposé",
        "100% propriétaire du site",
        "Domaine offert 1 an",
      ],
      en: [
        `${SITE_PRICE.en}, paid once`,
        "No forced subscription",
        "100% website ownership",
        "Free domain for 1 year",
      ],
    },
  },
  trustStrip: {
    fr: [
      "Rédaction de vos textes incluse",
      "En ligne 48 h après réception de vos éléments",
      "100% à vous",
      "Mise en ligne incluse",
    ],
    en: [
      "Writing of your text included",
      "Live 48 hours after we receive your materials",
      "100% yours",
      "Launch included",
    ],
  },
  offerSection: {
    eyebrow: {
      fr: "Ce que vous obtenez",
      en: "What you get",
    },
    title: {
      fr: "Une offre simple à acheter et à comprendre.",
      en: "An offer that is easy to buy and easy to understand.",
    },
    description: {
      fr: "Vous savez ce qui est inclus, ce qui vous appartient et comment votre site est mis en ligne.",
      en: "You know what is included, what you own and how your website goes live.",
    },
  },
  whySection: {
    eyebrow: {
      fr: "Pourquoi Sitekept",
      en: "Why Sitekept",
    },
    title: {
      fr: "Rapide, clair, et un site qui reste à vous.",
      en: "Fast, clear, and a website that stays yours.",
    },
    description: {
      fr: "Le site doit rassurer vos clients, vous rendre visible et rester entre vos mains. C'est la combinaison que nous vendons.",
      en: "Your website should reassure your customers, make you visible and remain under your control. That is the combination we sell.",
    },
  },
  visibilitySection: {
    eyebrow: {
      fr: "SEO + GEO",
      en: "SEO + GEO",
    },
    title: {
      fr: "Un site pensé pour être trouvé et recommandé.",
      en: "A website designed to be found and recommended.",
    },
    description: {
      fr: "Chez Sitekept, la visibilité ne s'arrête pas au design. Nous construisons un site aux pages claires et rapides, avec des textes qui répondent aux questions de vos clients. Le but est d'aider Google et les IA à comprendre votre activité.",
      en: "At Sitekept, visibility goes beyond design. We build a site with clear, fast pages and text that answers your customers' questions. The aim is to help Google and AI tools understand your business.",
    },
    explanation: {
      fr: "Le SEO, c'est le référencement naturel : apparaître dans les résultats de Google. Le GEO, c'est être repris dans les réponses des assistants IA. Notre blog explique ces deux sujets simplement.",
      en: "SEO is organic search visibility: appearing in Google results. GEO is being reused in the answers of AI assistants. Our blog explains both topics in simple terms.",
    },
    linkLabel: {
      fr: "En savoir plus",
      en: "Learn more",
    },
  },
  processSection: {
    eyebrow: {
      fr: "Comment ça se passe",
      en: "How it works",
    },
    title: {
      fr: "Un parcours court, sans souci technique pour vous.",
      en: "A short path, with no technical worries for you.",
    },
    description: {
      fr: "Vous nous donnez l'essentiel, nous nous occupons du design, de la technique et de la mise en ligne.",
      en: "You give us the essentials, we take care of the design, the technical side and the launch.",
    },
    ownershipParagraph: {
      fr: "Chaque site est créé par Sitekept, puis remis avec ses accès à votre nom : votre site vous appartient, comme votre enseigne. Le nom de domaine est pris en charge la première année. Un autre professionnel peut reprendre le site si vous changez de prestataire.",
      en: "Each website is created by Sitekept, then handed over with its access in your name: your website belongs to you, like your shop sign. The domain name is covered for the first year. Another professional can take the site over if you ever change provider.",
    },
    linkLabel: {
      fr: "En lire plus sur notre blog",
      en: "Read more on our blog",
    },
  },
  templatesSection: {
    eyebrow: {
      fr: "Modèles de démonstration",
      en: "Demo templates",
    },
    title: {
      fr: "Des modèles pour vous projeter, un site créé pour vous.",
      en: "Templates to picture it, a website created for you.",
    },
    description: {
      fr: "Ces modèles sont des exemples pour vous aider à vous projeter. Votre site est créé sur mesure, pour votre activité.",
      en: "These templates are examples to help you picture your site. Your website is created to measure, for your business.",
    },
    cta: {
      fr: "Voir tous les templates",
      en: "See all templates",
    },
  },
  faqSection: {
    eyebrow: {
      fr: "Questions fréquentes",
      en: "Frequently asked questions",
    },
    title: {
      fr: "Les objections les plus courantes, traitées sans jargon.",
      en: "The most common objections, answered without jargon.",
    },
    description: {
      fr: "Vous devez comprendre l'offre avant de la comparer. Voici les réponses aux questions essentielles.",
      en: "You should understand the offer before you compare it. Here are the answers to the key questions.",
    },
  },
};

export const offerHighlights: OfferHighlight[] = [
  {
    id: "entry-price",
    icon: "badgeEuro",
    copy: {
      fr: {
        title: SITE_PRICE.fr,
        description:
          "Un prix public, payé une seule fois. Aucun abonnement n'est nécessaire pour que votre site existe.",
      },
      en: {
        title: SITE_PRICE.en,
        description:
          "A public price, paid once. No subscription is needed for your website to exist.",
      },
    },
  },
  {
    id: "launch-time",
    icon: "clock3",
    copy: {
      fr: {
        title: "En ligne 48 h après réception de vos éléments",
        description:
          "Le délai de 48 h court à partir de la réception de vos éléments complets : textes, logo, photos. Sans textes, un questionnaire de 10 minutes suffit.",
      },
      en: {
        title: "Live 48 hours after we receive your materials",
        description:
          "The 48 hours start once we have all your materials: text, logo, photos. If you have no text, a 10-minute questionnaire is enough.",
      },
    },
  },
  {
    id: "ownership",
    icon: "shieldCheck",
    copy: {
      fr: {
        title: "Vous possédez 100% du site",
        description:
          "Votre site vous appartient, comme votre enseigne. Le site et ses accès sont à votre nom.",
      },
      en: {
        title: "You own 100% of the website",
        description:
          "Your website belongs to you, like your shop sign. The site and its access are in your name.",
      },
    },
  },
  {
    id: "no-subscription",
    icon: "rocket",
    copy: {
      fr: {
        title: "Aucun abonnement imposé",
        description:
          "Vous achetez un site, pas une dépendance. Un accompagnement existe, mais il reste facultatif : l'arrêter ne touche pas à votre site.",
      },
      en: {
        title: "No forced subscription",
        description:
          "You buy a website, not a dependency. Ongoing support exists, but it is optional: stopping it does not affect your site.",
      },
    },
  },
  {
    id: "deployment",
    icon: "globe",
    copy: {
      fr: {
        title: "Mise en ligne incluse",
        description:
          "Nous gérons la mise en ligne et le nom de domaine, offert la première année. Vous n'êtes pas laissé seul face à la technique.",
      },
      en: {
        title: "Launch included",
        description:
          "We handle the launch and the domain name, free for the first year. You are not left alone with the technical side.",
      },
    },
  },
  {
    id: "no-tech-stress",
    icon: "wrench",
    copy: {
      fr: {
        title: "Aucune technique à gérer",
        description:
          "Vous validez le fond et l'image. Nous prenons en charge la partie technique du début à la mise en ligne.",
      },
      en: {
        title: "No technical admin on your side",
        description:
          "You validate the message and the look. We take care of the technical side from setup to launch.",
      },
    },
  },
];

export const whySitekeptItems: WhySitekeptItem[] = [
  {
    id: "transparent-pricing",
    icon: "rocket",
    copy: {
      fr: {
        title: "Une offre qui s'explique vite",
        description:
          "Le prix, le délai, la propriété du site et l'accompagnement facultatif sont clairs dès la première lecture.",
      },
      en: {
        title: "An offer that explains itself quickly",
        description:
          "The price, the timing, the ownership of the site and the optional support are clear from the first read.",
      },
    },
  },
  {
    id: "ownership-first",
    icon: "shield",
    copy: {
      fr: {
        title: "La propriété n'est pas négociée",
        description:
          "Votre site vous appartient, comme votre enseigne. Rien ne vous oblige à rester avec Sitekept après la livraison.",
      },
      en: {
        title: "Ownership is not negotiable",
        description:
          "Your website belongs to you, like your shop sign. Nothing forces you to stay with Sitekept after delivery.",
      },
    },
  },
  {
    id: "search-visibility",
    icon: "search",
    copy: {
      fr: {
        title: "Visibilité pensée dès la base",
        description:
          "Le SEO et le GEO sont intégrés dans la structure de page, le message et la vitesse, pas ajoutés à la fin.",
      },
      en: {
        title: "Visibility designed from day one",
        description:
          "SEO and GEO are built into the page structure, message and speed, not bolted on at the end.",
      },
    },
  },
  {
    id: "plain-language",
    icon: "messagesSquare",
    copy: {
      fr: {
        title: "Un discours non technique",
        description:
          "Nous parlons simplement, pour des artisans, PME et indépendants qui veulent un site utile, pas du jargon technique.",
      },
      en: {
        title: "A non-technical sales language",
        description:
          "We keep it simple, for tradespeople, SMBs and solo founders who want a useful website, not technical jargon.",
      },
    },
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "brief",
    copy: {
      fr: {
        title: "Vous nous donnez le cadre",
        description:
          "Votre activité, votre objectif, le style qui vous plaît. Un modèle peut vous aider à vous projeter, mais votre site est créé sur mesure.",
      },
      en: {
        title: "You give us the frame",
        description:
          "Your business, your goal, the style you like. A template can help you picture it, but your website is created to measure.",
      },
    },
  },
  {
    id: "build",
    copy: {
      fr: {
        title: "Nous créons votre site",
        description:
          "Vous nous envoyez vos textes, logo et photos. Sans textes, un questionnaire de 10 minutes suffit : nous les rédigeons, rédaction incluse, dans la limite des pages prévues au devis. Nous créons ensuite le design et les pages.",
      },
      en: {
        title: "We create your site",
        description:
          "You send us your text, logo and photos. With no text, a 10-minute questionnaire is enough: we write it for you, writing included, within the pages planned in the quote. We then create the design and the pages.",
      },
    },
  },
  {
    id: "review",
    copy: {
      fr: {
        title: "Vous validez, nous ajustons",
        description:
          "Vous relisez le site et indiquez vos corrections. Deux séries de retours sont incluses.",
      },
      en: {
        title: "You review, we adjust",
        description:
          "You review the site and tell us what to correct. Two rounds of feedback are included.",
      },
    },
  },
  {
    id: "launch",
    copy: {
      fr: {
        title: "Nous mettons en ligne",
        description:
          "Mise en ligne, nom de domaine et remise des accès : vous repartez avec un site à votre nom, prêt à servir.",
      },
      en: {
        title: "We launch it",
        description:
          "Launch, domain name and handover of the access: you leave with a site in your name, ready to use.",
      },
    },
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "subscription",
    question: {
      fr: "Est-ce qu'il y a un abonnement obligatoire ?",
      en: "Is there any mandatory subscription?",
    },
    answer: {
      fr: `Non, aucun abonnement n'est nécessaire pour que votre site existe : vous le payez une fois et il reste à vous. Un accompagnement facultatif, « Suivi & Visibilité », coûte ${FOLLOW_UP_MONTHLY.fr} sans engagement, ou ${FOLLOW_UP_ANNUAL.fr}. L'arrêter ne touche pas à votre site.`,
      en: `No, no subscription is needed for your website to exist: you pay once and it stays yours. An optional support plan, "Suivi & Visibilité", costs ${FOLLOW_UP_MONTHLY.en} with no commitment, or ${FOLLOW_UP_ANNUAL.en}. Stopping it does not affect your website.`,
    },
  },
  {
    id: "free-first-month",
    question: {
      fr: "Le premier mois de suivi est-il vraiment offert ?",
      en: "Is the first month of support really free?",
    },
    answer: {
      fr: `Oui, à deux conditions : vous choisissez la formule mensuelle et vous la souscrivez à la livraison de votre site. Le premier mois est alors offert, puis ${FOLLOW_UP_MONTHLY.fr}, sans engagement. La formule annuelle n'en bénéficie pas.`,
      en: `Yes, on two conditions: you choose the monthly plan and you sign up when your website is delivered. The first month is then free, followed by ${FOLLOW_UP_MONTHLY.en}, with no commitment. The annual plan does not include it.`,
    },
  },
  {
    id: "ownership",
    question: {
      fr: "Est-ce que je possède vraiment le site ?",
      en: "Do I really own the website?",
    },
    answer: {
      fr: "Oui. Votre site vous appartient, comme votre enseigne : le site, ses contenus et ses accès sont à votre nom. Vous pouvez le garder, le faire évoluer ou le confier à un autre professionnel.",
      en: "Yes. Your website belongs to you, like your shop sign: the site, its content and its access are in your name. You can keep it, update it or hand it to another professional.",
    },
  },
  {
    id: "launch",
    question: {
      fr: "Qui gère la mise en ligne ?",
      en: "Who handles the launch?",
    },
    answer: {
      fr: "Sitekept s'occupe de la mise en ligne et du nom de domaine. Vous n'avez rien de technique à faire.",
      en: "Sitekept takes care of the launch and the domain name. You have nothing technical to do.",
    },
  },
  {
    id: "domain",
    question: {
      fr: "Le nom de domaine est-il inclus ?",
      en: "Is the domain included?",
    },
    answer: {
      fr: "Oui, le nom de domaine est offert la première année avec votre site. Ensuite, nous voyons ensemble son renouvellement et sa gestion.",
      en: "Yes, the domain name is free for the first year with your website. After that, we look at its renewal and management together.",
    },
  },
  {
    id: "timing",
    question: {
      fr: "Combien de temps faut-il pour être en ligne ?",
      en: "How long does it take to go live?",
    },
    answer: {
      fr: "Votre site est en ligne 48 h après réception de vos éléments complets : textes, logo et photos. Sans textes, un questionnaire de 10 minutes suffit. Si votre projet demande plus de temps, nous vous le disons avant de commencer.",
      en: "Your website is live 48 hours after we receive all your materials: text, logo and photos. With no text, a 10-minute questionnaire is enough. If your project needs more time, we tell you before we start.",
    },
  },
  {
    id: "seo-geo",
    question: {
      fr: "Le site est-il pensé pour être trouvé en ligne ?",
      en: "Is the website designed to be found online?",
    },
    answer: {
      fr: "Oui. Nous structurons les pages pour charger vite, être claires pour Google et rester faciles à citer dans les interfaces IA. Le SEO et le GEO sont des bénéfices intégrés à l'offre, pas une option ajoutée ensuite.",
      en: "Yes. We structure the pages to load fast, stay clear for Google and remain easy to cite in AI interfaces. SEO and GEO are integrated benefits of the offer, not an afterthought.",
    },
  },
];

export const featuredTemplates: FeaturedTemplate[] = [
  {
    id: "boulangerie",
    slug: "boulangerie",
    externalUrl: "/boulangerie",
    screenshot: "/template/boulangerie.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Boulangerie",
        description:
          "Exemple pour une boulangerie : une présence locale claire, les horaires, une vitrine de produits et une commande simple.",
      },
      en: {
        name: "Bakery Template",
        description:
          "Example for a bakery: a clear local presence, opening hours, a product showcase and simple ordering.",
      },
    },
  },
  {
    id: "fleuriste",
    slug: "fleuriste",
    externalUrl: "/fleuriste",
    screenshot: "/template/fleuriste.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Fleuriste",
        description:
          "Exemple pour un fleuriste : un style soigné qui met en avant les compositions et un univers visuel fort.",
      },
      en: {
        name: "Florist Template",
        description:
          "Example for a florist: a refined style that highlights the arrangements and a strong visual universe.",
      },
    },
  },
  {
    id: "ordinateur",
    slug: "ordinateur",
    externalUrl: "/ordinateur",
    screenshot: "/template/ordinateur.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Réparation Ordinateur",
        description:
          "Exemple pour un réparateur d'ordinateurs : services, garanties et prise de contact présentés de façon directe et rassurante.",
      },
      en: {
        name: "Computer Repair Template",
        description:
          "Example for a computer repair shop: services, guarantees and contact options presented in a direct, reassuring way.",
      },
    },
  },
  {
    id: "pattiserie",
    slug: "pattiserie",
    externalUrl: "/pattiserie",
    screenshot: "/template/patisserie.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Pâtisserie",
        description:
          "Exemple pour une pâtisserie : des créations et des événements mis en valeur dans une ambiance haut de gamme.",
      },
      en: {
        name: "Pastry Template",
        description:
          "Example for a pastry shop: creations and events showcased in an upscale atmosphere.",
      },
    },
  },
  {
    id: "dentiste",
    slug: "dentiste",
    externalUrl: "/dentiste",
    screenshot: "/template/dentiste.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Dentiste",
        description:
          "Exemple pour un cabinet dentaire : une information bien organisée, qui rassure dès l'arrivée sur la page et mène à la prise de rendez-vous.",
      },
      en: {
        name: "Dentist Template",
        description:
          "Example for a dental practice: well-organised information that reassures from the first screen and leads to booking an appointment.",
      },
    },
  },
  {
    id: "plombier-chauffagiste",
    slug: "plombier-chauffagiste",
    externalUrl: "/plombier-chauffagiste",
    screenshot: "/template/plombier-chauffagiste.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Plombier Chauffagiste",
        description:
          "Exemple pour un plombier chauffagiste : les appels rapides en cas d'urgence et les zones d'intervention mis en avant.",
      },
      en: {
        name: "Plumber & Heating Template",
        description:
          "Example for a plumber and heating engineer: quick calls in an emergency and service areas put forward.",
      },
    },
  },
  {
    id: "salon-coiffure",
    slug: "salon-coiffure",
    externalUrl: "/salon-coiffure",
    screenshot: "/template/salon-coiffure.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Salon de coiffure",
        description:
          "Exemple pour un salon de coiffure : galerie de coiffures, prestations, équipe et réservation, dans un style soigné.",
      },
      en: {
        name: "Hair Salon Template",
        description:
          "Example for a hair salon: a gallery of hairstyles, services, team and booking, in a refined style.",
      },
    },
  },
  {
    id: "menage-nettoyage",
    slug: "menage-nettoyage",
    externalUrl: "/menage-nettoyage",
    screenshot: "/template/menage-nettoyage.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Ménage & Nettoyage",
        description:
          "Exemple pour une entreprise de ménage : formules, zones couvertes et un message simple et rassurant dès le premier écran.",
      },
      en: {
        name: "Cleaning Services Template",
        description:
          "Example for a cleaning company: service plans, covered areas and a simple, reassuring message from the first screen.",
      },
    },
  },
  {
    id: "restaurant-bistrot",
    slug: "restaurant-bistrot",
    externalUrl: "/restaurant-bistrot",
    screenshot: "/template/restaurant-bistrot.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Restaurant Bistrot",
        description:
          "Exemple pour un restaurant : l'ambiance, la carte, la réservation et la privatisation mises en avant.",
      },
      en: {
        name: "Bistro Restaurant Template",
        description:
          "Example for a restaurant: atmosphere, menu, booking and private events put forward.",
      },
    },
  },
  {
    id: "architecte-interieur",
    slug: "architecte-interieur",
    externalUrl: "/architecte-interieur",
    screenshot: "/template/architecte-interieur.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Architecte d'intérieur",
        description:
          "Exemple pour un architecte d'intérieur : une direction artistique, des projets et une méthode présentés comme un portfolio.",
      },
      en: {
        name: "Interior Architect Template",
        description:
          "Example for an interior architect: an artistic direction, projects and a method presented as a portfolio.",
      },
    },
  },
  {
    id: "cabinet-avocat",
    slug: "cabinet-avocat",
    externalUrl: "/cabinet-avocat",
    screenshot: "/template/cabinet-avocat.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Cabinet d'avocat",
        description:
          "Exemple pour un cabinet d'avocat : un site sobre qui met l'expertise en avant et mène à la première consultation.",
      },
      en: {
        name: "Law Firm Template",
        description:
          "Example for a law firm: a sober site that highlights expertise and leads to the first consultation.",
      },
    },
  },
  {
    id: "avocate-tel-aviv",
    slug: "avocate-tel-aviv",
    externalUrl: "/avocate-tel-aviv",
    screenshot: "/template/avocate-tel-aviv.png",
    featured: false,
    copy: {
      fr: {
        name: "Template Avocate Tel Aviv",
        description:
          "Exemple pour une avocate en immobilier et successions France-Israël : un site sobre avec un blog et une page de contact.",
      },
      en: {
        name: "Tel Aviv Lawyer Template",
        description:
          "Example for a lawyer in real estate and France-Israel inheritance: a sober site with a blog and a contact page.",
      },
    },
  },
  {
    id: "agence-immobiliere",
    slug: "agence-immobiliere",
    externalUrl: "/agence-immobiliere",
    screenshot: "/template/agence-immobiliere.png",
    featured: true,
    copy: {
      fr: {
        name: "Template Agence immobilière",
        description:
          "Exemple pour une agence immobilière : recherche de biens et estimation, avec les quartiers, les agents et les demandes de vendeurs.",
      },
      en: {
        name: "Real Estate Agency Template",
        description:
          "Example for a real estate agency: property search and valuation, with neighborhoods, agents and seller requests.",
      },
    },
  },
];

export const templatesPageCopy: ListingPageCopy = {
  eyebrow: {
    fr: "Galerie publique",
    en: "Public gallery",
  },
  title: {
    fr: "Modèles de site internet : des exemples pour vous projeter",
    en: "Website templates: examples to help you picture your site",
  },
  description: {
    fr: "Voici des modèles de site internet pour plusieurs métiers. Chacun montre un style, des sections et une façon de présenter une activité.",
    en: "These are website templates for several trades. Each one shows a style, a set of sections and a way to present a business.",
  },
  notice: {
    fr: "Ces exemples vous aident à vous projeter. Votre site est créé sur mesure pour vous.",
    en: "These examples help you picture your site. Your website is custom-made for you.",
  },
};

export const blogPageCopy: ListingPageCopy = {
  eyebrow: {
    fr: "Ressources Sitekept",
    en: "Sitekept resources",
  },
  title: {
    fr: "Guide de création de site internet : comprendre l'offre.",
    en: "Helpful pages to understand the offer before you buy.",
  },
  description: {
    fr: "Le blog Sitekept est un guide de création de site internet. Il explique d'abord notre positionnement : rapidité, clarté commerciale, propriété du site et visibilité SEO/GEO.",
    en: "The Sitekept blog is primarily here to explain our positioning: speed, commercial clarity, website ownership and SEO/GEO visibility.",
  },
};

export const seoGeoPageContent: SeoGeoPageContent = {
  eyebrow: {
    fr: "SEO + GEO",
    en: "SEO + GEO",
  },
  title: {
    fr: "Référencement SEO et GEO : ce qu’un site doit faire pour être visible.",
    en: "Understand organic search and what a website needs to stay visible.",
  },
  intro: {
    fr: "Le référencement naturel, ou SEO (search engine optimization), regroupe ce qui aide un site à apparaître dans les résultats non payants d’un moteur de recherche. Le GEO (generative engine optimization) vise à être cité dans les réponses rédigées par une intelligence artificielle. Le référencement SEO et GEO sert à ce qu’un site soit trouvé et compris.",
    en: "Organic search, or SEO (search engine optimization), covers what helps a website appear in the unpaid results of a search engine. GEO (generative engine optimization) aims to get cited in answers written by an artificial intelligence. A website only creates value if it can be found and understood.",
  },
  importanceTitle: {
    fr: "Pourquoi le référencement naturel reste-t-il décisif ?",
    en: "Why does organic search still matter?",
  },
  importanceParagraphs: {
    fr: [
      "Le référencement naturel reste décisif parce qu’il place votre activité devant des personnes qui formulent déjà un besoin. Cette visibilité ne dépend pas d’une campagne payante ni d’une publication ponctuelle. Elle s’appuie sur la structure du site, la qualité des pages et la clarté de l’information.",
      "Dans la pratique, cela signifie qu’un site bien pensé continue de travailler pour vous après sa mise en ligne. Il peut renforcer votre crédibilité, capter des recherches qualifiées et donner à Google des signaux cohérents sur votre activité, vos services et vos pages clés.",
    ],
    en: [
      "Organic search remains decisive because it puts your business in front of people who already express a need. That visibility does not depend on a paid campaign or a one-off post. It relies on the website structure, page quality and clarity of the information.",
      "In practice, that means a well-structured website keeps working after launch. It can strengthen credibility, capture qualified searches and give Google consistent signals about your business, services and key pages.",
    ],
  },
  primaryCta: {
    fr: "En lire plus sur notre blog",
    en: "Read more on our blog",
  },
  optimizationTitle: {
    fr: "Ce qu’un site doit avoir pour être vraiment optimisé",
    en: "What a website needs to be truly optimized",
  },
  optimizationParagraphs: {
    fr: [
      "Un site réellement optimisé réunit plusieurs éléments qui se renforcent entre eux, des pages utiles jusqu’à la base technique.",
      "Aujourd’hui, cette logique sert aussi les interfaces IA. Un contenu clair, bien structuré et appuyé par des signaux cohérents est plus facile à reprendre dans une réponse générée, un aperçu ou une recommandation. C’est là que SEO et GEO se rejoignent concrètement.",
    ],
    en: [
      "A truly optimized website combines several reinforcing elements, from useful pages to a clean technical base.",
      "Today, the same logic also serves AI interfaces. Clear, well-structured content backed by consistent signals is easier to reuse in a generated answer, a preview or a recommendation. That is where SEO and GEO meet in practice.",
    ],
  },
  optimizationBullets: {
    fr: [
      "des pages utiles",
      "une hiérarchie claire et des titres compréhensibles",
      "des contenus rédigés pour répondre à de vraies questions",
      "un maillage interne logique",
      "une base technique propre",
      "un sitemap bien tenu et des pages indexables, qui aident Google à explorer le site plus proprement",
    ],
    en: [
      "useful pages",
      "a clear hierarchy and understandable titles",
      "content written to answer real questions",
      "logical internal linking",
      "a clean technical base",
      "a maintained sitemap and indexable pages, which help Google explore the site more reliably",
    ],
  },
  secondaryCta: {
    fr: "En lire plus sur notre blog",
    en: "Read more on our blog",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "site-web-rapide-pme-independant",
    publishedAt: "2026-04-03",
    updatedAt: "2026-11-10",
    author: "Équipe Sitekept",
    category: {
      fr: "Lancement rapide",
      en: "Fast launch",
    },
    title: {
      fr: "Créer un site internet rapidement : pourquoi cela compte pour une PME",
      en: "Why a fast launch website matters so much for an SMB or solo founder",
    },
    excerpt: {
      fr: "Un bon site n'est pas seulement beau. Il doit être en ligne vite, cadrer votre offre et commencer à travailler commercialement sans délais inutiles.",
      en: "A good website is not only beautiful. It should go live fast, frame your offer and start working commercially without useless delays.",
    },
    seoTitle: {
      fr: "Créer un site internet rapidement pour une PME | Sitekept",
      en: "Fast launch website for SMBs and solo founders | Sitekept",
    },
    seoDescription: {
      fr: "Pourquoi la rapidité de mise en ligne change la rentabilité d'un site pour une PME ou un indépendant, et comment Sitekept structure cette promesse.",
      en: "Why fast launch changes the ROI of a website for SMBs and solo founders, and how Sitekept structures that promise.",
    },
    intro: {
      fr: "Créer un site internet rapidement compte pour une PME ou un indépendant : le vrai coût d'un site ne se limite pas à la facture. Il y a aussi le temps perdu quand le projet traîne, les ventes qui n'arrivent pas et l'image qui reste floue trop longtemps.",
      en: "When an SMB or solo founder buys a website, the real cost is not limited to the invoice. There is also the time lost when the project drags on, the sales that do not happen and the unclear brand image that lasts too long.",
    },
    sections: [
      {
        id: "speed-is-commercial",
        title: {
          fr: "La vitesse est d'abord un argument commercial",
          en: "Speed is first a commercial argument",
        },
        paragraphs: {
          fr: [
            "Un site qui sort vite permet de clarifier une offre, de lancer des campagnes, d'envoyer un lien propre après un rendez-vous et d'arrêter de bricoler sa présence en ligne.",
            "Pour beaucoup de petites structures, attendre plusieurs semaines revient surtout à continuer sans support de vente clair. La rapidité crée un levier commercial immédiat.",
          ],
          en: [
            "A website that launches quickly helps clarify the offer, support campaigns, send a strong link after meetings and stop improvising your online presence.",
            "For many small businesses, waiting several weeks mostly means staying without a clean sales asset. Speed creates immediate commercial leverage.",
          ],
        },
      },
      {
        id: "good-fast-vs-rushed",
        title: {
          fr: "Rapide ne veut pas dire bâclé",
          en: "Fast does not mean rushed",
        },
        paragraphs: {
          fr: [
            "La rapidité devient crédible quand le cadre est clair : une offre simple, des décisions réduites, une base de design préparée et un process de validation court.",
            "C'est exactement le sens d'une offre Sitekept : aller vite sur ce qui compte sans vous embarquer dans un projet lourd ou une refonte ouverte sans fin.",
            "Pour créer un site internet rapidement avec Sitekept, découvrez [notre offre de création de site](/). Les étapes de la livraison sont détaillées dans [comment se passe la livraison d'un site web chez Sitekept](/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept).",
          ],
          en: [
            "Speed becomes credible when the frame is clear: a simple offer, fewer decisions, a prepared design base and a short review loop.",
            "That is exactly what a Sitekept offer means: move fast on what matters without dragging you into a heavy project or an endless open-ended redesign.",
          ],
        },
        bullets: {
          fr: [
            "un point de départ clair",
            "des contenus essentiels identifiés",
            "un cadre technique déjà géré",
            "une validation concentrée sur l'utile",
          ],
          en: [
            "a clear starting point",
            "essential content already identified",
            "technical setup already handled",
            "a review loop focused on what matters",
          ],
        },
      },
      {
        id: "what-fast-launch-buys",
        title: {
          fr: "Ce que vous achetez vraiment avec une mise en ligne rapide",
          en: "What you really buy with a fast launch",
        },
        paragraphs: {
          fr: ["Si le site est bien structuré dès le départ, vous achetez vraiment six choses."],
          en: [
            "You buy recovered time, a better framed offer, a cleaner prospecting asset and stronger control over your brand image.",
            "If the website is structured well from day one, it also becomes a strong base for SEO, GEO and future commercial iterations.",
          ],
        },
        bullets: {
          fr: [
            "du temps récupéré",
            "une offre mieux présentée",
            "un support de prospection plus propre",
            "un meilleur contrôle de votre image",
            "une base solide pour le SEO (être trouvé sur Google) et le GEO (être cité dans les réponses des IA)",
            "une base solide pour les futures évolutions commerciales",
          ],
          en: [
            "recovered time",
            "a better framed offer",
            "a cleaner prospecting asset",
            "stronger control over your brand image",
            "a solid base for SEO (being found on Google), GEO (being cited in AI answers) and future commercial iterations, provided the website is well structured from the start",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site rapide sans zone grise commerciale ?",
      en: "Want a fast website without commercial gray zones?",
    },
    ctaDescription: {
      fr: "Parlez-nous de votre activité. Nous vous dirons vite si votre projet peut être en ligne 48 h après réception de vos éléments.",
      en: "Tell us about your business and we will quickly tell you whether your project can be online 48 hours after we receive your materials.",
    },
  },
  {
    slug: "posseder-son-site-sans-abonnement",
    publishedAt: "2026-04-03",
    updatedAt: "2026-11-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Propriété du site",
      en: "Website ownership",
    },
    title: {
      fr: "Posséder 100 % de son site sans abonnement : ce que ça change",
      en: "Why owning 100% of your website without a subscription changes the agency relationship",
    },
    excerpt: {
      fr: "Un site peut être un actif ou une dépendance. La différence se joue souvent dans le contrat, la livraison et le niveau de contrôle que garde le client.",
      en: "A website can be an asset or a dependency. The difference is often hidden in the contract, delivery model and the level of control the client keeps.",
    },
    seoTitle: {
      fr: "Posséder son site sans abonnement | Sitekept",
      en: "Own your website without a subscription | Sitekept",
    },
    seoDescription: {
      fr: "Site internet sans abonnement imposé : pourquoi la propriété complète du site est un avantage commercial, budgétaire et opérationnel face au prestataire.",
      en: "Why full website ownership and the absence of forced subscriptions are commercial, budgetary and operational advantages.",
    },
    intro: {
      fr: "Beaucoup d'entreprises pensent acheter un site alors qu'elles achètent en réalité un accès conditionnel à un site. Quand la propriété reste floue, la relation avec le prestataire devient plus fragile et plus coûteuse.",
      en: "Many businesses think they are buying a website while they are really buying conditional access to one. When ownership stays unclear, the agency relationship becomes more fragile and more expensive.",
    },
    sections: [
      {
        id: "asset-vs-dependency",
        title: {
          fr: "Un site doit être un actif, pas une laisse",
          en: "A website should be an asset, not a leash",
        },
        paragraphs: {
          fr: [
            "Quand vous possédez vraiment votre site, vous gardez votre liberté de faire évoluer le projet, de changer de prestataire ou de reprendre la main plus tard.",
            "À l'inverse, un modèle où tout passe par un abonnement opaque crée de la friction à chaque changement, même minime.",
          ],
          en: [
            "When you truly own your website, you keep the freedom to evolve the project, change providers or take over later.",
            "By contrast, a model where everything depends on an opaque subscription creates friction every time you need to change anything.",
          ],
        },
      },
      {
        id: "what-ownership-means",
        title: {
          fr: "Ce que la propriété complète change concrètement",
          en: "What full ownership changes in practice",
        },
        paragraphs: {
          fr: [
            "La propriété ne relève pas seulement d'un principe. Elle change votre budget, votre pouvoir de négociation et votre sérénité sur le long terme.",
            "Un client qui possède son site peut investir dans l'acquisition, le contenu ou l'évolution produit sans craindre de repartir de zéro pour des raisons contractuelles.",
          ],
          en: [
            "Ownership is not only a principle. It changes your budget, your negotiation leverage and your long-term peace of mind.",
            "A client who owns the website can invest in acquisition, content or product evolution without fearing a full reset for contractual reasons.",
          ],
        },
        bullets: {
          fr: [
            "moins de dépendance commerciale",
            "moins de surprises budgétaires",
            "plus de marge pour changer ou faire évoluer",
            "une meilleure valeur patrimoniale du site",
          ],
          en: [
            "less commercial dependency",
            "fewer budget surprises",
            "more room to change or evolve",
            "better long-term asset value",
          ],
        },
      },
      {
        id: "sitekept-position",
        title: {
          fr: "La position Sitekept sur ce point",
          en: "The Sitekept position on this issue",
        },
        paragraphs: {
          fr: [
            "Nous assumons une logique simple : vous achetez un site, pas un verrou. Aucun abonnement n'est nécessaire pour que votre site existe : vous le payez une fois, et il vous appartient, comme votre enseigne.",
            "C'est aussi ce qui rend l'offre plus facile à acheter pour des clients non techniques : ils comprennent ce qu'ils paient et ce qu'ils récupèrent.",
          ],
          en: [
            "We keep it simple: you buy a website, not a lock. No subscription is needed for your website to exist: you pay once, and it belongs to you, like your shop sign.",
            "That also makes the offer easier to buy for non-technical clients: they understand what they pay for and what they get back.",
          ],
        },
      },
      {
        id: "suivi-optionnel",
        title: {
          fr: "Faut-il un abonnement pour garder son site ?",
          en: "Do you need a subscription to keep your site?",
        },
        paragraphs: {
          fr: [
            `Non, votre site est payé une fois et vous appartient : aucun abonnement n'est nécessaire pour qu'il existe. En option, l'accompagnement « Suivi & Visibilité » coûte ${FOLLOW_UP_MONTHLY.fr} sans engagement, ou ${FOLLOW_UP_ANNUAL.fr}. Il comprend deux modifications par mois, non cumulables, et un suivi de votre visibilité.`,
            "Acheter un site, c'est le payer une fois et le garder. Louer sa présence, c'est payer pour qu'il continue d'exister : c'est cela qui coûte cher, pas un service mensuel. L'accompagnement est un service : si vous l'arrêtez, la dépense s'arrête et le site reste à vous.",
            "Le premier mois est offert à la livraison, pour la formule mensuelle seulement. La formule annuelle n'est pas remboursée au prorata si vous l'arrêtez en cours d'année, et nous ne promettons aucun classement. Le détail est sur [la page des tarifs](/tarifs).",
            "Pour comparer les deux modèles, lisez [louer ou posséder son site internet](/blog/louer-ou-posseder-son-site-internet). Pour changer de prestataire, lisez [récupérer son site web chez un prestataire](/blog/recuperer-son-site-web-chez-un-prestataire).",
          ],
          en: [
            `No, your website is paid for once and belongs to you: no subscription is needed for it to exist. Optionally, the "Suivi & Visibilité" support plan costs ${FOLLOW_UP_MONTHLY.en} with no commitment, or ${FOLLOW_UP_ANNUAL.en}. It includes two edits a month, which do not roll over, and visibility monitoring.`,
            "Buying a website means paying for it once and keeping it. Renting your presence means paying for it to keep existing: that is what costs a lot, not a monthly service. The support plan is a service: if you stop it, the spending stops and the website stays yours.",
            "The first month is free at delivery, for the monthly plan only. The annual plan is not refunded pro rata if you stop it mid-year, and we promise no ranking. Details are on [the pricing page](/tarifs).",
            "To compare the two models, read [renting or owning your website](/blog/louer-ou-posseder-son-site-internet). If you want to switch provider, read [getting your website back from a provider](/blog/recuperer-son-site-web-chez-un-prestataire).",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site à vous, sans abonnement imposé ?",
      en: "Want a website that stays yours, with no forced subscription?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer une offre simple, rapide et livrée comme un vrai actif pour votre entreprise.",
      en: "We can frame a simple, fast offer delivered as a real business asset.",
    },
  },
  {
    slug: "site-optimise-seo-geo",
    publishedAt: "2026-04-03",
    updatedAt: "2026-11-10",
    author: "Équipe Sitekept",
    category: {
      fr: "Visibilité",
      en: "Visibility",
    },
    title: {
      fr: "Optimisation SEO et GEO : rester visible sur Google et dans l'IA",
      en: "What an SEO and GEO optimized website needs to do to stay visible on Google and in AI interfaces",
    },
    excerpt: {
      fr: "La visibilité moderne ne se limite plus au SEO classique. Les interfaces IA reprennent, résument et recommandent des contenus. Le site doit être lisible pour les deux mondes.",
      en: "Modern visibility is not limited to classic SEO anymore. AI interfaces reuse, summarize and recommend content. A website must stay legible to both worlds.",
    },
    seoTitle: {
      fr: "Optimisation SEO et GEO d'un site : le guide | Sitekept",
      en: "SEO and GEO optimized website | Sitekept",
    },
    seoDescription: {
      fr: "Optimisation SEO et GEO : comment penser un site visible sur Google et dans les interfaces IA. Structure, vitesse, clarté et signaux de confiance.",
      en: "How to design a website that stays visible for both Google and AI interfaces: structure, speed, clarity and trust signals.",
    },
    intro: {
      fr: "L'optimisation SEO et GEO part d'un constat : le SEO (search engine optimization) reste essentiel, mais il ne suffit plus à expliquer toute la visibilité. De plus en plus d'utilisateurs découvrent des entreprises via des réponses générées par IA, des aperçus enrichis ou des assistants. Le GEO (generative engine optimization) vise à être cité dans ces réponses.",
      en: "SEO remains essential, but it no longer explains visibility on its own. More and more users discover businesses through AI-generated answers, enriched summaries or assistants that reformulate information.",
    },
    sections: [
      {
        id: "structure-first",
        title: {
          fr: "Une structure claire reste la base commune",
          en: "A clear structure remains the shared foundation",
        },
        paragraphs: {
          fr: [
            "Pour Google comme pour les interfaces IA, un site doit annoncer clairement son offre, son public, sa promesse et ses preuves de confiance. C'est ce qui rend l'information exploitable et facile à citer.",
            "Une page rapide, bien hiérarchisée et sémantiquement propre aide autant le moteur classique que les systèmes qui résument vos contenus.",
            "Google le confirme pour ses propres fonctions d'IA : les bonnes pratiques SEO restent valables, sans exigence technique supplémentaire. Source : Google Search Central, « Fonctionnalités d'IA et votre site Web » (developers.google.com).",
          ],
          en: [
            "For Google and AI interfaces alike, a website must clearly state its offer, audience, promise and trust proof. That is what makes the information reusable and easy to cite.",
            "A fast page with strong hierarchy and clean semantics helps both classic search engines and systems that summarize your content.",
          ],
        },
      },
      {
        id: "commercial-clarity",
        title: {
          fr: "La clarté commerciale devient un vrai signal",
          en: "Commercial clarity becomes a real signal",
        },
        paragraphs: {
          fr: [
            "Un site visible ne doit pas seulement parler technique. Il doit dire clairement ce qu'on vend, pour qui, à quel point d'entrée et avec quelles garanties. C'est ce qui permet aussi aux interfaces IA de reprendre une réponse fiable.",
            "Plus l'offre est claire, plus elle peut être reformulée sans perdre son sens. C'est un vrai avantage GEO.",
          ],
          en: [
            "A visible website should not only talk about technology. It must clearly say what is being sold, for whom, at which entry point and with which guarantees. That also makes AI interfaces more likely to reuse a reliable answer.",
            "The clearer the offer, the easier it is to reformulate without losing meaning. That is a real GEO advantage.",
          ],
        },
        bullets: {
          fr: [
            "une promesse simple",
            "des garanties visibles",
            "des CTA cohérents",
            "des contenus faciles à citer",
          ],
          en: [
            "a simple promise",
            "visible guarantees",
            "consistent CTAs",
            "content that is easy to quote",
          ],
        },
      },
      {
        id: "sitekept-approach",
        title: {
          fr: "L'approche Sitekept",
          en: "The Sitekept approach",
        },
        paragraphs: {
          fr: [
            "Nous intégrons la visibilité dans la structure du site dès le début : vitesse, sections claires, copy concise, signaux de confiance et pages utiles à l'acquisition.",
            "Le SEO et le GEO ne remplacent pas la promesse commerciale. Ils l'amplifient quand le site est déjà clair, rapide et crédible.",
            "Pour aller plus loin, consultez notre page sur le [référencement SEO et GEO](/seo-geo). Lisez aussi [pourquoi le référencement d'un site est important](/blog/pourquoi-optimisation-referencement-naturel-importante), et pourquoi [un site qui n'apparaît pas sur Google](/blog/site-sans-referencement-peut-devenir-inutile) perd de sa valeur.",
          ],
          en: [
            "We integrate visibility into the website structure from the start: speed, clear sections, concise copy, trust signals and pages that support acquisition.",
            "SEO and GEO do not replace the commercial promise. They amplify it when the website is already clear, fast and credible.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site plus facile a trouver et a recommander ?",
      en: "Want a website that is easier to find and easier to recommend?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer une home et des pages piliers qui parlent a la fois aux humains, a Google et aux interfaces IA.",
      en: "We can structure a home page and pillar pages that speak to people, Google and AI interfaces at the same time.",
    },
    sources: [
      {
        title: "Fonctionnalités d'IA et votre site Web",
        url: "https://developers.google.com/search/docs/appearance/ai-features?hl=fr",
      },
    ],
  },
  {
    slug: "qu-est-ce-que-le-seo-et-le-geo",
    publishedAt: "2026-04-05",
    updatedAt: "2026-11-10",
    author: "Équipe Sitekept",
    category: {
      fr: "SEO + GEO",
      en: "SEO + GEO",
    },
    title: {
      fr: "SEO et GEO, c’est quoi ? Explication simple",
      en: "What are SEO and GEO?",
    },
    excerpt: {
      fr: "SEO et GEO poursuivent le même objectif: rendre un site plus facile à trouver et à comprendre, que la recherche passe par Google ou par une interface IA.",
      en: "SEO and GEO pursue the same goal: making a website easier to find and understand, whether discovery happens through Google or an AI interface.",
    },
    seoTitle: {
      fr: "SEO et GEO, c’est quoi ? Définitions simples | Sitekept",
      en: "What are SEO and GEO? | Sitekept",
    },
    seoDescription: {
      fr: "Une explication simple du SEO et du GEO pour comprendre comment un site peut rester visible sur Google et dans les réponses générées par l’IA.",
      en: "A simple explanation of SEO and GEO to understand how a website can stay visible on Google and in AI-generated answers.",
    },
    intro: {
      fr: "SEO et GEO, c’est quoi ? Beaucoup d’entreprises pensent d’abord à Google, mais une partie des recherches passe désormais par des aperçus générés ou des assistants IA. Pour rester visible, il faut comprendre deux notions complémentaires : le SEO et le GEO.",
      en: "When people talk about online visibility, most businesses first think about Google. That makes sense. But search behavior is evolving: part of discovery now happens through generated overviews, conversational assistants and AI interfaces that reformulate results. To stay visible in that context, two complementary ideas matter: SEO and GEO.",
    },
    sections: [
      {
        id: "seo-definition",
        title: {
          fr: "Qu’est-ce que le SEO ?",
          en: "SEO: being well understood by search engines",
        },
        paragraphs: {
          fr: [
            "Le SEO (search engine optimization), ou référencement naturel, désigne ce qui aide un site à apparaître dans les résultats non payants des moteurs de recherche. En pratique, il permet à votre activité d’être trouvée quand un prospect exprime déjà un besoin.",
            "C’est ce qui transforme un site en outil commercial plutôt qu’en simple présence en ligne. Il repose sur les éléments suivants.",
          ],
          en: [
            "SEO, or search engine optimization, covers everything that helps a website appear in unpaid search results. It relies on useful pages, clear structure, understandable titles, strong internal linking, proper indexing and a sound technical foundation.",
            "In practice, SEO helps your business be found when a prospect already expresses a need. That is what turns a website into a commercial tool rather than a simple online presence.",
          ],
        },
        bullets: {
          fr: [
            "des pages utiles",
            "une structure claire",
            "des titres compréhensibles",
            "un bon maillage interne",
            "une indexation correcte",
            "une base technique saine",
          ],
          en: [
            "useful pages",
            "a clear structure",
            "understandable titles",
            "strong internal linking",
            "proper indexing",
            "a sound technical base",
          ],
        },
      },
      {
        id: "geo-definition",
        title: {
          fr: "Qu’est-ce que le GEO ?",
          en: "GEO: staying reusable in AI-generated answers",
        },
        paragraphs: {
          fr: [
            "Le GEO (generative engine optimization) désigne le plus souvent la capacité d’un site à rester clair, fiable et réutilisable dans les réponses générées par l’IA. L’enjeu n’est pas seulement d’apparaître sur une page de résultats. Il faut aussi être assez compréhensible pour qu’une IA s’appuie sur votre contenu ou recommande votre activité.",
            "Pour cela, un site doit réunir quatre éléments.",
          ],
          en: [
            "The term GEO is often used to describe a website’s ability to stay clear, reliable and reusable in AI-generated answers. The goal is not only to appear on a search results page, but also to be understandable enough for an AI interface to rely on your content or recommend your business.",
            "That requires precise content, natural answers to frequent questions, visible trust signals and a structure that helps systems identify who you are, what you offer and why it may be useful to the user.",
          ],
        },
        bullets: {
          fr: [
            "un contenu précis",
            "des réponses naturelles aux questions fréquentes",
            "des signaux de confiance visibles",
            "une structure qui aide les systèmes à identifier qui vous êtes, ce que vous proposez et pourquoi cela peut être utile à l’utilisateur",
          ],
          en: [
            "precise content",
            "natural answers to frequent questions",
            "visible trust signals",
            "a structure that helps systems identify who you are, what you offer and why it may be useful to the user",
          ],
        },
      },
      {
        id: "how-they-work-together",
        title: {
          fr: "Pourquoi le SEO et le GEO se complètent-ils ?",
          en: "Why they complement each other instead of competing",
        },
        paragraphs: {
          fr: [
            "Ils se complètent parce qu’ils reposent sur la même base : un site clair, utile, rapide et indexable. Un contenu bien structuré aide Google à classer vos pages, mais il aide aussi les interfaces IA à reformuler correctement votre offre. Le GEO ne remplace donc pas le SEO.",
            "Il prolonge la logique du SEO dans de nouveaux usages. La bonne approche consiste à construire un site qui répond clairement à des questions humaines. Il doit rester lisible pour les moteurs et pour les systèmes génératifs.",
            "Pour aller plus loin, consultez notre page sur le [référencement SEO et GEO](/seo-geo).",
            "Google le confirme pour ses propres fonctions d’IA : les bonnes pratiques SEO restent valables, sans exigence technique supplémentaire. Source : Google Search Central, « Fonctionnalités d’IA et votre site Web » (developers.google.com).",
          ],
          en: [
            "SEO and GEO share the same foundation: a website that is clear, useful, fast and indexable. Well-structured content helps Google rank your pages, but it also helps AI interfaces restate your offer correctly.",
            "In other words, GEO does not replace SEO. It extends the same logic into new usage patterns. For a business, the right approach is to build a website that answers human questions clearly while staying readable to search engines and generative systems.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site pensé pour Google et pour les interfaces IA ?",
      en: "Want a website designed for Google and AI interfaces?",
    },
    ctaDescription: {
      fr: "Nous pouvons structurer vos pages pour qu’elles restent utiles à la fois pour la recherche classique et pour les réponses générées.",
      en: "We can structure your pages so they stay useful for both classic search and generated answers.",
    },
    sources: [
      {
        title: "Fonctionnalités d'IA et votre site Web",
        url: "https://developers.google.com/search/docs/appearance/ai-features?hl=fr",
      },
    ],
  },
  {
    slug: "site-sans-referencement-peut-devenir-inutile",
    publishedAt: "2026-04-05",
    updatedAt: "2026-11-10",
    author: "Équipe Sitekept",
    category: {
      fr: "Visibilité",
      en: "Visibility",
    },
    title: {
      fr: "Mon site n’apparaît pas sur Google : pourquoi il peut devenir inutile",
      en: "A website without search visibility can become useless: if nobody sees the storefront, it may as well not exist",
    },
    excerpt: {
      fr: "Un site peut être propre et bien conçu, mais s’il n’est jamais trouvé, il ne joue pas son rôle commercial. La visibilité fait partie de son utilité réelle.",
      en: "A website can be clean and well designed, but if nobody finds it, it does not fulfill its commercial role. Visibility is part of its real usefulness.",
    },
    seoTitle: {
      fr: "Mon site n’apparaît pas sur Google : pourquoi ? | Sitekept",
      en: "Why a website without search visibility can become useless | Sitekept",
    },
    seoDescription: {
      fr: "Mon site n’apparaît pas sur Google : pourquoi un site introuvable sur Google ou dans les réponses IA peut échouer, même s’il est bien présenté.",
      en: "Why a website that cannot be found on Google or in AI answers can fail commercially, even when it looks good.",
    },
    intro: {
      fr: "Mon site n’apparaît pas sur Google : quand un site manque de visibilité, il perd une partie essentielle de sa valeur. Un site doit aider à être trouvé, rassurer au bon moment et faciliter la prise de contact. Une vitrine invisible ne soutient ni les ventes, ni la notoriété, ni la crédibilité d’une entreprise.",
      en: "A website is not just something to present. It should help a business be found, reassure people at the right moment and make contact easier. When visibility is missing, the website loses a key part of its value. An invisible storefront does not support sales, awareness or credibility.",
    },
    sections: [
      {
        id: "beautiful-is-not-enough",
        title: {
          fr: "Un beau site ne suffit pas à créer de la demande",
          en: "A beautiful website is not enough to create demand",
        },
        paragraphs: {
          fr: [
            "Beaucoup d’entreprises investissent d’abord dans l’apparence du site. C’est important, mais ce n’est pas suffisant. Si le site ne répond pas à des recherches précises, s’il n’est pas correctement indexé ou s’il ne donne pas des signaux clairs sur l’activité, il restera peu visible.",
            "Le problème n’est donc pas seulement esthétique. Il est fonctionnel. Un site n’est utile que s’il peut être découvert par les bonnes personnes au bon moment.",
            "Google rappelle que l’exploration, l’indexation et l’affichage d’une page ne sont pas garantis, même si elle respecte toutes les exigences. Source : Google Search Central, « Essentiels de la recherche Google (anciennement \"Consignes aux webmasters\") » (developers.google.com).",
          ],
          en: [
            "Many businesses first invest in how the website looks. That matters, but it is not enough. If the site does not answer precise searches, is not indexed correctly or does not provide clear business signals, it will remain hard to discover.",
            "The problem is not only aesthetic. It is functional. A website is only useful if the right people can find it at the right moment.",
          ],
        },
      },
      {
        id: "local-business-cases",
        title: {
          fr: "Pour une activité locale, la visibilité est souvent la vraie différence",
          en: "For a local business, visibility is often the real difference-maker",
        },
        paragraphs: {
          fr: [
            "Prenons des cas simples: un avocat, un dentiste, un restaurant ou un artisan local. Les prospects ne cherchent pas seulement un nom de marque. Ils cherchent un service, un besoin, une spécialité ou une zone géographique. Si votre site ne se positionne pas sur ces demandes, il laisse toute la place à des concurrents pourtant parfois moins convaincants.",
            "Le référencement naturel désigne ce qui aide un site à apparaître dans les résultats non payants. Dans ces contextes, il ne sert pas à “faire du trafic” au sens abstrait. Il sert à capter des personnes déjà proches d’une décision ou d’une prise de contact.",
          ],
          en: [
            "Take simple examples: a lawyer, a dentist, a restaurant or a local trades business. Prospects are not only searching for a brand name. They search for a service, a need, a specialty or an area. If your website does not show up for those requests, it leaves room to competitors who may be less convincing.",
            "In those cases, organic search is not about generating traffic in the abstract. It is about capturing people who are already close to making a decision or getting in touch.",
          ],
        },
      },
      {
        id: "visibility-is-utility",
        title: {
          fr: "La visibilité fait partie de l’utilité du site",
          en: "Visibility is part of the website’s usefulness",
        },
        paragraphs: {
          fr: [
            "Quand on évalue un site, il faut donc regarder plus loin que le rendu visuel. Est-il clair pour Google ? Répond-il à des recherches naturelles ? Est-il assez lisible pour être repris dans des réponses IA ? Est-ce qu’il aide réellement un prospect à comprendre l’offre et à agir ?",
            "C’est pour cette raison que Sitekept traite la visibilité comme une composante du site lui-même, pas comme une couche optionnelle à ajouter plus tard. Un site qui n’est pas vu reste incomplet, même s’il est bien dessiné.",
            "Pour agir, lisez notre guide d’[optimisation SEO et GEO d’un site](/blog/site-optimise-seo-geo). Avant une mise en ligne, la [checklist SEO](/blog/checklist-seo-avant-mise-en-ligne) liste 20 points à vérifier.",
          ],
          en: [
            "When assessing a website, you need to look beyond the visual result. Is it clear to Google? Does it answer natural searches? Is it readable enough to be reused in AI answers? Does it actually help a prospect understand the offer and take action?",
            "That is why Sitekept treats visibility as part of the website itself, not as an optional layer added later. A website that is not seen stays incomplete, even if it is well designed.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site qui ne reste pas invisible après sa mise en ligne ?",
      en: "Want a website that does not stay invisible after launch?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer un site clair, utile et pensé pour être trouvé par les bonnes recherches.",
      en: "We can frame a website that is clear, useful and designed to be found through the right searches.",
    },
    sources: [
      {
        title: "Essentiels de la recherche Google (anciennement \"Consignes aux webmasters\")",
        url: "https://developers.google.com/search/docs/essentials?hl=fr",
      },
    ],
  },
  {
    slug: "pourquoi-optimisation-referencement-naturel-importante",
    publishedAt: "2026-04-05",
    updatedAt: "2026-11-10",
    author: "Équipe Sitekept",
    category: {
      fr: "Référencement naturel",
      en: "Organic search",
    },
    title: {
      fr: "Pourquoi le référencement d’un site est important : ce qu’il apporte",
      en: "Why organic search optimization matters and what it really brings",
    },
    excerpt: {
      fr: "Le référencement naturel n’est pas un supplément technique. C’est ce qui permet à un site d’attirer une audience qualifiée, de rester crédible et de continuer à être trouvé dans le temps.",
      en: "Organic search optimization is not a technical add-on. It is what helps a website attract qualified traffic, stay credible and keep being discovered over time.",
    },
    seoTitle: {
      fr: "Pourquoi le référencement d’un site est important | Sitekept",
      en: "Why organic search optimization matters | Sitekept",
    },
    seoDescription: {
      fr: "Pourquoi le référencement d’un site est important : visibilité, trafic qualifié, crédibilité, présence durable. Ce qu’il apporte réellement au site.",
      en: "Visibility, qualified traffic, credibility and durable discoverability: here is what organic search optimization really brings to a website.",
    },
    intro: {
      fr: "Le référencement naturel (SEO) désigne ce qui aide un site à apparaître dans les résultats non payants des moteurs de recherche. Pourquoi le référencement d’un site est important ? Parce qu’il rend un site trouvable, compréhensible et crédible pour des prospects qui cherchent déjà une réponse.",
      en: "Organic search optimization is sometimes reduced to a keyword exercise. That view is too narrow. In reality, it is about making a website findable, understandable and credible for prospects who are already looking for an answer. That is what gives it long-term commercial value.",
    },
    sections: [
      {
        id: "qualified-visibility",
        title: {
          fr: "Le premier bénéfice: une visibilité plus qualifiée",
          en: "The first benefit: more qualified visibility",
        },
        paragraphs: {
          fr: [
            "Le référencement naturel aide votre site à apparaître face à des personnes qui formulent déjà un besoin. On ne parle donc pas d’une audience vague ou distraite, mais de visiteurs potentiellement plus pertinents pour votre activité.",
            "Pour une PME ou un indépendant, cela change beaucoup de choses: les visites ont plus de sens, les prises de contact sont mieux alignées avec l’offre et le site devient un vrai support commercial.",
          ],
          en: [
            "Organic search helps your website appear in front of people who already express a need. This is not vague or distracted traffic, but visitors who are potentially much more relevant for your business.",
            "For an SMB or solo founder, that changes a lot: visits make more sense, contact requests are better aligned with the offer and the website becomes a true commercial asset.",
          ],
        },
      },
      {
        id: "credibility-and-trust",
        title: {
          fr: "Le deuxième bénéfice: de la crédibilité et de la confiance",
          en: "The second benefit: credibility and trust",
        },
        paragraphs: {
          fr: [
            "Un site bien référencé n’est pas seulement mieux exposé. Il paraît aussi plus crédible, parce qu’il répond mieux aux attentes de recherche, structure clairement son information et montre des pages utiles sur ses services, ses expertises ou ses réponses aux questions fréquentes.",
            "Cette crédibilité est essentielle, en particulier pour les services où la décision se prend avec un niveau élevé de confiance: santé, droit, immobilier, artisanat spécialisé ou services B2B.",
          ],
          en: [
            "A well-optimized website is not only more visible. It also feels more credible because it aligns better with search expectations, structures information clearly and offers useful pages about services, expertise and frequent questions.",
            "That credibility matters especially in services where decisions require a high level of trust: health, law, real estate, specialized trades or B2B services.",
          ],
        },
      },
      {
        id: "long-term-discoverability",
        title: {
          fr: "Le troisième bénéfice: une présence qui continue dans le temps",
          en: "The third benefit: discoverability that lasts over time",
        },
        paragraphs: {
          fr: [
            "Un travail sérieux sur le référencement naturel crée une base durable. Contrairement à une action ponctuelle, il renforce la capacité du site à rester visible, à être recrawlé, à être mieux compris et à soutenir de futures pages ou futures campagnes.",
            "C’est aussi ce qui rend le SEO particulièrement intéressant pour un site livré comme un actif durable: vous investissez dans une structure qui peut continuer à progresser, au lieu de repartir de zéro à chaque changement.",
            "Pour la méthode, consultez notre page sur le [référencement SEO et GEO](/seo-geo) et le guide d’[optimisation SEO et GEO d’un site](/blog/site-optimise-seo-geo). Si votre site reste introuvable, lisez pourquoi [un site qui n’apparaît pas sur Google](/blog/site-sans-referencement-peut-devenir-inutile) perd de sa valeur.",
          ],
          en: [
            "Serious organic optimization creates a durable base. Unlike one-off actions, it strengthens the website’s ability to remain visible, be recrawled, be better understood and support future pages or campaigns.",
            "That is also what makes SEO especially valuable for a website delivered as a durable asset: you invest in a structure that can keep progressing instead of restarting from scratch each time things change.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site qui attire une visibilité utile, pas seulement du passage ?",
      en: "Want a website that attracts useful visibility, not just visits?",
    },
    ctaDescription: {
      fr: "Nous pouvons construire une base claire, indexable et durable pour votre acquisition organique.",
      en: "We can build a clear, indexable and durable base for your organic acquisition.",
    },
  },
  {
    slug: "pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout",
    publishedAt: "2026-04-05",
    updatedAt: "2026-11-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Propriété du site",
      en: "Website ownership",
    },
    title: {
      fr: "Pourquoi avoir un site qui nous appartient à 100 % change tout",
      en: "Why having a website that belongs to you 100% changes everything",
    },
    excerpt: {
      fr: "Un site entièrement détenu par le client change le budget, la liberté de mouvement, la reprise du projet et la qualité de la relation avec le prestataire.",
      en: "A website fully owned by the client changes the budget, the room to move, the ability to take over the project and the quality of the agency relationship.",
    },
    seoTitle: {
      fr: "Posséder son site à 100 % : pourquoi ça change tout",
      en: "Why full website ownership changes everything | Sitekept",
    },
    seoDescription: {
      fr: "Avoir son propre site internet : abonnements, autonomie, changement de prestataire, accès et contrôle du code. Pourquoi la propriété change tout.",
      en: "Subscriptions, autonomy, provider changes, access and code control: why full website ownership changes the game.",
    },
    intro: {
      fr: "La question de la propriété du site paraît parfois abstraite jusqu’au jour où l’on veut modifier un outil, récupérer des accès ou changer de prestataire. À ce moment-là, tout devient très concret. Un site qui vous appartient vraiment vous laisse de la marge. Un site verrouillé vous rend dépendant.",
      en: "Website ownership can seem abstract until the day you want to change a tool, recover access or switch providers. At that point, everything becomes very concrete. A website you truly own gives you room to move. A locked website keeps you dependent.",
    },
    sections: [
      {
        id: "subscription-dependency",
        title: {
          fr: "La dépendance aux abonnements change le rapport de force",
          en: "Subscription dependency changes the balance of power",
        },
        paragraphs: {
          fr: [
            "Quand le site repose sur un abonnement opaque, chaque évolution peut devenir un point de blocage. Le client ne sait pas toujours ce qu’il paie, ce qu’il possède réellement ni ce qu’il pourra récupérer plus tard.",
            "Cette dépendance crée un coût mental et budgétaire. Elle freine les décisions, complique les arbitrages et affaiblit la liberté de changer de cap ou de partenaire.",
          ],
          en: [
            "When a website depends on an opaque subscription, every change can become a blocker. The client does not always know what they are paying for, what they truly own or what they will be able to recover later.",
            "That dependency creates both mental and budget cost. It slows decisions, complicates trade-offs and reduces the freedom to change direction or switch partner.",
          ],
        },
      },
      {
        id: "autonomy-and-access",
        title: {
          fr: "Autonomie, accès et contrôle: ce qui change au quotidien",
          en: "Autonomy, access and control: what changes day to day",
        },
        paragraphs: {
          fr: [
            "Quand vous détenez le site à 100 %, vous gardez la main sur le code, les accès techniques et la mise en ligne. Vous pouvez faire évoluer le projet, faire intervenir un autre développeur ou reprendre vous-même certains sujets sans dépendre d’un verrou artificiel.",
            "Cette autonomie n’oblige pas à devenir technique. Elle garantit simplement que la technique reste à votre service, et non l’inverse.",
          ],
          en: [
            "When you own the website 100%, you keep control over the code, technical access and publication. You can evolve the project, involve another developer or take over some topics yourself without depending on artificial lock-in.",
            "That autonomy does not force you to become technical. It simply ensures that technology stays in your service, not the other way around.",
          ],
        },
      },
      {
        id: "durable-asset",
        title: {
          fr: "Un site web doit rester un actif durable",
          en: "A website should remain a durable asset",
        },
        paragraphs: {
          fr: [
            "Un site bien livré garde de la valeur dans le temps. Il peut être repris, enrichi, retravaillé ou migré sans remise à zéro. C’est ce qui le transforme en actif durable pour l’entreprise.",
            "C’est aussi la logique Sitekept: livrer un site que vous pouvez conserver, comprendre et transmettre plus tard à un autre prestataire si vous le souhaitez.",
          ],
          en: [
            "A well-delivered website keeps value over time. It can be taken over, enriched, reworked or migrated without a full reset. That is what turns it into a durable business asset.",
            "That is also the Sitekept logic: deliver a website you can keep, understand and hand over to another provider later if you want to.",
          ],
        },
      },
      {
        id: "accompagnement-propriete",
        title: {
          fr: "L’accompagnement change-t-il la propriété du site ?",
          en: "Does the support plan change who owns the site?",
        },
        paragraphs: {
          fr: [
            `Non, votre site vous appartient, comme votre enseigne, que vous preniez l’accompagnement ou non. Cet accompagnement, « Suivi & Visibilité », est facultatif : ${FOLLOW_UP_MONTHLY.fr} sans engagement, ou ${FOLLOW_UP_ANNUAL.fr}. Si vous l’arrêtez, la dépense s’arrête et le site reste à vous, sans rien à récupérer.`,
            "Acheter un site, c’est le payer une fois et le garder. Louer sa présence, c’est payer pour qu’il continue d’exister. La question à se poser : que vous reste-t-il le jour où vous arrêtez de payer ?",
            "Pour comparer les deux modèles, lisez [louer ou posséder son site internet](/blog/louer-ou-posseder-son-site-internet). Voir aussi [posséder son site sans abonnement](/blog/posseder-son-site-sans-abonnement) et [la page des tarifs](/tarifs).",
          ],
          en: [
            `No, your website belongs to you, like your shop sign, whether or not you take the support plan. The "Suivi & Visibilité" plan is optional: ${FOLLOW_UP_MONTHLY.en} with no commitment, or ${FOLLOW_UP_ANNUAL.en}. If you stop it, the spending stops and the site stays yours, with nothing to recover.`,
            "Buying a website means paying once and keeping it. Renting your presence means paying for it to keep existing. The question to ask: what is left the day you stop paying?",
            "To compare the two models, read [renting or owning your website](/blog/louer-ou-posseder-son-site-internet). See also [owning your website without a subscription](/blog/posseder-son-site-sans-abonnement) and [the pricing page](/tarifs).",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site livré comme un actif durable, pas comme une dépendance ?",
      en: "Want a website delivered as a durable asset, not a dependency?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer un site clair dans sa propriété, ses accès et sa reprise future.",
      en: "We can frame a website with clear ownership, access and future handoff.",
    },
  },
  {
    slug: "comment-se-passe-la-livraison-d-un-site-web-chez-sitekept",
    publishedAt: "2026-04-05",
    updatedAt: "2026-11-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Livraison",
      en: "Delivery",
    },
    title: {
      fr: "Comment se passe la livraison d’un site web chez Sitekept ?",
      en: "How does website delivery work at Sitekept?",
    },
    excerpt: {
      fr: "La livraison ne s’arrête pas à la mise en ligne. Elle comprend le code, les accès et le nom de domaine, tous à votre nom, pour que vous possédiez réellement votre site.",
      en: "Delivery does not stop at launch. It includes the code, access and domain name, all in your name, so you truly own your website.",
    },
    seoTitle: {
      fr: "Livraison d’un site web : notre process | Sitekept",
      en: "Website delivery: our process | Sitekept",
    },
    seoDescription: {
      fr: "Mise en ligne d’un site internet chez Sitekept : comptes et accès à votre nom, nom de domaine offert la première année, site qui vous appartient.",
      en: "In-house development, accounts and access in your name, first-year domain purchase and a clear structure: here is how Sitekept delivers a website.",
    },
    intro: {
      fr: "Pour Sitekept, livrer un site ne veut pas seulement dire publier une URL. La livraison doit aussi garantir que le client possède réellement le projet, ses accès et sa capacité à le faire évoluer plus tard. C’est cette logique qui guide la façon dont nous développons, mettons en ligne et remettons chaque site.",
      en: "For Sitekept, delivering a website does not simply mean publishing a URL. Delivery must also guarantee that the client truly owns the project, its access and the ability to evolve it later. That is the logic that guides how we build, publish and hand over each website.",
    },
    sections: [
      {
        id: "developed-in-house",
        title: {
          fr: "Le site est développé en interne dans un cadre clair",
          en: "The website is developed in-house within a clear framework",
        },
        paragraphs: {
          fr: [
            "Le projet est développé en interne par Sitekept, avec une structure pensée pour rester lisible. Les fichiers, les pages, les composants et l’organisation générale ne sont pas montés comme une boîte noire. Le but est qu’un autre développeur puisse comprendre le projet sans repartir de zéro.",
            "Cette étape reprend l’esprit du process présenté sur la home: vous validez une direction, nous développons, nous ajustons, puis nous préparons une livraison exploitable et compréhensible.",
          ],
          en: [
            "The project is developed in-house by Sitekept with a structure designed to remain readable. Files, pages, components and the overall organization are not assembled like a black box. The goal is that another developer can understand the project without starting from zero.",
            "This follows the same logic as the process shown on the homepage: you validate a direction, we build, we adjust and then we prepare a delivery that stays usable and understandable.",
          ],
        },
      },
      {
        id: "accounts-and-deployment",
        title: {
          fr: "Les comptes sont créés au nom du client, puis le projet y est livré",
          en: "Accounts are created in the client’s name and the project is delivered there",
        },
        paragraphs: {
          fr: [
            "Pour garantir la propriété à 100 %, nous ouvrons les comptes au nom du client, puis nous y plaçons le projet. Rien n’est conservé dans un espace inaccessible : votre site vous appartient, comme votre enseigne.",
            "Le site est publié et le nom de domaine acheté depuis ces mêmes comptes. Le domaine est offert la première année ; ensuite, son renouvellement se règle directement à l’organisme qui l’enregistre. Nous utilisons par exemple GitHub pour le code, Vercel pour la mise en ligne et Hostinger pour le domaine, chacun à votre nom.",
          ],
          en: [
            "To guarantee 100% ownership, we open the accounts in the client’s name and then place the project there. Nothing is kept in an inaccessible space: your website belongs to you, like your shop sign.",
            "The website is published and the domain name purchased from those same accounts. The domain is free the first year; after that, renewal is paid directly to the registrar. For example, we use GitHub for the code, Vercel for publishing and Hostinger for the domain, each in your name.",
          ],
        },
      },
      {
        id: "handoff-and-takeover",
        title: {
          fr: "La reprise du site reste possible si le client change de prestataire",
          en: "The website remains easy to take over if the client changes provider",
        },
        paragraphs: {
          fr: [
            "La livraison comprend une logique de reprise future. Toute la structure du projet, du code à la mise en ligne, est pensée pour rester compréhensible. Cela ne veut pas dire que le client doit gérer la technique au quotidien, mais qu’il n’est jamais enfermé dans un système flou.",
            "Si le client souhaite plus tard travailler avec un autre développeur ou une autre agence, le site peut être repris facilement. Le code, les accès et le domaine sont déjà à son nom, dans un cadre clair.",
          ],
          en: [
            "Delivery includes a future takeover logic. The full project structure, from code to publication, is designed to remain understandable. That does not mean the client must handle the technical side every day, but it does mean they are never locked into a vague system.",
            "If the client later wants to work with another developer or agency, the website can be taken over easily. The code, access and domain are already in the client’s name, in a clear framework.",
          ],
        },
      },
      {
        id: "apres-livraison",
        title: {
          fr: "Que se passe-t-il après la livraison ?",
          en: "What happens after delivery?",
        },
        paragraphs: {
          fr: [
            `Votre site est à vous dès la livraison, et aucun abonnement n’est nécessaire pour qu’il existe. Si vous le souhaitez, l’accompagnement « Suivi & Visibilité » prend le relais : ${FOLLOW_UP_MONTHLY.fr} sans engagement, ou ${FOLLOW_UP_ANNUAL.fr}, avec deux modifications par mois, non cumulables. Le premier mois est offert à la livraison, pour la formule mensuelle.`,
            "Acheter un site, c’est le payer une fois et le garder. Louer sa présence, c’est payer pour qu’il continue d’exister. La livraison décrite ici relève du premier cas, et l’accompagnement ne change rien à la propriété.",
            "Pour le délai, lisez [créer un site internet rapidement](/blog/site-web-rapide-pme-independant). Pour les conditions, voyez [la page des tarifs](/tarifs).",
          ],
          en: [
            `Your website is yours from delivery, and no subscription is needed for it to exist. If you wish, the "Suivi & Visibilité" support plan takes over: ${FOLLOW_UP_MONTHLY.en} with no commitment, or ${FOLLOW_UP_ANNUAL.en}, with two edits a month that do not roll over. The first month is free at delivery, for the monthly plan.`,
            "Buying a website means paying once and keeping it. Renting your presence means paying for it to keep existing. The delivery described here is the first case, and the support plan changes nothing about ownership.",
            "For the timeline, read [creating a website quickly](/blog/site-web-rapide-pme-independant). For the conditions, see [the pricing page](/tarifs).",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site livré proprement, avec tous vos accès ?",
      en: "Want a website delivered cleanly, with all your own access?",
    },
    ctaDescription: {
      fr: "Nous pouvons vous montrer comment cadrer un site rapide sans sacrifier la propriété ni la reprise future.",
      en: "We can show you how to frame a fast website without sacrificing ownership or future handoff.",
    },
  },

  {
    slug: "recuperer-son-site-web-chez-un-prestataire",
    publishedAt: "2026-08-11",
    updatedAt: "2026-11-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Propriété du site",
      en: "Website ownership",
    },
    title: {
      fr: "Récupérer son site web chez un prestataire : le guide complet",
      en: "Getting your website back from a provider: the complete guide",
    },
    excerpt: {
      fr: "Nom de domaine, code source, contenus, accès : ce qu'il faut réclamer, dans quel ordre, et quoi faire quand le prestataire ne répond plus.",
      en: "Domain name, source code, content, access: what to reclaim, in what order, and what to do when the provider stops answering.",
    },
    seoTitle: {
      fr: "Récupérer son site web chez un prestataire | Sitekept",
      en: "Getting your website back from a provider | Sitekept",
    },
    seoDescription: {
      fr: "Changer de prestataire web : la procédure pour récupérer votre nom de domaine, votre code source, vos contenus et vos accès, étape par étape.",
      en: "Changing web provider: the step-by-step procedure to recover your domain, source code, content and access.",
    },
    intro: {
      fr: "Vouloir changer de prestataire est une décision banale. La rendre possible l'est beaucoup moins. Beaucoup d'entreprises découvrent à ce moment précis qu'elles ne possèdent presque rien de leur propre site : ni le nom de domaine, ni le code, parfois pas même les textes. Ce guide décrit ce qu'il faut réclamer, dans quel ordre, et ce que vous pouvez faire quand le dialogue se bloque.",
      en: "Wanting to change provider is an ordinary decision. Making it possible is much less so. Many companies discover at that exact moment that they own almost nothing of their own website. This guide covers what to reclaim, in what order, and what to do when the conversation stalls.",
    },
    sections: [
      {
        id: "inventaire",
        title: {
          fr: "Étape 1 — Faire l'inventaire de ce que vous ne contrôlez pas",
          en: "Step 1 — Take stock of what you do not control",
        },
        paragraphs: {
          fr: [
            "Avant d'annoncer quoi que ce soit, établissez la liste de ce qui compose votre présence en ligne et, pour chaque élément, qui en détient réellement les clés. Cet inventaire détermine votre marge de manœuvre : il vaut mieux le faire avant d'ouvrir la discussion qu'après.",
            "Le plus simple est de commencer par le nom de domaine, parce que c'est le seul élément dont la titularité est publique et vérifiable en quelques secondes, sans rien demander à personne.",
          ],
          en: [
            "Before announcing anything, list what makes up your online presence and, for each item, who actually holds the keys. This inventory determines your room for manoeuvre.",
            "Start with the domain name: it is the only item whose ownership is public and verifiable in seconds, without asking anyone.",
          ],
        },
        bullets: {
          fr: [
            "Le nom de domaine : à quel nom est-il déposé, et chez quel bureau d'enregistrement ?",
            "Le code source : en existe-t-il une copie, et y avez-vous accès ?",
            "L'hébergement : le contrat est-il à votre nom ou à celui du prestataire ?",
            "Les contenus : textes, photos, logo — qui les a produits, et sous quelles conditions ?",
            "Les comptes de mesure : Search Console, Analytics, fiche d'établissement Google.",
            "Les boîtes e-mail rattachées au domaine, souvent oubliées jusqu'au jour de la coupure.",
          ],
          en: [
            "The domain name: in whose name is it registered, and with which registrar?",
            "The source code: does a copy exist, and do you have access?",
            "Hosting: is the contract in your name or the provider's?",
            "Content: text, photos, logo — who produced them, and under what terms?",
            "Measurement accounts: Search Console, Analytics, Google Business Profile.",
            "Email boxes attached to the domain, often forgotten until the day they stop working.",
          ],
        },
      },
      {
        id: "nom-de-domaine",
        title: {
          fr: "Le nom de domaine : l'élément à sécuriser en premier",
          en: "The domain name: secure this one first",
        },
        paragraphs: {
          fr: [
            "Le nom de domaine est votre adresse. Sans lui, un site tout neuf ne sert à rien : vos clients, vos cartes de visite et vos référencements pointent vers une adresse que vous ne contrôlez pas. C'est donc le premier point à traiter, avant même de parler du site lui-même.",
            "Vérifiez à quel nom il est déposé au moyen d'une requête WHOIS publique, ou directement auprès de l'AFNIC pour un .fr. Trois situations se présentent. S'il est à votre nom, vous êtes propriétaire : il vous suffira de demander le code de transfert pour l'emmener chez un autre bureau d'enregistrement. S'il est au nom du prestataire, vous devrez négocier un changement de titulaire. S'il est déposé au nom d'un salarié parti depuis, la situation est souvent plus délicate qu'avec le prestataire lui-même.",
            "Un point mérite d'être connu : un nom de domaine se renouvelle. S'il expire pendant un conflit, il peut être racheté par un tiers, et vous n'aurez aucun recours simple. Vérifiez la date d'expiration dès l'inventaire, et considérez-la comme votre échéance réelle.",
          ],
          en: [
            "The domain is your address. Without it, a brand-new website is useless: your customers and your search rankings point to an address you do not control.",
            "Check the registrant with a public WHOIS lookup, or with AFNIC for a .fr domain. Three situations arise: registered in your name, in the provider's name, or in the name of a former employee — the last being the trickiest.",
            "One point worth knowing: domains expire. If yours lapses during a dispute, a third party can buy it and you will have little simple recourse. Check the expiry date during the inventory.",
          ],
        },
      },
      {
        id: "contrat",
        title: {
          fr: "Étape 2 — Relire le contrat avant d'annoncer votre départ",
          en: "Step 2 — Reread the contract before announcing your departure",
        },
        paragraphs: {
          fr: [
            "C'est l'étape que l'on saute le plus souvent, et celle qui change le plus l'issue. Reprenez le devis signé, les conditions générales et les éventuels avenants. Vous cherchez trois choses : ce que vous avez acheté exactement, la durée d'engagement et son préavis, et la présence ou l'absence d'une clause de cession des droits.",
            "Ce dernier point surprend beaucoup de dirigeants. En droit français, payer le développement d'un site ne vous en transfère pas automatiquement les droits d'auteur : la cession doit être expressément prévue par écrit et délimitée. Autrement dit, un prestataire qui refuse de livrer le code source n'est pas nécessairement de mauvaise foi — il peut être dans son droit si le contrat ne prévoit rien. C'est une raison de plus de traiter ce point à l'achat plutôt qu'au départ.",
            "Si votre contrat comporte un engagement de durée, notez la date d'échéance et le délai de préavis. Résilier hors des clous peut vous exposer à devoir payer les mensualités restantes, ce qui pèse dans la négociation.",
          ],
          en: [
            "This is the step most often skipped, and the one that changes the outcome most. Look for three things: what you actually bought, the commitment term and its notice period, and whether a rights assignment clause exists.",
            "Under French law, paying for development does not automatically transfer copyright: the assignment must be expressly set out in writing. A provider refusing to hand over source code is not necessarily acting in bad faith — they may be within their rights if the contract is silent.",
            "If your contract has a fixed term, note the expiry date and notice period before you act.",
          ],
        },
      },
      {
        id: "demande-ecrite",
        title: {
          fr: "Étape 3 — Formuler la demande par écrit, et précisément",
          en: "Step 3 — Make the request in writing, and precisely",
        },
        paragraphs: {
          fr: [
            "Une demande vague obtient une réponse vague. Écrivez un courriel — ou un courrier recommandé si la relation est déjà tendue — qui énumère point par point ce que vous demandez, avec une date de réponse souhaitée. Restez factuel et courtois : la plupart des transferts se règlent en quelques jours quand la demande est claire et que la relation ne s'est pas envenimée.",
            "Conservez une trace écrite de tout, y compris des échanges qui se passent bien. Si la suite se complique, cette trace est ce qui vous permettra de démontrer votre bonne foi et la chronologie des faits.",
          ],
          en: [
            "A vague request gets a vague answer. Write an email — or a registered letter if the relationship is already strained — listing point by point what you are asking for, with a requested response date.",
            "Keep a written record of everything, including exchanges that go well.",
          ],
        },
        bullets: {
          fr: [
            "Le code de transfert du nom de domaine, et le changement de titulaire si nécessaire",
            "Une archive complète du site : code source, base de données, fichiers médias",
            "Les identifiants d'administration et d'hébergement",
            "Le transfert de propriété des comptes Analytics, Search Console et de la fiche d'établissement",
            "Les fichiers sources du logo et des visuels, dans leur format d'origine",
            "La confirmation écrite que vous pouvez exploiter et faire modifier le site",
          ],
          en: [
            "The domain transfer code, and a change of registrant if needed",
            "A full archive of the site: source code, database, media files",
            "Administration and hosting credentials",
            "Ownership transfer of Analytics, Search Console and the business profile",
            "Source files for the logo and visuals, in their original format",
            "Written confirmation that you may operate and modify the site",
          ],
        },
      },
      {
        id: "blocage",
        title: {
          fr: "Étape 4 — Quand le prestataire ne répond plus",
          en: "Step 4 — When the provider stops answering",
        },
        paragraphs: {
          fr: [
            "Le silence est le cas le plus fréquent, loin devant le refus explicite. Commencez par relancer une fois par écrit en fixant une échéance raisonnable, puis par lettre recommandée avec accusé de réception, qui donne une date certaine à votre demande.",
            "Si le blocage porte sur le nom de domaine, sachez que les bureaux d'enregistrement et les organismes de gestion — l'AFNIC pour le .fr — disposent de procédures en cas de litige sur la titularité. Elles ne sont ni immédiates ni automatiques, mais elles existent, et elles constituent souvent un argument suffisant pour débloquer la discussion.",
            "Si le litige porte sur des sommes ou sur l'exécution du contrat, la médiation de la consommation ou un conseil juridique sera plus efficace qu'un échange qui s'envenime. Sur les petits montants, la procédure judiciaire coûte souvent plus cher que ce qu'elle permet de récupérer : arbitrez froidement entre le temps que vous y passerez et le coût de la reconstruction.",
            "Car c'est parfois la conclusion la plus rationnelle. Quand le code est irrécupérable, refaire un site propre coûte souvent moins cher, en argent comme en énergie, que d'arracher un code que vous ne pourrez de toute façon pas faire évoluer facilement. Ce qui se négocie en priorité, c'est le nom de domaine et les contenus : eux ne se reconstruisent pas.",
          ],
          en: [
            "Silence is the most common case, well ahead of explicit refusal. Follow up once in writing with a reasonable deadline, then by registered letter, which gives your request a certain date.",
            "If the blockage concerns the domain name, registrars and management bodies — AFNIC for .fr — have dispute procedures for contested ownership.",
            "On small amounts, litigation often costs more than it recovers. Weigh the time against the cost of rebuilding.",
            "Rebuilding is sometimes the rational conclusion. What must be negotiated first is the domain name and the content: those cannot be rebuilt.",
          ],
        },
      },
      {
        id: "referencement",
        title: {
          fr: "Ce que vous risquez de perdre en référencement, et comment le limiter",
          en: "What you risk losing in search rankings, and how to limit it",
        },
        paragraphs: {
          fr: [
            "Changer de site est un moment de fragilité pour le référencement, et c'est l'angle mort de la plupart des migrations. Le risque n'est pas de perdre son ancienneté de domaine — elle reste attachée au nom de domaine, que vous conservez — mais de casser les adresses que Google a mis des années à indexer.",
            "Le point critique est la correspondance entre anciennes et nouvelles URL. Si votre page « /nos-services » devient « /prestations » sans redirection, Google met des semaines à comprendre, et pendant ce temps l'ancienne adresse renvoie une erreur aux visiteurs comme aux moteurs. La parade est simple et se prépare avant la bascule : relever la liste complète des adresses existantes, et poser une redirection permanente de chacune vers son équivalent sur le nouveau site.",
            "Récupérez aussi la propriété de la Search Console avant de couper l'ancien site : c'est le seul endroit où figure la liste des pages réellement indexées et des requêtes qui vous amenaient du trafic. Sans elle, vous naviguez à l'aveugle, et vous ne saurez pas si une baisse après migration vient de la bascule ou d'autre chose.",
            "Enfin, surveillez pendant quatre à six semaines. Une variation les premiers jours est normale ; une baisse qui persiste au-delà d'un mois signale généralement un problème de redirection ou de contenu perdu, et se corrige encore facilement à ce stade.",
          ],
          en: [
            "Changing website is a fragile moment for search rankings. The risk is not losing domain age — that stays with the domain you keep — but breaking the addresses Google spent years indexing.",
            "The critical point is the mapping between old and new URLs. Record every existing address before the switch, and set a permanent redirect from each to its equivalent.",
            "Recover Search Console ownership before shutting down the old site: it is the only place listing the pages actually indexed and the queries bringing you traffic.",
            "Monitor for four to six weeks. A drop persisting beyond a month usually signals a redirect problem, still easy to fix at that stage.",
          ],
        },
      },
      {
        id: "apres",
        title: {
          fr: "Ce qu'il faut faire juste après la récupération",
          en: "What to do right after recovery",
        },
        paragraphs: {
          fr: [
            "Une fois le transfert obtenu, quelques gestes évitent de se retrouver dans la même situation deux ans plus tard. Ils prennent une heure et valent bien davantage.",
            "Le plus important est le dernier : la prochaine fois, faites écrire la cession dans le devis avant de signer. Une ligne suffit, et elle vous épargne l'intégralité de la procédure décrite dans cet article.",
          ],
          en: [
            "Once the transfer is done, a few steps prevent ending up in the same place two years later.",
            "The most important is the last one: next time, have the assignment written into the quote before signing.",
          ],
        },
        bullets: {
          fr: [
            "Activez le renouvellement automatique du nom de domaine, et notez son échéance",
            "Changez tous les mots de passe, y compris ceux qui semblent sans importance",
            "Vérifiez que vous êtes bien propriétaire — et pas simple administrateur — des comptes Analytics et Search Console",
            "Conservez une copie du code et de la base de données hors de l'hébergement",
            "Exigez de votre prochain prestataire une clause écrite de cession et des comptes ouverts à votre nom",
          ],
          en: [
            "Enable auto-renewal on the domain, and note its expiry",
            "Change every password, including those that seem unimportant",
            "Check you are owner — not just administrator — of Analytics and Search Console",
            "Keep a copy of the code and database outside the hosting",
            "Require your next provider to put the assignment in writing",
          ],
        },
      },
      {
        id: "eviter-dependance",
        title: {
          fr: "Comment éviter de dépendre d'un prestataire ?",
          en: "How do you avoid depending on a provider?",
        },
        paragraphs: {
          fr: [
            `Achetez votre site au lieu de louer votre présence. Chez Sitekept, le site est payé une fois et vous appartient, accès compris : aucun abonnement n'est nécessaire pour qu'il existe. L'accompagnement facultatif « Suivi & Visibilité » coûte ${FOLLOW_UP_MONTHLY.fr} sans engagement, ou ${FOLLOW_UP_ANNUAL.fr}, et l'arrêter ne touche pas au site.`,
            "Ce n'est pas de payer un service chaque mois qui vous piège. C'est de payer pour que le site continue d'exister : si le paiement s'arrête, tout s'arrête. Posez cette question à tout prestataire avant de signer.",
            "Les conditions sont sur [la page des tarifs](/tarifs). Pour comparer les deux modèles, lisez [louer ou posséder son site internet](/blog/louer-ou-posseder-son-site-internet).",
          ],
          en: [
            `Buy your website instead of renting your presence. At Sitekept, the site is paid for once and belongs to you, access included: no subscription is needed for it to exist. The optional "Suivi & Visibilité" plan costs ${FOLLOW_UP_MONTHLY.en} with no commitment, or ${FOLLOW_UP_ANNUAL.en}, and stopping it does not affect the site.`,
            "Paying for a service every month is not what traps you. Paying for the site to keep existing is: if the payment stops, everything stops. Ask every provider this question before signing.",
            "The conditions are on [the pricing page](/tarifs). To compare the two models, read [renting or owning your website](/blog/louer-ou-posseder-son-site-internet).",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Repartir sur un site qui vous appartient dès le premier jour",
      en: "Start again with a website that is yours from day one",
    },
    ctaDescription: {
      fr: "Chez Sitekept, votre site est payé une fois et vous appartient, accès compris, remis à la livraison. Aucun abonnement n'est nécessaire pour qu'il existe, et il n'y a rien à négocier le jour où vous voudrez partir.",
      en: "At Sitekept your website is paid for once and belongs to you, access included, handed over at delivery. No subscription is needed for it to exist, and there is nothing to negotiate the day you want to leave.",
    },
  },

  {
    slug: "louer-ou-posseder-son-site-internet",
    publishedAt: "2026-08-12",
    updatedAt: "2026-11-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Propriété du site",
      en: "Website ownership",
    },
    title: {
      fr: "Louer ou posséder son site : ce que coûte vraiment un abonnement",
      en: "Renting or owning your website: what a subscription really costs",
    },
    excerpt: {
      fr: "Au-delà du montant mensuel, un abonnement crée trois dépendances qui se paient le jour où vous voulez partir. Et les cas, réels, où il reste le bon choix.",
      en: "Beyond the monthly fee, a subscription creates three dependencies you pay for the day you want to leave. And the real cases where it remains the right choice.",
    },
    seoTitle: {
      fr: "Abonnement site internet : le vrai coût | Sitekept",
      en: "Website subscriptions: what they really cost | Sitekept",
    },
    seoDescription: {
      fr: "Ce qu'un abonnement site internet coûte sur cinq ans, les trois dépendances qu'il crée, et les situations où il reste malgré tout le bon choix.",
      en: "What a website subscription costs over five years, the three dependencies it creates, and when it is still the right choice.",
    },
    intro: {
      fr: `Comparer un site à ${SITE_PRICE.fr} payés une fois et un site à 29 € par mois semble simple : on multiplie, on compare, on conclut. Ce calcul est juste, mais il passe à côté de l'essentiel. Ce qui distingue vraiment les deux modèles, ce n'est pas le total au bout de cinq ans — c'est ce qu'il vous reste le jour où vous arrêtez de payer.`,
      en: `Comparing a ${SITE_PRICE.en} one-off website with a €29-a-month one looks simple: multiply, compare, conclude. The maths is right, but it misses the point. What really separates the two models is not the five-year total — it is what you are left with the day you stop paying.`,
    },
    sections: [
      {
        id: "ce-que-vous-payez",
        title: {
          fr: "Ce que vous payez vraiment dans un abonnement",
          en: "What you actually pay for in a subscription",
        },
        paragraphs: {
          fr: [
            "Un abonnement mélange plusieurs choses dans une seule ligne de facture, et c'est précisément ce qui rend la comparaison difficile. On y trouve généralement l'hébergement, l'usage d'un éditeur, la maintenance technique de la plateforme, et parfois un support.",
            "Prises séparément, ces prestations ont des prix très différents. L'hébergement d'un site vitrine coûte quelques euros par mois, parfois rien. La maintenance d'une plateforme mutualisée entre des centaines de milliers de clients revient à une fraction de centime par site. Ce que vous payez majoritairement, ce n'est donc pas un service : c'est un droit d'usage, qui s'interrompt en même temps que le paiement.",
            "Ce n'est ni scandaleux ni caché — c'est le modèle économique du logiciel en ligne, et il finance un produit réellement pratique. Mais il faut le nommer pour décider en connaissance de cause.",
          ],
          en: [
            "A subscription bundles several things into a single invoice line, which is exactly what makes comparison hard: hosting, use of an editor, platform maintenance, sometimes support.",
            "Taken separately, these have very different costs. Hosting a brochure site costs a few euros a month, sometimes nothing. What you mostly pay for is not a service but a right of use, which stops when the payment does.",
            "This is neither scandalous nor hidden — it is the business model of online software. But it needs naming to decide knowingly.",
          ],
        },
      },
      {
        id: "dependances",
        title: {
          fr: "Les trois dépendances que crée un abonnement",
          en: "The three dependencies a subscription creates",
        },
        paragraphs: {
          fr: [
            "Le coût financier est le plus visible, et paradoxalement le moins problématique. Les trois dépendances suivantes coûtent souvent bien davantage, et elles ne se manifestent qu'au moment du départ.",
          ],
          en: [
            "The financial cost is the most visible and, paradoxically, the least problematic. The three dependencies below often cost more, and only show up when you leave.",
          ],
        },
        bullets: {
          fr: [
            "La dépendance technique : le site est construit avec les outils de la plateforme et n'existe pas en dehors d'elle. Il n'y a rien à « emporter » — l'export, quand il existe, produit du HTML inexploitable pour reconstruire le site ailleurs.",
            "La dépendance de contenu : vos textes, vos photos et souvent vos avis clients vivent dans la base de la plateforme. Les récupérer est possible, les réinstaller ailleurs demande un travail manuel que personne n'anticipe.",
            "La dépendance tarifaire : le prix du premier mois n'engage pas la plateforme. Les tarifs évoluent, les fonctionnalités migrent vers des formules supérieures, et votre marge de négociation est nulle une fois le site en production.",
          ],
          en: [
            "Technical dependency: the site is built with the platform's tools and does not exist outside it. There is nothing to take away.",
            "Content dependency: your text, photos and often your reviews live in the platform's database. Recovering them is possible; reinstalling them elsewhere is manual work nobody plans for.",
            "Pricing dependency: the first month's price does not bind the platform. Rates change, features migrate to higher tiers, and your negotiating power is nil once the site is live.",
          ],
        },
      },
      {
        id: "calcul",
        title: {
          fr: "Le calcul sur cinq ans, et ce qu'il oublie",
          en: "The five-year calculation, and what it leaves out",
        },
        paragraphs: {
          fr: [
            "L'arithmétique est à la portée de tous : un abonnement à 20 € par mois représente 1 200 € sur cinq ans, à 30 € il en représente 1 800, à 50 € il atteint 3 000 €. Faites-la avec les chiffres de l'offre que vous examinez, pas avec une moyenne du marché.",
            "Mais ce calcul oublie deux choses. D'abord, il suppose un tarif stable sur cinq ans, ce qui est rarement le cas. Ensuite, et surtout, il compare des montants alors que les deux situations ne sont pas comparables : au bout de cinq ans, dans un cas vous possédez un site que vous pouvez faire évoluer ou héberger ailleurs ; dans l'autre, vous avez financé un droit d'usage arrivé à son terme.",
            "Une manière plus honnête de poser la question : combien vous coûterait, aujourd'hui, de tout reconstruire ailleurs ? Si la réponse est « le prix d'un site neuf », alors les mensualités versées n'ont rien capitalisé.",
          ],
          en: [
            "The maths is simple: €20 a month is €1,200 over five years; €30 is €1,800; €50 is €3,000. Run it with the figures of the offer in front of you.",
            "But it leaves out two things: it assumes a stable price for five years, and it compares amounts when the two situations are not comparable.",
            "A more honest question: what would it cost you today to rebuild everything elsewhere? If the answer is 'the price of a new site', the monthly payments capitalised nothing.",
          ],
        },
      },
      {
        id: "quand-abonnement",
        title: {
          fr: "Quand l'abonnement est le bon choix",
          en: "When a subscription is the right choice",
        },
        paragraphs: {
          fr: [
            "Il faut le dire, parce que c'est vrai et que l'ignorer décrédibiliserait tout ce qui précède : dans plusieurs situations, un abonnement est le choix rationnel.",
            "Si vous testez une idée et que le site ne vivra peut-être que six mois, payer 150 € au total est plus sensé qu'investir dans un site que vous jetterez. Si vous avez besoin de modifier vos pages vous-même chaque semaine sans jamais faire appel à personne, les éditeurs en ligne sont excellents à cet exercice, et un site développé ne le sera pas autant. Si votre activité repose sur une fonctionnalité que la plateforme fournit d'office — un catalogue de plusieurs milliers de produits, un système de réservation complexe — reconstruire cela sur mesure coûterait bien davantage.",
            "Le raisonnement bascule lorsque le site devient durable et central. À partir du moment où il représente votre présence commerciale principale et qu'il est destiné à durer plusieurs années, la location devient le modèle le plus cher, et le seul qui ne laisse rien derrière lui.",
          ],
          en: [
            "This needs saying, because it is true: in several situations a subscription is the rational choice.",
            "If you are testing an idea, if you need to edit pages yourself every week, or if your business relies on a feature the platform provides out of the box, subscriptions are excellent.",
            "The reasoning flips once the site becomes durable and central to your business.",
          ],
        },
      },
      {
        id: "accompagnement-sitekept",
        title: {
          fr: "Notre accompagnement est-il une location ?",
          en: "Is our support plan a rental?",
        },
        paragraphs: {
          fr: [
            `Non, car votre site est payé une fois et vous appartient, avec ou sans accompagnement. L'accompagnement « Suivi & Visibilité » est facultatif : ${FOLLOW_UP_MONTHLY.fr} sans engagement, ou ${FOLLOW_UP_ANNUAL.fr}. Si vous l'arrêtez, la dépense s'arrête et le site reste à vous, ce qui n'est pas le cas d'une location.`,
            "Retenez la différence : acheter un site, ou louer sa présence. Acheter, c'est payer une fois et garder le site. Louer, c'est payer pour qu'il continue d'exister, et c'est cela qui coûte cher.",
            "Les conditions complètes, dont le premier mois offert à la livraison pour la formule mensuelle, sont sur [la page des tarifs](/tarifs). Nous ne promettons aucun classement. Pour la propriété du site, lisez [posséder son site sans abonnement](/blog/posseder-son-site-sans-abonnement).",
          ],
          en: [
            `No, because your website is paid for once and belongs to you, with or without the support plan. The "Suivi & Visibilité" plan is optional: ${FOLLOW_UP_MONTHLY.en} with no commitment, or ${FOLLOW_UP_ANNUAL.en}. If you stop it, the spending stops and the website stays yours, which is not true of a rental.`,
            "Keep the difference in mind: buying a website, or renting your presence. Buying means paying once and keeping the site. Renting means paying for it to keep existing, and that is what costs a lot.",
            "The full conditions, including the first month free at delivery for the monthly plan, are on [the pricing page](/tarifs). We promise no ranking. For ownership, read [owning your website without a subscription](/blog/posseder-son-site-sans-abonnement).",
          ],
        },
      },
      {
        id: "sortir",
        title: {
          fr: "Comment sortir d'un abonnement sans tout perdre",
          en: "How to leave a subscription without losing everything",
        },
        paragraphs: {
          fr: [
            "Si vous êtes déjà engagé et que vous souhaitez en sortir, l'ordre des opérations compte plus que la vitesse. Une résiliation prononcée avant d'avoir sécurisé le reste vous laisse quelques jours pour tout récupérer, souvent moins.",
            "Commencez toujours par le nom de domaine, avant même d'annoncer votre intention. S'il est déposé à votre nom, demandez le code de transfert et emmenez-le chez un bureau d'enregistrement indépendant : il devient alors hors d'atteinte, quoi qu'il arrive ensuite. S'il appartient à la plateforme ou au prestataire, c'est le point à négocier en priorité, car c'est le seul élément réellement irremplaçable.",
            "Récupérez ensuite vos contenus : textes, photos en pleine résolution, avis clients si la plateforme permet de les exporter. Prenez aussi des captures de chaque page, qui serviront de référence pour reconstruire. Enfin, notez la liste complète de vos adresses de pages : elle vous permettra de poser les redirections vers le nouveau site et d'éviter de perdre le référencement acquis.",
            "Ne résiliez qu'une fois ces trois étapes terminées, et laissez si possible l'ancien site en ligne le temps que le nouveau soit publié et que les redirections fonctionnent. Payer un mois d'abonnement de plus coûte moins cher qu'une coupure de présence en ligne.",
          ],
          en: [
            "If you are already committed, the order of operations matters more than speed.",
            "Always start with the domain name, before announcing your intention.",
            "Then recover your content, and record the full list of your page addresses so you can set redirects.",
            "Only cancel once those steps are done, and keep the old site online until the new one is live.",
          ],
        },
      },
      {
        id: "questions",
        title: {
          fr: "Les questions à poser avant de s'engager",
          en: "Questions to ask before committing",
        },
        paragraphs: {
          fr: [
            "Quel que soit le modèle retenu, ces questions vous éviteront les mauvaises surprises. Posez-les par écrit et conservez les réponses.",
          ],
          en: [
            "Whatever model you choose, these questions prevent bad surprises. Ask them in writing and keep the answers.",
          ],
        },
        bullets: {
          fr: [
            "Le nom de domaine est-il déposé à mon nom, et puis-je le transférer librement ?",
            "Que se passe-t-il exactement si j'arrête de payer : le site disparaît-il, et sous quel délai ?",
            "Puis-je exporter mes contenus, dans quel format, et cet export est-il réutilisable ailleurs ?",
            "Le tarif est-il garanti, et pour combien de temps ?",
            "Quelles fonctionnalités que j'utilise aujourd'hui peuvent basculer dans une formule supérieure ?",
          ],
          en: [
            "Is the domain registered in my name, and can I transfer it freely?",
            "What exactly happens if I stop paying, and how quickly?",
            "Can I export my content, in what format, and is that export reusable elsewhere?",
            "Is the price guaranteed, and for how long?",
            "Which features I use today could move to a higher tier?",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Un site payé une fois, et qui reste le vôtre",
      en: "A website paid for once, that stays yours",
    },
    ctaDescription: {
      fr: "Le détail de ce qui est inclus, les modalités de paiement et la comparaison des modèles figurent sur notre page tarifs. Votre site vous appartient et aucun abonnement n'est nécessaire pour qu'il existe : l'accompagnement est facultatif.",
      en: "The details of what is included and how payment works are on our pricing page. Your website belongs to you and no subscription is needed for it to exist: the support plan is optional.",
    },
  },

  {
    slug: "checklist-seo-avant-mise-en-ligne",
    publishedAt: "2026-08-12",
    updatedAt: "2026-11-10",
    author: "Équipe Sitekept",
    category: {
      fr: "Référencement",
      en: "Search visibility",
    },
    title: {
      fr: "Checklist SEO : 20 points à vérifier avant de mettre un site en ligne",
      en: "SEO checklist: 20 things to check before launching a website",
    },
    excerpt: {
      fr: "Les vérifications à faire avant la mise en ligne, classées par gravité, avec la commande ou l'outil qui permet de contrôler chacune d'elles.",
      en: "The checks to run before launch, ordered by severity, each with the command or tool that verifies it.",
    },
    seoTitle: {
      fr: "Checklist SEO avant mise en ligne : 20 points | Sitekept",
      en: "Pre-launch SEO checklist: 20 points | Sitekept",
    },
    seoDescription: {
      fr: "20 vérifications SEO à faire avant de publier un site : indexabilité, canonical, titles, vitesse, données structurées. Avec comment vérifier chacune.",
      en: "20 SEO checks to run before publishing a site: indexability, canonicals, titles, speed, structured data — and how to verify each.",
    },
    intro: {
      fr: "Le SEO, ou référencement naturel, regroupe ce qui aide un site à apparaître dans les résultats non payants des moteurs de recherche. La plupart des problèmes viennent d'une erreur de configuration à la mise en ligne, comme un noindex oublié ou un canonical qui pointe ailleurs. Cette checklist SEO est classée par gravité ; chaque point indique comment le vérifier soi-même.",
      en: "Most search visibility problems come not from a lack of optimisation but from a configuration error that slipped through at launch. This list is ordered by severity, and each point says how to check it yourself.",
    },
    sections: [
      {
        id: "bloquants",
        title: {
          fr: "Les cinq points bloquants — à vérifier en premier",
          en: "The five blockers — check these first",
        },
        paragraphs: {
          fr: [
            "Si l'un de ces cinq points est défaillant, tout le reste est sans effet. Ce sont eux qui expliquent l'écrasante majorité des sites qui « ne sortent pas sur Google » malgré un contenu correct.",
            "Le plus insidieux est le premier. Une balise noindex laissée en place après une phase de préproduction rend le site totalement invisible, sans qu'aucune alerte ne le signale. Vérifiez-le le jour de la mise en ligne, puis une semaine plus tard.",
            "Pour approfondir, sur developers.google.com : « Bloquer l'indexation dans la recherche avec \"noindex\" » et « Présentation du fichier robots.txt et guide ». Voir aussi « Redirections et recherche Google » et « Spécifier une URL canonique avec rel=\"canonical\" et d'autres méthodes ».",
          ],
          en: [
            "If any of these five fails, everything else is pointless. They explain the vast majority of sites that never appear on Google despite decent content.",
            "The most insidious is the first: a noindex tag left in place after staging makes the site entirely invisible, with no warning.",
          ],
        },
        bullets: {
          fr: [
            "Aucune balise noindex résiduelle. Vérifiez le code source de plusieurs pages et l'en-tête HTTP X-Robots-Tag, qui n'apparaît pas dans le HTML.",
            "Le robots.txt n'interdit rien d'essentiel. Consultez votredomaine.fr/robots.txt : un Disallow: / oublié bloque l'ensemble du site.",
            "Une seule version du domaine répond. Testez avec et sans www, en http et en https : trois des quatre doivent rediriger vers la quatrième, en 301 ou 308 permanent, jamais en 302 ou 307.",
            "Les balises canonical pointent vers l'adresse réellement servie. Un canonical qui désigne une URL qui redirige envoie un signal contradictoire à Google.",
            "Le site est accessible en HTTPS avec un certificat valide, et aucune ressource n'est chargée en HTTP.",
          ],
          en: [
            "No leftover noindex tag. Check the source of several pages and the X-Robots-Tag HTTP header.",
            "robots.txt blocks nothing essential.",
            "Only one version of the domain answers; the others redirect permanently.",
            "Canonical tags point to the URL actually served.",
            "The site is served over HTTPS with a valid certificate.",
          ],
        },
      },
      {
        id: "structure",
        title: {
          fr: "Structure et contenu — six points",
          en: "Structure and content — six points",
        },
        paragraphs: {
          fr: [
            "Une fois le site accessible, ces vérifications déterminent la façon dont il sera compris et présenté dans les résultats. Elles se contrôlent page par page, en commençant par les pages qui comptent commercialement.",
            "L'unicité est le fil conducteur : deux pages qui partagent le même title sont deux pages que Google traitera comme des doublons, et il en choisira une seule.",
          ],
          en: [
            "Once the site is reachable, these determine how it is understood and displayed. Check page by page, starting with the commercially important ones.",
            "Uniqueness is the common thread.",
          ],
        },
        bullets: {
          fr: [
            "Chaque page a un title unique, sous 60 caractères, contenant le terme sur lequel elle vise à être trouvée.",
            "Chaque page a une meta description unique, sous 155 caractères. Elle n'influence pas le classement mais détermine le taux de clic.",
            "Une seule balise h1 par page, et elle décrit le contenu réel plutôt que le nom de la marque.",
            "La hiérarchie des titres ne saute pas de niveau : pas de h3 directement sous un h1.",
            "Chaque image porte un attribut alt descriptif, ou un alt vide si elle est purement décorative.",
            "Aucune information essentielle — tarifs, carte, horaires — n'est enfermée dans une image ou un PDF.",
          ],
          en: [
            "Each page has a unique title under 60 characters.",
            "Each page has a unique meta description under 155 characters.",
            "One h1 per page, describing the actual content.",
            "Heading levels do not skip.",
            "Every image has a descriptive alt, or an empty alt if decorative.",
            "No essential information locked inside an image or PDF.",
          ],
        },
      },
      {
        id: "technique",
        title: {
          fr: "Technique et exploration — cinq points",
          en: "Technical and crawling — five points",
        },
        paragraphs: {
          fr: [
            "Ces points conditionnent la capacité de Google à découvrir vos pages et la vitesse à laquelle il le fera. Ils comptent particulièrement pour un site neuf, qui ne bénéficie d'aucun historique.",
            "Un point mérite une attention particulière : un sitemap n'est utile que s'il est exact. Un sitemap contenant des adresses qui redirigent ou renvoient une erreur est traité comme défaillant, et Google finit par cesser de le consulter.",
            "Pour approfondir, sur developers.google.com : « Créer et envoyer un sitemap » et « Bonnes pratiques de SEO concernant les liens pour Google ». Voir aussi « Effet des codes d'état HTTP sur les robots d'exploration Google ».",
          ],
          en: [
            "These determine Google's ability to discover your pages and how fast it does so.",
            "A sitemap is only useful if it is accurate. One containing redirecting or erroring URLs is treated as faulty.",
          ],
        },
        bullets: {
          fr: [
            "Le sitemap.xml existe, ne contient que des adresses répondant en 200, et toutes dans la version canonique du domaine.",
            "Le sitemap est déclaré dans le robots.txt et soumis dans la Search Console.",
            "Chaque page indexable reçoit au moins un lien depuis une autre page du site. Une page présente au sitemap mais sans lien entrant est une page orpheline.",
            "Les liens internes sont de véritables balises <a href>. Un bouton qui navigue en JavaScript est invisible pour les moteurs.",
            "Les pages inexistantes renvoient un vrai code 404, et non une page d'accueil déguisée en erreur.",
          ],
          en: [
            "sitemap.xml exists, contains only URLs returning 200, all on the canonical domain.",
            "The sitemap is declared in robots.txt and submitted in Search Console.",
            "Every indexable page has at least one internal link.",
            "Internal links are real <a href> tags.",
            "Missing pages return a genuine 404.",
          ],
        },
      },
      {
        id: "performance",
        title: {
          fr: "Performance et données structurées — quatre points",
          en: "Performance and structured data — four points",
        },
        paragraphs: {
          fr: [
            "La vitesse influence le classement, mais surtout le taux d'abandon : un visiteur qui attend trop repart avant d'avoir vu la page. Les données structurées, elles, n'améliorent pas directement la position, mais conditionnent l'affichage enrichi dans les résultats.",
            "Une précision utile : les Core Web Vitals se mesurent sur des visiteurs réels. Un site neuf n'en a pas encore, et n'apparaîtra donc dans aucun rapport terrain avant plusieurs semaines de trafic. Les outils de laboratoire donnent une indication, pas une mesure.",
            "Pour approfondir, sur developers.google.com : « Comprendre les signaux Web essentiels et les résultats de recherche Google ». Voir aussi « Présentation du fonctionnement du balisage de données structurées » et « À propos de PageSpeed Insights ».",
          ],
          en: [
            "Speed affects ranking, but above all bounce rate. Structured data does not directly improve position but enables rich results.",
            "Core Web Vitals are measured on real visitors. A new site has none yet.",
          ],
        },
        bullets: {
          fr: [
            "Les images sont servies dans un format moderne, dimensionnées, et celle qui s'affiche en premier est chargée en priorité.",
            "Les pages sont mises en cache lorsque leur contenu le permet. Un no-store sur une page statique impose un calcul serveur à chaque visite.",
            "Un balisage de données structurées décrit l'organisation, et les articles portent une date de publication et un auteur.",
            "Une image de partage social est définie, et les balises Open Graph pointent vers des URL absolues.",
          ],
          en: [
            "Images use a modern format, are sized, and the first-displayed one is prioritised.",
            "Pages are cached where content allows.",
            "Structured data describes the organisation; articles carry a publication date and author.",
            "A social sharing image is defined with absolute URLs.",
          ],
        },
      },
      {
        id: "outils",
        title: {
          fr: "Les outils pour vérifier, tous gratuits",
          en: "The tools to check with, all free",
        },
        paragraphs: {
          fr: [
            "Aucune de ces vérifications ne demande d'abonnement à un outil payant. Les quatre suivants suffisent à couvrir l'intégralité de la liste, et ce sont ceux qu'utilisent les professionnels pour l'essentiel du travail quotidien.",
            "La Search Console de Google est la source de vérité sur l'indexation : elle seule indique quelles pages sont réellement indexées et pourquoi les autres ne le sont pas. Son outil d'inspection d'URL permet de voir une page telle que Google la reçoit, ce qu'aucun autre outil ne peut faire.",
            "Le code source de la page, accessible d'un clic droit dans n'importe quel navigateur, permet de contrôler les balises title, description, canonical et les données structurées. C'est l'outil le plus simple et le plus sous-utilisé.",
            "Le test des résultats enrichis de Google valide les données structurées et signale les propriétés manquantes. Enfin, PageSpeed Insights donne une indication de performance, en gardant à l'esprit que ses scores de laboratoire ne sont pas des Core Web Vitals réels.",
            "Une dernière méthode, très efficace et souvent oubliée : consultez votre site dans une fenêtre de navigation privée, sur un téléphone, avec une connexion mobile. Beaucoup de problèmes visibles pour un visiteur ne le sont pas depuis un poste de développement.",
            "Pour approfondir, sur support.google.com : « Outil d'inspection d'URL » (Aide de la Search Console).",
          ],
          en: [
            "None of these checks requires a paid tool. Four free ones cover the entire list.",
            "Google Search Console is the source of truth on indexing.",
            "The page source, one right-click away, lets you check title, description, canonical and structured data.",
            "The Rich Results Test validates structured data; PageSpeed Insights gives a performance indication.",
            "One last method, often forgotten: view your site in a private window, on a phone, on mobile data.",
          ],
        },
      },
      {
        id: "apres",
        title: {
          fr: "Après la mise en ligne",
          en: "After launch",
        },
        paragraphs: {
          fr: [
            "La checklist ne s'arrête pas à la publication. Deux gestes conditionnent votre capacité à savoir si le site fonctionne, et à corriger vite s'il ne fonctionne pas.",
            "Le premier est d'ouvrir un compte Search Console et d'y soumettre le sitemap le jour même. C'est le seul endroit où vous verrez ce que Google a réellement indexé, et les motifs pour lesquels il a écarté certaines pages.",
            "Le second est de définir ce qui compte comme conversion — un envoi de formulaire, un appel — et de le mesurer dès le premier jour. Les outils d'analyse n'appliquent pas les conversions rétroactivement : chaque semaine sans suivi est une semaine de données perdue définitivement.",
            "Enfin, s'il s'agit d'une refonte et non d'un site neuf, vérifiez une dernière fois que chaque ancienne adresse redirige vers son équivalent. C'est la première cause de chute de trafic après une migration, et la plus simple à éviter.",
            "Pour savoir comment se déroule la mise en ligne chez Sitekept, lisez [comment se passe la livraison d'un site web](/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept).",
          ],
          en: [
            "The checklist does not end at publication.",
            "Open a Search Console account and submit the sitemap the same day.",
            "Define what counts as a conversion and measure it from day one. Analytics tools do not apply conversions retroactively.",
            "If this is a redesign, check one last time that every old URL redirects to its equivalent.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Un site livré avec ces points déjà en place",
      en: "A website delivered with these already in place",
    },
    ctaDescription: {
      fr: "Chaque site que nous livrons part avec ces vérifications faites : structure, canonical, sitemap, données structurées et performance. Ce que nous ne promettons pas, c'est une position — personne ne la contrôle.",
      en: "Every site we deliver ships with these checks done. What we do not promise is a ranking position — nobody controls that.",
    },
    sources: [
      {
        title: "Bloquer l'indexation dans la recherche avec \"noindex\"",
        url: "https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=fr",
      },
      {
        title: "Présentation du fichier robots.txt et guide",
        url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=fr",
      },
      {
        title: "Redirections et recherche Google",
        url: "https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=fr",
      },
      {
        title: "Spécifier une URL canonique avec rel=\"canonical\" et d'autres méthodes",
        url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=fr",
      },
      {
        title: "Créer et envoyer un sitemap",
        url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr",
      },
      {
        title: "Bonnes pratiques de SEO concernant les liens pour Google",
        url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr",
      },
      {
        title: "Effet des codes d'état HTTP sur les robots d'exploration Google",
        url: "https://developers.google.com/crawling/docs/troubleshooting/http-status-codes?hl=fr",
      },
      {
        title: "Comprendre les signaux Web essentiels et les résultats de recherche Google",
        url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=fr",
      },
      {
        title: "Présentation du fonctionnement du balisage de données structurées",
        url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=fr",
      },
      {
        title: "À propos de PageSpeed Insights",
        url: "https://developers.google.com/speed/docs/insights/v5/about?hl=fr",
      },
      {
        title: "Outil d'inspection d'URL",
        url: "https://support.google.com/webmasters/answer/9012289?hl=fr",
      },
    ],
  },
  {
    slug: "creer-une-fiche-google-entreprise",
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    author: "Équipe Sitekept",
    category: {
      fr: "Visibilité locale",
      en: "Local visibility",
    },
    title: {
      fr: "Comment créer une fiche Google Entreprise, pas à pas",
      en: "How to create a Google Business Profile, step by step",
    },
    excerpt: {
      fr: "Un guide pas à pas pour ajouter ou revendiquer votre fiche Google Entreprise, la valider et comprendre ce qui influence son affichage sur Maps.",
      en: "A step-by-step guide to adding or claiming your Google Business Profile, validating it and understanding what shapes its display on Maps.",
    },
    seoTitle: {
      fr: "Comment créer une fiche Google Entreprise | Sitekept",
      en: "How to create a Google Business Profile | Sitekept",
    },
    seoDescription: {
      fr: "Comment créer une fiche Google Entreprise : gratuité, ajout ou revendication, validation et critères d'affichage sur Maps. Un guide étape par étape.",
      en: "How to create a Google Business Profile: cost, adding or claiming, validation and what influences display on Maps. A simple step-by-step guide.",
    },
    intro: {
      fr: "Comment créer une fiche Google Entreprise sans être à l'aise avec le numérique ? Google précise que l'ajout se fait sans frais. Ce guide décrit les étapes, de la création à la validation, avec des exemples de commerces.",
      en: "Comment créer une fiche Google Entreprise sans être à l'aise avec le numérique ? Google précise que l'ajout se fait sans frais. Ce guide décrit les étapes, de la création à la validation, avec des exemples de commerces.",
    },
    sections: [
      {
        id: "quest-ce-quune-fiche",
        title: {
          fr: "Qu'est-ce qu'une fiche Google Entreprise ?",
          en: "Qu'est-ce qu'une fiche Google Entreprise ?",
        },
        paragraphs: {
          fr: [
            "C'est la page de votre commerce sur Google. Elle apparaît dans la Recherche et sur Google Maps, avec vos informations : adresse, horaires, photos, avis. Google l'appelle « fiche d'établissement » dans son aide, et vous contrôlez ce qu'elle affiche une fois qu'elle est ajoutée.",
            "Chaque métier s'en sert à sa façon. Une boulangerie y précise ses horaires, un salon de coiffure y montre ses photos. Un plombier y décrit ce qu'il fait.",
            "Google en tient compte quand un client cherche un établissement près de sa position. Les résultats de proximité s'affichent alors sur Maps et dans la recherche Google. C'est là que votre fiche peut apparaître.",
          ],
          en: [
            "C'est la page de votre commerce sur Google. Elle apparaît dans la Recherche et sur Google Maps, avec vos informations : adresse, horaires, photos, avis. Google l'appelle « fiche d'établissement » dans son aide, et vous contrôlez ce qu'elle affiche une fois qu'elle est ajoutée.",
            "Chaque métier s'en sert à sa façon. Une boulangerie y précise ses horaires, un salon de coiffure y montre ses photos. Un plombier y décrit ce qu'il fait.",
            "Google en tient compte quand un client cherche un établissement près de sa position. Les résultats de proximité s'affichent alors sur Maps et dans la recherche Google. C'est là que votre fiche peut apparaître.",
          ],
        },
      },
      {
        id: "gratuite-et-eligibilite",
        title: {
          fr: "La fiche est-elle gratuite, et qui peut en avoir une ?",
          en: "La fiche est-elle gratuite, et qui peut en avoir une ?",
        },
        paragraphs: {
          fr: [
            "Oui, elle est gratuite : Google précise qu'on peut ajouter ou revendiquer son établissement sans frais. Il faut toutefois y être éligible, selon des règles et des consignes sur les adresses que Google publie. Lisez-les avant de commencer, puis préparez l'adresse exacte de votre commerce.",
            "Google conseille d'indiquer l'adresse complète si votre établissement peut recevoir du public. Un salon de coiffure ou une boulangerie sont dans ce cas. Si vous vous déplacez chez vos clients, comme un plombier, relisez d'abord les règles d'éligibilité de Google.",
            "Lors de l'ajout, Google demande que l'adresse saisie soit correcte et qu'elle respecte ses consignes.",
          ],
          en: [
            "Oui, elle est gratuite : Google précise qu'on peut ajouter ou revendiquer son établissement sans frais. Il faut toutefois y être éligible, selon des règles et des consignes sur les adresses que Google publie. Lisez-les avant de commencer, puis préparez l'adresse exacte de votre commerce.",
            "Google conseille d'indiquer l'adresse complète si votre établissement peut recevoir du public. Un salon de coiffure ou une boulangerie sont dans ce cas. Si vous vous déplacez chez vos clients, comme un plombier, relisez d'abord les règles d'éligibilité de Google.",
            "Lors de l'ajout, Google demande que l'adresse saisie soit correcte et qu'elle respecte ses consignes.",
          ],
        },
      },
      {
        id: "creer-ou-revendiquer",
        title: {
          fr: "Comment créer ou revendiquer sa fiche ?",
          en: "Comment créer ou revendiquer sa fiche ?",
        },
        paragraphs: {
          fr: [
            "Il y a deux cas, selon que votre commerce a déjà une fiche ou non. Sans fiche, vous en ajoutez une depuis business.google.com/add ; si une fiche non validée existe déjà, vous la revendiquez depuis Google Maps. Dans les deux cas, vous choisissez ensuite une option de validation.",
            "Avant de choisir, vérifiez si une fiche existe déjà : cherchez le nom et la ville de votre commerce sur Google Maps.",
            "Pour revendiquer, ouvrez Google Maps sur ordinateur et cherchez le nom et la ville de votre établissement. Sélectionnez ensuite le bouton pour revendiquer l'établissement. Sur téléphone, passez par l'application Google Maps.",
            "Si une fiche validée existe déjà et que vous êtes autorisé à gérer l'établissement, demandez au propriétaire actuel de vous en transférer la propriété. Si Google propose un autre établissement que le vôtre, une option permet d'en choisir un autre.",
            "Avant de commencer, rassemblez ce que Google conseille de renseigner : l'adresse complète si vous recevez du public, vos horaires, votre type d'entreprise, des photos. Voici ensuite les étapes décrites par Google. Les libellés des boutons peuvent évoluer : fiez-vous à ce qui s'affiche à l'écran.",
          ],
          en: [
            "Il y a deux cas, selon que votre commerce a déjà une fiche ou non. Sans fiche, vous en ajoutez une depuis business.google.com/add ; si une fiche non validée existe déjà, vous la revendiquez depuis Google Maps. Dans les deux cas, vous choisissez ensuite une option de validation.",
            "Avant de choisir, vérifiez si une fiche existe déjà : cherchez le nom et la ville de votre commerce sur Google Maps.",
            "Pour revendiquer, ouvrez Google Maps sur ordinateur et cherchez le nom et la ville de votre établissement. Sélectionnez ensuite le bouton pour revendiquer l'établissement. Sur téléphone, passez par l'application Google Maps.",
            "Si une fiche validée existe déjà et que vous êtes autorisé à gérer l'établissement, demandez au propriétaire actuel de vous en transférer la propriété. Si Google propose un autre établissement que le vôtre, une option permet d'en choisir un autre.",
            "Avant de commencer, rassemblez ce que Google conseille de renseigner : l'adresse complète si vous recevez du public, vos horaires, votre type d'entreprise, des photos. Voici ensuite les étapes décrites par Google. Les libellés des boutons peuvent évoluer : fiez-vous à ce qui s'affiche à l'écran.",
          ],
        },
        bullets: {
          fr: [
            "Ouvrez la page business.google.com/add.",
            "Sélectionnez le bouton pour ajouter votre établissement sur Google.",
            "Renseignez les informations demandées, en suivant les instructions à l'écran.",
            "Choisissez une option de validation, puis suivez les étapes proposées.",
          ],
          en: [
            "Ouvrez la page business.google.com/add.",
            "Sélectionnez le bouton pour ajouter votre établissement sur Google.",
            "Renseignez les informations demandées, en suivant les instructions à l'écran.",
            "Choisissez une option de validation, puis suivez les étapes proposées.",
          ],
        },
      },
      {
        id: "valider-sa-fiche",
        title: {
          fr: "Pourquoi faut-il valider sa fiche ?",
          en: "Pourquoi faut-il valider sa fiche ?",
        },
        paragraphs: {
          fr: [
            "La validation indique à Google que vous êtes autorisé à représenter l'établissement. Google précise que cela augmente ses chances d'apparaître dans les résultats de recherche. Il écrit aussi que, une fois la fiche ajoutée et validée, les clients peuvent vous trouver dans la Recherche et sur Maps.",
            "Vous choisissez l'option de validation proposée à l'écran, puis vous suivez les étapes indiquées. Vérifiez l'adresse avant de choisir la validation : lors de l'ajout, Google demande qu'elle soit correcte et conforme à ses consignes.",
            "Une fois la fiche ajoutée ou revendiquée, vous contrôlez ce qu'elle affiche : horaires, photos, catégorie d'activité. Google conseille aussi de répondre aux avis, pour montrer que vous accordez de l'importance aux commentaires de vos clients.",
          ],
          en: [
            "La validation indique à Google que vous êtes autorisé à représenter l'établissement. Google précise que cela augmente ses chances d'apparaître dans les résultats de recherche. Il écrit aussi que, une fois la fiche ajoutée et validée, les clients peuvent vous trouver dans la Recherche et sur Maps.",
            "Vous choisissez l'option de validation proposée à l'écran, puis vous suivez les étapes indiquées. Vérifiez l'adresse avant de choisir la validation : lors de l'ajout, Google demande qu'elle soit correcte et conforme à ses consignes.",
            "Une fois la fiche ajoutée ou revendiquée, vous contrôlez ce qu'elle affiche : horaires, photos, catégorie d'activité. Google conseille aussi de répondre aux avis, pour montrer que vous accordez de l'importance aux commentaires de vos clients.",
          ],
        },
      },
      {
        id: "affichage-sur-maps",
        title: {
          fr: "Qu'est-ce qui influence l'affichage sur Google Maps ?",
          en: "Qu'est-ce qui influence l'affichage sur Google Maps ?",
        },
        paragraphs: {
          fr: [
            "Google indique que les résultats à proximité reposent surtout sur trois critères : la pertinence, la distance et la popularité de l'établissement. Il précise qu'il n'existe aucun moyen d'obtenir une meilleure place sur demande ou contre rémunération. Il garde par ailleurs les détails de son algorithme confidentiels.",
            "Vous ne maîtrisez pas la distance, mais vous maîtrisez vos informations. Google écrit que les établissements aux informations complètes et exactes ont plus de chances d'apparaître dans les résultats à proximité. Il conseille aussi d'ajouter des photos et des vidéos, pour montrer ce que vous proposez et raconter l'histoire de votre entreprise.",
            "Pour être plus visible sur Google Maps, il reste donc à soigner vos informations. Voici ce que chaque critère signifie, d'après son aide.",
          ],
          en: [
            "Google indique que les résultats à proximité reposent surtout sur trois critères : la pertinence, la distance et la popularité de l'établissement. Il précise qu'il n'existe aucun moyen d'obtenir une meilleure place sur demande ou contre rémunération. Il garde par ailleurs les détails de son algorithme confidentiels.",
            "Vous ne maîtrisez pas la distance, mais vous maîtrisez vos informations. Google écrit que les établissements aux informations complètes et exactes ont plus de chances d'apparaître dans les résultats à proximité. Il conseille aussi d'ajouter des photos et des vidéos, pour montrer ce que vous proposez et raconter l'histoire de votre entreprise.",
            "Pour être plus visible sur Google Maps, il reste donc à soigner vos informations. Voici ce que chaque critère signifie, d'après son aide.",
          ],
        },
        bullets: {
          fr: [
            "La pertinence : dans quelle mesure votre fiche correspond à la recherche. Des informations complètes et détaillées aident Google à mieux comprendre votre établissement.",
            "La distance : l'éloignement entre votre établissement et la personne qui cherche. Si elle ne partage pas sa position, Google utilise les informations dont il dispose.",
            "La proéminence, c'est-à-dire la notoriété : Google cite le nombre d'avis reçus et le nombre de sites Web qui renvoient vers votre établissement.",
          ],
          en: [
            "La pertinence : dans quelle mesure votre fiche correspond à la recherche. Des informations complètes et détaillées aident Google à mieux comprendre votre établissement.",
            "La distance : l'éloignement entre votre établissement et la personne qui cherche. Si elle ne partage pas sa position, Google utilise les informations dont il dispose.",
            "La proéminence, c'est-à-dire la notoriété : Google cite le nombre d'avis reçus et le nombre de sites Web qui renvoient vers votre établissement.",
          ],
        },
      },
      {
        id: "fiche-ou-site",
        title: {
          fr: "Une fiche suffit-elle, ou faut-il aussi un site ?",
          en: "Une fiche suffit-elle, ou faut-il aussi un site ?",
        },
        paragraphs: {
          fr: [
            "Une fiche est un bon point de départ, mais elle ne remplace pas un site. Elle s'affiche dans le cadre défini par Google. Un site est une page à vous, où vous présentez votre activité, vos services et votre équipe comme vous le souhaitez.",
            "Les deux se complètent. Un site vous sert aussi ailleurs que sur Google : sur une carte de visite, dans un message ou sur vos réseaux.",
            "Pour voir à quoi peut ressembler un site, consultez nos pages pour un [salon de coiffure](/site-internet-salon-de-coiffure), un [plombier](/site-internet-plombier) ou une [boulangerie](/site-internet-boulangerie). Si vous tenez un salon, lisez aussi [salon de coiffure sans site internet](/blog/salon-de-coiffure-sans-site-internet).",
            "Pour aller plus loin sur la visibilité en ligne, découvrez notre page sur le [référencement SEO et GEO](/seo-geo) et l'article sur l'[optimisation SEO et GEO](/blog/site-optimise-seo-geo). En résumé, voici l'ordre à suivre.",
          ],
          en: [
            "Une fiche est un bon point de départ, mais elle ne remplace pas un site. Elle s'affiche dans le cadre défini par Google. Un site est une page à vous, où vous présentez votre activité, vos services et votre équipe comme vous le souhaitez.",
            "Les deux se complètent. Un site vous sert aussi ailleurs que sur Google : sur une carte de visite, dans un message ou sur vos réseaux.",
            "Pour voir à quoi peut ressembler un site, consultez nos pages pour un [salon de coiffure](/site-internet-salon-de-coiffure), un [plombier](/site-internet-plombier) ou une [boulangerie](/site-internet-boulangerie). Si vous tenez un salon, lisez aussi [salon de coiffure sans site internet](/blog/salon-de-coiffure-sans-site-internet).",
            "Pour aller plus loin sur la visibilité en ligne, découvrez notre page sur le [référencement SEO et GEO](/seo-geo) et l'article sur l'[optimisation SEO et GEO](/blog/site-optimise-seo-geo). En résumé, voici l'ordre à suivre.",
          ],
        },
        bullets: {
          fr: [
            "Créez ou revendiquez votre fiche, sans frais.",
            "Validez-la, puis renseignez des informations complètes et exactes.",
            "Répondez aux avis de vos clients.",
            "Ajoutez un site quand vous voulez présenter votre activité plus en détail.",
          ],
          en: [
            "Créez ou revendiquez votre fiche, sans frais.",
            "Validez-la, puis renseignez des informations complètes et exactes.",
            "Répondez aux avis de vos clients.",
            "Ajoutez un site quand vous voulez présenter votre activité plus en détail.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site qui complète votre fiche Google ?",
      en: "Want a website that complements your Google profile?",
    },
    ctaDescription: {
      fr: "Nous créons un site sur mesure pour votre activité. Il vous appartient, comme votre enseigne.",
      en: "We build a website tailored to your business. It belongs to you, like your shop sign.",
    },
    sources: [
      {
        title: "Ajouter ou revendiquer votre fiche d'établissement",
        url: "https://support.google.com/business/answer/2911778?hl=fr",
      },
      {
        title: "Conseils pour améliorer votre classement local sur Google",
        url: "https://support.google.com/business/answer/7091?hl=fr",
      },
    ],
  },
  {
    slug: "salon-de-coiffure-sans-site-internet",
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    author: "Équipe Sitekept",
    category: {
      fr: "Salon de coiffure",
      en: "Hair salon",
    },
    title: {
      fr: "Salon de coiffure sans site internet : que faire concrètement ?",
      en: "Hair salon without a website: what to do in practice",
    },
    excerpt: {
      fr: "Peut-on tenir un salon de coiffure sans site internet ? Ce que la fiche Google couvre, le lien de rendez-vous, et le moment où un site devient utile.",
      en: "Can you run a hair salon without a website? What a Google profile covers, the booking link, and when a website becomes useful.",
    },
    seoTitle: {
      fr: "Salon de coiffure sans site internet : conseils | Sitekept",
      en: "Hair salon without a website | Sitekept",
    },
    seoDescription: {
      fr: "Salon de coiffure sans site internet : ce que couvre la fiche Google, les infos à rendre faciles à trouver, le lien de rendez-vous et quand un site aide.",
      en: "Hair salon without a website: what a Google profile covers, which details to make easy to find, the booking link and when a website helps.",
    },
    intro: {
      fr: "Un salon de coiffure sans site internet est-il un problème ? Pas forcément : on peut démarrer avec une fiche Google, à condition de savoir ce qu'elle couvre. Voici quoi renseigner, et quand un site devient utile.",
      en: "Un salon de coiffure sans site internet est-il un problème ? Pas forcément : on peut démarrer avec une fiche Google, à condition de savoir ce qu'elle couvre. Voici quoi renseigner, et quand un site devient utile.",
    },
    sections: [
      {
        id: "tenir-un-salon-sans-site",
        title: {
          fr: "Peut-on tenir un salon de coiffure sans site internet ?",
          en: "Peut-on tenir un salon de coiffure sans site internet ?",
        },
        paragraphs: {
          fr: [
            "Oui, vous pouvez démarrer sans site. Quand un client cherche un établissement près de lui, Google affiche des résultats à proximité sur Maps et dans la Recherche. Votre fiche Google Entreprise, gratuite, peut s'y afficher, mais elle ne remplace pas un site.",
            "Tout dépend alors de ce que vos clients y trouvent : informations, photos, avis. Soignez-les.",
            "Votre première priorité est donc la fiche. Google précise qu'elle s'ajoute sans frais, et qu'on peut revendiquer une fiche existante non validée. Nous détaillons les étapes dans l'article [comment créer une fiche Google Entreprise](/blog/creer-une-fiche-google-entreprise).",
          ],
          en: [
            "Oui, vous pouvez démarrer sans site. Quand un client cherche un établissement près de lui, Google affiche des résultats à proximité sur Maps et dans la Recherche. Votre fiche Google Entreprise, gratuite, peut s'y afficher, mais elle ne remplace pas un site.",
            "Tout dépend alors de ce que vos clients y trouvent : informations, photos, avis. Soignez-les.",
            "Votre première priorité est donc la fiche. Google précise qu'elle s'ajoute sans frais, et qu'on peut revendiquer une fiche existante non validée. Nous détaillons les étapes dans l'article [comment créer une fiche Google Entreprise](/blog/creer-une-fiche-google-entreprise).",
          ],
        },
      },
      {
        id: "informations-a-rendre-faciles-a-trouver",
        title: {
          fr: "Quelles informations rendre faciles à trouver ?",
          en: "Quelles informations rendre faciles à trouver ?",
        },
        paragraphs: {
          fr: [
            "Un client veut savoir où vous êtes, quand vous ouvrez et à quoi ressemble votre salon. Google conseille de renseigner l'adresse complète, les horaires, le type d'entreprise, des photos et des détails pratiques. Les établissements aux informations complètes et exactes ont plus de chances d'apparaître dans les résultats à proximité.",
            "Si ces informations changent, mettez-les à jour. Google écrit qu'une information inexacte peut empêcher l'affichage de la fiche. Pensez surtout à vos horaires de vacances.",
            "Répondez aussi aux avis : Google le conseille, pour montrer que vous accordez de l'importance aux commentaires de vos clients.",
          ],
          en: [
            "Un client veut savoir où vous êtes, quand vous ouvrez et à quoi ressemble votre salon. Google conseille de renseigner l'adresse complète, les horaires, le type d'entreprise, des photos et des détails pratiques. Les établissements aux informations complètes et exactes ont plus de chances d'apparaître dans les résultats à proximité.",
            "Si ces informations changent, mettez-les à jour. Google écrit qu'une information inexacte peut empêcher l'affichage de la fiche. Pensez surtout à vos horaires de vacances.",
            "Répondez aussi aux avis : Google le conseille, pour montrer que vous accordez de l'importance aux commentaires de vos clients.",
          ],
        },
        bullets: {
          fr: [
            "L'adresse complète, puisqu'un salon reçoit du public.",
            "Les horaires d'ouverture, y compris les horaires exceptionnels.",
            "Le type d'entreprise, c'est-à-dire votre catégorie d'activité.",
            "Des photos et des vidéos, pour montrer ce que vous proposez.",
            "Des détails pratiques, comme l'accès Wi-Fi ou le parking.",
          ],
          en: [
            "L'adresse complète, puisqu'un salon reçoit du public.",
            "Les horaires d'ouverture, y compris les horaires exceptionnels.",
            "Le type d'entreprise, c'est-à-dire votre catégorie d'activité.",
            "Des photos et des vidéos, pour montrer ce que vous proposez.",
            "Des détails pratiques, comme l'accès Wi-Fi ou le parking.",
          ],
        },
      },
      {
        id: "rendez-vous-sans-site",
        title: {
          fr: "Comment faire prendre rendez-vous sans site ?",
          en: "Comment faire prendre rendez-vous sans site ?",
        },
        paragraphs: {
          fr: [
            "Google permet d'ajouter à votre fiche un lien de prise de rendez-vous, vers l'adresse web de votre choix. Vous pouvez en ajouter jusqu'à 10 pour cette catégorie, et en définir un comme lien préféré. Il suppose que vous ayez une page de réservation en ligne.",
            "Si vous prenez les rendez-vous par téléphone, gardez simplement un numéro auquel vous répondez. Pour le lien en ligne, Google décrit ce chemin. Les libellés peuvent changer d'un écran à l'autre.",
            "Vérifiez aussi ce que votre fiche affiche déjà. Des liens vers des services partenaires peuvent apparaître automatiquement. Google explique comment les faire retirer : pour une réservation, il faut passer par le prestataire.",
          ],
          en: [
            "Google permet d'ajouter à votre fiche un lien de prise de rendez-vous, vers l'adresse web de votre choix. Vous pouvez en ajouter jusqu'à 10 pour cette catégorie, et en définir un comme lien préféré. Il suppose que vous ayez une page de réservation en ligne.",
            "Si vous prenez les rendez-vous par téléphone, gardez simplement un numéro auquel vous répondez. Pour le lien en ligne, Google décrit ce chemin. Les libellés peuvent changer d'un écran à l'autre.",
            "Vérifiez aussi ce que votre fiche affiche déjà. Des liens vers des services partenaires peuvent apparaître automatiquement. Google explique comment les faire retirer : pour une réservation, il faut passer par le prestataire.",
          ],
        },
        bullets: {
          fr: [
            "Dans la Recherche Google, ouvrez votre fiche et sélectionnez le bouton de réservation.",
            "Dans Google Maps, passez par l'option de modification du profil de l'établissement, puis choisissez le type de transaction.",
            "Sélectionnez l'option pour ajouter un lien, saisissez l'adresse web et enregistrez.",
          ],
          en: [
            "Dans la Recherche Google, ouvrez votre fiche et sélectionnez le bouton de réservation.",
            "Dans Google Maps, passez par l'option de modification du profil de l'établissement, puis choisissez le type de transaction.",
            "Sélectionnez l'option pour ajouter un lien, saisissez l'adresse web et enregistrez.",
          ],
        },
      },
      {
        id: "ce-que-fait-la-fiche",
        title: {
          fr: "Que peut faire la fiche Google à elle seule ?",
          en: "Que peut faire la fiche Google à elle seule ?",
        },
        paragraphs: {
          fr: [
            "Elle présente votre salon dans la Recherche et sur Maps, avec vos horaires, vos photos et vos avis. Elle peut aussi porter un lien de rendez-vous, et vous y répondez aux avis de vos clients. Elle reste toutefois présentée dans le cadre de Google : vous ne composez pas votre propre page.",
            "Une fois la fiche ajoutée ou revendiquée, vous contrôlez la façon dont les informations de votre salon s'affichent sur Google.",
            "Ne comptez pas sur elle pour tout. Google rappelle qu'aucune place ne s'obtient sur demande ou contre rémunération dans le classement local.",
            "Les écrans de Google évoluent. Si un bouton n'a pas le nom indiqué ici, cherchez l'option équivalente.",
          ],
          en: [
            "Elle présente votre salon dans la Recherche et sur Maps, avec vos horaires, vos photos et vos avis. Elle peut aussi porter un lien de rendez-vous, et vous y répondez aux avis de vos clients. Elle reste toutefois présentée dans le cadre de Google : vous ne composez pas votre propre page.",
            "Une fois la fiche ajoutée ou revendiquée, vous contrôlez la façon dont les informations de votre salon s'affichent sur Google.",
            "Ne comptez pas sur elle pour tout. Google rappelle qu'aucune place ne s'obtient sur demande ou contre rémunération dans le classement local.",
            "Les écrans de Google évoluent. Si un bouton n'a pas le nom indiqué ici, cherchez l'option équivalente.",
          ],
        },
      },
      {
        id: "quand-un-site-devient-utile",
        title: {
          fr: "Quand un site devient-il utile pour un salon ?",
          en: "Quand un site devient-il utile pour un salon ?",
        },
        paragraphs: {
          fr: [
            "Un site devient utile quand vos clients veulent en savoir plus que ce que la fiche montre : vos prestations, votre équipe, votre façon de travailler. Il l'est aussi si vous voulez une adresse à vous, à partager sur vos cartes et vos réseaux. Vous décidez alors du contenu.",
            "Un site n'est pas une obligation : c'est un outil de plus, qui vous appartient. Quand vous serez prêt, découvrez le [site internet pour salon de coiffure](/site-internet-salon-de-coiffure) créé sur mesure pour vous.",
            "Les [templates](/templates) sont des démonstrations pour vous projeter, pas le site livré. Pour le coût, consultez notre page de [tarifs](/tarifs).",
          ],
          en: [
            "Un site devient utile quand vos clients veulent en savoir plus que ce que la fiche montre : vos prestations, votre équipe, votre façon de travailler. Il l'est aussi si vous voulez une adresse à vous, à partager sur vos cartes et vos réseaux. Vous décidez alors du contenu.",
            "Un site n'est pas une obligation : c'est un outil de plus, qui vous appartient. Quand vous serez prêt, découvrez le [site internet pour salon de coiffure](/site-internet-salon-de-coiffure) créé sur mesure pour vous.",
            "Les [templates](/templates) sont des démonstrations pour vous projeter, pas le site livré. Pour le coût, consultez notre page de [tarifs](/tarifs).",
          ],
        },
      },
      {
        id: "relier-site-et-reservation",
        title: {
          fr: "Comment relier un futur site à votre outil de réservation ?",
          en: "Comment relier un futur site à votre outil de réservation ?",
        },
        paragraphs: {
          fr: [
            "Gardez un seul outil de réservation et un seul lien. Une fois votre site en ligne, ajoutez le même lien sur le site et sur la fiche Google. Google accepte l'adresse web de votre choix, ce qui permet au client d'arriver au même endroit, depuis Maps ou depuis votre site.",
            "Le lien peut pointer vers l'outil de réservation que vous utilisez déjà. Notez son adresse web dès maintenant : elle servira pour la fiche, puis pour le site. Si vous changez un jour d'outil, pensez à mettre à jour la fiche et le site en même temps.",
          ],
          en: [
            "Gardez un seul outil de réservation et un seul lien. Une fois votre site en ligne, ajoutez le même lien sur le site et sur la fiche Google. Google accepte l'adresse web de votre choix, ce qui permet au client d'arriver au même endroit, depuis Maps ou depuis votre site.",
            "Le lien peut pointer vers l'outil de réservation que vous utilisez déjà. Notez son adresse web dès maintenant : elle servira pour la fiche, puis pour le site. Si vous changez un jour d'outil, pensez à mettre à jour la fiche et le site en même temps.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site pour votre salon, le moment venu ?",
      en: "Want a website for your salon, when the time comes?",
    },
    ctaDescription: {
      fr: "Nous créons un site sur mesure pour votre salon, avec un lien de rendez-vous bien visible. Il vous appartient, comme votre enseigne.",
      en: "We build a tailored website for your salon, with a clearly visible booking link. It belongs to you, like your shop sign.",
    },
    sources: [
      {
        title: "Gérer les liens de votre établissement local",
        url: "https://support.google.com/business/answer/6218037?hl=fr",
      },
      {
        title: "Conseils pour améliorer votre classement local sur Google",
        url: "https://support.google.com/business/answer/7091?hl=fr",
      },
      {
        title: "Ajouter ou revendiquer votre fiche d'établissement",
        url: "https://support.google.com/business/answer/2911778?hl=fr",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
