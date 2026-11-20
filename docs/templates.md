# Templates de démonstration : guide

Comment créer, migrer et vérifier un template Sitekept. Le code fait foi : en cas d'écart avec ce guide, c'est le guide qu'on corrige. Modèle de référence : `dentiste`.

État : le kit, le socle anglais et `dentiste` (FR + EN) sont en place. Les 12 autres démos sont encore des micro-sites écrits à la main, migrés lot par lot. Le registre unique (phase 2) n'existe pas encore.

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
- `DEMO_SLUGS` = `PUBLIC_TEMPLATE_SLUGS` (issus de `sitekeptPublicSlugs` dans `src/content/admin-template-catalog.ts`) + `UNLISTED_DEMO_SLUGS` (`je`, `avocate-tel-aviv`). Un nouveau template doit figurer dans l'une des deux listes, sinon il serait indexable.

### Métadonnées

`buildTemplatePageMetadata(def, locale, page)` (`src/lib/template-metadata.ts`) lit `copy[locale].meta[page]` et renvoie :
- `title` et `description` dans la langue de la page ;
- `robots: { index: false, follow: true }` (aligné sur l'en-tête du middleware) ;
- `alternates.languages` avec `fr`, `en` et `x-default` (le français), dès que `def.copy.en` existe. Pas de `canonical`.

Les démos restent hors du sitemap (`src/app/sitemap.ts`).

## 2. Squelette d'un template

```
src/content/templates/<slug>.ts            définition : thème, chemins, copie FR + EN
src/app/(demos)/<slug>/
  layout.tsx                               enveloppe du shell, locale="fr"
  page.tsx, <page>/page.tsx                routes FR minces
  _views/shell.tsx                         shell du template (partagé FR/EN)
  _views/<page>.tsx                        une vue par page (partagées FR/EN)
src/app/(demos-en)/en/<slug>/
  layout.tsx                               enveloppe du shell, locale="en"
  page.tsx, <page>/page.tsx                routes EN minces
```

### Définition : `src/content/templates/<slug>.ts`

- `theme` : tokens `TemplateThemeTokens` (`src/lib/template-theme.ts`), couleurs en oklch. Obligatoires : `ink`, `surface`, `raised`, `accent`, `accentInk`, `inverse`, `inverseInk`. Facultatifs : `inkMuted`, `line`, `radius`, `radiusPill`, `fontDisplay`, `fontText`, `shadowSm`, `shadowLg`.
- `paths` : chemin français de chaque page, indexé par clé de page (`home`, `soins`…). Les liens anglais s'en déduisent avec `templateHref`.
- Copie française `const fr = { … } as const;` : tout ce qui est visible (marque, navigation, CTA, sections, formulaires, `alt`, bloc `meta`).
- Type dérivé : `export type <Slug>Copy = WidenLiterals<typeof fr>;` (`src/content/templates/types.ts`).
- Copie anglaise obligatoire : `const en: <Slug>Copy = { … };`. Une clé manquante ou une liste de longueur différente fait échouer `pnpm type-check`.
- Export : `export const <slug>: TemplateDefinition<"<slug>", <Slug>Copy> = { slug, theme, paths, copy: { fr, en } };`

Le bloc `meta` de la copie (`Record<page, { title, description }>`) est le contrat minimal lu par le kit (`TemplateCopyBase`). Un template sans version anglaise se déclare avec un troisième paramètre : `TemplateDefinition<"<slug>", Copy, "fr">`. Les nouveaux templates naissent bilingues.

### Vues : `_views/`

- Une vue par page, exportée sous la forme `<Page>View({ locale }: { locale: TemplateLocale })`.
- Au début : `const copy = getTemplateCopy(<slug>, locale)` et `const href = (path: string) => templateHref(locale, path)`.
- Aucun texte en dur : tout vient de `copy`. Les icônes sont associées aux éléments d'une liste par position.
- Un seul `as="h1"` par vue (`TemplateHeading`).
- `_views/shell.tsx` enveloppe `TemplateShell` : marque, navigation, CTA, pied de page. Il prend `locale` et `localeSwitch`.

### Routes minces

Route FR, `src/app/(demos)/dentiste/soins/page.tsx` :

```tsx
import { dentiste } from "@/content/templates/dentiste";
import { buildTemplatePageMetadata } from "@/lib/template-metadata";

import { SoinsView } from "../_views/soins";

export const metadata = buildTemplatePageMetadata(dentiste, "fr", "soins");

export default function Page() {
  return <SoinsView locale="fr" />;
}
```

Route EN, `src/app/(demos-en)/en/dentiste/page.tsx` (la vue est importée depuis le dossier FR) :

```tsx
import { HomeView } from "@/app/(demos)/dentiste/_views/home";
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
<DentisteShell locale="fr" localeSwitch>{children}</DentisteShell>
// EN
<DentisteShell locale="en" localeSwitch>{children}</DentisteShell>
```

`localeSwitch` affiche le sélecteur FR / EN du header. Il vaut `false` tant que la version anglaise n'existe pas.

## 3. Le kit : `src/components/template-kit/`

Import unique : `@/components/template-kit` (`index.ts`). Composants serveur, stylés par les tokens `tpl-*` ; seuls la navigation et le sélecteur de langue du shell, et `TemplateDemoForm`, ont une partie client. Règle : un nouveau besoin visuel devient d'abord un token ; il ne devient une prop que s'il change le DOM, jamais un nom de template.

| Composant | Rôle | Props clés |
|---|---|---|
| `TemplateShell` | Coquille : racine `[data-template]` (thème, fond, texte), lien d'évitement, header sticky avec navigation et CTA, pied de page. | `locale`, `brand` (`href`, `name`, `tagline?`, `mark?`), `nav` (`{ href, label }[]`), `cta?`, `localeSwitch?`, `theme?`, `footer?` |
| `TemplateLocaleSwitch` | Sélecteur FR / EN, pointe vers la même page dans l'autre langue (utilisé par le shell). | `locale` |
| `TemplateSection` | Section avec en-tête optionnel (sans `title`, aucun en-tête). | `title?`, `eyebrow?`, `description?`, `as?` (`h1`/`h2`/`h3`), `titleScale?`, `density?` (`compact`/`regular`/`spacious`), `tone?` (`surface`/`raised`/`inverse`/`bare`), `width?` (`wide`/`narrow`), `align?`, `id?` |
| `TemplateHeading` | Titre seul : eyebrow, titre, description (en ligne uniquement). | `title`, `eyebrow?`, `description?`, `as?`, `scale?` (`display`/`title`/`subtitle`), `align?`, `id?` |
| `TemplateLink` | Lien ou bouton-lien. | `href`, `variant?` (`solid`/`outline`/`ghost`/`inverse`), `shape?` (`radius`/`pill`/`square`), `size?` (`sm`/`md`), `icon?`, `external?`, `locale?` (texte lecteur d'écran des liens externes) |
| `TemplateCard` | Carte avec titre optionnel. | `title?`, `titleAs?` (`h2`/`h3`/`h4`), `elevation?` (`flat`/`raised`/`floating`), `interactive?` |
| `TemplatePanel` | Panneau sans titre. | `tone?` (`raised`/`surface`) |
| `TemplateMedia` | Image `next/image` à ratio fixe (`fill`). | `src`, `alt` (obligatoire, `""` si décorative), `ratio` (`1/1`, `4/3`, `3/4`, `3/2`, `2/3`, `16/9`, `9/16`, `21/9`, `5/4`, `4/5`), `sizes` (obligatoire), `priority?`, `rounded?` (`radius`/`pill`/`none`) |
| `TemplateDemoForm` | Formulaire de démonstration bilingue, aucune donnée envoyée. | `fields` (`name`, `label`, `type?`, `options?`, `required?`, `width?`…), `submitLabel`, `locale` |

Helpers exportés par `href.ts` (purs, utilisables côté client et serveur), plus `TEMPLATE_LOCALES` et le type `TemplateLocale` :
- `templateHref(locale, path)` : `en` préfixe `/en` (`/dentiste#tarifs` devient `/en/dentiste#tarifs`) ; `fr`, URL absolues, ancres et chemins relatifs restent tels quels.
- `switchTemplateLocale(pathname, target)` : équivalent d'une page dans l'autre langue.
- `templateLocaleFromPathname(pathname)` : langue déduite du chemin.

### Tokens `tpl-*`

- Valeurs de repli neutres : bloc `[data-template]` de `src/app/globals.css` (`@layer base`). Noms utilitaires déclarés dans `@theme` du même fichier.
- Un template les surcharge par `style={themeStyle(def.theme)}` (`themeStyle`, `src/lib/template-theme.ts`) sur `[data-template]` : `TemplateShell` le fait via sa prop `theme`.
- Couleurs : `bg-tpl-surface`, `bg-tpl-raised`, `text-tpl-ink`, `text-tpl-ink-muted`, `border-tpl-line`, `bg-tpl-accent`, `text-tpl-accent-ink`, `bg-tpl-inverse`, `text-tpl-inverse-ink`.
- Forme : `rounded-tpl`, `rounded-tpl-pill`, `shadow-tpl-sm`, `shadow-tpl-lg`.
- Typo : `font-tpl-display`, `font-tpl-text`, `text-tpl-xs` à `text-tpl-3xl`, `leading-tpl-display`, `leading-tpl-body`, `tracking-tpl-eyebrow`.
- Rythme : `py-tpl-section`, `max-w-tpl-measure`.
- `cn()` (`src/lib/utils.ts`) est étendu avec `extendTailwindMerge` : il connaît les échelles `tpl-*` (tailles, rayons, ombres, interlignes, espacements), donc `text-tpl-xl` n'écrase pas `text-tpl-ink`.

## 4. Checklist : ajouter un template « FR + EN »

- [ ] **Définition** : `src/content/templates/<slug>.ts` (thème oklch, `paths`, copie `fr` `as const`, type `WidenLiterals`, copie `en`).
- [ ] **Vues** : `_views/<page>.tsx` pour chaque page et `_views/shell.tsx`.
- [ ] **Routes FR** : `src/app/(demos)/<slug>/layout.tsx` et chaque `page.tsx`, avec `buildTemplatePageMetadata(…, "fr", page)`.
- [ ] **Routes EN** : `src/app/(demos-en)/en/<slug>/layout.tsx` et chaque `page.tsx`, avec `"en"`.
- [ ] **`DEMO_SLUGS`** : slug ajouté à `sitekeptPublicSlugs` (`src/content/admin-template-catalog.ts`) ou à `UNLISTED_DEMO_SLUGS` (`src/lib/public-template-routes.ts`).
- [ ] **Registre** : à venir (phase 2). Chaque entrée portera `locales`, et un contrôle échouera si un template routé n'a pas `["fr", "en"]`. D'ici là, rien à faire.
- [ ] **Contrôles**
  - [ ] `pnpm type-check` et `pnpm lint`.
  - [ ] `pnpm build` dans une copie isolée (voir section 7).
  - [ ] Harnais : snapshot FR (diff attendue vide pour une factorisation pure), snapshot EN relu (aucun français visible, un `<h1>`, un `<title>` anglais), `headers.sh` (`noindex, follow` sur `/<slug>` et `/en/<slug>`, rien sur `/templates`).
  - [ ] Greps dans les fichiers du template (`_views/`, routes, définition) : 1 `as="h1"` par vue, 0 `[#`, 0 hex, 0 `<img`, 0 `backgroundImage`, 0 nom réel.
- [ ] **Captures** dans le navigateur intégré : 390, 768 et 1440 px, en FR et en EN, sur l'accueil, une sous-page et le contact. Console sans erreur.

## 5. Règles de contenu

- Entreprises fictives uniquement. Aucun texte, image ni coordonnée de vrais clients ; aucun nom, domaine d'e-mail ou lieu qui permette de les identifier.
- Coordonnées manifestement factices : e-mail en `.example`, numéro de la plage factice (`01 99 00 00 xx` pour `dentiste`).
- Version anglaise : traduction neutre de la même entreprise. Marque « Your business », e-mail `contact@example.com`, numéro factice conservé, prix en euros.
- Les images viennent de `public/` ou d'une source libre de droits, passent par `TemplateMedia`, avec un `alt` traduit.

## 6. Intake 21st.dev (sections et éléments)

1. **Chercher** un composant ou un template sur 21st.dev.
2. **Valider** la licence et les dépendances. Seule dépendance runtime admise : `motion`. Toute autre dépendance : on ne retient pas le composant, ou on le réécrit sans elle.
3. **Récupérer le code**, en comptant le quota : l'offre gratuite donne 2 récupérations de code par jour (décision en attente : offre payante, ou récupérations réservées aux sections clés).
4. **Réécrire** sur le kit : classes `tpl-*` (aucun hex ni valeur de couleur en dur), textes dans la copie FR et EN, images via `TemplateMedia` (`next/image`), liens via `templateHref` et `TemplateLink`.
5. **Vérifier** comme n'importe quel template (checklist, section 4).

## 7. Vérification

- **Harnais** : snapshot des routes (`routes.txt`, `snapshot.mjs`), contrôle des en-têtes (`headers.sh`) et baseline `before/`. Il vit dans le scratchpad de la session, qui peut être vidé : sa description et la procédure de reconstruction sont dans le plan de refonte des templates, conservé hors du dépôt (section « Vérification »). Ne pas recopier ses chemins temporaires ici.
- **Jamais de build dans le dépôt** : `pnpm build` se lance dans une copie isolée (`rsync` sans `.git`, `.next`, `node_modules` ni `.env*`, puis lien symbolique vers `node_modules`). Et on ne tue jamais un processus qu'on n'a pas lancé.
- `pnpm type-check` et `pnpm lint` se lancent dans le dépôt.
