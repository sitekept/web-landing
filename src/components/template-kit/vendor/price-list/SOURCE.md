# Price List (Restaurant Menu Block)

- **Nom** : Restaurant Menu Block (le composant intégré s'appelle `PriceList`)
- **URL** : https://21st.dev/@olewandowski1/components/menu-1
- **Auteur** : olewandowski1
- **Licence** : MIT (affichée « License: mit » sur la page 21st.dev). Conformément aux conditions de 21st.dev, la licence est conservée : texte MIT complet dans `LICENSE` (copyright au nom de l'auteur, sans année), auteur et URL rappelés en tête du composant et ici.
- **Date de récupération** : 2026-11-21
- **Id 21st.dev** : 27052 (composant 13626)
- **Installation d'origine** : `npx shadcn@latest add "https://21st.dev/r/olewandowski1/menu-1"` (non utilisée : code recopié puis réécrit)

## Fichiers

- `price-list.tsx` : composant (serveur).
- `LICENSE` : licence MIT.
- `index.ts` : exports. Ne pas ajouter au barrel `@/components/template-kit` ; import par module :
  `import { PriceList } from "@/components/template-kit/vendor/price-list";`

## Modifications à l'intake

- `MenuBlock` (composant de démonstration à données figées, export par défaut) devient `PriceList`, export nommé, piloté par des props. **Toutes les données de démonstration sont supprimées** : tableau `courses`, plats, prix, étiquettes de régime, titre « The Menu », texte d'introduction (horaires, service compris) et mention d'allergies. Aucun nom de plat, de lieu ou de personne de l'original n'est conservé.
- Suppression de la `<section>` d'origine, de son en-tête et de la mention de bas de page : l'en-tête vient de `TemplateSection`, les mentions de la vue. Le composant ne rend que la grille des groupes.
- Nouvelle forme : `groups: { title, items: { name, detail?, price, note? }[] }[]`. `Course` / `Dish` deviennent `PriceListGroup` / `PriceListItem` ; `dishes` devient `items`. `detail` devient facultatif. Le prix est une chaîne déjà formatée par la copie (« 7 € », « dès 89 € ») : le composant n'ajoute ni devise ni unité. Les groupes sans élément ne sont pas rendus.
- Nouvelles props : `titleAs` (`h2`, `h3` ou `h4`, `h3` par défaut ; l'original fixait `h3` sous un `h2` propre à la section) et `columns` (`1` ou `2`, à partir de `md`) à la place de la grille fixe à deux colonnes. Colonnes en classes littérales.
- Couleurs et typographie : `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `font-heading` remplacés par `text-tpl-ink`, `text-tpl-ink-muted`, `border-tpl-ink-muted/70` (points de conduite, plus lisibles que `border-tpl-line` qui est à 14 %), `font-tpl-display` avec `font-(weight:--tpl-display-weight)`, `font-tpl-text`, `text-tpl-sm|base|xs`. Plus de `max-w-4xl`, `px-6`, `py-16` : l'espacement et la largeur sont ceux de `TemplateSection`.
- L'étiquette `note` n'est plus du texte courant collé à la description mais une pastille à bordure `border-tpl-line rounded-tpl-pill` (information portée par le texte, pas par la couleur).
- Ajouts typographiques : titres de groupe en `tracking-tpl-eyebrow` et `uppercase` ; nom et prix en `font-medium`, prix en `tabular-nums` (chiffres alignés) ; points de conduite relevés de `-translate-y-[0.2em]` pour tomber sur la ligne de base du texte ; clés React `${index}-${titre}` (groupes) et `${nom}-${index}` (éléments) pour que deux titres ou deux noms identiques ne collisionnent pas.
- Accessibilité et robustesse : groupes en `div` + titre + `ul role="list"` (pas de `section` sans nom), points de conduite `aria-hidden`, prix `whitespace-nowrap` et `shrink-0` (un nom long passe à la ligne, jamais le prix), `min-w-0` sur le nom.
- Aucun état, aucune animation, aucune dépendance : composant serveur.
