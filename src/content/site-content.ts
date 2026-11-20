export type SiteLocale = "fr" | "en";

export type LocalizedText = Record<SiteLocale, string>;

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
  /** Slug français, servi sous /blog/{slug}. Sert aussi de clé aux liens. */
  slug: string;
  /** Slug anglais, servi sous /en/blog/{enSlug}. */
  enSlug: string;
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
      fr: "Le site web pour tous en 48 heures.",
      en: "The website for everyone in 48 hours.",
    },
    title: {
      fr: "Création de site internet pour PME et artisans, livré en 48h et 100 % à vous.",
      en: "Website design for small businesses and tradespeople, delivered in 48 hours and 100% yours.",
    },
    description: {
      fr: "Vous gardez la propriété complète, nous gérons le déploiement, le domaine est offert la première année.",
      en: "You keep full ownership, we handle deployment, and the domain name is free for the first year.",
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
        "À partir de 500\u00a0€",
        "Aucun abonnement imposé",
        "100\u00a0% propriétaire du site",
        "Domaine offert 1 an",
      ],
      en: [
        "From €500",
        "No mandatory subscription",
        "You own 100% of your website",
        "Domain name free for 1 year",
      ],
    },
  },
  trustStrip: {
    fr: [
      "À partir de 500\u00a0€",
      "Mise en ligne en 48h",
      "100\u00a0% à vous",
      "Déploiement inclus",
    ],
    en: [
      "From €500",
      "Launch in 48 hours",
      "100% yours",
      "Deployment included",
    ],
  },
  offerSection: {
    eyebrow: {
      fr: "Ce que vous obtenez",
      en: "What you get",
    },
    title: {
      fr: "Une offre simple à acheter, simple à comprendre et simple à posséder.",
      en: "An offer that is easy to buy, easy to understand and easy to own.",
    },
    description: {
      fr: "Chaque projet est structuré pour retirer les zones grises commerciales : vous savez ce qui est inclus, ce que vous possédez et comment le site est mis en ligne.",
      en: "Every project is structured to remove commercial gray areas: you know what is included, what you own and how the website goes live.",
    },
  },
  whySection: {
    eyebrow: {
      fr: "Pourquoi Sitekept",
      en: "Why Sitekept",
    },
    title: {
      fr: "La rapidité compte, mais la clarté commerciale et la propriété comptent tout autant.",
      en: "Speed matters, but commercial clarity and ownership matter just as much.",
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
      fr: "Un site pensé pour être compris, indexé et recommandé.",
      en: "A website designed to be understood, indexed, and recommended.",
    },
    description: {
      fr: "Chez Sitekept, l’optimisation ne s’arrête pas au design. Nous construisons le site avec un code lisible, des contenus structurés pour répondre naturellement aux recherches de l’IA, une sitemap claire pour guider l’exploration des pages, et une base propre pour favoriser l’indexation sur Google.",
      en: "At Sitekept, optimization goes beyond design. We build the website with readable code, content structured to answer AI searches naturally, a clear sitemap that guides the crawling of your pages, and a clean foundation that supports Google indexing.",
    },
    explanation: {
      fr: "Le SEO correspond au référencement naturel sur les moteurs comme Google. Le GEO désigne la façon dont un site reste exploitable dans les réponses générées par l’IA. Pour une entreprise, les deux se complètent : l’un améliore la visibilité dans les résultats, l’autre aide votre activité à apparaître dans les réponses et recommandations que les prospects consultent de plus en plus. Pour aller plus loin, notre blog détaille ces sujets simplement.",
      en: "SEO is organic search visibility on engines like Google. GEO is how well a website stays usable in AI-generated answers. For a business, the two complement each other: one improves visibility in search results, the other helps your business appear in the answers and recommendations that prospects increasingly turn to. To go further, our blog covers both topics in plain terms.",
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
      fr: "Un process court pour des clients qui ne veulent pas gérer la technique.",
      en: "A short process for clients who don't want to deal with the technical side.",
    },
    description: {
      fr: "Vous choisissez une direction, nous nous occupons du cadre technique, du design final et de la mise en ligne.",
      en: "You pick a direction; we handle the technical setup, the final design and the launch.",
    },
    ownershipParagraph: {
      fr: "Chaque site est développé en interne, puis livré dans un cadre qui vous laisse réellement la main. Nous créons un compte GitHub à votre nom pour y pousser le projet, un compte Vercel ou une plateforme similaire pour le déploiement, ainsi qu’un compte Hostinger ou équivalent pour l’achat du nom de domaine, pris en charge la première année. Toute la structure, du code au déploiement, reste claire pour qu’un futur développeur puisse reprendre le site facilement si vous changez de prestataire.",
      en: "Each website is built in-house, then delivered in a setup that genuinely leaves you in control. We create a GitHub account in your name to hold the project, a Vercel account or similar platform for deployment, and a Hostinger account or equivalent to purchase the domain name, which we cover for the first year. The whole structure, from code to deployment, stays clear so that a future developer can easily take over the website if you switch providers.",
    },
    linkLabel: {
      fr: "En lire plus sur notre blog",
      en: "Read more on our blog",
    },
  },
  templatesSection: {
    eyebrow: {
      fr: "Templates sélectionnés",
      en: "Selected templates",
    },
    title: {
      fr: "Choisissez une base claire et nous l'adaptons à votre activité.",
      en: "Choose a clear starting point and we adapt it to your business.",
    },
    description: {
      fr: "Chaque template est une base de lancement : structure, design, rythme de page et contenus de conversion déjà pensés.",
      en: "Each template is a launch pad: structure, design, page rhythm and conversion-focused content are already worked out.",
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
      fr: "Vous devez comprendre l'offre avant de la comparer. Voici les points qui rassurent le plus souvent nos clients.",
      en: "You should understand the offer before you compare it. These are the points that most often reassure our clients.",
    },
  },
};

export const offerHighlights: OfferHighlight[] = [
  {
    id: "entry-price",
    icon: "badgeEuro",
    copy: {
      fr: {
        title: "À partir de 500\u00a0€",
        description:
          "Un prix d'entrée public, lisible et sans abonnement à ajouter pour exister en ligne.",
      },
      en: {
        title: "From €500",
        description:
          "A public, clear entry price, with no subscription to add on just to exist online.",
      },
    },
  },
  {
    id: "launch-time",
    icon: "clock3",
    copy: {
      fr: {
        title: "Mise en ligne en 48h",
        description:
          "Un cadre court pour les projets simples, avec une promesse de rapidité comprise dès le premier contact.",
      },
      en: {
        title: "Launch in 48 hours",
        description:
          "A short timeframe for simple projects, with a promise of speed that is understood from the first contact.",
      },
    },
  },
  {
    id: "ownership",
    icon: "shieldCheck",
    copy: {
      fr: {
        title: "Vous possédez 100\u00a0% du site",
        description:
          "Le client garde le contrôle de son site, de ses contenus et de sa mise en ligne finale.",
      },
      en: {
        title: "You own 100% of the website",
        description:
          "The client keeps control of their website, its content and its final launch.",
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
          "Vous achetez un site, pas une dépendance. Le modèle est simple et assumé.",
      },
      en: {
        title: "No forced subscription",
        description:
          "You buy a website, not a dependency. The model is simple and openly stated.",
      },
    },
  },
  {
    id: "deployment",
    icon: "globe",
    copy: {
      fr: {
        title: "Déploiement inclus",
        description:
          "Nous gérons la mise en ligne, le domaine, le SSL et le cadre technique sans vous laisser seul.",
      },
      en: {
        title: "Deployment included",
        description:
          "We handle the launch, the domain name, SSL and the technical setup, so you are never left on your own.",
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
        title: "No technical work to manage",
        description:
          "You approve the content and the look. We take care of the technical side from start to launch.",
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
          "Le prix d'entrée, le délai, la propriété et l'absence d'abonnement sont clairs dès la première lecture.",
      },
      en: {
        title: "An offer that explains itself quickly",
        description:
          "The entry price, the timeline, ownership and the absence of a subscription are clear from the first read.",
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
          "Le site vous appartient. Sitekept ne construit pas un tunnel pour vous garder captif après la livraison.",
      },
      en: {
        title: "Ownership is not up for negotiation",
        description:
          "The website belongs to you. Sitekept doesn't build a funnel designed to keep you captive after delivery.",
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
        title: "Visibility built in from the start",
        description:
          "SEO and GEO are built into the page structure, the message and the speed, not added at the end.",
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
          "Nous vendons une solution simple à acheter pour des PME et indépendants qui veulent un site utile, pas une stack.",
      },
      en: {
        title: "Plain, non-technical language",
        description:
          "We sell a solution that is simple to buy, for small businesses and freelancers who want a useful website, not a tech stack.",
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
          "Activité, objectif, style préféré, template ou direction sur mesure : on verrouille rapidement le bon point de départ.",
      },
      en: {
        title: "You give us the brief",
        description:
          "Business, goal, preferred style, template or custom direction: we quickly lock in the right starting point.",
      },
    },
  },
  {
    id: "build",
    copy: {
      fr: {
        title: "Nous adaptons et produisons",
        description:
          "Sitekept prépare la structure, le design, les contenus essentiels et l'ensemble technique pour que le site soit prêt à être validé.",
      },
      en: {
        title: "We adapt and build",
        description:
          "Sitekept prepares the structure, design, essential content and the whole technical setup so the website is ready for your approval.",
      },
    },
  },
  {
    id: "review",
    copy: {
      fr: {
        title: "Vous validez, nous ajustons",
        description:
          "Vous corrigez les derniers détails, nous appliquons les ajustements et nous verrouillons les points de conversion.",
      },
      en: {
        title: "You review, we adjust",
        description:
          "You flag the final details, we apply the adjustments and we lock down the conversion points.",
      },
    },
  },
  {
    id: "launch",
    copy: {
      fr: {
        title: "Nous mettons en ligne",
        description:
          "Déploiement, domaine, performance et remise du site : vous repartez avec une présence en ligne claire et exploitable.",
      },
      en: {
        title: "We launch it",
        description:
          "Deployment, domain name, performance and handover: you leave with a clear, usable online presence.",
      },
    },
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "subscription",
    question: {
      fr: "Est-ce qu'il y a un abonnement obligatoire ?",
      en: "Is a subscription mandatory?",
    },
    answer: {
      fr: "Non. L'offre est pensée pour vendre un site, pas une dépendance. Les frais incompressibles comme l'hébergement ou le domaine peuvent exister selon le contexte, mais Sitekept n'impose pas un abonnement mensuel pour conserver votre site.",
      en: "No. The offer is designed to sell a website, not a dependency. Unavoidable costs such as hosting or the domain name may apply depending on the context, but Sitekept doesn't require a monthly subscription to keep your website.",
    },
  },
  {
    id: "ownership",
    question: {
      fr: "Est-ce que je possède vraiment le site ?",
      en: "Do I really own the website?",
    },
    answer: {
      fr: "Oui. Le site, sa structure et ses contenus vous appartiennent. Nous livrons un actif que vous pouvez garder, faire évoluer et reprendre sans blocage artificiel.",
      en: "Yes. The website, its structure and its content belong to you. We deliver an asset you can keep, develop further and take over without any artificial roadblocks.",
    },
  },
  {
    id: "launch",
    question: {
      fr: "Qui gère la mise en ligne ?",
      en: "Who handles the launch?",
    },
    answer: {
      fr: "Sitekept gère le déploiement, la configuration du domaine et la mise en ligne. Le but est que vous n'ayez pas à manipuler la partie technique.",
      en: "Sitekept handles deployment, domain name configuration and the launch. The goal is that you never have to deal with the technical side.",
    },
  },
  {
    id: "domain",
    question: {
      fr: "Le nom de domaine est-il inclus ?",
      en: "Is the domain included?",
    },
    answer: {
      fr: "Oui, le nom de domaine est offert pendant la première année sur l'offre d'entrée. Nous cadrons ensuite avec vous le renouvellement et la gestion future.",
      en: "Yes, the domain name is free for the first year with the entry offer. We then work out renewal and future management with you.",
    },
  },
  {
    id: "timing",
    question: {
      fr: "Combien de temps faut-il pour être en ligne ?",
      en: "How long does it take to go live?",
    },
    answer: {
      fr: "Pour les projets qui entrent dans le cadre de l'offre, la promesse commerciale reste une mise en ligne en 48h. Si le besoin dépasse ce cadre, nous vous l'annonçons avant de démarrer.",
      en: "For projects that fit within the offer, the commercial promise remains a 48-hour launch. If your needs go beyond that scope, we tell you before we start.",
    },
  },
  {
    id: "seo-geo",
    question: {
      fr: "Le site est-il vraiment pensé pour la visibilité SEO et GEO ?",
      en: "Is the website really designed for SEO and GEO visibility?",
    },
    answer: {
      fr: "Oui. Nous structurons les pages pour charger vite, être claires pour Google et rester faciles à citer dans les interfaces IA. Le SEO et le GEO sont des bénéfices intégrés à l'offre, pas une option ajoutée ensuite.",
      en: "Yes. We structure pages to load fast, be clear to Google and stay easy to cite in AI interfaces. SEO and GEO are benefits built into the offer, not an option added afterward.",
    },
  },
];

export const templatesPageCopy: ListingPageCopy = {
  eyebrow: {
    fr: "Galerie publique",
    en: "Public gallery",
  },
  title: {
    fr: "Templates prêts à adapter à votre activité.",
    en: "Templates ready to adapt to your business.",
  },
  description: {
    fr: "Cette sélection publique vous donne plusieurs points de départ. Vous choisissez un style, nous adaptons les contenus, les sections, le ton et les détails commerciaux à votre activité.",
    en: "This public selection gives you several starting points. You choose a style, and we adapt the content, sections, tone and commercial details to your business.",
  },
};

export const blogPageCopy: ListingPageCopy = {
  eyebrow: {
    fr: "Ressources Sitekept",
    en: "Sitekept resources",
  },
  title: {
    fr: "Des pages utiles pour comprendre l'offre avant d'acheter.",
    en: "Helpful pages to understand the offer before you buy.",
  },
  description: {
    fr: "Le blog Sitekept sert d'abord à expliquer notre positionnement : rapidité, clarté commerciale, propriété du site et visibilité SEO/GEO.",
    en: "The Sitekept blog is first and foremost here to explain our positioning: speed, commercial clarity, website ownership and SEO/GEO visibility.",
  },
};

export const seoGeoPageContent: SeoGeoPageContent = {
  eyebrow: {
    fr: "SEO + GEO",
    en: "SEO + GEO",
  },
  title: {
    fr: "Comprendre le référencement naturel et ce qu’un site doit faire pour rester visible.",
    en: "Understand SEO and what a website must do to stay visible.",
  },
  intro: {
    fr: "Le référencement naturel reste une base essentielle dès qu’un site doit être trouvé au bon moment. Pour une PME, un indépendant ou une activité locale, un site n’a de valeur que s’il est compréhensible par Google, accessible à l’indexation et assez clair pour répondre à une intention de recherche réelle.",
    en: "SEO remains an essential foundation whenever a website needs to be found at the right moment. For a small business, a freelancer or a local business, a website is only worth something if Google can understand it, index it and match it to a real search intent.",
  },
  importanceTitle: {
    fr: "Pourquoi le référencement naturel reste décisif",
    en: "Why SEO is still decisive",
  },
  importanceParagraphs: {
    fr: [
      "Un bon référencement naturel permet à votre activité d’apparaître quand un prospect formule déjà un besoin. Cette visibilité est précieuse parce qu’elle ne dépend pas uniquement d’une campagne payante ou d’une publication ponctuelle : elle s’appuie sur la structure du site, la qualité des pages et la clarté de l’information proposée.",
      "Dans la pratique, cela signifie qu’un site bien pensé continue de travailler pour vous après sa mise en ligne. Il peut renforcer votre crédibilité, capter des recherches qualifiées et donner à Google des signaux cohérents sur votre activité, vos services et vos pages clés.",
    ],
    en: [
      "Good SEO lets your business show up when a prospect is already voicing a need. This visibility is valuable because it doesn't depend solely on a paid campaign or a one-off post: it rests on the structure of the website, the quality of its pages and the clarity of the information you provide.",
      "In practice, this means a well-designed website keeps working for you after launch. It can strengthen your credibility, capture qualified searches and give Google consistent signals about your business, your services and your key pages.",
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
      "Un site réellement optimisé repose sur plusieurs éléments qui se renforcent entre eux : des pages utiles, une hiérarchie claire, des titres compréhensibles, des contenus rédigés pour répondre à de vraies questions, un maillage interne logique et une base technique propre. Une sitemap bien tenue et des pages indexables aident ensuite Google à explorer le site plus proprement.",
      "Aujourd’hui, cette logique sert aussi les interfaces IA. Quand un contenu est clair, bien structuré, contextuel et appuyé par des signaux cohérents, il devient plus facile à reprendre dans des réponses générées, des aperçus enrichis ou des recommandations. C’est là que SEO et GEO se rejoignent concrètement.",
    ],
    en: [
      "A truly optimized website rests on several elements that reinforce each other: useful pages, a clear hierarchy, understandable headings, content written to answer real questions, logical internal linking and a clean technical foundation. A well-maintained sitemap and indexable pages then help Google crawl the website more cleanly.",
      "Today, this same logic also serves AI interfaces. When content is clear, well structured, contextual and backed by consistent signals, it becomes easier to pick up in generated answers, rich previews or recommendations. That is where SEO and GEO concretely meet.",
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
    enSlug: "fast-website-for-small-businesses",
    publishedAt: "2026-04-03",
    updatedAt: "2026-08-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Lancement rapide",
      en: "Fast launch",
    },
    title: {
      fr: "Pourquoi un site rapide à lancer compte autant pour une PME ou un indépendant",
      en: "Why a website that launches fast matters so much for a small business or freelancer",
    },
    excerpt: {
      fr: "Un bon site n'est pas seulement beau. Il doit être en ligne vite, cadrer votre offre et commencer à travailler commercialement sans délais inutiles.",
      en: "A good website isn't just good-looking. It has to go live quickly, frame your offer and start working commercially without needless delay.",
    },
    seoTitle: {
      fr: "Site web rapide à lancer pour PME et indépendant | Sitekept",
      en: "Fast-launch website for small businesses and freelancers | Sitekept",
    },
    seoDescription: {
      fr: "Pourquoi la rapidité de mise en ligne change la rentabilité d'un site pour une PME ou un indépendant, et comment Sitekept structure cette promesse.",
      en: "Why speed to launch changes how profitable a website is for a small business or freelancer, and how Sitekept structures that promise.",
    },
    intro: {
      fr: "Quand une PME ou un indépendant achète un site, le vrai coût ne se limite pas à la facture. Il y a aussi le temps perdu quand le projet traîne, les ventes qui n'arrivent pas et l'image qui reste floue trop longtemps.",
      en: "When a small business or freelancer buys a website, the real cost isn't limited to the invoice. There is also the time lost when the project drags on, the sales that don't come in and the brand image that stays blurry for too long.",
    },
    sections: [
      {
        id: "speed-is-commercial",
        title: {
          fr: "La vitesse est d'abord un argument commercial",
          en: "Speed is first and foremost a sales argument",
        },
        paragraphs: {
          fr: [
            "Un site qui sort vite permet de clarifier une offre, de lancer des campagnes, d'envoyer un lien propre après un rendez-vous et d'arrêter de bricoler sa présence en ligne.",
            "Pour beaucoup de petites structures, attendre plusieurs semaines revient surtout à continuer sans support de vente clair. La rapidité crée un levier commercial immédiat.",
          ],
          en: [
            "A website that goes live quickly lets you clarify an offer, launch campaigns, send a clean link after a meeting and stop patching together your online presence.",
            "For many small businesses, waiting several weeks mostly means carrying on without a clear sales tool. Speed creates immediate commercial leverage.",
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
          ],
          en: [
            "Speed becomes credible when the framework is clear: a simple offer, fewer decisions, a prepared design base and a short approval process.",
            "That is exactly what a Sitekept offer is about: moving fast on what matters without dragging you into a heavy project or an endless redesign.",
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
            "essential content identified",
            "technical setup already handled",
            "approval focused on what matters",
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
          fr: [
            "Vous achetez du temps récupéré, une offre mieux présentée, un support de prospection plus propre et un meilleur contrôle de votre image.",
            "Si le site est bien structuré dès le départ, il devient aussi une base solide pour le SEO, le GEO et les futures itérations commerciales.",
          ],
          en: [
            "You buy back time, a better-presented offer, a cleaner prospecting tool and better control over your image.",
            "If the website is well structured from the start, it also becomes a solid foundation for SEO, GEO and future commercial iterations.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site rapide sans zone grise commerciale ?",
      en: "Want a fast website without commercial gray zones?",
    },
    ctaDescription: {
      fr: "Parlez-nous de votre activité. Nous vous dirons vite si votre projet entre dans le cadre de l'offre 48h.",
      en: "Tell us about your business. We'll quickly tell you whether your project fits within the 48-hour offer.",
    },
  },
  {
    slug: "posseder-son-site-sans-abonnement",
    enSlug: "own-your-website-without-a-subscription",
    publishedAt: "2026-04-03",
    updatedAt: "2026-08-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Propriété du site",
      en: "Website ownership",
    },
    title: {
      fr: "Pourquoi posséder 100\u00a0% de son site sans abonnement change la relation avec son prestataire",
      en: "Why owning 100% of your website with no subscription changes your relationship with your provider",
    },
    excerpt: {
      fr: "Un site peut être un actif ou une dépendance. La différence se joue souvent dans le contrat, la livraison et le niveau de contrôle que garde le client.",
      en: "A website can be an asset or a dependency. The difference often comes down to the contract, the delivery and how much control the client keeps.",
    },
    seoTitle: {
      fr: "Posséder son site sans abonnement | Sitekept",
      en: "Own your website without a subscription | Sitekept",
    },
    seoDescription: {
      fr: "Pourquoi la propriété complète du site et l'absence d'abonnement imposée sont des avantages commerciaux, budgétaires et opérationnels.",
      en: "Why full website ownership and no mandatory subscription are commercial, budgetary and operational advantages.",
    },
    intro: {
      fr: "Beaucoup d'entreprises pensent acheter un site alors qu'elles achètent en réalité un accès conditionnel à un site. Quand la propriété reste floue, la relation avec le prestataire devient plus fragile et plus coûteuse.",
      en: "Many businesses think they are buying a website when they are really buying conditional access to one. When ownership stays unclear, the relationship with the provider becomes more fragile and more expensive.",
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
            "When you truly own your website, you keep the freedom to develop the project further, switch providers or take it back into your own hands later.",
            "Conversely, a model where everything goes through an opaque subscription creates friction with every change, however small.",
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
            "Ownership isn't just a matter of principle. It changes your budget, your negotiating power and your long-term peace of mind.",
            "A client who owns their website can invest in acquisition, content or product development without fearing a full restart for contractual reasons.",
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
            "a higher lasting value for the website as an asset",
          ],
        },
      },
      {
        id: "sitekept-position",
        title: {
          fr: "La position Sitekept sur ce point",
          en: "Sitekept's position on this",
        },
        paragraphs: {
          fr: [
            "Nous assumons une logique simple : vous achetez un site, pas un verrou. L'absence d'abonnement imposé et la pleine propriété font partie de l'offre, pas d'une option premium.",
            "C'est aussi ce qui rend l'offre plus facile à acheter pour des clients non techniques : ils comprennent ce qu'ils paient et ce qu'ils récupèrent.",
          ],
          en: [
            "We keep it simple: you buy a website, not a lock. No mandatory subscription and outright ownership are part of the offer, not a premium option.",
            "That also makes the offer easier to buy for non-technical clients: they understand what they pay for and what they get back.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site utile sans rester captif d'un abonnement ?",
      en: "Want a useful website without being stuck with a subscription?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer une offre simple, rapide et livrée comme un vrai actif pour votre entreprise.",
      en: "We can set up a simple, fast offer, delivered as a real asset for your business.",
    },
  },
  {
    slug: "site-optimise-seo-geo",
    enSlug: "seo-geo-optimized-website",
    publishedAt: "2026-04-03",
    updatedAt: "2026-08-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Visibilité",
      en: "Visibility",
    },
    title: {
      fr: "Ce qu'un site optimisé SEO et GEO doit faire pour rester visible sur Google et dans les interfaces IA",
      en: "What an SEO- and GEO-optimized website needs to do to stay visible on Google and in AI interfaces",
    },
    excerpt: {
      fr: "La visibilité moderne ne se limite plus au SEO classique. Les interfaces IA reprennent, résument et recommandent des contenus. Le site doit être lisible pour les deux mondes.",
      en: "Modern visibility is no longer limited to classic SEO. AI interfaces pick up, summarize and recommend content. A website needs to be readable for both worlds.",
    },
    seoTitle: {
      fr: "Site optimisé SEO et GEO : le guide | Sitekept",
      en: "SEO- and GEO-optimized website: the guide | Sitekept",
    },
    seoDescription: {
      fr: "Comment penser un site visible à la fois pour Google et pour les interfaces IA : structure, vitesse, clarté et signaux de confiance.",
      en: "How to design a website that is visible to both Google and AI interfaces: structure, speed, clarity and trust signals.",
    },
    intro: {
      fr: "Le SEO reste essentiel, mais il ne suffit plus à expliquer toute la visibilité. De plus en plus d'utilisateurs découvrent des entreprises via des réponses générées par IA, des aperçus enrichis ou des assistants qui reformulent l'information.",
      en: "SEO remains essential, but it no longer explains all of visibility. More and more users discover businesses through AI-generated answers, rich previews or assistants that rephrase information.",
    },
    sections: [
      {
        id: "structure-first",
        title: {
          fr: "Une structure claire reste la base commune",
          en: "A clear structure remains the common foundation",
        },
        paragraphs: {
          fr: [
            "Pour Google comme pour les interfaces IA, un site doit annoncer clairement son offre, son public, sa promesse et ses preuves de confiance. C'est ce qui rend l'information exploitable et facile à citer.",
            "Une page rapide, bien hiérarchisée et sémantiquement propre aide autant le moteur classique que les systèmes qui résument vos contenus.",
          ],
          en: [
            "For Google and AI interfaces alike, a website must clearly state its offer, its audience, its promise and its proof of trust. That is what makes the information usable and easy to cite.",
            "A fast, well-structured, semantically clean page helps traditional search engines as much as the systems that summarize your content.",
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
            "A visible website shouldn't only talk about technology. It needs to say clearly what is being sold, to whom, at what entry point and with what guarantees. That is also what lets AI interfaces pick up a reliable answer.",
            "The clearer the offer, the more easily it can be rephrased without losing its meaning. That is a real GEO advantage.",
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
            "content that is easy to cite",
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
          ],
          en: [
            "We build visibility into the website's structure from the start: speed, clear sections, concise copy, trust signals and pages that support acquisition.",
            "SEO and GEO do not replace the commercial promise. They amplify it when the website is already clear, fast and credible.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site plus facile à trouver et à recommander ?",
      en: "Want a website that is easier to find and easier to recommend?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer une home et des pages piliers qui parlent à la fois aux humains, à Google et aux interfaces IA.",
      en: "We can structure a home page and cornerstone pages that speak to people, to Google and to AI interfaces all at once.",
    },
  },
  {
    slug: "qu-est-ce-que-le-seo-et-le-geo",
    enSlug: "what-are-seo-and-geo",
    publishedAt: "2026-04-05",
    updatedAt: "2026-08-11",
    author: "Équipe Sitekept",
    category: {
      fr: "SEO + GEO",
      en: "SEO + GEO",
    },
    title: {
      fr: "Qu’est-ce que le SEO et le GEO ?",
      en: "What are SEO and GEO?",
    },
    excerpt: {
      fr: "SEO et GEO poursuivent le même objectif : rendre un site plus facile à trouver et à comprendre, que la recherche passe par Google ou par une interface IA.",
      en: "SEO and GEO pursue the same goal: making a website easier to find and understand, whether search goes through Google or an AI interface.",
    },
    seoTitle: {
      fr: "Qu’est-ce que le SEO et le GEO ? | Sitekept",
      en: "What are SEO and GEO? | Sitekept",
    },
    seoDescription: {
      fr: "Une explication simple du SEO et du GEO pour comprendre comment un site peut rester visible sur Google et dans les réponses générées par l’IA.",
      en: "A simple explanation of SEO and GEO to understand how a website can stay visible on Google and in AI-generated answers.",
    },
    intro: {
      fr: "Quand on parle de visibilité en ligne, beaucoup d’entreprises pensent d’abord à Google. C’est logique. Mais les usages évoluent : une partie des recherches passe désormais par des aperçus générés, des assistants conversationnels ou des interfaces IA qui reformulent les résultats. Pour rester visible dans ce contexte, il faut comprendre deux notions complémentaires : le SEO et le GEO.",
      en: "When people talk about online visibility, many businesses think of Google first. That makes sense. But habits are changing: some searches now go through generated overviews, conversational assistants or AI interfaces that rephrase results. To stay visible in this context, you need to understand two complementary concepts: SEO and GEO.",
    },
    sections: [
      {
        id: "seo-definition",
        title: {
          fr: "Le SEO : être bien compris par les moteurs de recherche",
          en: "SEO: being well understood by search engines",
        },
        paragraphs: {
          fr: [
            "Le SEO, ou référencement naturel, désigne tout ce qui aide un site à apparaître dans les résultats non payants des moteurs de recherche. Cela repose sur des pages utiles, une structure claire, des titres compréhensibles, un bon maillage interne, une indexation correcte et une base technique saine.",
            "En pratique, le SEO permet à votre activité d’être trouvée quand un prospect exprime déjà un besoin. C’est ce qui transforme un site en outil commercial plutôt qu’en simple présence en ligne.",
          ],
          en: [
            "SEO, short for search engine optimization, covers everything that helps a website appear in the unpaid results of search engines. It relies on useful pages, a clear structure, understandable titles, good internal linking, proper indexing and a sound technical foundation.",
            "In practice, SEO lets your business be found when a prospect is already voicing a need. That is what turns a website into a sales tool rather than a mere online presence.",
          ],
        },
      },
      {
        id: "geo-definition",
        title: {
          fr: "Le GEO : rester exploitable dans les réponses générées par l’IA",
          en: "GEO: staying usable in AI-generated answers",
        },
        paragraphs: {
          fr: [
            "Le terme GEO est souvent utilisé pour parler de la capacité d’un site à rester clair, fiable et réutilisable dans les réponses générées par l’IA. Ici, l’enjeu n’est pas seulement d’apparaître sur une page de résultats, mais aussi d’être suffisamment compréhensible pour qu’une interface IA puisse s’appuyer sur votre contenu ou recommander votre activité.",
            "Cela suppose un contenu précis, des réponses naturelles aux questions fréquentes, des signaux de confiance visibles, ainsi qu’une structure qui aide les systèmes à identifier qui vous êtes, ce que vous proposez et pourquoi cela peut être utile à l’utilisateur.",
          ],
          en: [
            "The term GEO is often used to describe a website's ability to stay clear, reliable and reusable in AI-generated answers. Here the aim isn't just to appear on a results page, but also to be understandable enough for an AI interface to draw on your content or recommend your business.",
            "That requires precise content, natural answers to common questions, visible trust signals and a structure that helps systems identify who you are, what you offer and why it can be useful to the user.",
          ],
        },
      },
      {
        id: "how-they-work-together",
        title: {
          fr: "Pourquoi ils se complètent au lieu de s’opposer",
          en: "Why they complement rather than compete with each other",
        },
        paragraphs: {
          fr: [
            "Le SEO et le GEO reposent sur une base commune : un site clair, utile, rapide et indexable. Un contenu bien structuré aide Google à classer vos pages, mais il aide aussi les interfaces IA à reformuler correctement votre offre.",
            "Autrement dit, le GEO ne remplace pas le SEO. Il prolonge sa logique dans de nouveaux usages. Pour une entreprise, la bonne approche consiste donc à construire un site qui répond clairement à des questions humaines, tout en restant lisible pour les moteurs et les systèmes génératifs.",
          ],
          en: [
            "SEO and GEO rest on a shared foundation: a website that is clear, useful, fast and indexable. Well-structured content helps Google rank your pages, but it also helps AI interfaces restate your offer accurately.",
            "In other words, GEO doesn't replace SEO. It extends its logic into new ways of searching. For a business, the right approach is therefore to build a website that clearly answers human questions while staying readable for search engines and generative systems.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site pensé pour Google et pour les interfaces IA ?",
      en: "Want a website built for Google and for AI interfaces?",
    },
    ctaDescription: {
      fr: "Nous pouvons structurer vos pages pour qu’elles restent utiles à la fois pour la recherche classique et pour les réponses générées.",
      en: "We can structure your pages so they stay useful for both traditional search and generated answers.",
    },
  },
  {
    slug: "site-sans-referencement-peut-devenir-inutile",
    enSlug: "website-without-seo-can-become-useless",
    publishedAt: "2026-04-05",
    updatedAt: "2026-08-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Visibilité",
      en: "Visibility",
    },
    title: {
      fr: "Un site sans référencement peut s’avérer inutile : une vitrine que personne ne voit, c’est comme si elle n’existait pas",
      en: "A website with no SEO can prove useless: a storefront nobody sees might as well not exist",
    },
    excerpt: {
      fr: "Un site peut être propre et bien conçu, mais s’il n’est jamais trouvé, il ne joue pas son rôle commercial. La visibilité fait partie de son utilité réelle.",
      en: "A website can be clean and well designed, but if it is never found, it isn't doing its commercial job. Visibility is part of what makes it truly useful.",
    },
    seoTitle: {
      fr: "Site sans référencement : pourquoi il devient inutile",
      en: "Website with no SEO: why it becomes useless",
    },
    seoDescription: {
      fr: "Pourquoi un site qui n’est pas trouvé sur Google ou dans les réponses IA peut échouer commercialement, même s’il est bien présenté.",
      en: "Why a website that can't be found on Google or in AI answers can fail commercially, even if it is well presented.",
    },
    intro: {
      fr: "Un site web n’est pas seulement un objet de présentation. Il doit aider à être trouvé, rassurer au bon moment et faciliter la prise de contact. Quand il manque de visibilité, il perd une partie essentielle de sa valeur. Une vitrine invisible ne soutient ni les ventes, ni la notoriété, ni la crédibilité d’une entreprise.",
      en: "A website isn't just a showcase item. It should help people find you, reassure them at the right moment and make it easy to get in touch. When it lacks visibility, it loses an essential part of its value. An invisible storefront supports neither sales, nor awareness, nor a business's credibility.",
    },
    sections: [
      {
        id: "beautiful-is-not-enough",
        title: {
          fr: "Un beau site ne suffit pas à créer de la demande",
          en: "A beautiful website isn't enough to create demand",
        },
        paragraphs: {
          fr: [
            "Beaucoup d’entreprises investissent d’abord dans l’apparence du site. C’est important, mais ce n’est pas suffisant. Si le site ne répond pas à des recherches précises, s’il n’est pas correctement indexé ou s’il ne donne pas des signaux clairs sur l’activité, il restera peu visible.",
            "Le problème n’est donc pas seulement esthétique. Il est fonctionnel. Un site n’est utile que s’il peut être découvert par les bonnes personnes au bon moment.",
          ],
          en: [
            "Many businesses invest first in how the website looks. That is important, but it isn't enough. If the website doesn't answer specific searches, isn't properly indexed or doesn't send clear signals about the business, it will remain barely visible.",
            "So the problem isn't just aesthetic. It is functional. A website is only useful if the right people can discover it at the right moment.",
          ],
        },
      },
      {
        id: "local-business-cases",
        title: {
          fr: "Pour une activité locale, la visibilité est souvent la vraie différence",
          en: "For a local business, visibility is often what makes the real difference",
        },
        paragraphs: {
          fr: [
            "Prenons des cas simples : un avocat, un dentiste, un restaurant ou un artisan local. Les prospects ne cherchent pas seulement un nom de marque. Ils cherchent un service, un besoin, une spécialité ou une zone géographique. Si votre site ne se positionne pas sur ces demandes, il laisse toute la place à des concurrents pourtant parfois moins convaincants.",
            "Dans ces contextes, le référencement naturel ne sert pas à “faire du trafic” au sens abstrait. Il sert à capter des personnes déjà proches d’une décision ou d’une prise de contact.",
          ],
          en: [
            "Take simple cases: a lawyer, a dentist, a restaurant or a local tradesperson. Prospects aren't only looking for a brand name. They are looking for a service, a need, a specialty or an area. If your website doesn't show up for those searches, it leaves the field open to competitors who are sometimes less convincing.",
            "In these contexts, SEO isn't about “generating traffic” in the abstract. It is about reaching people who are already close to making a decision or getting in touch.",
          ],
        },
      },
      {
        id: "visibility-is-utility",
        title: {
          fr: "La visibilité fait partie de l’utilité du site",
          en: "Visibility is part of a website's usefulness",
        },
        paragraphs: {
          fr: [
            "Quand on évalue un site, il faut donc regarder plus loin que le rendu visuel. Est-il clair pour Google ? Répond-il à des recherches naturelles ? Est-il assez lisible pour être repris dans des réponses IA ? Est-ce qu’il aide réellement un prospect à comprendre l’offre et à agir ?",
            "C’est pour cette raison que Sitekept traite la visibilité comme une composante du site lui-même, pas comme une couche optionnelle à ajouter plus tard. Un site qui n’est pas vu reste incomplet, même s’il est bien dessiné.",
          ],
          en: [
            "When evaluating a website, you therefore need to look beyond how it looks. Is it clear to Google? Does it answer natural searches? Is it readable enough to be picked up in AI answers? Does it really help a prospect understand the offer and take action?",
            "That is why Sitekept treats visibility as a component of the website itself, not an optional layer to add later. A website nobody sees stays incomplete, even if it is well designed.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site qui ne reste pas invisible après sa mise en ligne ?",
      en: "Want a website that doesn't stay invisible after launch?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer un site clair, utile et pensé pour être trouvé par les bonnes recherches.",
      en: "We can set up a website that is clear, useful and built to be found through the right searches.",
    },
  },
  {
    slug: "pourquoi-optimisation-referencement-naturel-importante",
    enSlug: "why-seo-optimization-matters",
    publishedAt: "2026-04-05",
    updatedAt: "2026-08-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Référencement naturel",
      en: "Organic SEO",
    },
    title: {
      fr: "Pourquoi l’optimisation au référencement naturel est importante et ce qu’elle apporte réellement",
      en: "Why optimizing your website for SEO matters and what it really delivers",
    },
    excerpt: {
      fr: "Le référencement naturel n’est pas un supplément technique. C’est ce qui permet à un site d’attirer une audience qualifiée, de rester crédible et de continuer à être trouvé dans le temps.",
      en: "SEO isn't a technical extra. It is what lets a website attract a qualified audience, stay credible and keep being found over time.",
    },
    seoTitle: {
      fr: "Pourquoi le référencement naturel est important | Sitekept",
      en: "Why SEO matters | Sitekept",
    },
    seoDescription: {
      fr: "Visibilité, trafic qualifié, crédibilité, présence durable : voici ce que le référencement naturel apporte réellement à un site web.",
      en: "Visibility, qualified traffic, credibility, lasting presence: here is what SEO really brings to a website.",
    },
    intro: {
      fr: "Le référencement naturel est parfois résumé à une affaire de mots-clés. C’est une vision trop courte. En réalité, il s’agit surtout de rendre un site trouvable, compréhensible et crédible pour des prospects qui cherchent déjà une réponse. C’est cette capacité qui lui donne une vraie valeur commerciale dans le temps.",
      en: "SEO is sometimes boiled down to a matter of keywords. That is too narrow a view. In reality, it is mostly about making a website findable, understandable and credible to prospects who are already looking for an answer. That ability is what gives it real commercial value over time.",
    },
    sections: [
      {
        id: "qualified-visibility",
        title: {
          fr: "Le premier bénéfice : une visibilité plus qualifiée",
          en: "The first benefit: more qualified visibility",
        },
        paragraphs: {
          fr: [
            "Le référencement naturel aide votre site à apparaître face à des personnes qui formulent déjà un besoin. On ne parle donc pas d’une audience vague ou distraite, mais de visiteurs potentiellement plus pertinents pour votre activité.",
            "Pour une PME ou un indépendant, cela change beaucoup de choses : les visites ont plus de sens, les prises de contact sont mieux alignées avec l’offre et le site devient un vrai support commercial.",
          ],
          en: [
            "SEO helps your website show up in front of people who are already voicing a need. We are not talking about a vague or distracted audience, but about visitors who are potentially more relevant to your business.",
            "For a small business or freelancer, that changes a lot: visits are more meaningful, contact requests line up better with the offer and the website becomes a real sales tool.",
          ],
        },
      },
      {
        id: "credibility-and-trust",
        title: {
          fr: "Le deuxième bénéfice : de la crédibilité et de la confiance",
          en: "The second benefit: credibility and trust",
        },
        paragraphs: {
          fr: [
            "Un site bien référencé n’est pas seulement mieux exposé. Il paraît aussi plus crédible, parce qu’il répond mieux aux attentes de recherche, structure clairement son information et montre des pages utiles sur ses services, ses expertises ou ses réponses aux questions fréquentes.",
            "Cette crédibilité est essentielle, en particulier pour les services où la décision se prend avec un niveau élevé de confiance : santé, droit, immobilier, artisanat spécialisé ou services B2B.",
          ],
          en: [
            "A well-ranked website isn't just more exposed. It also looks more credible, because it better meets search expectations, structures its information clearly and shows useful pages about its services, expertise or answers to common questions.",
            "This credibility is essential, particularly for services where the decision is made with a high level of trust: healthcare, law, real estate, specialized trades or B2B services.",
          ],
        },
      },
      {
        id: "long-term-discoverability",
        title: {
          fr: "Le troisième bénéfice : une présence qui continue dans le temps",
          en: "The third benefit: a presence that lasts over time",
        },
        paragraphs: {
          fr: [
            "Un travail sérieux sur le référencement naturel crée une base durable. Contrairement à une action ponctuelle, il renforce la capacité du site à rester visible, à être réexploré, à être mieux compris et à soutenir de futures pages ou futures campagnes.",
            "C’est aussi ce qui rend le SEO particulièrement intéressant pour un site livré comme un actif durable : vous investissez dans une structure qui peut continuer à progresser, au lieu de repartir de zéro à chaque changement.",
          ],
          en: [
            "Serious SEO work creates a lasting foundation. Unlike a one-off action, it strengthens the website's ability to stay visible, be recrawled, be better understood and support future pages or campaigns.",
            "That is also what makes SEO particularly worthwhile for a website delivered as a lasting asset: you invest in a structure that can keep improving, instead of starting from zero with every change.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site qui attire une visibilité utile, pas seulement du passage ?",
      en: "Want a website that attracts useful visibility, not just passing traffic?",
    },
    ctaDescription: {
      fr: "Nous pouvons construire une base claire, indexable et durable pour votre acquisition organique.",
      en: "We can build a clear, indexable and lasting foundation for your organic traffic.",
    },
  },
  {
    slug: "pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout",
    enSlug: "why-owning-your-website-changes-everything",
    publishedAt: "2026-04-05",
    updatedAt: "2026-08-11",
    author: "Équipe Sitekept",
    category: {
      fr: "Propriété du site",
      en: "Website ownership",
    },
    title: {
      fr: "Pourquoi avoir un site qui nous appartient à 100 % change tout",
      en: "Why having a website that is 100% yours changes everything",
    },
    excerpt: {
      fr: "Un site entièrement détenu par le client change le budget, la liberté de mouvement, la reprise du projet et la qualité de la relation avec le prestataire.",
      en: "A website fully owned by the client changes the budget, the freedom to move, the ability to take the project over and the quality of the relationship with the provider.",
    },
    seoTitle: {
      fr: "Posséder son site à 100 % : pourquoi ça change tout",
      en: "Owning your website 100%: why it changes everything",
    },
    seoDescription: {
      fr: "Abonnements, autonomie, changement de prestataire, accès et contrôle du code : pourquoi la propriété complète du site change la donne.",
      en: "Subscriptions, autonomy, switching providers, access and code control: why full website ownership changes the game.",
    },
    intro: {
      fr: "La question de la propriété du site paraît parfois abstraite jusqu’au jour où l’on veut modifier un outil, récupérer des accès ou changer de prestataire. À ce moment-là, tout devient très concret. Un site qui vous appartient vraiment vous laisse de la marge. Un site verrouillé vous rend dépendant.",
      en: "The question of website ownership sometimes seems abstract until the day you want to change a tool, recover access or switch providers. At that point, everything becomes very concrete. A website you truly own gives you room to maneuver. A locked-down website makes you dependent.",
    },
    sections: [
      {
        id: "subscription-dependency",
        title: {
          fr: "La dépendance aux abonnements change le rapport de force",
          en: "Subscription dependency shifts the balance of power",
        },
        paragraphs: {
          fr: [
            "Quand le site repose sur un abonnement opaque, chaque évolution peut devenir un point de blocage. Le client ne sait pas toujours ce qu’il paie, ce qu’il possède réellement ni ce qu’il pourra récupérer plus tard.",
            "Cette dépendance crée un coût mental et budgétaire. Elle freine les décisions, complique les arbitrages et affaiblit la liberté de changer de cap ou de partenaire.",
          ],
          en: [
            "When a website relies on an opaque subscription, every change can become a sticking point. The client doesn't always know what they are paying for, what they really own or what they will be able to recover later.",
            "This dependency carries both a mental and a budget cost. It slows decisions, complicates trade-offs and weakens the freedom to change course or partner.",
          ],
        },
      },
      {
        id: "autonomy-and-access",
        title: {
          fr: "Autonomie, accès et contrôle : ce qui change au quotidien",
          en: "Autonomy, access and control: what changes day to day",
        },
        paragraphs: {
          fr: [
            "Quand vous détenez le site à 100 %, vous gardez la main sur le code, le dépôt, les accès techniques et le déploiement. Vous pouvez faire évoluer le projet, faire intervenir un autre développeur ou reprendre vous-même certains sujets sans dépendre d’un verrou artificiel.",
            "Cette autonomie n’oblige pas à devenir technique. Elle garantit simplement que la technique reste à votre service, et non l’inverse.",
          ],
          en: [
            "When you own 100% of the website, you keep control of the code, the repository, the technical access and the deployment. You can develop the project further, bring in another developer or take some tasks over yourself without depending on an artificial lock.",
            "This autonomy doesn't require you to become technical. It simply ensures that the technology stays at your service, not the other way around.",
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
            "C’est aussi la logique Sitekept : livrer un site que vous pouvez conserver, comprendre et transmettre plus tard à un autre prestataire si vous le souhaitez.",
          ],
          en: [
            "A well-delivered website keeps its value over time. It can be taken over, expanded, reworked or migrated without starting from scratch. That is what turns it into a lasting asset for the business.",
            "That is also the Sitekept philosophy: delivering a website you can keep, understand and later hand to another provider if you wish.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site livré comme un actif durable, pas comme une dépendance ?",
      en: "Want a website delivered as a lasting asset, not a dependency?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer un site clair dans sa propriété, ses accès et sa reprise future.",
      en: "We can set up a website with clear ownership, access and future handover.",
    },
  },
  {
    slug: "comment-se-passe-la-livraison-d-un-site-web-chez-sitekept",
    enSlug: "how-website-delivery-works-at-sitekept",
    publishedAt: "2026-04-05",
    updatedAt: "2026-08-11",
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
      fr: "La livraison ne s’arrête pas à la mise en ligne. Elle comprend le code, les accès, le dépôt GitHub, le déploiement et le domaine, pour que le client possède réellement son site.",
      en: "Delivery doesn't stop at launch. It includes the code, the access credentials, the GitHub repository, deployment and the domain name, so the client truly owns the website.",
    },
    seoTitle: {
      fr: "Livraison d’un site web : notre process | Sitekept",
      en: "Website delivery: our process | Sitekept",
    },
    seoDescription: {
      fr: "Développement en interne, dépôt GitHub à votre nom, déploiement Vercel et domaine offert la première année. Voici comment Sitekept livre.",
      en: "In-house development, a GitHub repository in your name, Vercel deployment and a free domain name for the first year. Here is how Sitekept delivers.",
    },
    intro: {
      fr: "Pour Sitekept, livrer un site ne veut pas seulement dire publier une URL. La livraison doit aussi garantir que le client possède réellement le projet, ses accès et sa capacité à le faire évoluer plus tard. C’est cette logique qui guide la façon dont nous développons, déployons et remettons chaque site.",
      en: "For Sitekept, delivering a website doesn't just mean publishing a URL. Delivery must also guarantee that the client truly owns the project, its access and the ability to develop it further later. That logic guides how we build, deploy and hand over every website.",
    },
    sections: [
      {
        id: "developed-in-house",
        title: {
          fr: "Le site est développé en interne dans un cadre clair",
          en: "The website is built in-house within a clear framework",
        },
        paragraphs: {
          fr: [
            "Le projet est développé en interne par Sitekept, avec une structure pensée pour rester lisible. Les fichiers, les pages, les composants et l’organisation générale ne sont pas montés comme une boîte noire. Le but est qu’un autre développeur puisse comprendre le projet sans repartir de zéro.",
            "Cette étape reprend l’esprit du process présenté sur la home : vous validez une direction, nous développons, nous ajustons, puis nous préparons une livraison exploitable et compréhensible.",
          ],
          en: [
            "The project is built in-house by Sitekept, with a structure designed to stay readable. The files, pages, components and overall organization are not assembled as a black box. The goal is that another developer can understand the project without starting from scratch.",
            "This step follows the spirit of the process shown on the homepage: you approve a direction, we build, we adjust, then we prepare a delivery that is usable and understandable.",
          ],
        },
      },
      {
        id: "accounts-and-deployment",
        title: {
          fr: "Les comptes sont créés au nom du client, puis le projet y est livré",
          en: "Accounts are created in the client's name, then the project is delivered there",
        },
        paragraphs: {
          fr: [
            "Pour garantir la propriété à 100 %, nous créons un compte GitHub au client puis nous y poussons le projet. Le code n’est donc pas conservé dans un espace inaccessible : le dépôt appartient au client dès la livraison.",
            "Nous créons ensuite un compte Vercel ou une plateforme similaire au nom du client pour y déployer le site. Enfin, nous créons un compte Hostinger ou une plateforme comparable afin d’acheter le nom de domaine, pris en charge la première année. Le déploiement et le domaine sont donc remis dans un environnement que le client contrôle.",
          ],
          en: [
            "To guarantee 100% ownership, we create a GitHub account for the client and push the project to it. The code isn't kept in an inaccessible space: the repository belongs to the client from delivery.",
            "We then create a Vercel account, or a similar platform, in the client's name to deploy the website. Finally, we create a Hostinger account or a comparable platform to buy the domain name, which we cover for the first year. The deployment and the domain name are therefore handed over in an environment the client controls.",
          ],
        },
      },
      {
        id: "handoff-and-takeover",
        title: {
          fr: "La reprise du site reste possible si le client change de prestataire",
          en: "The website can still be taken over if the client changes providers",
        },
        paragraphs: {
          fr: [
            "La livraison comprend une logique de reprise future. Toute la structure du projet, du code au déploiement, est pensée pour rester compréhensible. Cela ne veut pas dire que le client doit gérer la technique au quotidien, mais qu’il n’est jamais enfermé dans un système flou.",
            "Si le client souhaite plus tard travailler avec un autre développeur ou une autre agence, le site peut être repris dans de bonnes conditions parce que le dépôt, les accès et le domaine sont déjà dans un cadre clair et propriétaire.",
          ],
          en: [
            "Delivery includes a view to future takeover. The whole project structure, from code to deployment, is designed to stay understandable. That doesn't mean the client has to handle the technical side day to day, but that they are never locked into a murky system.",
            "If the client later wants to work with another developer or agency, the website can be taken over under good conditions because the repository, access and domain name are already in a clear framework that the client owns.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site livré proprement, avec vos accès et votre dépôt ?",
      en: "Want a website delivered cleanly, with your own access and repository?",
    },
    ctaDescription: {
      fr: "Nous pouvons vous montrer comment cadrer un site rapide sans sacrifier la propriété ni la reprise future.",
      en: "We can show you how to set up a fast website without sacrificing ownership or future takeover.",
    },
  },

  {
    slug: "recuperer-son-site-web-chez-un-prestataire",
    enSlug: "get-your-website-back-from-a-provider",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
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
      en: "Domain name, source code, content, access: what to ask for, in what order, and what to do when the provider stops responding.",
    },
    seoTitle: {
      fr: "Récupérer son site web chez un prestataire | Sitekept",
      en: "Getting your website back from a provider | Sitekept",
    },
    seoDescription: {
      fr: "Changer de prestataire web : la procédure pour récupérer votre nom de domaine, votre code source, vos contenus et vos accès, étape par étape.",
      en: "Switching web providers: how to recover your domain name, source code, content and access credentials, step by step.",
    },
    intro: {
      fr: "Vouloir changer de prestataire est une décision banale. La rendre possible l'est beaucoup moins. Beaucoup d'entreprises découvrent à ce moment précis qu'elles ne possèdent presque rien de leur propre site : ni le nom de domaine, ni le code, parfois pas même les textes. Ce guide décrit ce qu'il faut réclamer, dans quel ordre, et ce que vous pouvez faire quand le dialogue se bloque.",
      en: "Wanting to switch providers is an ordinary decision. Making it possible is far less so. Many businesses discover at that very moment that they own almost nothing of their own website: not the domain name, not the code, sometimes not even the text. This guide explains what to ask for, in what order, and what you can do when talks break down.",
    },
    sections: [
      {
        id: "inventaire",
        title: {
          fr: "Étape 1 — Faire l'inventaire de ce que vous ne contrôlez pas",
          en: "Step 1 — Take stock of what you don't control",
        },
        paragraphs: {
          fr: [
            "Avant d'annoncer quoi que ce soit, établissez la liste de ce qui compose votre présence en ligne et, pour chaque élément, qui en détient réellement les clés. Cet inventaire détermine votre marge de manœuvre : il vaut mieux le faire avant d'ouvrir la discussion qu'après.",
            "Le plus simple est de commencer par le nom de domaine, parce que c'est le seul élément dont la titularité est publique et vérifiable en quelques secondes, sans rien demander à personne.",
          ],
          en: [
            "Before announcing anything, list everything that makes up your online presence and, for each item, who actually holds the keys. This inventory determines your room for maneuver: it is better done before you open the discussion than after.",
            "The easiest place to start is the domain name, because it is the only item whose ownership is public and can be checked in seconds, without asking anyone.",
          ],
        },
        bullets: {
          fr: [
            "Le nom de domaine : à quel nom est-il déposé, et chez quel bureau d'enregistrement ?",
            "Le code source : existe-t-il un dépôt, et y avez-vous accès ?",
            "L'hébergement : le contrat est-il à votre nom ou à celui du prestataire ?",
            "Les contenus : textes, photos, logo — qui les a produits, et sous quelles conditions ?",
            "Les comptes de mesure : Search Console, Analytics, fiche d'établissement Google.",
            "Les boîtes e-mail rattachées au domaine, souvent oubliées jusqu'au jour de la coupure.",
          ],
          en: [
            "The domain name: in whose name is it registered, and with which registrar?",
            "The source code: is there a repository, and do you have access to it?",
            "Hosting: is the contract in your name or in the provider's?",
            "Content: text, photos, logo — who produced them, and on what terms?",
            "Analytics accounts: Search Console, Analytics, Google Business Profile.",
            "Email accounts tied to the domain, often forgotten until the day they are cut off.",
          ],
        },
      },
      {
        id: "nom-de-domaine",
        title: {
          fr: "Le nom de domaine : l'élément à sécuriser en premier",
          en: "The domain name: the first thing to secure",
        },
        paragraphs: {
          fr: [
            "Le nom de domaine est votre adresse. Sans lui, un site tout neuf ne sert à rien : vos clients, vos cartes de visite et vos référencements pointent vers une adresse que vous ne contrôlez pas. C'est donc le premier point à traiter, avant même de parler du site lui-même.",
            "Vérifiez à quel nom il est déposé au moyen d'une requête WHOIS publique, ou directement auprès de l'AFNIC pour un .fr. Trois situations se présentent. S'il est à votre nom, vous êtes propriétaire : il vous suffira de demander le code de transfert pour l'emmener chez un autre bureau d'enregistrement. S'il est au nom du prestataire, vous devrez négocier un changement de titulaire. S'il est déposé au nom d'un salarié parti depuis, la situation est souvent plus délicate qu'avec le prestataire lui-même.",
            "Un point mérite d'être connu : un nom de domaine se renouvelle. S'il expire pendant un conflit, il peut être racheté par un tiers, et vous n'aurez aucun recours simple. Vérifiez la date d'expiration dès l'inventaire, et considérez-la comme votre échéance réelle.",
          ],
          en: [
            "The domain name is your address. Without it, a brand-new website is useless: your customers, your business cards and your search listings all point to an address you don't control. It is therefore the first thing to deal with, even before discussing the website itself.",
            "Check whose name it is registered in with a public WHOIS lookup, or directly with AFNIC for a .fr domain. There are three possible situations. If it is in your name, you are the owner: you simply need to request the transfer code to move it to another registrar. If it is in the provider's name, you will have to negotiate a change of registrant. If it is registered in the name of an employee who has since left, the situation is often trickier than with the provider itself.",
            "One thing is worth knowing: a domain name has to be renewed. If it expires during a dispute, a third party can buy it, and you will have no simple recourse. Check the expiry date as part of your inventory, and treat it as your real deadline.",
          ],
        },
      },
      {
        id: "contrat",
        title: {
          fr: "Étape 2 — Relire le contrat avant d'annoncer votre départ",
          en: "Step 2 — Reread the contract before announcing that you are leaving",
        },
        paragraphs: {
          fr: [
            "C'est l'étape que l'on saute le plus souvent, et celle qui change le plus l'issue. Reprenez le devis signé, les conditions générales et les éventuels avenants. Vous cherchez trois choses : ce que vous avez acheté exactement, la durée d'engagement et son préavis, et la présence ou l'absence d'une clause de cession des droits.",
            "Ce dernier point surprend beaucoup de dirigeants. En droit français, payer le développement d'un site ne vous en transfère pas automatiquement les droits d'auteur : la cession doit être expressément prévue par écrit et délimitée. Autrement dit, un prestataire qui refuse de livrer le code source n'est pas nécessairement de mauvaise foi — il peut être dans son droit si le contrat ne prévoit rien. C'est une raison de plus de traiter ce point à l'achat plutôt qu'au départ.",
            "Si votre contrat comporte un engagement de durée, notez la date d'échéance et le délai de préavis. Résilier hors des clous peut vous exposer à devoir payer les mensualités restantes, ce qui pèse dans la négociation.",
          ],
          en: [
            "This is the step people skip most often, and the one that most changes the outcome. Go back over the signed quote, the terms and conditions and any amendments. You are looking for three things: exactly what you bought, the length of the commitment and its notice period, and whether or not there is a clause assigning the rights to you.",
            "That last point surprises many business owners. Under French law, paying for a website to be developed does not automatically transfer the copyright to you: the assignment must be expressly provided for in writing, with a defined scope. In other words, a provider who refuses to hand over the source code is not necessarily acting in bad faith — they may be within their rights if the contract says nothing on the matter. That is one more reason to settle this point when you buy, rather than when you leave.",
            "If your contract includes a minimum term, note the end date and the notice period. Terminating outside those terms may leave you liable for the remaining monthly payments, which weighs on the negotiation.",
          ],
        },
      },
      {
        id: "demande-ecrite",
        title: {
          fr: "Étape 3 — Formuler la demande par écrit, et précisément",
          en: "Step 3 — Put your request in writing, and be precise",
        },
        paragraphs: {
          fr: [
            "Une demande vague obtient une réponse vague. Écrivez un courriel — ou un courrier recommandé si la relation est déjà tendue — qui énumère point par point ce que vous demandez, avec une date de réponse souhaitée. Restez factuel et courtois : la plupart des transferts se règlent en quelques jours quand la demande est claire et que la relation ne s'est pas envenimée.",
            "Conservez une trace écrite de tout, y compris des échanges qui se passent bien. Si la suite se complique, cette trace est ce qui vous permettra de démontrer votre bonne foi et la chronologie des faits.",
          ],
          en: [
            "A vague request gets a vague answer. Write an email — or a registered letter if the relationship is already strained — that lists, point by point, what you are asking for, along with the date by which you would like a reply. Stay factual and courteous: most transfers are settled within a few days when the request is clear and the relationship hasn't soured.",
            "Keep a written record of everything, including the exchanges that go well. If things get complicated later, that record is what will allow you to show your good faith and the sequence of events.",
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
            "The domain name transfer code, and a change of registrant if needed",
            "A complete archive of the website: source code, database, media files",
            "The administration and hosting credentials",
            "Transfer of ownership of the Analytics and Search Console accounts and of the business profile",
            "The source files of the logo and visuals, in their original format",
            "Written confirmation that you may use the website and have it modified",
          ],
        },
      },
      {
        id: "blocage",
        title: {
          fr: "Étape 4 — Quand le prestataire ne répond plus",
          en: "Step 4 — When the provider stops responding",
        },
        paragraphs: {
          fr: [
            "Le silence est le cas le plus fréquent, loin devant le refus explicite. Commencez par relancer une fois par écrit en fixant une échéance raisonnable, puis par lettre recommandée avec accusé de réception, qui donne une date certaine à votre demande.",
            "Si le blocage porte sur le nom de domaine, sachez que les bureaux d'enregistrement et les organismes de gestion — l'AFNIC pour le .fr — disposent de procédures en cas de litige sur la titularité. Elles ne sont ni immédiates ni automatiques, mais elles existent, et elles constituent souvent un argument suffisant pour débloquer la discussion.",
            "Si le litige porte sur des sommes ou sur l'exécution du contrat, la médiation de la consommation ou un conseil juridique sera plus efficace qu'un échange qui s'envenime. Sur les petits montants, la procédure judiciaire coûte souvent plus cher que ce qu'elle permet de récupérer : arbitrez froidement entre le temps que vous y passerez et le coût de la reconstruction.",
            "Car c'est parfois la conclusion la plus rationnelle. Quand le code est irrécupérable, refaire un site propre coûte souvent moins cher, en argent comme en énergie, que d'arracher un code que vous ne pourrez de toute façon pas faire évoluer facilement. Ce qui se négocie en priorité, c'est le nom de domaine et les contenus : eux ne se reconstruisent pas.",
          ],
          en: [
            "Silence is by far the most common case, well ahead of an explicit refusal. Start by following up once in writing with a reasonable deadline, then by registered letter with proof of delivery, which gives your request a legally certain date.",
            "If the blockage concerns the domain name, be aware that registrars and registry operators — AFNIC for .fr — have procedures for disputes over ownership. They are neither immediate nor automatic, but they exist, and they are often enough of an argument to get the discussion moving again.",
            "If the dispute is about money or how the contract was carried out, consumer mediation or legal advice will be more effective than an exchange that turns sour. For small amounts, going to court often costs more than it allows you to recover: weigh up coolly the time you will spend on it against the cost of rebuilding.",
            "Because that is sometimes the most rational conclusion. When the code cannot be recovered, rebuilding a clean website often costs less, in money as in energy, than wresting back code you would not be able to update easily anyway. What you should negotiate first is the domain name and the content: those cannot be rebuilt.",
          ],
        },
      },
      {
        id: "referencement",
        title: {
          fr: "Ce que vous risquez de perdre en référencement, et comment le limiter",
          en: "What you could lose in search rankings, and how to limit it",
        },
        paragraphs: {
          fr: [
            "Changer de site est un moment de fragilité pour le référencement, et c'est l'angle mort de la plupart des migrations. Le risque n'est pas de perdre son ancienneté de domaine — elle reste attachée au nom de domaine, que vous conservez — mais de casser les adresses que Google a mis des années à indexer.",
            "Le point critique est la correspondance entre anciennes et nouvelles URL. Si votre page « /nos-services » devient « /prestations » sans redirection, Google met des semaines à comprendre, et pendant ce temps l'ancienne adresse renvoie une erreur aux visiteurs comme aux moteurs. La parade est simple et se prépare avant la bascule : relever la liste complète des adresses existantes, et poser une redirection permanente de chacune vers son équivalent sur le nouveau site.",
            "Récupérez aussi la propriété de la Search Console avant de couper l'ancien site : c'est le seul endroit où figure la liste des pages réellement indexées et des requêtes qui vous amenaient du trafic. Sans elle, vous naviguez à l'aveugle, et vous ne saurez pas si une baisse après migration vient de la bascule ou d'autre chose.",
            "Enfin, surveillez pendant quatre à six semaines. Une variation les premiers jours est normale ; une baisse qui persiste au-delà d'un mois signale généralement un problème de redirection ou de contenu perdu, et se corrige encore facilement à ce stade.",
          ],
          en: [
            "Changing websites is a vulnerable moment for search rankings, and it is the blind spot of most migrations. The risk is not losing your domain's age — that stays with the domain name, which you keep — but breaking the addresses that Google has spent years indexing.",
            "The critical point is mapping old URLs to new ones. If your “/our-services” page becomes “/services” without a redirect, Google takes weeks to catch on, and in the meantime the old address returns an error to visitors and search engines alike. The fix is simple and is prepared before the switch: record the complete list of existing addresses, and set up a permanent redirect from each one to its equivalent on the new website.",
            "Also take back ownership of Search Console before shutting down the old website: it is the only place that lists the pages actually indexed and the queries that brought you traffic. Without it, you are flying blind, and you won't know whether a drop after the migration comes from the switch or from something else.",
            "Finally, keep an eye on things for four to six weeks. Some fluctuation in the first few days is normal; a drop that persists beyond a month usually points to a redirect problem or lost content, and can still be fixed easily at that stage.",
          ],
        },
      },
      {
        id: "apres",
        title: {
          fr: "Ce qu'il faut faire juste après la récupération",
          en: "What to do right after getting your website back",
        },
        paragraphs: {
          fr: [
            "Une fois le transfert obtenu, quelques gestes évitent de se retrouver dans la même situation deux ans plus tard. Ils prennent une heure et valent bien davantage.",
            "Le plus important est le dernier : la prochaine fois, faites écrire la cession dans le devis avant de signer. Une ligne suffit, et elle vous épargne l'intégralité de la procédure décrite dans cet article.",
          ],
          en: [
            "Once the transfer is done, a few simple steps will keep you from ending up in the same situation two years later. They take an hour and are worth far more.",
            "The most important one is the last: next time, have the assignment of rights written into the quote before you sign. One line is enough, and it spares you the entire procedure described in this article.",
          ],
        },
        bullets: {
          fr: [
            "Activez le renouvellement automatique du nom de domaine, et notez son échéance",
            "Changez tous les mots de passe, y compris ceux qui semblent sans importance",
            "Vérifiez que vous êtes bien propriétaire — et pas simple administrateur — des comptes Analytics et Search Console",
            "Conservez une copie du code et de la base de données hors de l'hébergement",
            "Exigez de votre prochain prestataire une clause écrite de cession et un dépôt à votre nom",
          ],
          en: [
            "Turn on automatic renewal for the domain name, and note its expiry date",
            "Change every password, including those that seem unimportant",
            "Check that you are the owner — not just an administrator — of the Analytics and Search Console accounts",
            "Keep a copy of the code and the database outside the hosting environment",
            "Require your next provider to include a written assignment-of-rights clause and a repository in your name",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Repartir sur un site qui vous appartient dès le premier jour",
      en: "Start over with a website that is yours from day one",
    },
    ctaDescription: {
      fr: "Chez Sitekept, le code est déposé sur un dépôt à votre nom et les accès vous sont remis à la livraison. Il n'y a pas d'abonnement à payer pour que le site reste en ligne, et rien à négocier le jour où vous voudrez partir.",
      en: "At Sitekept, the code is placed in a repository in your name and the access credentials are handed over to you at delivery. There is no subscription to pay to keep the website online, and nothing to negotiate the day you decide to leave.",
    },
  },

  {
    slug: "louer-ou-posseder-son-site-internet",
    enSlug: "rent-or-own-your-website",
    publishedAt: "2026-08-12",
    updatedAt: "2026-08-12",
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
      en: "Beyond the monthly fee, a subscription creates three dependencies that you pay for the day you want to leave. And the real cases where it is still the right choice.",
    },
    seoTitle: {
      fr: "Abonnement site internet : le vrai coût | Sitekept",
      en: "Website subscriptions: the real cost | Sitekept",
    },
    seoDescription: {
      fr: "Ce qu'un abonnement site internet coûte sur cinq ans, les trois dépendances qu'il crée, et les situations où il reste malgré tout le bon choix.",
      en: "What a website subscription costs over five years, the three dependencies it creates, and the situations where it is still the right choice.",
    },
    intro: {
      fr: "Comparer un site à 500 € payés une fois et un site à 29 € par mois semble simple : on multiplie, on compare, on conclut. Ce calcul est juste, mais il passe à côté de l'essentiel. Ce qui distingue vraiment les deux modèles, ce n'est pas le total au bout de cinq ans — c'est ce qu'il vous reste le jour où vous arrêtez de payer.",
      en: "Comparing a €500 website paid for once with a €29-a-month website seems simple: you multiply, compare and conclude. The calculation is correct, but it misses the point. What really sets the two models apart is not the total after five years — it is what you are left with the day you stop paying.",
    },
    sections: [
      {
        id: "ce-que-vous-payez",
        title: {
          fr: "Ce que vous payez vraiment dans un abonnement",
          en: "What you are really paying for with a subscription",
        },
        paragraphs: {
          fr: [
            "Un abonnement mélange plusieurs choses dans une seule ligne de facture, et c'est précisément ce qui rend la comparaison difficile. On y trouve généralement l'hébergement, l'usage d'un éditeur, la maintenance technique de la plateforme, et parfois un support.",
            "Prises séparément, ces prestations ont des prix très différents. L'hébergement d'un site vitrine coûte quelques euros par mois, parfois rien. La maintenance d'une plateforme mutualisée entre des centaines de milliers de clients revient à une fraction de centime par site. Ce que vous payez majoritairement, ce n'est donc pas un service : c'est un droit d'usage, qui s'interrompt en même temps que le paiement.",
            "Ce n'est ni scandaleux ni caché — c'est le modèle économique du logiciel en ligne, et il finance un produit réellement pratique. Mais il faut le nommer pour décider en connaissance de cause.",
          ],
          en: [
            "A subscription bundles several things into a single line on the invoice, and that is precisely what makes it hard to compare. It usually includes hosting, the use of a website builder, technical maintenance of the platform and sometimes support.",
            "Taken separately, these services have very different prices. Hosting a business website costs a few euros a month, sometimes nothing. Maintaining a platform shared by hundreds of thousands of customers comes to a fraction of a cent per website. So what you are mainly paying for is not a service: it is a right of use, which ends the moment you stop paying.",
            "This is neither outrageous nor hidden — it is the business model of online software, and it funds a genuinely convenient product. But it needs to be called what it is so that you can make an informed decision.",
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
            "The financial cost is the most visible and, paradoxically, the least problematic. The following three dependencies often cost far more, and they only become apparent when you leave.",
          ],
        },
        bullets: {
          fr: [
            "La dépendance technique : le site est construit avec les outils de la plateforme et n'existe pas en dehors d'elle. Il n'y a rien à « emporter » — l'export, quand il existe, produit du HTML inexploitable pour reconstruire le site ailleurs.",
            "La dépendance de contenu : vos textes, vos photos et souvent vos avis clients vivent dans la base de la plateforme. Les récupérer est possible, les réinstaller ailleurs demande un travail manuel que personne n'anticipe.",
            "La dépendance tarifaire : le prix du premier mois n'engage pas la plateforme. Les tarifs évoluent, les fonctionnalités migrent vers des formules supérieures, et votre marge de négociation est nulle une fois le site en production.",
          ],
          en: [
            "Technical dependency: the website is built with the platform's tools and does not exist outside it. There is nothing to “take with you” — the export, when there is one, produces HTML that cannot be used to rebuild the website elsewhere.",
            "Content dependency: your text, your photos and often your customer reviews live in the platform's database. Getting them back is possible; setting them up again elsewhere takes manual work that nobody anticipates.",
            "Pricing dependency: the first month's price does not commit the platform to anything. Prices change, features move to higher-tier plans, and you have no bargaining power once the website is live.",
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
            "The arithmetic is within everyone's reach: a €20-a-month subscription adds up to €1,200 over five years, at €30 it comes to €1,800, and at €50 it reaches €3,000. Do the math with the figures of the offer you are considering, not with a market average.",
            "But this calculation leaves out two things. First, it assumes the price stays the same for five years, which is rarely the case. Second, and above all, it compares amounts when the two situations are not comparable: after five years, in one case you own a website that you can update or host elsewhere; in the other, you have paid for a right of use that has come to an end.",
            "A more honest way to put the question: how much would it cost you, today, to rebuild everything elsewhere? If the answer is “the price of a new website,” then the monthly payments have built up nothing.",
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
            "It needs to be said, because it is true and ignoring it would undermine everything above: in several situations, a subscription is the rational choice.",
            "If you are testing an idea and the website may only live for six months, paying €150 in total makes more sense than investing in a website you will throw away. If you need to edit your pages yourself every week without ever calling on anyone, online website builders excel at this, and a custom-built website won't do it as well. If your business relies on a feature the platform provides out of the box — a catalog of several thousand products, a complex booking system — rebuilding that from scratch would cost far more.",
            "The reasoning flips when the website becomes long-term and central. From the moment it is your main commercial presence and is meant to last several years, renting becomes the most expensive model, and the only one that leaves nothing behind.",
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
            "If you are already committed and want to get out, the order of operations matters more than speed. Canceling before you have secured everything else leaves you a few days to recover it all, often less.",
            "Always start with the domain name, even before announcing your intention. If it is registered in your name, request the transfer code and move it to an independent registrar: it is then out of reach, whatever happens next. If it belongs to the platform or the provider, it is the point to negotiate first, because it is the only truly irreplaceable item.",
            "Next, recover your content: text, full-resolution photos and customer reviews if the platform lets you export them. Also take screenshots of every page, which will serve as a reference for the rebuild. Finally, write down the complete list of your page addresses: it will let you set up redirects to the new website and avoid losing the search rankings you have built.",
            "Only cancel once these three steps are complete, and if possible leave the old website online until the new one is published and the redirects are working. Paying for one more month of subscription costs less than a gap in your online presence.",
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
            "Whichever model you choose, these questions will spare you unpleasant surprises. Ask them in writing and keep the answers.",
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
            "Is the domain name registered in my name, and can I transfer it freely?",
            "What exactly happens if I stop paying: does the website disappear, and how quickly?",
            "Can I export my content, in what format, and can that export be reused elsewhere?",
            "Is the price guaranteed, and for how long?",
            "Which of the features I use today could move to a higher-tier plan?",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Un site payé une fois, et qui reste le vôtre",
      en: "A website paid for once, that stays yours",
    },
    ctaDescription: {
      fr: "Le détail de ce qui est inclus, les modalités de paiement et la comparaison des modèles figurent sur notre page tarifs. Le code est déposé à votre nom, et il n'y a aucun abonnement à régler pour que le site reste en ligne.",
      en: "The details of what is included, the payment terms and a comparison of the models are on our pricing page. The code is placed in a repository in your name, and there is no subscription to pay to keep the website online.",
    },
  },

  {
    slug: "checklist-seo-avant-mise-en-ligne",
    enSlug: "pre-launch-seo-checklist",
    publishedAt: "2026-08-12",
    updatedAt: "2026-08-12",
    author: "Équipe Sitekept",
    category: {
      fr: "Référencement",
      en: "SEO",
    },
    title: {
      fr: "Checklist SEO : 20 points à vérifier avant de mettre un site en ligne",
      en: "SEO checklist: 20 things to check before launching a website",
    },
    excerpt: {
      fr: "Les vérifications à faire avant la mise en ligne, classées par gravité, avec la commande ou l'outil qui permet de contrôler chacune d'elles.",
      en: "The checks to run before launch, ranked by severity, with the command or tool you can use to verify each one.",
    },
    seoTitle: {
      fr: "Checklist SEO avant mise en ligne : 20 points | Sitekept",
      en: "Pre-launch SEO checklist: 20 points | Sitekept",
    },
    seoDescription: {
      fr: "20 vérifications SEO à faire avant de publier un site : indexabilité, canonical, titles, vitesse, données structurées. Avec comment vérifier chacune.",
      en: "20 SEO checks to run before publishing a website: indexability, canonical tags, titles, speed, structured data. With how to verify each one.",
    },
    intro: {
      fr: "La plupart des problèmes de référencement ne viennent pas d'un manque d'optimisation, mais d'une erreur de configuration passée inaperçue à la mise en ligne. Un noindex oublié, un canonical qui pointe ailleurs, un sitemap listant des adresses qui redirigent : chacune de ces erreurs suffit à rendre invisible un site par ailleurs bien construit. Cette liste est classée par gravité, et chaque point indique comment le vérifier soi-même.",
      en: "Most SEO problems don't come from a lack of optimization, but from a configuration error that went unnoticed at launch. A forgotten noindex, a canonical tag pointing elsewhere, a sitemap listing addresses that redirect: any one of these errors is enough to make an otherwise well-built website invisible. This list is ranked by severity, and each point explains how to check it yourself.",
    },
    sections: [
      {
        id: "bloquants",
        title: {
          fr: "Les cinq points bloquants — à vérifier en premier",
          en: "The five blocking issues — check these first",
        },
        paragraphs: {
          fr: [
            "Si l'un de ces cinq points est défaillant, tout le reste est sans effet. Ce sont eux qui expliquent l'écrasante majorité des sites qui « ne sortent pas sur Google » malgré un contenu correct.",
            "Le plus insidieux est le premier. Une balise noindex laissée en place après une phase de préproduction rend le site totalement invisible, sans qu'aucune alerte ne le signale. Vérifiez-le le jour de la mise en ligne, puis une semaine plus tard.",
          ],
          en: [
            "If any one of these five points fails, nothing else has any effect. They account for the overwhelming majority of websites that “don't show up on Google” despite decent content.",
            "The most insidious is the first. A noindex tag left in place after a staging phase makes the website completely invisible, without any alert to flag it. Check it on launch day, then again a week later.",
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
            "No leftover noindex tag. Check the source code of several pages and the X-Robots-Tag HTTP header, which does not appear in the HTML.",
            "The robots.txt file doesn't block anything essential. Open yourdomain.com/robots.txt: a forgotten Disallow: / blocks the entire website.",
            "Only one version of the domain responds. Test with and without www, over http and https: three of the four must redirect to the fourth with a permanent 301 or 308, never a 302 or 307.",
            "Canonical tags point to the address actually served. A canonical tag that designates a URL that redirects sends Google a contradictory signal.",
            "The website is served over HTTPS with a valid certificate, and no resource is loaded over HTTP.",
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
            "Once the website is accessible, these checks determine how it will be understood and presented in the results. They are checked page by page, starting with the pages that matter commercially.",
            "Uniqueness is the common thread: two pages that share the same title are two pages that Google will treat as duplicates, and it will pick only one of them.",
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
            "Every page has a unique title, under 60 characters, containing the term it aims to be found for.",
            "Every page has a unique meta description, under 155 characters. It doesn't influence rankings, but it determines the click-through rate.",
            "Only one h1 tag per page, describing the actual content rather than the brand name.",
            "The heading hierarchy doesn't skip levels: no h3 directly under an h1.",
            "Every image has a descriptive alt attribute, or an empty alt if it is purely decorative.",
            "No essential information — prices, menu, opening hours — is locked inside an image or a PDF.",
          ],
        },
      },
      {
        id: "technique",
        title: {
          fr: "Technique et exploration — cinq points",
          en: "Technical setup and crawling — five points",
        },
        paragraphs: {
          fr: [
            "Ces points conditionnent la capacité de Google à découvrir vos pages et la vitesse à laquelle il le fera. Ils comptent particulièrement pour un site neuf, qui ne bénéficie d'aucun historique.",
            "Un point mérite une attention particulière : un sitemap n'est utile que s'il est exact. Un sitemap contenant des adresses qui redirigent ou renvoient une erreur est traité comme défaillant, et Google finit par cesser de le consulter.",
          ],
          en: [
            "These points determine Google's ability to discover your pages and how quickly it will do so. They matter especially for a new website, which has no history to rely on.",
            "One point deserves special attention: a sitemap is only useful if it is accurate. A sitemap containing addresses that redirect or return an error is treated as unreliable, and Google eventually stops checking it.",
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
            "The sitemap.xml file exists, contains only addresses that return a 200, and all of them on the canonical version of the domain.",
            "The sitemap is declared in the robots.txt file and submitted in Search Console.",
            "Every indexable page receives at least one link from another page on the website. A page that is in the sitemap but has no incoming links is an orphan page.",
            "Internal links are genuine <a href> tags. A button that navigates with JavaScript is invisible to search engines.",
            "Pages that don't exist return a real 404 code, not a home page disguised as an error.",
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
          ],
          en: [
            "Speed affects rankings, but above all it affects bounce rate: a visitor who waits too long leaves before seeing the page. Structured data doesn't directly improve your position, but it determines whether you get rich results in search.",
            "A useful clarification: Core Web Vitals are measured on real visitors. A new website doesn't have any yet, so it won't appear in any field report until it has had several weeks of traffic. Lab tools give an indication, not a measurement.",
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
            "Images are served in a modern format, properly sized, and the one displayed first is loaded with priority.",
            "Pages are cached whenever their content allows it. A no-store directive on a static page forces the server to rebuild it on every visit.",
            "Structured data markup describes the organization, and articles carry a publication date and an author.",
            "A social sharing image is defined, and the Open Graph tags point to absolute URLs.",
          ],
        },
      },
      {
        id: "outils",
        title: {
          fr: "Les outils pour vérifier, tous gratuits",
          en: "The tools for checking, all free",
        },
        paragraphs: {
          fr: [
            "Aucune de ces vérifications ne demande d'abonnement à un outil payant. Les quatre suivants suffisent à couvrir l'intégralité de la liste, et ce sont ceux qu'utilisent les professionnels pour l'essentiel du travail quotidien.",
            "La Search Console de Google est la source de vérité sur l'indexation : elle seule indique quelles pages sont réellement indexées et pourquoi les autres ne le sont pas. Son outil d'inspection d'URL permet de voir une page telle que Google la reçoit, ce qu'aucun autre outil ne peut faire.",
            "Le code source de la page, accessible d'un clic droit dans n'importe quel navigateur, permet de contrôler les balises title, description, canonical et les données structurées. C'est l'outil le plus simple et le plus sous-utilisé.",
            "Le test des résultats enrichis de Google valide les données structurées et signale les propriétés manquantes. Enfin, PageSpeed Insights donne une indication de performance, en gardant à l'esprit que ses scores de laboratoire ne sont pas des Core Web Vitals réels.",
            "Une dernière méthode, très efficace et souvent oubliée : consultez votre site dans une fenêtre de navigation privée, sur un téléphone, avec une connexion mobile. Beaucoup de problèmes visibles pour un visiteur ne le sont pas depuis un poste de développement.",
          ],
          en: [
            "None of these checks requires a subscription to a paid tool. The following four are enough to cover the whole list, and they are the ones professionals use for most of their day-to-day work.",
            "Google Search Console is the source of truth on indexing: it alone tells you which pages are actually indexed and why the others are not. Its URL Inspection tool lets you see a page exactly as Google receives it, which no other tool can do.",
            "The page source, one right-click away in any browser, lets you check the title, description and canonical tags and the structured data. It is the simplest tool and the most underused.",
            "Google's Rich Results Test validates structured data and flags missing properties. Finally, PageSpeed Insights gives an indication of performance, bearing in mind that its lab scores are not real Core Web Vitals.",
            "One last method, very effective and often forgotten: look at your website in a private browsing window, on a phone, over a mobile connection. Many problems a visitor can see are not visible from a developer's workstation.",
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
          ],
          en: [
            "The checklist doesn't stop at publication. Two steps determine whether you will be able to tell if the website is working, and fix it quickly if it isn't.",
            "The first is to open a Search Console account and submit the sitemap the same day. It is the only place where you will see what Google has actually indexed, and why it has left certain pages out.",
            "The second is to define what counts as a conversion — a form submission, a phone call — and to measure it from day one. Analytics tools don't apply conversions retroactively: every week without tracking is a week of data lost for good.",
            "Finally, if this is a redesign rather than a new website, check one last time that every old address redirects to its equivalent. It is the leading cause of traffic drops after a migration, and the easiest to avoid.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Un site livré avec ces points déjà en place",
      en: "A website delivered with these points already in place",
    },
    ctaDescription: {
      fr: "Chaque site que nous livrons part avec ces vérifications faites : structure, canonical, sitemap, données structurées et performance. Ce que nous ne promettons pas, c'est une position — personne ne la contrôle.",
      en: "Every website we deliver comes with these checks done: structure, canonical tags, sitemap, structured data and performance. What we don't promise is a ranking position — no one controls that.",
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Retrouve un article à partir du slug de son URL, dans une langue donnée. */
export function getBlogPost(
  urlSlug: string,
  locale: SiteLocale
): BlogPost | undefined {
  return blogPosts.find(
    (post) => (locale === "fr" ? post.slug : post.enSlug) === urlSlug
  );
}
