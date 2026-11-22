# Templates de démonstration : guide

Comment créer, migrer et vérifier un template Sitekept. Le code fait foi : en cas d'écart avec ce guide, c'est le guide qu'on corrige. Modèle de référence : `dentiste`.

État : le kit, le socle anglais et `dentiste` (FR + EN) sont en place. Onze templates sont nés bilingues sur le kit, au statut `lab` servi ici (`noindex`, hors galerie, en attente de validation) : `electricien`, `osteopathe`, `reparation-mobile`, `spa-massage`, `coffee-shop`, `createur-culinaire`, `agent-immobilier`, `garage-auto`, `photographe`, `plombier-serrurier`, `expert-comptable`. Les 12 autres démos publiques sont encore des micro-sites écrits à la main, migrés lot par lot. Le registre unique (`src/content/templates/registry.ts`) liste tous les templates.

## 1. Architecture

### Groupes de routes

| Groupe | URL | Rôle |
|---|---|---|
| `src/app/(demos)/` | `/<slug>`, `/<slug>/<page>` | Démos en français. Layout racine `RootDocument locale="fr"` + `<DemoBanner />`. |
| `src/app/(demos-en)/en/<slug>/` | `/en/<slug>`, `/en/<slug>/<page>` | Démos en anglais. Layout racine `RootDocument locale="en"` + `<DemoBanner locale="en" />`. |
| `src/app/(site-en)/en/` | `/en`, `/en/templates`, `/en/<métier>`… | Site commercial anglais, avec son `SiteShell`. |

- `(demos-en)` et `(site-en)` partagent le segment `en`. `/en/<slug>` est un segment statique : il passe avant le `[metier]` dynamique de `(site-en)`.
- Chaque groupe a son layout racine : `lang` est fixé statiquement (`fr` ou `en`), sans `headers()`, donc rendu statique.
- Le bandeau de démonstration (`src/components/demo-banner.tsx`, prop `locale`, `"fr"` par défaut) est rendu par le layout du groupe. Côté anglais, son lien de retour pointe vers `/en`.
- Le site marketing reste français : `src/lib/locale.ts` et `src/middleware.ts` n'ont pas à changer pour un template.

### noindex

- `isDemoPathname` (`src/lib/public-template-routes.ts`) est vrai pour `/<slug>…` et `/en/<slug>…` quand `<slug>` est dans `DEMO_SLUGS`. `/en`, `/en/templates` et les pages métier anglaises restent indexables.
- `src/middleware.ts` pose `X-Robots-Tag: noindex, follow` sur ces chemins.
- `DEMO_SLUGS` se dérive du registre (`src/content/templates/registry.ts`) : `routedTemplates` (templates servis sur ce domaine : `sitekept-public` et `lab` avec `routed: true`) + `nonTemplateDemos` (`je`, `avocate-tel-aviv` : servis ici mais pas des templates). Un nouveau template déclaré dans le registre est donc `noindex` sans autre étape, qu'il soit public ou `lab` routé.
- `PUBLIC_TEMPLATE_SLUGS` ne liste que les templates `sitekept-public` : un `lab` routé est `noindex` mais n'y figure pas.

### Métadonnées

`buildTemplatePageMetadata(def, locale, page)` (`src/lib/template-metadata.ts`) lit `copy[locale].meta[page]` et renvoie :
- `title` et `description` dans la langue de la page ;
- `robots: { index: false, follow: true }` (aligné sur l'en-tête du middleware) ;
- `openGraph` : `title` et `description` de la page, `url` absolue dans sa langue, `locale` (`fr_FR` / `en_US`), `alternateLocale` (l'autre langue) dès que `def.copy.en` existe, `type: "website"`, `siteName` repris de la racine (`metadata.openGraph.siteName`), et l'image `/opengraph-image` déclarée explicitement ;
- `twitter` : `card: "summary_large_image"`, `title`, `description`, plus `creator` et l'image de la racine ;
- `alternates.languages` avec `fr`, `en` et `x-default` (le français), dès que `def.copy.en` existe. Pas de `canonical`.

Une page qui définit `openGraph` ou `twitter` remplace celui du layout racine (fusion superficielle de Next) : sans ce bloc, le partage d'une démo reprendrait le titre et la description du site Sitekept, et sans l'image redéclarée la carte de partage serait vide.

Les démos restent hors du sitemap (`src/app/sitemap.ts`).

### Liens vers les démos

Le site anglais pointe vers `/en/<slug>` pour les templates qui ont leur version anglaise, et vers `/<slug>` (le français) pour les autres. Tout se dérive du registre, jamais d'une liste de slugs écrite à la main :

- **Table de chemins** : `PATH_MAP` (`src/lib/localized-routes.ts`) reçoit une entrée `/<slug>` → `/en/<slug>` pour chaque template public dont `locales` contient `"en"`. `localizeHref` (`src/lib/i18n-paths.ts`) reste sans dépendance de contenu ; la table complète lui est passée. `PATH_MAP` ne sert qu'aux liens et au sélecteur de langue : le sitemap et les hreflang du site parcourent leurs propres listes de pages, donc aucune démo n'y entre.
- **Galerie** (`TemplatesShowcase`) et **pages métier** (`src/views/metier.tsx`) passent le lien de démo par `linkLocalizer(locale)` : `/en/templates` et `/en/dentist-website` envoient vers `/en/dentiste`.
- **Libellés des pages métier anglaises** : `metier-pages-en.ts` nomme la démo sans mention de langue. La vue ajoute « (in French) » au nom, à « View the demo » et à la phrase d'introduction du modèle seulement quand `publicTemplateServesLocale(slug, "en")` (registre) est faux.
- **Admin** : `toAdminCatalogEntry` calcule `sitekeptUrl` (FR), `sitekeptUrlEn` (quand `locales` contient `"en"`) et `englishPendingLabel` (« EN : phase 5 », d'après le marqueur `englishPending`) ; la page n'a rien de codé en dur.

**Les `lab` routés** (`status: "lab"`, `routed: true`) sont servis sur ce domaine (`/<slug>` et `/en/<slug>`) et `noindex`, mais hors galerie, hors pages métier et hors `PATH_MAP` : aucun lien du site public ne pointe vers eux (`publicTemplates` et `PublicTemplateSlug` ne les contiennent pas, donc le `demoSlug` d'une page métier ne peut pas les viser). L'admin les montre avec `routeStatus` « Lab on sitekept.com » et les liens FR et EN. Un `lab` sans `routed: true` reste un template hébergé sur Vercel.

Quand un template passe en `["fr", "en"]` dans le registre (et perd `englishPending`), ses liens anglais, la mention « (in French) » et la page admin suivent sans autre modification.

## 2. Squelette d'un template

```
src/content/templates/<slug>.ts            définition : thème, chemins, copie FR + EN
src/templates/<slug>/
  shell.tsx                                shell du template (partagé FR/EN)
  <page>.tsx                               une vue par page (partagées FR/EN)
  parts.tsx                                éléments communs aux vues, table d'icônes
src/app/(demos)/<slug>/
  layout.tsx                               enveloppe du shell, locale="fr"
  page.tsx, <page>/page.tsx                routes FR minces
src/app/(demos-en)/en/<slug>/
  layout.tsx                               enveloppe du shell, locale="en"
  page.tsx, <page>/page.tsx                routes EN minces
```

Les vues vivent hors des groupes de routes (`src/templates/<slug>/`) : elles sont partagées par les deux langues, aucune ne dépend de l'autre groupe.

### Définition : `src/content/templates/<slug>.ts`

- `theme` : tokens `TemplateThemeTokens` (`src/lib/template-theme.ts`), couleurs en oklch. Obligatoires : `ink`, `surface`, `raised`, `accent`, `accentInk`, `inverse`, `inverseInk`. Facultatifs : `tint`, `inkMuted`, `eyebrow`, `eyebrowInverse`, `line`, `radius`, `radiusPill`, `fontDisplay`, `fontDisplayWeight`, `fontText`, `shadowSm`, `shadowLg`.
- `paths` : chemin français de chaque page, indexé par clé de page (`home`, `soins`…). Les liens anglais s'en déduisent avec `templateHref`.
- Copie française `const fr = { … } as const;` : tout ce qui est visible (marque, navigation, CTA, sections, formulaires, `alt`, bloc `meta`).
- Type dérivé : `export type <Slug>Copy = WidenLiterals<typeof fr>;` (`src/content/templates/types.ts`).
- Copie anglaise obligatoire : `const en: <Slug>Copy = { … };`. Une clé manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
- Icônes : chaque élément de liste qui a une icône porte une clé `icon` (littéral, ex. `icon: "cpu"`), voir « Vues » plus bas.
- Export : `export const <slug>: TemplateDefinition<"<slug>", <Slug>Copy> = { slug, theme, paths, copy: { fr, en } };`

Le bloc `meta` de la copie (`Record<page, { title, description }>`) est le contrat minimal lu par le kit (`TemplateCopyBase`). Un template sans version anglaise se déclare avec un troisième paramètre : `TemplateDefinition<"<slug>", Copy, "fr">`. Les nouveaux templates naissent bilingues.

**Pas de repli silencieux sur le français.** `getTemplateCopy(def, locale)` et `buildTemplatePageMetadata(def, locale, page)` typent `locale` par les langues que la définition déclare (le troisième paramètre de `TemplateDefinition`). Une route ou une vue qui demande `"en"` à une définition `"fr"` seule échoue au `type-check`. Pour un template FR seul, une vue se type donc `{ locale: "fr" }` (et non `TemplateLocale`).

### Vues : `src/templates/<slug>/`

- Une vue par page, exportée sous la forme `<Page>View({ locale }: { locale: TemplateLocale })`.
- Au début : `const copy = getTemplateCopy(<slug>, locale)` et `const href = (path: string) => templateHref(locale, path)`.
- Aucun texte en dur : tout vient de `copy`.
- Un seul `as="h1"` par vue (`TemplateHeading`).
- `shell.tsx` enveloppe `TemplateShell` : marque, navigation, CTA, pied de page. Il prend `locale` seulement : le sélecteur FR / EN s'affiche quand la définition a une copie anglaise (`hasTemplateLocale(<slug>, "en")`), donc jamais de lien vers une page qui n'existe pas. Le défaut de `localeSwitch` dans `TemplateShell` est `false`.

**Icônes.** Un élément de liste qui a une icône porte une clé dans la copie : `{ icon: "cpu", title: "…", text: "…" }`. La clé est une donnée, pas un texte : `WidenLiterals` la laisse littérale, donc la copie anglaise doit porter la même clé que la française (sinon `type-check` échoue). La vue la résout avec une table typée, dans `parts.tsx` :

```ts
export type DentisteIconKey = TemplateIconKey<DentisteCopy>; // dans la définition
export const ICONS: Record<DentisteIconKey, LucideIcon> = { cpu: Cpu, … };
```

`TemplateIconKey` (`types.ts`) collecte les valeurs des propriétés `icon` de toute la copie. La table doit donc avoir une entrée par clé utilisée, et une clé inconnue (faute de frappe dans la copie) échoue au `type-check`. Plus d'association par position.

### Routes minces

Route FR, `src/app/(demos)/dentiste/soins/page.tsx` :

```tsx
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";
import { SoinsView } from "@/templates/dentiste/soins";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "soins");

export default function Page() {
  return <SoinsView locale="fr" />;
}
```

Route EN, `src/app/(demos-en)/en/dentiste/page.tsx` (même vue) :

```tsx
import { HomeView } from "@/templates/dentiste/home";
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

export const metadata = buildTemplatePageMetadata(dentiste, "en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
```

Layout, les deux enveloppes (FR : `(demos)/dentiste/layout.tsx`, EN : `(demos-en)/en/dentiste/layout.tsx`) :

```tsx
// FR
<DentisteShell locale="fr">{children}</DentisteShell>
// EN
<DentisteShell locale="en">{children}</DentisteShell>
```

Pas de prop `localeSwitch` dans les layouts : le shell du template la déduit de la définition.

## 3. Le kit : `src/components/template-kit/`

Imports : le barrel `@/components/template-kit` (`index.ts`) exporte le shell, les sections, les liens, les cartes et les helpers d'URL. **`TemplateMedia` et `TemplateDemoForm` n'y sont pas** : ils s'importent par module (`@/components/template-kit/media`, `@/components/template-kit/demo-form`). Raison : le barrel tire tout ce qu'il exporte ; un composant client comme `TemplateDemoForm` alourdirait le JS de chaque page qui ne contient pas de formulaire. Composants serveur, stylés par les tokens `tpl-*` ; seuls la navigation et le sélecteur de langue du shell, et `TemplateDemoForm`, ont une partie client. Les composants client du kit utilisent `clsx` et non `cn()` (tailwind-merge pèse dans le JS client) : ils n'ont pas besoin de fusionner des classes. Règle : un nouveau besoin visuel devient d'abord un token ; il ne devient une prop que s'il change le DOM, jamais un nom de template.

| Composant | Rôle | Props clés |
|---|---|---|
| `TemplateShell` | Coquille : racine `[data-template]` (thème, fond, texte), lien d'évitement, en-tête collant (trois formes, voir « En-têtes » ci-dessous) avec navigation et CTA, bandeau `topBar`, pied de page. | `locale`, `brand` (`href`, `name`, `tagline?`, `mark?`), `nav` (`{ href, label }[]`), `cta?`, `localeSwitch?` (`false` par défaut), `theme?`, `header?` (`bar` par défaut / `floating` / `rail`), `headerTone?` (`surface` par défaut / `inverse` : carte `floating` sombre, CTA inversé), `topBar?`, `topBarTone?` (`raised` par défaut / `tint` / `accent` / `inverse`), `railNumbers?`, `railFooter?`, `footer?`, `mobileActions?` (barre d'actions mobile), `mobileActionsTone?` (`surface` par défaut / `accent`), `mobileActionsHideAt?` (`xl` par défaut / `md`), `mobileActionsLabel?` |
| `TemplateLocaleSwitch` | Sélecteur FR / EN, pointe vers la même page dans l'autre langue (utilisé par le shell). Nom de la navigation localisé (« Langue » / « Language »), nom accessible de chaque lien « FR Français » / « EN English » (le texte visible fait partie du nom). | `locale` |
| `TemplateSection` | Section avec en-tête optionnel (sans `title`, aucun en-tête). | `title?`, `eyebrow?`, `description?`, `as?` (`h1`/`h2`/`h3`), `titleScale?`, `density?` (`compact`/`regular`/`spacious`), `tone?` (`surface`/`raised`/`tint`/`inverse`/`bare`), `width?` (`wide`/`narrow`), `align?`, `id?` |
| `TemplateHeading` | Titre seul : eyebrow, titre, description (en ligne uniquement). | `title`, `eyebrow?`, `description?`, `as?`, `scale?` (`display`/`title`/`subtitle`), `align?`, `id?` |
| `TemplateLink` | Lien ou bouton-lien. | `href`, `variant?` (`solid`/`outline`/`ghost`/`inverse`), `shape?` (`radius`/`pill`/`square`), `size?` (`sm`/`md`), `icon?`, `external?`, `locale?` (texte lecteur d'écran des liens externes) |
| `TemplateCard` | Carte avec titre optionnel. | `title?`, `titleAs?` (`h2`/`h3`/`h4`), `icon?`, `iconPosition?` (`top` par défaut : au-dessus du titre / `inline` : à gauche du titre, centrée sur lui), `tone?` (`raised` par défaut / `surface` / `tint` / `inverse`), `elevation?` (`flat`/`raised`/`floating`), `interactive?` |
| `TemplatePanel` | Panneau sans titre. | `tone?` (`raised`/`surface`/`tint`/`inverse`) |
| `TemplateMedia` (`…/media`) | Image `next/image` à ratio fixe (`fill`). | `src`, `alt` (obligatoire, `""` si décorative), `ratio` (`1/1`, `4/3`, `3/4`, `3/2`, `2/3`, `16/9`, `9/16`, `21/9`, `5/4`, `4/5`, ou `fill`), `sizes` (obligatoire), `priority?`, `rounded?` (`radius`/`pill`/`none`), `className?` |
| `TemplateHeroMedia` (`…/media`) | Bloc pleine largeur : photo de fond (`next/image` `fill`, `sizes="100vw"`), voile dégradé des tokens `inverse` (78 % en haut, 88 % en bas), contenu par-dessus (`children`) lisible grâce à `data-tone="inverse"`. Composant serveur. | `src`, `alt` (obligatoire, `""` si décorative), `priority?` (héros visible sans défilement), `height?` (`tall` par défaut = `min-h-[72svh]` / `screen` = `min-h-[100svh]` / `auto`), `className?`, `children` |
| `TemplateDemoForm` (`…/demo-form`) | Formulaire de démonstration bilingue, aucune donnée envoyée. Types de champ : `text`, `email`, `tel`, `date`, `select`, `textarea`, `checkbox` (libellé à droite de la case). Bordure des champs à `/60` (contraste d'au moins 3:1). | `fields` (`name`, `label`, `type?`, `options?`, `required?`, `width?`…), `submitLabel`, `locale` |

**En-têtes** (`TemplateShell`, prop `header`) : un seul jeu de slots (`brand`, `nav`, `cta`, `localeSwitch`, `topBar`) pour trois formes.
- `bar` (défaut) : barre collante pleine largeur dans le flux, navigation en ligne à partir de `xl`, bouton de menu en dessous.
- `floating` : carte centrée collante, à `--tpl-header-gap` (0,75 rem) du haut, fond presque opaque (`bg-tpl-surface/95` + flou) et ombre `shadow-tpl-lg`, rayon `--tpl-header-radius` (token de thème `headerRadius` : `9999px` pour une pilule, `0` pour un cadre droit ; repli `--tpl-radius`). Elle **passe au-dessus du premier bloc de la page** : l'en-tête est un bloc collant de hauteur nulle, il ne réserve aucune place. La première section règle donc son padding haut avec le token **`--tpl-header-offset`** (gap + carte, 5,125 rem = 82 px ; vaut `0` pour `bar` et `rail`, donc la même classe sert à tout en-tête) : `pt-[calc(var(--tpl-header-offset)+4rem)]` (`TemplateHeroMedia` : sur le conteneur de son contenu). La carte fait 70 px de haut (`--tpl-header-height` = 4,375 rem : 68 px de contenu + 2 px de bordure) ; un contenu qui la rendrait plus haute (marque sur deux lignes) demande de relever ce token. Menu mobile, focus, sélecteur FR / EN et CTA comme en `bar` ; le panneau du menu est une carte posée sous la carte d'en-tête. Le bandeau de démonstration (`DemoBanner`, `z-50`, non collant) reste au-dessus et défile : l'en-tête ne le recouvre jamais. Navigation en ligne à partir de `xl` (1280 px) : mesuré à 1280 px avec 7 libellés français (dont « Réservation » et « Privatisation »), le CTA « Réserver une table » et le sélecteur FR / EN, la carte ne déborde pas et garde environ 130 px libres de chaque côté de la navigation. Une navigation plus chargée passerait en burger jusqu'à `2xl` en changeant les trois `xl:` de `shell-nav.tsx` (et celui du shell), jamais depuis une vue. L'espacement des liens ne grandit pas à `2xl` : le conteneur plafonne à 1216 / 1280 px, l'élargir faisait toucher la navigation de `/dentiste` (7 liens) au CTA à 1536 px et plus (2 px de marge avant, 36 px après).
- `rail` : à partir de `xl`, colonne gauche collante pleine hauteur (`--tpl-rail-width`, token de thème `railWidth`, 18,125 rem = 290 px) avec marque, texte (`brand.tagline`), navigation verticale, CTA, sélecteur de langue et, en bas, `railFooter` (bloc libre sous une ligne de séparation). `railNumbers` numérote les liens (01, 02… décoratifs, `aria-hidden`). En dessous de `xl` : la barre `bar` habituelle avec son menu. Les deux sont rendus, un seul est affiché : l'autre est en `display: none`, donc une seule navigation et un seul repère `banner` sont exposés aux lecteurs d'écran à chaque largeur. Le contenu vit dans une colonne à droite (`min-w-0 flex-1`), `topBar` en haut de cette colonne.
- `topBar` : bandeau non collant au-dessus de l'en-tête (il défile), aligné sur `SHELL_GUTTER` / `SHELL_WIDTH`. Ses enfants sont rangés en ligne, retour à la ligne, répartis aux deux bouts (`<span>…</span><span>…</span>`, texte `text-tpl-xs`). `topBarTone` : `raised` (fond `--tpl-raised`, bordure basse, texte secondaire), `tint` (idem sur `--tpl-tint`), `accent` (fond accent, texte `accent-ink`) ou `inverse` (fond inverse, `data-tone="inverse"`, les jetons d'encre y sont rebindés).
- **Liens d'ancre** (templates mono-page : `/boulangerie#vitrine`) : un lien de navigation dont le `href` contient `#` ne reçoit jamais `aria-current` (sinon toutes les ancres de la page seraient « courantes »). Une ancre se pose sous l'en-tête collant grâce au `scroll-padding-top` de `globals.css` (voir ci-dessous) : pas de `scroll-mt-*` dans les vues.

**Largeur commune** : l'en-tête du shell et le pied de page de chaque template suivent le motif de `TemplateSection` (padding latéral `px-4 sm:px-6 lg:px-8` sur l'élément pleine largeur, `mx-auto max-w-7xl` sur le bloc intérieur), pour que marque, navigation et pied de page s'alignent au pixel sur le contenu des sections `wide` à toute largeur ; ne jamais poser `max-w-7xl` et le padding sur le même bloc (le contenu perdrait 32 px de chaque côté au-dessus de 1280 px). Dans le shell, la largeur est définie à un seul endroit (`SHELL_GUTTER`, `SHELL_WIDTH` en tête de `shell.tsx`).

**Barre d'actions mobile** (`TemplateShell`) : le template passe son contenu (deux liens côte à côte, ou un bloc plein largeur) dans `mobileActions` ; le shell la rend après le pied de page, en `sticky bottom-0`. Elle n'est pas `fixed` : en fin de page elle se pose sous le pied de page au lieu de le recouvrir, donc il n'y a aucune réserve de padding à ajouter au contenu ni au pied de page (ne pas remettre de `pb-20 xl:pb-0`). `mobileActionsTone` règle l'aspect (`surface` : fond de page à 95 % avec flou, bordure `line`, `flex gap-2 px-4 py-3` ; `accent` : fond accent, bordure d'encre, sans padding, le contenu règle le sien), `mobileActionsHideAt` le point de rupture où elle disparaît (`xl` : la navigation du shell prend le relais ; `md` si le template la garde jusqu'à la tablette). `mobileActionsLabel` pose `role="group"` et son nom accessible.

**Dégagement du focus clavier** (WCAG 2.4.11, focus non masqué) : l'en-tête (`sticky top-0`, 69 px à toutes les largeurs) et la barre d'actions (`sticky bottom-0`, 57 à 86 px selon le template, la langue et le retour à la ligne à 320 px) peuvent masquer l'élément que Tab ou Maj+Tab vient de focaliser. `globals.css` règle donc `scroll-padding` sur `html`, sans JS :
- haut, `bar` : `5rem` (80 px, l'en-tête + 11 px) sur toute page qui contient un `[data-template]` ; vaut aussi pour les ancres `#…` et le lien d'évitement `#contenu` ;
- haut, `floating` : `6rem` (96 px) via `html:has([data-template][data-header="floating"])` : la carte occupe de 12 à 82 px, soit 14 px de marge. Une variable posée sur `[data-template]` n'est pas lisible depuis `html` : si `--tpl-header-gap` ou `--tpl-header-height` changent, relever cette valeur à la main ;
- haut, `rail` : `5rem` sous `xl` (barre habituelle), `1.5rem` à partir de `xl` (`@media (width >= 80rem)`, plus d'en-tête collé en haut, la colonne latérale ne recouvre pas le contenu) ;
- bas : `6rem` (96 px) seulement sous le point de rupture de la barre d'actions, lu dans l'attribut `data-mobile-actions` (`md` ou `xl`, posé par le shell) via `html:has([data-template] > [data-mobile-actions="xl"])` dans une requête `(width < 80rem)` (`48rem` pour `md`).

Le site marketing et les démos écrites à la main n'ont pas de `[data-template]` : aucun effet. Conséquences : pas de `scroll-mt-*` sur une ancre de vue (les deux écarts s'additionneraient ; l'ancre se pose à 80 px sous le haut, 96 px en `floating`). La réserve du bas (6 rem = 96 px) est calée sur la plus haute barre mesurée (85,6 px, deux lignes à 320 px), avec 10 px de marge : une barre qui dépasserait 88 px (5,5 rem) ne laisserait presque plus de marge, relever alors la valeur `6rem` de `globals.css` pour garder au moins 8 px d'écart. Contrôle : Tab puis Maj+Tab sur chaque page à 390 et 768 px (320 px sur l'accueil), 0 focus entièrement masqué ; il reste des champs `textarea` partiellement recouverts (Chrome ne révèle que la ligne du curseur d'un champ texte).

Helpers de liens (purs, utilisables côté client et serveur), plus `TEMPLATE_LOCALES` et le type `TemplateLocale`. Ils vivent dans `src/lib/template-href.ts` (`src/lib/template-metadata.ts` s'en sert, et une lib ne dépend pas de `components/`) ; `href.ts` du kit les réexporte, donc vues, sélecteur de langue et barrel `index.ts` continuent d'importer depuis le kit :
- `templateHref(locale, path)` : `en` préfixe `/en` (`/dentiste#tarifs` devient `/en/dentiste#tarifs`) ; `fr`, URL absolues, ancres et chemins relatifs restent tels quels.
- `switchTemplateLocale(pathname, target)` : équivalent d'une page dans l'autre langue.
- `templateLocaleFromPathname(pathname)` : langue déduite du chemin.

### Tokens `tpl-*`

- Valeurs de repli neutres : bloc `[data-template]` de `src/app/globals.css` (`@layer base`). Noms utilitaires déclarés dans `@theme` du même fichier.
- Un template les surcharge par `style={themeStyle(def.theme)}` (`themeStyle`, `src/lib/template-theme.ts`) sur `[data-template]` : `TemplateShell` le fait via sa prop `theme`.
- Couleurs : `bg-tpl-surface`, `bg-tpl-raised`, `bg-tpl-tint` (troisième fond clair, token facultatif `tint`), `text-tpl-ink`, `text-tpl-ink-muted`, `border-tpl-line`, `bg-tpl-accent`, `text-tpl-accent-ink`, `bg-tpl-inverse`, `text-tpl-inverse-ink`. `text-tpl-eyebrow` : teinte des sur-titres (tokens facultatifs `eyebrow` et `eyebrowInverse`, repli `inkMuted` ; les eyebrow du kit la lisent, un sur-titre écrit dans une vue prend cette classe).
- Forme : `rounded-tpl`, `rounded-tpl-pill`, `shadow-tpl-sm`, `shadow-tpl-lg`.
- Typo : `font-tpl-display`, `font-tpl-text`, `text-tpl-xs` à `text-tpl-3xl`, `leading-tpl-display`, `leading-tpl-body`, `tracking-tpl-eyebrow`.
- Graisse des titres en police d'affichage : token facultatif `fontDisplayWeight` du thème (nombre, ex. `400` ; repli `600`, soit l'ancien `font-semibold`), émis en `--tpl-display-weight`. Les titres du kit (`TemplateHeading` / `TemplateSection`, titre de `TemplateCard`, marque du shell) la lisent. Un titre écrit dans une vue prend la classe **`font-(weight:--tpl-display-weight)`**. Un serif d'affichage sans graisse grasse (Instrument Serif) met `fontDisplayWeight: 400` dans sa définition, plus aucun sélecteur `[&_h1]:font-normal` dans le shell. Pas de `--font-weight-tpl-*` dans `@theme` : il générerait `font-tpl-*`, que `cn()` (tailwind-merge) range parmi les familles de police et qui écraserait `font-tpl-display` ; la forme `font-(weight:…)` est reconnue comme une graisse. Un `[&_h1]:font-extrabold` posé par un template (`electricien`, `coffee-shop`, `reparation-mobile`) reste prioritaire sur le token.
- Césure des titres (`TemplateHeading`) : réservée aux mots de 15 caractères et plus (`hyphenate-limit-chars: 15 4 4` ; élision, apostrophe et ponctuation collées sont comptées), avec `overflow-wrap: anywhere` en filet ; un titre écrit dans une vue ne remet pas `hyphens-auto` seul, sinon « montage » redevient « mon-tage ». WebKit 18 ne connaît pas la propriété : il reste en césure manuelle.
- En-tête : `--tpl-header-offset` (voir « En-têtes »), jetons de thème facultatifs `headerRadius` (rayon de la carte `floating`) et `railWidth` (largeur de la colonne `rail`).
- Rythme : `py-tpl-section`, `max-w-tpl-measure`.
- `cn()` (`src/lib/utils.ts`) est étendu avec `extendTailwindMerge` : il connaît les échelles `tpl-*` (tailles, rayons, ombres, interlignes, espacements), donc `text-tpl-xl` n'écrase pas `text-tpl-ink`. Un `className` passé à `TemplateLink`, `TemplateCard`, `TemplatePanel` ou `TemplateSection` peut ainsi remplacer la taille de texte, le rayon, l'ombre ou le padding par défaut (`className="text-tpl-xl rounded-none p-4"`). À savoir : une taille de texte `text-tpl-*` retire un `leading-*` posé avant elle (la taille porte son propre interligne).

## 4. Checklist : ajouter un template « FR + EN »

- [ ] **Définition** : `src/content/templates/<slug>.ts` (thème oklch, `paths`, copie `fr` `as const`, type `WidenLiterals`, copie `en`).
- [ ] **Vues** : `src/templates/<slug>/<page>.tsx` pour chaque page, `shell.tsx` et la table d'icônes dans `parts.tsx`.
- [ ] **Routes FR** : `src/app/(demos)/<slug>/layout.tsx` et chaque `page.tsx`, avec `buildTemplatePageMetadata(…, "fr", page)`.
- [ ] **Routes EN** : `src/app/(demos-en)/en/<slug>/layout.tsx` et chaque `page.tsx`, avec `"en"`.
- [ ] **Registre, à la naissance** : une entrée dans `TEMPLATES` (`src/content/templates/registry.ts`) en `status: "lab"`, `routed: true`, `locales: ["fr", "en"]`, avec nom, secteur et note admin, et **sans bloc `gallery`** (ni capture, ni copie de galerie : le type l'interdit). Un nouveau template naît bilingue : pas de `englishPending`. L'entrée alimente `DEMO_SLUGS` (`noindex` sur `/<slug>` et `/en/<slug>`) et la page admin (liens FR et EN, « Lab on sitekept.com »). Elle n'entre ni dans la galerie, ni dans les pages métier, ni dans `PATH_MAP`. Ajouter la définition à `Definitions` dans `src/content/templates/registry-checks.ts` : `pnpm type-check` échoue si elle manque ou si ses langues et celles du registre divergent.
- [ ] **Passage en public, après validation de Joseph seulement** : l'entrée passe en `status: "sitekept-public"` (on retire `routed`), avec le bloc `gallery` : capture sous `public/template/`, `featured`, copie de galerie FR + EN. Elle entre alors dans la galerie `/templates` (lien `/en/<slug>` sur la galerie et les pages métier anglaises, via `PATH_MAP`) et dans le type `PublicTemplateSlug` (`demoSlug` des pages métier).
- [ ] **Contrôles**
  - [ ] `pnpm type-check` et `pnpm lint`.
  - [ ] `pnpm build` dans une copie isolée (voir section 7).
  - [ ] Harnais (`scripts/template-harness/`) : routes du template ajoutées à `routes.txt`, snapshot FR (diff attendue vide pour une factorisation pure), snapshot EN relu (aucun français visible, un `<h1>`, un `<title>` anglais), `headers.sh` (`noindex, follow` sur `/<slug>` et `/en/<slug>`, rien sur `/templates`).
  - [ ] Greps dans les fichiers du template (`src/templates/<slug>/`, routes, définition) : 1 `as="h1"` par vue, 0 `[#`, 0 hex, 0 `<img`, 0 `backgroundImage`, 0 nom réel.
- [ ] **Captures** dans le navigateur intégré : 390, 768 et 1440 px, en FR et en EN, sur l'accueil, une sous-page et le contact. Console sans erreur.

## 5. Règles de contenu

- Entreprises fictives uniquement. Aucun texte, image ni coordonnée de vrais clients ; aucun nom, domaine d'e-mail ou lieu qui permette de les identifier.
- Coordonnées manifestement factices : e-mail en `.example`, numéro de la plage factice (`01 99 00 00 xx` pour `dentiste`).
- Version anglaise : traduction neutre de la même entreprise. Marque « Your business », e-mail `contact@example.com`, numéro factice conservé, prix en euros.
- Les images viennent de `public/` ou d'une source libre de droits, passent par `TemplateMedia`, avec un `alt` traduit. Chaque photo est regardée à 2400 px, avec un zoom sur les objets (livres, montres, outils, étiquettes, cadres) : aucune marque, texte lisible ni visage reconnaissable. Une photo ne sert qu'à un template.
- Titres de page (lot B, convention à confirmer pour les autres) : « Page - Votre entreprise » / « Page - Your business », et « Votre entreprise - <activité> » pour l'accueil.
- Anglais des États-Unis, sans calque du français.

## 6. Intake 21st.dev (sections et éléments)

1. **Chercher** un composant ou un template sur 21st.dev.
2. **Valider** la licence et les dépendances. Seule dépendance runtime admise : `motion`. Toute autre dépendance : on ne retient pas le composant, ou on le réécrit sans elle.
3. **Récupérer le code**, en comptant le quota : l'offre gratuite donne 2 récupérations de code par jour. Décision du 20/11 : on reste sur l'offre gratuite, les récupérations vont aux sections clés et réutilisables, le reste se construit sur le kit. La recherche (`search`) est gratuite ; les « templates de site » 21st.dev ne sont pas récupérables par l'outil, seuls les composants le sont.
4. **Réécrire** sur le kit : classes `tpl-*` (aucun hex ni valeur de couleur en dur), textes dans la copie FR et EN, images via `TemplateMedia` (`next/image`, import par module), liens via `templateHref` et `TemplateLink`.
5. **Vérifier** comme n'importe quel template (checklist, section 4).

### Éléments 21st.dev déjà intégrés

Ils vivent dans `src/components/template-kit/vendor/<nom>/` avec un `SOURCE.md` (URL, auteur, licence MIT conservée dans `LICENSE` et rappelée en tête du composant, date, id 21st, modifications), ne sont pas dans le barrel `index.ts` et s'importent par module.

- **`testimonials-marquee`** (« Testimonials with Marquee », serafimcloud) : bande d'avis défilante, composant serveur, animation CSS (`--animate-tpl-marquee` dans `globals.css`).
  - Import : `import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee"`.
  - Usage : dans une `TemplateSection` (titre et description viennent de la section), `<TestimonialsMarquee label=… items=… />` avec `items` de la forme `{ quote, name, detail?, rating?, ratingLabel? }`. Une note exige son `ratingLabel` (copie FR et EN). Pas d'avatar photo : des initiales.
  - `rating` est un `number` (arrondi et borné à 1..5 par le composant, qui exporte `clampTestimonialRating(value)` pour une vue qui écrit la note en toutes lettres) : plus de `toRating` à recopier dans chaque template.
  - Réglages : `tone` (`surface`, `raised` ou `inverse`, à accorder au fond de la section), `starTone` (`accent` par défaut, `ink` quand l'accent est illisible sur la carte, ex. un jaune sur fond clair), `durationSeconds` (40 par défaut, pour un tour complet : à augmenter avec le nombre d'avis). Prévoir 5 avis ou plus. Pause au survol et au focus. En mouvement réduit : pas d'animation, cartes à la ligne.
- **`hover-expand-gallery`** (« Hover Expand Gallery », kedhareswer) : galerie à panneaux qui s'ouvrent au survol (rangée au-dessus de `lg`, accordéon en dessous), composant client (`clsx`).
  - Import : `import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery"`.
  - Usage : `<HoverExpandGallery label=… sizes="(min-width: 1024px) 520px, 100vw" items=… />` avec `items` de la forme `{ title, meta?, image: { src, alt } }` (tous les textes viennent de la copie). Images via `next/image` ; `priority` pour l'image visible sans défilement.
  - Réglages : `height` (`36rem` par défaut sur desktop), `width` (`capped` par défaut : le panneau ouvert plafonne à `maxOpenWidth` et la rangée se centre, plus étroite que le contenu ; `fill` : le panneau ouvert prend tout l'espace laissé par les rails, la rangée s'aligne sur les bords gauche et droit des autres blocs de la section, avec `sizes="(min-width: 1024px) 1100px, 100vw"`). Sous `lg`, accordéon dans les deux cas : le titre d'un panneau replié s'affiche en entier (à la ligne si besoin), le `meta` n'apparaît qu'à l'ouverture (il reste lu par les lecteurs d'écran). Les titres sont des boutons `aria-expanded`. Coût : environ 6 kB de JS client sur la page qui l'utilise.
- **`image-compare`** (« Image Compare », aadixc0de) : curseur avant / après (réalisations d'artisans : électricien, réparation mobile, plombier-serrurier, garage), composant client (`clsx`, sans `motion`, sans animation). Aucun template ne l'utilise encore : il faut une vraie paire avant / après, même lieu et même cadrage, jamais deux photos sans rapport.
  - Import : `import { ImageCompare } from "@/components/template-kit/vendor/image-compare"`.
  - Usage : `<ImageCompare before={{ src, alt }} after={{ src, alt }} beforeLabel=… afterLabel=… handleLabel=… valueText=… ratio="4/3" sizes="(min-width: 1024px) 560px, 100vw" />`. Tous les textes viennent de la copie FR et EN : `beforeLabel` / `afterLabel` (pastilles visibles « Avant » / « Après »), `handleLabel` (nom accessible de la poignée, ex. « Comparer avant et après »), `valueText` facultatif avec les jetons `{before}` et `{after}` (ex. « {before} % avant, {after} % après »), `alt` de chaque image (qui peut dire ce qui change). `ratio` est le même enum que `TemplateMedia`, `sizes` est obligatoire, `priority` pour une image visible sans défilement.
  - Réglages : `defaultPosition` (50, part de l'image « avant » visible au départ), `step` (1, pas des flèches ; Maj = ×10). Poignée `role="slider"` : flèches, PageUp / PageDown, Début (tout « après »), Fin (tout « avant »), glisser à la souris ou au doigt (le défilement vertical reste possible), clic ou tap pour y sauter. Pas de mode vertical, pas de `dir="rtl"`, pas de rappel (une fonction en prop interdit l'appel depuis une vue serveur). Mettre deux photos du même cadre, de même format. Coût : environ 3,7 kB de JS minifié (1,7 kB gzip) sur la page qui l'utilise, `clsx` et `next/image` étant déjà là.
- **`price-list`** (« Restaurant Menu Block », olewandowski1) : carte ou liste de prix à points de conduite (carte d'un coffee shop, soins d'un spa, forfaits d'un garage, tarifs d'un plombier, honoraires d'un expert-comptable), composant serveur, aucun JS client.
  - Import : `import { PriceList } from "@/components/template-kit/vendor/price-list"`.
  - Usage : dans une `TemplateSection` (titre et description viennent de la section), `<PriceList groups=… />` avec `groups` de la forme `{ title, items: { name, detail?, price, note? }[] }[]`. `price` est une chaîne déjà formatée par la copie, locale comprise (« 7 € », « dès 89 € ») : le composant n'ajoute ni devise ni unité. `note` est une étiquette facultative en texte (« Végétarien », « Sur devis »). Les mentions de bas de carte (allergènes, service compris) restent dans la vue.
  - Réglages : `titleAs` (`h2`, `h3` ou `h4`, `h3` par défaut, à régler sur le titre de la section pour garder une hiérarchie sans saut), `columns` (`1` par défaut, ou `2` à partir de `md`). Un groupe sans élément n'est pas rendu.

## 7. Vérification

- **Harnais** : `scripts/template-harness/` (`routes.txt`, `snapshot.mjs`, `headers.sh`, `README.md`). Snapshot du texte rendu de chaque route, comparé à une baseline prise sur un commit de référence, plus contrôle des en-têtes `X-Robots-Tag`. Procédure complète dans son `README.md` ; raccourcis `pnpm harness:snapshot <url> <dossier>` et `pnpm harness:headers <url>`. Les snapshots s'écrivent hors du dépôt.
- **Jamais de build dans le dépôt** : `pnpm build` se lance dans une copie isolée (`rsync` sans `.git`, `.next`, `node_modules` ni `.env*`, puis lien symbolique vers `node_modules`). Et on ne tue jamais un processus qu'on n'a pas lancé.
- `pnpm type-check` et `pnpm lint` se lancent dans le dépôt.
- Poids JS : à la fin du `pnpm build` isolé, relever le « First Load JS » des routes du template. `dentiste` est à 108 kB ; un écart de plusieurs kB vient presque toujours d'un import du barrel, de `cn()` dans un composant client, ou de `TemplateDemoForm` importé là où il n'est pas utilisé.

## 8. Migrer un template existant

Pour passer une démo écrite à la main (hex en dur, `*-ui.tsx`, formulaire client maison) sur le kit, avec sa version anglaise. Modèle : `dentiste`. Le principe : **le rendu français ne change pas**, à l'exception des corrections voulues.

1. **Baseline avant de toucher au code.** Ajouter les routes du template à `routes.txt` s'il en manque, puis prendre un snapshot du commit de référence (README du harnais). Repérer ce que la démo contient : pages, textes, images, formulaires, composants locaux (`*-ui.tsx`), couleurs en dur.
2. **Extraire la copie à rendu FR constant.** Copier chaque texte visible tel quel dans `const fr = { … } as const` de `src/content/templates/<slug>.ts` : ponctuation, apostrophes (`’` ou `'`), espaces insécables, majuscules, `alt`. Pas de reformulation à cette étape : une copie qui change le texte fausse la diff. Ajouter le bloc `meta` (titre et description par page) et les `paths`. Les vues lisent `getTemplateCopy(def, locale)`.
3. **Hex vers tokens oklch.** Convertir la palette de la démo en oklch dans `theme` (`ink`, `surface`, `raised`, `accent`, `accentInk`, `inverse`, `inverseInk`, et au besoin `inkMuted`, `line`). Remplacer chaque `[#xxxxxx]`, `rgb()`, `bg-[…]` par une classe `tpl-*`. Une couleur sans token devient un token (règle du kit), jamais un hex dans la vue.
4. **Supprimer l'ancien `*-ui.tsx`.** Remplacer ses composants (`*Section`, `*Card`, `*Button`…) par `TemplateSection`, `TemplateHeading`, `TemplateCard`, `TemplatePanel`, `TemplateLink`. Une fois la dernière référence migrée (`grep` de l'import), supprimer le fichier. Les éléments propres au template restent dans `src/templates/<slug>/parts.tsx`.
5. **Formulaires vers `TemplateDemoForm`.** Champs et libellés dans la copie, import par module (`@/components/template-kit/demo-form`). Supprimer le composant de formulaire client et son action éventuelle : une démo n'envoie rien.
6. **Images vers `TemplateMedia`.** Import par module (`@/components/template-kit/media`), `alt` dans la copie (`""` si décorative), `ratio` et `sizes` obligatoires, `priority` pour l'image visible sans défilement seulement. Plus de `<img>` ni de `backgroundImage`. Un domaine distant se déclare dans `images.remotePatterns` de `next.config.ts`.
7. **Vues, routes FR, shell.** Vues dans `src/templates/<slug>/` (un seul `as="h1"` par vue, icônes par clé `icon`), `shell.tsx`, routes FR minces avec `buildTemplatePageMetadata(def, "fr", page)`.
8. **Version anglaise.** Copie `en` typée par le type dérivé (même clés, mêmes longueurs, mêmes clés `icon`), routes EN sous `src/app/(demos-en)/en/<slug>/`, layout EN. Marque « Your business », e-mail `contact@example.com`.
9. **`routes.txt`.** Une ligne `demo` par route FR et une ligne `demo-en` par route EN, y compris les pages de détail. Ajouter le slug à `headers.sh` (FR et EN).
10. **Registre.** Passer `locales` à `["fr", "en"]` et retirer `englishPending` : les liens anglais, la page admin et les libellés des pages métier suivent (section 1, « Liens vers les démos »). Ajouter la définition à `Definitions` (`registry-checks.ts`).
11. **Vérifier.** `pnpm type-check`, `pnpm lint`, build isolé, snapshot, `headers.sh`, relevé du First Load JS.

**Diff de snapshot attendue** (baseline FR contre snapshot après migration) :
- Fichiers FR : vide, sauf ce qui est voulu et listé : un `<h1>` ajouté là où il manquait (`H1: 1`), un `<title>` ou une description propres à la page, `ROBOTS: noindex, follow` à la place d'un `index, follow` contradictoire, et, pour un template qui a sa version anglaise, le sélecteur de langue (`FR Français` / `EN English`, deux fois par page : en-tête et menu mobile). Toute autre ligne différente est une régression de texte.
- Fichiers EN (`en__<slug>*.txt`) : n'existent pas dans la baseline. Les relire : aucun français visible, un `<h1>`, un `<title>` anglais, `LANG: en`.
- Les snapshots ne voient ni les classes ni les couleurs : le rendu visuel se vérifie par les captures (390, 768, 1440 px).
