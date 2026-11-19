import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

/**
 * Image du kit de templates, basée sur `next/image`.
 *
 * Remplace les images en fond CSS et les balises image natives des démos. L'image remplit
 * (`fill`) un conteneur à ratio fixe : l'espace est réservé avant le
 * chargement, donc pas de décalage de mise en page. Rayon : token `--tpl-radius`.
 *
 * Les sources distantes passent par `images.remotePatterns` de
 * `next.config.ts` (aujourd'hui `images.unsplash.com`, seul domaine utilisé).
 *
 * Règle du kit : un nouveau besoin visuel devient d'abord un token. Il ne
 * devient un enum (prop) que s'il change le DOM ou la structure, et jamais un
 * nom de template.
 */

export type TemplateMediaRatio =
  | "1/1"
  | "4/3"
  | "3/4"
  | "3/2"
  | "2/3"
  | "16/9"
  | "9/16"
  | "21/9"
  | "5/4"
  | "4/5";

export type TemplateMediaRounded = "radius" | "pill" | "none";

/** Classes littérales : Tailwind ne génère pas de classe construite à la volée. */
const RATIO: Record<TemplateMediaRatio, string> = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "3/2": "aspect-[3/2]",
  "2/3": "aspect-[2/3]",
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
  "21/9": "aspect-[21/9]",
  "5/4": "aspect-[5/4]",
  "4/5": "aspect-[4/5]",
};

const ROUNDED: Record<TemplateMediaRounded, string> = {
  radius: "rounded-tpl",
  pill: "rounded-tpl-pill",
  none: "rounded-none",
};

export type TemplateMediaProps = {
  src: ImageProps["src"];
  /** Obligatoire. Chaîne vide `""` pour une image purement décorative. */
  alt: string;
  ratio: TemplateMediaRatio;
  /** Obligatoire avec `fill` : sans lui, next/image télécharge la plus grande variante. */
  sizes: string;
  /** À réserver à l'image visible sans défilement (LCP). */
  priority?: boolean;
  rounded?: TemplateMediaRounded;
  /** Posé sur le conteneur (largeur, marges…). */
  className?: string;
};

export function TemplateMedia({
  src,
  alt,
  ratio,
  sizes,
  priority = false,
  rounded = "radius",
  className,
}: TemplateMediaProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-tpl-line",
        RATIO[ratio],
        ROUNDED[rounded],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
