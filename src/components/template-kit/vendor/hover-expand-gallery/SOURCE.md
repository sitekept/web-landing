# Hover Expand Gallery

- **Nom** : Hover Expand Gallery
- **URL** : https://21st.dev/@kedhareswer/components/hover-expand-gallery
- **Auteur** : kedhareswer
- **Licence** : MIT (affichée « License: mit » sur la page 21st.dev). Conformément aux conditions de 21st.dev, la licence est conservée et l'auteur crédité ici et dans l'en-tête du composant.
- **Date de récupération** : 2026-11-20
- **Id 21st.dev** : 27010 (composant 13602)
- **Installation d'origine** : `npx shadcn@latest add "https://21st.dev/r/kedhareswer/hover-expand-gallery"` (non utilisée : code recopié puis réécrit)

## Fichiers

- `hover-expand-gallery.tsx` : composant (client : état du panneau ouvert).
- `index.ts` : exports. Ne pas ajouter au barrel `@/components/template-kit` ; import par module :
  `import { HoverExpandGallery } from "@/components/template-kit/vendor/hover-expand-gallery";`

## Modifications à l'intake

- Export nommé `HoverExpandGallery` (l'original exportait par défaut) ; fichier `"use client"` avec `clsx` (pas `cn()`).
- Suppression de `DEFAULT_ITEMS` (dégradés hexadécimaux) : `items` est obligatoire. Nouveau type d'item : `{ title, meta?, image: { src, alt } }` (plus de `src`/`alt`/`accent` optionnels).
- `<img>` remplacé par `next/image` (`fill`, `object-cover`) ; `sizes` est une prop obligatoire, `priority` (booléen) s'applique à l'image du panneau ouvert au départ.
- Image sortie du bouton : son `alt` ne s'ajoute plus au nom accessible du bouton, et elle ne capte pas le pointeur (`pointer-events-none` sur desktop). Sur mobile, le bouton reste premier dans le DOM et l'image s'affiche au-dessus grâce à `flex-col-reverse`.
- Accessibilité : `aria-current={isActive}` remplacé par `aria-expanded` + `aria-controls` vers le panneau image ; `aria-label` du bouton supprimé (il doublonnait le texte visible) ; image d'un panneau fermé en `aria-hidden` ; nouvelle prop `label` qui nomme la liste (`role="list"` pour Safari) ; `<section>` remplacée par un `<div>` (pas de repère de page de plus, la section de la page porte déjà le titre) ; anneau de focus en `outline` (visible en mode contraste forcé).
- Tokens : `bg-background`, `text-foreground`, `text-foreground/40`, `border-border` remplacés par `bg-tpl-surface`, `text-tpl-ink`, `text-tpl-ink-muted`, `border-tpl-line` ; `text-[14px]`, `text-[13px]`, `rounded-[10px]` remplacés par `text-tpl-sm`, `text-tpl-xs`, `rounded-tpl` ; fond d'attente de l'image en `bg-tpl-line` (au lieu de `accent`).
- Hauteur desktop par défaut `36rem` (au lieu de `100svh`).
- Suppression de la prop `onChange` (une fonction n'est pas sérialisable depuis une vue serveur).
- Conservés : mécanique (`flex-basis` animé au-dessus de `lg`, accordéon sous `lg`), `motion-reduce`, ouverture au survol souris, au focus et au clic, commentaires de l'auteur (traduits).
- Aucun texte en dur ; aucune dépendance ajoutée.
