"use client";

// Image Compare - aadixc0de - https://21st.dev/@aadixc0de/components/image-compare
// From chatcn, chat, voice and agent UI for shadcn: https://chatcn.dev
// MIT, voir LICENSE.

import { clsx } from "clsx";
import Image, { type ImageProps } from "next/image";
import {
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

import type { TemplateMediaRatio } from "../../media";

/**
 * Curseur avant / après (21st.dev, « Image Compare »). Voir `SOURCE.md` pour
 * l'origine, la licence et les modifications.
 *
 * Deux images superposées, séparées par une poignée : l'image « avant » est
 * rognée (`clip-path`) depuis son bord droit, l'image « après » reste dessous.
 * La poignée se déplace à la souris et au toucher (glisser, ou clic / tap pour
 * y sauter) et au clavier (flèches, Maj + flèches, PageUp / PageDown, Début,
 * Fin). Aucune animation : le composant n'a donc rien à couper sous
 * `prefers-reduced-motion`. Le toucher laisse défiler la page à la verticale
 * (`touch-action: pan-y`).
 *
 * Tous les textes (libellés visibles, nom de la poignée, `alt`, texte de
 * valeur) viennent des props, donc de la copie du template. Aucune fonction
 * n'est acceptée en prop pour que le composant reste appelable depuis une vue
 * serveur.
 */

export type ImageCompareImage = {
  src: ImageProps["src"];
  /** Obligatoire : texte de la copie, traduit. */
  alt: string;
};

export type ImageCompareProps = {
  /** Image visible du côté de départ (gauche). */
  before: ImageCompareImage;
  /** Image visible du côté de fin (droite), découverte quand la poignée recule. */
  after: ImageCompareImage;
  /** Libellé visible posé sur l'image « avant » (copie FR / EN), ex. « Avant ». */
  beforeLabel: string;
  /** Libellé visible posé sur l'image « après » (copie FR / EN), ex. « Après ». */
  afterLabel: string;
  /**
   * Nom accessible de la poignée (copie FR / EN), ex. « Comparer avant et
   * après ». Le contrôle est un `slider` : sans nom, un lecteur d'écran
   * n'annonce rien d'utile.
   */
  handleLabel: string;
  /**
   * Texte annoncé avec la valeur (`aria-valuetext`), avec les jetons
   * `{before}` et `{after}` remplacés par les pourcentages visibles de chaque
   * image, ex. « {before} % avant, {after} % après ». Sans lui, le lecteur
   * d'écran annonce le nombre brut.
   */
  valueText?: string;
  /** Ratio du cadre, comme `TemplateMedia` : l'espace est réservé avant le chargement. */
  ratio: TemplateMediaRatio;
  /** Obligatoire : `sizes` de `next/image` (largeur réelle du cadre). */
  sizes: string;
  /** Charge en priorité les deux images (image visible sans défilement). */
  priority?: boolean;
  /** Part de l'image « avant » visible au départ, de 0 à 100 (50 par défaut). */
  defaultPosition?: number;
  /** Pas des flèches en % (1 par défaut ; avec Maj : 10). */
  step?: number;
  /** Posé sur le cadre (largeur, marges…). */
  className?: string;
};

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

/** Distance (px) à partir de laquelle un geste tactile devient un glissement et non un défilement. */
const TOUCH_SLOP = 6;

const clamp = (n: number) => Math.min(100, Math.max(0, n));

/**
 * Pastille de libellé posée sur une image : teinte inverse, lisible sur toute
 * photo. La poignée et le trait (plus bas) utilisent la même paire `inverse` /
 * `inverse-ink`, que le bloc `[data-tone="inverse"]` de `globals.css` ne remappe
 * pas (contrairement à `raised`, `ink` et `surface`) : un ton, plus un liseré et
 * un halo de l'autre, pour rester lisibles sur photo claire comme sombre.
 */
const CHIP =
  "pointer-events-none absolute top-3 z-10 inline-flex items-center rounded-tpl-pill bg-tpl-inverse/80 px-3 py-1 font-tpl-text text-tpl-xs font-medium whitespace-nowrap text-tpl-inverse-ink";

export function ImageCompare({
  before,
  after,
  beforeLabel,
  afterLabel,
  handleLabel,
  valueText,
  ratio,
  sizes,
  priority = false,
  defaultPosition = 50,
  step = 1,
  className,
}: ImageCompareProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const gripRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(clamp(defaultPosition));
  const gesture = useRef<{
    id: number;
    x: number;
    dragging: boolean;
    touch: boolean;
  } | null>(null);

  const fromPointer = (clientX: number) => {
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return null;
    return clamp(((clientX - rect.left) / rect.width) * 100);
  };

  const moveTo = (clientX: number) => {
    const next = fromPointer(clientX);
    if (next !== null) setPosition(Math.round(next * 100) / 100);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const touch = event.pointerType !== "mouse";
    gesture.current = {
      id: event.pointerId,
      x: event.clientX,
      dragging: !touch,
      touch,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    // La poignée garde le focus : les flèches marchent juste après un clic.
    event.preventDefault();
    gripRef.current?.focus({ preventScroll: true });
    if (!touch) moveTo(event.clientX);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    if (!g || g.id !== event.pointerId) return;
    if (!g.dragging) {
      if (Math.abs(event.clientX - g.x) < TOUCH_SLOP) return;
      g.dragging = true;
    }
    moveTo(event.clientX);
  };

  const endGesture = (
    event: ReactPointerEvent<HTMLDivElement>,
    cancelled: boolean
  ) => {
    const g = gesture.current;
    if (!g || g.id !== event.pointerId) return;
    gesture.current = null;
    // Un simple tap tactile saute à l'endroit touché, comme un clic.
    if (!cancelled && g.touch && !g.dragging) moveTo(event.clientX);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const unit = event.shiftKey ? step * 10 : step;
    let next: number | undefined;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        next = position + unit;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        next = position - unit;
        break;
      case "PageUp":
        next = position + 10;
        break;
      case "PageDown":
        next = position - 10;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = 100;
        break;
      default:
        return;
    }
    event.preventDefault();
    setPosition(clamp(next));
  };

  const rounded = Math.round(position);

  return (
    // La surface capte le pointeur ; la poignée est le curseur manipulable au clavier.
    <div
      ref={rootRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={(event) => endGesture(event, false)}
      onPointerCancel={(event) => endGesture(event, true)}
      className={clsx(
        "relative isolate w-full cursor-ew-resize touch-pan-y overflow-hidden rounded-tpl bg-tpl-line select-none",
        RATIO[ratio],
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes={sizes}
          priority={priority}
          draggable={false}
          className="object-cover"
        />
        <span className={clsx(CHIP, "end-3")}>{afterLabel}</span>
      </div>
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes={sizes}
          priority={priority}
          draggable={false}
          className="object-cover"
        />
        <span className={clsx(CHIP, "start-3")}>{beforeLabel}</span>
      </div>

      {/* Piste pleine taille : la poignée se déplace par `left`, sans recalcul de mise en page. */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-tpl-inverse-ink shadow-[0_0_0_1px_var(--tpl-inverse),0_1px_6px_var(--tpl-inverse)]"
          style={{ left: `${position}%` }}
        />
        <div
          ref={gripRef}
          role="slider"
          tabIndex={0}
          aria-label={handleLabel}
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={rounded}
          aria-valuetext={
            valueText
              ? valueText
                  .replace("{before}", String(rounded))
                  .replace("{after}", String(100 - rounded))
              : undefined
          }
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-tpl-pill border-2 border-tpl-inverse bg-tpl-inverse-ink text-tpl-inverse shadow-[0_0_0_1px_var(--tpl-inverse-ink),0_2px_10px_var(--tpl-inverse)] before:absolute before:-inset-1.5 before:content-[''] focus-visible:ring-2 focus-visible:ring-tpl-accent focus-visible:ring-offset-2 focus-visible:ring-offset-tpl-inverse focus-visible:outline-none"
          style={{ left: `${position}%` }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 7-5 5 5 5" />
            <path d="m15 7 5 5-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
