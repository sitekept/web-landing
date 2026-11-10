# 0.7 — Optimisation des pages existantes

État au 10 novembre 2026. Code : branche `feat/offre-v2` (HEAD `0dfde33`), build local `next start` sur le port 3200. Rien n'est commité.

Sources citées :
- **[02]** = `docs/seo/02-keyword-map.md` ;
- **[04]** = `docs/seo/04-blog-plan.md` ;
- **[06]** = `docs/seo/06-geo.md` ;
- **[R]** = `docs/offre-v2/registre-decisions.md` ;
- **[P]** = `docs/offre-v2/plan-v2.md`.

---

## 1. Périmètre et méthode

22 pages traitées :
- 4 pages générales : `/templates`, `/realization`, `/seo-geo`, `/blog` ;
- 6 articles hors plan v2 § 5.3 ;
- 12 pages `/site-internet-*`.

Exclus : la home, `/tarifs`, les pages légales, le contenu des cinq articles du § 5.3, et tout texte de prix ou de délai.

`/faq` n'existe pas comme route : `curl localhost:3200/faq` répond 404 et `src/app/` ne contient aucun dossier `faq`. Elle n'a pas été créée. Le dossier `src/app/(demos)/menage-nettoyage/faq/` est une démonstration en `noindex`, sans rapport.

### 1.1 Définitions utilisées

- **Premier paragraphe** : le premier `<p>` de texte après le H1. Pour un article, c'est l'introduction. La ligne de signature et de dates n'est pas un paragraphe.
- **Mot-clé présent** : les mots du mot-clé principal de [02] apparaissent dans l'ordre. Un mot grammatical peut s'intercaler (« pour », « de », « d' », « un », « le »).
- **Variantes acceptées** : le pluriel, et « site web » pour « site internet » ([02] § 3.3).
- **Formes verbatim** : « seo et geo c'est quoi », « mon site n'apparaît pas sur Google » et « checklist seo » apparaissent mot pour mot. Les autres pages utilisent une variante du type « site internet pour plombier » ou « modèles de sites internet ».
- **Longueurs** : en caractères. Le script compte le texte du `<title>` et de la balise `description` du HTML servi.

Le script est `scratchpad/t07/audit2.py`. Il lit les pages du build local et signale tout écart.

### 1.2 Ce qui a été laissé tel quel

Les textes de prix et de délai ne sont pas touchés. Cela concerne :
- les 12 descriptions des pages métier (« 500 € », « 48h », « dès 500€ ») ;
- la description de `/templates` (« en 48h ») et le paragraphe d'introduction de la galerie, dans `templates/page.tsx` ;
- les paragraphes « Combien coûte un site » et « tenir les 48h » de `[metier]/page.tsx`.

Les 22 descriptions respectent déjà 140 à 155 caractères et sont toutes différentes. Aucune n'a été modifiée.

---

## 2. Tableau de preuves

Mesuré sur le build local, 22 pages. Résultat : **22 pages sur 22 conformes**, aucun title ni aucune description en double, un seul H1 par page.

Règles : title ≤ 60 ; description 140 à 155 ; H1 ≤ 70 ; mot-clé dans le title, le H1 et le premier paragraphe.

| Page | Mot-clé principal | Title | Desc. | H1 | Mot-clé dans title | H1 | 1er §  |
|---|---|---|---|---|---|---|---|
| `/templates` | modèle site internet | 47 | 141 | 58 | oui | oui | oui |
| `/realization` | exemple de site internet professionnel | 52 | 148 | 60 | oui | oui | oui |
| `/seo-geo` | référencement seo et geo | 60 | 140 | 70 | oui | oui | oui |
| `/blog` | guide création site internet | 57 | 148 | 56 | oui | oui | oui |
| `/blog/site-web-rapide-pme-independant` | créer un site internet rapidement | 57 | 147 | 69 | oui | oui | oui |
| `/blog/site-optimise-seo-geo` | optimisation seo et geo | 55 | 146 | 64 | oui | oui | oui |
| `/blog/qu-est-ce-que-le-seo-et-le-geo` | seo et geo c'est quoi | 55 | 142 | 43 | oui | oui | oui |
| `/blog/site-sans-referencement-peut-devenir-inutile` | mon site n'apparaît pas sur Google | 58 | 143 | 69 | oui | oui | oui |
| `/blog/pourquoi-optimisation-referencement-naturel-importante` | pourquoi le référencement d'un site est important | 60 | 148 | 68 | oui | oui | oui |
| `/blog/checklist-seo-avant-mise-en-ligne` | checklist seo | 56 | 149 | 69 | oui | oui | oui |
| `/site-internet-plombier` | site internet plombier | 59 | 148 | 40 | oui | oui | oui |
| `/site-internet-salon-de-coiffure` | site internet salon de coiffure | 47 | 151 | 36 | oui | oui | oui |
| `/site-internet-boulangerie` | site internet boulangerie | 41 | 150 | 30 | oui | oui | oui |
| `/site-internet-patisserie` | site internet patisserie | 40 | 151 | 29 | oui | oui | oui |
| `/site-internet-fleuriste` | site internet fleuriste | 39 | 152 | 28 | oui | oui | oui |
| `/site-internet-entreprise-nettoyage` | site internet entreprise de nettoyage | 53 | 153 | 42 | oui | oui | oui |
| `/site-internet-restaurant` | site internet restaurant | 54 | 155 | 29 | oui | oui | oui |
| `/site-internet-dentiste` | site internet dentiste | 58 | 143 | 47 | oui | oui | oui |
| `/site-internet-avocat` | site internet avocat | 47 | 155 | 36 | oui | oui | oui |
| `/site-internet-reparation-informatique` | site internet réparateur informatique | 53 | 150 | 42 | oui | oui | oui |
| `/site-internet-architecte-interieur` | site internet architecte d'intérieur | 52 | 149 | 41 | oui | oui | oui |
| `/site-internet-agence-immobiliere` | site internet agence immobilière | 48 | 151 | 37 | oui | oui | oui |

Avant la tâche, sur le même script (build du commit `0dfde33`), 22 pages sur 22 avaient au moins un écart.

Le premier paragraphe manquait le mot-clé sur les 22 pages.

Le title le manquait sur 8 pages : `/realization`, `/seo-geo`, `/blog` et 5 articles. Le H1 le manquait sur 11 pages. Cinq H1 dépassaient 70 caractères.

Trois mesures sont exactement à la limite : title de `/seo-geo` (60), title de l'article « pourquoi » (60), H1 de `/seo-geo` (70).

---

## 3. Titles et H1 : avant → après

Seules les lignes modifiées figurent ici. Longueur entre parenthèses.

| Page | Title | H1 |
|---|---|---|
| `/templates` | inchangé (47) | « Templates prêts à adapter à votre activité. » (43) → « Modèles de site internet prêts à adapter à votre activité. » (58) |
| `/realization` | « Nos réalisations \| Sites web livrés par Sitekept » (48) → « Exemples de sites internet professionnels \| Sitekept » (52) | « Nos Réalisations » (16) → « Nos réalisations : exemples de sites internet professionnels » (60) |
| `/seo-geo` | « SEO et GEO : rendre votre site visible \| Sitekept » (49) → « Référencement SEO et GEO : rendre un site visible \| Sitekept » (60) | « Comprendre le référencement naturel et ce qu'un site doit faire […] » → « Référencement SEO et GEO : ce qu'un site doit faire pour être visible. » (70) |
| `/blog` | « Blog Sitekept \| Guides création de site et SEO » (46) → « Guide de création de site internet et SEO \| Blog Sitekept » (57) | « Des pages utiles pour comprendre l'offre avant d'acheter. » (57) → « Guide de création de site internet : comprendre l'offre. » (56) |
| `site-web-rapide-pme-independant` | « Site web rapide à lancer pour PME et indépendant \| Sitekept » (59) → « Créer un site internet rapidement pour une PME \| Sitekept » (57) | (77) → « Créer un site internet rapidement : pourquoi cela compte pour une PME » (69) |
| `site-optimise-seo-geo` | « Site optimisé SEO et GEO : le guide \| Sitekept » (46) → « Optimisation SEO et GEO d'un site : le guide \| Sitekept » (55) | (101) → « Optimisation SEO et GEO : rester visible sur Google et dans l'IA » (64) |
| `qu-est-ce-que-le-seo-et-le-geo` | « Qu'est-ce que le SEO et le GEO ? \| Sitekept » (43) → « SEO et GEO, c'est quoi ? Définitions simples \| Sitekept » (55) | « Qu'est-ce que le SEO et le GEO ? » (32) → « SEO et GEO, c'est quoi ? Explication simple » (43) |
| `site-sans-referencement-peut-devenir-inutile` | « Site sans référencement : pourquoi il devient inutile » (53) → « Mon site n'apparaît pas sur Google : pourquoi ? \| Sitekept » (58) | (119) → « Mon site n'apparaît pas sur Google : pourquoi il peut devenir inutile » (69) |
| `pourquoi-optimisation-referencement-naturel-importante` | « Pourquoi le référencement naturel est important \| Sitekept » (58) → « Pourquoi le référencement d'un site est important \| Sitekept » (60) | (96) → « Pourquoi le référencement d'un site est important : ce qu'il apporte » (68) |
| `/site-internet-dentiste` | inchangé (58) | « Site internet pour cabinet dentaire » (35) → « Site internet pour dentiste et cabinet dentaire » (47) |
| `/site-internet-avocat` | inchangé (47) | « Site internet pour cabinet d'avocat » (35) → « Site internet pour avocat et cabinet » (36) |

Autres pages : title et H1 déjà conformes, non modifiés.

Longueur de l'ancien H1 de `/seo-geo` : 84 caractères.

Remarques :
- Le title de `site-sans-referencement…` n'avait pas la marque « Sitekept ». Elle est ajoutée, comme sur les autres articles.
- Le H1 de `/realization` est écrit dans `realization/page.tsx` pour le français. Le libellé du fil d'Ariane reste « Nos réalisations » (`messages/fr.json`, minuscule alignée sur le menu).
- La description de `/realization` lit `realization.description` dans `messages/fr.json`.

---

## 4. Premier paragraphe : phrase modifiée

Une ligne par page. « Avant » et « après » ne citent que la phrase qui a changé.

| Page | Avant | Après |
|---|---|---|
| `/templates` | Cette sélection publique vous donne plusieurs points de départ. | Cette sélection publique de modèles de site internet vous donne plusieurs points de départ. |
| `/realization` | Découvrez nos projets récents qui ont transformé la présence digitale de nos clients. | Découvrez des exemples de site internet professionnel : les projets récents que nous avons livrés à nos clients. |
| `/seo-geo` | Un site n'a de valeur que s'il peut être trouvé et compris. | Le référencement SEO et GEO sert à ce qu'un site soit trouvé et compris. |
| `/blog` | Le blog Sitekept sert d'abord à expliquer notre positionnement : […] | Le blog Sitekept est un guide de création de site internet. Il explique d'abord notre positionnement : […] |
| rapide | Quand une PME ou un indépendant achète un site, le vrai coût ne se limite pas à la facture. | Créer un site internet rapidement compte pour une PME ou un indépendant : le vrai coût d'un site ne se limite pas à la facture. |
| optimisé | Le SEO (search engine optimization) reste essentiel, mais il ne suffit plus […] | L'optimisation SEO et GEO part d'un constat : le SEO (search engine optimization) reste essentiel, mais il ne suffit plus […] |
| définition | Quand on parle de visibilité en ligne, beaucoup d'entreprises pensent d'abord à Google. | SEO et GEO, c'est quoi ? Beaucoup d'entreprises pensent d'abord à Google, mais […] |
| sans référencement | Un site web n'est pas seulement un objet de présentation. | Mon site n'apparaît pas sur Google : quand un site manque de visibilité, il perd une partie essentielle de sa valeur. |
| pourquoi | Il est parfois résumé à une affaire de mots-clés, ce qui est une vision trop courte. | Pourquoi le référencement d'un site est important ? Parce qu'il rend un site trouvable, compréhensible et crédible […] |
| checklist | Cette liste est classée par gravité ; […] | Cette checklist SEO est classée par gravité ; […] |
| plombier | Un site de plombier ne se juge donc pas sur son esthétique, mais sur le temps […] | Un site internet de plombier se juge sur le temps nécessaire pour trouver le numéro […] |
| salon de coiffure | Dans la coiffure, le site joue un rôle que peu de métiers connaissent […] | Le site internet d'un salon de coiffure joue un rôle que peu de métiers connaissent […] |
| boulangerie | Une boulangerie vit de proximité et d'habitude, pas de prospection. | Le site internet d'une boulangerie n'a pas à convaincre : une boulangerie vit de proximité et d'habitude, pas de prospection. |
| pâtisserie | Le site d'une pâtisserie est donc d'abord un portfolio […] | Le site internet d'une pâtisserie est donc un portfolio qui transforme une envie en commande […] |
| fleuriste | Le site doit donc s'organiser autour de ces moments […] | Le site internet d'un fleuriste doit donc s'organiser autour de ces moments […] |
| nettoyage | Un site qui mélange les deux perd les deux. | Un site internet d'entreprise de nettoyage qui mélange les deux perd les deux. |
| restaurant | Un site de restaurant a trois missions, et une seule vraie difficulté. | Un site internet de restaurant a trois missions, et une seule vraie difficulté. |
| dentiste | Le site d'un cabinet dentaire ne vend pas : il rassure. | Le site internet d'un dentiste ne vend pas : il rassure. |
| avocat | Le site d'un avocat n'a pas à vendre […] | Le site internet d'un avocat n'a pas à vendre […] |
| réparation informatique | Le site d'un réparateur informatique a donc un travail que les autres métiers n'ont pas […] | Le site internet d'un réparateur informatique doit lever une inquiétude sur la confidentialité […] |
| architecte d'intérieur | Votre site doit donc supporter ces allers-retours […] | Le site internet d'un architecte d'intérieur doit donc supporter ces allers-retours […] |
| agence immobilière | Une erreur structure la plupart des sites d'agence […] | Une erreur structure la plupart des sites internet d'agence immobilière […] |

Quand un paragraphe modifié dépassait 3 phrases, 25 mots par phrase ou 60 mots, il a été resserré. Cela touche des introductions de pages métier et d'articles. L'introduction de la checklist fait exactement 60 mots.

Ce qui a été retiré pour tenir les limites :
- `plombier` : « ne se juge donc pas sur son esthétique » ;
- `pâtisserie` : « d'abord », et la tournure « avant que la question ne se pose » (voir la note ci-dessous) ;
- `réparation informatique` : « un travail que les autres métiers n'ont pas » ;
- `checklist` : « inaperçue » ;
- `pourquoi` : la phrase sur les mots-clés ;
- `définition` : « C'est logique », « Mais les usages évoluent », « dans ce contexte », et la liste « assistants conversationnels ou interfaces IA qui reformulent les résultats » ;
- `sans référencement` : « Un site web n'est pas seulement un objet de présentation. » ;
- `dentiste` : « avant de décrocher leur téléphone » ;
- `architecte d'intérieur` : « qui arrive sur votre site », et « la question que presque aucun confrère n'ose traiter » devient « une question que peu osent traiter » ;
- `fleuriste` : « qu'il exige ».

Note sur la pâtisserie : la nouvelle phrase dit « avec délais et prix affichés d'avance ». Elle décrit ce que le pâtissier affiche sur son site. Elle ne décrit pas l'offre de Sitekept, et ne dit aucun prix ni délai.

---

## 5. Maillage interne

Les liens sont écrits dans le texte, avec la classe de lien déjà utilisée par le site : `font-medium text-blue-700 underline underline-offset-4` (origine : `[metier]/page.tsx:160`, `seo-geo/page.tsx:420`). Aucune classe nouvelle.

Pour les articles, les paragraphes n'acceptaient que du texte brut. Le gabarit reconnaît maintenant `[libellé](/chemin)` dans un paragraphe (`blog/[slug]/page.tsx:33-60`). Seuls les chemins internes sont reconnus.

Arbitrages du § 3.3 de [02] qui touchent une page du périmètre. « Lien posé » = ajouté par cette tâche ; « déjà là » = existait ; « reporté » = impossible ou hors périmètre.

| Bloc | Arbitrage | État | Preuve (fichier:ligne) |
|---|---|---|---|
| A | Pages métier → `/tarifs` | Déjà là | `[metier]/page.tsx:159` et `:274` |
| A | `/templates` ↔ `/realization` (« exemple site vitrine ») | `/templates` → `/realization` : lien posé. `/realization` → `/templates` : déjà là (bouton) ; lien de texte posé | `templates/page.tsx:120-129` ; `realization/page.tsx:139-150` (bouton déjà en `:114`) |
| A | `/templates` et `/realization` → `/offres` | Reporté : la page `/offres` n'existe pas (phase 2) | — |
| A | `/seo-geo` ↔ `/offres` (« local ») | Reporté : même raison | — |
| C | Trois articles SEO/GEO → `/seo-geo` | Lien posé : optimisé, définition, pourquoi | `site-content.ts:1304`, `:1434`, `:1632` |
| C | `/seo-geo` → article optimisé | Déjà là (bouton) | `seo-geo/page.tsx:295` |
| C | `/seo-geo` → article définition | Lien posé | `seo-geo/page.tsx:353-361` |
| C | `/seo-geo` → article pourquoi | Déjà là (bouton) | `seo-geo/page.tsx:237` |
| C | `/seo-geo` → checklist | Lien posé | `seo-geo/page.tsx:515-524` |
| C | Optimisé ↔ pourquoi (« être … sur Google ») | Liens posés dans les deux sens | `site-content.ts:1304` et `:1632` |
| C | Optimisé et pourquoi → sans référencement | Liens posés | `site-content.ts:1304` et `:1632` |
| C | Sans référencement → optimisé | Lien posé | `site-content.ts:1534` |
| C | Sans référencement → checklist | Lien posé | `site-content.ts:1534` |
| C | Checklist → article livraison | Lien posé | `site-content.ts:2435` |
| C | Pages métier de la première vague → `/seo-geo` | Lien posé sur plombier, salon, boulangerie. Dentiste et avocat n'ont pas ce lien (champ `linksToSeoGeo`) | `[metier]/page.tsx:228-237` ; `metier-pages.ts:68`, `:262`, `:327` |
| D | `/blog` → `/` | Lien posé | `blog/page.tsx:53-64` |
| D | `/blog` → article rapide | Déjà là (carte « Lire la page ») | `blog/page.tsx:70` |
| D | Article rapide → `/` | Lien posé | `site-content.ts:1047` |
| D | Article rapide → article livraison | Lien posé | `site-content.ts:1047` |
| D | Article livraison → article rapide | Reporté : contenu d'un des cinq articles du § 5.3 | — |
| D | Pages métier → `/` | Lien posé sur les 12 pages | `[metier]/page.tsx:240-246` |
| E | Pages métier → `/templates` et démo | Déjà là | `[metier]/page.tsx:217` |
| E | Pages métier → `/realization` | Déjà là | `[metier]/page.tsx:224` |
| E | Pages métier → `/offres` | Reporté : `/offres` n'existe pas | — |
| E | `/templates` → page restaurant | Déjà là (liste des 12 pages) | `templates/page.tsx:105-117` |
| E | Page boulangerie → page pâtisserie | Lien posé (champ `relatedMetier`) | `[metier]/page.tsx:202-213` ; `metier-pages.ts:328-332` |
| E | Dentiste et avocat : aucun lien croisé | Vérifié : aucun lien entre les deux pages | crawl (§ 9) |

Contrôle : sur les 32 pages du sitemap, 1 010 liens internes testés vers 45 cibles distinctes. 0 lien cassé. Les différences de liens avant/après se limitent aux liens du tableau, aux titres changés dans les listes d'articles et au bloc « Sources ».

Les cinq articles du § 5.3 n'ont reçu aucun lien. Leur encadré « Autres pages utiles » affiche les nouveaux titres des articles modifiés. C'est la seule différence de texte visible sur ces cinq pages.

---

## 6. Gabarit des articles (`blog/[slug]/page.tsx`)

### 6.1 Bloc « Sources »

- Type `BlogPost` : champ optionnel `sources?: { title: string; url: string }[]` (`site-content.ts:97`).
- Bloc affiché en fin d'article, après la dernière section : `blog/[slug]/page.tsx:198-224`.
- Liens externes avec `target="_blank" rel="noopener noreferrer"`. Le nom de domaine s'affiche entre parenthèses, en `text-slate-500` (déjà utilisé en `:137`).

Classes réutilisées, aucune nouvelle :

| Élément | Classes | Origine |
|---|---|---|
| Carte du bloc | `rounded-md border border-blue-100 bg-slate-50 p-8` | `blog/[slug]/page.tsx:173` (sections d'article) |
| Titre « Sources » | `text-2xl font-semibold tracking-tight text-slate-950` | `blog/[slug]/page.tsx:174` |
| Liste et puces | `mt-6 space-y-3 text-sm leading-7 text-slate-700`, `flex gap-3` | `blog/[slug]/page.tsx:185-186` |
| Lien | `font-medium text-blue-700 underline underline-offset-4` | `seo-geo/page.tsx:420` |

### 6.2 Puces écrasées sur mobile

`shrink-0` est ajouté au point bleu (`blog/[slug]/page.tsx:188`). La classe existe déjà (`[metier]/page.tsx:147`).

Mesure sur le point `span.rounded-full.bg-blue-600`, avant et après, avec `scratchpad/t07/cap.mjs` :

| Page | Largeur d'écran | Points mesurés | Points non ronds (avant → après) |
|---|---|---|---|
| Checklist SEO | 390 | 20 → 31 (11 sont dans « Sources ») | 20 → 0 |
| Checklist SEO | 1280 | 20 → 31 | 10 → 0 |
| Article rapide | 390 | 10 | 2 → 0 |

Un point est « rond » s'il mesure 8 × 8 pixels.

### 6.3 Autres changements du gabarit

- Le contenu des paragraphes passe par `renderParagraph` (liens internes, § 5).
- La clé de chaque paragraphe devient `section.id` + son rang. Avec l'ancienne clé (le texte du paragraphe), le texte brut des liens se retrouvait dans les données de la page.

---

## 7. Sources ajoutées

Quatre articles citent des sources dans leur texte et reçoivent le bloc. Les cinq articles du § 5.3 n'en citent aucune : ils ne reçoivent pas le bloc. Le mot « source » y apparaît seulement dans « code source », et l'AFNIC y est nommée sans titre de page.

Vérifié le 10 novembre 2026 avec `curl` (suivi des redirections). « Titre exact » = texte de la balise `<title>` de la page française, sans le suffixe du site. Les 14 liens répondent HTTP 200 et leur titre est identique.

| Article | Titre exact | URL | HTTP |
|---|---|---|---|
| optimisé, définition | Fonctionnalités d'IA et votre site Web | `developers.google.com/search/docs/appearance/ai-features?hl=fr` | 200 |
| sans référencement | Essentiels de la recherche Google (anciennement "Consignes aux webmasters") | `developers.google.com/search/docs/essentials?hl=fr` | 200 |
| checklist | Bloquer l'indexation dans la recherche avec "noindex" | `developers.google.com/search/docs/crawling-indexing/block-indexing?hl=fr` | 200 |
| checklist | Présentation du fichier robots.txt et guide | `developers.google.com/search/docs/crawling-indexing/robots/intro?hl=fr` | 200 |
| checklist | Redirections et recherche Google | `developers.google.com/search/docs/crawling-indexing/301-redirects?hl=fr` | 200 |
| checklist | Spécifier une URL canonique avec rel="canonical" et d'autres méthodes | `developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=fr` | 200 |
| checklist | Créer et envoyer un sitemap | `developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr` | 200 |
| checklist | Bonnes pratiques de SEO concernant les liens pour Google | `developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr` | 200 |
| checklist | Effet des codes d'état HTTP sur les robots d'exploration Google | `developers.google.com/crawling/docs/troubleshooting/http-status-codes?hl=fr` | 200 |
| checklist | Comprendre les signaux Web essentiels et les résultats de recherche Google | `developers.google.com/search/docs/appearance/core-web-vitals?hl=fr` | 200 |
| checklist | Présentation du fonctionnement du balisage de données structurées | `developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=fr` | 200 |
| checklist | À propos de PageSpeed Insights | `developers.google.com/speed/docs/insights/v5/about?hl=fr` | 200 |
| checklist | Outil d'inspection d'URL | `support.google.com/webmasters/answer/9012289?hl=fr` | 200 |

Remarques :
- L'ancienne adresse de la page « codes d'état HTTP » (`…/search/docs/crawling-indexing/http-network-errors`) redirige vers l'adresse ci-dessus. Le lien utilise l'adresse finale.
- Le `<title>` de la page « Outil d'inspection d'URL » finit par « - Aide sur la Search Console », qui est le nom du site d'aide. Il est retiré.
- Les titres de la page « sitemap » et de la page « robots.txt » diffèrent de leur H1. Les titres du bloc suivent le `<title>`, comme les renvois déjà présents dans le texte de la checklist.

### 7.1 Titres corrigés dans le texte

- **Checklist** : « Spécifier une URL canonique avec rel=canonical » devient « Spécifier une URL canonique avec rel="canonical" et d'autres méthodes » (`site-content.ts:2274`, décision de Joseph).
- **Checklist** : « Bloquer l'indexation dans la recherche avec noindex » reçoit les guillemets du titre de Google : « … avec "noindex" ».
- **Sans référencement** : « Essentiels de la recherche Google » devient le titre complet, avec « (anciennement "Consignes aux webmasters") ».

Les deux dernières corrections ne figuraient pas dans la demande. Elles évitent qu'un titre du texte contredise le bloc « Sources ». Elles se retirent d'une ligne chacune.

Les phrases « Source : Google Search Central, … » restent dans le texte des articles. Le bloc en fin d'article donne le lien cliquable.

### 7.2 Hors périmètre, à signaler

Les libellés de sources de `/seo-geo` (`seo-geo/page.tsx`) ne sont pas tous des titres exacts. Premier exemple : « Essentiels de la recherche Google », sans la mention « anciennement ». Second exemple : « Présentation du balisage de données structurées ».

Le `<title>` de la seconde page est « Présentation du fonctionnement du balisage de données structurées ». Ces libellés ne sont pas modifiés.

---

## 8. `audienceType` du JSON-LD Service

Décision de Joseph (10 novembre 2026) : `audience.audienceType` désigne un public, pas une activité. Valeur invisible à l'écran.

Nouveau champ `audienceType` dans `MetierPage` (`metier-pages.ts:32`), lu par `[metier]/page.tsx:63`. Il remplace `page.metier`, qui est conservé pour les autres usages.

| Page | `audienceType` | Avant |
|---|---|---|
| `/site-internet-plombier` | plombiers | plombier |
| `/site-internet-dentiste` | dentistes | dentiste |
| `/site-internet-restaurant` | restaurateurs | restaurant |
| `/site-internet-salon-de-coiffure` | salons de coiffure | salon de coiffure |
| `/site-internet-boulangerie` | boulangers | boulangerie |
| `/site-internet-patisserie` | pâtissiers | pâtisserie |
| `/site-internet-fleuriste` | fleuristes | fleuriste |
| `/site-internet-reparation-informatique` | réparateurs informatiques | réparation informatique |
| `/site-internet-entreprise-nettoyage` | entreprises de nettoyage | entreprise de nettoyage |
| `/site-internet-architecte-interieur` | architectes d'intérieur | architecte d'intérieur |
| `/site-internet-avocat` | avocats | avocat |
| `/site-internet-agence-immobiliere` | agents immobiliers | agence immobilière |

« agents immobiliers » reprend l'exemple de Joseph. « agence immobilière » reste le nom de l'activité sur la page.

Point à connaître : le validateur de la tâche 0.5 exigeait que l'audience figure dans le texte visible. Cette règle contredit la décision « invisible à l'écran ».

Dans la copie `scratchpad/t07/validate_jsonld.py`, elle est remplacée par un contrôle de la valeur attendue pour chacune des 12 pages. Le script d'origine (`scratchpad/t05/`) n'est pas modifié.

Google demande que le balisage décrive du contenu visible. Joseph peut préférer écrire le public dans le texte.

---

## 9. Vérifications

| Contrôle | Résultat |
|---|---|
| `pnpm lint` | Aucun avertissement |
| `pnpm type-check` | Aucune erreur |
| `pnpm build` | Réussi. Seul le middleware est marqué `ƒ`. `/[metier]` et `/blog/[slug]` restent statiques (SSG) |
| Audit title / description / H1 / premier paragraphe (22 pages) | 22 pages conformes, 0 doublon |
| Règles de rédaction (`scratchpad/t07/rules.py`) | 66 textes nouveaux ou modifiés. 0 phrase au-dessus de 25 mots, 0 paragraphe au-dessus de 3 phrases ou 60 mots |
| Crawl des 32 pages du sitemap | 1 010 liens internes, 0 cassé |
| Sources du bloc | 14 liens, HTTP 200, 14 titres identiques |
| JSON-LD (`scratchpad/t07/validate_jsonld.py`, 32 pages) | **0 erreur**. FAQPage de `/seo-geo` et des 12 pages métier identiques au texte visible. `audienceType` conforme sur les 12 pages |
| Pages exclues, texte visible avant/après (build du commit `0dfde33` sur le port 3201) | `/`, `/tarifs`, `/terms`, `/privacy`, `/mentions-legales` : 0 ligne différente. Cinq articles du § 5.3 : seuls changent les 5 titres de l'encadré « Autres pages utiles » |
| Captures 390 et 1280 | `/templates`, `/realization`, `/site-internet-plombier`, `/blog`, `/seo-geo`, 4 articles : aucun débordement horizontal. Puces rondes (§ 6.2) |

Le build avant la tâche (port 3201) a été construit depuis `git archive HEAD`, hors du dépôt, avec les mêmes dépendances.

Aucune route ne passe en dynamique. `git status` : seuls les fichiers autorisés sont modifiés (9 fichiers de code et contenu, plus `02-keyword-map.md` et ce document).

Les captures sont dans `scratchpad/t07/cap/`, hors dépôt. Elles ne sont pas comparées au pixel aux références : le texte a changé volontairement.

---

## 10. Ce qui reste pour la phase 1

Textes de prix et de délai, à reprendre avec la constante des prix :
- descriptions des 12 pages métier (« notre offre à 500 € », « livré en 48h dès 500€ », « Site à 500 € ») ;
- description de `/templates` et paragraphe de `TemplatesShowcase` (« en 48h ») ;
- `[metier]/page.tsx` : « tarif de lancement, au lieu de 600 € », « tenir les 48h », délai compté depuis « l'acompte », « Un devis clair, sous 24h » ;
- mention « sur mesure » de `/templates` ([P] § 5.6) : non ajoutée.

Liens impossibles aujourd'hui, car `/offres` n'existe pas (phase 2) :
- `/templates` et `/realization` → `/offres` ;
- `/seo-geo` ↔ `/offres` ;
- pages métier → `/offres`.

Liens à poser dans les cinq articles du § 5.3 (leur texte est hors périmètre) :
- article livraison → article rapide ;
- les cinq articles → `/offres` ([02] § 3.3, bloc B) ;
- les renvois croisés posséder / louer / récupérer / 100 % du bloc B.

Autres points :
- `/seo-geo` : libellés de sources non exacts (§ 7.2).
- Textes `en` : les titres et introductions anglais des articles modifiés ne sont pas mis à jour. Le site ne sert que le français.
- Validateur JSON-LD : règle « audience visible » à trancher (§ 8).
- Le champ `sources` n'est pas traduit : il s'affiche tel quel quelle que soit la langue.
- Les articles de [04] (1 à 8) ne sont pas créés. Le lien « Maps » et le lien de l'article 8 vers `/tarifs` s'ajouteront à leur publication.
- Dates : `updatedAt` des six articles reste au 10 novembre 2026. Aucune n'a été changée par cette tâche.

Décisions de Joseph reportées dans [02] § 3.3 : exception de l'article 8 (bloc A) et règle « Maps » de [04] § 4.2 (bloc C).
