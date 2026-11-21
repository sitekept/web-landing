// Testimonials with Marquee - serafimcloud - https://21st.dev/@serafimcloud/components/testimonials-with-marquee
// MIT, voir LICENSE.

import { Star } from "lucide-react";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

/**
 * Bande d'avis défilante (21st.dev, « Testimonials with Marquee »).
 * Voir `SOURCE.md` pour l'origine, la licence et les modifications.
 *
 * Composant serveur : le défilement est en CSS pur (`animate-tpl-marquee`,
 * keyframes dans `src/app/globals.css`). Il ne rend que la bande de cartes ;
 * le titre et la description de la section viennent de `TemplateSection`.
 *
 * Mécanique : deux pistes identiques côte à côte, chacune au moins aussi large
 * que la bande (`min-w-full`). Les deux glissent de « 100 % d'une piste + un
 * espace » vers la gauche (vers la droite en `dir="rtl"`), puis la boucle
 * repart : la seconde piste prend exactement la place de la première.
 * La seconde piste est un décor pour la boucle : `aria-hidden`, donc chaque
 * avis n'est lu qu'une fois par un lecteur d'écran.
 *
 * Accessibilité :
 * - la bande est une région nommée (`label`, issu de la copie) et focalisable :
 *   pause au survol (pointeur) et au focus (clavier), sans quoi un défilement
 *   de plus de 5 secondes ne pourrait pas être arrêté au clavier ;
 * - avec `prefers-reduced-motion: reduce`, aucune animation : la piste
 *   dupliquée disparaît, les cartes passent à la ligne et les fondus tombent.
 *
 * Aucune photo d'avatar (les auteurs sont fictifs) : initiales sur une
 * pastille `bg-tpl-accent`, ou rien (`initials={false}`).
 *
 * Tous les textes (avis, noms, libellés de note, nom de la bande) viennent des
 * props, donc de la copie FR / EN du template.
 */

export type TestimonialMarqueeTone = "surface" | "raised" | "inverse";

type RatingValue = 1 | 2 | 3 | 4 | 5;

/** Une note exige son texte accessible, déjà formaté (ex. « Note : 5 sur 5 »). */
type TestimonialRating =
  | { rating: RatingValue; ratingLabel: string }
  | { rating?: undefined; ratingLabel?: undefined };

export type TestimonialMarqueeItem = {
  quote: string;
  name: string;
  /** Précision sous le nom : ville, prestation, ancienneté… */
  detail?: string;
} & TestimonialRating;

export type TestimonialsMarqueeProps = {
  items: readonly TestimonialMarqueeItem[];
  /** Nom accessible de la bande (copie FR / EN), ex. « Avis de patients ». */
  label: string;
  /** Durée d'un tour complet, en secondes. Plus il y a de cartes, plus il faut l'augmenter. */
  durationSeconds?: number;
  /**
   * Fond sur lequel la bande est posée : couleur des fondus de bord. `inverse`
   * se pose dans une `TemplateSection tone="inverse"` (c'est elle qui rebinde
   * l'encre et les cartes) ; étoiles et pastilles passent alors en
   * `inverse-ink`, car l'accent d'un template est rarement lisible sur son fond inverse.
   */
  tone?: TestimonialMarqueeTone;
  /** Pastille d'initiales avant le nom (`true` par défaut). */
  initials?: boolean;
  className?: string;
};

/** Classes littérales : Tailwind ne génère pas de classe construite à la volée. */
const FADE_FROM: Record<TestimonialMarqueeTone, string> = {
  surface: "from-tpl-surface",
  raised: "from-tpl-raised",
  inverse: "from-tpl-inverse",
};

/** Étoile pleine et pastille d'initiales : l'accent, sauf sur fond inverse. */
const STAR_ON: Record<TestimonialMarqueeTone, string> = {
  surface: "fill-current text-tpl-accent",
  raised: "fill-current text-tpl-accent",
  inverse: "fill-current text-tpl-inverse-ink",
};

const BADGE: Record<TestimonialMarqueeTone, string> = {
  surface: "bg-tpl-accent text-tpl-accent-ink",
  raised: "bg-tpl-accent text-tpl-accent-ink",
  inverse: "bg-tpl-inverse-ink text-tpl-inverse",
};

const RATINGS: readonly RatingValue[] = [1, 2, 3, 4, 5];

/** Une ou deux initiales (premier caractère de chacun des deux premiers mots). */
function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => Array.from(word)[0])
    .join("")
    .toLocaleUpperCase();
}

function Stars({
  rating,
  label,
  tone,
}: {
  rating: RatingValue;
  label: string | undefined;
  tone: TestimonialMarqueeTone;
}) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className="flex gap-0.5"
    >
      {RATINGS.map((value) => (
        <Star
          key={value}
          aria-hidden="true"
          className={cn(
            "size-4",
            value <= rating ? STAR_ON[tone] : "fill-none text-tpl-line"
          )}
        />
      ))}
    </div>
  );
}

function Card({
  item,
  initials,
  tone,
}: {
  item: TestimonialMarqueeItem;
  initials: boolean;
  tone: TestimonialMarqueeTone;
}) {
  return (
    <li className="flex w-72 shrink-0 sm:w-80">
      <figure className="flex w-full flex-col gap-4 rounded-tpl border border-tpl-line bg-tpl-raised p-5 text-start text-tpl-ink shadow-tpl-sm sm:p-6">
        {item.rating ? (
          <Stars rating={item.rating} label={item.ratingLabel} tone={tone} />
        ) : null}
        <blockquote className="text-tpl-sm text-tpl-ink">
          <p>{item.quote}</p>
        </blockquote>
        <figcaption className="mt-auto flex items-center gap-3">
          {initials ? (
            <span
              aria-hidden="true"
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-tpl-pill text-tpl-sm font-semibold",
                BADGE[tone]
              )}
            >
              {initialsOf(item.name)}
            </span>
          ) : null}
          <span className="flex min-w-0 flex-col">
            <span className="text-tpl-sm leading-tight font-semibold text-tpl-ink">
              {item.name}
            </span>
            {item.detail ? (
              <span className="text-tpl-xs text-tpl-ink-muted">
                {item.detail}
              </span>
            ) : null}
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

const TRACK =
  "flex min-w-full shrink-0 animate-tpl-marquee items-stretch justify-around gap-(--tpl-marquee-gap) rtl:[--tpl-marquee-dir:-1] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:min-w-0 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center";

export function TestimonialsMarquee({
  items,
  label,
  durationSeconds = 40,
  tone = "surface",
  initials = true,
  className,
}: TestimonialsMarqueeProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label={label}
      // Focalisable : le focus met la bande en pause (voir l'en-tête).
      tabIndex={0}
      style={
        {
          "--tpl-marquee-duration": `${durationSeconds}s`,
        } as CSSProperties
      }
      className={cn(
        "group relative w-full overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tpl-ink",
        className
      )}
    >
      <div className="flex gap-(--tpl-marquee-gap) p-2 [--tpl-marquee-gap:1rem]">
        <ul role="list" className={TRACK}>
          {items.map((item, index) => (
            <Card key={index} item={item} initials={initials} tone={tone} />
          ))}
        </ul>
        {/* Copie pour la boucle : ignorée des lecteurs d'écran, absente en reduced motion. */}
        <ul
          role="list"
          aria-hidden="true"
          className={cn(TRACK, "motion-reduce:hidden")}
        >
          {items.map((item, index) => (
            <Card key={index} item={item} initials={initials} tone={tone} />
          ))}
        </ul>
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r to-transparent motion-reduce:hidden sm:w-1/6",
          FADE_FROM[tone]
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l to-transparent motion-reduce:hidden sm:w-1/6",
          FADE_FROM[tone]
        )}
      />
    </div>
  );
}
