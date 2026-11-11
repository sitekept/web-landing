# 0.9 — Rapport de phase 0

État au 11 novembre 2026. Branche `feat/offre-v2` (worktree `sitekept-weblaunding-offre-v2`), HEAD `03f78b6` avant ce document. Rien n'est en production.

Chaque chiffre renvoie à un document du dépôt ou à un commit. Les renvois utilisent ces abréviations.

| Renvoi | Document |
|---|---|
| [J] | `docs/offre-v2/journal.md` |
| [R] | `docs/offre-v2/registre-decisions.md` |
| [P] | `docs/offre-v2/plan-v2.md` |
| [PI] | `docs/offre-v2/plan-initial.md` |
| [CGV] | `docs/offre-v2/cgv-cgu-brouillon-v1.md` |
| [D] | `docs/seo/00-donnees.md` |
| [A] | `docs/seo/01-analyse.md` |
| [K] | `docs/seo/02-keyword-map.md` |
| [B] | `docs/seo/03-baseline.md` |
| [C] | `docs/seo/03b-consentement.md` |
| [E] | `docs/seo/04-blog-plan.md` |
| [S] | `docs/seo/05-donnees-structurees.md` |
| [G] | `docs/seo/06-geo.md` |
| [O] | `docs/seo/07-optimisation.md` |
| [L] | `docs/seo/08-articles-pilotes.md` |

---

## 1. Résumé

- Le titre de la page d'accueil devient « Le site internet que vous gardez. » (commit `0ba13b3`).
- Une petite bulle demande l'accord du visiteur. Sans accord, aucun script Google ne se charge ([C] § 1).
- Les 32 pages indexables de la tâche 0.4a ont des descriptions de 140 à 155 caractères ([B] § 4). Les 2 articles pilotes aussi : 148 et 153 caractères ([L] § 2).
- Les 34 pages du sitemap portent un balisage schema.org sans erreur ([L] § 2.2).
- 22 pages existantes ont un title, un H1 et un premier paragraphe alignés sur la carte des mots-clés ([O] § 2).
- Les pages gagnent des réponses courtes en tête, des définitions et des sources officielles ([G] § 2, [O] § 7).
- Le blog compte deux articles de plus : la fiche Google Entreprise, et le salon de coiffure sans site ([L] § 1).
- Les prix, les délais et l'offre v2 ne sont pas touchés. La page `/tarifs` affiche encore « Tarif de lancement », « 600 € » et « TTC » (`src/app/(marketing)/tarifs/page.tsx:216-232`).
- Google Analytics ne mesure plus que les visiteurs qui acceptent. Les chiffres baisseront donc mécaniquement ([C] § 1).
- Rien n'est en ligne : tout vit sur la branche `feat/offre-v2`.

---

## 2. Ce qui a été fait, tâche par tâche

22 commits séparent `ed06ed2` de `03f78b6` (`git log`). Les tours et les verdicts viennent du journal [J].

| Tâche | Livrable | Commit | Tours | Verdict | Limites connues |
|---|---|---|---|---|---|
| 0.0 | `docs/design/da-inventaire.md` et captures de référence | `6738de9` | 5 (4e et 5e autorisés par Joseph) | Accepté en l'état par Joseph (5 novembre) après FAIL au tour 5 | Trois phrases contredisent la clause 0 bis. Quelques valeurs vivantes sont omises. |
| 0.1 | `00-donnees.md` : état des données Search Console et GA4 | `eb82405` | 2 | PASS | Relevé du 10 août, âgé d'environ 3 mois ([D] § 2). |
| 0.2 | `01-analyse.md` : données et résultats de recherche | `d6d81eb` | 3 | PASS | Résultats de l'outil WebSearch, pas d'une page Google France ([A] § B). |
| 0.3 | `02-keyword-map.md` : carte des mots-clés | `f2e59ec` | 3 | PASS | Volumes « non mesurés ». « campagne google ads prix » vu seulement en variante proche. |
| 0.4a | `03-baseline.md`, 13 descriptions et 3 `alt` décoratifs, 9 fichiers `src` | `e25a068` | 3 | PASS | Feuilles CSS bloquantes, JavaScript « legacy » et TubesCursor non traités ([B] § 7). |
| 0.4b | Bulle de consentement, GA4 après accord, `03b-consentement.md` | `df2bf19` | 2, puis 3 itérations de design demandées par Joseph | PASS | `/privacy` est encore inexacte ([C] § 5). Quatre points non bloquants (partie 4, b). |
| 0.5 | `structured-data.tsx`, 9 pages, `05-donnees-structurees.md` | `17f62ef`, fusionné par `d5778df` | 2 | PASS | `priceRange` écrit en dur. Aucun test avec l'outil Google « Résultats enrichis » ([S] § 6). |
| Hors plan : titre de la home | `hero.title` dans `site-content.ts` | `0ba13b3` | 1 | PASS | La phrase sous le H1 répète « gardez » ([J]). |
| Hors plan : bulle de consentement | Forme décidée par Joseph : bandeau, bulle, bulle transparente, verre clair | `df2bf19` | 3 itérations | PASS (avec 0.4b) | `bg-white/80` est une valeur nouvelle, décidée par Joseph ([C] § 4). |
| Hors plan : lien LinkedIn | Lien visible dans le pied de page, qui rend vérifiable le `sameAs` déclaré en 0.5 | `c5e036b` | 1 | PASS, aucun bloquant | Lien aligné sur le bord gauche du bloc, sans icône. Adresse fournie par Joseph le 10 novembre ([S] § 2). |
| 0.6 | GEO : `llms.txt`, réponses directes, définitions, sources, `06-geo.md` | `0dfde33` | 3 | Accepté en l'état par Joseph (10 novembre) après FAIL au tour 3 | Trois passages de `06-geo.md` à 4 phrases. `llms.txt` sans prix ni délai ([G] § 8). |
| 0.7 | 22 pages alignées, bloc Sources, `audienceType`, `07-optimisation.md` | `9ce0a07` | 2 | PASS | Textes de prix et de délai non touchés. « Audience non visible » sur 11 pages métier. |
| 0.8a | `04-blog-plan.md` : plan de 8 articles | `c76ee93` | 2 | PASS | Les articles 6, 7 et 8 attendent d'autres chantiers ([E] § 6). |
| 0.8b | Deux articles pilotes, `08-articles-pilotes.md` | `f2e3d5a` | 3 | Accepté en l'état par Joseph (11 novembre) après FAIL au tour 3 | Une phrase de 32 mots dans la note interne de 08. Dates fixées au 10 novembre ([L] § 1.1). |
| 0.9 | Ce rapport | Non commité | 1 | Non validé : à vérifier | Aucune mesure nouvelle. Les chiffres sont repris des documents. |

Les commits `a61925a`, `cd3489e`, `873092f`, `7fcbb45`, `1e366b2`, `a9b133b`, `70830ae` et `03f78b6` ne modifient que le journal. Ils ne portent pas de livrable.

---

## 3. Mesures de départ et état des données

### 3.1 Lighthouse, page d'accueil, mobile

Conditions ([B] § 1.1, § 1.3) :
- Lighthouse 12.8.2, profil mobile par défaut, trois passes, médiane de chaque valeur.
- Local : build de production servi par `pnpm start`. Google Analytics n'y est pas chargé.
- Local : Bonnes pratiques à 96, à cause de deux scripts Vercel en 404 hors de Vercel.
- Production : relevé du 5 novembre, en lecture seule, avant toute modification.
- L'élément LCP est le texte du H1, pas une image ([B] § 2.3).

| Mesure | Perf. | Access. | Bonnes pr. | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Production, 5 novembre, avant modification | 99 | 100 | 100 | 100 | 1 359 ms | 0 | 69 ms |
| Local, avant 0.4a | 96 | 100 | 96 | 100 | 2 792 ms | 0 | 2 ms |
| Local, après 0.4a | 96 | 100 | 96 | 100 | 2 789 ms | 0 | 1 ms |
| Local, après 0.4b, bulle visible | 95 | 100 | 96 | 100 | 2 866 ms | 0,000014 | 2 ms |

Lecture :
- Sources : [B] § 2.2, § 2.1, § 5.2 et [C] § 3.6, dans l'ordre des lignes.
- FCP médian : 1 205 ms en local et 1 117 ms en production ([B] § 2.1, § 2.2).
- En production, la passe 2 est aberrante (Perf. 74, LCP 4 838 ms). La médiane l'écarte ([B] § 2.2).
- Local et production ne se comparent pas : serveur, protocole et CDN diffèrent ([B] § 1.3).
- La production n'a pas été mesurée après les modifications. Aucun Lighthouse n'a été relancé après 0.4b.

### 3.2 Autres mesures

| Mesure | Avant | Après | Source |
|---|---|---|---|
| Descriptions hors de 140 à 155 caractères | 13 | 0 | [B] § 4 |
| Titles de 60 caractères au plus | 32 sur 32 | 32 sur 32 | [B] § 4 |
| URL du sitemap en 200, sans redirection | 32 sur 32 | 32 sur 32 | [B] § 3.2 |
| Pixels différents sur 12 captures (0.4a) | — | 0 | [B] § 5.3 |
| Pages avec un écart title, description, H1 ou premier paragraphe | 22 sur 22 | 0 | [O] § 2 |
| Erreurs JSON-LD | — | 0 sur 34 pages | [L] § 2.2 |
| Liens internes cassés | — | 0 sur 1 010 | [O] § 9 |
| Liens du bloc Sources en HTTP 200 | — | 14 sur 14 | [O] § 7 |
| Réponses courtes de 40 à 60 mots | — | 46 sur 46 | [G] § 2 |

### 3.3 État des données : le relevé d'août

Le relevé date du 10 août 2026. Les deux périodes couvrent du 9 février au 8 août (Search Console) et du 13 juillet au 9 août (GA4) ([D] § 1).

| Indicateur | Valeur | Source |
|---|---|---|
| Clics | 8 | [D] § 3.1 |
| Impressions | 103 | [D] § 3.1 |
| CTR moyen | 7,8 % | [D] § 3.1 |
| Position moyenne | 5,7 | [D] § 3.1 |
| Pages indexées | 11 | [D] § 3.3 |
| Pages non indexées | 6 | [D] § 3.3 |
| Sitemap | 4 erreurs, 5 pages découvertes | [D] § 3.4 |
| Sessions GA4 | 27 dont 5 organiques | [D] § 3.6 |
| Événement clé GA4 | `purchase` seulement, sans donnée | [D] § 3.7 |

Limites de ce relevé ([D] § 3.1, § 5) :
- Les 6 requêtes visibles sont des variantes de marque, pour 13 impressions et 0 clic.
- Environ 90 impressions sont anonymisées par Google.
- La position de 5,7 ne reflète que des requêtes de marque.
- Aucune conclusion statistique n'est possible.
- Le relevé précède le commit `06b31f0` du 11 août, qui a corrigé l'hôte canonique, le sitemap et le suivi GA4.

### 3.4 Ce que l'on pourra comparer après la mise en ligne

| Indicateur | Comparable ? | Pourquoi |
|---|---|---|
| Clics, impressions, CTR, position moyenne | Oui, avec prudence | Mêmes indicateurs. Comparer deux périodes de même durée. Le relevé d'août couvre six mois. |
| Pages indexées et non indexées | Oui | Même rapport « Pages ». Le relevé d'août précède `06b31f0` ([B] § 6). |
| Sitemap : état et pages découvertes | Oui | Le sitemap sera renvoyé après la mise en ligne ([B] § 6). |
| Sessions GA4 | Non | Seuls les visiteurs qui acceptent sont comptés ([C] § 1). Les 27 sessions d'août n'avaient aucun filtre. |
| `generate_lead` | Aucun point de départ | Ajouté le 11 août, lendemain du relevé. Mesuré après accord seulement ([D] § 7.1). |
| Core Web Vitals de terrain | À relever | En août : « pas assez de données » ([D] § 3.5). |

Aucun volume de recherche n'existe dans les sources. Aucun n'est donné ici ([D] § 5).

---

## 4. Ce qui reste à faire

### (a) Phase 1 : prix, délais et discours

La phase 1 aligne le discours et les prix sur le registre ([P] § 12). Elle s'arrête sur une relecture de Joseph.

| N° | Chantier | Ce qu'il faut faire | Source |
|---|---|---|---|
| 1 | Constante unique | Un seul fichier pour les prix (500, 65 par mois, 600 par an, 300), le mode de TVA et la mention légale. | [P] § 6 bis |
| 2 | Textes de prix | Retirer « tarif de lancement », le « 600 € » barré et « TTC ». Retirer « à partir de » avant le prix. | [P] § 1, § 5 ; [B] § 7 |
| 3 | Délai de 48 h | Chaque mention porte « après réception de vos éléments ». | [P] § 3, § 11 |
| 4 | Pages métier | Texte « au lieu de 600 € », délai compté depuis l'acompte, « devis sous 24h ». Douze descriptions avec prix ou « 48h ». | [O] § 10, [G] § 10 |
| 5 | `/tarifs` | Carte « Tarif de lancement » à renommer. La question « Le prix affiché est-il TTC… » à reprendre (`src/app/(marketing)/tarifs/page.tsx:155`). | [P] § 5, § 11 |
| 6 | `/tarifs`, suite | Description à nuancer : « sans abonnement » devient « sans abonnement imposé ». Question 2 de la FAQ à réécrire. | [B] § 7, [PI] § 2 |
| 7 | Home | Hero : précision sur les 48 h, rendu mobile et desktop à montrer avant validation. FAQ : question sur le premier mois offert. | [P] § 5 |
| 8 | Home, phrase sous le H1 | Elle répète « gardez ». Elle doit porter « création site internet professionnel ». | [J] |
| 9 | Home, description | « Devis gratuit en 24h » a été retiré faute de place. À reprendre si Joseph le souhaite. | [J] |
| 10 | Cinq articles du plan v2 § 5.3 | Ajouter un court passage sur l'accompagnement optionnel et la distinction « acheter un site » ou « louer sa présence ». Aucune URL ne change. | [P] § 5.3 |
| 11 | Liens des cinq articles | Article livraison vers article rapide, renvois croisés, et liens vers `/offres` après la phase 2. | [O] § 10 |
| 12 | Article livraison | La description garde « domaine offert la 1re année ». À revoir avec l'offre v2. | [B] § 7 |
| 13 | `/templates` | Mention visible « Votre site est créé sur mesure pour vous ». La description et l'introduction disent « en 48h ». | [P] § 5.6, [O] § 10 |
| 14 | `llms.txt` | Ajouter le prix, le délai de 48 h après réception des éléments, le sur-mesure et la cible. Ajouter les 2 nouveaux articles. | [G] § 8, [J] |
| 15 | JSON-LD | `priceRange` est écrit en dur. Il doit lire la constante. | [S] § 6 |
| 16 | Liens vers `/offres` | Impossibles avant la phase 2 : `/templates`, `/realization`, `/seo-geo`, pages métier. | [O] § 5, § 10 |

Les cinq articles du plan v2 § 5.3 sont :
- `/blog/posseder-son-site-sans-abonnement` ;
- `/blog/louer-ou-posseder-son-site-internet` ;
- `/blog/recuperer-son-site-web-chez-un-prestataire` ;
- `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` ;
- `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept`.

Contrôles de fin de phase : [P] § 11, points 1 à 5. Les phases suivantes ([P] § 12) :
- phase 2 : page `/offres` et résumé de la home ;
- phase 3 : tunnel de formulaire et mesure ;
- phase 4 : navigation, footer, JSON-LD des offres, pages métier de la première vague ;
- phase 5 : CGU, CGV et mise en production, seulement quand les prérequis de [P] § 2 sont levés.

### (b) Points ouverts du journal

| Point | Détail | Source |
|---|---|---|
| Renvois vers l'article 1 | `/seo-geo` et `site-optimise-seo-geo` ne renvoient pas à l'article « fiche Google Entreprise » dans leur texte. | [J], [L] § 7 |
| `llms.txt` | Les 2 nouveaux articles n'y figurent pas. | [J], [L] § 7 |
| Règle « comment créer » | À borner dans le bloc C de la carte : « comment créer un site internet » va vers `/blog`. | [J] |
| Page d'aide « Valider votre établissement » | À envisager pour mettre à jour l'article 1. Elle parle du compte Google et de la carte postale. | [L] § 7 |
| Bulle : anneau de focus | Peu contrasté sur la bulle. | [J] |
| Bulle : bouton « Gérer les cookies » | Pas de curseur en forme de main. | [J] |
| Bulle : démo plombier | Elle recouvre la barre d'appel fixe sur mobile tant qu'aucun choix n'est fait. | [J] |
| `03b-consentement.md` § 5 | Contient une citation de 42 mots. | [J] |
| « Audience non visible » | Le validateur le signale sur 11 pages métier. Conséquence assumée de la décision de Joseph. | [J], [O] § 8 |
| Règle « audience visible » du validateur | À trancher : Joseph peut préférer écrire le public dans le texte. | [O] § 10 |
| Libellés de sources de `/seo-geo` | Tous ne sont pas des titres exacts. | [O] § 7.2 |
| Textes `en` et champ `sources` | Non mis à jour et non traduits. Le site ne sert que le français. | [O] § 10 |
| Affirmations sans source officielle | Laissées telles quelles dans `/seo-geo`, la checklist et les pages métier. | [G] § 6 |
| Direction artistique | Trois phrases non qualifiées, et des valeurs vivantes omises (page d'admin, `opengraph-image.tsx`). | [J] |
| Dates des articles | Les 2 pilotes ont `publishedAt` et `updatedAt` au 10 novembre. Les 6 articles de 0.6 ont `updatedAt` à cette date. | [L] § 1.1, [G] § 5 |
| Route `/faq` | Elle répond 404. Le plan v2 la garde dans la navigation et le footer. À trancher en phase 4. | [O] § 1, [P] § 9 |
| Recommandations de 0.4a | CSS bloquantes, polyfills, TubesCursor, slug `/pattiserie`, `meta robots` de la démo boulangerie. | [B] § 7 |

### (c) Les six articles restants du plan éditorial

Les articles restent signés « Équipe Sitekept » ([J], décision du 10 novembre). À chaque publication, la carte des mots-clés se met à jour ([E] § 7).

| N° | Titre | Slug | Cible | Condition |
|---|---|---|---|---|
| 3 | Plombier sans site web : que faire pour être joignable ? | `plombier-sans-site-web` | 700–900 mots | Pilotes relus ; lien vers l'article 1 en place |
| 4 | Changer ses horaires d'ouverture sur Google : congés, jours fériés | `changer-ses-horaires-sur-google` | 600–800 mots | Idem |
| 5 | Répondre aux avis Google : mode d'emploi pour un commerce local | `repondre-aux-avis-google` | 700–900 mots | Idem |
| 6 | Mentions légales obligatoires sur un site internet : le guide | `mentions-legales-obligatoires-site-internet` | 1 000–1 200 mots | `/mentions-legales` finalisée après la création de l'entreprise |
| 7 | Google Ads pour artisans : faut-il commencer, et comment ? | `google-ads-pour-artisans` | 800–1 000 mots | `/offres` publiée (phase 2) ; ton des campagnes validé |
| 8 | Combien coûte un site internet par mois ? Les frais à prévoir | `combien-coute-un-site-internet-par-mois` | 1 200–1 400 mots | `/tarifs` alignée (phase 1) |

Sources : [E] § 2, § 6 et [J].

Décisions de Joseph du 10 novembre à reporter :
- article 6 : l'offre à 500 € inclut la rédaction des mentions légales et de la politique de confidentialité du client ;
- article 8 : exception à la règle « prix vers `/tarifs` », avec un renvoi vers `/tarifs`.

Les 2 pilotes ne renvoient pas encore aux articles 3 à 5. Ces liens s'ajoutent à leur publication ([L] § 1.3).

---

## 5. Actions à faire par Joseph (hors code)

| N° | Où | Quoi | Pourquoi | Quand |
|---|---|---|---|---|
| 1 | Vercel, redirection du domaine | Aucune action. | `sitekept.com` répond déjà en 308 vers `www` ([B] § 3.5). | — |
| 2 | Vercel, variables d'environnement | Vérifier que `NEXT_PUBLIC_BASE_URL` vaut exactement `https://www.sitekept.com`, ou qu'elle est absente. | Une valeur valide mais fausse serait reprise partout ([B] § 6, n° 5). | Au prochain passage dans Vercel |
| 3 | Vercel, variables d'environnement | Vérifier que `NEXT_PUBLIC_GA_ID` reste définie. | Sans elle, ni bulle, ni mesure ([C] § 1). Au 5 novembre, elle l'est : gtag est chargé en production ([B] § 1.3). | Avant la mise en ligne |
| 4 | Search Console, Sitemaps | Renvoyer `https://www.sitekept.com/sitemap.xml`. | Selon l'audit, Google ne l'avait pas relu depuis le 2 août 2025 ([B] § 6, n° 2). | Après la mise en ligne |
| 5 | Search Console, inspection d'URL | Inspecter les 13 pages de [B] § 4.1, puis demander l'indexation. | Ce sont les pages dont la description change ([B] § 6, n° 4). | Après la mise en ligne |
| 6 | Search Console, rapport « Pages » | Noter les motifs de non-indexation. Comparer à août : 11 pages indexées, 6 non indexées. | Mesurer l'effet des correctifs ([B] § 6, n° 3). | 2 à 4 semaines après le renvoi |
| 7 | GA4, événements | Marquer `generate_lead` comme événement clé. | Le code l'envoie, mais le marquage se fait dans GA4 ([D] § 7.1). En août, seul `purchase` existait. | Après la mise en ligne |
| 8 | GA4, conservation des données | Choisir 14 mois, ou laisser les 2 mois par défaut. | À dire dans `/privacy` ([C] § 5). | Avant la phase 5 |
| 9 | Cookies `_ga` | Prévoir une durée de 13 mois au plus, à écrire lors de la mise à jour de `/privacy`. | Réglage distinct de la conservation des données ([C] § 5). | Phase 5 |
| 10 | GA4, lecture des chiffres | Retenir que GA4 ne compte plus que les visiteurs qui acceptent. | Les chiffres baisseront mécaniquement. Ne pas les comparer aux 27 sessions d'août ([C] § 1). | Dès la mise en ligne |
| 11 | `/privacy` | Relire la réécriture de la section « Cookies ». | Le texte actuel renvoie aux réglages du navigateur. Il est inexact ([C] § 5). | Phase 5 |
| 12 | Dossier `docs/seo-data/` | Déposer des exports récents de Search Console et de GA4. | Le relevé d'août est la seule donnée de terrain ([D] § 4). Facultatif ([D] § 6). | Quand vous le pouvez |
| 13 | Entreprise | Immatriculer l'entreprise (SIRET). Aucune facture avant. | Elle n'est pas créée, et sa forme juridique n'est pas décidée ([P] § 2, [R]). | Avant la mise en production |
| 14 | Stripe | Ouvrir le compte. Créer le produit « Suivi & Visibilité » : 65 € par mois, 600 € par an, essai de 30 jours (mensuel). | [P] § 2 et [R]. Le compte s'ouvre après la création de l'entreprise. | Après l'étape 13 |
| 15 | `/mentions-legales`, CGU, CGV | Mettre à jour les mentions. Faire relire CGU et CGV par une personne qualifiée. | [P] § 2. Le brouillon des CGV contient des « TTC » et « HT » caducs ([R]). | Avant la mise en production |
| 16 | Situation personnelle | Si vous êtes salarié par ailleurs, vérifier votre clause d'exclusivité et de non-concurrence. | [P] § 2. | Avant la mise en production |
| 17 | TVA | Surveiller le seuil de la franchise. | Au-delà, la TVA devient due et les prix affichés sont à revoir ([P] § 2, [R]). | En continu |
| 18 | Registre | Ajouter la décision du 10 novembre : la rédaction des mentions légales et de la politique de confidentialité du client est incluse. | [J] la dit « à soumettre au registre ». Le registre actuel ne la contient pas. | À la prochaine mise à jour |
| 19 | Décision | Dire si le public visé (« audience ») doit s'afficher dans le texte des pages métier. | Aujourd'hui il est déclaré sans être affiché ([J], [O] § 8). | Quand vous le souhaitez |
| 20 | Dossier principal | Supprimer `docs/seo-audit 2`, un dossier vide, s'il est inutile. | Constat de démarrage : 0 fichier, rien supprimé ([J]). | Quand vous le souhaitez |
| 21 | Outil Google « Résultats enrichis » | Tester quelques pages. | La validation du balisage est restée locale ([S] § 6). | Facultatif |

Deux remarques :
- Le fichier `.env.example` cite `NEXT_PUBLIC_SITE_URL`. Le code ne lit que `NEXT_PUBLIC_BASE_URL` (`src/lib/site-url.ts:30`).
- La tâche 0.7 a aussi changé des titles ou des H1 sur 11 pages ([O] § 3). La liste de l'action 5 date de 0.4a. Elle ne couvre pas ces pages.

---

## 6. Modèle de rapport mensuel pour l'offre « Suivi & Visibilité »

### 6.1 Ce que l'offre prévoit

| Élément | Ce que disent les documents | Source |
|---|---|---|
| Prix | 65 € par mois sans engagement, ou 600 € par an. | [R] |
| Modifications | 2 par mois, non cumulables, traitées en 5 jours ouvrés. Hors forfait : sur devis. | [R] |
| Une modification | Un changement sur une page existante : texte, photo, horaires, tarifs, actualité. | [PI] § 1, point 5 |
| Suivi de visibilité | Search Console surveillée, une optimisation on-page par mois, un rapport mensuel, une veille dans les moteurs d'IA. | [PI] § 1, point 5 ; [CGV] § 2.2 |
| Garantie | Aucun classement garanti. Le travail et le compte rendu le sont. | [PI] § 1, point 5 |

- Le registre ne décrit ni le rapport ni la veille. Le plan v2 ne les modifie pas : le plan initial reste valable ([P], en-tête).
- Le brouillon des CGV n'est pas validé ([R]).
- La veille dans les moteurs d'IA est entre crochets dans le modèle. À garder seulement si Joseph la confirme.

### 6.2 Mode d'emploi

- Remplir chaque crochet. Supprimer la ligne si elle n'a pas d'objet.
- Comparer deux périodes de même durée : le mois du rapport et le mois précédent (M-1).
- Écrire pour un artisan : un chiffre, puis une phrase simple.
- Ne promettre aucun résultat. Ne pas conclure d'un petit écart.
- « Après votre demande complète » vient du brouillon des CGV, non validé ([CGV] § 2.2). À confirmer avant envoi.
- La ligne `generate_lead` n'existe que si l'événement est installé sur le site du client. Sinon, la supprimer.

### 6.3 Gabarit

Le modèle commence sous cette ligne.

---

# Rapport mensuel de visibilité — [Nom du client]

- Site : [adresse du site].
- Mois couvert : du [jj/mm/aaaa] au [jj/mm/aaaa].
- Comparé au mois précédent : du [jj/mm/aaaa] au [jj/mm/aaaa].
- Rapport rédigé le [date].

## L'essentiel en deux phrases

[Ce qui a changé ce mois-ci, en une phrase simple.] [Ce que nous avons fait ce mois-ci, en une phrase simple.]

## 1. Les chiffres du mois

Les chiffres viennent de Google. Ils sont comparés au mois précédent, sur une période de même durée.

| Indicateur | En clair | Où nous l'avons lu | Ce mois | Mois précédent | Écart |
|---|---|---|---|---|---|
| Impressions | Nombre de fois où une page de votre site est apparue dans les résultats de Google | Search Console, rapport Performances | [nombre] | [nombre] | [écart] |
| Clics | Nombre de fois où quelqu'un a cliqué pour venir sur votre site | Search Console, rapport Performances | [nombre] | [nombre] | [écart] |
| CTR | Part des affichages qui ont donné un clic | Search Console, rapport Performances | [en %] | [en %] | [écart] |
| Position moyenne | Rang moyen de votre site dans les résultats : plus le chiffre est petit, plus il est haut | Search Console, rapport Performances | [nombre] | [nombre] | [écart] |
| Pages indexées | Nombre de pages de votre site que Google a retenues | Search Console, rapport Pages | [nombre] | [nombre] | [écart] |
| Demandes envoyées par le formulaire | Nombre d'envois par des visiteurs qui avaient accepté la mesure | GA4, rapport Événements, événement `generate_lead` | [nombre] | [nombre] | [écart] |

Ce que nous en concluons :
- Impressions et clics : [une phrase simple].
- CTR : [une phrase simple].
- Position moyenne : [une phrase simple, avec la réserve ci-dessous].
- Pages indexées : [une phrase simple]. Pages non indexées : [nombre]. Motifs principaux : [liste lue dans Search Console, rapport Pages].
- Demandes : [une phrase simple]. Demandes reçues directement par vous (téléphone, e-mail) : [nombre donné par le client].

Réserves sur ces chiffres :
- Seuls les visiteurs qui ont accepté la mesure d'audience sont comptés dans les demandes. Le chiffre peut être inférieur au nombre réel.
- Une position moyenne calculée sur peu de requêtes, ou sur des requêtes de marque, ne dit pas grand-chose.

## 2. Ce que nous avons fait ce mois-ci

### Vos modifications du mois

Deux modifications sont incluses chaque mois. Elles ne se reportent pas au mois suivant.

| Modification | Page | Demandée le | En ligne le | Statut |
|---|---|---|---|---|
| 1 | [adresse de la page] | [date] | [date] | [fait / en cours] |
| 2 | [adresse de la page] | [date] | [date] | [fait / en cours] |

Modifications non utilisées ce mois-ci : [0, 1 ou 2]. Une modification est traitée en 5 jours ouvrés [après votre demande complète : à confirmer]. Une nouvelle page, une nouvelle fonctionnalité ou une refonte se fait sur devis.

### Notre optimisation du mois

- Page concernée : [adresse de la page].
- Ce que nous avons changé : [une phrase simple].
- Pourquoi : [une phrase simple].
- Date : [date].

### Surveillance de la Search Console

- Problèmes signalés ce mois-ci : [aucun, ou liste].
- Ce que nous avons fait : [une phrase simple].

### Veille dans les réponses des moteurs d'IA

[À garder seulement si l'offre la confirme.]
- Ce que nous avons regardé : [requête ou question testée, date].
- Ce que nous avons constaté : [une phrase simple].

## 3. Prévu pour le mois prochain

- Optimisation prévue : [page et sujet].
- Modifications que vous nous avez annoncées : [liste].
- Ce dont nous avons besoin de votre part : [textes, photos, réponses].

## 4. Ce que ces chiffres ne disent pas

Ces chiffres ne disent pas combien de clients vous ont appelé, ni pourquoi un chiffre a bougé. Un petit écart ne prouve rien.

- Quelques semaines sont nécessaires pour juger un changement.
- Les appels, les visites en boutique et les visiteurs qui refusent la mesure ne sont pas comptés.

Aucun classement ne peut être garanti, par nous ou par quiconque ; ce qui est garanti, c'est le travail et le compte rendu.

---

Le modèle se termine sur cette ligne.

---

## 7. Rappel

- Rien n'est en production. Les prérequis de [P] § 2 ne sont pas levés.
- Branche `feat/offre-v2`, worktree `sitekept-weblaunding-offre-v2`, HEAD `03f78b6` avant ce document.
- La mise en production n'arrive qu'en phase 5 ([P] § 0, point 5 ; § 12).
- Ce document n'est pas commité. La tâche 0.9 attend un vérificateur.
- Lighthouse n'a pas été relancé depuis 0.4b, et la production n'a pas été remesurée.
