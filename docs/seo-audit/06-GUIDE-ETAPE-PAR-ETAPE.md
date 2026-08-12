# Guide d'exécution étape par étape — SEO sitekept.com

Runbook opérationnel issu du [rapport consolidé](00-RAPPORT-CONSOLIDE.md). Les étapes sont **dans l'ordre d'exécution** : chacune suppose la précédente faite.

Chaque étape suit le même format : **Pourquoi → Action → Vérification**. Ne passez à la suivante qu'une fois la vérification verte.

**Convention :** 🔧 = configuration (pas de code) · 💻 = code · 📊 = outil externe

---

## État d'avancement au 11 août 2026

**Blocs A, B et C terminés et vérifiés en production** (commit `06b31f0`, déployé sur `main`).

| Étape | État | Vérification en production |
|---|---|---|
| 1. Domaine canonique | ✅ | `<link rel="canonical" href="https://www.sitekept.com"/>` |
| 2. Redirection 308 | ✅ | `sitekept.com → 308 → www.sitekept.com` |
| 3. `metadataBase` + `/icon.svg` | ✅ | `og:image` résolu en absolu ; référence 404 retirée |
| 4. Déploiement `dev` → `main` | ✅ | `/mentions-legales` → 200 ; accents rétablis |
| 5. Resoumission du sitemap | ✅ | Resoumis le 11 août 2026 ; 16 URLs, toutes en `www` |
| 6. Vrais liens vers les démos | ✅ | **0 → 13 ancres** sur `/templates` |
| 7. `noindex` + coordonnées + bandeau | ✅ | `noindex, follow` sur les 14 démos ; téléphones en plages ARCEP réservées à la fiction, e-mails en `.example` ; bandeau « Démonstration » avec lien retour. **Reste `/balinjera`, voir ci-dessous** |
| 8. Sitemap aligné | ✅ | 28 → 16 URLs, `lastmod` retiré |
| 9. Image OG + `Organization` | ✅ | `/opengraph-image` → 200, PNG 134 Ko ; 1 bloc JSON-LD |
| 10. Événement `generate_lead` | ✅ Code | Émis à l'envoi du formulaire |
| 11. Marquer l'événement clé | ⏳ Bloqué | Nécessite un premier déclenchement réel |

### Bloc D — terminé (commit `2660e38`)

| Étape | État | Détail |
|---|---|---|
| 12. Titles & descriptions | ✅ | Metadata propre sur `/realization`, `/privacy`, `/terms`, `/mentions-legales` (elles héritaient de la home) ; home, `/templates`, `/blog`, `/seo-geo` réécrits sur des intentions de recherche ; 3 seoTitle d'articles ramenés sous 60 caractères |
| 12b. Français | ✅ | Accents rétablis dans les metadata de `/blog` et `/templates` et dans tout l'article `site-optimise-seo-geo` ; « templates publiques » → « publics » |
| 13. Structure Hn | ✅ | H1 de la home porteur de mot-clé ; `<h2>` de section ajouté sur `/templates` et `/realization` (sauts H1→H3 supprimés) |
| 15. Dates & auteurs | ✅ | `publishedAt` / `updatedAt` / `author` sur les 8 articles, **dates dérivées de l'historique git**, affichées dans le template ; sitemap branché sur `updatedAt` |
| 15b. Données structurées | ✅ | `BlogPosting` + `BreadcrumbList` sur les articles, `FAQPage` + `BreadcrumbList` sur `/tarifs` |
| 16. Page tarifs | ✅ | `/tarifs` créée à partir des conditions réelles, FAQ de 6 questions, ajoutée au sitemap, à la navigation et au footer |

**Non fait dans le bloc D, et pourquoi :**

- **Étoffer les pages commerciales de 250 à 800-1 200 mots** (étape 14) et **produire 4-6 articles piliers de 1 500+ mots** (étape 15c) : ce sont des travaux de rédaction éditoriale, pas des correctifs techniques. Les plans et les mots-clés cibles sont dans [02-onpage-contenu.md § 8](02-onpage-contenu.md).
- **Pages géolocalisées** : bloquées tant que les mentions légales portent « À COMPLÉTER » sur la raison sociale et l'adresse. Sans adresse réelle et vérifiable, créer des pages « agence web à [ville] » exposerait à une action manuelle.

### Bloc E — mesures avant / après

| Étape | État | Mesure en production |
|---|---|---|
| 17. Rendu statique | ✅ | **70 routes ○ statiques** (contre 84 ƒ dynamiques avant), 75 HTML prérendus. `x-vercel-cache: HIT`, `cache-control: public` |
| 18. Hero allégé | ✅ | Animation désactivée sous 768px, en connexion lente et en économie de données ; `requestIdleCallback` au lieu d'un délai fixe ; canvas plafonné à DPR 1 |
| 19. Région d'exécution | ✅ | `x-vercel-id` passé de `fra1::iad1` (Washington) à **`fra1::cdg1`** (Paris) |
| 20. Images AVIF | ✅ | `orhakerem.png` (2,6 Mo source) servie en **AVIF, 20 892 octets** à w=640 |

**TTFB de la page d'accueil, mesuré au curl depuis une même machine :**

| État | TTFB médian | Temps serveur |
|---|---|---|
| Dynamique, origine `iad1` (Washington) | ~390 ms | ~150 ms |
| Dynamique, origine `cdg1` (Paris) | ~311 ms | ~70 ms |
| **Statique, servi par le CDN** | **253 ms** | **~12 ms** |

> **Lecture honnête de ces chiffres.** Les 241 ms restants sont le **plancher
> réseau depuis la machine de mesure** : `/favicon.ico`, simple fichier statique
> servi par le même edge, met lui aussi 241 ms en médiane. La page d'accueil
> n'est donc plus qu'à **12 ms au-dessus d'un fichier statique pur** — la part
> serveur est éliminée.
>
> Ce plancher de 241 ms est propre au réseau du poste de mesure ; un visiteur
> français, bien plus proche de l'edge, ne le paiera pas. **Ne comparez ces
> valeurs qu'entre elles**, pas à un objectif absolu de Core Web Vitals : les
> mesures individuelles varient de 0,24 à 0,79 s selon l'état du réseau, et
> seule la médiane sur 15 requêtes est exploitable.

> ### ✅ Arbitrage rendu — français uniquement
> L'i18n par cookie a été retirée : le site ne sert plus que le français, et le
> sélecteur de langue a disparu. La version anglaise n'était de toute façon pas
> indexable (même URL, contenu servi selon un cookie) et n'apportait aucun
> trafic de recherche.
>
> Deux points relevés au passage : `next-intl` n'était en réalité **pas
> branché** (aucun plugin dans `next.config`, aucun `NextIntlClientProvider`,
> et les seuls `useTranslations` dans trois composants jamais importés) ; et un
> appel à `headers()` introduit à l'étape 7 pour le bandeau de démonstration
> forçait lui aussi le rendu dynamique de **tout** le site. Les 14 démos ont été
> regroupées sous `src/app/(demos)/` — groupe de routes, donc **aucune URL ne
> change** — avec un layout commun qui rend le bandeau en statique.
>
> `messages/en.json` et les variantes `en` du contenu sont conservés mais
> inatteignables, pour que la décision reste réversible.

### Note d'environnement — `pnpm dev` sous Node 25

`next dev` renvoie une erreur 500 (`localStorage.getItem is not a function`)
sous **Node v25.2.1** : cette version expose un `localStorage` global dont
`getItem` est `undefined` tant qu'aucun `--localstorage-file` n'est fourni.
Toute dépendance qui teste `typeof localStorage !== "undefined"` avant de
l'appeler plante.

**Ni le build ni la production ne sont affectés** : `pnpm build` génère bien
les 86 pages sous Node 25, et le site déployé fonctionne. Un `.nvmrc` (Node 22)
a été ajouté ; utilisez-le en local.

**Reste à faire :** `/balinjera`, l'étape 11, et la rédaction éditoriale du
bloc D (étapes 14 et 15c). Les blocs A, B, C, D et E sont terminés pour tout ce
qui relève du technique.

> ### ⚠️ Point ouvert — `/balinjera`
> Cette page expose `fantaprada25@gmail.com` et le numéro `+972 3 525 2527`
> (`src/app/(demos)/balinjera/balinjera-content.ts:56` et `:190`,
> `src/app/(demos)/balinjera/balinjera-shell.tsx:572`).
>
> Contrairement aux 13 autres démos, **balinjera n'est pas une entreprise
> fictive** : c'est une réalisation client réelle, en hébreu, avec ce qui
> ressemble à une **adresse Gmail personnelle**. Je n'ai donc pas remplacé ces
> coordonnées par des valeurs fictives — cela reviendrait à falsifier les
> informations d'un vrai client.
>
> La page est désormais en `noindex`, ce qui la retire des résultats de
> recherche, mais elle reste publiquement accessible et aspirable par les
> robots collecteurs d'adresses.
>
> **Trois options, à arbitrer :** retirer la page du domaine ; remplacer les
> coordonnées par celles de SiteKept ; ou obtenir l'accord explicite du client
> pour les conserver. Une adresse Gmail personnelle exposée sur une page
> publique est une question de données personnelles, pas de SEO.

---

## Vue d'ensemble

| Bloc | Étapes | Durée | Effet attendu |
|---|---|---|---|
| **A. Débloquer l'indexation** | 1 → 5 | ~1 h | Google recommence à explorer le site |
| **B. Rendre le site explorable** | 6 → 9 | ~3 h | Les pages deviennent atteignables et éligibles |
| **C. Mesurer** | 10 → 11 | ~1 h | Le ROI devient mesurable |
| **D. Exister sur des requêtes** | 12 → 16 | 3-4 semaines | Premières impressions non-marque |
| **E. Chantiers de fond** | 17 → 20 | 1 trimestre | Performance, i18n, cache |

> **Ne sautez pas le bloc A.** Tant que les signaux de domaine sont contradictoires, tout le travail de contenu des blocs suivants sera dilué sur deux hôtes et partiellement ignoré.

---

# Bloc A — Débloquer l'indexation (~1 h)

## Étape 1 🔧 — Définir le domaine canonique dans Vercel

**Pourquoi.** C'est la correction qui a le plus d'effet pour le moins d'effort. `NEXT_PUBLIC_BASE_URL` n'est pas définie en production, donc [`page-metadata.ts:3`](../../src/lib/page-metadata.ts), [`sitemap.ts:6`](../../src/app/sitemap.ts) et [`robots.ts:9`](../../src/app/robots.ts) retombent tous sur `https://sitekept.com` — l'hôte qui redirige. Une seule variable corrige les canonicals, le sitemap, le robots.txt et l'`og:url` d'un coup.

**Action.** Dans Vercel → projet `web-landing` → **Settings → Environment Variables** :

| Clé | Valeur | Environnements |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | `https://www.sitekept.com` | Production, Preview, Development |

Ajoutez-la aussi en local :

```bash
echo 'NEXT_PUBLIC_BASE_URL=https://www.sitekept.com' >> .env.local
```

> **Choix du `www` — pourquoi.** C'est l'hôte réellement servi (200), celui qui a le plus d'historique d'indexation, et celui sous lequel le sitemap est déjà déclaré dans Search Console. Basculer vers le non-`www` serait défendable techniquement mais coûterait de repartir de zéro sur ces trois plans. **Ne revenez pas sur ce choix ensuite** : la pire option est d'en changer tous les six mois.

**Vérification.** Après redéploiement (étape 4) :

```bash
curl -s https://www.sitekept.com/ | grep -o '<link rel="canonical"[^>]*>'
```

Attendu : `<link rel="canonical" href="https://www.sitekept.com"/>` — avec le `www`.

---

## Étape 2 🔧 — Passer la redirection en 308 (permanente)

**Pourquoi.** `https://sitekept.com` renvoie actuellement un **307**, qui signifie « temporaire — continue d'indexer l'original ». Google obéit, d'où les deux hôtes en parallèle dans l'index. Le **308** signifie « définitif — transfère tout ici ».

**Action.** Vercel → projet → **Settings → Domains**. Le domaine `sitekept.com` est configuré pour rediriger vers `www.sitekept.com`. Ouvrez sa configuration et passez le code de statut de **307 Temporary** à **308 Permanent**.

> Cette redirection est gérée par Vercel au niveau du domaine, pas par le code : il n'y a rien à changer dans `next.config.ts`, et il n'existe aucun `vercel.json` dans ce dépôt.

**Vérification.**

```bash
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" https://sitekept.com/
```

Attendu : `308 -> https://www.sitekept.com/`

---

## Étape 3 💻 — Ajouter `metadataBase`

**Pourquoi.** Sans `metadataBase`, Next.js ne peut pas résoudre les URLs relatives des métadonnées — ce qui bloquera l'image Open Graph de l'étape 9. C'est un prérequis, autant le poser maintenant.

**Action.** Dans [`src/app/layout.tsx`](../../src/app/layout.tsx), à l'intérieur de l'objet retourné par `generateMetadata` :

```diff
   return {
+    metadataBase: new URL(
+      process.env.NEXT_PUBLIC_BASE_URL || "https://www.sitekept.com"
+    ),
     title: getMessage(locale, "metadata.title"),
```

Profitez-en pour corriger la référence morte `/icon.svg` (elle renvoie **404**, et est déclarée avec un type MIME `image/png` sur un `.svg`). Toujours dans `layout.tsx`, supprimez l'entrée :

```diff
     icons: {
       icon: [
         {
           url: "/favicon.ico",
           sizes: "any",
         },
-        {
-          url: "/icon.svg",
-          type: "image/png",
-          sizes: "32x32",
-        },
       ],
```

Alignez aussi le fallback dans les deux autres fichiers, pour que le comportement soit correct même si la variable d'environnement venait à manquer :

```diff
- const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sitekept.com";
+ const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sitekept.com";
```

à appliquer dans [`src/lib/page-metadata.ts:3`](../../src/lib/page-metadata.ts) et [`src/app/sitemap.ts:6`](../../src/app/sitemap.ts), ainsi que dans [`src/app/robots.ts:9`](../../src/app/robots.ts).

**Vérification.**

```bash
pnpm type-check && pnpm build
```

---

## Étape 4 🔧 — Déployer `dev` en production

**Pourquoi.** La production est en retard d'un commit (`git rev-list --count main..dev` = 1). Deux défauts visibles en ligne sont **déjà corrigés dans le dépôt** mais non déployés : `/mentions-legales` renvoie 404, et tout le texte de la page d'accueil est désaccentué (« La rapidite compte, mais la clarte commerciale… »).

**Action.**

```bash
git checkout main && git merge dev && git push origin main
```

Vercel déclenche le déploiement automatiquement.

**Vérification.**

```bash
curl -s -o /dev/null -w "mentions-legales: %{http_code}\n" https://www.sitekept.com/mentions-legales
curl -s https://www.sitekept.com/ | grep -o "La rapidit[ée][^<]\{0,40\}"
```

Attendu : `200`, et une chaîne **avec accents**.

---

## Étape 5 📊 — Resoumettre le sitemap

**Pourquoi.** Google n'a pas relu le sitemap depuis le **2 août 2025** — plus d'un an — parce que toutes ses URLs étaient en 307. Les étapes 1 à 4 viennent de supprimer cette cause. Il faut maintenant le lui signaler explicitement, sinon il peut s'écouler des semaines avant qu'il ne réessaie de lui-même.

**Action.** Vérifiez d'abord que le sitemap est propre :

```bash
curl -s https://www.sitekept.com/sitemap.xml | grep -o '<loc>[^<]*' | head -3
```

Toutes les URLs doivent commencer par `https://www.sitekept.com`. Puis, dans Search Console → **Sitemaps** : supprimez l'entrée existante, et resoumettez `sitemap.xml`.

Demandez ensuite une réindexation manuelle des pages prioritaires via **Inspection de l'URL → Demander une indexation** : la page d'accueil, `/templates`, `/realization`, `/blog`.

**Vérification.** Sous 48-72 h, l'état du sitemap doit passer de « 4 erreurs » à « Opération réussie », avec un nombre de pages découvertes cohérent avec le nombre d'URLs déclarées.

> **À ce stade, le plus dur est fait.** Attendez 3 à 7 jours avant de juger : l'indexation n'est pas instantanée. Ne modifiez plus les canonicals ni le domaine pendant cette fenêtre.

---

# Bloc B — Rendre le site explorable (~3 h)

## Étape 6 💻 — Remplacer `window.open()` par de vrais liens

**Pourquoi.** Les 13 pages de démonstration ne reçoivent **aucun lien HTML**. La navigation passe par un `onClick` sur un `<Button>` — l'utilisateur voit un bouton, Googlebot ne voit rien. Une ligne bloque l'exploration de 13 pages.

**Action.** Dans [`src/app/_components/project-card.tsx`](../../src/app/_components/project-card.tsx), supprimez le handler et rendez un vrai lien.

```diff
-  const handleVisit = () => {
-    if (!url) {
-      return;
-    }
-
-    window.open(url, "_blank", "noopener,noreferrer");
-  };
-
   const isTemplateCard = category === "template";
+  const isExternal = Boolean(url && /^https?:\/\//.test(url));
```

Puis, dans le rendu :

```diff
             {url ? (
               <Button
-                onClick={handleVisit}
+                asChild
                 variant="outline"
                 size="sm"
                 className={cn(visitButtonClassName)}
               >
-                <ExternalLink size={isTemplateCard ? 14 : 16} />
-                Visiter
+                <a
+                  href={url}
+                  target="_blank"
+                  rel={isExternal ? "noopener noreferrer" : "noopener"}
+                >
+                  <ExternalLink size={isTemplateCard ? 14 : 16} />
+                  Visiter
+                </a>
               </Button>
             ) : null}
```

> **Deux détails qui comptent.** `rel="noreferrer"` est réservé aux liens externes : l'appliquer aux liens internes prive vos propres pages de la donnée de référent dans GA4. Et `target="_blank"` ne gêne pas l'exploration — ce qui compte pour Googlebot, c'est l'existence d'un `href`.

**Vérification.**

```bash
pnpm build
# après déploiement :
curl -s https://www.sitekept.com/templates | grep -c 'href="/\(boulangerie\|dentiste\|fleuriste\)"'
```

Attendu : un nombre **supérieur à 0** (il vaut `0` aujourd'hui).

---

## Étape 7 🔧💻 — Trancher le sort des 59 pages de démonstration

**Pourquoi.** C'est le seul arbitrage réellement stratégique de ce guide, et il faut le poser avant d'investir dans le contenu. Ces pages représentent **plus de 80 % du volume du site** et se présentent comme de vraies entreprises. La démo `/dentiste` s'annonce « Clinique Nova Sourire — Cabinet dentaire » avec un numéro français (`+33 1 84 12 00 18`), une adresse et un e-mail, **sans mention visible qu'il s'agit d'une démonstration**.

**Action immédiate, non négociable et indépendante de l'arbitrage :**

1. **Vérifiez que le numéro `+33 1 84 12 00 18` n'appartient pas à un tiers réel.** Si c'est le cas, retirez-le sans délai.
2. Remplacez toutes les coordonnées inventées des 13 démos par des valeurs manifestement fictives (`01 23 45 67 89`, `contact@exemple.fr`).
3. Ajoutez une **bannière visible** en haut de chaque démo : « Démonstration — site d'exemple réalisé par SiteKept », avec un lien de retour vers sitekept.com. Cela résout au passage le fait que ces pages sont des culs-de-sac sans lien retour.

**Puis choisissez une option :**

| Option | Effet | Quand la choisir |
|---|---|---|
| **A. `noindex, follow`** *(recommandé)* | Les démos sortent de l'index, l'autorité reste concentrée sur les pages commerciales. Elles restent visitables et démontrables en rendez-vous. | Par défaut. Réversible, rapide. |
| **B. Sous-domaine `demo.sitekept.com`** | Séparation nette du contenu quasi-dupliqué. | À moyen terme, si le catalogue continue de croître. |
| **C. Garder indexé** | Volume de pages, mais dilution et risque de contenu de faible valeur. | Seulement si chaque démo reçoit du contenu éditorial unique et substantiel. |

**Mise en œuvre de l'option A.** Créez `src/middleware.ts` (il n'en existe aucun aujourd'hui) et réutilisez la fonction `isPublicTemplatePathname` de [`src/lib/public-template-routes.ts`](../../src/lib/public-template-routes.ts) — elle est déjà écrite pour exactement ce besoin, et n'est actuellement appelée nulle part.

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
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
```

> `noindex, **follow**` et non `noindex, nofollow` : les liens de ces pages continuent de transmettre leur valeur, notamment le lien retour de la bannière.

**Vérification.**

```bash
curl -sI https://www.sitekept.com/dentiste | grep -i x-robots-tag
curl -sI https://www.sitekept.com/ | grep -i x-robots-tag   # doit être vide
```

---

## Étape 8 💻 — Aligner le sitemap

**Pourquoi.** Le sitemap déclare 28 URLs pour plus de 70 pages réelles, et affecte à toutes le même `lastModified` figé au build — 28 dates identiques, ce qui est un signal de fraîcheur nul, voire trompeur.

**Action.** Dans [`src/app/sitemap.ts`](../../src/app/sitemap.ts), cohérent avec l'option A de l'étape 7 : retirez les 13 pages de démo, puisqu'elles sont désormais en `noindex`.

```diff
-    ...PUBLIC_TEMPLATE_SLUGS.map((slug) => ({
-      url: `${baseUrl}/${slug}`,
-      lastModified: new Date(),
-      changeFrequency: "weekly" as const,
-      priority: 0.8,
-    })),
```

Le sitemap tombe à ~15 URLs, **toutes commerciales et toutes canoniques** — un signal net plutôt qu'un inventaire flou.

Remplacez ensuite `new Date()` par des dates réelles. Pour les articles, utilisez la date de publication issue de `blogPosts` (voir étape 15, qui ajoute ce champ) ; pour les pages statiques, une constante mise à jour à chaque modification réelle vaut mieux qu'une date automatique toujours égale à « maintenant ».

**Vérification.**

```bash
curl -s https://www.sitekept.com/sitemap.xml | grep -c "<loc>"
curl -s https://www.sitekept.com/sitemap.xml | grep -o "<lastmod>[^<]*" | sort -u | wc -l
```

Attendu : ~15 URLs, et **plus d'une seule** valeur de `lastmod` distincte.

---

## Étape 9 💻 — Image Open Graph et `Organization`

**Pourquoi.** Aucune image de partage n'existe, alors que `twitter:card` est déclaré en `summary_large_image` — chaque partage LinkedIn ou WhatsApp produit une carte vide. Et aucun JSON-LD n'existe sur le site (`grep -c 'application/ld+json'` = **0**), ce qui prive Google de toute compréhension structurée de l'entité.

**Action — image OG.** Créez `src/app/opengraph-image.tsx` (solution Next.js idiomatique, l'image est générée au build) :

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SiteKept — sites professionnels livrés en 48 h";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div>Sitekept</div>
        <div style={{ fontSize: 40, fontWeight: 400, color: "#94a3b8", marginTop: 24 }}>
          Site professionnel livré en 48 h, sans abonnement
        </div>
      </div>
    ),
    size
  );
}
```

**Action — JSON-LD.** Le bloc `Organization` + `WebSite` complet, avec les vraies données du site, est fourni dans [03-donnees-structurees-geo.md § 2.1](03-donnees-structurees-geo.md). Injectez-le dans le layout marketing.

> **Ne renseignez aucune donnée que vous ne pouvez pas prouver.** Le volet détaillé marque les champs manquants avec `<<À RENSEIGNER>>`. En particulier : **n'ajoutez jamais un `AggregateRating` sans avis réels et vérifiables** — c'est une violation des règles de Google qui peut valoir une action manuelle.

**Vérification.** Après déploiement, passez la page d'accueil dans le [test des résultats enrichis](https://search.google.com/test/rich-results) et dans le [validateur de partage LinkedIn](https://www.linkedin.com/post-inspector/).

---

# Bloc C — Mesurer (~1 h)

## Étape 10 💻 — Suivre la conversion du formulaire

**Pourquoi.** Le seul événement clé configuré dans GA4 est `purchase` — valeur par défaut, « aucune donnée de flux détectée ». L'envoi du formulaire, **unique conversion du site**, n'est pas suivi. Sans cela, aucun arbitrage budgétaire n'est possible : vous ne saurez pas si le SEO rapporte.

**Action.** Dans [`src/features/contact-form/use-contact-form.ts`](../../src/features/contact-form/use-contact-form.ts), dans la branche de succès :

```diff
     if (result.success) {
       setSubmitStatus("success");
+
+      if (typeof window !== "undefined" && typeof window.gtag === "function") {
+        window.gtag("event", "generate_lead", {
+          event_category: "contact",
+          event_label: "formulaire_contact",
+        });
+      }
+
       const form = document.getElementById("contact-form") as HTMLFormElement;
       form?.reset();
     }
```

Déclarez le type dans un fichier `.d.ts` du projet, ou en tête du fichier :

```ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
```

**Vérification.** Envoyez un message de test depuis le site, puis GA4 → **Rapports → Temps réel** : l'événement `generate_lead` doit apparaître sous 30 secondes.

---

## Étape 11 📊 — Marquer `generate_lead` comme événement clé

**Pourquoi.** Un événement collecté n'est pas une conversion tant qu'il n'est pas marqué comme tel. Sans cette étape, l'étape 10 ne sert à rien dans les rapports.

**Action.** GA4 → **Administration → Affichage des données → Événements**. Attendez que `generate_lead` apparaisse (jusqu'à 24 h après le premier déclenchement), puis cliquez l'**étoile** à côté de son nom.

Retirez au passage `purchase` de la liste des événements clés : il ne se déclenchera jamais sur ce site et pollue les rapports.

**Vérification.** GA4 → Rapports → **Acquisition de trafic** : une colonne « Événements clés » apparaît, ventilée par canal. C'est le tableau qui vous dira, dans trois mois, si le SEO rapporte.

> **Faites cette étape maintenant, pas plus tard.** GA4 n'applique pas les conversions rétroactivement : chaque semaine de retard est une semaine de données perdue définitivement.

---

# Bloc D — Exister sur des requêtes (3-4 semaines)

À ce stade le site est explorable, indexable et mesurable. Il reste le vrai travail : **zéro requête commerciale en six mois** signifie que les pages ne sont écrites pour aucune requête.

## Étape 12 💻 — Supprimer les titles et descriptions dupliqués

Quatre pages publiques héritent du title et de la description de la page d'accueil — duplication exacte. 37 sous-pages de démos partagent le title de leur page mère. Le tableau complet **Route → title actuel → title proposé → description proposée**, rédigé en français et prêt à copier, est dans [02-onpage-contenu.md § 9](02-onpage-contenu.md).

## Étape 13 💻 — Corriger la structure Hn

Le H1 de la page d'accueil ne contient aucun mot-clé de recherche. `/templates` et `/realization` sautent de H1 à H3. 37 sous-pages de démos **n'ont aucun H1**. Détail en [§ 3](02-onpage-contenu.md).

## Étape 14 💻 — Étoffer les pages commerciales

Environ **250 mots** par page commerciale, très en dessous du seuil de compétitivité. Cible : 800-1 200 mots par page, structurés autour d'une intention de recherche identifiée, pas d'un argumentaire générique.

## Étape 15 💻 — Reprendre le blog

Huit articles d'environ 320 mots, **sans date de publication ni auteur** — deux signaux d'E-E-A-T absents, et un blocage pour le JSON-LD `BlogPosting`. Ajoutez `publishedAt`, `updatedAt` et `author` au type des articles dans `src/content/site-content.ts`, affichez-les, puis allongez les contenus et maillez vers les pages commerciales.

## Étape 16 💻 — Créer les pages manquantes

Ni page tarifs, ni pages services dédiées, ni pages géolocalisées. Le plan de mots-clés et les 10 sujets à fort ROI sont en [§ 8](02-onpage-contenu.md).

> **Une question à trancher avant les pages géolocalisées :** je n'ai pas pu déterminer si l'agence a une implantation géographique réelle. Le SEO local est le chemin le plus rapide vers des impressions qualifiées, **mais uniquement avec une adresse réelle et vérifiable**. Sans elle, créer des pages « agence web à [ville] » serait contre-productif et exposerait à une action manuelle. Confirmez ce point avant de démarrer.

---

# Bloc E — Chantiers de fond (1 trimestre)

## Étape 17 💻 — Migrer l'i18n vers un routage par préfixe d'URL

**Le chantier le plus rentable des quatre**, parce qu'il en résout trois d'un coup. Aujourd'hui la locale est lue dans un cookie depuis [`src/lib/locale.ts`](../../src/lib/locale.ts), via `cookies()` **et** `headers()` — deux appels qui basculent l'arbre entier en rendu dynamique.

Passer à `localePrefix: "as-needed"` de `next-intl` :
- rend la version anglaise indexable (elle ne l'est pas du tout aujourd'hui) ;
- permet les balises `hreflang` et `x-default` ;
- **supprime la cause du rendu dynamique intégral**, et restaure la mise en cache CDN ;
- ne casse **aucune URL française existante** grâce à `as-needed`.

## Étape 18 💻 — Alléger le fond du hero

[`src/components/ui/tubes-cursor.tsx:29`](../../src/components/ui/tubes-cursor.tsx) charge **774 791 octets** depuis le CDN jsdelivr (1,15 s mesurées) pour un fond décoratif. Le composant respecte correctement `prefers-reduced-motion`, mais reste chargé pour la grande majorité des visiteurs. Options par gain/effort en [04-performance-cwv.md § 4](04-performance-cwv.md).

## Étape 19 🔧 — Rapprocher le serveur des visiteurs

`x-vercel-id: fra1::iad1` — la requête entre par Francfort et s'exécute à **Washington DC**. Fixez la région d'exécution sur `cdg1` ou `fra1`. À faire **après** l'étape 17 : une fois les pages statiques et servies par le CDN, ce point perd l'essentiel de son importance.

## Étape 20 💻 — Optimiser les images

17 Mo dans `public/`, jusqu'à 2,72 Mo l'unité, et `images.formats` non configuré dans [`next.config.ts`](../../next.config.ts) — donc pas d'AVIF. Inventaire en [04-performance-cwv.md § 9](04-performance-cwv.md).

---

# Suivi

## Vérification complète après le bloc A

```bash
curl -s -o /dev/null -w "non-www: %{http_code} -> %{redirect_url}\n" https://sitekept.com/
curl -s https://www.sitekept.com/ | grep -o '<link rel="canonical"[^>]*>'
curl -s https://www.sitekept.com/sitemap.xml | grep -o '<loc>[^<]*' | head -3
curl -s -o /dev/null -w "mentions-legales: %{http_code}\n" https://www.sitekept.com/mentions-legales
```

Attendu : `308`, un canonical en `www`, des `<loc>` en `www`, et un `200`.

## Ce qu'il faut regarder, et quand

| Échéance | Indicateur | Où | Attendu |
|---|---|---|---|
| **J+3** | État du sitemap | GSC → Sitemaps | « Opération réussie », 0 erreur |
| **J+7** | Pages indexées | GSC → Indexation | En hausse depuis 11 |
| **J+14** | « Page avec redirection » | GSC → Indexation | En baisse depuis 3 |
| **S+4** | Requêtes non-marque | GSC → Performances | **Les premières apparaissent** |
| **S+8** | Impressions | GSC → Performances | Nettement au-dessus de 103/6 mois |
| **M+3** | `generate_lead` par canal | GA4 → Acquisition | Le ROI devient lisible |

**L'indicateur qui compte vraiment est celui de S+4 : l'apparition de requêtes non-marque.** Tant qu'il n'y en a aucune, le problème est en amont. Le nombre de clics n'est pas un bon signal à court terme — il est trop faible pour être statistiquement lisible.

## Deux erreurs à éviter

**Ne rejugez pas trop tôt.** L'indexation prend des jours, le positionnement des semaines. Changer les canonicals ou le domaine pendant la fenêtre d'observation remettrait le compteur à zéro.

**Ne commencez pas par la performance.** Search Console indique « pas assez de données d'utilisation » sur 90 jours : le site est absent de CrUX, donc **les Core Web Vitals ne pèsent pas sur son classement aujourd'hui**. Ils deviendront un levier une fois le trafic amorcé — c'est pourquoi ils sont en bloc E et non en bloc A.
