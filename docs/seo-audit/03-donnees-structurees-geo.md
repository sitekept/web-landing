# Audit SCHEMA-GEO — sitekept.com

**Date :** 10 août 2026
**Périmètre :** données structurées (JSON-LD), métadonnées sociales (OG/Twitter), visibilité moteurs de réponse IA (GEO/AEO), éligibilité rich results.
**Méthode :** lecture du code source (branche `dev`, HEAD `1c7c98d`) + vérification du HTML réellement servi en production (`curl`, User-Agent navigateur, 10/08/2026).
**Aucun fichier n'a été modifié.**

---

## 0. Avertissement méthodologique : la production est en retard sur `dev`

**Preuve :**
- `src/app/sitemap.ts:63-68` déclare `/mentions-legales` dans le sitemap.
- Le sitemap **réellement servi** (`https://www.sitekept.com/sitemap.xml`) ne contient **pas** `/mentions-legales` (28 `<loc>` vérifiés, dernier = `/terms`).
- `https://www.sitekept.com/mentions-legales` → **HTTP 404** (`<title>404: This page could not be found.</title>`).
- Le commit `1c7c98d` (« legal notice page ») est le HEAD local mais n'est pas en ligne.

**Conséquence pour cet audit :** chaque constat est étiqueté `[SOURCE]` (vérifié dans le code) et/ou `[PROD]` (vérifié dans le HTML servi). Quand les deux divergent, c'est signalé.

---

## 1. Inventaire JSON-LD existant

### 1.1 Constat : ZÉRO donnée structurée sur tout le site

| Sévérité | **CRITIQUE** |
|---|---|
| **Preuve `[SOURCE]`** | `grep -rn "application/ld+json\|jsonLd\|jsonld\|schema.org\|StructuredData" src/` → **0 résultat**, exit code 1. Aucun fichier du projet ne contient de données structurées. |
| **Preuve `[PROD]`** | `grep -c 'application/ld+json'` sur le HTML servi = **0** pour : `/` (97 634 octets), `/blog`, `/blog/qu-est-ce-que-le-seo-et-le-geo`, `/realization`, `/seo-geo`, `/templates`. |
| **Impact** | Aucun rich result Google possible. Google et les LLM doivent inférer l'identité de l'entreprise, ses services, son prix et ses coordonnées uniquement depuis le texte. Aucun Knowledge Panel, aucun sitelink structuré, aucun signal d'entité fiable. Pour une agence dont l'argument de vente est le GEO, c'est le point le plus grave du rapport. |
| **Correctif** | Sections 2.1 à 2.7 ci-dessous. |

### 1.2 Aucun schéma invalide (parce qu'aucun schéma n'existe)

Il n'y a donc **aucune erreur de validation à corriger** — uniquement des schémas à créer. C'est une bonne nouvelle relative : le chantier est un ajout net, pas une remédiation.

### 1.3 Ce qui est réellement rendu en `<head>` (page d'accueil, `[PROD]`)

Vérifié le 10/08/2026 :

```
<title>Sitekept | Site pro en 48h, sans abonnement et 100% à vous</title>
<meta name="description" content="Sitekept livre des sites professionnels à partir de 500€, ...">
<meta name="keywords" content="site professionnel 48h, ...">
<meta name="author" content="Équipe SiteKept">
<meta name="creator" content="SiteKept">
<meta name="publisher" content="SiteKept">
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1">
<meta property="og:title" ...>
<meta property="og:description" ...>
<meta property="og:url" content="https://sitekept.com">
<meta property="og:site_name" content="Sitekept">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@sitekept">
<meta name="twitter:title" ...>
<meta name="twitter:description" ...>
<link rel="canonical" href="https://sitekept.com">
<link rel="manifest" href="/my-favicon/site.webmanifest">
```

**Absents et confirmés absents :** `og:image`, `og:image:width/height/alt`, `twitter:image`, `og:locale`, `application/ld+json`.

---

## 2. Schémas manquants prioritaires — JSON-LD prêt à coller

### Données réelles utilisées (sourcées)

| Donnée | Valeur | Source |
|---|---|---|
| Nom | `Sitekept` / `SiteKept` (les deux graphies coexistent) | `messages/fr.json` → `metadata.publisher` = "SiteKept" ; `src/lib/page-metadata.ts:28` `siteName: "Sitekept"` |
| URL | `https://sitekept.com` | `src/app/layout.tsx:46` |
| Email | `sitekept@gmail.com` | `src/components/footer.tsx:38,42` ; `messages/fr.json` → `legalNotice.sections.editor.email` |
| Téléphone | `+33 6 51 17 99 25` | `src/components/footer.tsx:45,49` ; `legalNotice.sections.contact.phone` |
| Logo | `/logo.png` (200 OK, `image/png`, 22 Ko) | `src/components/footer.tsx:19` |
| Prix d'entrée | 500 € | `src/content/site-content.ts:333-348` (`offerHighlights[0]` : « À partir de 500€ ») |
| Délai | 48 h | `src/content/site-content.ts:350-365` |
| Twitter/X handle | `@sitekept` | `src/lib/page-metadata.ts:35`, `messages/fr.json` → `metadata.twitter.creator` |

### Données MANQUANTES — placeholders obligatoires

| Sévérité | **ÉLEVÉ** |
|---|---|
| **Preuve** | `messages/fr.json` → bloc `legalNotice.sections.editor` : `companyName: "Raison sociale : À COMPLÉTER"`, `legalForm: "À COMPLÉTER"`, `siren: "SIREN / SIRET : À COMPLÉTER"`, `vat: "À COMPLÉTER"`, `address: "Siège social : À COMPLÉTER"`, `publicationDirector: "À COMPLÉTER"`, et `hosting.hostName/hostAddress: "À COMPLÉTER"`. |
| **Preuve** | `grep -rni "linkedin\|instagram\|facebook\|twitter.com\|x.com/"` sur `src/components`, `src/app/_components`, `src/app/(marketing)`, `messages/fr.json` → **0 résultat**. Le `CLAUDE.md` du projet affirme « Social Links: LinkedIn company page integration » : **c'est faux, aucun lien LinkedIn n'existe dans le code**. |
| **Impact** | Impossible de produire un `PostalAddress` ou un `sameAs` véridique. Un `LocalBusiness`/`ProfessionalService` sans `address` est un schéma incomplet que Google ignorera pour les rich results locaux. Sans `sameAs`, la réconciliation d'entité (Knowledge Graph, LLM) est beaucoup plus faible. |
| **Correctif** | Renseigner d'abord les mentions légales (obligation légale française par ailleurs — art. 6 III LCEN), puis remplacer les `<<À RENSEIGNER>>` ci-dessous. **Ne pas déployer les schémas avec les placeholders en l'état.** |

---

### 2.1 `Organization` + `WebSite` — bloc racine (PRIORITÉ 1)

**Où :** `src/app/layout.tsx`, dans le `<body>` (ou `<head>`), rendu sur toutes les pages.

**Choix de type — argumenté :** j'utilise `Organization` et **non** `ProfessionalService`/`LocalBusiness`, parce que `LocalBusiness` et ses sous-types attendent une `address` (`PostalAddress`) réelle pour être exploitables, et qu'elle est aujourd'hui inconnue (cf. tableau ci-dessus). Un `ProfessionalService` sans adresse est un schéma décoratif. La variante `ProfessionalService` est fournie en 2.1bis, **à n'activer qu'une fois l'adresse renseignée**.

`SearchAction` : **volontairement absent**. `grep` sur `type="search"`, `<Search`, `/search`, `searchParams…q` dans `src/app/_components`, `src/components`, `src/app/(marketing)` → **0 résultat**. Il n'y a pas de recherche interne sur le site. (Note complémentaire : le Sitelinks Searchbox n'est de toute façon plus un rich result Google.)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sitekept.com/#organization",
      "name": "Sitekept",
      "alternateName": "SiteKept",
      "url": "https://sitekept.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://sitekept.com/#logo",
        "url": "https://sitekept.com/logo.png",
        "contentUrl": "https://sitekept.com/logo.png",
        "width": 512,
        "height": 512,
        "caption": "Sitekept"
      },
      "image": { "@id": "https://sitekept.com/#logo" },
      "description": "Sitekept crée des sites professionnels livrés en 48h, à partir de 500€, sans abonnement imposé, avec déploiement inclus et optimisation SEO et GEO. Le client est propriétaire à 100% de son site.",
      "email": "sitekept@gmail.com",
      "telephone": "+33651179925",
      "foundingDate": "<<À RENSEIGNER>>",
      "vatID": "<<À RENSEIGNER — N° TVA intracommunautaire>>",
      "taxID": "<<À RENSEIGNER — SIRET>>",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "<<À RENSEIGNER>>",
        "postalCode": "<<À RENSEIGNER>>",
        "addressLocality": "<<À RENSEIGNER>>",
        "addressCountry": "FR"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "knowsLanguage": ["fr", "en"],
      "sameAs": [
        "<<À RENSEIGNER — URL page LinkedIn entreprise>>",
        "<<À RENSEIGNER — URL profil X/Twitter @sitekept, si le compte existe réellement>>"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "sitekept@gmail.com",
          "telephone": "+33651179925",
          "availableLanguage": ["French", "English"],
          "areaServed": "FR"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sitekept.com/#website",
      "url": "https://sitekept.com",
      "name": "Sitekept",
      "description": "Sites professionnels livrés en 48h, sans abonnement, optimisés SEO et GEO.",
      "publisher": { "@id": "https://sitekept.com/#organization" },
      "inLanguage": "fr-FR"
    }
  ]
}
```

**Notes de validité :**
- `sameAs` : **supprimer complètement le tableau** si aucun profil social n'existe. Un `sameAs` avec une chaîne placeholder est une URL invalide et fera échouer le Rich Results Test.
- Idem pour `foundingDate`, `vatID`, `taxID`, `address` : **retirer les clés** plutôt que laisser `<<À RENSEIGNER>>`. Les placeholders ci-dessus sont là pour indiquer quoi remplir, pas pour être déployés tels quels.
- `telephone` au format E.164 (`+33651179925`) comme recommandé.
- `logo` : Google exige pour le logo d'organisation une image d'au moins 112×112 px, format accepté. `/logo.png` fait 22 Ko et répond en 200 — **vérifier ses dimensions réelles** avant de déclarer `width`/`height` (valeurs ci-dessus non vérifiées → `NON VÉRIFIÉ`).

#### 2.1bis Variante `ProfessionalService` — à activer UNIQUEMENT après renseignement de l'adresse

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://sitekept.com/#organization",
  "name": "Sitekept",
  "url": "https://sitekept.com",
  "logo": "https://sitekept.com/logo.png",
  "image": "https://sitekept.com/logo.png",
  "description": "Agence web : sites professionnels livrés en 48h à partir de 500€, sans abonnement imposé, optimisés SEO et GEO.",
  "email": "sitekept@gmail.com",
  "telephone": "+33651179925",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "<<À RENSEIGNER>>",
    "postalCode": "<<À RENSEIGNER>>",
    "addressLocality": "<<À RENSEIGNER>>",
    "addressCountry": "FR"
  },
  "areaServed": { "@type": "Country", "name": "France" },
  "knowsLanguage": ["fr", "en"]
}
```

> Ne PAS ajouter de `aggregateRating` ni de `review`. Aucun avis client n'existe dans le code ou sur le site (`grep` sur `rating|avis|review|témoignage` dans le contenu marketing : aucune donnée d'avis structurée). Un faux `aggregateRating` est une violation directe des règles Google sur les avis et expose à une action manuelle.

---

### 2.2 `Service` + `OfferCatalog` — page d'accueil

**Source des données :** `src/content/site-content.ts:333-431` (`offerHighlights`, 6 entrées) et `src/content/site-content.ts:499-561` (`processSteps`).
**Donnée de prix vérifiée :** « À partir de 500€ » (`site-content.ts:339`) et « Mise en ligne en 48h » (`site-content.ts:356`) — ces deux chiffres sont publics sur le site, donc légitimes à structurer.

**Où :** `src/app/(marketing)/page.tsx`.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sitekept.com/#service-creation-site",
  "name": "Création de site web professionnel",
  "serviceType": "Création de site web",
  "description": "Création et mise en ligne d'un site professionnel en 48h à partir de 500€, sans abonnement imposé. Déploiement, configuration du domaine et SSL inclus. Le client est propriétaire à 100% du site livré.",
  "provider": { "@id": "https://sitekept.com/#organization" },
  "areaServed": { "@type": "Country", "name": "France" },
  "audience": {
    "@type": "BusinessAudience",
    "name": "PME, TPE et indépendants"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://sitekept.com/#contact",
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+33651179925"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://sitekept.com/#contact",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 500,
      "priceCurrency": "EUR",
      "valueAddedTaxIncluded": false
    },
    "eligibleRegion": { "@type": "Country", "name": "France" }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Ce qui est inclus dans l'offre Sitekept",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mise en ligne en 48h",
          "description": "Un cadre court pour les projets simples, avec une promesse de rapidité comprise dès le premier contact."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Propriété à 100% du site",
          "description": "Le client garde le contrôle de son site, de ses contenus et de sa mise en ligne finale."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aucun abonnement imposé",
          "description": "Vous achetez un site, pas une dépendance. Le modèle est simple et assumé."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Déploiement inclus",
          "description": "Nous gérons la mise en ligne, le domaine, le SSL et le cadre technique sans vous laisser seul."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aucune technique à gérer",
          "description": "Vous validez le fond et l'image. Nous prenons en charge la partie technique du début à la mise en ligne."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Optimisation SEO et GEO",
          "description": "Pages structurées pour charger vite, être claires pour Google et rester faciles à citer dans les interfaces IA."
        }
      }
    ]
  }
}
```

**Attention `valueAddedTaxIncluded: false`** — j'ai posé `false` par défaut (B2B français, prix HT usuel). **`NON VÉRIFIÉ` :** rien dans le code n'indique si les 500 € sont HT ou TTC. Vérifier avant déploiement, ou retirer la clé.

**Note :** `Service` n'est pas un type éligible aux rich results Google. Sa valeur ici est **GEO/entité** : il donne aux LLM une description machine-lisible de l'offre, du prix plancher et du périmètre.

---

### 2.3 `BreadcrumbList` — pages profondes

| Sévérité | **MOYEN** |
|---|---|
| **Preuve `[PROD]`** | Sur `https://www.sitekept.com/blog/qu-est-ce-que-le-seo-et-le-geo`, aucun fil d'ariane visuel (`grep 'aria-label'` → uniquement `"Ouvrir le menu"`), et 0 JSON-LD. |
| **Impact** | Google affiche l'URL brute dans le SERP au lieu du chemin `Sitekept › Blog › Titre`. Perte de lisibilité et de CTR sur 8 articles + 3 pages. |
| **Correctif** | Bloc ci-dessous, + idéalement un fil d'ariane visible (Google recommande que le balisage reflète une navigation réelle sur la page). |

**Article de blog** (`src/app/(marketing)/blog/[slug]/page.tsx`) :

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://sitekept.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://sitekept.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Qu'est-ce que le SEO et le GEO ?"
    }
  ]
}
```

Le dernier `ListItem` omet volontairement `item` : Google utilise alors l'URL de la page courante (comportement documenté et valide). `position` et `name` sont requis sur chaque item, `item` requis sur tous sauf le dernier.

**Autres pages** : même structure avec, en position 2 : `Réalisations` → `/realization`, `Templates` → `/templates`, `SEO + GEO` → `/seo-geo`, `Mentions légales` → `/mentions-legales`.

---

### 2.4 `BlogPosting` — 8 articles

| Sévérité | **ÉLEVÉ** |
|---|---|
| **Preuve `[SOURCE]`** | `src/content/site-content.ts:80-92`, interface `BlogPost` : `slug, category, title, excerpt, seoTitle, seoDescription, intro, sections, ctaTitle, ctaDescription`. **Aucun champ `datePublished`, `dateModified`, `author` ni `image`.** |
| **Preuve `[SOURCE]`** | `src/app/sitemap.ts:44-49` : `lastModified: new Date()` pour tous les articles → le sitemap déclare que **tous** les articles ont été modifiés aujourd'hui, à chaque build. Signal de fraîcheur non fiable, Google apprend à l'ignorer. |
| **Impact** | Pas de date = pas d'affichage de date dans le SERP, pas de signal de fraîcheur, et pour les LLM aucune manière de savoir si le contenu est récent (critère de sélection majeur en GEO). Pas d'`image` = pas de vignette dans les résultats Article/Discover. |
| **Correctif** | **Étape 1 (prérequis données)** : ajouter à `BlogPost` dans `src/content/site-content.ts:80` : `datePublished: string` (ISO 8601), `dateModified: string`, `author: { name: string; url?: string }`, `image?: string`. Renseigner les vraies dates de publication — **ne pas inventer de dates**. **Étape 2** : injecter le JSON-LD ci-dessous. **Étape 3** : faire pointer `sitemap.ts` sur `post.dateModified` au lieu de `new Date()`. |

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://sitekept.com/blog/qu-est-ce-que-le-seo-et-le-geo#article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://sitekept.com/blog/qu-est-ce-que-le-seo-et-le-geo"
  },
  "headline": "Qu'est-ce que le SEO et le GEO ?",
  "description": "Comprendre la différence entre le référencement naturel classique et la visibilité dans les interfaces IA, et pourquoi les deux se renforcent.",
  "articleSection": "Visibilité",
  "inLanguage": "fr-FR",
  "datePublished": "<<À RENSEIGNER — date réelle de publication, format ISO 8601, ex. 2025-11-14T09:00:00+01:00>>",
  "dateModified": "<<À RENSEIGNER — date réelle de dernière modification, ISO 8601>>",
  "author": {
    "@type": "Organization",
    "@id": "https://sitekept.com/#organization",
    "name": "Sitekept",
    "url": "https://sitekept.com"
  },
  "publisher": { "@id": "https://sitekept.com/#organization" },
  "image": [
    "https://sitekept.com/opengraph-image?slug=qu-est-ce-que-le-seo-et-le-geo"
  ],
  "isPartOf": { "@id": "https://sitekept.com/#website" },
  "about": [
    { "@type": "Thing", "name": "Référencement naturel" },
    { "@type": "Thing", "name": "Generative Engine Optimization" }
  ]
}
```

**Notes de validité (vérifiées sur la doc Google, 10/08/2026) :** Google ne déclare **aucune propriété strictement obligatoire** pour `Article`/`BlogPosting` — `headline`, `image`, `datePublished`, `dateModified`, `author` sont *recommandées*. Ne pas les fournir n'invalide pas le schéma mais en annule l'essentiel de la valeur.

**`author` : Organization ou Person ?** Le site ne nomme aucun auteur individuel (`messages/fr.json` → `metadata.authors` = « Équipe SiteKept »). J'utilise donc `Organization`, ce qui est véridique. Si une personne réelle signe les articles, un `Person` avec `url` vers une page auteur serait un signal E-E-A-T nettement plus fort — et un vrai levier GEO.

---

### 2.5 `FAQPage` — page d'accueil

| Sévérité | **MOYEN** (valeur GEO forte, valeur rich result **nulle**) |
|---|---|
| **Preuve `[SOURCE]`** | La FAQ **existe réellement** : `src/content/site-content.ts:562-629`, `faqItems` = 6 entrées (`subscription`, `ownership`, `launch`, `domain`, `timing`, `seo-geo`), rendue par `src/app/(marketing)/page.tsx:313-343`. |
| **Preuve `[PROD]`** | Le texte « abonnement obligatoire » est présent dans le HTML servi de la page d'accueil → la FAQ est bien rendue côté serveur, donc éligible au balisage (le contenu balisé doit être visible pour l'utilisateur). |
| **Vérification externe** | Doc Google consultée le 10/08/2026 : **les rich results FAQ sont dépréciés et ne s'affichent plus dans Google Search depuis le 7 mai 2026** ; avant cela ils étaient déjà réservés aux sites gouvernementaux et de santé faisant autorité. `FAQPage` ne figure plus dans la galerie des fonctionnalités supportées. |
| **Impact — honnêteté requise** | **Ajouter `FAQPage` n'apportera AUCUN rich result Google.** Toute recommandation contraire serait un faux positif. Sa valeur réelle est ailleurs : format question/réponse directement consommable par ChatGPT, Perplexity, Claude, Google AI Overviews et Bing — c'est-à-dire exactement le canal GEO que l'agence vend. |
| **Correctif** | Déployer, mais en connaissance de cause : c'est un investissement GEO, pas SEO. Coût quasi nul, données déjà présentes. |

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://sitekept.com/#faq",
  "isPartOf": { "@id": "https://sitekept.com/#website" },
  "inLanguage": "fr-FR",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Est-ce qu'il y a un abonnement obligatoire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. L'offre est pensée pour vendre un site, pas une dépendance. Les frais incompressibles comme l'hébergement ou le domaine peuvent exister selon le contexte, mais Sitekept n'impose pas un abonnement mensuel pour conserver votre site."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que je possède vraiment le site ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Le site, sa structure et ses contenus vous appartiennent. Nous livrons un actif que vous pouvez garder, faire évoluer et reprendre sans blocage artificiel."
      }
    },
    {
      "@type": "Question",
      "name": "Qui gère la mise en ligne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sitekept gère le déploiement, la configuration du domaine et la mise en ligne. Le but est que vous n'ayez pas à manipuler la partie technique."
      }
    },
    {
      "@type": "Question",
      "name": "Le nom de domaine est-il inclus ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, le nom de domaine est offert pendant la première année sur l'offre d'entrée. Nous cadrons ensuite avec vous le renouvellement et la gestion future."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour être en ligne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour les projets qui entrent dans le cadre de l'offre, la promesse commerciale reste une mise en ligne en 48h. Si le besoin dépasse ce cadre, nous vous l'annonçons avant de démarrer."
      }
    },
    {
      "@type": "Question",
      "name": "Le site est-il vraiment pensé pour la visibilité SEO et GEO ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nous structurons les pages pour charger vite, être claires pour Google et rester faciles à citer dans les interfaces IA. Le SEO et le GEO sont des bénéfices intégrés à l'offre, pas une option ajoutée ensuite."
      }
    }
  ]
}
```

Les 6 questions/réponses sont **reprises mot pour mot** de `src/content/site-content.ts:562-629`. Aucune FAQ inventée. Exigence Google respectée : le contenu balisé est identique au contenu visible.

---

### 2.6 Réalisations — `CollectionPage` + `ItemList` de `CreativeWork`

**Source :** `src/app/(marketing)/realization/page.tsx:9-96` — 10 réalisations, chacune avec `name`, `url` (site client réel), `description` (`messages/fr.json` → `realization.projects.*`), `screenshot` (`/realization/*.png`).

**Choix de type — argumenté :** `ItemList` de `CreativeWork` plutôt que `Product` ou `Review`. Ce sont des travaux livrés, pas des produits en vente sur ce site, et il n'y a **aucun avis client** — donc aucun `Review`/`aggregateRating`. `CollectionPage` n'est pas un rich result Google ; la valeur est ici purement GEO (permettre à un LLM de répondre « Sitekept a réalisé X, Y, Z »), et c'est un usage légitime et solide.

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://sitekept.com/realization#collection",
  "url": "https://sitekept.com/realization",
  "name": "Nos réalisations",
  "description": "Découvrez nos projets récents qui ont transformé la présence digitale de nos clients.",
  "inLanguage": "fr-FR",
  "isPartOf": { "@id": "https://sitekept.com/#website" },
  "about": { "@id": "https://sitekept.com/#organization" },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 10,
    "itemListOrder": "https://schema.org/ItemListUnordered",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebSite",
          "name": "IAFormaPlus",
          "url": "https://iaformaplus.fr",
          "image": "https://sitekept.com/realization/iaformaplus.png",
          "description": "Plateforme de formation en intelligence artificielle avec système de gestion des cours, suivi des progressions et certification automatisée.",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "WebSite",
          "name": "Orhakerem",
          "url": "https://orhakerem.com",
          "image": "https://sitekept.com/realization/orhakerem.png",
          "description": "Site vitrine élégant pour cabinet d'avocat, mettant en valeur l'expertise juridique avec un design professionnel et une navigation intuitive.",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "WebSite",
          "name": "Balinjera",
          "url": "https://www.balinjera.com/",
          "image": "https://sitekept.com/realization/balinjera.png",
          "description": "Site vitrine bilingue pour restaurant éthiopien casher à Tel Aviv, avec identité visuelle marquée, navigation RTL/LTR et pages dédiées aux événements et au blog.",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "WebSite",
          "name": "PinckIt",
          "url": "https://pinckit.com",
          "image": "https://sitekept.com/realization/pinckit.png",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "WebSite",
          "name": "LegitBrainrot",
          "url": "https://www.legitbrainrot.com/",
          "image": "https://sitekept.com/realization/legitbrainrot.png",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "WebSite",
          "name": "ComizGlobal",
          "url": "https://www.comizglobal.com/",
          "image": "https://sitekept.com/realization/comizglobal.png",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "WebSite",
          "name": "BismuthCPA",
          "url": "https://www.bismuthcpa.com/",
          "image": "https://sitekept.com/realization/bismuthcpa.png",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "WebSite",
          "name": "Les assureurs experts",
          "url": "https://lesassureursexperts.fr/",
          "image": "https://sitekept.com/realization/lesassureursexperts.png",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "WebSite",
          "name": "ETS RUNI",
          "url": "https://www.etsruni.com/",
          "image": "https://sitekept.com/realization/etsruni.png",
          "creator": { "@id": "https://sitekept.com/#organization" }
        }
      }
    ]
  }
}
```

> **`NON VÉRIFIÉ` :** le fichier source liste 10 entrées mais l'extrait lu couvre 9 noms distincts + une 10e tronquée à la lecture. Reprendre la liste complète depuis `src/app/(marketing)/realization/page.tsx:9-96` et ajuster `numberOfItems`. Les `description` non citées ci-dessus sont à reprendre depuis `messages/fr.json` → `realization.projects.*.description` (elles existent toutes).

---

### 2.7 `Blog` — page `/blog`

```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://sitekept.com/blog#blog",
  "url": "https://sitekept.com/blog",
  "name": "Blog Sitekept",
  "description": "Rapidité de mise en ligne, propriété du site, SEO et GEO : les sujets qui décident de la valeur d'un site pour une PME ou un indépendant.",
  "inLanguage": "fr-FR",
  "publisher": { "@id": "https://sitekept.com/#organization" },
  "isPartOf": { "@id": "https://sitekept.com/#website" },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "Pourquoi un site rapide à lancer compte autant pour une PME ou un indépendant",
      "url": "https://sitekept.com/blog/site-web-rapide-pme-independant",
      "datePublished": "<<À RENSEIGNER>>"
    },
    {
      "@type": "BlogPosting",
      "headline": "Posséder son site sans abonnement",
      "url": "https://sitekept.com/blog/posseder-son-site-sans-abonnement",
      "datePublished": "<<À RENSEIGNER>>"
    },
    {
      "@type": "BlogPosting",
      "headline": "Site optimisé SEO et GEO",
      "url": "https://sitekept.com/blog/site-optimise-seo-geo",
      "datePublished": "<<À RENSEIGNER>>"
    },
    {
      "@type": "BlogPosting",
      "headline": "Qu'est-ce que le SEO et le GEO ?",
      "url": "https://sitekept.com/blog/qu-est-ce-que-le-seo-et-le-geo",
      "datePublished": "<<À RENSEIGNER>>"
    },
    {
      "@type": "BlogPosting",
      "headline": "Un site sans référencement peut devenir inutile",
      "url": "https://sitekept.com/blog/site-sans-referencement-peut-devenir-inutile",
      "datePublished": "<<À RENSEIGNER>>"
    },
    {
      "@type": "BlogPosting",
      "headline": "Pourquoi l'optimisation du référencement naturel est importante",
      "url": "https://sitekept.com/blog/pourquoi-optimisation-referencement-naturel-importante",
      "datePublished": "<<À RENSEIGNER>>"
    },
    {
      "@type": "BlogPosting",
      "headline": "Pourquoi avoir un site qui nous appartient à 100% change tout",
      "url": "https://sitekept.com/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout",
      "datePublished": "<<À RENSEIGNER>>"
    },
    {
      "@type": "BlogPosting",
      "headline": "Comment se passe la livraison d'un site web chez Sitekept",
      "url": "https://sitekept.com/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept",
      "datePublished": "<<À RENSEIGNER>>"
    }
  ]
}
```

Les 8 slugs sont vérifiés dans `src/content/site-content.ts` (lignes 964, 1066, 1168, 1270, 1358, 1446, 1534, 1622). Les `headline` ci-dessus sont dérivés des slugs pour 6 d'entre eux — **reprendre les `title.fr` exacts** depuis le fichier source (`NON VÉRIFIÉ` pour les 6 titres non lus intégralement).

---

## 3. Open Graph / Twitter Cards

### 3.1 Aucune image OG n'existe — les partages sociaux sont des cartes vides

| Sévérité | **CRITIQUE** |
|---|---|
| **Preuve `[SOURCE]`** | `src/app/layout.tsx:43-49` — le bloc `openGraph` contient `title`, `description`, `url`, `siteName`, `type`. **Pas de clé `images`.** `src/lib/page-metadata.ts:24-30` — même chose, pas de `images`. |
| **Preuve `[SOURCE]`** | `find src public -iname "*opengraph*" -o -iname "*twitter-image*" -o -iname "*og-image*"` → **aucun fichier**. Le seul résultat de la recherche d'icônes est `src/app/apple-icon.png`. |
| **Preuve `[PROD]`** | Aucune balise `og:image` ni `twitter:image` dans le HTML servi de `/`, `/blog`, `/blog/qu-est-ce-que-le-seo-et-le-geo`, `/realization`, `/seo-geo`, `/templates` (`grep -c 'og:image'` = 0 partout). |
| **Impact** | `twitter:card = "summary_large_image"` est déclaré (`layout.tsx:51`) **sans aucune image** : X/Twitter dégrade alors la carte, LinkedIn, WhatsApp, Slack et Discord affichent un rectangle vide ou un fallback aléatoire. Pour une agence web qui vend du design et dont les liens circulent en prospection (email, LinkedIn, DM), **chaque partage nuit activement à la crédibilité**. C'est un bug commercial autant que technique. |

### 3.2 `metadataBase` absent — les URLs d'images relatives ne se résoudront pas

| Sévérité | **ÉLEVÉ** (bloquant pour le correctif 3.1) |
|---|---|
| **Preuve `[SOURCE]`** | `grep -n "metadataBase" src/app/layout.tsx` → **0 résultat**. Absent aussi de `src/lib/page-metadata.ts`. |
| **Impact** | Sans `metadataBase`, Next.js ne peut pas transformer une image déclarée en chemin relatif (`/og.png`) en URL absolue. Les scrapers sociaux **exigent des URLs absolues** pour `og:image`. Next.js émet un avertissement au build et retombe sur `http://localhost:3000` en dev. Concrètement : **si on ajoute `images: ["/og.png"]` sans corriger `metadataBase` d'abord, l'image ne s'affichera pas.** À corriger en premier. |
| **Correctif** | Ajouter dans le `return` de `generateMetadata()` de `src/app/layout.tsx` : `metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://sitekept.com")`. |

### 3.3 Correctif recommandé — `opengraph-image.tsx` généré (solution Next.js idiomatique)

**Approche retenue :** fichier `opengraph-image.tsx` avec `ImageResponse`, plutôt qu'une image statique. Raison : le site a 8 articles + 5 pages ; une image générée dynamiquement par route donne une carte **titrée** par page (bien meilleur CTR au partage) sans produire 13 PNG à la main. Une image statique unique reste acceptable comme solution de repli minimale.

**Fichier à créer : `src/app/opengraph-image.tsx`** (image par défaut du site, héritée par toutes les routes) :

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sitekept — Site pro en 48h, sans abonnement et 100% à vous";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #172554 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#93c5fd",
            fontWeight: 600,
          }}
        >
          Sitekept
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.1,
              color: "#ffffff",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Concevez un site web qui vous appartient à 100%.
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1", lineHeight: 1.4 }}>
            À partir de 500€ · En ligne en 48h · Sans abonnement imposé
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 24,
            color: "#93c5fd",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#2563eb",
            }}
          />
          sitekept.com
        </div>
      </div>
    ),
    { ...size }
  );
}
```

**Variante par article** — créer `src/app/(marketing)/blog/[slug]/opengraph-image.tsx` avec la même structure, en récupérant le titre :

```tsx
import { ImageResponse } from "next/og";
import { blogPosts, getBlogPostBySlug } from "@/content/site-content";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Article du blog Sitekept";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogOgImage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  const title = post?.title.fr ?? "Blog Sitekept";
  const category = post?.category.fr ?? "Sitekept";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          borderTop: "16px solid #2563eb",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#1d4ed8",
            fontWeight: 600,
          }}
        >
          {category}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            lineHeight: 1.15,
            color: "#020617",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#475569" }}>
          Sitekept · sitekept.com
        </div>
      </div>
    ),
    { ...size }
  );
}
```

> `runtime = "nodejs"` sur la route blog car elle importe `site-content.ts` (81 Ko) ; `edge` conviendrait aussi mais alourdit le bundle edge inutilement.

**Modification complémentaire de `src/lib/page-metadata.ts`** — pour que les pages sans image dédiée héritent bien de l'image racine, il suffit d'ajouter `metadataBase` au layout (3.2). Next.js remplit alors automatiquement `og:image` et `twitter:image` depuis les fichiers `opengraph-image.*`. **Ne pas déclarer `images` manuellement en plus**, cela créerait des doublons.

### 3.4 Autres constats métadonnées

| # | Sévérité | Constat | Preuve | Correctif |
|---|---|---|---|---|
| a | **ÉLEVÉ** | **Le canonical pointe vers une URL qui redirige.** Toutes les pages déclarent `canonical: https://sitekept.com/...` alors que le domaine canonique servi est `www.sitekept.com` : `curl -sI https://sitekept.com/` → `HTTP/2 307` + `location: https://www.sitekept.com/`. Idem pour le sitemap : 28 `<loc>` en `https://sitekept.com/...`, tous en 307. | `src/lib/page-metadata.ts:3,16,22` ; `src/app/sitemap.ts:6` ; `[PROD]` vérifié | Décider du domaine canonique (recommandation : garder `www`, déjà servi) et poser `NEXT_PUBLIC_BASE_URL=https://www.sitekept.com` en production — corrige d'un coup canonical, sitemap, `og:url` et `metadataBase`. |
| b | **ÉLEVÉ** | **4 pages sans métadonnées propres** : `/realization`, `/privacy`, `/terms`, `/mentions-legales` n'exportent ni `metadata` ni `generateMetadata`. `grep` sur `src/app/(marketing)` ne remonte `buildPageMetadata` que pour `page.tsx`, `blog/page.tsx`, `blog/[slug]/page.tsx`, `seo-geo/page.tsx`, `templates/page.tsx`. | `[PROD]` : `https://www.sitekept.com/realization` renvoie `<title>Sitekept - Site pro en 48h...</title>` (titre de la racine) et **aucun `<link rel="canonical">`** | Ajouter `generateMetadata()` avec `buildPageMetadata({...})` sur ces 4 pages. `/realization` est une page portfolio à fort potentiel commercial, elle est aujourd'hui SEO-muette. |
| c | **MOYEN** | **`/mentions-legales` est en 404 en production** alors qu'elle est liée depuis le footer de **toutes** les pages. | `src/components/footer.tsx:125` (`<Link href="/mentions-legales">`) ; `[PROD]` HTTP 404 | Déployer le commit `1c7c98d`. Lien mort sur tout le site = signal de qualité négatif + non-conformité LCEN. |
| d | **MOYEN** | **Contenu FR et EN servis sur la même URL, sans `hreflang` ni `Vary: Accept-Language`.** `curl -H "Accept-Language: en-US"` sur `https://www.sitekept.com/` renvoie `<html lang="en">` et un `<title>` anglais, **à la même URL**. Le header `vary` servi ne contient que `RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch`. | `src/lib/locale.ts:16-31` (locale depuis cookie puis `Accept-Language`) ; `[PROD]` vérifié | Google indexera une seule version arbitraire et le contenu EN est invisible en recherche. Solution propre : routes `/fr` et `/en` (ou sous-domaines) + `alternates.languages` dans `buildPageMetadata`. A minima, ajouter `Vary: Accept-Language`. Impacte directement l'`inLanguage` des schémas ci-dessus. |
| e | **FAIBLE** | **`/icon.svg` déclaré mais inexistant, et avec un type MIME faux.** `src/app/layout.tsx:28-32` déclare `{ url: "/icon.svg", type: "image/png", sizes: "32x32" }` — un SVG typé `image/png`. | `[PROD]` : `https://www.sitekept.com/icon.svg` → **HTTP 404** (`text/html`) | Supprimer l'entrée, ou créer le fichier avec `type: "image/svg+xml"`. |
| f | **FAIBLE** | **`public/robots.txt` mort et trompeur.** Il contient `Sitemap: https://yourdomain.com/sitemap.xml` (placeholder jamais remplacé). Il est neutralisé par `src/app/robots.ts` (le robots.txt servi porte bien `https://sitekept.com/sitemap.xml`), mais reste un piège pour la prochaine personne qui touche au fichier. | `public/robots.txt` ; `src/app/robots.ts:9` ; `[PROD]` comparé | Supprimer `public/robots.txt`. |
| g | **FAIBLE** | **Aucune page n'est cacheable en CDN.** `cache-control: private, no-cache, no-store, max-age=0, must-revalidate` sur la home, `x-vercel-cache: MISS`. Conséquence de `cookies()` appelé dans `getUserLocale()` sur chaque page. | `src/lib/locale.ts:19` ; `[PROD]` headers | Impact TTFB et budget de crawl (humains **et** crawlers LLM). Se résout naturellement avec la migration vers des routes localisées (point d). |

---

## 4. Visibilité IA / GEO

### 4.1 `/llms.txt` : absent

| Sévérité | **MOYEN** |
|---|---|
| **Preuve `[PROD]`** | `curl -sI https://sitekept.com/llms.txt` → `HTTP/2 307`, `location: https://www.sitekept.com/llms.txt` ; le corps final est le HTML de la page d'accueil. Le fichier n'existe pas — c'est un soft-404 déguisé, pire qu'un 404 franc pour un crawler. |
| **Analyse** | `llms.txt` n'est **pas** un standard supporté par OpenAI, Anthropic, Google ou Perplexity à ce jour. Le présenter comme un levier de trafic serait un faux positif. **Mais** pour cette agence précisément, le rapport coût/bénéfice est excellent pour une autre raison : c'est une **preuve de compétence visible et vérifiable** sur un site qui vend du GEO, et un fichier de synthèse que n'importe quel agent lisant le site peut consommer. Coût : 30 lignes. |
| **Correctif** | Créer `src/app/llms.txt/route.ts` (ou `public/llms.txt`) : |

```
# Sitekept

> Agence web française. Sites professionnels livrés en 48h à partir de 500€,
> sans abonnement imposé, déploiement inclus, propriété à 100% du client,
> optimisation SEO et GEO intégrée.

Contact : sitekept@gmail.com — +33 6 51 17 99 25
Marché : France. Langues : français, anglais.

## Offre
- Prix d'entrée : à partir de 500 €
- Délai de mise en ligne : 48 h pour les projets qui entrent dans le cadre de l'offre
- Nom de domaine offert la première année sur l'offre d'entrée
- Aucun abonnement mensuel imposé pour conserver le site
- Déploiement, configuration du domaine et SSL pris en charge
- Le client est propriétaire du site, de sa structure et de ses contenus

## Pages
- [Accueil](https://sitekept.com/) : offre, process, FAQ
- [SEO + GEO](https://sitekept.com/seo-geo) : référencement naturel et visibilité dans les interfaces IA
- [Blog](https://sitekept.com/blog) : 8 articles sur la rapidité de lancement, la propriété du site, le SEO et le GEO
- [Réalisations](https://sitekept.com/realization) : 10 sites livrés
- [Templates](https://sitekept.com/templates) : bases de sites par métier
- [Mentions légales](https://sitekept.com/mentions-legales)
```

> Adapter les URLs au domaine canonique retenu (§3.4a). Ne pas ajouter de chiffre non vérifiable (nombre de clients, années d'expérience, taux de satisfaction).

### 4.2 `robots.txt` : les crawlers IA ne sont pas bloqués — c'est la bonne position, mais elle est implicite

| Sévérité | **FAIBLE** (le comportement est déjà correct) |
|---|---|
| **Preuve `[PROD]`** | `https://sitekept.com/robots.txt` renvoie exactement :<br>`User-Agent: *` / `Allow: /` / `Sitemap: https://sitekept.com/sitemap.xml` |
| **Analyse** | **Aucune directive ne bloque GPTBot, ClaudeBot, ClaudeBot-User, PerplexityBot, Google-Extended, CCBot, Bytespider, Applebot-Extended.** Le `User-Agent: *` + `Allow: /` les autorise tous. C'est **exactement la position à tenir pour cette agence** : être citée par les LLM est un canal d'acquisition, pas une fuite de valeur. Le contenu du site est du marketing destiné à être diffusé — chaque citation dans ChatGPT ou Perplexity est une recommandation gratuite auprès d'un prospect en phase de recherche active. Bloquer ces bots reviendrait à refuser d'être recommandé. |
| **Recommandation** | Passer de l'autorisation *implicite* à l'autorisation *explicite*, et corriger l'URL du sitemap (§3.4a) : |

```ts
// src/app/robots.ts
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sitekept.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/admin-templates-7q4p9s2m" },
      // Autorisation explicite des crawlers IA : être cité est un canal d'acquisition.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
```

> **Bonus sécurité relevé au passage :** `src/app/admin-templates-7q4p9s2m/page.tsx` est une route « secrète par obscurité », actuellement autorisée au crawl par `Allow: /`. Elle n'est pas dans le sitemap, mais elle est indexable si un lien existe quelque part. Le `disallow` ci-dessus la protège du crawl (pas de l'accès — ce n'est pas un contrôle d'accès). **`NON VÉRIFIÉ` :** je n'ai pas testé si cette route est accessible sans authentification en production.

### 4.3 Citabilité du contenu par les LLM

| Critère | État | Preuve | Sévérité |
|---|---|---|---|
| **Structure question/réponse** | **Bon** | 6 Q/R réelles sur la home (`site-content.ts:562-629`), rendues côté serveur, formulées comme des questions de prospect (« Est-ce qu'il y a un abonnement obligatoire ? »). C'est le format le plus directement citable. | — |
| **Données chiffrées vérifiables** | **Bon** | « 500€ », « 48h », « domaine offert 1 an » apparaissent dans le HTML servi. Un LLM peut répondre « Sitekept démarre à 500 € avec une mise en ligne en 48 h ». | — |
| **Réponses directes en tête de section** | **Moyen** | Les articles s'ouvrent sur un `intro` narratif plutôt que sur une définition. Ex. `/blog/qu-est-ce-que-le-seo-et-le-geo` : le `<h1>` pose la question mais aucun paragraphe ne commence par « Le GEO est… ». Les LLM extraient préférentiellement une définition en première phrase sous le titre. | **MOYEN** |
| **Rendu côté serveur** | **Bon** | Tout le contenu marketing est en SSR/RSC, présent dans le HTML brut (vérifié : FAQ, `<h1>`, `<h2>`, corps d'article tous présents dans le HTML `curl`, sans JS). Les crawlers LLM, qui exécutent rarement JS, voient tout. C'est un vrai point fort. | — |
| **Hiérarchie de titres** | **Bon** | Home : 1 `<h1>` + 7 `<h2>` descriptifs. Article : `<h1>` + `<h2>` par section (`blog/[slug]/page.tsx:82-84`). | — |
| **Attribution / dates** | **Mauvais** | Aucun auteur, aucune date sur aucun article (§2.4). Un LLM ne peut ni dater ni attribuer le contenu, ce qui réduit sa probabilité d'être retenu comme source fiable. | **ÉLEVÉ** |
| **Entité machine-lisible** | **Mauvais** | 0 JSON-LD (§1.1). Rien ne relie « Sitekept » à une entité, un email, un prix, un pays. | **CRITIQUE** |

**Correctif de citabilité (coût faible, effet direct) :** ajouter en tête de chaque article, juste sous le `<h1>`, un paragraphe de définition autoportant de 2-3 phrases répondant littéralement au titre. Sur `/seo-geo`, le `intro` (`site-content.ts:920-923`) fait déjà 3 lignes mais commence par « Le référencement naturel reste une base essentielle… » : ce n'est pas une définition. Une phrase du type « Le GEO (Generative Engine Optimization) désigne l'optimisation d'un site pour être compris et cité par les moteurs de réponse IA comme ChatGPT, Perplexity ou les AI Overviews de Google. » est extraite telle quelle par un LLM.

### 4.4 Cohérence entre ce que `/seo-geo` vend et ce que le site s'applique — le cordonnier mal chaussé

C'est le point à la fois le plus embarrassant et le plus facile à corriger.

**Ce que la page `/seo-geo` promet** (`src/content/site-content.ts:911-960`, en ligne et indexée) :

| Promesse (citation exacte du contenu) | Le site sitekept.com le fait-il ? | Verdict |
|---|---|---|
| « des contenus rédigés pour répondre à de vraies questions » | Oui — FAQ de 6 questions, 8 articles | ✅ |
| « une sitemap bien tenue » | Sitemap présent **mais** toutes ses URLs sont en 307 vers `www` ; `lastModified` = date du build pour tout ; une URL du code (`/mentions-legales`) est en 404 | ⚠️ |
| « des pages indexables » | Oui, `robots: index, follow` partout | ✅ |
| « une base technique propre » | 4 pages sans metadata ni canonical ; `/icon.svg` en 404 ; canonical vers URL redirigée ; `public/robots.txt` avec `yourdomain.com` | ❌ |
| « quand un contenu est **bien structuré** … **appuyé par des signaux cohérents**, il devient plus facile à reprendre dans des réponses générées, des aperçus enrichis ou des recommandations » | **0 donnée structurée sur l'intégralité du site** | ❌ **Contradiction frontale** |
| Home : « Un site pensé pour être **compris, indexé et recommandé** » (`<h2>` vérifié `[PROD]`) | Aucun schéma d'entité, aucune image OG, aucun auteur, aucune date | ❌ |
| FAQ : « Nous structurons les pages pour charger vite, être claires pour Google et **rester faciles à citer dans les interfaces IA** » | Voir ci-dessus | ❌ |

**Risque commercial concret, pas théorique :**

1. Un prospect averti — ou son agence concurrente en phase de comparaison — ouvre le code source de sitekept.com, cherche `ld+json`, ne trouve rien. L'argument GEO s'effondre en 5 secondes, sans discussion possible.
2. Une agence concurrente peut faire de cette page une démonstration : *« ils vendent du GEO et n'ont pas une seule donnée structurée »*. C'est vérifiable publiquement et indéfendable.
3. Un lien Sitekept partagé sur LinkedIn en prospection affiche une carte sans image (§3.1) — pour une agence qui vend du design.
4. Le site vend d'être « facile à citer par les IA » alors qu'un LLM interrogé sur Sitekept n'a aucune entité structurée, aucune date, aucun auteur à se mettre sous la dent.

**C'est le seul finding de ce rapport dont l'impact est direct sur le taux de conversion, pas seulement sur le trafic.** Les correctifs des sections 2 et 3 le résolvent intégralement pour un coût de développement de l'ordre de la demi-journée. Une fois faits, la page `/seo-geo` devient une démonstration au lieu d'une promesse — et « regardez le code source de notre propre site » devient un argument de vente.

---

## 5. Éligibilité aux résultats enrichis Google

État vérifié le 10/08/2026, contre la galerie officielle des fonctionnalités supportées.

| Rich result | Obtenu ? | Atteignable ? | Ce qui manque | Sévérité |
|---|---|---|---|---|
| **Fil d'Ariane (Breadcrumbs)** | Non | **Oui, immédiatement** | `BreadcrumbList` (§2.3) sur 8 articles + `/blog`, `/realization`, `/templates`, `/seo-geo` | **MOYEN** |
| **Article / Discover** | Non | **Oui** | `BlogPosting` (§2.4) + les champs `datePublished`/`dateModified`/`author`/`image` à créer dans le modèle de données. Sans image OG (§3.1), pas de vignette Discover. | **ÉLEVÉ** |
| **Organization / Knowledge Panel** | Non | **Oui, partiellement** | `Organization` (§2.1) + `logo` + `sameAs` réels. Sans `sameAs`, la consolidation d'entité reste faible. | **CRITIQUE** |
| **Sitelinks (liens de site)** | Partiel/inconnu | Oui, indirectement | Non balisable directement (algorithmique). Favorisé par une arborescence claire, des ancres internes cohérentes et des breadcrumbs. `NON VÉRIFIÉ` : je n'ai pas consulté le SERP réel de la marque. | **FAIBLE** |
| **FAQ** | Non | **Non — feature supprimée** | Rien à faire côté rich result : Google a retiré les rich results FAQ le 7 mai 2026. Baliser quand même (§2.5) **pour le GEO uniquement**. Toute promesse de rich result FAQ serait un faux positif. | — |
| **Local Business / fiche locale** | Non | **Non, en l'état** | Bloqué par l'absence d'adresse (`legalNotice.sections.editor.address` = « À COMPLÉTER »). Nécessiterait aussi une fiche Google Business Profile. | **MOYEN** |
| **Avis / Étoiles (Review snippet)** | Non | **Non — et ne pas essayer** | Aucun avis client n'existe. Fabriquer un `aggregateRating` = action manuelle Google. À écarter tant qu'un vrai dispositif de collecte d'avis n'est pas en place. | — |
| **Sitelinks Searchbox** | Non | **Non** | Pas de recherche interne (vérifié §2.1) et fonctionnalité par ailleurs retirée par Google. Ne pas baliser de `SearchAction`. | — |
| **Video / Product / Event / Recipe / JobPosting** | Non | Non pertinent | Aucun contenu de ce type sur le site. | — |

---

## 6. Plan d'action priorisé

### Bloquant technique — à faire en premier (sinon le reste ne fonctionne pas)

1. **`metadataBase`** dans `src/app/layout.tsx` (§3.2) — prérequis absolu de toute image OG.
2. **Fixer le domaine canonique** : `NEXT_PUBLIC_BASE_URL=https://www.sitekept.com` en production (§3.4a) — corrige canonical, sitemap, `og:url` et `metadataBase` d'un seul coup.
3. **Déployer `1c7c98d`** — supprime le 404 de `/mentions-legales` lié depuis toutes les pages (§3.4c).

### Critique — impact business direct

4. **`opengraph-image.tsx`** racine + variante blog (§3.3). Chaque jour sans image OG dégrade chaque lien partagé en prospection.
5. **JSON-LD `Organization` + `WebSite`** dans le layout racine (§2.1), après avoir complété les mentions légales.
6. **JSON-LD `FAQPage`** sur la home (§2.5) — données déjà écrites, coût quasi nul, seul vrai levier GEO immédiat.

### Élevé

7. Ajouter `datePublished`, `dateModified`, `author`, `image` à l'interface `BlogPost` (`site-content.ts:80`), puis **`BlogPosting`** sur les 8 articles (§2.4). Faire pointer `sitemap.ts` sur `dateModified`.
8. **`generateMetadata()`** sur `/realization`, `/privacy`, `/terms`, `/mentions-legales` (§3.4b).
9. **`Service` + `OfferCatalog`** sur la home (§2.2).

### Moyen

10. **`BreadcrumbList`** sur toutes les pages profondes (§2.3) — le rich result le plus rapidement obtenu.
11. **`CollectionPage` + `ItemList`** sur `/realization` (§2.6) et **`Blog`** sur `/blog` (§2.7).
12. **`llms.txt`** (§4.1) — surtout comme preuve de compétence.
13. **Paragraphe de définition** en tête de chaque article (§4.3).
14. Décider de la stratégie **i18n / hreflang** (§3.4d).

### Faible

15. `robots.ts` : autorisation explicite des crawlers IA + `disallow` sur `/admin-templates-7q4p9s2m` (§4.2).
16. Supprimer `public/robots.txt` (§3.4f).
17. Corriger ou supprimer `/icon.svg` (§3.4e).

### Vérification post-déploiement

- Rich Results Test (`search.google.com/test/rich-results`) sur : `/`, un article, `/realization`.
- Validateur schema.org (`validator.schema.org`) sur le `@graph` racine.
- Débogueurs de partage : LinkedIn Post Inspector, X Card Validator, `opengraph.xyz`.
- Search Console → Améliorations : apparition des rapports « Fil d'Ariane » et « Article ».

---

## Annexe — Éléments explicitement NON VÉRIFIÉS

- Dimensions réelles en pixels de `/logo.png` (nécessaires pour `ImageObject.width/height` du §2.1).
- Les 500 € sont-ils HT ou TTC (§2.2, `valueAddedTaxIncluded`).
- Titres `title.fr` exacts de 6 des 8 articles (§2.7) — non lus intégralement dans `site-content.ts`.
- 10e entrée de `REALIZATIONS` (§2.6) — liste tronquée à la lecture.
- SERP réel de la marque « Sitekept » (sitelinks actuels, §5).
- Accessibilité sans authentification de `/admin-templates-7q4p9s2m` en production (§4.2).
- Existence réelle d'un compte X/Twitter `@sitekept` — le handle est déclaré dans `page-metadata.ts:35` mais le profil n'a pas été vérifié.
