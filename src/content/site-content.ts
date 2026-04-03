export type SiteLocale = "fr" | "en";

export type LocalizedText = Record<SiteLocale, string>;

export interface FeaturedTemplate {
  id: string;
  slug: string;
  externalUrl: string;
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
  icon:
    | "badgeEuro"
    | "clock3"
    | "shieldCheck"
    | "rocket"
    | "globe"
    | "wrench";
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
  icon: "sparkles" | "shield" | "search" | "messagesSquare";
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
    bullets: Record<SiteLocale, string[]>;
    linkLabel: LocalizedText;
  };
  processSection: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
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
      fr: "Site professionnel à partir de 500€. Mise en ligne en 48h.",
      en: "Professional website from €500. Live in 48 hours.",
    },
    title: {
      fr: "Un site rapide à lancer, beau à voir et 100% à vous.",
      en: "A fast launch website that looks sharp and stays fully yours.",
    },
    description: {
      fr: "Sitekept conçoit, met en ligne et vous remet un site clair, rapide et visible sans abonnement impose. Vous gardez la propriete complete, nous gerons le deploiement, le domaine est offert la premiere annee.",
      en: "Sitekept designs, deploys and hands over a clear, fast and visible website without forced subscriptions. You keep full ownership, we handle deployment, and the domain is free for the first year.",
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
      fr: "Un site pense pour Google, mais aussi pour les interfaces IA qui recommandent des entreprises.",
      en: "A website built for Google and for AI interfaces that recommend businesses.",
    },
    description: {
      fr: "La visibilite ne depend pas seulement du design. Nous structurons les pages pour qu'elles chargent vite, repondent clairement a une intention et donnent aux moteurs comme aux assistants IA de bons signaux a reutiliser.",
      en: "Visibility is not just a design problem. We structure pages so they load fast, answer intent clearly and give both search engines and AI assistants strong signals to reuse.",
    },
    bullets: {
      fr: [
        "Pages rapides, propres et semantiques",
        "Message commercial explicite pour les recherches locales",
        "Contenus concis qui se reprennent bien dans les apercus IA",
        "Base saine pour enrichir ensuite votre acquisition",
      ],
      en: [
        "Fast, clean and semantic pages",
        "Explicit commercial messaging for local search intent",
        "Concise content that works well in AI summaries",
        "A healthy base for long-term acquisition growth",
      ],
    },
    linkLabel: {
      fr: "Lire notre page sur le SEO et le GEO",
      en: "Read our SEO and GEO page",
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
    icon: "sparkles",
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
    externalUrl:
      "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/boulangerie",
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
    externalUrl:
      "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/fleuriste",
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
    externalUrl:
      "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/ordinateur",
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
    id: "patisserie",
    slug: "patisserie",
    externalUrl:
      "https://6867a5f6b7d25d0008457ed6--thunderous-heliotrope-ff8341.netlify.app/pattiserie",
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
    fr: "Ces quatre directions servent de base de depart publique. Vous choisissez un style, nous adaptons les contenus, les sections, le ton et les details commerciaux a votre activite.",
    en: "These four directions are the public starting points. You choose a style and we adapt the content, sections, tone and commercial details to your business.",
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
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
