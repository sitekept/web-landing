# 0.8a — Plan éditorial du blog

État au 10 novembre 2026. Ce plan propose 8 nouveaux articles. Il ne reprend pas les 11 articles existants ni les 5 articles à recalibrer en phase 1 ([P] § 5.3).

Sources citées :
- **[02]** = `docs/seo/02-keyword-map.md` ;
- **[01]** = `docs/seo/01-analyse.md` ;
- **[R]** = `docs/offre-v2/registre-decisions.md` ;
- **[P]** = `docs/offre-v2/plan-v2.md`.

---

## 1. Méthode et limites

### 1.1 Sources utilisées

| Source | Ce qu'elle apporte | Date |
|---|---|---|
| Carte des mots-clés [02], § 3.3 et § 5 | Mots-clés réservés, règles contre la cannibalisation | 3 novembre 2026 |
| Analyse [01], parties B et C | Formats observés chez les concurrents, opportunités | 3 novembre 2026 |
| Registre [R] et plan v2 [P] | Offre, cible, première vague, règles de langage | 3 novembre 2026 |
| Suggestions Google | Requêtes proposées à la frappe, relancées pour ce plan | 10 novembre 2026 |
| WebSearch | Repérage des pages officielles à citer | 10 novembre 2026 |
| Pages officielles rouvertes | Vérification de ce que dit chaque source (partie 8) | 10 novembre 2026 |

### 1.2 Comment les suggestions ont été relevées

- Adresse interrogée : `https://suggestqueries.google.com/complete/search?client=firefox&hl=fr&gl=fr&ie=utf-8&oe=utf-8&q=<préfixe>`.
- Le second élément de la réponse JSON est la liste des suggestions.
- Google renvoie souvent le préfixe lui-même en première position. Ce simple écho **ne compte pas** comme une observation.
- Un mot-clé est dit « observé » s'il apparaît dans la liste d'un autre préfixe, ou s'il diffère du préfixe interrogé.
- Un mot-clé noté « écho seul » n'a pas été observé de façon indépendante. Il reste utilisable, mais à confirmer.
- Un mot-clé noté « construit » vient d'un modèle de requête, sans suggestion observée.

Préfixes interrogés le 10 novembre 2026 (pour rejouer le relevé) :

- Prix : `combien coûte un site internet par mois`, `combien coute un site internet`, `combien coûte un site internet par`, `combien coute un site internet par an`, `site internet coût mensuel`, `coût site internet par mois`, `renouvellement nom de domaine`, `hébergement site internet`.
- Fiche et visibilité locale : `fiche google entreprise`, `créer une fiche google entreprise`, `créer fiche google entreprise`, `etre visible sur google maps`, `référencement local`, `plombier google maps`, `boulangerie google maps`, `salon de coiffure google maps`.
- Horaires : `changer les horaires sur google`, `modifier horaires google`, `modifier horaires google maps`, `horaires exceptionnels google`.
- Avis : `répondre aux avis google`, `répondre aux avis google exemple`, `comment répondre à un avis négatif google`.
- Sans site : `salon de coiffure sans site internet`, `coiffeur sans site internet`, `coiffeur site web`, `salon de coiffure site web`, `plombier site web`, `plombier sans site web`, `boulangerie sans site internet`, `commerçant sans site internet`.
- Publicité : `google ads artisan`, `google ads pour`, `google ads plombier`, `google ads prix`, `campagne google ads`.
- Mentions légales : `mentions légales site internet`, `mentions légales obligatoires`, `mentions légales obligatoires site internet`.

### 1.3 Limites

- **Aucun volume de recherche n'est disponible.** Aucun outil de volume n'est branché. Tout volume vaut « non mesuré ».
- Une suggestion prouve qu'une requête existe. Elle ne dit rien de sa fréquence.
- Certaines requêtes peuvent être tapées par des clients et non par des professionnels. C'est le cas de « plombier google maps ». Le doute est signalé dans la fiche concernée.
- WebSearch se décrit comme limité aux États-Unis. Ses résultats ne sont pas une page Google localisée [01] partie B.
- L'impact et l'effort sont des jugements qualitatifs. Ils ne promettent aucun classement.
- Les pages officielles ont été rouvertes avec l'outil WebFetch, qui résume le texte. Le vérificateur doit les rouvrir une à une.

### 1.4 Règles de priorité

- **Impact** : proximité avec la cible [R], appartenance à la première vague, présence d'une page commerciale à relier.
- **Effort** : recherche nécessaire, longueur, dépendance à une page ou à une décision pas encore livrée.
- Les articles 1 à 5 ne dépendent d'aucune page prévue. Ils peuvent s'écrire dès maintenant.

---

## 2. Vue d'ensemble

| # | Titre provisoire | Slug proposé | Mot-clé principal | Impact | Effort | Longueur |
|---|---|---|---|---|---|---|
| 1 | Comment créer une fiche Google Entreprise, pas à pas | `creer-une-fiche-google-entreprise` | comment créer une fiche google entreprise | Haut | Moyen | 900–1 100 mots |
| 2 | Salon de coiffure sans site internet : que faire concrètement ? | `salon-de-coiffure-sans-site-internet` | salon de coiffure sans site internet | Haut | Bas | 700–900 mots |
| 3 | Plombier sans site web : que faire pour être joignable ? | `plombier-sans-site-web` | plombier sans site web | Haut | Bas | 700–900 mots |
| 4 | Changer ses horaires d'ouverture sur Google : congés, jours fériés | `changer-ses-horaires-sur-google` | changer les horaires d'ouverture sur google | Moyen | Bas | 600–800 mots |
| 5 | Répondre aux avis Google : mode d'emploi pour un commerce local | `repondre-aux-avis-google` | répondre aux avis google | Moyen | Bas | 700–900 mots |
| 6 | Mentions légales obligatoires sur un site internet : le guide | `mentions-legales-obligatoires-site-internet` | mentions légales obligatoires site internet | Moyen | Moyen | 1 000–1 200 mots |
| 7 | Google Ads pour artisans : faut-il commencer, et comment ? | `google-ads-pour-artisans` | google ads pour artisans | Moyen | Moyen | 800–1 000 mots |
| 8 | Combien coûte un site internet par mois ? Les frais à prévoir | `combien-coute-un-site-internet-par-mois` | combien coûte un site internet par mois | Moyen | Haut | 1 200–1 400 mots |

Lecture du tableau :
- L'ordre est l'ordre de rédaction conseillé. L'article 1 passe en premier, car les articles 2 à 5 renvoient vers lui.
- Le tableau est dans l'ordre de priorité impact/effort, sauf l'article 1 : son effort moyen est compensé par son rôle de pivot.
- Les articles 6 à 8 dépendent d'un élément pas encore livré (voir partie 6).
- Les trois métiers de la première vague sont couverts : coiffure (article 2), plomberie (article 3), boulangerie (article 4).
- Les articles 1, 5 et 6 s'adressent à tous les métiers. Le lien vers une page métier est donné dans chaque fiche.

---

## 3. Fiches des articles

Chaque H2 est une question. Sous chaque H2, la première phrase donne la réponse directe, en 40 à 60 mots au total pour le bloc de réponse.

### 3.1 Article 1 — Comment créer une fiche Google Entreprise, pas à pas

| Champ | Valeur |
|---|---|
| Titre provisoire | Comment créer une fiche Google Entreprise, pas à pas (52 car.) |
| Slug | `creer-une-fiche-google-entreprise` |
| Mot-clé principal | comment créer une fiche google entreprise |
| Secondaires | créer une fiche google entreprise ; faire une fiche google entreprise ; fiche google business profile ; comment etre plus visible sur google maps |
| Origine des mots-clés | Observés : le principal et « faire une fiche… » sous « créer une fiche google entreprise » ; « fiche google business profile » sous « fiche google entreprise ». « créer une fiche… » : écho seul |
| Intention | Informationnelle, locale |
| Public visé | Tous les métiers. Exemples tirés de la coiffure, de la plomberie et de la boulangerie |
| Page commerciale | `/site-internet-salon-de-coiffure`, `/site-internet-plombier` ou `/site-internet-boulangerie` selon l'exemple ; `/offres` en phase 2 |
| Liens internes | Article 2 à 5 ; `/seo-geo` ; article `site-optimise-seo-geo` |
| Angle | Guide pratique. La fiche est gratuite et s'ouvre en quelques étapes. Elle complète le site, elle ne le remplace pas |
| Source de référence | Aide Google, « Ajouter ou revendiquer votre fiche d'établissement » (partie 8, n° 1) |
| Seconde source | Aide Google, « Conseils pour améliorer votre classement local sur Google » (partie 8, n° 2) |
| Longueur cible | 900 à 1 100 mots. Guide justifié par les étapes à détailler |
| Impact / effort | Haut / Moyen |

Plan :
1. Qu'est-ce qu'une fiche Google Entreprise ? (42 car.)
2. La fiche est-elle gratuite, et qui peut en avoir une ? (54 car.)
3. Comment créer ou revendiquer sa fiche ? (39 car.)
4. Pourquoi faut-il valider sa fiche ? (35 car.)
5. Qu'est-ce qui influence l'affichage sur Google Maps ? (53 car.)
6. Une fiche suffit-elle, ou faut-il aussi un site ? (49 car.)

Arbitrage :
- La carte [02] § 5 réserve « fiche google entreprise ». Aucune page existante ne porte le mot « fiche ».
- Le principal retenu est la variante « comment créer ». Elle est observée et décrit mieux l'intention.
- « comment etre plus visible sur google maps » devient secondaire ici. Voir la partie 4.

### 3.2 Article 2 — Salon de coiffure sans site internet

| Champ | Valeur |
|---|---|
| Titre provisoire | Salon de coiffure sans site internet : que faire concrètement ? (63 car.) |
| Slug | `salon-de-coiffure-sans-site-internet` |
| Mot-clé principal | salon de coiffure sans site internet |
| Secondaires | salon de coiffure sans site web ; coiffeur sans site internet ; coiffeur sans site web ; salon de coiffure prise de rendez vous en ligne |
| Origine des mots-clés | Observés : le principal sous « coiffeur sans site internet » ; « sans site web » sous « salon de coiffure site web » et « coiffeur site web ». « coiffeur sans site internet » : écho seul. Le dernier secondaire peut venir de clients |
| Intention | Informationnelle, avec un besoin de décision |
| Public visé | Gérants de salon de coiffure (première vague [R]) |
| Page commerciale | `/site-internet-salon-de-coiffure` ; `/offres` en phase 2 |
| Liens internes | Article 1 ; article 5 ; `/templates` pour la démo salon |
| Angle | Réponse honnête : oui, on peut démarrer sans site. Voici ce que la fiche couvre, et ce qu'un site ajoute |
| Source de référence | Aide Google, « Liens proposés par les établissements locaux » (partie 8, n° 3) |
| Longueur cible | 700 à 900 mots |
| Impact / effort | Haut / Bas |

Plan :
1. Peut-on tenir un salon de coiffure sans site internet ? (55 car.)
2. Quelles informations rendre faciles à trouver ? (47 car.)
3. Comment faire prendre rendez-vous sans site ? (45 car.)
4. Que peut faire la fiche Google à elle seule ? (45 car.)
5. Quand un site devient-il utile pour un salon ? (46 car.)
6. Comment relier son site à son outil de réservation ? (52 car.)

Arbitrage :
- La carte [02] § 5 note que ce mot-clé touche la règle « un métier → page métier ».
- La page métier vise « site internet salon de coiffure », une requête d'achat. L'article vise un constat de départ, sans le mot « création ».
- L'article renvoie vers la page métier. La page métier peut lui renvoyer en retour.

### 3.3 Article 3 — Plombier sans site web

| Champ | Valeur |
|---|---|
| Titre provisoire | Plombier sans site web : que faire pour être joignable ? (56 car.) |
| Slug | `plombier-sans-site-web` |
| Mot-clé principal | plombier sans site web |
| Secondaires | plombier sans site ; plombier google maps ; google business profile service area |
| Origine des mots-clés | Observés : le principal sous « plombier site web » ; « plombier google maps » observé sous les préfixes `plombier google` et `plombier maps`. « google business profile service area » observé sous `google business profile service` et `google business profile zone de service`. Suggestion en anglais, pertinence faible pour la cible. « plombier sans site » : écho seul. Le Maps peut venir de clients |
| Intention | Informationnelle, locale |
| Public visé | Plombiers, chauffagistes, artisans qui se déplacent chez le client (première vague [R]) |
| Page commerciale | `/site-internet-plombier` ; `/offres` en phase 2 |
| Liens internes | Article 1 ; article 5 ; article 7 quand il existe |
| Angle | Un plombier se rend chez ses clients. La fiche peut montrer une zone desservie au lieu d'une adresse. Le site ajoute devis et détail des prestations |
| Source de référence | Aide Google, « Gérer vos zones desservies pour les établissements de services de proximité… » (partie 8, n° 4) |
| Longueur cible | 700 à 900 mots |
| Impact / effort | Haut / Bas |

Plan :
1. Un plombier peut-il se passer d'un site web ? (45 car.)
2. Comment apparaître sur Google sans adresse de local ? (53 car.)
3. Comment indiquer sa zone d'intervention ? (41 car.)
4. Que faut-il montrer pour une urgence ? (38 car.)
5. Comment recevoir une demande de devis simplement ? (50 car.)
6. Que change un site pour un plombier ? (37 car.)

Arbitrage :
- « plomberie site web » est écarté. Il équivaut à « site internet plomberie », secondaire de la page métier [02] § 2.3.
- « avis google plombier » est écarté. Il relève de l'article 5 et peut venir de clients.
- La page métier garde les requêtes d'achat. L'article garde le constat « sans site ».

### 3.4 Article 4 — Changer ses horaires d'ouverture sur Google

| Champ | Valeur |
|---|---|
| Titre provisoire | Changer ses horaires d'ouverture sur Google : congés, jours fériés (66 car.) |
| Slug | `changer-ses-horaires-sur-google` |
| Mot-clé principal | changer les horaires d'ouverture sur google |
| Secondaires | modifier horaires google maps ; modifier horaires fiche google ; changer horaires google my business ; changer mes horaires sur google |
| Origine des mots-clés | Observés sous « changer les horaires sur google » et « modifier horaires google » |
| Intention | Informationnelle, pratique |
| Public visé | Boulangeries (première vague [R]) et tout commerce à horaires variables |
| Page commerciale | `/site-internet-boulangerie` ; `/offres` en phase 2 |
| Liens internes | Article 1 ; article 5 ; `/site-internet-boulangerie` |
| Angle | Congés annuels, jours fériés, fermeture un jour de semaine : le geste exact, et la cohérence avec les horaires du site |
| Source de référence | Aide Google, « Modifier vos horaires d'ouverture » (partie 8, n° 5) |
| Seconde source | Aide Google, « Les jours fériés sur Google » (partie 8, n° 6) |
| Longueur cible | 600 à 800 mots |
| Impact / effort | Moyen / Bas |

Plan :
1. Comment changer ses horaires d'ouverture sur Google ? (53 car.)
2. Qu'est-ce qu'un horaire exceptionnel ? (38 car.)
3. Horaire exceptionnel ou fermeture : lequel choisir ? (52 car.)
4. Pourquoi Google affiche-t-il « horaires différents » ? (54 car.)
5. La modification est-elle visible tout de suite ? (48 car.)
6. Faut-il aussi mettre à jour les horaires du site ? (50 car.)

Arbitrage :
- Les horaires sont un geste précis, distinct de la création de la fiche (article 1).
- L'article 1 renvoie vers celui-ci pour les horaires. Aucun mot-clé n'est partagé.
- « horaires exceptionnels google » et « fermeture exceptionnelle google my business » sont en écho seul. Ils restent hors des secondaires.

### 3.5 Article 5 — Répondre aux avis Google

| Champ | Valeur |
|---|---|
| Titre provisoire | Répondre aux avis Google : mode d'emploi pour un commerce local (63 car.) |
| Slug | `repondre-aux-avis-google` |
| Mot-clé principal | répondre aux avis google |
| Secondaires | comment répondre aux avis google ; répondre aux avis google exemple ; répondre avis négatif google exemple ; pourquoi répondre aux avis google |
| Origine des mots-clés | Tous observés sous « répondre aux avis google » ou « répondre aux avis google exemple » |
| Intention | Informationnelle, pratique |
| Public visé | Salons de coiffure, boulangeries, plombiers : tout professionnel avec une fiche Google |
| Page commerciale | `/site-internet-salon-de-coiffure` ; `/seo-geo` ; `/offres` en phase 2 |
| Liens internes | Article 1 ; article 4 ; `/seo-geo` |
| Angle | Mode d'emploi calme. Où répondre, ce que le client voit, comment garder un ton simple devant un avis négatif |
| Source de référence | Aide Google, « Gérer les avis client » (partie 8, n° 7) |
| Longueur cible | 700 à 900 mots |
| Impact / effort | Moyen / Bas |

Plan :
1. Pourquoi répondre aux avis Google ? (35 car.)
2. Comment répondre à un avis depuis sa fiche ? (44 car.)
3. Que se passe-t-il après l'envoi de la réponse ? (47 car.)
4. Comment répondre à un avis positif ? (36 car.)
5. Comment répondre à un avis négatif ? (36 car.)
6. Comment demander des avis sans insister ? (41 car.)

Arbitrage :
- L'article 1 ne traite pas les avis. Il renvoie vers celui-ci.
- Aucun mot-clé ne recoupe l'article `pourquoi-optimisation-referencement-naturel-importante`. Son mot-clé est « pourquoi le référencement d'un site est important ».
- L'article ne promet aucun effet sur le classement. Il cite Google : aucun moyen d'acheter une meilleure place.

### 3.6 Article 6 — Mentions légales obligatoires sur un site internet

| Champ | Valeur |
|---|---|
| Titre provisoire | Mentions légales obligatoires sur un site internet : le guide (61 car.) |
| Slug | `mentions-legales-obligatoires-site-internet` |
| Mot-clé principal | mentions légales obligatoires site internet |
| Secondaires | obligation mentions légales site internet ; mentions obligatoire site internet ; mentions légales site internet obligatoire ; site internet mentions légales obligatoires cnil |
| Origine des mots-clés | Tous observés, sous « mentions légales obligatoires », « mentions légales site internet » et « mentions légales obligatoires site internet » |
| Intention | Informationnelle |
| Public visé | Artisans et commerçants de proximité, tous métiers non réglementés |
| Page commerciale | `/offres` en phase 2 ; `/tarifs` d'ici là |
| Liens internes | Article 1 ; `/offres` |
| Angle | Guide clair : ce que doit contenir la page, selon le statut. Les règles propres aux professions réglementées sont signalées, pas détaillées |
| Source de référence | Service-public.fr, « Mentions obligatoires sur le site internet d'une entreprise » (partie 8, n° 8) |
| Seconde source | CNIL, « RGPD en pratique : communiquer en ligne » (partie 8, n° 9) |
| Longueur cible | 1 000 à 1 200 mots. Guide justifié par la liste selon le statut |
| Impact / effort | Moyen / Moyen |

Plan :
1. Un site vitrine doit-il avoir des mentions légales ? (52 car.)
2. Que doit contenir la page pour un entrepreneur individuel ? (59 car.)
3. Que doit contenir la page pour une société ? (44 car.)
4. Qui citer comme hébergeur et directeur de publication ? (55 car.)
5. Que faut-il ajouter avec un formulaire de contact ? (51 car.)
6. Que changent les professions réglementées ? (43 car.)

Arbitrage :
- La carte [02] attribue « mentions légales sitekept » à `/mentions-legales`. C'est une requête de marque. L'article vise la requête sans marque.
- L'article ne donne pas de modèle à copier. Il liste les éléments et renvoie vers la fiche officielle.
- Il ne présente pas la rédaction de ces pages comme un service. Voir la partie 7, point 3.

### 3.7 Article 7 — Google Ads pour artisans

| Champ | Valeur |
|---|---|
| Titre provisoire | Google Ads pour artisans : faut-il commencer, et comment ? (58 car.) |
| Slug | `google-ads-pour-artisans` |
| Mot-clé principal | google ads pour artisans |
| Secondaires | google ads artisan ; google ads plombier ; google ads pour services locaux ; google ads pour pme |
| Origine des mots-clés | Tous observés, sous « google ads pour », « publicité google artisan » et « publicité google plombier » |
| Intention | Informationnelle, avec un pont vers l'audit gratuit |
| Public visé | Plombiers et artisans qui se déplacent chez le client (première vague [R]). Aucune profession réglementée |
| Page commerciale | `/offres` (audit gratuit), en phase 2 |
| Liens internes | Articles 1 et 3 ; `/offres` |
| Angle | Expliquer le fonctionnement d'une annonce payante, le budget choisi par l'annonceur, et pourquoi aucun résultat n'est garanti |
| Source de référence | Google, « Combien coûtent les publicités Google ? » (partie 8, n° 10) |
| Longueur cible | 800 à 1 000 mots |
| Impact / effort | Moyen / Moyen |

Plan :
1. Que fait une annonce Google Ads pour un artisan ? (49 car.)
2. Combien coûte Google Ads ? (26 car.)
3. Comment le budget est-il fixé et dépensé ? (42 car.)
4. Une annonce garantit-elle des appels ? (38 car.)
5. Faut-il une fiche Google et un site avant de commencer ? (56 car.)
6. À quoi sert un audit avant d'engager un budget ? (48 car.)

Arbitrage :
- La carte [02] réserve « campagne google ads prix » et attribue « campagne google ads locale » à `/offres`.
- L'article évite les mots « campagne » et « prix ». Il vise « google ads pour artisans ».
- Toute requête avec « prix » reste sur `/tarifs` (règle [02] § 3.3, bloc A).

### 3.8 Article 8 — Combien coûte un site internet par mois ?

| Champ | Valeur |
|---|---|
| Titre provisoire | Combien coûte un site internet par mois ? Les frais à prévoir (61 car.) |
| Slug | `combien-coute-un-site-internet-par-mois` |
| Mot-clé principal | combien coûte un site internet par mois |
| Secondaires | cout mensuel site internet ; combien coûte un site web par mois ; renouvellement nom de domaine |
| Origine des mots-clés | Principal et « cout mensuel… » observés. « site web par mois » : Google le ramène au principal. « renouvellement… » : écho seul, à confirmer |
| Intention | Informationnelle, avec un pont vers la page prix |
| Public visé | Professionnels sans culture digitale qui comparent des offres |
| Page commerciale | `/tarifs` pour le détail ; `/offres` en phase 2 |
| Liens internes | `/tarifs` ; article `louer-ou-posseder-son-site-internet` ; article `recuperer-son-site-web-chez-un-prestataire` |
| Angle | Séparer ce qui se paie une fois, ce qui revient chaque année, et ce qui est facultatif. Aucun prix en toutes lettres dans le texte |
| Source de référence | Afnic, « Charte de nommage », article 2.8 (partie 8, n° 11) |
| Seconde source | Service-public.fr, « Franchise en base de TVA » (partie 8, n° 12) |
| Longueur cible | 1 200 à 1 400 mots. Guide justifié par la comparaison des frais |
| Impact / effort | Moyen / Haut |

Plan :
1. Combien coûte un site internet par mois ? (41 car.)
2. Quels frais reviennent chaque année ? (37 car.)
3. Combien de temps un nom de domaine est-il valable ? (51 car.)
4. Un site se paie-t-il une fois ou chaque mois ? (46 car.)
5. Qu'est-ce qu'un suivi, et est-il obligatoire ? (46 car.)
6. Pourquoi certains devis n'affichent-ils pas de TVA ? (52 car.)

Arbitrage :
- La carte [02] § 3.3 envoie « prix, coût, combien coûte » vers `/tarifs`. Elle renvoie ce cas à la tâche 0.8 : « `/tarifs`, ou un futur guide relié à `/tarifs` ».
- Décision proposée : l'article ne prend que la forme « par mois ». « combien coute un site internet », « prix site internet » et « tarif » restent sur `/tarifs`.
- « combien coute un site internet par an » est écarté : il prolonge un secondaire de `/tarifs`.
- L'article ne contient aucun tableau de prix. Il explique la structure des frais et renvoie vers `/tarifs`.
- Il évite le mot « abonnement » pour ne pas empiéter sur l'article `louer-ou-posseder-son-site-internet` ([02] § 3.3 bloc B).
- Cet arbitrage reste à valider par Joseph (partie 7, point 1).

---

## 4. Arbitrages de cannibalisation

### 4.1 Contrôle des 8 mots-clés principaux

| Mot-clé principal | Page existante la plus proche | Décision |
|---|---|---|
| comment créer une fiche google entreprise | `/seo-geo` (« référencement seo local ») | Aucun mot en commun. `/seo-geo` renvoie vers l'article |
| salon de coiffure sans site internet | `/site-internet-salon-de-coiffure` | Constat contre achat. Liens croisés, aucun mot-clé partagé |
| plombier sans site web | `/site-internet-plombier` | Idem. « plomberie site web » écarté |
| changer les horaires d'ouverture sur google | Article `site-optimise-seo-geo` (« comment etre visible sur google ») | Geste précis contre visibilité générale. Aucun mot commun |
| répondre aux avis google | Article `pourquoi-optimisation-referencement-naturel-importante` | Autre sujet. Aucun mot commun |
| mentions légales obligatoires site internet | `/mentions-legales` (« mentions légales sitekept ») | Requête sans marque contre requête de marque |
| google ads pour artisans | `/offres` (« campagne google ads locale ») | Évite « campagne » et « prix » |
| combien coûte un site internet par mois | `/tarifs` (« prix site internet », « combien coute un site internet ») | Seule la forme « par mois ». Voir la fiche 3.8 |

Les 8 mots-clés principaux sont tous différents. Aucun n'est principal ou secondaire d'une des 34 pages de la carte [02].

comment créer + fiche (article 1) ne recoupe pas comment créer + site (`/blog`, carte [02] § 3.3 bloc C) : objets différents.

### 4.2 Règle ajoutée pour « Google Maps »

- La règle [02] § 3.3 bloc C envoie « être visible sur Google » vers l'article `site-optimise-seo-geo`.
- Le mot « Maps » désigne un lieu précis et un geste précis : la fiche. La forme « comment etre plus visible sur google maps » va à l'article 1.
- L'article `site-optimise-seo-geo` garde « comment etre visible sur google », sans « maps ». Les deux articles se citent.

### 4.3 Mots-clés réservés par [02] § 5 et décision

| Mot-clé réservé | Décision |
|---|---|
| combien coûte un site internet par mois | Retenu : article 8, forme « par mois » seulement |
| salon de coiffure sans site internet | Retenu : article 2 |
| comment etre plus visible sur google maps | Retenu : secondaire de l'article 1 |
| fiche google entreprise | Retenu : article 1, variante « comment créer » |
| référencement local pour petites entreprises | Écarté. La tête « référencement » + « local » relève de `/seo-geo`. Les articles 1 à 5 couvrent le sujet par la pratique |
| aide financière création site internet | Écarté. Aucune suggestion observée en dehors de l'écho. Les aides varient selon les régions et demandent une source officielle précise |
| hébergement site internet prix | Écarté comme page. « prix » reste sur `/tarifs`. L'hébergement devient un H2 de l'article 8 |
| campagne google ads prix | Écarté. « prix » reste sur `/tarifs`. L'article 7 prend « google ads pour artisans » |

### 4.4 Contrôle avec les 11 articles existants

- Aucun des 8 slugs ne reprend un slug existant.
- La liste des 11 slugs est dans `src/content/site-content.ts`, tableau `blogPosts`.
- Aucun article existant ne traite la fiche Google, les horaires, les avis, la publicité Google ou les mentions légales. Une recherche du texte dans `site-content.ts` ne trouve qu'une mention de « Google Business Profile », dans une liste de comptes de mesure.
- Les articles `louer-ou-posseder-son-site-internet` et `recuperer-son-site-web-chez-un-prestataire` traitent déjà de l'abonnement et du nom de domaine. L'article 8 les cite, sans reprendre leurs mots-clés.

---

## 5. Articles pilotes pour la tâche 0.8b

### 5.1 Pilote A : article 1, « Comment créer une fiche Google Entreprise, pas à pas »

- **Il cite une référence officielle.** L'aide Google décrit la création, la gratuité et la validation. L'aide sur le classement local exclut tout classement payant.
- **C'est le pivot du plan.** Les articles 2 à 5 renvoient vers lui. Le rédiger d'abord évite des liens vers une page absente.
- **Il parle à la première vague.** Les exemples viennent d'un salon, d'un plombier et d'une boulangerie.
- **Il ne dépend d'aucune page prévue.** Ni `/offres` ni l'entreprise ne sont nécessaires.

### 5.2 Pilote B : article 2, « Salon de coiffure sans site internet »

- **C'est un métier de la première vague** [R]. La page métier existe déjà : `/site-internet-salon-de-coiffure`.
- **Il cite une référence officielle.** L'aide Google sur les liens de réservation sert de preuve.
- **Son effort est bas.** Il teste le modèle « métier sans site » avant de le reproduire pour le plombier (article 3).
- **Il répond à une opportunité de [01].** Elle demande d'expliquer le lien entre le site et l'outil de réservation du salon [01] C.7.
- **Il peut s'écrire sans attendre** `/offres`, le tunnel ou la création de l'entreprise.

### 5.3 Pourquoi pas les autres

| Article | Raison de l'attente |
|---|---|
| 3, 4, 5 | Bons candidats. Ils suivent les pilotes, avec le même modèle |
| 6 | Dépend de la finalisation de `/mentions-legales` après création de l'entreprise [R] |
| 7 | Dépend de la page `/offres` (audit gratuit) et du ton des campagnes |
| 8 | Dépend de l'alignement de `/tarifs` en phase 1 et de l'arbitrage de Joseph |

---

## 6. Ordre de rédaction et dépendances

| Étape | Articles | Condition |
|---|---|---|
| 1 | 1 et 2 (pilotes, tâche 0.8b) | Aucune |
| 2 | 3, 4 et 5 | Pilotes relus. Liens vers l'article 1 en place |
| 3 | 6 | `/mentions-legales` finalisée après création de l'entreprise [R] |
| 4 | 7 | `/offres` publiée (phase 2). Ton des campagnes validé [P] § 4 |
| 5 | 8 | `/tarifs` alignée sur l'offre v2 (phase 1). Arbitrage de Joseph reçu |

Notes :
- Tant que `/offres` n'existe pas, un article renvoie vers sa page métier ou `/tarifs`. Le lien vers `/offres` s'ajoute ensuite.
- Le gabarit actuel ne renvoie qu'à `/#contact` et `/templates` [01] C.6. Les liens vers les pages commerciales sont à écrire dans le texte de l'article.

---

## 7. Points ouverts pour Joseph

1. **Article 8.** Accepter qu'un article prenne « combien coûte un site internet par mois », ou garder tout le sujet « coût » sur `/tarifs`.
2. **Mise à jour de la carte.** Ajouter les 8 mots-clés à `docs/seo/02-keyword-map.md` au moment de la publication, et retirer les lignes de la partie 5.
3. **Article 6.** Dire si l'offre inclut la page de mentions légales et la politique de confidentialité du client. Sans réponse, l'article n'en parle pas.
4. **Intention des requêtes.** Les suggestions « plombier google maps » et « salon de coiffure prise de rendez vous en ligne » peuvent venir de clients finaux. Le plan les garde en secondaires, sans les viser en titre.

---

## 8. Sources de référence

Toutes les pages ont été rouvertes le 10 novembre 2026. Un contrôle HTTP a renvoyé le code 200 pour chacune.

| N° | Article | URL | Titre de la page | Ce qu'elle dit, utile à l'article |
|---|---|---|---|---|
| 1 | 1 | https://support.google.com/business/answer/2911778?hl=fr | Ajouter ou revendiquer votre fiche d'établissement | Ajout sans frais. Choix d'une option de validation. Une fois validée, la fiche est visible dans la Recherche et sur Maps |
| 2 | 1 | https://support.google.com/business/answer/7091?hl=fr | Conseils pour améliorer votre classement local sur Google | Trois facteurs : pertinence, distance, proéminence. Aucun moyen d'obtenir une meilleure place sur demande ou contre paiement |
| 3 | 2 | https://support.google.com/business/answer/6218037?hl=fr | Liens proposés par les établissements locaux | Ajout d'un lien de rendez-vous : Réservation dans la Recherche, ou Modifier la fiche dans Maps, puis Ajouter un lien |
| 4 | 3 | https://support.google.com/business/answer/9157481?hl=fr | Gérer vos zones desservies pour les établissements de services de proximité et les établissements mixtes | Sans accueil de clients : supprimer l'adresse et définir une zone par villes ou codes postaux. Jusqu'à 20 zones |
| 5 | 4 | https://support.google.com/business/answer/10417060?hl=fr | Modifier vos horaires d'ouverture | Horaires spéciaux pour les vacances ou événements spéciaux. Cas d'une fermeture de six jours consécutifs au plus |
| 6 | 4 | https://support.google.com/business/answer/6333474?hl=fr | Les jours fériés sur Google | Un avertissement peut s'afficher sur la fiche. Les horaires exceptionnels se définissent à l'avance |
| 7 | 5 | https://support.google.com/business/answer/3474050?hl=fr | Gérer les avis client | Répondre depuis la fiche validée. Google examine la réponse. Le client est notifié. Conseil : lien ou QR code pour demander des avis |
| 8 | 6 | https://entreprendre.service-public.gouv.fr/vosdroits/F37351 | Mentions obligatoires sur le site internet d'une entreprise | Identification et hébergeur concernent tout site internet professionnel (la page ne cite pas « vitrine » ; la source 9 de la CNIL le fait). Listes distinctes pour entrepreneur individuel et société |
| 9 | 6 | https://www.cnil.fr/fr/rgpd-en-pratique-communiquer-en-ligne | RGPD en pratique : communiquer en ligne | Site vitrine : mentions légales identifiant l'éditeur, mentions CNIL sous le formulaire de contact, consentement pour certains traceurs |
| 10 | 7 | https://business.google.com/fr/resources/articles/google-ads-cost/ | Combien coûtent les publicités Google ? | Pas de tarif fixe. Budget fixé par l'annonceur. Les résultats réels varient selon les annonceurs |
| 11 | 8 | https://www.afnic.fr/wp-media/uploads/2025/04/afnic-charte-de-nommage-2025-05-05.pdf | Charte de nommage de l'Afnic, version du 5 mai 2025 | Article 2.8 : validité de 1 à 10 ans. Renouvellement tacite, sauf demande de suppression du bureau d'enregistrement |
| 12 | 8 | https://entreprendre.service-public.gouv.fr/vosdroits/F21746 | Franchise en base de TVA | La mention « TVA non applicable - article 293 B du CGI » doit figurer sur chaque facture |

Précisions pour le vérificateur :
- La source 11 est un PDF. L'extraction du texte a été faite à la main. Les paragraphes 46 à 48 se trouvent sous l'article 2.8.
- La source 5 existe aussi en version `hl=fr-CA`, au titre voisin. La version `hl=fr` est celle à citer.
- Les sources 8 et 12 affichent une date de vérification. Elle est à relire sur la page, car elle change.
- Aucun chiffre de seuil de TVA n'est repris dans le plan. Il changerait et devrait être revérifié.

---

## 9. Garde-fous

### 9.1 À appliquer à chaque article

| Règle | Application |
|---|---|
| Aucune promesse de résultat ni de classement | Pas de « vous serez premier », « plus d'appels », « plus de clients ». Verbes au conditionnel ou neutres |
| Aucun chiffre sans source | Pas de pourcentage, de volume, de gain. Les nombres cités viennent de la page officielle |
| Pas de profession réglementée en première vague | Aucun exemple de dentiste ou d'avocat. Les articles 6 et 7 les mentionnent seulement pour dire qu'ils ont des règles propres [R] |
| Langage simple | Pas de jargon. « Fiche d'établissement » est expliqué à côté de « fiche Google Entreprise » |
| Cohérence avec l'offre | Le site s'achète une fois. Le suivi est facultatif. Le « sans engagement » vaut pour la formule mensuelle seulement [R] |
| Prix | Aucun prix écrit en dur. Renvoi vers `/tarifs` ou `/offres`, qui lisent la constante unique [P] § 6 bis |
| Fiscalité | Aucun « TTC » ni « HT ». Pas de seuil de TVA |
| 48 h | Toute mention est suivie de « après réception de vos éléments » [P] § 3 |
| Sur mesure | Les templates sont des démonstrations. Le site livré est sur mesure [R] |
| Concurrents | Aucun nom, aucune comparaison de prix |

### 9.2 Contrôles avant publication

- Chaque source est rouverte le jour de la rédaction. Les menus d'une interface Google changent.
- Les noms des boutons sont vérifiés dans l'aide Google du jour.
- Chaque H2 est suivi d'une réponse directe de 40 à 60 mots.
- Phrases de 25 mots au plus. Paragraphes de 60 mots et 3 phrases au plus.
- Chaque article contient au moins un lien vers une page commerciale ou métier.
- Les secondaires « écho seul » sont retirés du texte s'ils ne se confirment pas.
