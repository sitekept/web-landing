import {
  Award,
  Check,
  ClipboardCheck,
  Clock,
  Cpu,
  FileText,
  LocateFixed,
  MapPin,
  Microscope,
  ParkingCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  TrainFront,
  UserRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { TemplateHeading } from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import type { DentisteIconKey } from "@/content/templates/dentiste";
import { cn } from "@/lib/utils";

/**
 * Table des icônes du template : une entrée par clé `icon` de la copie
 * (`src/content/templates/dentiste.ts`). Le type `Record<DentisteIconKey, …>`
 * exige une entrée par clé utilisée et refuse une clé inconnue : une faute de
 * frappe dans la copie échoue au `type-check`.
 */
export const ICONS: Record<DentisteIconKey, LucideIcon> = {
  award: Award,
  "clipboard-check": ClipboardCheck,
  clock: Clock,
  cpu: Cpu,
  "file-text": FileText,
  "locate-fixed": LocateFixed,
  "map-pin": MapPin,
  microscope: Microscope,
  "parking-circle": ParkingCircle,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  syringe: Syringe,
  "train-front": TrainFront,
  "user-round": UserRound,
  workflow: Workflow,
};

/**
 * `sizes` des photos, calculés sur la largeur réellement rendue (gouttières
 * `px-4` / `sm:px-6` / `lg:px-8`, contenu plafonné à 1280 px, grille de 12
 * colonnes) puis réduits de 10 % : le navigateur choisit la plus petite
 * variante au moins égale à la valeur déclarée, donc au plus 1,3 fois la
 * largeur rendue entre deux paliers de Next (256, 384, 512, 640, 750…). Pas de
 * `vw` isolé précédé d'un espace : Next y lirait une largeur de départ et
 * retirerait les petites variantes.
 *
 * `COL5_MD` : 5 colonnes dès `md`. `COL5_LG` : 5 colonnes dès `lg`, pleine
 * largeur en dessous. `COL7_LG` : 7 colonnes dès `lg`.
 */
export const SIZES = {
  COL5_MD:
    "(min-width: 1344px) 451px, (min-width: 1024px) calc(37.5vw - 53px), (min-width: 768px) calc(37.5vw - 39px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
  COL5_LG:
    "(min-width: 1344px) 451px, (min-width: 1024px) calc(37.5vw - 53px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
  COL7_LG:
    "(min-width: 1344px) 651px, (min-width: 1024px) calc(52.5vw - 55px), (min-width: 640px) calc(90vw - 43px), calc(90vw - 29px)",
} as const;

/** Pastille d'icône : carré d'encre, pictogramme clair. Décorative. */
export function IconBadge({
  icon,
  className,
}: {
  icon: DentisteIconKey;
  className?: string;
}) {
  const Icon = ICONS[icon];

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-tpl bg-tpl-ink text-tpl-surface",
        className
      )}
    >
      <Icon className="size-5" />
    </span>
  );
}

/** Liste à coches, sans carte : une ligne par élément. */
export function CheckList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-tpl-sm">
          <Check
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-tpl-ink"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Ouverture des sous-pages : titre `h1` à gauche (7 colonnes), photo à droite
 * (5 colonnes) si la page en a une. Sans photo, le titre prend la largeur.
 */
export function PageIntro({
  eyebrow,
  title,
  description,
  image,
  ratio = "3/2",
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  ratio?: "3/2" | "4/5";
  children?: ReactNode;
}) {
  const wide = ratio === "4/5";
  const split = wide
    ? {
        grid: "md:grid-cols-12 md:items-center",
        text: "md:col-span-7",
        media: "md:col-span-5",
      }
    : {
        grid: "lg:grid-cols-12 lg:items-center",
        text: "lg:col-span-7",
        media: "lg:col-span-5",
      };

  return (
    <section className="border-b border-tpl-line bg-tpl-tint px-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-10 py-12 lg:gap-14 lg:py-16",
          image ? split.grid : null
        )}
      >
        <div className={image ? split.text : undefined}>
          <TemplateHeading
            as="h1"
            scale="title"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        {image ? (
          <div className={split.media}>
            <TemplateMedia
              src={image.src}
              alt={image.alt}
              ratio={ratio}
              sizes={wide ? SIZES.COL5_MD : SIZES.COL5_LG}
              priority
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
