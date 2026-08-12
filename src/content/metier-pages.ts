/**
 * Pages métier — cible « site internet {métier} ».
 *
 * Longue traîne peu disputée, et coût marginal faible puisque chaque métier
 * dispose déjà d'une démo de template sur le domaine.
 *
 * Règle de rédaction : chaque page doit contenir de la substance réellement
 * propre au métier — ce que cherchent ses clients, ce que le site doit faire,
 * ce qu'il faut préparer. Treize pages interchangeables seraient du contenu
 * de faible valeur produit à l'échelle, ce que Google pénalise et qui
 * dessert plus qu'il ne sert.
 *
 * `demoSlug` pointe vers la démo correspondante. Ces démos sont en `noindex`
 * (voir src/middleware.ts) : le lien sert le visiteur, pas le référencement.
 */

export interface MetierFaq {
  question: string;
  answer: string;
}

export interface MetierPage {
  slug: string;
  metier: string;
  /** Utilisé dans le H1 et les titres, au singulier, avec son article. */
  label: string;
  demoSlug: string;
  demoName: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  /** Ce que cherchent les clients de ce métier, et dans quel état d'esprit. */
  searchIntent: string[];
  /** Ce que le site doit faire, propre au métier. */
  siteMustDo: { title: string; detail: string }[];
  /** Ce que le professionnel doit préparer pour tenir le délai de 48h. */
  toPrepare: string[];
  faq: MetierFaq[];
}

export const metierPages: MetierPage[] = [
  {
    slug: "site-internet-plombier",
    metier: "plombier",
    label: "un plombier chauffagiste",
    demoSlug: "plombier-chauffagiste",
    demoName: "Démo plombier chauffagiste",
    seoTitle: "Site internet pour plombier : ce qu'il vous faut | Sitekept",
    seoDescription:
      "Créer un site internet de plombier chauffagiste : ce que cherchent vos clients en urgence, ce que le site doit afficher, et notre offre à 500€ livrée en 48h.",
    h1: "Site internet pour plombier chauffagiste",
    intro:
      "La plomberie est l'un des rares métiers où le visiteur ne compare pas. Il a une fuite, il cherche un numéro, il appelle le premier qui inspire confiance et qui couvre sa commune. Un site de plombier ne se juge donc pas sur son esthétique, mais sur le temps qu'il faut pour trouver le numéro et comprendre que vous intervenez chez lui.",
    searchIntent: [
      "Une urgence en cours : fuite, chaudière en panne, canalisation bouchée. Le visiteur est pressé, souvent sur mobile, parfois debout dans une salle de bain inondée.",
      "Un devis à prévoir : remplacement de chaudière, rénovation de salle de bain. Là, il compare, et il regarde vos réalisations et vos certifications.",
      "Une vérification : il a votre nom par bouche-à-oreille et veut confirmer que vous existez, que vous êtes assuré et que vous couvrez sa zone.",
    ],
    siteMustDo: [
      {
        title: "Le numéro visible sans faire défiler",
        detail:
          "En haut de chaque page, cliquable sur mobile. C'est le premier réflexe d'un visiteur en urgence, et la première cause d'abandon quand il faut le chercher.",
      },
      {
        title: "La zone d'intervention, nommée",
        detail:
          "Listez les communes, pas seulement le département. « Nous intervenons dans un rayon de 30 km » n'aide personne : le visiteur veut lire le nom de sa ville.",
      },
      {
        title: "Les horaires, et ce que couvre l'urgence",
        detail:
          "Intervenez-vous le soir, le week-end, les jours fériés ? Y a-t-il une majoration ? Le dire évite des appels inutiles pour vous et de la déception pour eux.",
      },
      {
        title: "Les certifications et l'assurance",
        detail:
          "RGE, Qualibat, décennale : ce sont vos preuves de sérieux, et elles conditionnent certaines aides pour vos clients. Elles ne servent à rien si elles restent dans un tiroir.",
      },
      {
        title: "Des photos de chantiers réels",
        detail:
          "Une salle de bain que vous avez faite vaut mieux que dix images d'illustration. C'est aussi ce qui vous différencie du concurrent qui a acheté le même modèle de site que tout le monde.",
      },
    ],
    toPrepare: [
      "La liste des communes où vous intervenez",
      "Vos certifications et votre numéro d'assurance décennale",
      "Cinq à dix photos de chantiers terminés",
      "Vos horaires, et vos conditions d'intervention en urgence",
    ],
    faq: [
      {
        question: "Un plombier a-t-il vraiment besoin d'un site internet ?",
        answer:
          "Le bouche-à-oreille reste le premier canal du métier, mais il s'accompagne presque toujours d'une vérification en ligne. Sans site, cette vérification tombe sur une fiche d'annuaire que vous ne contrôlez pas, ou sur rien. Le site sert autant à convertir un contact déjà chaud qu'à en générer de nouveaux.",
      },
      {
        question: "Faut-il afficher ses tarifs sur un site de plomberie ?",
        answer:
          "Rarement au détail, car chaque chantier diffère. En revanche, afficher un tarif de déplacement, une fourchette pour les interventions courantes ou la gratuité du devis rassure et filtre les demandes hors budget avant l'appel.",
      },
    ],
  },
  {
    slug: "site-internet-dentiste",
    metier: "dentiste",
    label: "un cabinet dentaire",
    demoSlug: "dentiste",
    demoName: "Démo cabinet dentaire",
    seoTitle: "Site internet pour dentiste et cabinet dentaire | Sitekept",
    seoDescription:
      "Créer le site d'un cabinet dentaire : rassurer avant la première visite, structurer les soins, faciliter la prise de rendez-vous. Site livré en 48h dès 500€.",
    h1: "Site internet pour cabinet dentaire",
    intro:
      "Le site d'un cabinet dentaire ne vend pas : il rassure. Une partie de vos futurs patients arrive avec une appréhension réelle, parfois ancienne. Ce qu'ils cherchent en ligne avant de décrocher leur téléphone, c'est de savoir à quoi ressemble le cabinet, qui les recevra, et comment se passe une première visite.",
    searchIntent: [
      "Une douleur : le visiteur cherche un rendez-vous rapide et regarde d'abord vos disponibilités et votre adresse.",
      "Un changement de praticien : déménagement, départ à la retraite du précédent. Il compare les cabinets sur l'accueil, l'équipe et les horaires.",
      "Un soin esthétique ou un implant : parcours long, montant élevé. Il lit, compare, revient plusieurs fois avant de prendre contact.",
    ],
    siteMustDo: [
      {
        title: "Une entrée de prise de rendez-vous sur chaque page",
        detail:
          "Que ce soit un numéro, un formulaire ou un lien vers votre plateforme de réservation, il ne doit jamais falloir revenir à l'accueil pour le trouver.",
      },
      {
        title: "Les soins expliqués, hiérarchisés par besoin",
        detail:
          "Un patient ne cherche pas « endodontie », il cherche « rage de dents ». Nommez les soins dans ses mots, puis expliquez le terme technique.",
      },
      {
        title: "La page « première visite »",
        detail:
          "Durée, déroulé, ce qu'il faut apporter, comment se passe le règlement. C'est la page qui lève le plus d'anxiété, et presque aucun cabinet ne la propose.",
      },
      {
        title: "L'équipe, avec des visages",
        detail:
          "Savoir qui vous recevra change le rapport à la consultation. Des photos réelles, pas des portraits de banque d'images.",
      },
      {
        title: "L'accès et le stationnement",
        detail:
          "Étage, ascenseur, accessibilité, transports, où se garer. Des informations triviales pour vous, décisives pour un patient qui vient pour la première fois ou avec une mobilité réduite.",
      },
    ],
    toPrepare: [
      "La liste des soins proposés, et ceux que vous ne faites pas",
      "Les photos du cabinet et de l'équipe",
      "Vos horaires et votre mode de prise de rendez-vous",
      "Les informations pratiques d'accès et de stationnement",
    ],
    faq: [
      {
        question:
          "Que peut-on écrire sur le site d'un cabinet dentaire ?",
        answer:
          "La communication des chirurgiens-dentistes est encadrée par le code de déontologie et le code de la santé publique. L'information au public est autorisée, la publicité comparative ou promettant un résultat ne l'est pas. Nous construisons le site sur des informations factuelles — soins, équipe, accès, déroulé des consultations — et il vous revient de faire valider les contenus au regard de vos obligations ordinales.",
      },
      {
        question: "Faut-il un module de prise de rendez-vous en ligne ?",
        answer:
          "Si vous utilisez déjà une plateforme de réservation, le site doit y renvoyer clairement depuis chaque page : c'est inclus dans le site vitrine. Développer un système de réservation propre au cabinet est en revanche une fonctionnalité sur mesure, chiffrée séparément.",
      },
    ],
  },
  {
    slug: "site-internet-restaurant",
    metier: "restaurant",
    label: "un restaurant",
    demoSlug: "restaurant-bistrot",
    demoName: "Démo restaurant bistrot",
    seoTitle: "Site internet pour restaurant : l'essentiel | Sitekept",
    seoDescription:
      "Créer le site d'un restaurant : carte à jour, réservation, horaires et accès. Ce que vos clients cherchent vraiment, et notre offre livrée en 48h dès 500€.",
    h1: "Site internet pour restaurant",
    intro:
      "Un site de restaurant a trois missions, et une seule vraie difficulté. Les missions : montrer la carte, permettre de réserver, indiquer où et quand vous êtes ouverts. La difficulté : rester à jour. Une carte périmée ou des horaires faux coûtent plus cher qu'une absence de site, parce qu'ils font venir des gens pour rien.",
    searchIntent: [
      "Un choix immédiat : le visiteur cherche où dîner ce soir, souvent sur mobile, à proximité. Il regarde la carte, les prix et s'il reste de la place.",
      "Une occasion à organiser : anniversaire, repas d'équipe, groupe. Il cherche la capacité, la possibilité de privatiser et un contact direct.",
      "Une vérification avant de venir : il a l'adresse, il veut confirmer les horaires du jour et savoir s'il faut réserver.",
    ],
    siteMustDo: [
      {
        title: "La carte, lisible et datée",
        detail:
          "En texte sur la page, pas en PDF ni en photo : un PDF ne se lit pas confortablement sur mobile et reste invisible pour les moteurs de recherche. Indiquez les prix, et la date de mise à jour si la carte tourne.",
      },
      {
        title: "Les horaires réels, jours de fermeture compris",
        detail:
          "C'est l'information la plus consultée d'un site de restaurant, et la plus souvent fausse. Pensez aux congés et aux jours fériés.",
      },
      {
        title: "La réservation, par le canal que vous utilisez vraiment",
        detail:
          "Téléphone, plateforme ou formulaire : un seul chemin, clairement indiqué. Deux canaux mal synchronisés produisent des doubles réservations.",
      },
      {
        title: "Des photos des plats et de la salle",
        detail:
          "Ce sont elles qui déclenchent la venue. Prises chez vous, à la lumière du jour si possible, pas achetées en banque d'images.",
      },
      {
        title: "L'ambiance dite en quelques mots",
        detail:
          "Bistrot de quartier, gastronomique, familial, végétarien : le visiteur veut savoir en dix secondes s'il est au bon endroit pour l'occasion qu'il prépare.",
      },
    ],
    toPrepare: [
      "Votre carte à jour, avec les prix",
      "Vos horaires, jours de fermeture et congés",
      "Dix à quinze photos de plats et de la salle",
      "Votre mode de réservation, et la capacité de la salle",
    ],
    faq: [
      {
        question: "Faut-il mettre la carte en PDF sur le site ?",
        answer:
          "C'est la solution la plus rapide et la moins efficace. Un PDF s'ouvre mal sur mobile, oblige à zoomer, et son contenu est difficilement exploitable par les moteurs de recherche : vos plats n'apparaîtront pas dans les résultats. Une carte en texte sur la page se lit partout et se met à jour en quelques minutes.",
      },
      {
        question: "Un restaurant a-t-il besoin d'un site s'il est déjà sur les plateformes ?",
        answer:
          "Les plateformes vous apportent de la visibilité, mais elles prennent une commission, imposent leur présentation et peuvent modifier leurs conditions du jour au lendemain. Un site vous donne un point de contact direct, sans intermédiaire ni commission sur les réservations. Les deux sont complémentaires ; n'avoir que le premier vous rend dépendant.",
      },
    ],
  },
  {
    slug: "site-internet-salon-de-coiffure",
    metier: "salon de coiffure",
    label: "un salon de coiffure",
    demoSlug: "salon-coiffure",
    demoName: "Démo salon de coiffure",
    seoTitle: "Site internet pour salon de coiffure | Sitekept",
    seoDescription:
      "Créer le site d'un salon de coiffure : prestations et tarifs, réservation, portfolio de réalisations. Site professionnel livré en 48h à partir de 500€.",
    h1: "Site internet pour salon de coiffure",
    intro:
      "Dans la coiffure, le site joue un rôle que peu de métiers connaissent : il sert de portfolio autant que de vitrine. On ne choisit pas un salon sur son adresse, on le choisit sur ce qu'on y voit faire. C'est aussi un métier où la réservation en ligne a changé les habitudes plus vite qu'ailleurs.",
    searchIntent: [
      "Un rendez-vous à prendre : le visiteur cherche les disponibilités et les tarifs, souvent le soir ou le week-end, hors de vos heures d'ouverture.",
      "Un changement de salon : il compare les réalisations et cherche un ou une coiffeuse dont le style lui parle.",
      "Une prestation technique précise : balayage, lissage, extensions, cheveux bouclés ou crépus. Il vérifie que vous la maîtrisez avant d'appeler.",
    ],
    siteMustDo: [
      {
        title: "Les prestations avec leurs tarifs",
        detail:
          "C'est l'information la plus recherchée et la plus souvent absente. Une fourchette vaut mieux que rien : elle évite les malentendus au moment de payer.",
      },
      {
        title: "Un portfolio de réalisations réelles",
        detail:
          "Vos coupes, vos couleurs, sur vos clientes et vos clients, avec leur accord. C'est ce qui décide, bien plus que le texte de présentation.",
      },
      {
        title: "La réservation accessible en permanence",
        detail:
          "Une grande partie des prises de rendez-vous se fait en dehors des heures d'ouverture. Un lien de réservation visible sur chaque page capte ces moments-là.",
      },
      {
        title: "L'équipe, et les spécialités de chacun",
        detail:
          "Beaucoup de clients reviennent pour une personne, pas pour un salon. Nommer qui fait quoi permet de demander la bonne personne dès le premier rendez-vous.",
      },
      {
        title: "Les techniques et types de cheveux traités",
        detail:
          "Cheveux bouclés, crépus, colorations végétales, extensions : ces précisions sont des requêtes de recherche à elles seules, et différencient bien plus qu'un slogan.",
      },
    ],
    toPrepare: [
      "Votre grille de prestations et de tarifs",
      "Quinze à vingt photos de réalisations, avec l'accord des personnes",
      "La présentation de l'équipe et des spécialités",
      "Vos horaires et votre mode de réservation",
    ],
    faq: [
      {
        question: "Faut-il afficher ses tarifs de coiffure en ligne ?",
        answer:
          "Oui, et c'est d'ailleurs une obligation d'affichage en salon qui se prolonge naturellement en ligne. Les tarifs sont la première chose recherchée. Les masquer ne protège de rien : cela déplace simplement la question au téléphone, ou fait partir le visiteur vers un salon qui les affiche.",
      },
      {
        question: "Puis-je publier des photos de mes clientes ?",
        answer:
          "Uniquement avec leur accord, et il est prudent de le recueillir par écrit. Une photo identifiable est une donnée personnelle : l'accord doit être explicite et la personne doit pouvoir demander le retrait. Une mention simple dans votre fiche client suffit généralement.",
      },
    ],
  },
];

export function getMetierPageBySlug(slug: string): MetierPage | undefined {
  return metierPages.find((page) => page.slug === slug);
}
