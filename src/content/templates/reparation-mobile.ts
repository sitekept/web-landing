import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « reparation-mobile » (atelier fictif de réparation de smartphones
 * et de tablettes, « Votre entreprise »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, libellés du formulaire, métadonnées. Les vues
 * (`src/templates/reparation-mobile/`) n'ont aucun texte en dur.
 *
 * Version anglaise : `en` est une traduction neutre typée
 * `ReparationMobileCopy` (dérivé de `fr` par `WidenLiterals`). Les clés
 * `icon` sont des données : mêmes valeurs en français et en anglais.
 *
 * Prix : chaînes déjà formatées (espace insécable avant « € » en français,
 * « €79 » en anglais). Coordonnées fictives (plage `01 99 00 00 xx`).
 */

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Réparation de smartphones et tablettes",
  },
  phone: {
    href: "tel:+33199000047",
    label: "01 99 00 00 47",
  },
  nav: {
    home: "Accueil",
    reparations: "Réparations",
    faq: "Questions fréquentes",
    contact: "Contact",
  },
  cta: {
    quote: "Demander un devis",
    call: "Appeler l'atelier",
    callWithNumber: "Appeler le 01 99 00 00 47",
    allPrices: "Voir tous les tarifs",
    bookHome: "Réserver à domicile",
    readFaq: "Lire la FAQ",
    writeUs: "Nous écrire",
  },
  /** Barre d'actions fixe en bas de l'écran sur mobile. */
  mobileBar: {
    label: "Contact rapide",
    quote: "Devis",
    call: "Appeler",
  },
  hours: {
    label: "Horaires de l'atelier",
    items: [
      { day: "Lundi au vendredi", time: "9h00 à 19h00" },
      { day: "Samedi", time: "10h00 à 17h00" },
      { day: "Dimanche", time: "Fermé" },
    ],
    homeNote: "Réparation à domicile sur rendez-vous, du lundi au samedi.",
  },
  details: {
    label: "Coordonnées",
    items: [
      {
        icon: "phone",
        label: "Téléphone",
        value: "01 99 00 00 47",
        href: "tel:+33199000047",
      },
      {
        icon: "mail",
        label: "E-mail",
        value: "contact@votre-entreprise.example",
        href: "mailto:contact@votre-entreprise.example",
      },
      {
        icon: "map-pin",
        label: "Atelier",
        value: "12 rue de l'Exemple, 00000 Votre ville",
        href: "",
      },
    ],
  },
  footer: {
    text: "Réparation de smartphones et de tablettes en atelier ou à domicile : devis avant intervention, pièces garanties 6 mois, données conservées.",
    navLabel: "Pages du site",
  },
  meta: {
    home: {
      title: "Votre entreprise - Réparation de smartphones et tablettes",
      description:
        "Écran, batterie, connecteur de charge : réparation de smartphones et de tablettes en atelier ou à domicile, devis avant intervention et pièces garanties.",
    },
    reparations: {
      title: "Réparations et tarifs - Votre entreprise",
      description:
        "Tarifs à partir de, délais et garantie pour chaque réparation : écran, batterie, connecteur de charge, caméra, vitre arrière et désoxydation.",
    },
    faq: {
      title: "Questions fréquentes - Votre entreprise",
      description:
        "Délais, données, garantie, réparation à domicile, appareil tombé dans l'eau : les réponses de l'atelier aux questions les plus fréquentes.",
    },
    contact: {
      title: "Contact et devis - Votre entreprise",
      description:
        "Demandez un devis gratuit par téléphone ou en ligne, consultez les horaires de l'atelier et les coordonnées.",
    },
  },
  home: {
    hero: {
      eyebrow: "Atelier et réparation à domicile",
      title: "Votre téléphone réparé, le plus souvent en moins d'une heure.",
      description:
        "Écran cassé, batterie à plat, connecteur de charge hors service : décrivez la panne, recevez un devis clair avant toute intervention, puis récupérez votre appareil en atelier ou chez vous.",
      image: {
        src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1600&q=80",
        alt: "Les mains d'un technicien démontent un appareil électronique avec un tournevis, sur un établi sombre.",
      },
      badge: {
        label: "Remplacement d'écran",
        value: "30 à 60 min",
      },
      trust: [
        {
          icon: "receipt-text",
          title: "Devis avant intervention",
          text: "Le prix annoncé est le prix payé.",
        },
        {
          icon: "shield-check",
          title: "Pièces garanties 6 mois",
          text: "Pièce et main-d'œuvre couvertes.",
        },
        {
          icon: "database-backup",
          title: "Données conservées",
          text: "Photos et messages restent sur l'appareil.",
        },
      ],
    },
    steps: {
      eyebrow: "Comment ça marche",
      title: "Trois étapes, aucune mauvaise surprise.",
      description:
        "Vous savez ce que vous allez payer avant que nous ouvrions votre appareil.",
      items: [
        {
          icon: "message-square-text",
          title: "Décrivez la panne",
          text: "Par téléphone ou avec le formulaire : modèle, symptôme, et nous vous répondons avec un prix ferme.",
        },
        {
          icon: "house",
          title: "Choisissez atelier ou domicile",
          text: "Passez à l'atelier, ou fixez un créneau de deux heures pour que le technicien vienne chez vous.",
        },
        {
          icon: "badge-check",
          title: "Récupérez votre appareil réparé",
          text: "Vous testez l'appareil avant de payer, et les pièces posées sont garanties 6 mois.",
        },
      ],
    },
    popular: {
      eyebrow: "Réparations les plus courantes",
      title: "Les pannes que nous réglons chaque jour.",
      description:
        "Prix indicatifs pour un smartphone, pièce et main-d'œuvre comprises. Le devis ferme est établi avant toute intervention.",
      fromLabel: "À partir de",
      timeLabel: "Délai",
      items: [
        {
          icon: "smartphone",
          title: "Écran cassé ou noir",
          text: "Remplacement de la dalle et de la vitre, tactile contrôlé.",
          price: "79 €",
          time: "30 à 60 min",
        },
        {
          icon: "battery-charging",
          title: "Batterie qui ne tient plus",
          text: "Batterie neuve, mesure de la capacité avant restitution.",
          price: "49 €",
          time: "20 à 40 min",
        },
        {
          icon: "plug-zap",
          title: "Connecteur de charge",
          text: "L'appareil ne charge plus ou seulement dans une position.",
          price: "59 €",
          time: "45 à 90 min",
        },
        {
          icon: "camera",
          title: "Caméra floue ou fissurée",
          text: "Module photo remplacé, mise au point et flash testés.",
          price: "69 €",
          time: "30 à 60 min",
        },
        {
          icon: "scan-search",
          title: "Vitre arrière brisée",
          text: "Remplacement de la vitre, sans toucher à vos données.",
          price: "49 €",
          time: "45 à 90 min",
        },
        {
          icon: "droplets",
          title: "Désoxydation",
          text: "Appareil tombé dans l'eau : nettoyage et diagnostic des composants.",
          price: "39 €",
          time: "24 h maximum",
        },
      ],
    },
    proof: {
      eyebrow: "Avis clients",
      title: "Des clients qui ont retrouvé leur téléphone.",
      description: "Note moyenne de 4,8 sur 5 d'après les avis clients.",
      label: "Avis de clients de l'atelier",
      items: [
        {
          quote:
            "Écran remplacé pendant que je prenais un café. Le prix annoncé au téléphone était le prix payé, et mon téléphone est reparti comme neuf.",
          name: "Claire M.",
          detail: "Remplacement d'écran",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Ma batterie ne tenait plus la journée. Réparation en trente minutes, devis clair, et toutes mes photos étaient toujours là.",
          name: "Julien R.",
          detail: "Batterie de smartphone",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Le technicien est arrivé dans le créneau annoncé et a remplacé le connecteur de charge de ma tablette sur place.",
          name: "Sofia L.",
          detail: "Réparation à domicile",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Un peu d'attente le samedi matin, mais le diagnostic était honnête et mon téléphone charge de nouveau parfaitement.",
          name: "Marc D.",
          detail: "Connecteur de charge",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "Mon téléphone était tombé dans l'eau. L'atelier m'a expliqué ce qui était possible sans rien promettre, et il fonctionne de nouveau.",
          name: "Inès K.",
          detail: "Désoxydation",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Photos floues après une chute. Devis en cinq minutes, réparation dans l'heure, facture avec la garantie de six mois.",
          name: "Paul A.",
          detail: "Caméra arrière",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
      ],
    },
    homeService: {
      eyebrow: "Réparation à domicile",
      title: "Pas le temps de passer à l'atelier ? Le technicien vient à vous.",
      description:
        "Il se déplace avec les pièces les plus courantes et répare votre appareil chez vous ou à votre bureau, dans un rayon de 20 km autour de votre ville.",
      image: {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80",
        alt: "Les mains d'un technicien réparent un composant électronique.",
      },
      points: [
        {
          icon: "truck",
          title: "Déplacement dans un rayon de 20 km",
          text: "À partir de 10 €, offert dès 80 € de réparation.",
        },
        {
          icon: "calendar-clock",
          title: "Créneau de deux heures",
          text: "Confirmé par SMS, avec un rappel avant l'arrivée du technicien.",
        },
        {
          icon: "hand-coins",
          title: "Paiement après la réparation",
          text: "Vous réglez une fois l'appareil testé et fonctionnel.",
        },
      ],
    },
    brands: {
      eyebrow: "Marques acceptées",
      title: "Les principales marques de smartphones et de tablettes.",
      description:
        "Nous réparons la plupart des modèles récents comme anciens. Le vôtre n'est pas dans la liste ? Demandez-nous, nous répondons dans la journée.",
      label: "Marques et familles d'appareils réparés",
      items: [
        "iPhone",
        "iPad",
        "Samsung Galaxy",
        "Xiaomi",
        "Pixel",
        "Huawei",
        "Oppo",
        "OnePlus",
        "Motorola",
        "Sony Xperia",
        "Honor",
      ],
    },
    contactBand: {
      eyebrow: "Devis gratuit",
      title: "Dites-nous ce qui ne va pas, nous vous donnons un prix.",
      description:
        "Réponse rapide par téléphone ou par le formulaire, sans engagement.",
    },
  },
  reparations: {
    hero: {
      eyebrow: "Tarifs et délais",
      title: "Des prix clairs, des délais annoncés, des pièces garanties.",
      description:
        "Voici nos tarifs à partir de, par type de réparation et par famille d'appareil. Le prix exact dépend du modèle : il vous est confirmé par un devis avant toute intervention.",
      image: {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        alt: "Une carte électronique de smartphone en gros plan.",
      },
      commitments: [
        {
          icon: "receipt-text",
          title: "Devis gratuit et sans engagement",
        },
        {
          icon: "shield-check",
          title: "Garantie de 6 mois sur les pièces",
        },
        {
          icon: "circle-check-big",
          title: "Rien à payer si la réparation est impossible",
        },
      ],
    },
    pricing: {
      eyebrow: "Grille tarifaire",
      title: "Nos réparations, de l'écran au connecteur de charge.",
      description:
        "Tous les prix sont TTC, pièce et main-d'œuvre comprises. Un modèle rare ou une pièce d'origine peut modifier le tarif : le devis le précise.",
      columns: {
        smartphone: "Smartphone",
        tablet: "Tablette",
        time: "Délai",
      },
      items: [
        {
          icon: "smartphone",
          title: "Écran",
          text: "Dalle, vitre et tactile remplacés, luminosité et réponse contrôlées.",
          smartphone: "dès 79 €",
          tablet: "dès 99 €",
          time: "30 à 60 min",
        },
        {
          icon: "battery-charging",
          title: "Batterie",
          text: "Batterie neuve, capacité mesurée avant la restitution.",
          smartphone: "dès 49 €",
          tablet: "dès 69 €",
          time: "20 à 40 min",
        },
        {
          icon: "plug-zap",
          title: "Connecteur de charge",
          text: "Nettoyage ou remplacement du connecteur, charge et données testées.",
          smartphone: "dès 59 €",
          tablet: "dès 69 €",
          time: "45 à 90 min",
        },
        {
          icon: "camera",
          title: "Caméra",
          text: "Module avant ou arrière remplacé, mise au point et flash testés.",
          smartphone: "dès 69 €",
          tablet: "dès 79 €",
          time: "30 à 60 min",
        },
        {
          icon: "scan-search",
          title: "Vitre arrière",
          text: "Remplacement de la vitre arrière, sans toucher à vos données.",
          smartphone: "dès 49 €",
          tablet: "Sur devis",
          time: "45 à 90 min",
        },
        {
          icon: "droplets",
          title: "Désoxydation",
          text: "Appareil tombé dans l'eau : démontage, nettoyage et diagnostic.",
          smartphone: "dès 39 €",
          tablet: "dès 49 €",
          time: "24 h maximum",
        },
      ],
    },
    warranty: {
      eyebrow: "Garantie",
      title: "Six mois de garantie sur chaque pièce posée.",
      description:
        "La garantie couvre la pièce et la main-d'œuvre en cas de défaut de fonctionnement. Elle ne couvre pas une nouvelle casse ni un contact avec un liquide.",
      items: [
        {
          icon: "shield-check",
          title: "Pièces contrôlées",
          text: "Chaque pièce est vérifiée avant la pose, puis l'appareil est testé en entier avant la restitution.",
        },
        {
          icon: "receipt-text",
          title: "Facture détaillée",
          text: "Elle indique la pièce posée et la date, et vaut preuve de garantie pendant six mois.",
        },
        {
          icon: "wrench",
          title: "Reprise sans frais",
          text: "Un défaut est couvert ? L'atelier reprend l'appareil et le corrige sans frais.",
        },
      ],
    },
    process: {
      eyebrow: "Déroulé",
      title: "De l'appareil cassé à l'appareil réparé.",
      steps: [
        "Diagnostic gratuit en quelques minutes, en votre présence.",
        "Devis ferme que vous validez ou refusez, sans frais.",
        "Réparation, puis test complet de l'appareil.",
        "Restitution, paiement et facture avec la garantie.",
      ],
    },
    closing: {
      title: "Pas sûr de la panne ?",
      description:
        "Décrivez le symptôme : nous identifions la réparation et son prix avec vous.",
    },
  },
  faq: {
    hero: {
      eyebrow: "Questions fréquentes",
      title: "Tout savoir avant de nous confier votre appareil.",
      description:
        "Délais, données, garantie, réparation à domicile : les réponses aux questions que l'on nous pose le plus souvent.",
    },
    listLabel: "Liste des questions",
    items: [
      {
        question: "Combien de temps dure une réparation ?",
        answer:
          "La plupart des réparations (écran, batterie, connecteur de charge) se font en moins d'une heure, pendant que vous patientez ou faites une course. Une désoxydation ou une panne plus complexe demande jusqu'à 24 heures.",
      },
      {
        question: "Mes données sont-elles conservées ?",
        answer:
          "Dans la grande majorité des cas, la réparation ne touche pas à vos données : photos, messages et applications restent sur l'appareil. Nous vous conseillons tout de même une sauvegarde avant de venir.",
      },
      {
        question: "Le devis est-il vraiment gratuit ?",
        answer:
          "Oui. Le diagnostic et le devis sont gratuits et sans engagement. Vous ne payez que si vous acceptez le devis, et le prix annoncé est celui de la facture.",
      },
      {
        question: "Quelle garantie sur les pièces ?",
        answer:
          "Les pièces posées sont garanties 6 mois, main-d'œuvre comprise. La garantie ne couvre pas une nouvelle casse ni un contact avec un liquide après la réparation.",
      },
      {
        question: "Comment fonctionne la réparation à domicile ?",
        answer:
          "Nous convenons d'un créneau de deux heures, du lundi au samedi, dans un rayon de 20 km autour de votre ville. Le technicien arrive avec les pièces les plus courantes ; si une pièce manque, il la commande et revient.",
      },
      {
        question: "Mon téléphone ne s'allume plus, est-ce réparable ?",
        answer:
          "Souvent, oui : la batterie, le connecteur de charge ou un écran défaillant en sont les causes les plus fréquentes. Nous faisons un diagnostic gratuit, et vous ne payez rien si la réparation est impossible.",
      },
      {
        question: "Mon appareil est tombé dans l'eau, que faire ?",
        answer:
          "Éteignez-le tout de suite, ne le branchez pas et n'essayez pas de le sécher avec une source de chaleur. Apportez-le-nous le plus vite possible : plus la désoxydation est rapide, plus les chances de sauver l'appareil sont grandes, sans garantie de résultat.",
      },
      {
        question: "Utilisez-vous des pièces d'origine ?",
        answer:
          "Selon le modèle et votre budget, nous proposons des pièces d'origine ou des pièces compatibles de qualité équivalente. Le type de pièce est indiqué sur le devis, avant votre accord.",
      },
    ],
    aside: {
      title: "Votre question n'est pas dans la liste ?",
      text: "Appelez l'atelier ou envoyez-nous un message : nous répondons dans la journée.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Un devis en deux minutes, par téléphone ou en ligne.",
      description:
        "Indiquez l'appareil et la panne : nous vous répondons avec un prix ferme et le délai de réparation.",
    },
    form: {
      title: "Demander un devis",
      description:
        "Les champs marqués d'un astérisque sont nécessaires pour établir le devis.",
      submit: "Envoyer ma demande",
      fields: {
        name: "Nom",
        phone: "Téléphone",
        email: "E-mail",
        device: "Appareil (marque et modèle)",
        devicePlaceholder: "Par exemple : smartphone, tablette",
        issue: "Panne",
        issuePlaceholder: "Choisir une panne",
        mode: "Lieu de la réparation",
        modePlaceholder: "Atelier ou domicile",
        message: "Message",
        messagePlaceholder:
          "Décrivez ce qui s'est passé, si vous le souhaitez.",
      },
      issueOptions: [
        { value: "screen", label: "Écran cassé ou noir" },
        { value: "battery", label: "Batterie" },
        { value: "charging", label: "Connecteur de charge" },
        { value: "camera", label: "Caméra" },
        { value: "back-glass", label: "Vitre arrière" },
        { value: "water", label: "Appareil tombé dans l'eau" },
        { value: "other", label: "Autre panne" },
      ],
      modeOptions: [
        { value: "workshop", label: "À l'atelier" },
        { value: "home", label: "À domicile" },
      ],
    },
    homeCard: {
      title: "Réparation à domicile",
      text: "Choisissez « À domicile » dans le formulaire : nous vous proposons un créneau de deux heures dans un rayon de 20 km.",
    },
    closing: {
      title: "Besoin d'une réponse tout de suite ?",
      description:
        "L'atelier décroche pendant les horaires d'ouverture et vous donne un prix sans attendre.",
    },
  },
};

export type ReparationMobileCopy = WidenLiterals<typeof fr>;

/** Clé `icon` de la copie : une entrée par clé dans `parts.tsx`. */
export type ReparationMobileIconKey = TemplateIconKey<ReparationMobileCopy>;

const en: ReparationMobileCopy = {
  brand: {
    name: "Your business",
    tagline: "Smartphone and tablet repair",
  },
  phone: {
    href: "tel:+33199000047",
    label: "01 99 00 00 47",
  },
  nav: {
    home: "Home",
    reparations: "Repairs",
    faq: "FAQ",
    contact: "Contact",
  },
  cta: {
    quote: "Get a quote",
    call: "Call the shop",
    callWithNumber: "Call 01 99 00 00 47",
    allPrices: "See all prices",
    bookHome: "Book a home visit",
    readFaq: "Read the FAQ",
    writeUs: "Write to us",
  },
  mobileBar: {
    label: "Quick contact",
    quote: "Quote",
    call: "Call",
  },
  hours: {
    label: "Shop opening hours",
    items: [
      { day: "Monday to Friday", time: "9:00 am to 7:00 pm" },
      { day: "Saturday", time: "10:00 am to 5:00 pm" },
      { day: "Sunday", time: "Closed" },
    ],
    homeNote: "Home repairs by appointment, Monday to Saturday.",
  },
  details: {
    label: "Contact details",
    items: [
      {
        icon: "phone",
        label: "Phone",
        value: "01 99 00 00 47",
        href: "tel:+33199000047",
      },
      {
        icon: "mail",
        label: "Email",
        value: "contact@example.com",
        href: "mailto:contact@example.com",
      },
      {
        icon: "map-pin",
        label: "Shop",
        value: "12 Example Street, 00000 Your city",
        href: "",
      },
    ],
  },
  footer: {
    text: "Smartphone and tablet repair in our shop or at your home: a quote before any work, parts guaranteed for 6 months, your data kept intact.",
    navLabel: "Site pages",
  },
  meta: {
    home: {
      title: "Your business - Smartphone and tablet repair",
      description:
        "Screen, battery, charging port: smartphone and tablet repair in our shop or at your home, with a quote before any work and guaranteed parts.",
    },
    reparations: {
      title: "Repairs and prices - Your business",
      description:
        "Starting prices, turnaround times and warranty for every repair: screen, battery, charging port, camera, back glass and water damage.",
    },
    faq: {
      title: "FAQ - Your business",
      description:
        "Turnaround, data, warranty, home repairs, a device dropped in water: the shop's answers to the most common questions.",
    },
    contact: {
      title: "Contact and quote - Your business",
      description:
        "Request a free quote by phone or online, and check the shop's opening hours and contact details.",
    },
  },
  home: {
    hero: {
      eyebrow: "Repair shop and home visits",
      title: "Your phone repaired, most often in under an hour.",
      description:
        "Cracked screen, dead battery, charging port that no longer works: describe the problem, get a clear quote before any work, then pick up your device at the shop or have it repaired at home.",
      image: {
        src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1600&q=80",
        alt: "A technician's hands unscrew an electronic device with a screwdriver on a dark workbench.",
      },
      badge: {
        label: "Screen replacement",
        value: "30 to 60 min",
      },
      trust: [
        {
          icon: "receipt-text",
          title: "Quote before any work",
          text: "The price quoted is the price you pay.",
        },
        {
          icon: "shield-check",
          title: "Parts guaranteed 6 months",
          text: "Parts and labor covered.",
        },
        {
          icon: "database-backup",
          title: "Your data kept intact",
          text: "Photos and messages stay on the device.",
        },
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "Three steps, no bad surprises.",
      description: "You know what you will pay before we open your device.",
      items: [
        {
          icon: "message-square-text",
          title: "Describe the problem",
          text: "By phone or with the form: model, symptom, and we reply with a firm price.",
        },
        {
          icon: "house",
          title: "Choose shop or home",
          text: "Drop by the shop, or book a two-hour window and the technician comes to you.",
        },
        {
          icon: "badge-check",
          title: "Get your repaired device back",
          text: "You test the device before paying, and the parts we fit are guaranteed for 6 months.",
        },
      ],
    },
    popular: {
      eyebrow: "Most common repairs",
      title: "The problems we fix every day.",
      description:
        "Indicative prices for a smartphone, parts and labor included. A firm quote is issued before any work starts.",
      fromLabel: "From",
      timeLabel: "Turnaround",
      items: [
        {
          icon: "smartphone",
          title: "Cracked or black screen",
          text: "Display and glass replaced, touch response checked.",
          price: "€79",
          time: "30 to 60 min",
        },
        {
          icon: "battery-charging",
          title: "Battery that no longer lasts",
          text: "New battery, capacity measured before handback.",
          price: "€49",
          time: "20 to 40 min",
        },
        {
          icon: "plug-zap",
          title: "Charging port",
          text: "The device no longer charges, or only in one position.",
          price: "€59",
          time: "45 to 90 min",
        },
        {
          icon: "camera",
          title: "Blurry or cracked camera",
          text: "Camera module replaced, focus and flash tested.",
          price: "€69",
          time: "30 to 60 min",
        },
        {
          icon: "scan-search",
          title: "Broken back glass",
          text: "Back glass replaced, without touching your data.",
          price: "€49",
          time: "45 to 90 min",
        },
        {
          icon: "droplets",
          title: "Water damage",
          text: "Device dropped in water: cleaning and component diagnosis.",
          price: "€39",
          time: "24 hours max",
        },
      ],
    },
    proof: {
      eyebrow: "Customer reviews",
      title: "Customers who got their phone back.",
      description: "Average rating of 4.8 out of 5 based on customer reviews.",
      label: "Customer reviews of the shop",
      items: [
        {
          quote:
            "Screen replaced while I had a coffee. The price quoted over the phone was the price I paid, and my phone left like new.",
          name: "Claire M.",
          detail: "Screen replacement",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "My battery no longer lasted the day. Repaired in thirty minutes, a clear quote, and all my photos were still there.",
          name: "Julien R.",
          detail: "Smartphone battery",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "The technician arrived within the announced window and replaced my tablet's charging port on the spot.",
          name: "Sofia L.",
          detail: "Home repair",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "A bit of a wait on Saturday morning, but the diagnosis was honest and my phone charges perfectly again.",
          name: "Marc D.",
          detail: "Charging port",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
        {
          quote:
            "My phone had been dropped in water. The shop explained what was possible without promising anything, and it works again.",
          name: "Inès K.",
          detail: "Water damage",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Blurry photos after a fall. A quote in five minutes, repaired within the hour, and an invoice with the six-month warranty.",
          name: "Paul A.",
          detail: "Rear camera",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
      ],
    },
    homeService: {
      eyebrow: "Home repairs",
      title: "No time to stop by the shop? The technician comes to you.",
      description:
        "They bring the most common parts and repair your device at your home or office, within 20 km of your city.",
      image: {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80",
        alt: "A technician's hands repairing an electronic component.",
      },
      points: [
        {
          icon: "truck",
          title: "Travel within a 20 km radius",
          text: "From €10, free for repairs of €80 or more.",
        },
        {
          icon: "calendar-clock",
          title: "Two-hour time window",
          text: "Confirmed by text message, with a reminder before the technician arrives.",
        },
        {
          icon: "hand-coins",
          title: "Pay after the repair",
          text: "You pay once the device has been tested and works.",
        },
      ],
    },
    brands: {
      eyebrow: "Brands we repair",
      title: "The main smartphone and tablet brands.",
      description:
        "We repair most recent and older models. Is yours not on the list? Ask us, we reply the same day.",
      label: "Brands and device families we repair",
      items: [
        "iPhone",
        "iPad",
        "Samsung Galaxy",
        "Xiaomi",
        "Pixel",
        "Huawei",
        "Oppo",
        "OnePlus",
        "Motorola",
        "Sony Xperia",
        "Honor",
      ],
    },
    contactBand: {
      eyebrow: "Free quote",
      title: "Tell us what is wrong, we give you a price.",
      description:
        "A quick reply by phone or through the form, with no commitment.",
    },
  },
  reparations: {
    hero: {
      eyebrow: "Prices and turnaround",
      title: "Clear prices, announced turnaround, guaranteed parts.",
      description:
        "Here are our starting prices, by type of repair and by device family. The exact price depends on the model: it is confirmed in a quote before any work.",
      image: {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        alt: "A close-up of a smartphone circuit board.",
      },
      commitments: [
        {
          icon: "receipt-text",
          title: "Free quote with no commitment",
        },
        {
          icon: "shield-check",
          title: "6-month warranty on parts",
        },
        {
          icon: "circle-check-big",
          title: "Nothing to pay if the repair is not possible",
        },
      ],
    },
    pricing: {
      eyebrow: "Price list",
      title: "Our repairs, from the screen to the charging port.",
      description:
        "All prices include tax, parts and labor. A rare model or an original part can change the price: the quote spells it out.",
      columns: {
        smartphone: "Smartphone",
        tablet: "Tablet",
        time: "Turnaround",
      },
      items: [
        {
          icon: "smartphone",
          title: "Screen",
          text: "Display, glass and touch layer replaced, brightness and response checked.",
          smartphone: "from €79",
          tablet: "from €99",
          time: "30 to 60 min",
        },
        {
          icon: "battery-charging",
          title: "Battery",
          text: "New battery, capacity measured before handback.",
          smartphone: "from €49",
          tablet: "from €69",
          time: "20 to 40 min",
        },
        {
          icon: "plug-zap",
          title: "Charging port",
          text: "Port cleaned or replaced, charging and data tested.",
          smartphone: "from €59",
          tablet: "from €69",
          time: "45 to 90 min",
        },
        {
          icon: "camera",
          title: "Camera",
          text: "Front or rear module replaced, focus and flash tested.",
          smartphone: "from €69",
          tablet: "from €79",
          time: "30 to 60 min",
        },
        {
          icon: "scan-search",
          title: "Back glass",
          text: "Back glass replaced, without touching your data.",
          smartphone: "from €49",
          tablet: "On quote",
          time: "45 to 90 min",
        },
        {
          icon: "droplets",
          title: "Water damage",
          text: "Device dropped in water: disassembly, cleaning and diagnosis.",
          smartphone: "from €39",
          tablet: "from €49",
          time: "24 hours max",
        },
      ],
    },
    warranty: {
      eyebrow: "Warranty",
      title: "Six months of warranty on every part we fit.",
      description:
        "The warranty covers the part and labor if it stops working properly. It does not cover new damage or contact with liquid.",
      items: [
        {
          icon: "shield-check",
          title: "Checked parts",
          text: "Each part is checked before it is fitted, then the whole device is tested before handback.",
        },
        {
          icon: "receipt-text",
          title: "Itemized invoice",
          text: "It lists the part fitted and the date, and serves as proof of warranty for six months.",
        },
        {
          icon: "wrench",
          title: "Free rework",
          text: "A covered defect? The shop takes the device back and fixes it at no cost.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "From a broken device to a repaired one.",
      steps: [
        "Free diagnosis in a few minutes, while you are there.",
        "A firm quote that you accept or decline at no cost.",
        "Repair, then a full test of the device.",
        "Handback, payment and an invoice with the warranty.",
      ],
    },
    closing: {
      title: "Not sure what is wrong?",
      description:
        "Describe the symptom: we work out the repair and its price with you.",
    },
  },
  faq: {
    hero: {
      eyebrow: "Frequently asked questions",
      title: "Everything to know before leaving us your device.",
      description:
        "Turnaround, data, warranty, home repairs: the answers to the questions we hear most often.",
    },
    listLabel: "List of questions",
    items: [
      {
        question: "How long does a repair take?",
        answer:
          "Most repairs (screen, battery, charging port) take under an hour, while you wait or run an errand. Water damage or a more complex fault can take up to 24 hours.",
      },
      {
        question: "Is my data kept?",
        answer:
          "In the vast majority of cases, the repair does not touch your data: photos, messages and apps stay on the device. We still recommend a backup before you come in.",
      },
      {
        question: "Is the quote really free?",
        answer:
          "Yes. The diagnosis and the quote are free and with no commitment. You only pay if you accept the quote, and the price quoted is the price on the invoice.",
      },
      {
        question: "What warranty do the parts have?",
        answer:
          "The parts we fit are guaranteed for 6 months, labor included. The warranty does not cover new damage or contact with liquid after the repair.",
      },
      {
        question: "How do home repairs work?",
        answer:
          "We agree on a two-hour window, Monday to Saturday, within 20 km of your city. The technician arrives with the most common parts; if one is missing, they order it and come back.",
      },
      {
        question: "My phone will not turn on, can it be repaired?",
        answer:
          "Often, yes: the battery, the charging port or a failing screen are the most frequent causes. We run a free diagnosis, and you pay nothing if the repair is not possible.",
      },
      {
        question: "My device fell in water, what should I do?",
        answer:
          "Turn it off right away, do not plug it in and do not try to dry it with heat. Bring it to us as soon as possible: the faster the cleaning, the better the chances of saving the device, with no guarantee of the result.",
      },
      {
        question: "Do you use original parts?",
        answer:
          "Depending on the model and your budget, we offer original parts or compatible parts of equivalent quality. The type of part is shown on the quote, before you agree.",
      },
    ],
    aside: {
      title: "Your question is not on the list?",
      text: "Call the shop or send us a message: we reply the same day.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "A quote in two minutes, by phone or online.",
      description:
        "Tell us the device and the problem: we reply with a firm price and the repair time.",
    },
    form: {
      title: "Request a quote",
      description:
        "Fields marked with an asterisk are needed to prepare the quote.",
      submit: "Send my request",
      fields: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        device: "Device (brand and model)",
        devicePlaceholder: "For example: smartphone, tablet",
        issue: "Problem",
        issuePlaceholder: "Choose a problem",
        mode: "Where to repair",
        modePlaceholder: "Shop or home",
        message: "Message",
        messagePlaceholder: "Describe what happened, if you wish.",
      },
      issueOptions: [
        { value: "screen", label: "Cracked or black screen" },
        { value: "battery", label: "Battery" },
        { value: "charging", label: "Charging port" },
        { value: "camera", label: "Camera" },
        { value: "back-glass", label: "Back glass" },
        { value: "water", label: "Device dropped in water" },
        { value: "other", label: "Other problem" },
      ],
      modeOptions: [
        { value: "workshop", label: "At the shop" },
        { value: "home", label: "At my home" },
      ],
    },
    homeCard: {
      title: "Home repairs",
      text: 'Choose "At my home" in the form: we offer you a two-hour window within 20 km.',
    },
    closing: {
      title: "Need an answer right now?",
      description:
        "The shop picks up during opening hours and gives you a price straight away.",
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type ReparationMobilePage = keyof ReparationMobileCopy["meta"];

export const reparationMobile: TemplateDefinition<
  "reparation-mobile",
  ReparationMobileCopy
> = {
  slug: "reparation-mobile",
  /**
   * Identité vive et nette : encre bleu nuit, surface très claire légèrement
   * froide, accent cyan franc (texte bleu nuit dessus), bandes inverses bleu
   * nuit, grands rayons, ombres douces teintées d'encre.
   */
  theme: {
    ink: "oklch(0.26 0.08 265)",
    inkMuted: "color-mix(in oklch, var(--tpl-ink) 72%, var(--tpl-surface))",
    surface: "oklch(0.978 0.008 240)",
    raised: "oklch(1 0 0)",
    line: "oklch(0.88 0.022 250)",
    accent: "oklch(0.63 0.105 205)",
    accentInk: "oklch(0.2 0.06 265)",
    inverse: "oklch(0.23 0.08 265)",
    inverseInk: "oklch(0.985 0.004 240)",
    radius: "1.5rem",
    shadowSm:
      "0 1px 2px color-mix(in oklch, var(--tpl-ink) 8%, transparent), 0 4px 12px -4px color-mix(in oklch, var(--tpl-ink) 10%, transparent)",
    shadowLg:
      "0 28px 56px -20px color-mix(in oklch, var(--tpl-ink) 28%, transparent), 0 10px 20px -10px color-mix(in oklch, var(--tpl-ink) 12%, transparent)",
  },
  paths: {
    home: "/reparation-mobile",
    reparations: "/reparation-mobile/reparations",
    faq: "/reparation-mobile/faq",
    contact: "/reparation-mobile/contact",
  },
  copy: { fr, en },
};
