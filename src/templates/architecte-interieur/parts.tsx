import Link from "next/link";

import {
  TemplateLink,
  TemplateSection,
  templateHref,
  type TemplateLocale,
} from "@/components/template-kit";
import {
  architecteInterieur,
  type ArchitecteInterieurCopy,
} from "@/content/templates/architecte-interieur";
import { getTemplateCopy } from "@/content/templates/types";

/** Éléments communs aux vues du template architecte-interieur. */

export type Project = ArchitecteInterieurCopy["projects"]["items"][number];
export type FactLabels = ArchitecteInterieurCopy["projects"]["factLabels"];

export const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpl-ink";

/**
 * Attribut `sizes` des photos, calculé sur la grille à 12 colonnes (espacement
 * de 3 rem à partir de `lg`, colonne latérale de 290 px à partir de `xl`).
 * `wide` : contenu en `7xl` ; `narrow` : contenu en `5xl`. Les valeurs en `calc()`
 * échappent au filtre « vw » de next/image, qui sinon n'offre rien sous 640 px.
 * Sous `lg`, toute photo est en colonne unique, à la largeur du contenu.
 */
const BELOW_LG = "(min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)";

const FROM_LG = {
  wide: {
    5: "(min-width: 1634px) 513px, (min-width: 1280px) calc(41.67vw - 167px), (min-width: 1024px) calc(41.67vw - 47px)",
    7: "(min-width: 1634px) 719px, (min-width: 1280px) calc(58.33vw - 235px), (min-width: 1024px) calc(58.33vw - 65px)",
  },
  narrow: {
    5: "(min-width: 1378px) 407px, (min-width: 1280px) calc(41.67vw - 167px), (min-width: 1088px) 407px, (min-width: 1024px) calc(41.67vw - 47px)",
    7: "(min-width: 1378px) 569px, (min-width: 1280px) calc(58.33vw - 235px), (min-width: 1088px) 569px, (min-width: 1024px) calc(58.33vw - 65px)",
  },
} as const;

export function photoSizes(
  cols: 5 | 7,
  width: "wide" | "narrow" = "wide"
): string {
  return `${FROM_LG[width][cols]}, ${BELOW_LG}`;
}

/**
 * Photo 3/2 affichée dans un cadre 4/5 (`PORTRAIT` : sur mobile et à partir de
 * `lg`) : en `object-fit: cover` elle est dimensionnée sur la hauteur du cadre,
 * sa largeur utile est donc 1,875 fois celle du cadre (4/5 -> 3/2 : 1,25 × 1,5).
 * Valeurs de `FROM_LG[wide][7]` et `BELOW_LG` × 1,875, réduites de 10 %, puis
 * plafonnées à 1200 px (variante suivante : 1920 px, agrandie de 1,4). De `sm` à
 * `lg` le cadre est en 3/2 comme la source : largeur du cadre, sans facteur.
 */
export const LANDSCAPE_IN_PORTRAIT_SIZES =
  "(min-width: 1500px) 1200px, (min-width: 1280px) calc(98.4vw - 397px), (min-width: 1024px) calc(98.4vw - 110px), (min-width: 640px) calc(100vw - 48px), calc(168.75vw - 54px)";

/** Largeur d'un bandeau pleine largeur de section `5xl`. */
export const BANNER_SIZES =
  "(min-width: 1378px) 1024px, (min-width: 1280px) calc(100vw - 354px), (min-width: 1088px) 1024px, (min-width: 1024px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)";

/**
 * Photo portrait : en 3/2 de `sm` à `lg` (elle prend la largeur du bloc, sans
 * trou sur les côtés), en 4/5 sur mobile et à partir de `lg`.
 */
export const PORTRAIT = "sm:aspect-[3/2] lg:aspect-[4/5]";

/** Titre de bloc (h2 / h3 secondaire) : même échelle partout. */
export const BLOCK_TITLE =
  "font-tpl-display text-tpl-xl leading-tpl-display font-(weight:--tpl-display-weight) [overflow-wrap:anywhere] text-balance";

/** Titre d'étape ou de ligne de liste : un cran sous `BLOCK_TITLE`. */
export const ROW_TITLE =
  "font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) [overflow-wrap:anywhere] text-balance";

/** Sur-titre en petites capitales espacées. */
export const EYEBROW =
  "text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase";

/** Fiche chiffrée d'un projet : quatre repères, libellé au-dessus de la valeur. */
export function ProjectFacts({
  project,
  labels,
}: {
  project: Project;
  labels: FactLabels;
}) {
  const rows = [
    [labels.surface, project.surface],
    [labels.duration, project.duration],
    [labels.works, project.works],
    [labels.mission, project.mission],
  ] as const;

  return (
    <dl className="grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,9rem),1fr))] gap-x-6 gap-y-5">
      {rows.map(([label, value]) => (
        <div key={label} className="border-t border-tpl-ink pt-3">
          <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase">
            {label}
          </dt>
          <dd className="mt-1 text-tpl-sm font-medium text-pretty [overflow-wrap:anywhere] tabular-nums">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Lien texte souligné, cible de 44 px. */
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center text-tpl-sm font-semibold underline underline-offset-4 ${FOCUS}`}
    >
      {children}
    </Link>
  );
}

/**
 * Bandeau de fin de page, fond encre : proposition de rendez-vous, bouton
 * principal et numéro de téléphone du studio.
 */
export function CtaBand({
  locale,
  title,
  text,
}: {
  locale: TemplateLocale;
  title: string;
  text: string;
}) {
  const copy = getTemplateCopy(architecteInterieur, locale);
  const { paths } = architecteInterieur;

  return (
    <TemplateSection density="compact" tone="inverse" width="narrow">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
        <div>
          <h2 className={BLOCK_TITLE}>{title}</h2>
          <p className="mt-4 max-w-tpl-measure text-tpl-base text-pretty text-tpl-ink-muted">
            {text}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
          <TemplateLink
            href={templateHref(locale, paths.contact)}
            variant="inverse"
            shape="square"
          >
            {copy.cta.brief}
          </TemplateLink>
          <TemplateLink
            href={copy.common.phone.href}
            variant="outline"
            shape="square"
            icon={false}
            className="border-tpl-inverse-ink/60 text-tpl-inverse-ink tabular-nums hover:border-tpl-inverse-ink hover:bg-tpl-inverse-ink/10"
          >
            {copy.common.phone.label}
          </TemplateLink>
        </div>
      </div>
    </TemplateSection>
  );
}
