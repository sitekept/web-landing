import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";

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

/**
 * Classes littérales : Tailwind ne génère pas de classe construite à la volée.
 *
 * `fill` : pas de ratio, le conteneur prend la hauteur de son parent
 * (`h-full`, ce que fait une cellule de grille étirée) ou celle d'un
 * `min-h-[…]` passé en `className`. À réserver aux images qui doivent remplir
 * la hauteur d'une ligne de grille ou d'une colonne (collage, galerie à
 * hauteurs inégales) : l'espace est réservé tant que le parent ou le `min-h`
 * le fixe, donc toujours sans décalage de mise en page. Sans hauteur ni parent
 * qui en donne une, un conteneur `fill` s'effondre à 0 px : poser alors un
 * ratio.
 */
const RATIO: Record<TemplateMediaRatio | "fill", string> = {
  fill: "h-full",
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
  /** Ratio fixe, ou `fill` (voir plus haut : la hauteur vient du parent ou d'un `min-h`). */
  ratio: TemplateMediaRatio | "fill";
  /** Obligatoire avec `fill` : sans lui, next/image télécharge la plus grande variante. */
  sizes: string;
  /** À réserver à l'image visible sans défilement (LCP). */
  priority?: boolean;
  rounded?: TemplateMediaRounded;
  /** Posé sur le conteneur (largeur, marges, `min-h-[…]` avec `ratio="fill"`…). */
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

/**
 * Hauteur minimale de `TemplateHeroMedia` : `screen` = écran entier
 * (`100svh`, la barre d'adresse mobile ne la fait pas varier), `tall` = 72 %
 * de l'écran, `auto` = celle du contenu.
 */
export type TemplateHeroMediaHeight = "screen" | "tall" | "auto";

const HERO_HEIGHT: Record<TemplateHeroMediaHeight, string> = {
  screen: "min-h-[100svh]",
  tall: "min-h-[72svh]",
  auto: "",
};

export type TemplateHeroMediaProps = {
  src: ImageProps["src"];
  /** Obligatoire. Chaîne vide `""` si la photo est purement décorative. */
  alt: string;
  /** `true` pour le héros visible sans défilement (LCP). */
  priority?: boolean;
  height?: TemplateHeroMediaHeight;
  className?: string;
  /** Contenu posé sur la photo (titre, texte, boutons). */
  children?: ReactNode;
};

/**
 * Bloc pleine largeur : photo de fond (`next/image` `fill`, `sizes="100vw"`),
 * voile issu des tokens `inverse` et contenu par-dessus.
 *
 * Le voile (`--tpl-inverse` à 78 % en haut, 88 % en bas) et `data-tone="inverse"`
 * garantissent un texte lisible : le contenu hérite de `--tpl-ink` rebindé
 * (`--tpl-inverse-ink`), même sur une photo claire. Les liens et boutons du
 * contenu suivent les mêmes règles que dans une section inverse (`TemplateLink`
 * `variant="inverse"` ou `outline`, pas `solid`). La photo ne porte aucun texte
 * à lire : l'`alt` la décrit seulement.
 *
 * Le texte secondaire (`text-tpl-ink-muted`) y est rebindé à 90 % de l'encre
 * (68 % ailleurs) : il garde 4,5:1 sur la photo, même sur une image blanche (pire cas), tant que le
 * token `inverse` reste sombre (luminosité oklch ≤ 0,30).
 *
 * Sous un en-tête `floating`, le padding haut du contenu se règle avec le token
 * `--tpl-header-offset` : `pt-[calc(var(--tpl-header-offset)+4rem)]`.
 * Composant serveur.
 */
export function TemplateHeroMedia({
  src,
  alt,
  priority = false,
  height = "tall",
  className,
  children,
}: TemplateHeroMediaProps) {
  return (
    <div
      data-tone="inverse"
      className={cn(
        "relative flex w-full flex-col overflow-hidden bg-tpl-inverse text-tpl-ink [--tpl-ink-muted:color-mix(in_oklch,var(--tpl-ink)_90%,var(--tpl-surface))]",
        HERO_HEIGHT[height],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-tpl-inverse/88 to-tpl-inverse/78"
      />
      <div className="relative flex w-full flex-1 flex-col">{children}</div>
    </div>
  );
}
