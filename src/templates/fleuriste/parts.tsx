import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  Star,
  type LucideIcon,
} from "lucide-react";

import { TemplateMedia } from "@/components/template-kit/media";
import type { FleuristeIconKey } from "@/content/templates/fleuriste";
import { cn } from "@/lib/utils";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/fleuriste.ts`).
 */
export const ICONS: Record<FleuristeIconKey, LucideIcon> = {
  calendar: Calendar,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
};

/** `id` des sections : cibles des ancres de la navigation (`/fleuriste#projets`). */
export const ANCHORS = {
  home: "accueil",
  projects: "projets",
  studio: "atelier",
  contact: "contact",
} as const;

/**
 * Photo qui remplit son parent (cellule de grille étirée ou `min-h`) : le
 * conteneur porte le rayon, l'image reste `next/image` via `TemplateMedia`.
 */
export function FillPhoto({
  src,
  alt,
  sizes,
  className,
  priority = false,
  veil = false,
  zoom = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Voile léger de l'encre sur la photo, comme la grande photo du héros. */
  veil?: boolean;
  /** Léger zoom de l'image au survol (coupé en mouvement réduit). */
  zoom?: boolean;
}) {
  return (
    <div
      className={cn("group relative overflow-hidden rounded-tpl", className)}
    >
      <TemplateMedia
        src={src}
        alt={alt}
        ratio="fill"
        rounded="none"
        sizes={sizes}
        priority={priority}
        className={cn(
          "absolute inset-0",
          zoom
            ? "transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            : null
        )}
      />
      {veil ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-tpl-inverse/5 to-tpl-inverse/20"
        />
      ) : null}
    </div>
  );
}

/** Cinq étoiles pleines, décrites une seule fois pour les lecteurs d'écran. */
export function Stars({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex items-center gap-1 text-tpl-eyebrow"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" className="size-4 fill-current" />
      ))}
    </div>
  );
}

/** Sur-titre en capitales espacées, comme celui de `TemplateHeading`. */
export const EYEBROW =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";
