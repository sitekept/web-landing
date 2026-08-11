# Données terrain — Search Console & GA4 (relevé du 10 août 2026)

Source : Search Console (propriété domaine `sc-domain:sitekept.com`) et GA4 (propriété `sitekept`, ID `497409333`), consultées en direct via le Chrome connecté du compte. Toutes les valeurs ci-dessous sont **relevées**, aucune n'est estimée.

## 1. Search Console — Performances (9 fév. → 8 août 2026, 6 mois)

| Métrique | Valeur |
|---|---|
| Clics | **8** |
| Impressions | **103** |
| CTR moyen | 7,8 % |
| Position moyenne | 5,7 |

### Requêtes (6 sur 6 lignes affichées)

| Requête | Clics | Impressions |
|---|---|---|
| "kept.com" | 0 | 6 |
| site keep | 0 | 2 |
| iaformaplus | 0 | 2 |
| kept.com | 0 | 1 |
| www.kept | 0 | 1 |
| keepital | 0 | 1 |

**Lecture :** 13 impressions seulement sont attribuées à des requêtes nommées ; les ~90 restantes sont anonymisées par Google (requêtes trop rares). **Aucune requête commerciale non-marque** n'apparaît. Les 6 requêtes visibles sont des variantes/fautes de frappe navigationnelles, toutes à 0 clic. La position moyenne de 5,7 est un **trompe-l'œil** : elle ne reflète que des requêtes de marque ultra-spécifiques, pas une capacité à se positionner.

### Pages (6 mois) — preuve de la scission www / non-www

| Page | Clics | Impressions |
|---|---|---|
| https://www.sitekept.com/ | 4 | 39 |
| https://sitekept.com/ | 2 | 30 |
| https://www.sitekept.com/realization | 1 | 8 |
| https://www.sitekept.com/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout | 1 | 4 |
| https://sitekept.com/realization | 0 | **38** |
| https://sitekept.com/template | 0 | 5 |
| https://sitekept.com/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout | 0 | 4 |
| https://www.sitekept.com/seo-geo | 0 | 3 |
| https://www.sitekept.com/templates | 0 | 3 |
| https://www.sitekept.com/blog | 0 | 2 |

(12 lignes au total ; 10 affichées)

**Lecture :** chaque URL existe **en double** dans l'index, une fois en www et une fois en non-www. `/realization` cumule 46 impressions réparties sur deux hôtes au lieu d'être consolidé. `/template` et `/templates` coexistent également — deux routes distinctes.

## 2. Search Console — Indexation

- **11 pages indexées** / **6 non indexées** → Google ne connaît que 17 URLs, alors que le site en compte 40+.
- Motifs de non-indexation :
  - Page avec redirection — **3**
  - Autre page avec balise canonique correcte — **1**
  - Explorée, actuellement non indexée — **2**
  - Page en double sans URL canonique sélectionnée par l'utilisateur — 0 (motif présent dans l'historique)

## 3. Search Console — Sitemap

| Sitemap | Envoyé le | Dernière lecture | État | Pages découvertes |
|---|---|---|---|---|
| https://www.sitekept.com/sitemap.xml | 19 juil. 2025 | **2 août 2025** | **4 erreurs** | **5** |

**Lecture :** le sitemap n'a **pas été relu par Google depuis un an** (relevé effectué le 10 août 2026) et n'a jamais fait découvrir que 5 pages. Cause : le sitemap est soumis sur l'hôte **www**, mais son contenu déclare des URLs en **non-www**, qui répondent toutes en 307 (voir §5). Google traite des URLs redirigées dans un sitemap comme des erreurs.

## 4. Search Console — Core Web Vitals

> « Pas assez de données d'utilisation ces 90 derniers jours pour ce type d'appareil. » — **Mobile ET Ordinateur.**

**Le site ne figure pas dans le dataset CrUX** : le trafic est trop faible pour générer des données terrain. Conséquence : les Core Web Vitals **ne sont actuellement pas un facteur limitant du classement**, et aucune mesure terrain n'est disponible. Seules les données labo (Lighthouse) sont exploitables, et elles ne doivent pas être présentées comme des CWV réels.

## 5. Vérifications HTTP en direct (curl, 10 août 2026)

```
https://sitekept.com/       → 307  →  https://www.sitekept.com/
https://www.sitekept.com/   → 200
```

- La redirection est en **307 (temporaire)** et non en **301 (permanente)** → Google conserve légitimement les deux hôtes dans son index. **C'est la cause racine de la duplication constatée au §1.**
- `https://sitekept.com/robots.txt` renvoie bien la sortie de `src/app/robots.ts` (`Sitemap: https://sitekept.com/sitemap.xml`), et non le fichier statique `public/robots.txt` — celui-ci contient un placeholder `yourdomain.com` mais **n'est pas servi**. Point à rétrograder en dette technique, pas en incident.
- `https://sitekept.com/sitemap.xml` déclare `<loc>https://sitekept.com</loc>` → **toutes les URLs du sitemap sont en non-www, donc toutes en 307.**
- Incohérence de domaine dans le code : `src/app/sitemap.ts:6`, `src/app/robots.ts:9` et `src/app/layout.tsx:46` déclarent tous le non-www, alors que la prod sert le www. `NEXT_PUBLIC_BASE_URL` n'est pas défini dans `.env.local` → le fallback non-www s'applique.

## 6. GA4 — Acquisition de trafic (13 juil. → 9 août 2026, 28 jours)

| Canal | Sessions | Part | Sessions avec engagement | Taux d'engagement | Durée moy. |
|---|---|---|---|---|---|
| **Total** | **27** | 100 % | 10 | 37,04 % | 37 s |
| Direct | 20 | 74,07 % | 6 | 30 % | 40 s |
| Organic Search | **5** | 18,52 % | 3 | **60 %** | 34 s |
| Referral | 2 | 7,41 % | 1 | 50 % | 11 s |

**Lecture :** 27 sessions sur 28 jours, dont **5 sessions organiques**. Aucun canal payant ni social. Point notable : le trafic organique a le **meilleur taux d'engagement (60 % contre 30 % en direct)** — le peu de trafic de recherche qui arrive est le plus qualifié, ce qui justifie économiquement l'investissement SEO.

Autres relevés GA4 :
- Utilisateurs actifs sur 28 jours : 148 ; sur 7 jours : 4.
- Utilisateurs par pays (7 derniers jours) : **United States 3, France 1**, Israel 0, Singapore 0. Pour une agence ciblant le marché français, l'audience actuelle n'est pas la cible.
- Pages vues (7 j) : la démo de template « Le Fournil d'Or – Boulangerie » génère autant de vues que les pages de l'agence.

## 7. GA4 — Événements clés (conversions)

| Événement clé | Flux actifs (28 j) |
|---|---|
| `purchase` | **Aucune donnée de flux détectée** |

**Un seul événement clé est configuré : `purchase`** — valeur par défaut de GA4, sans rapport avec le modèle d'affaires, et qui ne se déclenche jamais. **Aucun suivi de l'envoi du formulaire de contact** (`generate_lead` / `form_submit`), alors que c'est l'unique conversion du site.

**Conséquence :** il est aujourd'hui **impossible de mesurer le ROI du SEO** ou de tout autre canal. Toute décision d'arbitrage budgétaire se prend à l'aveugle. C'est un prérequis à corriger avant, et non après, les travaux SEO.

## Synthèse des données

Le site n'a pas un problème de classement : il a un problème de **présence**. 103 impressions sur 6 mois signifie que Google n'affiche quasiment jamais le site, sur aucune requête commerciale. Les trois causes mesurées sont : (1) la redirection 307 qui scinde l'autorité sur deux hôtes, (2) le sitemap non relu depuis un an qui laisse 40+ URLs hors de l'index, (3) l'absence de contenu positionné sur des requêtes non-marque. Les Core Web Vitals ne sont pas en cause à ce stade — ils le deviendront une fois le trafic amorcé.
