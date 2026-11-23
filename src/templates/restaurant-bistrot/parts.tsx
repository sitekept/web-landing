import type { ReactNode } from "react";

/**
 * Padding haut de la première section d'une page : l'en-tête `floating` passe
 * au-dessus du premier bloc et ne réserve aucune place, `--tpl-header-offset`
 * (gap + carte) la dégage.
 */
export const FIRST_SECTION_TOP = "pt-[calc(var(--tpl-header-offset)+6rem)]";

/** Horaires : une rangée jour / heures par ligne, filet entre les lignes. */
export function HoursList({
  rows,
  className,
}: {
  rows: readonly { day: string; time: string }[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {rows.map((row) => (
        <div
          key={row.day}
          className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-tpl-line py-3 first:pt-0 last:border-b-0"
        >
          <dt className="text-tpl-sm text-tpl-ink-muted">{row.day}</dt>
          <dd className="text-tpl-base font-semibold tabular-nums">
            {row.time}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Une information (adresse, téléphone, accès) : libellé discret puis valeur. */
export function InfoItem({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <dt className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-eyebrow uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-tpl-base text-tpl-ink">{children}</dd>
    </div>
  );
}
