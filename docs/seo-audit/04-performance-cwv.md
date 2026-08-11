# Audit Core Web Vitals & Performance — sitekept.com

**Date** : 2026-08-10 · **Stack** : Next.js 15.3.6 App Router, React 19, Tailwind v4, Vercel (fra1)
**Commit de référence** : `1c7c98d` (branche `dev`)
**Auteur** : PERF-CWV

---

## 0. Statut des sources de données — à lire avant tout chiffre

| Source | Statut | Preuve |
|---|---|---|
| **Données terrain CrUX (PSI API)** | ❌ **INDISPONIBLE** | HTTP 429 sur les 6 appels (home/templates/blog × mobile/desktop) + 1 retry. Corps : `Quota exceeded ... quota_limit_value: "0"` → l'accès anonyme à l'API PSI a une **quota journalière de 0**. Ce n'est pas transitoire. |
| **API CrUX directe** | ❌ **INDISPONIBLE** | HTTP 403 `Method doesn't allow unregistered callers`. Clé API requise. |
| **Search Console (via lead)** | ❌ **Pas de données** | « Pas assez de données d'utilisation ces 90 derniers jours », Mobile ET Ordinateur. 8 clics / 103 impressions sur 6 mois. |
| **Scores Lighthouse** | ❌ **NON MESURÉ** | Lighthouse n'est accessible ici que via l'API PSI, qui est bloquée. Aucun score perf/a11y/SEO/best-practices ne peut être rapporté. |
| **Mesures réseau réelles (curl + navigateur)** | ✅ **DISPONIBLE** | TTFB, en-têtes de cache, tailles de transfert br/gzip, poids des ressources, géométrie DOM, runtime GA. Ce sont les chiffres utilisés ci-dessous. |
| **Sortie `pnpm build`** | ✅ **DISPONIBLE** | Build complet exécuté localement. |
| **LCP / CLS / INP chronométrés** | ❌ **NON MESURÉ** | `PerformanceObserver` (`largest-contentful-paint`, `layout-shift`, `paint`) renvoie des buffers vides dans le navigateur d'automatisation. Aucune valeur de LCP/CLS/INP en millisecondes n'est rapportée dans ce document. |

> ### ⚠️ Conséquence sur la nature du livrable
> **Aucune donnée terrain CrUX disponible — trafic insuffisant.** Il n'existe à ce jour **aucun Core Web Vitals réel** pour ce site : ni Google, ni cet audit ne peuvent en produire.
> Tout ce qui suit est de l'**analyse statique de code** et de la **mesure réseau labo**. Un écart labo/terrain est normal et attendu. **Aucun chiffre de ce rapport ne doit être présenté comme un Core Web Vital mesuré.** Les impacts CWV mentionnés sont des **liens de causalité techniques** (quelle métrique une correction améliore), pas des mesures.

---

## 1. Synthèse exécutive

| # | Finding | Sévérité | Métrique CWV visée | Effort |
|---|---|---|---|---|
| F1 | **Les 84 routes sont rendues dynamiquement** (`cookies()` dans le root layout) → 0 % de cache CDN | 🔴 **Critique** | LCP (via TTFB) | Élevé (fix complet) / Moyen (fix partiel) |
| F2 | **Hero : 774 KB de three.js chargés depuis un CDN tiers** (jsdelivr) + canvas WebGL 2,09 M px | 🔴 **Critique** | INP, LCP | Faible |
| F3 | **`<link rel="canonical">` pointe vers l'hôte non servi** → 307 systématique depuis les SERP (+210–320 ms) | 🟠 **Élevé** | LCP (via TTFB) | Très faible |
| F4 | CSS global render-blocking de 108,6 KB brut (17,6 KB br) contenant les styles des 20+ templates de démo | 🟡 **Moyen** | LCP, FCP | Moyen |
| F5 | Images sources non optimisées (17 MB dans `public/`, jusqu'à 2,72 MB l'unité) + AVIF non activé | 🟡 **Moyen** | LCP (pages /templates, /realization) | Faible |
| F6 | Police Inter : aucun `<link rel="preload">` dans le HTML serveur | 🟡 **Moyen** | LCP | Très faible |
| F7 | Code mort embarqué : `hero.tsx`, `services.tsx`, `cta.tsx`, `ui/form.tsx` + PNG de 1,01 MB non référencé | 🟢 **Faible** | — (hygiène) | Très faible |
| F8 | `suppressHydrationWarning` sur `<body>` sans cause identifiée | 🟢 **Faible** | CLS (préventif) | Très faible |
| ✅ | **Google Analytics : fonctionne.** Hypothèse d'un bug de placement **infirmée** | — | — | — |

---

## 2. ✅ Google Analytics — constat binaire (hypothèse infirmée)

**Le tag GA4 est chargé et opérationnel sur `https://www.sitekept.com`.**

Vérification runtime dans un navigateur réel sur la page en ligne :

```json
{
  "hasGtag": "function",
  "dataLayer": 4,
  "gaScripts": ["https://www.googletagmanager.com/gtag/js?id=G-DS86PDRP8C"],
  "inlineGaInit": ["_next-ga-init"]
}
```

Et dans le HTML servi par `https://www.sitekept.com` :

```html
<link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=G-DS86PDRP8C" as="script"/>
```

**Détail important pour lever l'ambiguïté** : le HTML source ne contient *que* le `<link rel="preload">`, pas la balise `<script src="...gtag/js">`. **C'est le comportement normal** de `@next/third-parties/google`, qui utilise `next/script` en stratégie `afterInteractive` : le script est injecté côté client après l'hydratation. L'absence du `<script>` dans le HTML SSR n'est donc **pas** un symptôme de panne — d'où la nécessité du test runtime ci-dessus, qui est concluant.

Concernant le placement de `<GoogleAnalytics>` en enfant direct de `<html>`, après `</body>` (`src/app/layout.tsx:95-97`) : React 19 hisse automatiquement les éléments `<script>` et `<link>` dans le `<head>`. Le tag `G-DS86PDRP8C` s'exécute, `window.gtag` est une fonction et `dataLayer` contient 4 entrées.

**Verdict : aucune donnée analytics n'est perdue. Aucune action requise.** (Le déplacer dans `<body>` reste préférable stylistiquement, mais c'est cosmétique et sans effet mesurable.)

---

## 3. 🔴 F1 — CRITIQUE : les 84 routes sont dynamiques, 0 % de cache CDN

### Hypothèse du brief : **CONFIRMÉE**, et c'est bien le finding perf n°1.

### Preuve 1 — chaîne de causalité dans le code

`src/app/layout.tsx:80` (root layout, donc **toutes** les pages) :

```ts
const locale = await getSiteLocale();
```

→ `src/lib/site-messages.ts:47` → `getUserLocale()` → `src/lib/locale.ts:16,22` :

```ts
const cookieLocale = (await cookies()).get(COOKIE_NAME)?.value;   // ← ligne 16
const acceptLang = (await headers()).get("accept-language");      // ← ligne 22
```

`cookies()` **et** `headers()` sont deux APIs dynamiques de Next.js. Appelées dans le root layout, elles opt-out **l'intégralité de l'arbre** du prerendering statique. `src/app/(marketing)/layout.tsx:11` refait le même appel, et chaque `page.tsx` également (ex. `src/app/(marketing)/page.tsx:38`, et dans `generateMetadata` ligne 22).

### Preuve 2 — sortie de `pnpm build`

```
Route (app)                                           Size  First Load JS
┌ ƒ /                                              3.42 kB         118 kB
├ ƒ /_not-found                                      981 B         102 kB
├ ƒ /blog                                            325 B         105 kB
├ ƒ /templates                                     2.69 kB         122 kB
├ ƒ /terms                                           179 B         102 kB
├ ƒ /privacy                                         179 B         102 kB
...
├ ○ /apple-icon.png                                    0 B            0 B
├ ○ /robots.txt                                      179 B         102 kB
├ ○ /sitemap.xml                                     179 B         102 kB
└ ● /blog/[slug]                                     325 B         105 kB

ƒ  (Dynamic)  server-rendered on demand
```

Sur **84 pages générées**, seules 3 sont statiques (`○`) : `apple-icon.png`, `robots.txt`, `sitemap.xml` — et aucune n'est une page HTML. **Toutes les pages HTML sans exception sont `ƒ` (Dynamic)**, y compris `/terms` et `/privacy` qui sont du texte statique pur.

### Preuve 3 — conséquence mesurée en production

En-têtes réels de `https://www.sitekept.com` (5 routes testées, requêtes cache-bustées) :

```
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
x-vercel-cache: MISS
age: 0
```

**`x-vercel-cache: MISS` sur 5/5 routes, et `no-store`.** Le CDN Vercel ne met **jamais** le HTML en cache : chaque visiteur, sur chaque page, déclenche une exécution de fonction serverless.

TTFB mesurés sur `www` (accès direct, sans redirection), 8 mesures :

| Route | TTFB |
|---|---|
| `/` | 0,656 s / 0,404 s / 0,498 s / 0,395 s |
| `/templates` | 0,448 s |
| `/blog` | 0,420 s |
| `/blog/site-web-rapide-pme-independant` | 0,344 s |
| `/terms` | 0,395 s |

**TTFB médian ≈ 0,42 s**, min 0,344 s, max 0,656 s.

À titre de comparaison, une page servie statiquement depuis le cache edge Vercel répond typiquement en 20–60 ms. **Le TTFB est intégralement compris dans le LCP** : chaque milliseconde de TTFB est une milliseconde de LCP. C'est le plafond de verre de toute optimisation ultérieure — inutile d'optimiser les images ou le JS tant que le HTML met 420 ms à arriver.

> Note : `/blog/[slug]` est marqué `●` (SSG) au build grâce à `generateStaticParams`, mais sert malgré tout `no-store` / `x-vercel-cache: MISS` en production, le root layout dynamique annulant le bénéfice.

### Correctif

**Option A — cible recommandée : locale dans l'URL (rend tout statique)**

Migrer vers le routing par segment de `next-intl` (déjà en dépendance : `next-intl@^4.3.4`). La locale devient un paramètre de route au lieu d'une lecture de cookie, ce qui restaure le prerendering complet.

```
src/app/[locale]/(marketing)/page.tsx        ← déplacer les pages ici
src/middleware.ts                            ← à créer
```

```ts
// src/middleware.ts (nouveau fichier)
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // "/" reste en FR, "/en/..." pour l'anglais
});

export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
```

```diff
  // src/app/[locale]/layout.tsx
+ import { locales } from "@/i18n/config";
+
+ export function generateStaticParams() {
+   return locales.map((locale) => ({ locale }));
+ }
+
- export default async function RootLayout({ children }) {
-   const locale = await getSiteLocale();
+ export default async function RootLayout({ children, params }) {
+   const { locale } = await params;
```

Puis supprimer tout appel à `getSiteLocale()` dans les layouts et pages, en propageant `params.locale`.

**Gain attendu** : passage de `ƒ` à `○` sur les 84 routes → HTML servi depuis le cache edge → **TTFB de ~420 ms à ~30–60 ms**, soit **environ 360 ms retirés du LCP de chaque page**. C'est de loin le plus gros levier de l'audit.
**Effort** : élevé (déplacement de l'arborescence, propagation de `params.locale`, mise à jour des liens internes et de `sitemap.ts`).

**Option B — palier intermédiaire à effort moyen**

Si la migration d'arborescence est trop lourde à court terme : supprimer la lecture de cookie/header du root layout, servir la locale par défaut (`fr`) en statique, et faire du changement de langue une navigation client vers un préfixe `/en`.

```diff
  // src/app/layout.tsx
- export default async function RootLayout({ children }) {
-   const locale = await getSiteLocale();
+ import { defaultLocale } from "@/i18n/config";
+
+ export default function RootLayout({ children }: { children: React.ReactNode }) {
+   const locale = defaultLocale;
```

⚠️ Ce correctif n'est efficace **que si** `getSiteLocale()` est retiré de **tous** les layouts et pages simultanément (`src/app/(marketing)/layout.tsx:11`, `src/app/(marketing)/page.tsx:22,38`, `src/app/_components/contact.tsx:6`, etc.). Un seul appel résiduel à `cookies()` suffit à re-basculer la route en `ƒ`.

**Option C — écartée** : `export const dynamic = "force-static"` est incompatible avec `cookies()` et lèvera une erreur au build. Ce n'est pas une solution.

**Vérification du correctif** : relancer `pnpm build` et confirmer que les routes affichent `○` au lieu de `ƒ`, puis vérifier en production que `x-vercel-cache` passe à `HIT`.

---

## 4. 🔴 F2 — CRITIQUE : 774 KB de three.js tiers sur le hero

### Le composant

Le brief mentionnait `src/app/_components/hero.tsx` : **ce fichier n'est pas utilisé** (voir F7). Le hero réel est inliné dans `src/app/(marketing)/page.tsx:46-134`, et le fond animé est `src/components/ui/tubes-cursor.tsx` (`"use client"`), monté ligne 50 :

```tsx
<TubesCursor className="z-0 opacity-90" />
```

`src/components/ui/tubes-cursor.tsx:28-29` :

```ts
const TUBES_CURSOR_MODULE_URL =
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
```

Chargé via `import(/* webpackIgnore: true */ ...)` dans un `useEffect`, après un `setTimeout` de 100 ms.

### Preuves chiffrées

| Mesure | Valeur | Méthode |
|---|---|---|
| Poids décompressé du module | **774 791 octets** | `PerformanceResourceTiming.decodedBodySize` sur la page en ligne |
| Poids transféré (br/gzip) | **207 530 octets** | `curl -H "Accept-Encoding: gzip,br"` |
| Fin de chargement | **1 142 ms** | `responseEnd`, vs **~360 ms** pour tous les chunks first-party |
| Origine | `cdn.jsdelivr.net` | Tierce partie, hors contrôle, hors budget CDN Vercel |
| Taille du canvas | **375 × 1392 px CSS** | `getBoundingClientRect()` à 375×812 |
| Backing store WebGL | **750 × 2784 = 2 088 000 px/frame** | `canvas.width` × `canvas.height` (DPR 2) |

Le hero mesure **1392 px de haut sur un viewport mobile de 812 px** : le canvas WebGL couvre 1,7 écran, et 2,09 millions de pixels sont rendus à chaque frame d'animation, en continu, sur le thread principal + GPU.

### Impact

- **INP** : c'est le principal suspect. Une boucle `requestAnimationFrame` WebGL permanente sur 2,09 M px occupe le thread principal ; toute interaction (menu burger, clic CTA) entre en concurrence avec elle. Le module est de plus parsé/compilé (774 KB de JS) pendant la fenêtre d'hydratation.
- **LCP** : dégradation indirecte — 207 KB de bande passante et une connexion à une 3ᵉ origine (DNS + TLS + TCP vers jsdelivr) en concurrence avec les ressources critiques.
- **Fiabilité** : dépendance runtime à un CDN tiers non versionné dans le lockfile ; une panne jsdelivr ou un blocage CSP casse silencieusement le hero (le `catch` ne fait qu'un `console.error`).

### Points déjà corrects dans le composant

Le composant respecte `prefers-reduced-motion` (lignes 36-42) et nettoie correctement (`dispose()`, `clearTimeout`). Le canvas est en `position: absolute` dans un parent `absolute inset-0`, donc **hors flux** : il ne provoque pas de CLS.

### Correctifs, par ordre de gain/effort

**1. (Effort minimal, gain maximal) Ne charger l'animation que quand elle a une chance d'être vue et supportée** :

```diff
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
-   if (reducedMotionQuery.matches) {
+   const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
+   const isSlow = conn?.saveData === true || /2g/.test(conn?.effectiveType ?? "");
+   const isSmall = window.matchMedia("(max-width: 768px)").matches;
+
+   if (reducedMotionQuery.matches || isSlow || isSmall) {
      return;
    }
```

Désactiver le canvas sur mobile supprime à lui seul 207 KB de transfert et 2,09 M px/frame **là où le budget CPU est le plus contraint** — c'est-à-dire exactement là où les CWV mobiles se jouent. Le hero garde son fond `bg-black` + le voile `bg-black/45` : le rendu reste correct sans l'animation.

**2. (Effort minimal) Différer après le premier paint plutôt qu'un `setTimeout(100)`** :

```diff
- const initTimer = window.setTimeout(async () => {
+ const start = async () => {
```
```diff
- }, 100);
+ };
+ const idle = window.requestIdleCallback?.(start, { timeout: 2000 })
+   ?? window.setTimeout(start, 1500);
```

**3. (Effort faible) Plafonner le DPR** — 2,09 M px est excessif ; limiter le backing store à DPR 1 divise la charge GPU par 4. À passer en option au factory si la lib l'expose, sinon en fixant `canvas.width/height` avant l'init.

**4. (Effort moyen) Auto-héberger** — ajouter `threejs-components@0.0.19` aux dépendances et l'importer normalement : supprime la 3ᵉ origine, verrouille la version dans le lockfile, et bénéficie du cache immuable `/_next/static`.

---

## 5. 🟠 F3 — ÉLEVÉ : canonical incohérent → 307 payé par tout visiteur organique

### Preuve

`https://sitekept.com` (apex) renvoie un **307** vers `https://www.sitekept.com` :

```
HTTP/2 307
location: https://www.sitekept.com/
cache-control: public, max-age=0, must-revalidate
```

Or le HTML servi par `www` déclare :

```html
<link rel="canonical" href="https://sitekept.com"/>
```

**L'URL canonique déclarée est l'URL qui redirige.** Google indexera donc `https://sitekept.com`, et **chaque clic depuis les SERP paiera le saut de redirection**. La configuration est en contradiction avec elle-même. (Source du canonical : `src/lib/page-metadata.ts` / `metadataBase` + `openGraph.url: "https://sitekept.com"` dans `src/app/layout.tsx:46`.)

### Coût mesuré du saut

3 mesures par variante, requêtes cache-bustées :

| Chemin | TTFB (fin de chaîne) | Segment redirection |
|---|---|---|
| `sitekept.com` (avec 307) | 0,642 s / 0,687 s / 0,664 s | 0,211 s / 0,219 s / 0,322 s |
| `www.sitekept.com` (direct) | 0,404 s / 0,498 s / 0,395 s | — |

**Surcoût : +210 à +320 ms de TTFB**, soit **+210 à +320 ms de LCP** pour tout visiteur arrivant sans `www` — ce qui inclut le trafic organique, les liens partagés et la frappe directe du domaine.

`cache-control: public, max-age=0, must-revalidate` sur la redirection signifie en outre qu'elle **n'est pas mise en cache par le navigateur** : le coût est payé à chaque navigation à froid, pas seulement à la première.

### Correctif (très faible effort, gain immédiat)

Deux options cohérentes ; **choisir l'une et s'y tenir** :

- **A (recommandée, aucun changement de code)** : dans Vercel → Settings → Domains, définir **`sitekept.com` (apex) comme domaine principal** et faire rediriger `www` vers l'apex. Le canonical existant devient correct et le trafic organique n'a plus de redirection à payer.
- **B** : conserver `www` comme hôte servi et aligner le code :

```diff
  // src/app/layout.tsx:46
-       url: "https://sitekept.com",
+       url: "https://www.sitekept.com",
```
et mettre à jour `metadataBase` dans `src/lib/page-metadata.ts` ainsi que `src/app/sitemap.ts` et `src/app/robots.ts` pour qu'ils émettent tous `https://www.sitekept.com`.

⚠️ Vérifier que `src/app/sitemap.ts` et `src/app/robots.ts` déclarent le **même hôte** que le canonical, sous peine de conserver l'incohérence.

---

## 6. 🟡 F4 — MOYEN : CSS render-blocking de 108,6 KB

### Preuve

Deux feuilles bloquantes dans le `<head>` :

| Fichier | Brut | Transféré (br) |
|---|---|---|
| `/_next/static/css/95004476d8273c17.css` | **108 595 o** | **17 596 o** |
| `/_next/static/css/7e7d96b1e6991756.css` (fonts) | 2 063 o | 657 o |

Le CSS est **render-blocking par définition** : le navigateur ne peut pas peindre le H1 (élément LCP probable, cf. §7) avant d'avoir téléchargé et parsé ces 108,6 KB.

### Cause

Tailwind v4 émet une feuille unique pour toute l'application. Or `src/app/` contient **20+ arborescences de templates de démonstration** (`boulangerie/`, `fleuriste/`, `dentiste/`, `salon-coiffure/`, `restaurant-bistrot/`, `avocate-tel-aviv/`, `balinjera/`, `agence-immobiliere/`, `architecte-interieur/`, `cabinet-avocat/`, `menage-nettoyage/`, `ordinateur/`, `pattiserie/`, `plombier-chauffagiste/`…), chacune avec sa propre palette et ses classes arbitraires (`rounded-[34px]`, `shadow-[0_26px_70px_rgba(120,53,15,0.18)]`, gradients personnalisés…). **Un visiteur de la home télécharge le CSS de la boulangerie, du dentiste et du restaurant.**

### Correctif

17,6 KB brotli est acceptable dans l'absolu ; le levier réel n'est pas la taille mais **le poids relatif du code inutile**. Deux pistes :

1. **(Effort faible)** Vérifier que les templates de démo sont réellement nécessaires en production. Ils représentent 81 des 84 routes buildées. Si ce sont des vitrines commerciales, les isoler dans un sous-domaine ou un projet Vercel séparé retirerait leur CSS **et** leur surface de build du site principal.
2. **(Effort moyen)** À défaut, accepter l'état actuel : après correction de F1, le CSS sera servi depuis le cache edge avec `immutable`, ce qui neutralise l'essentiel du coût pour les visiteurs récurrents.

**Priorité basse tant que F1 n'est pas corrigé** : 108 KB de CSS coûtent moins cher que 420 ms de TTFB.

---

## 7. Élément LCP probable de la home

### Méthode

`PerformanceObserver` étant muet dans l'environnement d'automatisation (**LCP en ms = NON MESURÉ**), l'élément LCP a été **déduit par géométrie** : mesure de l'aire visible réelle de chaque candidat dans un viewport mobile de 375×812 sur la page en ligne.

| Élément | Aire visible | Position | Candidat LCP éligible ? |
|---|---|---|---|
| `<canvas>` (TubesCursor) | 304 500 px² | top 0 | ❌ Non — `<canvas>` n'est pas un type éligible LCP |
| `div.bg-black/45` (voile) | 304 500 px² | top 0 | ❌ Non — couleur de fond, non éligible |
| `div.relative.z-10` (conteneur) | 228 900 px² | top 112 | ❌ Non — conteneur, non bloc de texte |
| **`<h1>` « Concevez un site web qui vous appartient »** | **39 240 px²** | **top 174** | ✅ **Oui — plus grand bloc de texte** |
| `<p>` description | 31 392 px² | top 318 | ✅ Oui, mais plus petit |

### Conclusion

**L'élément LCP de la home est le `<h1>`** (`src/app/(marketing)/page.tsx:59-61`), un bloc de texte. Conséquences directes :

- **Il n'y a pas d'image LCP** → la question `priority` sur l'image LCP est **sans objet sur la home**. (`priority` n'apparaît d'ailleurs dans aucun `next/image` du site hors `src/app/balinjera/balinjera-shell.tsx:129`.)
- Le LCP est donc gouverné par **trois facteurs uniquement** : (1) le TTFB → **F1** et **F3**, (2) le CSS render-blocking → **F4**, (3) la disponibilité de la police → **F6**.
- **Le hero est bien rendu côté serveur** : `src/app/(marketing)/page.tsx` est un Server Component `async`, le H1 et son texte sont présents dans le HTML initial. ✅ Rien à corriger de ce côté.
- Le canvas WebGL, bien que visuellement dominant, **n'est pas l'élément LCP** — mais il retarde le LCP indirectement en consommant bande passante et CPU (F2).

---

## 8. 🟡 F6 — MOYEN : police Inter sans preload dans le HTML serveur

### État réel (partiellement différent du brief)

`src/app/layout.tsx:10` :

```ts
const inter = Inter({ subsets: ["latin"] });
```

| Point | Constat mesuré |
|---|---|
| `display` non spécifié | ✅ **Non problématique** : `next/font` applique `font-display: swap` par défaut. **Vérifié** dans le CSS servi : `font-display:swap` présent sur **7 des 8 règles `@font-face`** de `/_next/static/css/7e7d96b1e6991756.css`. |
| Métriques de fallback | ✅ **Présentes** : `<meta name="next-size-adjust" content=""/>` dans le HTML → `next/font` génère un fallback ajusté en métriques, ce qui **neutralise le CLS au moment du swap**. |
| `preload` | ❌ **Absent du HTML serveur.** Grep sur le HTML de production : aucun `<link rel="preload" ... .woff2>`. Les seuls preloads émis sont `webpack-*.js` et `gtag/js`. |
| Poids | 48 432 o décompressés (`e4af272ccee01ff0-s.p.woff2`) |

### Impact

Sans preload dans le HTML, la police n'est découverte qu'**après** téléchargement et parsing du CSS. Le H1 étant l'élément LCP, il est d'abord peint dans la police de fallback puis échangé. Grâce à `swap` + `size-adjust`, **le CLS est évité**, mais le LCP peut être comptabilisé sur le rendu final en police Inter selon le timing.

### Correctif (très faible effort)

```diff
- const inter = Inter({ subsets: ["latin"] });
+ const inter = Inter({
+   subsets: ["latin"],
+   display: "swap",
+   preload: true,
+   fallback: ["system-ui", "arial"],
+ });
```

`preload: true` est censé être le défaut ; le rendre explicite et **revérifier la présence du `<link rel="preload">` dans le HTML de production après déploiement**. Si le preload reste absent, la cause est le rendu dynamique (F1), qui peut perturber l'émission des ressources préchargées — raison de plus de traiter F1 en premier.

---

## 9. 🟡 F5 — MOYEN : images

### Inventaire réel (`ls -la`, > 200 Ko)

| Fichier | Taille réelle |
|---|---|
| `public/realization/orhakerem.png` | **2 724 534 o** (2,72 MB) |
| `public/realization/balinjera.png` | **2 074 482 o** (2,07 MB) |
| `public/template/restaurant-bistrot.png` | **1 258 222 o** (1,26 MB) |
| `public/ChatGPT Image 15 juil. 2025 à 01_28_34.png` | **1 013 860 o** (1,01 MB) — ⚠️ **non référencé** (cf. F7) |
| `public/template/avocate-tel-aviv.png` | 890 689 o |
| `public/template/salon-coiffure.png` | 781 668 o |
| `public/realization/iaformaplus.png` | 763 041 o |
| `public/template/architecte-interieur.png` | 718 349 o |
| `public/realization/mathintegral.png` | 642 887 o |
| `public/realization/pinckit.png` | 608 803 o |
| `public/template/boulangerie.png` | 574 460 o |
| `public/template/agence-immobiliere.png` | 517 334 o |
| `public/realization/etsruni.png` | 496 122 o |
| `public/realization/flowcycleaccounting.png` | 492 710 o |
| `public/template/ordinateur.png` | 402 089 o |
| `public/template/dentiste.png` | 382 220 o |
| `public/template/menage-nettoyage.png` | 263 661 o |
| `public/realization/lesassureursexperts.png` | 227 140 o |
| `public/balinjera/team.jpg` | 220 410 o |
| `public/template/plombier-chauffagiste.png` | 216 755 o |
| `public/realization/comizglobal.png` | 211 421 o |

**Total `public/` : 17 MB.**

### Bonnes pratiques déjà en place ✅

- **Aucune balise `<img>` brute dans `src/`** (grep : 0 occurrence). 4 imports `next/image`.
- `src/app/_components/project-card.tsx:54-62` : `fill` + `sizes` correctement renseigné + `placeholder="blur"` + conteneur `relative h-48` à hauteur fixe → **pas de CLS**.
- `src/components/navigation.tsx:83-89` et `src/components/footer.tsx:18-24` : `width`/`height` explicites → **pas de CLS**.
- `src/components/footer.tsx:143-150` : GIF Majin Vegeta en `unoptimized` avec `width`/`height` (14 168 o), animé par `transform: translateX` (`globals.css`, `@keyframes walk-across`) → **composité, pas de CLS**.

### Problème : `images.formats` absent

`next.config.ts` ne définit que `remotePatterns` :

```ts
images: {
  remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
}
```

Sans `formats`, Next.js 15 sert du **WebP uniquement**. AVIF, généralement **20 à 30 % plus léger** que WebP à qualité équivalente, n'est pas proposé.

⚠️ **Nuance importante** : `next/image` optimise à la volée, donc les 2,72 MB de `orhakerem.png` ne sont **jamais servis tels quels** au navigateur — l'impact CWV réel est donc **limité aux pages `/realization` et `/templates`**, pas à la home (qui n'affiche aucune image hors logo de 22 Ko). L'impact principal des sources lourdes est le **coût de transformation Vercel** et la latence du premier hit à froid.

### Correctif

```diff
  // next.config.ts
  images: {
+   formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
```

Et, en amont, recompresser les PNG sources : ce sont des captures d'écran, `.webp` à qualité 80 les ramènerait typiquement sous 200 Ko chacune, allégeant le dépôt de ~15 MB et réduisant les transformations à froid.

---

## 10. Analyse CLS

**Valeur de CLS : NON MESURÉE** (`PerformanceObserver` type `layout-shift` muet dans l'environnement d'automatisation). L'analyse ci-dessous est **statique**, et cherche les *causes possibles* de CLS.

| Source potentielle | Verdict | Preuve |
|---|---|---|
| Images sans dimensions | ✅ **RAS** | 0 balise `<img>` brute. Tous les `next/image` ont `width`/`height` ou `fill` dans un parent à hauteur fixe. |
| `ScrollReveal` | ✅ **RAS** | `globals.css:137-150` : l'animation n'utilise que `opacity` et `transform: translate3d()`, **toutes deux compositées** — elles ne déclenchent ni layout ni CLS. `will-change` est déclaré, et `prefers-reduced-motion` géré. De plus, `ScrollReveal` n'est utilisé que sur 3 pages de démo (`fleuriste`, `pattiserie`, `boulangerie`) — **jamais sur la home, /templates ou /blog**. |
| Canvas du hero | ✅ **RAS** | `position: absolute` dans un parent `absolute inset-0` → hors flux, aucun impact sur le layout. |
| Swap de police | ✅ **RAS** | `size-adjust` généré par `next/font` (`<meta name="next-size-adjust">` présent dans le HTML). |
| GIF animé du footer | ✅ **RAS** | `width`/`height` fixes, animé par `transform`, conteneur `pointer-events-none absolute`. |
| Navigation `fixed` | ✅ **RAS** | `fixed top-0` (`navigation.tsx:78`) → hors flux. Le changement d'état `isScrolled` ne modifie que des couleurs/ombres (`bg-white/95 shadow-sm` ↔ `bg-transparent`), **pas la géométrie**. |
| Menu mobile | ⚠️ **Mineur** | `navigation.tsx:135-161` : l'ouverture insère un bloc dans le flux. Mais la nav est `fixed`, donc **le contenu de la page ne bouge pas**. De plus, un shift consécutif à un clic est marqué `hadRecentInput` et **exclu du CLS**. |
| Bannière cookies | ✅ **RAS** | Aucune bannière détectée dans le code ni dans le DOM en ligne. |

**Conclusion : aucune cause structurelle de CLS identifiée.** C'est le point le plus sain de l'audit.

---

## 11. 🟢 F8 — `suppressHydrationWarning` sur `<body>` : investigation

`src/app/layout.tsx:90` :

```tsx
<body suppressHydrationWarning className={inter.className}>
```

### Recherche de la divergence SSR/client sous-jacente

| Cause classique | Présente ? |
|---|---|
| Provider de thème (`next-themes`) écrivant une classe sur `<body>`/`<html>` | ❌ Aucune dépendance de thème dans `package.json`, aucun `ThemeProvider` dans `src/` |
| Script inline mutant `<body>` avant hydratation | ❌ Aucun `<script>` inline hors `_next-ga-init` |
| `Date`/`Math.random()` rendu dans le layout | ❌ Absent |
| Locale divergente | ⚠️ Théoriquement possible : `getSiteLocale()` lit `accept-language` en fallback, mais **le rendu étant dynamique, serveur et client voient la même locale** — pas de divergence effective |
| Extension navigateur injectant des attributs sur `<body>` | ✅ **Cause la plus probable** — c'est le cas d'usage typique et légitime de `suppressHydrationWarning` sur `<body>` |

### Verdict

**Aucune divergence SSR/client réelle n'a pu être identifiée dans le code.** L'hypothèse du « pansement » n'est pas confirmée. Le risque résiduel est qu'il **masque de futures erreurs d'hydratation légitimes** sur tout le sous-arbre `<body>` — ce qui, si une divergence apparaissait un jour, se traduirait par un re-render silencieux et donc un risque de CLS.

**Correctif suggéré (faible priorité)** : le retirer temporairement en local et vérifier qu'aucun avertissement d'hydratation n'apparaît en console. S'il est nécessaire (extensions), le documenter :

```diff
- <body suppressHydrationWarning className={inter.className}>
+ {/* suppressHydrationWarning: neutralise les attributs injectés sur <body>
+     par certaines extensions navigateur. Aucune divergence SSR/client
+     applicative identifiée (audit 2026-08-10). */}
+ <body suppressHydrationWarning className={inter.className}>
```

---

## 12. Analyse INP / poids JavaScript

### Budget JS mesuré (`pnpm build` + transferts réels)

```
+ First Load JS shared by all                       102 kB
  ├ chunks/4123-0d65cdd3677e0ef9.js                46.4 kB
  ├ chunks/fb8bf863-4dd4fdd9b721c082.js            53.2 kB
  └ other shared chunks (total)                     1.94 kB
```

| Route | First Load JS |
|---|---|
| `/` (home) | **118 kB** |
| `/templates`, `/realization` | **122 kB** |
| `/blog`, `/blog/[slug]` | 105 kB |
| `/terms`, `/privacy`, `/mentions-legales` | 102 kB |

Transferts réels vérifiés sur `www.sitekept.com` (brotli / brut) :

| Ressource | br | brut |
|---|---|---|
| `chunks/fb8bf863-*.js` (React DOM) | 54 440 o | 168 414 o |
| `chunks/4123-*.js` | 46 525 o | 175 350 o |
| `chunks/7276-*.js` (Radix + lucide + Slot) | 9 575 o | 28 575 o |
| `chunks/app/layout-*.js` | 5 372 o | 17 236 o |
| `chunks/2086-*.js` | 5 534 o | 13 807 o |
| `chunks/app/(marketing)/page-*.js` | 3 630 o | 9 257 o |
| HTML de la home | 15 590 o | 97 634 o |

**118 kB de First Load JS pour la home est une valeur saine** pour du Next.js App Router (la baseline React 19 + runtime Next représente déjà ~102 kB). **Le JS first-party n'est pas le problème de ce site** — le problème INP est le module tiers de 774 KB (F2), qui n'apparaît dans aucun de ces chiffres puisqu'il est chargé dynamiquement depuis jsdelivr.

### Inventaire `"use client"` — 15 fichiers

```
src/app/_components/cta.tsx                  ← ⚠️ code mort (non importé)
src/app/_components/hero.tsx                 ← ⚠️ code mort (non importé)
src/app/_components/services.tsx             ← ⚠️ code mort (non importé)
src/app/_components/project-card.tsx
src/app/avocate-tel-aviv/contact-form.tsx
src/app/balinjera/balinjera-motion.tsx
src/app/menage-nettoyage/before-after-slider.tsx
src/components/language-switcher.tsx
src/components/navigation.tsx
src/components/scroll-reveal.tsx
src/components/ui/dropdown-menu.tsx
src/components/ui/form.tsx                   ← ⚠️ code mort (non importé)
src/components/ui/label.tsx
src/components/ui/tubes-cursor.tsx
src/features/contact-form/contact-form.tsx
```

**Évaluation : les composants clients légitimes le sont tous à juste titre.**

| Composant | Justifié ? | Raison |
|---|---|---|
| `navigation.tsx` | ✅ | `usePathname`, `useState` (menu), listener `scroll` |
| `language-switcher.tsx` | ✅ | `useTransition`, `useRouter` |
| `scroll-reveal.tsx` | ✅ | `IntersectionObserver` |
| `tubes-cursor.tsx` | ✅ | WebGL |
| `contact-form.tsx` | ✅ | `useFormStatus`, `useState` |
| `project-card.tsx` | ⚠️ **Convertible** | Seul usage client : `window.open()` dans `handleVisit` (ligne 31-37). Remplaçable par `<a href={url} target="_blank" rel="noopener noreferrer">`, ce qui en ferait un Server Component. Gain marginal. |
| `cta`/`hero`/`services`/`ui/form` | ❌ | Code mort — voir F7 |

### Dépendances client — vérifications

| Dépendance | Sur la home ? | Constat |
|---|---|---|
| **`zod`** | ✅ **Non** | Importé uniquement dans `src/features/contact-form/contact-form.action.ts` (`"use server"`) et `src/lib/env.ts` (serveur). **Ne part pas au client.** ✅ |
| **`react-hook-form`** | ✅ **Non** | Seul importeur : `src/components/ui/form.tsx`, qui **n'est importé nulle part**. Le vrai formulaire (`src/features/contact-form/contact-form.tsx`) utilise une Server Action native (`<form action={handleSubmit}>`) + `useFormStatus`. RHF est **tree-shaké**. ✅ Excellent choix d'architecture. |
| **`lucide-react`** | Oui | 38 imports nommés (`import { ArrowRight } from "lucide-react"`), forme correcte — tree-shaking effectif. Le chunk partagé Radix+lucide ne pèse que **9 575 o br**. ✅ |
| **`@radix-ui/*`** | Partiel | `react-slot` (Button `asChild`) + `react-label` sur la home ; `react-dropdown-menu` seulement où utilisé. Poids négligeable. ✅ |
| **`@vercel/speed-insights` + `@vercel/analytics`** | Oui | Deux scripts sur toutes les pages. Coût faible, mais **Speed Insights est ici le seul moyen d'obtenir des CWV terrain** vu l'absence de données CrUX → **à conserver impérativement** (cf. §14). |
| **three.js via jsdelivr** | ✅ Oui | **774 791 o** — voir F2. C'est 6,5× le poids de tout le JS first-party de la home. |

---

## 13. 🟢 F7 — Code mort et actifs orphelins

| Élément | Preuve | Action |
|---|---|---|
| `src/app/_components/hero.tsx` (106 l.) | `grep -rn "_components/hero" src/` → 0 résultat | Supprimer |
| `src/app/_components/services.tsx` (256 l.) | non importé | Supprimer |
| `src/app/_components/cta.tsx` (80 l.) | non importé | Supprimer |
| `src/components/ui/form.tsx` | non importé → seul consommateur de `react-hook-form` | Supprimer + retirer `react-hook-form` et `@hookform/resolvers` de `package.json` |
| `public/ChatGPT Image 15 juil. 2025 à 01_28_34.png` | **1 013 860 o**, `grep -rn "ChatGPT Image" src/` → 0 résultat | Supprimer |
| `public/logo-sitekept-rond copy.webp` | 55 646 o, doublon exact de `logo-sitekept-rond.webp` | Supprimer |
| `public/.DS_Store`, `src/.DS_Store`, `src/app/.DS_Store` | 6 148 o chacun, déployés | Ajouter `.DS_Store` au `.gitignore` |

**Impact CWV : nul** (rien de tout cela n'est servi aux visiteurs). **Impact réel** : temps de build, taille du dépôt, lisibilité, et suppression de 2 dépendances npm inutiles. À traiter comme de l'hygiène, pas comme de la performance.

Note : `hero.tsx`, `services.tsx` et `cta.tsx` utilisent `useTranslations` de `next-intl`, alors que le site est passé au système `getMessage`/`site-content`. Ce sont des reliquats de l'ancienne architecture i18n.

---

## 14. Plan d'action classé par gain / effort

### 🥇 Priorité 1 — à faire en premier, dans cet ordre

| Action | Gain | Effort | Ratio |
|---|---|---|---|
| **F3** — Aligner canonical et hôte servi (config Vercel Domains) | **−210 à −320 ms de TTFB/LCP** pour tout le trafic organique | **~15 min, 0 ligne de code** | ⭐⭐⭐⭐⭐ |
| **F2.1** — Désactiver TubesCursor sur mobile + Save-Data | −207 KB de transfert, −2,09 M px/frame **sur mobile** | **~10 lignes** | ⭐⭐⭐⭐⭐ |
| **F5** — Ajouter `formats: ["image/avif","image/webp"]` | −20 à −30 % sur toutes les images de `/templates` et `/realization` | **1 ligne** | ⭐⭐⭐⭐⭐ |
| **F6** — `display: "swap"` + `preload: true` explicites | Découverte de la police avancée | **4 lignes** | ⭐⭐⭐⭐ |

### 🥈 Priorité 2 — le gros morceau

| Action | Gain | Effort | Ratio |
|---|---|---|---|
| **F1** — Rendre les routes statiques (locale par segment d'URL) | **TTFB de ~420 ms à ~30–60 ms**, soit **~360 ms retirés du LCP de chaque page** | Élevé (refonte du routing i18n) | ⭐⭐⭐⭐ |

C'est le **plus gros gain absolu de l'audit**, mais aussi le plus coûteux. À planifier comme un chantier dédié. L'option B (§3) offre une partie du gain à effort moyen si le chantier complet doit attendre.

### 🥉 Priorité 3

| Action | Gain | Effort |
|---|---|---|
| **F2.4** — Auto-héberger three.js | Supprime une 3ᵉ origine, verrouille la version | Moyen |
| **F2.3** — Plafonner le DPR du canvas à 1 | ÷4 de charge GPU | Faible |
| **F7** — Purger le code mort et les actifs orphelins | −2 deps npm, −1 MB de dépôt | Faible |
| **F4** — Isoler les templates de démo | −CSS inutile sur le site principal | Élevé |
| **F8** — Documenter ou retirer `suppressHydrationWarning` | Restaure la détection des erreurs d'hydratation | Très faible |

---

## 15. Recommandation méthodologique — combler l'absence de données terrain

Le site **ne peut pas** apparaître dans CrUX au volume de trafic actuel (8 clics / 103 impressions sur 6 mois), et **aucun** correctif technique ne changera cela. Pour piloter les CWV malgré tout :

1. **`@vercel/speed-insights` est déjà installé** (`src/app/layout.tsx:92`) et **c'est actuellement la seule source de CWV terrain possible**. Il collecte le RUM sur 100 % du trafic, sans seuil minimal, contrairement à CrUX. → **Consulter le dashboard Vercel Speed Insights** : c'est là, et nulle part ailleurs, que se trouvent les vrais LCP/CLS/INP de ce site.
2. **Pour obtenir des scores Lighthouse** malgré le blocage de l'API : utiliser l'interface web `pagespeed.web.dev` manuellement, ou `npx lighthouse https://www.sitekept.com --preset=desktop` en local. **Tester `www.sitekept.com`, pas l'apex**, tant que F3 n'est pas corrigé.
3. **Obtenir une clé API PSI gratuite** (Google Cloud Console, quota 25 000 req/jour) permettrait de réintégrer l'automatisation de cet audit. Le paramètre `&key=` suffit.

---

## Annexe A — Commandes de reproduction

```bash
# Rendu dynamique (F1)
pnpm build | grep -E "^[┌├└].*(ƒ|○|●)"

# Absence de cache CDN (F1)
curl -s -D - -o /dev/null "https://www.sitekept.com/?nc=$RANDOM" \
  | grep -iE "cache-control|x-vercel-cache"

# Coût de la redirection (F3)
curl -s -o /dev/null -L -w "%{time_starttransfer} %{time_redirect}\n" "https://sitekept.com?nc=$RANDOM"
curl -s -o /dev/null    -w "%{time_starttransfer}\n"                  "https://www.sitekept.com?nc=$RANDOM"

# Poids du module tiers (F2)
curl -s -H "Accept-Encoding: gzip,br" -o /dev/null -w "%{size_download}\n" \
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

# font-display (F6)
curl -s "https://www.sitekept.com/_next/static/css/7e7d96b1e6991756.css" | grep -o "font-display:[a-z]*"

# GA runtime (§2) — dans la console du navigateur sur www.sitekept.com
typeof window.gtag; window.dataLayer.length;
```

## Annexe B — Ce qui n'a PAS pu être mesuré

Pour éviter toute confusion, la liste explicite des éléments **NON MESURÉS** :

- Scores Lighthouse (performance, accessibilité, best-practices, SEO) — **NON MESURÉ**, API PSI bloquée
- `loadingExperience` / `originLoadingExperience` (CrUX) — **INEXISTANT**, trafic insuffisant
- Audits Lighthouse détaillés (`largest-contentful-paint`, `cumulative-layout-shift`, `total-blocking-time`, `unused-javascript`, `render-blocking-resources`, `uses-responsive-images`, `modern-image-formats`, `font-display`, `third-party-summary`) — **NON MESURÉS**
- Valeurs chiffrées de LCP, CLS, INP, TBT en ms — **NON MESURÉES**
- Comparatif mobile vs desktop des scores — **NON MESURÉ**

Les seuls chiffres de ce rapport proviennent de : `pnpm build`, `ls -la`, `curl` (en-têtes, timings, tailles de transfert), et `PerformanceResourceTiming` / `getBoundingClientRect()` mesurés dans un navigateur réel sur le site en ligne.
