import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import type { TemplateLocale } from "@/content/templates/types";
import { cn } from "@/lib/utils";

/**
 * Lien-bouton du kit de templates, basé sur `next/link`.
 *
 * Remplace les `*Link` / `*Button` redéclarés par chaque démo. Les couleurs
 * viennent uniquement des tokens `--tpl-*` (voir `src/lib/template-theme.ts`) ;
 * le mouvement est en CSS pur et coupé sous `prefers-reduced-motion`.
 *
 * Règle du kit : un nouveau besoin visuel devient d'abord un token. Il ne
 * devient un enum (prop) que s'il change le DOM ou la structure, et jamais un
 * nom de template.
 *
 * `variant="inverse"` sert sur un fond inverse : il s'appuie sur
 * `--tpl-inverse-ink` / `--tpl-inverse`, que `[data-tone="inverse"]` ne
 * rebinde pas, et reste donc correct dedans comme dehors.
 */

export type TemplateLinkVariant = "solid" | "outline" | "ghost" | "inverse";
export type TemplateLinkShape = "radius" | "pill" | "square";
export type TemplateLinkSize = "sm" | "md";

const VARIANT: Record<TemplateLinkVariant, string> = {
  solid:
    "border-transparent bg-tpl-accent text-tpl-accent-ink hover:bg-tpl-accent/90",
  outline:
    "border-tpl-line bg-transparent text-tpl-ink hover:border-tpl-ink/40 hover:bg-tpl-ink/5",
  ghost: "border-transparent bg-transparent text-tpl-ink hover:bg-tpl-ink/5",
  inverse:
    "border-transparent bg-tpl-inverse-ink text-tpl-inverse hover:bg-tpl-inverse-ink/90",
};

const SHAPE: Record<TemplateLinkShape, string> = {
  radius: "rounded-tpl",
  pill: "rounded-tpl-pill",
  square: "rounded-none",
};

/** `md` : cible tactile de 44 px minimum (`min-h-11`). */
const SIZE: Record<TemplateLinkSize, string> = {
  sm: "min-h-9 gap-1.5 px-4 py-1.5",
  md: "min-h-11 gap-2 px-5 py-2.5",
};

/**
 * Taille de texte, volontairement hors de `cn()` : tailwind-merge ne connaît
 * pas l'échelle `text-tpl-*` et la confond avec les couleurs `text-tpl-*`
 * (`text-tpl-accent-ink text-tpl-sm` deviendrait `text-tpl-sm`).
 */
const TEXT_SIZE: Record<TemplateLinkSize, string> = {
  sm: "text-tpl-xs",
  md: "text-tpl-sm",
};

/** Texte lecteur d'écran des liens qui s'ouvrent dans un nouvel onglet. */
const NEW_TAB_LABEL: Record<TemplateLocale, string> = {
  fr: "(s’ouvre dans un nouvel onglet)",
  en: "(opens in a new tab)",
};

export type TemplateLinkProps = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  variant?: TemplateLinkVariant;
  shape?: TemplateLinkShape;
  /** Icône après le libellé ; flèche par défaut, `false` pour aucune. */
  icon?: ReactNode | false;
  /** Ouvre dans un nouvel onglet (`target="_blank"`, `rel` sûr). */
  external?: boolean;
  /** Langue du texte lecteur d'écran des liens externes (`fr` par défaut). */
  locale?: TemplateLocale;
  size?: TemplateLinkSize;
  className?: string;
};

export function TemplateLink({
  href,
  children,
  variant = "solid",
  shape = "radius",
  icon,
  external = false,
  locale = "fr",
  size = "md",
  className,
}: TemplateLinkProps) {
  const renderedIcon =
    icon === false
      ? null
      : (icon ?? <ArrowRight aria-hidden="true" className="size-4" />);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${cn(
        "inline-flex items-center justify-center border font-tpl-text leading-snug font-semibold",
        // v4 déplace via `translate`, pas `transform` : `transform-none` serait
        // sans effet, et `motion-reduce:hover:` garde la spécificité de `hover:`.
        "transition duration-200 ease-out hover:-translate-y-0.5",
        "motion-reduce:transition-none motion-reduce:hover:translate-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink",
        VARIANT[variant],
        SHAPE[shape],
        SIZE[size],
        className
      )} ${TEXT_SIZE[size]}`}
    >
      {children}
      {renderedIcon}
      {external ? (
        <span className="sr-only">{NEW_TAB_LABEL[locale]}</span>
      ) : null}
    </Link>
  );
}
