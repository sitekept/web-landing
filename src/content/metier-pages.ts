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
  /**
   * Seconde démo à montrer quand deux modèles servent le même métier. Évite
   * de créer une page par démo, ce qui ferait se concurrencer deux pages sur
   * la même requête.
   */
  secondaryDemo?: { slug: string; name: string; note: string };
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
  {
    slug: "site-internet-boulangerie",
    metier: "boulangerie",
    label: "une boulangerie",
    demoSlug: "boulangerie",
    demoName: "Démo boulangerie",
    seoTitle: "Site internet pour boulangerie | Sitekept",
    seoDescription:
      "Créer le site d'une boulangerie : horaires et jour de fermeture, gamme, commandes spéciales. Ce que cherchent vos clients, site livré en 48h dès 500€.",
    h1: "Site internet pour boulangerie",
    intro:
      "Une boulangerie vit de proximité et d'habitude, pas de prospection. Le site n'a donc pas à convaincre : il doit répondre vite à trois questions très concrètes — êtes-vous ouverts maintenant, faites-vous ce que je cherche, et puis-je commander. Le reste est du confort.",
    searchIntent: [
      "Une envie immédiate : « boulangerie ouverte près de moi », souvent tôt le matin ou un dimanche. Le visiteur veut vos horaires du jour, pas votre histoire.",
      "Une commande à passer : galette, bûche, pain pour un buffet, sandwichs pour un chantier. Il cherche vos conditions et votre délai de commande.",
      "Un régime ou une allergie : sans gluten, levain naturel, farines locales. Requêtes peu concurrentielles et très qualifiées, presque jamais traitées par les sites du métier.",
    ],
    siteMustDo: [
      {
        title: "Les horaires, jour de fermeture en tête",
        detail:
          "C'est l'information la plus consultée, et la plus souvent fausse en ligne. Indiquez le jour de fermeture, les horaires du dimanche et les périodes de congés — un client qui trouve porte close ne revient pas vérifier votre site.",
      },
      {
        title: "Ce que vous faites vraiment vous-même",
        detail:
          "Pain au levain, viennoiseries pur beurre, cuisson sur place : c'est votre différence avec le pain industriel du supermarché, et c'est exactement ce que le client veut lire avant de traverser la rue.",
      },
      {
        title: "Les commandes, avec le délai",
        detail:
          "Pièces montées, buffets, plateaux, pains spéciaux : dites ce qui se commande, sous quel délai et comment. Une commande de 80 sandwichs est un chiffre d'affaires qui ne passe pas par la vitrine.",
      },
      {
        title: "Les allergènes et les farines",
        detail:
          "L'information sur les allergènes est une obligation qui s'applique aussi en vente directe. La porter en ligne vous évite des questions répétées au comptoir et vous positionne sur des recherches très ciblées.",
      },
      {
        title: "Où se garer, et pour combien de temps",
        detail:
          "Un arrêt minute, une place devant, un parking à cinquante mètres : trivial pour vous, décisif pour quelqu'un qui hésite entre vous et la boulangerie du rond-point.",
      },
    ],
    toPrepare: [
      "Vos horaires précis, jour de fermeture et congés compris",
      "La liste de vos produits et de vos spécialités",
      "Vos conditions de commande et vos délais",
      "Dix à quinze photos de vos produits et de la boutique",
    ],
    faq: [
      {
        question: "Une boulangerie de quartier a-t-elle besoin d'un site ?",
        answer:
          "Pour attirer de nouveaux clients, l'effet est limité : on choisit sa boulangerie en passant devant. Le site sert surtout à capter deux choses que la vitrine ne capte pas — les recherches d'horaires, très nombreuses, et les commandes pour événements, qui représentent des montants sans commune mesure avec une vente au comptoir.",
      },
      {
        question: "Faut-il vendre en ligne quand on est boulanger ?",
        answer:
          "Rarement utile pour la vente quotidienne : le client vient de toute façon. Un simple formulaire de commande avec retrait en boutique couvre l'essentiel du besoin et n'implique ni paiement en ligne ni logistique. Une vraie boutique en ligne est une fonctionnalité sur mesure, chiffrée séparément.",
      },
    ],
  },
  {
    slug: "site-internet-patisserie",
    metier: "pâtisserie",
    label: "une pâtisserie",
    demoSlug: "pattiserie",
    demoName: "Démo pâtisserie",
    seoTitle: "Site internet pour pâtisserie | Sitekept",
    seoDescription:
      "Créer le site d'une pâtisserie : portfolio de créations, délais et tarifs de commande, gâteaux personnalisés. Site professionnel livré en 48h dès 500€.",
    h1: "Site internet pour pâtisserie",
    intro:
      "La pâtisserie ne se vend pas comme le pain. On ne passe pas par hasard commander une pièce montée : on cherche, on compare des photos, on se projette. Le site d'une pâtisserie est donc d'abord un portfolio, et son enjeu principal est de transformer une envie visuelle en commande — avec les délais et les prix affichés avant que la question ne se pose.",
    searchIntent: [
      "Un événement à préparer : anniversaire, mariage, baptême. Le visiteur cherche des photos, un ordre de prix et un délai de commande, souvent plusieurs semaines à l'avance.",
      "Une envie du moment : il cherche une pâtisserie de qualité à proximité, et regarde la vitrine en ligne avant de se déplacer.",
      "Une contrainte alimentaire : sans gluten, sans lactose, végétalien. Requêtes précises, peu concurrentielles, à forte intention.",
    ],
    siteMustDo: [
      {
        title: "Un portfolio de créations, en grand",
        detail:
          "C'est le cœur du site. Vos gâteaux, photographiés correctement et à la lumière du jour. Sur ce métier, la photo est l'argument de vente ; un texte élogieux ne compense jamais une image médiocre.",
      },
      {
        title: "Les délais de commande, très visibles",
        detail:
          "Quarante-huit heures pour un entremets, trois semaines pour une pièce montée : c'est la première frustration du client quand il l'apprend trop tard, et la première cause de commande perdue.",
      },
      {
        title: "Des ordres de prix par nombre de parts",
        detail:
          "Peu de pâtisseries les affichent, et c'est précisément ce que tout le monde cherche. Une fourchette par format évite les demandes hors budget et vous fait gagner un temps considérable.",
      },
      {
        title: "Les parfums et la carte du moment",
        detail:
          "Une carte saisonnière montre que la production est vivante. Datez-la : une carte de Noël encore en ligne au printemps produit l'effet inverse de celui recherché.",
      },
      {
        title: "Les allergènes, sans détour",
        detail:
          "Fruits à coque, gluten, lactose, œufs. L'information est obligatoire et, sur ce métier, elle est souvent le critère qui décide de la commande.",
      },
    ],
    toPrepare: [
      "Vingt à trente photos de créations, bien éclairées",
      "Vos délais de commande par type de pièce",
      "Une grille de prix indicative par nombre de parts",
      "La liste des allergènes et des alternatives proposées",
    ],
    faq: [
      {
        question: "Faut-il afficher ses prix de pâtisserie en ligne ?",
        answer:
          "Au moins des ordres de grandeur par nombre de parts. C'est la question posée dans presque tous les premiers messages : y répondre en amont vous évite des échanges qui n'aboutiront pas, et rassure les clients qui craignent une facture imprévisible sur une commande sur mesure.",
      },
      {
        question: "Puis-je vendre mes pâtisseries en ligne ?",
        answer:
          "Techniquement oui, mais la vente à distance de produits frais implique une logistique, une chaîne du froid et des responsabilités qui dépassent largement le site. Un formulaire de commande avec retrait en boutique couvre l'essentiel du besoin sans ces contraintes. Une boutique en ligne complète relève du devis sur mesure.",
      },
    ],
  },
  {
    slug: "site-internet-fleuriste",
    metier: "fleuriste",
    label: "un fleuriste",
    demoSlug: "fleuriste",
    demoName: "Démo fleuriste",
    seoTitle: "Site internet pour fleuriste | Sitekept",
    seoDescription:
      "Créer le site d'un fleuriste : livraison, compositions par occasion, commandes de deuil et de mariage. Site professionnel livré en 48h à partir de 500€.",
    h1: "Site internet pour fleuriste",
    intro:
      "Le métier de fleuriste a une particularité que peu partagent : on vient rarement chez vous pour vous, on vient pour une occasion. Naissance, anniversaire, mariage, deuil. Le site doit donc s'organiser autour de ces moments plutôt qu'autour de votre catalogue — et traiter le plus délicat d'entre eux avec la sobriété qu'il exige.",
    searchIntent: [
      "Une urgence affective : un deuil, un oubli d'anniversaire. Le visiteur cherche une livraison rapide et veut être rassuré en trois lignes, pas séduit.",
      "Un événement préparé : mariage, entreprise, décoration. Parcours long, budget plus élevé, il compare les réalisations et cherche un rendez-vous.",
      "Un achat de proximité : il cherche un fleuriste ouvert près de lui et regarde vos horaires et votre zone de livraison.",
    ],
    siteMustDo: [
      {
        title: "La zone et le délai de livraison, en évidence",
        detail:
          "Quelles communes, jusqu'à quelle heure pour une livraison le jour même, quel coût. C'est la question numéro un, et l'absence de réponse fait partir le visiteur chez un concurrent ou vers une plateforme nationale.",
      },
      {
        title: "Les compositions organisées par occasion",
        detail:
          "Naissance, remerciement, mariage, deuil : le visiteur cherche un moment, pas une variété de fleur. Un catalogue classé par type de fleur l'oblige à traduire lui-même son besoin.",
      },
      {
        title: "Le deuil traité avec sobriété",
        detail:
          "Gerbes, coussins, raquettes, livraison en funérarium ou à l'église, délais très courts. Une page dédiée, factuelle et sans effet de style, rend un vrai service à des gens qui commandent dans l'urgence et l'émotion.",
      },
      {
        title: "La commande par téléphone facilitée",
        detail:
          "Sur ce métier, beaucoup de commandes se règlent en deux minutes de conversation : le message sur la carte, la couleur, l'adresse. Le numéro doit être cliquable sur chaque page.",
      },
      {
        title: "Les abonnements et les contrats entreprise",
        detail:
          "Bouquets hebdomadaires pour un hall d'accueil, un cabinet, un hôtel : c'est du chiffre d'affaires récurrent qui ne passe jamais par la vitrine, et presque aucun site de fleuriste ne le mentionne.",
      },
    ],
    toPrepare: [
      "Vos communes de livraison, les délais et les tarifs",
      "Des photos classées par occasion",
      "Vos horaires, y compris les dimanches et jours fériés",
      "Vos conditions pour les mariages et les contrats d'entreprise",
    ],
    faq: [
      {
        question: "Faut-il vendre ses bouquets en ligne ?",
        answer:
          "Ce n'est pas indispensable, et c'est souvent contre-productif au début. Une composition florale se discute : couleurs, budget, message. Un formulaire de commande avec rappel téléphonique convertit généralement mieux qu'un panier d'achat, tout en évitant les frustrations liées aux fleurs indisponibles en saison.",
      },
      {
        question: "Comment se différencier des plateformes de livraison de fleurs ?",
        answer:
          "Par ce qu'elles ne peuvent pas offrir : vos créations réelles plutôt que des visuels standardisés, une livraison locale le jour même, et un interlocuteur qui adapte le bouquet. Les plateformes prennent une commission importante sur chaque commande ; un site vous donne un canal direct, sans intermédiaire.",
      },
    ],
  },
  {
    slug: "site-internet-reparation-informatique",
    metier: "réparation informatique",
    label: "un réparateur informatique",
    demoSlug: "ordinateur",
    demoName: "Démo réparation informatique",
    seoTitle: "Site internet pour réparateur informatique | Sitekept",
    seoDescription:
      "Créer le site d'un réparateur informatique : pannes traitées, tarifs, délais et confidentialité des données. Site professionnel livré en 48h dès 500€.",
    h1: "Site internet pour réparateur informatique",
    intro:
      "Confier son ordinateur, c'est confier ses photos, ses documents et ses mots de passe. Le site d'un réparateur informatique a donc un travail que les autres métiers n'ont pas : lever une inquiétude sur la confidentialité, en même temps qu'il rassure sur la compétence et sur le prix. C'est un métier où l'opacité tarifaire est la norme, et où l'afficher suffit à se démarquer.",
    searchIntent: [
      "Une panne bloquante : écran noir, ordinateur qui ne démarre plus, virus. Le visiteur est inquiet, pressé, et cherche quelqu'un de joignable aujourd'hui.",
      "Une perte de données : disque dur en panne, fichiers effacés. Intention très forte, budget élevé, et une angoisse réelle à traiter avec des mots simples.",
      "Un besoin plus calme : lenteur, mise à niveau, achat de matériel, contrat de maintenance pour une petite entreprise.",
    ],
    siteMustDo: [
      {
        title: "Les pannes nommées dans les mots du client",
        detail:
          "Personne ne cherche « diagnostic matériel ». On cherche « mon ordinateur ne s'allume plus » ou « écran bleu ». Reprenez ces formulations, puis expliquez ce qu'elles recouvrent techniquement.",
      },
      {
        title: "Les tarifs, ou au minimum des fourchettes",
        detail:
          "C'est le premier frein du métier, et la première raison pour laquelle les clients hésitent à pousser la porte. Afficher un tarif de diagnostic et des fourchettes par type d'intervention vous distingue immédiatement.",
      },
      {
        title: "Ce que deviennent les données",
        detail:
          "Dites explicitement si vous accédez aux fichiers, ce que vous en faites, et comment vous les protégez. C'est l'inquiétude que personne ne formule à voix haute, et presque aucun site du métier ne l'adresse.",
      },
      {
        title: "Le délai, et ce qui est possible dans la journée",
        detail:
          "Un client sans ordinateur est un client sans travail. Distinguez ce qui se règle sur place, ce qui prend deux jours et ce qui dépend d'une pièce à commander.",
      },
      {
        title: "Atelier, domicile, ou à distance",
        detail:
          "Ces trois modes n'ont ni le même prix ni le même public. Les particuliers et les petites entreprises ne cherchent pas la même chose : séparez-les clairement.",
      },
    ],
    toPrepare: [
      "La liste des pannes que vous traitez, et celles que vous refusez",
      "Votre grille tarifaire ou vos fourchettes par intervention",
      "Vos délais habituels et vos conditions d'urgence",
      "Votre politique de confidentialité des données clients",
    ],
    faq: [
      {
        question: "Faut-il afficher ses tarifs de réparation informatique ?",
        answer:
          "Le prix exact dépend du diagnostic, mais afficher le coût du diagnostic lui-même et des fourchettes par type d'intervention lève le principal frein du métier. L'opacité tarifaire est tellement répandue que la transparence devient à elle seule un argument commercial.",
      },
      {
        question: "Comment rassurer sur la confidentialité des données ?",
        answer:
          "En l'écrivant noir sur blanc : ce à quoi vous accédez, ce que vous ne consultez jamais, si vous effectuez une sauvegarde avant intervention, et ce que vous faites des données à la restitution. Une page courte et factuelle vaut mieux qu'un long texte juridique que personne ne lira.",
      },
    ],
  },
  {
    slug: "site-internet-entreprise-nettoyage",
    metier: "entreprise de nettoyage",
    label: "une entreprise de nettoyage",
    demoSlug: "menage-nettoyage",
    demoName: "Démo ménage et nettoyage",
    seoTitle: "Site internet pour entreprise de nettoyage | Sitekept",
    seoDescription:
      "Créer le site d'une entreprise de nettoyage : prestations particuliers et professionnels, zone d'intervention, devis. Site livré en 48h à partir de 500€.",
    h1: "Site internet pour entreprise de nettoyage",
    intro:
      "Le nettoyage est l'un des rares métiers qui s'adresse à deux publics n'ayant presque rien en commun. Un particulier cherche quelqu'un de confiance à qui remettre ses clés ; une entreprise cherche un prestataire capable de tenir un cahier des charges et de facturer proprement. Un site qui mélange les deux perd les deux.",
    searchIntent: [
      "Un particulier : ménage régulier, repassage, aide après une hospitalisation. Il cherche la confiance, le tarif horaire et l'éligibilité au crédit d'impôt.",
      "Une entreprise : bureaux, commerce, copropriété. Elle cherche une zone d'intervention, des références et un devis, souvent après un prestataire décevant.",
      "Un besoin ponctuel : remise en état après travaux, fin de bail, nettoyage de vitres. Intention forte, décision rapide, faible concurrence en ligne.",
    ],
    siteMustDo: [
      {
        title: "Séparer nettement particuliers et professionnels",
        detail:
          "Deux parcours, deux vocabulaires, deux modes de facturation. Une page unique qui tente de parler aux deux ne convainc ni l'un ni l'autre.",
      },
      {
        title: "La zone d'intervention, commune par commune",
        detail:
          "C'est le premier critère de sélection et souvent le premier motif d'abandon. Nommer les communes vous positionne aussi sur des recherches locales que « toute la région » ne capte jamais.",
      },
      {
        title: "Les prestations avec leur fréquence",
        detail:
          "Hebdomadaire, bimensuel, ponctuel : le client raisonne en rythme autant qu'en tâche. Décrire les formules par fréquence permet de se projeter et de comparer.",
      },
      {
        title: "Les garanties, écrites",
        detail:
          "Personnel déclaré, assurance responsabilité civile professionnelle, remplacement en cas d'absence, produits utilisés. C'est le cœur de la confiance dans un métier où l'on remet ses clés à un inconnu.",
      },
      {
        title: "Le devis : gratuit, sur place, sous quel délai",
        detail:
          "Presque toutes les prestations passent par un devis. Dire comment il s'obtient et en combien de temps transforme une hésitation en prise de contact.",
      },
    ],
    toPrepare: [
      "Vos communes d'intervention",
      "Vos prestations, distinguées par public et par fréquence",
      "Vos attestations d'assurance et vos éventuels agréments",
      "Vos modalités de devis et vos délais de réponse",
    ],
    faq: [
      {
        question: "Faut-il parler du crédit d'impôt sur son site ?",
        answer:
          "Si vous êtes déclaré ou agréé au titre des services à la personne, c'est un argument décisif pour les particuliers, puisqu'il divise sensiblement le coût réel. Mentionnez le dispositif et vos conditions d'éligibilité, en renvoyant vers la source officielle plutôt qu'en promettant un montant : les règles évoluent et l'éligibilité dépend de la situation de chaque client.",
      },
      {
        question: "Faut-il afficher un tarif horaire ?",
        answer:
          "Pour les particuliers, oui : c'est ce qu'ils cherchent, et un ordre de grandeur évite des appels sans suite. Pour les entreprises, un tarif horaire isolé a peu de sens — la surface, la fréquence et les contraintes d'accès déterminent le prix. Mieux vaut y présenter une démarche de devis claire.",
      },
    ],
  },
  {
    slug: "site-internet-architecte-interieur",
    metier: "architecte d'intérieur",
    label: "un architecte d'intérieur",
    demoSlug: "architecte-interieur",
    demoName: "Démo architecte d'intérieur",
    seoTitle: "Site internet pour architecte d'intérieur | Sitekept",
    seoDescription:
      "Créer le site d'un architecte d'intérieur : portfolio de projets, mode d'honoraires, déroulé d'une mission. Site professionnel livré en 48h dès 500€.",
    h1: "Site internet pour architecte d'intérieur",
    intro:
      "Un projet d'architecture d'intérieur se décide lentement et se paie cher. Le visiteur qui arrive sur votre site n'achète rien aujourd'hui : il constitue une liste courte, qu'il consultera plusieurs fois avant de prendre contact. Votre site doit donc supporter ces allers-retours, et répondre à la question que presque aucun confrère n'ose traiter en ligne — combien ça coûte, et comment.",
    searchIntent: [
      "Un projet qui se précise : rénovation d'appartement, extension, réaménagement. Le visiteur cherche des réalisations comparables à la sienne, en surface et en style.",
      "Une question de budget : « tarif architecte d'intérieur », « prix rénovation au m² ». Requête très fréquente, très rarement traitée par les sites du métier.",
      "Une recherche de style : il a une idée esthétique et cherche quelqu'un dont le travail lui ressemble. Le portfolio décide seul.",
    ],
    siteMustDo: [
      {
        title: "Un portfolio par projet, pas par photo",
        detail:
          "Chaque projet mérite sa page : la demande initiale, les contraintes, la réponse apportée, la surface, le résultat. Un mur d'images sans contexte ne permet pas au visiteur de s'y reconnaître.",
      },
      {
        title: "Le mode d'honoraires expliqué",
        detail:
          "Pourcentage du montant des travaux, forfait, vacation horaire : dire lequel vous pratiquez et ce qu'il recouvre est le plus fort différenciateur possible sur ce métier. L'opacité y est la règle, et elle fait fuir des clients solvables.",
      },
      {
        title: "Le périmètre exact de la mission",
        detail:
          "Conception seule, suivi de chantier, coordination des artisans, achat du mobilier. Un client qui découvre au troisième rendez-vous que le suivi de chantier n'était pas compris ne signera pas.",
      },
      {
        title: "Le déroulé d'un projet, étape par étape",
        detail:
          "Premier rendez-vous, relevé, esquisses, plans, chantier, livraison — avec des durées indicatives. Cela cadre les attentes et vous évite un grand nombre de questions préliminaires.",
      },
      {
        title: "Les surfaces et budgets des projets montrés",
        detail:
          "Un visiteur qui rénove 45 m² ne se projette pas dans une villa de 300 m². Indiquer l'ordre de grandeur permet à chacun de savoir s'il est au bon endroit.",
      },
    ],
    toPrepare: [
      "Cinq à dix projets photographiés correctement, avec leur contexte",
      "Votre mode d'honoraires et ce qu'il comprend",
      "Le déroulé type d'une mission, avec des durées",
      "Vos assurances et votre éventuelle inscription à un ordre ou syndicat",
    ],
    faq: [
      {
        question: "Faut-il afficher ses honoraires d'architecte d'intérieur ?",
        answer:
          "Pas nécessairement un montant, mais toujours le mode de calcul. Expliquer que vous facturez au pourcentage des travaux, au forfait ou à la vacation, et donner un ordre de grandeur, filtre les demandes hors budget et attire celles qui ne le sont pas. Le silence total sur ce point est le premier motif d'abandon sur les sites du métier.",
      },
      {
        question: "Puis-je publier les photos des projets de mes clients ?",
        answer:
          "Avec leur accord, qu'il est prudent d'obtenir par écrit dès le contrat de mission plutôt qu'après coup. Précisez si le lieu peut être identifiable et si le nom du client peut être cité. Créditez également le photographe : les droits sur les images lui appartiennent sauf cession prévue.",
      },
    ],
  },
  {
    slug: "site-internet-avocat",
    metier: "avocat",
    label: "un cabinet d'avocat",
    demoSlug: "cabinet-avocat",
    demoName: "Démo cabinet d'avocat",
    secondaryDemo: {
      slug: "avocate-tel-aviv",
      name: "Démo avocate à Tel-Aviv",
      note: "Une seconde base, pensée pour un cabinet exerçant à l'international auprès d'une clientèle francophone.",
    },
    seoTitle: "Site internet pour avocat et cabinet | Sitekept",
    seoDescription:
      "Créer le site d'un cabinet d'avocat : domaines d'intervention, honoraires, première consultation. Cadre déontologique respecté. Site livré en 48h dès 500€.",
    h1: "Site internet pour cabinet d'avocat",
    intro:
      "Le site d'un avocat n'a pas à vendre, et ne le peut d'ailleurs pas librement : la communication de la profession est encadrée. Ce qu'il doit faire, c'est permettre à quelqu'un qui traverse une difficulté de comprendre si vous traitez son problème, ce que coûtera un premier rendez-vous, et à qui il aura affaire. C'est très différent d'une plaquette institutionnelle.",
    searchIntent: [
      "Un problème urgent : licenciement, litige, convocation. Le visiteur cherche un avocat du bon domaine, disponible rapidement, et souvent dans sa ville.",
      "Une question de coût : « honoraires avocat », « première consultation prix ». Frein majeur à la prise de contact, très peu traité en ligne.",
      "Une vérification : il a votre nom par une recommandation et veut confirmer votre barreau, votre parcours et vos domaines avant d'appeler.",
    ],
    siteMustDo: [
      {
        title: "Les domaines dits dans les mots du justiciable",
        detail:
          "On ne cherche pas « contentieux prud'homal », on cherche « licenciement abusif ». Nommez le problème tel qu'il est vécu, puis rattachez-le à la matière juridique.",
      },
      {
        title: "Les honoraires et la première consultation",
        detail:
          "Le principe de la convention d'honoraires, votre mode de facturation, et le coût d'un premier rendez-vous. C'est le premier frein à la prise de contact, et l'information la plus recherchée après le domaine.",
      },
      {
        title: "Qui vous êtes, précisément",
        detail:
          "Barreau d'inscription, année de prestation de serment, formations, langues pratiquées. Ce sont des éléments vérifiables, et c'est exactement ce qui construit la confiance dans une profession réglementée.",
      },
      {
        title: "Ce qui se passe au premier rendez-vous",
        detail:
          "Durée, documents à apporter, déroulé, confidentialité. Beaucoup de justiciables n'ont jamais consulté d'avocat et n'osent pas poser ces questions.",
      },
      {
        title: "L'accès et les modalités de rendez-vous",
        detail:
          "Adresse, accessibilité, possibilité de consultation à distance. La visioconférence a élargi la zone de recrutement de nombreux cabinets, encore faut-il l'annoncer.",
      },
    ],
    toPrepare: [
      "Vos domaines d'intervention, et ceux que vous ne traitez pas",
      "Votre mode de facturation et le coût d'une première consultation",
      "Votre parcours, votre barreau et vos langues de travail",
      "Vos modalités de rendez-vous, en cabinet et à distance",
    ],
    faq: [
      {
        question: "Un avocat a-t-il le droit d'avoir un site internet ?",
        answer:
          "Oui. La publicité et la sollicitation personnalisée sont autorisées pour les avocats depuis 2014, mais elles restent encadrées : l'information doit être sincère, respecter la dignité de la profession, la confraternité et le secret professionnel, et ne peut comporter ni élément comparatif ni promesse de résultat. Nous construisons le site sur des informations factuelles, et il vous revient de faire valider les contenus au regard des règles de votre barreau.",
      },
      {
        question: "Peut-on publier ses résultats ou ses affaires gagnées ?",
        answer:
          "C'est le point le plus délicat. Le secret professionnel s'oppose à la divulgation d'éléments identifiants, et la publicité comparative ou laissant espérer un résultat est prohibée. Beaucoup de cabinets présentent à la place des cas types anonymisés et généralisés, qui expliquent une démarche sans se référer à un dossier réel — une approche à valider avec votre ordre.",
      },
    ],
  },
  {
    slug: "site-internet-agence-immobiliere",
    metier: "agence immobilière",
    label: "une agence immobilière",
    demoSlug: "agence-immobiliere",
    demoName: "Démo agence immobilière",
    seoTitle: "Site internet pour agence immobilière | Sitekept",
    seoDescription:
      "Créer le site d'une agence immobilière : estimation en ligne, biens à jour, honoraires affichés, secteurs couverts. Site livré en 48h à partir de 500€.",
    h1: "Site internet pour agence immobilière",
    intro:
      "Une erreur structure la plupart des sites d'agence : ils sont construits pour les acheteurs, alors que le client à conquérir est le vendeur. Les acheteurs viennent de toute façon par les portails d'annonces. Ce que votre site doit capter, c'est le propriétaire qui se demande ce que vaut son bien — et il commence toujours par une estimation.",
    searchIntent: [
      "Un vendeur qui s'interroge : « estimation maison », « prix au m² » dans sa commune. Intention commerciale maximale, et c'est le client qui vous rapporte un mandat.",
      "Un acheteur ou un locataire : il cherche des biens, souvent après les avoir vus sur un portail. Il vient vérifier qui vous êtes.",
      "Une recherche d'agence : il compare les honoraires, les secteurs couverts et l'équipe avant de confier un mandat.",
    ],
    siteMustDo: [
      {
        title: "L'estimation comme porte d'entrée principale",
        detail:
          "C'est votre meilleur outil de captation de mandats. Un formulaire simple, une promesse claire de rappel sous 24 ou 48 heures, et une visibilité sur chaque page : c'est ce qui transforme un site vitrine en outil commercial.",
      },
      {
        title: "Des biens réellement à jour",
        detail:
          "Un bien vendu resté en ligne détruit la confiance plus sûrement qu'une absence d'annonces. Si vous ne pouvez pas maintenir un portefeuille à jour, mieux vaut montrer les biens vendus récemment, qui prouvent votre activité.",
      },
      {
        title: "Les honoraires affichés",
        detail:
          "L'affichage du barème est une obligation réglementaire pour les professionnels de l'immobilier, en agence comme en ligne. Autant en faire un argument de clarté plutôt qu'une mention réglementaire enfouie en pied de page.",
      },
      {
        title: "Les secteurs couverts, quartier par quartier",
        detail:
          "L'immobilier est un métier d'hyper-proximité. Nommer les quartiers et les communes vous positionne sur des recherches locales très qualifiées, que « toute l'agglomération » ne capte jamais.",
      },
      {
        title: "L'équipe, avec de vrais visages",
        detail:
          "Confier la vente de son logement est une décision engageante, et elle se prend envers une personne plus qu'envers une enseigne. Photos réelles, prénoms, spécialités et secteurs de chacun.",
      },
    ],
    toPrepare: [
      "Votre barème d'honoraires, vente et location",
      "Vos secteurs et quartiers d'intervention",
      "Les photos et présentations de l'équipe",
      "Votre carte professionnelle et vos garanties",
    ],
    faq: [
      {
        question: "Faut-il un site quand on diffuse déjà sur les portails ?",
        answer:
          "Les portails vous apportent des acheteurs, pas des mandats — et ils vous facturent la diffusion tout en mettant vos annonces à côté de celles de vos concurrents. Le site sert l'autre moitié du métier : capter les vendeurs, par l'estimation, et démontrer votre ancrage local. Les deux sont complémentaires, mais un seul vous appartient.",
      },
      {
        question: "Faut-il un moteur de recherche de biens sur le site ?",
        answer:
          "Pas nécessairement au démarrage. Un portefeuille de quelques biens bien présentés, mis à jour à la main, sert mieux qu'un moteur alimenté par un flux mal synchronisé. La connexion automatique à un logiciel de transaction est une fonctionnalité sur mesure, qui se chiffre séparément une fois le besoin avéré.",
      },
    ],
  },
];

export function getMetierPageBySlug(slug: string): MetierPage | undefined {
  return metierPages.find((page) => page.slug === slug);
}
