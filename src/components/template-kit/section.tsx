import { useId, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Section et en-tête du kit de templates.
 *
 * Remplace les `*Section` redéclarées par chaque démo (`ClinicSection`,
 * `SalonSection`…). Toutes les valeurs visuelles passent par les tokens
 * `--tpl-*` posés sur l'élément `[data-template]` (voir
 * `src/lib/template-theme.ts` et `src/app/globals.css`).
 *
 * Règle du kit : un nouveau besoin visuel devient d'abord un token. Il ne
 * devient un enum (prop) que s'il change le DOM ou la structure, et jamais un
 * nom de template.
 *
 * `tone="inverse"` pose `data-tone="inverse"` : la règle CSS associée
 * (globals.css) rebinde `--tpl-ink`, `--tpl-ink-muted`, `--tpl-line`,
 * `--tpl-surface` et `--tpl-raised` pour que les descendants restent lisibles.
 */

export type TemplateHeadingLevel = "h1" | "h2" | "h3";
export type TemplateTitleScale = "display" | "title" | "subtitle";
export type TemplateSectionDensity = "compact" | "regular" | "spacious";
export type TemplateSectionTone =
  | "surface"
  | "raised"
  | "tint"
  | "inverse"
  | "bare";
export type TemplateSectionWidth = "wide" | "narrow";
export type TemplateAlign = "start" | "center";

const TITLE_SCALE: Record<TemplateTitleScale, string> = {
  display: "text-tpl-3xl",
  title: "text-tpl-2xl",
  subtitle: "text-tpl-xl",
};

const DESCRIPTION_SCALE: Record<TemplateTitleScale, string> = {
  display: "text-tpl-lg",
  title: "text-tpl-lg",
  subtitle: "text-tpl-base",
};

const HEADING_ALIGN: Record<TemplateAlign, string> = {
  start: "text-left",
  center: "mx-auto text-center",
};

const DESCRIPTION_ALIGN: Record<TemplateAlign, string> = {
  start: "",
  center: "mx-auto",
};

const DENSITY: Record<TemplateSectionDensity, string> = {
  compact: "py-[calc(var(--tpl-space-section)*0.6)]",
  regular: "py-tpl-section",
  spacious: "py-[calc(var(--tpl-space-section)*1.4)]",
};

const TONE: Record<TemplateSectionTone, string> = {
  surface: "bg-tpl-surface text-tpl-ink",
  raised: "bg-tpl-raised text-tpl-ink",
  tint: "bg-tpl-tint text-tpl-ink",
  inverse: "bg-tpl-inverse text-tpl-inverse-ink",
  bare: "",
};

const WIDTH: Record<TemplateSectionWidth, string> = {
  wide: "max-w-7xl",
  narrow: "max-w-5xl",
};

export type TemplateHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  /** Rendue dans un `<p>` : contenu en ligne uniquement. */
  description?: ReactNode;
  as?: TemplateHeadingLevel;
  scale?: TemplateTitleScale;
  align?: TemplateAlign;
  /** Posé sur l'élément titre (cible d'`aria-labelledby`). */
  id?: string;
  className?: string;
};

export function TemplateHeading({
  eyebrow,
  title,
  description,
  as: Title = "h2",
  scale = "title",
  align = "start",
  id,
  className,
}: TemplateHeadingProps) {
  return (
    <div className={cn("max-w-4xl", HEADING_ALIGN[align], className)}>
      {eyebrow ? (
        <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Title
        id={id}
        className={cn(
          // Césure réservée aux mots de 15 caractères et plus : hyphens-auto +
          // text-balance coupait des mots qui tenaient sur la ligne
          // (« mon-tage », « be-fore »). Chromium compte aussi l'élision et la
          // ponctuation collée (« d’intervention » = 14, « plomberie : » = 11).
          // Sans hyphenate-limit-chars (WebKit 18) on reste en hyphens manuel.
          // overflow-wrap:anywhere reste le filet (break-words ne réduit pas la
          // largeur minimale) : un mot plus large que la ligne ne déborde jamais
          // (358 px en display mobile).
          "font-tpl-display font-(weight:--tpl-display-weight) text-balance [overflow-wrap:anywhere] supports-[hyphenate-limit-chars:15_4_4]:hyphens-auto supports-[hyphenate-limit-chars:15_4_4]:[hyphenate-limit-chars:15_4_4]",
          TITLE_SCALE[scale],
          eyebrow ? "mt-4" : null
        )}
      >
        {title}
      </Title>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-tpl-measure text-pretty text-tpl-ink-muted",
            DESCRIPTION_SCALE[scale],
            DESCRIPTION_ALIGN[align]
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export type TemplateSectionProps = {
  eyebrow?: ReactNode;
  /** Sans titre, aucun en-tête n'est rendu (eyebrow et description compris). */
  title?: ReactNode;
  description?: ReactNode;
  as?: TemplateHeadingLevel;
  titleScale?: TemplateTitleScale;
  density?: TemplateSectionDensity;
  tone?: TemplateSectionTone;
  width?: TemplateSectionWidth;
  align?: TemplateAlign;
  id?: string;
  className?: string;
  children?: ReactNode;
};

export function TemplateSection({
  eyebrow,
  title,
  description,
  as = "h2",
  titleScale = "title",
  density = "regular",
  tone = "surface",
  width = "wide",
  align = "start",
  id,
  className,
  children,
}: TemplateSectionProps) {
  const generatedId = useId();
  const hasHeading = title !== undefined && title !== null && title !== "";
  const titleId = id ? `${id}-titre` : `${generatedId}-titre`;

  return (
    <section
      id={id}
      data-tone={tone}
      aria-labelledby={hasHeading ? titleId : undefined}
      className={cn(
        "px-4 font-tpl-text sm:px-6 lg:px-8",
        DENSITY[density],
        TONE[tone],
        className
      )}
    >
      <div className={cn("mx-auto", WIDTH[width])}>
        {hasHeading ? (
          <TemplateHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            as={as}
            scale={titleScale}
            align={align}
            id={titleId}
          />
        ) : null}
        {children ? (
          <div className={hasHeading ? "mt-10 sm:mt-12" : undefined}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
