# Inventaire de la direction artistique (DA) — sitekept.com

Référence objective de la DA **telle qu'elle existe** dans le code de la branche `feat/offre-v2` (HEAD = `cd3489e`, vérifié par `git rev-parse --short HEAD` ; c'est le HEAD de référence de la clause 0 bis ; `src/` et `package.json` sont inchangés depuis `ed06ed2`, vérifié par `git diff --stat ed06ed2 HEAD -- src package.json`, sortie vide). Elle sert à refuser tout nouvel élément visuel : ce qui n'est pas listé ici n'est pas dans la DA.

## Conventions de lecture

- Chaque citation a la forme `` `fichier:ligne` `` suivie de la ou des classes exactes, entre accents graves, copiées telles quelles depuis cette ligne.
- Chemins relatifs à la racine du dépôt. `(marketing)` désigne `src/app/(marketing)`.
- « Non observée » : la valeur a été cherchée dans le périmètre et n'y figure pas.
- **Périmètre analysé** : les 6 pages de référence (`/`, `/tarifs`, `/templates`, `/realization`, `/seo-geo`, `/blog/[slug]`) et tout ce qu'elles rendent : layout racine, layout `(marketing)`, `Navigation`, `Footer`, `Contact`, `ContactForm`, `PortfolioPreview`, `TemplatesShowcase`, `ProjectCard`, `PhoneField` (`src/features/contact-form/phone-field.tsx`, rendu par le formulaire de contact, voir ci-dessous) avec sa feuille tierce `react-phone-number-input/style.css`, et les primitives `src/components/ui/*`. L'inventaire complet du formulaire est dans la section « Formulaire de contact et champ téléphone ». Les pages `/blog`, `/[metier]`, `/privacy`, `/terms` et `/mentions-legales` ne sont citées qu'en complément, et c'est signalé à chaque fois. Les démos `(demos)` et le projet `(projects)/je` ont leur propre DA et sont **hors périmètre**.
- PhoneField est rendu ici : `src/features/contact-form/contact-form.tsx:123` `<PhoneField`
- Les citations `node_modules/…` renvoient à `/Users/josephatia/Documents/sitekept-weblaunding/node_modules/` (react-phone-number-input 3.4.18, déclaré en `package.json:39` `"react-phone-number-input": "^3.4.18",`), puisque le worktree n'a pas de node_modules.
- **Hors DA du site** : les deux e-mails HTML envoyés par le formulaire (styles inline). Voir la section « Hors DA du site : e-mails HTML ». Ils ne servent jamais de précédent pour le site.
- **Code mort exclu de la DA observée** (aucun import dans `src/`) :
  - `src/app/_components/hero.tsx`, `services.tsx`, `cta.tsx` et `value-proposition.tsx` ;
  - les primitives `src/components/ui/dropdown-menu.tsx` et `src/components/ui/form.tsx`. Preuve : `grep -rn "dropdown-menu" src --include='*.ts' --include='*.tsx'` ne renvoie que le fichier lui-même, et `grep -rn 'ui/form"' src` ne renvoie rien.
  - Les classes de ces fichiers ne sont pas des valeurs « observées ». Les règles 4 et 5 fixent le cas des valeurs propres à `dropdown-menu.tsx`, que l'on pourrait importer un jour (menu de navigation, par exemple).
  - Les autres primitives `src/components/ui/*` du périmètre sont bien importées : `button`, `card` et `tubes-cursor` par les pages ; `input`, `textarea` et `label` par le formulaire de contact.

## Captures de référence

Les fichiers sont dans `docs/design/reference/` : `home`, `tarifs`, `templates`, `realization`, `seo-geo` et `blog-article` (= `/blog/posseder-son-site-sans-abonnement`), chacun en `-390.png` et `-1280.png`. Ce sont des captures pleine page, en PNG, avec `deviceScaleFactor: 1`.

- Prises avec **`prefers-reduced-motion: reduce`** (Playwright `reducedMotion: "reduce"`, Chrome headless). Conséquences visibles :
  - le hero de la home est **noir uni**, car TubesCursor ne se charge pas en mouvement réduit ;
  - la page est défilée jusqu'en bas puis remise à `scrollY = 0` avant la capture, et la classe `.scroll-reveal` est absente des 6 pages (compte mesuré : 0) ;
  - le contenu est entièrement visible ;
  - sur la home, la navigation est dans son état transparent (haut de page) ; sur les autres pages, elle est opaque.
- **Source du rendu.** Le serveur de dev était cassé pendant la session : `.next` avait été écrasé par un `pnpm build` lancé en parallèle, ce qui donnait une 404 sur le CSS et une 500 sur l'article de blog. Les captures ont donc été faites à partir de deux choses, sans aucune modification du dépôt :
  - le **build de production** de ce code, soit le HTML prérendu de `.next/server/app` et `/_next/static`, copiés dans un dossier temporaire ;
  - le dossier `public/` du worktree pour les images.

  Les images passées par `/_next/image` ont été servies dans leur fichier d'origine, non redimensionné. Leur boîte d'affichage, fixée par le CSS, est identique.

---

## 1. Police

- Famille chargée : **Inter**, via `next/font/google`.
  - `src/app/layout.tsx:2` `import { Inter } from "next/font/google";`
  - `src/app/layout.tsx:11` `const inter = Inter({ subsets: ["latin"] });`
- Application : la classe générée est posée sur `<body>`. `src/app/layout.tsx:89` `className={inter.className}`
- Aucune graisse n'est précisée dans l'appel : la police variable est chargée (le CSS du build déclare `font-weight:100 900`).
- Graisses utilisées dans le périmètre : `font-medium`, `font-semibold` (dominante) et `font-bold` (cas listés en « Incohérences »).
- Les tokens `font-sans` et `font-mono` pointent vers des variables Geist **jamais définies** :
  - `src/app/globals.css:9` `--font-sans: var(--font-geist-sans);`
  - `src/app/globals.css:10` `--font-mono: var(--font-geist-mono);`
  - Aucune classe `font-sans`, `font-mono` ou `font-serif` dans le périmètre (non observée).
- Lissage, italique décoratif, seconde famille : non observés. Seule la balise em apparaît, dans le texte courant (`(marketing)/seo-geo/page.tsx:213` `<em> generative engine optimization</em>`).

## 2. Couleurs et usages

### 2.1 Tokens de `globals.css` (thème shadcn, neutres OKLCH)

- `src/app/globals.css:47` `--radius: 0.625rem;`
- `src/app/globals.css:48` `--background: oklch(1 0 0);` (blanc)
- `src/app/globals.css:49` `--foreground: oklch(0.145 0 0);` (quasi noir)
- `src/app/globals.css:54` `--primary: oklch(0.205 0 0);` (quasi noir) : c'est le fond du bouton default quand il n'est **pas** surchargé (voir § 7).
- `src/app/globals.css:56` `--secondary: oklch(0.97 0 0);`
- `src/app/globals.css:59` `--muted-foreground: oklch(0.556 0 0);`
- `src/app/globals.css:60` `--accent: oklch(0.97 0 0);` : fond de survol du bouton outline non surchargé.
- `src/app/globals.css:63` `--border: oklch(0.922 0 0);`
- `src/app/globals.css:65` `--ring: oklch(0.708 0 0);`
- Base appliquée à tout le document :
  - `src/app/globals.css:117` `@apply border-border outline-ring/50;`
  - `src/app/globals.css:120` `@apply bg-background text-foreground;`
- **Thème sombre.** Le bloc `.dark` existe (`src/app/globals.css:81` `.dark {`), mais aucun élément ne reçoit la classe `dark` : mode sombre **non observé**.
- `--chart-*` et `--sidebar-*` : définis, non utilisés dans le périmètre.

### 2.2 Utilitaires Tailwind bruts réellement utilisés

La palette réelle des pages marketing est **slate** (neutres) et **blue** (accent). Le relevé ci-dessous est exhaustif sur le périmètre.

**Fonds**
- `bg-white` : sections claires et cartes.
  - `(marketing)/page.tsx:149` `bg-white px-6 py-20 sm:py-24 lg:px-8`
  - `(marketing)/tarifs/page.tsx:207` `bg-white px-6 pb-20 lg:px-8`
- `bg-slate-50` : sections alternées et fonds de cartes.
  - `(marketing)/page.tsx:186` `bg-slate-50 px-6 py-20 sm:py-24 lg:px-8`
  - `(marketing)/tarifs/page.tsx:273` `bg-slate-50 px-6 py-20 lg:px-8`
  - `(marketing)/page.tsx:170` `rounded-md border border-blue-100 bg-slate-50 p-6 shadow-sm`
- `bg-black` : hero de la home uniquement. `(marketing)/page.tsx:48` `bg-black`
- `bg-black/45` : voile sur le canvas du hero. `(marketing)/page.tsx:51` `bg-black/45`
- `bg-slate-900` : bandeau final de /tarifs.
  - `(marketing)/tarifs/page.tsx:541` `bg-slate-900 px-6 py-20 lg:px-8`
  - Hors 6 pages : `(marketing)/[metier]/page.tsx:261` `bg-slate-900 px-6 py-20 lg:px-8`.
- `bg-slate-950` : footer. `src/components/footer.tsx:13` `border-t border-slate-800 bg-slate-950 px-6 py-16 text-white lg:px-8`
- `bg-slate-950/60` : bloc prix dans l'aside du hero home. `(marketing)/page.tsx:106` `mt-5 rounded-sm bg-slate-950/60 p-6`
- `bg-slate-100` : fond de l'image dans ProjectCard. `src/app/_components/project-card.tsx:50` `relative h-48 overflow-hidden bg-slate-100`
- `bg-blue-600` : CTA principal, barre d'accent, numéro d'étape et puces.
  - `(marketing)/page.tsx:71` `bg-blue-600`
  - `(marketing)/page.tsx:172` `h-0.5 w-12 bg-blue-600`
  - `(marketing)/page.tsx:277` `rounded-sm bg-blue-600`
  - `(marketing)/blog/[slug]/page.tsx:150` `mt-2 h-2 w-2 rounded-full bg-blue-600`
- `hover:bg-blue-700` : survol du CTA principal. `(marketing)/page.tsx:71` `hover:bg-blue-700`
- `bg-blue-50` :
  - pastille numérotée : `(marketing)/tarifs/page.tsx:504` `rounded-full bg-blue-50 text-sm font-semibold text-blue-700`
  - badge : `src/app/_components/portfolio-preview.tsx:58` `bg-blue-50`
  - survol des boutons secondaires : `(marketing)/page.tsx:299` `hover:bg-blue-50`
- `bg-blue-100 text-blue-800` : badge « Template ». `src/app/_components/project-card.tsx:67` `"bg-blue-100 text-blue-800"`
- `bg-green-100 text-green-800` : badge « Réalisation ». `src/app/_components/project-card.tsx:66` `"bg-green-100 text-green-800"`
- `bg-blue-300` : pastille de l'eyebrow du hero home. `(marketing)/page.tsx:55` `h-2 w-2 rounded-full bg-blue-300`
- Blancs translucides sur fond sombre :
  - `(marketing)/page.tsx:54` `border-white/15 bg-white/5`
  - `(marketing)/page.tsx:94` `border-white/10 bg-white/5`
  - `(marketing)/page.tsx:82` `border-white/20 bg-white/5`
  - `(marketing)/page.tsx:82` `hover:bg-white/10`
- `transparent` :
  - nav transparente en haut de la home : `src/components/navigation.tsx:74` `: "bg-transparent";`
  - boutons outline sur fond sombre : `(marketing)/page.tsx:244` `bg-transparent`, `(marketing)/tarifs/page.tsx:562` `bg-transparent` et `(marketing)/blog/[slug]/page.tsx:182` `bg-transparent`
  - champs de formulaire : `src/components/ui/input.tsx:11` `border border-input bg-transparent` et `src/components/ui/textarea.tsx:10` `border border-input bg-transparent`
  - bordure et fond de chargement du drapeau du champ téléphone : `src/features/contact-form/phone-field.tsx:93` `[--PhoneInputCountryFlag-borderColor:transparent] [--PhoneInputCountryFlag-backgroundColor--loading:transparent]`
  - hors 6 pages (pages légales), texte en dégradé : `(marketing)/privacy/page.tsx:21` `bg-clip-text text-transparent`
- `bg-white/95` : navigation opaque. `src/components/navigation.tsx:73` `"bg-white/95 shadow-sm backdrop-blur-md"`
- `bg-gray-50` : section projets de /realization (seule occurrence de `gray` en fond). `(marketing)/realization/page.tsx:111` `bg-gray-50 py-16`
- Retours du formulaire :
  - `src/features/contact-form/contact-form.tsx:153` `bg-green-50 p-4 text-green-800`
  - `src/features/contact-form/contact-form.tsx:160` `bg-red-50 p-4 text-red-800`

**Textes**
- `text-slate-950` : H1, H2 et H3 sur fond clair.
  - `(marketing)/page.tsx:155` `text-slate-950`
  - `(marketing)/tarifs/page.tsx:195` `text-slate-950`
- `text-slate-900` : `dt`, H3 des listes, tableau, bouton secondaire.
  - `(marketing)/tarifs/page.tsx:280` `text-lg font-semibold text-slate-900`
  - `(marketing)/tarifs/page.tsx:447` `pb-3 pr-4 font-semibold text-slate-900`
- `text-slate-700` : corps des encadrés et listes.
  - `(marketing)/page.tsx:292` `text-base leading-8 text-slate-700`
  - `(marketing)/tarifs/page.tsx:283` `flex gap-3 text-slate-700`
- `text-slate-600` : corps courant (la couleur la plus fréquente).
  - `(marketing)/page.tsx:158` `mt-4 text-lg leading-8 text-slate-600`
  - `(marketing)/tarifs/page.tsx:399` `mt-4 text-slate-600`
- `text-slate-500` : notes et métadonnées.
  - `(marketing)/tarifs/page.tsx:231` `mt-1 text-sm text-slate-500`
  - `(marketing)/blog/[slug]/page.tsx:101` `mt-5 text-sm text-slate-500`
- `text-slate-400` :
  - prix barré : `(marketing)/tarifs/page.tsx:227` `text-lg text-slate-400 line-through`
  - titres de colonnes du footer : `src/components/footer.tsx:55` `text-slate-400`
- `text-slate-300` : corps sur fond sombre.
  - `(marketing)/page.tsx:63` `text-slate-300`
  - `(marketing)/tarifs/page.tsx:546` `mt-4 text-lg leading-8 text-slate-300`
- `text-slate-200` : pastilles du hero. `(marketing)/page.tsx:94` `text-sm text-slate-200`
- `text-white` : titres sur fond sombre. `(marketing)/tarifs/page.tsx:543` `text-3xl font-semibold tracking-tight text-white`
- `text-blue-700` : eyebrows, liens texte, accroches.
  - `(marketing)/page.tsx:152` `text-blue-700`
  - `(marketing)/seo-geo/page.tsx:405` `font-medium text-blue-700 underline underline-offset-4`
  - `(marketing)/tarifs/page.tsx:374` `mt-1 text-sm font-medium text-blue-700`
- `text-blue-600` :
  - icônes de listes : `(marketing)/tarifs/page.tsx:285` `mt-1 h-4 w-4 shrink-0 text-blue-600`
  - survol des liens de nav : `src/components/navigation.tsx:112` `hover:text-blue-600`
- `text-blue-300` : eyebrow sur fond sombre.
  - `(marketing)/page.tsx:103` `text-blue-300`
  - `(marketing)/blog/[slug]/page.tsx:163` `text-blue-300`
- `text-blue-200` / `hover:text-blue-200` : sous-titre de la marque et liens du footer.
  - `src/components/footer.tsx:28` `text-blue-200`
  - `src/components/footer.tsx:39` `hover:text-blue-200`
- `text-emerald-400` : coches de l'aside du hero home (seule occurrence). `(marketing)/page.tsx:121` `text-emerald-400`
- `text-gray-900` / `text-gray-600` : /realization et ProjectCard uniquement.
  - `(marketing)/realization/page.tsx:82` `text-gray-900`
  - `(marketing)/realization/page.tsx:85` `mb-8 text-xl text-gray-600`
  - `src/app/_components/project-card.tsx:74` `mb-2 text-xl font-bold text-gray-900`
  - `src/app/_components/project-card.tsx:75` `mb-4 text-sm leading-relaxed text-gray-600`
- `text-red-700` : erreur de téléphone. `src/features/contact-form/contact-form.tsx:132` `mt-1 text-sm text-red-700`

**Bordures et anneaux**
- `border-blue-100` : bordure de carte par défaut, trait de bande, filet gauche.
  - `(marketing)/page.tsx:136` `border-y border-blue-100`
  - `(marketing)/page.tsx:275` `rounded-md border border-blue-100 bg-slate-50 p-6`
  - `(marketing)/tarifs/page.tsx:335` `border-l-2 border-blue-100 pl-5`
- `border-blue-200` :
  - bouton secondaire : `(marketing)/page.tsx:299` `border-blue-200`
  - carte tarif mise en avant : `(marketing)/tarifs/page.tsx:214` `border-2 border-blue-200`
  - survol : `(marketing)/templates/page.tsx:101` `hover:border-blue-200`
- `border-slate-200` :
  - `(marketing)/page.tsx:331` `rounded-md border border-slate-200 bg-white p-6 shadow-sm`
  - `(marketing)/tarifs/page.tsx:242` `border border-slate-200`
- `border-slate-100` :
  - lignes de tableau : `(marketing)/tarifs/page.tsx:463` `border-b border-slate-100`
  - séparateur de ProjectCard : `src/app/_components/project-card.tsx:38` `border-t border-slate-100 pt-4`
- `border-slate-300` :
  - `(marketing)/tarifs/page.tsx:261` `mt-8 w-full border-slate-300`
  - `(marketing)/seo-geo/page.tsx:222` `border-b border-slate-300`
- `border-slate-600` : bouton outline sur le bandeau slate-900. `(marketing)/tarifs/page.tsx:562` `border-slate-600 bg-transparent text-white hover:bg-slate-800`
- `border-slate-800` : footer. `src/components/footer.tsx:145` `border-t border-slate-800`
- `border-blue-900/40` : carte CTA sombre du blog. `(marketing)/blog/[slug]/page.tsx:162` `border-blue-900/40`
- `border-slate-200` : panneau de la nav mobile. `src/components/navigation.tsx:137` `border-t border-slate-200 bg-white py-4 lg:hidden`
- Anneaux :
  - `(marketing)/page.tsx:141` `ring-1 ring-slate-200`
  - `(marketing)/page.tsx:207` `ring-1 ring-blue-100`

**Couleur tierce (feuille react-phone-number-input)**
- `#03b2cb` (turquoise), défini en `node_modules/react-phone-number-input/style.css:3` `--PhoneInput-color--focus: #03b2cb;`. Il ne s'applique qu'au **focus du sélecteur de pays** du champ téléphone :
  - flèche du sélecteur : `node_modules/react-phone-number-input/style.css:12` `--PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);`, appliqué en `node_modules/react-phone-number-input/style.css:122` `color: var(--PhoneInputCountrySelectArrow-color--focus);`
  - contour de 1 px du drapeau : `node_modules/react-phone-number-input/style.css:18` `--PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);`, appliqué en `node_modules/react-phone-number-input/style.css:126` `box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus),`. La classe PhoneInputCountryIcon--border est posée dès qu'un pays est choisi (`node_modules/react-phone-number-input/modules/CountryIcon.js:27` `'PhoneInputCountryIcon--border': country`), et la ligne 93 de phone-field.tsx ne neutralise que les couleurs au repos.
  - Couleur isolée, non reprise ailleurs : voir « Incohérences » (point 22) et la règle 2.

### 2.3 Dégradés existants (valeurs exactes)

1. Section SEO + GEO de la home : `(marketing)/page.tsx:225` `bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_70%,#1d4ed8_100%)]`
2. Hero des pages internes (bleu très pâle vers blanc) :
   - `(marketing)/tarifs/page.tsx:190` `bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]`
   - même valeur en `(marketing)/templates/page.tsx:35` `bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]`, `(marketing)/seo-geo/page.tsx:138` `bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]` et `(marketing)/blog/[slug]/page.tsx:90` `bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]`
   - hors 6 pages : `(marketing)/[metier]/page.tsx:56` `bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]`
3. Hero de la liste du blog (hors 6 pages, valeur différente) : `(marketing)/blog/page.tsx:34` `bg-[linear-gradient(180deg,#eef2ff_0%,#ffffff_100%)]`
4. Carte CTA sombre de l'article : `(marketing)/blog/[slug]/page.tsx:162` `bg-[linear-gradient(135deg,#0f172a_0%,#172554_100%)]`
5. Hero de /realization : `(marketing)/realization/page.tsx:79` `bg-gradient-to-br from-blue-50 to-indigo-100`
6. Hors 6 pages (pages légales, même motif sur les trois) :
   - fond du hero : `(marketing)/privacy/page.tsx:18` `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`, `(marketing)/terms/page.tsx:18` `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`, `(marketing)/mentions-legales/page.tsx:18` `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`
   - texte en dégradé : `(marketing)/privacy/page.tsx:21` `bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent`, `(marketing)/terms/page.tsx:21` `bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent`, `(marketing)/mentions-legales/page.tsx:21` `bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent`
7. Couleurs du canvas TubesCursor (WebGL, visible uniquement sur desktop sans mouvement réduit) :
   - `src/components/ui/tubes-cursor.tsx:84` `colors: ["#5e72e4", "#8965e0", "#f5365c"],`
   - `src/components/ui/tubes-cursor.tsx:87` `colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"],`

## 3. Typographie

Le préfixe `sm:` s'applique à partir de 640 px, `md:` de 768 px, `lg:` de 1024 px et `xl:` de 1280 px (valeurs Tailwind par défaut, aucun breakpoint personnalisé dans `globals.css`).

**H1**
- Home (sur fond noir), 4xl puis 5xl puis 7xl : `(marketing)/page.tsx:59` `mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl`
- Pages internes, 4xl puis 5xl :
  - `(marketing)/tarifs/page.tsx:195` `mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl`
  - même chaîne en `(marketing)/seo-geo/page.tsx:143` `mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl` et `(marketing)/blog/[slug]/page.tsx:95` `mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl`
  - variante `mt-4` : `(marketing)/templates/page.tsx:40` `mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl`
- /realization (écart) : `(marketing)/realization/page.tsx:82` `mb-6 text-4xl font-bold text-gray-900 md:text-5xl`

**H2**
- Titre de section centré, home et composants partagés :
  - `(marketing)/page.tsx:155` `mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl`
  - même chaîne en `src/app/_components/portfolio-preview.tsx:43` `mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl` et `src/components/templates-showcase.tsx:52` `mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl`
- Titre de section, pages internes (sans palier `sm:`) : `(marketing)/tarifs/page.tsx:209` `text-3xl font-semibold tracking-tight text-slate-950`
- H2 dans un encadré :
  - `(marketing)/seo-geo/page.tsx:155` `text-2xl font-semibold tracking-tight text-slate-950`
  - `(marketing)/blog/[slug]/page.tsx:138` `text-2xl font-semibold tracking-tight text-slate-950`
- H2 sur fond sombre :
  - `(marketing)/tarifs/page.tsx:543` `text-3xl font-semibold tracking-tight text-white`
  - `(marketing)/page.tsx:231` `mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl`
  - `(marketing)/blog/[slug]/page.tsx:166` `mt-4 text-2xl font-semibold`
- H2 de /realization : `(marketing)/realization/page.tsx:116` `text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl`
- H2 de Contact (écart) : `src/app/_components/contact.tsx:13` `text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl`

**H3 et `dt`**
- Cartes de la home : `(marketing)/page.tsx:173` `mt-5 text-xl font-semibold text-slate-950`
- FAQ de la home : `(marketing)/page.tsx:333` `text-lg font-semibold text-slate-950`
- Cartes du portfolio : `src/app/_components/portfolio-preview.tsx:62` `mt-5 text-2xl font-semibold tracking-tight text-slate-950`
- Formules /tarifs : `(marketing)/tarifs/page.tsx:218` `mt-3 text-2xl font-bold text-slate-950`
- Sous-titres et cartes /tarifs :
  - `(marketing)/tarifs/page.tsx:280` `text-lg font-semibold text-slate-900`
  - `(marketing)/tarifs/page.tsx:371` `text-lg font-semibold text-slate-900`
- `dt` (FAQ et listes de définitions, pages internes) :
  - `(marketing)/tarifs/page.tsx:337` `text-lg font-semibold text-slate-900`
  - `(marketing)/seo-geo/page.tsx:394` `text-lg font-semibold text-slate-900`
- ProjectCard : `src/app/_components/project-card.tsx:74` `mb-2 text-xl font-bold text-gray-900`
- Contact :
  - `src/app/_components/contact.tsx:25` `mb-6 text-xl font-semibold text-slate-900`
  - H4 : `src/app/_components/contact.tsx:37` `mb-4 text-lg font-semibold text-slate-900`
- Aside de l'article : `(marketing)/blog/[slug]/page.tsx:192` `text-lg font-semibold text-slate-950`
- Titres de colonnes du footer : `src/components/footer.tsx:55` `text-sm font-semibold uppercase tracking-[0.24em] text-slate-400`

**Corps**
- Chapô sous les titres de section : `(marketing)/page.tsx:158` `mt-4 text-lg leading-8 text-slate-600`
- Chapô du hero home : `(marketing)/page.tsx:63` `mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl`
- Chapô des heros internes : `(marketing)/tarifs/page.tsx:198` `mt-6 text-lg leading-8 text-slate-600`
- Texte de carte : `(marketing)/page.tsx:176` `mt-3 text-sm leading-7 text-slate-600`
- Paragraphes des pages internes (taille de base, interlignage par défaut) : `(marketing)/tarifs/page.tsx:399` `mt-4 text-slate-600`
- Corps des encadrés : `(marketing)/seo-geo/page.tsx:158` `mt-5 space-y-4 text-base leading-8 text-slate-700`
- Réponses de FAQ :
  - `(marketing)/tarifs/page.tsx:534` `mt-2 leading-7 text-slate-600`
  - `(marketing)/seo-geo/page.tsx:397` `mt-2 text-slate-600`
- Notes : `(marketing)/tarifs/page.tsx:308` `mt-6 text-sm text-slate-500`
- Chapô de /realization (écart) : `(marketing)/realization/page.tsx:85` `mb-8 text-xl text-gray-600`
- Prix :
  - `(marketing)/page.tsx:113` `text-5xl font-semibold text-white`
  - `(marketing)/tarifs/page.tsx:226` `text-4xl font-bold text-slate-950`

**Interlignages observés** (relevé exhaustif hors primitives) :
- `leading-8` (chapôs, encadrés) : `(marketing)/page.tsx:158` `mt-4 text-lg leading-8 text-slate-600`
- `leading-7` (texte de carte) : `(marketing)/page.tsx:176` `mt-3 text-sm leading-7 text-slate-600`
- `leading-6` :
  - `(marketing)/page.tsx:127` `mt-4 text-sm leading-6 text-slate-300`
  - `(marketing)/blog/[slug]/page.tsx:207` `mt-2 text-sm font-medium leading-6 text-slate-900`
- `leading-relaxed` :
  - `(marketing)/tarifs/page.tsx:377` `mt-3 text-sm leading-relaxed text-slate-600`
  - `src/app/_components/project-card.tsx:75` `mb-4 text-sm leading-relaxed text-gray-600`
- `leading-tight` (bloc de la marque) : `src/components/navigation.tsx:93` `<div className="leading-tight">`
- `leading-none` (drapeau du champ téléphone) : `src/features/contact-form/phone-field.tsx:25` `block text-center leading-none`
- Partout ailleurs, l'interlignage par défaut de la taille.

**Eyebrow (surtitre)**
- Standard : `(marketing)/page.tsx:152` `text-sm font-semibold uppercase tracking-[0.28em] text-blue-700`
- Sur fond sombre : `(marketing)/page.tsx:228` `text-sm font-semibold uppercase tracking-[0.28em] text-blue-300`
- Petit (catégories d'articles) : `(marketing)/blog/[slug]/page.tsx:204` `text-xs font-semibold uppercase tracking-[0.24em] text-blue-700`
- En badge : `src/app/_components/portfolio-preview.tsx:58` `inline-flex rounded-sm border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700`
- Pastille du hero home : `(marketing)/page.tsx:54` `inline-flex items-center rounded-sm border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur`
- Variante /tarifs (écart de tracking) :
  - `(marketing)/tarifs/page.tsx:215` `text-sm font-semibold uppercase tracking-widest text-blue-700`
  - `(marketing)/tarifs/page.tsx:243` `text-sm font-semibold uppercase tracking-widest text-slate-500`
- Sous-titre de la marque :
  - `src/components/navigation.tsx:98` `hidden text-[10px] uppercase tracking-[0.24em] sm:block`
  - `src/components/footer.tsx:28` `text-[10px] uppercase tracking-[0.24em] text-blue-200`
- Nom de la marque : `src/components/navigation.tsx:94` `block text-lg font-semibold tracking-tight`

**Formulaire de contact** (primitives shadcn, non surchargées) :
- titre de la carte : `src/components/ui/card.tsx:35` `leading-none font-semibold`
- libellés : `src/components/ui/label.tsx:16` `flex items-center gap-2 text-sm leading-none font-medium select-none`
- texte saisi : `src/components/ui/input.tsx:11` `text-base` puis `md:text-sm`, et de même `src/components/ui/textarea.tsx:10` `text-base`
- texte indicatif : `src/components/ui/input.tsx:11` `placeholder:text-muted-foreground`
- messages : `src/features/contact-form/contact-form.tsx:132` `mt-1 text-sm text-red-700` et `src/features/contact-form/contact-form.tsx:155` `text-sm`

## 4. Espacements de sections et conteneurs

**Padding des sections**
- Sections de la home et composants partagés : `(marketing)/page.tsx:149` `px-6 py-20 sm:py-24 lg:px-8`
  - même chaîne en `src/app/_components/portfolio-preview.tsx:37` `px-6 py-20 sm:py-24 lg:px-8` et `src/components/templates-showcase.tsx:42` `px-6 py-20 sm:py-24 lg:px-8`
- Sections des pages internes : `(marketing)/tarifs/page.tsx:317` `bg-white px-6 py-20 lg:px-8`
- Hero home : `(marketing)/page.tsx:48` `px-6 pb-20 pt-28`, `sm:pb-24 sm:pt-36 lg:px-8`
- Hero interne :
  - `(marketing)/tarifs/page.tsx:190` `px-6 pb-16 pt-28 sm:pt-32 lg:px-8`
  - même chaîne en `(marketing)/templates/page.tsx:35` `px-6 pb-16 pt-28 sm:pt-32 lg:px-8`
  - variante `pb-14` : `(marketing)/seo-geo/page.tsx:138` `px-6 pb-14 pt-28 sm:pt-32 lg:px-8` (idem `(marketing)/blog/[slug]/page.tsx:90` `px-6 pb-14 pt-28 sm:pt-32 lg:px-8`)
- Section qui suit le hero interne (sans padding haut) :
  - `(marketing)/tarifs/page.tsx:207` `px-6 pb-20 lg:px-8`
  - même chaîne en `(marketing)/seo-geo/page.tsx:152` `px-6 pb-20 lg:px-8` et `(marketing)/blog/[slug]/page.tsx:127` `px-6 pb-20 lg:px-8`
- Bande de réassurance : `(marketing)/page.tsx:136` `px-6 py-4 lg:px-8`
- Contact : `src/app/_components/contact.tsx:10` `px-6 py-24 sm:py-32 lg:px-8`
- Footer : `src/components/footer.tsx:13` `px-6 py-16`
- /realization (écart, conteneur Tailwind `container`) :
  - `(marketing)/realization/page.tsx:79` `py-20`
  - `(marketing)/realization/page.tsx:80` `container mx-auto px-4`
  - `(marketing)/realization/page.tsx:111` `bg-gray-50 py-16`

**Largeurs maximales.** Relevé exhaustif sur le périmètre (`grep -noE "max-w-[a-z0-9]+"`), chaque ligne contrôlée avec `cat -n`.

*Conteneurs de section* (premier bloc `mx-auto` sous la section, qui fixe la largeur de contenu) :
- `max-w-7xl` (pleine largeur) :
  - `(marketing)/page.tsx:52` `mx-auto grid max-w-7xl`
  - `(marketing)/page.tsx:137` `mx-auto flex max-w-7xl`
  - `(marketing)/page.tsx:150` `mx-auto max-w-7xl`
  - `(marketing)/page.tsx:187` `mx-auto max-w-7xl`
  - `(marketing)/page.tsx:255` `mx-auto max-w-7xl`
  - `(marketing)/page.tsx:314` `mx-auto max-w-7xl`
  - `src/app/_components/contact.tsx:11` `mx-auto max-w-7xl`
  - `src/app/_components/portfolio-preview.tsx:38` `mx-auto max-w-7xl`
  - `src/components/templates-showcase.tsx:44` `mx-auto max-w-7xl`
  - `src/components/navigation.tsx:81` `mx-auto max-w-7xl px-6 lg:px-8`
  - `src/components/footer.tsx:14` `mx-auto grid max-w-7xl`
  - `src/components/footer.tsx:145` `mx-auto mt-14 max-w-7xl`
  - `(marketing)/blog/[slug]/page.tsx:128` `mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]`
- `max-w-6xl` (grille de Contact, à l'intérieur du 7xl) : `src/app/_components/contact.tsx:21` `mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2`
- `max-w-5xl` :
  - `(marketing)/page.tsx:227` `mx-auto max-w-5xl`
  - `(marketing)/tarifs/page.tsx:208` `mx-auto max-w-5xl`
  - `(marketing)/tarifs/page.tsx:274` `mx-auto max-w-5xl`
  - `(marketing)/tarifs/page.tsx:318` `mx-auto max-w-5xl`
  - `(marketing)/tarifs/page.tsx:355` `mx-auto max-w-5xl`
  - `(marketing)/tarifs/page.tsx:433` `mx-auto max-w-5xl`
- `max-w-4xl` (pages internes) :
  - `(marketing)/tarifs/page.tsx:191` `mx-auto max-w-4xl text-center`
  - `(marketing)/tarifs/page.tsx:395` `mx-auto max-w-4xl`
  - `(marketing)/tarifs/page.tsx:487` `mx-auto max-w-4xl`
  - `(marketing)/tarifs/page.tsx:524` `mx-auto max-w-4xl`
  - `(marketing)/templates/page.tsx:36` `mx-auto max-w-4xl text-center`
  - `(marketing)/templates/page.tsx:87` `mx-auto max-w-4xl`
  - `(marketing)/realization/page.tsx:81` `mx-auto max-w-4xl text-center`
  - `(marketing)/seo-geo/page.tsx:139` `mx-auto max-w-4xl`
  - `(marketing)/seo-geo/page.tsx:153` `mx-auto max-w-4xl space-y-10`
  - `(marketing)/seo-geo/page.tsx:207` `mx-auto max-w-4xl`, de même en `(marketing)/seo-geo/page.tsx:257` `mx-auto max-w-4xl`, `(marketing)/seo-geo/page.tsx:311` `mx-auto max-w-4xl`, `(marketing)/seo-geo/page.tsx:335` `mx-auto max-w-4xl`, `(marketing)/seo-geo/page.tsx:363` `mx-auto max-w-4xl` et `(marketing)/seo-geo/page.tsx:387` `mx-auto max-w-4xl`
  - `(marketing)/blog/[slug]/page.tsx:91` `mx-auto max-w-4xl`
- `max-w-3xl` (bandeau final) : `(marketing)/tarifs/page.tsx:542` `mx-auto max-w-3xl text-center`

*Largeurs de mesure de texte* (bloc d'introduction, colonne ou paragraphe placé dans un conteneur) :
- `max-w-4xl` (H1 et paragraphes de la home) :
  - `(marketing)/page.tsx:59` `mt-6 max-w-4xl`
  - `(marketing)/page.tsx:231` `mt-4 max-w-4xl`
  - `(marketing)/page.tsx:234` `mt-5 max-w-4xl`
  - `(marketing)/page.tsx:237` `mt-6 max-w-4xl`
- `max-w-3xl` :
  - colonne texte du hero home : `(marketing)/page.tsx:53` `max-w-3xl`
  - intros de section centrées :
    - `(marketing)/page.tsx:151` `mx-auto max-w-3xl`
    - `(marketing)/page.tsx:188` `mx-auto max-w-3xl text-center`
    - `(marketing)/page.tsx:256` `mx-auto max-w-3xl text-center`
    - `(marketing)/page.tsx:315` `mx-auto max-w-3xl text-center`
    - `src/app/_components/portfolio-preview.tsx:39` `mx-auto max-w-3xl text-center`
    - `src/components/templates-showcase.tsx:46` `mx-auto max-w-3xl text-center`
    - `(marketing)/realization/page.tsx:115` `mx-auto mb-12 max-w-3xl text-center`
  - paragraphes de /tarifs :
    - `(marketing)/tarifs/page.tsx:323` `mt-4 max-w-3xl text-slate-600`
    - `(marketing)/tarifs/page.tsx:345` `mt-8 max-w-3xl text-slate-600`
    - `(marketing)/tarifs/page.tsx:359` `mt-4 max-w-3xl text-slate-600`
    - `(marketing)/tarifs/page.tsx:384` `mt-8 max-w-3xl text-sm text-slate-500`
    - `(marketing)/tarifs/page.tsx:437` `mt-4 max-w-3xl text-slate-600`
- `max-w-2xl` :
  - chapô du hero home : `(marketing)/page.tsx:63` `mt-6 max-w-2xl`
  - intro de Contact : `src/app/_components/contact.tsx:12` `mx-auto max-w-2xl text-center`
- `max-w-xl` (texte des cartes du portfolio) : `src/app/_components/portfolio-preview.tsx:65` `mt-3 max-w-xl text-sm leading-7 text-slate-600`
- `max-w-md` (texte de présentation du footer) : `src/components/footer.tsx:33` `mt-5 max-w-md text-sm leading-7 text-slate-300`

Hors 6 pages, aucune autre valeur, sauf sur les pages légales :
- `max-w-2xl` (chapô du hero) : `(marketing)/privacy/page.tsx:25` `mx-auto max-w-2xl`, `(marketing)/terms/page.tsx:25` `mx-auto max-w-2xl` et `(marketing)/mentions-legales/page.tsx:25` `mx-auto max-w-2xl`
- `max-w-none` (dans la classe `prose` inerte, voir « Incohérences ») : `(marketing)/privacy/page.tsx:36` `prose prose-slate max-w-none`, `(marketing)/terms/page.tsx:36` `prose prose-slate max-w-none` et `(marketing)/mentions-legales/page.tsx:36` `prose prose-slate max-w-none`

Non observées : `max-w-sm`, `max-w-lg`, `max-w-screen-*`, `max-w-prose`, `max-w-[…]`.

**Écarts verticaux récurrents**
- Titre vers grille : mt-12 sur la home (`(marketing)/page.tsx:163` `mt-12 grid grid-cols-1 gap-6`), mt-10 sur les pages internes (`(marketing)/tarifs/page.tsx:213` `mt-10 grid gap-8 lg:grid-cols-2`).
- Gouttières de grilles : `gap-6` et `gap-8` (citations au § 12).

## 5. Rayons

Les rayons dérivent du token --radius (`src/app/globals.css:47` `--radius: 0.625rem;`), ce qui donne sm = 6 px, md = 8 px, lg = 10 px et xl = 14 px :
- `src/app/globals.css:40` `--radius-sm: calc(var(--radius) - 4px);`
- `src/app/globals.css:41` `--radius-md: calc(var(--radius) - 2px);`
- `src/app/globals.css:42` `--radius-lg: var(--radius);`
- `src/app/globals.css:43` `--radius-xl: calc(var(--radius) + 4px);`

**`rounded-md`** : rayon par défaut des cartes, boutons et champs.
- Primitives :
  - `src/components/ui/button.tsx:8` `rounded-md`
  - `src/components/ui/card.tsx:10` `rounded-md`
  - `src/components/ui/input.tsx:11` `rounded-md`
- Cartes de la home :
  - `(marketing)/page.tsx:170` `rounded-md border border-blue-100 bg-slate-50 p-6 shadow-sm`
  - `(marketing)/page.tsx:207` `rounded-md bg-white p-8 shadow-sm ring-1 ring-blue-100`
  - `(marketing)/page.tsx:331` `rounded-md border border-slate-200 bg-white p-6 shadow-sm`
- Aside du hero : `(marketing)/page.tsx:102` `rounded-md border border-white/10 bg-white/5 p-6`
- Encadrés : `(marketing)/seo-geo/page.tsx:154` `rounded-md border border-blue-100 bg-slate-50 p-8` (même chaîne en `(marketing)/blog/[slug]/page.tsx:137` `rounded-md border border-blue-100 bg-slate-50 p-8`)
- Portfolio : `src/app/_components/portfolio-preview.tsx:55` `rounded-md border border-blue-100 bg-white shadow-sm`
- ProjectCard (forcé) : `src/app/_components/project-card.tsx:48` `!rounded-md`
- Logo, liens et bouton de la nav mobile :
  - `src/components/navigation.tsx:90` `rounded-md`
  - `src/components/navigation.tsx:128` `rounded-md p-2 lg:hidden`
  - `src/components/navigation.tsx:144` `block rounded-md px-3 py-2`
- Alertes du formulaire : `src/features/contact-form/contact-form.tsx:153` `rounded-md bg-green-50`

**`rounded-sm`** : pastilles, badges, petits blocs internes, boutons compacts.
- `(marketing)/page.tsx:94` `rounded-sm border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`
- `(marketing)/page.tsx:141` `rounded-sm bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-slate-200`
- numéro d'étape : `(marketing)/page.tsx:277` `flex h-10 w-10 items-center justify-center rounded-sm bg-blue-600 text-sm font-semibold text-white`
- `src/app/_components/project-card.tsx:64` `rounded-sm px-2 py-1 text-xs font-medium`
- `(marketing)/blog/[slug]/page.tsx:202` `block rounded-sm bg-slate-50 p-4 transition hover:bg-blue-50`

**`rounded-lg`**
- `(marketing)/tarifs/page.tsx:369` `rounded-lg border border-slate-200 bg-white p-6`
- `(marketing)/templates/page.tsx:101` `rounded-lg border border-slate-200 px-5 py-4`
- Hors 6 pages : `(marketing)/mentions-legales/page.tsx:43` `mb-6 rounded-lg bg-slate-50 p-6`

**`rounded-xl`** : cartes de formules de /tarifs uniquement.
- `(marketing)/tarifs/page.tsx:214` `rounded-xl border-2 border-blue-200 bg-white p-8 shadow-sm`
- `(marketing)/tarifs/page.tsx:242` `rounded-xl border border-slate-200 bg-slate-50 p-8`

**`rounded-full`** : points et pastilles numérotées uniquement.
- `(marketing)/page.tsx:55` `h-2 w-2 rounded-full bg-blue-300`
- `(marketing)/tarifs/page.tsx:504` `flex size-7 shrink-0 items-center justify-center rounded-full`
- `src/app/_components/contact.tsx:43` `h-1.5 w-1.5 rounded-full bg-blue-600`

**Non observés dans le périmètre** : `rounded-2xl`, `rounded-3xl`, `rounded-none` et les rayons arbitraires `rounded-[…]` (présents seulement dans les démos, hors DA marketing).

## 6. Ombres et anneaux

- `shadow-xs` : primitives (bouton default/outline, champ).
  - `src/components/ui/button.tsx:13` `shadow-xs`
  - `src/components/ui/input.tsx:11` `shadow-xs`
- `shadow-sm` : ombre standard des cartes et de la nav opaque.
  - `src/components/ui/card.tsx:10` `shadow-sm`
  - `(marketing)/page.tsx:170` `shadow-sm`
  - `(marketing)/page.tsx:331` `shadow-sm`
  - `(marketing)/tarifs/page.tsx:214` `shadow-sm`
  - `(marketing)/blog/[slug]/page.tsx:191` `rounded-md border border-blue-100 bg-white p-6 shadow-sm`
  - `src/components/navigation.tsx:73` `shadow-sm`
- `hover:shadow-lg` : survol des cartes cliquables uniquement.
  - `src/app/_components/portfolio-preview.tsx:55` `hover:shadow-lg`
  - `src/app/_components/project-card.tsx:48` `hover:shadow-lg`
- `shadow-xl shadow-slate-950/20` : aside du hero home uniquement. `(marketing)/page.tsx:102` `shadow-xl shadow-slate-950/20`
- `shadow-none` : boutons compacts des cartes de templates. `src/app/_components/project-card.tsx:41` `shadow-none`
- Anneaux décoratifs :
  - `(marketing)/page.tsx:141` `ring-1 ring-slate-200`
  - `(marketing)/page.tsx:207` `ring-1 ring-blue-100`
- Anneau de focus (primitives) :
  - `src/components/ui/button.tsx:8` `focus-visible:ring-[3px]`
  - `src/components/ui/input.tsx:12` `focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`
- Non observés dans le code importé : shadow-md, shadow-2xl, shadow-inner, ombres arbitraires et drop-shadow.
- Hors DA observée : `dropdown-menu.tsx`, non importé (code mort), contient `src/components/ui/dropdown-menu.tsx:45` `shadow-md` et `src/components/ui/dropdown-menu.tsx:233` `shadow-lg`. Leur statut est fixé par la règle 4.

## 7. Boutons et variantes

**Primitive** : `src/components/ui/button.tsx`.
- Base : `src/components/ui/button.tsx:8` `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all`
- Variantes :
  - `src/components/ui/button.tsx:13` `bg-primary text-primary-foreground shadow-xs hover:bg-primary/90` (default : quasi noir, token --primary)
  - `src/components/ui/button.tsx:17` `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground` (outline)
  - destructive, secondary, ghost et link : **non observées** dans le périmètre (`src/components/ui/button.tsx:15` `bg-destructive text-white`, `src/components/ui/button.tsx:19` `bg-secondary text-secondary-foreground`, `src/components/ui/button.tsx:21` `hover:bg-accent hover:text-accent-foreground`, `src/components/ui/button.tsx:22` `text-primary underline-offset-4 hover:underline`).
- Tailles :
  - `src/components/ui/button.tsx:25` `h-9 px-4 py-2 has-[>svg]:px-3`
  - `src/components/ui/button.tsx:26` `h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5` (sm)
  - `src/components/ui/button.tsx:27` `h-10 rounded-md px-6 has-[>svg]:px-4` (lg)
  - `icon` : non observée.

**Surcharges observées dans les pages** (de fait, ce sont les vrais styles de boutons du site)

A. **CTA primaire bleu** :
- `src/components/navigation.tsx:119` `bg-blue-600 text-white hover:bg-blue-700`
- `(marketing)/templates/page.tsx:47` `bg-blue-600 text-white hover:bg-blue-700`
- `(marketing)/blog/[slug]/page.tsx:173` `bg-blue-600 text-white hover:bg-blue-700`
- `src/app/_components/portfolio-preview.tsx:74` `"bg-blue-600 text-white hover:bg-blue-700"`
- Variante hero home : `(marketing)/page.tsx:71` `bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-700`
- Variantes sans `text-white` :
  - `(marketing)/tarifs/page.tsx:234` `mt-8 w-full bg-blue-600 hover:bg-blue-700`
  - `(marketing)/tarifs/page.tsx:552` `bg-blue-600 hover:bg-blue-700`

B. **Secondaire clair** (`variant="outline"`) :
- `(marketing)/page.tsx:299` `border-blue-200 bg-white text-slate-900 hover:bg-blue-50`
- même chaîne en `(marketing)/templates/page.tsx:57` `border-blue-200 bg-white text-slate-900 hover:bg-blue-50`, `(marketing)/seo-geo/page.tsx:169` `border-blue-200 bg-white text-slate-900 hover:bg-blue-50`, `src/app/_components/portfolio-preview.tsx:75` `border-blue-200 bg-white text-slate-900 hover:bg-blue-50` et `src/components/templates-showcase.tsx:87` `border-blue-200 bg-white text-slate-900 hover:bg-blue-50`

C. **Outline sur fond sombre** :
- `(marketing)/page.tsx:82` `border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10`
- `(marketing)/page.tsx:244` `border-white/20 bg-transparent text-white hover:bg-white/10` (même chaîne en `(marketing)/blog/[slug]/page.tsx:182` `border-white/20 bg-transparent text-white hover:bg-white/10`)
- `(marketing)/tarifs/page.tsx:562` `border-slate-600 bg-transparent text-white hover:bg-slate-800`

D. **Outline neutre** : `(marketing)/tarifs/page.tsx:261` `mt-8 w-full border-slate-300`

E. **Default non surchargé (bouton quasi noir)** :
- `(marketing)/realization/page.tsx:89` `px-8 text-lg`
- `src/features/contact-form/contact-form.tsx:46` `className="w-full" size="lg"`

F. **Boutons compacts des cartes** (`size="sm"`) :
- cartes de templates :
  - `src/app/_components/project-card.tsx:41` `h-8 gap-1.5 rounded-sm border-slate-200 px-2.5 text-xs font-medium text-slate-700 shadow-none hover:border-blue-200 hover:bg-blue-50 hover:text-slate-900`
  - `src/app/_components/project-card.tsx:44` `h-8 gap-1.5 rounded-sm bg-blue-600 px-3 text-xs font-medium shadow-none hover:bg-blue-700`
- cartes de réalisations :
  - `src/app/_components/project-card.tsx:42` `flex items-center gap-2 border-blue-200 hover:bg-blue-50`
  - `src/app/_components/project-card.tsx:45` `flex items-center gap-2 bg-blue-600 hover:bg-blue-700`

G. **Outline sans surcharge de couleur** (existant, à ne pas étendre) :
- sans aucune surcharge (/[metier], hors 6 pages) :
  - `(marketing)/[metier]/page.tsx:73` `<Button asChild variant="outline">`
  - `(marketing)/[metier]/page.tsx:171` `<Button asChild variant="outline">`
  - `(marketing)/[metier]/page.tsx:178` `<Button asChild variant="outline">`
- sous-cas avec `px-8 text-lg` seulement (/realization, bouton « Voir nos templates » du hero, lignes 95 à 99) :
  - `(marketing)/realization/page.tsx:97` `variant="outline"`
  - `(marketing)/realization/page.tsx:98` `size="lg"`
  - `(marketing)/realization/page.tsx:99` `className="px-8 text-lg"`
  - libellé : `(marketing)/realization/page.tsx:102` `realization.buttons.viewTemplates`
- Rendu : la variante outline de la primitive telle quelle, `src/components/ui/button.tsx:17` `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground`.

**Tailles employées** : lg pour les heros, le bandeau final et l'envoi du formulaire (`(marketing)/page.tsx:70` `size="lg"`), la taille par défaut ailleurs, sm dans ProjectCard (`src/app/_components/project-card.tsx:84` `size="sm"`).

**Icône dans les boutons** : flèche à droite, `(marketing)/page.tsx:75` `ml-2 h-4 w-4`.

**Liens non-boutons**
- Lien dans le texte : `(marketing)/seo-geo/page.tsx:405` `font-medium text-blue-700 underline underline-offset-4`
- Liens de nav : `src/components/navigation.tsx:112` `text-sm font-medium transition-colors hover:text-blue-600`
- Liens du footer : `src/components/footer.tsx:60` `transition-colors hover:text-blue-200`

## 8. Cartes (motifs observés)

1. **Carte d'offre (home)** : `(marketing)/page.tsx:170` `rounded-md border border-blue-100 bg-slate-50 p-6 shadow-sm`. Elle est surmontée d'une barre d'accent : `(marketing)/page.tsx:172` `h-0.5 w-12 bg-blue-600`.
2. **Carte « Pourquoi » (home)** : `(marketing)/page.tsx:207` `rounded-md bg-white p-8 shadow-sm ring-1 ring-blue-100`, avec la même barre d'accent (`(marketing)/page.tsx:209` `h-0.5 w-12 bg-blue-600`).
3. **Carte d'étape numérotée (home)** :
   - carte : `(marketing)/page.tsx:275` `rounded-md border border-blue-100 bg-slate-50 p-6`
   - numéro : `(marketing)/page.tsx:277` `flex h-10 w-10 items-center justify-center rounded-sm bg-blue-600 text-sm font-semibold text-white`
4. **Encadré pleine largeur (home)** : `(marketing)/page.tsx:291` `mt-10 rounded-md border border-blue-100 bg-slate-50 p-6 sm:p-8`
5. **Carte FAQ (home)** : `(marketing)/page.tsx:331` `rounded-md border border-slate-200 bg-white p-6 shadow-sm`
6. **Aside translucide du hero home** :
   - `(marketing)/page.tsx:102` `rounded-md border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20 backdrop-blur`
   - bloc intérieur : `(marketing)/page.tsx:106` `mt-5 rounded-sm bg-slate-950/60 p-6`
7. **Carte du portfolio (home)** :
   - `src/app/_components/portfolio-preview.tsx:55` `rounded-md border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`
   - contenu : `src/app/_components/portfolio-preview.tsx:57` `p-6 sm:p-8`
8. **ProjectCard (/templates, /realization)** :
   - `src/app/_components/project-card.tsx:48` `transform overflow-hidden !rounded-md border border-blue-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`
   - image : `src/app/_components/project-card.tsx:50` `relative h-48 overflow-hidden bg-slate-100`
   - corps : `src/app/_components/project-card.tsx:61` `p-6`
   - badge : `src/app/_components/project-card.tsx:64` `rounded-sm px-2 py-1 text-xs font-medium`
9. **Cartes de formules (/tarifs)** :
   - mise en avant : `(marketing)/tarifs/page.tsx:214` `rounded-xl border-2 border-blue-200 bg-white p-8 shadow-sm`
   - neutre : `(marketing)/tarifs/page.tsx:242` `rounded-xl border border-slate-200 bg-slate-50 p-8`
10. **Carte « approche » (/tarifs)** : `(marketing)/tarifs/page.tsx:369` `rounded-lg border border-slate-200 bg-white p-6`
11. **Encadré de contenu (/seo-geo, article)** : `(marketing)/seo-geo/page.tsx:154` `rounded-md border border-blue-100 bg-slate-50 p-8` (même chaîne en `(marketing)/blog/[slug]/page.tsx:137` `rounded-md border border-blue-100 bg-slate-50 p-8`)
12. **Carte CTA sombre (article)** : `(marketing)/blog/[slug]/page.tsx:162` `rounded-md border border-blue-900/40 bg-[linear-gradient(135deg,#0f172a_0%,#172554_100%)] p-8 text-white`
13. **Carte de liens connexes (article)** :
    - carte : `(marketing)/blog/[slug]/page.tsx:191` `rounded-md border border-blue-100 bg-white p-6 shadow-sm`
    - élément : `(marketing)/blog/[slug]/page.tsx:202` `block rounded-sm bg-slate-50 p-4 transition hover:bg-blue-50`
14. **Tuile-lien (/templates)** : `(marketing)/templates/page.tsx:101` `flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-5 py-4 transition-colors hover:border-blue-200 hover:bg-blue-50`
15. **Card shadcn par défaut (formulaire de contact)** :
    - utilisation : `src/features/contact-form/contact-form.tsx:71` `<Card>`
    - primitive : `src/components/ui/card.tsx:10` `flex flex-col gap-6 rounded-md border bg-card py-6 text-card-foreground shadow-sm`
16. Hors 6 pages : carte de la liste du blog, `(marketing)/blog/page.tsx:53` `rounded-md border border-blue-100 bg-slate-50 p-8 shadow-sm`.

## 9. Motifs de sections

- **Hero home** (`(marketing)/page.tsx:46` `<section`, jusqu'à la ligne 134) :
  - section : `(marketing)/page.tsx:48` `relative overflow-hidden bg-black`
  - canvas TubesCursor et voile : `(marketing)/page.tsx:50` `z-0 opacity-90`, puis `(marketing)/page.tsx:51` `pointer-events-none absolute inset-0 z-0 bg-black/45`
  - grille texte + aside de 380 px : `(marketing)/page.tsx:52` `relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start`
  - contenu : pastille eyebrow, H1, chapô, deux CTA (bleu + outline translucide), pastilles de preuve (`(marketing)/page.tsx:90` `mt-10 flex flex-wrap gap-3`)
  - aside prix « 500€ » avec coches
- **Bande de réassurance** sous le hero home :
  - `(marketing)/page.tsx:136` `border-y border-blue-100 bg-slate-50 px-6 py-4 lg:px-8`
  - pastilles : `(marketing)/page.tsx:141` `rounded-sm bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-slate-200`
- **Hero des pages internes** : dégradé `#eff6ff` vers blanc, eyebrow, H1, chapô.
  - Centré sur /tarifs et /templates : `(marketing)/tarifs/page.tsx:191` `mx-auto max-w-4xl text-center`
  - Aligné à gauche sur /seo-geo et l'article : `(marketing)/seo-geo/page.tsx:139` `mx-auto max-w-4xl`
  - Seuls /templates (`(marketing)/templates/page.tsx:46` `mt-8 flex flex-col justify-center gap-4 sm:flex-row`) et /realization ont des CTA dans le hero.
- **Hero /realization** (motif isolé) :
  - `(marketing)/realization/page.tsx:79` `bg-gradient-to-br from-blue-50 to-indigo-100 py-20`
  - pas d'eyebrow ; H1 `font-bold text-gray-900` ; bouton default quasi noir
- **Alternance bg-white / bg-slate-50** :
  - Home :
    - offre blanche (`(marketing)/page.tsx:149` `bg-white`)
    - « Pourquoi » slate-50 (`(marketing)/page.tsx:186` `bg-slate-50`)
    - dégradé bleu (`(marketing)/page.tsx:225` `bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_70%,#1d4ed8_100%)]`)
    - process blanc (`(marketing)/page.tsx:254` `bg-white`)
    - portfolio slate-50 (`src/app/_components/portfolio-preview.tsx:37` `bg-slate-50`)
    - FAQ blanche (`(marketing)/page.tsx:313` `bg-white`)
    - Contact blanc (`src/app/_components/contact.tsx:10` `bg-white`)
  - /tarifs : white (207), slate-50 (273), white (317), slate-50 (354), white (394), slate-50 (432), white (486), slate-50 (523), puis le bandeau slate-900 (541).
  - /seo-geo : white (152), slate-50 (206), white (256), slate-50 (310), white (334), slate-50 (362), white (386).
  - /templates : TemplatesShowcase slate-50 (`src/components/templates-showcase.tsx:42` `bg-slate-50`), puis white (`(marketing)/templates/page.tsx:86` `bg-white px-6 py-20 lg:px-8`).
- **Section dégradée bleu nuit** (home uniquement) : `(marketing)/page.tsx:225` `bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_70%,#1d4ed8_100%)]`, texte blanc et slate-300, bouton outline translucide (`(marketing)/page.tsx:244` `border-white/20 bg-transparent text-white hover:bg-white/10`).
- **Bandeau final bg-slate-900** : `(marketing)/tarifs/page.tsx:541` `bg-slate-900 px-6 py-20 lg:px-8`, centré (`(marketing)/tarifs/page.tsx:542` `mx-auto max-w-3xl text-center`), H2 blanc, chapô slate-300, CTA bleu + outline slate-600 (`(marketing)/tarifs/page.tsx:551` `mt-8 flex flex-wrap justify-center gap-4`).
  - Hors 6 pages : `(marketing)/[metier]/page.tsx:261` `bg-slate-900 px-6 py-20 lg:px-8`.
  - Non observé sur `/`, `/templates`, `/realization`, `/seo-geo` ni sur l'article.
- **Tableau** :
  - conteneur : `(marketing)/tarifs/page.tsx:443` `mt-10 overflow-x-auto`
  - table : `(marketing)/tarifs/page.tsx:444` `w-full min-w-[640px] border-collapse text-left text-sm`
  - en-tête : `(marketing)/tarifs/page.tsx:446` `border-b border-slate-200`
  - lignes : `(marketing)/tarifs/page.tsx:463` `border-b border-slate-100`
  - cellules : `(marketing)/tarifs/page.tsx:464` `py-4 pr-4 font-medium text-slate-900`
  - variante /seo-geo : `(marketing)/seo-geo/page.tsx:222` `border-b border-slate-300` et `(marketing)/seo-geo/page.tsx:234` `border-b border-slate-200`
- **FAQ** :
  - home : grille de cartes, `(marketing)/page.tsx:327` `mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2`
  - pages internes : `dl` sans carte, `(marketing)/tarifs/page.tsx:528` `mt-10 space-y-8`
  - Pas d'accordéon (non observé).
- **Listes à puces avec icônes** :
  - incluses : `(marketing)/tarifs/page.tsx:281` `mt-4 space-y-3` avec l'icône Check (`(marketing)/tarifs/page.tsx:285` `mt-1 h-4 w-4 shrink-0 text-blue-600`)
  - exclues : `Minus` (`(marketing)/tarifs/page.tsx:301` `mt-1 h-4 w-4 shrink-0 text-slate-400`)
- **Listes à puces rondes** :
  - `(marketing)/blog/[slug]/page.tsx:147` `mt-6 space-y-3 text-sm leading-7 text-slate-700`
  - puce : `(marketing)/blog/[slug]/page.tsx:150` `mt-2 h-2 w-2 rounded-full bg-blue-600`
  - Contact : `src/app/_components/contact.tsx:43` `mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600`
- **Liste numérotée à pastilles** : `(marketing)/tarifs/page.tsx:500` `mt-8 space-y-4` et pastille `(marketing)/tarifs/page.tsx:504` `size-7`
- **Liste à filet gauche** :
  - `(marketing)/tarifs/page.tsx:335` `border-l-2 border-blue-100 pl-5`
  - `(marketing)/seo-geo/page.tsx:276` `border-l-2 border-blue-100 pl-5`
- **Article de blog** : colonne d'encadrés et aside de 320 px, `(marketing)/blog/[slug]/page.tsx:128` `lg:grid-cols-[minmax(0,1fr)_320px]`. L'aside contient la carte CTA sombre et la carte de liens.
- **Contact** : deux colonnes, informations à gauche et Card formulaire à droite, `src/app/_components/contact.tsx:21` `lg:grid-cols-2`.
- **Navigation** :
  - fixe : `src/components/navigation.tsx:80` `fixed top-0 z-50 w-full transition-all duration-300`
  - hauteur : `src/components/navigation.tsx:82` `flex h-16 items-center justify-between`
  - transparente en haut de la home, opaque ailleurs ou après 24 px de défilement : `src/components/navigation.tsx:71` `const solidNavigation = pathname !== "/" || isScrolled;`
- **Footer** : quatre colonnes sur fond `slate-950`, `src/components/footer.tsx:14` `lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]`.

## 10. Icônes

Bibliothèque unique : **lucide-react** (`package.json:33` `"lucide-react": "^0.522.0",`). Aucune autre bibliothèque d'icônes ni aucun SVG maison dans le périmètre (non observés).

- **ArrowRight** : CTA et liens, toujours à droite du libellé.
  - `(marketing)/page.tsx:75` `ml-2 h-4 w-4`
  - en couleur : `(marketing)/templates/page.tsx:105` `h-4 w-4 shrink-0 text-blue-600`
  - écarts de taille :
    - `(marketing)/realization/page.tsx:92` `className="ml-2" size={20}`
    - `src/app/_components/project-card.tsx:106` `size={isTemplateCard ? 14 : 16}`
- **CheckCircle2** : coches de l'aside du hero home. `(marketing)/page.tsx:121` `mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400`
- **Check** : liste « Inclus ». `(marketing)/tarifs/page.tsx:285` `mt-1 h-4 w-4 shrink-0 text-blue-600`
- **Minus** : liste « Non inclus ». `(marketing)/tarifs/page.tsx:301` `mt-1 h-4 w-4 shrink-0 text-slate-400`
- **Menu / X** : bouton de la nav mobile. `src/components/navigation.tsx:132` `h-6 w-6`
- **Mail / Phone** :
  - footer : `src/components/footer.tsx:41` `h-4 w-4` et `src/components/footer.tsx:48` `h-4 w-4`
  - Contact : `src/app/_components/contact.tsx:30` `mr-3 h-5 w-5 text-blue-600`
- **ExternalLink** : bouton « Visiter » de ProjectCard. `src/app/_components/project-card.tsx:92` `size={isTemplateCard ? 14 : 16}`
- **Send / CheckCircle / AlertCircle** : formulaire.
  - `src/features/contact-form/contact-form.tsx:52` `ml-2 h-4 w-4`
  - `src/features/contact-form/contact-form.tsx:154` `mr-2 h-5 w-5 shrink-0`
- Taille par défaut dans un bouton : `src/components/ui/button.tsx:8` `[&_svg:not([class*='size-'])]:size-4`
- **Tailles observées** : 14, 16 et 20 px (prop `size`), `h-4 w-4`, `h-5 w-5`, `h-6 w-6`.
- **Couleurs observées** : héritée du texte, `text-blue-600`, `text-slate-400`, `text-emerald-400`.

## 11. Animations et effets

- **TubesCursor (WebGL, hero home)** :
  - monté en `(marketing)/page.tsx:50` `<TubesCursor className="z-0 opacity-90" />`
  - module chargé depuis un CDN : `src/components/ui/tubes-cursor.tsx:29` `"https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";`
  - désactivé si mouvement réduit, écran ≤ 768 px ou réseau contraint :
    - `src/components/ui/tubes-cursor.tsx:45` `"(prefers-reduced-motion: reduce)"`
    - `src/components/ui/tubes-cursor.tsx:47` `const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;`
    - `src/components/ui/tubes-cursor.tsx:58` `if (prefersReducedMotion || isSmallScreen || isConstrainedNetwork) {`
  - Sans lui, le hero est **noir uni** (`bg-black` sous le voile `bg-black/45`).
  - Respecte prefers-reduced-motion : **oui**.
- **Scroll-reveal** :
  - défini dans `src/app/globals.css:137` `.scroll-reveal {` (transition 680 ms, `src/app/globals.css:141` `opacity 680ms cubic-bezier(0.22, 1, 0.36, 1)`)
  - neutralisé en mouvement réduit : `src/app/globals.css:153` `@media (prefers-reduced-motion: reduce) {`
  - composant : `src/components/scroll-reveal.tsx:36` `const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");`
  - **Non utilisé sur les pages marketing** : il n'est importé que par les démos `(demos)/fleuriste`, `(demos)/pattiserie` et `(demos)/boulangerie`. Sur les 6 pages, aucun élément ne porte `.scroll-reveal` (compte mesuré : 0).
- **Walk-across (Majin Vegeta, footer)** :
  - keyframes : `src/app/globals.css:124` `@keyframes walk-across {`
  - classe : `src/app/globals.css:134` `animation: walk-across 12s linear infinite;`
  - utilisation : `src/components/footer.tsx:147` `animate-walk-across h-12 w-12` (GIF `src/components/footer.tsx:149` `src="/majin-vegeta/walk.gif"`)
  - Respecte prefers-reduced-motion : **non**. Aucune règle `@media (prefers-reduced-motion)` ne vise `.animate-walk-across`, et le GIF s'anime de toute façon.
- **Défilement fluide** : `src/app/layout.tsx:82` `className="scroll-smooth"`. Non conditionné au mouvement réduit.
- **Transitions de survol** :
  - soulèvement des cartes : `src/app/_components/portfolio-preview.tsx:55` `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg` (même effet en `src/app/_components/project-card.tsx:48` `hover:-translate-y-1`). Sans préfixe motion-safe, donc **non** neutralisé en mouvement réduit.
  - zoom d'image : `src/app/_components/project-card.tsx:55` `object-cover transition-transform duration-300 hover:scale-105`
  - couleurs :
    - `src/components/navigation.tsx:112` `transition-colors`
    - `(marketing)/templates/page.tsx:101` `transition-colors`
    - `(marketing)/blog/[slug]/page.tsx:202` `transition`
  - boutons : `src/components/ui/button.tsx:8` `transition-all`
  - nav (passage transparent vers opaque) : `src/components/navigation.tsx:80` `transition-all duration-300`
- **Flou d'arrière-plan** :
  - `(marketing)/page.tsx:54` `backdrop-blur`
  - `(marketing)/page.tsx:102` `backdrop-blur`
  - `src/components/navigation.tsx:73` `backdrop-blur-md`
- **Placeholder flou des images de ProjectCard** (effet de chargement de next/image) : `src/app/_components/project-card.tsx:57` `placeholder="blur"`, avec une image JPEG 1 × 1 en base64, `src/app/_components/project-card.tsx:58` `blurDataURL="data:image/jpeg;base64,`. Une version floue s'affiche jusqu'au chargement ; le code ne déclare aucune transition pour ce remplacement. Existant, à ne pas étendre hors ProjectCard.
- Le paquet tw-animate-css est importé (`src/app/globals.css:2` `@import "tw-animate-css";`). Dans le code importé, aucune classe animate- autre que animate-walk-across n'apparaît.
- Hors DA observée : `dropdown-menu.tsx`, non importé (code mort), contient les animations tw-animate-css d'ouverture et de fermeture, `src/components/ui/dropdown-menu.tsx:45` `data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95` et `src/components/ui/dropdown-menu.tsx:45` `data-[side=bottom]:slide-in-from-top-2`. On trouve les mêmes en `src/components/ui/dropdown-menu.tsx:233` `data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`. Leur statut est fixé par la règle 5.
- Transition des champs de formulaire : `src/components/ui/input.tsx:11` `transition-[color,box-shadow]` et `src/components/ui/textarea.tsx:10` `transition-[color,box-shadow]`.
- Champ téléphone : la feuille `react-phone-number-input/style.css` ne déclare ni transition ni animation. La flèche est simplement tournée de façon statique (`node_modules/react-phone-number-input/style.css:13` `--PhoneInputCountrySelectArrow-transform: rotate(45deg);`), et le passage au turquoise du focus est instantané.
- Non observés : `motion-safe:`, `motion-reduce:`, parallaxe, carrousel, compteur animé, GSAP, framer-motion.

## 12. Comportement mobile

- **Breakpoints** : Tailwind par défaut, `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Aucun breakpoint personnalisé dans `src/app/globals.css`. Le palier structurant est `lg` (nav, grilles, heros).
- **Grilles qui passent en une colonne** (une colonne par défaut sous le palier) :
  - `(marketing)/page.tsx:163` `grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3`
  - `(marketing)/page.tsx:200` `grid-cols-1 gap-6 lg:grid-cols-2`
  - `(marketing)/page.tsx:268` `grid-cols-1 gap-6 lg:grid-cols-4`
  - `src/components/templates-showcase.tsx:63` `grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4`
  - `(marketing)/realization/page.tsx:128` `grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3`
  - `(marketing)/tarifs/page.tsx:278` `mt-10 grid gap-10 md:grid-cols-2`
  - `(marketing)/tarifs/page.tsx:365` `mt-10 grid gap-6 md:grid-cols-2`
  - `(marketing)/templates/page.tsx:96` `mt-8 grid gap-4 sm:grid-cols-2`
  - Hero home : l'aside passe sous le texte, `(marketing)/page.tsx:52` `lg:grid-cols-[minmax(0,1fr)_380px]`
  - Article : l'aside passe sous les encadrés, `(marketing)/blog/[slug]/page.tsx:128` `lg:grid-cols-[minmax(0,1fr)_320px]`
- **Navigation mobile** :
  - liens desktop masqués sous `lg` : `src/components/navigation.tsx:107` `hidden items-center gap-8 lg:flex`
  - bouton burger : `src/components/navigation.tsx:128` `rounded-md p-2 lg:hidden`
  - panneau déroulant : `src/components/navigation.tsx:137` `border-t border-slate-200 bg-white py-4 lg:hidden`
  - CTA du panneau étiré : `src/components/navigation.tsx:153` `flex-1 bg-blue-600 text-white hover:bg-blue-700`
  - sous-titre de la marque masqué sous `sm` : `src/components/navigation.tsx:98` `sm:block`
- **CTA pleine largeur** :
  - par empilement `flex-col` (les boutons s'étirent, sans `w-full`) :
    - `(marketing)/page.tsx:67` `mt-8 flex flex-col gap-4 sm:flex-row`
    - `(marketing)/templates/page.tsx:46` `flex-col`
    - `(marketing)/realization/page.tsx:88` `flex flex-col justify-center gap-4 sm:flex-row`
    - aside de l'article : `(marketing)/blog/[slug]/page.tsx:172` `mt-6 flex flex-col gap-3`
  - par `w-full` explicite, à toutes les largeurs :
    - `(marketing)/tarifs/page.tsx:234` `w-full`
    - `(marketing)/tarifs/page.tsx:261` `w-full`
    - `src/features/contact-form/contact-form.tsx:46` `w-full`
  - Bandeau final de /tarifs : `flex-wrap`, pas d'empilement forcé (`(marketing)/tarifs/page.tsx:551` `flex flex-wrap justify-center gap-4`).
- **Tableaux** : défilement horizontal, largeur minimale 640 px.
  - `(marketing)/tarifs/page.tsx:443` `overflow-x-auto` et `(marketing)/tarifs/page.tsx:444` `min-w-[640px]`
  - `(marketing)/seo-geo/page.tsx:219` `overflow-x-auto` et `(marketing)/seo-geo/page.tsx:220` `min-w-[640px]`
- **Typographie responsive** :
  - H1 home : `(marketing)/page.tsx:59` `sm:text-5xl lg:text-7xl`
  - H1 internes : `sm:text-5xl`
  - H2 home : `sm:text-4xl`
  - H2 des pages internes : pas de palier
- **Padding responsive** :
  - horizontal `px-6` puis `lg:px-8` partout, sauf /realization (`px-4`)
  - vertical `py-20` puis `sm:py-24` sur la home seulement
- **TubesCursor** : jamais chargé à 768 px ou moins (`src/components/ui/tubes-cursor.tsx:47` `(max-width: 768px)`).

---

## Formulaire de contact et champ téléphone (inventaire complet)

Le balayage porte sur tous les fichiers de `src/features/contact-form/` et sur `src/app/_components/contact.tsx` :
- `index.ts` : réexport, sans style ;
- `use-contact-form.ts` : état du formulaire, aucune classe ni style (recherche de « className », « style » et des couleurs hexadécimales : aucun résultat) ;
- `contact-form.action.ts` et `confirmation-email.ts` : HTML des e-mails, hors DA du site (section suivante) ;
- les trois fichiers ci-dessous.

**Section Contact** (`src/app/_components/contact.tsx`) :
- section : `src/app/_components/contact.tsx:10` `bg-white px-6 py-24 sm:py-32 lg:px-8`
- intro : `src/app/_components/contact.tsx:12` `mx-auto max-w-2xl text-center`, `src/app/_components/contact.tsx:13` `text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl` et `src/app/_components/contact.tsx:16` `mt-6 text-lg leading-8 text-slate-600`
- grille : `src/app/_components/contact.tsx:21` `mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2`
- colonne d'informations : `src/app/_components/contact.tsx:23` `space-y-8`, `src/app/_components/contact.tsx:25` `mb-6 text-xl font-semibold text-slate-900`, `src/app/_components/contact.tsx:28` `space-y-4`, `src/app/_components/contact.tsx:29` `flex items-center`, `src/app/_components/contact.tsx:30` `mr-3 h-5 w-5 text-blue-600` et `src/app/_components/contact.tsx:31` `text-slate-600`
- engagements : `src/app/_components/contact.tsx:37` `mb-4 text-lg font-semibold text-slate-900`, `src/app/_components/contact.tsx:40` `space-y-3 text-slate-600`, `src/app/_components/contact.tsx:42` `flex items-start` et `src/app/_components/contact.tsx:43` `mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600`

**Carte formulaire** (`src/features/contact-form/contact-form.tsx`) :
- carte : `src/features/contact-form/contact-form.tsx:71` `<Card>`, qui donne `src/components/ui/card.tsx:10` `flex flex-col gap-6 rounded-md border bg-card py-6 text-card-foreground shadow-sm`
- en-tête : `src/features/contact-form/contact-form.tsx:72` `<CardHeader>`, qui donne `src/components/ui/card.tsx:23` `grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6`
- titre : `src/features/contact-form/contact-form.tsx:73` `<CardTitle>`, qui donne `src/components/ui/card.tsx:35` `leading-none font-semibold`
- contenu : `src/features/contact-form/contact-form.tsx:75` `<CardContent>`, qui donne `src/components/ui/card.tsx:68` `px-6`
- formulaire : `src/features/contact-form/contact-form.tsx:80` `className="space-y-6"`
- piège à robots, invisible : `src/features/contact-form/contact-form.tsx:89` `absolute -left-[9999px] h-px w-px opacity-0`
- libellés : `src/features/contact-form/contact-form.tsx:93` `<Label htmlFor="name">`, qui donne `src/components/ui/label.tsx:16` `flex items-center gap-2 text-sm leading-none font-medium select-none`
- champs nom et e-mail : `src/features/contact-form/contact-form.tsx:100` `className="mt-1"` et `src/features/contact-form/contact-form.tsx:114` `className="mt-1"`, sur la primitive `src/components/ui/input.tsx:11` `flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs`
- message : `src/features/contact-form/contact-form.tsx:146` `className="mt-1"` et `src/features/contact-form/contact-form.tsx:147` `rows={5}`, sur la primitive `src/components/ui/textarea.tsx:10` `flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs`
- états des champs :
  - focus : `src/components/ui/input.tsx:12` `focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`
  - invalide : `src/components/ui/input.tsx:13` `aria-invalid:border-destructive aria-invalid:ring-destructive/20`
  - désactivé : `src/components/ui/input.tsx:11` `disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`
  - sélection de texte : `src/components/ui/input.tsx:11` `selection:bg-primary selection:text-primary-foreground`
- erreur de téléphone : `src/features/contact-form/contact-form.tsx:132` `mt-1 text-sm text-red-700`
- succès : `src/features/contact-form/contact-form.tsx:153` `flex items-start rounded-md bg-green-50 p-4 text-green-800`, `src/features/contact-form/contact-form.tsx:154` `mr-2 h-5 w-5 shrink-0` et `src/features/contact-form/contact-form.tsx:155` `text-sm`
- erreur d'envoi : `src/features/contact-form/contact-form.tsx:160` `flex items-start rounded-md bg-red-50 p-4 text-red-800`, `src/features/contact-form/contact-form.tsx:161` `mr-2 h-5 w-5 shrink-0` et `src/features/contact-form/contact-form.tsx:162` `text-sm`
- bouton d'envoi : `src/features/contact-form/contact-form.tsx:46` `className="w-full" size="lg"` (variante default quasi noire), icône `src/features/contact-form/contact-form.tsx:52` `ml-2 h-4 w-4`

**Champ téléphone** (`src/features/contact-form/phone-field.tsx`, lu en entier) :
- feuille tierce : `src/features/contact-form/phone-field.tsx:10` `import "react-phone-number-input/style.css";`
- champ de saisie : la primitive Input est réutilisée, `src/features/contact-form/phone-field.tsx:86` `inputComponent={Input}`
- classes et propriétés arbitraires du conteneur : `src/features/contact-form/phone-field.tsx:93` `mt-1 [--PhoneInputCountryFlag-borderColor:transparent] [--PhoneInputCountryFlag-backgroundColor--loading:transparent]`
- drapeau : un emoji Unicode rendu par la police système, sans image ni CDN, `src/features/contact-form/phone-field.tsx:25` `className="block text-center leading-none"`
- rendu de la feuille tierce (react-phone-number-input 3.4.18) :
  - conteneur en flex : `node_modules/react-phone-number-input/style.css:24` `display: flex;`
  - sélecteur natif invisible posé sur le drapeau : `node_modules/react-phone-number-input/style.css:95` `opacity: 0;`
  - drapeau de 1 em de haut, au ratio 1,5 : `node_modules/react-phone-number-input/style.css:14` `--PhoneInputCountryFlag-aspectRatio: 1.5;` et `node_modules/react-phone-number-input/style.css:15` `--PhoneInputCountryFlag-height: 1em;`
  - flèche en chevron de la couleur du texte, à 45 % d'opacité : `node_modules/react-phone-number-input/style.css:10` `--PhoneInputCountrySelectArrow-opacity: 0.45;` et `node_modules/react-phone-number-input/style.css:11` `--PhoneInputCountrySelectArrow-color: currentColor;`
  - au focus du sélecteur, flèche et contour du drapeau en `#03b2cb` (§ 2.2, « Couleur tierce »)
  - aucune transition ni animation (§ 11)

## Hors DA du site : e-mails HTML (styles inline)

Ces valeurs vivent dans des e-mails envoyés par Resend, en HTML à styles inline. Elles ne font **pas** partie de la DA du site et ne doivent jamais servir de précédent pour une page.

**E-mail de confirmation au visiteur** (`src/features/contact-form/confirmation-email.ts`) :
- police système : `src/features/contact-form/confirmation-email.ts:29` `font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;`
- paragraphes : `src/features/contact-form/confirmation-email.ts:30` `font-size:16px;line-height:1.6;color:#334155;`
- fond et largeur : `src/features/contact-form/confirmation-email.ts:41` `background:#ffffff;` et `src/features/contact-form/confirmation-email.ts:43` `max-width:520px;`
- nom de la marque : `src/features/contact-form/confirmation-email.ts:46` `font-size:18px;font-weight:700;color:#0f172a;`
- bloc des questions : `src/features/contact-form/confirmation-email.ts:52` `background:#f1f5f9;border-radius:10px;`
- numéros et texte des questions : `src/features/contact-form/confirmation-email.ts:55` `font-weight:700;color:#2563eb;` et `src/features/contact-form/confirmation-email.ts:55` `line-height:1.55;color:#0f172a;`
- lien : `src/features/contact-form/confirmation-email.ts:60` `style="color:#2563eb;"`
- bouton : `src/features/contact-form/confirmation-email.ts:62` `background:#2563eb;border-radius:8px;` et `src/features/contact-form/confirmation-email.ts:63` `padding:12px 22px;`
- pied : `src/features/contact-form/confirmation-email.ts:68` `border-top:1px solid #e2e8f0;` et `src/features/contact-form/confirmation-email.ts:68` `color:#64748b;`

**E-mail de notification à l'agence** (`src/features/contact-form/contact-form.action.ts`, l. 166 à 185) :
- conteneur : `src/features/contact-form/contact-form.action.ts:166` `font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;`
- titre : `src/features/contact-form/contact-form.action.ts:167` `color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;`
- intertitres : `src/features/contact-form/contact-form.action.ts:172` `color: #374151; margin-bottom: 5px;` (de même en `src/features/contact-form/contact-form.action.ts:179` `color: #374151; margin-bottom: 5px;`)
- bloc du message : `src/features/contact-form/contact-form.action.ts:180` `background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;`
- pied : `src/features/contact-form/contact-form.action.ts:185` `border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;`

## Incohérences existantes (signalées telles quelles, non corrigées)

1. **Rayons des cartes**. La home, le portfolio et les encadrés sont en rounded-md (`(marketing)/page.tsx:170` `rounded-md`). Les formules de /tarifs sont en rounded-xl (`(marketing)/tarifs/page.tsx:214` `rounded-xl`). Les cartes « approche » de /tarifs et les tuiles de /templates sont en rounded-lg (`(marketing)/tarifs/page.tsx:369` `rounded-lg`, `(marketing)/templates/page.tsx:101` `rounded-lg`). Trois rayons différents pour des cartes de même rôle.
2. **Hero de /realization hors système**. Ses écarts par rapport aux autres heros internes :
   - dégradé `from-blue-50 to-indigo-100` au lieu de `#eff6ff` vers blanc (`(marketing)/realization/page.tsx:79` `from-blue-50 to-indigo-100`) ;
   - conteneur `container mx-auto px-4` au lieu de `px-6 lg:px-8` (`(marketing)/realization/page.tsx:80` `container mx-auto px-4`) ;
   - H1 en `font-bold text-gray-900 md:text-5xl` (`(marketing)/realization/page.tsx:82` `font-bold text-gray-900 md:text-5xl`) ;
   - pas d'eyebrow, pas de `pt-28` : seul le `py-20` (80 px) sépare le haut de page du H1, sous une nav fixe `h-16` (64 px), soit 16 px d'écart contre 48 px ailleurs ;
   - CTA principal resté en variante default quasi noire (`(marketing)/realization/page.tsx:89` `px-8 text-lg`) ;
   - icône à 20 px (`(marketing)/realization/page.tsx:92` `size={20}`).
3. **Gris `gray-*` mélangés aux `slate-*`** :
   - `(marketing)/realization/page.tsx:111` `bg-gray-50`
   - `src/app/_components/project-card.tsx:74` `text-gray-900`
   - `src/app/_components/project-card.tsx:75` `text-gray-600`
4. **Vert hors usage de retour (succès)**. Le badge « Réalisation » est en vert 100/800 (`src/app/_components/project-card.tsx:66` `bg-green-100 text-green-800`). Les coches du hero home sont en emerald 400 (`(marketing)/page.tsx:121` `text-emerald-400`). Deux verts différents, utilisés une fois chacun.
5. **Bloc Contact**. Le H2 est en gras slate-900 (`src/app/_components/contact.tsx:13` `font-bold tracking-tight text-slate-900`) alors que les autres H2 sont en semi-gras slate-950. Le bouton d'envoi reste en variante default quasi noire (`src/features/contact-form/contact-form.tsx:46` `className="w-full"`), alors que tous les autres CTA d'action sont bleus. Visible sur home-1280.png.
6. **Graisses** :
   - H3 et prix de /tarifs en gras (`(marketing)/tarifs/page.tsx:218` `text-2xl font-bold`, `(marketing)/tarifs/page.tsx:226` `text-4xl font-bold`) contre semi-gras sur la home (`(marketing)/page.tsx:113` `text-5xl font-semibold`) ;
   - ProjectCard en `font-bold` (`src/app/_components/project-card.tsx:74` `font-bold`).
7. **Tracking des eyebrows** : tracking-widest sur /tarifs (`(marketing)/tarifs/page.tsx:215` `tracking-widest`) contre tracking-[0.28em] partout ailleurs (`(marketing)/page.tsx:152` `tracking-[0.28em]`).
8. **Dégradé du hero** : #eef2ff sur la liste du blog (`(marketing)/blog/page.tsx:34` `#eef2ff_0%`) contre #eff6ff sur les autres heros internes (`(marketing)/tarifs/page.tsx:190` `#eff6ff_0%`).
9. **Alignement des heros internes** : centrés sur /tarifs et /templates (`(marketing)/tarifs/page.tsx:191` `text-center`), alignés à gauche sur /seo-geo et l'article (`(marketing)/seo-geo/page.tsx:139` `mx-auto max-w-4xl`).
10. **Échelle des H2** : palier sm:text-4xl sur la home (`(marketing)/page.tsx:155` `sm:text-4xl`), aucun palier sur les pages internes (`(marketing)/tarifs/page.tsx:209` `text-3xl font-semibold tracking-tight text-slate-950`). Même écart pour le padding : sm:py-24 sur la home seulement (`(marketing)/page.tsx:149` `sm:py-24`, contre `(marketing)/tarifs/page.tsx:317` `px-6 py-20 lg:px-8`).
11. **Interlignage des réponses de FAQ** : `leading-7` sur /tarifs (`(marketing)/tarifs/page.tsx:534` `mt-2 leading-7 text-slate-600`), interlignage par défaut sur /seo-geo (`(marketing)/seo-geo/page.tsx:397` `mt-2 text-slate-600`) et dans les `dd` de /tarifs (`(marketing)/tarifs/page.tsx:340` `mt-2 text-slate-600`).
12. **Bordures de tableau** : slate-200 / slate-100 sur /tarifs (`(marketing)/tarifs/page.tsx:446` `border-slate-200`), slate-300 / slate-200 sur /seo-geo (`(marketing)/seo-geo/page.tsx:222` `border-slate-300`).
13. **Fins de page** :
    - le bandeau `bg-slate-900` existe sur /tarifs (et /[metier]) mais pas sur les autres pages ;
    - il est suivi directement du footer `bg-slate-950` (`src/components/footer.tsx:13` `bg-slate-950`) : deux fonds sombres voisins ;
    - sur la home, FAQ et Contact sont deux sections `bg-white` consécutives (`(marketing)/page.tsx:313` `bg-white`, `src/app/_components/contact.tsx:10` `bg-white`).
14. **Token de police mort** : `src/app/globals.css:9` `--font-sans: var(--font-geist-sans);`. Geist n'est jamais chargé ; Inter est appliqué par la prop className du body (`src/app/layout.tsx:89` `className={inter.className}`).
15. **Commentaire périmé** : `src/components/ui/tubes-cursor.tsx:43` `// Sans lui, le hero conserve son dégradé de fond : le rendu reste correct.` Le hero est en noir uni (`(marketing)/page.tsx:48` `bg-black`), sans dégradé.
16. **Mouvement réduit partiellement respecté** :
    - l'animation `walk-across` du footer n'est pas neutralisée (`src/app/globals.css:134` `animation: walk-across 12s linear infinite;`) ;
    - `scroll-smooth` non plus (`src/app/layout.tsx:82` `scroll-smooth`) ;
    - ni les soulèvements au survol (`src/app/_components/portfolio-preview.tsx:55` `hover:-translate-y-1`).
17. **Utilitaire obsolète** : `flex-shrink-0` (`(marketing)/page.tsx:121` `flex-shrink-0`) à côté de `shrink-0` ailleurs (`(marketing)/tarifs/page.tsx:285` `shrink-0`).
18. **Surcharge redondante** : `!rounded-md` sur ProjectCard (`src/app/_components/project-card.tsx:48` `!rounded-md`), alors que la Card est déjà en `rounded-md` (`src/components/ui/card.tsx:10` `rounded-md`).
19. **Pages légales (hors 6 pages)** :
    - fond `from-slate-900 via-slate-800 to-slate-900` et titre en dégradé avec `via-purple-400` (`(marketing)/privacy/page.tsx:21` `via-purple-400`) : seul violet du site ;
    - H2 en `font-bold` (`(marketing)/privacy/page.tsx:37` `mb-4 text-2xl font-bold text-slate-900`) ;
    - `<main>` imbriqué dans le `<main>` du layout (`(marketing)/terms/page.tsx:16` `<main className="min-h-screen bg-white">`, `(marketing)/layout.tsx:15` `<main className="min-h-screen">`).
20. **Classes `prose` inertes (pages légales)**. Les pages légales utilisent `(marketing)/privacy/page.tsx:36` `prose prose-slate max-w-none`, de même que `(marketing)/terms/page.tsx:36` `prose prose-slate max-w-none` et `(marketing)/mentions-legales/page.tsx:36` `prose prose-slate max-w-none`. Or @tailwindcss/typography n'est pas installé : absent de package.json, et globals.css ne contient aucune directive plugin (recherche de « typography » et « @plugin » : aucun résultat). Ces classes ne produisent donc rien ; seules les classes utilitaires posées sur chaque balise mettent le texte en forme.
21. **Captures d'écran de réalisations qui sont des placeholders**. Deux fichiers sont en réalité des GIF 1200 × 616 (sortie de `file`) dont l'image est l'écran de chargement de thum.io : un anneau gris et le logo « thum.io » sur fond blanc. Ce sont public/realization/legitbrainrot.png (`(marketing)/realization/page.tsx:48` `screenshot: "/realization/legitbrainrot.png",`) et public/realization/lesassureursexperts.png (`(marketing)/realization/page.tsx:66` `screenshot: "/realization/lesassureursexperts.png",`). Sur /realization, ces deux cartes affichent donc une zone d'image presque blanche (visible sur realization-390.png et realization-1280.png). bismuthcpa.png et comizglobal.png sont aussi des GIF nommés .png, mais leur contenu est une vraie capture.
22. **Couleur tierce isolée #03b2cb**. La feuille `react-phone-number-input/style.css` (`src/features/contact-form/phone-field.tsx:10` `import "react-phone-number-input/style.css";`) apporte un turquoise de focus, `node_modules/react-phone-number-input/style.css:3` `--PhoneInput-color--focus: #03b2cb;`. Il colore la flèche du sélecteur de pays et le contour du drapeau au focus (§ 2.2). Il n'est repris nulle part ailleurs et ne correspond ni à la palette blue/slate, ni au focus des primitives (token ring, gris). La ligne 93 de phone-field.tsx neutralise la bordure et le fond du drapeau au repos (`src/features/contact-form/phone-field.tsx:93` `[--PhoneInputCountryFlag-borderColor:transparent]`), pas la couleur de focus. Exception existante, à ne pas étendre.

## Règles de contrôle (pour un vérificateur)

Liste **fermée** : toute valeur visuelle **ajoutée** par une modification (ligne nouvelle ou changée du diff) qui n'y figure pas est un nouvel élément visuel et doit être refusée, sous réserve des clauses 0 (primitives) et 0 bis (antériorité). « Observé » ne veut pas dire « recommandé » : les écarts listés plus haut ne doivent pas être recopiés dans de nouveaux écrans.

**0. Clause générale : primitives shadcn importées** (décision de Joseph). Les primitives concernées sont :
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/label.tsx`

Toutes leurs classes sont autorisées **telles qu'elles sont écrites dans le fichier de la primitive, à l'intérieur de la primitive seulement**. Cela couvre notamment :
- les tokens shadcn ;
- `shadow-xs` ;
- `focus-visible:ring-[3px]` ;
- `transition-[color,box-shadow]` ;
- `@container/card-header`, `grid-rows-[auto_auto]` et `has-data-[slot=card-action]:grid-cols-[1fr_auto]` (`src/components/ui/card.tsx:23` `@container/card-header`) ;
- `[.border-b]:pb-6` et `[.border-t]:pt-6` (`src/components/ui/card.tsx:78` `[.border-t]:pt-6`) ;
- `[&_svg]:pointer-events-none`, `[&_svg:not([class*='size-'])]:size-4` et `[&_svg]:shrink-0` (`src/components/ui/button.tsx:8` `[&_svg]:shrink-0`) ;
- `has-[>svg]:px-3`, `has-[>svg]:px-2.5` et `has-[>svg]:px-4` (`src/components/ui/button.tsx:26` `has-[>svg]:px-2.5`, `src/components/ui/button.tsx:27` `has-[>svg]:px-4`) ;
- `group-data-[disabled=true]:opacity-50` (`src/components/ui/label.tsx:16` `group-data-[disabled=true]:opacity-50`).

Ces classes **ne servent pas de précédent** pour du code hors primitive. **Toute modification d'une primitive est un nouvel élément visuel.** Les listes fermées des règles 1 à 12 portent sur le code **hors primitives** : pages, composants du site et `src/features/**`. Quand une règle 1 à 12 cite une valeur d'une primitive (shadow-xs, transition-all du bouton, transition-[color,box-shadow] des champs, anneaux de focus…), la mention est indicative : c'est cette clause qui fait foi. `dropdown-menu.tsx` et `form.tsx`, non importés, ne relèvent pas de cette clause ; voir les règles 4 et 5 pour `dropdown-menu.tsx`.

**0 bis. Clause d'antériorité** (décision de Joseph).
- Une valeur visuelle déjà présente dans le code vivant à la date de cet inventaire (HEAD `cd3489e`, indiqué en en-tête) **n'est jamais un bloquant**, même si elle a été omise des listes ci-dessous. Pour s'en prévaloir, il suffit de citer son `fichier:ligne` dans ce HEAD.
- Les listes fermées des règles 1 à 12 s'appliquent aux valeurs **ajoutées** par une modification, c'est-à-dire aux lignes nouvelles ou changées du diff.
- Réutiliser une valeur existante dans un nouveau contexte reste soumis au jugement de cohérence (rythme, hiérarchie, alignement), mais ce n'est pas un nouvel élément visuel. Les valeurs marquées « existant, à ne pas étendre » appellent une justification explicite si on les réutilise.
- Une valeur omise découverte plus tard est ajoutée à l'inventaire, sans bloquer la tâche en cours.

1. **Police** : Inter uniquement, via `inter.className` du layout racine. Aucune autre famille, aucun `font-serif` ou `font-mono`.
2. **Couleurs autorisées** :
   - **Neutres** (liste des formes exactes) :
     - transparent : nav transparente en haut de la home, boutons outline sur fond sombre, champs Input et Textarea, variables du drapeau du champ téléphone, texte en dégradé des pages légales (citations au § 2.2) ;
     - white, white/5, white/10, white/15, white/20 et white/95 (citations au § 2.2) ;
     - slate-50, slate-100, slate-200, slate-300, slate-400, slate-500, slate-600, slate-700, slate-800 (survol et bordure sombres, et dégradé des pages légales), slate-900 et slate-950 ;
     - black/45 (hero home seulement) : `(marketing)/page.tsx:51` `bg-black/45`
     - black (hero home seulement) : `(marketing)/page.tsx:48` `bg-black`
     - slate-950/20 : `(marketing)/page.tsx:102` `shadow-slate-950/20`
     - slate-950/60 : `(marketing)/page.tsx:106` `bg-slate-950/60`
     - slate-800 dans le dégradé légal : `(marketing)/privacy/page.tsx:18` `via-slate-800`
   - **Accent** : `blue-50`, `blue-100`, `blue-200`, `blue-300`, `blue-600`, `blue-700`, `blue-800` (badge seulement), `blue-900/40` (carte CTA sombre seulement).
   - **Retours de formulaire** : `green-50`, `green-800`, `red-50`, `red-700`, `red-800`.
   - **Cas isolés existants, à ne pas étendre** : `green-100` (badge Réalisation), `emerald-400` (coches du hero home), `indigo-100`, `gray-50`, `gray-600` et `gray-900` (/realization, ProjectCard).
   - **Exception tierce existante** : `#03b2cb`, focus du sélecteur de pays du champ téléphone, apporté par `react-phone-number-input/style.css` (§ 2.2, Incohérence 22). Il ne doit pas être refusé là où il est, mais tout nouvel usage est interdit, et aucun code du site ne doit le reprendre.
   - **Exception existante propre à TubesCursor** (canvas WebGL du hero home) : les 7 couleurs #5e72e4, #8965e0 et #f5365c (`src/components/ui/tubes-cursor.tsx:84` `colors: ["#5e72e4", "#8965e0", "#f5365c"],`), puis #21d4fd, #b721ff, #f4d03f et #11cdef (`src/components/ui/tubes-cursor.tsx:87` `colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"],`). Autorisées dans TubesCursor seulement, interdites ailleurs.
   - **Hors DA** : les couleurs des e-mails HTML (section « Hors DA du site : e-mails HTML ») ne sont **pas** autorisées sur le site.
   - **Couleurs des seuls dégradés des pages légales** (existant, à ne pas étendre) : `blue-400` et `purple-400`, dans `(marketing)/privacy/page.tsx:21` `from-blue-400 via-purple-400 to-blue-600`, de même en `(marketing)/terms/page.tsx:21` `from-blue-400 via-purple-400 to-blue-600` et `(marketing)/mentions-legales/page.tsx:21` `from-blue-400 via-purple-400 to-blue-600`.
   - **Dégradés**, liste fermée des chaînes exactes (citations au § 2.3) :
     - `bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_70%,#1d4ed8_100%)]` (home)
     - `bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]` (heros internes)
     - `bg-[linear-gradient(180deg,#eef2ff_0%,#ffffff_100%)]` (liste du blog)
     - `bg-[linear-gradient(135deg,#0f172a_0%,#172554_100%)]` (carte CTA de l'article)
     - `bg-gradient-to-br from-blue-50 to-indigo-100` (/realization)
     - `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900` (pages légales)
     - `bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent` (titres des pages légales)
     - effet du § 2.3, point 7 : couleurs du canvas TubesCursor (voir l'exception TubesCursor ci-dessus).

     Interdits (valeurs ajoutées) : tout nouveau dégradé, et `purple-*` hors pages légales.
   - **Tokens shadcn** : régis par la clause 0. Tout token utilisé par une primitive existante et importée est autorisé à travers cette primitive. Les tokens de la base de `globals.css` sont aussi autorisés à cet endroit (`src/app/globals.css:117` `@apply border-border outline-ring/50;`, `src/app/globals.css:120` `@apply bg-background text-foreground;`). Hors de ces deux cas, aucun usage direct. Relevé indicatif :
     - primary et primary-foreground : `src/components/ui/button.tsx:13` `bg-primary text-primary-foreground`
     - background, accent et accent-foreground : `src/components/ui/button.tsx:17` `bg-background shadow-xs hover:bg-accent hover:text-accent-foreground`
     - card et card-foreground : `src/components/ui/card.tsx:10` `bg-card py-6 text-card-foreground`
     - input et muted-foreground : `src/components/ui/input.tsx:11` `border-input` et `src/components/ui/input.tsx:11` `placeholder:text-muted-foreground`
     - ring : `src/components/ui/input.tsx:12` `focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`
     - destructive (état invalide des champs) : `src/components/ui/input.tsx:13` `aria-invalid:border-destructive aria-invalid:ring-destructive/20` et `src/components/ui/textarea.tsx:10` `aria-invalid:border-destructive aria-invalid:ring-destructive/20`
     - border et foreground (base du document) : `src/app/globals.css:117` `@apply border-border outline-ring/50;` et `src/app/globals.css:120` `@apply bg-background text-foreground;`
     - secondary et secondary-foreground (variante secondary du bouton, présente dans la primitive mais non observée dans les pages) : `src/components/ui/button.tsx:19` `bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80`
     - muted-foreground dans CardDescription (présent dans la primitive, non utilisé dans le périmètre) : `src/components/ui/card.tsx:45` `text-sm text-muted-foreground`
     - popover et popover-foreground : seulement dans `dropdown-menu.tsx`, non importé (`src/components/ui/dropdown-menu.tsx:45` `bg-popover p-1 text-popover-foreground`). Ils sont autorisés au même titre que les règles 4 et 5, via cette primitive seulement.
3. **Rayons autorisés** (hors primitives ; le `rounded-md` des primitives relève de la clause 0) :
   - `rounded-md` : défaut des cartes, boutons et champs ;
   - `rounded-sm` : pastilles, badges, boutons compacts, blocs internes ;
   - `rounded-full` : points et pastilles numérotées ;
   - rounded-lg et rounded-xl : existants, à ne pas étendre.
     - rounded-xl : formules de /tarifs, voir § 5.
     - rounded-lg sur /tarifs et /templates : voir § 5.
     - rounded-lg sur les pages légales (blocs d'information slate-50) : `(marketing)/mentions-legales/page.tsx:43` `mb-6 rounded-lg bg-slate-50 p-6`, `(marketing)/mentions-legales/page.tsx:79` `mb-6 rounded-lg bg-slate-50 p-6`, `(marketing)/mentions-legales/page.tsx:122` `rounded-lg bg-slate-50 p-6`, `(marketing)/privacy/page.tsx:175` `mb-6 rounded-lg bg-slate-50 p-6` et `(marketing)/terms/page.tsx:150` `rounded-lg bg-slate-50 p-6`.
   - Interdits (valeurs ajoutées) : `rounded-2xl`, `rounded-3xl`, `rounded-[…]`.
4. **Ombres autorisées** (hors primitives ; pour les primitives, voir la clause 0) :
   - `shadow-xs` (primitives) ;
   - `shadow-sm` (cartes, nav) ;
   - `hover:shadow-lg` (cartes cliquables) ;
   - `shadow-xl shadow-slate-950/20` (aside du hero home seulement) ;
   - `shadow-none` ;
   - `ring-1 ring-slate-200` et `ring-1 ring-blue-100` ;
   - anneaux de focus des primitives.
   - Valeurs de `dropdown-menu.tsx`, non importé : shadow-md (contenu du menu) et shadow-lg (sous-menu). Elles ne sont autorisées **que via la primitive shadcn `src/components/ui/dropdown-menu.tsx`** si elle est importée un jour, par exemple pour un menu déroulant dans la navigation. Elles restent interdites partout ailleurs. Toute modification de leurs classes dans la primitive est elle aussi un nouvel élément visuel.
   - Interdits (valeurs ajoutées, hors cas ci-dessus) : shadow-md, shadow-2xl, ombres arbitraires et drop-shadow.
5. **Animations et effets autorisés** (hors primitives ; pour les primitives, voir la clause 0) :
   - TubesCursor (hero home uniquement) ;
   - `animate-walk-across` (footer uniquement) ;
   - `.scroll-reveal` / `ScrollReveal` (existant mais non utilisé en marketing : son introduction serait un ajout à justifier) ;
   - transitions, uniquement dans les combinaisons observées :
     - transition-colors seul, sans durée (liens, tuiles) : `src/components/navigation.tsx:112` `transition-colors hover:text-blue-600`, `src/components/navigation.tsx:144` `transition-colors hover:bg-blue-50 hover:text-slate-950`, `src/components/footer.tsx:39` `transition-colors hover:text-blue-200` et `(marketing)/templates/page.tsx:101` `transition-colors hover:border-blue-200 hover:bg-blue-50`
     - transition seul, sans durée : `(marketing)/blog/[slug]/page.tsx:202` `transition hover:bg-blue-50`
     - transition-all seul, sans durée (primitive Button) : `src/components/ui/button.tsx:8` `transition-all`
     - transition-all avec duration-300 (nav, cartes soulevées) : `src/components/navigation.tsx:80` `transition-all duration-300`, `src/app/_components/portfolio-preview.tsx:55` `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg` et `src/app/_components/project-card.tsx:48` `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`
     - transition-transform avec duration-300 (zoom d'image) : `src/app/_components/project-card.tsx:55` `transition-transform duration-300 hover:scale-105`
     - transition-[color,box-shadow] sans durée (champs de formulaire) : `src/components/ui/input.tsx:11` `transition-[color,box-shadow]` et `src/components/ui/textarea.tsx:10` `transition-[color,box-shadow]`
     - Aucune autre durée (duration-150, duration-500…) n'est observée.
   - `hover:-translate-y-1` et `hover:scale-105` (cartes et images de cartes) ;
   - `backdrop-blur` et `backdrop-blur-md` ;
   - `scroll-smooth`.
   - Animations tw-animate-css de `dropdown-menu.tsx`, non importé : animate-in, animate-out, fade-in-0, fade-out-0, zoom-in-95, zoom-out-95 et slide-in-from-* (lignes 45 et 233). Elles ne sont autorisées **que via la primitive shadcn `src/components/ui/dropdown-menu.tsx`** si elle est importée un jour, telles quelles. Elles restent interdites partout ailleurs.
   - Interdits (valeurs ajoutées, hors cas ci-dessus) : toute autre keyframe, toute autre classe animate- de tw-animate-css, et toute bibliothèque d'animation.
6. **Boutons** : la primitive Button avec l'une des surcharges A à F du § 7, ou la variante G « outline sans surcharge » (existant, à ne pas étendre) : `(marketing)/[metier]/page.tsx:73` `variant="outline"`, `(marketing)/[metier]/page.tsx:171` `variant="outline"` et `(marketing)/[metier]/page.tsx:178` `variant="outline"`. Sous-cas « outline sans surcharge de couleur, px-8 text-lg » : `(marketing)/realization/page.tsx:99` `className="px-8 text-lg"` (lignes 95 à 99).
   - Tailles observées : lg (`(marketing)/page.tsx:70` `size="lg"`), défaut, et sm dans ProjectCard (`src/app/_components/project-card.tsx:84` `size="sm"`).
   - Tout nouveau CTA d'action doit être la surcharge A (bleu) ou B (secondaire clair). Pas de nouvelle variante cva.
   - Les classes internes de la primitive relèvent de la clause 0.
7. **Typographie** : chaînes du § 3 (H1, H2, H3, corps, eyebrow `text-sm font-semibold uppercase tracking-[0.28em]` / `text-xs … tracking-[0.24em]`). Valeurs observées hors primitives (balayage par tokenisation) :
   - tailles : text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, `text-[10px]` (sous-titre de la marque) ; paliers sm:text-xl, sm:text-4xl, sm:text-5xl, md:text-5xl (/realization, existant, à ne pas étendre) et lg:text-7xl (H1 home) ;
   - graisses : font-medium, font-semibold et font-bold (font-bold existant sur /tarifs, ProjectCard, Contact et les pages légales, à ne pas étendre : voir « Incohérences ») ;
   - interlignages : leading-8, leading-7, leading-6, leading-relaxed, leading-tight et leading-none, avec les citations du § 3 « Interlignages observés » (`(marketing)/page.tsx:127` `leading-6`, `src/components/navigation.tsx:93` `leading-tight`). leading-relaxed est existant, à ne pas étendre (`(marketing)/tarifs/page.tsx:377` `leading-relaxed`, `src/app/_components/project-card.tsx:75` `leading-relaxed`) ;
   - tracking : tracking-tight, `tracking-[0.28em]`, `tracking-[0.24em]` et tracking-widest (/tarifs, existant, à ne pas étendre).

   Pas de nouvelle taille arbitraire `text-[…]` hors `text-[10px]`.
8. **Icônes** : lucide-react uniquement, en `h-4 w-4` (défaut), `h-5 w-5` ou `h-6 w-6`, couleur héritée, `text-blue-600`, `text-slate-400` ou `text-emerald-400` (existant). Tailles par prop, existantes et à ne pas étendre :
   - `(marketing)/realization/page.tsx:92` `size={20}`
   - `src/app/_components/project-card.tsx:92` `size={isTemplateCard ? 14 : 16}`, de même en `src/app/_components/project-card.tsx:106` `size={isTemplateCard ? 14 : 16}` et `src/app/_components/project-card.tsx:116` `size={isTemplateCard ? 14 : 16}`

   La taille par défaut des icônes dans un bouton (`size-4`) relève de la clause 0.
9. **Sections** : `px-6 lg:px-8` ; `py-20` (pages internes) ou `py-20 sm:py-24` (home) ; hero interne `pt-28 sm:pt-32` avec `pb-16` ou `pb-14`, puis section suivante en `pb-20` ; bande de réassurance `py-4` (citations au § 4).
   - Paddings existants, à ne pas étendre :
     - Contact : `src/app/_components/contact.tsx:10` `py-24 sm:py-32`
     - /realization : `(marketing)/realization/page.tsx:111` `py-16`, `(marketing)/realization/page.tsx:79` `py-20` et `(marketing)/realization/page.tsx:80` `container mx-auto px-4`
     - hero home : `(marketing)/page.tsx:48` `pt-28`, avec `sm:pt-36`
     - pages légales : `(marketing)/privacy/page.tsx:18` `py-24 sm:py-32` et `(marketing)/privacy/page.tsx:34` `py-16 sm:py-24`, idem en `(marketing)/terms/page.tsx:34` `py-16 sm:py-24` et `(marketing)/mentions-legales/page.tsx:34` `py-16 sm:py-24`
   - Fonds de section :
   - `bg-white` et `bg-slate-50` (alternance) ;
   - `bg-slate-900` (bandeau final) ;
   - `bg-black` (hero de la home : `(marketing)/page.tsx:48` `relative overflow-hidden bg-black`) ;
   - `bg-gray-50` (section projets de /realization, existant, à ne pas étendre : `(marketing)/realization/page.tsx:111` `bg-gray-50 py-16`) ;
   - `bg-slate-950` (footer : `src/components/footer.tsx:13` `border-t border-slate-800 bg-slate-950`) ;
   - dégradés de la règle 2.
   - Conteneurs de section autorisés : `max-w-7xl`, `max-w-6xl` (grille interne, Contact), `max-w-5xl`, `max-w-4xl` et `max-w-3xl` (bandeau final). Citations au § 4.
   - Largeurs de mesure de texte autorisées : `max-w-4xl`, `max-w-3xl`, `max-w-2xl`, `max-w-xl` (texte de carte) et `max-w-md` (texte du footer). Citations au § 4.
   - `max-w-none` : uniquement avec les classes `prose` des pages légales (inertes). Toute autre largeur **ajoutée** (`max-w-sm`, `max-w-lg`, `max-w-prose`, `max-w-[…]`) est un nouvel élément.
10. **Mobile** : grilles en `grid-cols-1` sous leur palier ; tableaux dans `overflow-x-auto` avec `min-w-[640px]` ; CTA empilés `flex-col … sm:flex-row` ; navigation burger sous `lg`.
11. **Feuilles CSS** : liste fermée des imports de CSS dans `src/` (recherche des imports de fichiers .css) :
    - `src/app/layout.tsx:6` `import "./globals.css";` : feuille globale du site. Elle importe elle-même deux feuilles : `src/app/globals.css:1` `@import "tailwindcss";` et `src/app/globals.css:2` `@import "tw-animate-css";`. Elle déclare aussi `src/app/globals.css:4` `@custom-variant dark (&:is(.dark *));`, une variante sombre déclarée mais jamais activée (§ 2.1) ;
    - `src/features/contact-form/phone-field.tsx:10` `import "react-phone-number-input/style.css";` : **seule feuille tierce** ;
    - `src/app/(projects)/je/je-gallery.tsx:5` `import styles from "./je.module.css";` : module CSS du projet `je`, hors périmètre.

    Tout import de feuille CSS **ajouté** dans le périmètre (tierce, module ou globale), y compris un nouveau `@import`, `@plugin` ou `@custom-variant` dans `globals.css`, est un **bloquant**. Toute surcharge supplémentaire des variables `--PhoneInput…` de la feuille tierce l'est aussi.
12. **Valeurs et propriétés arbitraires** : liste fermée pour le code **hors primitives**. Elle a été relevée par tokenisation de toutes les classes du code vivant hors `src/components/ui/` : `src/app/(marketing)/**`, `src/app/layout.tsx`, `contact.tsx`, `portfolio-preview.tsx`, `project-card.tsx`, `navigation.tsx`, `footer.tsx`, `templates-showcase.tsx`, `tubes-cursor.tsx` et `src/features/contact-form/**`, plus `src/app/globals.css`, relu en entier : il ne contient aucune valeur arbitraire entre crochets, seulement la base `@apply`, les keyframes `walk-across` et la classe `.scroll-reveal`.
    - Propriétés arbitraires `[--…]` : **seules** les deux de `src/features/contact-form/phone-field.tsx:93` `[--PhoneInputCountryFlag-borderColor:transparent] [--PhoneInputCountryFlag-backgroundColor--loading:transparent]`. Toute propriété arbitraire de ce type **ajoutée** est un **bloquant**.
    - Valeurs arbitraires `-[…]` hors primitives (liste complète) :
      - les quatre dégradés `bg-[linear-gradient(…)]` de la règle 2 ;
      - `tracking-[0.28em]` et `tracking-[0.24em]` (§ 3) ;
      - `text-[10px]` (`src/components/navigation.tsx:98` `text-[10px]`, `src/components/footer.tsx:28` `text-[10px]`) ;
      - `min-w-[640px]` (`(marketing)/tarifs/page.tsx:444` `min-w-[640px]`, `(marketing)/seo-geo/page.tsx:220` `min-w-[640px]`) ;
      - les grilles `(marketing)/page.tsx:52` `lg:grid-cols-[minmax(0,1fr)_380px]`, `(marketing)/blog/[slug]/page.tsx:128` `lg:grid-cols-[minmax(0,1fr)_320px]` et `src/components/footer.tsx:14` `lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]` ;
      - le piège à robots `src/features/contact-form/contact-form.tsx:89` `-left-[9999px]`.
    - Sélecteurs arbitraires hors primitives (`[&…]`, `has-[…]`, `data-[…]`, `group-data-[…]`) : **aucun**. Le balayage n'en trouve pas.
    - Dans les primitives : régies par la clause 0, qui fait foi. À titre indicatif : `src/components/ui/button.tsx:8` `focus-visible:ring-[3px]`, `src/components/ui/input.tsx:11` `transition-[color,box-shadow]` et `src/components/ui/card.tsx:23` `grid-rows-[auto_auto]`, ainsi que les sélecteurs cités dans la clause 0.

      Toute autre valeur arbitraire **ajoutée** hors primitives est un nouvel élément visuel.
