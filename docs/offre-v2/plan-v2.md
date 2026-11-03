# Plan v2 : refonte de l'offre Sitekept (avenants pour Claude Code)

**Statut** : ce document est un **plan modificatif**. Il complète le plan initial « Refonte de l'offre Sitekept : page /offres, abonnement mensuel, campagnes publicitaires » (à enregistrer dans `docs/offre-v2/plan-initial.md`). **En cas de contradiction, ce document prévaut.** Les sections du plan initial non citées ici restent valables telles quelles.

Le fichier `registre-decisions.md` indique pour chaque décision si elle est validée, proposée ou ouverte ; il prévaut sur les crochets restants.

**Révisions du 3 novembre 2026** : design sur mesure (les templates sont des démonstrations), textes au choix du client (rédaction incluse, plafonnée), sélection **multiple** des offres dans le formulaire avec option « Autre » à préciser, **franchise de TVA au démarrage** (aucune TVA facturée : plus de « TTC / HT » à l'affichage).

## 0. Méthode (obligatoire)

1. **Inspecter l'existant avant de modifier.** Lire les fichiers cités, vérifier que les numéros de ligne du plan initial sont toujours exacts.
2. **Proposer un mini-plan** par phase (section 12) avant d'écrire du code.
3. Modifier plutôt que réécrire. Ne rien casser de ce qui fonctionne. Pas d'usine à gaz.
4. Responsive mobile d'abord : chaque nouvelle section doit être pensée nativement mobile (paddings, CTA, hauteur, débordements).
5. Développer sur une branche avec preview Vercel. **Ne pas mettre en production avant que les prérequis de la section 2 soient levés.**

## 1. Décisions finales

| Sujet | Décision |
|---|---|
| Gamme de sites | **Un seul site.** Pas de gamme « essentiel / haut de gamme ». |
| Design | **Sur mesure pour chaque client.** Les templates du site sont des **démonstrations** pour aider le visiteur à se projeter, pas le produit livré. |
| Prix du site | **500 €** (aucune TVA facturée). **Le prix barré de 600 € est supprimé** partout. |
| Textes du site | **Au choix du client** : il les fournit, ou Sitekept les rédige à partir d'un questionnaire de 10 minutes. La rédaction est **incluse dans les 500 €**, plafonnée au nombre de pages prévu au devis, dans le cadre des 2 séries de retours. |
| Abonnement | **65 €/mois** sans engagement, ou **600 €/an**, sans remboursement au prorata pour l'annuel. |
| Premier mois de suivi | **Offert à la livraison du site**, pour l'abonnement **mensuel** uniquement (pas pour la formule annuelle). |
| Campagnes | **À partir de 300 €/mois** de gestion + budget média, préavis 30 jours, minimum de 3 mois conseillé. CTA principal : **audit gratuit**. Aucune promesse de résultat, aucun témoignage. |
| Modifications hors forfait | **Sur devis.** |
| Régime fiscal | **Franchise en base de TVA au démarrage** : aucune TVA facturée, mention « TVA non applicable, art. 293 B du CGI » sur les devis et factures. L'affichage fiscal est piloté par **une constante unique** (section 6 bis) pour pouvoir basculer plus tard. |
| Cible | Professionnels sans temps ni savoir-faire digital (métiers manuels, commerces de proximité, puis professions de santé). |
| Métiers prioritaires (90 premiers jours) | **Plombier, salon de coiffure, boulangerie** (voir section 8). |
| Navigation | 5 entrées (section 9). |
| Formulaire | **Tunnel en 3 étapes** ouvert au clic (section 7), avec **sélection multiple des offres** et option « Autre » à préciser. Le formulaire du bas de la home reste en secours, avec la même sélection. |
| Encaissement de l'abonnement | Lien de paiement Stripe en abonnement (hors code), CTA « Demander l'abonnement » en attendant. |
| Règles de projet | 2 séries de retours avant livraison ; pause du projet après 15 jours sans réponse du client ; 5 jours ouvrés par modification du suivi ; 30 jours de correction des anomalies ; réception tacite à 7 jours. **Validé.** |

## 2. Prérequis hors code (à lever avant la mise en production)

À faire par Joseph, pas par Claude Code :

- Immatriculation de l'entreprise (SIRET). Aucune facture ni encaissement avant. L'entreprise n'est pas encore créée et sa forme juridique n'est pas décidée. Régime de TVA au démarrage : franchise en base.
- Compte Stripe au nom de l'entreprise, produit « Suivi & Visibilité » avec prix mensuel 65 € et annuel 600 € ; essai de 30 jours sur le mensuel (`trial_period_days`). Créer les liens de paiement correspondants.
- Mise à jour de `/mentions-legales` avec les informations de l'entreprise.
- Relecture des CGU et CGV par une personne qualifiée (voir `cgv-cgu-brouillon-v1.md`).
- Si Joseph est salarié par ailleurs : vérifier sa clause d'exclusivité et de non-concurrence.
- Surveiller le seuil de chiffre d'affaires de la franchise de TVA : au-delà, la TVA devient due et les prix affichés devront être revus.

Claude Code doit prévoir les emplacements (variables d'environnement ou constantes) pour les URLs de liens Stripe, sans les inventer.

## 3. Principe éditorial et cible

Le principe du plan initial est conservé : **le site s'achète une fois et reste au client ; l'accompagnement est optionnel et résiliable ; son arrêt ne touche pas au site.**

Ajouts liés à la cible « sans temps, sans savoir digital » :

- **Langage simple.** Retirer le jargon technique des textes destinés aux clients (GitHub, Vercel, Hostinger). On peut le garder dans un article de blog technique ou une page « Comment ça se passe », en une phrase. La propriété se dit : « Votre site vous appartient, comme votre enseigne. »
- **Promesse « 48 h ».** Chaque mention de 48 h est accompagnée d'une précision visible à côté (sous-titre, FAQ, `/offres`) : « 48 h après réception de vos éléments ». Le H1 peut rester court, mais pas la précision dans le reste de la page.
- **Sur mesure.** Aucun texte ne doit présenter les templates comme le produit livré. Dire « votre site est créé sur mesure pour vous ».
- **Ton** : phrases courtes, bénéfices concrets, pas de corporate vide.

## 4. Page `/offres` : avenants à la section 1 du plan initial

- **Grille des trois offres** : prix « 500 € » avec la mention « TVA non applicable, art. 293 B du CGI » en note de bas de grille ; **supprimer le `600 €` barré** et toute mention « TTC ». Suivi : « 65 €/mois · ou 600 €/an ». Campagnes : « À partir de 300 €/mois + budget média ».
- **CTA** : site → « Demander un devis », suivi → « Demander l'abonnement » (pas « Souscrire »), campagnes → « Demander un audit gratuit ». Chaque CTA ouvre le tunnel de la section 7 avec l'offre correspondante **déjà cochée**.
- **Suivi & Visibilité** : ajouter une ligne « Premier mois offert si vous souscrivez à la livraison de votre site (formule mensuelle) ».
- **Nouvelle section « Comment ça se passe »**, insérée après le détail du site : les règles de périmètre ci-dessous, en langage simple.
  1. Le délai de 48 h court à partir de la réception de vos éléments complets (textes, logo, photos), avec une liste claire de ce qu'il faut fournir.
  2. Deux séries de retours incluses. Au-delà, devis.
  3. Sans réponse de votre part pendant 15 jours, le projet est mis en pause et la date de livraison est décalée.
  4. Hors forfait (nouvelle page, nouvelle fonctionnalité, refonte), sur devis.
- **Campagnes** : conserver les deux « points dits franchement » du plan initial. Ajouter : « Nous ne promettons aucun résultat. L'audit gratuit sert à vérifier que la publicité a un sens pour votre activité avant d'engager un budget. » **Ne pas afficher de chiffres de performance ni de témoignage** tant qu'il n'existe pas de vrai client.
- **FAQ**, ajouter :
  - « Je n'ai ni le temps ni les textes : comment ça se passe ? » Réponse : vous avez le choix. Soit vous nous envoyez vos textes, soit vous répondez à un questionnaire de 10 minutes et nous rédigeons pour vous. La rédaction est incluse, dans la limite du nombre de pages prévu à votre devis et de vos deux séries de retours.
  - « Que se passe-t-il si je ne réponds pas à vos questions ? » (pause du projet après 15 jours)
  - « Combien de retours puis-je demander ? » (deux séries incluses)
  - « Le premier mois est offert : à quelles conditions ? »
- **Métiers réglementés** : ne pas ajouter de promesse publicitaire ou de promesse SEO spécifique dans les liens vers les pages Avocat et Dentiste (voir section 8).

## 5. `/tarifs`, blog et home : avenants aux sections 2 et 3

Toutes les modifications du plan initial sont conservées, plus :

1. **Carte « Tarif de lancement »** de `/tarifs` : supprimer le prix barré de 600 € et renommer la carte (par exemple « Offre de départ », cohérent avec le hero de la home).
2. **Affichage des prix** : « 500 € » partout, sans « TTC » ni « HT », avec la mention « TVA non applicable, art. 293 B du CGI » en pied des pages de prix (`/offres`, `/tarifs`) et sur les devis. Toutes les valeurs viennent de la constante de la section 6 bis.
3. **Audit du blog.** Plusieurs articles portent explicitement sur l'absence d'abonnement et contredisent la nouvelle offre s'ils ne sont pas recalibrés :
   - `/blog/posseder-son-site-sans-abonnement`
   - `/blog/louer-ou-posseder-son-site-internet`
   - `/blog/recuperer-son-site-web-chez-un-prestataire`
   - `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout`
   - `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept`

   Pour chacun : conserver l'URL et l'angle (ce sont des contenus SEO utiles), ajouter un court passage qui introduit l'accompagnement optionnel, et appliquer la distinction « acheter un site » / « louer sa présence ». Ne jamais changer une URL.
4. **Hero de la home** : conserver le H1 et le bloc prix ; ajouter la précision « 48 h après réception de vos éléments ». Remplacer le doublon de boutons par les trois cartes de l'étape 1 du tunnel (section 7) et un lien « Voir les templates ». **Montrer d'abord le rendu mobile et desktop avant de valider** : si le hero devient chargé, garder les deux boutons et passer les cartes sous le hero.
5. **FAQ de la home** : ajouter une question sur le premier mois offert.
6. **Page `/templates`** : ajouter une mention visible et courte, en langage simple, du type « Ces exemples vous aident à vous projeter. Votre site est créé sur mesure pour vous. » Vérifier que les textes de la home et de `/tarifs` ne présentent pas les templates comme le produit livré.

## 6. Home : résumé des offres

Inchangé par rapport à la section 3 du plan initial, avec les prix mis à jour (section 1 de ce document) et le même traitement du prix barré (supprimé).

## 6 bis. Constante unique des prix et du régime fiscal

Créer un seul fichier de configuration (par exemple `src/content/pricing.ts`, à adapter à la structure existante) qui contient : les prix (site 500, suivi 65 par mois, suivi 600 par an, campagnes à partir de 300), le **mode de TVA** (`franchise` pour l'instant), la mention légale correspondante (« TVA non applicable, art. 293 B du CGI ») et une fonction d'affichage des prix.

Cette constante est la **seule source** pour : la home, `/offres`, `/tarifs`, le tunnel, le JSON-LD, les pages métier et les futures pages CGV. Quand la TVA s'appliquera, un seul changement de mode suffira pour afficher « TTC (soit X € HT) ». Interdit : écrire un prix en dur dans un composant ou un texte.

## 7. Tunnel de formulaire : remplace la section 5 du plan initial pour le chemin principal

**Principe** : tunnel en 3 étapes, ouvert **au clic uniquement** (jamais automatiquement : un pop-up automatique risque la pénalité Google sur les interstitiels mobiles). Le formulaire du bas de la home reste, comme chemin de secours et pour les liens externes, avec la même sélection d'offres.

**Étapes**

1. **Besoin** : « Que souhaitez-vous ? » Sélection **multiple** (cases à cocher présentées en cartes) : **Site**, **Suivi**, **Campagnes**, **Autre**. Au moins une offre doit être cochée pour continuer. Un visiteur peut cocher Site et Suivi ensemble.
   - Si **Autre** est coché, un champ de texte apparaît juste en dessous : « Précisez votre besoin ». Il est **obligatoire** dans ce cas (10 caractères minimum) et correspond au champ `message` (voir ci-dessous).
   - Si **Site** est coché, une ligne discrète sous les cartes propose : « Ajouter le suivi : premier mois offert à la livraison ». À soumettre à Joseph pour validation ; retirer si elle charge l'écran.
   - Un clic sur un CTA de `/offres` ou sur une carte du hero ouvre la modale **à cette étape avec l'offre déjà cochée** ; le visiteur peut en ajouter d'autres, puis continue.
2. **Contexte** : métier (liste des métiers ciblés + « autre »), URL du site actuel (facultatif).
3. **Coordonnées** : nom et email (obligatoires), téléphone (**facultatif**), canal de rappel préféré (email, téléphone, WhatsApp), message (facultatif, sauf si « Autre » est coché, auquel cas il est déjà rempli à l'étape 1 et modifiable ici), consentement RGPD si le formulaire actuel en a un.

**Architecture proposée** (à adapter après inspection de `src/features/contact-form/`)

- Dossier `src/features/lead-funnel/` : composant du tunnel, hook d'état (`useReducer`), constantes partagées.
- **Constantes partagées** dans un seul fichier : les slugs d'offres (`site`, `suivi`, `campagnes`, `autre`) et leurs libellés, la liste des métiers, les canaux de rappel. Utilisées par le tunnel, le formulaire de secours, le schéma serveur et les CTA. Pas de duplication.
- **Composant de sélection d'offres partagé** : un seul composant (groupe de cases à cocher accessible, `fieldset` + `legend`) utilisé par le tunnel et par le formulaire de secours. Il gère l'affichage du champ « Précisez votre besoin » quand « Autre » est coché.
- **Fournisseur + déclencheur** : un composant client (`LeadFunnelProvider`) monté dans le layout marketing, et un composant `LeadFunnelTrigger` (bouton) réutilisable depuis les Server Components. Il ouvre la modale avec une ou plusieurs offres cochées et un métier optionnels.
- **Modale** : balise native `<dialog>` avec `showModal()` (focus géré par le navigateur, fermeture à la touche Échap, retour du focus sur le déclencheur). Sur mobile, présentation en panneau plein hauteur. Respecter `prefers-reduced-motion`.
- **Barre de progression** « Étape 2 sur 3 » et bouton « Retour ». Aucune sauvegarde des réponses partielles (RGPD, simplicité).
- **Action serveur** : réutiliser `contact-form.action.ts`. Étendre le schéma Zod :
  - `offers` : tableau de l'enum (`site`, `suivi`, `campagnes`, `autre`), sans doublon. **Optionnel côté serveur** (une soumission ancienne sans le champ doit continuer à passer), **obligatoire côté interface** (au moins une offre).
  - Règle croisée : si `offers` contient `autre`, alors `message` doit contenir au moins 10 caractères (message d'erreur clair, en français).
  - `activity` (texte court), `currentUrl` (optionnel, vide accepté), `contactChannel` (enum optionnel) ; passer `phone` à **facultatif**.
  - Conserver les protections anti-spam existantes.
  - **Mail de lead** : afficher en tête « Offres souhaitées : Site, Suivi » (libellés lisibles mappés côté serveur), puis « Autre : » suivi du texte précisé si présent, puis le métier.
- **Pré-sélection par URL** : `?offre=` accepte une ou plusieurs valeurs séparées par une virgule (`?offre=site,suivi`), `?metier=` accepte un seul métier. Valeurs lues via `window.location` dans un `useEffect` (jamais `useSearchParams()`, pour garder les pages statiques), validées contre la liste connue (toute valeur inconnue est ignorée sans erreur). Elles cochent les cartes du formulaire de secours et peuvent initialiser le tunnel sans l'ouvrir.
- **Mesure (GA4)** : événement par étape (`lead_funnel_step` avec le numéro d'étape et les offres sous forme de chaîne `site,suivi`), et `generate_lead` avec les offres et le métier. Objectif : savoir quelles offres et quels métiers convertissent, et à quelle étape on perd les visiteurs. **Ne déclencher la mesure qu'après consentement** (voir `cgv-cgu-brouillon-v1.md`, section F, point 6).

**Critères d'acceptation** : utilisable entièrement au clavier, lisible par un lecteur d'écran (groupe de cases à cocher annoncé avec son libellé), aucun saut de mise en page à l'ouverture, aucune dégradation du LCP du hero, envoi réussi avec ou sans téléphone, avec une ou plusieurs offres, et avec « Autre » seulement si le texte est précisé.

## 8. Pages métier : avenants

Les pages existantes suivent le modèle `/site-internet-[métier]`. Il y en a 12 : plombier, dentiste, restaurant, salon de coiffure, boulangerie, pâtisserie, fleuriste, réparation informatique, entreprise de nettoyage, architecte d'intérieur, avocat, agence immobilière. Il n'y a pas de page électricien.

**Première vague (90 jours)** : `site-internet-plombier`, `site-internet-salon-de-coiffure`, `site-internet-boulangerie`. Critères : fort besoin local, peu de temps ou de culture digitale, proximité avec la cible « métier manuel ou commerce de proximité ».

Sur ces trois pages :
- Ajouter un bloc court renvoyant vers `/offres` et un bouton du tunnel avec `?metier=` pré-sélectionné.
- Mentionner le suivi comme suite naturelle, en langage simple.

**Seconde vague** : pâtisserie, fleuriste, entreprise de nettoyage, restaurant. Créer une page électricien si Joseph le souhaite.

**À traiter avec précaution** : `site-internet-dentiste` et `site-internet-avocat`. Professions réglementées, avec des règles de communication et de publicité propres à leur ordre. **Ne pas y ajouter de promesse publicitaire ou de visibilité** avant vérification des règles applicables. Ne pas faire de campagne payante ciblée dessus pour l'instant.

**Non prioritaires** : réparation informatique, architecte d'intérieur, agence immobilière (cible plus à l'aise avec le digital, ou exigences de design plus élevées).

## 9. Navigation, footer, SEO : avenants à la section 4

- **Navigation à 5 entrées** : Offres, Templates, Réalisations, Ressources, Contact, plus le bouton « Demander un devis » (qui ouvre le tunnel). « Ressources » regroupe Blog, Tarifs (guide), SEO/GEO et FAQ.
  - Première option : petit menu déroulant (desktop) et groupe dépliable dans le menu mobile.
  - Si le composant actuel ne gère pas les sous-menus et que l'ajout est lourd, **proposer une alternative plus simple** (par exemple « Blog » dans la navigation, et Tarifs, SEO/GEO et FAQ regroupés dans le footer) et la soumettre à Joseph avant de coder.
- **Footer** : `/offres` dans la colonne Navigation, `/tarifs`, `/seo-geo` et `/faq` conservés.
- **Sitemap** : inchangé (`/offres` en priorité 0.9).
- **JSON-LD** (`OfferCatalogJsonLd`) : appliquer la règle du fichier, ne déclarer que ce qui est affiché à l'écran, en lisant les valeurs dans la constante de la section 6 bis.
  - Site : 500 EUR.
  - Abonnement : 65 EUR par mois.
  - Campagnes : prix minimum 300 EUR, mention « à partir de » uniquement si la page l'affiche.
  - Tant que la franchise de TVA s'applique, **ne pas renseigner `valueAddedTaxIncluded`** (aucune TVA n'est facturée). Le renseigner quand le mode de TVA changera.
  - Aucun `aggregateRating`, aucune adresse.

## 10. CGU et CGV : avenants à la section 6

Le détail est dans `cgv-cgu-brouillon-v1.md`. En résumé, en plus du plan initial :

- Règles de périmètre de la section 4 (délai à compter de la réception des éléments, deux séries de retours, pause du projet, hors forfait sur devis).
- Régime de TVA : prix nets, mention « TVA non applicable, art. 293 B du CGI » tant que la franchise s'applique.
- Conditions du premier mois offert et de la résiliation.
- Création d'une page `/cgv` ; `/terms` devient les CGU (usage du site).
- Les CGU et CGV doivent être relues par une personne qualifiée avant publication.

## 11. Vérification : avenants

À ajouter à la section « Vérification » du plan initial :

1. **Prix** : aucune occurrence de « 600 € » barré dans le site. Aucune occurrence résiduelle de « TTC » ou « HT » tant que la franchise de TVA s'applique. La mention « TVA non applicable, art. 293 B du CGI » est présente sur `/offres` et `/tarifs`. Contrôler `/`, `/tarifs`, `/offres`, `/templates` et les articles du blog.
2. **Constante unique** : aucun prix écrit en dur hors du fichier de la section 6 bis.
3. **Cohérence** : relire `/tarifs`, la FAQ de la home et les cinq articles de blog listés en section 5 pour chasser toute phrase qui dit ou laisse entendre que Sitekept ne vend aucun abonnement.
4. **Promesse 48 h** : chaque mention est accompagnée de la précision « après réception de vos éléments ».
5. **Sur mesure** : aucune page ne présente les templates comme le produit livré ; la mention de `/templates` est visible.
6. **Tunnel** :
   - parcours complet à la souris et au clavier, ouverture et fermeture (Échap), retour du focus ;
   - tests sur mobile (viewport étroit) et desktop ;
   - sélection de 1, 2 et 3 offres ; impossibilité de continuer sans offre ;
   - « Autre » coché sans texte : refusé côté interface et côté serveur ; avec texte : accepté et visible en tête du mail de lead ;
   - envoi sans téléphone et avec toutes les valeurs ;
   - valeurs invalides rejetées côté serveur ; `?offre=site,nimportequoi` ignore la valeur inconnue sans erreur console ;
   - la page reste statique (`pnpm build` ne doit pas annoncer `/offres` ni la home en dynamique).
7. **Mesure** : événements GA4 visibles pour chaque étape (uniquement après consentement), et `generate_lead` avec offres et métier.
8. **Performances** : comparer Lighthouse avant/après sur la home (CLS, LCP, INP).
9. **Données structurées** : validateur schema.org sur `/offres`, vérifier l'absence de prix non affiché.

## 12. Ordre d'exécution et points d'arrêt

1. **Phase 1, discours et prix** : constante unique, `/tarifs`, FAQ et hero de la home, articles de blog, mention de `/templates`. Livrable : site cohérent sans `/offres`. *Point d'arrêt : Joseph relit.*
2. **Phase 2, page `/offres`** et section résumé de la home. *Point d'arrêt : Joseph relit mobile et desktop.*
3. **Phase 3, tunnel de formulaire** et mesure. *Point d'arrêt : tests de la section 11.*
4. **Phase 4, navigation, footer, JSON-LD, pages métier de la première vague.**
5. **Phase 5, CGU et CGV** et mise en production, **seulement quand les prérequis de la section 2 sont levés**.

Les corrections « Jour 1 » de l'audit SEO interne (voir le plan initial, section « Points à savoir ») sont à mettre en ligne avant ou avec cette offre.
