# Testimonials with Marquee

- **Nom** : Testimonials with Marquee
- **URL** : https://21st.dev/@serafimcloud/components/testimonials-with-marquee
- **Auteur** : serafimcloud (composant « inspiré de Launch UI », selon la page)
- **Licence** : MIT (affichée « License: mit » sur la page 21st.dev). Conformément aux conditions de 21st.dev, la licence est conservée : texte MIT complet dans `LICENSE` (copyright au nom de l'auteur, sans année), auteur et URL rappelés en tête du composant et ici.
- **Date de récupération** : 2026-11-20
- **Id 21st.dev** : 822 (composant 983)
- **Installation d'origine** : `npx shadcn@latest add "https://21st.dev/r/serafimcloud/testimonials-with-marquee"` (non utilisée : code recopié puis réécrit)

## Fichiers

- `testimonials-marquee.tsx` : composant (serveur).
- `LICENSE` : licence MIT.
- `index.ts` : exports. Ne pas ajouter au barrel `@/components/template-kit` ; import par module :
  `import { TestimonialsMarquee } from "@/components/template-kit/vendor/testimonials-marquee";`
- Keyframes et variable d'animation : bloc `@theme inline` (`--animate-tpl-marquee`, `@keyframes tpl-marquee`) dans `src/app/globals.css`.

## Modifications à l'intake

- Fusion de `TestimonialsSection` et de `TestimonialCard` (`components/ui/testimonial-card.tsx`) en un seul fichier.
- Suppression de la section d'origine (`<section>`, `<h2>`, description) : l'en-tête vient de `TemplateSection`, le composant ne rend que la bande.
- Suppression de `@radix-ui/react-avatar` (via `components/ui/avatar`) et de toute photo d'avatar : les auteurs sont fictifs. Remplacé par une pastille d'initiales `bg-tpl-accent text-tpl-accent-ink` (désactivable).
- Suppression du lien optionnel (`href`) et du type `TestimonialAuthor` (`handle`, `avatar`) ; nouvelle forme `{ quote, name, detail?, rating?, ratingLabel? }`.
- Ajout d'une note en étoiles optionnelle (`lucide-react`), dont le texte accessible (`ratingLabel`) vient de la copie, obligatoire quand `rating` est fourni.
- Couleurs : `bg-background`, `text-foreground`, `text-muted-foreground`, `from-muted/*`, `from-background` remplacés par `bg-tpl-raised`, `border-tpl-line`, `text-tpl-ink`, `text-tpl-ink-muted`, `shadow-tpl-sm`, `rounded-tpl` ; fondus de bord `from-tpl-surface | raised | inverse` (prop `tone`). Plus de dégradé de carte ni de `max-w-[320px]`, `text-md`, `max-w-container`.
- Keyframes : l'original supposait une animation `animate-marquee` dans la config Tailwind (absente en v4) ; déclarée dans `globals.css`. Variables `--duration` / `--gap` renommées `--tpl-marquee-duration` / `--tpl-marquee-gap`.
- Boucle : l'original rendait 4 copies dans une seule piste (la boucle laissait un vide) ; remplacé par deux pistes identiques de largeur au moins égale à la bande, la seconde en `aria-hidden`.
- Accessibilité ajoutée : région nommée (`label`), focalisable, pause au survol et au focus, listes `ul` / `li`, `figure` / `blockquote` / `figcaption`.
- `prefers-reduced-motion: reduce` : animation coupée, piste dupliquée et fondus masqués, cartes à la ligne.
- `dir="rtl"` : la piste part vers la droite (`--tpl-marquee-dir`).
- Aucun texte en dur ; aucune dépendance ajoutée.

## Modifications après l'intake

- 2026-11-22 : `rating` accepte un `number` (arrondi et borné à 1..5 par le composant) ; helper `clampTestimonialRating` exporté. Prop `starTone` (`accent` par défaut, `ink`) pour des étoiles à l'encre du fond.
