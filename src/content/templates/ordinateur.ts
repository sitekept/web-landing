import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « ordinateur » (atelier de réparation d’ordinateurs et de
 * smartphones, page unique, marque fictive « TechRepair Pro »).
 *
 * Toute la copie visible vit ici : navigation, sections, `alt`, métadonnées.
 * Les vues (`src/templates/ordinateur/`) n’ont aucun texte en dur. La
 * navigation se fait par ancres (`/ordinateur#services`, ...), les `id` sont
 * dans `src/templates/ordinateur/parts.tsx` et valent pour le français et
 * l’anglais.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `OrdinateurCopy`
 * (dérivé de `fr` par `WidenLiterals`).
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais (table `ICONS` dans `parts.tsx`).
 *
 * Images : Unsplash, sans marque, texte lisible ni visage. `alt` dans la copie.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: unsplash("1731400800900-1bce57414c09"),
  screen: unsplash("1515833305013-e64177301e04"),
  motherboard: unsplash("1617839625591-e5a789593135"),
  data: unsplash("1558494949-ef010cbdcc31"),
  phoneScreen: unsplash("1746006084492-24a8fd02710a"),
  battery: unsplash("1601593346740-925612772716"),
  connector: unsplash("1660820936305-3e8df25adf0d"),
  bench: unsplash("1581092921461-eab62e97a780"),
  solder: unsplash("1562568068-7a90cf9e499d"),
} as const;

const fr = {
  brand: {
    name: "TechRepair Pro",
  },
  phone: {
    href: "tel:+33536490067",
    label: "05 36 49 00 67",
  },
  email: {
    href: "mailto:contact@techrepair-pro.example",
    label: "contact@techrepair-pro.example",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    about: "À propos",
    gallery: "Réalisations",
    contact: "Contact",
  },
  hero: {
    badge: "Experts en réparation depuis 2010",
    titleStart: "TechRepair",
    titleAccent: "Pro",
    description:
      "Réparation d’ordinateurs et smartphones. Diagnostic gratuit, intervention rapide, garantie sur toutes nos réparations. Votre technologie entre de bonnes mains.",
    seeServices: "Nos services",
    freeDiagnostic: "Diagnostic gratuit",
    image: {
      src: IMG.hero,
      alt: "Gros plan sur une carte électronique bleue et ses composants",
    },
  },
  services: {
    title: "Nos services de réparation",
    description:
      "Spécialisés dans la réparation d’ordinateurs et smartphones, nous intervenons rapidement avec des pièces de qualité et une garantie sur tous nos services.",
    groups: [
      {
        title: "Réparation Ordinateurs",
        items: [
          {
            name: "Écran cassé / Dalle LCD",
            description:
              "Remplacement d’écran PC portable, réparation dalle LCD/LED",
            price: "80-150 €",
            image: {
              src: IMG.screen,
              alt: "Gros plan sur un écran fissuré, vitre brisée en étoile",
            },
          },
          {
            name: "Problème carte mère",
            description:
              "Diagnostic et réparation carte mère, circuits électroniques",
            price: "60-200 €",
            image: {
              src: IMG.motherboard,
              alt: "Circuit imprimé doré vu de dessus",
            },
          },
          {
            name: "Récupération de données",
            description:
              "Récupération fichiers disque dur défaillant, SSD endommagé",
            price: "90-300 €",
            image: {
              src: IMG.data,
              alt: "Baies de serveurs et câbles réseau dans un local technique sombre",
            },
          },
        ],
      },
      {
        title: "Réparation Smartphones",
        items: [
          {
            name: "Écran iPhone/Android",
            description:
              "Remplacement écran tactile, vitre cassée toutes marques",
            price: "50-180 €",
            image: {
              src: IMG.phoneScreen,
              alt: "Smartphone à l’écran brisé posé sur un fond bleu clair",
            },
          },
          {
            name: "Batterie défaillante",
            description: "Changement batterie iPhone, Samsung, Huawei, Xiaomi",
            price: "40-80 €",
            image: {
              src: IMG.battery,
              alt: "Main tenant un smartphone dans une coque noire texturée",
            },
          },
          {
            name: "Connecteur de charge",
            description: "Réparation port USB-C, Lightning, micro-USB",
            price: "45-90 €",
            image: {
              src: IMG.connector,
              alt: "Connecteur USB-C blanc posé sur un fond clair",
            },
          },
        ],
      },
    ],
  },
  about: {
    title: "Expertise technique depuis 2010",
    paragraphs: [
      "Fondé par des ingénieurs passionnés d’informatique, TechRepair Pro est devenu la référence en réparation d’ordinateurs et smartphones. Notre équipe certifiée intervient sur toutes marques avec des outils professionnels de dernière génération.",
      "Nous nous engageons sur la qualité avec une garantie de 6 mois sur toutes nos réparations. Notre atelier est équipé des dernières technologies pour diagnostiquer et réparer efficacement vos appareils électroniques.",
    ],
    stats: [
      { icon: "award", value: "500+", label: "Réparations/mois" },
      { icon: "users", value: "15 000+", label: "Clients satisfaits" },
    ],
    badge: { value: "14", label: "Années d’expérience" },
    image: {
      src: IMG.bench,
      alt: "Technicien réparant une carte électronique de smartphone sous une lampe",
    },
  },
  reviews: {
    title: "Avis de nos clients",
    ratingLabel: "5 étoiles sur 5",
    items: [
      {
        name: "Alexandre M.",
        text: "Écran de MacBook réparé en 2h ! Service ultra-rapide et professionnel. Mon ordinateur fonctionne parfaitement. Je recommande vivement.",
        event: "Réparation MacBook",
      },
      {
        name: "Sarah D.",
        text: "iPhone tombé dans l’eau, ils ont réussi à le sauver et récupérer toutes mes photos. Équipe compétente et prix correct.",
        event: "Réparation iPhone",
      },
      {
        name: "Pierre L.",
        text: "PC qui ne démarrait plus, diagnostic gratuit et réparation carte mère. Excellent travail, garantie respectée. Très satisfait !",
        event: "Réparation PC",
      },
    ],
  },
  gallery: {
    title: "Nos réalisations",
    description: "Aperçu de notre atelier et de nos réparations techniques",
    images: [
      {
        src: IMG.motherboard,
        alt: "Circuit imprimé doré vu de dessus",
      },
      {
        src: IMG.screen,
        alt: "Gros plan sur un écran fissuré, vitre brisée en étoile",
      },
      {
        src: IMG.data,
        alt: "Baies de serveurs et câbles réseau dans un local technique sombre",
      },
      {
        src: IMG.phoneScreen,
        alt: "Smartphone à l’écran brisé posé sur un fond bleu clair",
      },
      {
        src: IMG.battery,
        alt: "Main tenant un smartphone dans une coque noire texturée",
      },
      {
        src: IMG.connector,
        alt: "Connecteur USB-C blanc posé sur un fond clair",
      },
      {
        src: IMG.bench,
        alt: "Technicien réparant une carte électronique de smartphone sous une lampe",
      },
      {
        src: IMG.solder,
        alt: "Soudure d’un composant sur un circuit imprimé au fer à souder",
      },
    ],
  },
  specials: {
    title: "Services spécialisés",
    description:
      "Au-delà de la réparation, nous proposons des services complets",
    items: [
      {
        icon: "shield",
        title: "Dépannage à domicile",
        description:
          "Intervention directement chez vous pour problèmes logiciels et hardware",
      },
      {
        icon: "wrench",
        title: "Maintenance préventive",
        description:
          "Nettoyage, optimisation et mise à jour pour prolonger la durée de vie",
      },
      {
        icon: "smartphone",
        title: "Vente d’accessoires",
        description:
          "Coques, films protecteurs, chargeurs et accessoires de qualité",
      },
    ],
  },
  contact: {
    title: "Contactez nos experts",
    address: {
      icon: "mapPin",
      label: "Adresse",
      lines: ["15 Rue de la Technologie", "31000 Toulouse, France"],
    },
    hours: {
      icon: "clock",
      label: "Horaires d’ouverture",
      weekdays: "Lundi - Vendredi : 9h00 - 18h30",
      saturday: "Samedi : 9h00 - 17h00",
      closed: "Fermé le dimanche",
    },
    phoneInfo: { icon: "phone", label: "Téléphone" },
    emailInfo: { icon: "mail", label: "Email" },
    diagnostic: {
      title: "Diagnostic gratuit",
      text: "Apportez votre appareil pour un diagnostic gratuit et sans engagement. Devis détaillé fourni avant toute intervention. Réparation express possible.",
      book: "Prendre rendez-vous",
      quote: "Demander un devis",
      note: "* Garantie 6 mois sur toutes nos réparations",
    },
  },
  footer: {
    text: "Experts en réparation depuis 2010. Ordinateurs et smartphones entre de bonnes mains.",
    linksTitle: "Liens rapides",
    certTitle: "Certifications",
    certText:
      "Techniciens certifiés Apple, Samsung, Huawei. Matériel professionnel et pièces d’origine.",
    copyright: "© 2024 TechRepair Pro. Tous droits réservés.",
  },
  meta: {
    home: {
      title: "TechRepair Pro - Réparation Ordinateurs & Smartphones",
      description:
        "TechRepair Pro, experts en réparation d’ordinateurs et smartphones depuis 2010. Diagnostic gratuit, intervention rapide, garantie sur toutes nos réparations.",
    },
  },
} as const;

export type OrdinateurCopy = WidenLiterals<typeof fr>;
export type OrdinateurIconKey = TemplateIconKey<OrdinateurCopy>;

const en: OrdinateurCopy = {
  brand: {
    name: "Your business",
  },
  phone: {
    href: "tel:+33536490067",
    label: "05 36 49 00 67",
  },
  email: {
    href: "mailto:contact@example.com",
    label: "contact@example.com",
  },
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    gallery: "Our work",
    contact: "Contact",
  },
  hero: {
    badge: "Repair experts since 2010",
    titleStart: "Your",
    titleAccent: "business",
    description:
      "Computer and smartphone repair. Free diagnostic, fast turnaround and a warranty on all our repairs. Your technology is in good hands.",
    seeServices: "Our services",
    freeDiagnostic: "Free diagnostic",
    image: {
      src: IMG.hero,
      alt: "Close-up of a blue electronic circuit board and its components",
    },
  },
  services: {
    title: "Our repair services",
    description:
      "We specialize in computer and smartphone repair, and we work fast with quality parts and a warranty on all our services.",
    groups: [
      {
        title: "Computer repair",
        items: [
          {
            name: "Broken screen / LCD panel",
            description: "Laptop screen replacement, LCD/LED panel repair",
            price: "€80-150",
            image: {
              src: IMG.screen,
              alt: "Close-up of a cracked screen with glass shattered in a starburst",
            },
          },
          {
            name: "Motherboard issue",
            description:
              "Motherboard diagnosis and repair, electronic circuits",
            price: "€60-200",
            image: {
              src: IMG.motherboard,
              alt: "Overhead view of a gold circuit board",
            },
          },
          {
            name: "Data recovery",
            description:
              "File recovery from failing hard drives and damaged SSDs",
            price: "€90-300",
            image: {
              src: IMG.data,
              alt: "Server racks and network cables in a dark equipment room",
            },
          },
        ],
      },
      {
        title: "Smartphone repair",
        items: [
          {
            name: "iPhone/Android screen",
            description:
              "Touchscreen replacement, broken glass repair, all brands",
            price: "€50-180",
            image: {
              src: IMG.phoneScreen,
              alt: "Smartphone with a shattered screen lying on a light blue background",
            },
          },
          {
            name: "Failing battery",
            description:
              "Battery replacement for iPhone, Samsung, Huawei, Xiaomi",
            price: "€40-80",
            image: {
              src: IMG.battery,
              alt: "Hand holding a smartphone in a textured black case",
            },
          },
          {
            name: "Charging port",
            description: "USB-C, Lightning and micro-USB port repair",
            price: "€45-90",
            image: {
              src: IMG.connector,
              alt: "White USB-C connector on a light background",
            },
          },
        ],
      },
    ],
  },
  about: {
    title: "Technical expertise since 2010",
    paragraphs: [
      "Founded by engineers who love computing, Your business has become a go-to name in computer and smartphone repair. Our certified team works on all brands with the latest professional tools.",
      "We stand behind our quality with a 6-month warranty on all our repairs. Our workshop is equipped with the latest technology to diagnose and repair your electronic devices efficiently.",
    ],
    stats: [
      { icon: "award", value: "500+", label: "Repairs/month" },
      { icon: "users", value: "15,000+", label: "Satisfied customers" },
    ],
    badge: { value: "14", label: "Years of experience" },
    image: {
      src: IMG.bench,
      alt: "Technician repairing a smartphone circuit board under a lamp",
    },
  },
  reviews: {
    title: "What our customers say",
    ratingLabel: "5 out of 5 stars",
    items: [
      {
        name: "Alexandre M.",
        text: "MacBook screen repaired in 2 hours! Super fast and professional service. My computer works perfectly. Highly recommended.",
        event: "MacBook repair",
      },
      {
        name: "Sarah D.",
        text: "My iPhone fell in the water and they managed to save it and recover all my photos. Skilled team and fair prices.",
        event: "iPhone repair",
      },
      {
        name: "Pierre L.",
        text: "My PC wouldn’t start anymore. Free diagnostic and a motherboard repair. Excellent work, warranty honored. Very satisfied!",
        event: "PC repair",
      },
    ],
  },
  gallery: {
    title: "Our work",
    description: "A look at our workshop and our technical repairs",
    images: [
      {
        src: IMG.motherboard,
        alt: "Overhead view of a gold circuit board",
      },
      {
        src: IMG.screen,
        alt: "Close-up of a cracked screen with glass shattered in a starburst",
      },
      {
        src: IMG.data,
        alt: "Server racks and network cables in a dark equipment room",
      },
      {
        src: IMG.phoneScreen,
        alt: "Smartphone with a shattered screen lying on a light blue background",
      },
      {
        src: IMG.battery,
        alt: "Hand holding a smartphone in a textured black case",
      },
      {
        src: IMG.connector,
        alt: "White USB-C connector on a light background",
      },
      {
        src: IMG.bench,
        alt: "Technician repairing a smartphone circuit board under a lamp",
      },
      {
        src: IMG.solder,
        alt: "Soldering a component onto a circuit board with a soldering iron",
      },
    ],
  },
  specials: {
    title: "Specialty services",
    description: "Beyond repair, we offer a full range of services",
    items: [
      {
        icon: "shield",
        title: "On-site support",
        description: "We come to you to fix software and hardware problems",
      },
      {
        icon: "wrench",
        title: "Preventive maintenance",
        description:
          "Cleaning, optimization and updates to extend your device’s lifespan",
      },
      {
        icon: "smartphone",
        title: "Accessory sales",
        description:
          "Cases, screen protectors, chargers and quality accessories",
      },
    ],
  },
  contact: {
    title: "Contact our experts",
    address: {
      icon: "mapPin",
      label: "Address",
      lines: ["15 Rue de la Technologie", "31000 Toulouse, France"],
    },
    hours: {
      icon: "clock",
      label: "Opening hours",
      weekdays: "Monday-Friday: 9:00 AM-6:30 PM",
      saturday: "Saturday: 9:00 AM-5:00 PM",
      closed: "Closed on Sundays",
    },
    phoneInfo: { icon: "phone", label: "Phone" },
    emailInfo: { icon: "mail", label: "Email" },
    diagnostic: {
      title: "Free diagnostic",
      text: "Bring in your device for a free, no-obligation diagnostic. A detailed quote is provided before any work begins. Express repair available.",
      book: "Book an appointment",
      quote: "Request a quote",
      note: "* 6-month warranty on all our repairs",
    },
  },
  footer: {
    text: "Repair experts since 2010. Computers and smartphones in good hands.",
    linksTitle: "Quick links",
    certTitle: "Certifications",
    certText:
      "Technicians certified by Apple, Samsung and Huawei. Professional equipment and genuine parts.",
    copyright: "© 2024 Your business. All rights reserved.",
  },
  meta: {
    home: {
      title: "Your business - Computer and phone repair",
      description:
        "Computer and smartphone repair experts since 2010. Free diagnostic, fast turnaround and a warranty on all our repairs. Professional service and quality parts.",
    },
  },
};

export type OrdinateurPage = keyof OrdinateurCopy["meta"];

export const ordinateur: TemplateDefinition<"ordinateur", OrdinateurCopy> = {
  slug: "ordinateur",
  /**
   * Palette ardoise et bleu : fond de page `slate-50`, encre `slate-800`,
   * accent bleu plein (`blue-600`), fond inverse ardoise (à propos, contact,
   * héros), sur-titres en bleu clair sur fond sombre. Inter partout (la
   * démo d’origine demandait une police mono qui n’a jamais été chargée),
   * titres en gras, rayons de 8 px.
   */
  theme: {
    surface: "oklch(0.984 0.003 247.858)",
    raised: "oklch(1 0 0)",
    tint: "oklch(0.968 0.007 247.896)",
    ink: "oklch(0.279 0.041 260.031)",
    inkMuted: "oklch(0.5 0.035 257)",
    line: "oklch(0.929 0.013 255.508)",
    eyebrow: "oklch(0.546 0.245 262.881)",
    eyebrowInverse: "oklch(0.707 0.165 254.624)",
    accent: "oklch(0.546 0.245 262.881)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.279 0.041 260.031)",
    inverseInk: "oklch(1 0 0)",
    radius: "0.5rem",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 700,
    shadowSm: "0 1px 3px oklch(0 0 0 / 0.1), 0 1px 2px -1px oklch(0 0 0 / 0.1)",
    shadowLg:
      "0 10px 15px -3px oklch(0 0 0 / 0.1), 0 4px 6px -4px oklch(0 0 0 / 0.1)",
  },
  paths: {
    home: "/ordinateur",
  },
  copy: { fr, en },
};
