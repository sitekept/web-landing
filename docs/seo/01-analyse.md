# 0.2 — Analyse des données SEO et des résultats de recherche

État au 3 novembre 2026. Ce document s'appuie sur l'état des lieux de la tâche 0.1.

Sources des chiffres :
- **[D]** = `docs/seo/00-donnees.md` (état des lieux validé) ;
- **[05]** = `docs/seo-audit/05-donnees-gsc-ga4.md` (relevé du 10 août 2026) ;
- **[00]** = `docs/seo-audit/00-RAPPORT-CONSOLIDE.md` ;
- **[02]** = `docs/seo-audit/02-onpage-contenu.md` ;
- **[R]** = `docs/offre-v2/registre-decisions.md`.

Le code cité a été lu sur `feat/offre-v2`, le 3 novembre 2026. Aucun volume de recherche n'est donné : il est **non mesuré**.

---

## A. Ce que disent les données d'août

Rappel : 8 clics et 103 impressions en six mois [05]. 27 sessions GA4 sur 28 jours, dont 5 organiques [05]. Selon [D] §5, aucune conclusion statistique n'est possible.

### A.1 Requêtes en positions 8 à 30

| Constat | Source |
|---|---|
| 6 requêtes visibles, toutes de marque ou fautes de frappe (« kept.com », « site keep »…) | [05] §1 |
| Ces 6 requêtes totalisent 13 impressions et 0 clic | [05] §1, [D] §5 |
| Environ 90 impressions sont anonymisées par Google | [05] §1 |
| Aucune position par requête n'est relevée ; seule la moyenne globale l'est (5,7) | [05] §1 |
| Aucune requête commerciale non-marque | [05] §1 |

**Ce que les données permettent de conclure :** aucune requête en positions 8 à 30 n'est identifiable. Le site n'apparaît sur aucune requête commerciale nommée.

**Ce qu'elles ne permettent pas :** savoir sur quelles requêtes portent les impressions anonymisées. La moyenne de 5,7 ne vaut que pour des requêtes de marque [05].

### A.2 Pages à fort nombre d'impressions et CTR faible

| Page (relevé) | Clics | Impressions | Source |
|---|---|---|---|
| `https://sitekept.com/realization` | 0 | 38 | [05] §1 |
| `https://www.sitekept.com/` | 4 | 39 | [05] §1 |
| `https://sitekept.com/` | 2 | 30 | [05] §1 |
| `https://sitekept.com/template` | 0 | 5 | [05] §1 |

**Ce que les données permettent de conclure :**
- La page la plus vue sans clic est `/realization` en non-`www` : 38 impressions, 0 clic [05].
- Chaque URL existe en double, `www` et non-`www` ; `/realization` cumule 46 impressions sur deux hôtes [05].

**Ce qu'elles ne permettent pas :** juger un CTR par page. Aucune ligne ne dépasse 39 impressions. Seules 10 lignes sur 12 sont affichées [05], et les requêtes associées sont inconnues.

### A.3 Pages non indexées, et pourquoi

| Motif Search Console | Nombre | Causes possibles selon l'audit (non attribuées URL par URL) |
|---|---|---|
| Page avec redirection | 3 | Redirection non-`www` → `www` en 307 [05] §5 ; redirection `/template` → `/templates` [00] |
| Autre page avec balise canonique correcte | 1 | Canonique pointant vers l'hôte non-`www`, qui redirige [00] cause 1 |
| Explorée, actuellement non indexée | 2 | Non attribué par l'audit |

Autres causes relevées par l'audit :
- sitemap non relu par Google depuis le 2 août 2025, 4 erreurs, 5 pages découvertes [05] §3 ;
- pages de démonstration sans lien HTML, donc inatteignables par exploration [00] cause 3 ;
- Google ne connaît que 17 URL [05] §2.

**Ce que les données permettent de conclure :** les motifs de non-indexation sont surtout techniques, selon l'audit. Ils ne disent rien de la qualité du contenu.

**Ce qu'elles ne permettent pas :** savoir quelles URL précises sont non indexées. Le relevé donne des motifs et des nombres, pas la liste [05].

**Depuis le relevé (code, non vérifié en production) :**
- `src/app/sitemap.ts` utilise `SITE_URL`, avec repli sur `www` [D] §7.4 ; il déclare `/tarifs` et les pages `/site-internet-*`.
- Les démos sont servies en `noindex, follow` (`src/middleware.ts:22`).
- La carte de démo utilise désormais une vraie ancre (`src/app/_components/project-card.tsx:31` et `:88`).
- L'effet réel de ces changements sur l'indexation est **non mesuré**.

### A.4 Pages d'entrée qui convertissent

| Constat | Source |
|---|---|
| Seul événement clé configuré : `purchase`, sans aucune donnée | [05] §7 |
| Aucun suivi de l'envoi du formulaire au moment du relevé | [05] §7 |
| `generate_lead` ajouté au code le 11 août 2026, lendemain du relevé | [D] §7.1 |
| Aucun export GA4 « pages de destination » disponible | [D] §4 |
| Organic Search : 5 sessions, 3 avec engagement | [05] §6 |

**Ce que les données permettent de conclure :** rien sur la conversion. Elle est **non mesurée**.

**Ce qu'elles ne permettent pas :** classer les pages d'entrée. Le taux d'engagement organique repose sur 5 sessions [05] ; ce n'est pas une preuve de qualité du trafic.

---

## B. Résultats de recherche observés

### Mise en garde

- Les résultats viennent de l'outil WebSearch, consulté le **3 novembre 2026**.
- Ce **n'est pas une SERP Google** localisée en France ni personnalisée. L'outil se décrit lui-même comme limité aux États-Unis.
- L'ordre des résultats ne vaut donc pas classement Google. Ce sont des **indications** sur les acteurs et les formats.
- Chaque URL citée a été rouverte le même jour, sauf mention contraire. Les prix cités sont ceux affichés sur la page ce jour-là.

### B.1 « site internet plombier »

| URL observée | Type d'acteur | Format | Angle |
|---|---|---|---|
| https://sk-web.fr/site-vitrine/plombier-chauffagiste | Petit prestataire web | Page service + guide + FAQ | « Exemple et prix ». À partir de 690 € une seule fois. Hébergement et maintenance 22 €/mois sans engagement ou 220 €/an. Mention « TVA non applicable, art. 293 B du CGI ». |
| https://lucasfonseque.fr/?p=8126 | Créateur indépendant | Page service par métier | Urgence : numéro, zone, prix. Dès 800 € HT. Mises à jour faites par le client lui-même, ou maintenance à 60 € HT/mois. Durée d'engagement non précisée. |
| https://independant.io/creation-site-internet-plombier/ | Média pour indépendants | Guide « 8 conseils et 5 outils » | Faire soi-même avec des outils, liens affiliés déclarés |
| https://nicepage.com/fr/k/plomberie-modeles-site | Éditeur de logiciel | Galerie de modèles | Modèles à télécharger |

Vus dans les résultats mais non rouverts : une page La Fabrique du Net (erreur 403) et une offre ComeUp (erreur 410).

**Format dominant :** pages service par métier de petits prestataires, puis guides « faire soi-même ».

**Implications pour Sitekept :**
- L'angle « urgence, numéro, zone » est déjà celui de `/site-internet-plombier` (`src/content/metier-pages.ts:68-78`).
- Les deux concurrents affichent un prix de création payé une fois, plus une maintenance mensuelle. Le paiement unique n'est donc pas un différenciateur en soi.
- sk-web.fr propose aussi une mensualité sans engagement. Le « sans engagement » ne distingue Sitekept que de certains concurrents, comme lucasfonseque.fr (voir B.5).
- Le prix et le contenu du suivi doivent être visibles sur la page métier.

### B.2 « site internet salon de coiffure »

| URL observée | Type d'acteur | Format | Angle |
|---|---|---|---|
| https://independant.io/site-internet-salon-coiffure/ | Média pour indépendants | Guide en 8 étapes | Créer soi-même ; outils recommandés, liens affiliés déclarés |
| https://www.zenoti.com/fr/salon-website-design | Éditeur SaaS de gestion de salon | Guide long + FAQ | Le site sert à prendre des rendez-vous ; promeut son module de réservation |
| https://comeup.com/fr/service/520287/je-cree-un-site-internet-professionnel-pour-salon-de-coiffure-en-48h | Freelance sur place de marché | Fiche de service | « En 48h » dans le titre. 500 € affichés en base, 542,50 € à la commande (écart non expliqué par la page). Formule de base en 4 jours, 48 h en option express. Maintenance en option. |
| https://seahawkmedia.com/fr/solutions/developpement-de-sites-web-pour-salons-de-coiffure-et-spas/ | Agence WordPress | Format non confirmé (corps de page illisible par l'outil) | Titre : site WordPress avec réservation, prix en dollars |

Vu mais non rouvert : https://www.fiducial.fr/MyHAIR/Fonctionnalites/Site-internet (connexion refusée), page d'un logiciel de salon.

**Format dominant :** guides et pages d'éditeurs de logiciels de réservation.

**Implications pour Sitekept :**
- La réservation en ligne est l'angle central. La page métier le traite déjà (`metier-pages.ts:268`).
- Elle doit dire comment le site s'articule avec l'outil de réservation que le salon utilise déjà.
- Une offre ComeUp affiche 500 € de base (542,50 € à la commande). Son titre porte « 48h », mais la formule de base est en 4 jours.
- Un prix d'appel proche et une promesse de rapidité existent donc déjà chez un freelance. L'accompagnement et le suivi doivent porter la différence.

### B.3 « site internet boulangerie »

| URL observée | Type d'acteur | Format | Angle |
|---|---|---|---|
| https://www.websiteplanet.com/fr/blog/les-meilleurs-sites-de-boulangerie-patisserie-inspiration-design-web/ | Site de comparaison d'outils | Liste d'inspiration | Exemples de design, puis créateurs de sites affiliés |
| https://www.codeur.com/projects/468579-creation-d-un-site-web-pour-une-boulangerie-artisanale | Place de marché freelance | Annonce de client (fermée) | Besoin réel : présenter les produits, commander en ligne ; budget indicatif 500 € à 1 000 € |
| https://www.wix.com/website-template/view/html/4185 | Plateforme SaaS | Fiche de modèle « Boulangerie » | Faire soi-même |
| https://nicepage.com/fr/k/boulangerie-maquette-site-web | Éditeur de logiciel | Galerie de maquettes | Modèles à télécharger |

Vu mais non rouvert : https://www.toogoodtogo.com/fr/b2b/resource-guide-site-web-boulangerie (erreur 429). Les résultats contenaient aussi des listes de noms de domaine et un annuaire.

**Format dominant :** inspiration et modèles « faire soi-même ». Peu de pages service.

**Implications pour Sitekept :**
- L'intention paraît mixte : inspiration, modèles, et parfois recherche d'un prestataire.
- La démo `/boulangerie` répond à l'intention « voir un exemple ». Elle doit renvoyer vers `/site-internet-boulangerie`.
- L'annonce Codeur montre une attente de commande en ligne. La page métier doit dire si c'est inclus ou sur devis.

### B.4 Intention « prix » (« prix création site internet », « combien coûte un site internet »)

| URL observée | Type d'acteur | Format | Angle |
|---|---|---|---|
| https://www.hostinger.com/fr/tutoriels/combien-coute-la-creation-dun-site-internet | Hébergeur et créateur de sites | Guide 2026 | Budgets par option ; met en avant son propre outil |
| https://blog.hubspot.fr/website/combien-coute-un-site-internet | Éditeur de CMS | Article de blog | Coûts par type de site et frais récurrents ; met en avant son outil |
| https://propulsebyca.fr/communication-entreprise/creer-site-internet/prix | Offre d'une banque pour pros | Guide + tableau + FAQ | Comparer CMS, freelance, agence ; demander plusieurs devis |

Vus dans les résultats mais non rouverts (erreur 403) : `lafabriquedunet.fr/blog/cout-site-web/` et `leptidigital.fr/webdesign/combien-coute-site-internet-comparatif-prix-2021-19986/`.

**Format dominant :** guides longs et comparatifs, publiés par des plateformes, médias et éditeurs. Aucune page tarifs d'agence n'a été observée en tête. Cela rejoint le constat de [02] §6.2.

**Implications pour Sitekept :**
- `/tarifs` est une page transactionnelle. Seule, elle ne correspond pas au format dominant observé.
- Un guide sur le coût d'un site, relié à `/tarifs` puis `/offres`, correspondrait mieux à cette intention.
- `/tarifs` affiche encore « tarif de lancement » et un prix barré de 600 € (`src/app/(marketing)/tarifs/page.tsx:41`, `:216-228`). Le registre a supprimé ce prix barré [R].

### B.5 Intention « abonnement »

Requêtes testées :
- « site internet sans abonnement » ;
- « création site internet sans abonnement paiement unique » ;
- « site internet abonnement mensuel professionnel » ;
- « louer ou acheter son site internet location site vitrine ».

| URL observée | Type d'acteur | Format | Angle |
|---|---|---|---|
| https://comeup.com/fr/service/537719/creer-votre-site-vitrine-professionnel-sur-mesure-et-sans-abonnement | Freelance sur place de marché | Fiche de service | Paiement unique, propriété du site ; 450 € en base, 488,25 € à la commande (vendeur non assujetti à la TVA) |
| https://lucasfonseque.fr/?p=8133 | Créateur indépendant | Page comparatif « abonnement ou achat » | Pour l'achat ; maintenance dite « facultative », à 60 € HT/mois avec un engagement de douze mois, puis liberté d'arrêter |
| https://digitiz.fr/location-site-internet/ | Média tech | Article (2021, mis à jour 2022) | Plutôt pour la location ; promeut un loueur de sites |
| https://kolonell.com/fr/blog/forfait-mensuel-site-vitrine-abonnement-2026 | Agence qui cible le marché ouest-africain | Article comparatif, chiffré en EUR HT | Abonnement contre achat unique |

Constat sur la requête « site internet sans abonnement » : elle est **ambiguë**. Une grande partie des résultats parle d'accès à Internet sans abonnement (guides administratifs, presse télécom). Ces pages n'ont pas été rouvertes.

**Format dominant :** articles comparatifs « louer ou posséder » et fiches de freelances.

**Implications pour Sitekept :**
- Le débat « louer ou posséder » existe et Sitekept a déjà deux articles dessus (`posseder-son-site-sans-abonnement`, `louer-ou-posseder-son-site-internet`).
- L'offre v2 ajoute un suivi à 65 €/mois sans engagement, ou 600 €/an [R]. La formule annuelle n'est pas remboursable au prorata [R].
- Le message doit rester exact : site payé une fois, suivi facultatif, sans engagement en formule mensuelle seulement.
- Le paiement unique et la propriété du site sont aussi mis en avant par des concurrents (sk-web.fr, ComeUp 537719, lucasfonseque.fr). Ce sont des arguments, pas des exclusivités.
- La mensualité sans engagement distingue Sitekept au moins de lucasfonseque.fr/?p=8133, qui impose douze mois d'engagement à sa maintenance.

---

## C. Opportunités

Classement : impact décroissant, puis effort croissant. L'impact est un jugement qualitatif, **pas une promesse de classement**.

| # | Opportunité | Page concernée | Justification sourcée | Impact | Effort |
|---|---|---|---|---|---|
| 1 | Constater en production et dans Search Console les correctifs techniques : hôte `www`, redirection permanente, sitemap relu, démos en `noindex` | Toutes ; `src/app/sitemap.ts` | Sitemap non relu, 4 erreurs [05] §3. Redirection en 307 [05] §5. Correctifs dans le code, non vérifiés en ligne [D] §5 et §7. | H | B |
| 2 | Marquer `generate_lead` comme événement clé dans GA4 et exporter les pages de destination | Formulaire de contact, toutes pages | Conversion non mesurée [05] §7. `generate_lead` présent dans le code [D] §7.1. Exports manquants [D] §6. | H | B |
| 3 | Aligner `/tarifs` sur l'offre v2 et fixer son rôle face à `/offres` (une seule page cible pour l'intention « prix ») | `/tarifs` (existante), `/offres` (prévue) | Prix barré et « tarif de lancement » encore affichés (`tarifs/page.tsx:41`, `:216-228`). Le registre a supprimé le prix barré [R]. Mention « TTC » encore affichée (`tarifs/page.tsx:155`, `:232`). Le registre prévoit la franchise de TVA [R]. | H | M |
| 4 | Compléter les trois pages métier de la première vague : prix, contenu du suivi, lien vers la démo étiquetée | `/site-internet-plombier`, `/site-internet-salon-de-coiffure`, `/site-internet-boulangerie` | Métiers validés [R]. Concurrents qui affichent prix et modèle : sk-web.fr, lucasfonseque.fr/?p=8126, comeup.com/…/520287. | H | M |
| 5 | Unifier le message « payé une fois, suivi facultatif, sans engagement en mensuel » (l'annuel n'est pas remboursable au prorata) | Accueil, `/offres`, articles `posseder-son-site-sans-abonnement` et `louer-ou-posseder-son-site-internet` | Offre suivi [R]. Débat observé : lucasfonseque.fr/?p=8133 (maintenance avec douze mois d'engagement), digitiz.fr/location-site-internet/. | M | B |
| 6 | Ajouter des liens en cours de texte du blog vers `/tarifs` (ou `/offres`) et les pages métier | `/blog/[slug]` | Le blog maille peu vers les pages commerciales [02] §7.4. Le gabarit renvoie à d'autres articles (`blog/[slug]/page.tsx:199-201`). Comme pages commerciales, il ne renvoie qu'à `/#contact` et `/templates` (`:174-184`). | M | B |
| 7 | Sur la page coiffure, expliquer le lien avec l'outil de réservation du salon | `/site-internet-salon-de-coiffure` | Réservation au cœur des résultats : zenoti.com/fr/salon-website-design, independant.io/site-internet-salon-coiffure/. | M | B |
| 8 | Publier un guide « combien coûte un site internet » relié à la page prix | Nouvel article de blog, lié à `/tarifs` ou `/offres` | Format dominant observé : guides (hostinger.com, blog.hubspot.fr, propulsebyca.fr). Même constat dans [02] §6.2. L'audit proposait déjà « Page /tarifs + guide 1 800 mots » [02] §8.2, sujet 1. | M | H |
| 9 | Vérifier les règles de communication avant de garder indexées les pages métier réglementées | `/site-internet-dentiste`, `/site-internet-avocat` | Professions réglementées en seconde vague, après vérification : statut « Proposé », non validé [R]. Pages présentes dans `metier-pages.ts:113` et `:681`. | B | B |
| 10 | Publier `/cgv` et finaliser les mentions légales, comme signaux de confiance | `/cgv` (prévue), `/mentions-legales` | Mentions légales et CGV à finaliser après création de l'entreprise [R]. `/mentions-legales` en 404 lors de l'audit [00]. | B | M |

### Points d'attention

- Les opportunités 1 et 2 conditionnent toute mesure future. Sans elles, l'effet des autres restera **non mesuré**.
- Le relevé d'août est antérieur au commit `06b31f0` [D] §5. Il faut un nouvel export avant toute nouvelle analyse chiffrée.
- Aucun volume de recherche n'a été mesuré. La priorité entre métiers repose sur la décision [R], pas sur la demande.
