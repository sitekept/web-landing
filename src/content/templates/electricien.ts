import type {
  TemplateDefinition,
  TemplateIconKey,
  WidenLiterals,
} from "@/content/templates/types";

/**
 * Template « electricien » (artisan électricien fictif « Votre entreprise »).
 *
 * Toute la copie visible vit ici : navigation, appels à l'action, textes de
 * chaque page, `alt`, métadonnées. Les vues (`src/templates/electricien/`) n'ont
 * aucun texte en dur.
 *
 * Version anglaise : `en`, plus bas, est une traduction neutre typée
 * `ElectricienCopy` (dérivé de `fr` par `WidenLiterals`). Une clé manquante ou
 * une liste de longueur différente fait échouer `pnpm type-check`.
 *
 * Icônes : chaque élément de liste qui en a une porte une clé `icon`, identique
 * en français et en anglais ; les vues la résolvent avec la table
 * `Record<ElectricienIconKey, LucideIcon>` de `src/templates/electricien/parts.tsx`.
 *
 * Les images (URL Unsplash génériques) sont des données : même URL dans les deux
 * langues, seul le `alt` se traduit.
 */

const fr = {
  brand: {
    name: "Votre entreprise",
    tagline: "Artisan électricien",
  },
  phone: {
    href: "tel:+33199000031",
    label: "01 99 00 00 31",
  },
  nav: {
    home: "Accueil",
    prestations: "Prestations",
    realisations: "Réalisations",
    contact: "Contact",
  },
  cta: {
    call: "Appeler",
    quote: "Demander un devis gratuit",
    services: "Voir les prestations",
    works: "Voir les réalisations",
    allWorks: "Toutes les réalisations",
    allServices: "Toutes les prestations",
    contact: "Nous contacter",
  },
  footer: {
    text: "Artisan électricien pour les particuliers et les petits professionnels : dépannage, mise aux normes, rénovation, éclairage et bornes de recharge.",
    contactTitle: "Coordonnées",
    hoursTitle: "Horaires",
    address: "12 rue de l’Exemple, 00000 Votre ville",
    email: "contact@votre-entreprise.example",
    hours: "Lun-Ven 8 h-18 h, sam 9 h-12 h",
    zone: "Intervention dans un rayon de 25 km autour de votre ville",
  },
  meta: {
    home: {
      title: "Votre entreprise - Électricien",
      description:
        "Artisan électricien local : dépannage le jour même selon disponibilité, tableau, éclairage, bornes de recharge. Devis gratuit et attestation de conformité.",
    },
    prestations: {
      title: "Prestations - Votre entreprise",
      description:
        "Dépannage, mise en sécurité, rénovation, tableau, éclairage et borne de recharge : ce qui est inclus, tarifs à partir de, et déroulé d’une intervention.",
    },
    realisations: {
      title: "Réalisations - Votre entreprise",
      description:
        "Tableau électrique, éclairage de cuisine, borne de recharge en garage, rénovation d’appartement, éclairage extérieur : quelques chantiers récents.",
    },
    contact: {
      title: "Contact - Votre entreprise",
      description:
        "Demandez un devis gratuit ou un dépannage : coordonnées, horaires et zone d’intervention dans un rayon de 25 km autour de votre ville.",
    },
  },
  home: {
    hero: {
      eyebrow: "Artisan électricien · particuliers et petits pros",
      title: "Dépannage électrique rapide et installations aux normes.",
      description:
        "Un artisan local qui vient chez vous : dépannage le jour même selon disponibilité, tableau, éclairage, bornes de recharge. Devis gratuit, attestation de conformité remise en fin de chantier.",
      ticket: {
        eyebrow: "Fiche d’intervention",
        rows: [
          { label: "Délai", value: "Le jour même" },
          { label: "Zone", value: "25 km" },
          { label: "Devis", value: "Gratuit" },
        ],
        note: "Dépannage le jour même selon disponibilité, dans un rayon de 25 km autour de votre ville.",
      },
    },
    commitments: {
      label: "Nos engagements",
      items: [
        { value: "0 €", text: "Devis gratuit, écrit et détaillé" },
        { value: "25 km", text: "Autour de votre ville" },
        { value: "Jour même", text: "Dépannage, selon disponibilité" },
      ],
    },
    services: {
      eyebrow: "Prestations",
      title: "Tout ce qui touche à votre installation électrique.",
      description:
        "De la panne imprévue au chantier complet, une seule personne vous répond, vous chiffre et intervient.",
      items: [
        {
          icon: "zap",
          title: "Dépannage électrique",
          text: "Panne de courant, disjoncteur qui saute, prise qui chauffe : diagnostic sur place et remise en service.",
        },
        {
          icon: "shield-check",
          title: "Mise en sécurité et aux normes",
          text: "Contrôle de la terre, des protections et des différentiels, puis remplacement de ce qui est dangereux.",
        },
        {
          icon: "hammer",
          title: "Rénovation électrique",
          text: "Installation neuve ou reprise complète d’un logement, avec plan, câblage et essais.",
        },
        {
          icon: "plug-zap",
          title: "Tableau électrique",
          text: "Remplacement d’un tableau saturé ou ancien, circuits étiquetés et essais consignés.",
        },
        {
          icon: "lightbulb",
          title: "Éclairage et domotique simple",
          text: "Spots, appliques, éclairage extérieur, variateurs et commandes à distance.",
        },
        {
          icon: "battery-charging",
          title: "Borne de recharge",
          text: "Pose d’une borne pour véhicule électrique avec sa protection dédiée, à la maison ou au garage.",
        },
      ],
    },
    reviews: {
      eyebrow: "Avis clients",
      title: "Des installations propres, des clients rassurés.",
      description:
        "Ce que disent celles et ceux qui nous ont ouvert leur tableau électrique.",
      label: "Avis de clients",
      items: [
        {
          quote:
            "Un disjoncteur qui sautait chaque semaine. Cause trouvée dans la journée, facture conforme au devis.",
          name: "Claire M.",
          detail: "Dépannage",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Tableau remplacé proprement, chaque circuit étiqueté, attestation de conformité remise le soir même.",
          name: "Thomas B.",
          detail: "Tableau électrique",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Borne installée dans notre garage en une demi-journée. Devis précis, aucune mauvaise surprise.",
          name: "Sofia R.",
          detail: "Borne de recharge",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Installation de l’appartement entièrement reprise. Chantier propre, planning tenu à un jour près.",
          name: "Julien P.",
          detail: "Rénovation",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
        {
          quote:
            "Venu le jour même pour une panne dans la cuisine. Il a expliqué ce qu’il faisait et ce que ça coûtait avant de commencer.",
          name: "Nadia K.",
          detail: "Dépannage",
          rating: 5,
          ratingLabel: "Note : 5 sur 5",
        },
        {
          quote:
            "Éclairage du jardin et de la terrasse : rendu soigné, câbles bien protégés. Je recommande.",
          name: "Marc D.",
          detail: "Éclairage extérieur",
          rating: 4,
          ratingLabel: "Note : 4 sur 5",
        },
      ],
    },
    emergency: {
      eyebrow: "Urgence",
      title: "Une panne ? Appelez-nous.",
      description:
        "Plus de courant, disjoncteur qui saute, prise qui chauffe : nous vous disons tout de suite si nous pouvons passer aujourd’hui.",
      stepsTitle: "Ce que nous vous demandons à l’appel",
      steps: [
        "Ce qui ne fonctionne plus, et depuis quand.",
        "Votre adresse et l’accès à votre tableau électrique.",
        "Un moment pour vous rappeler si nous sommes sur un chantier.",
      ],
      safetyTitle: "En cas de danger",
      safety:
        "Odeur de brûlé, fumée, fils à nu : coupez le disjoncteur général si vous pouvez le faire sans risque, éloignez-vous et appelez les secours.",
    },
    works: {
      eyebrow: "Réalisations",
      title: "Des chantiers à votre échelle.",
      description:
        "Un tableau, une cuisine, un garage : quelques interventions récentes.",
    },
    closing: {
      title: "Un projet ou un doute sur votre installation ?",
      description:
        "Décrivez-nous la situation : nous vous répondons avec un devis gratuit, écrit et détaillé.",
    },
  },
  prestations: {
    hero: {
      eyebrow: "Prestations",
      title: "Six interventions, des tarifs annoncés à l’avance.",
      description:
        "Pour chaque prestation : à qui elle s’adresse, ce qui est inclus et un tarif à partir de. Le devis final, gratuit, tient compte de votre logement.",
    },
    list: {
      fromLabel: "À partir de",
      forLabel: "Pour qui",
      includesLabel: "Ce qui est inclus",
      disclaimer:
        "Tarifs indicatifs, TTC. Le prix définitif est confirmé par un devis écrit et gratuit avant toute intervention.",
      items: [
        {
          icon: "zap",
          title: "Dépannage électrique",
          forWho: "Particuliers et petits professionnels en panne.",
          includes: [
            "Diagnostic sur place de la panne",
            "Réparation ou remplacement du matériel défaillant",
            "Remise en service et conseils de prévention",
          ],
          price: "89 €",
          priceNote: "déplacement et diagnostic compris",
        },
        {
          icon: "shield-check",
          title: "Mise en sécurité et mise aux normes",
          forWho:
            "Logements anciens, avant une vente ou une location, après un incident.",
          includes: [
            "Contrôle de la terre, des protections et des différentiels",
            "Remplacement des éléments dangereux",
            "Compte rendu écrit des travaux réalisés",
          ],
          price: "120 €",
          priceNote: "contrôle de l’installation",
        },
        {
          icon: "hammer",
          title: "Rénovation électrique",
          forWho:
            "Appartements et maisons en rénovation ou en reprise complète.",
          includes: [
            "Plan d’installation adapté à chaque pièce",
            "Câblage, prises et interrupteurs neufs",
            "Attestation de conformité en fin de chantier",
          ],
          price: "1 800 €",
          priceNote: "studio ou petit appartement",
        },
        {
          icon: "plug-zap",
          title: "Tableau électrique",
          forWho: "Tableau d’origine, saturé ou qui ne protège plus assez.",
          includes: [
            "Dépose de l’ancien tableau",
            "Pose du nouveau tableau, circuits étiquetés",
            "Essais de chaque circuit et attestation",
          ],
          price: "890 €",
          priceNote: "fourniture et pose",
        },
        {
          icon: "lightbulb",
          title: "Éclairage et domotique simple",
          forWho: "Cuisines, séjours, terrasses et jardins.",
          includes: [
            "Spots, appliques et éclairage extérieur",
            "Variateurs et commandes à distance",
            "Prises et volets connectés simples",
          ],
          price: "70 €",
          priceNote: "par point lumineux posé",
        },
        {
          icon: "battery-charging",
          title: "Borne de recharge pour véhicule électrique",
          forWho: "Maisons, garages et petites entreprises.",
          includes: [
            "Vérification de l’alimentation et du tableau",
            "Pose de la borne et de sa protection dédiée",
            "Mise en service et explications d’usage",
          ],
          price: "1 190 €",
          priceNote: "borne fournie et posée",
        },
      ],
    },
    steps: {
      eyebrow: "Déroulé",
      title: "Quatre étapes, du premier appel à l’attestation.",
      description:
        "Vous savez toujours où en est l’intervention et ce qu’elle coûte.",
      items: [
        {
          icon: "search",
          title: "Diagnostic",
          text: "Nous venons sur place, ou nous vous posons les bonnes questions au téléphone pour une panne.",
        },
        {
          icon: "receipt",
          title: "Devis",
          text: "Un devis gratuit, écrit et détaillé, remis avant de commencer.",
        },
        {
          icon: "wrench",
          title: "Intervention",
          text: "Travaux soignés, chantier protégé et rangé. Dépannage le jour même selon disponibilité.",
        },
        {
          icon: "badge-check",
          title: "Attestation",
          text: "Une attestation de conformité remise en fin de chantier, avec le détail de ce qui a été fait.",
        },
      ],
    },
    closing: {
      title: "Un doute sur la prestation qu’il vous faut ?",
      description:
        "Décrivez votre situation : nous vous disons laquelle correspond, et ce qu’elle coûte.",
    },
  },
  realisations: {
    hero: {
      eyebrow: "Réalisations",
      title:
        "Des chantiers propres, du simple remplacement au logement complet.",
      description:
        "Cinq interventions récentes, avec ce qu’il y avait avant et ce qui a été fait.",
    },
    gallery: {
      label: "Chantiers récents",
      hint: "Survolez ou touchez un chantier pour l’ouvrir.",
      items: [
        {
          title: "Boîte de dérivation refaite",
          meta: "Maison · une journée",
          image: {
            src: "https://images.unsplash.com/photo-1767514536570-83d70c024247?auto=format&fit=crop&w=1600&q=80",
            alt: "Boîte de dérivation ouverte dans un mur, avec des fils bleus, noirs, marron et jaune-vert raccordés sur une rangée de dominos jaunes.",
          },
        },
        {
          title: "Éclairage de cuisine",
          meta: "Appartement · demi-journée",
          image: {
            src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80",
            alt: "Cuisine blanche et lumineuse avec un plan de travail dégagé.",
          },
        },
        {
          title: "Borne de recharge en garage",
          meta: "Garage · demi-journée",
          image: {
            src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80",
            alt: "Prise de recharge branchée sur un véhicule électrique.",
          },
        },
        {
          title: "Rénovation d’appartement",
          meta: "Appartement · trois jours",
          image: {
            src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
            alt: "Séjour clair et dégagé, avec parquet et grandes fenêtres.",
          },
        },
        {
          title: "Éclairage extérieur",
          meta: "Maison · une journée",
          image: {
            src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            alt: "Maison moderne éclairée en début de soirée, avec sa terrasse et son jardin.",
          },
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Avant / après",
      title: "Ce qui change concrètement.",
      description:
        "Trois situations courantes, telles que nous les trouvons et telles que nous les laissons.",
      beforeLabel: "Avant",
      afterLabel: "Après",
      items: [
        {
          title: "Tableau d’origine saturé",
          before:
            "Anciens fusibles, circuits non repérés, disjonctions fréquentes.",
          after:
            "Tableau neuf avec différentiels, circuits étiquetés et essais consignés.",
        },
        {
          title: "Cuisine mal éclairée",
          before:
            "Un seul point au plafond et trop peu de prises sur le plan de travail.",
          after:
            "Spots encastrés, éclairage sous les meubles hauts et prises ajoutées.",
        },
        {
          title: "Garage sans alimentation dédiée",
          before:
            "Recharge sur une prise ordinaire, ligne non adaptée à l’usage.",
          after:
            "Ligne dédiée protégée au tableau, borne posée et mise en service expliquée.",
        },
      ],
    },
    closing: {
      title: "Un chantier comparable au vôtre ?",
      description:
        "Envoyez-nous quelques lignes et une photo de votre tableau : nous revenons vers vous avec un devis gratuit.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Un devis gratuit ou un dépannage : écrivez-nous ou appelez.",
      description:
        "Pour une panne, le téléphone est le plus rapide. Pour un projet, le formulaire nous donne tout de suite les bonnes informations.",
    },
    form: {
      title: "Décrivez votre besoin",
      description:
        "Quelques lignes suffisent. Nous vous répondons avec un devis gratuit ou un créneau d’intervention.",
      name: { label: "Nom" },
      phone: { label: "Téléphone" },
      email: { label: "E-mail" },
      type: {
        label: "Type d’intervention",
        placeholder: "Choisir une intervention",
        options: [
          { value: "depannage", label: "Dépannage, panne" },
          { value: "normes", label: "Mise en sécurité ou aux normes" },
          { value: "renovation", label: "Rénovation électrique" },
          { value: "tableau", label: "Tableau électrique" },
          { value: "eclairage", label: "Éclairage ou domotique" },
          { value: "borne", label: "Borne de recharge" },
          { value: "autre", label: "Autre demande" },
        ],
      },
      urgency: {
        label: "Est-ce urgent ?",
        placeholder: "Choisir",
        options: [
          { value: "oui", label: "Oui, c’est urgent" },
          { value: "non", label: "Non, à planifier" },
        ],
      },
      message: {
        label: "Message",
        placeholder:
          "Ce qui se passe, le type de logement, vos disponibilités…",
      },
      submit: "Envoyer ma demande",
    },
    details: {
      title: "Coordonnées",
      items: [
        {
          icon: "phone",
          label: "Téléphone",
          value: "01 99 00 00 31",
        },
        {
          icon: "mail",
          label: "E-mail",
          value: "contact@votre-entreprise.example",
        },
        {
          icon: "map-pin",
          label: "Adresse",
          value: "12 rue de l’Exemple, 00000 Votre ville",
        },
      ],
    },
    hours: {
      title: "Horaires",
      items: [
        { day: "Lundi au vendredi", time: "8 h-18 h" },
        { day: "Samedi", time: "9 h-12 h" },
        { day: "Dimanche", time: "Fermé" },
      ],
      note: "Hors horaires, laissez un message : nous vous rappelons dès que possible.",
    },
    zone: {
      title: "Zone d’intervention",
      text: "Dans un rayon de 25 km autour de votre ville, pour les particuliers et les petits professionnels.",
    },
  },
} as const;

export type ElectricienCopy = WidenLiterals<typeof fr>;

/** Clés d'icône de la copie (table `ICONS` de `src/templates/electricien/parts.tsx`). */
export type ElectricienIconKey = TemplateIconKey<ElectricienCopy>;

const en: ElectricienCopy = {
  brand: {
    name: "Your business",
    tagline: "Electrician",
  },
  phone: {
    href: "tel:+33199000031",
    label: "01 99 00 00 31",
  },
  nav: {
    home: "Home",
    prestations: "Services",
    realisations: "Projects",
    contact: "Contact",
  },
  cta: {
    call: "Call",
    quote: "Get a free quote",
    services: "See our services",
    works: "See our projects",
    allWorks: "All projects",
    allServices: "All services",
    contact: "Contact us",
  },
  footer: {
    text: "A local electrician for homeowners and small businesses: repairs, safety upgrades, renovation, lighting and EV charging points.",
    contactTitle: "Contact",
    hoursTitle: "Opening hours",
    address: "12 Example Street, 00000 Your city",
    email: "contact@example.com",
    hours: "Mon-Fri 8 am-6 pm, Sat 9 am-12 pm",
    zone: "We cover a 25 km (about 15 miles) radius around your city",
  },
  meta: {
    home: {
      title: "Your business - Electrician",
      description:
        "Local electrician: same-day repairs depending on availability, electrical panels, lighting and EV charging points. Free quote and certificate of compliance.",
    },
    prestations: {
      title: "Services - Your business",
      description:
        "Repairs, safety upgrades, renovation, electrical panels, lighting and EV charging points: what is included, starting prices and how a job unfolds.",
    },
    realisations: {
      title: "Projects - Your business",
      description:
        "Electrical panel, kitchen lighting, garage EV charger, apartment renovation, outdoor lighting: a few recent jobs.",
    },
    contact: {
      title: "Contact - Your business",
      description:
        "Request a free quote or a repair: contact details, opening hours and a service area of 25 km around your city.",
    },
  },
  home: {
    hero: {
      eyebrow: "Electrician · homeowners and small businesses",
      title: "Fast electrical repairs and installations built to code.",
      description:
        "A local tradesperson who comes to you: same-day repairs depending on availability, electrical panels, lighting and EV charging points. Free quote, certificate of compliance handed over at the end of the job.",
      ticket: {
        eyebrow: "Job sheet",
        rows: [
          { label: "Response", value: "Same day" },
          { label: "Area", value: "25 km" },
          { label: "Quote", value: "Free" },
        ],
        note: "Same-day repairs depending on availability, within 25 km (about 15 miles) of your city.",
      },
    },
    commitments: {
      label: "Our commitments",
      items: [
        { value: "€0", text: "Free, written and detailed quote" },
        { value: "25 km", text: "Around your city" },
        { value: "Same day", text: "Repairs, depending on availability" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Everything that touches your electrical system.",
      description:
        "From an unexpected outage to a full job, one person answers, quotes and does the work.",
      items: [
        {
          icon: "zap",
          title: "Electrical repairs",
          text: "Power cut, tripping breaker, socket running hot: on-site diagnosis and getting you back up and running.",
        },
        {
          icon: "shield-check",
          title: "Safety and code upgrades",
          text: "Checks of earthing, protection devices and residual-current devices, then replacement of anything unsafe.",
        },
        {
          icon: "hammer",
          title: "Electrical renovation",
          text: "New installation or full rework of a home, with a layout plan, wiring and testing.",
        },
        {
          icon: "plug-zap",
          title: "Electrical panel",
          text: "Replacement of an overloaded or outdated panel, labeled circuits and logged tests.",
        },
        {
          icon: "lightbulb",
          title: "Lighting and simple home automation",
          text: "Spotlights, wall lights, outdoor lighting, dimmers and remote controls.",
        },
        {
          icon: "battery-charging",
          title: "EV charging point",
          text: "Installation of an electric vehicle charger with its dedicated protection, at home or in the garage.",
        },
      ],
    },
    reviews: {
      eyebrow: "Customer reviews",
      title: "Clean installations, reassured customers.",
      description:
        "What people say after opening their electrical panel to us.",
      label: "Customer reviews",
      items: [
        {
          quote:
            "A breaker that tripped every week. Cause found the same day, and the invoice matched the quote.",
          name: "Claire M.",
          detail: "Repair",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Panel replaced neatly, every circuit labeled, certificate of compliance handed over that evening.",
          name: "Thomas B.",
          detail: "Electrical panel",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Charger installed in our garage in half a day. Precise quote, no bad surprises.",
          name: "Sofia R.",
          detail: "EV charging point",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Our apartment’s wiring was completely redone. Clean job, schedule kept to within a day.",
          name: "Julien P.",
          detail: "Renovation",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
        {
          quote:
            "Came the same day for a kitchen outage. He explained what he was doing and what it would cost before starting.",
          name: "Nadia K.",
          detail: "Repair",
          rating: 5,
          ratingLabel: "Rating: 5 out of 5",
        },
        {
          quote:
            "Garden and patio lighting: neat result, cables well protected. Recommended.",
          name: "Marc D.",
          detail: "Outdoor lighting",
          rating: 4,
          ratingLabel: "Rating: 4 out of 5",
        },
      ],
    },
    emergency: {
      eyebrow: "Emergency",
      title: "Power out? Call us.",
      description:
        "No electricity, a breaker that keeps tripping, a socket running hot: we will tell you right away whether we can come today.",
      stepsTitle: "What we will ask you on the phone",
      steps: [
        "What stopped working, and since when.",
        "Your address and where your electrical panel is.",
        "A good time to call you back if we are on a job.",
      ],
      safetyTitle: "If there is danger",
      safety:
        "Burning smell, smoke, bare wires: switch off the main breaker if you can do so safely, move away and call the emergency services.",
    },
    works: {
      eyebrow: "Projects",
      title: "Jobs sized for your home.",
      description: "A panel, a kitchen, a garage: a few recent jobs.",
    },
    closing: {
      title: "A project, or a doubt about your installation?",
      description:
        "Tell us about it: we will reply with a free, written and detailed quote.",
    },
  },
  prestations: {
    hero: {
      eyebrow: "Services",
      title: "Six types of job, with prices stated up front.",
      description:
        "For each service: who it is for, what is included and a starting price. The final quote is free and takes your home into account.",
    },
    list: {
      fromLabel: "From",
      forLabel: "Who it is for",
      includesLabel: "What is included",
      disclaimer:
        "Indicative prices, tax included. The final price is confirmed by a free written quote before any work begins.",
      items: [
        {
          icon: "zap",
          title: "Electrical repairs",
          forWho: "Homeowners and small businesses facing an outage.",
          includes: [
            "On-site diagnosis of the fault",
            "Repair or replacement of the faulty equipment",
            "Getting you back up and running, plus prevention tips",
          ],
          price: "€89",
          priceNote: "call-out and diagnosis included",
        },
        {
          icon: "shield-check",
          title: "Safety and code upgrades",
          forWho:
            "Older homes, before a sale or a rental, or after an incident.",
          includes: [
            "Checks of earthing, protection devices and residual-current devices",
            "Replacement of unsafe components",
            "Written report of the work carried out",
          ],
          price: "€120",
          priceNote: "inspection of the installation",
        },
        {
          icon: "hammer",
          title: "Electrical renovation",
          forWho: "Apartments and houses being renovated or fully reworked.",
          includes: [
            "Installation plan adapted to each room",
            "New wiring, sockets and switches",
            "Certificate of compliance at the end of the job",
          ],
          price: "€1,800",
          priceNote: "studio or small apartment",
        },
        {
          icon: "plug-zap",
          title: "Electrical panel",
          forWho:
            "Original panels that are overloaded or no longer protect enough.",
          includes: [
            "Removal of the old panel",
            "Installation of the new panel with labeled circuits",
            "Testing of every circuit and certificate",
          ],
          price: "€890",
          priceNote: "supply and installation",
        },
        {
          icon: "lightbulb",
          title: "Lighting and simple home automation",
          forWho: "Kitchens, living rooms, patios and gardens.",
          includes: [
            "Spotlights, wall lights and outdoor lighting",
            "Dimmers and remote controls",
            "Simple connected sockets and shutters",
          ],
          price: "€70",
          priceNote: "per light point installed",
        },
        {
          icon: "battery-charging",
          title: "EV charging point",
          forWho: "Houses, garages and small businesses.",
          includes: [
            "Check of the power supply and the panel",
            "Installation of the charger and its dedicated protection",
            "Commissioning and a walkthrough of how to use it",
          ],
          price: "€1,190",
          priceNote: "charger supplied and installed",
        },
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "Four steps, from the first call to the certificate.",
      description: "You always know where the job stands and what it costs.",
      items: [
        {
          icon: "search",
          title: "Diagnosis",
          text: "We come to you, or for an outage we ask the right questions over the phone.",
        },
        {
          icon: "receipt",
          title: "Quote",
          text: "A free, written and detailed quote, handed over before we start.",
        },
        {
          icon: "wrench",
          title: "Work",
          text: "Careful work, with the site protected and tidied. Same-day repairs depending on availability.",
        },
        {
          icon: "badge-check",
          title: "Certificate",
          text: "A certificate of compliance handed over at the end of the job, detailing what was done.",
        },
      ],
    },
    closing: {
      title: "Not sure which service you need?",
      description:
        "Describe your situation: we will tell you which one fits, and what it costs.",
    },
  },
  realisations: {
    hero: {
      eyebrow: "Projects",
      title: "Clean jobs, from a simple replacement to a whole home.",
      description:
        "Five recent jobs, with what was there before and what was done.",
    },
    gallery: {
      label: "Recent jobs",
      hint: "Hover over or tap a job to open it.",
      items: [
        {
          title: "Junction box redone",
          meta: "House · one day",
          image: {
            src: "https://images.unsplash.com/photo-1767514536570-83d70c024247?auto=format&fit=crop&w=1600&q=80",
            alt: "Open junction box in a wall, with blue, black, brown and yellow-green wires connected to a row of yellow terminal blocks.",
          },
        },
        {
          title: "Kitchen lighting",
          meta: "Apartment · half a day",
          image: {
            src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80",
            alt: "Bright white kitchen with a clear countertop.",
          },
        },
        {
          title: "Garage EV charger",
          meta: "Garage · half a day",
          image: {
            src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80",
            alt: "Charging plug connected to an electric vehicle.",
          },
        },
        {
          title: "Apartment renovation",
          meta: "Apartment · three days",
          image: {
            src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
            alt: "Bright, uncluttered living room with wood flooring and large windows.",
          },
        },
        {
          title: "Outdoor lighting",
          meta: "House · one day",
          image: {
            src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            alt: "Modern house lit in the early evening, with its patio and garden.",
          },
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Before / after",
      title: "What actually changes.",
      description:
        "Three common situations, as we find them and as we leave them.",
      beforeLabel: "Before",
      afterLabel: "After",
      items: [
        {
          title: "Overloaded original panel",
          before: "Old fuses, unlabeled circuits, frequent tripping.",
          after:
            "New panel with residual-current devices, labeled circuits and logged tests.",
        },
        {
          title: "Poorly lit kitchen",
          before:
            "A single ceiling light and too few sockets on the countertop.",
          after:
            "Recessed spotlights, lighting under the wall cabinets and added sockets.",
        },
        {
          title: "Garage with no dedicated supply",
          before:
            "Charging from an ordinary socket, on a line not suited to the load.",
          after:
            "Dedicated line protected at the panel, charger installed and commissioning explained.",
        },
      ],
    },
    closing: {
      title: "A job like yours?",
      description:
        "Send us a few lines and a photo of your panel: we will get back to you with a free quote.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "A free quote or a repair: write to us or call.",
      description:
        "For an outage, the phone is fastest. For a project, the form gives us the right details straight away.",
    },
    form: {
      title: "Tell us what you need",
      description:
        "A few lines are enough. We will reply with a free quote or a time slot.",
      name: { label: "Name" },
      phone: { label: "Phone" },
      email: { label: "Email" },
      type: {
        label: "Type of job",
        placeholder: "Choose a job",
        options: [
          { value: "depannage", label: "Repair, outage" },
          { value: "normes", label: "Safety or code upgrade" },
          { value: "renovation", label: "Electrical renovation" },
          { value: "tableau", label: "Electrical panel" },
          { value: "eclairage", label: "Lighting or home automation" },
          { value: "borne", label: "EV charging point" },
          { value: "autre", label: "Other request" },
        ],
      },
      urgency: {
        label: "Is it urgent?",
        placeholder: "Choose",
        options: [
          { value: "oui", label: "Yes, it is urgent" },
          { value: "non", label: "No, it can be scheduled" },
        ],
      },
      message: {
        label: "Message",
        placeholder:
          "What is happening, the type of home, when you are available…",
      },
      submit: "Send my request",
    },
    details: {
      title: "Contact details",
      items: [
        {
          icon: "phone",
          label: "Phone",
          value: "01 99 00 00 31",
        },
        {
          icon: "mail",
          label: "Email",
          value: "contact@example.com",
        },
        {
          icon: "map-pin",
          label: "Address",
          value: "12 Example Street, 00000 Your city",
        },
      ],
    },
    hours: {
      title: "Opening hours",
      items: [
        { day: "Monday to Friday", time: "8 am-6 pm" },
        { day: "Saturday", time: "9 am-12 pm" },
        { day: "Sunday", time: "Closed" },
      ],
      note: "Outside opening hours, leave a message: we will call you back as soon as we can.",
    },
    zone: {
      title: "Service area",
      text: "Within 25 km (about 15 miles) of your city, for homeowners and small businesses.",
    },
  },
};

/** Clé d'une page, pour `buildTemplatePageMetadata` et la table des chemins. */
export type ElectricienPage = keyof ElectricienCopy["meta"];

export const electricien: TemplateDefinition<"electricien", ElectricienCopy> = {
  slug: "electricien",
  /**
   * Identité technique et directe : graphite profond (encre et fond inverse),
   * fond blanc cassé froid, accent jaune de sécurité avec une encre sombre,
   * rayons faibles et ombres franches mais courtes. Typo : Inter (affichage
   * très gras, resserré par les vues).
   */
  theme: {
    surface: "oklch(0.975 0.004 250)",
    raised: "oklch(1 0 0)",
    ink: "oklch(0.235 0.014 255)",
    inkMuted: "oklch(0.42 0.016 255)",
    line: "oklch(0.82 0.01 255)",
    accent: "oklch(0.87 0.175 96)",
    accentInk: "oklch(0.22 0.014 255)",
    inverse: "oklch(0.215 0.014 255)",
    inverseInk: "oklch(0.97 0.004 250)",
    radius: "0.25rem",
    shadowSm: "0 2px 0 0 color-mix(in oklch, var(--tpl-ink) 12%, transparent)",
    shadowLg: "0 6px 0 0 color-mix(in oklch, var(--tpl-ink) 20%, transparent)",
  },
  paths: {
    home: "/electricien",
    prestations: "/electricien/prestations",
    realisations: "/electricien/realisations",
    contact: "/electricien/contact",
  },
  copy: { fr, en },
};
