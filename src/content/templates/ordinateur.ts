import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « ordinateur » (atelier de réparation d’ordinateurs portables et
 * fixes, Mac et PC, particuliers et petites entreprises ; page unique, marque
 * fictive « Atelier Octet »).
 *
 * Toute la copie visible vit ici : navigation, sections, `alt`, métadonnées.
 * Les vues (`src/templates/ordinateur/`) n’ont aucun texte en dur. La
 * navigation se fait par ancres (`/ordinateur#reparations`, ...), les `id` sont
 * dans `src/templates/ordinateur/parts.tsx` et valent pour le français et
 * l’anglais.
 *
 * Version anglaise : `en`, plus bas, est une traduction typée `OrdinateurCopy`
 * (dérivé de `fr` par `WidenLiterals`).
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais (table `ICONS` dans `parts.tsx`).
 *
 * Images : Unsplash, sans marque, texte lisible ni visage. Les deux photos
 * d’ordinateur ouvert sont recadrées (`rect`, en pixels de l’original) pour
 * écarter une étiquette de disque et un bord de carte. `alt` dans la copie.
 * Prix, délais et durée de garantie sont cohérents entre sections et langues :
 * diagnostic gratuit sous 24 h ouvrées, garantie 6 mois.
 */

const unsplash = (id: string, extra = "") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80${extra}`;

const IMG = {
  /** Mains au-dessus d’un portable ouvert (original 8736 x 11648). */
  hero: unsplash("1721333089073-215a56fd710c", "&rect=4634,2417,4102,5128"),
  /** Ventilateur poussiéreux d’un portable (original 6000 x 4837). */
  fan: unsplash("1769085795297-b45cc8c92f5b", "&rect=0,0,6000,4000"),
  solder: unsplash("1562568068-7a90cf9e499d"),
  racks: unsplash("1558494949-ef010cbdcc31"),
} as const;

const fr = {
  brand: {
    name: "Atelier Octet",
    tagline: "Réparation informatique",
  },
  phone: {
    href: "tel:+33199000031",
    label: "01 99 00 00 31",
  },
  email: {
    href: "mailto:contact@atelier-octet.example",
    label: "contact@atelier-octet.example",
  },
  a11y: {
    quickActions: "Actions rapides",
  },
  cta: {
    deposit: "Déposer ma machine",
    call: "Appeler",
  },
  nav: {
    repairs: "Réparations",
    process: "Déroulé",
    business: "Entreprises",
    workshop: "Atelier",
    contact: "Contact",
  },
  hero: {
    title: "Votre ordinateur réparé,",
    accent: "vos fichiers à l’abri.",
    description:
      "Portables et fixes, Mac et PC : diagnostic gratuit sous 24 h ouvrées, devis ferme avant toute réparation, et vous ne payez que si vous êtes d’accord. Déposez votre machine à l’atelier ou faites-la enlever.",
    primary: "Déposer ma machine",
    secondary: "Appeler le 01 99 00 00 31",
    facts: [
      {
        icon: "clock",
        title: "Diagnostic gratuit",
        text: "Réponse sous 24 h ouvrées, sans engagement.",
      },
      {
        icon: "receipt",
        title: "Devis ferme",
        text: "Le prix annoncé est le prix payé.",
      },
      {
        icon: "shield",
        title: "Garantie 6 mois",
        text: "Sur la pièce et sur la main-d’œuvre.",
      },
    ],
    image: {
      src: IMG.hero,
      alt: "Mains d’un technicien au-dessus d’un ordinateur portable ouvert : ventilateur, caloducs et barrettes de mémoire",
    },
  },
  repairs: {
    title: "Réparations et prix",
    description:
      "Portables et ordinateurs fixes, Mac et PC. Prix TTC, pièce et main-d’œuvre comprises ; le devis ferme est établi après le diagnostic.",
    tabletNote: "Tablettes et smartphones aussi : demandez-nous.",
    fromLabel: "À partir de",
    delayLabel: "Délai\u00a0:",
    items: [
      {
        name: "Écran cassé ou qui scintille",
        description:
          "Remplacement de la dalle d’un portable, avec essai des couleurs et du tactile.",
        price: "89 €",
        delay: "48\u00a0à\u00a072 h",
      },
      {
        name: "Batterie qui ne tient plus",
        description: "Batterie neuve, autonomie mesurée avant la restitution.",
        price: "59 €",
        delay: "24 h",
      },
      {
        name: "SSD : remplacement ou ajout",
        description:
          "Disque rapide posé, système cloné : vous retrouvez votre bureau tel quel.",
        price: "79 €",
        delay: "24\u00a0à\u00a048 h",
      },
      {
        name: "Lent, bruyant, qui chauffe",
        description:
          "Ventilateurs nettoyés, pâte thermique neuve, températures contrôlées.",
        price: "49 €",
        delay: "24 h",
      },
      {
        name: "Virus et réinstallation",
        description:
          "Système nettoyé ou réinstallé, vos fichiers sauvegardés d’abord.",
        price: "59 €",
        delay: "24\u00a0à\u00a048 h",
      },
      {
        name: "Récupération de données",
        description:
          "Disque ou SSD en panne : analyse, puis copie sur un support neuf.",
        price: "90 €",
        delay: "2\u00a0à\u00a05\u00a0jours",
      },
      {
        name: "Ne démarre plus",
        description:
          "Alimentation, carte mère, prise de charge : on cherche la panne, vous décidez.",
        price: "69 €",
        delay: "2\u00a0à\u00a05\u00a0jours",
      },
      {
        name: "Clavier ou charnière cassés",
        description:
          "Remplacement du clavier, des charnières ou de la coque d’un portable.",
        price: "49 €",
        delay: "48\u00a0à\u00a072 h",
      },
    ],
    image: {
      src: IMG.fan,
      alt: "Ventilateur d’un ordinateur portable ouvert, ses ailettes couvertes de poussière",
    },
  },
  process: {
    title: "Quatre étapes, sans surprise",
    description:
      "Vous connaissez le prix et le délai avant que nous commencions la réparation.",
    steps: [
      {
        title: "Dépôt ou enlèvement",
        text: "Venez à l’atelier ou faites enlever la machine chez vous. Nous notons avec vous les symptômes et l’état de l’appareil.",
      },
      {
        title: "Diagnostic gratuit",
        text: "Sous 24 h ouvrées, un technicien trouve la panne. Aucune pièce n’est commandée sans votre accord.",
      },
      {
        title: "Devis ferme",
        text: "Prix, pièces et délai par écrit. Vous refusez ? Vous récupérez votre machine intacte, sans frais.",
      },
      {
        title: "Réparation et garantie",
        text: "Réparée à l’atelier, puis testée plusieurs heures avant de vous être rendue. Garantie de 6 mois.",
      },
    ],
    data: {
      icon: "database",
      title: "Vos fichiers passent avant tout",
      text: "Nous ne les ouvrons pas sans votre accord, et nous les copions avant toute intervention risquée.",
    },
  },
  business: {
    title: "Un parc informatique qui tourne, une seule facture",
    description:
      "Pour les cabinets, commerces et petites équipes jusqu’à vingt postes.",
    items: [
      {
        icon: "truck",
        title: "Intervention sur site",
        text: "Un technicien chez vous sous 24 h ouvrées.",
      },
      {
        icon: "laptop",
        title: "Poste de remplacement",
        text: "Prêté pendant la réparation, pour que l’équipe continue de travailler.",
      },
      {
        icon: "database",
        title: "Sauvegardes et mises à jour",
        text: "Contrôlées chaque mois, avec un compte rendu simple.",
      },
      {
        icon: "receipt",
        title: "Une facture par mois",
        text: "Un forfait par poste, sans mauvaise surprise.",
      },
    ],
    price: {
      label: "Contrat d’entretien",
      value: "29 € HT",
      note: "par poste et par mois, résiliable à tout moment",
    },
    cta: "Demander un contrat",
    image: {
      src: IMG.racks,
      alt: "Baies de serveurs et câbles réseau dans un local technique sombre",
    },
  },
  reviews: {
    title: "Ils nous ont confié leur machine",
    items: [
      {
        name: "Camille R.",
        context: "Récupération de données",
        text: "«\u00a0Mon portable ne démarrait plus et j’avais tout mon mémoire dessus. Ils ont récupéré les fichiers avant même de parler de réparation. Prix annoncé, prix payé.\u00a0»",
      },
      {
        name: "Thomas B.",
        context: "Batterie de portable",
        text: "«\u00a0Batterie remplacée dans la journée, et on m’a expliqué ce qui n’était pas utile de changer.\u00a0»",
      },
      {
        name: "Léa M.",
        context: "Contrat petite entreprise",
        text: "«\u00a0Nous leur confions les cinq postes du cabinet. Quand l’un tombe en panne, un poste prêté arrive le jour même.\u00a0»",
      },
    ],
  },
  workshop: {
    title: "Réparé sur place, à l’établi",
    description:
      "Pas de sous-traitance : votre machine reste dans notre atelier, du diagnostic à l’essai final.",
    points: [
      {
        icon: "wrench",
        title: "Micro-soudure",
        text: "Prise de charge, connecteurs, condensateurs : nous réparons la carte plutôt que de la remplacer quand c’est possible.",
      },
      {
        icon: "cpu",
        title: "Pièces au choix",
        text: "Neuves, ou d’occasion testées et moins chères : vous choisissez sur le devis.",
      },
      {
        icon: "shield",
        title: "Ancienne pièce rendue",
        text: "Sur simple demande, vous repartez avec la pièce remplacée.",
      },
    ],
    image: {
      src: IMG.solder,
      alt: "Soudure d’un composant sur un circuit imprimé, au fer à souder et au fil d’étain tenu à la main",
    },
  },
  contact: {
    title: "Déposer ou faire enlever votre machine",
    description:
      "Passez à l’atelier ou laissez-nous un message : nous vous rappelons dans la journée.",
    options: [
      {
        icon: "store",
        title: "À l’atelier",
        text: "Sans rendez-vous aux heures d’ouverture. Une machine déposée est prise en charge le jour même.",
      },
      {
        icon: "truck",
        title: "Enlèvement",
        text: "Nous passons chez vous ou à votre bureau : 15 €, offerts si vous faites réparer.",
      },
    ],
    address: {
      icon: "mapPin",
      label: "Adresse",
      lines: ["12 rue de l’Exemple", "00000 Votre ville"],
    },
    hours: {
      icon: "clock",
      label: "Horaires",
      lines: [
        "Du lundi au vendredi : 9 h à 18 h 30",
        "Samedi : 9 h à 17 h",
        "Fermé le dimanche",
      ],
    },
    phoneInfo: { icon: "phone", label: "Téléphone" },
    emailInfo: { icon: "mail", label: "E-mail" },
    form: {
      title: "Demander une prise en charge",
      name: "Nom",
      phone: "Téléphone",
      kind: {
        label: "Type de machine",
        placeholder: "Choisir",
        options: [
          { value: "portable-pc", label: "Portable PC" },
          { value: "portable-mac", label: "Portable Mac" },
          { value: "fixe-pc", label: "Ordinateur fixe PC" },
          { value: "fixe-mac", label: "Ordinateur fixe Mac" },
        ],
      },
      mode: {
        label: "Dépôt ou enlèvement",
        placeholder: "Choisir",
        options: [
          { value: "depot", label: "Je dépose à l’atelier" },
          { value: "enlevement", label: "Je souhaite un enlèvement" },
        ],
      },
      message: "Que se passe-t-il ?",
      submit: "Envoyer ma demande",
    },
  },
  footer: {
    text: "Réparation d’ordinateurs portables et fixes, Mac et PC, pour les particuliers et les petites entreprises.",
    linksTitle: "Navigation",
    contactTitle: "Atelier",
    copyright: "Atelier Octet. Tous droits réservés.",
  },
  meta: {
    home: {
      title: "Atelier Octet - Réparation d’ordinateurs",
      description:
        "Réparation d’ordinateurs portables et fixes, Mac et PC : diagnostic gratuit sous 24 h, devis ferme, garantie 6 mois. Dépôt à l’atelier ou enlèvement.",
    },
  },
} as const;

export type OrdinateurCopy = WidenLiterals<typeof fr>;
export type OrdinateurIconKey = TemplateIconKey<OrdinateurCopy>;

const en: OrdinateurCopy = {
  brand: {
    name: "Your business",
    tagline: "Computer repair",
  },
  phone: {
    href: "tel:+33199000031",
    label: "01 99 00 00 31",
  },
  email: {
    href: "mailto:contact@example.com",
    label: "contact@example.com",
  },
  a11y: {
    quickActions: "Quick actions",
  },
  cta: {
    deposit: "Drop off my computer",
    call: "Call",
  },
  nav: {
    repairs: "Repairs",
    process: "How it works",
    business: "Business",
    workshop: "Workshop",
    contact: "Contact",
  },
  hero: {
    title: "Your computer fixed,",
    accent: "your files safe.",
    description:
      "Laptops and desktops, Mac and PC: a free diagnosis within one business day, a firm quote before any repair, and you only pay if you agree. Drop your computer off at the shop or have it picked up.",
    primary: "Drop off my computer",
    secondary: "Call 01 99 00 00 31",
    facts: [
      {
        icon: "clock",
        title: "Free diagnosis",
        text: "An answer within one business day, no obligation.",
      },
      {
        icon: "receipt",
        title: "Firm quote",
        text: "The price we quote is the price you pay.",
      },
      {
        icon: "shield",
        title: "6\u2011month warranty",
        text: "On parts and on labor.",
      },
    ],
    image: {
      src: IMG.hero,
      alt: "A technician’s hands over an open laptop: fan, heat pipes and memory modules",
    },
  },
  repairs: {
    title: "Repairs and prices",
    description:
      "Laptops and desktops, Mac and PC. Prices include tax, parts and labor; the firm quote follows the diagnosis.",
    tabletNote: "Tablets and smartphones too: just ask.",
    fromLabel: "From",
    delayLabel: "Turnaround:",
    items: [
      {
        name: "Cracked or flickering screen",
        description: "Laptop panel replacement, with a color and touch test.",
        price: "€89",
        delay: "2\u00a0to\u00a03\u00a0days",
      },
      {
        name: "Battery that no longer holds a charge",
        description: "New battery, battery life measured before pickup.",
        price: "€59",
        delay: "1 day",
      },
      {
        name: "SSD: replacement or upgrade",
        description:
          "A fast drive installed and your system cloned: your desktop stays exactly as it was.",
        price: "€79",
        delay: "1\u00a0to\u00a02\u00a0days",
      },
      {
        name: "Slow, loud, running hot",
        description: "Fans cleaned, fresh thermal paste, temperatures checked.",
        price: "€49",
        delay: "1 day",
      },
      {
        name: "Viruses and reinstall",
        description:
          "System cleaned or reinstalled, your files backed up first.",
        price: "€59",
        delay: "1\u00a0to\u00a02\u00a0days",
      },
      {
        name: "Data recovery",
        description:
          "Failed drive or SSD: analysis, then a copy onto new storage.",
        price: "€90",
        delay: "2\u00a0to\u00a05\u00a0days",
      },
      {
        name: "Won’t turn on",
        description:
          "Power supply, motherboard, charging port: we find the fault, you decide.",
        price: "€69",
        delay: "2\u00a0to\u00a05\u00a0days",
      },
      {
        name: "Broken keyboard or hinge",
        description: "Replacement of a laptop’s keyboard, hinges or case.",
        price: "€49",
        delay: "2\u00a0to\u00a03\u00a0days",
      },
    ],
    image: {
      src: IMG.fan,
      alt: "Fan inside an open laptop, its blades coated in dust",
    },
  },
  process: {
    title: "Four steps, no surprises",
    description:
      "You know the price and the turnaround before we start the repair.",
    steps: [
      {
        title: "Drop\u2011off or pickup",
        text: "Bring it to the shop or have us pick it up at your place. We note the symptoms and the condition of the device with you.",
      },
      {
        title: "Free diagnosis",
        text: "Within one business day, a technician finds the fault. No part is ordered without your approval.",
      },
      {
        title: "Firm quote",
        text: "Price, parts and turnaround in writing. Not interested? You get your computer back untouched, at no charge.",
      },
      {
        title: "Repair and warranty",
        text: "Repaired in our shop, then tested for several hours before it goes back to you. 6\u2011month warranty.",
      },
    ],
    data: {
      icon: "database",
      title: "Your files come first",
      text: "We don’t open them without your approval, and we copy them before any risky work.",
    },
  },
  business: {
    title: "A fleet of computers that runs, one invoice",
    description:
      "For offices, shops and small teams of up to twenty computers.",
    items: [
      {
        icon: "truck",
        title: "On-site service",
        text: "A technician at your door within one business day.",
      },
      {
        icon: "laptop",
        title: "Loaner computer",
        text: "Lent during the repair, so your team keeps working.",
      },
      {
        icon: "database",
        title: "Backups and updates",
        text: "Checked every month, with a plain\u2011language report.",
      },
      {
        icon: "receipt",
        title: "One invoice a month",
        text: "A flat fee per computer, no surprises.",
      },
    ],
    price: {
      label: "Maintenance plan",
      value: "€29 plus VAT",
      note: "per computer per month, cancel any time",
    },
    cta: "Request a plan",
    image: {
      src: IMG.racks,
      alt: "Server racks and network cables in a dark equipment room",
    },
  },
  reviews: {
    title: "They trusted us with their computer",
    items: [
      {
        name: "Camille R.",
        context: "Data recovery",
        text: "“My laptop wouldn’t start and my thesis was on it. They recovered the files before we even talked about repairs. Quoted price, paid price.”",
      },
      {
        name: "Thomas B.",
        context: "Laptop battery",
        text: "“Battery replaced the same day, and they told me what wasn’t worth changing.”",
      },
      {
        name: "Léa M.",
        context: "Small business plan",
        text: "“We trust them with all five computers at our practice. When one goes down, a loaner arrives the same day.”",
      },
    ],
  },
  workshop: {
    title: "Repaired on site, at the bench",
    description:
      "No outsourcing: your computer stays in our shop, from diagnosis to the final test.",
    points: [
      {
        icon: "wrench",
        title: "Micro\u2011soldering",
        text: "Charging ports, connectors, capacitors: we repair the board rather than replace it whenever we can.",
      },
      {
        icon: "cpu",
        title: "Parts of your choice",
        text: "New, or tested used parts that cost less: you choose on the quote.",
      },
      {
        icon: "shield",
        title: "Old part returned",
        text: "Just ask and you leave with the part we replaced.",
      },
    ],
    image: {
      src: IMG.solder,
      alt: "Soldering a component onto a circuit board with a soldering iron and a hand\u2011held strand of solder",
    },
  },
  contact: {
    title: "Drop off or have your computer picked up",
    description:
      "Stop by the shop or leave us a message: we call you back the same day.",
    options: [
      {
        icon: "store",
        title: "At the shop",
        text: "No appointment needed during opening hours. A computer dropped off is logged the same day.",
      },
      {
        icon: "truck",
        title: "Pickup",
        text: "We come to your home or office: €15, waived if you go ahead with the repair.",
      },
    ],
    address: {
      icon: "mapPin",
      label: "Address",
      lines: ["12 Example Street", "00000 Your city"],
    },
    hours: {
      icon: "clock",
      label: "Opening hours",
      lines: [
        "Monday to Friday: 9\u00a0AM to 6:30\u00a0PM",
        "Saturday: 9\u00a0AM to 5\u00a0PM",
        "Closed on Sundays",
      ],
    },
    phoneInfo: { icon: "phone", label: "Phone" },
    emailInfo: { icon: "mail", label: "Email" },
    form: {
      title: "Request a drop\u2011off or pickup",
      name: "Name",
      phone: "Phone",
      kind: {
        label: "Type of computer",
        placeholder: "Choose",
        options: [
          { value: "portable-pc", label: "PC laptop" },
          { value: "portable-mac", label: "Mac laptop" },
          { value: "fixe-pc", label: "PC desktop" },
          { value: "fixe-mac", label: "Mac desktop" },
        ],
      },
      mode: {
        label: "Drop\u2011off or pickup",
        placeholder: "Choose",
        options: [
          { value: "depot", label: "I’ll drop it off at the shop" },
          { value: "enlevement", label: "I’d like a pickup" },
        ],
      },
      message: "What’s going on?",
      submit: "Send my request",
    },
  },
  footer: {
    text: "Repair of laptops and desktops, Mac and PC, for individuals and small businesses.",
    linksTitle: "Navigation",
    contactTitle: "Shop",
    copyright: "Your business. All rights reserved.",
  },
  meta: {
    home: {
      title: "Your business - Computer repair",
      description:
        "Laptop and desktop repair, Mac and PC: free diagnosis within one business day, firm quote, 6\u2011month warranty. Shop drop\u2011off or pickup.",
    },
  },
};

export type OrdinateurPage = keyof OrdinateurCopy["meta"];

export const ordinateur: TemplateDefinition<"ordinateur", OrdinateurCopy> = {
  slug: "ordinateur",
  /**
   * Papier gris-vert très clair, encre graphite et vert « masque de soudure »
   * pour l’accent (texte blanc dessus, 7:1). Les fonds inverses sont du graphite
   * avec un vert citron en sur-titre et en mots mis en valeur
   * (`eyebrowInverse`, plus de 11:1 sur le graphite). Inter partout, titres en
   * gras, un seul rayon (4 px, angles presque droits : allure d’établi),
   * ombres dérivées de l’encre.
   */
  theme: {
    surface: "oklch(0.974 0.005 125)",
    raised: "oklch(1 0 0)",
    tint: "oklch(0.945 0.011 130)",
    ink: "oklch(0.24 0.014 165)",
    inkMuted: "oklch(0.44 0.022 155)",
    line: "oklch(0.88 0.012 140)",
    eyebrow: "oklch(0.42 0.11 150)",
    eyebrowInverse: "oklch(0.87 0.19 130)",
    accent: "oklch(0.43 0.11 150)",
    accentInk: "oklch(1 0 0)",
    inverse: "oklch(0.2 0.013 170)",
    inverseInk: "oklch(0.97 0.006 125)",
    radius: "0.25rem",
    fontDisplay: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontText: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontDisplayWeight: 700,
    shadowSm:
      "0 1px 2px oklch(0.24 0.014 165 / 0.1), 0 1px 1px oklch(0.24 0.014 165 / 0.06)",
    shadowLg:
      "0 20px 40px -16px oklch(0.24 0.014 165 / 0.25), 0 6px 12px -6px oklch(0.24 0.014 165 / 0.12)",
  },
  paths: {
    home: "/ordinateur",
  },
  copy: { fr, en },
};
