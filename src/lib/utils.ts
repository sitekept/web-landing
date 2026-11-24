import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * `cn()` connaît les tokens `--*-tpl-*` déclarés dans le bloc `@theme` de
 * `src/app/globals.css`. Sans cela, tailwind-merge ne sait pas que `text-tpl-xl`
 * est une taille (et non une couleur), ni que `rounded-tpl` est un rayon : il
 * écraserait `text-tpl-ink` par `text-tpl-xl` et inversement.
 *
 * Chaque liste reprend les noms du `@theme` ; en ajouter un là-bas demande de
 * l'ajouter ici. Les classes Tailwind standard gardent leur comportement.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      // `text-tpl-xs` … `text-tpl-3xl` : classe font-size.
      text: [
        "tpl-xs",
        "tpl-sm",
        "tpl-base",
        "tpl-lg",
        "tpl-xl",
        "tpl-2xl",
        "tpl-3xl",
      ],
      // `rounded-tpl`, `rounded-tpl-pill`.
      radius: ["tpl", "tpl-pill"],
      // `shadow-tpl-sm`, `shadow-tpl-lg`.
      shadow: ["tpl-sm", "tpl-lg"],
      // `leading-tpl-display`, `leading-tpl-body`.
      leading: ["tpl-display", "tpl-body"],
      // `tracking-tpl-eyebrow`.
      tracking: ["tpl-eyebrow"],
      // `max-w-tpl-measure`.
      container: ["tpl-measure"],
      // `py-tpl-section` et autres espacements.
      spacing: ["tpl-section"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
