# 0.3 — Mots-clés et cartographie des pages

État au 3 novembre 2026. Ce document attribue un mot-clé principal à chaque page indexable, existante ou prévue.

Sources citées :
- **[D]** = `docs/seo/00-donnees.md` ;
- **[A]** = `docs/seo/01-analyse.md` ;
- **[02]** = `docs/seo-audit/02-onpage-contenu.md` ;
- **[05]** = `docs/seo-audit/05-donnees-gsc-ga4.md` ;
- **[R]** = `docs/offre-v2/registre-decisions.md` ;
- **[P]** = `docs/offre-v2/plan-v2.md`.

Code lu sur `feat/offre-v2`, commit `6738de9`. Le dossier `src/` y est identique au commit `a61925a` de la première lecture (`git diff --stat a61925a HEAD -- src` : sortie vide).

---

## 1. Méthode et limites

### 1.1 Sources utilisées

| Source | Ce qu'elle apporte | Date |
|---|---|---|
| Search Console [05] | Seulement 6 requêtes de marque (« kept.com », « site keep »…). Aucune requête non-marque. | Relevé du 10 août 2026 |
| Suggestions Google (« Suggest ») | Requêtes réellement proposées par Google à la frappe | 3 novembre 2026 |
| WebSearch | Résultats observés, déjà décrits dans [A] partie B | 3 novembre 2026 |
| Audit [02] § 8 | Familles de mots-clés recommandées | 10 août 2026 |
| Code (`src/`) | Inventaire des pages, slugs, titres actuels | 3 novembre 2026 |

### 1.2 Comment les suggestions ont été relevées

- Adresse interrogée : `https://suggestqueries.google.com/complete/search?client=firefox&hl=fr&gl=fr&ie=utf-8&oe=utf-8&q=<préfixe>`.
- La réponse est une liste JSON : `["<préfixe>", [suggestions…]]`. Seul le second élément compte.
- Un mot-clé est dit « observé » s'il figure dans cette liste de suggestions. Une liste vide signifie : rien d'observé.
- Dans le tableau, « Suggest « X » » veut dire : le mot-clé apparaît dans les suggestions du préfixe X.
- Les suggestions sont recopiées telles quelles. Google les donne souvent sans accent ni apostrophe (« c est quoi »).

Préfixes interrogés (pour rejouer la vérification) :

- Métiers : `site internet plombier`, `site internet plomberie`, `site internet chauffagiste`, `création site internet plombier`, `site internet coiffeur`, `site internet coiffure`, `site internet salon de coiffure`, `creation site internet coiffure`, `creer un site internet salon`, `site internet boulangerie`, `site internet boulanger`, `site internet patisserie`, `site internet pâtisserie`, `site internet pâtissier`, `site internet patissier`, `site web patisserie`, `création site internet patisserie`.
- Métiers (suite) : `site internet dentiste`, `site internet dentaire`, `site internet cabinet`, `site internet avocat`, `création site internet avocat`, `site internet restaurant`, `site internet fleuriste`, `site internet nettoyage`, `site web nettoyage`, `site internet société de nettoyage`, `site internet entreprise de nettoyage`, `site web entreprise`, `site internet réparateur`, `site internet réparation`, `site internet réparateur informatique`, `site internet informatique`, `site web informatique`, `site internet architecte`, `site internet architecte d'intérieur`, `site internet agence immobilière`.
- Offre et prix : `création site internet`, `création site internet sans`, `site internet professionnel`, `site internet artisan`, `site internet pour artisan`, `agence web artisan`, `prix site internet`, `tarif site internet`, `combien coute un site internet`, `combien coûte un site`, `forfait site internet`, `devis site internet`.
- Abonnement et propriété : `site internet abonnement`, `site internet sans abonnement`, `abonnement site internet`, `site web abonnement`, `prix abonnement site internet`, `location site internet`, `louer son site`, `louer ou acheter son site`, `récupérer son site`, `récupérer son site internet`, `avoir son propre site`, `résiliation abonnement site internet`, `maintenance site`, `maintenance site internet`.
- Exemples et modèles : `site vitrine`, `exemple site vitrine`, `exemple site internet`, `exemple de site internet professionnel`, `modèle site internet`, `template site internet`, `template site vitrine`.
- Visibilité : `seo et geo`, `geo référencement`, `référencement seo`, `référencement naturel`, `pourquoi le référencement`, `checklist seo`, `mon site n apparait pas`, `site invisible sur google`, `site non visible`, `etre visible sur google`, `etre visible sur google map`, `etre référencé sur google`, `référencement local`, `fiche google entreprise`, `campagne google ads`.
- Ajoutés au tour 2 (location, réparation informatique, nettoyage) et contrôles divers : `acheter ou louer`, `louer site internet`, `louer un site internet`, `location site web`, `site internet en location`, `site internet location ou achat`, `site web réparation`, `site web réparateur`, `site web dépannage`, `site web dépannage informatique`, `site internet dépannage`, `site internet dépanneur`, `site internet dépanneur informatique`, `site internet réparation informatique`, `site internet réparation pc`, `création site internet informatique`, `création site internet entreprise de nettoyage`, `site internet entreprise nettoyage`, `comment créer un site internet pour`, `mon site n'apparaît pas`, `site internet commerce`, `site internet commerçant`, `site internet ia`, `publicité google`, `conditions générales de vente`, `cgv site internet`, `cgv création site`, `cgu site internet`, `politique de confidentialité`, `politique de confidentialité site`, `mentions légales`, `mentions légales site internet`.
- Lancés au tour 1 par une autre voie (outil WebFetch sur la même adresse) : `maintenance site internet prix`, `site internet en 48h`, `propriétaire de son site`, `changer de prestataire site`, `site internet sans référencement`, `checklist seo mise en ligne`, `publicité google artisan`, `site internet inutile`, `réservation en ligne coiffeur`, `conseils site internet`, `blog création site`, `conditions générales de vente site`, `site internet petit commerce`.
- Divers : `créer un site internet rapidement`, `site internet rapide`, `site internet livraison`, `livraison site`, `mise en ligne site internet`, `mettre en ligne site`, `étapes création site`, `guide création site internet`, `aide création site internet`, `comment créer un site internet`, `hébergement site internet`, `nom de domaine`, `sitekept`, `site kept`.

### 1.3 Limites

- **Aucun volume de recherche n'est disponible.** Aucun outil de volume n'est branché. La colonne volume vaut « non mesuré » partout.
- Une suggestion prouve qu'une requête existe. Elle ne dit rien de sa fréquence.
- Les suggestions viennent d'un appel sans compte ni historique. Google ne dit pas d'où il localise l'appel.
- Certaines suggestions citent Saint-Étienne ou Andrézieux. La localisation de l'appel influence donc la liste.
- WebSearch se décrit comme limité aux États-Unis. Ce n'est **pas** une page de résultats Google localisée en France [A] partie B.
- Les volumes de [02] § 8 sont des estimations non vérifiées [02] § 8. Ils ne sont pas repris ici.
- Rien ici ne promet un classement. Une carte de mots-clés évite seulement que deux pages se fassent concurrence.

---

## 2. Tableau principal

Une ligne par page indexable. Les pages de démonstration et les pages exclues sont en partie 4.

Statuts : « à réécrire en phase X » renvoie aux phases de [P] § 12. Volume : « non mesuré » partout (voir 1.3).

### 2.1 Pages commerciales et éditoriales générales

| URL | Statut | Mot-clé principal | Mots-clés secondaires | Intention | Origine du mot-clé principal | Volume |
|---|---|---|---|---|---|---|
| `/` | Existante ; à réécrire en phase 1 (hero, FAQ) et phase 2 (résumé des offres) [P] § 5, § 12 | création site internet professionnel | création site internet artisan ; site internet pour artisan ; agence web artisan ; site internet professionnel | Commerciale | Suggest « création site internet » et « site internet professionnel » | non mesuré |
| `/offres` | Prévue ; phase 2 [P] § 4, § 12 | devis site internet | forfait site internet ; devis site internet vitrine ; maintenance site internet ; campagne google ads locale | Transactionnelle | Suggest « devis site internet » | non mesuré |
| `/tarifs` | Existante ; à réécrire en phase 1 [P] § 5 | prix site internet | combien coute un site internet ; prix site internet vitrine ; tarif site internet vitrine ; prix site internet artisan ; création site internet prix | Commerciale | Suggest « prix site internet » ; [02] § 8.1 n° 1 ; résultats observés [A] B.4 | non mesuré |
| `/templates` | Existante ; à réécrire en phase 1 (mention « sur mesure ») [P] § 5.6 | modèle site internet | template site internet ; template site vitrine ; exemple site vitrine | Commerciale | Suggest « modèle site internet » et « template site internet » | non mesuré |
| `/realization` | Existante | exemple de site internet professionnel | exemple de site web entreprise ; exemple site vitrine entreprise ; exemple site internet moderne | Commerciale | Suggest « exemple de site internet professionnel » | non mesuré |
| `/seo-geo` | Existante ; rangée sous « Ressources » en phase 4 [P] § 9 | référencement seo et geo | agence seo et geo ; référencement seo ia ; référencement seo local ; référencement naturel site web | Informationnelle | Suggest « seo et geo » | non mesuré |
| `/blog` | Existante ; rangée sous « Ressources » en phase 4 [P] § 9 | guide création site internet | conseil création site internet ; étapes création site web ; comment créer un site internet pour une entreprise | Informationnelle | Suggest « guide création site internet » | non mesuré |

Mise à jour du 10 novembre 2026 (tâche 0.7) : `/templates`, `/realization`, `/seo-geo` et `/blog` portent désormais leur mot-clé principal dans le title, le H1 et le premier paragraphe. Les mots-clés ne changent pas. Preuves : `docs/seo/07-optimisation.md`.

Remarque sur `/templates` :
- **Risque de décalage d'intention.**
- Les suggestions de « template site internet » mènent vers des modèles gratuits à télécharger (« template site internet gratuit », « template site web gratuit télécharger »).
- Une partie des visiteurs peut donc chercher un fichier à récupérer, pas un prestataire. La page doit dire tôt que les templates sont des démonstrations, et que le site livré est sur mesure [R].

### 2.2 Articles de blog (11 articles, tableau `blogPosts` en `src/content/site-content.ts:967-2356`)

| URL | Statut | Mot-clé principal | Mots-clés secondaires | Intention | Origine du mot-clé principal | Volume |
|---|---|---|---|---|---|---|
| `/blog/site-web-rapide-pme-independant` | Existante | créer un site internet rapidement | creation site internet rapide ; site internet rapide ; site internet livraison rapide | Informationnelle | Suggest « créer un site internet rapidement » | non mesuré |
| `/blog/posseder-son-site-sans-abonnement` | Existante ; à réécrire en phase 1 [P] § 5.3 | site internet sans abonnement | création site internet sans abonnement ; site web sans abonnement ; résiliation abonnement site internet | Informationnelle | Suggest « site internet abonnement » ; résultats observés [A] B.5 | non mesuré |
| `/blog/site-optimise-seo-geo` | Existante | optimisation seo et geo | comment etre visible sur google ; etre present sur google ; etre vu sur google | Informationnelle | Suggest « seo et geo » | non mesuré |
| `/blog/qu-est-ce-que-le-seo-et-le-geo` | Existante | seo et geo c'est quoi | différence seo et geo ; seo geo signification ; référencement seo définition ; référencement naturel définition | Informationnelle | Suggest « seo et geo » (forme « seo et geo c est quoi ») | non mesuré |
| `/blog/site-sans-referencement-peut-devenir-inutile` | Existante | mon site n'apparaît pas sur Google | pourquoi mon site n apparait pas sur google ; site non visible sur google ; site introuvable sur google ; mon site n apparait pas dans les moteurs de recherche | Informationnelle | Suggest « mon site n apparait pas » (forme sans accent) | non mesuré |
| `/blog/pourquoi-optimisation-referencement-naturel-importante` | Existante | pourquoi le référencement d'un site est important | etre référencé sur google ; comment etre référencé sur google ; etre mieux référencé sur google | Informationnelle | Suggest « pourquoi le référencement » | non mesuré |
| `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` | Existante ; à réécrire en phase 1 [P] § 5.3 | avoir son propre site internet | comment avoir son propre site internet ; avoir son site internet ; comment avoir son site web | Informationnelle | Suggest « avoir son propre site » et « récupérer son site » | non mesuré |
| `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept` | Existante ; à réécrire en phase 1 [P] § 5.3 | mise en ligne site internet | mettre en ligne site internet ; mettre en ligne site web ; livraison site internet | Informationnelle | Suggest « mise en ligne site internet » et « mettre en ligne site » | non mesuré |
| `/blog/recuperer-son-site-web-chez-un-prestataire` | Existante ; à réécrire en phase 1 [P] § 5.3 | récupérer son site internet | résiliation contrat site internet ; lettre résiliation contrat site internet ; comment retrouver son site internet | Informationnelle | Suggest « récupérer son site » ; sujet proche de [02] § 8.2 n° 6 | non mesuré |
| `/blog/louer-ou-posseder-son-site-internet` | Existante ; à réécrire en phase 1 [P] § 5.3 | location site internet | abonnement site internet ; site web abonnement mensuel ; site internet avec abonnement ; louer un site internet ; location site web | Commerciale | Suggest « location site internet » ; résultats observés [A] B.5. Le secondaire « louer un site internet » figure seulement dans sa propre liste ; la variante observée ailleurs est « location site internet ». | non mesuré |
| `/blog/checklist-seo-avant-mise-en-ligne` | Existante | checklist seo | checklist seo on page ; checklist seo 2026 ; checklist seo refonte site | Informationnelle | Suggest « checklist seo » ; [02] § 8.2 n° 8 | non mesuré |

Mise à jour du 10 novembre 2026 (tâche 0.7) : les six articles hors plan v2 § 5.3 portent leur mot-clé principal dans le title, le H1 et le premier paragraphe. Les mots-clés ne changent pas. Preuves : `docs/seo/07-optimisation.md`. Les cinq articles du § 5.3 restent à traiter en phase 1.

### 2.3 Pages métier (12 pages, `src/content/metier-pages.ts`)

Vagues selon [P] § 8 et [R]. Les pages réglementées gardent un mot-clé neutre, sans promesse de visibilité.

| URL | Statut | Mot-clé principal | Mots-clés secondaires | Intention | Origine du mot-clé principal | Volume |
|---|---|---|---|---|---|---|
| `/site-internet-plombier` | Existante ; à compléter en phase 4 ; **première vague** ([R] « Validé ») | site internet plombier | site internet plombier chauffagiste ; création site internet plombier ; site internet pour plombier ; site internet plomberie ; site internet chauffagiste | Commerciale | Suggest « site internet plombier » ; [A] B.1 ; [02] § 8.1 n° 3 | non mesuré |
| `/site-internet-salon-de-coiffure` | Existante ; à compléter en phase 4 ; **première vague** ([R] « Validé ») | site internet salon de coiffure | site internet coiffeur ; site internet coiffure ; site internet pour salon de coiffure ; creer un site internet salon de coiffure ; creation site internet coiffeur | Commerciale | Suggest « site internet salon de coiffure » et « site internet coiffure » ; [A] B.2 | non mesuré |
| `/site-internet-boulangerie` | Existante ; à compléter en phase 4 ; **première vague** ([R] « Validé ») | site internet boulangerie | création site internet boulangerie ; site internet pour boulangerie ; site internet boulangerie patisserie | Commerciale | Suggest « site internet boulangerie » ; [A] B.3 | non mesuré |
| `/site-internet-patisserie` | Existante ; seconde vague [P] § 8 | site internet patisserie | site web patisserie ; site internet patissier ; template site web patisserie | Commerciale | Suggest « site internet patisserie » et « site web patisserie ». La forme accentuée figure seulement dans sa propre liste, sans autre suggestion. | non mesuré |
| `/site-internet-fleuriste` | Existante ; seconde vague [P] § 8 | site internet fleuriste | création site internet fleuriste ; site internet pour fleuriste ; site internet fleurs | Commerciale | Suggest « site internet fleuriste » | non mesuré |
| `/site-internet-entreprise-nettoyage` | Existante ; seconde vague [P] § 8 | site internet entreprise de nettoyage | site internet nettoyage ; site web entreprise de nettoyage ; site web nettoyage | Commerciale | Suggest « site internet nettoyage » et « site internet société de nettoyage » | non mesuré |
| `/site-internet-restaurant` | Existante ; seconde vague [P] § 8 | site internet restaurant | création site internet restaurant ; site internet pour restaurant ; site internet restaurant exemple | Commerciale | Suggest « site internet restaurant » ; [02] § 8.2 n° 2 | non mesuré |
| `/site-internet-dentiste` | Existante ; **réglementée**, seconde vague au statut « Proposé » [R] ; aucune promesse de visibilité [P] § 8 | site internet dentiste | site internet cabinet dentaire ; création site internet dentiste ; site internet dentaire | Commerciale | Suggest « site internet dentiste » et « site internet dentaire » | non mesuré |
| `/site-internet-avocat` | Existante ; **réglementée**, seconde vague au statut « Proposé » [R] ; aucune promesse de visibilité [P] § 8 | site internet avocat | site internet cabinet d avocat ; création site internet avocat ; site internet avocat déontologie | Commerciale | Suggest « site internet avocat » | non mesuré |
| `/site-internet-reparation-informatique` | Existante ; non prioritaire [P] § 8 | site internet réparateur informatique | site web service informatique ; site web entreprise informatique ; site web informatique | Commerciale | **Aucune suggestion observée** (préfixes `site internet réparateur informatique`, `site internet réparation` : listes vides). Modèle « site internet pour [métier] » de [02] § 8.1 n° 3. | non mesuré |
| `/site-internet-architecte-interieur` | Existante ; non prioritaire [P] § 8 | site internet architecte d'intérieur | site web architecte d intérieur ; site internet architecture d intérieur ; création site internet architecte ; site internet pour architecte | Commerciale | Suggest « site internet architecte » | non mesuré |
| `/site-internet-agence-immobiliere` | Existante ; non prioritaire [P] § 8 | site internet agence immobilière | site internet pour agence immobilière ; création site internet agence immobilière ; site internet agent immobilier ; site internet pour agent immobilier | Commerciale | Suggest « site internet agence immobilière » | non mesuré |

Mise à jour du 10 novembre 2026 (tâche 0.7) : les 12 pages portent leur mot-clé principal dans le title, le H1 et le premier paragraphe. Les H1 des pages dentiste et avocat citent désormais le métier. Les mots-clés ne changent pas.

Remarques :
- Pour la page avocat, Google suggère aussi « site internet avocat déontologie » et « site internet avocat ordre ». Le premier est gardé : il rejoint la vérification des règles de [P] § 8.
- « prix site internet avocat » est suggéré, mais n'est pas attribué. Il pousserait la page avocat vers un angle prix, avant la vérification prévue.
- La page réparation informatique n'a aucun mot-clé principal observé. C'est le mot-clé le plus fragile de la carte.
- Ses secondaires sont observés sous `site web informatique` et `site web dépannage informatique`. « site web informatique » reste ambigu : il peut viser un site sur l'informatique en général.

### 2.4 Pages légales

Mot-clé de navigation de marque, construit à partir du nom de la page. Aucune suggestion n'existe pour « sitekept » (liste vide). Search Console ne relève que des variantes de marque [05].

| URL | Statut | Mot-clé principal | Mots-clés secondaires | Intention | Origine du mot-clé principal | Volume |
|---|---|---|---|---|---|---|
| `/cgv` | Prévue ; phase 5, après relecture juridique [P] § 10 ; [R] « Ouvert » | cgv sitekept | conditions générales de vente sitekept ; sitekept conditions de paiement ; sitekept résiliation du suivi | Navigationnelle | Mot-clé de navigation construit (marque + nom de page), non observé | non mesuré |
| `/terms` | Existante ; à réécrire en phase 5 (devient les CGU) [P] § 10 | cgu sitekept | conditions générales d'utilisation sitekept ; sitekept conditions d'utilisation du site ; sitekept règles d'usage du site | Navigationnelle | Mot-clé de navigation construit (marque + nom de page), non observé | non mesuré |
| `/privacy` | Existante | politique de confidentialité sitekept | sitekept données personnelles ; sitekept cookies ; sitekept rgpd | Navigationnelle | Mot-clé de navigation construit (marque + nom de page), non observé | non mesuré |
| `/mentions-legales` | Existante ; à finaliser après création de l'entreprise [R] « Ouvert » ; [P] § 2 | mentions légales sitekept | sitekept éditeur du site ; sitekept hébergeur ; sitekept siret | Navigationnelle | Mot-clé de navigation construit (marque + nom de page), non observé | non mesuré |

Total : 7 pages générales, 11 articles, 12 pages métier, 4 pages légales. Soit **34 lignes**, dont 2 pages prévues (`/offres`, `/cgv`).

---

## 3. Contrôle de cannibalisation

### 3.1 Règle de comparaison

- Comparaison insensible à la casse, aux accents et à la ponctuation (apostrophe = espace).
- Contrôle 1 : aucun mot-clé principal n'apparaît deux fois.
- Contrôle 2 : aucun mot-clé principal d'une page n'est principal ou secondaire d'une autre page.
- Contrôle 3 : aucun mot-clé, principal ou secondaire, n'est attribué à deux pages.
- Résultat des trois contrôles : **aucun doublon**. Les recoupements de sens restants sont arbitrés en 3.3.

### 3.2 Liste triée des 34 mots-clés principaux

| # | Mot-clé principal | Page |
|---|---|---|
| 1 | avoir son propre site internet | `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` |
| 2 | cgu sitekept | `/terms` |
| 3 | cgv sitekept | `/cgv` |
| 4 | checklist seo | `/blog/checklist-seo-avant-mise-en-ligne` |
| 5 | création site internet professionnel | `/` |
| 6 | créer un site internet rapidement | `/blog/site-web-rapide-pme-independant` |
| 7 | devis site internet | `/offres` |
| 8 | exemple de site internet professionnel | `/realization` |
| 9 | guide création site internet | `/blog` |
| 10 | location site internet | `/blog/louer-ou-posseder-son-site-internet` |
| 11 | mentions légales sitekept | `/mentions-legales` |
| 12 | mise en ligne site internet | `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept` |
| 13 | modèle site internet | `/templates` |
| 14 | mon site n'apparaît pas sur Google | `/blog/site-sans-referencement-peut-devenir-inutile` |
| 15 | optimisation seo et geo | `/blog/site-optimise-seo-geo` |
| 16 | politique de confidentialité sitekept | `/privacy` |
| 17 | pourquoi le référencement d'un site est important | `/blog/pourquoi-optimisation-referencement-naturel-importante` |
| 18 | prix site internet | `/tarifs` |
| 19 | récupérer son site internet | `/blog/recuperer-son-site-web-chez-un-prestataire` |
| 20 | référencement seo et geo | `/seo-geo` |
| 21 | seo et geo c'est quoi | `/blog/qu-est-ce-que-le-seo-et-le-geo` |
| 22 | site internet agence immobilière | `/site-internet-agence-immobiliere` |
| 23 | site internet architecte d'intérieur | `/site-internet-architecte-interieur` |
| 24 | site internet avocat | `/site-internet-avocat` |
| 25 | site internet boulangerie | `/site-internet-boulangerie` |
| 26 | site internet dentiste | `/site-internet-dentiste` |
| 27 | site internet entreprise de nettoyage | `/site-internet-entreprise-nettoyage` |
| 28 | site internet fleuriste | `/site-internet-fleuriste` |
| 29 | site internet patisserie | `/site-internet-patisserie` |
| 30 | site internet plombier | `/site-internet-plombier` |
| 31 | site internet réparateur informatique | `/site-internet-reparation-informatique` |
| 32 | site internet restaurant | `/site-internet-restaurant` |
| 33 | site internet salon de coiffure | `/site-internet-salon-de-coiffure` |
| 34 | site internet sans abonnement | `/blog/posseder-son-site-sans-abonnement` |

34 mots-clés principaux, 34 pages, aucune répétition.

### 3.3 Recoupements de sens arbitrés

Les chaînes sont toutes différentes. Certaines partagent pourtant une tête de requête. Chaque cas désigne la page cible et la page qui renvoie par un lien.

Têtes relues une à une, côté offre : prix, tarif, coût, combien coûte, forfait, devis, vitrine, agence, abonnement, location, résiliation, maintenance, local.

Côté contenu : référencement, visible, être … sur Google, comment, pourquoi, créer, création, guide, template, modèle, exemple, entreprise, artisan, livraison, mise en ligne, checklist.

**Règle générale : le mot qui accompagne la tête décide de la page.** Les tableaux ci-dessous appliquent cette règle, tête par tête.

« site web » et « site internet » sont traités comme synonymes. Ils ne départagent jamais deux pages.

**A. Prix, coût, devis et forfait (trio `/`, `/offres`, `/tarifs`)**

| Recoupement | Page cible | Page qui renvoie par lien | Raison |
|---|---|---|---|
| Toute requête contenant « prix », « tarif », « coût » ou « combien coûte » | `/tarifs`, seule | `/`, `/offres`, les pages métier et les articles renvoient vers `/tarifs` | Une seule page porte l'intention prix [A] C.3. Aucune autre page ne reçoit ces mots. |
| « création site internet professionnel » (`/`) et « création site internet prix » (`/tarifs`) | `/` pour le service ; `/tarifs` pour le prix | `/` renvoie vers `/tarifs` | Application de la règle « prix » ci-dessus. |
| « prix site internet » (`/tarifs`) et « devis site internet » (`/offres`) | `/tarifs` pour comprendre ; `/offres` pour demander | `/tarifs` renvoie vers `/offres` ; `/offres` renvoie vers `/tarifs` pour le détail | [P] § 9 range `/tarifs` en guide sous « Ressources ». `/offres` porte les CTA [P] § 4. |
| « forfait site internet » (`/offres`) et « tarif site internet vitrine » (`/tarifs`) | `/offres` pour « forfait » ; `/tarifs` pour « tarif » | `/tarifs` renvoie vers `/offres` | Google suggère « tarif site internet » sous le préfixe « forfait site internet ». Les deux pages doivent donc se citer. |
| « vitrine » : « devis site internet vitrine » (`/offres`), « prix site internet vitrine » et « tarif site internet vitrine » (`/tarifs`), « template site vitrine » et « exemple site vitrine » (`/templates`), « exemple site vitrine entreprise » (`/realization`) | devis → `/offres` ; prix, tarif → `/tarifs` ; template, exemple → `/templates` ; exemple + entreprise → `/realization` | `/templates` et `/realization` renvoient vers `/offres` | « site vitrine » seul n'est attribué à aucune page. |
| « artisan » : « création site internet artisan », « site internet pour artisan », « agence web artisan » (`/`) et « prix site internet artisan » (`/tarifs`) | `/` pour le service ; `/tarifs` pour le prix | `/` renvoie vers `/tarifs` | Application de la règle « prix ». |
| Comparaison « paiement unique ou abonnement », déjà présente sur `/tarifs` (`src/app/(marketing)/tarifs/page.tsx:121-127`, `:167-169`, `:435`) | Duel `/tarifs` contre l'article louer : « abonnement » seul, « avec abonnement », « abonnement mensuel », « louer » et « location » → article `louer-ou-posseder-son-site-internet` ; « prix » → `/tarifs`. Les formes « sans abonnement » et « résiliation abonnement » relèvent du bloc B. | La section de `/tarifs` renvoie vers l'article ; l'article renvoie vers `/tarifs` pour les prix | `/tarifs` ne reçoit aucun mot-clé avec « abonnement ». L'article louer ne reçoit aucun mot-clé avec « prix ». |
| « combien coûte un site internet par mois » (article 8 du plan éditorial, `docs/seo/04-blog-plan.md` § 3.8) | **Exception à la règle « prix ».** Article 8 (`combien-coute-un-site-internet-par-mois`), pour la forme « par mois » seulement. `/tarifs` garde « prix », « tarif », « combien coûte un site internet » et « par an ». | L'article 8 renvoie vers `/tarifs` | Décision de Joseph, 10 novembre 2026 : le coût récurrent n'est pas le prix d'achat. L'article n'affiche aucun prix en toutes lettres. Il renvoie vers `/tarifs` pour le détail. |
| « agence » : « agence web artisan » (`/`), « agence seo et geo » (`/seo-geo`) et « site internet agence immobilière » (page agence immobilière) | `/` pour la création de site ; `/seo-geo` pour le référencement ; la page métier quand « agence » désigne le client (agence immobilière) | `/` renvoie vers `/seo-geo` | Le mot qui suit « agence » (web, seo) désigne deux services différents. |
| « local » : « campagne google ads locale » (`/offres`) et « référencement seo local » (`/seo-geo`) | `/offres` pour la publicité payante ; `/seo-geo` pour le référencement naturel | Chaque page renvoie à l'autre | Le même mot qualifie deux services différents. |
| « création site internet » seul | Aucune page | — | [02] § 8.1 déconseille de le viser de front. Il n'est attribué à personne. |
| « offre site internet » | Aucune page | — | Non observé dans les suggestions. Le mot « offres » reste le nom de la page, pas un mot-clé. |
| « devis » comme CTA sur toutes les pages | `/offres` | Les CTA « Demander un devis » des autres pages ouvrent le tunnel [P] § 7 | Un bouton n'est pas un ciblage. Seule `/offres` vise la requête. |

**B. Abonnement, location, résiliation et propriété**

| Recoupement | Page cible | Page qui renvoie par lien | Raison |
|---|---|---|---|
| « site internet sans abonnement » (article posséder) et « abonnement site internet », « site internet avec abonnement » (article louer) | Article `posseder-son-site-sans-abonnement` pour « sans » ; article `louer-ou-posseder-son-site-internet` pour « avec » et « abonnement » seul | Chaque article renvoie à l'autre | Le premier défend la propriété. Le second compare les deux modèles. |
| « location site internet », « louer un site internet », « location site web » | Article louer, seul | Les articles posséder et 100 % renvoient vers l'article louer | Aucune autre page ne reçoit « louer » ou « location ». |
| « site web abonnement mensuel » (article louer) et « maintenance site internet » (`/offres`) | Article louer pour la location de site ; `/offres` pour le suivi | L'article louer renvoie vers `/offres` (suivi facultatif) | Le suivi à 65 €/mois n'est pas une location : le site reste au client [R], [P] § 3. |
| « résiliation abonnement site internet » (article posséder) et « résiliation contrat site internet » (article récupérer) | Article posséder pour l'abonnement ; article récupérer pour le contrat et la reprise | L'article posséder renvoie vers l'article récupérer | L'un traite du choix, l'autre de la sortie concrète. |
| « sitekept résiliation du suivi » (`/cgv`) et les deux mots-clés « résiliation » ci-dessus | `/cgv` pour la requête avec la marque ; les articles pour les requêtes sans marque | Les articles ne renvoient pas vers `/cgv` pour ce sujet | La marque change l'intention : le visiteur cherche les règles de Sitekept. |
| « avoir son propre site internet » (article 100 %) et « site internet sans abonnement » (article posséder) | Article 100 % pour la propriété ; article posséder pour l'abonnement | L'article 100 % renvoie vers l'article posséder | Deux angles d'un même argument ; aucun ne reprend le mot-clé de l'autre. |
| Promesse « sans abonnement » des cinq articles de [P] § 5.3 | — | Chaque article renvoie vers `/offres` | [P] § 5.3 impose un passage sur le suivi facultatif. Le mot-clé reste, le message s'ajuste. |

**C. Référencement, visibilité, SEO et GEO**

| Recoupement | Page cible | Page qui renvoie par lien | Raison |
|---|---|---|---|
| « seo et geo » seul | `/seo-geo` (page pilier) | Les trois articles SEO/GEO renvoient vers `/seo-geo` | Requête de tête non attribuée. Chaque page vise une variante. |
| « référencement seo et geo » (`/seo-geo`), « optimisation seo et geo » (article optimisé), « seo et geo c'est quoi », « différence seo et geo », « seo geo signification » (article définition) | Pilier : service ; article optimisé : méthode ; article définition : explication | `/seo-geo` renvoie vers les deux articles | Trois intentions différentes sous le même thème. |
| « référencement … » : « référencement seo ia », « référencement seo local », « référencement naturel site web » (`/seo-geo`) et « référencement seo définition », « référencement naturel définition » (article définition) | Règle limitée aux requêtes qui **commencent** par « référencement seo » ou « référencement naturel » : avec « définition » → article définition ; sinon → `/seo-geo` | L'article définition renvoie vers `/seo-geo` ; `/seo-geo` renvoie vers l'article pour les bases | L'article optimisé ne reçoit aucun mot-clé « référencement … ». « pourquoi le référencement… » et « référencé » relèvent des lignes suivantes. |
| « pourquoi le référencement d'un site est important » (article pourquoi) et « référencement seo et geo » (`/seo-geo`) | Article pourquoi pour la justification ; `/seo-geo` pour la méthode | L'article pourquoi renvoie vers `/seo-geo` | « pourquoi le référencement » signale une question de fond, pas une demande de service. |
| « être … sur Google » : « etre référencé sur google », « comment etre référencé sur google », « etre mieux référencé sur google » (article pourquoi) et « comment etre visible sur google », « etre present sur google », « etre vu sur google » (article optimisé) | Règle limitée aux formes « être … sur Google » : « être référencé » → article pourquoi ; « être visible », « être présent », « être vu » → article optimisé | Les deux articles se citent | Variantes proches ; à ne pas fusionner dans un même titre. |
| « Google Maps » : « comment etre plus visible sur google maps » (article 1 du plan éditorial) et « comment etre visible sur google » (article optimisé) | Règle limitée aux requêtes qui contiennent « Maps » : article 1 (fiche Google Entreprise). L'article optimisé garde « comment etre visible sur google », sans « maps ». | Les deux articles se citent | « Maps » désigne un lieu précis et un geste précis : la fiche. Règle de `docs/seo/04-blog-plan.md` § 4.2, ajoutée au bloc C le 10 novembre 2026. L'article 1 n'est pas encore publié : le lien s'ajoute à sa publication. |
| « comment … » et « pourquoi … » : tournures de question présentes sur six pages | Le verbe qui suit décide : « comment créer » → `/blog` ; « comment avoir » → article 100 % ; « comment retrouver » → article récupérer ; « comment être visible » → article optimisé ; « comment être référencé » et « pourquoi le référencement » → article pourquoi ; « pourquoi mon site n'apparaît pas » → article sans référencement | Liens déjà fixés dans les autres lignes | « comment » et « pourquoi » seuls ne désignent aucune page. |
| « visible » : « site non visible sur google » (article sans référencement) et « comment etre visible sur google » (article optimisé) | Article sans référencement pour le constat d'un problème ; article optimisé pour la marche à suivre | L'article sans référencement renvoie vers l'article optimisé | Le premier répond à « pourquoi ça ne marche pas », le second à « comment faire ». |
| Constat d'invisibilité : « mon site n'apparaît pas sur Google », « site non visible sur google », « site introuvable sur google » | Article sans référencement, seul | Les articles optimisé et pourquoi renvoient vers lui | Aucune autre page ne reçoit une formulation de problème. |
| « mon site n'apparaît pas sur Google » (article sans référencement) et « checklist seo » (article checklist) | Article sans référencement pour le problème ; checklist pour la vérification | L'article sans référencement renvoie vers la checklist | Le premier constate, le second outille. |
| « checklist seo », « checklist seo on page », « checklist seo 2026 », « checklist seo refonte site » et les autres mots « seo » (`/seo-geo`, articles optimisé et définition) | Article checklist pour tout mot contenant « checklist » | `/seo-geo` renvoie vers la checklist | « checklist » signale un outil de vérification, pas une explication. |
| « mise en ligne site internet » (article livraison) et « checklist seo » avant mise en ligne | Article livraison pour la mise en ligne | La checklist renvoie vers l'article livraison | La checklist vise « checklist seo », pas « mise en ligne ». |
| « référencement seo local » (`/seo-geo`) et visibilité locale | `/seo-geo` | Les pages métier de la première vague renvoient vers `/seo-geo` | Les pages dentiste et avocat n'y renvoient pas sans vérification des règles [P] § 8. |

**D. Créer, création, rapidité et livraison**

| Recoupement | Page cible | Page qui renvoie par lien | Raison |
|---|---|---|---|
| « guide création site internet », « conseil création site internet », « étapes création site web », « comment créer un site internet pour une entreprise » (`/blog`), « création site internet professionnel » (`/`) et « créer un site internet rapidement » (article rapide) | `/blog` pour s'informer ; `/` pour confier la création ; article rapide pour le délai | `/blog` renvoie vers `/` et vers l'article rapide ; l'article rapide renvoie vers `/` | « guide », « conseil », « étapes » et « comment créer » signalent une recherche d'information, pas d'un prestataire. |
| « création site internet … » ou « créer un site internet … » **précédé** de « guide », « conseil », « étapes » ou « comment » → `/blog` (ligne précédente). Sinon, suivi d'un mot : professionnel, artisan (`/`) ; prix (`/tarifs`) ; rapide, rapidement (article rapide) ; sans abonnement (article posséder) ; un métier, par exemple « creer un site internet salon de coiffure » (page métier) | La page du mot qui suit | Chaque page renvoie vers `/` ; `/` renvoie vers `/tarifs` et `/offres` | Le mot qui suit précise le besoin. |
| « creation site internet rapide » (article rapide) et « création site internet professionnel » (`/`) | Article rapide | L'article rapide renvoie vers `/` | Le délai est un sujet d'article ; la promesse « 48 h » garde sa précision [P] § 3. |
| « site internet livraison rapide » (article rapide) et « livraison site internet » (article livraison) | Article rapide pour la vitesse ; article livraison pour le déroulé | Chaque article renvoie à l'autre | Chaque mention de 48 h garde la précision « après réception de vos éléments » [P] § 3. |

**E. Modèles, exemples, entreprises et pages métier**

| Recoupement | Page cible | Page qui renvoie par lien | Raison |
|---|---|---|---|
| « template » et « modèle » génériques (`/templates`) et « template site web patisserie » (page pâtisserie) | `/templates` pour le terme générique ; page pâtisserie pour le métier | La page pâtisserie renvoie vers sa démo et vers `/templates` | Le terme métier reste sur la page métier. |
| « exemple de site internet professionnel » (`/realization`) et « site internet professionnel » (`/`) | `/realization` pour « exemple » ; `/` pour le service | `/` renvoie vers `/realization` | Le mot « exemple » signale une envie de voir, pas d'acheter tout de suite. |
| « exemple site vitrine » (`/templates`) et « exemple site vitrine entreprise » (`/realization`) | `/templates` pour les démonstrations ; `/realization` pour les sites livrés | Chacune renvoie à l'autre | Les templates sont des démonstrations, pas le livrable [R]. |
| « entreprise » : « exemple de site web entreprise » (`/realization`), « comment créer un site internet pour une entreprise » (`/blog`), « site web entreprise informatique » (page réparation informatique), « site web entreprise de nettoyage » (page nettoyage) | exemple → `/realization` ; comment créer → `/blog` ; un métier → page métier | Les pages métier renvoient vers `/realization` | Le mot qui accompagne « entreprise » décide. |
| « site internet restaurant exemple » (page restaurant) et les « exemple … » de `/realization` et `/templates` | Page restaurant | `/templates` et la démo `/restaurant-bistrot` renvoient vers la page restaurant | Un métier nommé l'emporte sur « exemple ». La démo est en `noindex` (partie 4). |
| « site internet boulangerie patisserie » (page boulangerie) et « site internet patisserie » (page pâtisserie) | Page boulangerie pour le terme combiné | La page boulangerie renvoie vers la page pâtisserie | La boulangerie est en première vague [R]. |
| « cabinet » : « site internet cabinet dentaire » (page dentiste) et « site internet cabinet d avocat » (page avocat) | Le métier qui suit « cabinet » décide | — | Pages réglementées : aucun lien croisé ni promesse de visibilité [P] § 8. |
| « site internet chauffagiste » (page plombier) | Page plombier | — | Il n'existe pas de page chauffagiste. Google associe les deux métiers. |
| « création site internet artisan », « site internet pour artisan » (`/`) et pages métier | `/` pour le terme générique « artisan » | Les pages métier renvoient vers `/` et `/offres` | Chaque page métier garde son métier précis. |

**F. Pages légales**

| Recoupement | Page cible | Page qui renvoie par lien | Raison |
|---|---|---|---|
| « sitekept » suivi du nom d'une page légale : « cgv », « conditions générales de vente » (`/cgv`) ; « cgu », « conditions générales d'utilisation » (`/terms`) ; « politique de confidentialité », « données personnelles », « cookies », « rgpd » (`/privacy`) ; « mentions légales », « éditeur », « hébergeur », « siret » (`/mentions-legales`) | La page dont le nom accompagne la marque | Les quatre pages se citent dans le pied de page | « conditions générales » est commun à `/cgv` et `/terms` ; « de vente » et « d'utilisation » les départagent [P] § 10. |

---

## 4. Exclues de la carte

Ces pages ne reçoivent aucun mot-clé. Elles ne doivent pas être indexées.

| Page ou groupe | Raison | Preuve |
|---|---|---|
| 13 démos et leurs sous-pages (55 fichiers `page.tsx` sous `src/app/(demos)/`) : `/boulangerie`, `/fleuriste`, `/ordinateur`, `/pattiserie`, `/dentiste`, `/plombier-chauffagiste`, `/salon-coiffure`, `/menage-nettoyage`, `/restaurant-bistrot`, `/architecte-interieur`, `/cabinet-avocat`, `/avocate-tel-aviv`, `/agence-immobiliere` | En-tête `X-Robots-Tag: noindex, follow` | `src/middleware.ts:21-22` ; liste des slugs `src/content/admin-template-catalog.ts:21-35`, reprise par `src/lib/public-template-routes.ts:3` et `:21-24` ; exclues du sitemap `src/app/sitemap.ts:9-12` |
| `/je` | `noindex` par les métadonnées, et par l'en-tête du middleware | `src/app/(projects)/je/layout.tsx:15-23` (bloc `robots`, `index: false`) ; `src/lib/public-template-routes.ts:15` (`UNLISTED_DEMO_SLUGS = ["je"]`) |
| `/admin-templates-7q4p9s2m` | Page d'administration, `noindex, nofollow` | `src/app/admin-templates-7q4p9s2m/page.tsx:10-16` |
| `/template` | Redirection permanente vers `/templates` | `src/app/(marketing)/template/page.tsx:4` (`permanentRedirect("/templates")`) |

Remarque sur `/faq` : [P] § 9 cite `/faq` dans le footer. Aucune route `/faq` n'existe dans `src/app/`. Elle n'est donc pas cartographiée ; elle pourra l'être si elle est créée.

---

## 5. Mots-clés réservés au futur plan éditorial (tâche 0.8)

Repérés pendant la recherche, mais sans page aujourd'hui. Ils ne sont attribués à aucune page de la partie 2.

**Exception aux règles du § 3.3.** La plupart de ces mots tombent sous une règle générale du § 3.3, indiquée en dernière colonne. Ils n'en suivent pas la page cible pour l'instant. L'arbitrage final se fera en tâche 0.8.

| Mot-clé | Thème | Origine | Règle du § 3.3 concernée (exception provisoire) |
|---|---|---|---|
| combien coûte un site internet par mois | Prix, abonnement | Suggest « combien coute un site internet » et « combien coûte un site » | « prix, coût, combien coûte » → `/tarifs` (bloc A) |
| salon de coiffure sans site internet | Première vague, coiffure | Suggest « site internet salon de coiffure » | Mot d'un métier → page métier (blocs D et E) |
| comment etre plus visible sur google maps | Visibilité locale | Suggest « etre visible sur google map » | « être visible » → article optimisé (bloc C) ; « local » (bloc A) |
| fiche google entreprise | Visibilité locale | Suggest « fiche google entreprise » | Aucune règle ; « entreprise » (bloc E) ne vise que exemple, comment créer et métiers |
| référencement local pour petites entreprises | Visibilité locale | Suggest « référencement local » | Hors de la règle « référencement seo / naturel » (bloc C), mais même thème que `/seo-geo` ; « local » (bloc A) |
| aide financière création site internet | Prix, financement | Suggest « guide création site internet » et « aide création site internet » | « création site internet » précédé d'un mot absent de la liste du bloc D : aucune page désignée |
| hébergement site internet prix | Maintenance, coûts récurrents | Suggest « hébergement site internet » et « location site internet » | « prix » → `/tarifs` (bloc A) ; proche de « maintenance site internet » (`/offres`) |
| campagne google ads prix | Campagnes | Suggest « campagne google ads » | « prix » → `/tarifs` (bloc A) ; même tête que « campagne google ads locale » (`/offres`) |

Avant d'en faire des pages, 0.8 devra vérifier qu'aucun ne recoupe un mot-clé de la partie 2.

Décisions du 10 novembre 2026, reportées en 3.3 :
- « combien coûte un site internet par mois » : retenu pour l'article 8, exception à la règle « prix » (bloc A) ;
- « comment etre plus visible sur google maps » : retenu pour l'article 1, règle « Maps » (bloc C).
