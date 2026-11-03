# Refonte de l'offre Sitekept : page /offres, abonnement mensuel, campagnes publicitaires

> Plan initial rédigé par Claude Code le 3 novembre 2026, enregistré tel quel. **`plan-v2.md` et `registre-decisions.md` prévalent** en cas de contradiction (notamment : prix barré de 600 € supprimé, franchise de TVA sans « TTC », tunnel de formulaire à sélection multiple, navigation à 5 entrées, campagnes « à partir de 300 €/mois »).

## Context

Sitekept ne vend aujourd'hui qu'une seule chose : un site vitrine à 500 € en paiement unique (plus « Fonctionnalités avancées, sur devis »). L'objectif est d'élargir l'offre à trois formules — le site en one-shot, un abonnement mensuel de suivi, et une offre de campagnes publicitaires — et de les présenter sur une page `/offres` dédiée.

**Le problème à résoudre en premier.** Tout le discours commercial du site est construit *contre* l'abonnement. Le titre de la home est « Site pro en 48h, **sans abonnement** et 100% à vous ». La page `/tarifs` (571 lignes, pilier SEO) contient :

- un tableau « Sitekept : paiement unique » vs « Abonnement mensuel permanent » ;
- une FAQ « Y a-t-il un abonnement à payer chaque mois ? **Non.** » ;
- une section « le coût sur cinq ans » : « Un abonnement à 50 € par mois : 3 000 €. Et à la fin, il ne vous reste rien. »

Un abonnement à 65 €/mois représente 3 900 € sur cinq ans — plus que l'exemple utilisé pour démolir l'abonnement. Publier la nouvelle offre sans retoucher ce discours rendrait le site auto-contradictoire sur sa page la plus importante.

**La résolution retenue** est une distinction éditoriale tenue partout : **le site s'achète une fois et reste à vous ; l'accompagnement est un service optionnel, résiliable, et son arrêt ne touche pas au site.** Correctement dit, l'abonnement renforce le positionnement au lieu de l'abîmer : « même notre abonnement ne vous enferme pas. »

**Résultat attendu :** une page `/offres` qui vend trois formules sans contredire le discours de propriété, un résumé en home, une page `/tarifs` recalibrée, et un formulaire de contact qui dit quelle offre intéresse le prospect.

---

## Décisions actées

| Sujet | Décision |
|---|---|
| Abonnement | **65 €/mois** sans engagement, ou **600 €/an** payés d'avance (soit 50 €/mois, 180 € d'économie sur l'année). TTC, comme le reste du site. |
| Modifications | 2 par mois, **non cumulables**, périmètre défini explicitement |
| Suivi SEO/GEO | Livrables bornés, **aucune promesse de classement** |
| Éligibilité abonnement | Ouvert à tout site, **audit préalable** si le site n'a pas été livré par Sitekept |
| Campagnes Google/Meta/TikTok | Troisième offre, **sur devis après audit**, sans prix public |
| URL | **`/offres` neuve** (commerciale) ; `/tarifs` conservée comme guide SEO et recalibrée |
| Home | Résumé des offres + lien vers `/offres` |
| Formulaire | Champ « offre souhaitée » avec **pré-sélection depuis les CTA** |

---

## 0. Direction artistique : rester dans l'existant (non négociable)

Tout ce qui est ajouté doit avoir l'air d'avoir toujours fait partie du site. On ne change pas la DA, on ne la « modernise » pas.

- **Aucun nouvel élément visuel** : pas de nouvelle couleur, police, rayon, ombre, dégradé, effet ou animation, pas de nouvelle bibliothèque d'interface.
- **Réutiliser avant de créer** : `Button`, `Input`, `Card`, icônes `lucide-react`, et les classes Tailwind déjà présentes.
- **Repères relevés dans le code** :
  - `/offres` reprend le gabarit de `/tarifs` : hero `bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]`, alternance `bg-white` / `bg-slate-50`, carte mise en avant `border-2 border-blue-200`, bandeau final `bg-slate-900`, eyebrow `text-sm font-semibold uppercase tracking-[0.28em] text-blue-700`.
  - La section résumé de la home reprend les cartes de la home elle-même, pas celles de `/tarifs` : `rounded-md border border-blue-100 bg-slate-50 p-6 shadow-sm` avec le trait `h-0.5 w-12 bg-blue-600` (`page.tsx:168-172`), titres `text-3xl … sm:text-4xl`, `py-20 sm:py-24`.
- **Le `<select>` du formulaire** est habillé avec les classes exactes de `Input`.
- **Mobile d'abord** : aucun débordement horizontal, CTA pleine largeur sur mobile comme sur `/tarifs`.
- Si une meilleure idée de design se présente, la proposer sans l'implémenter.

---

## 1. Nouvelle page `/offres`

**Fichier à créer :** `src/app/(marketing)/offres/page.tsx`

Suivre exactement le modèle de `src/app/(marketing)/tarifs/page.tsx` : Server Component, chaînes françaises **en dur** (pas de `next-intl` — c'est le précédent établi par `/tarifs`, `/[metier]` et `/seo-geo` pour les pages récentes), données en constantes `const` en haut de fichier, sections `<section>` alternant `bg-white` / `bg-slate-50`, utilitaires Tailwind bruts (`blue-600`, `blue-700`, `slate-950` — il n'existe aucun token de marque dans `globals.css`).

Réutiliser :
- `buildPageMetadata` de `src/lib/page-metadata.ts`
- `BreadcrumbJsonLd` et `FaqJsonLd` de `src/components/structured-data.tsx`
- `Button` de `src/components/ui/button.tsx`, icônes `lucide-react` (`Check`, `Minus`, `ArrowRight`)

**Métadonnées** — ne pas marcher sur les mots-clés de `/tarifs` (« prix création site internet ») :

```ts
export const metadata = buildPageMetadata({
  title: "Nos offres : site, suivi mensuel et campagnes | Sitekept",
  description:
    "Trois formules claires : votre site en paiement unique dès 500€, un suivi mensuel à partir de 50€/mois, et des campagnes Google, Meta et TikTok sur devis.",
  path: "/offres",
});
```

### Structure des sections, dans l'ordre

**1. Hero.** Même traitement visuel que le hero de `/tarifs` (`bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]`, `pt-28 sm:pt-32`). Eyebrow « Nos offres ». H1 : « Créer votre site, le faire vivre, le faire connaître ». Chapô qui annonce les trois formules et le principe.

**2. « Le principe » — section la plus importante, placée AVANT la grille de prix.** C'est le bloc qui désamorce la contradiction. Trois affirmations courtes, visuellement distinctes :

- **Le site s'achète une fois.** Paiement unique, code déposé à votre nom, aucun abonnement nécessaire pour qu'il reste en ligne.
- **L'accompagnement est optionnel.** Il s'ajoute si vous le voulez, il s'arrête quand vous voulez.
- **Si vous arrêtez l'abonnement, le site reste en ligne et reste à vous.** C'est la différence avec un éditeur en ligne : vous ne louez pas votre présence, vous payez un service.

**3. Les trois offres** — grille `md:grid-cols-3`, carte du milieu mise en avant (`border-2 border-blue-200`, comme la carte « Tarif de lancement » de `/tarifs`) :

| | Site vitrine essentiel | Suivi & Visibilité | Campagnes publicitaires |
|---|---|---|---|
| Prix | **500 €** (`600 €` barré) | **65 €/mois** · ou 600 €/an | **Sur devis** |
| Sous-titre | TTC, paiement unique. Domaine offert 1 an. | TTC, sans engagement. Résiliable à tout moment. | Après audit gratuit. Budget média non inclus. |
| CTA | Demander un devis → `/?offre=site#contact` | Souscrire → `/?offre=suivi#contact` | Demander un audit → `/?offre=campagnes#contact` |

Sous la grille, un bloc léger (pas une carte de prix) : **Fonctionnalités avancées — sur devis** (boutique, réservation, espace client, intégrations métier), CTA → `/?offre=autre#contact`.

**4. « Site vitrine essentiel » en détail.** Reprendre mot pour mot `INCLUDED` et `NOT_INCLUDED` de `tarifs/page.tsx:22-35` pour garantir la cohérence entre les deux pages, plus les modalités (acompte 30 %, solde à la livraison, virement ou CB) et un lien « Comprendre le prix d'un site internet » → `/tarifs`.

**5. « Suivi & Visibilité » en détail.** La section qui doit être la plus précise, parce que c'est la nouveauté qui engage dans le temps. Quatre sous-blocs :

- **Les 2 modifications par mois.** Définition explicite : une modification = un changement sur une page existante (texte, photo, horaires, tarifs, ajout d'une actualité). Non cumulables d'un mois sur l'autre. Hors périmètre, donc sur devis : nouvelle page, nouvelle fonctionnalité, refonte graphique.
- **Le suivi SEO/GEO.** Liste bornée : Search Console surveillée, une optimisation on-page par mois, un rapport mensuel de positionnement, veille de présence dans les réponses des moteurs IA. Suivi d'une phrase d'honnêteté : *aucun classement ne peut être garanti, par nous ou par quiconque ; ce qui est garanti, c'est le travail et le compte rendu.*
- **Pour qui.** Ouvert à tout site, y compris fait ailleurs. Les sites non livrés par Sitekept passent par un audit technique avant souscription — pas pour facturer un préalable, mais parce que deux modifications par mois sur un code inconnu n'ont pas le même coût.
- **Arrêt.** Résiliable à tout moment, sans frais. Le site reste en ligne, le code reste à votre nom, les accès restent les vôtres.

**6. « Campagnes publicitaires » en détail.** Plateformes : Google Ads (recherche et Maps), Meta (Facebook/Instagram), TikTok. Déroulé en 3 étapes : audit gratuit → mise en place → pilotage et reporting mensuel. Deux points à dire franchement :
- **Honoraires de gestion et budget média sont deux choses.** Le budget média est payé directement aux plateformes, sur vos comptes, à votre nom — la même logique de propriété que pour le site.
- **Ce que la publicité ne fait pas.** Elle achète des visites ; elle ne répare pas une offre qui ne convertit pas. Si l'audit conclut que le budget serait gaspillé, on le dit avant de le prendre.

**7. Tableau comparatif** des trois offres (`overflow-x-auto` + `min-w-[640px]`, comme le tableau `MODELS` de `tarifs/page.tsx:443-476`). Lignes utiles : paiement, engagement, ce que vous possédez, ce qui se passe si vous arrêtez, pour qui.

**8. FAQ** (`FaqJsonLd` + rendu visible — Google exige que le balisage soit à l'écran, cf. le commentaire de `structured-data.tsx:119-122`). Les questions doivent attaquer la contradiction de face, pas la contourner :

- Vous dites « sans abonnement » et vous vendez un abonnement : expliquez.
- Si j'arrête l'abonnement, je perds mon site ?
- L'abonnement est-il obligatoire pour que le site reste en ligne ?
- 65 €/mois, qu'est-ce que ça couvre exactement ?
- Que se passe-t-il si je n'utilise pas mes 2 modifications ?
- Pouvez-vous suivre un site que vous n'avez pas fait ?
- Garantissez-vous d'être premier sur Google ?
- Combien faut-il de budget pour commencer la publicité ?

**9. CTA final.** Même traitement que `tarifs/page.tsx:541-568` (`bg-slate-900`), deux boutons : devis + `/realization`.

---

## 2. Recalibrage de `/tarifs` — le point critique

**Fichier :** `src/app/(marketing)/tarifs/page.tsx`

L'URL, le H1 et l'angle « combien coûte un site internet » sont conservés : c'est la page que l'audit SEO interne désigne comme « le meilleur ratio ROI/effort du site » (`docs/seo-audit/02-onpage-contenu.md:453`). Seul le discours anti-abonnement est recalibré. **La bonne distinction n'est pas « unique vs mensuel », c'est « acheter un site vs louer sa présence ».**

Modifications, par ordre d'importance :

1. **FAQ, question 2** (`tarifs/page.tsx:44-47`). Aujourd'hui : « Y a-t-il un abonnement à payer chaque mois ? — Non. » À réécrire : non, aucun abonnement n'est nécessaire pour que le site existe ; il existe par ailleurs un abonnement d'accompagnement optionnel à 65 €/mois (ou 600 €/an) qui couvre des modifications et un suivi de visibilité, et dont l'arrêt ne retire ni le site ni le code. Lien vers `/offres`.

2. **Section « Le calcul à faire : le coût sur cinq ans »** (`tarifs/page.tsx:394-430`). Le calcul 20/30/50 €/mois → 1 200/1 800/3 000 € reste juste et reste utile, mais il faut le **recadrer sur la location de présence** : ce qui est cher, ce n'est pas de payer un service chaque mois, c'est de payer pour que le site continue d'exister. Ajouter un paragraphe qui applique explicitement le test à notre propre abonnement : arrêtez-le, le site reste en ligne — la dépense s'arrête, l'actif reste.

3. **`APPROACHES`, entrée « Éditeur en ligne par abonnement »** (`tarifs/page.tsx:126-130`). Garder la critique mais la rendre spécifique : c'est la *location de la présence* qui est visée (« le site cesse d'exister si l'abonnement s'arrête »), pas le paiement récurrent en soi.

4. **Table `MODELS`** (`tarifs/page.tsx:158-177`). Ligne Sitekept : `payment` → « Paiement unique pour le site, accompagnement en option » ; `leaving` → « Vous partez avec le site, même en cours d'abonnement ».

5. **Section « Nos deux formules »** (`tarifs/page.tsx:209-269`). Conserver les deux cartes telles quelles, et ajouter sous la grille un bloc court « Et après la livraison ? » : trois lignes sur l'abonnement + lien « Voir nos trois offres » → `/offres`. Ne pas dupliquer la grille complète ici — c'est le rôle de `/offres`, et dupliquer la ferait se cannibaliser.

6. **`meta description`** (`tarifs/page.tsx:9-11`). Mention « sans abonnement » → « sans abonnement obligatoire », cohérent avec le H1 d'intro qui dit déjà « sans abonnement imposé ».

---

## 3. Home : résumé des offres

**Fichiers :** `src/content/site-content.ts`, `src/app/(marketing)/page.tsx`

Le contenu de la home vit dans `site-content.ts` en `LocalizedText` (`{ fr, en }`). Les deux locales doivent être renseignées pour satisfaire le type, même si `src/lib/locale.ts` renvoie aujourd'hui toujours `fr` (le `en` est inerte au runtime, mais le type l'exige).

1. **Nouveau `export const plans`** dans `site-content.ts`, sur le modèle de `offerHighlights` (`site-content.ts:338`) : `{ id, name, price, priceNote, pitch, features, ctaLabel, ctaHref, featured }`, trois entrées (`site`, `suivi`, `campagnes`).

2. **Nouveau `plansSection`** dans l'interface `HomeContent` (`site-content.ts:98-143`), à côté de `offerSection` : `{ eyebrow, title, description, linkLabel }`.

3. **Nouvelle section dans `page.tsx`**, insérée **après** la section `offerHighlights` (qui se termine ligne ~190) et **avant** la section `whySection` : grille de 3 cartes compactes + lien « Voir le détail des offres » → `/offres`. Suivre le pattern de rendu existant (`getLocalizedText`, `getLocalizedValue`, `scroll-reveal`).

4. **Aside du hero** (`page.tsx:102-132`). Garder `500€` et « Offre de départ ». Ajouter une ligne sous le prix : « Suivi et visibilité en option, à partir de 50 €/mois » avec un lien vers `/offres`. Ne pas toucher aux `proofPoints` ni au `trustStrip` : « Aucun abonnement imposé » reste exact.

5. **`faqItems`** (`site-content.ts:567-634`) :
   - réécrire la réponse de `id: "subscription"` (ligne 575) dans le cadre site / accompagnement ;
   - ajouter un item `id: "monthly-plan"` : ce que couvre l'abonnement, et le fait que son arrêt ne touche pas au site.

6. **`offerHighlights`, entrée `no-subscription`** : le titre « Aucun abonnement imposé » reste bon ; ajuster le corps (« Vous achetez un site, pas une dépendance ») pour mentionner que l'accompagnement existe et reste facultatif.

---

## 4. Navigation, footer, SEO

**`src/components/navigation.tsx`** — la nav compte déjà 7 entrées ; ne pas en ajouter une 8ᵉ. Remplacer `{ key: "pricing", href: "/tarifs" }` (ligne 13) par `{ key: "offers", href: "/offres" }`, et dans `navigationLabels` (lignes 21-48) remplacer `pricing` par `offers` : `"Nos offres"` / `"Our plans"`. `/tarifs` reste atteignable depuis `/offres`, depuis la home et depuis le footer.

**`src/components/footer.tsx`** — ajouter `/offres` dans la colonne Navigation, garder `/tarifs`.

**`src/app/sitemap.ts`** — ajouter `/offres` en priorité `0.9` (même niveau que `/tarifs` et `/templates`).

**`src/components/structured-data.tsx`** — ajouter un export `OfferCatalogJsonLd` à utiliser sur `/offres`. C'est le JSON-LD `Service` que l'audit réclame (`docs/seo-audit/00-RAPPORT-CONSOLIDE.md:171`). Respecter la règle du fichier (commentaire lignes 3-18) : **ne déclarer aucune donnée non vérifiable**. Donc un `Service` rattaché à `${SITE_URL}/#organization` avec `hasOfferCatalog` → 3 `Offer` ; prix déclarés uniquement pour le one-shot (`500 EUR`) et l'abonnement (`UnitPriceSpecification`, `65 EUR`, `billingDuration: 1` / `billingIncrement` en mois) ; **aucun prix** pour les campagnes. Pas de `aggregateRating`, pas d'`address`.

Optionnel, cohérent : ajouter « Suivi et maintenance de site web » et « Publicité en ligne » à `serviceType` dans `OrganizationJsonLd` (ligne 43).

---

## 5. Formulaire de contact : champ « offre souhaitée » avec pré-sélection

Six fichiers. Il n'existe **aucun primitif `select`** dans `src/components/ui/` — utiliser un `<select>` natif stylé avec les classes de `Input`, plutôt que d'ajouter un composant Radix pour un seul champ (natif = accessible, fonctionne sans JS, zéro dépendance).

Slugs stables, partagés entre les CTA et le schéma : `site` · `suivi` · `campagnes` · `autre`.

1. **`src/features/contact-form/contact-form.action.ts`** — ajouter au `contactSchema` (ligne 13) : `offer: z.enum(["site", "suivi", "campagnes", "autre"]).optional()`. Optionnel et non requis, pour qu'un POST sans le champ continue de passer. L'extraire dans l'objet `data` (ligne 120), puis l'afficher **en tête** du mail de lead (HTML ligne ~174 et texte ligne ~194) : c'est le qualifiant le plus utile. Mapper le slug vers un libellé lisible côté serveur.

2. **`src/features/contact-form/contact-form.tsx`** — ajouter le champ entre `phone` et `message`. Étendre `ContactFormMessages` (lignes 13-29) avec `offer: string` et `offerOptions: Record<string, string>`.

3. **Pré-sélection.** Ne **pas** utiliser `useSearchParams()` : la home est prérendue statiquement et cela imposerait une frontière `<Suspense>`. À la place, dans `src/features/contact-form/use-contact-form.ts`, un `useEffect` qui lit `new URLSearchParams(window.location.search).get("offre")`, le valide contre la liste de slugs connus, et initialise l'état du `<select>`. Les CTA de `/offres` pointent donc vers `/?offre=suivi#contact`.

4. **`src/app/_components/contact.tsx`** — passer les nouveaux messages dans la prop `messages` du `<ContactForm>`.

5. **`messages/fr.json` + `messages/en.json`** — ajouter `contactForm.offer` et `contactForm.offerOptions.*` dans les deux fichiers (parité de clés, même si `en` est inerte au runtime).

6. **`src/features/contact-form/use-contact-form.ts`** — l'event GA4 `generate_lead` existe déjà ; y ajouter l'offre en paramètre pour pouvoir mesurer quelle formule convertit.

---

## 6. CGU : section abonnement

**`messages/fr.json` + `messages/en.json`** → `terms.sections`. Aujourd'hui les CGU ne couvrent que la prestation au projet (`terms.sections.pricing` : acompte 30 %, solde à la livraison). Vendre un service récurrent demande une section `subscription` : objet, durée, reconduction, modalités et préavis de résiliation, conséquences de la résiliation (le site reste en ligne et la propriété du code est inchangée), et traitement des modifications non utilisées. Ajouter aussi « Suivi mensuel et accompagnement » et « Gestion de campagnes publicitaires » à `terms.sections.serviceDescription.items`.

⚠️ **À faire relire par quelqu'un de qualifié.** Un abonnement vendu à des indépendants et à des TPE fait entrer en jeu des règles que je ne peux pas trancher ici (droit de rétractation selon la qualité de l'acheteur, reconduction tacite, préavis). Le plan prépare la structure et un texte de départ ; il ne vaut pas une validation juridique.

---

## Points à savoir avant de lancer

**Il n'existe aucun moyen d'encaisser un paiement récurrent.** Pas de Stripe, pas de SEPA dans le projet — les CGU actuelles prévoient « virement bancaire ou carte bancaire » au projet. Les CTA de l'abonnement doivent donc mener au formulaire de contact (« Souscrire » → prise de contact), **pas** à un tunnel de paiement. Mettre en place l'encaissement récurrent est un chantier à part, hors de ce plan ; en attendant, la souscription se fait à la main.

**Vendre un suivi SEO élève l'exigence sur sitekept.com lui-même.** L'audit interne pointe déjà le problème (`00-RAPPORT-CONSOLIDE.md:100`) : l'agence vend du SEO/GEO sans appliquer ces pratiques à son propre site. Facturer un abonnement SEO mensuel rend ce décalage plus coûteux. Les corrections « Jour 1 » de l'audit devraient être en ligne avant ou avec cette offre — c'est aussi la meilleure preuve commerciale disponible.

---

## Vérification

```bash
pnpm dev
```

1. **Rendu et navigation.** Ouvrir `http://localhost:3000/offres` dans le navigateur intégré : les trois offres s'affichent, les prix sont justes (500 € / 65 € / sur devis), la mention 600 €/an est présente. Vérifier `/`, `/tarifs` et la nav (« Nos offres » remplace « Tarifs »). Tester en viewport `mobile` : le tableau comparatif scrolle horizontalement sans déborder la page.

2. **Cohérence du discours — le contrôle qui compte.** Relire `/tarifs` de bout en bout en cherchant toute phrase qui dise ou laisse entendre que Sitekept ne vend aucun abonnement. Il ne doit plus en rester. Même contrôle sur la FAQ de la home.

3. **Pré-sélection du formulaire.** Cliquer « Souscrire » sur `/offres`, atterrir sur `/?offre=suivi#contact`, vérifier que le `<select>` est pré-rempli sur « Suivi & Visibilité ». Recommencer avec `?offre=campagnes`, puis avec une valeur invalide (`?offre=nimportequoi`) qui doit retomber sur la valeur par défaut sans erreur console.

4. **Envoi du formulaire.** Sans `RESEND_API_KEY`, l'action logue la soumission en console (`contact-form.action.ts:134`) : vérifier que l'offre apparaît bien dans le log. Vérifier aussi qu'un envoi réussit toujours **sans** choix d'offre (le champ est optionnel).

5. **Données structurées.** Sur `/offres`, vérifier dans le HTML servi la présence de trois blocs `application/ld+json` (Breadcrumb, FAQ, OfferCatalog), puis coller le JSON-LD dans le validateur schema.org. Vérifier qu'aucun prix n'est déclaré pour l'offre campagnes.

6. **Sitemap.** `curl -s localhost:3000/sitemap.xml | grep offres` doit renvoyer l'URL.

```bash
pnpm lint && pnpm type-check && pnpm build
```

Le build doit rester **statique** pour `/offres` : si la sortie Next annonce cette route en dynamique (`ƒ`), c'est que la pré-sélection a introduit un `useSearchParams()` au lieu de la lecture `window.location` — à corriger.
