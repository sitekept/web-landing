# 0.5 — Données structurées (JSON-LD)

État au 10 novembre 2026. Code : branche `feat/offre-v2-t05`, build local `next start` sur le port 3120.

---

## 1. Ce que le site déclare

Chaque page indexable porte un bloc `ProfessionalService` et un bloc `WebSite`. Ils viennent du layout marketing, donc une seule fois par page.

| Type | Pages | Source du contenu |
|---|---|---|
| `ProfessionalService` (`#organization`) | 32 pages | `src/components/structured-data.tsx` |
| `WebSite` (`#website`) | 32 pages | idem |
| `BreadcrumbList` | 31 pages, toutes sauf l'accueil | libellés des liens de navigation, H1 ou titre de la page |
| `Service` | 13 pages : les 12 pages `/site-internet-*` et `/seo-geo` | H1 et texte visible de la page |
| `FAQPage` | accueil, `/tarifs`, `/seo-geo`, 12 pages métier | FAQ affichée sur la page |
| `BlogPosting` | 11 articles | `blogPosts` dans `src/content/site-content.ts` |

L'accueil n'a pas de fil d'Ariane : c'est la racine, un fil à un seul élément n'apporterait rien.

## 2. Règles appliquées

- **Organization** : `sameAs` contient uniquement `https://www.linkedin.com/company/sitekept/`, fourni par Joseph le 10 novembre 2026. Un lien texte visible vers cette page sera ajouté au footer par une micro-tâche distincte.
- **Absents** : adresse, `aggregateRating`, avis, prix et offres. Les prix viendront d'une constante unique, avec le balisage `OfferCatalog` en phase 4.
- **Service** : `provider` cite l'Organization par son `@id`, sans la redéclarer. Le `name` des pages métier est le H1, et la `description` est un texte affiché.
- **FAQPage** : les questions et réponses balisées sont exactement celles affichées. Aucune page ne porte deux FAQPage.
- **BlogPosting** : dates et auteur sont ceux de `site-content.ts`. L'auteur est la signature visible « Équipe Sitekept », déclarée comme Organization sans `@id`. Aucune Person n'est inventée.
- **Fil d'Ariane des pages métier** : Accueil, Templates, puis le H1. La page `/templates` liste chaque page métier, et chaque page métier y renvoie.

## 3. Méthode de validation

Le script `validate_jsonld.py` (bibliothèque standard Python) lit les 32 pages du sitemap servies par le build local. Il n'utilise aucun outil en ligne.

1. **Vocabulaire** : `schemaorg-current-https.jsonld`, téléchargé le 10 novembre 2026. Chaque `@type` et chaque propriété doit exister et s'appliquer au type, héritage compris (`domainIncludes`).
2. **Valeurs** : un objet typé doit appartenir aux types attendus (`rangeIncludes`). Les dates doivent être au format ISO.
3. **Champs Google** : `BreadcrumbList` (`itemListElement`, `position`, `name`, `item`), `FAQPage` (`Question`, `name`, `acceptedAnswer`, `Answer`, `text`), `BlogPosting` (`headline`, `datePublished`, `author.name`, plus `dateModified`, `image`).
4. **Correspondance** : chaque question et chaque réponse est cherchée dans le texte visible, hors `<script>`, dans l'ordre et de façon contiguë. Le fil d'Ariane doit finir sur la page, avec des libellés présents dans un lien, le H1 ou le titre.
5. **Interdits** : `address`, `aggregateRating`, `review`, `offers`, `price`, `OfferCatalog`, et le signe € dans un `Service`.
6. **Unicité** : un `@id` n'est déclaré qu'une fois, et l'Organization une seule fois par page.

Une exception est tolérée : `ListItem.item` est une URL en texte. C'est la forme décrite par Google, même si le vocabulaire attend un objet `Thing`.

Le script a été contrôlé sur une copie volontairement abîmée des pages. Les 11 défauts injectés ont tous été détectés.

Défauts injectés : type inconnu, propriété inconnue ou inapplicable, JSON cassé, FAQ modifiée, date fausse, `sameAs` faux, prix, note, doublon d'Organization, fil d'Ariane faux.

## 4. Résultats

Total : **0 erreur sur 32 pages**, avec la commande `next start` sur le build contenant ces changements. Les types `ProfessionalService` et `WebSite`, présents partout, ne figurent pas dans la colonne « Types ajoutés ».

| URL | Types ajoutés | Erreurs |
|---|---|---|
| `/` | FAQPage (6 Q/R) | 0 |
| `/templates` | BreadcrumbList | 0 |
| `/tarifs` | BreadcrumbList, FAQPage (8 Q/R) | 0 |
| `/realization` | BreadcrumbList | 0 |
| `/seo-geo` | BreadcrumbList, Service, FAQPage (4 Q/R) | 0 |
| `/blog` | BreadcrumbList | 0 |
| `/blog/site-web-rapide-pme-independant` | BlogPosting, BreadcrumbList | 0 |
| `/blog/posseder-son-site-sans-abonnement` | BlogPosting, BreadcrumbList | 0 |
| `/blog/site-optimise-seo-geo` | BlogPosting, BreadcrumbList | 0 |
| `/blog/qu-est-ce-que-le-seo-et-le-geo` | BlogPosting, BreadcrumbList | 0 |
| `/blog/site-sans-referencement-peut-devenir-inutile` | BlogPosting, BreadcrumbList | 0 |
| `/blog/pourquoi-optimisation-referencement-naturel-importante` | BlogPosting, BreadcrumbList | 0 |
| `/blog/pourquoi-avoir-un-site-qui-nous-appartient-a-100-change-tout` | BlogPosting, BreadcrumbList | 0 |
| `/blog/comment-se-passe-la-livraison-d-un-site-web-chez-sitekept` | BlogPosting, BreadcrumbList | 0 |
| `/blog/recuperer-son-site-web-chez-un-prestataire` | BlogPosting, BreadcrumbList | 0 |
| `/blog/louer-ou-posseder-son-site-internet` | BlogPosting, BreadcrumbList | 0 |
| `/blog/checklist-seo-avant-mise-en-ligne` | BlogPosting, BreadcrumbList | 0 |
| `/site-internet-plombier` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-salon-de-coiffure` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-boulangerie` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-patisserie` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-fleuriste` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-entreprise-nettoyage` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-restaurant` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-dentiste` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-avocat` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-reparation-informatique` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-architecte-interieur` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/site-internet-agence-immobiliere` | BreadcrumbList, Service, FAQPage (2 Q/R) | 0 |
| `/mentions-legales` | BreadcrumbList | 0 |
| `/privacy` | BreadcrumbList | 0 |
| `/terms` | BreadcrumbList | 0 |

## 5. Corrections faites au passage

- **`availableLanguage` et `serviceType` sur l'Organization** : le vocabulaire les réserve à `ContactPoint` et à `Service`. Elles sont remplacées par `knowsLanguage` et `knowsAbout`, avec les mêmes valeurs.
- **Libellé « Modèles de sites »** du fil d'Ariane des pages métier : remplacé par « Templates », comme dans la navigation.
- **Échappement du signe `<`** dans tous les blocs, pour qu'un texte ne puisse pas fermer la balise `<script>`.
- **Accueil** : un second bloc JSON-LD (FAQPage) s'ajoute. Le constat « 1 seul bloc » de `03-baseline.md` § 3.6 ne vaut donc plus.

## 6. Points ouverts

- **`priceRange`** reste écrit en dur (« À partir de 500 € »). À aligner en phase 1 sur la constante unique des prix.
- **`areaServed` « France »** et **`knowsLanguage` « en »** : le site ne les affirme nulle part à l'écran. Ils viennent de l'existant, la valeur « France » est reprise dans les `Service`. Joseph peut les confirmer ou les retirer.
- **Service de `/seo-geo`** : la page est surtout un guide. Le service est formulé à partir de son texte sur ce qu'un site optimisé doit avoir. À rediscuter avec la tâche 0.6.
- **`audience.audienceType`** : sur `/site-internet-reparation-informatique`, la valeur est « réparation informatique ». Elle désigne une activité, pas un public. À revoir avec Joseph.
- **Auteur des articles** : c'est une équipe, pas une personne. Un auteur nommé et visible relève de la tâche 0.6.
- **Titre d'article trop long** : « site-sans-referencement-peut-devenir-inutile » a un `headline` de 119 caractères. Google conseille 110 au plus, sans l'imposer.
- **`sameAs`** : le lien visible dans le footer n'existe pas encore sur cette branche. Il arrive avec la micro-tâche placée après le bandeau de consentement.
- **Affichage des FAQ** : À notre connaissance, Google réserve désormais l'affichage enrichi des FAQ à certains sites. Le balisage reste valide, sans promesse d'affichage.
- **Non vérifié** : aucun test avec l'outil Google « Résultats enrichis » ni la Search Console. La validation reste locale.
