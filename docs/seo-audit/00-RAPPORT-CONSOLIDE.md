# Audit SEO complet — sitekept.com

**Date :** 11 août 2026 · **Périmètre :** technique, on-page, contenu, données structurées, GEO, Core Web Vitals · **Sources :** Search Console, Google Analytics 4, code (branches `dev` et `main`), mesures HTTP en production.

Ce document est la synthèse. Le détail, preuve par preuve, est dans les cinq volets :

| Volet | Fichier |
|---|---|
| Technique & crawlabilité | [01-technique-crawlabilite.md](01-technique-crawlabilite.md) |
| On-page & contenu | [02-onpage-contenu.md](02-onpage-contenu.md) |
| Données structurées & GEO | [03-donnees-structurees-geo.md](03-donnees-structurees-geo.md) |
| Performance & Core Web Vitals | [04-performance-cwv.md](04-performance-cwv.md) |
| Données Search Console & GA4 | [05-donnees-gsc-ga4.md](05-donnees-gsc-ga4.md) |

---

## Verdict

**Le site n'a pas un problème de classement. Il a un problème de présence.**

Sur six mois, Google a affiché sitekept.com **103 fois** et l'a fait cliquer **8 fois**. Les six seules requêtes enregistrées sont `"kept.com"`, `site keep`, `iaformaplus`, `kept.com`, `www.kept`, `keepital` — des fautes de frappe navigationnelles, **toutes à zéro clic**. Aucune requête commerciale. Pas une seule.

Ce n'est pas une question de qualité de contenu ou de concurrence : c'est une question d'infrastructure. Le site envoie à Google des signaux contradictoires depuis un an, et **11 pages seulement sur plus de 70 sont indexées**.

La bonne nouvelle est que les causes sont peu nombreuses, identifiées avec certitude, et que les trois plus importantes se corrigent en moins d'une journée de travail.

**Un chiffre à retenir pour arbitrer** : sur 28 jours, l'organique ne pèse que 5 sessions sur 27, mais affiche le **meilleur taux d'engagement du site — 60 %, contre 30 % en direct**. Le peu de trafic de recherche qui arrive est le plus qualifié. L'investissement SEO est économiquement justifié.

---

## Les cinq causes racines

### 1. Le site vit sur `www`, tout le code croit vivre sur non-`www` — 🔴 Critique

C'est la cause première, et elle explique à elle seule la majorité des symptômes.

```
https://sitekept.com/      →  307 (temporaire)  →  https://www.sitekept.com/
https://www.sitekept.com/  →  200
```

Un **307 est temporaire** : il dit explicitement à Google de continuer à indexer l'URL d'origine. Google obéit, et indexe les deux hôtes en parallèle. Search Console le confirme page par page :

| Page | Clics | Impressions |
|---|---|---|
| `www.sitekept.com/` | 4 | 39 |
| `sitekept.com/` | 2 | 30 |
| `www.sitekept.com/realization` | 1 | 8 |
| `sitekept.com/realization` | 0 | **38** |

`/realization` disperse 46 impressions sur deux adresses au lieu de les cumuler sur une seule.

S'y ajoute un signal auto-contradictoire. La page servie sur `www` déclare :

```html
<link rel="canonical" href="https://sitekept.com"/>
```

Soit : « ma version de référence est une URL qui te renvoie ici ». Google reçoit une boucle et tranche seul. Source : [`src/lib/page-metadata.ts:21-23`](../../src/lib/page-metadata.ts), avec `baseUrl` en ligne 3 qui retombe sur le non-`www` parce que **`NEXT_PUBLIC_BASE_URL` n'est pas définie en production**.

La même variable contamine le sitemap ([`src/app/sitemap.ts:6`](../../src/app/sitemap.ts)), le robots.txt ([`src/app/robots.ts:9`](../../src/app/robots.ts)) et l'`og:url` ([`src/app/layout.tsx:46`](../../src/app/layout.tsx)).

**Effet de bord mesuré :** tout visiteur arrivant depuis un résultat de recherche non-`www` paie un aller-retour de redirection avant le premier octet.

### 2. Le sitemap est mort depuis un an — 🔴 Critique

Search Console, rapport Sitemaps :

| Sitemap | Envoyé | Dernière lecture | État | Pages découvertes |
|---|---|---|---|---|
| `www.sitekept.com/sitemap.xml` | 19 juil. 2025 | **2 août 2025** | **4 erreurs** | **5** |

Google n'a pas relu le fichier depuis plus d'un an. La raison découle du point 1 : le sitemap est soumis sur l'hôte `www`, mais son contenu déclare 28 URLs en non-`www`, qui répondent toutes en 307. Google traite des URLs redirigées dans un sitemap comme des erreurs et cesse de le consulter.

Et 28 URLs, c'est déjà bien en dessous de la réalité : le site expose **plus de 70 pages**. Les 46 sous-pages de démonstration n'y figurent pas.

**Résultat : 11 pages indexées, 6 non indexées.** Google ne connaît que 17 adresses sur ce site.

### 3. Les pages de démonstration sont invisibles pour Google — 🔴 Critique

Les 13 templates de démonstration ne reçoivent **aucun lien HTML** depuis `/templates`. Vérifié sur le HTML de production : **zéro balise `<a href>`** pointant vers `/boulangerie`, `/dentiste`, `/fleuriste`, etc.

La cause est une seule ligne, [`src/app/_components/project-card.tsx:36`](../../src/app/_components/project-card.tsx) :

```tsx
const handleVisit = () => {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");   // ← pas un lien
};
```

La navigation passe par un `onClick` sur un `<Button>`. Un utilisateur voit un bouton cliquable ; **Googlebot ne voit rien du tout**. Combiné à leur absence du sitemap, ces pages sont totalement inatteignables par exploration.

### 4. Aucune donnée structurée, aucune image de partage — 🟠 Élevé

`grep -c 'application/ld+json'` sur la page d'accueil de production : **0**. Aucun JSON-LD sur l'ensemble du site — ni `Organization`, ni `Service`, ni `BlogPosting`, ni `BreadcrumbList`.

Aucune image Open Graph n'existe non plus, alors que `twitter:card` est déclaré en `summary_large_image` ([`src/app/layout.tsx:51`](../../src/app/layout.tsx)). Chaque partage sur LinkedIn ou WhatsApp produit une carte vide.

Ce point a une dimension commerciale particulière ici : **l'agence vend du SEO et du GEO sur sa page `/seo-geo`**, tout en n'appliquant à son propre site aucune des pratiques qu'elle facture. C'est un problème de preuve commerciale autant que de référencement.

### 5. Le contenu ne cible aucune intention de recherche — 🟠 Élevé

Zéro requête non-marque en six mois n'est pas un accident : les pages ne sont écrites pour aucune requête.

- Les pages commerciales font **environ 250 mots**, très en dessous du seuil de compétitivité.
- Le H1 de la page d'accueil **ne contient aucun mot-clé de recherche**.
- Les 8 articles de blog font ~320 mots, **sans date de publication ni auteur**.
- Aucune page tarifs, aucune page service dédiée, aucune page géolocalisée.
- 4 pages publiques héritent du title et de la description de la page d'accueil — **duplication exacte**.
- 37 sous-pages de démonstration partagent un title identique à leur page mère, et **n'ont aucun H1**.

---

## Points annexes vérifiés

**Production en retard d'un commit.** `git rev-list --count main..dev` = 1. Le commit `1c7c98d` est sur `dev` mais pas déployé. Conséquences en ligne : `/mentions-legales` renvoie **404**, et tout le corps de texte de la page d'accueil est **désaccentué** (« La rapidite compte, mais la clarte commerciale et la propriete comptent »). Le correctif existe déjà — il n'est simplement pas en ligne. Aucun lien du footer de production ne pointe vers l'URL 404, donc pas de lien mort.

**774 Ko de JavaScript tiers sur la page d'accueil.** [`src/components/ui/tubes-cursor.tsx:29`](../../src/components/ui/tubes-cursor.tsx) importe dynamiquement `threejs-components` depuis le CDN jsdelivr. Mesuré : **774 791 octets, 1,15 s de téléchargement**, pour un fond décoratif. Confirmé présent en production. Le composant respecte correctement `prefers-reduced-motion`, ce qui limite la casse, mais il reste chargé pour l'écrasante majorité des visiteurs.

**Aucune mise en cache, serveur aux États-Unis.** En-têtes de la page d'accueil : `cache-control: private, no-cache, no-store`, `x-vercel-cache: MISS`, `x-vercel-id: fra1::iad1`. La requête entre par Francfort et s'exécute à **Washington DC**. Les 84 routes sont rendues dynamiquement, car la locale est lue dans un cookie depuis le layout racine — ce qui bascule tout l'arbre en dynamique et supprime toute mise en cache CDN.

**`/icon.svg` renvoie 404**, alors qu'il est déclaré dans [`src/app/layout.tsx:29-32`](../../src/app/layout.tsx) — avec en prime un type MIME `image/png` sur un fichier `.svg`.

**Internationalisation sans URL distincte.** Deux langues (fr/en) partagent la même adresse, la locale étant portée par un cookie. La version anglaise est donc **non indexable**, aucun `hreflang` n'est possible, et c'est la cause directe du rendu dynamique intégral.

**Coordonnées d'entreprises fictives indexables.** La démo `/dentiste` se présente comme « Clinique Nova Sourire — Cabinet dentaire » avec un numéro français (`+33 1 84 12 00 18`), une adresse et un e-mail, **sans mention visible qu'il s'agit d'une démonstration**. À traiter en priorité : vérifier que ce numéro n'appartient pas à un tiers réel, et poser une bannière de démonstration visible.

**Aucune mesure de conversion.** Un seul événement clé dans GA4 : `purchase`, valeur par défaut, « aucune donnée de flux détectée ». L'envoi du formulaire de contact — l'unique conversion du site — n'est pas suivi. **Le ROI du SEO est aujourd'hui impossible à mesurer.**

---

## Sur les Core Web Vitals

Search Console indique « **pas assez de données d'utilisation ces 90 derniers jours** », mobile **et** ordinateur. Le site est absent du dataset CrUX faute de trafic suffisant.

Il faut être clair sur ce que cela implique : **il n'existe aujourd'hui aucun Core Web Vitals réel pour ce site**, ni chez Google ni ailleurs. L'API PageSpeed Insights en accès anonyme est par ailleurs plafonnée à zéro requête, donc aucun score Lighthouse n'a pu être relevé.

Les constats de performance de cet audit reposent donc sur de l'**analyse de code et des mesures réseau réelles** — poids des ressources, en-têtes de cache, temps de transfert — et non sur des CWV mesurés. Aucun chiffre de ce rapport ne doit être présenté comme un Core Web Vital.

**Conséquence pour l'arbitrage : les Core Web Vitals ne sont pas ce qui bloque le référencement aujourd'hui.** Ils deviendront un levier une fois le trafic amorcé. Les corrections de performance listées ci-dessous méritent d'être faites — surtout les 774 Ko et l'absence de cache — mais après les corrections d'indexation, pas avant.

---

## Feuille de route

### Jour 1 — configuration, moins d'une heure, sans risque

Ces quatre actions débloquent la situation. Elles ne demandent aucun développement.

1. **Définir `NEXT_PUBLIC_BASE_URL=https://www.sitekept.com`** dans Vercel (Production + Preview). Corrige d'un coup les canonicals, le sitemap, le robots.txt et l'`og:url`.
2. **Passer la redirection non-`www` → `www` en 308** (permanente) au lieu de 307.
3. **Merger `dev` → `main` et redéployer** : publie `/mentions-legales` et corrige les accents.
4. **Resoumettre le sitemap** dans Search Console une fois le déploiement effectué.

### Semaine 1 — rendre le site explorable

5. **Remplacer `window.open()` par un vrai `<a href>`** dans [`project-card.tsx:36`](../../src/app/_components/project-card.tsx). Une ligne, qui rend 13 pages explorables.
6. **Trancher le sort des 59 pages de démonstration.** Recommandation : `noindex, follow` immédiat via middleware, puis migration vers un sous-domaine. Retirer sans délai les coordonnées inventées et poser une bannière « démonstration » visible.
7. **Aligner le sitemap** sur cette décision, et rattacher `lastModified` à des dates réelles plutôt qu'à `new Date()`.
8. **Ajouter `metadataBase`**, une image Open Graph, et le JSON-LD `Organization` + `WebSite`.
9. **Corriger ou retirer la référence `/icon.svg`.**
10. **Configurer le suivi de conversion GA4** sur l'envoi du formulaire (`generate_lead`). Prérequis à toute mesure de ROI — à faire avant, pas après.

### Mois 1 — exister sur des requêtes

11. **Réécrire titles et descriptions** des pages dupliquées, et réintroduire un mot-clé dans le H1 de la page d'accueil.
12. **Étoffer les pages commerciales** de 250 à 800-1 200 mots, sur des intentions de recherche identifiées.
13. **Créer les pages manquantes** : tarifs, services dédiés, et pages géolocalisées si l'agence a une implantation.
14. **Ajouter dates et auteurs** aux articles, allonger les contenus, mailler vers les pages commerciales.
15. **Déployer les JSON-LD** `Service`, `BlogPosting`, `BreadcrumbList`, `FAQPage`.

### Trimestre — chantiers de fond

16. **Migrer l'i18n vers un routage par préfixe d'URL** (`localePrefix: "as-needed"`). Résout trois problèmes d'un coup : rend l'anglais indexable, permet le `hreflang`, et supprime la cause du rendu dynamique intégral — donc restaure la mise en cache CDN.
17. **Remplacer ou alléger le fond `tubes-cursor`** (774 Ko de CDN tiers).
18. **Fixer la région d'exécution Vercel** sur `cdg1`/`fra1` au lieu de `iad1`.
19. **Optimiser les images** (17 Mo dans `public/`, jusqu'à 2,72 Mo l'unité) et activer AVIF.

---

## Note de méthode — cross-vérification

Cet audit a été conduit par quatre analyses spécialisées indépendantes, dont les conclusions ont été recoupées avec les données Search Console / GA4 puis **revérifiées une à une** en production. Quatre affirmations initialement plausibles ont été **écartées comme faux positifs** avant d'entrer dans ce rapport :

| Hypothèse écartée | Vérification |
|---|---|
| « `public/robots.txt` avec le placeholder `yourdomain.com` est servi en production » | Faux. C'est `src/app/robots.ts` qui est servi. Le fichier statique est du code mort, pas un incident. |
| « Les balises canonical sont absentes » | Faux. Elles existent — le problème réel, plus grave, est qu'elles pointent vers l'hôte qui redirige. |
| « Google Analytics est cassé par le placement du tag hors `<body>` » | Faux. Vérifié au runtime : `gtag` est une fonction, `dataLayer` est alimenté, GA4 collecte bien. Le placement reste du HTML invalide, mais sans effet. |
| « Le sitemap contient une URL en 404 » | Nuancé. `/mentions-legales` 404 en production, mais l'URL n'est pas dans le sitemap servi — c'est un décalage de déploiement, pas une erreur de sitemap. |

Les points qui restent dans ce rapport sont ceux qui ont survécu à cette vérification, chacun adossé à une preuve reproductible : réponse HTTP, extrait de HTML servi, relevé Search Console, ou `fichier:ligne`.

Les volets détaillés documentent également les **points vérifiés et jugés conformes** — redirection `/template` → `/templates` en 308, `noindex` correct sur la route d'administration, normalisation du slash final, absence de soft-404, HSTS, manifest — afin d'éviter des corrections inutiles.
