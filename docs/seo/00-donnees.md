# 0.1 — Données SEO disponibles (Search Console, GA4)

État au 3 novembre 2026. Ce document dit quelles données existent, ce qu'elles valent et ce qu'il reste à vérifier.

Chaque chiffre cite sa source :
- **[05]** = `docs/seo-audit/05-donnees-gsc-ga4.md`
- **[00]** = `docs/seo-audit/00-RAPPORT-CONSOLIDE.md`

Un chiffre calculé ici, et absent des sources, porte la mention « calcul ».

---

## 1. Sources utilisées

| Source | Contenu | Période couverte | Date du relevé |
|---|---|---|---|
| [05] Search Console, Performances | Clics, impressions, requêtes, pages | 9 févr. → 8 août 2026 (6 mois) | 10 août 2026 |
| [05] Search Console, Indexation et Sitemaps | Pages indexées, motifs, état du sitemap | État au jour du relevé | 10 août 2026 |
| [05] Search Console, Core Web Vitals | Données terrain | 90 derniers jours | 10 août 2026 |
| [05] GA4, Acquisition | Sessions par canal | 13 juil. → 9 août 2026 (28 jours) | 10 août 2026 |
| [05] GA4, Événements clés | Conversions configurées | 28 jours | 10 août 2026 |
| [00] Rapport consolidé | Synthèse de l'audit | Reprend [05] et le code | 11 août 2026 |
| `docs/seo-data/` | Dépôt prévu pour des exports récents | — | Vérifié le 3 nov. 2026 |

Le relevé [05] a été fait en direct, via le Chrome connecté du compte. La source précise que les valeurs sont relevées, pas estimées.

## 2. Âge des données

- Date du relevé : **10 août 2026**.
- Âge au 3 novembre 2026 : **environ 3 mois** (calcul).
- Les périodes mesurées se terminent les 8 et 9 août 2026 [05].

## 3. Résumé du relevé d'août

### 3.1 Search Console — Performances (6 mois) [05]

| Indicateur | Valeur |
|---|---|
| Clics | 8 |
| Impressions | 103 |
| CTR moyen | 7,8 % |
| Position moyenne | 5,7 |

- **Requêtes** : 6 requêtes visibles, toutes à 0 clic. Ce sont des variantes de marque (« kept.com », « site keep », etc.).
- 13 impressions seulement sont attribuées à une requête nommée. Les ~90 autres sont anonymisées par Google [05].
- Aucune requête commerciale non-marque n'apparaît [05].
- La source juge la position 5,7 trompeuse : elle ne reflète que des requêtes de marque [05].

### 3.2 Search Console — Pages [05]

- 12 lignes au total, 10 affichées dans le relevé.
- Chaque URL apparaît en double : une fois en `www`, une fois sans `www`.
- Exemple : `/realization` cumule 46 impressions, réparties entre `www` (8) et non-`www` (38).
- Première page : `https://www.sitekept.com/`, 4 clics et 39 impressions.

### 3.3 Search Console — Indexation [05]

| Statut | Nombre |
|---|---|
| Pages indexées | 11 |
| Pages non indexées | 6 |
| — dont « Page avec redirection » | 3 |
| — dont « Autre page avec balise canonique correcte » | 1 |
| — dont « Explorée, actuellement non indexée » | 2 |

Google ne connaît que 17 URL [05]. Le nombre de pages du site diffère selon la source : « 40+ » [05], « plus de 70 » [00].

### 3.4 Search Console — Sitemap [05]

| Sitemap | Envoyé le | Dernière lecture | État | Pages découvertes |
|---|---|---|---|---|
| `https://www.sitekept.com/sitemap.xml` | 19 juil. 2025 | 2 août 2025 | 4 erreurs | 5 |

- Le sitemap déclarait 28 URL en non-`www` [00].
- Cause avancée par l'audit : ces URL répondaient en 307 vers `www` [05].

### 3.5 Search Console — Core Web Vitals [05]

« Pas assez de données d'utilisation » sur mobile et sur ordinateur. Le site est absent du dataset CrUX.

### 3.6 GA4 — Sessions et canaux (28 jours) [05]

| Canal | Sessions | Part | Taux d'engagement | Durée moy. |
|---|---|---|---|---|
| **Total** | **27** | 100 % | 37,04 % | 37 s |
| Direct | 20 | 74,07 % | 30 % | 40 s |
| Organic Search | 5 | 18,52 % | 60 % | 34 s |
| Referral | 2 | 7,41 % | 50 % | 11 s |

- Sessions avec engagement : 10 au total [05].
- Aucun canal payant ni social [05].
- Utilisateurs actifs : 148 sur 28 jours, 4 sur 7 jours [05]. Ce chiffre de 148 paraît incohérent avec 27 sessions ; il est repris tel quel.
- Pays (7 jours) : États-Unis 3, France 1 [05].

### 3.7 GA4 — Événements clés [05]

- Un seul événement clé configuré : `purchase`, valeur par défaut de GA4.
- État : « Aucune donnée de flux détectée ».
- Aucun suivi de l'envoi du formulaire de contact (`generate_lead` ou `form_submit`) au moment du relevé.

## 4. Données plus récentes

- **Aucun connecteur MCP Search Console ou GA4 n'est branché sur cette session.** Aucune donnée n'a donc été relevée en direct.
- **`docs/seo-data/` ne contient aucun export.** Le dossier ne contient que `LISEZ-MOI.md`, qui décrit les exports attendus.
- Conséquence : le relevé du 10 août 2026 reste la seule source de données terrain.

## 5. Limites

- **Les données sont très minces.** 8 clics et 103 impressions en six mois [05]. 27 sessions GA4 sur 28 jours, dont 5 organiques [05].
- **Aucune conclusion statistique n'est possible**, ni sur la performance des mots-clés, ni sur les données GA4.
  - Search Console : les 6 requêtes visibles totalisent 13 impressions et 0 clic [05].
  - GA4 : 27 sessions sur 28 jours, dont 5 organiques [05]. Les taux d'engagement par canal reposent sur 2 à 20 sessions [05].
- **Les données ont environ 3 mois.** Le commit `06b31f0` du 11 août 2026 (source : git log) a modifié l'hôte canonique, le sitemap, le robots.txt et le suivi GA4. Le relevé ne reflète donc pas le code actuel.
- **La tâche 0.2 s'appuiera surtout sur deux bases** : les constats techniques de l'audit, et l'analyse des résultats de recherche réels.
- Aucun volume de recherche n'existe dans ces sources. Aucun ne doit être inventé.

## 6. Exports facultatifs qui affineraient l'analyse

À déposer dans `docs/seo-data/` si possible. Aucun n'est bloquant. La liste reprend la consigne de la tâche 0.1 et `docs/seo-data/LISEZ-MOI.md`.

- **Search Console — Performances, 16 mois** (durée tirée de la consigne et du `LISEZ-MOI.md`, pas des données) : par requêtes, par pages, par pays, par appareils.
- **Search Console — Indexation des pages** : pages indexées, non indexées et motifs.
- **GA4 — Pages de destination** : sessions et engagement par page d'entrée.
- **GA4 — Canaux d'acquisition** : sessions par canal, sur la plus longue période disponible.
- **GA4 — Événements** : liste des événements, dont `generate_lead`, avec leurs volumes.

## 7. À vérifier en 0.4

Constats vérifiés dans le code le 3 novembre 2026. Code lu sur `feat/offre-v2` (ed06ed2) ; `src/` est identique à `dev` (6663e62).

Les hashs et dates de commit de cette section viennent de `git log`, pas de [05] ni de [00].

### 7.1 Google Analytics, consentement et `generate_lead`

- `src/app/layout.tsx:94-96` : `<GoogleAnalytics>` n'est rendu que si `ENV.NEXT_PUBLIC_GA_ID` est défini.
- Aucune autre condition, en particulier aucune condition de consentement.
- Le composant est placé après `</body>` (ligne 93), dans `<html>`.
- `src/lib/env.ts:10` : `NEXT_PUBLIC_GA_ID` est optionnel.
- **Aucun mécanisme de consentement aux cookies trouvé** dans `src/` (recherche : consent, cookie, bandeau, cookiebot, tarteaucitron, axeptio, didomi).
- Les seuls résultats sont hors sujet :
  - `src/app/(demos)/avocate-tel-aviv/contact-form.tsx:126` : case « consent » d'un formulaire de démo, pour être recontacté.
  - `src/components/demo-banner.tsx:5`, `src/app/(demos)/layout.tsx:10` et `src/middleware.ts:11,13` : « bandeau » désigne le bandeau de démonstration.
  - `src/app/(marketing)/privacy/page.tsx:145,148` : titre et texte de la section « Cookies » de la politique de confidentialité.
  - `src/lib/locale.ts:7-14` : commentaire sur l'ancienne locale lue dans un cookie.
- `messages/fr.json:369` : la politique de confidentialité renvoie la gestion des cookies aux paramètres du navigateur.
- **`generate_lead` existe** : `src/features/contact-form/use-contact-form.ts:41`.
- Il est envoyé après un envoi réussi, seulement si `window.gtag` est une fonction (ligne 40).
- Le commentaire (lignes 37-39) indique qu'il faut encore le marquer « événement clé » dans l'administration GA4.
- **Différence avec le relevé** : le relevé d'août ne voyait que `purchase` et aucun suivi du formulaire.
- Source : `git log -S generate_lead`. L'événement a été ajouté par le commit `06b31f0`, daté du 11 août 2026. C'est le lendemain du relevé.
- Aucune conclusion sur la remontée actuelle : à vérifier dans GA4.

### 7.2 `public/robots.txt`

- **Le fichier n'existe plus**, ni sur disque ni dans l'index Git.
- Il a été supprimé par le commit `06b31f0` (11 août 2026 ; source : git log).
- Le robots.txt est produit par `src/app/robots.ts`.

### 7.3 Redirection `/template`

- `src/app/(marketing)/template/page.tsx:4` : `permanentRedirect("/templates")`. **Confirmé.**
- Le code de statut HTTP n'a pas été testé ici. L'audit l'avait relevé en 308 [00].

### 7.4 Hôte canonique

- `src/lib/site-url.ts:1` : `FALLBACK_BASE_URL = "https://www.sitekept.com"`. **Le repli est sur `www`.**
- `site-url.ts:30` : `SITE_URL` vient de `NEXT_PUBLIC_BASE_URL`, nettoyée des espaces et du slash final.
- `site-url.ts:15-25` : le repli `www` s'applique si la variable est vide ou malformée.
- **Les lignes citées par l'audit ne sont plus exactes.** Les trois fichiers utilisent désormais `SITE_URL` :

| Citation de l'audit | Contenu actuel de cette ligne | Usage réel de `SITE_URL` |
|---|---|---|
| `src/app/sitemap.ts:6` | Ligne de commentaire | Import l. 4, `baseUrl = SITE_URL` l. 20 |
| `src/app/robots.ts:9` | `},` (fermeture de `rules` ; `allow: "/"` est en l. 8) | Import l. 2, `sitemap` l. 10 |
| `src/app/layout.tsx:46` | `images` de l'Open Graph | Import l. 9, `metadataBase` l. 17, `openGraph.url` l. 43 |

- `src/lib/page-metadata.ts:2-4` : la canonique des pages utilise aussi `SITE_URL`.
- URL écrites en dur, toutes en `www` : `src/components/demo-banner.tsx:27` et `src/content/admin-template-catalog.ts:19`.
- Non vérifiable dans le code :
  - la valeur de `NEXT_PUBLIC_BASE_URL` en production (`.env.local` non lu, Vercel non consulté) ;
  - le statut 307 ou 308 de la redirection non-`www` → `www` ; elle n'apparaît ni dans `next.config.ts`, ni dans `vercel.json`, ni dans `src/middleware.ts`.

### 7.5 `docs/seo-audit 2`

- **Le dossier n'existe pas dans le worktree `feat/offre-v2`.** Git ne suit aucun fichier sous ce chemin.
- Il existe dans la copie de travail principale (`sitekept-weblaunding`), lue sans écriture. Il y est **vide** (`ls -la` : aucun fichier).
- Il y date du 11 août 2026, 21:34.
