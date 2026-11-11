# Registre des décisions Sitekept (mis à jour le 11 novembre 2026)

Ce registre est la référence unique. **En cas de contradiction avec les crochets `[À DÉCIDER]` ou `[PROPOSITION]` des autres documents** (plan v2, CGV/CGU, kit opérationnel), c'est lui qui prévaut. Statuts : **Validé** (dit par Joseph), **Proposé** (suggestion de Claude, pas encore confirmée), **Ouvert** (à décider).

## Offre et prix

| Sujet | Décision | Statut |
|---|---|---|
| Gamme de sites | Un seul site, pas de gamme | Validé |
| Design | **Sur mesure pour chaque client. Les templates du site sont des démonstrations** pour se projeter, pas le livrable | Validé |
| Prix du site | **500 €**, prix barré 600 € supprimé | Validé |
| Suivi | 65 €/mois sans engagement, ou 600 €/an | Validé |
| Premier mois de suivi | Offert à la livraison, formule mensuelle uniquement | Validé |
| Formule annuelle | Pas de remboursement au prorata en cas de résiliation en cours d'année | Validé |
| Campagnes | À partir de 300 €/mois + budget média ; audit gratuit ; préavis 30 jours, minimum de 3 mois conseillé | Validé |
| Modifications hors forfait | Sur devis | Validé |
| Rédaction des mentions légales et de la politique de confidentialité du client | L'offre à 500 € inclut la rédaction des mentions légales et de la politique de confidentialité du site du client (décision du 10 nov. 2026) | Validé |
| Nom de domaine | Offert la première année dans l'offre à 500 € ; conservé (décision du 11 nov. 2026) | Validé |
| Affichage du prix du site | « 500 € », sans « à partir de » ; les fonctionnalités avancées restent sur devis, à part (décision du 11 nov. 2026) | Validé |
| Encaissement du suivi | Lien de paiement Stripe en abonnement | Validé |
| **Régime de TVA** | **Franchise en base au démarrage : aucune TVA facturée** (Joseph : « il n'y aura pas de TVA au début, c'est sûr »). Affichage sans « TTC / HT », mention « TVA non applicable, art. 293 B du CGI ». Remplace la réponse précédente « régime normal ». | Validé |

## Cible, contenu et acquisition

| Sujet | Décision | Statut |
|---|---|---|
| Cible | Professionnels sans temps ni savoir digital (métiers manuels, commerces de proximité, puis santé) | Validé |
| Textes du site | Au choix du client : il les fournit, ou Sitekept les rédige à partir d'un questionnaire de 10 minutes. **Rédaction incluse dans les 500 €, plafonnée au nombre de pages prévu au devis, dans les 2 séries de retours** | Validé |
| **Métiers de la première vague** | **Plombier, salon de coiffure, boulangerie** | **Validé** |
| Professions réglementées | Dentiste, avocat en seconde vague, après vérification des règles de communication | Proposé |
| Robots d'IA dans `robots.txt` | Autorisés (robots de recherche des moteurs d'IA) | Validé |
| Signature des articles du blog | « Équipe Sitekept », aucun nom personnel publié, articles pilotes compris (décision du 10 nov. 2026) | Validé |
| JSON-LD : `areaServed` et `knowsLanguage` | `areaServed` « France » et `knowsLanguage` fr/en conservés (décision du 10 nov. 2026) | Validé |

## Site, navigation et formulaire

| Sujet | Décision | Statut |
|---|---|---|
| Navigation | 5 entrées | Validé |
| Tunnel de formulaire | 3 étapes, modale ouverte au clic, étape 1 dans le hero, téléphone facultatif avec choix du canal de rappel | Validé |
| Sélection des offres dans le formulaire | Multi-sélection parmi Site, Suivi, Campagnes, Autre ; « Autre » ouvre le champ de texte, obligatoire dans ce cas. Tunnel et formulaire de secours | Validé |
| Ligne « Ajouter le suivi : premier mois offert » sous les cartes quand Site est coché | Suggestion de vente croisée | Proposé |
| Constante unique des prix et du régime fiscal | Un seul fichier de configuration, pour basculer le jour où la TVA s'appliquera. Mini-plan de phase 1 accepté par Joseph le 11 nov. ; en place dans `src/content/pricing.ts` (commit `e3f8df9`) | Validé |
| Direction artistique | Rester dans la DA actuelle du site, aucun nouvel élément visuel | Validé |
| Boutons du hero de la home | Les deux boutons restent en phase 1 ; les cartes du tunnel seront montrées en phase 3 (décision du 11 nov. 2026) | Validé |

## Règles de projet (CGV, devis, kit)

| Sujet | Valeur | Statut |
|---|---|---|
| Délai de mise en ligne | 48 h après réception des éléments complets | Validé |
| Retours inclus avant livraison | 2 séries | Validé |
| Pause du projet sans réponse du client | 15 jours | Validé |
| Modifications du suivi | 2 par mois, non cumulables | Validé |
| Délai de traitement d'une modification | 5 jours ouvrés | Validé |
| Correction gratuite des anomalies | 30 jours après mise en ligne | Validé |
| Réception tacite | 7 jours après mise en ligne | Validé |
| Annulation après début des travaux | Acompte de 30 % conservé ; travail déjà réalisé au-delà facturé | Validé |

## Entreprise et prérequis

| Sujet | État | Statut |
|---|---|---|
| Entreprise | **Pas encore créée** (en cours) ; forme juridique non décidée ; TVA : franchise au démarrage | Ouvert |
| Tribunal compétent des CGV | Dépend de la ville du siège (la page actuelle indique Paris) | Ouvert |
| Mentions légales, CGU, CGV | À finaliser et publier après création de l'entreprise et relecture juridique | Ouvert |
| Compte Stripe | À ouvrir après création de l'entreprise | Ouvert |
| Seuil de la franchise de TVA | À surveiller : au-delà, la TVA devient due et les prix affichés devront être revus | Ouvert |

## Documents à réaligner sur la franchise de TVA

Le brouillon des CGV (`cgv-cgu-brouillon-v1.md`, article 6, sections A et C) contient encore des mentions « TTC » et « HT » (ex. « 500 € TTC, soit 417 € HT ») qui sont **caduques**. Il sera réaligné lors de la consolidation finale, avec les informations de l'entreprise. Le plan v2 est déjà à jour.

## Questions encore ouvertes

1. Forme juridique envisagée de l'entreprise (micro-entreprise, entreprise individuelle, société…).
