import {
  TemplateHeading,
  TemplateSection,
  type TemplateLocale,
} from "@/components/template-kit";
import { TemplateMedia } from "@/components/template-kit/media";
import { expertComptable } from "@/content/templates/expert-comptable";
import { getTemplateCopy } from "@/content/templates/types";

import { ColumnLabel } from "./parts";

/**
 * Idée forte du template : l'année lue comme un calendrier d'échéances. Une
 * ligne par échéance, trois colonnes (nous faisons, vous transmettez, vous
 * recevez). Les libellés de colonne restent dans le DOM (lecteurs d'écran) et
 * ne sont visibles qu'en dessous de `md`, où l'en-tête de tableau disparaît.
 */
export function MissionsCalendar({ locale }: { locale: TemplateLocale }) {
  const calendar = getTemplateCopy(expertComptable, locale).missionsPage
    .calendar;
  const columns = [
    { key: "we", label: calendar.columns.we },
    { key: "you", label: calendar.columns.you },
    { key: "receive", label: calendar.columns.receive },
  ] as const;

  return (
    <TemplateSection tone="raised">
      <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <TemplateHeading
          eyebrow={calendar.eyebrow}
          title={calendar.title}
          description={calendar.description}
        />
        <TemplateMedia
          src={calendar.image.src}
          alt={calendar.image.alt}
          ratio="3/2"
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
      </div>

      <div className="mt-12 border-t-2 border-tpl-ink">
        <div
          aria-hidden="true"
          className="hidden gap-x-8 border-b border-tpl-line py-3 md:grid md:grid-cols-[11rem_1fr_1fr_1fr]"
        >
          <ColumnLabel>{calendar.columns.period}</ColumnLabel>
          {columns.map((column) => (
            <ColumnLabel key={column.key}>{column.label}</ColumnLabel>
          ))}
        </div>
        <ol>
          {calendar.rows.map((row) => (
            <li
              key={row.period}
              className="grid gap-x-8 gap-y-4 border-b border-tpl-line py-6 md:grid-cols-[11rem_1fr_1fr_1fr]"
            >
              <h3 className="font-tpl-display text-tpl-lg leading-tpl-display font-(weight:--tpl-display-weight) text-tpl-accent">
                {row.period}
              </h3>
              {columns.map((column) => (
                <div key={column.key}>
                  <p className="text-tpl-xs font-semibold tracking-tpl-eyebrow text-tpl-ink-muted uppercase md:sr-only">
                    {column.label}
                  </p>
                  <p className="mt-1 text-tpl-sm md:mt-0">{row[column.key]}</p>
                </div>
              ))}
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-5 max-w-tpl-measure text-tpl-sm text-tpl-ink-muted">
        {calendar.note}
      </p>
    </TemplateSection>
  );
}
