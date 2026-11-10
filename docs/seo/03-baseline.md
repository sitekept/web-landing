# 0.4a — Mesure de départ et SEO technique

Mesures du 5 novembre 2026 ; document révisé le 10 novembre 2026 (tours 2 et 3). Branche `feat/offre-v2`, HEAD `f2e59ec` avant modification.

Objectif : mesurer avant de toucher, puis corriger le SEO technique **sans aucun changement visuel**.

Sources :
- **[D]** = `docs/seo/00-donnees.md` § 7 ;
- **[00]** = `docs/seo-audit/00-RAPPORT-CONSOLIDE.md` ;
- **[01]** = `docs/seo-audit/01-technique-crawlabilite.md` ;
- **[K]** = `docs/seo/02-keyword-map.md`.

---

## 1. Méthode et conditions

### 1.1 Lighthouse

| Paramètre | Valeur |
|---|---|
| Date | 5 novembre 2026, entre 06:35 et 06:45 UTC |
| Outil | `npx -y lighthouse@12`, version exécutée 12.8.2 |
| Navigateur | Google Chrome installé (156), `--chrome-flags="--headless=new"` |
| Profil | Preset mobile par défaut : écran 412 px, CPU ×4, RTT 150 ms, 1 638,4 kb/s, throttling `simulate` |
| Machine | Apple M4, macOS 26.5.2 ; `benchmarkIndex` entre 4 098 et 4 209 |
| Passes | 3 passes successives par URL, jamais en parallèle |
| Médiane | Médiane de chaque valeur, prise séparément sur les 3 passes |

Commande, rejouable telle quelle :

```
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  npx -y lighthouse@12 <URL> --quiet --chrome-flags="--headless=new" \
  --output=json --output-path=<fichier>.json
```

### 1.2 Build local

- Build : `NODE_OPTIONS=--no-experimental-webstorage pnpm build` (Next.js 15.3.6, Node 25.2.1).
- Service : `NODE_OPTIONS=--no-experimental-webstorage pnpm start -p 3100`.
- Le worktree n'a pas de `.env.local` : `ls -a` ne montre que `.env.example`, que Next.js ne charge pas. Aucun fichier `.env` n'a été lu.
- Constat : le HTML de la home servi en local ne contient pas `googletagmanager` (`grep -c` : 0). **Google Analytics n'est pas chargé en local.**

### 1.3 Différences entre local et production

| Point | Local (`localhost:3100`) | Production (`www.sitekept.com`) |
|---|---|---|
| Code | `feat/offre-v2` | Version déployée par Vercel, commit non vérifiable d'ici |
| Serveur | `next start`, HTTP/1.1, sans CDN | Vercel, HTTP/2, CDN (`x-vercel-cache: HIT`) |
| Google Analytics | Absent | `gtag/js` chargé : 181 264 octets transférés |
| Scripts Vercel Analytics et Speed Insights | 404 (`/_vercel/…` n'est servi que par Vercel) | 200 (`curl`, 10 novembre 2026) |

Les deux 404 locaux déclenchent l'audit `errors-in-console`. C'est la seule cause du score Bonnes pratiques de 96 en local.

### 1.4 Captures

- Script Playwright (`playwright-core` 1.49.1) avec le Chromium en cache `chromium-1148` (131.0.6778.33).
- Même méthode que l'en-tête de `docs/design/da-inventaire.md` : `reducedMotion: "reduce"`, `deviceScaleFactor: 1`, pleine page, largeurs 390 et 1280.
- Avant la capture : défilement jusqu'en bas par pas de 400 px, retour à `scrollY = 0`, attente du réseau, des images et des polices.
- Toute requête hors de `localhost:3100` est bloquée, ainsi que `/_vercel/*`.
- **Contrôle de stabilité** : deux séries « avant » successives donnent **0 pixel différent** sur les 12 images.
- Comparaison : script Python (Pillow, NumPy). Il compte les pixels dont une composante RGBA diffère.
- Scripts et rapports JSON des tours 1 et 2 : écrits dans un dossier temporaire hors dépôt. Leurs fichiers ont disparu le 10 novembre 2026 vers 00:02 (cause probable : nettoyage automatique de `/private/tmp`).
- Contrôle du tour 3 : script Python à bibliothèque standard, `/private/tmp/claude-501/-Users-josephatia-Documents-sitekept-weblaunding/3019ca30-eef4-43f1-81d4-df8ddadd068d/scratchpad/t04a/crawl.py` (même dossier temporaire).

Les captures « avant » sont dans `docs/design/reference-avant-0.4/`, mêmes noms que `docs/design/reference/`.

Elles ne sont pas identiques au pixel à `docs/design/reference/` (tâche 0.0). Les hauteurs de page sont les mêmes, mais le moteur diffère : Chrome stable et instantané statique en 0.0, Chromium 131 et `next start` ici. **La base de comparaison de 0.4a est donc `reference-avant-0.4/`.**

---

## 2. Mesure de départ (avant toute modification)

Mesures prises sur le build de `f2e59ec`, avant la première modification de `src/`.

### 2.1 Build local, home mobile

| Passe | Perf. | Access. | Bonnes pr. | SEO | LCP | CLS | TBT | FCP | Speed Index |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 94 | 100 | 96 | 100 | 3 088 ms | 0 | 12 ms | 1 205 ms | 1 205 ms |
| 2 | 96 | 100 | 96 | 100 | 2 788 ms | 0 | 2 ms | 1 204 ms | 1 204 ms |
| 3 | 96 | 100 | 96 | 100 | 2 792 ms | 0 | 2 ms | 1 206 ms | 1 206 ms |
| **Médiane** | **96** | **100** | **96** | **100** | **2 792 ms** | **0** | **2 ms** | **1 205 ms** | **1 205 ms** |

### 2.2 Production, home mobile (lecture seule)

| Passe | Perf. | Access. | Bonnes pr. | SEO | LCP | CLS | TBT | FCP | Speed Index |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 99 | 100 | 100 | 100 | 1 359 ms | 0 | 86 ms | 1 117 ms | 2 751 ms |
| 2 | 74 | 100 | 100 | 100 | 4 838 ms | 0 | 8 ms | 3 074 ms | 4 801 ms |
| 3 | 100 | 100 | 100 | 100 | 1 347 ms | 0 | 69 ms | 1 095 ms | 1 095 ms |
| **Médiane** | **99** | **100** | **100** | **100** | **1 359 ms** | **0** | **69 ms** | **1 117 ms** | **2 751 ms** |

La passe 2 est aberrante : FCP à 3 s et audit « preconnect » signalé. La médiane l'écarte.

### 2.3 Élément LCP de la home

- **Ce n'est pas une image.** C'est le texte du H1 du hero, en local comme en production.
- Sélecteur relevé : `h1.mt-6.max-w-4xl.text-4xl…`, texte « Création de site internet pour PME et artisans… ».
- En local, le LCP se décompose en TTFB 452 ms et délai de rendu 2 337 ms (passe 2).
- Lighthouse signale 3 feuilles CSS bloquantes (économie estimée : 410 ms) : Tailwind (18,8 Ko transférés), police Inter, champ téléphone.
- En production, 3 feuilles équivalentes sont chargées (celle de Tailwind a un autre hachage). Le délai de rendu n'y est que de 600 ms (passe 1).
- Hypothèse non vérifiée : l'écart tient au serveur (HTTP/1.1 local contre HTTP/2 et CDN Vercel).

---

## 3. Constats « Jour 1 » de l'audit

### 3.1 Hôte canonique `www` via une variable unique

- **État trouvé** : `src/lib/site-url.ts:1` `FALLBACK_BASE_URL = "https://www.sitekept.com"` ; `site-url.ts:30` exporte `SITE_URL`.
- Utilisations relevées :
  - sitemap : `src/app/sitemap.ts:4` et `:20` ;
  - robots : `src/app/robots.ts:2` et `:10` ;
  - canonicals et `og:url` des pages : `src/lib/page-metadata.ts:2`, `:4`, `:17` ;
  - `metadataBase` et `og:url` par défaut : `src/app/layout.tsx:17` et `:43`.
- Sortie locale : 32 canoniques sur 32 en `https://www.sitekept.com…` (section 4).
- Sortie production : `<link rel="canonical" href="https://www.sitekept.com"/>` sur la home.
- **Action : déjà fait.** `git log -S FALLBACK_BASE_URL -- src/lib/site-url.ts` → commit `06b31f0` du 11 août 2026.

Cas de la home : la canonique est `https://www.sitekept.com`, sans slash final.
- Un chemin vide équivaut à `/` (RFC 3986, § 6.2.3) : c'est la même URL que l'URL servie.
- Essai fait : passer `https://www.sitekept.com/` à Next.js. Le HTML produit garde la forme sans slash.
- L'essai a été annulé, pour garder la même forme dans la canonique et dans le sitemap.

### 3.2 Sitemap

- **État trouvé** : `src/app/sitemap.ts` déclare 32 URL, toutes sur `https://www.sitekept.com`.
- Pages de démonstration exclues (commentaire `sitemap.ts:9-12`). Elles sont en `noindex, follow` (`src/middleware.ts:21-22`).
- `lastmod` : seulement sur les 11 articles, à partir de `post.updatedAt` (`sitemap.ts:57`). Aucune date de build.
- Dates d'articles : 2026-08-11 ou 2026-08-12. Elles concordent avec `git log` de `src/content/site-content.ts` (derniers commits le 12 août 2026).
- Pages statiques : `lastmod` omis, faute de date fiable (`sitemap.ts:14-17`). Le protocole sitemap le permet.
- Contrôle local : chaque `<loc>` interrogé sans suivre les redirections → **32 × 200**, aucune redirection.
- Contrôle production : `curl` sur les 32 URL de `https://www.sitekept.com/sitemap.xml` → **32 × 200**. Liste identique au sitemap local.
- **Action : déjà fait.** Aucune modification.

### 3.3 Redirection `/template` → `/templates`

- **État trouvé** : `src/app/(marketing)/template/page.tsx:4` `permanentRedirect("/templates");`.
- `curl -sI http://localhost:3100/template` → `HTTP/1.1 308 Permanent Redirect`, `location: /templates`.
- `curl -sI https://www.sitekept.com/template` → `HTTP/2 308`, `location: /templates`.
- **Action : déjà fait.**

### 3.4 `robots.txt`

- `public/robots.txt` : **absent** (`ls public/robots.txt` : fichier inexistant ; non suivi par Git).
- `src/app/robots.ts:4-12` : `allow: "/"` pour tous, sitemap sur `SITE_URL`.
- Sortie locale et production identiques :

```
User-Agent: *
Allow: /

Sitemap: https://www.sitekept.com/sitemap.xml
```

- **Action : déjà fait.** Fichier correct, non modifié.

### 3.5 Redirection apex `sitekept.com` → `www`

Relevé en lecture seule le 5 novembre 2026, 06:37 UTC :

| Commande | Réponse |
|---|---|
| `curl -sI https://sitekept.com/` | `HTTP/2 308`, `location: https://www.sitekept.com/` |
| `curl -sI https://sitekept.com/realization` | `HTTP/2 308`, `location: https://www.sitekept.com/realization` |
| `curl -sI http://sitekept.com/` | `308 Permanent Redirect`, `Location: https://sitekept.com/` |
| `curl -sI http://www.sitekept.com/` | `308 Permanent Redirect`, `Location: https://www.sitekept.com/` |
| `curl -sI https://www.sitekept.com/` | `HTTP/2 200` |

- **La redirection est déjà permanente (308).** Le 307 relevé par l'audit [00] n'est plus observé sur ces URL.
- **Action : déjà fait.** Aucun réglage Vercel à changer.
- Remarque : `http://sitekept.com/` fait deux sauts (vers `https://sitekept.com/`, puis vers `www`). Les deux sont permanents. Aucune action requise.

### 3.6 Autres points de l'audit, vérifiés au passage

| Point de l'audit | Constat | État |
|---|---|---|
| `/mentions-legales` en 404 [00] | 200 en local et en production | Déjà fait |
| `/icon.svg` en 404 et déclaré [00] | 404 en local, mais plus déclaré dans le HTML de la home. `layout.tsx:24-38` déclare `/favicon.ico` et `/apple-icon.png`, tous deux en 200 en local | Déjà fait |
| `metadataBase` absent [00] | Présent, `layout.tsx:17` | Déjà fait |
| Image de partage absente [00] | `/opengraph-image` répond 200 (`image/png`) en local | Déjà fait |
| Aucun JSON-LD [00] | 1 bloc `application/ld+json` sur la home, local et production | Déjà fait |
| Démos sans lien HTML [00] | Vraie ancre, `src/app/_components/project-card.tsx:87-88` ; 13 démos liées et en 200 | Déjà fait |
| Démos indexables [00] | En local, `X-Robots-Tag: noindex, follow` sur les démos `/boulangerie` et `/dentiste/soins`, et sur le projet `/je` | Déjà fait |
| HTML non mis en cache [00] | Production : `x-vercel-cache: HIT`, `x-nextjs-prerender: 1` sur `/` et `/tarifs` | Déjà fait |
| Région `iad1` [00] | `vercel.json:3` `"regions": ["cdg1"]` | Déjà fait (région d'exécution non vérifiable par `curl`, la home étant servie par le CDN) |

---

## 4. Contrôles techniques par page (build local, après 0.4a)

Périmètre : les 32 pages indexables existantes de [K] § 2 (6 générales, 11 articles, 12 métiers, 3 légales). `/offres` et `/cgv` sont prévues, pas encore servies.

Contrôles communs à toutes les lignes :
- code HTTP 200, sans redirection ;
- canonique unique, absolue, sur `www`, égale à l'URL servie (home : voir 3.1) ;
- `og:url` égale à la canonique ;
- aucune balise `hreflang` ; `<html lang="fr">` ;
- `<meta name="robots" content="index, follow">`.

Longueurs en caractères Unicode. « → » : valeur avant puis après correction.

| URL | Title | Description | H1 | Canonique OK | Liens cassés |
|---|---|---|---|---|---|
| `/` | 45 | 132 → 148 | 1 | oui | 0 |
| `/templates` | 47 | 141 | 1 | oui | 0 |
| `/tarifs` | 42 | 145 | 1 | oui | 0 |
| `/site-internet-plombier` | 59 | 157 → 148 | 1 | oui | 0 |
| `/site-internet-dentiste` | 58 | 157 → 143 | 1 | oui | 0 |
| `/site-internet-restaurant` | 54 | 155 | 1 | oui | 0 |
| `/site-internet-salon-de-coiffure` | 47 | 151 | 1 | oui | 0 |
| `/site-internet-boulangerie` | 41 | 150 | 1 | oui | 0 |
| `/site-internet-patisserie` | 40 | 151 | 1 | oui | 0 |
| `/site-internet-fleuriste` | 39 | 152 | 1 | oui | 0 |
| `/site-internet-reparation-informatique` | 53 | 150 | 1 | oui | 0 |
| `/site-internet-entreprise-nettoyage` | 53 | 153 | 1 | oui | 0 |
| `/site-internet-architecte-interieur` | 52 | 149 | 1 | oui | 0 |
| `/site-internet-avocat` | 47 | 155 | 1 | oui | 0 |
| `/site-internet-agence-immobiliere` | 48 | 151 | 1 | oui | 0 |
| `/blog` | 46 | 127 → 148 | 1 | oui | 0 |
| `/seo-geo` | 49 | 140 | 1 | oui | 0 |
| `/blog/site-web-rapide-pme-independant` | 59 | 147 | 1 | oui | 0 |
| `/blog/posseder-son-site-sans-abonnement` | 44 | 134 → 153 | 1 | oui | 0 |
| `/blog/site-optimise-seo-geo` | 46 | 132 → 146 | 1 | oui | 0 |
| `/blog/qu-est-ce-que-le-seo-et-le-geo` | 43 | 142 | 1 | oui | 0 |
| `/blog/site-sans-referencement-peut-devenir-inutile` | 53 | 131 → 143 | 1 | oui | 0 |
| `/blog/pourquoi-optimisation-referencement-naturel-importante` | 58 | 131 → 148 | 1 | oui | 0 |
| `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` | 51 | 133 → 145 | 1 | oui | 0 |
| `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept` | 50 | 137 → 149 | 1 | oui | 0 |
| `/blog/recuperer-son-site-web-chez-un-prestataire` | 53 | 141 | 1 | oui | 0 |
| `/blog/louer-ou-posseder-son-site-internet` | 50 | 143 | 1 | oui | 0 |
| `/blog/checklist-seo-avant-mise-en-ligne` | 56 | 149 | 1 | oui | 0 |
| `/realization` | 48 | 148 | 1 | oui | 0 |
| `/privacy` | 39 | 123 → 155 | 1 | oui | 0 |
| `/terms` | 45 | 129 → 153 | 1 | oui | 0 |
| `/mentions-legales` | 27 | 114 → 155 | 1 | oui | 0 |

Bilan :
- Titles : 32 sur 32 ≤ 60 caractères, tous uniques. Aucune correction.
- Descriptions : 13 hors de 140–155 avant, toutes corrigées (détail en 4.1). Après : 32 uniques, de 140 à 155.
- H1 : exactement 1 par page, avant comme après. Aucune correction.
- Liens internes : 977 liens vers `www.sitekept.com` dans le HTML servi, 45 cibles uniques, **45 × 200**, aucun lien vers l'apex (contrôle du tour 3).

### 4.1 Descriptions réécrites

Règle suivie : reprendre le mot-clé principal de [K], et seulement des affirmations déjà présentes sur le site, dans le registre ou dans le plan v2. Aucune donnée ajoutée.

| Page | Mot-clé principal [K] | Fichier |
|---|---|---|
| `/` | création site internet professionnel | `src/app/(marketing)/page.tsx` |
| `/site-internet-plombier` | site internet plombier | `src/content/metier-pages.ts` |
| `/site-internet-dentiste` | site internet dentiste | `src/content/metier-pages.ts` |
| `/blog` | guide création site internet | `src/app/(marketing)/blog/page.tsx` |
| `/blog/posseder-son-site-sans-abonnement` | site internet sans abonnement | `src/content/site-content.ts` |
| `/blog/site-optimise-seo-geo` | optimisation seo et geo | `src/content/site-content.ts` |
| `/blog/site-sans-referencement-peut-devenir-inutile` | mon site n'apparaît pas sur Google | `src/content/site-content.ts` |
| `/blog/pourquoi-optimisation-referencement-naturel-importante` | pourquoi le référencement d'un site est important | `src/content/site-content.ts` |
| `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` | avoir son propre site internet | `src/content/site-content.ts` |
| `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept` | mise en ligne site internet | `src/content/site-content.ts` |
| `/privacy` | politique de confidentialité sitekept | `src/app/(marketing)/privacy/page.tsx` |
| `/terms` | cgu sitekept | `src/app/(marketing)/terms/page.tsx` |
| `/mentions-legales` | mentions légales sitekept | `src/app/(marketing)/mentions-legales/page.tsx` |

Garde-fous vérifiés :
- Les champs modifiés (`seoDescription`, `description` de `buildPageMetadata`) ne sont pas affichés. Ils alimentent `<meta name="description">`, `og:description` et `twitter:description`. Pour les articles, ils alimentent aussi la `description` du JSON-LD `BlogPosting`.
- Dans les fichiers à deux langues, seules les chaînes `fr` changent. Les chaînes `en` (servies par cookie, sans URL propre) sont inchangées.
- `updatedAt` des articles n'a pas changé : cette date est affichée sur la page.
- Ces descriptions restent techniques. La carte [K] prévoit la réécriture des 5 articles du plan v2 § 5.3, de la home et de `/tarifs` en phase 1.

Règles de formulation appliquées au tour 2 (`git diff -U0 src | grep -E "^\+" | grep -E "48h|dès|à partir de|TTC"`) :
- Dans les lignes ajoutées du diff, « 48h » n'apparaît qu'une fois, sur la home, suivi de « après réception de vos éléments » (plan v2 § 3).
- Plombier et dentiste : « 48h » retiré, faute de place pour la précision.
- Prix, quand il figure (plombier, dentiste) : « à 500 € » (registre : prix unique de 500 €). Les lignes ajoutées ne contiennent ni « dès », ni « à partir de », ni « TTC ».
- « sans abonnement » devient « sans abonnement imposé » (home, article `posseder-son-site-sans-abonnement`). La nuance figurait dans l'ancienne description de l'article.
- Dentiste (profession réglementée) : aucune promesse de visibilité.
- Plombier : « sur mobile » reprend la page (`src/content/metier-pages.ts:62` et `:70`).

### 4.2 Images

| Page(s) | Images | Dimensions | Format | Alt |
|---|---|---|---|---|
| Les 32 | Logo de la navigation (`next/image`) | `width={32} height={32}` | AVIF ou WebP via `/_next/image` (`next.config.ts:8`) | `""` (décoratif) |
| Les 32 | Logo du pied de page (`next/image`) | `width={36} height={36}` | AVIF ou WebP | `""` (décoratif) |
| Les 32 | GIF animé du pied de page | `width={48} height={48}` | GIF, `unoptimized` | `""` (décoratif) |
| `/templates` | 13 aperçus de démos | `fill` + `sizes` | AVIF ou WebP, `loading="lazy"` | « Aperçu de Template … » |
| `/realization` | 9 aperçus de réalisations | `fill` + `sizes` | AVIF ou WebP, `loading="lazy"` | « Aperçu de … » |

- Sur les 32 pages, aucune image sans attribut `alt`, avant comme après.
- Correction faite : les 3 images décoratives passent de « Sitekept logo » et « Majin Vegeta walking » (anglais) à `alt=""`.
- Justification : le logo est suivi du texte « Sitekept » dans le même bloc ; le GIF est décoratif (son conteneur est en `pointer-events-none`).
- `sizes` est déjà présent sur les aperçus : `src/app/_components/project-card.tsx:56`.

### 4.3 Core Web Vitals

- Perf. mobile locale = 96 ≥ 90 : aucune correction de performance n'était requise.
- TubesCursor (774 Ko depuis jsdelivr [00]) **n'est pas chargé sur mobile**. Le garde est en `src/components/ui/tubes-cursor.tsx:44-60` (mouvement réduit, écran ≤ 768 px, réseau 2G ou économie de données).
- Vérifié le 5 novembre 2026 : aucune requête jsdelivr dans les 9 rapports Lighthouse mobile, local et production.
- Causes probables restantes, sans correction (section 7) : CSS bloquantes, 12 Ko de JavaScript « legacy », `gtag` en production.

---

## 5. Après 0.4a

### 5.1 Vérifications de code

| Commande (préfixée par `NODE_OPTIONS=--no-experimental-webstorage`) | Résultat |
|---|---|
| `pnpm lint` | Code 0, « No ESLint warnings or errors » |
| `pnpm type-check` | Code 0 |
| `rm -rf .next && pnpm build` | Code 0, « Compiled successfully », 98 pages générées |

### 5.2 Lighthouse, build local, home mobile

| Passe | Perf. | Access. | Bonnes pr. | SEO | LCP | CLS | TBT | FCP | Speed Index |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 96 | 100 | 96 | 100 | 2 710 ms | 0 | 4 ms | 1 205 ms | 1 205 ms |
| 2 | 96 | 100 | 96 | 100 | 2 789 ms | 0 | 1 ms | 1 205 ms | 1 205 ms |
| 3 | 96 | 100 | 96 | 100 | 2 789 ms | 0 | 1 ms | 1 205 ms | 1 205 ms |
| **Médiane** | **96** | **100** | **96** | **100** | **2 789 ms** | **0** | **1 ms** | **1 205 ms** | **1 205 ms** |

Comparaison avec la médiane de départ locale :

| Indicateur | Avant | Après | Écart |
|---|---|---|---|
| Performance | 96 | 96 | 0 |
| Accessibilité | 100 | 100 | 0 |
| Bonnes pratiques | 96 | 96 | 0 (cause : 404 des scripts Vercel en local, voir 1.3) |
| SEO | 100 | 100 | 0 |
| LCP | 2 792 ms | 2 789 ms | −3 ms |
| TBT | 2 ms | 1 ms | −1 ms |

- SEO = 100 ; Performance = 96 ≥ 90. Aucun audit SEO en échec.
- Aucun changement de CSS. JavaScript client modifié seulement par la valeur d'un attribut `alt` (`navigation.tsx` est un composant client), sans effet mesurable sur les performances.
- Contrôle : aucune des 13 nouvelles descriptions ne figure dans `.next/static` (`grep -rlF`, tour 3).

### 5.3 Captures après et comparaison au pixel

Captures « après » prises avec le même script, sur le build final, puis comparées à `docs/design/reference-avant-0.4/`.

| Image | Taille | Pixels différents |
|---|---|---|
| home-390 | 390 × 13 685 | 0 |
| home-1280 | 1280 × 7 444 | 0 |
| tarifs-390 | 390 × 12 226 | 0 |
| tarifs-1280 | 1280 × 7 143 | 0 |
| templates-390 | 390 × 10 586 | 0 |
| templates-1280 | 1280 × 4 517 | 0 |
| realization-390 | 390 × 6 737 | 0 |
| realization-1280 | 1280 × 2 704 | 0 |
| seo-geo-390 | 390 × 10 566 | 0 |
| seo-geo-1280 | 1280 × 6 098 | 0 |
| blog-article-390 | 390 × 5 375 | 0 |
| blog-article-1280 | 1280 × 2 921 | 0 |
| **Total** | | **0** |

Tour 2 (descriptions de la home, plombier, dentiste et `posseder-son-site-sans-abonnement` reformulées) :
- lint, type-check et build refaits : codes 0 ; nouveau contrôle des 32 pages : 1 H1 partout, titles et descriptions uniques, 0 lien cassé.
- Nouvelles captures sur ce build : **0 pixel différent** sur les 12 images.
- Lighthouse non relancé : le tour 2 ne change que 4 descriptions (balises meta, og, twitter, JSON-LD de l'article). Aucun CSS n'est modifié.
- `navigation.tsx`, composant client, n'importe de `src/content/site-content.ts` que le type `SiteLocale` (`navigation.tsx:9`). Les descriptions n'entrent pas dans le JavaScript client (contrôle ci-dessus).

Tour 3 : dans le dépôt, seul ce document change. Nouveau contrôle des 32 pages sur le build du tour 2 (`crawl.py`) : valeurs du § 4 identiques, 1 H1 partout, titles et descriptions uniques, 0 lien cassé.

---

## 6. Actions à faire par Joseph (hors code)

| # | Action | Quand | Pourquoi |
|---|---|---|---|
| 1 | Aucune action sur la redirection Vercel | — | L'apex répond déjà en 308 vers `www` (3.5) |
| 2 | Renvoyer `https://www.sitekept.com/sitemap.xml` dans Search Console (Sitemaps) | Après la mise en ligne de 0.4a | 0.4a ne modifie pas le sitemap. Mais selon l'audit, Google ne l'avait plus lu depuis le 2 août 2025 [00] |
| 3 | Dans Search Console, rouvrir le rapport « Pages » et noter les motifs de non-indexation | 2 à 4 semaines après le renvoi | Mesurer l'effet des correctifs ; l'export d'août date d'avant `06b31f0` [D] § 5 |
| 4 | Inspecter l'URL des 13 pages dont la description a changé (liste au § 4.1), puis demander l'indexation | Après la mise en ligne | Ce sont les seules pages dont la description change (balises meta description, og, twitter et JSON-LD des articles). Le `alt=""` des 3 images décoratives change sur les 32 pages indexables, sans justifier de demande d'indexation |
| 5 | Vérifier dans Vercel que `NEXT_PUBLIC_BASE_URL` vaut exactement `https://www.sitekept.com`, ou qu'elle est absente | Au prochain passage dans Vercel | La sortie est correcte, mais la valeur n'a pas pu être lue d'ici ; une valeur erronée mais valide serait propagée |

---

## 7. Recommandations non appliquées

| Constat | Pourquoi non appliqué | Phase ou décideur |
|---|---|---|
| 3 feuilles CSS bloquantes ; délai de rendu du LCP de 2,3 s en local | Toute réorganisation du CSS (CSS critique en ligne, `experimental.inlineCss`) peut changer le rendu ; Perf. déjà ≥ 90 | À tester plus tard, avec captures |
| Feuille du champ téléphone (3 Ko) bloquante sur la home, qui contient le formulaire (absente de `/blog`, `/privacy`, `/site-internet-plombier`) | Déplacer l'import touche le formulaire, hors périmètre | Phase du formulaire |
| 12 Ko de JavaScript « legacy » (polyfills) | Changer la cible navigateurs touche tout le bundle | À décider, sans urgence |
| `gtag` (181 Ko) chargé d'emblée en production | Réservé au bandeau de consentement | Tâche 0.4b |
| TubesCursor (774 Ko) encore chargé sur écran de plus de 768 px, hors mouvement réduit et réseau lent | Le remplacer est une proposition de design | Joseph |
| Démo `/boulangerie` (seule vérifiée, en local) : `<meta name="robots" content="index, follow">` hérité du layout, contredit par l'en-tête `noindex, follow` | Google retient la consigne la plus restrictive : `noindex` s'applique déjà. Hors pages indexables | À aligner lors d'un passage sur `src/app/(demos)/layout.tsx` |
| Slug de démo `/pattiserie` (faute de frappe) | Changer l'URL exige une redirection permanente ; page `noindex` | Décision de Joseph |
| JSON-LD : `url` de l'organisation et du site sans slash final (`src/components/structured-data.tsx:27`, `:53`) | Même URL que `https://www.sitekept.com/` ; aucun effet attendu | Aucune |
| Contenu éditorial des titles et H1 (home, `/tarifs`, articles, `/templates`) | Réservé aux phases 1 à 4 du plan v2 | Phases 1 à 4 |
| Article livraison : la description garde « domaine offert la 1re année », repris du texte d'origine | Promesse à revoir avec l'offre v2, hors 0.4a | Phase 1 |
| 12 descriptions non modifiées contiennent « 48h » sans la précision, ou « dès » / « à partir de 500€ ». Liste : ligne suivante | Hors du diff de 0.4a, longueurs conformes | Phases 1 et 4 |
| Les 12 pages : `/templates`, `/tarifs` et 10 pages métier (restaurant, salon de coiffure, boulangerie, pâtisserie, fleuriste, réparation informatique, entreprise de nettoyage, architecte d'intérieur, avocat, agence immobilière) | `/tarifs` et `/templates` : phase 1. Pages métier : phase 4 | Phases 1 et 4 |
| Description de `/tarifs` : « sans abonnement » sans « imposé » | Hors du diff de 0.4a | Phase 1 |
