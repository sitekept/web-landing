export type SiteLocale = "fr" | "en";

export type LocalizedText = Record<SiteLocale, string>;

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
      fr: "Concevez un site web qui vous appartient à 100%.",
      en: "Build a website that belongs to you 100%.",
    },
    description: {
      fr: "Vous gardez la propriété complète, nous gérons le déploiement, le domaine est offert la première année.",
      en: "You keep full ownership, we handle deployment, and the domain is included for the first year.",
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
        "À partir de 500€",
        "Aucun abonnement imposé",
        "100% propriétaire du site",
        "Domaine offert 1 an",
      ],
      en: [
        "From €500",
        "No forced subscription",
        "100% website ownership",
        "Free domain for 1 year",
      ],
    },
  },
  trustStrip: {
    fr: [
      "À partir de 500€",
      "Mise en ligne en 48h",
      "100% à vous",
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
      fr: "Une offre simple a acheter, simple a comprendre et simple a posseder.",
      en: "An offer that is easy to buy, easy to understand and easy to own.",
    },
    description: {
      fr: "Chaque projet est structure pour retirer les zones grises commerciales: vous savez ce qui est inclus, ce que vous possedez et comment le site est mis en ligne.",
      en: "Every project is structured to remove commercial ambiguity: you know what is included, what you own and how the website goes live.",
    },
  },
  whySection: {
    eyebrow: {
      fr: "Pourquoi Sitekept",
      en: "Why Sitekept",
    },
    title: {
      fr: "La rapidite compte, mais la clarte commerciale et la propriete comptent tout autant.",
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
      en: "At Sitekept, optimization goes beyond design. We build the website with readable code, content structured to answer AI-style searches naturally, a clear sitemap that guides discovery, and a clean foundation that supports Google indexing.",
    },
    explanation: {
      fr: "Le SEO correspond au référencement naturel sur les moteurs comme Google. Le GEO désigne la façon dont un site reste exploitable dans les réponses générées par l’IA. Pour une entreprise, les deux se complètent: l’un améliore la visibilité dans les résultats, l’autre aide votre activité à apparaître dans les réponses et recommandations que les prospects consultent de plus en plus. Pour aller plus loin, notre blog détaille ces sujets simplement.",
      en: "SEO is organic visibility in search engines such as Google. GEO refers to how well a website can be reused in AI-generated answers. For a business, both work together: one improves discoverability in search results, the other helps your company appear in answers and recommendations that prospects increasingly rely on. Our blog explains both in simple terms.",
    },
    linkLabel: {
      fr: "En savoir plus",
      en: "Learn more",
    },
  },
  processSection: {
    eyebrow: {
      fr: "Comment ca se passe",
      en: "How it works",
    },
    title: {
      fr: "Un process court pour des clients qui ne veulent pas gerer la technique.",
      en: "A short process for clients who do not want to manage technical work.",
    },
    description: {
      fr: "Vous choisissez une direction, nous nous occupons du cadre technique, du design final et de la mise en ligne.",
      en: "You pick the direction, we handle the technical setup, the final polish and the launch.",
    },
    ownershipParagraph: {
      fr: "Chaque site est développé en interne, puis livré dans un cadre qui vous laisse réellement la main. Nous créons un compte GitHub à votre nom pour y pousser le projet, un compte Vercel ou une plateforme similaire pour le déploiement, ainsi qu’un compte Hostinger ou équivalent pour l’achat du nom de domaine, pris en charge la première année. Toute la structure, du code au déploiement, reste claire pour qu’un futur développeur puisse reprendre le site facilement si vous changez de prestataire.",
      en: "Each website is developed in-house and delivered in a setup that leaves you in control. We create a GitHub account in your name to push the project, a Vercel account or similar platform for deployment, and a Hostinger account or equivalent for the domain purchase, covered during the first year. The full structure, from code to deployment, stays clear so a future developer can take over easily if you ever change provider.",
    },
    linkLabel: {
      fr: "En lire plus sur notre blog",
      en: "Read more on our blog",
    },
  },
  templatesSection: {
    eyebrow: {
      fr: "Templates selectionnees",
      en: "Selected templates",
    },
    title: {
      fr: "Choisissez une base claire et nous l'adaptons a votre activite.",
      en: "Choose a clear starting point and we adapt it to your business.",
    },
    description: {
      fr: "Chaque template est une base de lancement: structure, design, rythme de page et contenus de conversion deja penses.",
      en: "Each template is a launch-ready base: structure, design, page rhythm and conversion content are already mapped out.",
    },
    cta: {
      fr: "Voir toutes les templates",
      en: "See all templates",
    },
  },
  faqSection: {
    eyebrow: {
      fr: "Questions frequentes",
      en: "Frequently asked questions",
    },
    title: {
      fr: "Les objections les plus courantes, traitees sans jargon.",
      en: "The most common objections, answered without jargon.",
    },
    description: {
      fr: "Vous devez comprendre l'offre avant de la comparer. Voici les points qui rassurent le plus souvent nos clients.",
      en: "You should understand the offer before you compare it. These are the points that usually reassure our clients the most.",
    },
  },
};

export const offerHighlights: OfferHighlight[] = [
  {
    id: "entry-price",
    icon: "badgeEuro",
    copy: {
      fr: {
        title: "À partir de 500€",
        description:
          "Un prix d'entree public, lisible et sans abonnement a ajouter pour exister en ligne.",
      },
      en: {
        title: "From €500",
        description:
          "A public entry price that stays readable and does not require a subscription just to exist online.",
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
          "Un cadre court pour les projets simples, avec une promesse de rapidite comprise des le premier contact.",
      },
      en: {
        title: "Live in 48 hours",
        description:
          "A short delivery frame for straightforward projects, with a speed promise that is clear from the first call.",
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
          "Le client garde le controle de son site, de ses contenus et de sa mise en ligne finale.",
      },
      en: {
        title: "You own 100% of the website",
        description:
          "The client keeps control of the website, its content and the final production asset.",
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
          "Vous achetez un site, pas une dependance. Le modele est simple et assume.",
      },
      en: {
        title: "No forced subscription",
        description:
          "You buy a website, not a dependency. The commercial model stays simple and explicit.",
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
          "Nous gerons la mise en ligne, le domaine, le SSL et le cadre technique sans vous laisser seul.",
      },
      en: {
        title: "Deployment included",
        description:
          "We handle launch, domain setup, SSL and technical delivery without leaving you alone with the details.",
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
          "Vous validez le fond et l'image. Nous prenons en charge la partie technique du debut a la mise en ligne.",
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
          "Le prix d'entree, le delai, la propriete et l'absence d'abonnement sont clairs des la premiere lecture.",
      },
      en: {
        title: "An offer that explains itself quickly",
        description:
          "The entry price, delivery time, ownership and lack of subscription are clear from the first read.",
      },
    },
  },
  {
    id: "ownership-first",
    icon: "shield",
    copy: {
      fr: {
        title: "La propriete n'est pas negociee",
        description:
          "Le site vous appartient. Sitekept ne construit pas un tunnel pour vous garder captif apres la livraison.",
      },
      en: {
        title: "Ownership is not negotiable",
        description:
          "The website belongs to you. Sitekept does not build a tunnel designed to lock you in after delivery.",
      },
    },
  },
  {
    id: "search-visibility",
    icon: "search",
    copy: {
      fr: {
        title: "Visibilite pensee des la base",
        description:
          "Le SEO et le GEO sont integres dans la structure de page, le message et la vitesse, pas ajoutes a la fin.",
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
          "Nous vendons une solution simple a acheter pour des PME et independants qui veulent un site utile, pas une stack.",
      },
      en: {
        title: "A non-technical sales language",
        description:
          "We sell a solution that is easy to buy for SMBs and solo founders who want a useful website, not a stack lecture.",
      },
    },
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "brief",
    copy: {
      fr: {
        title: "1. Vous nous donnez le cadre",
        description:
          "Activite, objectif, style prefere, template ou direction sur mesure: on verrouille rapidement le bon point de depart.",
      },
      en: {
        title: "1. You give us the frame",
        description:
          "Business, goal, preferred style, template or custom direction: we lock the right starting point quickly.",
      },
    },
  },
  {
    id: "build",
    copy: {
      fr: {
        title: "2. Nous adaptons et produisons",
        description:
          "Sitekept prepare la structure, le design, les contenus essentiels et l'ensemble technique pour que le site soit pret a etre valide.",
      },
      en: {
        title: "2. We adapt and build",
        description:
          "Sitekept prepares the structure, design, essential content and technical setup so the website is ready for review.",
      },
    },
  },
  {
    id: "review",
    copy: {
      fr: {
        title: "3. Vous validez, nous ajustons",
        description:
          "Vous corrigez les derniers details, nous appliquons les ajustements et nous verrouillons les points de conversion.",
      },
      en: {
        title: "3. You review, we adjust",
        description:
          "You validate the last details, we apply the adjustments and tighten the conversion-critical parts.",
      },
    },
  },
  {
    id: "launch",
    copy: {
      fr: {
        title: "4. Nous mettons en ligne",
        description:
          "Deploiement, domaine, performance et remise du site: vous repartez avec une presence en ligne claire et exploitable.",
      },
      en: {
        title: "4. We launch it",
        description:
          "Deployment, domain, performance checks and handoff: you leave with a clear online presence you fully control.",
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
      fr: "Non. L'offre est pensee pour vendre un site, pas une dependance. Les frais incompressibles comme l'hebergement ou le domaine peuvent exister selon le contexte, mais Sitekept n'impose pas un abonnement mensuel pour conserver votre site.",
      en: "No. The offer is built to sell a website, not a dependency. Unavoidable costs like hosting or domain renewal may exist depending on the setup, but Sitekept does not force a monthly subscription to keep your website alive.",
    },
  },
  {
    id: "ownership",
    question: {
      fr: "Est-ce que je possede vraiment le site ?",
      en: "Do I really own the website?",
    },
    answer: {
      fr: "Oui. Le site, sa structure et ses contenus vous appartiennent. Nous livrons un actif que vous pouvez garder, faire evoluer et reprendre sans blocage artificiel.",
      en: "Yes. The website, its structure and its content belong to you. We deliver an asset you can keep, evolve and take over without artificial lock-in.",
    },
  },
  {
    id: "launch",
    question: {
      fr: "Qui gere la mise en ligne ?",
      en: "Who handles the launch?",
    },
    answer: {
      fr: "Sitekept gere le deploiement, la configuration du domaine et la mise en ligne. Le but est que vous n'ayez pas a manipuler la partie technique.",
      en: "Sitekept handles deployment, domain configuration and the production launch. The point is to keep the technical side off your plate.",
    },
  },
  {
    id: "domain",
    question: {
      fr: "Le nom de domaine est-il inclus ?",
      en: "Is the domain included?",
    },
    answer: {
      fr: "Oui, le nom de domaine est offert pendant la premiere annee sur l'offre d'entree. Nous cadrons ensuite avec vous le renouvellement et la gestion future.",
      en: "Yes, the domain is included for the first year on the entry offer. We then clarify renewal and future management with you.",
    },
  },
  {
    id: "timing",
    question: {
      fr: "Combien de temps faut-il pour etre en ligne ?",
      en: "How long does it take to go live?",
    },
    answer: {
      fr: "Pour les projets qui entrent dans le cadre de l'offre, la promesse commerciale reste une mise en ligne en 48h. Si le besoin depasse ce cadre, nous vous l'annoncons avant de demarrer.",
      en: "For projects that fit the offer, the commercial promise remains a 48-hour launch. If the need goes beyond that frame, we say it before anything starts.",
    },
  },
  {
    id: "seo-geo",
    question: {
      fr: "Le site est-il vraiment pense pour la visibilite SEO et GEO ?",
      en: "Is the website really designed for SEO and GEO visibility?",
    },
    answer: {
      fr: "Oui. Nous structurons les pages pour charger vite, etre claires pour Google et rester faciles a citer dans les interfaces IA. Le SEO et le GEO sont des benefices integres a l'offre, pas une option ajoutee ensuite.",
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
          "Une base chaleureuse et commerçante pour vendre une presence locale claire, des horaires, une vitrine de produits et une commande simple.",
      },
      en: {
        name: "Bakery Template",
        description:
          "A warm, commerce-first base to sell a clear local presence, opening hours, product highlights and a simple ordering flow.",
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
          "Une direction plus editoriale et premium pour mettre en avant un style, des compositions et un univers visuel fort.",
      },
      en: {
        name: "Florist Template",
        description:
          "A more editorial, premium direction to highlight style, compositions and a strong visual universe.",
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
        name: "Template Reparation Ordinateur",
        description:
          "Une vitrine directe et rassurante pour presenter vos services, vos garanties et vos prises de contact sans friction.",
      },
      en: {
        name: "Computer Repair Template",
        description:
          "A direct and reassuring showcase to present services, guarantees and easy contact paths without friction.",
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
        name: "Template Patisserie",
        description:
          "Une base plus haut de gamme pour valoriser des creations, des evenements et une promesse de maison premium.",
      },
      en: {
        name: "Pastry Template",
        description:
          "A more premium foundation to showcase creations, events and a refined maison-level positioning.",
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
          "Une base clinique premium pour structurer l'information, rassurer dès le hero et pousser la prise de rendez-vous sans friction.",
      },
      en: {
        name: "Dentist Template",
        description:
          "A premium clinical base designed to structure information, reassure from the hero and drive appointment booking without friction.",
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
          "Une landing d'urgence locale pensée pour les appels rapides, les zones d'intervention et une conversion immédiate.",
      },
      en: {
        name: "Plumber & Heating Template",
        description:
          "A local emergency landing page built for rapid calls, service areas and immediate lead conversion.",
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
          "Une direction lifestyle et booking-first avec lookbook, prestations, équipe et réservations dans un cadre plus éditorial.",
      },
      en: {
        name: "Hair Salon Template",
        description:
          "A lifestyle, booking-first direction with lookbook, services, team and reservations in a more editorial frame.",
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
          "Une page claire et rassurante pour vendre des formules, des zones couvertes et une promesse de simplicité immédiate.",
      },
      en: {
        name: "Cleaning Services Template",
        description:
          "A clear and reassuring page to sell service plans, covered areas and a simple promise from the first screen.",
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
          "Un univers d'hospitalité plus immersif pour mettre en avant ambiance, carte, réservation et privatisation.",
      },
      en: {
        name: "Bistro Restaurant Template",
        description:
          "A more immersive hospitality direction built to highlight atmosphere, menu, bookings and private events.",
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
          "Une base narrative et premium pour vendre une direction artistique, des projets et une méthode en format portfolio.",
      },
      en: {
        name: "Interior Architect Template",
        description:
          "A premium narrative base to sell an artistic direction, featured projects and process in a portfolio format.",
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
          "Une landing sobre et autoritaire pour convertir sur la consultation initiale avec preuve d'expertise et structure documentaire.",
      },
      en: {
        name: "Law Firm Template",
        description:
          "A sober, authoritative landing page built to convert on the first consultation with expertise proof and documentary structure.",
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
          "Un site chic et sobre pour une avocate spécialisée en immobilier et successions France-Israël, avec blog et contact front-only.",
      },
      en: {
        name: "Tel Aviv Lawyer Template",
        description:
          "A chic, restrained site for a lawyer focused on real estate and France-Israel inheritance matters, with blog and front-only contact.",
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
          "Un modèle orienté recherche et estimation pour présenter les biens, les quartiers, les agents et les leads vendeurs.",
      },
      en: {
        name: "Real Estate Agency Template",
        description:
          "A search- and valuation-oriented model designed for listings, neighborhoods, agents and seller lead capture.",
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
    fr: "Templates prêtes a adapter a votre activite.",
    en: "Templates ready to adapt to your business.",
  },
  description: {
    fr: "Cette selection publique vous donne plusieurs points de depart. Vous choisissez un style, nous adaptons les contenus, les sections, le ton et les details commerciaux a votre activite.",
    en: "This public selection gives you multiple starting points. You choose a style and we adapt the content, sections, tone and commercial details to your business.",
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
    fr: "Le blog Sitekept sert d'abord a expliquer notre positionnement: rapidite, clarte commerciale, propriete du site et visibilite SEO/GEO.",
    en: "The Sitekept blog is primarily here to explain our positioning: speed, commercial clarity, website ownership and SEO/GEO visibility.",
  },
};

export const seoGeoPageContent: SeoGeoPageContent = {
  eyebrow: {
    fr: "SEO + GEO",
    en: "SEO + GEO",
  },
  title: {
    fr: "Comprendre le référencement naturel et ce qu’un site doit faire pour rester visible.",
    en: "Understand organic search and what a website needs to stay visible.",
  },
  intro: {
    fr: "Le référencement naturel reste une base essentielle dès qu’un site doit être trouvé au bon moment. Pour une PME, un indépendant ou une activité locale, un site n’a de valeur que s’il est compréhensible par Google, accessible à l’indexation et assez clair pour répondre à une intention de recherche réelle.",
    en: "Organic search remains a core foundation whenever a website needs to be found at the right moment. For an SMB, solo founder or local business, a website only creates value if Google can understand it, index it and match it to a real search intent.",
  },
  importanceTitle: {
    fr: "Pourquoi le référencement naturel reste décisif",
    en: "Why organic search still matters",
  },
  importanceParagraphs: {
    fr: [
      "Un bon référencement naturel permet à votre activité d’apparaître quand un prospect formule déjà un besoin. Cette visibilité est précieuse parce qu’elle ne dépend pas uniquement d’une campagne payante ou d’une publication ponctuelle: elle s’appuie sur la structure du site, la qualité des pages et la clarté de l’information proposée.",
      "Dans la pratique, cela signifie qu’un site bien pensé continue de travailler pour vous après sa mise en ligne. Il peut renforcer votre crédibilité, capter des recherches qualifiées et donner à Google des signaux cohérents sur votre activité, vos services et vos pages clés.",
    ],
    en: [
      "Strong organic visibility helps your business appear when a prospect already expresses a need. That visibility matters because it does not rely only on paid campaigns or one-off posts: it depends on the website structure, page quality and clarity of the information you publish.",
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
      "Un site réellement optimisé repose sur plusieurs éléments qui se renforcent entre eux: des pages utiles, une hiérarchie claire, des titres compréhensibles, des contenus rédigés pour répondre à de vraies questions, un maillage interne logique et une base technique propre. Une sitemap bien tenue et des pages indexables aident ensuite Google à explorer le site plus proprement.",
      "Aujourd’hui, cette logique sert aussi les interfaces IA. Quand un contenu est clair, bien structuré, contextuel et appuyé par des signaux cohérents, il devient plus facile à reprendre dans des réponses générées, des aperçus enrichis ou des recommandations. C’est là que SEO et GEO se rejoignent concrètement.",
    ],
    en: [
      "A truly optimized website combines several reinforcing elements: useful pages, clear hierarchy, understandable titles, content written to answer real questions, logical internal linking and a clean technical base. A maintained sitemap and indexable pages then help Google explore the site more reliably.",
      "Today, the same logic also serves AI interfaces. When content is clear, well-structured, contextual and backed by consistent signals, it becomes easier to reuse in generated answers, enriched previews or recommendations. That is where SEO and GEO meet in practice.",
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
    category: {
      fr: "Lancement rapide",
      en: "Fast launch",
    },
    title: {
      fr: "Pourquoi un site rapide a lancer compte autant pour une PME ou un independant",
      en: "Why a fast launch website matters so much for an SMB or solo founder",
    },
    excerpt: {
      fr: "Un bon site n'est pas seulement beau. Il doit etre en ligne vite, cadrer votre offre et commencer a travailler commercialement sans delais inutiles.",
      en: "A good website is not only beautiful. It should go live fast, frame your offer and start working commercially without useless delays.",
    },
    seoTitle: {
      fr: "Site web rapide a lancer pour PME et independant | Sitekept",
      en: "Fast launch website for SMBs and solo founders | Sitekept",
    },
    seoDescription: {
      fr: "Pourquoi la rapidite de mise en ligne change la rentabilite d'un site pour une PME ou un independant, et comment Sitekept structure cette promesse.",
      en: "Why fast launch changes the ROI of a website for SMBs and solo founders, and how Sitekept structures that promise.",
    },
    intro: {
      fr: "Quand une PME ou un independant achete un site, le vrai cout ne se limite pas a la facture. Il y a aussi le temps perdu quand le projet traine, les ventes qui n'arrivent pas et l'image qui reste floue trop longtemps.",
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
            "Un site qui sort vite permet de clarifier une offre, de lancer des campagnes, d'envoyer un lien propre apres un rendez-vous et d'arreter de bricoler sa presence en ligne.",
            "Pour beaucoup de petites structures, attendre plusieurs semaines revient surtout a continuer sans support de vente clair. La rapidite cree un levier commercial immediat.",
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
          fr: "Rapide ne veut pas dire baclé",
          en: "Fast does not mean rushed",
        },
        paragraphs: {
          fr: [
            "La rapidite devient credible quand le cadre est clair: une offre simple, des decisions reduites, une base de design preparee et un process de validation court.",
            "C'est exactement le sens d'une offre Sitekept: aller vite sur ce qui compte sans vous embarquer dans un projet lourd ou une refonte ouverte sans fin.",
          ],
          en: [
            "Speed becomes credible when the frame is clear: a simple offer, fewer decisions, a prepared design base and a short review loop.",
            "That is exactly what a Sitekept offer means: move fast on what matters without dragging you into a heavy project or an endless open-ended redesign.",
          ],
        },
        bullets: {
          fr: [
            "un point de depart clair",
            "des contenus essentiels identifies",
            "un cadre technique deja gere",
            "une validation concentree sur l'utile",
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
          fr: [
            "Vous achetez du temps recupere, une offre mieux presentee, un support de prospection plus propre et un meilleur controle de votre image.",
            "Si le site est bien structure des le depart, il devient aussi une base solide pour le SEO, le GEO et les futures iterations commerciales.",
          ],
          en: [
            "You buy recovered time, a better framed offer, a cleaner prospecting asset and stronger control over your brand image.",
            "If the website is structured well from day one, it also becomes a strong base for SEO, GEO and future commercial iterations.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site rapide sans zone grise commerciale ?",
      en: "Want a fast website without commercial gray zones?",
    },
    ctaDescription: {
      fr: "Parlez-nous de votre activite. Nous vous dirons vite si votre projet entre dans le cadre de l'offre 48h.",
      en: "Tell us about your business and we will quickly tell you whether your project fits the 48-hour offer.",
    },
  },
  {
    slug: "posseder-son-site-sans-abonnement",
    category: {
      fr: "Propriete du site",
      en: "Website ownership",
    },
    title: {
      fr: "Pourquoi posseder 100% de son site sans abonnement change la relation avec son prestataire",
      en: "Why owning 100% of your website without a subscription changes the agency relationship",
    },
    excerpt: {
      fr: "Un site peut etre un actif ou une dependance. La difference se joue souvent dans le contrat, la livraison et le niveau de controle que garde le client.",
      en: "A website can be an asset or a dependency. The difference is often hidden in the contract, delivery model and the level of control the client keeps.",
    },
    seoTitle: {
      fr: "Posseder son site sans abonnement | Sitekept",
      en: "Own your website without a subscription | Sitekept",
    },
    seoDescription: {
      fr: "Pourquoi la propriete complete du site et l'absence d'abonnement imposee sont des avantages commerciaux, budgetaires et operationnels.",
      en: "Why full website ownership and the absence of forced subscriptions are commercial, budgetary and operational advantages.",
    },
    intro: {
      fr: "Beaucoup d'entreprises pensent acheter un site alors qu'elles achetent en realite un acces conditionnel a un site. Quand la propriete reste floue, la relation avec le prestataire devient plus fragile et plus couteuse.",
      en: "Many businesses think they are buying a website while they are really buying conditional access to one. When ownership stays unclear, the agency relationship becomes more fragile and more expensive.",
    },
    sections: [
      {
        id: "asset-vs-dependency",
        title: {
          fr: "Un site doit etre un actif, pas une laisse",
          en: "A website should be an asset, not a leash",
        },
        paragraphs: {
          fr: [
            "Quand vous possedez vraiment votre site, vous gardez votre liberte de faire evoluer le projet, de changer de prestataire ou de reprendre la main plus tard.",
            "A l'inverse, un modele ou tout passe par un abonnement opaque cree de la friction a chaque changement, meme minime.",
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
          fr: "Ce que la propriete complete change concretement",
          en: "What full ownership changes in practice",
        },
        paragraphs: {
          fr: [
            "La propriete ne releve pas seulement d'un principe. Elle change votre budget, votre pouvoir de negociation et votre serenite sur le long terme.",
            "Un client qui possede son site peut investir dans l'acquisition, le contenu ou l'evolution produit sans craindre de repartir de zero pour des raisons contractuelles.",
          ],
          en: [
            "Ownership is not only a principle. It changes your budget, your negotiation leverage and your long-term peace of mind.",
            "A client who owns the website can invest in acquisition, content or product evolution without fearing a full reset for contractual reasons.",
          ],
        },
        bullets: {
          fr: [
            "moins de dependance commerciale",
            "moins de surprises budgetaires",
            "plus de marge pour changer ou faire evoluer",
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
            "Nous assumons une logique simple: vous achetez un site, pas un verrou. L'absence d'abonnement imposé et la propriété frontale font partie de l'offre, pas d'une option premium.",
            "C'est aussi ce qui rend l'offre plus facile a acheter pour des clients non techniques: ils comprennent ce qu'ils paient et ce qu'ils recuperent.",
          ],
          en: [
            "We keep it simple: you buy a website, not a lock. No forced subscription and explicit ownership are part of the offer, not a premium upsell.",
            "That also makes the offer easier to buy for non-technical clients: they understand what they pay for and what they get back.",
          ],
        },
      },
    ],
    ctaTitle: {
      fr: "Vous voulez un site utile sans rester captive d'un abonnement ?",
      en: "Want a useful website without staying trapped in a subscription?",
    },
    ctaDescription: {
      fr: "Nous pouvons cadrer une offre simple, rapide et livree comme un vrai actif pour votre entreprise.",
      en: "We can frame a simple, fast offer delivered as a real business asset.",
    },
  },
  {
    slug: "site-optimise-seo-geo",
    category: {
      fr: "Visibilite",
      en: "Visibility",
    },
    title: {
      fr: "Ce qu'un site optimise SEO et GEO doit faire pour rester visible sur Google et dans les interfaces IA",
      en: "What an SEO and GEO optimized website needs to do to stay visible on Google and in AI interfaces",
    },
    excerpt: {
      fr: "La visibilite moderne ne se limite plus au SEO classique. Les interfaces IA reprennent, resumment et recommandent des contenus. Le site doit etre lisible pour les deux mondes.",
      en: "Modern visibility is not limited to classic SEO anymore. AI interfaces reuse, summarize and recommend content. A website must stay legible to both worlds.",
    },
    seoTitle: {
      fr: "Site optimise SEO et GEO | Sitekept",
      en: "SEO and GEO optimized website | Sitekept",
    },
    seoDescription: {
      fr: "Comment penser un site visible a la fois pour Google et pour les interfaces IA: structure, vitesse, clarte et signaux de confiance.",
      en: "How to design a website that stays visible for both Google and AI interfaces: structure, speed, clarity and trust signals.",
    },
    intro: {
      fr: "Le SEO reste essentiel, mais il ne suffit plus a expliquer toute la visibilite. De plus en plus d'utilisateurs decouvrent des entreprises via des reponses generees par IA, des apercus enrichis ou des assistants qui reformulent l'information.",
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
            "Pour Google comme pour les interfaces IA, un site doit annoncer clairement son offre, son public, sa promesse et ses preuves de confiance. C'est ce qui rend l'information exploitable et facile a citer.",
            "Une page rapide, bien hierarchisee et semantiquement propre aide autant le moteur classique que les systemes qui resumment vos contenus.",
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
          fr: "La clarte commerciale devient un vrai signal",
          en: "Commercial clarity becomes a real signal",
        },
        paragraphs: {
          fr: [
            "Un site visible ne doit pas seulement parler technique. Il doit dire clairement ce qu'on vend, pour qui, a quel point d'entree et avec quelles garanties. C'est ce qui permet aussi aux interfaces IA de reprendre une reponse fiable.",
            "Plus l'offre est claire, plus elle peut etre reformulee sans perdre son sens. C'est un vrai avantage GEO.",
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
            "des CTA coherents",
            "des contenus faciles a citer",
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
            "Nous integrons la visibilite dans la structure du site des le debut: vitesse, sections claires, copy concise, signaux de confiance et pages utiles a l'acquisition.",
            "Le SEO et le GEO ne remplacent pas la promesse commerciale. Ils l'amplifient quand le site est deja clair, rapide et credible.",
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
  },
  {
    slug: "qu-est-ce-que-le-seo-et-le-geo",
    category: {
      fr: "SEO + GEO",
      en: "SEO + GEO",
    },
    title: {
      fr: "Qu’est-ce que le SEO et le GEO ?",
      en: "What are SEO and GEO?",
    },
    excerpt: {
      fr: "SEO et GEO poursuivent le même objectif: rendre un site plus facile à trouver et à comprendre, que la recherche passe par Google ou par une interface IA.",
      en: "SEO and GEO pursue the same goal: making a website easier to find and understand, whether discovery happens through Google or an AI interface.",
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
      fr: "Quand on parle de visibilité en ligne, beaucoup d’entreprises pensent d’abord à Google. C’est logique. Mais les usages évoluent: une partie des recherches passe désormais par des aperçus générés, des assistants conversationnels ou des interfaces IA qui reformulent les résultats. Pour rester visible dans ce contexte, il faut comprendre deux notions complémentaires: le SEO et le GEO.",
      en: "When people talk about online visibility, most businesses first think about Google. That makes sense. But search behavior is evolving: part of discovery now happens through generated overviews, conversational assistants and AI interfaces that reformulate results. To stay visible in that context, two complementary ideas matter: SEO and GEO.",
    },
    sections: [
      {
        id: "seo-definition",
        title: {
          fr: "Le SEO: être bien compris par les moteurs de recherche",
          en: "SEO: being well understood by search engines",
        },
        paragraphs: {
          fr: [
            "Le SEO, ou référencement naturel, désigne tout ce qui aide un site à apparaître dans les résultats non payants des moteurs de recherche. Cela repose sur des pages utiles, une structure claire, des titres compréhensibles, un bon maillage interne, une indexation correcte et une base technique saine.",
            "En pratique, le SEO permet à votre activité d’être trouvée quand un prospect exprime déjà un besoin. C’est ce qui transforme un site en outil commercial plutôt qu’en simple présence en ligne.",
          ],
          en: [
            "SEO, or search engine optimization, covers everything that helps a website appear in unpaid search results. It relies on useful pages, clear structure, understandable titles, strong internal linking, proper indexing and a sound technical foundation.",
            "In practice, SEO helps your business be found when a prospect already expresses a need. That is what turns a website into a commercial tool rather than a simple online presence.",
          ],
        },
      },
      {
        id: "geo-definition",
        title: {
          fr: "Le GEO: rester exploitable dans les réponses générées par l’IA",
          en: "GEO: staying reusable in AI-generated answers",
        },
        paragraphs: {
          fr: [
            "Le terme GEO est souvent utilisé pour parler de la capacité d’un site à rester clair, fiable et réutilisable dans les réponses générées par l’IA. Ici, l’enjeu n’est pas seulement d’apparaître sur une page de résultats, mais aussi d’être suffisamment compréhensible pour qu’une interface IA puisse s’appuyer sur votre contenu ou recommander votre activité.",
            "Cela suppose un contenu précis, des réponses naturelles aux questions fréquentes, des signaux de confiance visibles, ainsi qu’une structure qui aide les systèmes à identifier qui vous êtes, ce que vous proposez et pourquoi cela peut être utile à l’utilisateur.",
          ],
          en: [
            "The term GEO is often used to describe a website’s ability to stay clear, reliable and reusable in AI-generated answers. The goal is not only to appear on a search results page, but also to be understandable enough for an AI interface to rely on your content or recommend your business.",
            "That requires precise content, natural answers to frequent questions, visible trust signals and a structure that helps systems identify who you are, what you offer and why it may be useful to the user.",
          ],
        },
      },
      {
        id: "how-they-work-together",
        title: {
          fr: "Pourquoi ils se complètent au lieu de s’opposer",
          en: "Why they complement each other instead of competing",
        },
        paragraphs: {
          fr: [
            "Le SEO et le GEO reposent sur une base commune: un site clair, utile, rapide et indexable. Un contenu bien structuré aide Google à classer vos pages, mais il aide aussi les interfaces IA à reformuler correctement votre offre.",
            "Autrement dit, le GEO ne remplace pas le SEO. Il prolonge sa logique dans de nouveaux usages. Pour une entreprise, la bonne approche consiste donc à construire un site qui répond clairement à des questions humaines, tout en restant lisible pour les moteurs et les systèmes génératifs.",
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
  },
  {
    slug: "site-sans-referencement-peut-devenir-inutile",
    category: {
      fr: "Visibilité",
      en: "Visibility",
    },
    title: {
      fr: "Un site sans référencement peut s’avérer inutile : une vitrine que personne ne voit, c’est comme si elle n’existait pas",
      en: "A website without search visibility can become useless: if nobody sees the storefront, it may as well not exist",
    },
    excerpt: {
      fr: "Un site peut être propre et bien conçu, mais s’il n’est jamais trouvé, il ne joue pas son rôle commercial. La visibilité fait partie de son utilité réelle.",
      en: "A website can be clean and well designed, but if nobody finds it, it does not fulfill its commercial role. Visibility is part of its real usefulness.",
    },
    seoTitle: {
      fr: "Pourquoi un site sans référencement peut devenir inutile | Sitekept",
      en: "Why a website without search visibility can become useless | Sitekept",
    },
    seoDescription: {
      fr: "Pourquoi un site qui n’est pas trouvé sur Google ou dans les réponses IA peut échouer commercialement, même s’il est bien présenté.",
      en: "Why a website that cannot be found on Google or in AI answers can fail commercially, even when it looks good.",
    },
    intro: {
      fr: "Un site web n’est pas seulement un objet de présentation. Il doit aider à être trouvé, rassurer au bon moment et faciliter la prise de contact. Quand il manque de visibilité, il perd une partie essentielle de sa valeur. Une vitrine invisible ne soutient ni les ventes, ni la notoriété, ni la crédibilité d’une entreprise.",
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
            "Dans ces contextes, le référencement naturel ne sert pas à “faire du trafic” au sens abstrait. Il sert à capter des personnes déjà proches d’une décision ou d’une prise de contact.",
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
  },
  {
    slug: "pourquoi-optimisation-referencement-naturel-importante",
    category: {
      fr: "Référencement naturel",
      en: "Organic search",
    },
    title: {
      fr: "Pourquoi l’optimisation au référencement naturel est importante et ce qu’elle apporte réellement",
      en: "Why organic search optimization matters and what it really brings",
    },
    excerpt: {
      fr: "Le référencement naturel n’est pas un supplément technique. C’est ce qui permet à un site d’attirer une audience qualifiée, de rester crédible et de continuer à être trouvé dans le temps.",
      en: "Organic search optimization is not a technical add-on. It is what helps a website attract qualified traffic, stay credible and keep being discovered over time.",
    },
    seoTitle: {
      fr: "Pourquoi le référencement naturel est important | Sitekept",
      en: "Why organic search optimization matters | Sitekept",
    },
    seoDescription: {
      fr: "Visibilité, trafic qualifié, crédibilité, présence durable: voici ce que le référencement naturel apporte réellement à un site web.",
      en: "Visibility, qualified traffic, credibility and durable discoverability: here is what organic search optimization really brings to a website.",
    },
    intro: {
      fr: "Le référencement naturel est parfois résumé à une affaire de mots-clés. C’est une vision trop courte. En réalité, il s’agit surtout de rendre un site trouvable, compréhensible et crédible pour des prospects qui cherchent déjà une réponse. C’est cette capacité qui lui donne une vraie valeur commerciale dans le temps.",
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
      fr: "Pourquoi avoir un site qui nous appartient à 100 % change tout | Sitekept",
      en: "Why full website ownership changes everything | Sitekept",
    },
    seoDescription: {
      fr: "Abonnements, autonomie, changement de prestataire, accès et contrôle du code: pourquoi la propriété complète du site change la donne.",
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
            "Quand vous détenez le site à 100 %, vous gardez la main sur le code, le dépôt, les accès techniques et le déploiement. Vous pouvez faire évoluer le projet, faire intervenir un autre développeur ou reprendre vous-même certains sujets sans dépendre d’un verrou artificiel.",
            "Cette autonomie n’oblige pas à devenir technique. Elle garantit simplement que la technique reste à votre service, et non l’inverse.",
          ],
          en: [
            "When you own the website 100%, you keep control over the code, repository, technical access and deployment. You can evolve the project, involve another developer or take over some topics yourself without depending on artificial lock-in.",
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
      en: "Delivery does not stop at launch. It includes the code, access, GitHub repository, deployment and domain so the client truly owns the website.",
    },
    seoTitle: {
      fr: "Comment se passe la livraison d’un site web chez Sitekept ? | Sitekept",
      en: "How does website delivery work at Sitekept? | Sitekept",
    },
    seoDescription: {
      fr: "Développement en interne, dépôt GitHub client, déploiement sur Vercel, domaine pris la première année et structure claire: voici comment Sitekept livre un site web.",
      en: "In-house development, client GitHub repository, Vercel deployment, first-year domain purchase and a clear structure: here is how Sitekept delivers a website.",
    },
    intro: {
      fr: "Pour Sitekept, livrer un site ne veut pas seulement dire publier une URL. La livraison doit aussi garantir que le client possède réellement le projet, ses accès et sa capacité à le faire évoluer plus tard. C’est cette logique qui guide la façon dont nous développons, déployons et remettons chaque site.",
      en: "For Sitekept, delivering a website does not simply mean publishing a URL. Delivery must also guarantee that the client truly owns the project, its access and the ability to evolve it later. That is the logic that guides how we build, deploy and hand over each website.",
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
            "Pour garantir la propriété à 100 %, nous créons un compte GitHub au client puis nous y poussons le projet. Le code n’est donc pas conservé dans un espace inaccessible: le dépôt appartient au client dès la livraison.",
            "Nous créons ensuite un compte Vercel ou une plateforme similaire au nom du client pour y déployer le site. Enfin, nous créons un compte Hostinger ou une plateforme comparable afin d’acheter le nom de domaine, pris en charge la première année. Le déploiement et le domaine sont donc remis dans un environnement que le client contrôle.",
          ],
          en: [
            "To guarantee 100% ownership, we create a GitHub account for the client and push the project into it. The code is not kept in an inaccessible space: the repository belongs to the client from delivery onward.",
            "We then create a Vercel account or similar platform in the client’s name to deploy the website. Finally, we create a Hostinger account or comparable platform to purchase the domain, covered during the first year. Deployment and domain are therefore handed over in an environment the client controls.",
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
            "La livraison comprend une logique de reprise future. Toute la structure du projet, du code au déploiement, est pensée pour rester compréhensible. Cela ne veut pas dire que le client doit gérer la technique au quotidien, mais qu’il n’est jamais enfermé dans un système flou.",
            "Si le client souhaite plus tard travailler avec un autre développeur ou une autre agence, le site peut être repris dans de bonnes conditions parce que le dépôt, les accès et le domaine sont déjà dans un cadre clair et propriétaire.",
          ],
          en: [
            "Delivery includes a future takeover logic. The full project structure, from code to deployment, is designed to remain understandable. That does not mean the client must handle the technical side every day, but it does mean they are never locked into a vague system.",
            "If the client later wants to work with another developer or agency, the website can be taken over in good conditions because the repository, access and domain already live in a clear ownership framework.",
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
      en: "We can show you how to frame a fast website without sacrificing ownership or future handoff.",
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
