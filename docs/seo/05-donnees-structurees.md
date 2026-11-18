# 0.5 — Données structurées (JSON-LD)

État au 10 novembre 2026. Code : branche `feat/offre-v2-t05`, build local `next start` sur le port 3120. Les offres, les prix et `/offres` sont décrits au § 7, daté du 18 novembre 2026.

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

- **Organization** : `sameAs` contient uniquement `https://www.linkedin.com/company/sitekept/`, fourni par Joseph le 10 novembre 2026. Un lien texte visible vers cette page existe dans le footer (`src/components/footer.tsx`).
- **Absents** : adresse, `aggregateRating` et avis. Les prix et les offres ne figurent que dans le catalogue de `/offres`, décrit au § 7.
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
5. **Interdits** : `address`, `aggregateRating`, `review`, `offers`, `price`, `OfferCatalog`, et le signe € dans un `Service`. Depuis le 18 novembre 2026, `/offres` porte volontairement des offres et des prix (§ 7).
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

- **`availableLanguage` et `serviceType` sur l'Organization** : le vocabulaire les réserve à `ContactPoint` et à `Service`. Dans l'état du 10 novembre, elles sont remplacées par `knowsLanguage` et `knowsAbout`, avec les mêmes valeurs.
- **Libellé « Modèles de sites »** du fil d'Ariane des pages métier : remplacé par « Templates », comme dans la navigation.
- **Échappement du signe `<`** dans tous les blocs, pour qu'un texte ne puisse pas fermer la balise `<script>`.
- **Accueil** : un second bloc JSON-LD (FAQPage) s'ajoute. Le constat « 1 seul bloc » de `03-baseline.md` § 3.6 ne vaut donc plus.

## 6. Points ouverts

- **`priceRange`** est lu dans la constante unique des prix (`src/content/pricing.ts`). Il vaut « 500 € » le 18 novembre 2026.
- **`areaServed` « France »** et **`knowsLanguage` « en »** : le site ne les affirme nulle part à l'écran. Ils viennent de l'existant, la valeur « France » est reprise dans les `Service`. Joseph peut les confirmer ou les retirer.
- **Service de `/seo-geo`** : la page est surtout un guide. Le service est formulé à partir de son texte sur ce qu'un site optimisé doit avoir. À rediscuter avec la tâche 0.6.
- **`audience.audienceType`** : sur `/site-internet-reparation-informatique`, la valeur est « réparation informatique ». Elle désigne une activité, pas un public. À revoir avec Joseph.
- **Auteur des articles** : c'est une équipe, pas une personne. Un auteur nommé et visible relève de la tâche 0.6.
- **Titre d'article trop long** : « site-sans-referencement-peut-devenir-inutile » a un `headline` de 119 caractères. Google conseille 110 au plus, sans l'imposer.
- **Affichage des FAQ** : À notre connaissance, Google réserve désormais l'affichage enrichi des FAQ à certains sites. Le balisage reste valide, sans promesse d'affichage.
- **Non vérifié** : aucun test avec l'outil Google « Résultats enrichis » ni la Search Console. La validation reste locale.

---

## 7. État au 18 novembre 2026 : offres et prix

Ce paragraphe décrit l'état actuel du code. Les tableaux des § 1 et 4 datent du 10 novembre 2026 et ne contiennent pas `/offres`.

### Catalogue de `/offres`

La page `/offres` porte un bloc `Service` (`OfferCatalogJsonLd`) qui contient un `OfferCatalog` de trois `Offer`. C'est le seul `Service` du site qui déclare des offres et des prix. La page porte aussi un `BreadcrumbList` et un `FAQPage`.

Les montants sont lus dans `src/content/pricing.ts`, jamais écrits dans le composant. Chaque `description` reprend un texte visible sur la page.

| Offer | Prix déclaré (valeurs du 18 novembre 2026) |
|---|---|
| Site vitrine | `price` 500 et `priceCurrency` EUR, directement sur l'`Offer` |
| Suivi & Visibilité | Deux `UnitPriceSpecification` : 65 EUR pour 1 mois (`MON`), 600 EUR pour 1 an (`ANN`) |
| Campagnes publicitaires | `PriceSpecification` avec `minPrice` 300 et `priceCurrency` EUR, sans `price` |

Pour le suivi, la période passe par `referenceQuantity` (1 `MON` ou 1 `ANN`), à la place de l'ancien couple `unitCode` et `billingDuration: 1`. Selon schema.org, `billingDuration` est la durée pendant laquelle le prix est facturé, par exemple la durée contractuelle d'un abonnement. La formule mensuelle est sans engagement : « 65 EUR pour 1 mois » est une quantité de référence, pas une durée de contrat.

Pour les campagnes, seul `minPrice` est déclaré, car la page affiche « à partir de ». Le budget média, payé aux plateformes, est en sus et figure dans la `description`.

### Règle TVA

`VAT_MODE` vaut « franchise » : aucune TVA n'est facturée. La fonction `schemaPrice` omet donc `valueAddedTaxIncluded`, et aucune des trois `Offer` ne le déclare. Si `VAT_MODE` passe à « applied », `schemaPrice` ajoute `valueAddedTaxIncluded: true`.

Le catalogue ne porte aucun `aggregateRating` et aucune adresse.

### `knowsAbout` de l'entité éditrice

`knowsAbout` compte six valeurs :

- « Création de site internet », « Site vitrine », « Refonte de site web » et « Optimisation SEO » existaient déjà ;
- « Suivi de site internet » et « Publicité en ligne » ont été ajoutées le 18 novembre 2026.

Rien n'a été retiré.

Le suivi et la publicité en ligne sont affichés dans le résumé des trois offres de la home et sur `/offres`. Ce bloc `ProfessionalService` est servi sur toutes les pages du layout marketing.

### Validation du 18 novembre 2026

Le HTML du build local de `/offres`, de `/` et de `/site-internet-plombier` a été envoyé à l'API du validateur schema.org (`POST https://validator.schema.org/validate`). Résultat : 0 erreur et 0 avertissement sur les trois pages. Les blocs sont du JSON valide.

Contrôle de la méthode : une propriété renommée volontairement produit bien une erreur de validation. Les propriétés `unitCode` et `billingDuration` existent toutes deux sur `UnitPriceSpecification` selon schema.org, et le validateur ne les départage pas. Le choix de `referenceQuantity` repose donc sur le sens de la propriété (quantité de référence), non sur une erreur de validation.

Aucun test « Résultats enrichis » de Google n'a été fait.

### Points ouverts

- **« Suivi de site internet »** : c'est un libellé générique. L'offre s'appelle « Suivi & Visibilité » à l'écran, alors que « publicité en ligne » est affiché tel quel.
- **`areaServed` « France »** et **`knowsLanguage` « en »** : toujours non affirmés à l'écran, voir le § 6.
