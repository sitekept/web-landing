# Image Compare

- **Nom** : Image Compare
- **URL** : https://21st.dev/@aadixc0de/components/image-compare
- **Auteur** : aadixc0de (le code d'origine porte la mention « From chatcn, chat, voice and agent UI for shadcn: https://chatcn.dev »)
- **Licence** : MIT (affichée « License: mit » sur la page 21st.dev). Conformément aux conditions de 21st.dev, la licence est conservée : texte MIT complet dans `LICENSE` (copyright au nom de l'auteur, sans année), auteur et URL rappelés en tête du composant et ici.
- **Date de récupération** : 2026-11-21
- **Id 21st.dev** : 45490 (composant 26219)
- **Installation d'origine** : `npx shadcn@latest add "https://21st.dev/r/aadixc0de/image-compare"` (non utilisée : code recopié puis réécrit)

## Fichiers

- `image-compare.tsx` : composant (client : position de la poignée, gestes pointeur et clavier).
- `LICENSE` : licence MIT.
- `index.ts` : exports. Ne pas ajouter au barrel `@/components/template-kit` ; import par module :
  `import { ImageCompare } from "@/components/template-kit/vendor/image-compare";`

## Modifications à l'intake

- Export nommé `ImageCompare` (l'original exportait aussi par défaut) ; fichier `"use client"` avec `clsx` (pas `cn()`). Plus aucun `cn`, `React.*` ni `import * as React`.
- Suppression du thème « chatcn » : la feuille CSS (`CHATCN_CSS`) que l'original injectait dans `document.head` au chargement du module, toutes les variables `--chatcn-*` (couleurs `oklch` en dur, ombres, rayons, courbes) et la classe `chatcn-focus`. Remplacés par les tokens `tpl-*` : cadre `bg-tpl-line rounded-tpl`, poignée `bg-tpl-inverse-ink text-tpl-inverse` avec liseré `border-tpl-inverse` et halo `inverse-ink` / `inverse` en `box-shadow` sur variables, trait `bg-tpl-inverse-ink` avec filet et halo `inverse`, focus `ring-tpl-accent` avec `ring-offset-tpl-inverse` (la paire `inverse` / `inverse-ink` n'est pas remappée par le bloc `[data-tone="inverse"]` de `globals.css`, contrairement à `raised` : la poignée reste visible dans une section inverse et sur photo très claire ou très sombre grâce à la double teinte), pastilles de libellé `bg-tpl-inverse/80 text-tpl-inverse-ink`.
- Suppression de la fabrique d'icônes maison (`createIcon`, `forwardRef`) et des icônes `ImageOff`, `GripVertical`, `GripHorizontal` : une seule flèche double en SVG inline, `aria-hidden`.
- Images : `<img>` natif remplacé par `next/image` en `fill` (`sizes` obligatoire, `priority` facultatif). Suppression du repli « Image unavailable » (texte en dur anglais, et `next/image` réserve l'espace) et de la prise en charge de nœuds React à la place d'une image : `before` et `after` sont toujours `{ src, alt }`.
- Cadre : `aspectRatio` (nombre ou « 3:2 ») remplacé par `ratio`, le même enum que `TemplateMedia` (`1/1`, `4/3`, `3/2`, `16/9`…), en classes littérales.
- Textes : `beforeLabel` / `afterLabel` (« Original » / « Edited » par défaut) deviennent obligatoires, sans valeur par défaut. Le nom accessible de la poignée (`Compare … and …`) devient la prop obligatoire `handleLabel` ; le texte de valeur (`… %, …`) devient la prop `valueText` à jetons `{before}` / `{after}`, annoncée seulement si elle est fournie. Plus aucune chaîne dans le composant.
- Libellés : posés dans chaque couche (la pastille « avant » est rognée avec l'image « avant », la pastille « après » est recouverte quand la poignée avance) au lieu de mesurer leur largeur par `ResizeObserver` pour les masquer à l'approche de la poignée.
- Suppression : orientation verticale, `disabled`, mode contrôlé (`position`), rappels `onPositionChange` / `onPositionCommit` (des fonctions en prop interdiraient l'appel depuis une vue serveur), bulle de valeur affichée pendant le glissement, glissement animé du clic (donc plus de `transition` ni de `motion-reduce`), prise en charge de `dir="rtl"` (templates FR / EN seulement), `ResizeObserver` et mesures. Le composant ne passe plus `...props` au `div`.
- Conservé : surface qui capte le pointeur, capture du pointeur, seuil tactile de 6 px avant de glisser (le défilement vertical de la page reste possible, `touch-action: pan-y`), tap = saut, poignée `role="slider"` avec `aria-valuemin/max/now`, clavier flèches (Maj = pas ×10), PageUp / PageDown, Début (tout « après »), Fin (tout « avant »), zone tactile élargie autour de la poignée (`before:-inset-1.5`).
- Nouveau : prop `defaultPosition` (50 par défaut) et `step` (1 par défaut).
- Aucun texte en dur ; aucune dépendance ajoutée (ni `motion`).
