"use client";

// Hover Expand Gallery - kedhareswer - https://21st.dev/@kedhareswer/components/hover-expand-gallery
// MIT, voir LICENSE.

import { clsx } from "clsx";
import Image, { type ImageProps } from "next/image";
import { useId, useState, type CSSProperties } from "react";

/**
 * Galerie à panneaux qui s'ouvrent au survol (21st.dev, « Hover Expand
 * Gallery »). Voir `SOURCE.md` pour l'origine, la licence et les modifications.
 *
 * Au-dessus de `lg` : une rangée de panneaux, un seul ouvert, dont la
 * `flex-basis` s'anime. En dessous : un accordéon vertical. Mécanique en CSS
 * pur (aucune bibliothèque d'animation) ; seul l'état du panneau ouvert est
 * client. Transitions coupées sous `prefers-reduced-motion`.
 *
 * Accessibilité : chaque titre est un bouton `aria-expanded` qui contrôle son
 * panneau image. L'image d'un panneau fermé est masquée aux lecteurs d'écran
 * (`aria-hidden`). La liste est nommée par `label` (copie FR / EN).
 *
 * Tous les textes (titres, légendes, `alt`, `label`) viennent des props, donc
 * de la copie du template ; aucune fonction n'est acceptée en prop pour que le
 * composant reste appelable depuis une vue serveur.
 */

/**
 * Largeur de la rangée sur desktop. `capped` : le panneau ouvert plafonne à
 * `maxOpenWidth` et la rangée se centre (bande portrait, plus étroite que le
 * contenu de la page). `fill` : le panneau ouvert prend tout l'espace laissé
 * par les rails, donc la rangée occupe toute la largeur du bloc qui la porte
 * (bords gauche et droit alignés sur les autres blocs de la section).
 */
export type HoverExpandGalleryWidth = "capped" | "fill";

export type HoverExpandGalleryItem = {
  /** Le libellé. Tourné dans le rail sur desktop ; sous `lg`, affiché en entier (à la ligne si besoin). */
  title: string;
  /** Libellé secondaire (année, rôle, lieu…). Affiché seulement sur le panneau ouvert ; replié sous `lg`, il reste lu par les lecteurs d'écran. */
  meta?: string;
  /** `alt` obligatoire : texte de la copie, traduit. */
  image: { src: ImageProps["src"]; alt: string };
};

export type HoverExpandGalleryProps = {
  items: readonly HoverExpandGalleryItem[];
  /** Nom accessible de la liste (copie FR / EN), ex. « Nos réalisations ». */
  label: string;
  /**
   * Attribut `sizes` de `next/image` : il décrit la largeur réelle d'un
   * panneau ouvert, ex. `"(min-width: 1024px) 520px, 100vw"` avec la valeur
   * par défaut de `maxOpenWidth`, ou `"(min-width: 1024px) 1100px, 100vw"` en
   * `width="fill"` (largeur du contenu moins les rails, au plus ~1100 px).
   */
  sizes: string;
  /** Charge en priorité l'image du panneau ouvert au départ (image visible sans défilement). */
  priority?: boolean;
  /**
   * Hauteur de la rangée sur desktop. Doit être une longueur définie : tout ce
   * qui est sous la racine est en pourcentage, donc `"100%"` s'effondre à 0
   * sauf si chaque ancêtre jusqu'à <html> a une vraie hauteur. Ignorée sous
   * 1024 px, où l'accordéon se dimensionne seul.
   */
  height?: string;
  /**
   * Largeur d'un panneau fermé sur desktop, en px, aussi largeur du rail de
   * libellé. Le panneau ouvert prend le reste : garder
   * `items.length * railWidth` nettement sous 1024 px.
   */
  railWidth?: number;
  /**
   * Largeur de la rangée sur desktop (`capped` par défaut), voir
   * `HoverExpandGalleryWidth`. Ignorée sous 1024 px.
   */
  width?: HoverExpandGalleryWidth;
  /**
   * Plafond de largeur du panneau ouvert sur desktop, en px (`width="capped"`
   * seulement). Garde une bande portrait plutôt qu'un bloc presque carré quand
   * il y a peu de panneaux ; la rangée se centre dans l'espace restant.
   */
  maxOpenWidth?: number;
  /** Hauteur de l'image du panneau ouvert sous 1024 px, en px. */
  mobileImageHeight?: number;
  /** Panneau ouvert au départ. */
  defaultIndex?: number;
  /** Durée d'ouverture / fermeture, en ms. */
  duration?: number;
  className?: string;
};

export function HoverExpandGallery({
  items,
  label,
  sizes,
  priority = false,
  height = "36rem",
  railWidth = 64,
  width = "capped",
  maxOpenWidth = 520,
  mobileImageHeight = 420,
  defaultIndex = 0,
  duration = 620,
  className,
}: HoverExpandGalleryProps) {
  const [active, setActive] = useState(defaultIndex);
  const baseId = useId();

  const open = (index: number) => {
    if (index !== active) setActive(index);
  };

  // `fill` : le panneau ouvert = 100 % de la rangée moins les rails des autres.
  // La somme des `flex-basis` fait alors exactement 100 %, rien ne rétrécit.
  const openBasis =
    width === "fill"
      ? `calc(100% - ${(items.length - 1) * railWidth}px)`
      : "var(--hx-max)";

  const rootVars = {
    "--hx-h": height,
    "--hx-rail": `${railWidth}px`,
    "--hx-max": `${maxOpenWidth}px`,
    "--hx-t": `${duration}ms`,
  } as CSSProperties;

  return (
    <div
      style={rootVars}
      className={clsx(
        "relative w-full bg-tpl-surface text-tpl-ink lg:h-(--hx-h) lg:overflow-hidden",
        className
      )}
    >
      <ul
        role="list"
        aria-label={label}
        className="flex w-full flex-col lg:h-full lg:flex-row lg:justify-center"
      >
        {items.map((item, index) => {
          const isActive = index === active;
          const panelId = `${baseId}-panel-${index}`;
          const panelVars = {
            // Desktop : c'est la flex-basis qui s'anime, du rail à la largeur
            // ouverte. Laisser le panneau grandir dans l'espace libre
            // demanderait un max-width pour rester une bande portrait, et le
            // plafond mange l'essentiel de la course : le panneau l'atteint
            // tôt et la transition se lit comme un saut.
            // Mobile : c'est la hauteur du bloc image qui s'anime.
            "--hx-basis": isActive ? openBasis : "var(--hx-rail)",
            "--hx-img-h": isActive ? `${mobileImageHeight}px` : "0px",
          } as CSSProperties;

          return (
            <li
              key={`${item.title}-${index}`}
              style={panelVars}
              // Mobile : image au-dessus de la ligne de titre (le bouton reste
              // premier dans le DOM, donc dans l'ordre de lecture).
              className="flex flex-col-reverse border-b border-tpl-line last:border-b-0 lg:relative lg:block lg:h-full lg:min-w-0 lg:[flex-shrink:1] lg:[flex-grow:0] lg:[flex-basis:var(--hx-basis)] lg:border-b-0 lg:border-l lg:transition-[flex-basis] lg:duration-(--hx-t) lg:ease-[cubic-bezier(0.32,0.72,0,1)] lg:last:border-r lg:motion-reduce:transition-none"
            >
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={panelId}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") open(index);
                }}
                onFocus={() => open(index)}
                onClick={() => open(index)}
                className="relative block w-full cursor-pointer border-0 bg-transparent p-0 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink lg:absolute lg:inset-0 lg:h-full lg:overflow-hidden"
              >
                {/* Libellé. Titre en entier sous 1024 px (à la ligne si besoin) ; au-dessus, un rail le long
                    du bord gauche du panneau : titre en bas, meta en haut. */}
                <span
                  className={clsx(
                    "flex min-h-16 w-full items-center justify-between gap-3 overflow-hidden px-5 py-3 text-tpl-sm tracking-tight transition-colors duration-(--hx-t) ease-out motion-reduce:transition-none lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:min-h-0 lg:w-(--hx-rail) lg:flex-col-reverse lg:justify-between lg:px-0 lg:py-5",
                    isActive ? "text-tpl-ink" : "text-tpl-ink-muted"
                  )}
                >
                  <span className="min-w-0 text-balance break-words lg:rotate-180 lg:overflow-hidden lg:text-ellipsis lg:whitespace-nowrap lg:[text-orientation:sideways] lg:[writing-mode:vertical-rl]">
                    {item.title}
                  </span>
                  {item.meta ? (
                    <span
                      className={clsx(
                        "shrink-0 text-tpl-xs font-medium transition-opacity duration-(--hx-t) ease-out motion-reduce:transition-none lg:rotate-180 lg:whitespace-nowrap lg:[text-orientation:sideways] lg:[writing-mode:vertical-rl]",
                        // Sous lg, le meta cède la place au titre : replié, il
                        // sort de la mise en page mais reste lu par les
                        // lecteurs d'écran (sr-only) ; ouvert, il est à droite.
                        isActive ? "opacity-100" : "opacity-0 max-lg:sr-only"
                      )}
                    >
                      {item.meta}
                    </span>
                  ) : null}
                </span>
              </button>

              {/* Image. Dans le flux sous 1024 px (sa hauteur s'anime) ; au-dessus,
                  collée au panneau (c'est la largeur du panneau qui s'anime sous
                  elle). Hors du bouton : son `alt` ne s'ajoute pas au nom du
                  bouton, et elle ne reçoit pas le pointeur d'un panneau fermé. */}
              <div
                id={panelId}
                aria-hidden={!isActive}
                className={clsx(
                  "relative block h-(--hx-img-h) w-full overflow-hidden bg-tpl-line transition-[height,opacity] duration-(--hx-t) ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none lg:pointer-events-none lg:absolute lg:inset-y-2 lg:right-3 lg:left-(--hx-rail) lg:h-auto lg:w-auto lg:rounded-tpl lg:transition-opacity",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes={sizes}
                  priority={priority && index === defaultIndex}
                  draggable={false}
                  className="object-cover"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
