# Audit SEO technique & crawlabilité — sitekept.com

**Date :** 2026-08-10
**Branche auditée :** `dev` (HEAD `1c7c98d`)
**Prod observée :** `https://www.sitekept.com` (Vercel, `fra1`)
**Stack :** Next.js 15.3.6 App Router, next-intl 4.3.4, TypeScript
**Méthode :** lecture du code (lecture seule, aucune modification) + requêtes HTTP réelles avec `User-Agent: Googlebot` le 2026-08-10.

---

## 0. Le fait qui change tout : le site vit sur `www`, le code croit vivre sur non-`www`

Avant d'entrer dans les findings, un constat structurant découvert en testant les statuts HTTP, et qui contamine les sections 1, 2, 4 et 6.

Réponses réelles observées :

```
https://sitekept.com/            → 307  Location: https://www.sitekept.com/
https://sitekept.com/dentiste    → 307  Location: https://www.sitekept.com/dentiste
https://sitekept.com/sitemap.xml → 307  Location: https://www.sitekept.com/sitemap.xml
https://www.sitekept.com/        → 200  text/html
http://sitekept.com/             → 308  Location: https://sitekept.com/   (puis 307 vers www)
http://www.sitekept.com/         → 308  Location: https://www.sitekept.com/
```

L'hôte canonique servi par Vercel est **`www.sitekept.com`**. Or tout le code SEO écrit en dur **`https://sitekept.com`** (sans `www`) :

- `src/app/sitemap.ts:6` — `const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sitekept.com";`
- `src/app/robots.ts:9` — `${process.env.NEXT_PUBLIC_BASE_URL || "https://sitekept.com"}/sitemap.xml`
- `src/lib/page-metadata.ts:3` — `const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sitekept.com";`
- `src/app/layout.tsx:46` — `url: "https://sitekept.com"`

Et la variable d'environnement **n'est pas positionnée en production** — preuve : le `sitemap.xml` servi contient bien `https://sitekept.com/...` (voir §2), donc le fallback est actif.

Ironie révélatrice : le code *sait* que l'hôte est `www` à un seul endroit, `src/content/admin-template-catalog.ts:19` :

```ts
const SITEKEPT_BASE_URL = "https://www.sitekept.com";
```

Deux sources de vérité contradictoires dans le même dépôt.

**Correctif racine (résout à lui seul les findings #1, #2 et une partie de #6).** Deux options, à trancher par le business :

*Option A — garder `www` comme hôte canonique (recommandée, c'est l'état actuel de la prod) :* définir dans Vercel (Project → Settings → Environment Variables, scope Production **et** Preview) :

```
NEXT_PUBLIC_BASE_URL=https://www.sitekept.com
```

*Option B — basculer le canonique sur non-`www` :* inverser le domaine principal dans Vercel (Settings → Domains → « Set as primary » sur `sitekept.com`), puis laisser le fallback du code tel quel.

Ne pas faire les deux à moitié. Dans les deux cas, aligner `src/content/admin-template-catalog.ts:19` sur la même valeur, idéalement en la faisant dériver d'une constante unique.

---

## Finding #1 — Toutes les balises `canonical` pointent vers une URL qui redirige

**Sévérité : Critique**

### Preuve

Requête réelle sur `https://www.sitekept.com/` (UA Googlebot) :

```html
<link rel="canonical" href="https://sitekept.com"/>
<meta property="og:url" content="https://sitekept.com"/>
```

Sur `https://www.sitekept.com/templates` :

```html
<link rel="canonical" href="https://sitekept.com/templates"/>
```

Sur `https://www.sitekept.com/seo-geo` :

```html
<link rel="canonical" href="https://sitekept.com/seo-geo"/>
```

Et `https://sitekept.com/templates` renvoie `307 → https://www.sitekept.com/templates`.

Origine : `src/lib/page-metadata.ts:16,21-23`.

```ts
const url = path === "/" ? baseUrl : `${baseUrl}${path}`;
// ...
alternates: {
  canonical: url,
},
```

### Impact SEO

La page servie sur `www` déclare comme canonique une URL non-`www` qui **redirige vers elle-même en 307**. Google reçoit deux signaux contradictoires : la redirection dit « la version faisant autorité est `www` », le canonical dit « c'est non-`www` ». Google résout ce conflit de son côté, sans garantie de résultat : URL sélectionnée imprévisible dans la Search Console (« URL en double, Google n'a pas sélectionné la même canonique que l'utilisateur »), signaux de lien dilués sur deux hôtes, et rapports GSC instables. C'est le défaut le plus coûteux de l'audit car il touche **100 % des pages qui ont un canonical**.

### Correctif

Appliquer le correctif racine du §0 (variable d'environnement). Aucun changement de code n'est nécessaire si l'option A est retenue — c'est un correctif de configuration, déployable en une minute.

Pour rendre le système robuste indépendamment de l'environnement, centraliser aussi la base URL. Dans `src/lib/page-metadata.ts:3`, remplacer :

```ts
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sitekept.com";
```

par un import depuis un module unique (à créer, ex. `src/lib/site-url.ts`) :

```ts
// src/lib/site-url.ts
export const SITE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.sitekept.com"
).replace(/\/$/, "");
```

puis consommer `SITE_URL` dans `sitemap.ts`, `robots.ts`, `page-metadata.ts`, `layout.tsx` et `admin-template-catalog.ts`. Une seule constante, plus de dérive possible.

---

## Finding #2 — La redirection non-`www` → `www` est un 307 (temporaire), pas un 301/308

**Sévérité : Élevé**

### Preuve

```
$ curl -sI -A Googlebot https://sitekept.com/dentiste
HTTP/2 307
cache-control: public, max-age=0, must-revalidate
location: https://www.sitekept.com/dentiste
server: Vercel
```

À comparer avec la redirection HTTP→HTTPS, elle correctement permanente :

```
$ curl -I http://www.sitekept.com/
308 → https://www.sitekept.com/
```

`next.config.ts` (fichier complet, 15 lignes) ne définit **aucune** redirection — il ne contient que `images.remotePatterns`. La redirection non-`www`→`www` vient donc de la configuration de domaine Vercel, pas du code.

### Impact SEO

Un 307 est explicitement *temporaire*. Google ne consolide pas les signaux de lien vers la cible d'une redirection temporaire de la même façon que pour une permanente, et conserve l'URL source dans son index bien plus longtemps. Combiné au Finding #1 (le canonical désigne justement cette URL source), cela entretient activement la duplication non-`www` / `www` au lieu de la résoudre.

Nuance à connaître : Vercel sert un 307 sur les redirections de domaine et un 308 sur les redirections de chemin (`/template` → `/templates` renvoie bien 308, voir §7). Le 307 est le comportement par défaut de la redirection de domaine Vercel.

### Correctif

Le plus propre est de rendre la redirection explicite et permanente dans le code, ce qui la met sous contrôle du dépôt plutôt que de la console Vercel. Dans `next.config.ts` :

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sitekept.com" }],
        destination: "https://www.sitekept.com/:path*",
        permanent: true, // → 308
      },
    ];
  },
};

export default nextConfig;
```

Vérifier après déploiement que la redirection Vercel native ne s'applique pas *avant* celle de Next (auquel cas il faut la retirer côté Vercel pour que la règle du code prenne effet).

---

## Finding #3 — Les 59 pages de démo sont indexables, sans canonical, et se présentent comme de vraies entreprises

**Sévérité : Critique** — c'est la question stratégique de la mission, et la réponse est plus grave que « contenu dupliqué ».

### Preuve — volume

59 routes de démo dans `src/app/` (hors `(marketing)` et `admin-templates-*`), contre 10 pages marketing réelles. Les démos représentent **~85 % de la surface crawlable du domaine**.

Toutes répondent 200 et sont indexables. Vérifications réelles :

```
/dentiste                       200      /balinjera                200
/dentiste/contact               200      /balinjera/events         200
/restaurant-bistrot/menu        200      /salon-coiffure/stylists  200
/agence-immobiliere/biens       200      /menage-nettoyage/faq     200
/architecte-interieur/projets   200      /cabinet-avocat/expertises 200
```

`src/app/layout.tsx:56-66` applique `robots: { index: true, follow: true }` à **toute** l'application, démos comprises. Confirmé dans le HTML servi de `/dentiste` :

```html
<meta name="robots" content="index, follow"/>
```

Aucune démo ne pose de `noindex` : la seule occurrence de `index: false` dans tout `src/` est `src/app/admin-templates-7q4p9s2m/page.tsx:10-17`.

### Preuve — aucun canonical sur les démos

Les démos n'utilisent pas `buildPageMetadata`. Les 5 seuls fichiers qui l'importent sont des pages marketing :

```
src/app/(marketing)/page.tsx:16
src/app/(marketing)/blog/[slug]/page.tsx:12
src/app/(marketing)/blog/page.tsx:10
src/app/(marketing)/seo-geo/page.tsx:11
src/app/(marketing)/templates/page.tsx:10
```

Recherche de `rel="canonical"` dans le HTML servi :

| URL | canonical |
|---|---|
| `/seo-geo` | `https://sitekept.com/seo-geo` |
| `/templates` | `https://sitekept.com/templates` |
| `/dentiste` | **aucun** |
| `/balinjera` | **aucun** |
| `/restaurant-bistrot/menu` | **aucun** |
| `/realization` | **aucun** — alors que cette page est dans le sitemap |

Pire, les démos héritent l'`og:url` du layout racine (`src/app/layout.tsx:46`). Le HTML de `/dentiste` contient :

```html
<meta property="og:url" content="https://sitekept.com"/>
```

Les 59 pages de démo déclarent donc toutes la **page d'accueil** comme leur URL Open Graph. Tout partage social d'une démo affiche l'aperçu de l'accueil SiteKept.

### Preuve — volume de contenu unique par démo (mesuré sur le HTML rendu)

| Page d'accueil de démo | Mots | Sous-page | Mots |
|---|---:|---|---:|
| `/avocate-tel-aviv` | 546 | `/dentiste/contact` | 164 |
| `/dentiste` | 497 | `/menage-nettoyage/zones` | 139 |
| `/fleuriste` | 491 | `/salon-coiffure/reservation` | 114 |
| `/boulangerie` | 482 | `/architecte-interieur/contact` | 113 |
| `/pattiserie` | 475 | `/salon-coiffure/contact` | 93 |
| `/menage-nettoyage` | 451 | `/restaurant-bistrot/contact` | 79 |
| `/ordinateur` | 449 | `/restaurant-bistrot/galerie` | 70 |
| `/balinjera` | 383 | | |
| `/plombier-chauffagiste` | 362 | | |
| `/architecte-interieur` | 342 | | |
| `/cabinet-avocat` | 314 | | |
| `/agence-immobiliere` | 301 | | |
| `/salon-coiffure` | 242 | | |
| `/restaurant-bistrot` | 179 | | |

*Référence marketing :* `/` = 1241 mots, `/blog` = 476, `/templates` = 420, `/realization` = 385, `/seo-geo` = 363.

**Lecture honnête de ces chiffres :** les démos ne sont *pas* dupliquées entre elles — chaque secteur a son propre texte, sa propre identité fictive. Le diagnostic « contenu quasi-dupliqué » posé dans le brief n'est donc **pas** le bon angle, et je le corrige. En revanche :

- les **sous-pages** (70 à 164 mots) sont du *thin content* caractérisé ;
- une page de démo (179-546 mots) pèse autant, voire plus, qu'une page commerciale réelle (`/templates` 420, `/realization` 385) ;
- 46 des 59 pages de démo sont absentes du sitemap (voir Finding #4), donc orphelines des signaux d'architecture.

### Preuve — le vrai risque : des entités commerciales fictives avec NAP complet

`src/app/dentiste/layout.tsx:54,101,103` :

```
href="tel:+33184120018"
<p>15 avenue du Parc, Levallois-Perret</p>
<p>contact@novasourire.fr</p>
```

`src/app/dentiste/contact/page.tsx:16,18` :

```
"15 avenue du Parc, 92300 Levallois-Perret",
"contact@novasourire.fr",
```

Un cabinet dentaire fictif — « Clinique Nova Sourire » — avec adresse postale complète, code postal réel (92300 Levallois-Perret), numéro de téléphone en `+33 1 84 12 00 18` et e-mail, publié en indexable sur le domaine de l'agence. Le patron se répète sur les 13 secteurs.

Et **rien n'indique au visiteur ni au crawler qu'il s'agit d'une démo**. La fonction prévue pour cela, `isPublicTemplatePathname` (`src/lib/public-template-routes.ts:5-14`), est exportée mais **n'est appelée nulle part** — recherche sur tout `src/` : zéro occurrence hors du fichier de définition. Aucun bandeau « démo », aucune mention dans les `<title>` servis (`<title>Clinique Nova Sourire - Cabinet dentaire</title>`).

### Impact SEO

Trois risques, par ordre de gravité :

1. **Entités fictives (le plus sérieux).** Google indexe une clinique dentaire à Levallois-Perret qui n'existe pas, avec NAP complet. C'est un problème de fiabilité au sens des Quality Rater Guidelines, pas un problème de duplication. Si ces pages captent des requêtes locales (« dentiste Levallois »), l'utilisateur atterrit sur une fiche d'entreprise inventée. Risque de signalement, et risque de dégradation de la confiance accordée à l'ensemble du domaine — donc aux pages commerciales qui, elles, doivent convertir.
2. **Cannibalisation.** `/dentiste`, `/boulangerie`, `/plombier-chauffagiste` sont exactement les URLs et les intitulés qui capteraient « site web dentiste », « site internet boulangerie ». Ces requêtes sont celles que la page `/templates` (420 mots) doit gagner. Les démos, plus nombreuses et mieux étoffées individuellement, entrent en concurrence avec l'offre commerciale.
3. **Budget de crawl et signal de qualité agrégé.** 59 URLs, dont une majorité sous 200 mots, sans canonical, sans lien depuis le sitemap. Sur un domaine jeune, c'est le gros du crawl consommé par des pages qui ne rapportent rien.

### Recommandation

Trois scénarios, du plus recommandé au moins :

**Scénario A — Sous-domaine dédié (recommandé).** Déplacer les démos sur `demo.sitekept.com` (ou le `sitekept-templates.vercel.app` qui existe déjà, cf. `src/content/admin-template-catalog.ts:18`), avec `noindex` global sur ce sous-domaine, et redirection 301 des 59 URLs actuelles vers `/templates`. C'est la seule option qui sépare proprement la vitrine commerciale de la démonstration produit : le domaine principal ne contient plus que des pages qui vendent, et les démos restent parfaitement consultables par les prospects via les liens de `/templates`. Coût : une migration de routes.

**Scénario B — `noindex, follow` sur les démos (correctif immédiat, faible coût).** Garder les URLs en place, les sortir de l'index. `follow` est important : les liens internes des démos vers le site continuent de transmettre les signaux, et les prospects y accèdent toujours par `/templates`. C'est le patch à appliquer **cette semaine** même si le scénario A est retenu à terme.

Implémentation — créer un layout partagé ou, plus simple sans restructurer, ajouter dans **chaque** `layout.tsx` de démo (et dans `src/app/plombier-chauffagiste/page.tsx` et `src/app/boulangerie/page.tsx` qui n'ont pas de layout dédié) :

```ts
export const metadata: Metadata = {
  title: "Clinique Nova Sourire - Cabinet dentaire (démo SiteKept)",
  description: "…",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};
```

Plus robuste et sans duplication : utiliser la fonction déjà écrite mais inutilisée. Créer `src/middleware.ts` :

```ts
import { NextResponse, type NextRequest } from "next/server";
import { isPublicTemplatePathname } from "@/lib/public-template-routes";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (isPublicTemplatePathname(request.nextUrl.pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }
  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
```

Attention : `PUBLIC_TEMPLATE_SLUGS` ne contient **pas** `balinjera` (il est dans `adminOnlySlugs`, `src/content/admin-template-catalog.ts:37-41`) alors que `/balinjera` répond 200 en prod. Il faut élargir la liste utilisée par le middleware aux slugs admin-only également.

**Scénario C — garder indexé.** Défendable uniquement si les démos sont retravaillées en vraies pages de vente sectorielles (« Site web pour dentiste — exemple et tarifs », avec contenu SiteKept, CTA, tarifs), et non en fiches d'entreprises fictives. C'est un chantier éditorial, pas un correctif technique. Dans ce cas, supprimer impérativement les NAP inventés.

**Dans tous les scénarios**, ajouter un bandeau « Démo SiteKept — entreprise fictive » visible sur chaque page de démo, et retirer ou neutraliser les coordonnées inventées (téléphone en `+33 1 99 00 00 00`, adresses sans numéro réel).

---

## Finding #4 — Sitemap : 28 URLs pour ~72 pages réelles, 46 démos absentes, 1 URL en 404

**Sévérité : Élevé**

### Preuve

`https://www.sitekept.com/sitemap.xml` → 200, `application/xml`, 4832 octets, **28 `<loc>`**.

Contenu servi (toutes les URLs sont en non-`www`, cf. Finding #1) :

```
/ , /templates
/boulangerie /fleuriste /ordinateur /pattiserie /dentiste /plombier-chauffagiste
/salon-coiffure /menage-nettoyage /restaurant-bistrot /architecte-interieur
/cabinet-avocat /avocate-tel-aviv /agence-immobiliere
/blog /seo-geo
+ 8 articles /blog/*
/realization /privacy /terms
```

Source : `src/app/sitemap.ts:8-69`, les 13 slugs venant de `PUBLIC_TEMPLATE_SLUGS` (`src/lib/public-template-routes.ts:3` → `src/content/admin-template-catalog.ts:21-35`).

**Écarts constatés :**

| Écart | Détail | Preuve |
|---|---|---|
| **46 démos absentes** | Le sitemap ne liste que les 13 pages d'accueil de démo. Les 46 sous-pages sont indexables mais orphelines. | `find src/app -name page.tsx` hors marketing/admin = **59** routes ; 13 dans le sitemap |
| **`/balinjera` orphelin** | Répond **200** en prod, absent du sitemap car classé `adminOnlySlugs` | `src/content/admin-template-catalog.ts:37-41` ; `curl /balinjera` → 200 |
| **`/mentions-legales` en 404** | Présent dans `src/app/sitemap.ts:63-68` et `src/app/(marketing)/mentions-legales/page.tsx` existe | `curl https://www.sitekept.com/mentions-legales` → **404** ; absent du sitemap servi (28 URLs) |

Sur ce dernier point, l'explication est un décalage de déploiement, pas un bug de code : la page et son entrée de sitemap ont été ajoutées par le commit `1c7c98d` sur la branche `dev`, non encore fusionné vers `main`/production. **Après déploiement de `dev`, ce point se résoudra seul.** Il reste à vérifier qu'aucun lien du footer en production ne pointe déjà vers cette URL 404 — **NON VÉRIFIÉ** (le footer de `dev` n'est pas celui en ligne).

### Impact SEO

Un sitemap est une déclaration d'intention d'indexation. Ici il déclare 28 URLs pendant que le site en expose ~72 : Google découvre les 46 sous-pages de démo par le maillage interne uniquement, sans priorité ni `lastmod`, et les traite comme du contenu de second rang — ce qui est cohérent avec la recommandation du Finding #3 (les désindexer), mais incohérent avec l'état actuel où elles sont `index, follow`. Aujourd'hui le site envoie deux signaux opposés : « indexe tout » (meta robots) et « voici mes 28 pages qui comptent » (sitemap).

### Correctif

Le correctif dépend de l'arbitrage du Finding #3.

*Si scénario B ou A (démos désindexées) :* retirer aussi les 13 pages d'accueil de démo du sitemap. Dans `src/app/sitemap.ts`, supprimer le bloc lignes 21-26 :

```ts
...PUBLIC_TEMPLATE_SLUGS.map((slug) => ({
  url: `${baseUrl}/${slug}`,
  lastModified: new Date(),
  changeFrequency: "weekly" as const,
  priority: 0.8,
})),
```

Le sitemap tombe à 15 URLs, toutes commerciales, toutes canoniques — un signal net.

*Si scénario C (démos gardées indexées) :* générer les 59 URLs plutôt que 13, en dérivant la liste des routes du système de fichiers ou d'un manifeste explicite, et ajouter `/balinjera`.

---

## Finding #5 — `lastModified: new Date()` : 28 dates identiques, figées au build

**Sévérité : Moyen**

### Preuve

`src/app/sitemap.ts` — `lastModified: new Date()` apparaît **11 fois** (lignes 11, 17, 23, 29, 35, 41, 47, 53, 59, 65 et via le `.map`).

Valeur réellement servie, mesurée le **2026-08-10** :

```xml
<lastmod>2026-07-01T09:15:12.165Z</lastmod>
<lastmod>2026-07-01T09:15:12.165Z</lastmod>
<lastmod>2026-07-01T09:15:12.165Z</lastmod>
```

Les 28 URLs partagent la **même milliseconde**.

### Correction d'une prémisse du brief

Le brief annonçait des dates « toujours maintenant ». **C'est inexact et je le rectifie** : le sitemap est généré statiquement au build, donc `new Date()` est figé à l'**heure de build** (2026-07-01T09:15:12.165Z), soit 40 jours avant l'audit. Ce n'est pas un horodatage glissant.

Le vrai défaut est double, et différent :

1. **Les 28 URLs portent une date identique à la milliseconde** — un `lastmod` qui ne discrimine rien n'apporte aucune information à Google.
2. **La date saute à chaque déploiement**, y compris pour un déploiement qui ne touche à aucun contenu (un correctif CSS republiera les 28 URLs avec un `lastmod` frais).

### Impact SEO

Google utilise `lastmod` comme indice de priorisation du recrawl, mais **uniquement s'il le juge fiable**. Un sitemap où tout change en même temps, systématiquement, à chaque déploiement, est le cas d'école du signal que Google apprend à ignorer. Le site perd alors le bénéfice de `lastmod` pour ses vraies mises à jour — notamment les articles de blog, où il compte le plus.

### Correctif

Rattacher `lastmod` à une date de contenu réelle. Les articles disposent déjà de données éditoriales dans `src/content/site-content.ts` (`blogPosts` est importé en `src/app/sitemap.ts:2`) — vérifier la présence d'un champ date sur `BlogPost` et l'utiliser :

```ts
...blogPosts.map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.updatedAt ?? post.publishedAt),
  changeFrequency: "monthly" as const,
  priority: 0.7,
})),
```

**NON VÉRIFIÉ :** je n'ai pas confirmé que `BlogPost` expose un champ `publishedAt`/`date`. À contrôler dans `src/content/site-content.ts` avant d'appliquer ; si le champ n'existe pas, l'ajouter au modèle de contenu.

Pour les pages statiques (`/privacy`, `/terms`, `/mentions-legales`, `/seo-geo`), remplacer `new Date()` par des dates littérales mises à jour à la main lors des révisions :

```ts
{
  url: `${baseUrl}/privacy`,
  lastModified: new Date("2026-03-31"),
  changeFrequency: "yearly",
  priority: 0.2,
},
```

Note : `priority` et `changeFrequency` sont ignorés par Google depuis des années. Les conserver ne nuit pas, mais ne pas investir de temps à les ajuster.

---

## Finding #6 — `metadataBase` absent : les URLs relatives des métadonnées ne sont pas résolues

**Sévérité : Élevé**

### Preuve

Recherche de `metadataBase` sur tout `src/` : **zéro occurrence**. `src/app/layout.tsx:12-68` définit `generateMetadata()` sans ce champ.

Conséquence observable dans le HTML servi de `/dentiste` :

```html
<meta property="og:url" content="https://sitekept.com"/>
```

et aucune balise `og:image` sur aucune des pages testées (`/`, `/dentiste`, `/templates`).

### Impact SEO

`metadataBase` est ce qui permet à Next.js de transformer un chemin relatif (`/logo.png`) en URL absolue dans `og:image`, `twitter:image` et `alternates.canonical`. Sans lui :

- Next.js émet un avertissement au build et se rabat sur `http://localhost:3000` pour toute URL relative — ce qui produit des métadonnées cassées dès qu'une image OG sera ajoutée ;
- toute future page utilisant un canonical relatif (`canonical: "/templates"` au lieu de l'URL absolue) sera silencieusement erronée.

Aujourd'hui le problème est **latent** et non déclenché, car `buildPageMetadata` construit déjà des URLs absolues à la main (`src/lib/page-metadata.ts:16`) — c'est précisément ce contournement manuel qui masque l'absence de `metadataBase`. Le jour où une image OG est ajoutée (elle manque, voir Finding #10), le bug devient visible partout.

### Correctif

Dans `src/app/layout.tsx`, à l'intérieur de l'objet retourné par `generateMetadata()` (après la ligne 15) :

```ts
return {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.sitekept.com"
  ),
  title: getMessage(locale, "metadata.title"),
  // …
```

Cela permet ensuite de simplifier `src/lib/page-metadata.ts` en passant des chemins relatifs, Next.js se chargeant de l'absolutisation.

---

## Finding #7 — i18n : deux langues, une seule URL, aucun hreflang

**Sévérité : Élevé**

### Preuve

La locale est résolue côté serveur depuis un **cookie**, sans jamais toucher à l'URL. `src/lib/locale.ts:8,14-30` :

```ts
const COOKIE_NAME = "locale";

export async function getUserLocale(): Promise<Locale> {
  const cookieLocale = (await cookies()).get(COOKIE_NAME)?.value;   // 1. cookie
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

  const acceptLang = (await headers()).get("accept-language");      // 2. header
  const headerLocale = acceptLang?.split(",")[0]?.split("-")[0];
  if (isSupportedLocale(headerLocale)) return headerLocale;

  return defaultLocale;                                             // 3. "fr"
}
```

Le changement de langue s'opère par Server Action qui écrit le cookie — `src/lib/locale-actions.ts:8-10` :

```ts
export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
```

appelée depuis `src/components/language-switcher.tsx:50`, monté dans `src/components/navigation.tsx:115,150`.

Vérifications complémentaires :

- `src/i18n/config.ts:3` — `export const locales = ["en", "fr"] as const;` : deux langues sont bien actives.
- Recherche de `hreflang` sur tout `src/` : **zéro occurrence**. Confirmé sur le HTML servi de `/` et `/dentiste` : aucune balise `<link rel="alternate" hreflang="…">`.
- **Aucun `middleware.ts`** à la racine ni dans `src/` (vérifié : `ls` → fichier inexistant), donc aucune négociation de langue par URL.
- `src/app/layout.tsx:83` — `<html lang={locale}>` : l'attribut `lang` du document change selon le cookie, à URL constante.

### Impact SEO

C'est le défaut d'architecture le plus profond de l'audit, même si son coût actuel est atténué par le fait que le marché visé est francophone.

1. **La version anglaise n'a aucune existence dans l'index.** Googlebot ne stocke pas de cookies entre requêtes et envoie `Accept-Language: en` de façon inconstante. Il verra donc, en pratique, une seule version — le français par défaut (`src/i18n/config.ts:4`). Tout le travail de traduction (`messages/en.json`) est invisible pour la recherche : **zéro** URL anglaise indexable, donc zéro trafic anglophone possible.
2. **hreflang est structurellement impossible.** hreflang met en relation des *URLs distinctes*. Avec une URL unique, il n'y a rien à déclarer — le problème n'est pas une balise oubliée, c'est le routage.
3. **Contenu variable à URL constante.** `https://www.sitekept.com/` sert un contenu français ou anglais, et un `<html lang>` différent, selon un cookie. Ce n'est pas du cloaking au sens malveillant — la variation dépend de l'utilisateur, pas de la détection du crawler — mais cela viole le principe « une URL, un contenu » : impossible de partager un lien vers la version anglaise, impossible pour Google de mettre en cache une version stable, et signal `lang` incohérent avec le contenu indexé si un crawl arrive avec `Accept-Language: en`.
4. **Effet de bord de performance**, traité au Finding #8 : lire un cookie dans le layout racine rend *tout* le site dynamique.

### Correctif

Migrer vers le routage par préfixe d'URL, qui est le mode nominal de next-intl. C'est un chantier de quelques heures, pas un patch — mais c'est la seule correction réelle.

**1. Middleware de routage** — créer `src/middleware.ts` :

```ts
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // "fr" sans préfixe, "en" sur /en/*
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

`localePrefix: "as-needed"` préserve les URLs françaises actuelles (`/templates` reste `/templates`) et n'ajoute `/en` que pour l'anglais — **aucune redirection à mettre en place sur l'existant**, ce qui est décisif pour ne pas perdre l'antériorité acquise.

**2. Déplacer l'arborescence** sous `src/app/[locale]/` et remplacer `src/i18n/request.ts:4-11` par la variante qui lit la locale du segment d'URL plutôt que du cookie.

**3. Déclarer les alternates** dans `src/lib/page-metadata.ts`, en complément du canonical existant :

```ts
alternates: {
  canonical: url,
  languages: {
    fr: `${baseUrl}${path}`,
    en: `${baseUrl}/en${path === "/" ? "" : path}`,
    "x-default": `${baseUrl}${path}`,
  },
},
```

`x-default` doit pointer vers la version française, cible du marché principal.

**4. Remplacer le `LanguageSwitcher`** (`src/components/language-switcher.tsx:50`) : au lieu d'appeler `setUserLocale`, il doit naviguer vers l'URL équivalente dans l'autre langue via le `Link` localisé de next-intl. Un sélecteur de langue doit produire un lien crawlable, pas une mutation de cookie.

**5. Ajouter au sitemap** une entrée par couple (URL, locale), avec les `alternates` correspondants.

---

## Finding #8 — Aucune page n'est mise en cache : tout le site est rendu dynamiquement

**Sévérité : Moyen**

### Preuve

En-têtes réels sur quatre URLs de nature différente, toutes identiques :

```
/           cache-control: private, no-cache, no-store, max-age=0, must-revalidate   x-vercel-cache: MISS
/dentiste   cache-control: private, no-cache, no-store, max-age=0, must-revalidate   x-vercel-cache: MISS
/templates  cache-control: private, no-cache, no-store, max-age=0, must-revalidate   x-vercel-cache: MISS
/blog       cache-control: private, no-cache, no-store, max-age=0, must-revalidate   x-vercel-cache: MISS
```

TTFB mesurés (depuis `fra1`, région du déploiement — donc plancher optimiste) : `/` 443 ms, `/dentiste` 355 ms.

Chaîne causale, tracée dans le code :

`src/app/layout.tsx:80` → `const locale = await getSiteLocale();`
→ `src/lib/site-messages.ts:47-49` → `getUserLocale()`
→ `src/lib/locale.ts:16` → `(await cookies()).get(COOKIE_NAME)` et `:22` → `(await headers()).get("accept-language")`

`cookies()` et `headers()` sont des API dynamiques : les appeler dans le **layout racine** bascule l'intégralité de l'arbre de routes en rendu dynamique (`force-dynamic` de fait). Y compris `/dentiste`, page 100 % statique dont le contenu ne dépend d'aucune donnée utilisateur.

Confirmation croisée : le `sitemap.xml`, lui, **est** statique (son `lastmod` date du build, cf. Finding #5) car `src/app/sitemap.ts` n'appelle pas `getSiteLocale()`. Le contraste isole bien la cause.

### Impact SEO

- **TTFB dégradé pour tout le monde.** 355-443 ms depuis la région du serveur ; depuis un mobile 4G en France, le TTFB réel sera nettement supérieur. Le TTFB conditionne le LCP, qui est un signal Core Web Vitals.
- **Aucun cache CDN.** `no-store` interdit à l'edge Vercel de servir une réponse mise en cache : chaque hit de Googlebot déclenche un rendu serveur complet. Sur 72 URLs crawlables, c'est du budget de crawl converti en calcul.
- Cause racine commune avec le Finding #7 : c'est le choix de la locale par cookie qui impose ce coût.

### Correctif

Le correctif propre est celui du Finding #7 : avec le routage par préfixe, la locale vient du segment d'URL, plus du cookie, et les pages redeviennent statiquement générables (`generateStaticParams` sur `[locale]`). Les démos, en particulier, redeviendraient de pures pages statiques servies par le CDN.

En attendant, un gain partiel est possible en retirant la lecture d'`accept-language` (`src/lib/locale.ts:22`) : les `headers()` sont souvent le déclencheur le plus large. Le gain resterait toutefois nul tant que `cookies()` est lu dans le layout racine — **il n'y a pas de demi-correctif réellement efficace ici**, ce qui renforce la priorité du chantier i18n.

---

## Finding #9 — `public/robots.txt` fantôme avec un domaine placeholder

**Sévérité : Moyen** (piège latent, pas un défaut actif)

### Preuve

Deux fichiers coexistent et se disputent la route `/robots.txt` :

`public/robots.txt` (67 octets, complet) :
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

`src/app/robots.ts:3-11` :
```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL || "https://sitekept.com"}/sitemap.xml`,
  };
}
```

**Détermination du gagnant — c'est `src/app/robots.ts`.** Réponse réelle (`https://www.sitekept.com/robots.txt`, 200, `text/plain`, **66 octets**) :

```
User-Agent: *
Allow: /

Sitemap: https://sitekept.com/sitemap.xml
```

Trois preuves concordantes, aucune ambiguïté :
1. le domaine servi est `sitekept.com`, pas le placeholder `yourdomain.com` ;
2. la casse est `User-Agent` (majuscule au A), signature du générateur Next.js, alors que le fichier statique écrit `User-agent` ;
3. la taille servie est de **66** octets contre **67** pour le fichier statique.

La route metadata de l'App Router prime donc sur le fichier `public/`. **Le placeholder `yourdomain.com` n'est pas exposé en production.**

### Impact SEO

Aucun impact actuel — le `robots.txt` servi est fonctionnellement correct. Le risque est un **piège de maintenance** : un développeur qui voudra ajuster les règles de crawl éditera naturellement `public/robots.txt` (le fichier au nom évident), constatera que rien ne change en production, et perdra du temps. Pire, si `src/app/robots.ts` venait à être supprimé lors d'un refactor, le fichier statique prendrait le relais et publierait `Sitemap: https://yourdomain.com/sitemap.xml` — un sitemap pointant vers un domaine inexistant.

Défaut secondaire réel, celui-là : le `robots.txt` servi déclare le sitemap en **non-`www`**, URL qui répond `307` (vérifié : `https://sitekept.com/sitemap.xml` → `307 → https://www.sitekept.com/sitemap.xml`). Conséquence du Finding #1.

### Correctif

1. **Supprimer `public/robots.txt`** — une seule source de vérité, la route TypeScript.
2. Corriger l'URL du sitemap via le correctif racine du §0 (variable d'environnement), ou en durcissant le fallback dans `src/app/robots.ts:9`.
3. Optionnel, cohérent avec le Finding #3 scénario B — exclure explicitement la route d'administration :

```ts
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.sitekept.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin-templates-7q4p9s2m"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

Nuance importante : si l'objectif est de **désindexer**, le `noindex` déjà en place (voir §Non-findings) est supérieur au `Disallow` — une URL bloquée par robots.txt peut rester indexée sans snippet, car Google ne peut pas lire la balise `noindex` d'une page qu'il n'a pas le droit de crawler. Ne pas ajouter le `Disallow` sans avoir compris cet arbitrage ; ici, le `noindex` seul suffit et est plus sûr.

---

## Finding #10 — `/icon.svg` renvoie 404 et est déclaré avec un type MIME faux

**Sévérité : Moyen**

### Preuve

`src/app/layout.tsx:22-33` déclare :

```ts
icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/icon.svg", type: "image/png", sizes: "32x32" },
  ],
  apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
},
```

Statuts réels :

| Ressource | Statut |
|---|---|
| `/favicon.ico` | **200** (`image/x-icon`, 15086 o) |
| `/icon.svg` | **404** |
| `/apple-icon.png` | **200** (`image/png`, 35499 o) |
| `/my-favicon/site.webmanifest` | **200** (`application/manifest+json`, 566 o) |

Le HTML servi contient donc un lien mort :

```html
<link rel="icon" href="/icon.svg" type="image/png" sizes="32x32"/>
```

Deux défauts cumulés : le fichier n'existe pas (absent de `public/` — vérifié : `public/` ne contient ni `icon.svg` ni de fichier `icon.*`), et il est déclaré `type="image/png"` alors que l'extension est `.svg`.

### Impact SEO

Impact indirect mais réel. Google exige un favicon accessible pour l'afficher dans les résultats mobiles ; un `<link rel="icon">` en 404 fait partie des causes courantes de favicon absent en SERP — une perte de surface visuelle et de taux de clic. Chaque page génère par ailleurs une requête 404 inutile. Le `type` erroné peut faire ignorer la déclaration par certains navigateurs même si le fichier existait.

### Correctif

Deux options.

*La plus simple* — supprimer l'entrée. Dans `src/app/layout.tsx`, remplacer les lignes 23-33 par :

```ts
icons: {
  icon: [{ url: "/favicon.ico", sizes: "any" }],
  apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
},
```

*La meilleure* — fournir réellement un SVG (net sur tous les écrans) : déposer le fichier dans `public/icon.svg` et corriger le type :

```ts
{ url: "/icon.svg", type: "image/svg+xml" },
```

(un SVG n'a pas besoin d'attribut `sizes`).

Point connexe relevé pendant l'inspection des métadonnées : **aucune balise `og:image` n'est émise** sur aucune page testée (`/`, `/dentiste`, `/templates`), alors que `twitter:card` est réglé sur `summary_large_image` (`src/app/layout.tsx:52`, `src/lib/page-metadata.ts:33`). Une carte `summary_large_image` sans image produit un aperçu dégradé sur X/LinkedIn. Ajouter une image OG (1200×630) via `metadataBase` (Finding #6) et le champ `openGraph.images`.

---

## Finding #11 — Aucune donnée structurée sur l'ensemble du site

**Sévérité : Moyen**

### Preuve

Recherche sur tout `src/` de `application/ld+json`, `@context`, `LocalBusiness` : **zéro fichier** correspondant.

Confirmé sur le HTML servi : `application/ld+json` apparaît **0 fois** sur `/` et **0 fois** sur `/dentiste`.

### Impact SEO

Aucune entité `Organization` n'est déclarée pour SiteKept : Google doit inférer le nom, le logo et les profils sociaux de l'agence à partir du texte seul. Aucun `BreadcrumbList` (les fils d'Ariane enrichis en SERP sont perdus), aucun `Article` sur les 8 articles de blog, aucune `FAQPage`. Pour une agence dont l'argumentaire commercial porte explicitement sur le « SEO + GEO » (cf. la meta description servie), l'absence totale de balisage sémantique est aussi un problème de crédibilité — un prospect technique le verra en trois secondes avec l'outil de test des résultats enrichis.

Le point est d'autant plus sensible pour le « GEO » (optimisation pour les moteurs génératifs) mis en avant sur `/seo-geo` : les données structurées sont l'un des principaux vecteurs de compréhension d'entité par les LLM.

### Correctif

Ajouter au minimum un `Organization` global. Dans `src/app/(marketing)/layout.tsx`, à l'intérieur du `<main>` :

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SiteKept",
      url: "https://www.sitekept.com",
      logo: "https://www.sitekept.com/logo-sitekept-rond.webp",
      sameAs: ["https://www.linkedin.com/company/sitekept"],
    }),
  }}
/>
```

(Vérifier l'URL LinkedIn exacte dans `src/components/footer.tsx` avant de l'inscrire.)

Puis un `Article` sur `src/app/(marketing)/blog/[slug]/page.tsx` et un `BreadcrumbList` sur les pages de second niveau.

**Ne pas ajouter de `LocalBusiness` sur les pages de démo** : ce serait publier des données structurées d'entreprises fictives, transformant le risque du Finding #3 en déclaration formelle auprès de Google.

---

## Finding #12 — Fichiers parasites dans `public/`

**Sévérité : Faible**

### Preuve

Contenu de `public/` :

```
-rw-r--r--  6148     .DS_Store
-rw-r--r--  1013860  ChatGPT Image 15 juil. 2025 à 01_28_34.png
-rw-r--r--  55646    logo-sitekept-rond copy.webp
-rw-r--r--  55646    logo-sitekept-rond.webp
```

Statuts réels :

| Ressource | Statut | Détail |
|---|---|---|
| `/.DS_Store` | **404** | Vercel exclut les fichiers cachés du build — non exposé |
| `/ChatGPT%20Image%2015%20juil.%202025%20%C3%A0%2001_28_34.png` | **200** | `image/png`, **1 013 860 octets** (≈ 1 Mo) |

`find public -name ".DS_Store"` → une occurrence, `public/.DS_Store`, versionnée dans le dépôt.

Par ailleurs `logo-sitekept-rond copy.webp` et `logo-sitekept-rond.webp` ont une taille strictement identique (55646 octets) : doublon avec un espace dans le nom.

### Impact SEO

Modéré et surtout hygiénique.

- **`.DS_Store` : pas de fuite en production** (404 vérifié), donc pas de risque de divulgation d'arborescence. Le défaut est de versionner un artefact macOS.
- **L'image de 1 Mo est bien servie publiquement** avec une URL contenant espaces, point et caractère accenté (`à` → `%C3%A0`). Si elle est référencée quelque part, c'est 1 Mo non optimisé (non converti en WebP/AVIF, hors pipeline `next/image`) sur le budget de chargement. L'URL encodée est par ailleurs fragile et illisible. **NON VÉRIFIÉ :** je n'ai pas déterminé si ce fichier est effectivement référencé par une page — s'il est orphelin, l'impact se limite au poids du dépôt et du build.

### Correctif

```bash
git rm --cached public/.DS_Store
git rm "public/ChatGPT Image 15 juil. 2025 à 01_28_34.png"   # après vérification qu'aucune page ne la référence
git rm "public/logo-sitekept-rond copy.webp"                  # doublon
```

Et ajouter au `.gitignore` :

```
.DS_Store
```

Règle générale à retenir pour la suite : dans `public/`, aucun nom de fichier avec espace, accent ou majuscule — uniquement du `kebab-case` ASCII.

---

## Non-findings — points vérifiés, conformes

Ces éléments figuraient dans le périmètre. Ils ont été testés et **ne posent pas de problème** ; je les documente pour éviter des corrections inutiles.

| Point | Vérification | Verdict |
|---|---|---|
| **`/template` vs `/templates`** | `src/app/(marketing)/template/page.tsx:1-5` appelle `permanentRedirect("/templates")`. Vérifié en prod : `/template` → **308** → `/templates` | **Correct.** Pas de duplication. La redirection permanente est le bon choix |
| **Route d'administration** | `src/app/admin-templates-7q4p9s2m/page.tsx:10-17` pose `robots: { index: false, follow: false, googleBot: { index: false, follow: false } }`. Vérifié dans le HTML servi : `<meta name="robots" content="noindex, nofollow"/>` | **Correct.** Le `noindex` est le bon mécanisme, supérieur à un `Disallow` robots.txt |
| **Slash final** | `/dentiste/` → **308** → `/dentiste` | **Correct.** Normalisation permanente par Vercel, pas de duplication |
| **Page 404** | `/page-inexistante-test-404` → **404** avec `text/html` | **Correct.** Pas de soft-404 |
| **HTTP → HTTPS** | `http://www.sitekept.com/` → **308** → HTTPS. En-tête `strict-transport-security: max-age=63072000` présent | **Correct** |
| **Chaîne de redirection** | Depuis `https://sitekept.com/` : `num_redirects=1`, destination finale 200 | **Correct.** Un seul saut, pas de cascade |
| **Manifest** | `/my-favicon/site.webmanifest` → **200**, `application/manifest+json` | **Correct** |
| **Structure Hn** | `/dentiste` : exactement **1** balise `<h1>` | **Correct** sur l'échantillon testé (non généralisé aux 72 pages) |
| **`.DS_Store` exposé** | `/.DS_Store` → **404** | **Pas de fuite.** Corriger dans le dépôt uniquement (Finding #12) |

---

## Code mort relevé au passage

`src/lib/public-template-routes.ts:5-14` — la fonction `isPublicTemplatePathname` est exportée mais **n'est appelée nulle part** dans `src/` (recherche exhaustive : aucune occurrence hors du fichier de définition).

Elle a manifestement été écrite pour distinguer les pages de démo du reste du site — exactement le besoin du Finding #3. Elle constitue la brique de départ du middleware `noindex` proposé. À réutiliser plutôt qu'à supprimer.

---

## Plan d'action priorisé

### Immédiat — configuration, moins d'une heure, sans risque

1. Définir `NEXT_PUBLIC_BASE_URL=https://www.sitekept.com` dans Vercel (Production + Preview). *Résout les Findings #1 et #4-partiel, et corrige l'URL du sitemap dans robots.txt.*
2. Supprimer `public/robots.txt`. *(#9)*
3. Retirer ou corriger la référence `/icon.svg` dans `src/app/layout.tsx:29-32`. *(#10)*
4. Déployer `dev` vers production pour publier `/mentions-legales`, actuellement en 404. *(#4)*

### Court terme — arbitrage stratégique, à trancher cette semaine

5. **Décider du sort des 59 pages de démo** *(#3)*. Recommandation : appliquer immédiatement le `noindex, follow` via middleware (scénario B), puis planifier la migration vers un sous-domaine (scénario A). Retirer sans délai les coordonnées inventées (téléphone, adresse, e-mail) des 13 démos.
6. Aligner le sitemap sur cette décision *(#4)* et rattacher `lastModified` à des dates de contenu réelles *(#5)*.
7. Ajouter `metadataBase` *(#6)*, une image OG *(#10)* et le JSON-LD `Organization` *(#11)*.
8. Passer la redirection non-`www`→`www` en 308 via `next.config.ts` *(#2)*.

### Moyen terme — chantier

9. **Migrer l'i18n vers le routage par préfixe d'URL** *(#7)*. C'est le plus gros investissement de cette liste et il en résout deux : il rend la version anglaise indexable, permet le hreflang, **et** supprime la cause du rendu dynamique intégral *(#8)*. `localePrefix: "as-needed"` permet de le faire sans casser une seule URL française existante.

---

## Synthèse

| # | Sévérité | Problème | Preuve |
|---|---|---|---|
| 1 | **Critique** | Canonicals et sitemap pointent vers non-`www`, qui redirige vers `www` | HTML servi + `307` observé |
| 3 | **Critique** | 59 pages de démo indexables, entreprises fictives avec NAP, sans canonical | `layout.tsx:56` + 200 vérifiés |
| 2 | Élevé | Redirection non-`www` → `www` en `307` temporaire | `curl -I` |
| 4 | Élevé | Sitemap : 28 URLs pour ~72 pages ; 46 démos orphelines ; 1 URL en 404 | `sitemap.xml` servi |
| 6 | Élevé | `metadataBase` absent | 0 occurrence dans `src/` |
| 7 | Élevé | Locale par cookie, sans URL distincte ni hreflang | `locale.ts:16` |
| 5 | Moyen | `lastModified` identique sur 28 URLs, figé au build | `<lastmod>2026-07-01T09:15:12.165Z` ×28 |
| 8 | Moyen | Aucun cache CDN, tout le site en rendu dynamique | `no-store` + `x-vercel-cache: MISS` |
| 9 | Moyen | `public/robots.txt` fantôme avec placeholder `yourdomain.com` | 66 vs 67 octets |
| 10 | Moyen | `/icon.svg` en 404, type MIME faux, aucune `og:image` | `404` vérifié |
| 11 | Moyen | Zéro donnée structurée sur tout le site | 0 occurrence `ld+json` |
| 12 | Faible | 1 Mo d'image à URL accentuée, `.DS_Store` versionné, logo dupliqué | `ls public/` + `200` |

**Aucune modification de fichier n'a été effectuée** — audit en lecture seule.
