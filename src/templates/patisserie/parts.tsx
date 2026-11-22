import { Star } from "lucide-react";

/** `id` des sections : cibles des ancres de la navigation (`/patisserie#collections`). */
export const ANCHORS = {
  home: "accueil",
  collections: "collections",
  signature: "signature",
  contact: "contact",
} as const;

/** Cinq étoiles pleines, décrites une seule fois pour les lecteurs d'écran. */
export function Stars({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex items-center gap-1 text-tpl-accent"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" className="size-4 fill-current" />
      ))}
    </div>
  );
}
