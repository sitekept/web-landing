# Templates de démonstration : guide

Comment créer, migrer et vérifier un template Sitekept. Le code fait foi : en cas d'écart avec ce guide, c'est le guide qu'on corrige. Modèle de référence : `dentiste`.

État : le kit, le socle anglais et `dentiste` (FR + EN) sont en place. Les 12 autres démos sont encore des micro-sites écrits à la main, migrés lot par lot. Le registre unique (`src/content/templates/registry.ts`) liste tous les templates.

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
- `DEMO_SLUGS` se dérive du registre (`src/content/templates/registry.ts`) : `PUBLIC_TEMPLATE_SLUGS` (templates de statut `sitekept-public`) + `nonTemplateDemos` (`je`, `avocate-tel-aviv` : servis ici mais pas des templates). Un nouveau template déclaré dans le registre est donc `noindex` sans autre étape.

### Métadonnées

`buildTemplatePageMetadata(def, locale, page)` (`src/lib/template-metadata.ts`) lit `copy[locale].meta[page]` et renvoie :
- `title` et `description` dans la langue de la page ;
- `robots: { index: false, follow: true }` (aligné sur l'en-tête du middleware) ;
- `alternates.languages` avec `fr`, `en` et `x-default` (le français), dès que `def.copy.en` existe. Pas de `canonical`.

Les démos restent hors du sitemap (`src/app/sitemap.ts`).

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

- `theme` : tokens `TemplateThemeTokens` (`src/lib/template-theme.ts`), couleurs en oklch. Obligatoires : `ink`, `surface`, `raised`, `accent`, `accentInk`, `inverse`, `inverseInk`. Facultatifs : `inkMuted`, `line`, `radius`, `radiusPill`, `fontDisplay`, `fontText`, `shadowSm`, `shadowLg`.
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
| `TemplateShell` | Coquille : racine `[data-template]` (thème, fond, texte), lien d'évitement, header sticky avec navigation et CTA, pied de page. | `locale`, `brand` (`href`, `name`, `tagline?`, `mark?`), `nav` (`{ href, label }[]`), `cta?`, `localeSwitch?` (`false` par défaut), `theme?`, `footer?` |
| `TemplateLocaleSwitch` | Sélecteur FR / EN, pointe vers la même page dans l'autre langue (utilisé par le shell). Nom de la navigation localisé (« Langue » / « Language »), nom accessible de chaque lien « FR Français » / « EN English » (le texte visible fait partie du nom). | `locale` |
| `TemplateSection` | Section avec en-tête optionnel (sans `title`, aucun en-tête). | `title?`, `eyebrow?`, `description?`, `as?` (`h1`/`h2`/`h3`), `titleScale?`, `density?` (`compact`/`regular`/`spacious`), `tone?` (`surface`/`raised`/`inverse`/`bare`), `width?` (`wide`/`narrow`), `align?`, `id?` |
| `TemplateHeading` | Titre seul : eyebrow, titre, description (en ligne uniquement). | `title`, `eyebrow?`, `description?`, `as?`, `scale?` (`display`/`title`/`subtitle`), `align?`, `id?` |
| `TemplateLink` | Lien ou bouton-lien. | `href`, `variant?` (`solid`/`outline`/`ghost`/`inverse`), `shape?` (`radius`/`pill`/`square`), `size?` (`sm`/`md`), `icon?`, `external?`, `locale?` (texte lecteur d'écran des liens externes) |
| `TemplateCard` | Carte avec titre optionnel. | `title?`, `titleAs?` (`h2`/`h3`/`h4`), `elevation?` (`flat`/`raised`/`floating`), `interactive?` |
| `TemplatePanel` | Panneau sans titre. | `tone?` (`raised`/`surface`) |
| `TemplateMedia` (`…/media`) | Image `next/image` à ratio fixe (`fill`). | `src`, `alt` (obligatoire, `""` si décorative), `ratio` (`1/1`, `4/3`, `3/4`, `3/2`, `2/3`, `16/9`, `9/16`, `21/9`, `5/4`, `4/5`), `sizes` (obligatoire), `priority?`, `rounded?` (`radius`/`pill`/`none`) |
| `TemplateDemoForm` (`…/demo-form`) | Formulaire de démonstration bilingue, aucune donnée envoyée. Bordure des champs à `/60` (contraste d'au moins 3:1). | `fields` (`name`, `label`, `type?`, `options?`, `required?`, `width?`…), `submitLabel`, `locale` |

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
- `cn()` (`src/lib/utils.ts`) est étendu avec `extendTailwindMerge` : il connaît les échelles `tpl-*` (tailles, rayons, ombres, interlignes, espacements), donc `text-tpl-xl` n'écrase pas `text-tpl-ink`. Un `className` passé à `TemplateLink`, `TemplateCard`, `TemplatePanel` ou `TemplateSection` peut ainsi remplacer la taille de texte, le rayon, l'ombre ou le padding par défaut (`className="text-tpl-xl rounded-none p-4"`). À savoir : une taille de texte `text-tpl-*` retire un `leading-*` posé avant elle (la taille porte son propre interligne).

## 4. Checklist : ajouter un template « FR + EN »

- [ ] **Définition** : `src/content/templates/<slug>.ts` (thème oklch, `paths`, copie `fr` `as const`, type `WidenLiterals`, copie `en`).
- [ ] **Vues** : `src/templates/<slug>/<page>.tsx` pour chaque page, `shell.tsx` et la table d'icônes dans `parts.tsx`.
- [ ] **Routes FR** : `src/app/(demos)/<slug>/layout.tsx` et chaque `page.tsx`, avec `buildTemplatePageMetadata(…, "fr", page)`.
- [ ] **Routes EN** : `src/app/(demos-en)/en/<slug>/layout.tsx` et chaque `page.tsx`, avec `"en"`.
- [ ] **Registre** : une entrée dans `TEMPLATES` (`src/content/templates/registry.ts`) : statut `sitekept-public`, nom et secteur admin, copie de la galerie (FR + EN), capture, `locales: ["fr", "en"]`. Elle alimente `DEMO_SLUGS` (noindex), la galerie `/templates`, la page admin et le type `PublicTemplateSlug` (`demoSlug` des pages métier). Ajouter la définition à `Definitions` dans `src/content/templates/registry-checks.ts` : `pnpm type-check` échoue si ses langues et celles du registre divergent.
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
- Les images viennent de `public/` ou d'une source libre de droits, passent par `TemplateMedia`, avec un `alt` traduit.

## 6. Intake 21st.dev (sections et éléments)

1. **Chercher** un composant ou un template sur 21st.dev.
2. **Valider** la licence et les dépendances. Seule dépendance runtime admise : `motion`. Toute autre dépendance : on ne retient pas le composant, ou on le réécrit sans elle.
3. **Récupérer le code**, en comptant le quota : l'offre gratuite donne 2 récupérations de code par jour (décision en attente : offre payante, ou récupérations réservées aux sections clés).
4. **Réécrire** sur le kit : classes `tpl-*` (aucun hex ni valeur de couleur en dur), textes dans la copie FR et EN, images via `TemplateMedia` (`next/image`, import par module), liens via `templateHref` et `TemplateLink`.
5. **Vérifier** comme n'importe quel template (checklist, section 4).

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
10. **Vérifier.** `pnpm type-check`, `pnpm lint`, build isolé, snapshot, `headers.sh`, relevé du First Load JS.

**Diff de snapshot attendue** (baseline FR contre snapshot après migration) :
- Fichiers FR : vide, sauf ce qui est voulu et listé : un `<h1>` ajouté là où il manquait (`H1: 1`), un `<title>` ou une description propres à la page, `ROBOTS: noindex, follow` à la place d'un `index, follow` contradictoire, et, pour un template qui a sa version anglaise, le sélecteur de langue (`FR Français` / `EN English`, deux fois par page : en-tête et menu mobile). Toute autre ligne différente est une régression de texte.
- Fichiers EN (`en__<slug>*.txt`) : n'existent pas dans la baseline. Les relire : aucun français visible, un `<h1>`, un `<title>` anglais, `LANG: en`.
- Les snapshots ne voient ni les classes ni les couleurs : le rendu visuel se vérifie par les captures (390, 768, 1440 px).
