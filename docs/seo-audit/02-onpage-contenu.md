# Audit SEO on-page & contenu — sitekept.com

**Date** : 10 août 2026
**Périmètre** : SEO on-page + contenu (hors technique pure / Core Web Vitals / netlinking)
**Méthode** : lecture du code (branche `dev`, HEAD `1c7c98d`) + inspection du HTML rendu en production (`curl -L`, parsing des `<head>`, des `Hn` et des `<a href>`)
**Mode** : lecture seule — aucun fichier modifié

---

## 0. Avertissement méthodologique majeur : la production est en retard sur le dépôt

**Vérifié.** `git rev-list --count main..dev` = **1**. Le commit `1c7c98d` (« Audit fixes: real realization descriptions, legal contact info, **French accents**, **legal notice page** ») est sur `dev` mais **pas sur `main`**, et la production sert `main`.

Conséquences directement observées en ligne :

| Symptôme en production | Cause |
|---|---|
| `https://www.sitekept.com/mentions-legales` renvoie **HTTP 404** (`<title>404: This page could not be found.</title>`) | page présente uniquement sur `dev` |
| Le sitemap en ligne (28 URLs) **n'inclut pas** `/mentions-legales` alors que `src/app/sitemap.ts:63-68` le déclare | sitemap généré depuis `main` |
| Tout le corps de texte de la home est **désaccentué** en ligne (« La rapidite compte, mais la clarte commerciale et la propriete… ») alors que la source `src/content/site-content.ts:247` dit bien « La rapidité compte, mais la clarté commerciale et la propriété… » | correctif d'accents non déployé |

**Action n°0, avant toute autre** : merger `dev` → `main` et redéployer. Sans cela, une partie des correctifs ci-dessous existe déjà et n'est simplement pas en ligne.

Dans tout le rapport, je distingue explicitement **[PROD]** (défaut observé en ligne, corrigé sur `dev`), **[CODE]** (défaut présent dans le code actuel de `dev`, donc persistant après déploiement) et **[LES DEUX]**.

---

## 1. Titles & meta descriptions

### 1.1 Inventaire vérifié

Sources : `src/app/layout.tsx:12-68` (root, via `messages/fr.json` → clés `metadata.*`), `src/lib/page-metadata.ts:11-37` (`buildPageMetadata`), et les `generateMetadata` de chaque route.

Routes **avec** metadata propre (vérifié par `grep` sur `export const metadata|generateMetadata`) :

| Route | Fichier:ligne | Title (prod) | Long. | Description | Long. | Canonical |
|---|---|---|---|---|---|---|
| `/` | `src/app/(marketing)/page.tsx:21-35` | Sitekept \| Site pro en 48h, sans abonnement et 100% à vous | **58** | Sitekept livre des sites professionnels à partir de 500€… | **174** ❌ | `https://sitekept.com` |
| `/templates` | `src/app/(marketing)/templates/page.tsx:13-27` | Templates Sitekept \| Bases de sites rapides a personnaliser | **59** | Decouvrez les templates publiques Sitekept: boulangerie… | **225** ❌ | `/templates` |
| `/blog` | `src/app/(marketing)/blog/page.tsx:13-27` | Blog Sitekept \| Rapidite, propriete du site, SEO et GEO | **55** | Le hub editorial Sitekept regroupe des pages utiles… | **155** | `/blog` |
| `/seo-geo` | `src/app/(marketing)/seo-geo/page.tsx:14-28` | SEO + GEO \| Comprendre la visibilité naturelle d'un site | **56** | Comprenez pourquoi le référencement naturel compte… | **161** ⚠️ | `/seo-geo` |
| `/blog/[slug]` ×8 | `src/app/(marketing)/blog/[slug]/page.tsx:29-45` | via `post.seoTitle` | 35–73 | via `post.seoDescription` | 131–164 | `/blog/{slug}` |
| `/admin-templates-7q4p9s2m` | `src/app/admin-templates-7q4p9s2m/page.tsx:7-18` | Catalogue admin templates \| SiteKept | 37 | — | — | `noindex` ✅ correct |
| 13 démos de templates | `src/app/{slug}/layout.tsx` | ex. « Clinique Nova Sourire - Cabinet dentaire » | 40 | ex. « Template de cabinet dentaire avec rail de réservation… » | 113 | **AUCUN** ❌ |

Routes **sans aucune** metadata propre (vérifié : script de comparaison `page.tsx` + `layout.tsx` du même dossier) :

`/realization`, `/privacy`, `/terms`, `/mentions-legales`, plus **37 sous-pages de démos** (`/dentiste/soins`, `/cabinet-avocat/expertises`, `/salon-coiffure/prestations`, …).

---

### 1.2 FINDING #1 — Quatre pages publiques héritent du title/description de la home (duplication exacte)

- **Sévérité : Élevé**
- **Preuve** : réponse HTTP live de `https://www.sitekept.com/realization`, `/privacy`, `/terms` → toutes trois renvoient
  `<title>Sitekept - Site pro en 48h, sans abonnement et 100% à vous</title>` et la même `meta description` de 174 caractères que la home. `/mentions-legales` fait de même (sur `dev`). Cause : aucun `export const metadata` dans `src/app/(marketing)/realization/page.tsx`, `.../privacy/page.tsx`, `.../terms/page.tsx`, `.../mentions-legales/page.tsx`, donc héritage de `src/app/layout.tsx:16-17`.
- **Impact SEO** : Google déduplique les snippets et réécrit lui-même le title (perte de contrôle du CTR). `/realization` est une **page money** (preuve sociale, page de conversion) : elle ne peut se positionner sur aucune requête « réalisations / portfolio agence web » avec un title générique.
- **Correctif** : ajouter `buildPageMetadata` sur chacune (le helper existe déjà et pose le canonical). Textes prêts à copier :

```
/realization
title:       "Nos réalisations | Sites web livrés par Sitekept"                     (49)
description: "Découvrez les sites livrés par Sitekept pour des PME, indépendants et
              commerces : design, structure SEO et mise en ligne. Demandez un devis
              gratuit."                                                              (154)

/privacy
title:       "Politique de confidentialité | Sitekept"                               (39)
description: "Comment Sitekept collecte, utilise et protège vos données personnelles
              conformément au RGPD, et comment exercer vos droits."                  (135)

/terms
title:       "Conditions générales d'utilisation | Sitekept"                         (43)
description: "Conditions d'utilisation des services Sitekept : prestations, tarifs,
              propriété intellectuelle, délais de livraison et garanties."           (143)

/mentions-legales
title:       "Mentions légales | Sitekept"                                           (28)
description: "Mentions légales du site sitekept.com : éditeur, directeur de la
              publication, hébergeur et coordonnées de contact."                     (131)
```

---

### 1.3 FINDING #2 — 37 sous-pages de démos partagent un title/description strictement identique à leur page mère

- **Sévérité : Élevé**
- **Preuve** : `https://www.sitekept.com/dentiste` et `https://www.sitekept.com/dentiste/soins` renvoient tous deux, à l'octet près :
  `<title>Clinique Nova Sourire - Cabinet dentaire</title>` +
  `<meta name="description" content="Template de cabinet dentaire avec rail de réservation, pages cliniques dédiées et hiérarchie de soins structurée.">`
  Cause : `src/app/dentiste/layout.tsx:16-20` définit la metadata, et `src/app/dentiste/soins/page.tsx` (comme les 36 autres) n'en exporte aucune. Le même schéma vaut pour `agence-immobiliere/*`, `architecte-interieur/*`, `avocate-tel-aviv/*`, `cabinet-avocat/*`, `menage-nettoyage/*`, `restaurant-bistrot/*`, `salon-coiffure/*`, `balinjera/*`.
- **Impact SEO** : ~50 URLs indexables sur le domaine principal avec ~13 titles distincts. Dilution du budget de crawl, signal de « site à faible valeur ajoutée », et risque de sélection canonique arbitraire par Google.
- **Correctif recommandé** : ces pages sont des **démonstrations d'entreprises fictives** hébergées sur le domaine commercial. La meilleure option SEO n'est pas de rédiger 50 titles, c'est de **les désindexer** :
  - ajouter `robots: { index: false, follow: true }` dans chaque `layout.tsx` de démo, **ou** (préférable) les servir depuis le sous-domaine/domaine déjà existant `sitekept-templates.vercel.app` (référencé dans `src/content/admin-template-catalog.ts:18`) et ne garder sur `sitekept.com` que `/templates` ;
  - retirer en conséquence les 13 slugs du sitemap (`src/app/sitemap.ts:21-26`).
  - Si vous choisissez de les garder indexables : au minimum un `title` propre par sous-page + `alternates.canonical`.

---

### 1.4 FINDING #3 — Aucune balise canonical sur les 13 démos ni sur les pages sans metadata

- **Sévérité : Moyen**
- **Preuve** : `<link rel="canonical">` absent du `<head>` live de `/dentiste`, `/dentiste/soins`, `/realization`, `/privacy`, `/terms`. Présent uniquement là où `buildPageMetadata` est utilisé (`src/lib/page-metadata.ts:21-23`).
- **Impact SEO** : aucune protection contre les variantes d'URL (paramètres UTM, www/non-www, trailing slash).
- **Correctif** : router toute la metadata par `buildPageMetadata`, y compris les démos.

---

### 1.5 FINDING #4 — Le canonical pointe vers un hôte qui redirige (non-www) alors que le site sert www

- **Sévérité : Élevé**
- **Preuve** :
  - `curl -o /dev/null -w "%{http_code}" https://sitekept.com/` → **307**, `Location: https://www.sitekept.com/`
  - Le HTML servi sur `https://www.sitekept.com/` contient `<link rel="canonical" href="https://sitekept.com">` et `<meta property="og:url" content="https://sitekept.com">`
  - Le sitemap en ligne liste **28 URLs toutes en `https://sitekept.com/…`** (non-www), donc 28 URLs qui redirigent.
  - Cause : `src/lib/page-metadata.ts:3` et `src/app/sitemap.ts:6` utilisent `process.env.NEXT_PUBLIC_BASE_URL || "https://sitekept.com"` ; la variable n'est manifestement pas définie en production avec le `www`.
- **Impact SEO** : Google reçoit un canonical vers une URL en redirection permanente-douce. Il finira par choisir `www` lui-même, mais entre-temps les signaux sont scindés et le sitemap fait perdre du budget de crawl (28 requêtes → 28 redirections).
- **Correctif** : définir `NEXT_PUBLIC_BASE_URL=https://www.sitekept.com` sur Vercel (production), **ou** — plus propre — configurer la redirection dans l'autre sens (`www` → apex) et garder `https://sitekept.com`. **Choisir une seule version et l'aligner partout : redirection, canonical, sitemap, `openGraph.url` (`src/app/layout.tsx:46`), `robots.ts:9`.**

---

### 1.6 FINDING #5 — Descriptions hors gabarit et titles trop longs

- **Sévérité : Moyen**
- **Preuve (longueurs mesurées sur le HTML live)** :

| Route | Élément | Longueur | Cible |
|---|---|---|---|
| `/templates` | description | **225** | ≤ 155 → tronquée de ~70 car. dans les SERP |
| `/` (+ 4 pages héritées) | description | **174** | ≤ 155 |
| `/seo-geo` | description | **161** | ≤ 155 |
| `/blog/comment-se-passe-la-livraison…` | seoDescription (`src/content/site-content.ts`) | **164** | ≤ 155 |
| `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` | seoTitle | **73** | ≤ 60 |
| `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept` | seoTitle | **70** | ≤ 60 |
| `/blog/site-sans-referencement-peut-devenir-inutile` | seoTitle | **67** | ≤ 60 |

- **Impact SEO** : troncature du CTA en fin de description ; les titles > 60 sont réécrits par Google.
- **Correctif** : voir le tableau récapitulatif §9.

---

### 1.7 FINDING #6 — Fautes de français et accents manquants dans les metadata (persistant sur `dev`)

- **Sévérité : Élevé** (crédibilité commerciale d'une agence web française)
- **Preuve — [CODE], donc non corrigé par le déploiement** :
  - `src/app/(marketing)/blog/page.tsx:19` → `"Blog Sitekept | Rapidite, propriete du site, SEO et GEO"` (3 accents manquants dans le **title**)
  - `src/app/(marketing)/blog/page.tsx:23` → `"…rapidite de lancement, propriete complete du site et visibilite SEO + GEO."` (5 accents)
  - `src/app/(marketing)/templates/page.tsx:19` → `"…Bases de sites rapides a personnaliser"` (« à »)
  - `src/app/(marketing)/templates/page.tsx:23` → `"Decouvrez les templates publiques Sitekept: … menage, … cabinet d'avocat…"` — accents manquants **et faute d'accord : « templates publiques » → « templates publics »** (*template* est masculin en français)
  - `src/app/(marketing)/templates/page.tsx:59` → libellé de bouton `"Lire la methode"`
  - `src/content/site-content.ts:1186` → seoTitle `"Site optimise SEO et GEO | Sitekept"` (« optimisé »)
  - `src/content/site-content.ts:1178, 1186, 1190, 1214` → corps d'article : « visibilite », « resumment », « clarte », « apercus », « decouvrent », « generees », « etre »
  - `src/content/site-content.ts:313` → `"Voir toutes les templates"` → **« Voir tous les templates »**
- **Preuve — [PROD uniquement]** : la quasi-totalité du corps de la home est désaccentuée en ligne (« simple a acheter, simple a comprendre et simple a posseder », « Est-ce que je possede vraiment le site ? », « Qui gere la mise en ligne ? ») alors que `src/content/site-content.ts:247, 283, 323, 577` est correct. → réglé par le merge.
- **Impact SEO** : Google normalise partiellement les accents, donc l'impact ranking direct est faible ; l'impact **CTR + E-E-A-T** est en revanche direct. Une agence web qui vend du SEO en français avec des titles fautifs dans les SERP perd sa crédibilité au moment exact de la décision de clic.
- **Correctif** : corriger les chaînes ci-dessus (textes proposés en §9), puis ajouter un garde-fou (règle ESLint ou test de non-régression détectant les tokens `rapidite|propriete|visibilite|clarte|methode|optimise|decouvrez` dans les valeurs `fr:`).

---

## 2. Balise `keywords`

### FINDING #7 — `metadata.keywords` : inutile pour Google, et révélatrice d'un ciblage inversé

- **Sévérité : Faible** (impact ranking nul) / **Élevé** en tant que **symptôme stratégique**
- **Preuve** : `src/app/layout.tsx:18` → `keywords: getMessage(locale, "metadata.keywords")`, valeur `messages/fr.json` :
  `"site professionnel 48h, creation site rapide, site sans abonnement, site 100% propriétaire, déploiement inclus, SEO GEO, site vitrine PME, site indépendant"` (155 car.). Confirmé dans le HTML live de **toutes** les pages (elle est héritée du root sur `/blog`, `/templates`, `/seo-geo`, `/realization`… — donc identique partout, ce qui la rend d'autant plus inopérante).
- **Impact SEO** : **nul**. Google ignore `meta keywords` depuis septembre 2009 (annonce officielle Webmaster Central). Bing également. Aucune raison de la maintenir.
- **Diagnostic de ciblage — le point important** : cette liste est composée à ~90 % de **termes de marque/offre**, pas de **requêtes utilisateur**.
  - « site professionnel 48h », « déploiement inclus », « site 100% propriétaire », « SEO GEO » : personne ne tape ça. Ce sont des **arguments de vente**, pas des mots-clés.
  - Les vraies requêtes du marché — « création site internet », « prix création site internet », « créer un site vitrine », « agence web [ville] », « refonte site internet » — **n'y figurent pas du tout**.
  - Le seul terme à volume réel est « site vitrine PME », et il n'a de page dédiée nulle part.
  - C'est cohérent avec le reste de l'audit : le site est écrit **du point de vue de l'agence** (« notre offre », « notre positionnement »), pas du point de vue de la requête.
- **Correctif** : supprimer `keywords` de `src/app/layout.tsx:18` et la clé `metadata.keywords` de `messages/fr.json` / `en.json`. Réinvestir l'effort dans les pages du plan §8.

---

## 3. Hiérarchie Hn

### 3.1 Home — structure correcte, mot-clé absent

**Vérifié sur le HTML live** : 35 titres, **exactement 1 `<h1>`**, aucun saut de niveau (H1 → H2 → H3, le H4 de `src/app/_components/contact.tsx:37` est imbriqué sous un H3 légitime). Les `Hn` ne sont pas détournés pour du style : `src/app/(marketing)/page.tsx:155/173/192/210/231/260/280/319/333` suit une progression propre.

Sur ce point, **rien à redire structurellement**. Le problème est sémantique :

### FINDING #8 — Le H1 de la home ne contient aucun mot-clé de recherche

- **Sévérité : Élevé**
- **Preuve** : H1 live = `Concevez un site web qui vous appartient à 100%.` (source `src/app/(marketing)/page.tsx:59`, texte depuis `src/content/site-content.ts` → `homeContent.hero.title`).
- **Impact SEO** : le H1 est le signal on-page le plus fort après le title. Il porte ici un **bénéfice différenciant** (la propriété) mais **aucun terme de la demande** : ni « création site internet », ni « site vitrine », ni « agence web », ni de qualificatif d'audience (PME, artisan, indépendant). La page ne peut donc pas se qualifier sémantiquement sur les requêtes de tête.
- **Correctif** : conserver le différenciateur, y greffer la requête. Formulation proposée :
  `Création de site internet pour PME et artisans — un site rapide, qui vous appartient à 100 %.`
  Variante plus courte : `Création de site internet professionnel, livré en 48h et 100 % à vous.`
  (le H1 peut être long, contrairement au title ; c'est le bon endroit pour caser la requête complète)

### 3.2 `/templates` — saut H1 → H3

- **Sévérité : Moyen**
- **Preuve** : HTML live de `/templates` — séquence `H1: Templates prêtes a adapter a votre activite.` puis directement `H3: Template Boulangerie`, `H3: Template Fleuriste`, … **aucun H2**. Cause : `src/app/(marketing)/templates/page.tsx:39` pose le H1, puis `<TemplatesShowcase>` est appelé ligne 66-69 **sans prop `title`**, donc le bloc `<h2>` de `src/components/templates-showcase.tsx:52` n'est jamais rendu, et les cartes émettent des `<h3>` (`src/app/_components/project-card.tsx:77`).
- **Note complémentaire** : le H1 live contient trois fautes (« prêtes » → **prêts**, « a adapter a » → **à adapter à**, « activite » → **activité**) — corrigé sur `dev` (`src/content/site-content.ts:887` = « Templates prêts à adapter à votre activité. »), donc **[PROD]**.
- **Impact SEO** : hiérarchie cassée, aucune section thématique intermédiaire pour porter des mots-clés secteur.
- **Correctif** : passer une prop `title` à `TemplatesShowcase` (ex. `"Nos modèles de sites par métier"`), ou grouper les cartes par secteur sous des `<h2>` du type « Templates pour commerces de bouche », « Templates pour professions libérales », « Templates pour artisans du bâtiment ». Ce regroupement crée en plus les ancres sémantiques qui manquent aujourd'hui.

### 3.3 `/realization` — même saut H1 → H3

- **Sévérité : Moyen**
- **Preuve** : HTML live — `H1: Nos Réalisations` puis 9 × `H3` (IAFormaPlus, Orhakerem, Balinjera, PinckIt, LegitBrainrot, ComizGlobal, BismuthCPA, Les assureurs experts, ETS RUNI), aucun H2. Cause : `src/app/(marketing)/realization/page.tsx:73` (H1) → `<ProjectCard>` (H3, `project-card.tsx:77`), sans section intermédiaire (`realization/page.tsx:102-119`).
- **Correctif** : insérer un `<h2>` de section, idéalement porteur de mot-clé (`Des sites livrés pour des PME, indépendants et associations`).

### 3.4 FINDING #9 — 37 sous-pages de démos n'ont aucun H1

- **Sévérité : Moyen** (Élevé si les démos restent indexables)
- **Preuve** : `grep -c "<h1"` sur les `page.tsx` hors `(marketing)` → **0 pour 37 fichiers**, dont `src/app/dentiste/soins/page.tsx`, `src/app/cabinet-avocat/expertises/page.tsx`, `src/app/salon-coiffure/prestations/page.tsx`, `src/app/menage-nettoyage/zones/page.tsx`, `src/app/balinjera/page.tsx`. Confirmé en ligne : `https://www.sitekept.com/dentiste/soins` commence directement par un `<h2>`, **H1 count = 0**.
- **Impact SEO** : pages indexables sans titre principal. Signal de qualité négatif à l'échelle du domaine.
- **Correctif** : réglé automatiquement si l'on applique le correctif du Finding #2 (désindexation / déport des démos). Sinon, ajouter un H1 par sous-page.

### 3.5 Pages correctes

`/blog` (H1 + 8 H2 d'articles), `/blog/[slug]` (1 H1, H2 de sections, H3 pour « Autres pages utiles »), `/seo-geo` (1 H1, 2 H2), `/privacy` et `/terms` (1 H1 + H2 numérotés) : **structures Hn propres, rien à signaler**.

---

## 4. Images & attributs `alt`

**Inventaire exhaustif** (`grep -rn --include='*.tsx' "<Image\|<img" src`) : **8 `<Image>` + 2 `<img>` = 10 occurrences seulement** sur tout le dépôt. Le site est quasi dépourvu d'images de contenu.

| Fichier:ligne | `alt` | Verdict |
|---|---|---|
| `src/components/navigation.tsx:85` | `"Sitekept logo"` | ⚠️ Le logo est enveloppé dans un `<Link href="/">` : l'alt sert d'ancre pour le lien vers l'accueil. `"Sitekept - Accueil"` serait plus utile. |
| `src/components/footer.tsx:20` | `"Sitekept logo"` | ⚠️ idem, ici purement décoratif (texte « Sitekept » adjacent) → `alt=""` serait plus correct |
| `src/components/footer.tsx:145` | `"Majin Vegeta walking"` | ⚠️ Décoratif (easter egg animé, `pointer-events-none`) → devrait être `alt=""` + `aria-hidden`. Accessoirement : **contenu tiers sous copyright (Dragon Ball / Toei) sur un site commercial** — risque juridique hors périmètre SEO, mais à signaler. |
| `src/app/_components/project-card.tsx:56` | `` `Aperçu de ${name}` `` | ⚠️ Généré, correct grammaticalement mais non descriptif. Utilisé pour les 9 réalisations **et** les 13 templates. Sur `/realization`, un alt comme `Aperçu du site web réalisé pour ${name}` porterait la requête. |
| `src/app/avocate-tel-aviv/page.tsx:49` | `""` + `aria-hidden="true"` | ✅ **Correct** — image de fond décorative, traitée exactement comme il faut |
| `src/app/avocate-tel-aviv/page.tsx:146` | `"Documents juridiques et livres de droit sur un bureau"` | ✅ **Correct** — alt descriptif exemplaire |
| `src/app/balinjera/balinjera-shell.tsx:126` | `"Balinjera"` | ❌ Nom de marque seul, non descriptif |
| `src/app/balinjera/balinjera-shell.tsx:188` | `"Balinjera"` | ❌ idem |
| `src/app/balinjera/balinjera-shell.tsx:405` | `""` | ⚠️ Vide sans `aria-hidden` — à vérifier si décoratif |
| `src/app/balinjera/balinjera-shell.tsx:614` | `""` | ❌ **Faux positif écarté après lecture** : `<Image src={post.image} alt="" …>` — c'est la vignette d'un article de blog, donc **informative**, l'alt vide est incorrect ici |

### FINDING #10 — Aucun `alt` manquant, mais aucune image de contenu non plus

- **Sévérité : Moyen** (opportunité manquée, pas défaut technique)
- **Preuve** : la home ne contient que **3 `<img>` rendus** (logo ×2, GIF Vegeta). Aucune photo d'équipe, aucun visuel de process, aucune capture de projet.
- **Impact SEO** : zéro trafic Google Images, zéro signal de contenu original, et surtout **zéro preuve visuelle** sur une page qui vend de la conception visuelle.
- **Correctif** : les vignettes de `/realization` et `/templates` sont les seuls actifs images exploitables — enrichir leurs alt, et les faire remonter sur la home (voir Finding #12).

### FINDING #11 — Aucune image Open Graph sur tout le site

- **Sévérité : Moyen**
- **Preuve** : parsing du `<head>` live des 5 pages principales → balises `og:` présentes = `og:title`, `og:description`, `og:url`, `og:type` uniquement. **Aucun `og:image`, aucun `twitter:image`.** Aucun fichier `opengraph-image.*` dans `src/app/`. Pourtant `src/app/layout.tsx:51` déclare `twitter: { card: "summary_large_image" }` — une carte « large image » **sans image**.
- **Preuve complémentaire** : `src/app/layout.tsx` ne définit **pas** `metadataBase`. Toute URL d'image relative ajoutée demain serait résolue de façon imprévisible (Next.js émet un avertissement au build).
- **Impact SEO/social** : chaque partage LinkedIn, WhatsApp ou Slack d'une URL sitekept.com s'affiche sans visuel. Pour une agence web, c'est un signal négatif immédiat auprès de son audience la plus qualifiée.
- **Correctif** : ajouter `metadataBase: new URL(baseUrl)` dans `src/app/layout.tsx`, créer `src/app/opengraph-image.tsx` (1200×630) et l'inclure dans `buildPageMetadata` (`src/lib/page-metadata.ts:24-36`).

---

## 5. Maillage interne

### 5.1 Cartographie vérifiée

**Navigation** (`src/components/navigation.tsx:12-19`) — 6 liens + CTA : `/templates`, `/realization`, `/blog`, `/seo-geo`, `/#faq`, `/#contact`, `/#contact`.
**Footer** (`src/components/footer.tsx`) — `/`, `/templates`, `/seo-geo`, `/#contact`, `/blog`, `/seo-geo`, `/#faq`, `/terms`, `/privacy`, `/mentions-legales`, `/#contact`.

> ⚠️ Le footer **ne contient aucun lien vers `/realization`** (vérifié : `grep 'href="/' src/components/footer.tsx` → 11 liens, aucun `/realization`). La page de preuve sociale n'a donc qu'**une seule source de lien sitewide** (la nav).

**Corps des pages** (`grep 'href="/'` sur `src/app/(marketing)`) : 5 liens internes en tout et pour tout — `page.tsx → /templates`, `page.tsx → /blog`, `realization/page.tsx → /templates`, `blog/[slug]/page.tsx → /templates`, `templates/page.tsx → /blog/site-web-rapide-pme-independant`.

### 5.2 FINDING #12 — CRITIQUE : les 13 pages de templates sont des orphelines totales (lien en JavaScript, pas en `<a href>`)

- **Sévérité : Critique**
- **Preuve** :
  - `src/app/_components/project-card.tsx:31-37` :
    ```tsx
    const handleVisit = () => {
      if (!url) return;
      window.open(url, "_blank", "noopener,noreferrer");
    };
    ```
    et lignes 84-93 : `<Button onClick={handleVisit} …><ExternalLink /> Visiter</Button>` → rendu en **`<button>`**, jamais en `<a href>`.
  - **Confirmation en production** : extraction de tous les `<a href>` du HTML de `https://www.sitekept.com/templates` → **34 ancres, dont ZÉRO ne pointe vers `/boulangerie`, `/dentiste`, `/fleuriste`, `/salon-coiffure` ni aucun autre slug de template.** Les seuls liens sortants de la page sont la nav, le footer, `/#contact` et `/blog/site-web-rapide-pme-independant`. La page compte par ailleurs **15 `<button>`**.
  - Même mécanisme sur `/realization` : **aucune ancre externe vers les 9 sites clients** (`etsruni.com`, etc.) — vérifié par extraction des `<a>` contenant `http` et non `sitekept.com` → **0 résultat**.
- **Impact SEO** :
  1. Les 13 URLs de templates sont dans le sitemap (`src/app/sitemap.ts:21-26`, priorité 0.8) mais **ne reçoivent aucun lien interne**. Elles sont découvrables uniquement par le sitemap, ne reçoivent **aucun PageRank interne**, et Google traite fréquemment ce profil comme du contenu de faible importance.
  2. `/templates` est une page money qui, du point de vue d'un crawler, **ne contient qu'une liste de titres sans destination** — son utilité perçue s'effondre.
  3. Sur `/realization`, aucun lien sortant vers les sites clients = perte totale du signal de preuve (les liens sortants vers des sites réels sont un marqueur de crédibilité fort).
  4. Cela pénalise aussi le **GEO** — l'argument de vente du site : les crawlers d'IA (GPTBot, ClaudeBot, PerplexityBot) ne suivent pas `window.open`. Le catalogue de templates est invisible pour les moteurs génératifs.
- **Correctif** : remplacer le bouton par une vraie ancre. Next.js `Button asChild` le permet déjà (le pattern est utilisé juste en dessous, ligne 101) :
  ```tsx
  <Button asChild variant="outline" size="sm" className={cn(visitButtonClassName)}>
    <a href={url}
       {...(url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <ExternalLink size={isTemplateCard ? 14 : 16} />
      Voir le template {name}
    </a>
  </Button>
  ```
  Deux gains d'un coup : le lien devient crawlable **et** l'ancre devient descriptive (voir Finding #14).

### 5.3 FINDING #13 — Les 13 démos sont des culs-de-sac : aucun lien de retour vers sitekept.com

- **Sévérité : Élevé**
- **Preuve** : extraction des `<a href>` de `https://www.sitekept.com/dentiste` → **15 ancres, toutes internes à `/dentiste/*`** (`/dentiste`, `/dentiste/soins`, `/dentiste/technologies`, `/dentiste/equipe`, `/dentiste/premiere-visite`, `/dentiste/rendez-vous`, `/dentiste/contact`, `tel:+33184120018`). **Aucun lien vers `/`, `/templates` ou `/#contact`.** Cause : `src/app/dentiste/layout.tsx` définit son propre header/footer et n'inclut ni `<Navigation>` ni `<Footer>` (contrairement à `src/app/(marketing)/layout.tsx:15-17`).
- **Impact SEO** : ~50 URLs absorbent l'autorité interne et n'en restituent aucune aux pages money. C'est une fuite de PageRank vers un silo mort. Impact **commercial** identique : un visiteur qui arrive sur `/dentiste` depuis Google ne peut pas découvrir Sitekept.
- **Correctif** : bandeau persistant sur chaque démo, du type `Template Sitekept — [Voir tous les templates] [Demander ce site]`, avec de vrais `<Link>` vers `/templates` et `/#contact`. Cela règle simultanément le cul-de-sac SEO et la conversion.

### 5.4 FINDING #14 — Ancres internes non descriptives, en série

- **Sévérité : Moyen**
- **Preuve (textes d'ancres extraits du HTML live)** :

| Page | Ancre | Destination | Occurrences |
|---|---|---|---|
| `/blog` | **« Lire la page »** | 8 articles différents | **×8** (`src/app/(marketing)/blog/page.tsx:70`) |
| `/` | **« En savoir plus »** | `/blog` | ×1 (`src/content/site-content.ts:273`) |
| `/`, `/seo-geo` | **« En lire plus sur notre blog »** | 3 articles différents | **×3** (`site-content.ts:295, 939, 957`) |
| `/templates`, `/`, `/blog/[slug]` | « Voir les templates » / « Voir nos templates » / « Parcourir les templates » | `/templates` | ×3 (acceptable) |
| toutes | « Visiter » | (bouton JS, cf. #12) | ×22 |

- **Impact SEO** : sur `/blog`, **8 liens vers 8 pages distinctes portent exactement la même ancre**. Google ne reçoit aucun signal thématique et ne peut différencier les cibles. Les ancres sont l'un des rares leviers de maillage encore pleinement pris en compte.
- **Correctif** :
  - `blog/page.tsx:70` : remplacer le libellé fixe par le titre de l'article, ou a minima `Lire : {post.title}` — techniquement trivial, `post` est déjà dans le scope de la boucle.
  - `site-content.ts:295/939/957` : remplacer « En lire plus sur notre blog » par des ancres spécifiques : `Comment se passe la livraison d'un site web`, `Pourquoi le référencement naturel est important`, `Ce qu'un site optimisé SEO et GEO doit faire`.
  - `site-content.ts:273` : « En savoir plus » → `Découvrir nos guides SEO et GEO`.

### 5.5 FINDING #15 — Aucun fil d'Ariane sur le site

- **Sévérité : Moyen**
- **Preuve** : `grep -rniE "breadcrumb|fil d'ariane" src messages` → **0 résultat**. Aucun `<nav aria-label="…">` de type breadcrumb dans le HTML live de `/blog/site-web-rapide-pme-independant` (page de profondeur 2).
- **Impact SEO** : pas de `BreadcrumbList` structuré → Google affiche l'URL brute dans les SERP au lieu du chemin `sitekept.com › Blog › …`, ce qui coûte du CTR. Perte aussi d'un maillage remontant contextuel.
- **Correctif** : fil d'Ariane sur `/blog/[slug]` (`Accueil › Blog › {titre}`) et, si les démos restent indexées, sur leurs sous-pages. Accompagner d'un JSON-LD `BreadcrumbList`.

### 5.6 Profondeur de clic — OK, sous réserve du #12

Après correction du Finding #12 : toutes les pages du sitemap sont à **≤ 2 clics** de la home (nav sitewide → `/templates` → template ; nav → `/blog` → article). **Aucune page à profondeur > 3.** Point positif.
**En l'état actuel**, en revanche, les 13 templates sont à **profondeur infinie** (inatteignables par lien).

### 5.7 Liens sortants et `rel`

- **Preuve** : les seuls `target="_blank"` du dépôt sont dans `src/app/balinjera/balinjera-shell.tsx` (7 occurrences) et `src/app/admin-templates-7q4p9s2m/page.tsx` (2), tous avec `rel="noreferrer"`.
- **Constat** : `rel="noreferrer"` sans `noopener` — en pratique `noreferrer` implique `noopener` dans tous les navigateurs modernes, donc **pas de faille** ; c'est une imprécision, pas un bug. **Sévérité : Faible.**
- **Point réel** : `window.open(url, "_blank", "noopener,noreferrer")` dans `project-card.tsx:36` est correct côté sécurité, mais **c'est précisément le problème SEO du #12**. Une fois converti en `<a>`, penser à `rel="noopener noreferrer"` pour les URLs externes de `/realization`. Ces liens vers des sites clients réels **ne doivent pas** être en `nofollow` — ce sont des citations légitimes qui renforcent la crédibilité.

---

## 6. Contenu — volume, intention de recherche, lacunes

### 6.1 Volumes mesurés (texte visible du HTML live, nav + footer inclus ≈ 150 mots)

| Page | Mots (total) | Mots (contenu net estimé) | Verdict |
|---|---|---|---|
| `/` | 1 240 | ~1 090 | Correct pour une home |
| `/blog` (listing) | 475 | ~325 | Thin |
| `/templates` | 420 | ~270 | **Très thin** pour une page money |
| `/realization` | 384 | ~235 | **Très thin** pour une page money |
| `/seo-geo` | 362 | ~210 | **Très thin** |
| `/blog/site-web-rapide-pme-independant` | 472 | ~320 | **Très thin** pour un article |

### 6.2 FINDING #16 — Les pages money sont sous le seuil de compétitivité (~250 mots)

- **Sévérité : Élevé**
- **Preuve** : mesures ci-dessus. `/templates` affiche 12 cartes de 25 mots chacune et rien d'autre ; `/realization` affiche 9 cartes ; `/seo-geo` tient en 2 sections H2.
- **Impact SEO** : sur « création site internet » et dérivés, les pages classées en première page font 1 500 à 3 000 mots (vérifié via SERP : les résultats sur « prix création site internet 2026 » sont des guides longs — Jalis, Plateya, MR Agence Web, AXTRACOM, Webutin). À 250 mots, aucune chance de couverture sémantique.
- **Correctif** : voir §8. Priorité à `/templates` (ajouter un bloc par secteur + FAQ) et à une nouvelle page `/tarifs`.

### 6.3 FINDING #17 — Le contenu ne répond à aucune des trois intentions de recherche cibles

- **Sévérité : Critique** (c'est le finding structurant de l'audit)
- **Preuve**, intention par intention :

| Intention | Ce que cherche l'utilisateur | Ce que le site propose | Verdict |
|---|---|---|---|
| **« création site internet »** | Qui fait ça, comment, pour quel prix | H1 « Concevez un site web qui vous appartient à 100% ». L'expression « création site internet » **n'apparaît dans aucun title, aucun H1, aucun H2 du site** (vérifié sur les 6 pages principales) | ❌ Non couvert |
| **« agence web [ville] »** | Un prestataire local | **Aucune ville nulle part.** `messages/fr.json → legalNotice.sections.editor` : `"Siège social : À COMPLÉTER"`, `"Raison sociale : À COMPLÉTER"`, `"SIREN / SIRET : À COMPLÉTER"`. Aucun NAP, aucune mention de zone d'intervention | ❌ Impossible en l'état |
| **« site vitrine pas cher »** | Un prix, une comparaison | Le prix « à partir de 500 € » n'existe **que dans la meta description** et dans un H3 de la home (`À partir de 500€`). **Aucune page tarifs**, aucun tableau comparatif, aucun détail de ce qui est inclus | ❌ Très faible |

- **Impact SEO** : c'est un site de **présentation d'offre**, pas un site conçu pour capter de la recherche. Il convertit un visiteur déjà envoyé par un autre canal (bouche-à-oreille, prospection, LinkedIn) mais n'en acquiert aucun via Google.

### 6.4 Lacunes de contenu — inventaire

Vérifié par `find src/app -name "page.tsx"` : les routes marketing existantes sont `/`, `/templates`, `/realization`, `/blog`, `/blog/[slug]`, `/seo-geo`, `/privacy`, `/terms`, `/mentions-legales`. **Rien d'autre.**

| Page manquante | Sévérité | Justification |
|---|---|---|
| **`/tarifs`** | **Critique** | « prix création site internet », « combien coûte un site internet », « tarif site vitrine » = requêtes à fort volume et **intention commerciale maximale**. Sitekept a en plus un **argument de rupture** : 500 € contre 1 500–8 000 € pour le marché agence français (vérifié via SERP FR 2026). Ne pas avoir cette page est l'erreur la plus coûteuse du site. |
| **Pages services dédiées** (`/creation-site-vitrine`, `/refonte-site-internet`, `/referencement-seo`, `/site-e-commerce`) | **Élevé** | Chaque service = un cluster de requêtes distinct. Aujourd'hui tout est agrégé sur la home, qui ne peut pas se positionner sur 4 intentions à la fois. `/seo-geo` est l'embryon d'une page service mais reste explicative, pas commerciale (aucun prix, aucune prestation listée, aucun CTA de devis SEO). |
| **Pages géolocalisées** | **Élevé** — mais **bloqué** | `agence web Paris`, `création site internet Lyon`… sont le levier n°1 des petites agences. **Impossible sans ville de rattachement** : les mentions légales sont vides. **Prérequis absolu** : renseigner raison sociale, SIREN, siège social. Sans NAP, pas de fiche Google Business Profile, donc pas de SEO local du tout. |
| **Pages par métier** (`/site-internet-plombier`, `/site-internet-restaurant`…) | **Élevé** | Sitekept possède **déjà 13 templates métier** — l'actif de contenu le plus sous-exploité du site. Chaque template devrait avoir une page commerciale (« Site internet pour plombier chauffagiste ») ciblant une requête réelle, au lieu d'une démo fictive orpheline et sans H1. |
| **`/a-propos`** | Moyen | Aucune page d'équipe, aucune photo, aucun nom. Enjeu E-E-A-T direct : impossible d'établir qui est derrière l'agence. Renforcé par `"Directeur de la publication : À COMPLÉTER"`. |
| **`/contact`** (URL propre) | Moyen | Le contact n'existe que comme ancre `/#contact`. Une ancre ne peut pas se positionner sur « contact agence web ». |
| **`/faq`** | Moyen | 6 questions existent sur la home (`site-content.ts:562+`) — bien écrites, orientées objection. Elles mériteraient une page dédiée **et** un balisage `FAQPage`. |

### 6.5 FINDING #18 — Aucune donnée structurée sur l'ensemble du site

- **Sévérité : Élevé**
- **Preuve** : `grep -c 'application/ld+json'` sur le HTML live de `/`, `/templates`, `/blog`, `/realization`, `/seo-geo` → **0 partout**. Aucun `Organization`, `LocalBusiness`, `Service`, `FAQPage`, `Article`, `BreadcrumbList`, `AggregateRating`.
- **Impact SEO** : perte des résultats enrichis, mais surtout — et c'est ironique pour un site qui vend du « GEO » — **le JSON-LD est le principal vecteur de compréhension pour les moteurs génératifs**. Sitekept vend une prestation qu'il n'applique pas à lui-même.
- **Correctif prioritaire** :
  1. `Organization` + `WebSite` sur la home ;
  2. `FAQPage` sur les 6 questions existantes (gain SERP immédiat, contenu déjà écrit) ;
  3. `Article` sur `/blog/[slug]` (requiert `datePublished` — cf. Finding #19) ;
  4. `BreadcrumbList` avec le fil d'Ariane du #15 ;
  5. `LocalBusiness` **une fois** les mentions légales renseignées.

---

## 7. Blog

**Structure** : `src/app/(marketing)/blog/page.tsx` (listing) + `src/app/(marketing)/blog/[slug]/page.tsx` (détail), contenu dans `blogPosts` (`src/content/site-content.ts:962-1710`).

### 7.1 Ce qui fonctionne

- **URLs propres et descriptives** : `/blog/pourquoi-optimisation-referencement-naturel-importante`, `/blog/posseder-son-site-sans-abonnement`. Structure plate `/blog/{slug}`, sans date ni ID. ✅
- **`seoTitle` / `seoDescription` distincts du `title`** d'affichage — bonne pratique bien implémentée (`BlogPost` interface, `site-content.ts:16-17`).
- **Maillage inter-articles** : chaque article liste les 7 autres en bas de page (vérifié en ligne : 7 ancres `/blog/…` sur `/blog/site-web-rapide-pme-independant`), avec des ancres cette fois **descriptives** (le titre complet). ✅
- **Hn corrects** : 1 H1, H2 par section.
- **8 articles**, thématiquement cohérents : rapidité (1), propriété du site (2), SEO/GEO (4), livraison (1).

### 7.2 FINDING #19 — Aucune date de publication ni auteur sur aucun article

- **Sévérité : Élevé**
- **Preuve** : `interface BlogPost` (`src/content/site-content.ts:11-22`) déclare `slug, category, title, excerpt, seoTitle, seoDescription, intro, sections, ctaTitle, ctaDescription`. **Aucun champ `date`, `publishedAt`, `updatedAt`, `author`.** Confirmé en ligne : aucune date ni signature dans le HTML de `/blog/site-web-rapide-pme-independant`.
- **Preuve aggravante** : `src/app/sitemap.ts:39-43` déclare `lastModified: new Date()` pour **tous** les articles — c'est-à-dire **la date du build**. Chaque redéploiement signale à Google que les 8 articles ont été modifiés. C'est un signal de fraîcheur faux, que Google apprend à ignorer.
- **Impact SEO** : (a) pas de signal de fraîcheur exploitable ; (b) pas de `datePublished`/`author` → **schéma `Article` impossible** ; (c) **E-E-A-T** : contenu non signé, non daté, sur un sujet — le conseil en SEO — où Google valorise fortement l'expertise identifiable.
- **Correctif** : ajouter `publishedAt`, `updatedAt` et `author` à l'interface `BlogPost`, les afficher dans le template d'article, brancher `sitemap.ts` sur `post.updatedAt`, puis ajouter le JSON-LD `Article`.

### 7.3 FINDING #20 — Articles trop courts (~320 mots)

- **Sévérité : Élevé**
- **Preuve** : `/blog/site-web-rapide-pme-independant` = 472 mots rendus, dont ~150 de nav/footer → **~320 mots d'article** : intro + 3 sections de 2 paragraphes + 4 puces + CTA. Structure identique pour les 8 articles (`sections` de 2-3 items chacune dans `site-content.ts`).
- **Impact SEO** : sur les requêtes visées (« qu'est-ce que le SEO et le GEO », « pourquoi le référencement naturel est important »), la concurrence produit 1 500–2 500 mots. 320 mots ne couvrent pas le champ sémantique.
- **Correctif** : plutôt que d'allonger artificiellement les 8 existants, produire **4 à 6 articles piliers de 1 500+ mots** sur les requêtes du §8, et convertir les 8 actuels en satellites qui pointent vers eux.

### 7.4 FINDING #21 — Le blog ne maille presque pas vers les pages money

- **Sévérité : Moyen**
- **Preuve** : sur `/blog/site-web-rapide-pme-independant`, les seuls liens hors-blog en dehors de la nav/footer sont `/templates` (×1, « Voir les templates ») et `/#contact` (×1, dans le CTA). **Aucun lien vers `/realization`, aucun vers `/seo-geo`.** Depuis `/blog` (listing), **aucun** lien vers une page money hors nav/footer.
- **Impact SEO** : le blog capte (potentiellement) du trafic informationnel qu'il ne redistribue pas vers les pages transactionnelles, ni en visiteurs ni en PageRank.
- **Correctif** : liens contextuels en cours de texte (pas seulement en pied d'article), avec ancres exactes : « notre offre de création de site à 500 € », « nos réalisations », « notre approche SEO et GEO ».

### 7.5 Note — deux titles d'articles dépassent 60 caractères

Voir §1.6 et §9 : `pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` (73), `comment-se-passe-la-livraison…` (70), `site-sans-referencement…` (67).

---

## 8. Recommandations mots-clés

> ⚠️ **Les volumes ci-dessous sont des ESTIMATIONS** fondées sur ma connaissance du marché FR et sur la SERP consultée le 10/08/2026. **Non vérifiés par un outil de volumétrie** (Ahrefs / Semrush / Search Console). À valider avant arbitrage budgétaire.

### 8.1 Les 5 mots-clés principaux

| # | Mot-clé | Volume/mois (est.) | Difficulté (est.) | Page cible | Pourquoi celui-ci |
|---|---|---|---|---|---|
| 1 | **prix création site internet** / **combien coûte un site internet** | 2 000–3 500 | Moyenne-élevée | **`/tarifs` (à créer)** | Intention commerciale maximale. SERP vérifiée : **100 % d'articles de blog d'agences** (Jalis, Plateya, MR Agence Web, AXTRACOM, Webutin, iPaoo) — donc **aucune page tarifs transactionnelle** à battre. Et Sitekept a un prix de rupture (500 € vs 1 500–8 000 €). **C'est le meilleur ratio ROI/effort du site.** |
| 2 | **création site internet [ville]** / **agence web [ville]** | 300–2 000 selon la ville | Moyenne | **`/agence-web-{ville}` (à créer)** | Le levier historique des petites agences. **Bloqué** tant que les mentions légales sont « À COMPLÉTER ». Débloquer en priorité. |
| 3 | **site internet pour [métier]** (plombier, restaurant, dentiste, coiffeur…) | 100–500 par métier, ~2 500 cumulés | **Faible** | **13 pages métier (à créer)** | Longue traîne peu disputée. Sitekept a **déjà les 13 templates** — le coût marginal est quasi nul. Meilleur ROI après `/tarifs`. |
| 4 | **création site vitrine pas cher** / **site internet pas cher professionnel** | 800–1 500 | Moyenne | **`/tarifs` + home** | Aligné pile sur le positionnement 500 €. Attention : arbitrer « pas cher » vs perception de qualité — préférer « site internet à prix fixe » dans le H1, « pas cher » dans le corps. |
| 5 | **refonte site internet** | 1 000–2 000 | Moyenne-élevée | **`/refonte-site-internet` (à créer)** | Budget client plus élevé, intention forte, et l'argument « propriété + pas d'abonnement » y fait mouche : la refonte est souvent motivée par un prestataire qui retenait le site en otage. **Angle naturel pour Sitekept.** |

**À ne PAS cibler en direct** : « création site internet » sec (~18 000/mois, KD très élevé, SERP saturée d'agences nationales + Wix/Shopify). L'atteindre par l'autorité accumulée sur les 5 clusters ci-dessus, pas frontalement.

### 8.2 Les 10 sujets de contenu à fort ROI

Classés par ratio (impact commercial × faisabilité) / effort.

| # | Sujet | Format | Requête | Intention | Priorité |
|---|---|---|---|---|---|
| 1 | **Prix d'un site internet en 2026 : le vrai coût, décomposé** | Page `/tarifs` + guide 1 800 mots, tableau comparatif agence / freelance / SaaS / Sitekept | prix création site internet | Transactionnelle | **P0** |
| 2 | **Site internet pour [métier] : ce qu'il vous faut vraiment** ×13 | Pages métier 800 mots, chacune reliée à son template + démo | site internet plombier / restaurant / dentiste… | Commerciale | **P0** |
| 3 | **Combien coûte vraiment un abonnement Wix / Squarespace sur 5 ans ?** | Article comparatif chiffré 1 500 mots | wix prix / alternative wix | Commerciale | **P0** — attaque frontale du principal concurrent, sur le différenciateur exact de Sitekept |
| 4 | **Qui possède votre site web ? Le piège des agences avec abonnement** | Article 1 500 mots + checklist téléchargeable | propriété site web / résilier abonnement site internet | Informationnelle → commerciale | **P1** — l'angle le plus défendable, quasi sans concurrence |
| 5 | **Refonte de site internet : quand, pourquoi, combien** | Page service `/refonte-site-internet` 1 500 mots | refonte site internet | Transactionnelle | **P1** |
| 6 | **Récupérer son site web chez un prestataire : le guide** (code, domaine, hébergement) | Article 1 800 mots, procédure pas-à-pas | changer de prestataire site internet | Informationnelle → conquête | **P1** — capte des clients d'agences concurrentes en train de partir |
| 7 | **Agence web à [ville] : notre offre locale** | 3-5 pages locales 800 mots, avec NAP + GBP | agence web [ville] | Transactionnelle | **P1** — **conditionné aux mentions légales** |
| 8 | **Checklist SEO d'un site vitrine : 20 points à vérifier avant la mise en ligne** | Article 2 000 mots, actionnable | checklist seo site vitrine | Informationnelle | **P2** — fort potentiel de backlinks et de citation par les IA |
| 9 | **GEO : comment apparaître dans les réponses de ChatGPT, Perplexity et Google AI** | Article pilier 2 500 mots | GEO référencement IA / optimisation pour l'IA | Informationnelle | **P2** — requête émergente, faible concurrence, positionnement différenciant. **Refonte de `/seo-geo` en page pilier.** |
| 10 | **Site internet en 48h : ce que ça implique vraiment (et ce que ça n'implique pas)** | Article transparence 1 200 mots | site internet rapide / créer un site en une semaine | Commerciale | **P2** — traite l'objection « trop beau pour être vrai » et crédibilise la promesse centrale |

### 8.3 Séquencement suggéré

1. **Semaine 0 — déblocage** : merger `dev`→`main` ; renseigner les mentions légales (raison sociale, SIREN, siège, directeur de publication) ; corriger le canonical www ; convertir les boutons `window.open` en `<a href>` (Finding #12).
2. **Mois 1 — fondations** : `/tarifs` ; `metadata` sur les 4 pages orphelines ; désindexation des démos ; JSON-LD `Organization` + `FAQPage` ; suppression de `keywords`.
3. **Mois 2 — capture** : 13 pages métier (recyclage des templates) ; ancres descriptives ; fil d'Ariane ; dates + auteurs sur le blog.
4. **Mois 3+ — autorité** : articles piliers 1/3/4/6 ; pages locales si le NAP est en place ; refonte de `/seo-geo`.

---

## 9. Tableau récapitulatif — titles & descriptions

Longueurs entre parenthèses. Textes **prêts à copier**.

| Route | Title actuel | Long. | Title proposé | Description proposée |
|---|---|---|---|---|
| `/` | Sitekept \| Site pro en 48h, sans abonnement et 100% à vous | 58 | `Création de site internet dès 500€ \| Sitekept` **(45)** | `Agence web spécialisée PME et artisans : votre site professionnel livré en 48h, sans abonnement, 100 % à vous. Devis gratuit en 24h.` **(133)** |
| `/templates` | Templates Sitekept \| Bases de sites rapides a personnaliser | 59 | `Modèles de sites internet par métier \| Sitekept` **(46)** | `13 modèles de sites prêts à personnaliser : boulangerie, dentiste, plombier, restaurant, avocat, immobilier. Adaptés à votre activité en 48h.` **(141)** |
| `/realization` | *(hérite de la home)* | 58 | `Nos réalisations \| Sites web livrés par Sitekept` **(49)** | `Découvrez les sites livrés par Sitekept pour des PME, indépendants et commerces : design, structure SEO et mise en ligne. Demandez un devis gratuit.` **(150)** |
| `/blog` | Blog Sitekept \| Rapidite, propriete du site, SEO et GEO | 55 | `Blog Sitekept \| Guides création de site et SEO` **(46)** | `Nos guides pour créer, posséder et référencer votre site web : prix, propriété du code, SEO et visibilité dans les réponses IA.` **(128)** |
| `/seo-geo` | SEO + GEO \| Comprendre la visibilité naturelle d'un site | 56 | `SEO et GEO : rendre votre site visible \| Sitekept` **(48)** | `Comment un site devient visible sur Google et dans les réponses IA : structure, contenu, vitesse. Nos sites sont optimisés dès la livraison.` **(139)** |
| `/tarifs` **(à créer)** | — | — | `Prix d'un site internet en 2026 \| Sitekept` **(42)** | `Combien coûte un site internet ? Comparatif agence, freelance et SaaS, et notre offre à partir de 500€ sans abonnement. Tarifs détaillés.` **(136)** |
| `/privacy` | *(hérite de la home)* | 58 | `Politique de confidentialité \| Sitekept` **(39)** | `Comment Sitekept collecte, utilise et protège vos données personnelles conformément au RGPD, et comment exercer vos droits.` **(122)** |
| `/terms` | *(hérite de la home)* | 58 | `Conditions générales d'utilisation \| Sitekept` **(45)** | `Conditions d'utilisation des services Sitekept : prestations, tarifs, propriété intellectuelle, délais de livraison et garanties.` **(129)** |
| `/mentions-legales` | *(hérite ; 404 en prod)* | 58 | `Mentions légales \| Sitekept` **(27)** | `Mentions légales du site sitekept.com : éditeur, directeur de la publication, hébergeur et coordonnées de contact.` **(114)** |
| `/blog/site-web-rapide-pme-independant` | Site web rapide à lancer pour PME et indépendant \| Sitekept | 59 | *(conserver)* | *(conserver — 147 car., OK)* |
| `/blog/posseder-son-site-sans-abonnement` | Posséder son site sans abonnement \| Sitekept | 44 | *(conserver)* | *(conserver — 134 car., OK)* |
| `/blog/site-optimise-seo-geo` | Site optimise SEO et GEO \| Sitekept | 35 | `Site optimisé SEO et GEO : le guide \| Sitekept` **(46)** ⚠️ accent | `Comment penser un site visible à la fois pour Google et pour les interfaces IA : structure, vitesse, clarté et signaux de confiance.` **(133)** |
| `/blog/qu-est-ce-que-le-seo-et-le-geo` | Qu'est-ce que le SEO et le GEO ? \| Sitekept | 43 | *(conserver)* | *(conserver — 142 car., OK)* |
| `/blog/site-sans-referencement-peut-devenir-inutile` | Pourquoi un site sans référencement peut devenir inutile \| Sitekept | **67** ❌ | `Site sans référencement : pourquoi il devient inutile` **(53)** | *(conserver — 131 car., OK)* |
| `/blog/pourquoi-optimisation-referencement-naturel-importante` | Pourquoi le référencement naturel est important \| Sitekept | 58 | *(conserver)* | *(conserver — 131 car., OK)* |
| `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` | Pourquoi avoir un site qui nous appartient à 100 % change tout \| Sitekept | **73** ❌ | `Posséder son site à 100 % : pourquoi ça change tout` **(51)** | *(conserver — 133 car., OK)* |
| `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept` | Comment se passe la livraison d'un site web chez Sitekept ? \| Sitekept | **70** ❌ | `Livraison d'un site web : notre process \| Sitekept` **(49)** | `Développement en interne, dépôt GitHub à votre nom, déploiement Vercel et domaine offert la première année. Voici comment Sitekept livre.` **(139)** |
| 13 démos (`/boulangerie`…) | ex. Clinique Nova Sourire - Cabinet dentaire | 40 | **Recommandation : `robots: { index: false }`** ou déport vers `sitekept-templates.vercel.app` | — |
| 37 sous-pages de démos | *(identiques à leur page mère)* | — | **idem** | — |

---

## 10. Synthèse par sévérité

### Critique (2)
- **#12** — Les 13 templates sont orphelines : le lien « Visiter » est un `window.open()` en JavaScript, pas un `<a href>`. Vérifié : 0 ancre vers un template sur `/templates` en production.
- **#17** — Le contenu ne répond à aucune des 3 intentions de recherche cibles : « création site internet » absent de tous les titles/H1/H2 ; aucune ville (mentions légales « À COMPLÉTER ») ; aucune page tarifs.

### Élevé (10)
- **#1** — 4 pages publiques héritent du title/description de la home
- **#2** — 37 sous-pages de démos ont un title/description strictement dupliqué
- **#4** — Canonical et sitemap en non-www alors que le site sert www (307)
- **#6** — Fautes de français et accents manquants dans les metadata (persiste sur `dev`)
- **#8** — Le H1 de la home ne contient aucun mot-clé de recherche
- **#13** — Les 13 démos sont des culs-de-sac sans lien de retour vers sitekept.com
- **#16** — Pages money sous 300 mots (`/templates` 270, `/realization` 235, `/seo-geo` 210)
- **#18** — Zéro donnée structurée JSON-LD sur tout le site
- **#19** — Aucune date ni auteur sur les articles ; `lastModified` = date de build
- **#20** — Articles de blog à ~320 mots
- *(+ §0 : production en retard d'un commit — `/mentions-legales` en 404, accents non déployés)*

### Moyen (7)
**#3** canonicals absents · **#5** longueurs hors gabarit · **#9** 37 sous-pages sans H1 · **#10** aucune image de contenu · **#11** aucun `og:image` ni `metadataBase` · **#14** ancres non descriptives (« Lire la page » ×8) · **#15** aucun fil d'Ariane · sauts H1→H3 sur `/templates` et `/realization` · `/realization` absente du footer

### Faible (3)
**#7** balise `keywords` (ignorée depuis 2009) · `rel="noreferrer"` sans `noopener` · `public/robots.txt` orphelin contenant `Sitemap: https://yourdomain.com/sitemap.xml` (actuellement masqué par `src/app/robots.ts`, mais à supprimer)

---

## Annexe — Éléments vérifiés et jugés CORRECTS

Pour éviter tout faux positif dans les deux sens, voici ce qui a été contrôlé et ne pose pas de problème :

- Structure Hn de la home : 1 seul H1, aucun saut de niveau, aucun Hn détourné pour du style
- Structure Hn de `/blog`, `/blog/[slug]`, `/seo-geo`, `/privacy`, `/terms`
- `/template` (singulier) : `permanentRedirect("/templates")` (`src/app/(marketing)/template/page.tsx:4`) — redirection 308 propre, et absent du sitemap ✅
- `/admin-templates-7q4p9s2m` : `robots: { index: false, follow: false }` correctement posé ✅
- `robots.txt` en production : correct (`Allow: /` + sitemap sur le bon domaine)
- `src/app/avocate-tel-aviv/page.tsx:49` : image de fond en `alt="" aria-hidden="true"` — traitement exemplaire ✅
- `src/app/avocate-tel-aviv/page.tsx:146` : alt descriptif exemplaire ✅
- Aucun `<Image>`/`<img>` sans attribut `alt` dans tout le dépôt ✅
- Maillage inter-articles du blog : 7 liens croisés par article, avec ancres = titres complets ✅
- Slugs d'articles : descriptifs, plats, sans date ni ID ✅
- `seoTitle`/`seoDescription` séparés du titre d'affichage : bonne architecture ✅
- Profondeur de clic ≤ 2 pour toutes les pages du sitemap — **une fois le #12 corrigé**
- Tous les `target="_blank"` du dépôt portent un `rel` (imprécis mais sans faille)

---

*Aucun fichier du dépôt n'a été modifié.*
